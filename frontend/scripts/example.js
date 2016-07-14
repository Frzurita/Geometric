var ShapeItem = React.createClass({
  getInitialState: function() {
    return {
      key: 0
    };
  },
  render: function() {
    return (
      <img src="../img/rolling.jpg" className="shape-item">
      </img>
    );
  }
});

var ShapeRow = React.createClass({
  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

var ShapeSection = React.createClass({
  render: function() {
    return (
      <section className="animated rubberBand">{this.props.children}</section>
    );
  }
});

var ShapeBox = React.createClass({
  shapeSquare: function () {
    console.log(this.state.nodeShape);
    var nodeShape = [];
    var nodeItem = [];
    for(var j=0; j<Math.sqrt(this.state.number_of_items); j++){
      nodeItem.push(<ShapeItem key={'item'+j}/>);
      console.log(this.state.length);
    }
    for(var i = 0; i<Math.sqrt(this.state.number_of_items); i++){
      nodeShape.push(<ShapeRow key={'shape'+i}>{nodeItem}</ShapeRow>);
    }
    this.setState({title: 'Square', figure: 'square', nodeShape: <ShapeSection key="square">{nodeShape}</ShapeSection>});
    console.log(this.state.number_of_items);
  },
  shapeDiamond: function () {
    var nodeShape = [];
    var nodeItem = [];
    this.setState({title: 'Diamond', figure:'diamond'});
    var sqrt = 1;
    while(sqrt<=Math.sqrt(this.state.number_of_items)){
      for(var j=0; j<sqrt; j++){
        nodeItem.push(<ShapeItem key={'item'+j}/>);
        console.log(this.state.length);
      }
      sqrt++;
      nodeShape.push(<div key={'shapeA'+sqrt}>{nodeItem}</div>);
      nodeItem = [];
    }
    while(sqrt>=1){
      for(var j=0; j<sqrt; j++){
        nodeItem.push(<ShapeItem key={'item'+j}/>);
        console.log(this.state.length);
      }
      sqrt--;
      nodeShape.push(<ShapeRow key={'shapeD'+sqrt}>{nodeItem}</ShapeRow>);
      nodeItem = [];
    }

    this.setState({title: 'Diamond', figure: 'diamond', nodeShape: <ShapeSection key="diamond">{nodeShape}</ShapeSection>});
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
      <div className="shapeBox">
        <section className="shapeHeader animated fadeInDown">
          <h1>Geometric shapes</h1>
          <h3>{this.state.title}</h3>
        </section>
        <section className="shapeBody">
          <button className="shapeButton animated fadeInLeftBig" onClick={this.shapeSquare}>Square</button>
          <button className="shapeButton animated fadeInRightBig" id="square" onClick={this.shapeDiamond}>Diamond</button>
        </section>
          {this.state.nodeShape}
      </div>
    );
  }
});

ReactDOM.render(
  <ShapeBox/>,
  document.getElementById('content')
);
