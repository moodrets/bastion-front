import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { glbLoader } from '@/scripts/ThreeLoaders';
import { BASE_PATH } from '@/router/basePath';

const AXIS_VALUES: Record<string, any> = {
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
        pointLight: {
            position: { x: 1.4, y: 6.5, z: 1 },
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
        pointLight: {
            position: { x: 1.4, y: 6.1, z: 2 },
        },
    },
};

const modelsPath = `${BASE_PATH}models/compressed/`;

const threeModelsList: THREE.Group<THREE.Object3DEventMap>[] = [];

const gradient: {
    time: number;
    material?: THREE.Material & Record<'uniforms', any>;
} = {
    time: 0,
};

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let renderElem: HTMLElement | null = null;
let renderElemRect: DOMRect;
let pointLight: THREE.PointLight;

function xyzFromObject(object: Record<string, any>): [number, number, number] {
    return Object.values(object) as [number, number, number];
}

function setDevOrbitControls() {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 100;
    renderElemActivate();
}

function setDevGrid() {
    const gridHelper = new THREE.GridHelper(40, 40);
    scene.add(gridHelper);
}

function setDevLights() {
    const dirLight = new THREE.DirectionalLight('#ffffff', 7);
    dirLight.position.set(0, 0, 10);
    scene.add(dirLight);
}

function setScene() {
    scene = new THREE.Scene();
}

function setCamera() {
    const width = renderElemRect.width || 0;
    const height = renderElemRect.height || 0;

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 2, 8);
}

function setRenderElem() {
    renderElem = document.querySelector('.three-main-scene__canvas');

    if (renderElem) {
        renderElem.innerHTML = '';
        renderElemRect = renderElem.getBoundingClientRect();
    }
}

function setRenderer() {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(renderElemRect.width, renderElemRect.height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // renderer.toneMappingExposure = 2.5;
    renderElem?.appendChild(renderer.domElement);
}

function animateScene() {
    requestAnimationFrame(animateScene);
    gradient.material && (gradient.material.uniforms.uTime.value += 0.01);
    renderer.render(scene, camera);
}

function resizeScene() {
    if (!renderer) return;

    try {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            threeModelsList.forEach((model) => {
                model.position.set(...xyzFromObject(AXIS_VALUES.mobile[model.name].position));
                model.rotation.set(...xyzFromObject(AXIS_VALUES[model.name].laptop.rotation));
                model.scale.set(...xyzFromObject(AXIS_VALUES[model.name].laptop.scale));
            });
            pointLight.position.set(...xyzFromObject(AXIS_VALUES.mobile.pointLight.position));
        } else {
            threeModelsList.forEach((model) => {
                model.position.set(...xyzFromObject(AXIS_VALUES.desktop[model.name].position));
                model.rotation.set(...xyzFromObject(AXIS_VALUES.desktop[model.name].rotation));
                model.scale.set(...xyzFromObject(AXIS_VALUES.desktop[model.name].scale));
            });
            pointLight.position.set(...xyzFromObject(AXIS_VALUES.desktop.pointLight.position));
        }
    } catch (error) {
        console.log(error);
    }

    renderer.setSize(window.innerWidth, renderElemRect.height);
    camera.aspect = window.innerWidth / renderElemRect.height;
    camera.updateProjectionMatrix();
}

function setLights() {
    pointLight = new THREE.PointLight('#ffffff', 11, 8.5, 1);
    pointLight.position.set(...xyzFromObject(AXIS_VALUES.desktop.pointLight.position));
    scene.add(pointLight);
}

function setPlane() {
    gradient.material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0.0 },
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec2 vUv;
            uniform float uTime;

            void main() {
                float gradient = (vUv.x + vUv.y) / 2.0; // 45 градусов

                vec3 dynamicColor = vec3(sin(uTime) * 0.5 + 0.5, cos(uTime) * 0.5 + 0.5, sin(uTime * 1.5) * 0.5 + 0.5);

                float smoothGradient1 = smoothstep(0.3, 0.64, gradient);
                float smoothGradient2 = smoothstep(0.64, 0.68, gradient);

                vec3 color = mix(dynamicColor, vec3(0.0, 0.0, 0.0), smoothGradient1);
                color = mix(color, dynamicColor, smoothGradient2);

                gl_FragColor = vec4(color, 1.0);
            }
        `,
        side: THREE.DoubleSide,
    });

    const geometry = new THREE.PlaneGeometry(40, 40);
    const plane = new THREE.Mesh(geometry, gradient.material);

    plane.renderOrder = -1;
    plane.position.y = 5;
    plane.position.z = -4;

    scene.add(plane);
}

async function loadModel(modelFileName: string): Promise<THREE.Group<THREE.Object3DEventMap>> {
    return new Promise((res) => {
        glbLoader.load(`${modelsPath}${modelFileName}.glb`, (gltf) => {
            const model = gltf.scene;
            model.name = modelFileName;
            model.position.set(...xyzFromObject(AXIS_VALUES.desktop[modelFileName].position));
            model.rotation.set(...xyzFromObject(AXIS_VALUES.desktop[modelFileName].rotation));
            model.scale.set(...xyzFromObject(AXIS_VALUES.desktop[modelFileName].scale));
            scene.add(model);
            threeModelsList.push(model);
            res(model);
        });
    });
}

function renderElemActivate() {
    if (renderElem?.parentNode) {
        (renderElem.parentNode as HTMLElement).style.cssText = `z-index: 99999; pointer-events: auto;`;
    }
}

function mouseMoveScene(e: Event) {}

async function initThreeMainScene() {
    setRenderElem();

    if (!renderElem) return;

    setRenderer();

    setScene();

    setCamera();

    setLights();

    setPlane();

    await Promise.all([loadModel('laptop'), loadModel('rock1'), loadModel('rock2'), loadModel('rock3')]);

    resizeScene();

    animateScene();

    // setDevOrbitControls();

    // setDevGrid();

    // setDevLights();
}

export { initThreeMainScene, mouseMoveScene, resizeScene };
