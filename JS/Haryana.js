const HaryanafortIcon=L.divIcon({
    className: 'custom-div-icon-HaryanafortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const HaryanaUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-HaryanaUNESCOIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><span class='icon-unescologo'></span>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
var haryana=[
   ["Kaithal Fort",76.39837221283827,29.803369448687864,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Ramgarh Fort",76.8854444686792,30.64808095512433,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],
   ["Loharu Fort",75.80776461280439,28.430760779949274,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Sadhaura Fort",76.99194048185701,30.637831926322505,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<haryana.length;i++)
{
    var lon=haryana[i][1];
    var lat=haryana[i][2];
    var popupText=haryana[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:HaryanafortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 