function getNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
class JSXDemo extends React.Component {
  render() {
    const num = getNumber();
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>CONGRATS YOU WIN!!!!</h2>
          <img src="https://i.giphy.com/medianXx0jZrbnbRxS/giphy.web" />
        </div>
      );
    } else {
      msg = <p>Sorry but you're a loser!!!</p>;
    }
    return (
      <div>
        <h1>Your number is {num}</h1>
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));