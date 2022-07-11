let srcinput = document.querySelector('#srcinput');
let srcbtn = document.querySelector('#srcbtn');

srcbtn.addEventListener('click',function(){
    let srcdata = srcinput.value;
    fetch(`https://api.lyrics.ovh/suggest/${srcdata}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    
    });
    console.log(srcdata);
});

