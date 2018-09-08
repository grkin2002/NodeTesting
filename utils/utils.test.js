const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it(`should add two number`, () => {
      var res = utils.add(3,4);
      expect(res)
        .toBe(7)
        .toBeA('number');
    });
  });

  it('should async add two numbers', done => {
    utils.asyncAdd(4, 3, sum => {
      expect(sum)
        .toBe(7)
        .toBeA('number');
      done();
    });
  });

  it(`should square a number`, () => {
    var res = utils.square(8);
    expect(res)
      .toBe(64)
      .toBeA('number');
  });

  it(`should async square the number`, done => {
    utils.asyncSquare(3, res => {
      expect(res)
        .toBe(9)
        .toBeA('number');
      done();
    });
  });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values

it(`should set firsName and lastName`, () => {
  let user = {
    age: 25,
    location: 'Philadelphia'
  };
  let res = utils.setName(user, 'Andrew Mead');
  // expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Mead'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'Andrew'}).toBe({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 23
//   });
// });
