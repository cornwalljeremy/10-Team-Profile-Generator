const Manager = require("../lib/Manager");

test('Creates a manager', () => {
    const subject = new Manager('George', 911, 'george@george.com', 555);
    expect(subject.name).toEqual(expect.any(String));
    expect(subject.id).toEqual(expect.any(Number));
    expect(subject.email).toEqual(expect.any(String));
    expect(subject.office).toEqual(expect.any(Number));
});