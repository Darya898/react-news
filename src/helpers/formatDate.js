export const formatDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    mont: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};
