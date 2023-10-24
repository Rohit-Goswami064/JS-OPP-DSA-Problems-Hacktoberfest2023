function getManagers(employees, id) { 
	   const result = []; 
 
    function findManager(employees, id) { 
      const targetEmployee = employees.find((item) => item.employeeId === id); 
      if (!targetEmployee) return; 
 
     	if (targetEmployee.managerId !== id) { 
          result.push(targetEmployee.managerId); 
     		  findManager(employees, targetEmployee.managerId); 
   		} else if (!result.includes(targetEmployee.managerId)) { 
     			result.push(targetEmployee.managerId); 
   		} 
  	} 
 
    findManager(employees, id); 
    return result; 
} 

