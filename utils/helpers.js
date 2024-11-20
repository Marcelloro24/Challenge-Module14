module.exports = {
  // Add null check and return a fallback value if date is undefined
  format_date: (date) => {
    if (!date) return 'No date available';
    return new Date(date).toLocaleDateString();
  },
}; 