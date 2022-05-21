export const validateForm = (amount: string, text: string) => {
  return (
    amount && text && !isNaN(parseInt(amount, 10)) && typeof text === 'string'
  );
};
