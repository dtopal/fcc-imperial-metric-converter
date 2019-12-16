/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    //is there a number?
    var idx = input.match(/[A-Za-z]/g);
    if (idx !== null) {
      idx = input.indexOf(idx[0]); //first letter
    };
    var result = input.slice(0, idx);
    
    //if length is 0 then return 1
    if (result.length === 0) {
      return '1';
    }
    
    
    //if double fraction return invalid
    if (result.includes('/') && result.match(/\//g).length > 1) {
      return 'invalid';
    }
    
    
    return result;
    //var numRegex = /^[\d.\/]+/g;
    /**
    var result = input.match(numRegex)[0];
    
    if (result == null) {
      return '1';
    }
    
    return result;
    **/
  };
  
  this.getUnit = function(input) {
    //is there a unit?
    var idx = input.match(/[A-Za-z]/g);
    if (idx == null) {
      return 'invalid';
    }
    idx = input.indexOf(idx[0]);
    
    var result = input.slice(idx);
    
    //var result = input.match(/[A-Za-z]+$/g)[0];
    
    //validate for correct unit or return 'invalid'
    var units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    if (units.includes(result)) {
      return result;
    } else {
      return 'invalid';
    }
    
    //return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = null;
        break;
    };
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit.toLowerCase()){
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
    };
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      default:
        result = initNum / miToKm;
        break;
    };
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    // string: '3.1 miles converts to 5.00002 kilometers'
    var result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    
    return result;
  };
  
}

module.exports = ConvertHandler;