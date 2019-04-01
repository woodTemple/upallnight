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
       $window.on("scroll",  $.throttle(1000 / 15, function () {
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
});
