/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../javascript/data/particles.json', function() {
    // var ctx =  $('.particles-js-canvas-el')[0].getContext('2d');
    // ctx.canvas.width = window.innerWidth;
    // console.log('ctx',ctx);
});

// Trianglify create
var pattern = Trianglify({
    width: window.innerWidth,
    height: 540
});
$('#particles-js').append(pattern.canvas());
