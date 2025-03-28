export interface PaymentGateway {
  getBalance(): Promise<number>;
  processPayment(amount: number): void;
}
