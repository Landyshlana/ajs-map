import ErrorRepository from '../app';

const myErrors = new ErrorRepository({
	code: 1000,
	description: 'Internal Server Error'
}, {
	code: 4040,
	description: 'Access Denied'
}, {
	code: 3333,
	description: 'Invalid request'
});

test('plenty', () => {
	expect(myErrors.translate(1000)).toBe('Internal Server Error');
});
test('not found', () => {
	expect(myErrors.translate(4000)).toBe('Unknown error');
});