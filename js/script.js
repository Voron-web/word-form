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
         $('.complain__text').val($.trim("_________"));
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
      if (text.length < 49) {
         $('.anamnez__text').val($.trim("________________________________________________"));
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
         $('.status__text').val($.trim("____________"));
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
         $('.research__text').val($.trim("_____________________________________________________________________"));
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
      if (text.length < 77) {
         $('.help__text').val($.trim("_____________________________________________________________________________"));
      }
   }
})
