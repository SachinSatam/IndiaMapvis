const BiharfortIcon=L.divIcon({
  className: 'custom-div-icon-BiharfortIcon',
  html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
})

const BiharUNESCOIcon=L.divIcon({
  className: 'custom-div-icon-BiharUNESCOIcon',
  html:"<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
})

const BiharSancIcon = L.divIcon({
  className: 'custom-div-icon-BiharSancIcon',
  html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});

const BiharHillStationIcon=L.divIcon({
  className: 'custom-div-icon-BiharHillStationIcon',
  html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});
var bihar=[
     //["Buxar Fort"],
   ["Darbhanga Fort",85.89410255322633,26.160337492178403,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Jagdishpur Fort",84.42057609924457,25.466281979947237,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Jalalgarh Fort",87.54451479740214,25.942417833930424,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Munger Fort",86.46687488373789,25.381098867819677,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Rohtasgrah Fort",83.89432608470257,24.608448183949257,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Shergarh Fort",83.72813218203339,24.82795457934713,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<bihar.length;i++)
{
    var lon=bihar[i][1];
    var lat=bihar[i][2];
    var popupText=bihar[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:BiharfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

}
var Mahabodhi_Temple=L.marker([24.696165872747454,84.99132273784987],{icon:BiharUNESCOIcon})
Mahabodhi_Temple.addTo(map)
var Biharsanctuaires=[
  ["kaimur",83.53153444969266,24.907745051029142, ],
  ["bhimbandh",86.43856429387908,25.07382605805223, ],
  ["gautam_buddha_bihar",85.52799616905159,24.571919295503225, ],
  ["kanwarjheel",86.13891630765002,25.687301612028918, ],
  ["kusheshwar",86.30522470465861,25.819246352851668, ],
  ["nagi_dam", 86.40076798223167,24.82282265401425,],
  ["nakti_dam", 86.43781296040416,24.848813600044636,],
  ["pant",85.42343891107372,24.992609207622802, ],
  ["udaipur_bihar",84.43856729394201,26.81354833267932, ],
  ["valmiki", 84.1463921436906,27.40557394705344,],
  ["vikramshala_gangetic", 86.73729895155775,25.25537249105663,],
]
for(var k=0;k<Biharsanctuaires.length;k++)
{
    var lonbiharsan=Biharsanctuaires[k][1];
    var latbiharsan=Biharsanctuaires[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationbiharsan=new L.LatLng(this.latbiharsan,this.lonbiharsan)
    var markerbiharsan=new L.Marker(markerLocationbiharsan,{icon:BiharSancIcon})
    map.addLayer(this.markerbiharsan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 


// var Hazaribagh=L.marker([23.992747196565105,85.3613438302079],{icon:BiharHillStationIcon})
// Hazaribagh.addTo(map)
