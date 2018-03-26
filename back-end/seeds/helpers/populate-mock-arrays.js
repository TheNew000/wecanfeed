export default (count, generator) => {
  return Array(count).fill(null).map(() => {
    return generator();
  });
};
