<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="drugs.js"></script>
  </head>
  <body>

 <!--Table and divs that hold the pie charts-->
    <table id="softDrugs" style="display: inline-block;">
      <tr>
        <td><div id="Alcohol_chart_div"></div></td>
        <td><div id="Tobacco_chart_div"></div></td>
        <td><div id="Marijuana_chart_div"></div></td>
        <td><div id="Sedatives_chart_div"></div></td>
      </tr>
    </table>
    
    <table id="hardDrugs" style="display: inline-block;">
      <tr>
        <td><div id="Cocaine_chart_div"></div></td>
        <td><div id="Crack_chart_div"></div></td>
        <td><div id="Hallucinogen_chart_div"></div></td>
        <td><div id="Heroin_chart_div"></div></td>
        <td><div id="Inhalants_chart_div"></div></td>
        <td><div id="PainRelievers_chart_div"></div></td>
        <td><div id="Stimulants_chart_div"></div></td>
        <td><div id="Tranquilizers_chart_div"></div></td>
      </tr>
    </table>
    
    <a id="loginLink" onclick="toggleTable(softDrugs);" href="#">Soft Drugs</a>  
    <a id="loginLink" onclick="toggleTable(hardDrugs);" href="#">Hard Drugs</a>
<body>
</body>
</html>