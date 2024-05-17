import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(0, 10, 1);
const geometry2 = new THREE.BoxGeometry(13, 1, 0);
const geometry3 = new THREE.BoxGeometry(13, 1, 0);
const geometry4 = new THREE.BoxGeometry(1, 9, 0);
const geometry5 = new THREE.BoxGeometry(1, 9, 0);
const geometry6 = new THREE.BoxGeometry(1, 9, 0);





const material = new THREE.MeshBasicMaterial({ color: 0x3D85C6 });
const material2 = new THREE.MeshBasicMaterial({ color: 0xcccccc });




const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry2, material);
const cube3 = new THREE.Mesh(geometry3, material);
const cube4 = new THREE.Mesh(geometry4, material);
const cube5 = new THREE.Mesh(geometry5, material2);
const cube6 = new THREE.Mesh(geometry6, material2);
const cube7 = new THREE.Mesh(geometry2, material);
const cube8 = new THREE.Mesh(geometry2, material);
const cube9 = new THREE.Mesh(geometry2, material);
const cube10 = new THREE.Mesh(geometry2, material);
const cube11 = new THREE.Mesh(geometry2, material);





scene.add(cube, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11);

camera.position.z = 5;
cube.position.y = 1;
cube.position.x = -6;
cube2.position.y = 3.5;
cube2.position.x = 1;
cube3.position.y = -3.5;
cube3.position.x = 0;
cube4.position.y = -1;
cube4.position.x = 7;
cube5.position.y = -3;
cube5.position.x = -4;
cube6.position.y = 3;
cube6.position.x = 6;
cube7.position.y = 3;
cube7.position.x = 0;
cube8.position.y = 4;
cube8.position.x = 0;
// cube9.position.y = 5;
// cube9.position.x = 1;
// cube10.position.y = 5.5;
// cube10.position.x = 1;
// cube11.position.y = 6;
// cube11.position.x = 1;


function animate() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();