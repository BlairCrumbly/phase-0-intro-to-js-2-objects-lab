// Step 1: Define the `employee` object
const employee = {
    name: "John",
    streetAddress: "123 Main Street",
  };
  
  // Step 2: Define `updateEmployeeWithKeyAndValue` (Non-Destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value, // Use computed property name syntax to add/update key-value pair
    };
  }
  
  // Step 3: Define `destructivelyUpdateEmployeeWithKeyAndValue` (Destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modify the original `employee` object directly
    return employee; // Return the modified object
  }
  
  // Step 4: Define `deleteFromEmployeeByKey` (Non-Destructive)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Create a clone of the original `employee`
    delete newEmployee[key]; // Delete the specified key from the clone
    return newEmployee; // Return the new object
  }
  
  // Step 5: Define `destructivelyDeleteFromEmployeeByKey` (Destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Delete the specified key from the original `employee`
    return employee; // Return the modified object
  }
  
