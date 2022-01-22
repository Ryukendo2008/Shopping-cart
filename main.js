document.getElementById('phn-plus').addEventListener('click', function () {
          const plusValue = document.getElementById('plus-value');
          const plusValueNumber = parseInt(plusValue.value);
          const plusNewValueNumber = plusValueNumber + 1;
          plusValue.value = plusNewValueNumber;

          const phnCost = plusNewValueNumber * 1219;
          document.getElementById('phn-cost').innerText = phnCost;
});


document.getElementById('phn-minus').addEventListener('click', function () {
          const plusValue = document.getElementById('plus-value');
          const plusValueNumber = parseInt(plusValue.value);
          const plusNewValueNumber = plusValueNumber - 1;
          plusValue.value = plusNewValueNumber;

          const phnCost = plusNewValueNumber * 1219;
          document.getElementById('phn-cost').innerText = phnCost;
});


/////////////////
document.getElementById('case-plus').addEventListener('click', function () {
          const plusValue = document.getElementById('case-plus-value');
          const plusValueNumber = parseInt(plusValue.value);
          const plusNewValueNumber = plusValueNumber + 1;
          plusValue.value = plusNewValueNumber;

          const caseCost = plusNewValueNumber * 59;
          document.getElementById('case-cost').innerText = caseCost;
});


document.getElementById('case-minus').addEventListener('click', function () {
          const plusValue = document.getElementById('case-plus-value');
          const plusValueNumber = parseInt(plusValue.value);
          const plusNewValueNumber = plusValueNumber - 1;
          plusValue.value = plusNewValueNumber;

          const caseCost = plusNewValueNumber * 59;
          document.getElementById('case-cost').innerText = caseCost;
});