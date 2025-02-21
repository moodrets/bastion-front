import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { glbLoader } from '@/scripts/ThreeLoaders';
import { BASE_PATH } from '@/router/basePath';

const MODELS_VALUES: Record<string, any> = {
    desktop: {
        laptop: {
            position: { x: -0.1, y: 2.6, z: 0 },
            rotation: { x: 0.2, y: -0.1, z: 0 },
            scale: { x: 0.12, y: 0.12, z: 0.12 },
        },
        rock1: {
            position: { x: 0.8, y: 2.8, z: 0 },
            rotation: { x: 0.3, y: 0, z: 0 },
            scale: { x: 0.08, y: 0.08, z: 0.08 },
        },
        rock2: {
            position: { x: -0.4, y: 2.7, z: -12 },
            rotation: { x: 0.1, y: 0, z: 0 },
            scale: { x: 0.12, y: 0.12, z: 0.12 },
        },
        rock3: {
            position: { x: 0.5, y: 6, z: 0 },
            rotation: { x: 0.6, y: 0, z: 0 },
            scale: { x: 0.06, y: 0.06, z: 0.06 },
        },
    },
    mobile: {
        laptop: {
            position: { x: -0.1, y: 1.3, z: 0 },
            rotation: { x: 0.2, y: -0.1, z: 0 },
            scale: { x: 0.12, y: 0.12, z: 0.12 },
        },
        rock1: {
            position: { x: 0.8, y: 1.5, z: 0 },
            rotation: { x: 0.3, y: 0, z: 0 },
            scale: { x: 0.08, y: 0.08, z: 0.08 },
        },
        rock2: {
            position: { x: -1, y: 2.5, z: -12 },
            rotation: { x: 0.1, y: 0, z: 0 },
            scale: { x: 0.13, y: 0.13, z: 0.13 },
        },
        rock3: {
            position: { x: 0.5, y: 5.7, z: 0 },
            rotation: { x: 0.6, y: 0, z: 0 },
            scale: { x: 0.06, y: 0.06, z: 0.06 },
        },
    },
};

function xyzFromObject(object: Record<string, any>): [number, number, number] {
    return Object.values(object) as [number, number, number];
}

export class ThreeMainScene {
    constructor({ renderElemSelector }: { renderElemSelector: string }) {
        this.renderElemSelector = renderElemSelector;
    }

    protected modelsPath: string = `${BASE_PATH}models/compressed/`;

    protected scene!: THREE.Scene;

    protected camera!: THREE.PerspectiveCamera;

    protected renderer!: THREE.WebGLRenderer;

    protected renderElemSelector!: string;

    protected renderElemRect!: DOMRect;

    protected renderElem: HTMLElement | null = null;

    protected modelLaptop!: THREE.Group<THREE.Object3DEventMap>;

    protected modelRock1!: THREE.Group<THREE.Object3DEventMap>;

    protected modelRock2!: THREE.Group<THREE.Object3DEventMap>;

    protected modelRock3!: THREE.Group<THREE.Object3DEventMap>;

    protected pointLight!: THREE.PointLight;

    protected canvasGradient: {
        time: number;
        ctx: Record<string, any>;
        size: number;
        texture: Record<string, any>;
        colorList: string[];
    } = {
        time: 0,
        size: 2048,
        colorList: ['#e03610', '#1920e6', '#9b19e6', '#0899c9'],
        texture: {},
        ctx: {},
    };

    protected get getRandomGradientColor() {
        return this.canvasGradient.colorList[Math.floor(Math.random() * this.canvasGradient.colorList.length)];
    }

