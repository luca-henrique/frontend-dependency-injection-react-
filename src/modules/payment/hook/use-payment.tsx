import { useContext } from "react";
import { PaymentContext } from "../context/payment";


export const usePayment = () => {
  const paymentContext = useContext(PaymentContext);

  if (!paymentContext) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }

  return paymentContext;
}