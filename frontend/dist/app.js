(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ShapeItem = React.createClass({displayName: "ShapeItem",
  getInitialState: function() {
    return {
      key: 0
    };
  },
  render: function() {
    return (
      React.createElement("img", {src: "../img/rolling.jpg", className: "shape-item"}
      )
    );
  }
});

var ShapeRow = React.createClass({displayName: "ShapeRow",
  render: function() {
    return (
      React.createElement("div", null, this.props.children)
    );
  }
});

var ShapeSection = React.createClass({displayName: "ShapeSection",
  render: function() {
    return (
      React.createElement("section", {className: "animated rubberBand"}, this.props.children)
    );
  }
});

var ShapeBox = React.createClass({displayName: "ShapeBox",
  shapeSquare: function () {
    console.log(this.state.nodeShape);
    var nodeShape = [];
    var nodeItem = [];
    for(var j=0; j<Math.sqrt(this.state.number_of_items); j++){
      nodeItem.push(React.createElement(ShapeItem, {key: 'item'+j}));
      console.log(this.state.length);
    }
    for(var i = 0; i<Math.sqrt(this.state.number_of_items); i++){
      nodeShape.push(React.createElement(ShapeRow, {key: 'shape'+i}, nodeItem));
    }
    this.setState({title: 'Square', figure: 'square', nodeShape: React.createElement(ShapeSection, {key: "square"}, nodeShape)});
    console.log(this.state.number_of_items);
  },
  shapeDiamond: function () {
    var nodeShape = [];
    var nodeItem = [];
    this.setState({title: 'Diamond', figure:'diamond'});
    var sqrt = 1;
    while(sqrt<Math.sqrt(this.state.number_of_items)){
      for(var j=0; j<sqrt; j++){
        nodeItem.push(React.createElement(ShapeItem, {key: 'item'+j}));
        console.log(this.state.length);
      }
      sqrt++;
      nodeShape.push(React.createElement("div", {key: 'shapeA'+sqrt}, nodeItem));
      nodeItem = [];
    }
    while(sqrt>=1){
      for(var j=0; j<sqrt; j++){
        nodeItem.push(React.createElement(ShapeItem, {key: 'item'+j}));
        console.log(this.state.length);
      }
      sqrt--;
      nodeShape.push(React.createElement(ShapeRow, {key: 'shapeD'+sqrt}, nodeItem));
      nodeItem = [];
    }

    this.setState({title: 'Diamond', figure: 'diamond', nodeShape: React.createElement(ShapeSection, {key: "diamond"}, nodeShape)});
  },
  getInitialState: function() {
    return {
      number_of_items: 25,
      title: 'Current shapes',
      figure: '',
      nodeShape: [],
      length: 0
    };
  },
  render: function() {
    return (
      React.createElement("div", {className: "shapeBox"}, 
        React.createElement("section", {className: "shapeHeader animated fadeInDown"}, 
          React.createElement("h1", null, "Geometric shapes"), 
          React.createElement("h3", null, this.state.title)
        ), 
        React.createElement("section", {className: "shapeBody"}, 
          React.createElement("button", {className: "shapeButton animated fadeInLeftBig", onClick: this.shapeSquare}, "Square"), 
          React.createElement("button", {className: "shapeButton animated fadeInRightBig", id: "square", onClick: this.shapeDiamond}, "Diamond")
        ), 
          this.state.nodeShape
      )
    );
  }
});

ReactDOM.render(
  React.createElement(ShapeBox, null),
  document.getElementById('content')
);

},{}]},{},[1]);
