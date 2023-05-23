
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({amount: 2000, rate:6, years: 5})).toEqual("38.67")
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment({amount: 10043, rate:5.8, years: 8})).toEqual("131.00")
});


