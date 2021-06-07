function showSalary(users, age) {
  let resultString = '';
  users.forEach(user => {
    if(user.age <= age) {
      resultString = resultString.concat(`${user.name}, ${user.balance}\n`);
    }
  });
  return resultString.slice(0,-1)
}
