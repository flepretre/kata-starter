jest.dontMock('../kebab.js');

const Kebab = require('../kebab.js');

describe('kebab', () => {
  it('is veggy', () => {
    const kebab = new Kebab();

    expect(kebab.isPescetarian()).toBeFalsy();
  });


});
