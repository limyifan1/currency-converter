import { useState, useEffect } from "react";

function CurrencyConverter(props) {
  const [inputAmount, setInputAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/pair/" +
        props.currencyFrom +
        "/" +
        props.currencyTo +
        "/" +
        inputAmount
    )
      .then((res) => res.json())
      .then((data) => setConvertedAmount(data.conversion_result));
  }, [inputAmount, props.currencyFrom, props.currencyTo]);

  function handleChange(event) {
    setInputAmount(event.target.value);
  }

  return (
    <div className="container">
      {/* Controlled component */}
      <input
        value={inputAmount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={handleChange}
      />
      <p>{props.currencyFrom}</p>
      <p>=</p>
      <p className="converter-result">
        {convertedAmount === "" ? "0" : convertedAmount}
      </p>
      <p>{props.currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
