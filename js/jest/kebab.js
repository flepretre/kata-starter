const _ = require('lodash');

class Kebab {
	constructor(kebab = {ingredients: []}, ingredients = [], double = false){
		this.ingredients = kebab.ingredients.concat(ingredients);
    this.double = double;
	}

	isVegetarian() {
		return _.every(this.ingredients, {type: 'veggy'});
	}

	isPescetarian() {
		return _.every(this.ingredients, {type: 'pescetarian'});
	}

	double() {
		return _.reduce(this.ingredients, (e, accumulator) => {
      if (this.double) {
			  accumulator.push(e);
      }
      accumulator.push(e);

      return accumulator;
    }, []);
	}
}

module.exports = Kebab;
