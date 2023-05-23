const DelhifortIcon=L.divIcon({
    className: 'custom-div-icon-DelhifortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const DelhiUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-DelhiUNESCOIcon',
    html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
var delhi=[
    ["Red Fort",77.24095592444851,28.656300402765012,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
    ["Purana Quila",77.24368345328351,28.609800435228603,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Adilabad Fort",77.26759118211712,28.505469877291464,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    
]
for(var i=0;i<delhi.length;i++)
{
    var lon=delhi[i][1];
    var lat=delhi[i][2];
    var popupText=delhi[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:DelhifortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 

var Humayun_Tomb=L.marker([28.593513667889056, 77.25068352867389],{icon:DelhiUNESCOIcon})
var Qutb_Minar_Complex=L.marker([28.701201306705403, 77.22894223641177],{icon:DelhiUNESCOIcon})
Humayun_Tomb.addTo(map)
Qutb_Minar_Complex.addTo(map)
