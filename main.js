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
const geometry4 = new THREE.BoxGeometry(1, 10, 0);
const geometry5 = new THREE.BoxGeometry(1, 3, 0);
const geometry6 = new THREE.BoxGeometry(3, 1, 0);
const geometry7 = new THREE.BoxGeometry(1, 4.39, 0);
const geometry8 = new THREE.BoxGeometry(1.5, 1, 0);
const geometry9 = new THREE.BoxGeometry(1, 3, 0);
const geometry9_1 = new THREE.BoxGeometry(1, 3, 0);
const geometry9_2 = new THREE.BoxGeometry(1.1, 1.9, 0);
const geometry10 = new THREE.BoxGeometry(4.7, 0.9, 0);
const geometry11 = new THREE.BoxGeometry(22.3, 1, 0);
const geometry30 = new THREE.BoxGeometry(1.4, 1.5, 0);
const geometry31 = new THREE.BoxGeometry(3, 2.2, 0);
const geometry32 = new THREE.BoxGeometry(1.5, 3, 0);
const geometry33 = new THREE.BoxGeometry(3, 1, 0);
const geometry34 = new THREE.BoxGeometry(5, 1, 0);
const geometry35 = new THREE.BoxGeometry(5, 1.3, 0);
const geometry36 = new THREE.BoxGeometry(1.2, 3.5, 0);
const geometry37 = new THREE.BoxGeometry(1.2, 2.5, 0);
const geometry38 = new THREE.BoxGeometry(9.5, 1, 0);
const geometry39 = new THREE.BoxGeometry(1, 1, 0);
const geometry40 = new THREE.BoxGeometry(3, 1, 0);

const material = new THREE.MeshBasicMaterial({ color: 0x3D85C6 });
const material2 = new THREE.MeshBasicMaterial({ color: 0xcccccc });

const cube = new THREE.Mesh(geometry, material);
const cube2 = new THREE.Mesh(geometry2, material);
const cube3 = new THREE.Mesh(geometry3, material);
const cube4 = new THREE.Mesh(geometry4, material);
const cube5 = new THREE.Mesh(geometry2, material);
const cube6 = new THREE.Mesh(geometry2, material);
const cube7 = new THREE.Mesh(geometry2, material);
const cube8 = new THREE.Mesh(geometry2, material);
const cube9 = new THREE.Mesh(geometry2, material);
const cube10 = new THREE.Mesh(geometry2, material);
const cube11 = new THREE.Mesh(geometry2, material);
const cube12 = new THREE.Mesh(geometry5, material2);
const cube13 = new THREE.Mesh(geometry6, material2);
const cube14 = new THREE.Mesh(geometry7, material2);
const cube15 = new THREE.Mesh(geometry8, material2);
const cube16 = new THREE.Mesh(geometry9, material2);
const cube17 = new THREE.Mesh(geometry6, material2);
const cube18 = new THREE.Mesh(geometry9_1, material2);
const cube19 = new THREE.Mesh(geometry10, material2);
const cube20 = new THREE.Mesh(geometry11, material2);
const cube21 = new THREE.Mesh(geometry9_2, material2);
const cube30 = new THREE.Mesh(geometry30, material2);
const cube31 = new THREE.Mesh(geometry31, material2);
const cube32 = new THREE.Mesh(geometry32, material2);
const cube33 = new THREE.Mesh(geometry33, material2);
const cube34 = new THREE.Mesh(geometry34, material2);
const cube35 = new THREE.Mesh(geometry35, material2);
const cube36 = new THREE.Mesh(geometry36, material2);
const cube37 = new THREE.Mesh(geometry37, material2);
const cube38 = new THREE.Mesh(geometry38, material2);
const cube39 = new THREE.Mesh(geometry39, material2);
const cube40 = new THREE.Mesh(geometry40, material2);

scene.add(cube, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20, cube21, cube30, cube31, cube32, cube33, cube34, cube35, cube36, cube37, cube38, cube39, cube40);

camera.position.z = 5;

// Cubos horinzontales 
cube.position.y = 1;
cube.position.x = -6;


cube4.position.y = -1;
cube4.position.x = 7;

// Cubos verticales

cube2.position.y = 3.5;
cube2.position.x = 0;

cube3.position.y = -3.5;
cube3.position.x = 0;


cube5.position.y = 2.5;
cube5.position.x = 0;

cube6.position.y = 1.5;
cube6.position.x = 0;

cube7.position.y = 1;
cube7.position.x = 0;

cube8.position.y = -1;
cube8.position.x = 0;

cube9.position.y = 0;
cube9.position.x = 1;

cube10.position.y = -2;
cube10.position.x = 1;

cube11.position.y = -2.5;
cube11.position.x = 1;



// Cubos que referencian los caminos 


// Caminos horizontales 
cube12.position.y = 3;
cube12.position.x = 5.8;

cube14.position.y = 1.6;
cube14.position.x = 6.9;

cube16.position.y = -2.2;
cube16.position.x = 6.9;

cube18.position.y = -1.2;
cube18.position.x = 5.8;

cube21.position.y = -1.65;
cube21.position.x = 4.6;

cube20.position.y = 3.2;
cube20.position.x = -5.95;

cube34.position.y = 0.8;
cube34.position.x = -4;

cube35.position.y = 1.86;
cube35.position.x = -2;

cube38.position.y = -0.55;
cube38.position.x = -1;

cube39.position.y = -1.55;
cube39.position.x = -4.5;

cube40.position.y = 0;
cube40.position.x = 0.3;

// caminos Verticales
cube13.position.y = 2;
cube13.position.x = 4.5;

cube15.position.y = 0.9;
cube15.position.x = 6;

cube17.position.y = -3.2;
cube17.position.x = 4.9;

cube19.position.y = -0.15;
cube19.position.x = 6.4;

cube30.position.y = 2.25;
cube30.position.x = -5.5;

cube31.position.y = 1.4;
cube31.position.x = 0.3;

cube32.position.y = 1.8;
cube32.position.x = 2.8;

cube33.position.y = 0.8;
cube33.position.x = 3.6;

cube36.position.y = -1.8;
cube36.position.x = -5.4;

cube37.position.y = -2.6;
cube37.position.x = -3.4;

function animate() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();