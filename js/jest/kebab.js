class Kebab {
	constructor(vegetarian, pescetarian){
		this.vegetarian = vegetarian;
		this.pescetarian = pescetarian;
	}

	isVegetarian() {
		return this.vegetarian;
	}

	isPescetarian() {
		return this.pescetarian;
	}
}

module.exports = Kebab;
