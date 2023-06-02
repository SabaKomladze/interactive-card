import "./App.css";

function Form(props) {
  let containLetters = /[a-zA-Z]/.test(props.number);
  let containNumbers = /[0-9]/.test(props.name);
  function changeToNumbers(e) {
    props.setNumber(() => {
      let string = e.target.value;

      let result = string.split(" ").join("");
      if (result.length > 0) {
        result = result.match(new RegExp(".{1,4}", "g")).join(" ");
      }
      // for (let i = 0; i < string.length; i++) {
      //   if (i > 0 && i % 4 === 0) {
      //     result += " ";
      //   }
      //   result += string[i];
      // }
      // e.target.value = result;
      return result;
    });
  }

  function check() {
    if (props.name.length < 1) {
      props.setNameCheck(true);
    } else {
      props.setNameCheck(false);
    }
    if (props.number.length < 19) {
      props.setNumberCheck(true);
    } else {
      props.setNumberCheck(false);
    }
    if (props.month.length == 0) {
      props.setMonthCheck(true);
    } else {
      props.setMonthCheck(false);
    }
    if (props.year.length == 0) {
      props.setYearCheck(true);
    } else {
      props.setYearCheck(false);
    }
    if (props.cvv.length < 3) {
      props.setCvvCheck(true);
    } else {
      props.setCvvCheck(false);
    }
  }
  return (
    <section className="form">
      <form>
        <label className="cardholder text">Cardholder Name</label>
        <input
          className={
            containNumbers == true || props.nameCheck ? "error" : "input"
          }
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={(event) => {
            props.setName(event.target.value);
          }}
        />
        <label className="cardnumber text">Card Number</label>
        <input
          className={
            containLetters == true || props.numberCheck ? "error" : "input"
          }
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={changeToNumbers}
          maxLength="19"
          type="text"
          value={props.number}
        />
        <p
          className={
            containLetters == true || props.numberCheck ? "numberError" : "null"
          }
        >
          Wrong format, numbers only
        </p>
        <div className="dateCvv">
          <div className="expDate">
            <label className="expdate text">Exp. Date (MM/YY)</label>
            <div className="inputs">
              <input
                className={props.monthCheck ? "error small" : "small input "}
                placeholder="MM"
                value={props.month}
                onChange={(event) => {
                  props.setMonth(event.target.value);
                }}
                onBlur={(e) => {
                  if (
                    e.target.value < 10 &&
                    e.target.value > 0 &&
                    e.target.value.length < 2
                  ) {
                    e.target.value = "0" + e.target.value;
                  }
                  props.setMonth(e.target.value);
                }}
                maxLength={2}
              />

              <input
                className={
                  props.monthCheck ? "error small" : "small input right"
                }
                placeholder="YY"
                onChange={(event) => {
                  props.setYear(event.target.value);
                }}
                onBlur={(e) => {
                  if (
                    e.target.value < 10 &&
                    e.target.value > 0 &&
                    e.target.value.length < 2
                  ) {
                    e.target.value = "0" + e.target.value;
                  }
                  props.setYear(e.target.value);
                }}
                maxLength={2}
              />
            </div>
            <p
              className={
                containLetters == true || props.monthCheck
                  ? "smallError"
                  : "null"
              }
            >
              Can’t be blank
            </p>
          </div>

          <div className="inputCvv">
            <label className="text ccv">CVV</label>
            <input
              className={
                containLetters == true || props.cvvCheck
                  ? "error"
                  : " medium input"
              }
              placeholder="e.g. 123"
              onChange={(event) => {
                props.setCvv(event.target.value);
              }}
              maxLength={3}
            />
            <p
              className={
                containLetters == true || props.monthCheck
                  ? "smallError"
                  : "null"
              }
            >
              Can’t be blank
            </p>
          </div>
        </div>
        <button
          className="submit"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            check();
            if (
              props.name.length !== 0 &&
              props.number.length === 19 &&
              props.month.length !== 0 &&
              props.year.length !== 0 &&
              props.cvv.length === 3
            ) {
              props.setChange(true);
            }
          }}
        >
          Confirm
        </button>
      </form>
    </section>
  );
}
export default Form;
