import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { glbLoader } from '@/scripts/ThreeLoaders';
import { BASE_PATH } from '@/router/basePath';

export class ThreeMainScene {
    constructor({ renderElemSelector }: { renderElemSelector: string }) {
        this.renderElemSelector = renderElemSelector;
    }

    protected scene!: THREE.Scene;

    protected camera!: THREE.PerspectiveCamera;

    protected renderer!: THREE.WebGLRenderer;

    protected renderElemSelector!: string;

    protected renderElemRect!: DOMRect;

    protected renderElem: HTMLElement | null = null;

    protected modelPath!: string;

    protected modelLaptop!: THREE.Group<THREE.Object3DEventMap>;

    protected modelRock1!: THREE.Group<THREE.Object3DEventMap>;

    protected modelRock2!: THREE.Group<THREE.Object3DEventMap>;

    protected modelRock3!: THREE.Group<THREE.Object3DEventMap>;

    protected pointLight!: THREE.PointLight;

    protected planeAnimationTime = 0;

    protected planeUniforms!: Record<string, any>;

    protected animateScene() {
        requestAnimationFrame(this.animateScene.bind(this));
        // this.animatePlane();
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
        // this.renderer.setPixelRatio(window.devicePixelRatio);
    }

    protected setScene(): void {
        this.scene = new THREE.Scene();
    }

    protected async loadModelLaptop(): Promise<void> {
        return new Promise((res) => {
            glbLoader.load(`${BASE_PATH}models/compressed/laptop.glb`, (gltf) => {
                this.modelLaptop = gltf.scene;
                this.modelLaptop.position.set(-0.1, 3.1, 0);
                this.modelLaptop.scale.set(0.1, 0.1, 0.1);
                this.modelLaptop.rotation.x = 0.2;
                this.modelLaptop.rotation.y = -0.1;
                this.scene.add(this.modelLaptop);
                res();
            });
        });
    }

    protected async loadModelRock1(): Promise<void> {
        return new Promise((res) => {
            glbLoader.load(`${BASE_PATH}models/compressed/rock1.glb`, (gltf) => {
                this.modelRock1 = gltf.scene;
                this.modelRock1.position.set(0.45, 2.8, 0);
                this.modelRock1.rotation.x = 0.3;
                this.modelRock1.scale.set(0.08, 0.08, 0.08);
                this.scene.add(this.modelRock1);
                res();
            });
        });
    }

    protected async loadModelRock2(): Promise<void> {
        return new Promise((res) => {
            glbLoader.load(`${BASE_PATH}models/compressed/rock2.glb`, (gltf) => {
                this.modelRock2 = gltf.scene;
                this.modelRock2.position.set(0, 2.9, -12);
                this.modelRock2.scale.set(0.12, 0.12, 0.12);
                this.modelRock2.rotation.x = 0.1;
                this.scene.add(this.modelRock2);
                res();
            });
        });
    }

    protected async loadModelRock3(): Promise<void> {
        return new Promise((res) => {
            glbLoader.load(`${BASE_PATH}models/compressed/rock3.glb`, (gltf) => {
                this.modelRock3 = gltf.scene;
                this.modelRock3.position.set(0.5, 6, 0);
                this.modelRock3.scale.set(0.06, 0.06, 0.06);
                this.modelRock3.rotation.x = 0.6;
                this.scene.add(this.modelRock3);
                res();
            });
        });
    }

    protected renderElemActivate(zIndex: number = 9999) {
        if (this.renderElem?.parentNode) {
            (this.renderElem.parentNode as HTMLElement).style.cssText = `z-index: ${zIndex}; pointer-events: auto;`;
        }
    }

    protected setDevOrbitControls() {
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 1;
        controls.maxDistance = 100;
        // controls.maxPolarAngle = Math.PI / 2;
        this.renderElemActivate();
    }

    protected setDevLights(): void {
        const dirLight = new THREE.DirectionalLight('#ffffff', 7);
        dirLight.position.set(0, 0, 10);
        this.scene.add(dirLight);
    }

    protected setLights(): void {
        this.pointLight = new THREE.PointLight('#ffffff', 5, 8.5, 1);
        this.pointLight.position.set(1.4, 6.9, 2);
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
        this.resize();
    }

    protected animatePlane() {
        this.planeUniforms.time.value += 0.05;
    }

    protected setPlane() {
        this.planeUniforms = {
            time: { value: 0.0 },
        };

        const material = new THREE.ShaderMaterial({
            uniforms: this.planeUniforms,
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                varying vec2 vUv;
        
                void main() {
                    // Динамически изменяемые цвета (плавно изменяются во времени)
                    vec3 color1 = vec3(
                        0.5 + 0.5 * sin(time * 0.5),  // R
                        0.5 + 0.5 * sin(time * 0.7),  // G
                        0.5 + 0.5 * sin(time * 0.9)   // B
                    );
                    
                    vec3 color2 = vec3(
                        0.5 + 0.5 * sin(time * 0.8 + 2.0),  
                        0.5 + 0.5 * sin(time * 0.6 + 2.0),  
                        0.5 + 0.5 * sin(time * 0.4 + 2.0)  
                    );
        
                    // Градиентный переход
                    vec3 gradient = mix(color1, color2, vUv.y);
        
                    // Дополнительный эффект свечения
                    vec3 glow = gradient * (1.0 + 0.3 * sin(time * 1.5));
        
                    gl_FragColor = vec4(glow, 1.0);
                }
            `,
            transparent: true,
        });

        const geometry = new THREE.PlaneGeometry(20, 20);
        const plane = new THREE.Mesh(geometry, material);

        plane.position.y = 5;
        plane.position.z = -4;
        plane.rotation.x = -0.1;
        plane.rotation.z = -0.5;

        this.scene.add(plane);
    }

    public async init() {
        if (!this.renderElemSelector) return;

        this.setRenderElem();
        this.setRenderer();
        this.setScene();

        // (!important) wait models
        await Promise.all([
            this.loadModelLaptop(),
            this.loadModelRock1(),
            this.loadModelRock2(),
            this.loadModelRock3(),
        ]);

        this.setLights();
        // this.setPlane();
        this.setCamera();
        this.animateScene();
        // this.setDevOrbitControls();
        // this.setDevGrid();
        // this.setDevLights();
    }

    public resize(): void {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            this.modelLaptop.position.y = 1.6;
            this.modelRock1.position.y = 1.5;
            this.modelRock2.position.y = 1.6;
            this.modelRock3.position.y = 5.7;
            this.pointLight.position.set(1.4, 6.1, 2);
        } else {
            this.modelLaptop.position.y = 3.1;
            this.modelRock1.position.y = 2.8;
            this.modelRock2.position.y = 2.9;
            this.modelRock3.position.y = 6;
            this.pointLight.position.set(1.4, 6.9, 2);
        }
        this.renderer.setSize(window.innerWidth, this.renderElemRect.height);
        this.camera.aspect = window.innerWidth / this.renderElemRect.height;
        this.camera.updateProjectionMatrix();
    }
}
