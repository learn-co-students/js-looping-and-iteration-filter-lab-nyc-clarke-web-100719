// Code your solution in this file

function log(val) {
  console.log(val);
}

function findMatching(arrDrivers, strDriver) {
  return arrDrivers
    .filter(
      driver => driver.toLowerCase() === strDriver.toLowerCase()
  );
}

function fuzzyMatch(arrDrivers, strMatch) {
  return arrDrivers.filter(strDriver => strDriver.startsWith(strMatch));



      // const arrDriverChars = strDriver.split('');
      // const arrMatchChars = strMatch.split('');
      //
      // arrDriverChars.filter(strDriverChar => {
      //   arrMatchChars.filter(strMatchChar => {
      //     log(`strDriverChar is ${strDriverChar} and strMatchChar is ${strMatchChar}`);
      //
      //    if(strDriverChar.toLowerCase() === strMatchChar.toLowerCase()) {
      //      log("strDriver is " + strDriver);
      //
      //      return strDriver;
      //    } else {
      //      console.error("U messed up!");
      //    }
      //   })
      // });

    // });
}

function matchName(arrObjDrivers, strName) {
  return arrObjDrivers
    .filter(objDriver => objDriver.name === strName);
}
