module.exports = () => {
  return {
    value: 1,
    increases() {
      this.value++;
    },
  };
};
