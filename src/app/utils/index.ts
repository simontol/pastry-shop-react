export const parsePrice = (price: string | number): string => {
  if (typeof price === 'string') {
    const p = parseFloat(price);
    if (Number.isNaN(p)) return '';
    return p.toFixed(2);
  }
  return price.toFixed(2);
};
