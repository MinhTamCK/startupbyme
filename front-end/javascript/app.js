/* particlesJS.load(@dom-id, @path-json*/
var flag = true;
particlesJS.load('stu-particles', '../javascript/data/particles.json');
setInterval(function() {
    if (flag) {
        particlesJS.load('stu-particles', '../javascript/data/particles-2.json');
        flag = false;
    } else {
        particlesJS.load('stu-particles', '../javascript/data/particles.json');
        flag = true;
    }
}, 10000);

// Trianglify create
var pattern = Trianglify({
    width: window.innerWidth,
    height: 500
});
$('.stu-trianglify').append(pattern.canvas());
