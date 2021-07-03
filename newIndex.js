import * as OrbitControls from "/orbit"

let scene, camera, renderer, controls;
let cube1, cube2, cube3, cube4, cube5;
const canvas = document.getElementById("box4");
const canvasHeader = document.getElementById("projectHeader");

    const showCube1 = document.getElementById("cube1");
    const showCube2 = document.getElementById("cube2");
    const showCube3 = document.getElementById("cube3");
    const showCube4 = document.getElementById("cube4");
    const showCube5 = document.getElementById("cube5");

    function hideAll(){
        showCube1.style.visibility = "hidden";
        showCube1.style.opacity = 0;
        showCube2.style.visibility = "hidden";
        showCube2.style.opacity = 0;
        showCube3.style.visibility = "hidden";
        showCube3.style.opacity = 0;
        showCube4.style.visibility = "hidden";
        showCube4.style.opacity = 0;
        showCube5.style.visibility = "hidden";
        showCube5.style.opacity = 0;
    }

    function show(item) {
        hideAll();
        item.style.visibility = "visible";
        item.style.display = "flex";
        let x = 0.1;
        let fade = setInterval(() =>{
            item.style.opacity = x;
            x += 0.1
            if(x >= 1){
                clearInterval(fade);
                fade = 0;
            }
        }, 75)
    }

function init(){ 
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        canvas.offsetWidth / canvas.offsetHeight,
        0.1,
        1000
    );

    const pivot = new THREE.Group(); // Will be at scene origin by default
    pivot.add(camera); // Add the camera object to the pivot object (parent-child relationship)
    scene.add(pivot); 

    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight - canvasHeader.clientHeight);
    
    canvas.appendChild(renderer.domElement);
    
    //document.addEventListener('touchend', onDocumentTouchEnd, false);
    
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const texture1 = new THREE.TextureLoader().load("/cube1")
    const material1 = new THREE.MeshBasicMaterial( {map: texture1});
    const texture2 = new THREE.TextureLoader().load("/cube2")
    const material2 = new THREE.MeshBasicMaterial( {map: texture2});
    const texture3 = new THREE.TextureLoader().load("/cube3")
    const material3 = new THREE.MeshBasicMaterial( {map: texture3});
    const texture4 = new THREE.TextureLoader().load("/cube4")
    const material4 = new THREE.MeshBasicMaterial( {map: texture4});
    const texture5 = new THREE.TextureLoader().load("/cube5") // make 5
    const material5 = new THREE.MeshBasicMaterial( {map: texture5}); //make 5
    cube1 = new THREE.Mesh(geometry, material1);
    cube2 = new THREE.Mesh(geometry, material2);
    cube3 = new THREE.Mesh(geometry, material3);
    cube4 = new THREE.Mesh(geometry, material4);
    cube5 = new THREE.Mesh(geometry, material5); // make 5
    
    cube1.position.z = 5;
    cube1.position.x = -5;
    cube1.rotation.y = .5;

    cube2.position.z = -5;
    cube2.position.x = -6;

    cube3.position.x = 5;
    cube3.position.z = 5;
    cube3.rotation.y = 1.1;

    cube4.position.x = 5;
    cube4.position.z = -5;
    cube4.rotation.y = 1.1;

    cube5.position.x = 0;
    cube5.position.z = 0;
    cube5.position.y = 5;
    cube5.rotation.y = 1.1;



   /* function onDocumentTouchEnd(event) {
        event.preventDefault();
    
        mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
    
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(cube1);
    } */

    var domEvents	= new THREEx.DomEvents(camera, renderer.domElement);
    domEvents.addEventListener(cube1, "click", event => {
        show(showCube1);
    }, false)
    domEvents.addEventListener(cube2, "click", event => {
        show(showCube2);
    })
    domEvents.addEventListener(cube3, "click", event => {
        show(showCube3);
    })
    domEvents.addEventListener(cube4, "click", event => {
        show(showCube4);
    })
    domEvents.addEventListener(cube5, "click", event => {
        show(showCube5);
    })
    


    controls = new THREE.OrbitControls( camera, renderer.domElement);
    console.log(THREE)
    camera.position.z = 18;
    camera.position.y = 5;

    scene.add(cube1, cube2, cube3, cube4, cube5);

    
}


function animate() {
    requestAnimationFrame(animate);
    controls.update();
    cube1.rotation.y += 0.005;
    cube2.rotation.y += 0.005;
    cube3.rotation.y += 0.005;
    cube4.rotation.y += 0.005;
    cube5.rotation.y += 0.005;

    renderer.render(scene, camera);
}

function onWindowResize(){
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight - canvasHeader.clientHeight);
    } 

window.addEventListener("resize", onWindowResize, false);

if (window.matchMedia('(max-width: 1200px)').matches){
    1 == 1;
} else {
    init();
    animate();
}

