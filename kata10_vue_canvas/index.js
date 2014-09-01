new Vue({
    el:"#main",
    methods:{
        selectPallete: function(pallete){
            console.log(pallete);
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

        var mainCanvasBackground = document.getElementById("main-canvas-background");
        var contextBackground = mainCanvasBackground.getContext('2d');
        for(var i = 0; i < 24; i++){
            for(var j = 0; j < 24; j++){
                if(i % 2 === 0){
                    if(j % 2 === 0){
                        contextBackground.fillStyle=("rgb(255,255,255)");
                    }else{
                        contextBackground.fillStyle=("rgb(240,240,240)");
                    }
                }else{
                    if(j % 2 === 0){
                        contextBackground.fillStyle=("rgb(240,240,240)");
                    }else{
                        contextBackground.fillStyle=("rgb(255,255,255)");
                    }
                }
                contextBackground.fillRect(i * 10, j * 10, 10, 10);
            }
        }

        var mainCanvas = document.getElementById("main-canvas");
        var self = this;
        var onDraw = function(e){
            var context = mainCanvas.getContext('2d');
            context.fillStyle=self.selectedColor;

            context.fillRect(
                    Math.floor(e.offsetX / 10) * 10,
                    Math.floor(e.offsetY / 10) * 10,
                10,
                10
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
