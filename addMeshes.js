import {
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	Mesh,
	SphereGeometry,
	MeshPhongMaterial,
	MeshPhysicalMaterial,
	TextureLoader,
	BufferGeometry,
	Shape,
	ShapeGeometry,
	ExtrudeGeometry,
	CircleGeometry,
	TorusGeometry,
	ConeGeometry,
	CylinderGeometry
} from 'three'


const loader = new TextureLoader()



export const cylinder = () => {
	const color = loader.load('Water_001_COLOR.jpg')
	const displace = loader.load('Water_001_DISP.png')
	const normal = loader.load('Water_001_NORM.jpg')
	const spec = loader.load('Water_001_SPEC.jpg')
	const ao = loader.load('Water_001_OCC.jpg')

	const cylinderGeometry = new CylinderGeometry(0,60,2,100,32,32,false)
	const cylinderMaterial = new MeshPhysicalMaterial({
		map:color,
		displacementMap:displace,
		normalMap: normal,
		specularMap:spec,
		aoMap:ao,
		metalness: 0.0,
		roughness: 2,
		thickness: 1.5
	})
	const cylinderMesh = new Mesh(
		cylinderGeometry,
		cylinderMaterial
	)
	cylinderMesh.rotation.x = Math.PI/2;
	return cylinderMesh
}

export const cylinder1 = () => {
	const color = loader.load('Water_001_COLOR.jpg')
	const displace = loader.load('Water_001_DISP.png')
	const normal = loader.load('Water_001_NORM.jpg')
	const spec = loader.load('Water_001_SPEC.jpg')
	const ao = loader.load('Water_001_OCC.jpg')

	const cylinder1Geometry = new CylinderGeometry(0,60,2,20,32,32,true)
	const cylinder1Material = new MeshPhysicalMaterial({
		map:color,
		displacementMap:displace,
		normalMap: normal,
		specularMap:spec,
		aoMap:ao,
		metalness: 0.0,
		roughness: 2,
		thickness: 1.5
	})
	const cylinder1Mesh = new Mesh(
		cylinder1Geometry,
		cylinder1Material
	)
	cylinder1Mesh.rotation.x = Math.PI/2;
	return cylinder1Mesh
}

