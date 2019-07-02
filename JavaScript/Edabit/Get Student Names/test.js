var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Get Student Names (unit tests)\n', () => {
  it('[Test 1] Expected: ["Steve", "Mike", "John"]', () =>
    assert.deepEqual(
      e.getStudentNames([{name: 'Steve'}, {name: 'Mike'}, {name: 'John'}]),
      ['Steve', 'Mike', 'John'],
    ));

  it('[Test 2] Expected: ["Jacek", "Ewa", "Zygmunt"]', () =>
    assert.deepEqual(
      e.getStudentNames([{name: 'Jacek'}, {name: 'Ewa'}, {name: 'Zygmunt'}]),
      ['Jacek', 'Ewa', 'Zygmunt'],
    ));

  it('[Test 3] Expected: ["Tomek"]', () =>
    assert.deepEqual(e.getStudentNames([{name: 'Tomek'}]), ['Tomek']));

  it('[Test 4] Expected: []', () =>
    assert.deepEqual(e.getStudentNames([]), []));
});
