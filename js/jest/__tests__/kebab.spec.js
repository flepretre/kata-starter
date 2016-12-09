jest.dontMock('../kebab.js');

const Kebab = require('../kebab.js');

describe('kebab', () => {
  it('is veggy', () => {
    const kebab = new Kebab(undefined, [{name: 'salad', type: 'veggy'}]);

    expect(kebab.isVegetarian()).toBe(true);
  });

  it('is not veggy', () => {
    const kebab = new Kebab(undefined, [{name: 'steak', type: 'carny'}]);

    expect(kebab.isVegetarian()).toBe(false);
  });

  it('is pescetarian', () => {
    const kebab = new Kebab(undefined, [{name: 'shrimps', type: 'pescetarian'}]);

    expect(kebab.isPescetarian()).toBe(true);
  });
});
