

/**
 * SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * SVG path for plane icon
 */
var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "dataProvider": {
    "map": "worldLow",
    "linkToObject": "ranchi",
    "images": [ {
        "id": "ranchi",
        "color": "#535364",
        "svgPath": targetSVG,
        "title": "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal; font-size:17px;\">CPF HQ</span><br>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">Plot no. B-55</span><br>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">Harmu Housing Colony<br></span>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">Ranchi Jharkhand, Pin- 834002<br></span>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">India<br></span>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">+91.651.645.8865<br></span>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">india@cyberpeacefoundation.org <br></span>",
        "latitude": 23.3441,
        "longitude": 85.3096,
        "scale": 1.5,
        "zoomLevel": 2.10,
        "zoomLongitude": -10.1341,
        "zoomLatitude": 29.1712,

        "lines": [ {
          "latitudes": [ 23.3441, 28.7041 ],
          "longitudes": [ 85.3096, 77.1025 ]
        }, {
          "latitudes": [ 23.3441, 36.2399912 ],
          "longitudes": [ 85.3096, -113.763782 ]
        }, {
          "latitudes": [ 23.3441, 55.0513487],
          "longitudes": [ 85.3096, -2.4062811 ]
        } ],

        "images": [ {
         
        }]
      },

      {
        

        "lines": [ ],

        "images": [  {
          "left": 106,
          "top": 70,
          "labelColor": "#535364",
          "labelRollOverColor": "#CC0000",
          "labelFontSize": 11,
          "linkToObject": "ranchi"
        } ]
      }, {
        "svgPath": targetSVG,
        "title": "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal; font-size:17px;\">Delhi OFFICE</span><br>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal; font-size:17px;\"></span><br>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal; font-size:17px;\"></span><br>",
        "latitude": 28.7041,
        "longitude": 77.1025
      }, {
        "svgPath": targetSVG,
        "title": "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal; font-size:17px;\">USA OFFICE</span><br>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">+1 716 241 1555</span><br>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">info@cyberpeacefoundation.org </span></br>",
        "latitude": 36.2399912,
        "longitude": -113.763782
      },{
        "svgPath": targetSVG,
        "title": "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal; font-size:17px;\">UK OFFICE</span><br>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">+44 203 287 0765</span><br>"+
                  "<span style=\"font-family: 'Open Sans', sans-serif; color:#535364; font-weight:normal;\">info@cyberpeacefoundation.org </span><br>",
        "latitude": 55.0513487,
        "longitude": -2.4062811
      }
    ]
  },

  "areasSettings": {
    "unlistedAreasColor": "#85C5E3"
  },

  "imagesSettings": {
    "color": "#000000",
    "rollOverColor": "#000000",
    "selectedColor": "#000000"
  },

  "linesSettings": {
    "color": "#000000",
    "alpha": 0.5
  },

  "balloon": {
    "drop": false
  },

  "backgroundZoomsToTop": true,
  "linesAboveImages": true,

  "export": {
    "enabled": true
  }
} );