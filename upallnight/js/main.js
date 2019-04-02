$(function() {

  $(".menu").on("click", function() {
    $(".menu__line").toggleClass("active");
    $(".gnav").fadeToggle();
  });

  $(window).on("scroll", function() {
    if ($(".menu__line").hasClass("active")) {
      $(".menu__line").removeClass("active");
      $(".gnav").fadeOut();
    }
  });

  $("#mainContents").css("display", "none");
  $("#openning2").css("display", "none");

  setTimeout(function() {
    $('#openning1').fadeOut("slow");
  }, 3000);

  setTimeout(function() {
    $("#opText1").text("「こんにちは、池くん（可変）」");
  }, 0);

  setTimeout(function() {
    $("#opText1").text("突然、鏡の中の自分に話しかけられた");
  }, 1000);

  setTimeout(function() {
    $("#opText1").text("高校2年の夏、その転機は突然訪れた…");
  }, 2000);


  setTimeout(function() {
    $("#opText2").html("変わるのは自分だ<br>変えるのは自分だ");
  }, 5000);

  setTimeout(function() {
    $("#opText2").html("全てはこれから始まる….");
  }, 7000);

  let timer2 = setInterval(function() {
    $('#openning2').animate({
      backgroundPositionY: '+=' + 0.1 + '%'
    }, 10);
  }, 10);


  setTimeout(function() {
    $("#openning2").fadeIn();
  }, 3000);


  setTimeout(function() {
    $('#openning2').fadeOut("slow");
    clearInterval(timer2);
  }, 7000);


  setTimeout(function() {
    $("#mainContents").fadeIn();
  }, 12000);

});
