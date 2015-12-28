/**
 * Created by samuelmoss on 12/28/15.
 */

console.log("script is loading");


var svg = d3.select("body").append("svg");

svg.attr("height", 500);
svg.attr("width", 900);

var dataset = [50,100,150,50,100,250,450];


svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("height", function(d){ return d })
    .attr("width", 50)
    .attr("x", function(d,i){return i * 60})
    .attr("fill", "blue")
    .on("click", function(d, i) {
        sortBars();
        })
    .on("mouseover", function(){
        d3.select(this)
            .attr("fill", "orange");
    })
    .on("mouseout", function(d){
        d3.select(this)
            .transition()
            .duration(250)
            .attr("fill", "rgb(0, 0," + d + ")");
    });

sortBars = function(){
    svg.selectAll("rect")
        .sort(function(a,b){
            return d3.ascending(a,b)
        })
        .transition()
        .duration(1000)
        .attr("x", function(d,i){
            return i * 60
        })
};


//svg.attr("height", 500);
//svg.attr("width", 900);
//
//svg.append("rect")
//    .attr("height", 50)
//    .attr("width", 50)
//    .style("fill", "red");