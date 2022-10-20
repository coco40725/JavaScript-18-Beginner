/*
* 以下寫法 仍無法成功執行:
* 因為當瀏覽器遇到 外部js時，會暫停加載，跑去加載 js 的內容，而此時 DOM 還沒加載完畢，
* 因此下方程式碼中的 content 會呈現 null;
* */
let content = document.getElementById("btn");
alert(content);

/*
* 正確的寫法:
* 待 DOM 加載完畢後，再加載。為了達到此效果，可以考慮使用
*  1. window.onload = function(){
*  Do something .....
* }
* 或者
* 2. document.ready = function(){
* Do something .....
*  }
* ------------------------
* window.onload 為加載完 dom + 所有外部文件 後，再執行
* document.ready  為加載完 dom 後，再執行
* */


window.onload = function (){
    alert("大家好!");
    let content1 = document.getElementById("btn");
    content1.innerHTML = "從window.onload修改內容!!";
}