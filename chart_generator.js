
google.charts.load('current', {'packages': ['timeline']});
//google.charts.setOnLoadCallback(drawCharts);
google.charts.setOnLoadCallback(drawCharts);

var lump_of_data = {'3010': [['Thursday', 'Programming Logic and Design', 12, 0, 15, 0], ['Tuesday', 'Database Design and Implementation', 12, 0, 15, 30], ['Thursday', 'MySQL Database Design and Implementation', 17, 30, 21, 40], ['Tuesday', 'Visual C#.NET Programming', 17, 30, 21, 40], ['Wednesday', 'Internet/Intranet Security: Implementation and Management', 9, 0, 12, 0], ['Wednesday', 'Ethical Hacking and Network Defense', 17, 30, 21, 40]], '3020': [['Monday', 'Microcomputer System Maintenance', 12, 0, 16, 10], ['Thursday', 'Microcomputer System Maintenance', 17, 30, 21, 40]], '3030': [['Monday', 'Preparing for IT', 10, 0, 11, 40], ['Tuesday', 'Information Technology Skills', 12, 0, 14, 5], ['Wednesday', 'Programming Logic and Design', 9, 0, 12, 0], ['Wednesday', 'Microsoft Windows Operating Systems', 12, 30, 15, 30], ['Wednesday', 'Linux System Administration', 17, 30, 21, 40], ['Tuesday', 'Security Implementation and Risk Analysis', 17, 30, 21, 40], ['Tuesday', 'Software Development Capstone', 17, 30, 21, 40]], '3040': [['Wednesday', 'Apple Mobile Programming', 12, 30, 16, 30]], '3050': [['Thursday', 'Information Technology Concepts', 9, 0, 11, 5], ['Monday', 'Information Technology Concepts', 19, 30, 21, 5], ['Monday', 'Information Technology Skills', 17, 0, 19, 5], ['Tuesday', 'Programming Logic and Design', 18, 0, 21, 0], ['Thursday', 'Infotech Project Management', 12, 0, 16, 10], ['Tuesday', 'Java Programming', 9, 30, 12, 0], ['Thursday', 'Java Programming', 9, 30, 12, 0], ['Tuesday', 'Web Client and Server Programming', 12, 30, 15, 0], ['Thursday', 'Web Client and Server Programming', 12, 30, 15, 0], ['Wednesday', 'Systems Analysis and Design', 17, 30, 21, 40], ['Thursday', 'Cisco Network Administration', 17, 30, 21, 40]], '3080': [['Tuesday', 'Preparing for IT', 14, 0, 15, 40], ['Thursday', 'Microsoft Windows Operating Systems', 18, 0, 21, 0], ['Monday', 'Data Communications', 9, 0, 11, 5], ['Wednesday', 'Data Communications', 9, 0, 11, 5], ['Wednesday', 'Data Communications', 17, 30, 21, 40], ['Wednesday', 'Microsoft Network Administration', 17, 30, 21, 40], ['Wednesday', 'LAN Implementation and Management', 12, 0, 16, 10]], 'Monday': [['Monday', 'Preparing for IT', 10, 0, 11, 40], ['Monday', 'Information Technology Concepts', 19, 30, 21, 5], ['Monday', 'Information Technology Skills', 17, 0, 19, 5], ['Monday', 'Microcomputer System Maintenance', 12, 0, 16, 10], ['Monday', 'Data Communications', 9, 0, 11, 5]], 'Tuesday': [['Tuesday', 'Preparing for IT', 14, 0, 15, 40], ['Tuesday', 'Information Technology Skills', 12, 0, 14, 5], ['Tuesday', 'Programming Logic and Design', 18, 0, 21, 0], ['Tuesday', 'Database Design and Implementation', 12, 0, 15, 30], ['Tuesday', 'Visual C#.NET Programming', 17, 30, 21, 40], ['Tuesday', 'Java Programming', 9, 30, 12, 0], ['Tuesday', 'Web Client and Server Programming', 12, 30, 15, 0], ['Tuesday', 'Security Implementation and Risk Analysis', 17, 30, 21, 40], ['Tuesday', 'Software Development Capstone', 17, 30, 21, 40]], 'Wednesday': [['Wednesday', 'Programming Logic and Design', 9, 0, 12, 0], ['Wednesday', 'Microsoft Windows Operating Systems', 12, 30, 15, 30], ['Wednesday', 'Data Communications', 9, 0, 11, 5], ['Wednesday', 'Data Communications', 17, 30, 21, 40], ['Wednesday', 'Linux System Administration', 17, 30, 21, 40], ['Wednesday', 'Apple Mobile Programming', 12, 30, 16, 30], ['Wednesday', 'Microsoft Network Administration', 17, 30, 21, 40], ['Wednesday', 'Systems Analysis and Design', 17, 30, 21, 40], ['Wednesday', 'Internet/Intranet Security: Implementation and Management', 9, 0, 12, 0], ['Wednesday', 'LAN Implementation and Management', 12, 0, 16, 10], ['Wednesday', 'Ethical Hacking and Network Defense', 17, 30, 21, 40]], 'Thursday': [['Thursday', 'Information Technology Concepts', 9, 0, 11, 5], ['Thursday', 'Programming Logic and Design', 12, 0, 15, 0], ['Thursday', 'Microsoft Windows Operating Systems', 18, 0, 21, 0], ['Thursday', 'Microcomputer System Maintenance', 17, 30, 21, 40], ['Thursday', 'MySQL Database Design and Implementation', 17, 30, 21, 40], ['Thursday', 'Infotech Project Management', 12, 0, 16, 10], ['Thursday', 'Java Programming', 9, 30, 12, 0], ['Thursday', 'Web Client and Server Programming', 12, 30, 15, 0], ['Thursday', 'Cisco Network Administration', 17, 30, 21, 40]], 'Friday': [], 'Andy': [['Thursday', 'Programming Logic and Design', 12, 0, 15, 0], ['Tuesday', 'Database Design and Implementation', 12, 0, 15, 30], ['Thursday', 'MySQL Database Design and Implementation', 17, 30, 21, 40], ['Tuesday', 'Visual C#.NET Programming', 17, 30, 21, 40]], 'Brian': [['Monday', 'Preparing for IT', 10, 0, 11, 40], ['Tuesday', 'Preparing for IT', 14, 0, 15, 40], ['Thursday', 'Information Technology Concepts', 9, 0, 11, 5], ['Monday', 'Information Technology Concepts', 19, 30, 21, 5], ['Monday', 'Microcomputer System Maintenance', 12, 0, 16, 10], ['Thursday', 'Microcomputer System Maintenance', 17, 30, 21, 40], ['Wednesday', 'Linux System Administration', 17, 30, 21, 40], ['Tuesday', 'Security Implementation and Risk Analysis', 17, 30, 21, 40]], 'Cathy': [['Tuesday', 'Information Technology Skills', 12, 0, 14, 5], ['Wednesday', 'Microsoft Windows Operating Systems', 12, 30, 15, 30], ['Thursday', 'Microsoft Windows Operating Systems', 18, 0, 21, 0], ['Monday', 'Data Communications', 9, 0, 11, 5], ['Wednesday', 'Data Communications', 9, 0, 11, 5], ['Wednesday', 'Data Communications', 17, 30, 21, 40]], 'Clara': [['Wednesday', 'Programming Logic and Design', 9, 0, 12, 0], ['Wednesday', 'Apple Mobile Programming', 12, 30, 16, 30], ['Tuesday', 'Java Programming', 9, 30, 12, 0], ['Thursday', 'Java Programming', 9, 30, 12, 0], ['Tuesday', 'Web Client and Server Programming', 12, 30, 15, 0], ['Thursday', 'Web Client and Server Programming', 12, 30, 15, 0], ['Tuesday', 'Software Development Capstone', 17, 30, 21, 40]], 'Justin': [['Wednesday', 'Ethical Hacking and Network Defense', 17, 30, 21, 40]], 'Mary': [['Tuesday', 'Programming Logic and Design', 18, 0, 21, 0]], 'None': [['Monday', 'Information Technology Skills', 17, 0, 19, 5], ['Wednesday', 'Systems Analysis and Design', 17, 30, 21, 40]], 'Steve': [['Thursday', 'Infotech Project Management', 12, 0, 16, 10], ['Wednesday', 'Microsoft Network Administration', 17, 30, 21, 40], ['Wednesday', 'Internet/Intranet Security: Implementation and Management', 9, 0, 12, 0], ['Thursday', 'Cisco Network Administration', 17, 30, 21, 40], ['Wednesday', 'LAN Implementation and Management', 12, 0, 16, 10]]}    // jinja supplies this. String or JSON?

