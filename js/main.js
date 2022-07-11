let srcinput = document.querySelector('#srcinput');
let srcbtn = document.querySelector('#srcbtn');

srcbtn.addEventListener('click',function(){
    let srcdata = srcinput.value;
    fetch(`https://api.lyrics.ovh/suggest/${srcdata}`)
    .then(res=>res.json())
    .then(srcitem=>{
        console.log(srcitem);
        console.log(srcitem.data);
        let workingdata = srcitem.data;
        songinfo.innerHTML="";
        for (let i = 0; i < 10; i++) {
            const item = workingdata[i];
            console.log(item.duration);
            const songinfo = document.querySelector('#songinfo');
            let songtitle = document.createElement('div');
            songtitle.innerHTML = `<p class="api-title">${item.title} <button class="apibtn">Get Lyrics<button></p>`;
            songinfo.appendChild(songtitle);
        }
    });



    
    srcinput.value="";
    console.log(srcdata);
})

