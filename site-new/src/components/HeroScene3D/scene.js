import * as THREE from 'three';

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function makeGlowSprite() {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.7)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function buildNetworkGeometry(count, radius, seed) {
  const rand = seededRandom(seed);
  const points = [];
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = (1 + Math.sqrt(5)) * Math.PI * i;
    const jitter = 0.9 + rand() * 0.2;
    points.push(
      new THREE.Vector3(
        Math.cos(theta) * r * radius * jitter,
        y * radius * jitter,
        Math.sin(theta) * r * radius * jitter,
      ),
    );
  }

  const linePositions = [];
  const maxDist = radius * 0.55;
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
  const pointSizes = new Float32Array(points.length);
  const pointColors = new Float32Array(points.length * 3);
  const colorA = new THREE.Color(0xb3801f);
  const colorB = new THREE.Color(0xe8c885);
  points.forEach((p, i) => {
    pointPositions[i * 3] = p.x;
    pointPositions[i * 3 + 1] = p.y;
    pointPositions[i * 3 + 2] = p.z;
    pointSizes[i] = 0.09 + rand() * 0.1;
    const mixed = colorA.clone().lerp(colorB, rand());
    pointColors[i * 3] = mixed.r;
    pointColors[i * 3 + 1] = mixed.g;
    pointColors[i * 3 + 2] = mixed.b;
  });

  return {
    pointPositions,
    pointSizes,
    pointColors,
    linePositions: new Float32Array(linePositions),
  };
}

function buildStarfield(count, radius, seed) {
  const rand = seededRandom(seed);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // random point inside a shell between radius*0.6 and radius
    const u = rand();
    const v = rand();
    const theta = u * Math.PI * 2;
    const phi = Math.acos(2 * v - 1);
    const r = radius * (0.75 + rand() * 0.35);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

/**
 * Mounts a plain (non-React) Three.js network-globe animation into `canvas`,
 * sized to `container`. Returns a cleanup function. Kept deliberately
 * imperative/dependency-light (no @react-three/fiber) for predictable
 * behavior inside a client-only Docusaurus component.
 *
 * `compact: true` renders a lighter version (fewer points, no starfield) for
 * secondary page heroes where the visualization is a supporting accent, not
 * the main focal point.
 */
export function mountNetworkScene(canvas, container, {lineColor, reduceMotion, compact = false, seed = 42}) {
  const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  const baseZ = compact ? 8.5 : 7;
  camera.position.set(0, 0, baseZ);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));

  const group = new THREE.Group();
  scene.add(group);

  const glowSprite = makeGlowSprite();
  const nodeCount = compact ? 90 : 260;
  const radius = compact ? 2.3 : 2.8;
  const {pointPositions, pointSizes, pointColors, linePositions} = buildNetworkGeometry(
    nodeCount,
    radius,
    seed,
  );

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({
    color: lineColor,
    transparent: true,
    opacity: 0.3,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  group.add(new THREE.LineSegments(lineGeo, lineMat));

  const pointGeo = new THREE.BufferGeometry();
  pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
  pointGeo.setAttribute('size', new THREE.BufferAttribute(pointSizes, 1));
  pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));
  const pointMat = new THREE.PointsMaterial({
    size: 0.16,
    map: glowSprite,
    vertexColors: true,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  group.add(new THREE.Points(pointGeo, pointMat));

  let starPoints = null;
  if (!compact) {
    const starPositions = buildStarfield(320, radius * 2.2, seed + 7);
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.045,
      map: glowSprite,
      color: lineColor,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);
  }

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
  let t = 0;
  function animate() {
    raf = requestAnimationFrame(animate);
    if (!reduceMotion.current) {
      t += 0.005;
      group.rotation.y += 0.0014;
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointerY * 0.15, 0.03);
      group.rotation.y += pointerX * 0.0004;
      camera.position.z = baseZ + Math.sin(t * 0.3) * 0.25;
      if (starPoints) starPoints.rotation.y -= 0.0004;
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
    glowSprite.dispose();
    if (starPoints) {
      starPoints.geometry.dispose();
      starPoints.material.dispose();
    }
    renderer.dispose();
  };
}
