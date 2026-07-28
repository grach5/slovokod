import * as THREE from 'three';

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildNetworkGeometry(count, radius) {
  const rand = seededRandom(42);
  const points = [];
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = (1 + Math.sqrt(5)) * Math.PI * i;
    const jitter = 0.94 + rand() * 0.12;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius * jitter,
        y * radius * jitter,
        Math.sin(theta) * r * radius * jitter,
      ),
    );
  }

  const linePositions = [];
  const maxDist = radius * 0.62;
  for (let i = 0; i < points.length; i++) {
    let neighbours = 0;
    for (let j = i + 1; j < points.length && neighbours < 3; j++) {
      const d = points[i].distanceTo(points[j]);
      if (d < maxDist) {
        linePositions.push(points[i].x, points[i].y, points[i].z);
        linePositions.push(points[j].x, points[j].y, points[j].z);
        neighbours++;
      }
    }
  }

  const pointPositions = new Float32Array(points.length * 3);
  points.forEach((p, i) => {
    pointPositions[i * 3] = p.x;
    pointPositions[i * 3 + 1] = p.y;
    pointPositions[i * 3 + 2] = p.z;
  });

  return {pointPositions, linePositions: new Float32Array(linePositions)};
}

/**
 * Mounts a plain (non-React) Three.js network-globe animation into `canvas`,
 * sized to `container`. Returns a cleanup function. Kept deliberately
 * imperative/dependency-light (no @react-three/fiber) for predictable
 * behavior inside a client-only Docusaurus component.
 */
export function mountNetworkScene(canvas, container, {accentColor, lineColor, reduceMotion}) {
  const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 7);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));

  const group = new THREE.Group();
  scene.add(group);

  const {pointPositions, linePositions} = buildNetworkGeometry(140, 2.6);

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({
    color: lineColor,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
  });
  group.add(new THREE.LineSegments(lineGeo, lineMat));

  const pointGeo = new THREE.BufferGeometry();
  pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
  const pointMat = new THREE.PointsMaterial({
    color: accentColor,
    size: 0.055,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
  });
  group.add(new THREE.Points(pointGeo, pointMat));

  let pointerX = 0;
  let pointerY = 0;
  const handlePointerMove = (e) => {
    const rect = container.getBoundingClientRect();
    pointerX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointerY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
  };
  window.addEventListener('mousemove', handlePointerMove);

  function resize() {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;
    renderer.setSize(width, height, true);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  let raf = null;
  function animate() {
    raf = requestAnimationFrame(animate);
    if (!reduceMotion.current) {
      group.rotation.y += 0.0016;
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointerY * 0.15, 0.03);
      group.rotation.y += pointerX * 0.0004;
    }
    renderer.render(scene, camera);
  }
  animate();

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener('mousemove', handlePointerMove);
    lineGeo.dispose();
    lineMat.dispose();
    pointGeo.dispose();
    pointMat.dispose();
    renderer.dispose();
  };
}
