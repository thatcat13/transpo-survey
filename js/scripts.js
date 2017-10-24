$(document).ready(function() {
  $("form#work-transpo").submit(function(event) {
    event.preventDefault();
    $("#work").show();
    $("input:checkbox[name=work-transpo]:checked").each(function() {
      var workMode = $(this).val();
      $("#work").append(workMode + "<br>");
    });

    $("#work-transpo").hide();



  });
});
