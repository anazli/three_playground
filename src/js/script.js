import * as THREE from 'three';

export default class ThreeModule  {
    constructor() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        //renderer.render(scene, camera);
    }

    animate() {
        this.renderer.render(this.scene, this.camera);
    }
}

const three_module = new ThreeModule();
three_module.animate();