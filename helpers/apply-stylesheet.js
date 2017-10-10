
var myReader = new FileReader;
myReader.addEventListener('loadend', function(text){
    var style = document.createElement('style');
    style.innerText = text.srcElement.result;
    document.querySelector('body').appendChild(style);
});

fetch('http://localhost:3000/en-us/devsandbox/_themes/css/apibrowserpage.css', { "type" : "plain/text" }).then(function (res) {
    return res.blob();
}).then(function (blob) {
    var text = myReader.readAsText(blob);
    return text;
}).then(function(text){
}).catch(function (err) {
    console.log(err);
});

function applyStylesheet(){
    var path = prompt('enter your stylesheet location (url or file path)');
    fetch(`${path}`, { "type": "plain/text" }).then(function (res) {
        return res.blob();
    }).then(function (blob) {
        var text = myReader.readAsText(blob);
        return text;
    }).then(function (text) {
    }).catch(function (err) {
        console.log(err);
    });
}

applyStylesheet();

