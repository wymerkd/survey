$(function () {
  $("form#questionnaire").submit(function(event) {
    event.preventDefault();
    $("#hideMe").hide();

    var total = parseInt($("input:radio[name=pizza]:checked").val());
      total += parseInt($("input:radio[name=personality]:checked").val());
      total += parseInt($("input:radio[name=time]:checked").val());
      total += parseInt($("input:radio[name=location]:checked").val());
      total += parseInt($("input:radio[name=drinks]:checked").val());

      console.log(total);

      if (total >30) {
        $("#michaelangelo").show();
      } else if (total >= 21 && total <=30) {
        $("#leonardo").show();
      } else if (total >=11 && total <=20) {
        $("#donatello").show();
      } else {
        $("#rafael").show();
      }
  ;})

;})
