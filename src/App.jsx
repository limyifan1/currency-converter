import { useEffect, useState } from "react";
import "./App.css";
import CurrencyDropdown from "./CurrencyDropdown";
import MyContext from "./contexts/CurrencyContext";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("SGD");

  return (
    <>
      <h1>Currency Converter</h1>
      <MyContext.Provider
        value={{ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }}
      >
        <CurrencyDropdown />
      </MyContext.Provider>
    </>
  );
}

export default App;
