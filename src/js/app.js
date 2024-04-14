 export default class ErrorRepository {
	constructor(...errors) {
		this.errorsbase = new Map();
		errors.forEach(error => {
			this.errorsbase.set(error.code, error.description);
		});
	};
	translate(code) {
		if (this.errorsbase.has(code)) {
			return this.errorsbase.get(code);
		} else {
			return 'Unknown error';
		};
	};
};
