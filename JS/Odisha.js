const odishafortIcon=L.divIcon({
    className: 'custom-div-icon-odishafortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const odishaUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-odishaUNESCOIcon',
    html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const OdishaSancIcon = L.divIcon({
    className: 'custom-div-icon-OdishaSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const OdishaHillStationIcon=L.divIcon({
    className: 'custom-div-icon-OdishaHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const OdishabeachIcon=L.divIcon({
    className: 'custom-div-icon-OdishabeachIcon',
    html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
var odisha_=[
    
   ["Barabati Fort",85.86520888380134,20.48477229609511,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Chudanga Gada Fort",85.80445286845561,20.416922022100803,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Raibania",87.19655291220982,21.911372081374786,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Sisupalgarh Fort",85.84789449914136,20.229634962142896,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Asurgarh Fort",83.35496428379425,20.08146954165638,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Potagarh Fort",85.05737745679899,19.37571188965616,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var j=0;j<odisha_.length;j++)
{
    var lon=odisha_[j][1];
    var lat=odisha_[j][2];
    var popupText=odisha_[j][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:odishafortIcon}).addTo(map)
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
}  
// var odishasancturies=[
//     ["sanctuary",83.77110948196693,21.500927988555976,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")]

// ]
// for(var k=0;k<odishasancturies.length;k++)
// {
//     var lon1=odishasancturies[k][1];
//     var lat1=odishasancturies[k][2];
//     var popupText1=odishasancturies[k][3];
//     var markerLocation=new L.LatLng(this.lat1,this.lon1)
//     var marker=new L.Marker(markerLocation,{icon:odishasanctury}).addTo(map)
//     map.addLayer(this.marker)
//     marker.bindPopup(popupText1)
//     .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
// }  
var Konark=L.marker([19.888269489746133,86.0943028728168],{icon:odishaUNESCOIcon})
Konark.addTo(map)
var Odishasanc=[
    ["badrama(ushakothi)",84.29107589561518,21.497363317523533, ],
    ["sunabeda",82.49180476489549,20.461838519230632, ],
    ["simlipal", 86.2945073066596,21.593274448224502,],
    ["satkosia",84.71788113278616,20.49487994868842, ],
    ["bhitarkaniaka",87.00079579559291,20.749096308470303, ],
    ["nandankann",85.82588929372969,20.39595099296582, ],
    ["lakhari_valley", 84.31015423788084,19.345978827186123,],
    ["balukhand",85.89199233604128,19.828125479352188, ],
    ["kuldiha",86.72908094183992,21.412138882240665, ],
    ["chandaka_dampara", 85.66412329700199,20.350144510862034,],
    ["kapilash",85.76277224955729,20.680752231112177, ],
    ["khalsuni", 84.43938589787527,21.3370679829226,],
    ["karlapat", 83.03604103603693,19.672188050444245,],
    ["hadgarh",86.28748722067013,21.279977417165533, ],
    ["gahirmatha", 87.00035691093733,20.744238347211027,],
    ["debrigarh", 83.77123822630435,21.500808196227336,],
    ["chilika", 85.38414426501812,19.770107411403114,]
]
for(var i=0;i<Odishasanc.length;i++)
{
    var lonodssanc=Odishasanc[i][1];
    var latodssanc=Odishasanc[i][2];
    // var popupText=madhyapradesh[i][3];
    var markerLocationodssanc=new L.LatLng(this.latodssanc,this.lonodssanc)
    var markerodssanc=new L.Marker(markerLocationodssanc,{icon:OdishaSancIcon})
    map.addLayer(this.markerodssanc)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

}

var odishahill=[
    ["Bolangir ",83.48358230178133,20.70083358253449, ],
    ["Keonjhar",85.58152084559919,21.63157012021679, ],
    ["Daringbadi ", 84.13027516539518,19.903615415267303,],
    ["Titlagarh ",83.14699060174355,20.288081603614692, ]
]
for(var i=0;i<odishahill.length;i++)
{
    var lonodshill=odishahill[i][1];
    var latodshill=odishahill[i][2];
    // var popupText=madhyapradesh[i][3];
    var markerLocationodshill=new L.LatLng(this.latodshill,this.lonodshill)
    var markerodshill=new L.Marker(markerLocationodshill,{icon:OdishaHillStationIcon})
    map.addLayer(this.markerodshill)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

}
var Puri=L.marker([19.80076731752917,85.84384124415426],{icon:OdishabeachIcon}).addTo(map)
var Konark_Beach=L.marker([19.86434932906835,86.10734525138686],{icon:OdishabeachIcon}).addTo(map)