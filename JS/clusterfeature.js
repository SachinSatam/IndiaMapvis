var nashikmarker1_Ahivant_Fort=L.marker([20.414662545284205,73.8501697917481],{icon:MahafortsIcon})
var nashikmarker1_Achala_Fort=L.marker([20.43204477894843,73.81426335311133],{icon:MahafortsIcon})
var nashikmarker1_Alang_Fort=L.marker([19.58296556843817,73.6610477107689],{icon:MahafortsIcon})
var nashikmarker1_Anjaneri_Fort=L.marker([19.930089602633196,73.57712926844707],{icon:MahafortsIcon})
var nashikmarker1_Avandha_Fort=L.marker([19.747220738548403,73.83699765309944],{icon:MahafortsIcon})
var nashikmarker1_Bhaskargad_Fort=L.marker([19.904635748111183,73.43186653775756],{icon:MahafortsIcon})
var nashikmarker1_Chandwad_Fort=L.marker([20.33652208862536,74.25932768379867],{icon:MahafortsIcon})
var nashikmarker_Chauler_Fort=L.marker([20.575421208713585,74.09959412427776],{icon:MahafortsIcon})
const nashik_dist=[nashikmarker1_Ahivant_Fort,nashikmarker1_Achala_Fort,nashikmarker1_Alang_Fort,nashikmarker1_Anjaneri_Fort,nashikmarker1_Avandha_Fort,nashikmarker1_Bhaskargad_Fort,nashikmarker1_Chandwad_Fort,nashikmarker_Chauler_Fort]



// const Ahmadnagar=[
//     ["Ahmadnagar_Fort", 74.75554711209261,19.096429790113262,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")]
// ]
// for(var j=0;j<Ahmadnagar.length;i++)
// {
//     var lon=Ahmadnagar[i][1];
//     var lat=Ahmadnagar[i][2];
//     var popupText=Ahmadnagar[i][3];
//     var markerLocation=new L.LatLng(this.lat,this.lon)
//     var marker=new L.Marker(markerLocation,{icon:MahafortsIcon})
//     map.addLayer(this.marker)
//     marker.bindPopup(popupText)
//     //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

// }


// const Satara=[
//     ["Ajinkyatara_Fort",73.99042918190182,17.672547638232203,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],
//     ["Bhairavgad_Fort",73.71420481261737,19.319022479008503,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//     ["Dategad_Fort",73.86412703956952,17.37972772478543,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//     ["Makrandgad",73.6048471972491,17.849720872927605,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],

// ]
// for(var i=0;i<Satara.length;i++)
// {
//     var lon=Satara[i][1];
//     var lat=Satara[i][2];
//     var popupText=Satara[i][3];
//     var markerLocation=new L.LatLng(this.lat,this.lon)
//     var marker=new L.Marker(markerLocation,{icon:MahafortsIcon})
//     map.addLayer(this.marker)
//     marker.bindPopup(popupText)
//     //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

// }


// const akola=[
//     ["Akola_Fort",76.99020158936409,20.70638195910663,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],

// ]
// const solapur=[
//    ["Akluj_Fort",75.02308002979179,17.894321645082602,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],

// ]

// const pune=[
//     ["Anjanvel_Fort", 73.15222922422798,17.57230013656873,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],
//     ["Bhorgiri_Fort",73.56861826843223,19.04966151935255,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
// ]
// const Aurangabad=[
//     ["Antur_Fort",75.23534059543901,20.428721959668337,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//     ["Daulatabad_Fort",75.22141437513802,19.946220359075497,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
// ]

// const Thane=[
//     ["Arnala_Fort",72.73198079645442,19.46673543529065,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//     ["Asheri_Fort",72.92189362797048,19.821738723066314,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//     ["Asava_Fort", 72.81451448193584,19.760745810028958,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],
//     ["Belapur_Fort",73.028369383776,19.004963227269545,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//     ["Bhairavgad_Fort",73.71420481261737,19.319022479008503,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],

