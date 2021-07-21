import * as THREE from "https://cdn.skypack.dev/three";
import { GLTFLoader } from "https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js";

const canvas = document.getElementById("canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000
);
const clock = new THREE.Clock();

const light = new THREE.AmbientLight(0xffffff, 0.75); // soft white light
scene.add(light);

const blueDirectionalLight = new THREE.DirectionalLight(0x778df8, 1.0);
blueDirectionalLight.position.x = -15;
scene.add(blueDirectionalLight);

const pinkDirectionalLight = new THREE.DirectionalLight(0xf8778d, 0.5);
pinkDirectionalLight.position.x = 15;
scene.add(pinkDirectionalLight);

camera.position.z = 7;

const loader = new GLTFLoader();

let model = null;
loader.load(
  "/assets/models/skull.gltf",
  (gltf) => {
    model = gltf.scene;
    if (model) {
      scene.add(model);
    }
  },
  undefined,
  (error) => {
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setClearColor("#EBFAFF");

const update = () => {
  if (model) {
    model.rotation.y += 1.0 * clock.getDelta();
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  update();
  renderer.render(scene, camera);
};

animate();
