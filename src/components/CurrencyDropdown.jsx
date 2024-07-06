import { useContext, useEffect, useState } from "react";
import "./CurrencyStyling.css";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyContext from "../contexts/CurrencyContext";

function CurrencyDropdown() {
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const { currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo } =
    useContext(CurrencyContext);
  // const [currencyFrom, setCurrencyFrom] = useState("AED");
  // const [currencyTo, setCurrencyTo] = useState("AED");

  useEffect(() => {
    setCurrencyCodes([
      ["AED", "UAE Dirham"],
      ["AFN", "Afghan Afghani"],
      ["ALL", "Albanian Lek"],
      ["AMD", "Armenian Dram"],
    ]);
    // fetch("https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/codes", {
    //   mode: "cors",
    // })
    //   .then((res) => res.json())
    //   .then((data) => setCurrencyCodes(data.supported_codes));
  }, []);

  function handleChangeCurrencyFrom(event) {
    setCurrencyFrom(event.target.value);
  }
  function handleChangeCurrencyTo(event) {
    setCurrencyTo(event.target.value);
  }

  return (
    <>
      <div className="container">
        <p>I want to convert</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={handleChangeCurrencyFrom}
          value={currencyFrom}
        >
          {currencyCodes.map((currencyValue) => (
            <option value={currencyValue[0]} key={`${currencyValue[0]}-from`}>
              {currencyValue[1]}
            </option>
          ))}
        </select>
        <p>to</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={handleChangeCurrencyTo}
          value={currencyTo}
        >
          {currencyCodes.map((currencyValue) => (
            <option value={currencyValue[0]} key={`${currencyValue[0]}-to`}>
              {currencyValue[1]}
            </option>
          ))}
        </select>
      </div>
      <CurrencyConverter />
    </>
  );
}

export default CurrencyDropdown;
