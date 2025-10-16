import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// === Escena, cámara y renderizador ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// === Luz direccional suave ===
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(3, 5, 5);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // luz ambiental suave
scene.add(ambientLight);

// === Crear tres cubos con colores pastel ===
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 🎀 Cubo 1 (lento, rosa pastel)
const cube1 = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0xffb6c1 }) // rosa pastel
);
cube1.position.x = -2;

// 🍃 Cubo 2 (medio, verde menta pastel)
const cube2 = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0xb2f2bb }) // verde menta pastel
);
cube2.position.x = 0;

// 🌤️ Cubo 3 (rápido, azul cielo pastel)
const cube3 = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({ color: 0xaadfff }) // azul pastel
);
cube3.position.x = 2;

// Agregar cubos a la escena
scene.add(cube1, cube2, cube3);

// === Posicionar cámara ===
camera.position.z = 6;

// === Animación con diferentes velocidades ===
function animate() {
    // Cubo lento
    cube1.rotation.x += 0.005;
    cube1.rotation.y += 0.005;

    // Cubo medio
    cube2.rotation.x += 0.015;
    cube2.rotation.y += 0.015;

    // Cubo rápido
    cube3.rotation.x += 0.03;
    cube3.rotation.y += 0.03;

    renderer.render(scene, camera);
}

// Iniciar animación
renderer.setAnimationLoop(animate);

// === Ajustar al redimensionar ===
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
