const express = require('express');
const app = express();

const options = {
    dotfiles: "allow",
    root: __dirname + "/public"
};

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('index.html', options);
});

app.get('/localStorage', function(req, res){
    res.sendFile('localStorage/localStorage.html', options);
});

app.get('/revealingModuleAngular', function(req, res){
    res.sendFile('revealingModuleAngular/revealingModuleAngular.html', options);
});

app.get('/objectHasValue', function(req, res){
    res.sendFile('objectHasValue/objectHasValue.html', options);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));