var romanNumeral = function(year) {
  var result = []
  var yearsLeft = year;
  var numberOfMs = 0;
  var numberOfDs = 0;
  var numberOfCs = 0;
  var numberOfLs = 0;
  var numberOfXs = 0;
  var numberOfVs = 0;
  var numberOfIs = 0;


  while (yearsLeft != 0) {
    if ((yearsLeft/1000) >= 1) {
      numberOfMs = Math.floor(yearsLeft/1000);
      yearsLeft = yearsLeft % 1000;

      for (var i = 0; i < numberOfMs; i++) {
        result.push('M');
      };
    };

    if ((yearsLeft/500) >= 1) {
      numberOfDs = Math.floor(yearsLeft/500);
      yearsLeft = yearsLeft % 500;

      for (var i = 0; i < numberOfDs; i++) {
        result.push('D');
      };
    };

    if ((yearsLeft/100) >= 1) {
      numberOfCs = Math.floor(yearsLeft/100);
      yearsLeft = yearsLeft % 100;

      for (var i = 0; i < numberOfCs; i++) {
        result.push('C');
      };
    };

    if ((yearsLeft/50) >= 1) {
      numberOfLs = Math.floor(yearsLeft/50);
      yearsLeft = yearsLeft % 50;

      for (var i = 0; i < numberOfLs; i++) {
        result.push('L');
      };
    };

    if ((yearsLeft/10) >= 1) {
      numberOfXs = Math.floor(yearsLeft/10);
      yearsLeft = yearsLeft % 10;

      for (var i = 0; i < numberOfXs; i++) {
        result.push('X');
      };
    };

    if ((yearsLeft/5) >= 1) {
      numberOfVs = Math.floor(yearsLeft/5);
      yearsLeft = yearsLeft % 5;

      for (var i = 0; i < numberOfVs; i++) {
        result.push('V');
      };
    };

    if ((yearsLeft/1) >= 1) {
      numberOfIs = Math.floor(yearsLeft/1);
      yearsLeft = yearsLeft % 1;

      for (var i = 0; i < numberOfIs; i++) {
        result.push('I');
      };
    };

    return result;
  };



};

// $(document).ready(function(){
//   $('form#THING').submit(function(event){
//     var convertNum = parseInt($('input#convert-num').val());
//
//     //stuff here
//
//     var result = // stuff
//
//     $('#result').text(result);
//     event.preventDefault();
//   });
// });
