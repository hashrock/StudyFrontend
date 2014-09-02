new Vue({
    el:"#main",
    methods:{
        selectPallete: function(pallete){
            this.selectedColor=pallete;
        }
    },
    data:{
        selectedColor: "#000",
        palletes: [
            "#000",
            "#900",
            "#090",
            "#009",
            "#999",
            "#FFFFFF"
        ]
    },
    ready:function(){
        var imageSize = 24;
        var canvasSize = 240;
        var dotSize = canvasSize / imageSize;

        var mainCanvasBackground = document.getElementById("main-canvas-background");
        var contextBackground = mainCanvasBackground.getContext('2d');
        for(var i = 0; i < imageSize; i++){
            for(var j = 0; j < imageSize; j++){
                contextBackground.fillStyle=("rgb(240,240,240)");
                if(i % 2 === 0 && j % 2 === 0){
                    contextBackground.fillStyle=("rgb(255,255,255)");
                }
                if(i % 2 !== 0 && j % 2 !== 0){
                    contextBackground.fillStyle=("rgb(255,255,255)");
                }
                contextBackground.fillRect(i * dotSize, j * dotSize, dotSize, dotSize);
            }
        }

        var mainCanvas = document.getElementById("main-canvas");
        var self = this;
        var onDraw = function(e){
            var context = mainCanvas.getContext('2d');
            context.fillStyle=self.selectedColor;

            context.fillRect(
                Math.floor(e.offsetX / dotSize) * dotSize,
                Math.floor(e.offsetY / dotSize) * dotSize,
                dotSize,
                dotSize
            );
        };

        var clicked = false;
        mainCanvas.addEventListener("mousedown", function(e){
            clicked = true;
            onDraw(e);
        });
        mainCanvas.addEventListener("mouseup", function(e){
            clicked = false;
        });
        mainCanvas.addEventListener("mousemove", function(e){
            if(clicked){
                onDraw(e);
            }
        });
    }
});
