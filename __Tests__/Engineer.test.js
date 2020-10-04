const Engineer = require("../lib/Engineer");

test('Creates a engineer', () => {
    const subject = new Engineer('George', 911, 'george@george.com', 'jercor');
    expect(subject.name).toEqual(expect.any(String));
    expect(subject.id).toEqual(expect.any(Number));
    expect(subject.email).toEqual(expect.any(String));
    expect(subject.github).toEqual(expect.any(String));
});