# belly-button-challenge
Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

* GitHub Page Link: https://alexkopp12.github.io/belly-button-challenge/

# Contents

* This project includes 2 working files: index.html, app.js
* index.html - formats and displays the webpage utilizing the Bootstrap repo
* app.js - utilizes 4 functions (buildCharts, buildMetadata, optionChanged, and Initialize) and the Plotly and D3 repo to download information from a web server and then translate that information into an automatically updating dashboard

* The four functions:
* buildCharts: Utilizes two plotly basic plot formats to create a horizontal and bubble chart. The function uses D3 to pull in a json data set into the webpage. 
* buildMetadata: Utilizes D3 to pull in the data from the json and then clears the metadata container in the HTML and adds in the new metadata related to the sample called in the function.
* optionChanged: Is an event listener that recognizes the selection of a value in the dropdown and calls the buildMetadata and buildCharts function with the value passed through.
* Initialize: sets the page with the initial values for the dashboard and inserts the dropdown into the Well on the page.

# Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Use sample_values as the values for the bar chart.

* Use otu_ids as the labels for the bar chart.

* Use otu_labels as the hovertext for the chart.


# Create a bubble chart that displays each sample.

* Use otu_ids for the x values.

* Use sample_values for the y values.

* Use sample_values for the marker size.

* Use otu_ids for the marker colors.

* Use otu_labels for the text values.

# Bubble Chart

* Display the sample metadata, i.e., an individual's demographic information.

* Display each key-value pair from the metadata JSON object somewhere on the page.

# Update

* Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

# Deploy

* Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file


# Hints
* Use console.log inside of your JavaScript code to see what your data looks like at each step.

* Refer to the Plotly.js documentationLinks to an external site. when building the plots.

