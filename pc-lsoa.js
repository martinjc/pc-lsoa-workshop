
lookup = {}

fetch('https://github.com/martinjc/pc-lsoa-workshop/blob/main/pc_geo_lookup.csv?raw=true')
.then((data) => {
    let lines = data.split('\n');
    lines.forEach((l, i) => {
        if(i > 0) {
            let columns = l.split(',');
            lookup[columns[0]] = {'code': columns[1], 'name': columns[2]};
        }
    });
    return lookup
}).then(lookup => {
    let output = document.getElementById('output').innerHTML(lookup);
});
 


let inputBox = document.getElementById('pc_input')
inputBox.addEventListener('change', () => {
    document.getElementsByClassName('hidden')[0].classList.toggle('hidden');

})




