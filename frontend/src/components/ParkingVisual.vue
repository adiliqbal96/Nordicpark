<template>
  <div ref="container" class="parking-3d"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let renderer, scene, camera, animId, patrolCar

function buildScene() {
  const w = container.value.clientWidth
  const h = container.value.clientHeight

  // ── Renderer ──
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(w, h)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.9
  container.value.appendChild(renderer.domElement)

  // ── Scene ──
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x080f1e)
  scene.fog = new THREE.FogExp2(0x080f1e, 0.045)

  // ── Camera ──
  camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100)
  camera.position.set(0, 14, 14)
  camera.lookAt(0, 0, 0)

  // ── Lights ──
  const ambient = new THREE.AmbientLight(0x1a2a4a, 2.5)
  scene.add(ambient)

  const sun = new THREE.DirectionalLight(0x4488ff, 3.5)
  sun.position.set(5, 14, 8)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.near = 0.5
  sun.shadow.camera.far = 60
  sun.shadow.camera.left = -20
  sun.shadow.camera.right = 20
  sun.shadow.camera.top = 20
  sun.shadow.camera.bottom = -20
  sun.shadow.bias = -0.001
  scene.add(sun)

  const fill = new THREE.DirectionalLight(0x002244, 1.2)
  fill.position.set(-8, 5, -5)
  scene.add(fill)

  // ── Ground (asphalt) ──
  const groundGeo = new THREE.PlaneGeometry(40, 30)
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x0d1a2e,
    roughness: 0.95,
    metalness: 0.05,
  })
  const ground = new THREE.Mesh(groundGeo, groundMat)
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  // ── Parking space lines ──
  addParkingLines()

  // ── Buildings (backdrop) ──
  addBuildings()

  // ── Parked cars ──
  const carDefs = [
    // Row 1 (z = -4.5), facing camera
    { x: -7.5, z: -4.5, color: 0x1a3a5c, violation: false },
    { x: -4.5, z: -4.5, color: 0x0f1f32, violation: false },
    { x: -1.5, z: -4.5, color: 0x2a0e0e, violation: true  },
    { x:  1.5, z: -4.5, color: 0x122038, violation: false },
    { x:  4.5, z: -4.5, color: 0x1d3650, violation: false },
    { x:  7.5, z: -4.5, color: null,     violation: false }, // empty
    // Row 2 (z = 4.5), facing away
    { x: -7.5, z:  4.5, color: 0x0f1f32, violation: false },
    { x: -4.5, z:  4.5, color: null,     violation: false }, // empty
    { x: -1.5, z:  4.5, color: 0x1a3a5c, violation: false },
    { x:  1.5, z:  4.5, color: 0x132035, violation: false },
    { x:  4.5, z:  4.5, color: 0x1d3650, violation: false },
    { x:  7.5, z:  4.5, color: 0x0f1f32, violation: false },
  ]

  carDefs.forEach(def => {
    if (def.color !== null) addCar(def.x, def.z, def.color, def.violation)
  })

  // ── NordicPark patrol car ──
  patrolCar = addPatrolCar()

  // ── Violation indicator light ──
  addViolationLight(-1.5, -4.5)
}

function addParkingLines() {
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff })

  // Lane dividers (rows of spaces)
  for (let x = -9; x <= 9; x += 3) {
    // Row 1 lines
    const geo1 = new THREE.PlaneGeometry(0.06, 3.6)
    const m1 = new THREE.Mesh(geo1, mat)
    m1.rotation.x = -Math.PI / 2
    m1.position.set(x, 0.01, -4.5)
    m1.material = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 })
    scene.add(m1)

    // Row 2 lines
    const m2 = m1.clone()
    m2.position.z = 4.5
    scene.add(m2)
  }

  // Curb lines
  const curbMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28 })
  const curb1 = new THREE.Mesh(new THREE.PlaneGeometry(18, 0.07), curbMat)
  curb1.rotation.x = -Math.PI / 2
  curb1.position.set(0, 0.01, -2.7)
  scene.add(curb1)

  const curb2 = curb1.clone()
  curb2.position.z = 2.7
  scene.add(curb2)

  // Lane center dashes
  for (let x = -8.5; x < 9; x += 1.8) {
    const dash = new THREE.Mesh(
      new THREE.PlaneGeometry(0.9, 0.05),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.14 })
    )
    dash.rotation.x = -Math.PI / 2
    dash.position.set(x, 0.01, 0)
    scene.add(dash)
  }
}

