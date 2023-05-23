const TamilnadufortIcon=L.divIcon({
    className: 'custom-div-icon-TamilnadufortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const tamilunesco=L.divIcon({
    className: 'custom-div-icon-TamilNaduUNESCOIcon',
    html:"<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
const tamil=L.divIcon({
    className: 'custom-div-icon-TamilNadu-UNESCOIcon',
    html:"<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]

})

const TamilnaduSancIcon = L.divIcon({
    className: 'custom-div-icon-TamilnaduSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const TamilnaduHillStationIcon=L.divIcon({
    className: 'custom-div-icon-TamilnaduHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const TamilnadubeachIcon=L.divIcon({
    className: 'custom-div-icon-TamilnadubeachIcon',
    html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

var tamil_nadu=[
    
   ["Aranthangi Fort",78.99123045545693,10.177625182699865,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Attur Fort", 78.60074010416942,11.60326615862354,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Fort Dansborg", 79.85537759725362,11.025499552387213,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],
   ["Erode Fort",77.72011626647678,11.346987170210515,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Udayagiri Fort",77.34040347015588,8.24291475407718,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Krishnagiri Fort",78.21452208183388,12.538581023260093,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Tiruchirappalli Fort",78.69700279716079,10.828319650935725,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Vattakottai Fort",77.56495308179375,8.125754447619569,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Vellore Fort",79.12938516649365,12.921381391492595,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<tamil_nadu.length;i++)
{
    var lon=tamil_nadu[i][1];
    var lat=tamil_nadu[i][2];
    var popupText=tamil_nadu[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:TamilnadufortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
} 
var Great_Living_Chola_Temples1=L.marker([10.96154259313211,79.35376026986908],{icon:tamil})
var Great_Living_Chola_Temples2=L.marker([10.795663385063538,79.13609364258559],{icon:tamil})
var Great_Living_Chola_Temples=L.marker([10.938621702805728,79.35788014314407],{icon:tamil})
// var Mahabalipuram=L.marker([12.629484269378972,80.19482163504505],{icon:TamilNadu_UNESCOIcon})
// var Brihadeeswara_Temple=L.marker([10.782951669287232,79.13179816185911],{icon:TamilNadu_UNESCOIcon})
Great_Living_Chola_Temples.addTo(map)
Great_Living_Chola_Temples1.addTo(map)
Great_Living_Chola_Temples2.addTo(map)
// Mahabalipuram.addTo(map)
// Brihadeeswara_Temple.addTo(map)
var tnsanc=[
    ["koundinyat", 78.68023267957585,13.007477258757312,],
    ["kanjirankulam",78.48121593582354,9.356816556934396, ],
    ["kanyakumari",77.40815952232077,8.487835972795786, ],
    ["karaivetti_bird", 79.04474132420862,10.983044897352658,],
    ["karikilli",79.84067006841651,12.600094608073757, ],
    ["kondaikanal", 77.48932333093225,10.238226593062048,],
    ["koothankulam", 77.75748239533773,8.496253302485417,],
    ["megamalai",76.5345650107264,11.56248691096259, ],
    ["mundanthurai",77.30939229348714,8.688562711386403, ],
    ["ossudu_lake",79.75853595120769,11.950297792635787, ],
    ["point_calimere", 79.82995361070637,10.286637317668312,],
    ["pulicat_lake",80.12342343774866,13.72434877933717, ],
    ["sakkarakottai",78.84964269786315,9.361467783898338, ],
    ["sathyamangalamt",77.23209772236635,11.641618200137726, ],
    ["srivilliputhur",77.52887804931751,9.534851944831617, ],
    ["udayamarthan",79.55792666354058,10.573378993304214, ],
    ["vaduvoor",79.32274018187645,10.698651728163407, ],
    ["vendanthangal", 79.8560264800543,12.545669141124247,],
    ["vellandu",77.87243587067911,8.920066558199762, ],
    ["vellode",77.65779808373817,11.254628506875234, ],
    ["vettangudi",78.51018749535928,10.111898733710055, ],
    ["cauvery_north",77.87379470888801,12.41257498313079, ],
    ["chitrangudi",78.48735368000374,9.323259655673859, ],
    ["gandaikodam_dear",77.75972785116116,8.82728593348752, ],
    ["annamalai",77.12945038001908,10.406197237138787, ],
    ["kalakad",77.44644096795885,8.555115449266248, ]
]
for(var i=0;i<tnsanc.length;i++)
{
    var lontnsanc=tnsanc[i][1];
    var lattnsanc=tnsanc[i][2];
    // var popupText=madhyapradesh[i][3];
    var markerLocationtnsanc=new L.LatLng(this.lattnsanc,this.lontnsanc)
    var markertnsanc=new L.Marker(markerLocationtnsanc,{icon:TamilnaduSancIcon})
    map.addLayer(this.markertnsanc)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
}

var Mahabalipuram=L.marker([12.61331288767782, 80.19595712702073],{icon:TamilnadubeachIcon}).addTo(map)
