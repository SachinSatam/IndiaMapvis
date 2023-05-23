const PunjabfortIcon=L.divIcon({
    className: 'custom-div-icon-PunjabfortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const PunjabUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-PunjabUNESCOIcon',
    html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const PunjabSancIcon = L.divIcon({
    className: 'custom-div-icon-PunjabSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const PunjabHillStationIcon=L.divIcon({
    className: 'custom-div-icon-PunjabHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
var punjab=[   
   ["Anandpur Sahib Fort",76.50541324356415,31.2316185575851,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Qila Mubarak",74.92539527955493,30.272139910045635,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Faridkot Fort",74.75385809407054,30.67303503932142,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Gobindgarh Fort",74.86000035336038,31.627103959868744,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
   ["Phillaur Fort",75.78880555149118,31.012074658146847,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Bahadurgarh Fort",76.47225721285257,30.364425167471097,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
   ["Maharaja Ranjit Fort",75.78975979567187,31.0115726687798,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
]
for(var i=0;i<punjab.length;i++)
{
    var lon=punjab[i][1];
    var lat=punjab[i][2];
    var popupText=punjab[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:PunjabfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 
var Capitol_Complex_Tourist_Center=L.marker([30.75938058175247,76.80347998306159],{icon:PunjabUNESCOIcon})
Capitol_Complex_Tourist_Center.addTo(map)
var punjabsanc=[
    ["abohar", 74.07990930068445,30.000240565327868],
    ["bir_bhunerheri",76.4700804709722,30.187131850525343, ],
    ["bir_bhadson",76.22106981128614,30.513339278091244, ],
    ["harike_lake", 75.01173234152108,31.121704025923602,],
    ["takhani_rehampur",75.92044299413782,31.66371733256257, ],
    ["jhajjar_bacholi", 76.51731655179269,31.262791993836426,],
    ["kathlaur",75.44955084019695,32.24894307108206, ],
    ["nangal", 76.35720757017353,31.386433505885872,]
]
for(var i=0;i<punjabsanc.length;i++)
{
    var lonpjbsanc=punjabsanc[i][1];
    var latpjbsanc=punjabsanc[i][2];
    // var popupText=madhyapradesh[i][3];
    var markerLocationpjbsanc=new L.LatLng(this.latpjbsanc,this.lonpjbsanc)
    var markerpjbsanc=new L.Marker(markerLocationpjbsanc,{icon:PunjabSancIcon})
    map.addLayer(this.markerpjbsanc)
    // marker.bindPopup(popupText)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

}