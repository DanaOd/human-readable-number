module.exports = function toReadable(number) {
  const str = String(number);
  const digits = str.length;
  const lastDigit = str[str.length - 1];
  const hundredsNum = str[str.length - 3];

  const beforeLastDigit = str[str.length - 2];
  const lastTwoDigits = Number(beforeLastDigit + lastDigit);


  // ============================== FUNCTIONS ==============================
    // CHECK IF IT'S FROM 20+
  function getLastTwoNumbers (lastTwoDigits) {
    if (lastTwoDigits > 19 && lastDigit!=="0") {      
      return `${convertTwoDigit(Number(beforeLastDigit))} ${convertOneDigit(Number(lastDigit))}`;
    } else if  (lastTwoDigits > 19 && lastDigit ==="0") {      
      return `${convertTwoDigit(Number(beforeLastDigit))}`;
    }
    // CASE IF IT'S FROM 11 TO 19

    else if (lastTwoDigits <= 19 && lastTwoDigits > 9) {
      console.log("от 11 до 19");
      const TenPostfix = 'teen';
      switch (lastTwoDigits) {
        case 10:
          return 'ten';
        case 11:
          return 'eleven';
        case 12:
          return 'twelve';
        case 13:
          return 'thirteen';
        case 14:
          return 'four' + TenPostfix;
        case 15:
          return 'fif' + TenPostfix;
        case 16:
          return 'six' + TenPostfix;
        case 17:
          return 'seven' + TenPostfix;
        case 18:
          return 'eigh' + TenPostfix;
        case 19:
          return 'nine' + TenPostfix;
        default:
    return "";
        
      }

    } else {return ""}; 
  }

    // CHECK IF IT'S FROM 20+
  function convertTwoDigit(num) {

    switch (num) {
      case 1:
        return 'ten';
      case 2:
        return 'twenty';
      case 3:
        return 'thirty';
      case 4:
        return 'forty';
      case 5:
        return 'fifty';
      case 6:
        return 'sixty';
      case 7:
        return 'seventy';
      case 8:
        return 'eighty';
      case 9:
        return 'ninety';
      default:
        return "";
    }
  }
  
  function convertOneDigit(num) {
        switch (num){
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
        return 'five';
    case 6:
        return 'six';
    case 7:
        return 'seven';
    case 8:
        return 'eight';
    case 9:
      return 'nine';
    case 0:
    return "";
    }
}
  
  //  ============================== SOLUTION ==============================
  // IF THERE'S EMPTY STRING
  if (digits === 0) {
    return "";
  }
  // IF THERE'S 1-DIGIT NUMBER
  else if (digits === 1) {
    if (number === 0) {
      return 'zero';
    }
    return convertOneDigit(number);
  }
  // CHECK IF THERE'S 2-DIGIT NUMBER
  else if (digits === 2) {
    return getLastTwoNumbers(lastTwoDigits);
  }
      // CHECK IF THERE'S 3-DIGIT NUMBER

  else if (digits === 3) {
    console.log(convertOneDigit(hundredsNum));
    if (str[1] === "0" && str[2] === "0") {
      return `${convertOneDigit(Number(hundredsNum))} hundred`
    }
    else if (str[1] !== "0" ) {
      let result = `${convertOneDigit(Number(hundredsNum))} hundred ${getLastTwoNumbers(Number(lastTwoDigits))}`;
      console.log(result);
      return result;
    } 
    else 
    return `${convertOneDigit(Number(hundredsNum))} hundred ${convertOneDigit(Number(lastDigit))}`;
  }
  
}





