class Machine extends React.Component {
  render() {
    let { s1, s2, s3 } = this.props;
    let x = (s1 === s2) && (s2 === s3);
    console.log(x)
    console.log(this.props);
    
    return <p>{x === true ? "Victory!!!" : "Loose money :("}</p>;
  }
}
