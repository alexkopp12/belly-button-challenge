// Get the samples.json endpoint
const samples_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


//Build Charts function will build both charts for the activity

function buildCharts(sample) {
  //Test top make sure function works
  console.log('This is test')

  // Fetch the JSON data and console log it
  d3.json(samples_data).then(function(data) {
    console.log(data);
  

  //Pull sample object from data
  let samples = data.samples;
  console.log(samples)
  
  //Filter samples for the given argument
  let sampleSelected = samples.filter(sampleObject => sampleObject.id == sample)
  console.log(sampleSelected)

  //Creating variables for charts:
  let sampleResult = sampleSelected[0];

  let sample_values = sampleResult.sample_values;
  
  let otu_ids = sampleResult.otu_ids;

  let otu_labels = sampleResult.otu_labels;

  //Build Bar Char
  var trace1 = {
    x: sample_values.slice(0,10).reverse(),
    y: otu_ids.slice(0,10).map(otu_ids => `OTU ${otu_ids}`),
    text: otu_labels.slice(0, 10).reverse(),
    type: 'bar',
    orientation: 'h',
    marker: {
      color: 'rgb(120,120,120)'
    }
  };

  // Declaring data set for bar chart data
  var dataBar = [trace1];

  // // Building out the Graph for bar chart data
  var layout = {
    title: `Top 10 Bacteria for Sample`,
    xaxis: {title: 'OTU ID'},
    yaxis: {title: 'Sample Values'},
    font:{
      family: 'Raleway, sans-serif'
    },
    bargap :0.05
  };

  Plotly.newPlot('bar', dataBar, layout);

  //Build Bubble Chart
  var trace2 = {
    x: otu_ids,
    y: sample_values,
    mode: 'markers',
    marker: {
      color: otu_ids,
      opacity: .8,
      size: sample_values
    }
  };
  
  var bubble = [trace2];
  
  var layoutBubble = {
    title: 'OTU by Sample Values',
    xaxis: {title: 'OTU ID'},
    yaxis: {title: 'Sample Values'},
  };
  
  Plotly.newPlot('bubble', bubble, layoutBubble);


})};


// Build Meta Data Chart
function buildMetaData(sample){
  // Fetch the JSON data and console log it
  d3.json(samples_data).then(function(data) {
    console.log(data);

  let metadata = data.metadata;
  
  let metadataArray = metadata.filter(sampleObject => sampleObject.id == sample)
  
  let metadataResult = metadataArray[0];
  
  let metadataPanel = d3.select("#sample-metadata")
  
  //wipe metadata
  metadataPanel.html("");
  
  //insert metadata into demo info
  for (key in metadataResult) {
    metadataPanel.append('h5').text(`${key.toUpperCase()}: ${metadataResult[key]}`)
  };

})};

  
//Event Listener function
//<select id="selDataset" onchange="optionChanged(this.value)"></select>
function optionChanged(newSample) {
  // buildcharts
  buildCharts(newSample);
  buildMetaData(newSample);
};


//Initialization function
function Initialize() {
  //Insert Drop Down Menu
  
  // Fetch the JSON data and console log it
  d3.json(samples_data).then(function(data) {
    console.log(data);
  
  let sampleNames = data.names;

  //<select id="selDataset" onchange="optionChanged(this.value)"></select>
  let pulldownSelect = d3.select("#selDataset")
  
  for (let index = 0; index < sampleNames.length; index++) {
    pulldownSelect
      .append("Option")
      .text(sampleNames[index])
      .property("value", sampleNames[index])
  };

  
  // Call Build Charts Function
  buildCharts(940);

  // Call Build MetaData Log
  buildMetaData(940);

})};

Initialize();