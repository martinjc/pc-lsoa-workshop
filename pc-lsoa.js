let inputBox = document.getElementById('pc_input')
inputBox.addEventListener('changed', () => {
    document.getElementsByClassName('hidden')[0].classList.toggle('hidden');
})

fetch('https://github.com/martinjc/pc-lsoa-workshop/blob/main/pc_geo_lookup.csv?raw=true')
.then((data) => {
    console.log(data);
});


