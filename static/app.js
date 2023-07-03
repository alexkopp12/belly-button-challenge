// Get the samples.json endpoint
const samples = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(samples).then(function(data) {
  console.log(data);
});









// Setting up data trace for bar chart data
var trace1 = {
  x: samples.map(object => object.samples.samples_values),
  y: samples.map(object => object.samples.otu_ids),
  text: samples.map(object => object.samples.otu_labels),
  type: 'bar',
  orientation: 'h',
  marker: {
    color: 'rgb(142,124,195)'
  }
};

// Declaring data set for bar chart data
var data = [trace1];

// // Building out the Graph for bar chart data
var layout = {
  title: 'Top 10 OTUs for Individual',
  font:{
    family: 'Raleway, sans-serif'
  },
  bargap :0.05
};

Plotly.newPlot('OTU Bar Chart', data, layout);

