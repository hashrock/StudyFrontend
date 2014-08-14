//正方形を再描画
function update(newSize,color){
    d3.selectAll("rect.myrect").datum(newSize)
        .attr("width", newSize * 10)
        .attr("height", newSize * 10)
        .attr("x", "30")
        .attr("y", "30")
        .style("fill", color.toString())
    ;
}

new Vue({
    el: "#main",
    data: {
        size: 15,
        colorR:0,
        colorG:0,
        colorB:0
    },
    ready: function() {
        //まずRectを追加。
        d3.selectAll("svg").append("rect")
            .attr("class", "myrect");

        this.$watch("size", function (newSize) {
            var color = d3.rgb(this.colorR, this.colorG, this.colorB);
            update(newSize, color);
        });
        this.$watch("colorR", function (value) {
            var color = d3.rgb(this.colorR, this.colorG, this.colorB);
            update(this.size, color);
        });
        this.$watch("colorG", function (value) {
            var color = d3.rgb(this.colorR, this.colorG, this.colorB);
            update(this.size, color);
        });
        this.$watch("colorB", function (value) {
            var color = d3.rgb(this.colorR, this.colorG, this.colorB);
            update(this.size, color);
        });

        //現行のパラメータで初期化
        var color = d3.rgb(this.colorR, this.colorG, this.colorB);
        update(this.size, color);
    }
});