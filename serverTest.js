const {email, password} = require('./server');

describe(email,password, () => {
    test('[3] should result in "fizz"', () => {
      expect(EmmasLogin("hello", "helloagain")).toBe('1');
    });

});