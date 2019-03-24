
$(function(){

  $("#submit").on("click", function(){
    let name = $("#name").val();
    let storage = localStorage;
    storage.setItem("name", name);
    if (confirm('本当によろしいですか？')) {
    window.location.href = './sample.html';
  }
  });

});
