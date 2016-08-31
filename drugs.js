// Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie chart for Alcohol when Charts is loaded.
      google.charts.setOnLoadCallback(drawAlcoholChart);

      // Draw the pie chart for the Tobacco when Charts is loaded.
      google.charts.setOnLoadCallback(drawTobaccoChart);
	  
	  // Draw the pie chart for the Marijuana when Charts is loaded.
      google.charts.setOnLoadCallback(drawMarijuanaChart);
	  
	  // Draw the pie chart for the Sedatives when Charts is loaded.
      google.charts.setOnLoadCallback(drawSedativesChart);

      // Callback that draws the pie chart for Alcohol.
      function drawAlcoholChart() {

        // Create the data table for Alcohol chart.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'frequency');
        data.addColumn('number', 'Users');
        data.addRows([
          ['Less than monthly', 2941],
          ['Monthly', 2197],
          ['Weekly', 4542],
          ['Daily', 4710],
          ['Not used', 4225]
        ]);

        // Set options for Alcohol pie chart.
        var options = {title:'Alcohol',
                       width:300,
                       height:300,
					   pieHole: 0.9,
		  			   legend: 'none',};

        // Instantiate and draw the chart for Alcohol.
        var chart = new google.visualization.PieChart(document.getElementById('Alcohol_chart_div'));
        chart.draw(data, options);
      }

      // Callback that draws the pie chart for Tobacco.
      function drawTobaccoChart() {

        // Create the data table for Tobacco chart.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'frequency');
        data.addColumn('number', 'Users');
        data.addRows([
          ['Less than monthly', 2941],
          ['Monthly', 2197],
          ['Weekly', 4542],
          ['Daily', 4710],
          ['Not used', 4225]
        ]);

        // Set options for Tobacco pie chart.
        var options = {title:'Tobacco',
                       width:300,
                       height:300,
					   pieHole: 0.9,
		  			   legend: 'none',};

        // Instantiate and draw the chart for Tobacco.
        var chart = new google.visualization.PieChart(document.getElementById('Tobacco_chart_div'));
        chart.draw(data, options);
      }
	  
	  // Callback that draws the pie chart for Marijuana.
      function drawMarijuanaChart() {

        // Create the data table for Marijuana chart.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'frequency');
        data.addColumn('number', 'Users');
        data.addRows([
          ['Less than monthly', 2941],
          ['Monthly', 2197],
          ['Weekly', 4542],
          ['Daily', 4710],
          ['Not used', 4225]
        ]);

        // Set options for Marijuana pie chart.
        var options = {title:'Marijuana',
                       width:300,
                       height:300,
					   pieHole: 0.9,
		  			   legend: 'none',};

        // Instantiate and draw the chart for Marijuana.
        var chart = new google.visualization.PieChart(document.getElementById('Marijuana_chart_div'));
        chart.draw(data, options);
      }
	  
	  // Callback that draws the pie chart for Sedatives.
      function drawSedativesChart() {

        // Create the data table for Sedatives chart.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'frequency');
        data.addColumn('number', 'Users');
        data.addRows([
          ['Less than monthly', 2941],
          ['Monthly', 2197],
          ['Weekly', 4542],
          ['Daily', 4710],
          ['Not used', 4225]
        ]);

        // Set options for Sedatives pie chart.
        var options = {title:'Sedatives',
                       width:300,
                       height:300,
					   pieHole: 0.9,
		  			   legend: 'none',};

        // Instantiate and draw the chart for Sedatives.
        var chart = new google.visualization.PieChart(document.getElementById('Sedatives_chart_div'));
        chart.draw(data, options);
      }
	  
	  // Callback that draws the pie chart for Cocaine.
      function drawCocaineChart() {

        // Create the data table for Cocaine chart.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'frequency');
        data.addColumn('number', 'Users');
        data.addRows([
          ['Less than monthly', 2941],
          ['Monthly', 2197],
          ['Weekly', 4542],
          ['Daily', 4710],
          ['Not used', 4225]
        ]);

        // Set options for Cocaine pie chart.
        var options = {title:'Cocaine',
                       width:300,
                       height:300,
					   pieHole: 0.9,
		  			   legend: 'none',};

        // Instantiate and draw the chart for Cocaine.
        var chart = new google.visualization.PieChart(document.getElementById('Cocaine_chart_div'));
        chart.draw(data, options);
      }
	  
	  // Toggle tables
	  //function toggleTable() {
    	//var sTable = document.getElementById("softDrugs");
   		//sTable.style.display = (sTable.style.display == "table") ? "none" : "table";
		//var hTable = document.getElementById("hardDrugs");
		//hTable.style.display = (hTable.style.display == "table") ? "none" : "table";
	  //}