function addBuildings() {
  const buildingConfigs = [
    // Background buildings (far side)
    { x: -11, z: -11, w: 5,  h: 8,  d: 4,  color: 0x0c1828 },
    { x: -5,  z: -12, w: 4,  h: 12, d: 3.5, color: 0x0a1520 },
    { x:  0,  z: -11, w: 6,  h: 7,  d: 4,  color: 0x0d1a2a },
    { x:  6,  z: -12, w: 4,  h: 10, d: 3.5, color: 0x0b1624 },
    { x:  11, z: -11, w: 5,  h: 9,  d: 4,  color: 0x0c1828 },
    // Side buildings (left)
    { x: -13, z: -4,  w: 3.5, h: 6, d: 5,  color: 0x0a1520 },
    { x: -13, z:  2,  w: 3.5, h: 9, d: 5,  color: 0x0d1a2a },
    // Side buildings (right)
    { x:  13, z: -4,  w: 3.5, h: 7, d: 5,  color: 0x0a1520 },
    { x:  13, z:  2,  w: 3.5, h: 5, d: 5,  color: 0x0c1828 },
  ]

  buildingConfigs.forEach(b => {
    const geo = new THREE.BoxGeometry(b.w, b.h, b.d)
    const mat = new THREE.MeshStandardMaterial({
      color: b.color,
      roughness: 0.9,
      metalness: 0.1,
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(b.x, b.h / 2, b.z)
    mesh.castShadow = true
    mesh.receiveShadow = true
    scene.add(mesh)

    // Windows (emissive dots)
    addWindows(mesh, b.w, b.h, b.d, b.x, b.z)
  })
}

function addWindows(building, w, h, d, bx, bz) {
  const winMat = new THREE.MeshBasicMaterial({ color: 0x4477aa, transparent: true, opacity: Math.random() * 0.4 + 0.2 })
  const cols = Math.floor(w / 1.2)
  const rows = Math.floor(h / 1.4)
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (Math.random() < 0.55) {
        const win = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.45), winMat.clone())
        win.material.opacity = Math.random() * 0.5 + 0.15
        win.position.set(
          bx - w / 2 + 0.6 + c * 1.2,
          r * 1.4 + 0.8,
          bz + d / 2 + 0.01
        )
        scene.add(win)
      }
    }
  }
}

function addCar(x, z, color, isViolation) {
  const group = new THREE.Group()

  // Body
  const bodyMat = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.35,
    metalness: 0.6,
    ...(isViolation ? { emissive: 0x440000, emissiveIntensity: 0.4 } : {}),
  })
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.42, 2.6), bodyMat)
  body.position.y = 0.36
  body.castShadow = true
  group.add(body)

  // Cabin
  const cabinMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(color).multiplyScalar(1.25),
    roughness: 0.3,
    metalness: 0.4,
  })
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.38, 1.5), cabinMat)
  cabin.position.set(0, 0.76, -0.1)
  cabin.castShadow = true
  group.add(cabin)

  // Windshields (glass)
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x4488cc,
    transparent: true,
    opacity: 0.25,
    roughness: 0.05,
    metalness: 0.2,
  })
  const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.3, 0.05), glassMat)
  windshield.position.set(0, 0.72, 0.68)
  group.add(windshield)

  // Wheels
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 })
  const wheelGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.18, 12)
  const wheelPositions = [[-0.88, 0.18, 0.9], [0.88, 0.18, 0.9], [-0.88, 0.18, -0.9], [0.88, 0.18, -0.9]]
  wheelPositions.forEach(([wx, wy, wz]) => {
    const wheel = new THREE.Mesh(wheelGeo, wheelMat)
    wheel.rotation.z = Math.PI / 2
    wheel.position.set(wx, wy, wz)
    group.add(wheel)
  })

  // Taillights
  const lightMat = new THREE.MeshBasicMaterial({ color: isViolation ? 0xff2200 : 0xdd2200 })
  const lightGeo = new THREE.BoxGeometry(0.28, 0.1, 0.05)
  ;[-0.62, 0.62].forEach(lx => {
    const light = new THREE.Mesh(lightGeo, lightMat)
    light.position.set(lx, 0.38, -1.32)
    group.add(light)
  })

  group.position.set(x, 0, z)
  scene.add(group)
  return group
}