    protected animateScene() {
        requestAnimationFrame(this.animateScene.bind(this));
        this.updatePlaneGradient();
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
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.renderElemRect.width, this.renderElemRect.height);
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        // this.renderer.toneMappingExposure = 2.5;
        this.renderElem?.appendChild(this.renderer.domElement);
    }

    protected setScene(): void {
        this.scene = new THREE.Scene();
    }

    protected async loadModelLaptop(): Promise<void> {
        return new Promise((res) => {
            glbLoader.load(`${this.modelsPath}laptop.glb`, (gltf) => {
                this.modelLaptop = gltf.scene;
                this.modelLaptop.position.set(...xyzFromObject(MODELS_VALUES.desktop.laptop.position));
                this.modelLaptop.rotation.set(...xyzFromObject(MODELS_VALUES.desktop.laptop.rotation));
                this.modelLaptop.scale.set(...xyzFromObject(MODELS_VALUES.desktop.laptop.scale));
                this.scene.add(this.modelLaptop);
                res();
            });
        });
    }

    protected async loadModelRock1(): Promise<void> {
        return new Promise((res) => {
            glbLoader.load(`${this.modelsPath}rock1.glb`, (gltf) => {
                this.modelRock1 = gltf.scene;
                this.modelRock1.position.set(...xyzFromObject(MODELS_VALUES.desktop.rock1.position));
                this.modelRock1.rotation.set(...xyzFromObject(MODELS_VALUES.desktop.rock1.rotation));
                this.modelRock1.scale.set(...xyzFromObject(MODELS_VALUES.desktop.rock1.scale));
                this.scene.add(this.modelRock1);
                res();
            });
        });
    }

    protected async loadModelRock2(): Promise<void> {
        return new Promise((res) => {
            glbLoader.load(`${this.modelsPath}rock2.glb`, (gltf) => {
                this.modelRock2 = gltf.scene;
                this.modelRock2.position.set(...xyzFromObject(MODELS_VALUES.desktop.rock2.position));
                this.modelRock2.rotation.set(...xyzFromObject(MODELS_VALUES.desktop.rock2.rotation));
                this.modelRock2.scale.set(...xyzFromObject(MODELS_VALUES.desktop.rock2.scale));
                this.scene.add(this.modelRock2);
                res();
            });
        });
    }

    protected async loadModelRock3(): Promise<void> {
        return new Promise((res) => {
            glbLoader.load(`${this.modelsPath}rock3.glb`, (gltf) => {
                this.modelRock3 = gltf.scene;
                this.modelRock3.position.set(...xyzFromObject(MODELS_VALUES.desktop.rock3.position));
                this.modelRock3.rotation.set(...xyzFromObject(MODELS_VALUES.desktop.rock3.rotation));
                this.modelRock3.scale.set(...xyzFromObject(MODELS_VALUES.desktop.rock3.scale));
                this.scene.add(this.modelRock3);
                res();
            });
        });
    }

    protected renderElemActivate(zIndex: number = 9999): void {
        if (this.renderElem?.parentNode) {
            (this.renderElem.parentNode as HTMLElement).style.cssText = `z-index: ${zIndex}; pointer-events: auto;`;
        }
    }

    protected setDevOrbitControls(): void {
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 1;
        controls.maxDistance = 100;
        this.renderElemActivate();
    }

    protected setDevLights(): void {
        const dirLight = new THREE.DirectionalLight('#ffffff', 7);
        dirLight.position.set(0, 0, 10);
        this.scene.add(dirLight);
    }

    protected setLights(): void {
        this.pointLight = new THREE.PointLight('#ffffff', 11, 8.5, 1);
        this.pointLight.position.set(1.4, 6.5, 1);
        this.scene.add(this.pointLight);
    }

    protected setDevGrid() {
        const gridHelper = new THREE.GridHelper(40, 40);
        this.scene.add(gridHelper);
    }

    protected setCamera(): void {
        const width = this.renderElemRect.width || 0;
        const height = this.renderElemRect.height || 0;

        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.set(0, 2, 8);
        this.camera.lookAt(0, 2, 8);
    }

    protected setPlaneGradient() {
        this.canvasGradient.size = 2048;

        const canvas = document.createElement('canvas');
        canvas.width = this.canvasGradient.size;
        canvas.height = this.canvasGradient.size;

        const ctx = canvas.getContext('2d');
        const texture = new THREE.CanvasTexture(canvas);

        this.canvasGradient.ctx = ctx as {};
        this.canvasGradient.texture = texture;
    }

    protected setPlane() {
        this.setPlaneGradient();

        const material = new THREE.MeshBasicMaterial({ map: this.canvasGradient.texture as THREE.Texture });
        const geometry = new THREE.PlaneGeometry(40, 40);
        const plane = new THREE.Mesh(geometry, material);

        plane.position.y = 5;
        plane.position.z = -4;

        this.scene.add(plane);
    }

    protected updatePlaneGradient() {
        this.canvasGradient.time += 0.00005;

        this.canvasGradient.ctx.clearRect(0, 0, this.canvasGradient.size, this.canvasGradient.size);

        let currentColor = new THREE.Color(this.canvasGradient.colorList[0]);
        let targetColor = new THREE.Color(this.getRandomGradientColor);

        if (this.canvasGradient.time >= 1) {
            this.canvasGradient.time = 0;
            currentColor.copy(targetColor);
            targetColor.set(this.getRandomGradientColor);
        }

        const interpolatedColor = new THREE.Color().lerpColors(currentColor, targetColor, this.canvasGradient.time);

        const gradient = this.canvasGradient.ctx.createLinearGradient(
            0,
            this.canvasGradient.size,
            this.canvasGradient.size,
            0
        );

        gradient.addColorStop(0.0, `#${interpolatedColor.getHexString()}`);
        gradient.addColorStop(0.53, '#000000');
        gradient.addColorStop(0.58, '#000000');
        gradient.addColorStop(0.62, '#000000');
        gradient.addColorStop(1.0, `#${interpolatedColor.getHexString()}`);

        this.canvasGradient.ctx.fillStyle = gradient;
        this.canvasGradient.ctx.fillRect(0, 0, this.canvasGradient.size, this.canvasGradient.size);
        this.canvasGradient.texture.needsUpdate = true;
    }

    public async init() {
        if (!this.renderElemSelector) return;

        this.setRenderElem();
        this.setRenderer();
        this.setScene();

        await Promise.all([
            this.loadModelLaptop(),
            this.loadModelRock1(),
            this.loadModelRock2(),
            this.loadModelRock3(),
        ]);

        this.setLights();
        this.setPlane();
        this.setCamera();
        this.resize();
        this.animateScene();

        // this.setDevOrbitControls();
        // this.setDevGrid();
        // this.setDevLights();
    }

    public resize(): void {
        try {
            if (window.matchMedia('(max-width: 1024px)').matches) {
                this.modelLaptop.position.set(...xyzFromObject(MODELS_VALUES.mobile.laptop.position));
                this.modelLaptop.rotation.set(...xyzFromObject(MODELS_VALUES.mobile.laptop.rotation));
                this.modelLaptop.scale.set(...xyzFromObject(MODELS_VALUES.mobile.laptop.scale));

                this.modelRock1.position.set(...xyzFromObject(MODELS_VALUES.mobile.rock1.position));
                this.modelRock1.rotation.set(...xyzFromObject(MODELS_VALUES.mobile.rock1.rotation));
                this.modelRock1.scale.set(...xyzFromObject(MODELS_VALUES.mobile.rock1.scale));

                this.modelRock2.position.set(...xyzFromObject(MODELS_VALUES.mobile.rock2.position));
                this.modelRock2.rotation.set(...xyzFromObject(MODELS_VALUES.mobile.rock2.rotation));
                this.modelRock2.scale.set(...xyzFromObject(MODELS_VALUES.mobile.rock2.scale));

                this.modelRock3.position.set(...xyzFromObject(MODELS_VALUES.mobile.rock3.position));
                this.modelRock3.rotation.set(...xyzFromObject(MODELS_VALUES.mobile.rock3.rotation));
                this.modelRock3.scale.set(...xyzFromObject(MODELS_VALUES.mobile.rock3.scale));

                this.pointLight.position.set(1.4, 6.1, 2);
            } else {
                this.modelLaptop.position.set(...xyzFromObject(MODELS_VALUES.desktop.laptop.position));
                this.modelLaptop.rotation.set(...xyzFromObject(MODELS_VALUES.desktop.laptop.rotation));
                this.modelLaptop.scale.set(...xyzFromObject(MODELS_VALUES.desktop.laptop.scale));

                this.modelRock1.position.set(...xyzFromObject(MODELS_VALUES.desktop.rock1.position));
                this.modelRock1.rotation.set(...xyzFromObject(MODELS_VALUES.desktop.rock1.rotation));
                this.modelRock1.scale.set(...xyzFromObject(MODELS_VALUES.desktop.rock1.scale));

                this.modelRock2.position.set(...xyzFromObject(MODELS_VALUES.desktop.rock2.position));
                this.modelRock2.rotation.set(...xyzFromObject(MODELS_VALUES.desktop.rock2.rotation));
                this.modelRock2.scale.set(...xyzFromObject(MODELS_VALUES.desktop.rock2.scale));

                this.modelRock3.position.set(...xyzFromObject(MODELS_VALUES.desktop.rock3.position));
                this.modelRock3.rotation.set(...xyzFromObject(MODELS_VALUES.desktop.rock3.rotation));
                this.modelRock3.scale.set(...xyzFromObject(MODELS_VALUES.desktop.rock3.scale));

                this.pointLight.position.set(1.4, 6.5, 1);
            }
        } catch (error) {
            console.log(error);
        }

        this.renderer.setSize(window.innerWidth, this.renderElemRect.height);
        this.camera.aspect = window.innerWidth / this.renderElemRect.height;
        this.camera.updateProjectionMatrix();
    }
}
