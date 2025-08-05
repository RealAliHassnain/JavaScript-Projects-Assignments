<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Faulty Calculator</title>
  </head>
  <body>
    <script>
        let num1 = Number(prompt("Write your first number: "));
        let num2 = Number(prompt("Write your second number: "));

        let tenPercentile = Math.random();

      alert("Press 1 to addition\nPress 2 for subtraction\nPress 3 for multiplication\nPress 4 for division");
      let chooseOperation = Number(prompt("Choose from 1, 2, 3 or 4: "));

      function faultyCalculator() {

        let addition = num1 + num2;
        let subtraction = num1 - num2;
        let multiplication = num1 * num2;
        let division = num1 / num2;

        if (chooseOperation == 1 && tenPercentile >= 0.1) {
          return addition;
        } else if (chooseOperation == 2 && tenPercentile >= 0.1) {
          return subtraction;
        } else if (chooseOperation == 3 && tenPercentile >= 0.1) {
          return multiplication;
        } else if (chooseOperation == 4 && tenPercentile >= 0.1) {
          return division;
        } else if (chooseOperation == 0 || chooseOperation > 4) {
          alert("Error. None from the choice");
        }

        if (chooseOperation == 1 && tenPercentile < 0.1) {
          return (addition = num1 - num2);
        }

        if (chooseOperation == 2 && tenPercentile < 0.1) {
          return (subtraction = num1 / num2);
        }

        if (chooseOperation == 3 && tenPercentile < 0.1) {
          return (multiplication = num1 + num2);
        }

        if (chooseOperation == 4 && tenPercentile < 0.1) {
          return (division = num1 ** num2);
        }
      }

      let result = faultyCalculator(num1, num2);
      alert("The answer is: " + result);
    </script>
  </body>
</html>