/* expecting something like this
'3040': [['Tuesday', 'Android Mobile Programmin', 13, 25, 17, 0], ['Wednesday', 'Systems Analysis & Design', 17, 0, 21, 10]], '3050': [['Thursday', 'Info Tech Concepts', 16, 40, 19, 10], ['Tuesday', 'Info Tech Concepts', 13, 25, 14, 55], ['Thursday', 'Information Tech Skills', 13, 25, 14, 55], ['Wednesday', 'MS Windows Operating Sys', 16, 40, 19, 10], ['Thursday', 'Infotech Project Managem', 9, 5, 11, 15], ['Tuesday', 'Java Programming', 9, 45, 13, 0], ['Wednesday', 'Internet/Intranet Securit', 9, 45, 13, 0], ['Monday', 'Software Dev Capstone', 17, 0, 21, 10]], '3080': [['Thursday', 'Data Communications', 17, 0, 21, 10], ['Wednesday', 'Data Communications', 9, 45, 11, 50], ['Tuesday', 'Microsoft Network Admin', 17, 0, 21, 10], ['Monday', 'Cisco Network Administrat', 17, 0, 21, 10], ['Wednesday', 'LAN Imple & Manaagement', 12, 20, 14, 55], ['Wednesday', 'Ethic Hack/Network Defens', 17, 0, 21, 10]], '3020': [['Tuesday', 'Microcomputer Syst Maiten', 17, 0, 21, 10], ['Wednesday', 'Microcomputer Syst Maiten', 12, 20, 14, 30]], '3010': [['Tuesday', 'Info Tech Concepts', 9, 45, 12, 15], ['Wednesday', 'Information Tech Skills', 19, 30, 21, 30], ['Tuesday', 'Information Tech Skills', 12, 20, 14, 25], ['Wednesday', 'Programming Logic & Desig', 12, 20, 15, 30], ['Monday', 'Programming Logic & Desig', 17, 0, 20, 30], ['Monday', 'Programming Logic & Desig', 12, 20, 15, 30], ['Wednesday', 'Database Design/Implement', 9, 45, 11, 50], ['Friday', 'Data Communications', 12, 20, 16, 30], ['Thursday', 'SQL Server Database Desig', 17, 0, 21, 10], ['Tuesday', 'Visual C#.NET Programming', 17, 0, 21, 10], ['Thursday', 'Security Imple & Risk Ana', 13, 0, 16, 30], ['Wednesday', 'Software Devlopment Projects', 17, 0, 19, 15]], '3030': [['Thursday', 'Preparing for IT', 18, 0, 19, 40], ['Wednesday', 'Preparing for IT', 10, 10, 11, 50], ['Tuesday', 'Preparing for IT', 10, 10, 11, 50], ['Monday', 'Preparing for IT\xa0', 17, 0, 18, 40], ['Tuesday', 'Programming Logic & Desig', 17, 0, 20, 30], ['Thursday', 'MS Windows Operating Sys', 13, 0, 15, 30], ['Wednesday', 'MS Windows Operating Sys', 13, 0, 15, 30], ['Wednesday', 'Linux System Admin', 17, 0, 21, 10]]}

*/

