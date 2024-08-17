function CurrencyInput({ amount, handleInput, isLoading }) {
  return (
    <div className="currency-input">
      <input
        type="number"
        min="1"
        placeholder="Enter a value... "
        value={amount}
        onChange={(e) => handleInput(e)}
        required
        // disabled={isLoading}
      />
    </div>
  );
}

export default CurrencyInput;
