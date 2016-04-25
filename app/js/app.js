require("../css/app.css");
var THREE = require("three");
import Cube from './cube';

// Spinning cube code taken from http://mrdoob.com/projects/htmleditor/
var camera, scene, renderer;
var cubeData, cube;

function init() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffcc);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;

  scene = new THREE.Scene();

  cubeData = {
    x: 200, y: 200, z: 200,
    color: 0x000000,
    lineWidth: 2
  };

  cube = new Cube(cubeData);
  scene.add(cube.mesh);
}

function animate() {
  requestAnimationFrame(animate);

  cube.mesh.rotation.x = Date.now() * 0.0005;
  cube.mesh.rotation.y = Date.now() * 0.001;

  renderer.render(scene, camera);
}

init();
animate();
