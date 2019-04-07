$(function() {

  /** キャラクター紹介 **/
  // 変数宣言
  let setId = '#allCharacter';
  let fadeTime = 1000;
  let delayTime = 5000;
  let storage = localStorage;

$("#yourName").text(storage.name);

  // キャラクター表示処理
  function showCharacter(index) {
    switch (index) {
      case 0:
        $(setId + " #selectedCharacter .character").find("img")
          .attr({
            "src": "./img/shujinko.jpg",
            "alt": "主人公の画像"
          });
        $(setId + " #selectedCharacter .character").find("p")
          .html("・"+storage.name+"<br>高校2年生<br>人に流されやすい性格<br>人に言われるがまま行動することが当たり前になっている<br>BL漫画が好き<br><br>");
        break;
      case 1:
        $(setId + " #selectedCharacter .character").find("img")
          .attr({
            "src": "./img/yami_shujinko.png",
            "alt": "主人公の画像"
          });
        $(setId + " #selectedCharacter .character").find("p")
          .html("・鏡の中の自分<br>突然鏡の中に現れ、自立して話しかけてくる<br>嫌味ったらしい性格<br>"+storage.name+"に苦言を呈してくるが、<br>心を読んでいるかのような、的確な指摘をしてくる<br><br>");
        break;
      case 2:
        $(setId + " #selectedCharacter .character").find("img")
          .attr({
            "src": "./img/cutegirl.jpg",
            "alt": "主人公の画像"
          });
        $(setId + " #selectedCharacter .character").find("p")
          .html("・ヒロイン(みき)<br>"+storage.name+"が気になっている子<br>クラス一の美少女<br>大人しい性格だが、自分の意思をしっかり持っている<br>");
        break;
      case 3:
        $(setId + " #selectedCharacter .character").find("img")
          .attr({
            "src": "./img/friend.jpg",
            "alt": "主人公の画像"
          });
        $(setId + " #selectedCharacter .character").find("p")
          .html("・キテラ<br>"+storage.name+"の友人<br>長身・でぶ<br>自分の欲望に忠実な男<br>ある日、近所の祠を不注意で壊してから、<br>不審な行動に出るように…<br>");
        break;
    }
  }

  // キャラクターのサムネイルクリック時の処理
  $(setId + ' #cnav ul li').click(function() {
    let connectCont = $(setId + ' #cnav ul li').index(this);
    showCharacter(connectCont);
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  // サムネイルにマウスを乗せた時の処理
  $(setId + ' #cnav ul li:not(.active)').hover(function() {
    $(this).stop().animate({
      opacity: '1'
    }, 200);
  }, function() {
    $(this).stop().animate({
      opacity: '0.5'
    }, 200);
  });

  // キャラクター初期表示
  showCharacter(0);
  $(setId + ' #cnav ul li').css({
    opacity: '0.5'
  });
  $(setId + ' #cnav ul li:first').addClass('active');

  /** メニュー画面の処理 **/
  // メニュー画面表示・非表示切り替え処理
  $(".menu").on("click", function() {
    $(".menu__line").toggleClass("active");
    $(".gnav").fadeToggle();
  });

  // メニュー画面を表示している時にスクロールした時の処理
  $(window).on("scroll", $.throttle(1000 / 10, function() {
    if ($(".menu__line").hasClass("active")) {
      $(".menu__line").removeClass("active");
      $(".gnav").fadeOut();
    }
  }));

  // オープニング処理
  $("#mainContents").css("display", "none");
  $("#openning2").css("display", "none");

  setTimeout(function() {
    $('#openning1').fadeOut("slow");
  }, 4000);

  setTimeout(function() {
    $("#opText1").text("「こんにちは、" + storage.name + "くん」");
  }, 0);

  setTimeout(function() {
    $("#opText1").text("突然、鏡の中の自分に話しかけられた");
  }, 2000);

  setTimeout(function() {
    $("#opText1").text("高校2年の夏、その転機は突然訪れた…");
  }, 3000);


  setTimeout(function() {
    $("#opText2").html("変わるのは自分だ<br>変えるのは自分だ");
  }, 5000);

  setTimeout(function() {
    $("#opText2").html("全てはこれから始まる….");
  }, 8000);

  let timer2 = setInterval(function() {
    $('#openning2').animate({
      backgroundPositionY: '+=' + 0.2 + '%'
    }, 20);
  }, 20);


  setTimeout(function() {
    $("#openning2").fadeIn();
  }, 3000);


  setTimeout(function() {
    $('#openning2').fadeOut("slow");
    clearInterval(timer2);
  }, 7000);


  setTimeout(function() {
    $("#mainContents").fadeIn();
  }, 11500);

  // Top Pageアイコン表示処理
  var topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
