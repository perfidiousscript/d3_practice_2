/**
 * Created by samuelmoss on 12/28/15.
 */

console.log("script is loading");

var w = 300;
var h = 300;
var outerRadius = w/2;
var innerRadius = 0;

var color = d3.scale.category10();

var dataset = [7,23,34,8,19];

var pie = d3.layout.pie();

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

var svg = d3.select("body")
    .append("svg")
    .attr("height", h)
    .attr("width", w);

var arcs = svg.selectAll('g.arc')
    .data(pie(dataset))
    .enter()
    .append('g')
    .attr('class', 'arc')
    .attr('transform', 'translate('+ outerRadius + ',' + outerRadius + ')');

arcs.append("path")
    .attr('fill', function(d,i){
        return color(i);
    })
    .attr("d", arc);

arcs.append("text")
    .attr("transform", function(d){
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr('text-anchor', "middle")
    .text(function(d){
        return d.value;
    });






pie(dataset);




//var svg = d3.select("body").append("svg");
//
//svg.attr("height", 500);
//svg.attr("width", 900);
//
//var dataset = [50,100,150,50,100,250,450];
//
//var sortOrder = false;
//
//
//svg.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    .attr("height", function(d){ return d })
//    .attr("width", 50)
//    .attr("x", function(d,i){return i * 60})
//    .attr("fill", "blue")
//    .on("click", function(d, i) {
//        sortBars();
//        })
//    .on("mouseover", function(d){
//        //var xPosition = parseFloat(d3.select(this).attr("x"));
//        //var yPosition = parseFloat(d3.select(this).attr("y"));
//        //svg.append("text")
//        //    .attr('x', xPosition)
//        //    .attr('y', yPosition)
//        //    .text("This is " + d)
//        //    .attr("text-anchor", "middle")
//        //    .attr("font-family", "sans-serif")
//        //    .attr("font-size", "11px")
//        //    .attr("font-weight", "bold")
//        //    .attr("fill", "black")
//        //    .attr('id', 'tooltip');
//        d3.select(this)
//            .attr("fill", "orange");
//    })
//    .on("mouseout", function(d){
//        d3.select(this)
//            .transition()
//            .duration(250)
//            .attr("fill", "rgb(" + d%100 +","+ d%25+"," + d%255 + ")");
//    });
//
//
//sortBars = function(){
//    sortOrder = !sortOrder;
//    svg.selectAll("rect")
//        .sort(function(a,b){
//            return sortOrder?d3.ascending(a,b):d3.descending(a,b);
//        })
//        .transition()
//        .delay(function(d,i){
//            return i * 50;
//        })
//        .duration(1000)
//        .attr("x", function(d,i){
//            return i * 60
//        })
//};
//
//
////svg.attr("height", 500);
////svg.attr("width", 900);
////
////svg.append("rect")
////    .attr("height", 50)
////    .attr("width", 50)
////    .style("fill", "red");