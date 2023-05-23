const GoafortIcon=L.divIcon({
   className: 'custom-div-icon-GoafortIcon',
   html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
})

const GoaUNESCOIcon=L.divIcon({
   className: 'custom-div-icon-GoaUNESCOIcon',
   html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
})

const GoaSancIcon = L.divIcon({
   className: 'custom-div-icon-GoaSancIcon',
   html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
});

const GoaHillStationIcon=L.divIcon({
   className: 'custom-div-icon-GoaHillStationIcon',
   html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
});


const GoabeachesIcon=L.divIcon({
   className: 'custom-div-icon-GoabeachesIcon',
   html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
});
var goa=[
    ["Aguada Fort",73.77366036652569,15.492396635477192,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Tiracol Fort",73.68647908187334,15.72154032867615,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
 ]       
 for(var k=0;k<goa.length;k++)
 {
    var lon=goa[k][1];
    var lat=goa[k][2];
    var popupText=goa[k][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:GoafortIcon}).addTo(map)
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
}

var Basilica_of_Bom_Jesus=L.marker([15.501079883738498,73.9116164683787],{icon:GoaUNESCOIcon})
var Velha=L.marker([15.499952901481475,73.91332995763833],{icon:GoaUNESCOIcon})
Basilica_of_Bom_Jesus.addTo(map)
Velha.addTo(map)
var ChorlaGhats=L.marker([15.649846831498639,74.11889183778908 ],{icon:GoaHillStationIcon})
ChorlaGhats.addTo(map)
var goabeaches=[
   ["Colva Beach", 73.91180459631404,15.2812992856626,],
   ["Dona Paula",73.80449279475746,15.454751757436618, ],
   ["Miramar",73.8072662050689,15.482871943486924, ],
   ["Anjuna",73.74089666567394,15.573848433963429, ],
   ["Vagator Beach",73.73346652757567,15.603332573152917, ],
   ["Arambol Beach",73.70301053507836,15.685086768324165, ],
   ["Angoda Beach",73.9894649157005,15.045661063765897, ]
]
for(var k=0;k<goabeaches.length;k++)
{
   var longoa=goabeaches[k][1];
   var latgoa=goabeaches[k][2];
   // var popupText=goa[k][3];
   var markerLocationgoa=new L.LatLng(this.latgoa,this.longoa)
   var markergoa=new L.Marker(markerLocationgoa,{icon:GoabeachesIcon})
   map.addLayer(this.markergoa)
   // marker.bindPopup(popupText)
   .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
}
