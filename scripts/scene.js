import * as THREE from "https://cdn.skypack.dev/three";

const canvas = document.getElementById("canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ canvas: canvas });

renderer.render(scene, camera);
