var CreditCard = function(faker) {
    var self = this;
  
    self.number = function() {
      //15 digit random number
      var num = Math.floor(Math.random() * 1000000000000000) + 1;
  
      //first random number from the array
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      var num1 = arr[Math.floor(Math.random() * arr.length)];
      var concatinate = "" + num1 + num;
  
      var slic = concatinate.slice(0, 4);
      var slic1 = concatinate.slice(4, 8);
      var slic2 = concatinate.slice(8, 12);
      var slic3 = concatinate.slice(12, 16);
  
      var concat = slic + " " + slic1 + " " + slic2 + " " + slic3;
  
      //Checking first number and concatinating the name
      if (num1 === 1) {
        return concat + " " + "Airlines";
      }else if (num1 === 2) {
        console.log(concat + " " + "Financial and other future industry assignments");
      }else if (num1 === 3) {
        console.log(concat + " " + "Travel and entertainment");
      } else if (num1 === 4) {
        console.log(concat + " " + "Banking and financial");
      } else if (num1 === 5) {
        console.log(concat + " " + "Banking and financial");
      } else if (num1 === 6) {
        console.log(concat + " " + "Merchandising and banking/financial");
      } else if (num1 === 7) {
        console.log(concat + " " + " Petroleum and other future industry assignments");
      } else if (num1 === 8) {
        console.log(concat + " " + "Healthcare, telecommunications and other future industry assignments");
      } else {
        console.log(concat + " " + "For assignment by national standards bodies");
      }
  
      //Credit Card exp month
      var months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
      ];
      var month = months[Math.floor(Math.random() * months.length)];
  
      //Credit Card exp year
      var expYears = [20, 21, 22, 23, 24, 25, 26];
      var expYear = expYears[Math.floor(Math.random() * expYears.length)];
  
      //CVV
      var cvv = Math.floor(Math.random() * 1000) + 1;
      console.log(month + "/" + expYear + "  " + cvv);
    };
    return self;
  };
  
  module["exports"] = CreditCard;
  