var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe("Who's The Oldest? (unit tests)\n", () => {
  it('[Test 1] Expected: "Charlotte"', () =>
    assert.strictEqual(
      e.oldest({Charlotte: 53, Oliver: 15, Henry: 18, Gabriel: 46, Violet: 13}),
      'Charlotte',
    ));
  it('[Test 2] Expected: "Daniel"', () =>
    assert.strictEqual(
      e.oldest({Grayson: 50, Imogen: 63, Logan: 21, Daniel: 64, Rory: 19}),
      'Daniel',
    ));
  it('[Test 3] Expected: "Josh"', () =>
    assert.strictEqual(
      e.oldest({Josh: 78, Adam: 63, Aria: 65, Grace: 51, Bella: 37}),
      'Josh',
    ));
  it('[Test 4] Expected: "Julia"', () =>
    assert.strictEqual(
      e.oldest({Alex: 9, Jayden: 18, Julia: 43, Penelope: 32, Ella: 34}),
      'Julia',
    ));
  it('[Test 5] Expected: "Sam"', () =>
    assert.strictEqual(
      e.oldest({Sam: 65, Joseph: 60, Mia: 41, Thomas: 31, Rebecca: 5}),
      'Sam',
    ));
  it('[Test 6] Expected: "Kai"', () =>
    assert.strictEqual(
      e.oldest({Eden: 64, Archie: 18, Olivia: 32, Kai: 84, Harry: 14}),
      'Kai',
    ));
  it('[Test 7] Expected: "Elliot"', () =>
    assert.strictEqual(
      e.oldest({Anna: 67, Elijah: 10, Cole: 31, Andrew: 24, Elliot: 77}),
      'Elliot',
    ));
  it('[Test 8] Expected: "Innes"', () =>
    assert.strictEqual(
      e.oldest({Innes: 77, Lilly: 11, Hallie: 41, Nina: 66, Ryan: 9}),
      'Innes',
    ));
  it('[Test 9] Expected: "Robbie"', () =>
    assert.strictEqual(
      e.oldest({Isla: 73, Elsie: 6, Frankie: 36, Robbie: 75, Kayla: 9}),
      'Robbie',
    ));
  it('[Test 10] Expected: "Jack"', () =>
    assert.strictEqual(
      e.oldest({Jack: 64, Jacob: 33, Tommy: 17, Finn: 5, Isaac: 13}),
      'Jack',
    ));
  it('[Test 11] Expected: "Carson"', () =>
    assert.strictEqual(
      e.oldest({Carson: 81, Charlie: 33, Riley: 28, Maria: 39, Sadie: 67}),
      'Carson',
    ));
  it('[Test 12] Expected: "Amy"', () =>
    assert.strictEqual(
      e.oldest({Amy: 70, Owen: 11, Matilda: 64, Lexi: 37, Lena: 26}),
      'Amy',
    ));
  it('[Test 13] Expected: "Phoebe"', () =>
    assert.strictEqual(
      e.oldest({Lola: 45, Tyler: 23, Hope: 4, Phoebe: 86, Freya: 44}),
      'Phoebe',
    ));
  it('[Test 14] Expected: "Ava"', () =>
    assert.strictEqual(
      e.oldest({Hollie: 48, Harris: 24, Ava: 72, Alfie: 9, Louis: 47}),
      'Ava',
    ));
  it('[Test 15] Expected: "Eve"', () =>
    assert.strictEqual(
      e.oldest({Erica: 32, Eve: 82, Harper: 74, Summer: 38, Ben: 72}),
      'Eve',
    ));
  it('[Test 16] Expected: "Aiden"', () =>
    assert.strictEqual(
      e.oldest({Michael: 63, Jessica: 65, Reuben: 25, Aiden: 82, Emily: 18}),
      'Aiden',
    ));
  it('[Test 17] Expected: "Ellie"', () =>
    assert.strictEqual(
      e.oldest({Brooke: 8, Lucy: 44, Cooper: 33, Ellie: 82, Millie: 7}),
      'Ellie',
    ));
  it('[Test 18] Expected: "Quinn"', () =>
    assert.strictEqual(
      e.oldest({Piper: 10, Quinn: 62, David: 20, John: 61, Noah: 17}),
      'Quinn',
    ));
  it('[Test 19] Expected: "Max"', () =>
    assert.strictEqual(
      e.oldest({Cara: 5, Max: 81, Lucas: 62, Sophie: 71, Amelia: 79}),
      'Max',
    ));
  it('[Test 20] Expected: "Florence"', () =>
    assert.strictEqual(
      e.oldest({Leo: 29, Clara: 8, Florence: 69, Lewis: 38, James: 47}),
      'Florence',
    ));
});
