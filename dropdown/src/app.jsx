var React = require('React');
var DropDown = require('./dropdown');

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
}

var element = React.createElement(DropDown, options);
React.render(element, document.querySelector('.container'));