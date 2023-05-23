const HimachalfortIcon=L.divIcon({
    className: 'custom-div-icon-HimachalfortIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})
 
const HimachalUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-HimachalUNESCOIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><span class='icon-unescologo'></span>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
})

const HimachalSancIcon = L.divIcon({
    className: 'custom-div-icon-HimachalSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const HimachalHillStationIcon=L.divIcon({
    className: 'custom-div-icon-HimachalHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

var himachal=[
    ["Kamlah Fort",76.67357609754585,31.80809020964202,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Kangra Fort",76.25456631953529,32.087987704931166,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Kotla Fort",76.11260444322437,32.39682259713988,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
]
for(var i=0;i<himachal.length;i++)
{
    var lon=himachal[i][1];
    var lat=himachal[i][2];
    var popupText=himachal[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:HimachalfortIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})

} 
var himachalsanctuary=[
    ["bandli",77.03808766608174,31.322012336496147, ],
    ["chail",77.20724693907596,30.96825350109603, ],
    ["chandratal", 77.61744259496236,32.47590066736699,],
    ["churdhar", 77.4543640571137,30.837608102273304,],
    ["daraghati",77.85306249598011,31.419608252735788, ],
    ["dhauladhar", 76.4538694825198,32.138408500629794,],
    ["gamgul",75.95385893836718,32.770589771720815, ],
    ["kais",77.15438036716928,32.000140645275756, ],
    ["kalatop_khajjiar",76.01735476534068,32.55316178527816, ],
    ["kanawar", 77.31158673647734,31.93604069212095,],
    ["khokhan",77.11060731134444,31.874992382296078, ],
    ["kibber", 78.01255678438126,32.33009302457974,],
    ["kugti", 76.69218943116266,32.46640705600917,],
    ["lippa_asrang", 78.33193239599045,31.65704259061717,],
    ["manali", 77.16692606903322,32.2514871975093,],
    ["nargu", 76.93136646922112,31.71122563559301,],
    ["pong_Dam",76.06616886531828,32.04541385535028, ],
    ["rakchham",78.36452310949024,31.379580889687325, ],
    ["rupi", 77.83608968249622,31.597395786997264,],
    ["sainjit",77.50641936901467,31.828735822550616, ],
    ["renuka",77.45855764012636,30.609751651425267, ],
    ["shikari_devi",77.17789109381476,31.43509968425315, ],
    ["shimla_water_catchmentr",77.21970862480303,31.111611229677557, ],
    ["talra",77.76450847876592,31.028275997806823, ],
    ["tirthan", 77.5478678094803,31.618066835939164,],
    ["tundah",76.4546127537004,32.51730065818795, ]
]
for(var k=0;k<himachalsanctuary.length;k++)
{
    var lonhimachalsan=himachalsanctuary[k][1];
    var lathimachalsan=himachalsanctuary[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationhimachalsan=new L.LatLng(this.lathimachalsan,this.lonhimachalsan)
    var markerhimachalsan=new L.Marker(markerLocationhimachalsan,{icon:HimachalSancIcon})
    map.addLayer(this.markerhimachalsan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 

var himachalhill=[
    ["Kasauli", 76.96407788478447,30.90135809251021,],
    ["Triund Trek",76.34061932670588,32.25872285731038, ],
    ["shimla",77.17635801137186,31.10496703218431, ],
    ["Rohtang Pass",77.24661326381239,32.371848221850506, ],
    ["Spiti Valley",78.02508885786267,32.24275882077033, ]
]
for(var k=0;k<himachalhill.length;k++)
{
    var lonhimachalhill=himachalhill[k][1];
    var lathimachalhill=himachalhill[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationhimachalhill=new L.LatLng(this.lathimachalhill,this.lonhimachalhill)
    var markerhimachalhill=new L.Marker(markerLocationhimachalhill,{icon:HimachalHillStationIcon})
    map.addLayer(this.markerhimachalhill)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 