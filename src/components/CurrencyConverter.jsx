import { useContext, useEffect, useState } from "react";
import MyContext from "../contexts/CurrencyContext";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  // amount captures the value entered by the user, and is "" by default

  const [output, setOutput] = useState(0);
  // output captures the value of the converted currency

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  const contextValue = useContext(MyContext);

  console.log("value from currency converter", contextValue);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/pair/" +
        contextValue.currencyFrom + // e.g. EUR
        "/" +
        contextValue.currencyTo + // e.g. USD
        "/" +
        amount
    )
      // 1. Call the API with the correct method and headers
      .then((response) => response.json())
      // 2. Get the JSON response
      .then((data) => setOutput(data.conversion_result))
      // 3. Call setOutput to store the value
      .catch(console.log("Error"));
    // 4. Catch any errors
  }, [
    amount,
    contextValue.currencyFrom,
    contextValue.currencyTo,
    // 5. Think about when you want useEffect to run again
    //    Which variables, when modified, should trigger useEffect?
  ]);

  return (
    <div className="currencyConverterContainer">
      <input
        value={amount}
        placeholder="Enter amount here"
        className="converter-input"
        onChange={handleAmountChange}
      ></input>
      <p>{contextValue.currencyFrom}</p>
      <p>=</p>
      <p>{output}</p>
      <p>{contextValue.currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
