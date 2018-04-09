;$(function () {
    var SEPARATION = 100, AMOUNTX = 40, AMOUNTY = 40;
    var container, contHeight = window.innerHeight, windowMinHeight = 1000;
    var camera, scene, renderer;
    var particles, particle, count = 0;
    var mouseX = 0, mouseY = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = contHeight / 1.25;
    var frameTime = 16.67
    var updateTime = frameTime * 2
    var waitTime = 0;
    var timer = null;

    init();
    animate();
    $('.banner_ele').css({
        height: contHeight,
        minHeight: windowMinHeight + 'px'
    })

    $('.cont_main__slogan').addClass('active');

    function init() {
        container = $('.banner_particle')[0];
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / contHeight, 1, 10000);
        camera.position.z = 1000;
        scene = new THREE.Scene();
        particles = new Array();
        var PI2 = Math.PI * 2;
        var material = new THREE.ParticleCanvasMaterial({
            color: 0xffffff,
            program: function (context) {
                context.beginPath();
                context.arc(0, 0, 1, 0, PI2, true);
                context.fill();
            }
        });
        var i = 0;
        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++] = new THREE.Particle(material);
                particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
                scene.add(particle);
            }
        }
        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, contHeight);
        container.appendChild(renderer.domElement);
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        window.addEventListener('resize', onWindowResize, false);
        // window.document.addEventListener('scroll', onDocScroll, false);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = contHeight / 1.5;
        camera.aspect = window.innerWidth / contHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        $('.banner_ele').css({
            height: window.innerHeight,
            minHeight: '1000px'
        })
    }

    function onDocScroll(e){
        var scrollTop = $(document).scrollTop()
        timer && setTimeout(timer)
        timer = setTimeout(function(){
            if(scrollTop > window.innerHeight && window.innerHeight >= windowMinHeight){
                console.log(1231231)
                SEPARATION = 1, AMOUNTX = 1, AMOUNTY = 1;
            } else {
                SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
            }
            camera.updateProjectionMatrix();
        }, 300)
        console.log($(document).scrollTop())
    }

    function onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    }

    function animate() {
        requestAnimationFrame(animate);
        waitTime += frameTime
        if (waitTime >= updateTime) {
            waitTime = 0
            render();
        }
    }

    function render() {
        camera.position.x += (mouseX - camera.position.x) * .05;
        camera.position.y += (- mouseY - camera.position.y) * .05;
        camera.lookAt(scene.position);
        var i = 0;
        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++];
                particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 2 + (Math.sin((iy + count) * 0.5) + 1) * 2;
            }
        }
        renderer.render(scene, camera);
        count += 0.1;
    }
})