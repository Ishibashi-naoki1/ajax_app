const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html
}

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
    // リクエストが送信完了後に行う処理をする時に定義するのがXHR.onload
    XHR.onload = () =>{
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
   });
 }
 
 window.addEventListener('load', post);