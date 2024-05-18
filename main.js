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
const geometry10 = new THREE.BoxGeometry(3, 0.94, 0);







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
const cube18 = new THREE.Mesh(geometry9, material2);
const cube19 = new THREE.Mesh(geometry10, material2);








scene.add(cube, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19);

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

// caminos Verticales
cube13.position.y = 2;
cube13.position.x = 4.5;

cube15.position.y = 0.9;
cube15.position.x = 6;

cube17.position.y = -3.2;
cube17.position.x = 4.9;

cube19.position.y = -0.12;
cube19.position.x = 5;


function animate() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();