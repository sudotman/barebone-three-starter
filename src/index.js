

const scene = new THREE.Scene; //create our scene
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(); //the actual renderer, whos element we will attach to the canvas of our html
renderer.setSize(window.innerWidth,window.innerHeight,true); //set size of the renderer (the window size it will be taking up; the boolean can be false if we want to alter resolution)

document.body.appendChild(renderer.domElement); //actually append it to our html

const geometry = new THREE.BoxGeometry(1,1,1); //geometry defined with vertices/faces

const material = new THREE.MeshBasicMaterial({color: 0x00ff00}); //material with a predefined color

const cube = new THREE.Mesh(geometry,material); //mesh generated from the mesh and material // essentially unity's fbx import -> mesh + material

scene.add(cube); // this will add it to 0,0,0 in our 3d scene
 
camera.position.z = 5; // i am not going to explain this

//without this, we will not see anything because the rendering wont be called. the rendering is called through this function:
//remember html displays static elements and rendering takes up cpu instead so the loop/event tick/udpate function needs to be called for it to actively render or else why not use a static image lol
function animate() {
	requestAnimationFrame( animate ); //invoke repeating of html. ties to the screen refresh rate
	renderer.render( scene, camera );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate();