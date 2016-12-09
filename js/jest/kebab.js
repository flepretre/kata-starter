const _ = require('lodash');

class Kebab {
	constructor(ingredients){
		this.ingredients = ingredients;
	}

	isVegetarian() {
		return _.every(this.ingredients, {type: 'veggy'});
	}

	isPescetarian() {
		return _.every(this.ingredients, {type: 'pescetarian'});
	}
}

module.exports = Kebab;
