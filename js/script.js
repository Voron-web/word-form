
function space(x) {
   let string = "";
   for (i = 1; i <= x; i++) {
      // let string="";
      string += " "
      //   console.log("&nbsp");
   };
   // console.log(string);
   return string;
}


$(function () {
   $('.complain__text').on('keypress', function (event) {
      var text = $('.complain__text').val();
      var lines = text.split("\n");
      var currentLine = this.value.substr(0, this.selectionStart).split("\n").length;
      if (event.keyCode == 13) {
         if (lines.length >= $(this).attr('rows'))
            return false;
      }
      else {
         if (lines[currentLine - 1].length >= $(this).attr('cols')) {
            if (lines.length <= $(this).attr('rows') - 1) {
               $(this).val(text + '\n');
            } else {
               return false;
            }
         }
      }
   });
});

$('.complain__text').on('keyup', function (event) {
   var text = $('.complain__text').val();
   if (event.keyCode == 8 || event.keyCode == 46) {
      if (text.length < 9) {
         // $('.complain__text').val($.trim("&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp"));
         $('.complain__text').val(space(9));
      }
   }
})

$(function () {
   $('.anamnez__text').on('keypress', function (event) {
      var text = $('.anamnez__text').val();
      var lines = text.split("\n");
      var currentLine = this.value.substr(0, this.selectionStart).split("\n").length;
      if (event.keyCode == 13) {
         // console.log("777");
         if (lines.length >= $(this).attr('rows'))
            return false;
      }
      else {
         if (lines[currentLine - 1].length >= $(this).attr('cols')) {
            if (lines.length <= $(this).attr('rows') - 1) {
               $(this).val(text + '\n');
            } else {
               return false;
            }
         }
      }
   });
});
$('.anamnez__text').on('keyup', function (event) {
   var text = $('.anamnez__text').val();
   if (event.keyCode == 8 || event.keyCode == 46) {
      if (text.length < 51) {
         $('.anamnez__text').val(space(46));
      }
   }
})
$(function () {
   $('.status__text').on('keypress', function (event) {
      var text = $('.status__text').val();
      var lines = text.split("\n");
      var currentLine = this.value.substr(0, this.selectionStart).split("\n").length;
      if (event.keyCode == 13) {
         // console.log("777");
         if (lines.length >= $(this).attr('rows'))
            return false;
      }
      else {
         if (lines[currentLine - 1].length >= $(this).attr('cols')) {
            if (lines.length <= $(this).attr('rows') - 1) {
               $(this).val(text + '\n');
            } else {
               return false;
            }
         }
      }
   });
});
$('.status__text').on('keyup', function (event) {
   var text = $('.status__text').val();
   if (event.keyCode == 8 || event.keyCode == 46) {
      if (text.length < 12) {
         $('.status__text').val(space(12));
      }
   }
})
$(function () {
   $('.research__text').on('keypress', function (event) {
      var text = $('.research__text').val();
      var lines = text.split("\n");
      var currentLine = this.value.substr(0, this.selectionStart).split("\n").length;
      if (event.keyCode == 13) {
         // console.log("777");
         if (lines.length >= $(this).attr('rows'))
            return false;
      }
      else {
         if (lines[currentLine - 1].length >= $(this).attr('cols')) {
            if (lines.length <= $(this).attr('rows') - 1) {
               $(this).val(text + '\n');
            } else {
               return false;
            }
         }
      }
   });
});
$('.research__text').on('keyup', function (event) {
   var text = $('.research__text').val();
   if (event.keyCode == 8 || event.keyCode == 46) {
      if (text.length < 69) {
         $('.research__text').val(space(69));
      }
   }
})
$(function () {
   $('.help__text').on('keypress', function (event) {
      var text = $('.help__text').val();
      var lines = text.split("\n");
      var currentLine = this.value.substr(0, this.selectionStart).split("\n").length;
      if (event.keyCode == 13) {
         // console.log("777");
         if (lines.length >= $(this).attr('rows'))
            return false;
      }
      else {
         if (lines[currentLine - 1].length >= $(this).attr('cols')) {
            if (lines.length <= $(this).attr('rows') - 1) {
               $(this).val(text + '\n');
            } else {
               return false;
            }
         }
      }
   });
});
$('.help__text').on('keyup', function (event) {
   var text = $('.help__text').val();
   if (event.keyCode == 8 || event.keyCode == 46) {
      if (text.length < 82) {
         $('.help__text').val(space(76));
      }
   }
})
