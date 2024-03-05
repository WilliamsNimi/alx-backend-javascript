export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(listOfEmployees) {
      return Object.keys(listOfEmployees).length;
    },
  };
}
