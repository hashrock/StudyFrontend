var data = [
    {name: "Task1", type:"range", start:new Date("2014-11-01"), end:new Date("2014-11-10")},
    {name: "Task2", type:"range", start:new Date("2014-11-11"), end:new Date("2014-11-21")},
    {name: "Task3", type:"range", start:new Date("2014-12-01"), end:new Date("2014-12-05")}
];

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 300 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var xScale = d3.scale.linear()
    .domain([-width / 2, width / 2])
    .range([0, width]);

function getXAxis(start, end){
    var xAxis = d3.svg.axis()
        .scale(d3.scale.linear()
            .domain([start, end])
            .range([0, width]))
        .orient("bottom")
        .tickSize(-height);
    return xAxis;
}

var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .tickSize(-height);

var zoom = d3.behavior.zoom()
    .x(xScale)
    .scaleExtent([1, 10])
    .on("zoom", function(){
        self.globalSetting.range_start = xScale.invert(0);
        self.globalSetting.range_end = xScale.invert(300);

        svg.select(".x.axis").call(xAxis);
        svg.select(".y.axis").call(yAxis);
    });


var svg = d3.select("#main")
    .append("svg")
    .attr("width", 300)
    .attr("height", 300);

//Create
var rect = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect");

//Update
rect.attr("x", 0)
    .attr("y", function(d,i){return 300 * i / data.length })
    .attr("width", 300)
    .attr("height", 300 / data.length);

var svg = d3.select(this.$el).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .call(zoom);//zoom関数に引数付きでセレクションを渡す
