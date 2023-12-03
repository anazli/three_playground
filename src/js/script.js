import * as THREE from 'three';

export default class ThreeModule  {
    constructor() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        const axesHelper = new THREE.AxesHelper(5);
        this.scene = new THREE.Scene();
        this.scene.add(axesHelper);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 2, 5);
        

    }

    animate() {
        this.renderer.render(this.scene, this.camera);
    }
}

const three_module = new ThreeModule();
three_module.animate();