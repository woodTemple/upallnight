$(function() {

  let duration = 200;

  /**
   * グローバルナビゲーション内の各ナビゲーションにマウスを乗せた時のアクション
   *  マウスをナビゲーションに乗せる：背景を紫、文字を白に変化
   *  マウスをナビゲーションから離す：背景・文字の色を元に戻す
   **/
  $("#gnav a")
    .on("mouseover", function() {
      $(this).find("> span").stop(true).animate({
        height: "100%"
      }, duration);
    })
    .on("mouseout", function() {
      $(this).find("> span").stop(true).animate({
        height: "0"
      }, duration);
    });

  /**
   * グローバルナビゲーションをステッキーヘッダーにする
   **/
  $("#gnav").each(function() {
    let $window = $(window);
    let $header = $(this);

    // ヘッダーのデフォルトの位置を取得
    let headerOffsetTop = $header.offset().top;

    // ウィンドウのスクロールイベントを監視し、スクロールを検知した際に処理を実行する
    $window.on("scroll", $.throttle(1000 / 15, function() {
      // ウィンドウのスクロール量とヘッダーのデフォルトの位置を比較する
      // スクロール量＞ヘッダーのデフォルトの位置であればstickyクラスを付与する
      // スクロール量＝＜ヘッダーのデフォルトの位置であればstickyクラスを削除する
      if ($window.scrollTop() > headerOffsetTop) {
        $header.addClass("sticky");
      } else {
        $header.removeClass("sticky");
      }
    }));
    // ウィンドウのスクロールイベントを発生させる。
    $window.trigger("scroll");
  });


  $("#mainContents").css("display", "none");
  $("#openning2").css("display", "none");

  setTimeout(function() {
    $('#openning1').fadeOut("slow")
  }, 3000);

  setInterval(function() {
    $('#openning1').animate({
      backgroundPositionY: '+=' + 0.1 + '%'
    }, 5);
  }, 10);

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

  setInterval(function() {
    $('#openning2').animate({
      backgroundPositionY: '+=' + 0.1 + '%'
    }, 10);
  }, 10);


  setTimeout(function() {
    $("#openning2").fadeIn();
  }, 3000);


  setTimeout(function() {
    $('#openning2').fadeOut("slow");
  }, 7000);


  setTimeout(function() {
    $("#mainContents").fadeIn();
  }, 11000);

});
