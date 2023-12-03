import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
const scene = new THREE.Scene();
scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(-10, 30, 30);
    
const boxGeometry = new THREE.BoxGeometry();
const boxMeterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMeterial);
scene.add(box);

const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe: false})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = -10;
scene.add(sphere);

const gridHelper = new THREE.GridHelper(30);
gridHelper.rotation.x = -0.5 * Math.PI;
scene.add(gridHelper);

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

function animate() {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);