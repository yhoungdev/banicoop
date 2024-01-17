export const formatNumber = (num: number) => {
  const format = new Intl.NumberFormat().format(num);
  return format;
};
