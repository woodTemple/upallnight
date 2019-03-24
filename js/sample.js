class Sample {

  constructor() {
    this.name = "ti";
    let list = new Array();
    list.push("a");
    list.push("b");
    list.push("c");
    this.list = list;
  }

  getName() {
    return this.name;
  }

  getList() {
    return this.list;
  }

}

/*
let sample = new Sample();
let name = sample.getName();
let items = "";
for (let item of sample.getList()) {
  items += item;
  if (item === "c") {
    window.alert(item);
  }
}


  let inScript = document.getElementById("inScript");
  inScript.innerText = "OK";
  inScript.textContent = "a";
  let aList = document.querySelectorAll("li a");
  for (let i = 0; i < aList.length; i++) {
    inScript.innerText += aList.item(i).innerText;
  }

  let childCon = document.getElementById("contents").childNodes;
  for (let j = 0; j < childCon.length; j++) {
    console.log(childCon.length);
    console.log(childCon.item(j).nodeName);
  }
*/

try {

  /*
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", function() {
      //window.alert("ちんこ");
      document.getElementById("btn").setAttribute("value", "ちんこ");
      document.getElementById("btn").getAttribute("");
    }, false);

    document.getElementById("contents").addEventListener("mouseover", function() {
      let aElement = document.createElement("a");
      aElement.href = "";
      let aText = document.createTextNode("tin");
      aElement.appendChild(aText);
      let addC = document.getElementById("addC");
      addC.appendChild(aElement);
    }, false);

  }, false);
  */

  $(function() {
    $("#mainCon").css("display", "none");
    setTimeout(function() {
      $('#openning').fadeOut("slow");
    }, 3000);

    let storage = localStorage;
    setTimeout(function() {
      $("#opText").text("「 ねえ、" + storage.name + "って知ってる？ 」");
    }, 0);

    setTimeout(function() {
      $("#opText").html("「 日没後、數十分だけ体感できる、<br>空が魔法のような薄明かりに包まれる時間帯を<br>"+storage.name +"って言うんだって 」");
    }, 1500);

    setInterval(function() {
      $('#openning').animate({
        backgroundPositionY: '+=' + 0.1 + '%'
      }, 5);
    }, 10);


    setTimeout(function() {
      $("#mainCon").fadeIn();
    }, 4000);

  });

$(function(){
  $("#glasses").on("inview", function(){
    $("#glasses").css("fontSize", "40px");
});
});



} catch (e) {
  console.log(e.message);
}
