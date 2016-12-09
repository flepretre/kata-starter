const _ = require('lodash');

class Kebab {
	constructor(ingredients){
		this.ingredients = ingredients;
	}

	isVegetarian() {
		return _.every(this.ingredients, {type: 'veggy'});
	}
}

module.exports = Kebab;
