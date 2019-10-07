

 const solution = require("./functions");

test("Getting middle name from array", function(){
    expect(solution.getMiddleName(['James', 'Buckley'])).toBe(['']);
    expect(solution.getMiddleName([])).toBe(['']);
    expect(solution.getMiddleName(['James', 'Something', 'Buckley'])).toBe(['Something']);
    expect(solution.getMiddleName(['James', 'Hyphenated-name', 'Buckley']).toBe(['Hyphenated-name']));
    expect(solution.getMiddleName(['James', 'Multiple', 'Middle', 'Names', 'Buckley']).toBe(['Multiple', 'Middle', 'Names']));
})


test("Is a valid UK postcode", function(){
  expect(solution.isValidPostCode("").toBe("Invalid"));
  expect(solution.isValidPostCode("ABCDEFG").toBe("Invalid"));
  expect(solution.isValidPostCode("1234567").toBe("Invalid"));
  expect(solution.isValidPostCode("B29").toBe("Invalid"));
  expect(solution.isValidPostCode([]).toBe("Invalid"));
  expect(solution.isValidPostCode(true).toBe("Invalid"));
  expect(solution.isValidPostCode(false).toBe("Invalid"));
  expect(solution.isValidPostCode("SW8 1TP").toBe("Valid"));
  expect(solution.isValidPostCode("CB1 2QX").toBe("Valid"));
  expect(solution.isValidPostCode("SW8 1TP").toBe("Valid"));
  expect(solution.isValidPostCode("B29 7RS").toBe("Valid"));
})

test("Can drive in specified country", function() {
  expect(solution.canDriveIn("","").toBe(undefined));
  expect(solution.canDriveIn("", 18).toBe(undefined));
  expect(solution.canDriveIn("UK","").toBe(undefined));
  expect(solution.canDriveIn("UK",7).toBe(false));
  expect(solution.canDriveIn("UK",18).toBe(true));
  expect(solution.canDriveIn("France","45").toBe(true));
})