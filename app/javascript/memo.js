function post (){
  //リクエストを送信する処理
  const submit = document.getElementById("submit");
  // eはイベントオブジェクトを指していて文字はなんでも構わないけれどeventで慣例的に使われている
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form")
    // formデータを格納容器を作り格納します
    const formData = new FormData(form);
    // 非同期通信を新しく作ります。
    const XHR = new XMLHttpRequest();
    // XHR.open("httpメソ", "パス", 非同期通信をするtrueしないfalse)
    XHR.open("POST", "/posts", true)
    // jsonのjsのオブジェクト表記のフォーマット型を使います。
    XHR.responseType ="json";
    // XMLHttpRequestオブジェクトsendを使ってformDataを送ります
    XHR.send(formData);
   });
 }
 
 window.addEventListener('load', post);