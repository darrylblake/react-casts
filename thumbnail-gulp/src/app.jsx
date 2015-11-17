var React = require('React');
var ThumbnailList = require('./thumbnail-list')

var options = {
  thumbnailData: [{
    title: 'See tutorials',
    number: 32,
    imageUrl: 'http://formatjs.io/img/react.svg',
    header: 'Learn React',
    description: 'React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.'
  }, {
    title: 'See tutorials',
    number: 12,
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
    header: 'Learn Gulp',
    description: 'Gulp will speed up your workflow. Using the power of node streams, gulp gives you fast builds that don\'t write intermediary files to disk.'
  }]
}

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));