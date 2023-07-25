const employees = [
    {
        name: "Benito",
        skills: ["Programming"],
        hobbies: ["Basketball"],
        doSomething: () => {
            console.log("Doing something...");
        },
    },
    {
        name: "John",
        skills: ["Programming", "Cooking"],
        hobbies: ["Basketball", "Football"],
    },
    {
        name: "Mary",
        skills: ["Programming", "Cooking", "Dancing"],
        hobbies: ["Basketball", "Football", "Reading"],
    },
];

const employeesCopy = deepCopy(employees);

employeesCopy[0].hobbies.push("Badminton");

console.log({ employees, employeesCopy });

function deepCopy(source) {
    if (Array.isArray(source)) {
        const target = [];

        for (const value of source) {
            target.push(deepCopy(value));
        }

        return target;
    } else if (typeof source === "object" && source !== null) {
        const target = {};

        for (const key in source) {
            target[key] = deepCopy(source[key]);
        }

        return target;
    } else {
        return source;
    }
}
