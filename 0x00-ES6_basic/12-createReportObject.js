export default function createReportObject(employeesList) {
    return {
	allEmployees: employeesList,
	getNumberOfDepartments(list_of_employees) {
	    return Object.keys(list_of_employees).length
	},
    };
}
