
function updateEmployeeWithKeyAndValue(obj, key, value) {
  const newObj = {...obj};
  newObj[key] = value;
  return newObj;
}
const employee = updateEmployeeWithKeyAndValue(
  employee,
  "name",
  "Sam"
)




function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value ;
  return obj;
  }



  function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }

  const newEmployee = deleteFromEmployeeByKey(
    employee,
    "name",
    "Sam"
  )
  delete newEmployee.name;

function destructivelyDeleteFromEmployeeByKey(obj,key,value) {
  obj[key] = value; 

  return obj;
}

newEmployee = destructivelyDeleteFromEmployeeByKey(
  
  delete newEmployee.name
)

