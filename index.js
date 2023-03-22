// Code your solution here

function findMatching(drivers, item) {
    const result = drivers.filter(function(driver) {
      return driver.toLowerCase() === item.toLowerCase();
    });
    return result;
  }


function fuzzyMatch(driversArray) {
  return driversArray.filter(function(driver) {
    return driver.startsWith('Sa');
  });
}



function matchName(driversArray, searchTerm) {
    return driversArray.filter(function(driver) {
      return driver.name === searchTerm;
    });
  }

