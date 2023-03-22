// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, item) {
  const result = drivers.filter(function(driver){
    return driver === item;
  });
  return result;
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(driversArray) {
  return driversArray.filter(function(driver) {
    return driver.startsWith('Sa');
  });
}

// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];
function matchName(driversArray, searchTerm) {
    return driversArray.filter(function(driver) {
      return driver.name === searchTerm;
    });
  }

