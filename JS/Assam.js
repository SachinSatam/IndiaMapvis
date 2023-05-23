const AssamfortIcon=L.divIcon({
    className: 'custom-div-icon-AssamfortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const AssamUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-AssamUNESCOIcon',
    html:"<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const AssamSancIcon = L.divIcon({
    className: 'custom-div-icon-AssamSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const AssamHillStationIcon=L.divIcon({
    className: 'custom-div-icon-AssamHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

var assam=[
   ["Garchuk Fort",91.71079649065187,26.131481064962507,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Garh Doul", 92.7551819262541,26.646232076829513,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Kareng Ghar", 94.78426931846725,27.003481716913562,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Matiabag Palace",89.96089881089702,26.09112141395297,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Talatal Ghar Fort",94.62461954482004,26.966282586589656,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<assam.length;i++)
{
    var lon=assam[i][1];
    var lat=assam[i][2];
    var popupText=assam[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:AssamfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 

var Kaziranga_National_Park=L.marker([26.525910087898485,92.99380358170058],{icon:AssamUNESCOIcon}) 
var Manas_National_Park=L.marker([26.681808765427142,91.00192645921992],{icon:AssamUNESCOIcon})
Kaziranga_National_Park.addTo(map)
Manas_National_Park.addTo(map)
var Assamsanc=[
    ["amchang", 91.86213269577176,26.184372522460848,],
    ["barail",93.34839204541643,25.27872777900795, ],
    ["barnadi",91.75446783470777,26.79001153451764, ],
    ["burachapari",92.75776519578457,26.533660957614202, ],
    ["chakrasila",90.32952161112189,26.337934300285905, ],
    ["deepor_beel",91.65569518215703,26.115019915522108, ],
    ["dihing_patkai",95.54178535501494,27.34749520850696, ],
    ["garampani",93.86185631075311,26.379664120041546, ],
    ["hollongapar",94.35982075160878,26.666139667508883, ],
    ["lawkhowa",92.67731011112761,26.493422520127403, ],
    ["marat_longri",93.2818727841239,25.930806502434354, ],
    ["pabitorat",92.05508235344573,26.231015652621874, ],
    ["pani_dihang", 94.6036259477513,27.169786906089527,],
    ["sonai",92.33620810677373,26.929669993672576, ],
    ["ronga",93.89298332279283,27.204376489999397, ],
]

for(var k=0;k<Assamsanc.length;k++)
{
    var lonassamsan=Assamsanc[k][1];
    var latassamsan=Assamsanc[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationassamsan=new L.LatLng(this.latassamsan,this.lonassamsan)
    var markerassamsan=new L.Marker(markerLocationassamsan,{icon:AssamSancIcon})
    map.addLayer(this.markerassamsan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 
var assamhill=[
    ["Diphu", 93.43090000639401,25.846460215221818,],
    ["Haflong",93.01189269435125,25.163426999055506, ],
]
for(var m=0;m<Assamsanc.length;m++)
{
    var lonassamhill=assamhill[m][1];
    var latassamhill=assamhill[m][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationassamhill=new L.LatLng(this.latassamhill,this.lonassamhill)
    var markerassamhill=new L.Marker(markerLocationassamhill,{icon:AssamHillStationIcon})
    map.addLayer(this.markerassamhill)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 