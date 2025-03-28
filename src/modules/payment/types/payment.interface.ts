export interface PaymentGateway {
  getBalance(): number;
  processPayment(amount: number): void;
}
