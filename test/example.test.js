// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    
    const expected = true;
    
    const actual = false;
    
    expect.equal(actual, expected);
});
