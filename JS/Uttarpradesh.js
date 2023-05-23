const UttarPradeshfortIcon=L.divIcon({
  className: 'custom-div-icon-UttarPradeshfortIcon',
  html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
})

const UttarPradeshUNESCOIcon=L.divIcon({
  className: 'custom-div-icon-UttarPradeshUNESCOIcon',
  html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
})

const UttarPradeshSancIcon = L.divIcon({
  className: 'custom-div-icon-UttarPradeshSancIcon',
  html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});

const UttarPradeshStationIcon=L.divIcon({
  className: 'custom-div-icon-UttarPradeshStationIcon',
  html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});

const UttarPradeshbeachIcon=L.divIcon({
  className: 'custom-div-icon-UttarPradeshbeachIcon',
  html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});

var uttarpradesh=[
     //["Agra Fort"],
   ["Allahabad Fort",81.87681863971858,25.42974704957809,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Chunar",82.87198101275405,25.103739383174418,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Fatehpur Fort",77.66796233967713,27.09351577490393,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Jhansi Fort",78.5765254704083,25.45777553863859,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
   //["Ruhya Fort"],
   ["Agra Fort",78.02378463279892,27.17948241942074,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],

   ["Kaushambi Fort",81.35089763727504,25.406734559367216,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<uttarpradesh.length;i++)
{
    var lon=uttarpradesh[i][1];
    var lat=uttarpradesh[i][2];
    var popupText=uttarpradesh[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:UttarPradeshfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 
var Taj_Mahal=L.marker([27.175316584401596,78.0420456379049],{icon:UttarPradeshUNESCOIcon})
var Agra_Fort=L.marker([27.17963776865277,78.02111199743022],{icon:UttarPradeshUNESCOIcon})
var Fatehpur_Sikri=L.marker([27.101003900630918,77.67388465722301],{icon:UttarPradeshUNESCOIcon})
Taj_Mahal.addTo(map)
Agra_Fort.addTo(map)
Fatehpur_Sikri.addTo(map)
var upsanctuaries=[
  ["bakhira", 83.1042481227816,26.906551661759014,],
  ["chandraprabha", 83.16995028038303,24.946382135354455,],
  ["chandra_sekhar",80.65309901372716,26.619310408119304, ],
  ["hastinapur",77.99999268054218,29.179438456517335, ],
  ["jai_prakash",84.15869602274189,25.82560866585547, ],
  ["katernighat", 81.12359406886998,28.336048738732874,],
  ["kishanpur",80.40813188236365,28.38874427987595, ],
  ["lakh_bahosi", 79.64121389579863,26.91161515392916,],
  ["mahavir_swami_",78.25007246502376,24.51906948926102, ],
  ["okhala_bird", 77.32258198422308,28.55358414503424,],
  ["parvati",82.17895890743885,26.953906171138375, ],
  ["patna", 78.31616426021834,27.522773520538195,],
  ["palibhit",80.03107202285076,28.700845153625043, ],
  ["ranipur",81.18506350387104,25.095587270897102, ],
  ["samaspur",81.39464196878163,25.994304633985745, ],
  ["sandi",79.973422292108,27.316786153917292, ],
  ["sahogibarwa",83.5573629246517,27.36116701935593, ],
  ["sohelwa", 82.20569204979876,27.800578285766626,],
  ["saman",79.182733824639,27.024806953286124, ],
  ["sekha",78.21758658234288,27.854980290627275, ],
  ["sur_sarovar",77.85257305163015,27.236233919867075, ],
  ["turtle_up",84.3926180825052,25.82797353229773, ],
  ["vijai_sagar",79.87318778941956,25.291698208617113, ],
  ["barela_jheel", 85.54518832738415,25.76795872863774,]
]
for(var i=0;i<upsanctuaries.length;i++)
{
    var lonupsanc=upsanctuaries[i][1];
    var latupsanc=upsanctuaries[i][2];
    // var popupText=uttarakhand[i][3];
    var markerLocationupsanc=new L.LatLng(this.latupsanc,this.lonupsanc)
    var markerupsanc=new L.Marker(markerLocationupsanc,{icon:UttarPradeshSancIcon})
    map.addLayer(this.markerupsanc)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

}

// var Pulicat=L.marker([13.421047216625974,80.32887981032532,],{icon:UttarPradeshbeachIcon})
// Pulicat.addTo(map)
