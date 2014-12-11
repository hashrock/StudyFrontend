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
