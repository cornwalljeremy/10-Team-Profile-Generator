const Employee = require("../lib/Employee");

test('Creates an Employee', () => {
    const subject = new Employee('George', 911, 'george@george.com');
    expect(subject.name).toEqual(expect.any(String));
    expect(subject.id).toEqual(expect.any(Number));
    expect(subject.email).toEqual(expect.any(String));
})
