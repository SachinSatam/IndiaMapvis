const KeralafortIcon=L.divIcon({
    className: 'custom-div-icon-KeralafortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const KeralaUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-KeralaUNESCOIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><span class='icon-unescologo'></span>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const KeralaSancIcon = L.divIcon({
    className: 'custom-div-icon-KeralaSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const KeralaHillStationIcon=L.divIcon({
    className: 'custom-div-icon-KeralaHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const KeralabeachIcon=L.divIcon({
    className: 'custom-div-icon-KeralabeachIcon',
    html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
var kerala_=[
     
   ["Fort Emmanuel",76.23907253948066,9.966486296842671,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    //["Fort Thomas"],
   ["Hosdurg Fort", 75.09470465484816,12.309265624217652,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],
   ["Tellicherry Fort",75.48654518182546,11.748299565225619,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Pavangad",75.75635884417645,11.310716495150563,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],

]
for(var i=0;i<kerala_.length;i++)
{
    var lon=kerala_[i][1];
    var lat=kerala_[i][2];
    var popupText=kerala_[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:KeralafortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 
var keralasanc=[
   ["aralam",75.79035968004331,11.922162744261406, ],
    ["chimmnony", 76.4911380413976,10.431211614067292,],
    ["chinnar",77.20601336652597,10.30707183824393, ],
    ["chaulannur", 76.46997654176106,10.7199428459938,],
    ["idukki",76.9643059953546,9.782620019880266, ],
    ["karimpuzha", 76.42017999323379,10.931404734739782,],
   ["kottiyar",75.85822330741823,11.88740262023351, ],
    ["kurinjimala",77.2674825523923,10.231392276391533, ],
    ["malbar", 75.95780912236496,11.557861782207421,],
    ["mangalavanam", 76.27258836837433,9.988803487349843,],
    ["neyyar",77.15026549533819,8.534215232097115, ],
    ["oarambikulam", 76.81565880885587,10.447311968078548,],
    ["peechi_vazhani",76.343553726056,10.625377817825708, ],
    ["peppara",77.13564950883085,8.623403783874107, ],
    ["periyar", 77.23686885302247,9.462408979251046,],
    ["shenduney",77.21755448185058,8.858040708696938, ],
    ["thattekad",76.68708620885116,10.130065991290406, ],
    ["wayand", 76.36867785305591,11.671695651501727,]
  
]
for(var k=0;k<keralasanc.length;k++)
{
    var lonkersan=keralasanc[k][1];
    var latkersan=keralasanc[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationkersan=new L.LatLng(this.latkersan,this.lonkersan)
    var markerkersan=new L.Marker(markerLocationkersan,{icon:KeralaSancIcon})
    map.addLayer(this.markerkersan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 
var keralabeaches=[
    ["Alleppey Beach", 76.3178264457083,9.493582355086945,],
    ["Kovalam Beach",76.97610429718934,8.388949618043876, ],
 
]
for(var k=0;k<keralabeaches.length;k++)
{
    var lonkerbea=keralabeaches[k][1];
    var latkerbea=keralabeaches[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationkersan=new L.LatLng(this.latkersan,this.lonkersan)
    var markerkersan=new L.Marker(markerLocationkersan,{icon:KeralaSancIcon})
    map.addLayer(this.markerkersan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 
