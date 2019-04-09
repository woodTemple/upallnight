$(function() {

  /** キャラクター紹介 **/
  // 変数宣言
  let setId = '#allCharacter';
  let fadeTime = 1000;
  let delayTime = 5000;
  let yourName = escapeHtml(localStorage.name);

  function escapeHtml(str) {
    if (str == null || str == "") {
      return "ひろし";
    }
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
  }

  $("#yourName").text(yourName);

  // キャラクター表示処理
  function showCharacter(index) {
    switch (index) {
      case 0:
        $(setId + " #selectedCharacter .character").find("img")
          .attr({
            "src": "./img/shujinko.png",
            "alt": "主人公の画像"
          });
        $(setId + " #selectedCharacter .character").find("p")
          .html("・" + yourName + "<br>高校2年生<br>人に流されやすい性格<br>人に言われるがまま行動することが<wbr>当たり前になっている<br>BL漫画が好き<br><br>");
        break;
      case 1:
        $(setId + " #selectedCharacter .character").find("img")
          .attr({
            "src": "./img/yami_shujinko.png",
            "alt": "主人公の画像"
          });
        $(setId + " #selectedCharacter .character").find("p")
          .html("・鏡の中の自分<br>突然鏡の中に現れ、自立して話しかけてくる<br>嫌味ったらしい性格<br>" + yourName + "に苦言を呈してくるが、<br>心を読んでいるかのような、<wbr>的確な指摘をしてくる<br><br>");
        break;
      case 2:
        $(setId + " #selectedCharacter .character").find("img")
          .attr({
            "src": "./img/cutegirl.png",
            "alt": "主人公の画像"
          });
        $(setId + " #selectedCharacter .character").find("p")
          .html("・みき<br>" + yourName + "が気になっている子<br>クラス一の美少女<br>大人しい性格だが、<wbr>自分の意思をしっかり持っている<br>");
        break;
      case 3:
        $(setId + " #selectedCharacter .character").find("img")
          .attr({
            "src": "./img/friend.png",
            "alt": "主人公の画像"
          });
        $(setId + " #selectedCharacter .character").find("p")
          .html("・キテラ<br>" + yourName + "の友人<br>自分の欲望に忠実な男<br>ある日、近所の祠を不注意で壊してから、<br>不審な行動に出るように…<br>");
        break;
    }
  }

  // キャラクターのサムネイルクリック時の処理
  $(setId + ' #cnav ul li').click(function() {
    let connectCont = $(setId + ' #cnav ul li').index(this);
    showCharacter(connectCont);
    showCharacterAnimate();
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
  }, 6000);

  setTimeout(function() {
    $("#opText1").text("「こんにちは、" + yourName + "くん」");
    opFadeIn($("#opText1"));
  }, 0);

  setTimeout(function() {
    $("#opText1").text("突然、鏡の中の自分に話しかけられた");
    opFadeIn($("#opText1"));
  }, 2000);

  setTimeout(function() {
    $("#opText1").text("高校2年の夏、その転機は突然訪れた…");
    opFadeIn($("#opText1"));
  }, 4000);


  setTimeout(function() {
    $("#opText2").html("変わるのは自分だ<br>変えるのは自分だ");
    opFadeIn($("#opText2"));
  }, 7000);

  setTimeout(function() {
    $("#opText2").html("全てはこれから始まる…");
    opFadeIn($("#opText2"));
  }, 10000);

  let timer2 = setInterval(function() {
    $('#openning2').animate({
      backgroundPositionY: '+=' + 0.2 + '%'
    }, 20);
  }, 20);


  setTimeout(function() {
    $("#openning2").fadeIn();
  }, 5000);


  setTimeout(function() {
    $('#openning2').fadeOut("slow");
    clearInterval(timer2);
  }, 10500);


  setTimeout(function() {
    $("#mainContents").fadeIn();
  }, 14000);


  // Top Pageアイコン表示処理
  let topBtn = $('#page-top');
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

  //コンテンツのアニメーション
  let target = $('.inviewAction');
  target.css('opacity', '0');
  target.on('inview', function(event, isInView) {
    //表示領域に入った時にスライドイン
    if (isInView) {
      $(this).animate({
        opacity: 1
      }, 1000).addClass('slideInLeft');
    }
  });

  $('header').on('inview', function(event, isInView) {
    //表示領域に入った時にスライドイン
    if (isInView) {

      setTimeout(function() {
        $("#mainMessage1").addClass('fadeInUp');
      }, 600);

      setTimeout(function() {
        $("#mainMessage2").addClass('fadeInUp');
      }, 1500);

    }
  });



function opFadeIn(obj){
  obj.css('opacity', 0).animate({
    opacity: 1
  }, 600);
}

  //キャラクター表示時のアニメーション
  function showCharacterAnimate() {
    $('.character').removeClass('fadein');
    $('.character').css('opacity', 0);
    $('.character').stop(true).animate({
      opacity: 1
    }, 1000).addClass('fadeIn');
  }

});
