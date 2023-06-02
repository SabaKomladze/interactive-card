import { useState } from "react";
import "./App.css";
import Cards from "./Cards";
import Form from "./Form";
import Added from "./added";
function App() {
  const [name, setName] = useState("");
  const [nameCheck, setNameCheck] = useState(false);
  const [number, setNumber] = useState("");
  const [numberCheck, setNumberCheck] = useState(false);
  const [month, setMonth] = useState("");
  const [monthCheck, setMonthCheck] = useState(false);
  const [year, setYear] = useState("");
  const [yearCheck, setYearCheck] = useState(false);
  const [cvv, setCvv] = useState("");
  const [cvvCheck, setCvvCheck] = useState(false);
  const [cardnumber, setCardNumber] = useState("");
  const [change, setChange] = useState(false);
  return (
    <div className="main">
      <Cards name={name} number={number} month={month} year={year} cvv={cvv} />

      {change ? (
        <Added />
      ) : (
        <Form
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          setMonth={setMonth}
          setYear={setYear}
          month={month}
          year={year}
          cvv={cvv}
          setCvv={setCvv}
          nameCheck={nameCheck}
          setNameCheck={setNameCheck}
          numberCheck={numberCheck}
          setNumberCheck={setNumberCheck}
          setMonthCheck={setMonthCheck}
          monthCheck={monthCheck}
          yearCheck={yearCheck}
          setYearCheck={setYearCheck}
          setCvvCheck={setCvvCheck}
          cvvCheck={cvvCheck}
          cardnumber={cardnumber}
          setCardNumber={setCardNumber}
          change={change}
          setChange={setChange}
        />
      )}
    </div>
  );
}

export default App;
