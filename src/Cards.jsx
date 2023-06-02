import "./App.css";
function Cards(props) {
  return (
    <section className="cards">
      <div className="backCard">
        <p className="cvv">{props.cvv === "" ? "000" : props.cvv}</p>
      </div>
      <div className="frontCard">
        <div className="logos">
          <img
            src="./assets/card-logo.svg"
            alt="card logo"
            className="cardLogo"
          />
        </div>
        <p className="cardNumber">
          {props.number === "" ? "0000 0000 0000 0000" : props.number}
        </p>
        <div className="nameDate">
          <p className="name">
            {props.name === "" ? "JANE APPLESEED" : props.name}
          </p>

          <p className="date">
            {props.month === "" && props.year === ""
              ? "00/00"
              : props.month + "/" + props.year}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
