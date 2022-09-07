
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );


scene.add( line );



let a = 0;
let steps = 0.01;

let myReq;

function animate() {
	myReq = requestAnimationFrame( animate ); //invoke repeating of html. ties to the screen refresh rate
	renderer.render( scene, camera );

    geometry.rotateX(steps);
    geometry.rotateY(steps);
    geometry.rotateZ(steps);


    if(a >= 3.61){
        cancelAnimationFrame(myReq);

        a = 0;
        steps = steps + 0.005;
        animate();
        
    }
    a = a + steps;

    console.log(a);
    
    

}

animate();

