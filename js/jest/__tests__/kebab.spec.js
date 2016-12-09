jest.dontMock('../kebab.js');

const Kebab = require('../kebab.js');

describe('kebab', () => {
  it('is veggy', () => {
    const kebab = new Kebab([{name: 'salad', type: 'veggy'}]);

    expect(kebab.isVegetarian()).toBe(true);
  });

  it('is not veggy', () => {
    const kebab = new Kebab([{name: 'steak', type: 'carny'}]);

    expect(kebab.isVegetarian()).toBe(false);
  });
});
