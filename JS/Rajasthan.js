const RajasthanfortIcon=L.divIcon({
    className: 'custom-div-icon-RajasthanfortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const RajasthanUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-RajasthanUNESCOIcon',
    html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const RajasthanSancIcon = L.divIcon({
    className: 'custom-div-icon-RajasthanSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const RajasthanHillStationIcon=L.divIcon({
    className: 'custom-div-icon-RajasthanHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
var Rajasthan=[   
   ["Amer Fort",75.85128407600132,26.985674368564553,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Jaisalmer Fort",70.9125663820795,26.91260855332564,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Ranthambor Fort",76.45582923551211,26.01945443191985,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Chittorgarh Fort",74.64507186854301,24.888079133513823,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Junagarh Fort",73.31808202813902,28.022148003870186,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Jaipur City Palace",75.82373577044115,26.925985598220716,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Udaypur City Palace",73.68352162620874,24.576627464780607,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<Rajasthan.length;i++)
{
    var lon=Rajasthan[i][1];
    var lat=Rajasthan[i][2];
    var popupText=Rajasthan[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:RajasthanfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 

var Keoladeo_National_Park=L.marker([27.15948853818784,77.52332864346342],{icon:RajasthanUNESCOIcon})
var Chittorgarh_Fort=L.marker([24.888108330908295,74.64501822436235],{icon:RajasthanUNESCOIcon})
Keoladeo_National_Park.addTo(map)
Chittorgarh_Fort.addTo(map)
 
var RajnSanctuary=[
    ["bassi",74.81195659573044,25.027456492927595 ],
    ["bhensrodgarh" ,75.56755079138145,24.89755434100091,],
    ["bandh_baratha", 77.38402882278156,26.904793830358606,],
    ["darrah",75.69130287271557,25.027687833401313, ],
    ["jawahar_sagar",75.6659419118725,25.039944273715996, ],
    ["jamwa_ramgarh",76.05866843998363,27.028486746373655, ],
    ["jaisamand",73.95056677176215,24.241664782192764, ],
    ["kailadevi",76.9599835074159,26.335060514564255, ],
    ["kumbhalgarh",73.58153311685857,25.125543974941557, ],
    ["nahargarh",75.86446309580255,27.016277312608615, ],
    ["mount_abu",72.71484400704664,24.59297537009581, ],
    ["national_chambal",78.64484173015892,26.766159255125487,],
    ["phulwari",73.26645969385018,24.236790474421582, ],
    ["ramgarh_vishdhari", 75.66807646034901,25.500741962771073,],
    ["ramsagar",75.80429076264102,25.9003815748734, ],
    ["sajjangarh", 73.65208223619008,24.59182222610314,],
    ["sawai_man",76.35824092559112,26.010956733625726, ],
    ["sariska", 76.43891669581359,27.31062400196106,],
    ["shergarh", 72.23038729914714,26.355629847481627,],
    ["sitamata",74.49664987386329,24.308137915926785, ],
    ["todgarh",73.9716811227371,25.690742164831214, ],
    ["tal_chappar", 74.43824326034337,27.818483274960638,],
    //["van_vihar",77.36653402546995,23.233947826696326, ],
    //[" bagdarat", 82.49160984817526,24.679035389600003,]
]
for(var i=0;i<RajnSanctuary.length;i++)
{
    var lonrjnsanc=RajnSanctuary[i][1];
    var latrjnsanc=RajnSanctuary[i][2];
    // var popupText=madhyapradesh[i][3];
    var markerLocationrjnsanc=new L.LatLng(this.latrjnsanc,this.lonrjnsanc)
    var markerrjnsanc=new L.Marker(markerLocationrjnsanc,{icon:RajasthanSancIcon})
    map.addLayer(this.markerrjnsanc)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
}
var rajnhill=[
    ["Lake Pichola", 73.679046738442,24.572527362357636,],
    ["Fateh Sagar Lake",73.67350502965282,24.60132039182711, ],
    ["Nakki Lake",72.70435578592976,24.59540149299863, ]
]
for(var i=0;i<rajnhill.length;i++)
{
    var lonrjnhill=rajnhill[i][1];
    var latrjnhill=rajnhill[i][2];
    // var popupText=madhyapradesh[i][3];
    var markerLocationrjnhill=new L.LatLng(this.latrjnhill,this.lonrjnhill)
    var markerrjnhill=new L.Marker(markerLocationrjnhill,{icon:RajasthanHillStationIcon})
    map.addLayer(this.markerrjnhill)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
}