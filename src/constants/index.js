export const validEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
export const validNumber = (number) => {
  const re = /^\d+/;
  return re.test(number);
};
