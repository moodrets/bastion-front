import { BASE_PATH } from '@/router/basePath';

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls, RectAreaLightUniformsLib } from 'three/examples/jsm/Addons.js';

const loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(`${BASE_PATH}models/draco/`);
loader.setDRACOLoader(dracoLoader);
dracoLoader.preload();

type THREEUnknownObject = Record<string, any>;

class ThreeMainScene {
    constructor({ renderElemSelector }: { renderElemSelector: string }) {
        this.renderElemSelector = renderElemSelector;
    }

    scene!: THREE.Scene;

    camera!: THREE.Camera;

    renderer!: THREEUnknownObject;

    planeMateral!: THREE.Material;

    renderElemSelector!: string;

    renderElemRect!: DOMRect;

    renderElem: HTMLElement | null = null;

    modelPath!: string;

    animatePlaceTime = 0;

    public animateScene() {
        requestAnimationFrame(this.animateScene.bind(this));
        this.animatePlane();
        this.renderer.render(this.scene, this.camera);
    }

    protected setRenderElem(): void {
        this.renderElem = document.querySelector(this.renderElemSelector);

        if (this.renderElem) {
            this.renderElem.innerHTML = '';
            this.renderElemRect = this.renderElem.getBoundingClientRect();
        }
    }

    protected setRenderer(): void {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.renderElemRect.width, this.renderElemRect.height);
        this.renderElem?.appendChild(this.renderer.domElement);
    }

    protected setScene(): void {
        this.scene = new THREE.Scene();
    }

    protected loadModelBackground() {
        loader.load(`${BASE_PATH}models/compressed/background.glb`, (gltf) => {
            const model = gltf.scene;
            model.position.set(0, 0, 1);
            model.scale.set(0.08, 0.08, 0.08);
            this.scene.add(model);
        });
    }

    protected loadModelLaptop() {
        loader.load(`${BASE_PATH}models/compressed/laptop.glb`, (gltf) => {
            const model = gltf.scene;
            model.position.set(0, 2.7, 0);
            model.scale.set(0.08, 0.08, 0.08);
            model.rotation.x = 0.1;
            model.rotation.y = -0.1;
            this.scene.add(model);
        });
    }

    protected loadModelRock1() {
        loader.load(`${BASE_PATH}models/compressed/rock1.glb`, (gltf) => {
            const model = gltf.scene;
            model.position.set(0, 2.3, 0);
            model.rotation.x = 0.3;
            model.scale.set(0.08, 0.08, 0.08);
            this.scene.add(model);
        });
    }

    protected loadModelRock2() {
        loader.load(`${BASE_PATH}models/compressed/rock2.glb`, (gltf) => {
            const model = gltf.scene;
            model.position.set(0, 3.6, -12);
            model.scale.set(0.12, 0.12, 0.12);
            model.rotation.x = 0.1;
            this.scene.add(model);
        });
    }

    protected loadModelRock3() {
        loader.load(`${BASE_PATH}models/compressed/rock3.glb`, (gltf) => {
            const model = gltf.scene;
            model.position.set(0, 5, 0);
            model.scale.set(0.04, 0.04, 0.04);
            model.rotation.x = 0.5;
            this.scene.add(model);
        });
    }

    protected renderElemActivate(zIndex: number = 9999) {
        if (this.renderElem) {
            this.renderElem.style.cssText = `z-index: ${zIndex}; pointer-events: auto;`;
        }
    }

    protected setOrbitControls() {
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 1;
        controls.maxDistance = 100;
        controls.maxPolarAngle = Math.PI / 2;
        this.renderElemActivate();
    }

    protected setLights(): void {
        const dirLight = new THREE.DirectionalLight('#ffffff', 7);
        dirLight.position.set(0, 0, 10);
        this.scene.add(dirLight);

        // const pointLight = new THREE.PointLight('#AD3D00', 1000, 10, 1);
        // pointLight.position.set(-2, -5, 0);
        // this.scene.add(pointLight);

        // RectAreaLightUniformsLib.init();
        // const rectLight = new THREE.RectAreaLight('#AD3D00', 10, 10, 10);
        // rectLight.position.set(0, 0, 0);
        // this.scene.add(rectLight);

        // const hemisphereLight = new THREE.HemisphereLight('#ffffff', '#AD3D00', 2);
        // this.scene.add(hemisphereLight);
    }

    protected setPlane() {
        const geometry = new THREE.PlaneGeometry(30, 30);

        this.planeMateral = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });

        const plane = new THREE.Mesh(geometry, this.planeMateral);

        plane.position.y = 2;
        plane.rotation.x = 2.3;
        // plane.rotation.x = Math.PI / 2;
        this.scene.add(plane);
    }

    protected animatePlane() {
        if (!this.planeMateral) return;

        const r = Math.sin(this.animatePlaceTime) * 0.5 + 0.5;
        const g = Math.sin(this.animatePlaceTime + Math.PI / 3) * 0.5 + 0.5;
        const b = Math.sin(this.animatePlaceTime + Math.PI / 1.5) * 0.5 + 0.5;
        // @ts-ignore
        this.planeMateral.color.setRGB(r, g, b);
        this.animatePlaceTime += 0.01;
    }

    protected setGrid() {
        const gridHelper = new THREE.GridHelper(40, 40);
        this.scene.add(gridHelper);
    }

    protected setCamera(): void {
        const width = this.renderElemRect.width || 0;
        const height = this.renderElemRect.height || 0;

        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
        this.camera.position.set(0, 2, 8);
        this.camera.lookAt(0, 1, 0);
    }

    public init() {
        if (!this.renderElemSelector) return;

        this.setRenderElem();
        this.setRenderer();
        this.setScene();
        this.setLights();
        // this.setPlane();
        this.loadModelLaptop();
        this.loadModelRock1();
        this.loadModelRock2();
        this.loadModelRock3();
        this.setCamera();
        // this.setGrid();
        // this.setOrbitControls();
        this.animateScene();
    }
}

export const threeMainScene = new ThreeMainScene({
    renderElemSelector: '.three-main-scene',
});
