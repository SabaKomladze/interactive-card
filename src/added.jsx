import "./Added.css";
function Added() {
  return (
    <div className="added">
      <img
        src="./assets/icon-complete.svg"
        alt="check logo"
        className="check"
      />
      <h1 className="thank">THANK YOU!</h1>
      <p className="details">We’ve added your card details</p>
      <button type="button" className="btn">
        Continue
      </button>
    </div>
  );
}
export default Added;
