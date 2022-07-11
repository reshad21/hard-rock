// let srcinput = document.querySelector('#srcinput');
// let srcbtn = document.querySelector('#srcbtn');

// srcbtn.addEventListener('click',function(){
//     let srcdata = srcinput.value;
//     console.log(srcdata);
// });

fetch(`https://api.lyrics.ovh/v1/Adele/Hello`)
.then(res=>res.json())
.then(data=>{
    console.log(data);

});