const GujfortIcon=L.divIcon({
   className: 'custom-div-icon-GujfortIcon',
   html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
})

const GujUNESCOIcon=L.divIcon({
   className: 'custom-div-icon-GujUNESCOIcon',
   html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
})

const GujSancIcon = L.divIcon({
   className: 'custom-div-icon-GujSancIcon',
   html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
});

const GujHillStationIcon=L.divIcon({
   className: 'custom-div-icon-GujHillStationIcon',
   html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
});

const GujbeachIcon=L.divIcon({
   className: 'custom-div-icon-GujbeachIcon',
   html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
   iconSize: [30, 42],
   iconAnchor: [15, 42]
});

var maincontent=`<html>
<head>
<style>
.content{
    width:120px;
    height:120px;
    background-image:url("{0}");
    background-repeat:no-repeat;
    background-size:120px 120px;
    border-style: solid;
    border-width: 0;
}
</style>
</head>
<body>
<h4>{1}</h4>
<div class="content"></div>
</body>
</html`

var Gujarat=[
      ["Surat Fort",72.81770585312512,21.196341633942268,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort")],
       ["Bhujiya Fort",69.69000923967289,23.24886904957604,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/79/Dungar_of_bhuj.jpg").replace(new RegExp("\\{1\\}","gi"),"Bhujiya Fort") ],
    //["Bhuj Fort"],
       ["Vadnagar Fort",72.61220185643548,24.047518569613505,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/4/48/The_Grand_Maheshwar_Fort.jpg").replace(new RegExp("\\{1\\}","gi"),"Vadnagar Fort") ],
       ["Gaikwad Fort",72.57631786983832,23.026988239441383,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/3/39/Fort_Of_Jaisalmer.JPG").replace(new RegExp("\\{1\\}","gi"),"Gaikwad Fort") ],
       ["Arjungad Fort",72.9119068396198,20.43159456407368,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/94/Solapur_Fort_4-_Solapur-_Maharashtra.jpg").replace(new RegExp("\\{1\\}","gi"),"Arjungad Fort") ],
       ["Ranpur Fort",71.71157193568878,22.3468373472784,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/8/8e/A_nice_boat_at_Yashavantgad_%28Jaitapur%29_fort_on_the_beach.JPG").replace(new RegExp("\\{1\\}","gi"),"Ranpur Fort") ],
    ]   
    for(var j=0;j<Gujarat.length;j++)
    {
        var lonfort=Gujarat[j][1];
        var latfort=Gujarat[j][2];
        var popupTextfort=Gujarat[j][3];
        var markerLocationfort=new L.LatLng(this.latfort,this.lonfort)
        var markerfort=new L.Marker(markerLocationfort,{icon:GujfortIcon})
        map.addLayer(this.markerfort)
        markerfort.bindPopup(popupTextfort)
      //   .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
}
var Champaner=L.marker([22.485367505267753,73.5314512247262],{icon:GujUNESCOIcon})
Champaner.addTo(map)  
var Gujsancturies=[
   ["balaram_ambaji",72.64273850734598,24.356405379195497,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort")],
   ["barda", 73.53848119668524,20.772026733174673,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort")],
   ["gaga",69.18122933877297,22.147006371241876,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["gir_sanctuary",71.05647805850401,21.11503665620302,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["hingolgad",71.31861319589846,22.15279698901663,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["jambighoda", 73.6645095974947,22.35725568205968,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort")],
   ["jessore",72.49942308036485,24.41719113253829,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["kachchh",70.42736357392752,23.93920934714523,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["marine_kachchh",69.20079203611789,22.40201536293163,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["mitiyala",71.25969559560599,21.192294246048505,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["nal_sarovar",72.04881596376325,22.820653052197894,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["narayan_sarovar",68.539459833221,23.67603653208475,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["paniya",70.84915874536559,21.242761427312082,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["porbandar_bird_sanc",69.61814079376649,21.637607638066893,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["Purna",73.65769132443529,20.961548138167654,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["rampara",70.95529337844968,22.530494238859227,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["ratanmahal", 74.1102678803041,22.575008913340397,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort")],
   ["shoolpaneshwar",73.79496961282074,21.760861423270907,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
   ["Thol",72.39288201101125,23.14031126090718,maincontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7b/Surat_Fort_%2815345082318%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Surat Fort") ],
]
for(var k=0;k<Gujsancturies.length;k++)
{
    var longujsan=Gujsancturies[k][1];
    var latgujsan=Gujsancturies[k][2];
    var popupTextsan=Gujsancturies[k][3];
    var markerLocationgujsan=new L.LatLng(this.latgujsan,this.longujsan)
    var markergujsan=new L.Marker(markerLocationgujsan,{icon:GujSancIcon})
    map.addLayer(this.markergujsan)
    markergujsan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 
var Rann_of_Kutch=L.marker([23.88428406350981,70.20899827380374],{icon:GujHillStationIcon})
Rann_of_Kutch.addTo(map)
var gujbeaches=[
   ["Porbandar Beach ", 69.60824880725792,21.631452665097846,],
   ["Chorwad Beach",70.22690825228774,20.999851982190755, ],
   ["Beyt Dwarka", 69.09754425532529,22.461375580733506,],
   [" Veraval Beach",70.35189902837863,20.910476088538662, ],
   ["Chakratith Beach ",70.97664874404836,20.704616881793065, ],
   ["Jallandhar Beach ", 70.9851161955917,20.709104744012684,],
   ["Nagoa Beach", 70.93541876003253,20.71168305809572,],
]
for(var k=0;k<gujbeaches.length;k++)
{
    var longujbea=gujbeaches[k][1];
    var latgujbea=gujbeaches[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationgujbea=new L.LatLng(this.latgujbea,this.longujbea)
    var markergujbea=new L.Marker(markerLocationgujbea,{icon:GujbeachIcon})
    map.addLayer(this.markergujbea)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 