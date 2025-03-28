import { PaymentGateway } from "../types/payment.interface";

export class StripePaymentGateway implements PaymentGateway {
  async getBalance(): Promise<number> {
    // Simulate fetching balance from Stripe
    console.log("Fetching balance from Stripe...");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1000); // Simulated balance
      }, 1000);
    });
  }

  processPayment(amount: number): void {
    // Simulate processing a payment with Stripe
    console.log(`Processing payment of $${amount} with Stripe...`);
  }
}
