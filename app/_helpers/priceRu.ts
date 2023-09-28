export const priceRu = (price: number): string => {
  return `${price.toLocaleString('ru-RU')} ₽`;
};