// $(document).on('load', function(){ console.log('document loaded')})

var classrooms = ['3010', '3020', '3030', '3040', '3050', '3080']
var instructor_first_names = ['Andy', 'Brian', 'Cathy', 'Clara', 'Justin', 'Mary', 'None', 'Steve']
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

var documentLoaded = false
//
// $(document).ready(function() {
//   //resize, hopefully will load chart?
//   documentLoaded = true;
//   console.log('doc ready')
//   $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//       var ev = document.createEvent('Event');
//       ev.initEvent('resize', true, true);
//       window.dispatchEvent(ev);
//     });
// })


// function ForTabShown() {
//
//   //TODO look up correct syntax for this.
//   // Need to draw charts in response to tab shown event.
//   //$('a[data-toggle="tab"]').on('shown', drawCharts);
//   $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
//       console.log('*** tab shown ****');    //This does not run on load, only subsequent ticks. Should be other way around - this kicks off the google callback? Cos that takes longer.
//   })
//
//
//   $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//       var ev = document.createEvent('Event');
//       ev.initEvent('resize', true, true);
//       window.dispatchEvent(ev);
//     });
//
//
//   //$('a[data-toggle="tab"]').on('shown', function() { alert('sdfsf')});


//}

function drawCharts() {

  //Convert hours, minutes to Date objects.
  console.log('DRAWING CHARTS')

  for (item in lump_of_data) {
    var data_list = lump_of_data[item]
      for (var x = 0 ; x < data_list.length; x++) {
        var data = data_list[x]
        var startDate = new Date(2016, 1, 1, data[2], data[3])
        var endDate = new Date(2016, 1, 1, data[4], data[5])
        var withDates = [ data[0], data[1], startDate, endDate]
        data_list[x] = withDates
      }
    //lump_of_data[item] = data
    }

    //console.log(lump_of_data)


  var classrooms = ['3010', '3020', '3030', '3040', '3050', '3080']

  var days_abbr = [ 'M', 'T', 'W', 'H', 'F']
  var days_of_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  var day_order_map = { 'Monday' : 1, 'Tuesday' : 2, 'Wednesday' : 3, 'Thursday' : 4, 'Friday' : 5 }

  // divs are called chart_M chart_T etc. or chart_3010 chart_3040 or chart_Clara or chart_Duncan...


  for (var data in lump_of_data) {  //data ==  '3040' or 'Monday'

    //console.log('Data ' + data)

    var container = document.getElementById('chart_' + data)

    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn( { type: 'string' , id: 'Day'} );
    dataTable.addColumn( { type: 'string' , id: 'Class'} );
    dataTable.addColumn( { type: 'date' , id: 'Start'});
    dataTable.addColumn( { type: 'date' , id: 'End'});


    var rows = lump_of_data[data];

    //Sort, otherwise days won't be in order. Python should probably do this.
    rows.sort(function(a, b) {
        dayA = day_order_map[a[0]]
        dayB = day_order_map[b[0]]
        return dayA - dayB
    })

    console.log(rows);

    //This row is the same size on all charts and forces them to be the same scale.
    fixWidthRow = [ ["Just a bar.", "I'm not a class, just a bar to make all the charts the same width.", new Date(2016, 1, 1, 9, 0), new Date(2016, 1, 1, 21, 30)] ]
    dataTable.addRows( fixWidthRow )

    dataTable.addRows( rows );    // keys should be T W T ...

    //var options = { colors : ['white'] }    //TODO set first bar ONLY to white or grey.
    var options = { height : 300, width : 1200}   //put back

    /*
    dataTable.addRows([
      ['Monday', 'Prog log', new Date(2016, 1, 1, 9, 20), new Date(2016, 1, 1, 13, 20)],
      ['Monday', 'c#', new Date(2016, 1, 1, 12, 20), new Date(2016, 1, 1, 14, 20)],
      ['Tuesday', 'java', new Date(2016, 1, 1, 9, 20), new Date(2016, 1, 1, 13, 20)],
      ['Tuesday', 'db', new Date(2016, 1, 1, 17, 0), new Date(2016, 1, 1, 21, 20)]
      //etc for wed thur etc.
    ]);
    */

    chart.draw(dataTable, options);
  }

      showTab("instructors");
      showTab("rooms");
      showTab("days");

  }

//Have to do this AFTER chart load so they can be measured correctly.
/* tab-pane elements are display : none.  Script needs to change that for selected pane. */
    function showTab(whichTab) {

      console.log("tabs" + whichTab);

      var allTabs = document.getElementsByClassName("tab-pane");

      for (var t = 0 ; t < allTabs.length ; t++) {
          //Hide all other tabs
          allTabs[t].style.display="none";  // need this to display as tabs. Comment out to display all.
      }

      var contents = document.getElementById(whichTab);
      contents.style.display = "initial";

//        tabHolder.re

    }