const UttarakhandfortIcon=L.divIcon({
    className: 'custom-div-icon-UttarakhandfortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const UttarakhandUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-UttarakhandUNESCOIcon',
    html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const UttarakhandSancIcon = L.divIcon({
    className: 'custom-div-icon-UttarakhandSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const UttarakhandStationIcon=L.divIcon({
    className: 'custom-div-icon-UttarakhandStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

var uttarakhand=[
    ["Banasur Fort",80.05024878955098,29.40741092503661,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
   ["Chandpur Fort",79.21382806681413,30.175793180688114,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Chaukhutia Fort",79.20830240282605,29.81822263279527,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Dewalgarh Fort",78.85935358310763,30.234574835642647,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Khagmara Fort",79.6569567974883,29.587816648312085,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
    //["Lalmandi Fort"],
    //["Malla Palace Fort"],
   ["Pithoragarh Fort",80.20939849748821,29.585263862658856,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<uttarakhand.length;i++)
{
    var lon=uttarakhand[i][1];
    var lat=uttarakhand[i][2];
    var popupText=uttarakhand[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:UttarakhandfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 

var Valley_of_Flowers_National_Park=L.marker([30.728197664555903,79.60519995915607],{icon:UttarakhandUNESCOIcon})
var Nanda_Devi_National_Park=L.marker([30.546631961787337,79.97113773113375],{icon:UttarakhandUNESCOIcon})
Valley_of_Flowers_National_Park.addTo(map)
Nanda_Devi_National_Park.addTo(map)

var Uttarakhandsancturies=[
    ["askot", 80.33517484576525,29.764721875643165,],
    ["binsart", 79.75395726707197,29.70579336040093,],
    ["govind_pashu", 78.33857784993465,31.14268094012289,],
    ["kedarnath",79.06443049409872,30.75350149516058, ],
    ["nandhaur", 79.70482148239341,29.135983271568062,],
    ["mussoorie",78.06098350191571,30.45958326538848, ],
    ["sonanadi",79.12524981124,29.394987879254828, ]
]
for(var i=0;i<Uttarakhandsancturies.length;i++)
{
    var lonutrsanc=Uttarakhandsancturies[i][1];
    var latutrsanc=Uttarakhandsancturies[i][2];
    // var popupText=uttarakhand[i][3];
    var markerLocationutrsanc=new L.LatLng(this.latutrsanc,this.lonutrsanc)
    var markerutrsanc=new L.Marker(markerLocationutrsanc,{icon:UttarakhandSancIcon})
    map.addLayer(this.markerutrsanc)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 

var utrhill=[
    ["Dhanaulti",78.23380200355854,30.40508388845275, ],
    ["Lansdowne", 78.6866376801916,29.837834316446322,],
    ["Mussoorie", 78.0632219128965,30.461158479768393,],
    ["Kausani",79.6039620761469,29.844446202826465, ],
    ["Mukteshwar",79.65551340048967,29.460521756180437, ],
    ["Nainital", 79.45372553376208,29.39261951897271,]
]
for(var i=0;i<utrhill.length;i++)
{
    var lonutrhill=utrhill[i][1];
    var latutrhill=utrhill[i][2];
    // var popupText=uttarakhand[i][3];
    var markerLocationutrhill=new L.LatLng(this.latutrhill,this.lonutrhill)
    var markerutrhill=new L.Marker(markerLocationutrhill,{icon:UttarakhandStationIcon})
    map.addLayer(this.markerutrsanc)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 