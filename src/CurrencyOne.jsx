function CurrencyOne({ currencyOne, setCurrencyOne, isLoading }) {
  return (
    <div className="currencies">
      <select
        name="currencyOne"
        value={currencyOne}
        onChange={(e) => setCurrencyOne(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    </div>
  );
}

export default CurrencyOne;
