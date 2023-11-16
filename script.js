$(function () {
  
  $(".saveBtn").on("click", function () {
 
    var blockID = $(this).parent().attr("id");

    var userInput = $(this).siblings("textarea").val();

   
    localStorage.setItem(blockID, userInput);
  });

  function populateTextareas() {
    $(".time-block").each(function () {
    
      var blockID = $(this).attr("id");

 
      var storedInput = localStorage.getItem(blockID);


      $(this).find("textarea").val(storedInput);
    });
  }

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  populateTextareas();
});