function addPatrolCar() {
  const group = new THREE.Group()

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x003fa0, roughness: 0.3, metalness: 0.6 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.42, 2.7), bodyMat)
  body.position.y = 0.36
  body.castShadow = true
  group.add(body)

  const cabinMat = new THREE.MeshStandardMaterial({ color: 0x0050cc, roughness: 0.3, metalness: 0.4 })
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.38, 1.5), cabinMat)
  cabin.position.set(0, 0.76, -0.1)
  group.add(cabin)

  // Yellow stripe
  const stripeMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 })
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.09, 2.72), stripeMat)
  stripe.position.set(0, 0.42, 0)
  group.add(stripe)

  // Windshield
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x88ccff, transparent: true, opacity: 0.3, roughness: 0.05 })
  const ws = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.3, 0.05), glassMat)
  ws.position.set(0, 0.72, 0.72)
  group.add(ws)

  // Wheels
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 })
  const wheelGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.18, 12)
  ;[[-0.88, 0.18, 0.9], [0.88, 0.18, 0.9], [-0.88, 0.18, -0.9], [0.88, 0.18, -0.9]].forEach(([wx, wy, wz]) => {
    const w = new THREE.Mesh(wheelGeo, wheelMat)
    w.rotation.z = Math.PI / 2
    w.position.set(wx, wy, wz)
    group.add(w)
  })

  // Light bar
  const barMat = new THREE.MeshBasicMaterial({ color: 0x3b82f6 })
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 0.25), barMat)
  bar.position.set(0, 0.99, 0)
  group.add(bar)

  // Headlights
  const hMat = new THREE.MeshBasicMaterial({ color: 0xffffcc })
  ;[-0.6, 0.6].forEach(hx => {
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.05), hMat)
    h.position.set(hx, 0.38, 1.36)
    group.add(h)
  })

  group.position.set(-14, 0, 0)
  group.rotation.y = Math.PI / 2  // face right (along x-axis)
  scene.add(group)
  return group
}

function addViolationLight(x, z) {
  const light = new THREE.PointLight(0xff2200, 4, 5)
  light.position.set(x, 2.5, z)
  scene.add(light)

  // Pulsing via animation
  light.userData.pulse = true
}

let t = 0
function animate() {
  animId = requestAnimationFrame(animate)
  t += 0.016

  // Patrol car drives left → right, loops
  if (patrolCar) {
    patrolCar.position.x = -14 + ((t * 2.8) % 30)
  }

  // Flash bar on patrol car
  if (patrolCar) {
    const bar = patrolCar.children.find(c => c.geometry?.parameters?.width === 0.9)
    if (bar) bar.material.color.set(Math.sin(t * 8) > 0 ? 0x3b82f6 : 0xef4444)
  }

  // Pulse violation point lights
  scene.traverse(obj => {
    if (obj.isPointLight && obj.userData.pulse) {
      obj.intensity = 3 + Math.sin(t * 4) * 2
    }
  })

  // Subtle camera sway
  camera.position.x = Math.sin(t * 0.12) * 1.5
  camera.position.y = 14 + Math.sin(t * 0.08) * 0.4
  camera.lookAt(0, 0, 0)

  renderer.render(scene, camera)
}

function onResize() {
  if (!container.value) return
  const w = container.value.clientWidth
  const h = container.value.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

onMounted(() => {
  buildScene()
  animate()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
  if (container.value) container.value.innerHTML = ''
})
</script>

<style scoped>
.parking-3d {
  width: 100%;
  height: 100%;
  display: block;
}

.parking-3d canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
}
</style>
