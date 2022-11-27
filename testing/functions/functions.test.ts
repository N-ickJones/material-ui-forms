import * as functions from '../../src/functions/functions';

test("getRandomInt is between or equal to min and max", () => {
    const randomNum = functions.getRandomInt(1, 10);
    expect(randomNum).toBeGreaterThanOrEqual(1)
    expect(randomNum).toBeLessThanOrEqual(10)
})
