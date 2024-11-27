import { useContext, useEffect, useState } from "react";
import CurrencyConverter from "./CurrencyConverter";
import MyContext from "./contexts/CurrencyContext";

// const currencies = [
//   ["AED", "UAE Dirham"],
//   ["AFN", "Afghan Afghani"],
//   ["ALL", "Albanian Lek"],
//   ["AMD", "Armenian Dram"],
//   ["ANG", "Netherlands Antillian Guilder"],
// ];

function CurrencyDropdown() {
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const contextValue = useContext(MyContext);

  // currencyCodes looks like this:
  // [['AED', 'UAE Dirham'], ['SGD', 'Singapore Dollar'], ...]
  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/codes")
      .then((res) => res.json())
      .then((data) => setCurrencyCodes(data["supported_codes"]));

    // setCurrencyCodes(currencies);
  }, []);

  function handleCurrencyFromChange(event) {
    contextValue.setCurrencyFrom(event.target.value);
  }

  function handleCurrencyToChange(event) {
    contextValue.setCurrencyTo(event.target.value);
  }

  return (
    <>
      <div className="currency-container">
        <p>I want to convert</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={handleCurrencyFromChange}
          value={contextValue.currencyFrom}
        >
          {currencyCodes.map((currencyInfo) => (
            <option key={currencyInfo[0]} value={currencyInfo[0]}>
              {currencyInfo[1]}
            </option>
          ))}
        </select>
        <p>to</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={handleCurrencyToChange}
          value={contextValue.currencyTo}
        >
          {currencyCodes.map((currencyInfo) => (
            <option key={currencyInfo[0]} value={currencyInfo[0]}>
              {currencyInfo[1]}
            </option>
          ))}
        </select>
      </div>
      <CurrencyConverter />
    </>
  );
}

export default CurrencyDropdown;
