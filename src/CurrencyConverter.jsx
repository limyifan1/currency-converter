import { useContext, useEffect, useState } from "react";
import MyContext from "./contexts/CurrencyContext";

function CurrencyConverter() {
  const [inputAmount, setInputAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const contextValue = useContext(MyContext);

  function handleInputChange(event) {
    setInputAmount(event.target.value);
  }

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/pair/" +
        contextValue.currencyFrom +
        "/" +
        contextValue.currencyTo +
        "/" +
        inputAmount
    )
      .then((res) => res.json())
      .then((data) => setConvertedAmount(data["conversion_result"]));
  }, [inputAmount, contextValue.currencyFrom, contextValue.currencyTo]);

  return (
    <div className="currency-container">
      <input
        value={inputAmount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={handleInputChange}
      />
      <p>{contextValue.currencyFrom}</p>
      <p>=</p>
      <p className="converted-amount">
        {convertedAmount === 0 ? "" : convertedAmount}
      </p>
      <p>{contextValue.currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
