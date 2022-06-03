class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const x = (s1 === s2) && (s2 === s3);
    console.log(x)
    console.log(this.props);
    
    return <p>{x? "Victory!!!" : "Loose money :("}</p>;
  }
}
