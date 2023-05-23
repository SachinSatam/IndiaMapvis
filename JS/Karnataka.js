const KarnatakafortIcon=L.divIcon({
    className: 'custom-div-icon-KarnatakafortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const KarnatakaUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-KarnatakaUNESCOIcon',
    html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const KarnatakaSancIcon = L.divIcon({
    className: 'custom-div-icon-KarnatakaSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const KarnatakaHillStationIcon=L.divIcon({
    className: 'custom-div-icon-KarnatakaHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const KarnatakabeachIcon=L.divIcon({
    className: 'custom-div-icon-KarnatakabeachIcon',
    html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
var karnataka_=[
    ["Bidar Fort",77.53104766656114,17.92131738647159,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Belgaum Fort",74.52436447350254,15.859833383491011,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Barkur Fort",74.756427678449,13.47264793344322,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Hosadurga",76.28404248004429,13.798406582946809,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Raichur Fort",77.34938822420774,16.199748662990256,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Yadgir Fort",77.13974528374109,16.766339143440145,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<karnataka_.length;i++)
{
    var lon=karnataka_[i][1];
    var lat=karnataka_[i][2];
    var popupText=karnataka_[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:KarnatakafortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 

var Hampi=L.marker([15.332941480732737,76.46322740045696],{icon:KarnatakaUNESCOIcon})
var pattadakal=L.marker([15.948795349688915,75.81631401672455],{icon:KarnatakaUNESCOIcon})
Hampi.addTo(map)
pattadakal.addTo(map)
var Kartsanc=[
    ["arabithittu",77.65122232162953,11.988090827502642, ],
    ["atthiveri_bird",74.49496833964686,15.868517764409544, ],
    ["bhadra",75.6351840800758,13.695071839155906, ],
    ["bhimgad",74.33525360895102,15.565046386430717, ],
    ["biligari",77.05366106477535,11.951471551065305, ],
    ["brahmgiri", 75.99392938199608,11.932909881076606,],
    ["cauverya", 77.30199809539465,12.31177210146824,],
    ["chincholi",77.49058949550658,17.565954154509296, ],
    ["dndeli",74.61882408729485,15.254727015783715, ],
    ["daroji_bear", 76.60649297825549,15.270498086275866,],
    ["ghataprabha",74.76127588214314,16.22304998617812, ],
    ["gudavi", 75.02254788194371,14.43853199560422,],
    ["gudekote", 76.62715743231809,14.904859702317086,],
    ["jogimatti",76.39077018193832,14.17276543175722, ],
    ["kappathagudda",75.71755051079647,15.225095178570271, ],
    ["malai_mahadeshwara",77.57664619538942,12.013195347363418, ],
    ["mookambika", 74.89500746843987,13.833321686687489,],
    ["nugu",76.46177190887987,11.945975696996099, ],
    ["pushpagiri",75.68702460703956,12.663054616598467, ],
    ["ranebennur",75.66819283776618,14.58977014620094, ],
    ["ramadevara",77.1592797377406,13.308489064222414, ],
    ["rangayyanadurga",76.1940083479034,14.637608171888102, ],
    ["sharvathi_valley",74.92090938193564,14.039265720241708, ],
    ["shettihalli",75.52888786658694,13.835294520324368, ],
    ["someshwara", 75.08448642425155,13.440467861895403,],
    ["talakaveri",75.4554104800522,12.43287384154845, ],
    ["thimlapura",77.14455436472961,13.609324904505316, ],
      ["adichunchungiri",76.74881288191578,13.018502189666854, ],
    ["yadahalli_chinkara",75.46917183965812,16.359781867847193,],
  
]

for(var k=0;k<Kartsanc.length;k++)
{
    var lonkartsan=Kartsanc[k][1];
    var latkartsan=Kartsanc[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationkartsan=new L.LatLng(this.latkartsan,this.lonkartsan)
    var markerkartsan=new L.Marker(markerLocationkartsan,{icon:KarnatakaSancIcon})
    map.addLayer(this.markerkartsan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 

var karthill=[
["Agumbe",75.09580114083501,13.510408808445447, ],
["Dandeli", 74.6170672502649,15.237112328825512,],
["Agumbe",75.09125211431426,13.502897691875518, ],
["Chikmagalur",75.77588064615261,13.316450821249912, ],
["coorg",75.73887826476319,12.425950418175265, ],
["Nandi Hills", 77.66163511592623,13.369111279059837,]
]
for(var k=0;k<karthill.length;k++)
{
    var lonkarthill=karthill[k][1];
    var latkarthill=karthill[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationkarthill=new L.LatLng(this.latkarthill,this.lonkarthill)
    var markerkarthill=new L.Marker(markerLocationkarthill,{icon:KarnatakaHillStationIcon})
    map.addLayer(this.markerkarthill)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})
}

var krtbeaches=[
    ["Ullal Beach ", 74.84246500292966,12.808346075066693,],
    ["Murudeshwar",74.48450153628866,12.808346075066693],
    ["Malpe Beach", 74.6975217803396,13.361922739409819,],
    ["Karwar Beach",74.1258695803048,14.833360216780777, ]
]
for(var k=0;k<krtbeaches.length;k++)
{
    var lonkartbea=krtbeaches[k][1];
    var latkartbea=krtbeaches[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationkartbea=new L.LatLng(this.latkartbea,this.lonkartbea)
    var markerkartbea=new L.Marker(markerLocationkartbea,{icon:KarnatakabeachIcon})
    map.addLayer(this.markerkartbea)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})
}
