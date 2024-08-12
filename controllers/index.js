let departments = [
  { departmentId: 1, name: 'Engineering' },
  { departmentId: 2, name: 'Marketing' },
];
let roles = [
  { roleId: 1, title: 'Software Engineer' },
  { roleId: 2, title: 'Marketing Specialist' },
  { roleId: 3, title: 'Product Manager' },
];
let employees = [
  {
      employeeId: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      departmentId: 1,
      roleId: 1,
  },
  {
      employeeId: 2,
      name: 'Priya Singh',
      email: 'priya.singh@example.com',
      departmentId: 2,
      roleId: 2,
  },
  {
      employeeId: 3,
      name: 'Ankit Verma',
      email: 'ankit.verma@example.com',
      departmentId: 1,
      roleId: 3,
  },
];

let getAllEmployees = () => {
  return employees;
};


let getEmployeesById = (id) => {
    return employees.find((employee) => employee.employeeId === id);
};

module.exports = { getAllEmployees, getEmployeesById };
