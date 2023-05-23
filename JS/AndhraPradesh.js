const AndhrafortIcon=L.divIcon({
    className: 'custom-div-icon-AndhrafortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const AndhraUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-AndhraUNESCOIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><span class='icon-unescologo'></span>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const AndhraSancIcon = L.divIcon({
    className: 'custom-div-icon-AndhraSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const AndhraHillStationIcon=L.divIcon({
    className: 'custom-div-icon-AndhraHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

var andhra=[
   ["Gooty Fort",77.64304999720967,15.114958400602427,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Gurramkonda Fort",78.5861673413734,13.777030313907344,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Konda Reddy Fort",78.04871162790846,15.834072123930163,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Golconda_Fort",78.40095623771668,17.38353424202757,content.replace(new RegExp("\\{0\\}","gi"),"https://www.linkpicture.com/q/golconda-2.jpg").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],
   ["Chandragiri Fort",79.30541234137102,13.58328518048234,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
   ["Vizianagaram Fort",83.40969752192092,18.11194668255956,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<andhra.length;i++)
{
    var lon=andhra[i][1];
    var lat=andhra[i][2];
    var popupText=andhra[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:AndhrafortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 
var andhrasanctuaries=[
    ["pranhita", 79.76326679369014,18.973320047065684,],
    ["coringa",82.29829659548835,16.821320472370118, ],
    ["gundla_brahmeswaram",78.74514300262113,15.661001989713016, ],
    ["kambalakonda",83.30399880715179,17.82691894350371, ],
    ["krishna", 80.95164306477491,15.771356983335808,],
    ["kolleru", 81.18126015500987,16.665202973663792,],
    ["nagarjuna_sagar",79.31276527584575,16.586199167527685, ],
    ["nellapattu", 79.94948556473389,13.825323454944135,],
    ["pulicat_lake",80.12338049589971,13.724442547526653, ],
    ["rollapadu",78.3651083242994,15.739183816475194, ],
    ["sri_lankamalleswara", 78.8999760107829,14.587292243865761,],
    ["sri_penusila_narasimhat", 79.46402859542658,14.009661658355776,],
    ["sri_venkateswara",79.36463786658285,13.625102632575814, ]
  
]
for(var k=0;k<andhrasanctuaries.length;k++)
{
    var lonandhrasan=andhrasanctuaries[k][1];
    var latandhrasan=andhrasanctuaries[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationandhrasan=new L.LatLng(this.latandhrasan,this.lonandhrasan)
    var markerandhrasan=new L.Marker(markerLocationandhrasan,{icon:AndhraSancIcon})
    map.addLayer(this.markerandhrasan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 
