const westbengalfortIcon=L.divIcon({
    className: 'custom-div-icon-westbengalfortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
  
const westBengalUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-westBengalUNESCOIcon',
    html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const westBengalSancIcon = L.divIcon({
  className: 'custom-div-icon-westBengalSancIcon',
  html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});

const westBengalStationIcon=L.divIcon({
  className: 'custom-div-icon-westBengalStationIcon',
  html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});

const westBengalbeachIcon=L.divIcon({
  className: 'custom-div-icon-westBengalbeachIcon',
  html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});

var westbengal=[
    ["Buxa Fort",89.580387812765,26.75517864550986,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["William Fort",88.33440497678507,22.562701352033972,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Kurumbera Fort",87.2548435973225,22.08772633143258,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
   // ["Bhunia Fort",69.68993413781995,23.248918337785273,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    //["Mornington Fort"],
   // ["Radisson Fort"],
    ["Victoria Memorial",88.34249338435046,22.54538971945377,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Hazarduari Palace",88.26860359551142,24.18632932886331,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<westbengal.length;i++)
{
    var lon=westbengal[i][1];
    var lat=westbengal[i][2];
    var popupText=westbengal[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:westbengalfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
}

var Sundarban_National_Park=L.marker([21.83603874882973,88.88420109731773],{icon:westBengalUNESCOIcon})
var Darjeeling_Himalayan_Railway=L.marker([26.882004442261366,88.32147686673427],{icon:westBengalUNESCOIcon})
Sundarban_National_Park.addTo(map)
Darjeeling_Himalayan_Railway.addTo(map)
var wbsanc=[
  ["ballavpur",87.66529622334325,23.683869863267752, ],
  ["bethuadaharo",88.39193686499269,23.59781703410528, ],
  ["bibhuti_bhushan", 88.76212971101278,23.186394448857346,],
  ["buxa",89.5281426785902,26.617324330618104, ],
  ["chapramari",88.85510189579722,26.874718937417235, ],
  ["chintamati_kar",88.40067386680788,22.429515423639558, ],
  ["haliday_island",88.63170862260348,21.664777002526655, ],
  ["jorepokhri_salemandor", 88.27681391827568,26.947345669865033,],
  ["lothian_island",88.32800258862109,21.66810053846215, ],
  ["mahananda",88.36292176510521,26.796442171374434, ],
  ["pakhi_bitan",88.57594252462879,26.752027925038696, ],
  ["raiganj",88.12004013993263,25.636852349040307, ],
  ["ramnabagan",87.85073113799818,23.253092211097986, ],
  ["senchal",88.36272062278243,26.928982941782188, ],
  ["sajnakhali", 88.83130049563445,22.124004774276077,]
]
for(var i=0;i<wbsanc.length;i++)
{
    var lonwbsanc=wbsanc[i][1];
    var latwbsanc=wbsanc[i][2];
    // var popupText=uttarakhand[i][3];
    var markerLocationwbsanc=new L.LatLng(this.latwbsanc,this.lonwbsanc)
    var markerwbsanc=new L.Marker(markerLocationwbsanc,{icon:westBengalSancIcon})
    map.addLayer(this.markerwbsanc)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

}
var wbhill=[
  ["Siliguri ", 88.41410197367905,26.7456240530921,],
  ["Darjeeling",88.32156269579751,26.88207142208022, ]
]
for(var i=0;i<wbhill.length;i++)
{
    var lonwbhill=wbhill[i][1];
    var latwbhill=wbhill[i][2];
    // var popupText=uttarakhand[i][3];
    var markerLocationwbhill=new L.LatLng(this.latwbhill,this.lonwbhill)
    var markerwbhill=new L.Marker(markerLocationwbhill,{icon:westBengalStationIcon})
    map.addLayer(this.markerwbhill)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
}

var Digha_Beach=L.marker([21.62773504192283,87.53690059830436],{icon:westBengalbeachIcon})
var Shankarpur_Beach=L.marker([21.638483036192547,87.58069339561949],{icon:westBengalbeachIcon})
var Frazerganj=L.marker([21.565576802757263,88.2491622514366],{icon:westBengalbeachIcon})
var Ganga_Sagar=L.marker([21.634084525703333,88.07288690730756],{icon:westBengalbeachIcon})
Digha_Beach.addTo(map)
Shankarpur_Beach.addTo(map)
Frazerganj.addTo(map)
Ganga_Sagar.addTo(map)

