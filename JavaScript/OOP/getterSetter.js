const seq = {
  _value: 1,
  set setValue(e) {
    this._value = e;
  },
  get getValue() {
    return this._value;
  }
};

seq.setValue = 5;
console.log(seq.getValue);
