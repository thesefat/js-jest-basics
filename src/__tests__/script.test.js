const sum = require('../script')


test('Sum of (1,1) = 2', () =>
{
    expect(sum(1, 1)).toBe(2);
})
test('Sum of (2,3) = 5', () =>
{
    expect(sum(2, 3)).toBe(5);
})

test('Sum of (3,7) = 10', () =>
{
    expect(sum(3, 7)).toBe(10);
})