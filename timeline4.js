


d3.csv("pumps.csv")
  .row(function(d1){return{x:(d1.x),y:(d1.y)};} )
  .get(function(error,data){
    var height = 400;
    var width = 600;



d3.csv("deaths_age_sex.csv")
  .row(function(d){

    return{x:(d.x),y:(d.y),age:(d.age),sex:(d.gender)};} )
  .get(function(error,data2){
    var height = 400;
    var width = 600;
    


  deaths = data2; //copy data2 data to deaths
var circles = svg1.selectAll("circle")                                  
                        .data(data2)
                        .enter().append("circle")
                        .attr("r", 3)
                        .style("opacity", 0.8)
                        .style("stroke-width", 2)
                        .style ("stroke", function (d1) {

                          if ((d1.sex)== '0')//Male
                              {return "#8c2d04"}
                else {return "#c7e9b4"}


                                        
                                                        }
                              )
                        .attr("cx", function (d1) { return (d1.x*20); }) //read about function(d)
                        .attr("cy", function (d1) { return 500 - (d1.y*20); })
        .style("fill", function (d1) { 

                      if((d1.age)=='0') 
                          {return "#253494"}
                      else if ((d1.age)=='1') 
                          {return "#225ea8"}
                       else if ((d1.age)=='2')  
                          {return "#1d91c0"}
                       else if ((d1.age)=='3') 
                          {return "#41b6c4"}
                      else if ((d1.age)=='4') 
                          {return "c7e9b4"}
                      else 
                          {return "#7fcdbb"}



                  }
          )


      //console.log(data2)
      

        
         d3.json("streets.json", function(json){
                streets = json; //copy data from json to streets
                console.log(streets); // output json to console
                //output_streets(streets)
                      var width = 400;
                      var height = 600;
                  
                      var lineFunction = d3.line()
                                 .x(function(d) { return  d.x*20; })
                                 .y(function(d) { return 500 - d.y*20; });
                    svg1.selectAll(".line")
                    .data(streets)

                    .enter().append("path")
                 
                    
                    .attr("d", lineFunction)
                    .attr("stroke", "black")
                    .attr("stroke-width", 2)
                    .attr("fill", "none")
                    
                   

                      
                  svg1.append("text")
                    .text("Broadway Street")
                    .style("font-size", "8px")
                    .style("fill", "#00008B")

                    .attr("x", -110)
                    .attr("y", 75)
                    .attr("transform", "translate(300,150) rotate(332)")


                    svg1.append("text")
                    .text("Work House")
                    .style("font-size", "8px")
                    .style("fill", "#00008B")

                    .attr("x", -120)
                    .attr("y", 38)
                    .attr("transform", "translate(300,150) rotate(332)")

                   svg1.append("text")
                    .text("Brewery")
                    .style("font-size", "8px")
                    .style("fill", "#00008B")

                    .attr("x", -110)
                    .attr("y", -65)
                    .attr("transform", "translate(300,150) rotate(245)")

                    svg1.append("text")
                    .text("Dean Street")
                    .style("font-size", "8px")
                    .style("fill", "#00008B")

                    .attr("x", 40)
                    .attr("y", -10)
                    .attr("transform", "translate(300,150) rotate(65)")
                                   }


                  );

      }
     );


    var svg1 = d3.select('#my_Street').append('svg')
        .attr('height', 460)
        .attr('width',400)
        .call(d3.zoom().on("zoom", function () {
                                                            svg1.attr("transform", d3.event.transform)
                                                            }
                                                            
                                       )
                          )
                    .append("g");


var circles = svg1.selectAll("circle")                                  
                        .data(data)
                        .enter().append("circle")
                        .attr("r", 8)
                        .attr("cx", function (d1) { return (d1.x*20); }) //read about function(d)
                        .attr("cy", function (d1) { return 500 - (d1.y*20); });


svg1.append("text")
                    .text("Legend")  
                    .style("font-size", "20px")
                    .style("fill", "#00008B")

                    .attr("x", -20)
                    .attr("y", -50)
                    .attr("transform", "translate(85,70) rotate(0)")
svg1.append("text")
                    .text("Pumps")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", 0)
                    .attr("y", 5)
                    .attr("transform", "translate(100,80) rotate(0)")

svg1.append("circle")
              .attr("cx", 83)
              .attr("cy",80)
              .attr("r",8);




svg1.append("text")
                    .text("Male")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", 120)
                    .attr("y", 5)
                    .attr("transform", "translate(100,80) rotate(0)")

svg1.append("circle")
              .attr("cx", 210)
              .attr("cy",80)
              .attr("r",3)
              .style ("stroke", "#8c2d04")
              .style ("stroke-width", 1.5);

svg1.append("text")
                    .text("Female")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", 180)
                    .attr("y", 5)
                    .attr("transform", "translate(100,80) rotate(0)")

svg1.append("circle")
              .attr("cx", 270)
              .attr("cy",80)
              .attr("r",3)
              .style ("stroke", "#c7e9b4")
              .style ("stroke-width", 1.5);


svg1.append("text")
                    .text("John Snow's Cholera Map")  
                    .style("font-size", "20px")
                    .style("fill", "#00008B")

                    .attr("x", -30)
                    .attr("y", 40)
                    .attr("transform", "translate(100,80) rotate(0)")



svg1.append("text")
                    .text("Age: 0 - 10")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", -10)
                    .attr("y", -40)
                    .attr("transform", "translate(100,80) rotate(0)")

svg1.append("circle")
              .attr("cx", 80)
              .attr("cy",35)
              .attr("r",3)
              .style("fill", "#253494")

svg1.append("text")
                    .text("Age: 11 - 20")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", 75)
                    .attr("y", -40)
                    .attr("transform", "translate(100,80) rotate(0)")

svg1.append("circle")
              .attr("cx", 165)
              .attr("cy",35)
              .attr("r",3)
              .style("fill", "#225ea8")

svg1.append("text")
                    .text("Age: 21 - 40")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", 160)
                    .attr("y", -40)
                    .attr("transform", "translate(100,80) rotate(0)")

svg1.append("circle")
              .attr("cx", 250)
              .attr("cy",35)
              .attr("r",3)
              .style("fill", "#1d91c0")

svg1.append("text")
                    .text("Age: 41 - 60")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", -10)
                    .attr("y", -20)
                    .attr("transform", "translate(100,80) rotate(0)")

svg1.append("circle")
              .attr("cx", 80)
              .attr("cy",55)
              .attr("r",3)
              .style("fill", "#41b6c4")

svg1.append("text")
                    .text("Age: 61 - 80")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", 75)
                    .attr("y", -20)
                    .attr("transform", "translate(100,80) rotate(0)")

svg1.append("circle")
              .attr("cx", 165)
              .attr("cy",55)
              .attr("r",3)
              .style("fill", "#c7e9b4")

svg1.append("text")
                    .text("Age: > 80")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", 160)
                    .attr("y", -20)
                    .attr("transform", "translate(100,80) rotate(0)")

svg1.append("circle")
              .attr("cx", 250)
              .attr("cy",55)
              .attr("r",3)
              .style("fill", "#41b6c4")





        });



