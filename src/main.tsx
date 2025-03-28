import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PaymentProvider } from './modules/payment/context/payment.tsx'

createRoot(document.getElementById('root')!).render(
  <PaymentProvider>
    <App />
  </PaymentProvider>,
)
