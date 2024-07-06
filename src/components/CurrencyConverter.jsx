import { useState, useEffect, useContext } from "react";
import CurrencyContext from "../contexts/CurrencyContext";

function CurrencyConverter(props) {
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState(0);
  const { currencyFrom, currencyTo } = useContext(CurrencyContext);

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  useEffect(() => {
    // fetch(
    //   "https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/pair/" +
    //     currencyFrom +
    //     "/" +
    //     currencyTo +
    //     "/" +
    //     amount
    // )
    //   // 1. Call the API with the correct method and headers
    //   .then((res) => res.json())
    //   // 2. Get the JSON response
    //   .then((data) => setOutput(data.conversion_result))
    //   // 3. Call setOutput to store the value
    //   .catch(setOutput(""));
    // 4. Catch any errors
  }, [
    amount,
    currencyFrom,
    currencyTo,
    // 5. Think about when you want useEffect to run again
    //    Which variables, when modified, should trigger useEffect?
  ]);

  return (
    <div className="currency-converter-container">
      <input
        value={amount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={handleAmountChange}
      ></input>
      <p>{currencyFrom}</p>
      <p>=</p>
      <p className="converted-amount">{output}</p>
      <p>{currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
