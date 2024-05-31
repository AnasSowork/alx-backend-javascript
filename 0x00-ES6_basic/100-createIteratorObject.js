export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let employees = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employees = employees.concat(allEmployees[department]);
    }
  }

  let currentIndex = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          const value = employees[currentIndex];
          currentIndex += 1;
          if (currentIndex <= employees.length) {
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
