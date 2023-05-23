const AndamanbeachIcon=L.divIcon({
    className: 'custom-div-icon-AndamanbeachIcon',
    html: "<div style='background-color:#0000cc;' class='marker-pin'></div><i class='material-icons'>beach_access</i>",
    iconSize: [30, 42],
    iconAnchor: [15, 42]
});

var beachcontent=`<html>
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

var beaches=[
    ["Corbyn's Cove ",92.74815679538321,11.645274832518957,beachcontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/98/Nagaon_beach.jpg").replace(new RegExp("\\{1\\}","gi"),"Corbyn's Cove") ],
    ["Radhanagar", 92.9527244508575,11.989786143715193,beachcontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/98/Nagaon_beach.jpg").replace(new RegExp("\\{1\\}","gi"),"Radhanagar")],
    ["kala pathar",93.00353621878733,12.0048982071218,beachcontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/98/Nagaon_beach.jpg").replace(new RegExp("\\{1\\}","gi"),"kala pathar") ],
    ["laxmanpur", 93.01531127839134,11.849007243400171,beachcontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/98/Nagaon_beach.jpg").replace(new RegExp("\\{1\\}","gi"),"laxmanpur")],
    ["sitapur", 93.0650930780523,11.827753957311804,beachcontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/98/Nagaon_beach.jpg").replace(new RegExp("\\{1\\}","gi"),"sitapur")],
    ["chota_balu",92.6891499809406,11.511812631628858,beachcontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/98/Nagaon_beach.jpg").replace(new RegExp("\\{1\\}","gi"),"chota balu") ],
    ["Wandoor", 92.60766490664136,11.596660297733965,beachcontent.replace(new RegExp("\\{0\\}","gi"),"https://upload.wikimedia.org/wikipedia/commons/9/98/Nagaon_beach.jpg").replace(new RegExp("\\{1\\}","gi"),"Wandoor")]
]
for(var k=0;k<beaches.length;k++)
{
    var lonbea=beaches[k][1];
    var latbea=beaches[k][2];
    var popupcontent=beaches[k][3];
    var markerLocationbea=new L.LatLng(this.latbea,this.lonbea)
    var markerbea=new L.Marker(markerLocationbea,{icon:AndamanbeachIcon})
    map.addLayer(this.markerbea)
    markerbea.bindPopup(popupcontent)
    // .on('mouseover',function(e){this.openPopup()}).on('mouseout',function(e){this.closePopup()})
} 
