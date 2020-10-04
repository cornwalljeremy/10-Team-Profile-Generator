const Intern = require("../lib/Intern");

test('Creates an', () => {
    const subject = new Intern('George', 911, 'george@george.com', 'jercor');
    expect(subject.name).toEqual(expect.any(String));
    expect(subject.id).toEqual(expect.any(Number));
    expect(subject.email).toEqual(expect.any(String));
    expect(subject.school).toEqual(expect.any(String));
});