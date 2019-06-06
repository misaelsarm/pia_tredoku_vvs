var matrix = [7, 4, 8, 2, 9, 5, 6, 3, 1, 5, 6, 3, 1, 7, 8, 9, 4, 2, 2, 1, 9, 4, 6, 3, 7, 5, 8,
                     7, 6, 9, 8, 3, 5, 2, 8, 3, 1, 5, 4, 5, 3, 8, 4, 2, 1, 4, 6, 7, 3, 9, 8, 4, 2, 1,
                     9, 7, 6, 1, 9, 5, 2, 6, 7, 6, 9, 7, 6, 5, 4, 8, 7, 9, 1, 5, 2, 8, 7, 1, 3, 2, 4,
                     3, 8, 4, 9, 3, 2, 5, 1, 6];

       var game = [];

       var refreshRate = 1000/30;

       function refresh(){
         setInterval(comparison, refreshRate);
       }

       function comparison() {
         for (var i = 0; i < 90; i++){
           var f = i.toString();
           var val = document.getElementById(f);
           var s = val.value;
           var pos = parseInt(val.name);
           game[pos] = s;
           if (game[pos] == matrix[pos]) {
               document.getElementById(f).style.color = "black";
           } else {
               document.getElementById(f).style.color = "red";
           }
         }
       }
