import { createContext } from "react"
import { PaymentGateway } from "../types/payment.interface"
import { StripePaymentGateway } from "../model/stripe-payment-gateway"

type PaymentType = {
  paymentGateway: PaymentGateway
}


export const PaymentContext = createContext<PaymentType | null>(null)

interface PaymentProviderProps {
  children: React.ReactNode
}


export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const dependencies: PaymentType = {
    paymentGateway: new StripePaymentGateway()
  }


  return (
    <PaymentContext.Provider value={dependencies}>
      {children}
    </PaymentContext.Provider>
  )
}