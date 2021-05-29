const expect = chai.expect,
  tarr = [3, 0, 1, 1, 9, 7],
  ta = 7,
  tb = 2,
  tc = 3;

const text2 = chai.expect,
  tarr2 = [1,1,2,2,3],
  ta2 = 0,
  tb2 = 0,
  tc2 = 1
  // Input: arr = [1,1,2,2,3], a = 0, b = 0, c = 1
  // Output: 0
describe("CountGoodTriplets", () => {
  it("Find all of the good triplets", () => {
    expect(countGoodTriplets(tarr, ta, tb, tc)).to.equal(
      4,
      "Please check your function!"
    );
  });
});


describe("CountGoodTriplets", () => {
  it("Find all of the good triplets", () => {
    expect(countGoodTriplets(tarr2, ta2, tb2, tc2)).to.equal(
      0,
      "Please check your function!"
    );
  });
});