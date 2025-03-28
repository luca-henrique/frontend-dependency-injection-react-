import { PaymentGateway } from "../types/payment.interface";

export class StripePaymentGateway implements PaymentGateway {
  getBalance(): number {
    return 1000; // Example balance
  }

  processPayment(amount: number): void {
    // Simulate processing a payment with Stripe
    console.log(`Processing payment of $${amount} with Stripe...`);
  }
}
