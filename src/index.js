require('./fonts/fonts.css');
require('./styles/reset.css');
require('./styles/normalize.css');
require('./styles/app.css');

// Ceates an HTML element
function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Welcome to webpack!'
    ].join('\n\n');

    return element;
}

// Gets the specific element with an ID
var stage = document.getElementById('stage');
stage.prepend(component());
