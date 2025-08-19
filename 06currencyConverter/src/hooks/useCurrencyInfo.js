import { useEffect, useState } from "react";

function useCurrInfo(currency) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  return data;
}

export default useCurrInfo;
