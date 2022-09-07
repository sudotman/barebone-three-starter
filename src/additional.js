//create a blue LineBasicMaterial
const materialAdditional = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const pointsAdditional = [];
pointsAdditional.push( new THREE.Vector3( 0, - 20, 0 ) );
pointsAdditional.push( new THREE.Vector3( 0, 0, 10 ) );
pointsAdditional.push( new THREE.Vector3( 0, 10, 0 ) );

const geometryAdditional = new THREE.BufferGeometry().setFromPoints( pointsAdditional );

const lineExtra = new THREE.Line( geometryAdditional, materialAdditional );


scene.add( lineExtra );


renderer.render( scene, camera );