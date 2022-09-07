
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0xff00ff } );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );


scene.add( line );

//create a blue LineBasicMaterial
const materialAdditional = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const pointsAdditional = [];
pointsAdditional.push( new THREE.Vector3( - 10, 0, 0 ) );
pointsAdditional.push( new THREE.Vector3( 0, 10, 0 ) );
pointsAdditional.push( new THREE.Vector3(  10, 0, 0 ) );

const geometryAdditional = new THREE.BufferGeometry().setFromPoints( pointsAdditional );

const lineExtra = new THREE.Line( geometryAdditional, materialAdditional );


scene.add( lineExtra );


renderer.render( scene, camera );

//cube

const geometryCube = new THREE.BoxGeometry( 2, 2, 2 );
const materialCube = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometryCube, materialCube );

cube.position.z = -10;

cube.position.y = -10;

scene.add( cube );



let rotationFast = 0;
let cubeSinBounce = 0;
let steps = 0.01;

let myReq;

let time = 0;

function animate() {
    time = time + 0.001;

	myReq = requestAnimationFrame( animate ); //invoke repeating of html. ties to the screen refresh rate
	renderer.render( scene, camera );

    geometry.rotateX(steps);
    geometry.rotateY(steps);
    geometry.rotateZ(steps);


    if(rotationFast >= 3.61){
        cancelAnimationFrame(myReq);

        let newColor = new THREE.Color(Math.sin(Math.abs(time * Math.random())),Math.sin(Math.abs(Math.cos(time * Math.random()) )),Math.sin(Math.abs(Math.tan(time * Math.random()) )));
        //let newColor = new THREE.Color(1,0,0);
        //newColor.setRGB(1.0,0.0,0.0);
        let mesh = new THREE.Mesh( new THREE.DodecahedronGeometry( 2, 2, 2 ), new THREE.MeshBasicMaterial( { color: newColor } ))

        

        scene.add(mesh);

        mesh.position.x = Math.cos(rotationFast * steps * time * 10 * Math.random()) * 30;
        mesh.position.y = Math.sin(rotationFast * steps * time * 10 * Math.random()) * 30;
        mesh.position.x = Math.cos(rotationFast * steps * time * 10 * Math.random()) * 30;

        rotationFast = 0;
        steps = steps + 0.005;

        


        animate();
        
    }
    rotationFast = rotationFast + steps;

    console.log(rotationFast);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cubeSinBounce += 0.02;

    cube.position.y = Math.sin(cubeSinBounce) * 20;
    cube.position.x = Math.tan(cubeSinBounce) * 10;

}

animate();

