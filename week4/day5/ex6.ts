// Person
type Person = {
  name: string;
  age: number;
};

// Job
type Job = {
  position: string;
  department: string;
};

// Intersection
type Employee = Person & Job;


// function with type guards
function describeEmployee(employee: Employee): string {
  if (employee.position === "Manager") {
    return `${employee.name} is a Manager in the ${employee.department} department`;
  } else if (employee.position === "Developer") {
    return `${employee.name} is a Developer in the ${employee.department} department`;
  } else {
    return `${employee.name} works as ${employee.position}`;
  }
}