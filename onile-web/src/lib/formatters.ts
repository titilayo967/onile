export function formatCurrency(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export default formatCurrency;
