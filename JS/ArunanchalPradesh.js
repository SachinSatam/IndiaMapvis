const ArunanchalfortIcon=L.divIcon({
    className: 'custom-div-icon-ArunanchalfortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const ArunanchalUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-ArunanchalUNESCOIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><span class='icon-unescologo'></span>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
const ArunanchalSancIcon = L.divIcon({
    className: 'custom-div-icon-ArunanchalSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const ArunanchalHillStationIcon=L.divIcon({
    className: 'custom-div-icon-ArunanchalHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
var arunanchal=[
    ["Ita Fort",93.63182561451295,27.092382377038064,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Bhisnaknagar Fort",96.00530806337481,28.046876205297018,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Bolung Fort",95.74948189022406,28.033444597086994,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Gomsi Fort",95.32667755512315,28.05973310873133,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Rukmini Fort",95.77991655231666,28.20702200437607,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
    ["Tezu Fort",96.1184556806391,27.97878755140091,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    //["Buroi Fort"],
]
for(var i=0;i<arunanchal.length;i++)
{
    var lon=arunanchal[i][1];
    var lat=arunanchal[i][2];
    var popupText=arunanchal[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:ArunanchalfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 
var arunanchalsanc=[
    ["d_ering",95.44950202327732,27.94130264983755, ],
    ["dibang",95.95827906519104,29.01376750607094, ],
    ["east_nest", 91.91223257771328,28.140310031924965,],
    ["itanagar",93.5758243426431,27.114266392611302, ],
    ["mahao",95.93919064981219,28.147030297403152, ],
    ["pakke",92.81782909580565,27.098527395976966, ],
    ["sessa_orchid",92.74061168044938,26.785250186264108, ],
    ["tale", 93.98285572280675,27.569835250796814,],
]
for(var b=0;b<arunanchalsanc.length;b++)
{
    var lonarunsan=arunanchalsanc[b][1];
    var latarunsan=arunanchalsanc[b][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationarunsan=new L.LatLng(this.latarunsan,this.lonarunsan)
    var markerarunsan=new L.Marker(markerLocationarunsan,{icon:ArunanchalHillStationIcon})
    map.addLayer(this.markerarunsan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})
}
