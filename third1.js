// set the dimensions and margins of the graph


var margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



d3.csv("deaths_age_sex.csv", function(d) {


var Age10 = 0
var Age20 = 0
var Age40 = 0
var Age60 = 0
var Age80 = 0
var Age81 = 0
   

 
      var Male = 0
      var Female = 0
      for (let i = 0; i < d.length; i++) {
        // gender == 'O' t




 if((d[i].gender)== 0) //Male
                          {
    Male ++;
                         }
    else                  {

      Female ++
                          }

       
                                      }

 for (let i = 0; i < d.length; i++) {
    
    if((d[i].age)== 0) {

Age10 ++;
                       }
else if  ((d[i].age)== 1) {

Age20 ++;
                      }


else if  ((d[i].age)== 2) {

Age40 ++;
                      }

else if  ((d[i].age)== 3) {

Age60 ++;
                      }

else if  ((d[i].age)== 4) {

Age80 ++;
                      }

else                  {

      Age81 ++
                          }

                              
// console.log ( Age10)
                              }



let  gender_arr = [];
gender_arr.push([Male]);
gender_arr.push ([Female]); 
console.log(gender_arr); 


let age_arr = []
age_arr.push([Age10]);
age_arr.push([Age20]);
age_arr.push([Age40]);
age_arr.push([Age60]);
age_arr.push([Age80]);
age_arr.push([Age81]);
//console.log(age_arr)



// var x = d3.scaleBand()
//   .range([ 0, width ])
//   .domain(data.map(function(d) { return d.age; }))
//   .padding(0.2);
// svg.append("g")
//   .attr("transform", "translate(0," + height + ")")
//   .call(d3.axisBottom(x))
//   .selectAll("text")
//     .attr("transform", "translate(-10,0)rotate(-45)")
//     .style("text-anchor", "end");

// // Add Y axis
// var y = d3.scaleLinear()
//   .domain([0, 571])
//   .range([ height, 0]);
// svg.append("g")
//   .call(d3.axisLeft(y));

// // Bars
// svg.selectAll("mybar")
//   .data(data)
//   .enter()
//   .append("rect")
//     .attr("x", function(d) { return x(d.age); })
//     .attr("y", ; })
//     .attr("width", x.bandwidth())
//     .attr("height", function(d) { return height - y(); })
//     .attr("fill", "#69b3a2")
 

 var CHART_HEIGHT = 130;
    
    
    
    var selection = d3.select('#svg2').selectAll('rect').data(gender_arr)
    
    selection.attr('height', 
      function(d) 
      { 
        return (d/400) * CHART_HEIGHT; 
      }
    );

    selection.attr('y', function(d) { return (1-d/400) * CHART_HEIGHT; });

 var CHART_HEIGHT = 130;
    
    
    console.log(age_arr)
    var selection = d3.select('#svg3').selectAll('rect').data(age_arr)
    
    selection.attr('height', 
      function(d) 
      { 
        return (d/400) * CHART_HEIGHT; 
      }
    );

    selection.attr('y', function(d) { return (1-d/400) * CHART_HEIGHT; });


                                              }

       );



    
