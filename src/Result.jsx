function Result({ result, currencyTwo, isLoading }) {
  return (
    <div className="result">
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <h2>
          Current result is {result} {currencyTwo}
        </h2>
      )}
    </div>
  );
}

export default Result;
