function calculateAgeDifference() {
  var person01Name = document.getElementById("person01-name").value;
  var person01Birthdate = new Date(document.getElementById("person01").value);

  var person02Name = document.getElementById("person02-name").value;
  var person02Birthdate = new Date(document.getElementById("person02").value);

  var timeDiff = Math.abs(
    person01Birthdate.getTime() - person02Birthdate.getTime()
  );

  var ageDifferenceYears = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
  var ageDifferenceMonths = Math.floor(
    (timeDiff % (1000 * 3600 * 24 * 365.25)) / (1000 * 3600 * 24 * 30.44)
  );
  var ageDifferenceDays = Math.floor(
    (timeDiff % (1000 * 3600 * 24 * 30.44)) / (1000 * 3600 * 24)
  );

  var resultMessage =
    "The age difference between " +
    person01Name +
    " and " +
    person02Name +
    " is " +
    ageDifferenceYears +
    " years, " +
    ageDifferenceMonths +
    " months, and " +
    ageDifferenceDays +
    " days.";
  document.getElementById("show-age-diff").textContent = resultMessage;
}
