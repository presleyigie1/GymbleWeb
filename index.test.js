const login = require('./card');
//const fizz_buzz = require('./server');

describe("TestLogin", () => {

    test('does user exist in the database?', () => {
      expect(login('test@gmail.com', 'password12')).toBe('found');
    });

    test('Is the database not connected?', () => {
      expect(login('test@gmail.com', 'password12')).toBe('Cannot connect to the database');
    });

});

/*describe("TestSignUp", () =>{
  test('is the field empty?', () => {
    expect(signUp('emma', 'kelly', '20', 'test@gmail.com', 'password12')).toBe('putting in the database');
  });
})*/

/*describe("FizzBuzz", () => {
    test('[3] should result in "fizz"', () => {
      expect(fizz_buzz([3])).toBe('fizzbuzz');
    });
});*/

/*test('Is the alert displaying?', () => {
  expect(helpFunction()).toBe('test working');
});*/

/*describe("TestHelp", () =>{
  test('Is the alert displaying?', () => {
    expect(helpFunction()).toBe('test working');
  });
})*/

