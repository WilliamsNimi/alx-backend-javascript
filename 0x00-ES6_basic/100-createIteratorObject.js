export default function createIteratorObject(report) {
  const list = [];
  const employeeRecords = report.allEmployees;
  for (const depts of Object.keys(employeeRecords)) {
    list.push(...employeeRecords[depts]);
  }
  return list;
}
