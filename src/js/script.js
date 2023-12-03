import * as THREE from 'three';

export default class ThreeModule  {
    constructor() {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        //renderer.render(scene, camera);
    }

    animate() {
        this.renderer.render(scene, camera);
    }
}

const three_module = new ThreeModule();
three_module.animate();