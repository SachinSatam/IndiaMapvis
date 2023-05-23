
//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
//L.tileLayer.provider('Stamen.Watercolor').addTo(map)
//L.tileLayer.provider('Stadia.AlidadeSmoothDark').addTo(map)

//var AlidadeSmoothDark=L.tileLayer.provider('Stadia.AlidadeSmoothDark')
const MahafortsIcon = L.divIcon({
    className: 'custom-div-icon-MahafortsIcon',
    html: "<div style='background-color:#9966002;' class='marker-pin'></div><i class='material-icons'>fort</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const MahaUNESCOIcon=L.divIcon({
    className: 'custom-div-icon-MahaUNESCOIcon',
    html: "<div style='background-color:#4da6ff;' class='marker-pin'></div><i class='fa fa-institution' style='color: rgb(0, 0, 0); font-size: 18px; box-sizing: content-box; line-height: 25px; text-align: center; display: initial; overflow: hidden; position: absolute;margin: 6px 0px 0px -10px;'></i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const MahaSancIcon = L.divIcon({
    className: 'custom-div-icon-MahaSancIcon',
    html: "<div style='background-color:#009900;' class='marker-pin'></div><i class='material-icons'>pets</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const MahaHillStationIcon=L.divIcon({
    className: 'custom-div-icon-MahaHillStationIcon',
    html: "<div style='background-color:#ffcc00;' class='marker-pin'></div><i class='material-icons'>landscape</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

const MahabeachIcon=L.divIcon({
    className: 'custom-div-icon-MahabeachIcon',
    html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});
// sanctuary logo code
// className: 'custom-div-icon',
//         html: "<div style='background-color:#9966002;' class='marker-pin'></div><span class='icon-unescologo'></span>",
//         iconSize: [30, 42],
//         iconAnchor: [15, 42]


//var Golconda_fortcrd=[17.38353424202757, 78.40095623771668]
//var content='This is raigad fort.<br><image src="https://www.linkpicture.com/q/Fortlogo.png" width=10 height=10></br>'
//var content='<html><head><style>body{background-color:#333333;}.first{width: 120px;height: 180px;border:solid 1px #595959;background-color: #4d4d4d;margin:100px 0 10px 100px;box-shadow: 0 0 20px #666666;}.child{width:120px;height:120px;background-image:url("C:/Users/Win10/Downloads/raigad.jfif");background-repeat:no-repeat;}.content{width:120px;height;60px;color:#e67300;margin-top:10px;}</style></head><body><div class="first"><div class="child"></div><div class="content"><center>Type: Hill FortHeight: 1376m</center></div></div></body>'

// var content=`<html>
// <head>
// <style>
// body
// {

// }
// .first
// {
// width: 120px;    
// height: 180px;
// background-color: #4d4d4d;
// border-style: solid;
// border-width: 0";
// }
// .child
// {
// width:120px;
// height:120px;
// background-image:url("{0}");
// background-repeat:no-repeat;
// background-size:120px 120px;
// border-style: solid;
// border-width: 0;
// }
// .content
// {
// width:120px;
// height:120px;
// color:#e67300;
// border-style: none;
// border-width: 0;
// }
// .leaflet-popup-content-wrapper {
//     background-color:#4d4d4d
// }

// .leaflet-popup-content-wrapper .leaflet-popup-content {
//     background-color:#000
// }

// .leaflet-popup-tip-container {
    
// }


// </style>
// </head>
// <body>
// <div class="first">
// <div class="child">

// </div>
// <div class="content"><center>Type:{1}
// Height:{2}</center>
// </div>
// </div>
// </body>`

var map = L.map('map1').setView([21.8979, 78.8718], 5)

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);
map.doubleClickZoom.disable()
//L.tileLayer.provider('Stamen.Watercolor').addTo(map)
//var Raigad_fort=L.marker([18.234792783212164, 73.44643366841896],{icon:FortIcon})//.addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').click()

// var Golconda_fort=L.marker(Golconda_fortcoord,{icon:FortIcon}).addTo(map).bindPopup('this is golconda fort')
// .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
// var Raigad_fort=L.marker([18.234792783212164, 73.44643366841896],{icon:FortIcon}).addTo(map).bindPopup(content).on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
// var Achala_fort=L.marker(Achala_fortcoord,{icon:FortIcon}).addTo(map)
//var Ahmadnagar_fort=L.
// $(document).ready(function(){
//     $(".btn1").click(function(){
//     $('.leaflet-pane img[src="https://www.linkpicture.com/q/Fortlogo.png"]').hide(); 
// });   
//     $(".btn2").click(function(){
//     $('.leaflet-pane img[src="https://www.linkpicture.com/q/Fortlogo.png"]').show();
//     })
// });
var content=`<html>
<head>
<style>
.content{
    width:120px;
    height:120px;
    background-image:url("{0}");
    background-repeat:no-repeat;
    background-size:200px 120px;
    border-style: solid;
    border-width: 0;
}
</style>
</head>
<body>
<center><h4>{1}</h4>
<div class="content"></div>
</center>
<br>
<br>
<a href="{2}">Read More...</a>
</body>
</html`
var forts=[
   ["Ahivant_Fort",73.8501697917481,20.414662545284205,content.replace(new RegExp("\\{0\\}","gi"),"https://www.mtdc.co.in/wp-content/uploads/2013/08/Ahivant-Fort-1-1.jpg").replace(new RegExp("\\{1\\}","gi"),"Ahivant Fort").replace(new RegExp("\\{2\\}","gi"),"English_ahivant_fort.html")],
   ["Raigad_Fort",73.44643366841896,18.234792783212164,content.replace(new RegExp("\\{0\\}","gi"),"https://www.linkpicture.com/q/raigad.jpg").replace(new RegExp("\\{1\\}","gi"),"Raigad Fort").replace(new RegExp("\\{2\\}","gi"),"")],
   ["Achala_Fort",73.81426335311133,20.43204477894843,content.replace(new RegExp("\\{0\\}","gi"),"https://www.mtdc.co.in/wp-content/uploads/2020/01/Ajoba-gad.jpg.jpg").replace(new RegExp("\\{1\\}","gi"),"Achala Fort").replace(new RegExp("\\{2\\}","gi"),"English_achala_fort.html")],
   ["Agashi_Fort",73.46174995371484,19.13674257046225,content.replace(new RegExp("\\{0\\}","gi"),"https://i.pinimg.com/736x/bb/f6/0d/bbf60d259a93e38864bef41b6e8c46a0.jpg").replace(new RegExp("\\{1\\}","gi"),"Agashi Fort").replace(new RegExp("\\{2\\}","gi"),"English_agashi_fort.html")],
   ["Ahmadnagar_Fort", 74.75554711209261,19.096429790113262,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/d/d4/Ahmednagar_Fort_Main_Gate.jpg").replace(new RegExp("\\{1\\}","gi"),"AhmadnNagar Fort").replace(new RegExp("\\{2\\}","gi"),"English_ahemadnagar_fort.html")],
   ["Ajinkyatara_Fort",73.99042918190182,17.672547638232203,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/5/53/Main_Gateway%2C_Ajinkyatara_02.jpg").replace(new RegExp("\\{1\\}","gi"),"Ajinkytara Fort").replace(new RegExp("\\{2\\}","gi"),"English_ajinkyatara_fort.html")],
   ["Akola_Fort",76.99020158936409,20.70638195910663,content.replace(new RegExp("\\{0\\}","gi"),"https://www.tourmyindia.com/images/balapur-fort1.jpg").replace(new RegExp("\\{1\\}","gi"),"Akola Fort").replace(new RegExp("\\{2\\}","gi"),"English_akola_fort.html")],
   ["Akluj_Fort",75.02308002979179,17.894321645082602,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/d/dc/Fort_in_Akaluj%2C_Maharashtra%2C_India.jpg").replace(new RegExp("\\{1\\}","gi"),"Akluj Fort").replace(new RegExp("\\{2\\}","gi"),"English_akluj_fort.html") ],
   ["Alang_Fort",73.6610477107689,19.58296556843817,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/e/e2/Anang_Madan_Kulang_-_3_forts_range.jpg").replace(new RegExp("\\{1\\}","gi"),"Alang Fort").replace(new RegExp("\\{2\\}","gi"),"English_alang_fort.html") ],
   ["Anjaneri_Fort",73.57712926844707,19.930089602633196,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/0/07/Anjaneri.jpg").replace(new RegExp("\\{1\\}","gi"),"Anjaneri Fort").replace(new RegExp("\\{2\\}","gi"),"English_ajaneri_fort.html") ],
   ["Anjanvel_Fort", 73.15222922422798,17.57230013656873,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/4/48/Kolaba_fort_east_side.jpg").replace(new RegExp("\\{1\\}","gi"),"Anjanvel Fort").replace(new RegExp("\\{2\\}","gi"),"English_anjanvel_fort.html")],
   ["Antur_Fort",75.23534059543901,20.428721959668337,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/9c/Antur_Fort_20180805184008_IMG_1399.jpg").replace(new RegExp("\\{1\\}","gi"),"Antur Fort").replace(new RegExp("\\{2\\}","gi"),"English_antur_fort.html") ],
   ["Arnala_Fort",72.73198079645442,19.46673543529065,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/b/b0/Arnala-fort-entrance.jpg").replace(new RegExp("\\{1\\}","gi"),"Arnala Fort").replace(new RegExp("\\{2\\}","gi"),"English_arnala_fort.html") ],
   ["Asheri_Fort",72.92189362797048,19.821738723066314,content.replace(new RegExp("\\{0\\}","gi"),"https://static2.tripoto.com/media/filter/tst/img/1984445/TripDocument/1588442394_1588442376_20190613205653_img_1915_1_01.jpeg").replace(new RegExp("\\{1\\}","gi"),"Asheri Fort").replace(new RegExp("\\{2\\}","gi"),"English_asheri_fort.html") ],
   ["Asava_Fort", 72.81451448193584,19.760745810028958,content.replace(new RegExp("\\{0\\}","gi"),"https://res.cloudinary.com/https-highape-com/image/upload/q_auto:eco,f_auto,h_380/v1631111793/irdkuaqlgabhhxznbs8g.jpg").replace(new RegExp("\\{1\\}","gi"),"Asava Fort").replace(new RegExp("\\{2\\}","gi"),"English_asawa_fort.html")],
   ["Avchitgad_Fort", 73.11820329725889,18.475269108664772,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/3/37/Avchitgad6.jpg").replace(new RegExp("\\{1\\}","gi"),"Avchitgad Fort").replace(new RegExp("\\{2\\}","gi"),"English_avachitgad_fort.html")],
   //["Aurangabad_Fort",],
   ["Avandha_Fort",73.83699765309944,19.747220738548403,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/6/63/Aundha_Fort.jpg").replace(new RegExp("\\{1\\}","gi"),"Avandha Fort").replace(new RegExp("\\{2\\}","gi"),"English_avandha_fort.html") ],
   ["Belapur_Fort",73.028369383776,19.004963227269545,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/96/Belapur_fort_7.jpg").replace(new RegExp("\\{1\\}","gi"),"Belapur Fort").replace(new RegExp("\\{2\\}","gi"),"English_balapur_fort.html") ],
   ["Bhagwantgad_Fort",73.49466503955205,16.185109986498812,content.replace(new RegExp("\\{0\\}","gi"),"https://www.fortsmaharashtra.com/wp-content/uploads/2019/01/Bhagwantgad-FortsMaharashtra-1.jpg").replace(new RegExp("\\{1\\}","gi"),"Bhagwantgad Fort").replace(new RegExp("\\{2\\}","gi"),"English_bhagwantgad_fort.html") ],
   ["Bhairavgad_Fort",73.71420481261737,19.319022479008503,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/0/0c/Bhairavgad%2C_Maharashtra%2C_India.jpg").replace(new RegExp("\\{1\\}","gi"),"Bhairavgad Fort").replace(new RegExp("\\{2\\}","gi"),"English_bhairavgad_fort.html") ],
   ["Bharatgad_Fort",73.4982918718237,16.172932584988583,content.replace(new RegExp("\\{0\\}","gi"),"https://www.gosahin.com/go/p/j/1577877287_bharatgad-fort-1.jpg").replace(new RegExp("\\{1\\}","gi"),"Bharatgad Fort").replace(new RegExp("\\{2\\}","gi"),"English_bharatgad_fort.html") ],
   ["Bhaskargad_Fort",73.43186653775756,19.904635748111183,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/75/Bhaskargad.jpg").replace(new RegExp("\\{1\\}","gi"),"Bhaskargad Fort").replace(new RegExp("\\{2\\}","gi"),"English_bhaskargad_fort.html") ],
   ["Bhorgiri_Fort",73.56861826843223,19.04966151935255,content.replace(new RegExp("\\{0\\}","gi"),"https://www.forttrekkers.com/images/fort/pune/bhorgiri-fort.jpg").replace(new RegExp("\\{1\\}","gi"),"Bhorgiri Fort").replace(new RegExp("\\{2\\}","gi"),"English_bhorgiri_fort.html") ],
   ["Bhudargad_Fort",74.14085328188077,16.252801989964336,content.replace(new RegExp("\\{0\\}","gi"),"https://www.mtdc.co.in/wp-content/uploads/2013/08/bhuyari_marg_bhudargad-1.jpg").replace(new RegExp("\\{1\\}","gi"),"Bhudargad Fort").replace(new RegExp("\\{2\\}","gi"),"English_bhudargad_fort.html") ],
   ["Bombay_Castle_Fort",72.83818059726634,18.93172140515407,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/3/3c/Castella_de_Aguada_7.jpg").replace(new RegExp("\\{1\\}","gi"),"Bombay Castle Fort").replace(new RegExp("\\{2\\}","gi"),"English_bombay_castle_fort.html") ],
   //["Bandra_Fort",72.8184023126127,19.042122447358267,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Chandangad_Fort",74.03506257793794,17.839430969756016,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/4/46/Chandan_Fort5.jpg").replace(new RegExp("\\{1\\}","gi"),"Chandangad Fort").replace(new RegExp("\\{2\\}","gi"),"English_chandgad_fort.html") ],
   ["Chandwad_Fort",74.25932768379867,20.33652208862536,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/d/d1/Chandwad_1.jpg").replace(new RegExp("\\{1\\}","gi"),"Chandwad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Chauler_Fort",74.09959412427776,20.575421208713585,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/en/a/ab/Chauler.jpg").replace(new RegExp("\\{1\\}","gi"),"Chauler Fort").replace(new RegExp("\\{2\\}","gi"),"English_chauler_fort.html") ],
   ["Dategad_Fort",73.86412703956952,17.37972772478543,content.replace(new RegExp("\\{0\\}","gi"),"https://www.mtdc.co.in/wp-content/uploads/2013/08/160_large.jpg").replace(new RegExp("\\{1\\}","gi"),"Dategad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Daulatabad_Fort",75.22141437513802,19.946220359075497,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/3/33/Daulatabad_Fort_a_view.JPG").replace(new RegExp("\\{1\\}","gi"),"Daultabad Fort").replace(new RegExp("\\{2\\}","gi"),"English_daulatabad_fort.html") ],
   ["Devgad_Fort",73.37133375119356,16.3867365492567,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/c/c9/Devgad_fort.JPG").replace(new RegExp("\\{1\\}","gi"),"Devgad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Dongri_Fort",72.79299648378108,19.310248193160135,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/b/bd/Dongri_Fort_2.jpg").replace(new RegExp("\\{1\\}","gi"),"Dongri Fort").replace(new RegExp("\\{2\\}","gi"),"English_dongri_fort.html") ],
   ["Dronagiri_Fort",72.93595787028211,18.867168830223605,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/f/f6/Dronagiri_1.jpeg").replace(new RegExp("\\{1\\}","gi"),"Dronagiri Fort").replace(new RegExp("\\{2\\}","gi"),"English_dronagiri_fort.html") ],
   ["Durgadi_Fort",73.11854819727165,19.245556767299018,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/2/2a/Durgadi_Fort_%2CKalyan%2C_Maharashtra_-_panoramio_%2820%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Durgadi Fort").replace(new RegExp("\\{2\\}","gi"),"English_durgadi_fort.html") ],
   ["Lohagad_Fort",73.47591544144343,18.710367238684263,content.replace(new RegExp("\\{0\\}","gi"),"https://live.staticflickr.com/514/19082173811_a3c05d2eb5_b.jpg").replace(new RegExp("\\{1\\}","gi"),"Lohagad Fort").replace(new RegExp("\\{2\\}","gi"),"English_lohagad_fort.html") ],
   ["Madangad_Fort",73.24307892794025,17.982122287882927,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/7d/Bankot_Fort.jpg").replace(new RegExp("\\{1\\}","gi"),"Mandangad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Madh_Fort",72.79471375308904,19.13239352168415,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/f/f3/Madh_Fort_from_Versova_side.jpg").replace(new RegExp("\\{1\\}","gi"),"Madh fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Mahim_Fort",72.83826179912113,19.042209896735528,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/0/02/Mahim_Fort_7.jpg").replace(new RegExp("\\{1\\}","gi"),"Mahim Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Mahuli Fort",73.24997749542281,19.491225510838728,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/6/68/Mahuli_Fort_From_Pivali_End.JPG").replace(new RegExp("\\{1\\}","gi"),"Mahuli Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Makrandgad",73.6048471972491,17.849720872927605,content.replace(new RegExp("\\{0\\}","gi"),"https://nonprod-media.webdunia.com/public_html/_media/mr/img/article/2023-03/12/full/1678641479-361.jpg").replace(new RegExp("\\{1\\}","gi"),"Makrandgad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Malanggad",73.17439549817846,19.11265011863633,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/a/a4/Malanggad_View_from_Valley.jpg").replace(new RegExp("\\{1\\}","gi"),"Malanggad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Mangalgad",73.58002634641919,18.052623683766317,content.replace(new RegExp("\\{0\\}","gi"),"https://www.mtdc.co.in/wp-content/uploads/2013/09/mangalgad2.jpg").replace(new RegExp("\\{1\\}","gi"),"Mangalgad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Mangi-Tungi Fort",74.09139468419978,20.860655151874486,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/e/e7/Mangi_Tungi_twin_pinnacle.jpg").replace(new RegExp("\\{1\\}","gi"),"Mangi Tungi Fort").replace(new RegExp("\\{2\\}","gi"),"")] ,
   ["Manikgad Raigad",73.19460539137333,18.831607910331357,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/6/65/Manikgad%28Raigad%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Manikgad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Naldurg Fort", 76.11504412064717,18.28398089573451,content.replace(new RegExp("\\{0\\}","gi"),"https://pixahive.com/wp-content/uploads/2020/09/The-Naldurg-Fort-33051-pixahive.jpg").replace(new RegExp("\\{1\\}","gi"),"Naldurg Fort").replace(new RegExp("\\{2\\}","gi"),"")],
   ["Narayangad",74.02680050507298,19.131464937805585,content.replace(new RegExp("\\{0\\}","gi"),"https://marathivishwakosh.org/wp-content/uploads/2021/08/164.-%E0%A4%A8%E0%A4%BE%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A4%A3%E0%A4%97%E0%A4%A1.jpg").replace(new RegExp("\\{1\\}","gi"),"Narayangad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Padmadurg",72.93265873910217,18.323067112228436,content.replace(new RegExp("\\{0\\}","gi"),"https://static.punemirror.com/full/5b563109da817d4ee34e2d82db3833e666662ade.jpg").replace(new RegExp("\\{1\\}","gi"),"Padmadurg Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Pandavgad",73.86346310833657,17.999495113760798,content.replace(new RegExp("\\{0\\}","gi"),"https://www.trawell.in/admin/images/upload/058871828Panchgani_Pandavgad_Fort_Main.jpg").replace(new RegExp("\\{1\\}","gi"),"Pandavgad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Panhala Fort",74.10991113118436,16.810302670435036,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/8/89/Panhala_fort.JPG").replace(new RegExp("\\{1\\}","gi"),"Panhala Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Prabalgad",73.22174656995891,18.98256877246791,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/c/cd/Prabal_machi.jpg").replace(new RegExp("\\{1\\}","gi"),"Prabal Fort").replace(new RegExp("\\{2\\}","gi"),"")] ,
   ["Pratapgad",73.57819300832026,17.935310534222868,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/c/ca/Pratapgad_The_Fort_of_Valour.jpg").replace(new RegExp("\\{1\\}","gi"),"Pratapgad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Purandar fort",73.96987830036934,18.281129116630527,content.replace(new RegExp("\\{0\\}","gi"),"https://live.staticflickr.com/1089/3353207756_e27c8f30eb_b.jpg").replace(new RegExp("\\{1\\}","gi"),"Purandar Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Raigad Fort",73.44644435442045,18.235745365587363,content.replace(new RegExp("\\{0\\}","gi"),"https://live.staticflickr.com/3230/3126466545_0904161b20_b.jpg").replace(new RegExp("\\{1\\}","gi"),"Raigad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   //["Rajgad Fort"],
   ["Ramtek Fort",79.33278531667291,21.399509653434958,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/5/5f/Kalimata%27s_Temple_Ramtek.jpg").replace(new RegExp("\\{1\\}","gi"),"Ramtek Fort").replace(new RegExp("\\{2\\}","gi"),""), ],
   ["Ratangad Fort",73.70227163600877,19.501292190554118,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/2/29/Breath_taking_view_from_ratangadh.jpg").replace(new RegExp("\\{1\\}","gi"),"Ratangad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Ratnagiri Fort",73.27229464375978,17.00377587330863,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/9b/Ratnagiri_%2819%29.JPG").replace(new RegExp("\\{1\\}","gi"),"Ratnadurg Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Sajjangad Fort",73.91544523154289,17.649412106527617,content.replace(new RegExp("\\{0\\}","gi"),"https://live.staticflickr.com/2215/1657991860_f3a28401c1_b.jpg").replace(new RegExp("\\{1\\}","gi"),"Sajjangad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Salher Fort",73.94174732041972,20.729374102608165,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/c/cd/Salher_fort_-_Parshuram_temple_at_the_summit-_as_seen_from_Fort_Salota.jpg").replace(new RegExp("\\{1\\}","gi"),"Salher Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Shaniwar Wada",73.85536036983582,18.520359743348465,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/1/14/Shaniwaarwada_Pune.jpg").replace(new RegExp("\\{1\\}","gi"),"Shaniwarwada").replace(new RegExp("\\{2\\}","gi"),"") ],
   //["Shivgad"],
   ["Shivneri",73.8553421086522,19.193459462376296,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/b/b1/Shivneri_Fort.jpg").replace(new RegExp("\\{1\\}","gi"),"Shivneri Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Shrivardhan Fort",73.40001222610083,18.826813283861227,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/d/d9/Rajmachi_-_Shrivardhan_Fort_%2818617223699%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Shrivardhan Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Siddhagad",73.52240333959799,19.158563883191814,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/a/ab/Siddhagad.jpg").replace(new RegExp("\\{1\\}","gi"),"Siddhagad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Sinhagad Fort",73.75592061260173,18.36652136316095,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/en/5/5a/Kalyan_Darawaja_on_Sinhgad_Fort.jpg").replace(new RegExp("\\{1\\}","gi"),"Sinhagad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Sion Hillock Fort",72.86785062633548,19.049157788423845,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/f/f8/Structure_at_Sion_Fort.jpg").replace(new RegExp("\\{1\\}","gi"),"Sion Hillock Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Trymbakgad",73.51889458193858,19.91981861679529,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Torna Fort",73.62184069540282,18.277099688839748,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/7/77/A_view_of_torna_fort_from_Zunjar_machi.jpg").replace(new RegExp("\\{1\\}","gi"),"Torna Fort").replace(new RegExp("\\{2\\}","gi"),"")],
   ["Underi",72.8421222819182,18.70728775201983,content.replace(new RegExp("\\{0\\}","gi"),"https://www.mtdc.co.in/wp-content/uploads/2013/09/Khanderi-Island-Yacht-Cruise.jpg").replace(new RegExp("\\{1\\}","gi"),"Underi Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Vajragad",73.9885855395836,18.284900342888264,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/92/Vajragad_fort.jpg").replace(new RegExp("\\{1\\}","gi"),"Vajragad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Vardhangad Fort",74.26411501259162,17.725502360874735,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/8/8c/Vardhangad_Fort%2C_Vardhangad_%28Satara%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Vardhangad Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Vasai Fort",72.81561358378144,19.330699970766936,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/1/10/Vasai_Fort_7.jpg").replace(new RegExp("\\{1\\}","gi"),"Vasai fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Vasantgad",74.10804091416264,17.318652959759582,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Vijaydurg Fort",73.33294943955747,16.56134022867134,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Vikatgad",73.27693038007051,19.029269837796114,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Vishalgad",73.74335841902926,16.90673322226081,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Worli Fort",72.81671416657879,19.0238950586259,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Yashwantgad Fort",73.6647705125629,15.752746223840102,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["padmdurang Fort",72.93261586656746,18.322262691540324,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")] ,
   ["Jaigad fort",73.22159053956834,17.300677370038336,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Devgad fort",73.3716959475185,16.387350936635457,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Chakan fort",73.86223813959124,18.75676066841278,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/5/54/Chakan_Fort-_Sangram_Durg_%287637611332%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Chakan Fort").replace(new RegExp("\\{2\\}","gi"),"") ],
   ["Old Fort",72.98020436794195,19.21473992231955,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],   
   ["Mullher_Fort",74.06407320100367,20.751328675600416,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/b/bb/Mulher_view1.jpg").replace(new RegExp("\\{1\\}","gi"),"Mulher Fort").replace(new RegExp("\\{2\\}","gi"),"") ]];
for(var i=0;i<forts.length;i++)
{
    var lon=forts[i][1];
    var lat=forts[i][2];
    var popupText=forts[i][3];
    var markerLocation=new L.LatLng(this.lat,this.lon)
    var marker=new L.Marker(markerLocation,{icon:MahafortsIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 
var Mahaunesco=[
    ["Ajanta Caves",75.70326282613036,20.551990884166152,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/f/f0/Ajanta_Caves%2C_Aurangabad_tt-113.jpg").replace(new RegExp("\\{1\\}","gi"),"Ajanta Caves").replace(new RegExp("\\{2\\}","gi"),"English_unesco_ajantacaves.html")],
    ["Ellora Caves",75.17807257839618,20.026089107437468,content.replace(new RegExp("\\{0\\}","gi"),"https://live.staticflickr.com/6218/6360177079_064ca981e3_b.jpg").replace(new RegExp("\\{1\\}","gi"),"Ellora Caves").replace(new RegExp("\\{2\\}","gi"),"English_unesco_elloracaves.html")],
    ["Elephanta Caves", 72.93111055731315,18.96368047125288,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/4/47/Cave_1_Elephanta_Caves_Elephanta_Island_India_-_panoramio_%284%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Elephanta Caves").replace(new RegExp("\\{2\\}","gi"),"")],
    ["CSMT",72.83559770097239,18.939976510793038,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/c/c5/Chhatrapati_Shivaji_Terminus_%28Victoria_Terminus%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Chhatrapati Shivaji Mahraj Terminus").replace(new RegExp("\\{2\\}","gi"),"")],
    //["The Victorian and Art Deco",72.82867399468384,18.929786233647732,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],
    ["kailasa Temple",75.1791964224152,20.02394855764925,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/en/f/fc/Kailash_temple_%28Ellora_cave_no_15%29_at_Verul.png").replace(new RegExp("\\{1\\}","gi"),"Kailasa Temple (Ellora Caves)").replace(new RegExp("\\{2\\}","gi"),"")]
]
for(var j=0;j<Mahaunesco.length;j++)
{
    var lonu=Mahaunesco[j][1];
    var latu=Mahaunesco[j][2];
    var popupText=Mahaunesco[j][3];
    var markerLocation=new L.LatLng(this.latu,this.lonu)
    var marker=new L.Marker(markerLocation,{icon:MahaUNESCOIcon})
    map.addLayer(this.marker)
    marker.bindPopup(popupText)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 
var MahaSanctuaries=[
    ["amba_barwa",76.6468247334531,21.22028965493551],
    //["andhari"]
    ["aner_Dam", 75.1586396264455,21.319338846889234],
    ["bhamragarh",80.58889863018685,19.41537831605076],
    ["bhimashankar",73.55650460903732,19.073082898843527 ],
    ["chaprala",79.82594491142227,19.573401822452873],
    ["deulgaon",74.97133981087775,18.604456519132427, ],
    ["dhyanganga",76.3775535284711,20.56852258023962, ],
    ["maldhok",75.07966505063398,18.386252042414647, ],
    ["gautala", 75.26216682411585,20.462051535929334,],
    ["bustard",75.868738866677,17.827022457094298, ],
    //["isapur",77.44408599913102,19.72861375860245, ],
    ["jaikwadi",75.3700750974099,19.48601295433349, ],
    ["karnala",73.12190776670474,18.89120029720484, ],
    //["Karanja"],
    ["katepurna",77.16431455140398,20.465139149637135, ],
    ["koka",79.7909110109509,21.203369033577733, ],
    ["koyna",73.74200523598643,17.769398625127284, ],
    ["Lonar", 76.508376974312,19.97701890754344,],
    ["mansingdeo", 79.31674057841678,21.4668157410678,],
    ["mayureshwar", 74.36805074029695,18.352806486504914,],
    ["melghatt", 77.148505566776,21.406161445076293,],
    ["nagzira",80.02773496491885,21.25433736188882, ],
    ["naigoanpeacock",75.589551724377,18.891950234925943, ],
    ["narnala",77.00951132880147,21.25922269211234, ] ,
    ["nawegaon",80.08778455596354,20.922545084509025, ],
    ["new_bor",78.66580008025514,20.979332168403715, ],
    ["painganga",78.16730446381331,19.572289676776908, ],
    ["phansadt",72.93794813785578,18.405133783416513, ],
    ["radhanagri",73.98261932246186,16.410803553555457, ],
    ["sagareshwar",74.37816799364346,17.152557106826244, ],
    ["sudhagad",73.32150584706156,18.537583336287657, ],
    ["tamhini",73.45942448469741,18.4771233085311, ],
    //["tansadam",73.26239065376718,19.55917407223052, ]
    ["thane_creek_flamingo",72.98176788205615,19.14797798736559, ],
    ["tipeshwar", 78.44172083470302,19.917548670755924,],
    ["Mangalgadfort", 73.57976889551877,18.05164459481656,],
    ["tungareshwar",72.90159063973572,19.416612454933006, ],
    ["umred_kharngla",79.32230618231787,20.842018486294158, ],
    ["Melghat Tiger Reserve",77.14850556677627,21.406251343564488, ],
    ["Narayangad",74.033643924383,19.11377876571929, ],
    ["Yawal",75.76040579561464,21.47941992440836, ],
    ["yedsi_ghat", 75.947579712723,18.309689238762584,],
]
for(var k=0;k<MahaSanctuaries.length;k++)
{
    var lonsan=MahaSanctuaries[k][1];
    var latsan=MahaSanctuaries[k][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationsan=new L.LatLng(this.latsan,this.lonsan)
    var markersan=new L.Marker(markerLocationsan,{icon:MahaSancIcon})
    map.addLayer(this.markersan)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

} 

var mahhillstations=[
    ["Lonavala ", 73.41086339401782,18.75622352624785,],
    ["Matheran", 73.27036736670726,18.988798302217916,],
    ["Igatpuri", 73.56073195272864,19.69588354353775,],
    ["Mahabaleshwar", 73.64775565318811,17.930973468406226,],
    ["Amboli", 74.00337463576861,15.965010452310523,],
]
for(var a=0;a<mahhillstations.length;a++)
{
    var lonhill=mahhillstations[a][1];
    var lathill=mahhillstations[a][2];
    // var popupTextsan=MahaSanctuaries[j][3];
    var markerLocationshill=new L.LatLng(this.lathill,this.lonhill)
    var markerhill=new L.Marker(markerLocationshill,{icon:MahaHillStationIcon})
    map.addLayer(this.markerhill)
    // markersan.bindPopup(popupTextsan)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})
}
var mahabeaches=[
    ["Ganapatipule",73.26509632545371,17.147928833493832,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/5/58/Ganapatipule.JPG").replace(new RegExp("\\{1\\}","gi"),"Ganpatipule Beach").replace(new RegExp("\\{2\\}","gi"),"English_sea_ganapatipule.html") ],
    ["Manori & Gorai", 72.78022504243623,19.23404679112647,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/1/19/Gorai-creek.jpg").replace(new RegExp("\\{1\\}","gi"),"Manori and Gorai").replace(new RegExp("\\{2\\}","gi"),"English_sea_manorigorai.html")],
    ["Juhu Chowpatty",72.82635176032018,19.09774372674929,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/8/8b/Morning_at_Juhu_Beach.jpg").replace(new RegExp("\\{1\\}","gi"),"Juhu Beach").replace(new RegExp("\\{2\\}","gi"),"English_sea_juhu.html") ],
    ["Alibag Murud Janjira ",72.96443929470058,18.299946171804184,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/en/f/fc/Kailash_temple_%28Ellora_cave_no_15%29_at_Verul.png").replace(new RegExp("\\{1\\}","gi"),"Kailasa Temple (Ellora Caves)").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Shriwardhan ",73.01054451128678,18.043132695940177,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/e/ef/Kondivali_beach.jpg").replace(new RegExp("\\{1\\}","gi"),"Shriwardhan Beach").replace(new RegExp("\\{2\\}","gi"),"English_sea_shriwardhan.html") ],
    ["Harihareshwar",73.01686132803695,18.003681963891268,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/4/47/Harihareshwar_beach.jpg").replace(new RegExp("\\{1\\}","gi"),"Harihareshwar").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Vijaydurg",73.33298332745068,16.55781361139063,content.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/a/a2/View_of_beach_from_Queen%27s_palace_on_Vijaydurg_%285363585051%29.jpg").replace(new RegExp("\\{1\\}","gi"),"Vijaydurg Beach").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Vengurla ",73.63167972122504,15.84209947677615,content.replace(new RegExp("\\{0\\}","gi"),"https://pixahive.com/wp-content/uploads/2020/12/Vengurla-beach--sea-tree-256949-pixahive.jpg").replace(new RegExp("\\{1\\}","gi"),"Vengurla Beach").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["Malvan",73.46844605043096,16.050313965986273,content.replace(new RegExp("\\{0\\}","gi"),"https://pixahive.com/wp-content/uploads/2020/12/Dandi-beach-in-Gujarat-256903-pixahive.jpg").replace(new RegExp("\\{1\\}","gi"),"Malvan Beach").replace(new RegExp("\\{2\\}","gi"),"") ],
    ["",]
] 
for(var a=0;a<mahabeaches.length;a++)
{
    var lonmbea=mahabeaches[a][1];
    var latmbea=mahabeaches[a][2];
    var popupTextbea=mahabeaches[a][3];
    var markerLocationmahabea=new L.LatLng(this.latmbea,this.lonmbea)
    var markermbea=new L.Marker(markerLocationmahabea,{icon:MahabeachIcon})
    map.addLayer(this.markermbea)
    markermbea.bindPopup(popupTextbea)
    //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})
}

