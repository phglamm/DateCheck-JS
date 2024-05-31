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

  breakme: if (isNaN(day) && isNaN(month) && isNaN(year)) {
    document.getElementById("result").innerHTML =
      "Input For Day/Month/Year is a Character";
    break breakme;
  } else if (isNaN(day)) {
    document.getElementById("result").innerHTML =
      "Input For Day is a Character";
    break breakme;
  } else if (isNaN(month)) {
    document.getElementById("result").innerHTML =
      "Input For Month is a Character";
    break breakme;
  } else if (isNaN(year)) {
    document.getElementById("result").innerHTML =
      "Input For Year is a Character";
    break breakme;
  } else if (
    Object.keys(day).length === 0 &&
    Object.keys(month).length === 0 &&
    Object.keys(year).length === 0
  ) {
    document.getElementById("result").innerHTML =
      "Input For Day/Month/Year is Empty";
    break breakme;
  } else if (Object.keys(day).length === 0) {
    document.getElementById("result").innerHTML = "Input For Day is empty";
    break breakme;
  } else if (day < 1 || day > 31) {
    document.getElementById("result").innerHTML =
      "Input For Day is out of range";
    break breakme;
  } else if (Object.keys(month).length === 0) {
    document.getElementById("result").innerHTML = "Input For Month is empty";
    break breakme;
  } else if (month < 1 || month > 12) {
    document.getElementById("result").innerHTML =
      "Input data For Month is out of range";
    break breakme;
  } else if (Object.keys(year).length === 0) {
    document.getElementById("result").innerHTML = "Input For Year is empty";
    break breakme;
  } else if (year > MAX_VALID_YR || year < MIN_VALID_YR) {
    document.getElementById("result").innerHTML =
      "Input For Year is out of range";
    break breakme;
  } else {
    isValidDate(day, month, year)
      ? (document.getElementById("result").innerHTML =
          +day + "/" + month + "/" + year + " is a Valid Date")
      : (document.getElementById("result").innerHTML =
          +day + "/" + month + "/" + year + " is NOT a Valid Date");
  }
}
// Driver code
// isValidDate(29, 2, 2023) ? document.write("Yes<br>") : document.write("No<br>");

// isValidDate(31, 11, 2000)
//   ? document.write("Yes<br>")
//   : document.write("No<br>");

// This code is contributed by souravmahato348