// ]
// for(var k=0;k<Thane.length;i++)
// {
//     var lon=Thane[i][1];
//     var lat=Thane[i][2];
//     var popupText=Thane[i][3];
//     var markerLocation=new L.LatLng(this.lat,this.lon)
//     var marker=new L.Marker(markerLocation,{icon:MahafortsIcon})
//     map.addLayer(this.marker)
//     marker.bindPopup(popupText)
//     //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

// }

// const Raigad1=[
//     ["Avchitgad_Fort", 73.11820329725889,18.475269108664772,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"")],
//     ["Dronagiri_Fort",72.93595787028211,18.867168830223605,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],

// ]
// const Sindhudurg1=[
//     ["Bhagwantgad_Fort",73.49466503955205,16.185109986498812,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//     ["Bharatgad_Fort",73.4982918718237,16.172932584988583,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//     ["Devgad_Fort",73.37133375119356,16.3867365492567,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//     ["Sindhudurg Fort",73.46097393955006,16.04358219735689,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
// ]
// for(var i=0;i<forts.length;i++)
// {
//     var lon=Sindhudurg1[i][1];
//     var lat=Sindhudurg1[i][2];
//     var popupText=Sindhudurg1[i][3];
//     var markerLocation=new L.LatLng(this.lat,this.lon)
//     var marker=new L.Marker(markerLocation,{icon:MahafortsIcon})
//     map.addLayer(this.marker)
//     marker.bindPopup(popupText)
//     //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

// }
// const kolhapur=[
//     ["Bhudargad_Fort",74.14085328188077,16.252801989964336,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ]
//     ["Chandangad_Fort",74.03506257793794,17.839430969756016,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
    
// ]
// const mumbai=[
//    ["Bombay_Castle_Fort",72.83818059726634,18.93172140515407,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//    ["Bandra_Fort",72.8184023126127,19.042122447358267,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//    ["Dongri_Fort",72.79299648378108,19.310248193160135,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//    ["Madh_Fort",72.79471375308904,19.13239352168415,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
//    ["Mahim_Fort",72.83826179912113,19.042209896735528,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],
// ]
// for(var i=0;i<mumbai.length;i++)
// {
//     var lon=mumbai[i][1];
//     var lat=mumbai[i][2];
//     var popupText=mumbai[i][3];
//     var markerLocation=new L.LatLng(this.lat,this.lon)
//     var marker=new L.Marker(markerLocation,{icon:MahafortsIcon})
//     map.addLayer(this.marker)
//     marker.bindPopup(popupText)
//     //.on('mouseover',function(e){this.openPopup()})//.on('mouseout',function(e){this.closePopup()})

// }
// const Ratnagiri1=[
//     ["Madangad_Fort",73.24307892794025,17.982122287882927,content.replace(new RegExp("\\{0\\}","gi"),"").replace(new RegExp("\\{1\\}","gi"),"").replace(new RegExp("\\{2\\}","gi"),"") ],

// ]
const myclustergroup1=L.markerClusterGroup({
    iconCreateFunction: function(cluster){
        return L.divIcon({
            html:'<div class="cluster-div">'+"Nashik"+'</div'
        })
    }
})
// var marker1=L.marker([51.5,-0.08])
// var marker2=L.marker([52.0,-0.08])
// myclustergroup.addLayer(marker1)
// myclustergroup.addLayer(marker2)
// map.addLayer(myclustergroup)
myclustergroup1.addLayer(nashikmarker1_Achala_Fort)
myclustergroup1.addLayer(nashikmarker1_Ahivant_Fort)
myclustergroup1.addLayer(nashikmarker1_Alang_Fort)
myclustergroup1.addLayer(nashikmarker1_Anjaneri_Fort)
myclustergroup1.addLayer(nashikmarker1_Avandha_Fort)
myclustergroup1.addLayer(nashikmarker1_Bhaskargad_Fort)
myclustergroup1.addLayer(nashikmarker1_Chandwad_Fort)
myclustergroup1.addLayer(nashikmarker_Chauler_Fort)
map.addLayer(myclustergroup1)