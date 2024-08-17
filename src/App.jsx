import React, { useState, useEffect } from "react";
import "./App.css";
import CurrencyOne from "./CurrencyOne";
import CurrencyInput from "./CurrencyInput";
import CurrencyTwo from "./CurrencyTwo";
import Result from "./Result";
import ErrorMsg from "./ErrorMsg";

function App() {
  const [amount, setAmount] = useState("");
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("EUR");
  const [result, setResult] = useState(" 😉 ");
  const [isLoading, setisLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInput = (e) => {
    setAmount(Number(e.target.value));
  };

  useEffect(() => {
    const fetchConversion = async () => {
      if (currencyOne === currencyTwo) {
        setResult(amount);
        return;
      }

      setisLoading(true);
      setErrorMsg("");
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}
        &from=${currencyOne}&to=${currencyTwo}`
        );
        if (!res.ok) throw new Error("Conversion Error");

        const data = await res.json();
        setResult(data.rates[currencyTwo]);
        setisLoading(false);
      } catch (error) {
        setErrorMsg("Sorry, conversion failed");
        setResult("😞");
      } finally {
        setisLoading(false);
      }
    };

    if (amount && currencyOne && currencyTwo) {
      fetchConversion();
    }
  }, [amount, currencyOne, currencyTwo]);

  return (
    <div className="container">
      <h1 className="title">Currency converter</h1>
      <div className="conversion-box">
        <CurrencyInput
          handleInput={handleInput}
          amount={amount}
          setAmount={setAmount}
          isLoading={isLoading}
        />
        <CurrencyOne
          currencyOne={currencyOne}
          setCurrencyOne={setCurrencyOne}
          isLoading={isLoading}
        />
        <CurrencyTwo
          currencyTwo={currencyTwo}
          setCurrencyTwo={setCurrencyTwo}
          isLoading={isLoading}
        />
      </div>

      {errorMsg ? (
        <ErrorMsg message={errorMsg} />
      ) : (
        <Result
          result={result}
          currencyTwo={currencyTwo}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
