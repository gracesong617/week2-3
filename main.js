import './style.css'
import * as THREE from 'three'
import { cylinder} from './addMeshes'
import { cylinder1} from './addMeshes'
// import { outside} from './addMeshes'

import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
const scene = new THREE.Scene()
const meshes = {}
const lights = {}

const clock = new THREE.Clock()

init()
function init() {
	//set up our renderer default settings, add scene/canvas to webpage
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	meshes.cylinder = cylinder()

	meshes.cylinder1 = cylinder1()

	lights.default = addLight()

	scene.add(lights.default)
	scene.add(meshes.cylinder)
	scene.add(meshes.cylinder1)

	// scene.add(meshes.outside)

	// scene.add(meshes.arrow1)

	// scene.add(meshes.arrow2)


	camera.position.set(0, 0, 50)
	resize()
animate()
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	const tick = clock.getElapsedTime()
	requestAnimationFrame(animate)


	// meshes.outside.position.x = Math.sin(tick* 2)* 30
	// meshes.outside.position.z = Math.cos(tick* 2)* 50

	// meshes.outside.rotateOnAxis(new THREE.Vector3(0, 0, 1), 0.01);


	
	// meshes.arrow1.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), 0.05);


	// meshes.arrow2.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -0.02);

	// meshes.center.scale.x = Math.sin(tick* 5) * 0.2 + 1; 
    // meshes.center.scale.y = Math.sin(tick * 5) * 0.2 + 1;
    // meshes.center.scale.z = Math.sin(tick * 5) * 0.2 + 1;

	meshes.cylinder.rotation.y = meshes.cylinder.rotation.y + 0.002;
	meshes.cylinder1.rotation.y = meshes.cylinder1.rotation.y - 0.002;


	renderer.render(scene, camera)
}
