$(document).ready(function(){

  $('#wrapper').ripples({ //波紋をつけたい要素の指定
    resolution: 800, //波紋の広がりの速度（値が大きいほど遅くなる）
    dropRadius: 20, //波紋の大きさ（値が大きいほどでかくなる）
    perturbance: 0.02 //波紋による屈折量（値が大きいほどブレる）
  });

   $('.nice-textbox').blur(function() {
        if($(this).val().length === 0){
          $('.nice-label').removeClass("focus");
        }
        else { returns; }
      })
      .focus(function() {
        $('.nice-label').addClass("focus")
      });
});

$(function(){

  $(".btn-real").on("click", function(){
    let name = $(".nice-textbox").val();
    let storage = localStorage;
    storage.setItem("name", name);
    if (confirm('本当によろしいですか？')) {
    window.location.href = './index.html';
  }
  });

});
