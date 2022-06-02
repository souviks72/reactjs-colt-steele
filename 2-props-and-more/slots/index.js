class App extends React.Component {
  render() {
    let arr = ["x", "y", "z"];
    let s1 = arr[Math.floor(Math.random() * 3)];
    let s2 = arr[Math.floor(Math.random() * 3)];
    let s3 = arr[Math.floor(Math.random() * 3)];
    return (
      <div>
        <Machine s1={s1} s2={s2} s3={s3} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
