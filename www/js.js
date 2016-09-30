$(function(){
    var canvas = $('#canvas')[0];
    var context = canvas.getContext('2d');
    var startX, startY;
    
    $('canvas').on('touchstart', function(event){
        event.preventDefault();
        var pageX = event.originalEvent.touches[0].pageX;
        var pageY = event.originalEvent.touches[0].pageY;
        
        var point = getCanvasPoint(pageX, pageY);
        startX = point.x;
        startY = point.y;
    });
    
    $('canvs').on('touchmove', function(event){
        event.preventDefault();
        var pageX = event.originalEvent.touches[0].pageX;
        var pageY = event.originalEvent.touches[0].pageY;
        var point = getCanvasPoint(pageX, pageY);
        var endX = point.X;
        var endY = point.Y;
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.stroke();
        startX = endX;
        startY = endY;
    });
    
    function getCannvasPoint(pageX, pageY){
        var base = canvas.getBoundingClientRect();
        return {
            x: pageX - base.left,
            y: pageY - base.top
        };
    }
});