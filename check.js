// Javascript program to check if
// given date is valid or not.
const MAX_VALID_YR = 3000;
const MIN_VALID_YR = 1000;

// Returns true if
// given year is valid.
function isLeap(year) {
  // Return true if year
  // is a multiple of 4 and
  // not multiple of 100.
  // OR year is multiple of 400.
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

// Returns true if given
// year is valid or not.
function isValidDate(d, m, y) {
  // If year, month and day
  // are not in given range
  if (y > MAX_VALID_YR || y < MIN_VALID_YR) return false;

  if (m < 1 || m > 12) return false;
  if (d < 1 || d > 31) return false;

  // Handle February month
  // with leap year
  if (m == 2) {
    if (isLeap(y)) return d <= 29;
    else return d <= 28;
  }

  // Months of April, June,
  // Sept and Nov must have
  // number of days less than
  // or equal to 30.
  if (m == 4 || m == 6 || m == 9 || m == 11) return d <= 30;

  return true;
}

function check() {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

  if (year > MAX_VALID_YR || year < MIN_VALID_YR) {
    alert("Input data for Year is out of range");
  } else if (month < 1 || month > 12) {
    alert("Input data for Month is out of range");
  } else if (day < 1 || day > 31) {
    alert("Input data for Day is out of range");
  } else {
    isValidDate(day, month, year)
      ? alert(+day + "/" + month + "/" + year + " is a Valid Date")
      : alert(+day + "/" + month + "/" + year + " is a NOT Valid Date");
  }
}
// Driver code
// isValidDate(29, 2, 2023) ? document.write("Yes<br>") : document.write("No<br>");

// isValidDate(31, 11, 2000)
//   ? document.write("Yes<br>")
//   : document.write("No<br>");

// This code is contributed by souravmahato348