var svg8 = d3.select("#my_dataviz")
  .append("svg8")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    



d3.csv("deathdays.csv",
  
 
  function(d){
    return { date : d3.timeParse ('%e-%b') (d.date), value : d.deaths, Cummulative
: d.Cummulative}
    
               },


  function(data) {

    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    var y = d3.scaleLinear()
      .domain( [0, 150])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

    var Tooltip = d3.select("#my_dataviz")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("display", "inline-block");


      var mouseover = function(d) {
        
        Tooltip
          .style("opacity", 1)


                    }
      var mousemove = function(d) {
        Tooltip
          .html(d3.timeFormat("%e-%b")(d.date) + " : " + d.value +"( Total Deaths:"+ d.Cummulative
+")")
          .style("left", (d3.mouse(this)[0]+70) + "px")
          .style("top", (d3.mouse(this)[1]) + "px")
                      }
      var mouseleave = function(d) {
        Tooltip
          .style("opacity", 0)
                      }
     

    // Add the points
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
        .attr("class", "myCircle")
        .attr("cx", function(d) { return x(d.date) } )
        .attr("cy", function(d) { return y(d.value) } )
        .attr("r", 8)
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 3)
        .attr("fill", "white")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

 svg.append("text")
                    .text("Number of deaths per day")  
                    .style("font-size", "24px")
                    .style("fill", "#00008B")

                    .attr("x", 0)
                    .attr("y", -70)
                    .attr("transform", "translate(100,80) rotate(0)")
  
svg.append("text")
                    .text("Deaths")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", -150)
                    .attr("y", -130)
                    .attr("transform", "translate(100,80) rotate(270)")

svg.append("text")
                    .text("Date")  
                    .style("font-size", "12px")
                    .style("fill", "#00008B")

                    .attr("x", 110)
                    .attr("y", 308)
                    .attr("transform", "translate(100,80) rotate(0)")
})


