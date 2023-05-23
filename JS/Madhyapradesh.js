const MadhyapradeshfortIcon=L.divIcon({
    className: 'custom-div-icon-MadhyapradeshfortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const MadhyapradeshUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-MadhyapradeshUNESCOIcon',
    html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const MadhyapradeshSancIcon = L.divIcon({
    className: 'custom-div-icon-MadhyapradeshSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const MadhyapradeshHillStationIcon=L.divIcon({
    className: 'custom-div-icon-MadhyapradeshHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

var madhyapradesh=[
    ["Rewa Fort",81.29097465504366,24.522220450806593,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Bajrangarh Fort",77.2945281531921,24.585182739688264,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Govindgarh",81.29396964842394,24.371503698583364,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
    ["Gwalior Fort",78.16953861275307,26.231545833987468,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Madan Fort",73.66087911512919,19.583220041533668,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Rampayli Fort",80.01379511673223,21.67835681668497,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Vijayraghav Fort",80.6156537960084,23.990104051339742,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Utila Fort",78.33333490494147,26.16355583719653,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<madhyapradesh.length;i++)
{
    var lon=madhyapradesh[i][1];
    var lat=madhyapradesh[i][2];
    var popupText=madhyapradesh[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:MadhyapradeshfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 

var Khajuraho=L.marker([24.83276455740037,79.91886314063073],{icon:MadhyapradeshUNESCOIcon})
var Bhimbetaka_Rock_Shelters=L.marker([22.939802974192872,77.61233653781379],{icon:MadhyapradeshUNESCOIcon})
var Sanchi=L.marker([23.48775416443682,77.74171904310364],{icon:MadhyapradeshUNESCOIcon})
Khajuraho.addTo(map)
Bhimbetaka_Rock_Shelters.addTo(map)
Sanchi.addTo(map)
var MpSanctuaries=[
    ["bori",78.07997853797093,22.403267794745652, ],
    ["gandhi_sagar",75.56775397591167,24.690801882461614, ],
    ["ghatogaont", 77.97788862275044,26.061756136100165,],
    ["karera",74.2040954090015,17.242463883212203, ],
    ["ken_ghariyal", 80.04173561383669,24.892664879562606,],
    ["Kheoni", 76.88340115147639,22.838241530274285,],
    ["narsighgarh", 77.07519344751239,23.641769023143244,],
    ["nouradehi",79.06555926869994,23.639969306821975, ],
    ["orchhawild",78.64170705263717,25.34381046661279, ],
    ["pachmarhi", 78.43570177714328,22.467273759971615,],
    ["gangu", 80.05218380911985,24.765274386293942,],
    ["panpatha",81.00096621891736,23.865372464953076, ],
    ["pench_moghali",79.35960699562241,21.733472464798435, ],
    ["phen", 81.03517598029754,22.367488047297265,],
    ["ralamandal", 75.91136441483214,22.647362598046648,],
    ["ratapani", 77.72222952264275,22.91802420975365,],
    ["sailana", 74.94506498050949,23.451170391798208,],
    ["sanjay_dubari", 81.64060626642933,24.118971791735248,],
    ["sardarpur",74.97069236681537,22.665224583851113, ],
    ["singhori", 78.19935588032381,23.188054324708485,],
    ["son_ghariyal",82.1414273226958,24.51330016138527, ],
    ["veerangana_durgavati", 79.7285732245162,23.547219846230153,],
    ["asola_bhati",77.26023362654847,28.493170391115758, ],
    ["kamala",75.91614428790815,23.08604847217118, ],
    // ["kamlang",96.18777518049237,27.917544162549525, ]
]
for(var k=0;k<MpSanctuaries.length;k++)
{
    var lonmpsan=MpSanctuaries[k][1];
    var latmpsan=MpSanctuaries[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationmpsan=new L.LatLng(this.latmpsan,this.lonmpsan)
    var markermpsan=new L.Marker(markerLocationmpsan,{icon:MadhyapradeshSancIcon})
    map.addLayer(this.markermpsan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 
var mphill=[
    ["Pachmarhi", 78.43603107070756,22.467629600985223,],
    ["Amarkantak", 81.75415969742222,22.682022192322158,],
    ["Mandu",75.40586440049077,22.32779341247826, ],
    ["Shivpuri",77.66559255723456,25.43314777994663, ]
]
for(var k=0;k<mphill.length;k++)
{
    var lonmphill=mphill[k][1];
    var latmphill=mphill[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationmphill=new L.LatLng(this.latmphill,this.lonmphill)
    var markermphill=new L.Marker(markerLocationmphill,{icon:MadhyapradeshHillStationIcon})
    map.addLayer(this.markermphill)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 