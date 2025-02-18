import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { BASE_PATH } from '@/router/basePath';

const glbLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();

dracoLoader.setDecoderPath(`${BASE_PATH}models/draco/`);
glbLoader.setDRACOLoader(dracoLoader);
dracoLoader.preload();

export { glbLoader };
