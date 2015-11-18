var React = require('react');

module.exports = React.createClass({
  handleClick: function() {
    alert('it has been clicked!!');
  },
  render: function() {
    return <button onClick={this.props.whenClicked} className={"btn " + this.props.className} type="button">
      {this.props.title}
      <span className={this.props.subTitleClassName}>{this.props.subTitle}</span>
    </button>
  }
});