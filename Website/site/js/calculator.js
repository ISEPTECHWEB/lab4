
  // Function that parse a string mathematical formula into an array of numbers and operators
  function parseCalculationString(s) {
    var calculation = [], current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('*/+-'.indexOf(ch) > -1) {
            // Include sign -
            if (current == '' && ch == '-') {
                current = '-';
            } else {
                calculation.push(parseFloat(current), ch) // Insert into array
                current = '';
            }
        } else {
            current += s.charAt(i);
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current)); // Insert into array
    }
    return calculation;
}

// Function that perform a calculation from an array of operators and numbers
function calculate(calc) {
    var ops = [{'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        currentOp;
    for (var i = 0; i < ops.length; i++) {
        for (var j = 0; j < calc.length; j++) {
            if (ops[i][calc[j]]) { // Get operator
                currentOp = ops[i][calc[j]];
            } else if (currentOp) { // Make calculation
                newCalc[newCalc.length - 1] =
                    currentOp(newCalc[newCalc.length - 1], calc[j]);
                currentOp = null;
            } else { // Add number to array
                newCalc.push(calc[j]);
            }
            console.log(newCalc);
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) { // Handle error
        console.log('Error: unable to resolve calculation');
        return calc;
    } else { // Return the first and only number of the formula
        return calc[0];
    }
}
