import { useEffect, useState } from "react";
import { usePayment } from "./modules/payment/hook/use-payment";

function App() {
  const {
    paymentGateway: { getBalance, processPayment },
  } = usePayment();

  const [balance, setBalance] = useState(0);

  const handlePayment = () => {
    processPayment(100);
  };

  useEffect(() => {
    const getBalanceValue = async () => {
      const res = await getBalance();
      setBalance(res)
    }

    getBalanceValue()
  }, []);

  return <>

    <h2>Checkout</h2>
    <span>balance is {balance}</span>
    <button onClick={handlePayment}>Pay now</button>
  </>;
}

export default App;
