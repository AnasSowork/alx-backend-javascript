export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let employees = [];

  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employees = employees.concat(allEmployees[department]);
    }
  }

  let currentIndex = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (currentIndex < employees.length) {
            return { value: employees[currentIndex++], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
