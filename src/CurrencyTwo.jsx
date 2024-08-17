function CurrencyTwo({ currencyTwo, setCurrencyTwo, isLoading }) {
  return (
    <div className="currencies">
      <select
        name="currencyTwo"
        value={currencyTwo}
        onChange={(e) => setCurrencyTwo(e.target.value)}
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

export default CurrencyTwo;
