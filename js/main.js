$(function() {

  const appendSection = $(".appendSection");

  $("#btn").on("click", function() {

    // ボタンの無効化
    $("#btn").hide();
    $("#loading").show();


    //TODO:日本語→英語に変換

    //TODO:apiの戻りを使用
    let items = new Array();
    items.push("こんにちは");
    items.push("ご機嫌いかがですか");
    items.push("私は元気です");
    items.push("どこにお住まいですか?");
    items.push("日本に住んでいます!");
    items.push("レイプは好きですか??");
    items.push("大好きです");


    const request = axios.create({});
    const source = "ja";
    const target = "en";

    for (let i = 0; i < items.length; i++) {
      let text = items[i];

      request.get("https://script.google.com/macros/s/AKfycbz2JEsN3EWb8ielJdvkDAnxfk_pggdnTWCg4kMPFR8M-tG0ZbmR/exec?text=" + text + "&source=ja&target=en")
        .then(function(response) {
          items[i] = response.data;
        });
    }

    setInterval(function(){},2000);

    // 結果内容格納
    let itemSize = items.length;
    let index = 0;

    // リストの数だけ繰り返す
    let id = setInterval(function() {

      //要素の生成
      let appendClass = $(`<p>${items[index]}</p>`);

      //適応するスタイルの追加
      let color = Math.floor(Math.random() * 2);
      if (color === 0) {
        appendClass.addClass("neon");
      } else {
        appendClass.addClass("flux");
      }

      // 場所の指定
      let topPosition = Math.floor(Math.random() * 80) + 10;
      appendClass.css("top", topPosition + "vh");
      let leftPosition = Math.floor(Math.random() * 70);
      appendClass.css("left", leftPosition + "vw");

      // font-sizeの指定
      let fontSize = Math.random() * 5 + 3;
      appendClass.css("font-size", fontSize + "vw");
      appendClass.css("line-height", fontSize + "vw");

      // 要素の追加
      $("#appendSection").append(appendClass);

      // ループ終了判定
      index++;
      if (itemSize === index) {
        clearInterval(id);

        // ボタンの有効化
        $("#btn").show();
        $("#loading").hide();

        console.log(items);
      }

    }, 1000);
  });

});
