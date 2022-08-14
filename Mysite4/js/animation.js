'use strict';

//要素取得部分
let   num        =0;
let   count      =0;
let   num2       =0;
const 再生       = document.getElementById('再生');
const start      = document.getElementById('ボタン');
const h1         = document.getElementById('タイトル');
const h2         = document.getElementById('見出し');
const 問題１     = document.getElementById('問題１');
const 文１       = document.getElementById('文１');
const コーヒー   = document.getElementById('コーヒー');
const 紅茶       = document.getElementById('紅茶');
const 正解１     = document.getElementById('正解１');
const 解説１     = document.getElementById('解説１');
const 次の問題１ = document.getElementById('次の問題１');
const 残念１     = document.getElementById('残念１');
const 解説２     = document.getElementById('解説２');
const 次の問題２ = document.getElementById('次の問題２');
const 問題２     = document.getElementById('問題２');
const 文２       = document.getElementById('文２');
const 藤木書店   = document.getElementById('藤木書店');
const 藤代書店   = document.getElementById('藤代書店');
const 小糸書店   = document.getElementById('小糸書店');
const 藤森書店   = document.getElementById('藤森書店');
const 正解２     = document.getElementById('正解２');
const 写真１     = document.getElementById('写真１');
const 解説３     = document.getElementById('解説３');
const 次の問題３ = document.getElementById('次の問題３');
const 残念２     = document.getElementById('残念２');
const 写真２     = document.getElementById('写真２');
const 解説４     = document.getElementById('解説４');
const 次の問題４ = document.getElementById('次の問題４');
const 問題３     = document.getElementById('問題３');
const 文３       = document.getElementById('文３');
const 近見東高校 = document.getElementById('近見東高校');
const 遠見束高校 = document.getElementById('遠見束高校');
const 遠見東高校 = document.getElementById('遠見東高校');
const 遠見西高校 = document.getElementById('遠見西高校');
const 正解３     = document.getElementById('正解３');
const 写真３     = document.getElementById('写真３');
const 解説５     = document.getElementById('解説５');
const 次の問題５ = document.getElementById('次の問題５');
const 残念３     = document.getElementById('残念３');
const 写真４     = document.getElementById('写真４');
const 解説６     = document.getElementById('解説６');
const 次の問題６ = document.getElementById('次の問題６');
const 問題４     = document.getElementById('問題４');
const 文４       = document.getElementById('文４');
const 赤色       = document.getElementById('赤色');
const 青色       = document.getElementById('青色');
const 黄色       = document.getElementById('黄色');
const 深緑色     = document.getElementById('深緑色');
const 正解４     = document.getElementById('正解４');
const 写真５     = document.getElementById('写真５');
const 解説７     = document.getElementById('解説７');
const 次の問題７ = document.getElementById('次の問題７');
const 残念４     = document.getElementById('残念４');
const 写真６     = document.getElementById('写真６');
const 解説８     = document.getElementById('解説８');
const 次の問題８ = document.getElementById('次の問題８');
const 問題５     = document.getElementById('問題５');
const 文５       = document.getElementById('文５');
const 七月       = document.getElementById('７月');
const 五月       = document.getElementById('５月');
const 二月       = document.getElementById('２月');
const 九月       = document.getElementById('９月');
//１１ページ目の部分　正解バージョン
const 正解５     = document.getElementById('正解５');
const 写真７     = document.getElementById('写真７');
const 解説９     = document.getElementById('解説９');
const 次の問題９ = document.getElementById('次の問題９');
//１１ページ目の部分　不正解バージョン
const 残念５       = document.getElementById('残念５');
const 写真８       = document.getElementById('写真８');
const 解説１０     = document.getElementById('解説１０');
const 次の問題１０ = document.getElementById('次の問題１０');
//１２ページ目の部分
const 問題６       = document.getElementById('問題６');
const 文６         = document.getElementById('文６');
const 雫           = document.getElementById('雫');
const 零           = document.getElementById('零');
const 澪           = document.getElementById('澪');
const 霈           = document.getElementById('霈');
//１３ページ目の部分　正解バージョン
const 正解６       = document.getElementById('正解６');
const 写真９       = document.getElementById('写真９');
const 解説１１     = document.getElementById('解説１１');
const 次の問題１１ = document.getElementById('次の問題１１');
//１３ページ目の部分　不正解バージョン
const 残念６       = document.getElementById('残念６');
const 写真１０     = document.getElementById('写真１０');
const 解説１２     = document.getElementById('解説１２');
const 次の問題１２ = document.getElementById('次の問題１２');
//１４ページ目の問題
const 問題７             = document.getElementById('問題７');
const 文７               = document.getElementById('文７');
const 写真１１           = document.getElementById('写真１１');
const パンダツノウミウシ = document.getElementById('パンダツノウミウシ');
const ダイアナウミウシ   = document.getElementById('ダイアナウミウシ');
const エリザベスウミウシ = document.getElementById('エリザベスウミウシ');
const シロウミウシ       = document.getElementById('シロウミウシ');
//１５ページ目の部分　正解バージョン
const 正解７             = document.getElementById('正解７');
const 解説１３           = document.getElementById('解説１３');
const 次の問題１３       = document.getElementById('次の問題１３');
//１５ページ目の部分　不正解バージョン
const 残念７             = document.getElementById('残念７');
const 解説１４           = document.getElementById('解説１４');
const 次の問題１４       = document.getElementById('次の問題１４');
//１６ページ目の部分
const 問題８             = document.getElementById('問題８');
const 文８               = document.getElementById('文８');
const 七海燈子           = document.getElementById('七海燈子');
const 日向朱里           = document.getElementById('日向朱里');
const 堂島卓             = document.getElementById('堂島卓');
const 市ヶ谷知雪         = document.getElementById('市ヶ谷知雪');
//１７ページ目の部分　正解バージョン
const 正解８             = document.getElementById('正解８');
const 写真１２           = document.getElementById('写真１２');
const 解説１５           = document.getElementById('解説１５');
const 次の問題１５       = document.getElementById('次の問題１５');
//１７ページ目の部分　不正解バージョン
const 残念８             = document.getElementById('残念８');
const 写真１３           = document.getElementById('写真１３');
const 解説１６           = document.getElementById('解説１６');
const 次の問題１６       = document.getElementById('次の問題１６');
//１８ページ目の部分
const 問題９             = document.getElementById('問題９');
const 文９               = document.getElementById('文９');
const 写真１４           = document.getElementById('写真１４');
const ニシキチン         = document.getElementById('ニシキチン');
const チンニシキ         = document.getElementById('チンニシキ');
//１９ページ目の部分　正解バージョン
const 正解９             = document.getElementById('正解９');
const 解説１７           = document.getElementById('解説１７');
const 次の問題１７       = document.getElementById('次の問題１７');
//１９ページ目の部分　不正解バージョン
const 残念９             = document.getElementById('残念９');
const 解説１８           = document.getElementById('解説１８');
const 次の問題１８       = document.getElementById('次の問題１８')
//２０ページ目の部分
const 問題１０             = document.getElementById('問題１０');
const 文１０               = document.getElementById('文１０');
const 素直じゃないんだから = document.getElementById('素直じゃないんだから');
const ふたつの吐息         = document.getElementById('ふたつの吐息');
const そよぐ風と木漏れ日   = document.getElementById('そよぐ風と木漏れ日');
const 回遊する想い         = document.getElementById('回遊する想い');
//２１ページ部分　正解バージョン
const 正解１０             = document.getElementById('正解１０');
const 解説１９             = document.getElementById('解説１９');
const 結果１               = document.getElementById('結果１');
//２１ページ部分　不正解バージョン
const 残念１０             = document.getElementById('残念１０');
const 解説２０             = document.getElementById("解説２０");
const 結果２               = document.getElementById('結果２');
//２２ページ部分
const 正解数               = document.getElementById('正解数');
const 文１１               = document.getElementById('文１１');
const 文１２               = document.getElementById('文１２');
const 文１３               = document.getElementById('文１３');
const 文１５               = document.getElementById('文１５');
const 文１６               = document.getElementById('文１６');
const リンク               = document.getElementById('リンク');
const シェア               = document.getElementById('シェア');
//コンソール表示部分
console.log(num);

//スタートボタンを押したときのイベント設定
start.addEventListener('click', () => {
  num2++;

  alert('このセンター試験では、制限時間、クイズに正解した時、不正解した時に音が鳴ります！\n音を出せる場所ではない時は、音量を小さくして、楽しんでください！');

  $('#ボタン').css('opacity', 0);  //ここでスタートボタンがクリックされて、クリックを離した瞬間にスタートボタンが消えるようにしている
  
  $(start).remove();  //ここでスタートボタンがクリックされたらスタートボタンの要素を削除している
  $(h1).remove();  //ここでスタートボタンがクリックされたらタイトルの要素を削除している
  $(h2).remove();  //ここでスタートボタンがクリックされたら見出しの要素を削除している

  問題１.classList.remove('hidden');  //ここでスタートボタンがクリックされたら問題１のテキストが表示されるようにしている
  $(問題１).css('position','relative');
  $(問題１).css('animation','anime1 2s ease');  //ここで問題１の要素にアニメーションを加えている

  文１.classList.remove('hidden');  //ここでスタートボタンがクリックされたら文１のテキストが表示されるようにしている
  $(文１).css('position','relative');
  $(文１).css('animation','anime1 2s ease');  //ここで文１の要素にアニメーションを加えている

  タイマー.classList.remove('hidden');
  $(タイマー).css('position','relative').css('animation','anime1 2s ease');
  ct();
  start1();

  コーヒー.classList.remove('hidden');  //ここでスタートボタンがクリックされたらコーヒーが表示されるようにしている
  $(コーヒー).css('position','relative').css('animation','anime1 2s ease');  //ここでコーヒーの要素にアニメーションを加えている

  紅茶.classList.remove('hidden');  //ここでスタートボタンがクリックされたら紅茶が表示されるようにしている
  $(紅茶).css('position','relative').css('animation','anime1 2s ease');  //ここで紅茶の要素にアニメーションを加えている
});

//コーヒーボタンを押したときのイベント設定　正解バージョン！
コーヒー.addEventListener('click', () => {
  $('#コーヒー').css('opacity', 0);  //ここでコーヒーボタンが押されて、クリックを離した瞬間にコーヒーの要素が消えるようにしている

  num++;  //ここでnumの値を１だけ増やしている
  console.log(num);

  stop();
  正解.play();

  $(問題１).remove();  //ここでコーヒーボタンがクリックされたら問題１の要素を削除している
  $(文１).remove();  //ここでコーヒーボタンがクリックされたら文１の要素を削除している
  $(タイマー).remove();
  $(選択肢１).remove();  //ここでコーヒーボタンがクリックされたら選択肢１の要素を削除している

  正解１.classList.remove('hidden');  //ここでコーヒーボタンがクリックされたら正解！が表示されるようにしている
  $(正解１).css('position','relative');
  $(正解１).css('animation','anime1 2s ease');  //ここで正解１の要素にアニメーションを加えている

  解説１.classList.remove('hidden');  //ここでコーヒーボタンがクリックされたら解説が表示されるようにしている
  $(解説１).css('position','relative');
  $(解説１).css('animation','anime1 2s ease');  //ここで解説１の要素にアニメーションを加えている

  次の問題１.classList.remove('hidden');  //ここでコーヒーボタンがクリックされたら次の問題へボタンが表示されるようにしている
})

//紅茶ボタンを押したときのイベント設定　不正解バージョン！
紅茶.addEventListener('click', () => {
  $('#紅茶').css('opacity', 0);  //ここで紅茶ボタンが押されて、クリックを離した瞬間に紅茶の要素が消えるようにしている

  stop();
  ハズレ.play();

  $(問題１).remove();
  $(文１).remove();
  $(タイマー).remove();
  $(コーヒー).remove();
  $(紅茶).remove();
  $(正解１).remove();
  $(解説１).remove();
  $(次の問題１).remove();

  //残念バージョンの場合、すでにHTMLファイルの上の行に正解バージョンも書かれているので、それも削除すること！

  残念１.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら残念！が表示されるようにしている
  $(残念１).css('position','relative').css('animation','anime1 2s ease');  //ここで残念１の要素にアニメーションを加えている

  解説２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら解説２が表示されるようにしている
  $(解説２).css('position','relative').css('animation','anime1 2s ease');  //ここで解説２の要素にアニメーションを加えている

  次の問題２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら次の問題２が表示されるようにしている
})

//問題１に正解して、次の問題へを押したときのイベント設定
次の問題１.addEventListener('click', () => {
  $('#次の問題１').css('opacity', 0);  //ここでボタンが押された瞬間に要素が消されるようにしている

  $(正解１).remove();  //正解１の要素を削除している
  $(解説１).remove();  //解説１の要素を削除している
  $(次の問題１).remove();  //次の問題１の要素を削除している
  $(残念１).remove();  //残念１の要素を削除している
  $(解説２).remove();  //解説２の要素を削除している
  $(次の問題２).remove();  //次の問題２の要素を削除している

  //正解バージョンの場合、正解の要素だけでなく、不正解の要素もあるので、計６個の要素を削除すること！

  問題２.classList.remove('hidden');  //問題２の要素を表示させている
  $(問題２).css('position','relative').css('animation','anime1 2s ease');  //ここで問題２の要素にアニメーションを加えている

  文２.classList.remove('hidden');  //文２の要素を表示させている
  $(文２).css('position','relative').css('animation','anime1 2s ease');  //ここで文２の要素にアニメーションを加えている

  タイマー２.classList.remove('hidden');
  $(タイマー２).css('position','relative').css('animation','anime1 2s ease');
  ct2();
  start2();

  藤木書店.classList.remove('hidden');  //藤木書店の要素を表示させている
  $(藤木書店).css('position','relative').css('animation','anime1 2s ease');  //ここで藤木書店の要素にアニメーションを加えている

  藤代書店.classList.remove('hidden');  //藤代書店の要素を表示させている
  $(藤代書店).css('position','relative').css('animation','anime1 2s ease');  //ここで藤代書店の要素にアニメーションを加えている

  小糸書店.classList.remove('hidden');  //小糸書店の要素を表示させている
  $(小糸書店).css('position','relative').css('animation','anime1 2s ease');  //ここで小糸書店の要素にアニメーションを加えている

  藤森書店.classList.remove('hidden');  //藤森書店の要素を表示させている
  $(藤森書店).css('position','relative').css('animation','anime1 2s ease');  //ここで藤森書店の要素にアニメーションを加えている
})

//問題１に不正解して、次の問題へを押したときのイベント設定
次の問題２.addEventListener('click', () => {
  $('#次の問題２').css('opacity', 0);  //次の問題２のボタンの要素を隠している

  $(残念１).remove();  //残念１の要素を削除している
  $(解説２).remove();  //解説２の要素を削除している
  $(次の問題２).remove();  //次の問題２の要素を削除している

  //不正解バージョンの場合、正解バージョンの要素はすでに削除されているので、削除する要素は３個だけでよい！

  問題２.classList.remove('hidden');  //問題２の要素を表示させている
  $(問題２).css('position','relative').css('animation','anime1 2s ease');  //ここで問題２の要素にアニメーションを加えている

  文２.classList.remove('hidden');  //文２の要素を表示させている
  $(文２).css('position','relative').css('animation','anime1 2s ease');  //ここで文２の要素にアニメーションを加えている

  タイマー２.classList.remove('hidden');
  $(タイマー２).css('position','relative').css('animation','anime1 2s ease');
  ct2();
  start2();

  藤木書店.classList.remove('hidden');  //藤木書店の要素を表示させている
  $(藤木書店).css('position','relative').css('animation','anime1 2s ease');  //ここで藤木書店の要素にアニメーションを加えている

  藤代書店.classList.remove('hidden');  //藤代書店の要素を表示させている
  $(藤代書店).css('position','relative').css('animation','anime1 2s ease');  //ここで藤代書店の要素にアニメーションを加えている

  小糸書店.classList.remove('hidden');  //小糸書店の要素を表示させている
  $(小糸書店).css('position','relative').css('animation','anime1 2s ease');  //ここで小糸書店の要素にアニメーションを加えている

  藤森書店.classList.remove('hidden');  //藤森書店の要素を表示させている
  $(藤森書店).css('position','relative').css('animation','anime1 2s ease');  //ここで藤森書店の要素にアニメーションを加えている
})

//藤木書店ボタンを押したときのイベント設定　不正解バージョン！
藤木書店.addEventListener('click', () => {
  $('#藤木書店').css('opacity', 0);  //藤木書店のボタンを削除している

  stop();
  ハズレ.play();

  $(問題２).remove();  //問題２の要素を削除している
  $(文２).remove();  //文２の要素を削除している
  $(タイマー２).remove();
  $(藤木書店).remove();  //藤木書店の要素を削除している
  $(藤代書店).remove();  //藤代書店の要素を削除している
  $(小糸書店).remove();  //小糸書店の要素を削除している
  $(藤森書店).remove();  //藤森書店の要素を削除している
  $(正解２).remove();  //正解２の要素を削除している
  $(写真１).remove();  //写真１の要素を削除している
  $(解説３).remove();  //解説３の要素を削除している
  $(次の問題３).remove();  //次の問題３の要素を削除している

  残念２.classList.remove('hidden');  //残念２の要素を表示させている
  $(残念２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念２の要素にアニメーションを加えている

  写真２.classList.remove('hidden');  //写真２の要素を表示させている
  $(写真２).css('position','relative').css('animation','anime1 2s ease');  //ここで写真２の要素にアニメーションを加えている

  解説４.classList.remove('hidden');  //解説４の要素を表示させている
  $(解説４).css('position','relative').css('animation','anime1 2s ease');  //ここで解説４の要素にアニメーションを加えている

  次の問題４.classList.remove('hidden');  //次の問題４の要素を表示させている
})

//藤代書店ボタンを押したときのイベント設定　正解バージョン！
藤代書店.addEventListener('click', () => {
  $('#藤代書店').css('opacity', 0);  //藤代書店のボタンを削除している

  stop();
  正解.play();

  num++;  //ここでnumの値を１だけ増やしている
  console.log(num);

  $(問題２).remove();  //問題２の要素を削除している
  $(文２).remove();  //文２の要素を削除している
  $(タイマー２).remove();
  $(藤木書店).remove();  //藤木書店の要素を削除している
  $(藤代書店).remove();  //藤代書店の要素を削除している
  $(小糸書店).remove();  //小糸書店の要素を削除している
  $(藤森書店).remove();  //藤森書店の要素を削除している

  正解２.classList.remove('hidden');  //ここで正解！を表示させている
  $(正解２).css('position','relative').css('animation','anime1 2s ease');  //ここで正解２の要素にアニメーションを加えている

  写真１.classList.remove('hidden');  //ここで正解！を表示させている
  $(写真１).css('position','relative').css('animation','anime1 2s ease');  //ここで写真１の要素にアニメーションを加えている

  解説３.classList.remove('hidden');  //ここで解説３を表示させている
  $(解説３).css('position','relative').css('animation','anime1 2s ease');  //ここで解説３の要素にアニメーションを加えている

  次の問題３.classList.remove('hidden');  //ここで次の問題へを表示させている
})

//小糸書店ボタンを押したときのイベント設定　不正解バージョン！
小糸書店.addEventListener('click', () => {
  $('#小糸書店').css('opacity', 0);  //小糸書店のボタンを削除している

  stop();
  ハズレ.play();

  $(問題２).remove();  //問題２の要素を削除している
  $(文２).remove();  //文２の要素を削除している
  $(タイマー２).remove();
  $(藤木書店).remove();  //藤木書店の要素を削除している
  $(藤代書店).remove();  //藤代書店の要素を削除している
  $(小糸書店).remove();  //小糸書店の要素を削除している
  $(藤森書店).remove();  //藤森書店の要素を削除している
  $(正解２).remove();  //正解２の要素を削除している
  $(写真１).remove();  //写真１の要素を削除している
  $(解説３).remove();  //解説３の要素を削除している
  $(次の問題３).remove();  //次の問題３の要素を削除している

  残念２.classList.remove('hidden');  //残念２の要素を表示させている
  $(残念２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念２の要素にアニメーションを加えている

  写真２.classList.remove('hidden');  //写真２の要素を表示させている
  $(写真２).css('position','relative').css('animation','anime1 2s ease');  //ここで写真２の要素にアニメーションを加えている

  解説４.classList.remove('hidden');  //解説４の要素を表示させている
  $(解説４).css('position','relative').css('animation','anime1 2s ease');  //ここで解説４の要素にアニメーションを加えている

  次の問題４.classList.remove('hidden');  //次の問題４の要素を表示させている
})

//藤森書店ボタンを押したときのイベント設定　不正解バージョン！
藤森書店.addEventListener('click', () => {
  $('#藤森書店').css('opacity', 0);  //藤森書店のボタンを削除している

  stop();
  ハズレ.play();

  $(問題２).remove();  //問題２の要素を削除している
  $(文２).remove();  //文２の要素を削除している
  $(タイマー２).remove();
  $(藤木書店).remove();  //藤木書店の要素を削除している
  $(藤代書店).remove();  //藤代書店の要素を削除している
  $(小糸書店).remove();  //小糸書店の要素を削除している
  $(藤森書店).remove();  //藤森書店の要素を削除している
  $(正解２).remove();  //正解２の要素を削除している
  $(写真１).remove();  //写真１の要素を削除している
  $(解説３).remove();  //解説３の要素を削除している
  $(次の問題３).remove();  //次の問題３の要素を削除している

  残念２.classList.remove('hidden');  //残念２の要素を表示させている
  $(残念２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念２の要素にアニメーションを加えている

  写真２.classList.remove('hidden');  //写真２の要素を表示させている
  $(写真２).css('position','relative').css('animation','anime1 2s ease');  //ここで写真２の要素にアニメーションを加えている

  解説４.classList.remove('hidden');  //解説４の要素を表示させている
  $(解説４).css('position','relative').css('animation','anime1 2s ease');  //ここで解説４の要素にアニメーションを加えている

  次の問題４.classList.remove('hidden');  //次の問題４の要素を表示させている
})

//問題２に正解して、次の問題へを押したときのイベント設定
次の問題３.addEventListener('click', () => {
  $('#次の問題３').css('opacity', 0)  //次の問題３の要素を削除している

  $(正解２).remove();  //正解２の要素を削除している
  $(写真１).remove();  //写真１の要素を削除している
  $(解説３).remove();  //解説３の要素を削除している
  $(次の問題３).remove();  //次の問題３の要素を削除している
  $(残念２).remove();  //残念２の要素を削除している
  $(写真２).remove();  //写真２の要素を削除している
  $(解説４).remove();  //解説４の要素を削除している
  $(次の問題４).remove();  //次の問題４の要素を削除している

  問題３.classList.remove('hidden');  //問題３の要素を表示させている
  $(問題３).css('position','relative').css('animation','anime1 2s ease');  //ここで問題３の要素にアニメーションを加えている

  文３.classList.remove('hidden');  //文３の要素を表示させている
  $(文３).css('position','relative').css('animation','anime1 2s ease');  //ここで文３の要素にアニメーションを加えている

  タイマー３.classList.remove('hidden');
  $(タイマー３).css('position','relative').css('animation','anime1 2s ease');
  ct3();
  start3();

  近見東高校.classList.remove('hidden');  //近見東高校の要素を表示させている
  $(近見東高校).css('position','relative').css('animation','anime1 2s ease');  //ここで近見東高校の要素にアニメーションを加えている

  遠見束高校.classList.remove('hidden');  //遠見束高校の要素を表示させている
  $(遠見束高校).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見束高校の要素にアニメーションを加えている

  遠見東高校.classList.remove('hidden');  //遠見東高校の要素を表示させている
  $(遠見東高校).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見東高校の要素にアニメーションを加えている

  遠見西高校.classList.remove('hidden');  //遠見西高校の要素を表示させている
  $(遠見西高校).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見西高校の要素にアニメーションを加えている
})

//問題２に不正解して、次の問題へを押したときのイベント設定
次の問題４.addEventListener('click', () => {
  $('#次の問題４').css('opacity', 0);  //次の問題４の要素を削除している

  $(残念２).remove();  //残念２の要素を削除している
  $(写真２).remove();  //写真２の要素を削除している
  $(解説４).remove();  //解説４の要素を削除している
  $(次の問題４).remove();  //次の問題４の要素を削除している

  問題３.classList.remove('hidden');  //問題３の要素を表示させている
  $(問題３).css('position','relative').css('animation','anime1 2s ease');  //ここで問題３の要素にアニメーションを加えている

  文３.classList.remove('hidden');  //文３の要素を表示させている
  $(文３).css('position','relative').css('animation','anime1 2s ease');  //ここで文３の要素にアニメーションを加えている

  タイマー３.classList.remove('hidden');
  $(タイマー３).css('position','relative').css('animation','anime1 2s ease');
  ct3();
  start3();

  近見東高校.classList.remove('hidden');  //近見東高校の要素を表示させている
  $(近見東高校).css('position','relative').css('animation','anime1 2s ease');  //ここで近見東高校の要素にアニメーションを加えている

  遠見束高校.classList.remove('hidden');  //遠見束高校の要素を表示させている
  $(遠見束高校).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見束高校の要素にアニメーションを加えている

  遠見東高校.classList.remove('hidden');  //遠見東高校の要素を表示させている
  $(遠見東高校).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見東高校の要素にアニメーションを加えている

  遠見西高校.classList.remove('hidden');  //遠見西高校の要素を表示させている
  $(遠見西高校).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見西高校の要素にアニメーションを加えている
})

//近見東高校を押したときのイベント設定　不正解バージョン！
近見東高校.addEventListener('click', () => {
  $('#近見東高校').css('opacity', 0);  //近見東高校の要素を削除している

  stop();
  $(タイマー３).remove();
  ハズレ.play();

  $(問題３).remove();  //問題３の要素を削除している
  $(文３).remove();  //文３の要素を削除している
  $(近見東高校).remove();  //近見東高校の要素を削除している
  $(遠見束高校).remove();  //遠見束高校の要素を削除している
  $(遠見東高校).remove();  //遠見東高校の要素を削除している
  $(遠見西高校).remove();  //遠見西高校の要素を削除している
  $(正解３).remove();  //正解３の要素を削除している
  $(写真３).remove();  //写真３の要素を削除している
  $(解説５).remove();  //解説５の要素を削除している
  $(次の問題５).remove();  //次の問題５の要素を削除している

  残念３.classList.remove('hidden');  //残念３の要素を表示させている
  $(残念３).css('position','relative').css('animation','anime1 2s ease');  //ここで残念３の要素にアニメーションを加えている

  写真４.classList.remove('hidden');  //写真４の要素を表示させている
  $(写真４).css('position','relative').css('animation','anime1 2s ease');  //ここで写真４の要素にアニメーションを加えている

  解説６.classList.remove('hidden');  //解説６の要素を表示させている
  $(解説６).css('position','relative').css('animation','anime1 2s ease');  //ここで解説６の要素にアニメーションを加えている

  次の問題６.classList.remove('hidden');  //次の問題６の要素を表示させている
})

//遠見束高校を押したときのイベント設定　不正解バージョン！
遠見束高校.addEventListener('click', () => {
  $('#遠見束高校').css('opacity', 0);  //遠見束高校の要素を削除している

  stop();
  $(タイマー３).remove();
  ハズレ.play();

  $(問題３).remove();  //問題３の要素を削除している
  $(文３).remove();  //文３の要素を削除している
  $(近見東高校).remove();  //近見東高校の要素を削除している
  $(遠見束高校).remove();  //遠見束高校の要素を削除している
  $(遠見東高校).remove();  //遠見東高校の要素を削除している
  $(遠見西高校).remove();  //遠見西高校の要素を削除している
  $(正解３).remove();  //正解３の要素を削除している
  $(写真３).remove();  //写真３の要素を削除している
  $(解説５).remove();  //解説５の要素を削除している
  $(次の問題５).remove();  //次の問題５の要素を削除している

  残念３.classList.remove('hidden');  //残念３の要素を表示させている
  $(残念３).css('position','relative').css('animation','anime1 2s ease');  //ここで残念３の要素にアニメーションを加えている

  写真４.classList.remove('hidden');  //写真４の要素を表示させている
  $(写真４).css('position','relative').css('animation','anime1 2s ease');  //ここで写真４の要素にアニメーションを加えている

  解説６.classList.remove('hidden');  //解説６の要素を表示させている
  $(解説６).css('position','relative').css('animation','anime1 2s ease');  //ここで解説６の要素にアニメーションを加えている

  次の問題６.classList.remove('hidden');  //次の問題６の要素を表示させている
})

//遠見東高校を押したときのイベント設定　正解バージョン！
遠見東高校.addEventListener('click', () => {
  $('#遠見東高校').css('opacity', 0);  //遠見東高校の要素を削除している

  stop();
  $(タイマー３).remove();
  正解.play();

  num++;  //numの値を１だけ増やしている
  console.log(num);

  $(問題３).remove();  //問題３の要素を削除している
  $(文３).remove();  //文３の要素を削除している
  $(近見東高校).remove();  //近見東高校の要素を削除している
  $(遠見束高校).remove();  //遠見束高校の要素を削除している
  $(遠見東高校).remove();  //遠見東高校の要素を削除している
  $(遠見西高校).remove();  //遠見西高校の要素を削除している

  正解３.classList.remove('hidden');  //正解３を表示させている
  $(正解３).css('position','relative').css('animation','anime1 2s ease');  //ここで正解３の要素にアニメーションを加えている

  写真３.classList.remove('hidden');  //写真３を表示させている
  $(写真３).css('position','relative').css('animation','anime1 2s ease');  //ここで写真３の要素にアニメーションを加えている

  解説５.classList.remove('hidden');  //解説５を表示させている
  $(解説５).css('position','relative').css('animation','anime1 2s ease');  //ここで解説５の要素にアニメーションを加えている

  次の問題５.classList.remove('hidden');  //次の問題５を表示させている
})

//遠見西高校を押したときのイベント設定　不正解バージョン！
遠見西高校.addEventListener('click', () => {
  $('#遠見西高校').css('opacity', 0);  //遠見西高校の要素を削除している

  stop();
  $(タイマー３).remove();
  ハズレ.play();

  $(問題３).remove();  //問題３の要素を削除している
  $(文３).remove();  //文３の要素を削除している
  $(近見東高校).remove();  //近見東高校の要素を削除している
  $(遠見束高校).remove();  //遠見束高校の要素を削除している
  $(遠見東高校).remove();  //遠見東高校の要素を削除している
  $(遠見西高校).remove();  //遠見西高校の要素を削除している
  $(正解３).remove();  //正解３の要素を削除している
  $(写真３).remove();  //写真３の要素を削除している
  $(解説５).remove();  //解説５の要素を削除している
  $(次の問題５).remove();  //次の問題５の要素を削除している

  残念３.classList.remove('hidden');  //残念３の要素を表示させている
  $(残念３).css('position','relative').css('animation','anime1 2s ease');  //ここで残念３の要素にアニメーションを加えている

  写真４.classList.remove('hidden');  //写真４の要素を表示させている
  $(写真４).css('position','relative').css('animation','anime1 2s ease');  //ここで写真４の要素にアニメーションを加えている

  解説６.classList.remove('hidden');  //解説６の要素を表示させている
  $(解説６).css('position','relative').css('animation','anime1 2s ease');  //ここで解説６の要素にアニメーションを加えている

  次の問題６.classList.remove('hidden');  //次の問題６の要素を表示させている
})

//問題３に正解して次の問題へを押したときのイベント設定
次の問題５.addEventListener('click', () => {
  //要素削除部分
  $(正解３).remove();
  $(写真３).remove();
  $(解説５).remove();
  $(次の問題５).remove();

  //要素表示部分
  問題４.classList.remove('hidden');
  $(問題４).css('position','relative').css('animation','anime1 2s ease');

  文４.classList.remove('hidden');
  $(文４).css('position','relative').css('animation','anime1 2s ease');

  タイマー４.classList.remove('hidden');
  $(タイマー４).css('position','relative').css('animation','anime1 2s ease');
  ct4();
  start4();

  赤色.classList.remove('hidden');
  $(赤色).css('position','relative').css('animation','anime1 2s ease');

  青色.classList.remove('hidden');
  $(青色).css('position','relative').css('animation','anime1 2s ease');

  黄色.classList.remove('hidden');
  $(黄色).css('position','relative').css('animation','anime1 2s ease');

  深緑色.classList.remove('hidden');
  $(深緑色).css('position','relative').css('animation','anime1 2s ease');
})

//問題３に不正解して次の問題へを押したときのイベント設定
次の問題６.addEventListener('click', () => {
  //要素削除部分
  $(残念３).remove();
  $(写真４).remove();
  $(解説６).remove();
  $(次の問題６).remove();

  //要素表示部分
  問題４.classList.remove('hidden');
  $(問題４).css('position','relative').css('animation','anime1 2s ease');

  文４.classList.remove('hidden');
  $(文４).css('position','relative').css('animation','anime1 2s ease');

  タイマー４.classList.remove('hidden');
  $(タイマー４).css('position','relative').css('animation','anime1 2s ease');
  ct4();
  start4();

  赤色.classList.remove('hidden');
  $(赤色).css('position','relative').css('animation','anime1 2s ease');

  青色.classList.remove('hidden');
  $(青色).css('position','relative').css('animation','anime1 2s ease');

  黄色.classList.remove('hidden');
  $(黄色).css('position','relative').css('animation','anime1 2s ease');

  深緑色.classList.remove('hidden');
  $(深緑色).css('position','relative').css('animation','anime1 2s ease');
})

//赤色を押したときのイベント設定　正解
赤色.addEventListener('click', () => {

  stop();
  $(タイマー４).remove();
  正解.play();

  num++;
  console.log(num);

  //要素削除部分
  $(問題４).remove();
  $(文４).remove();
  $(赤色).remove();
  $(青色).remove();
  $(黄色).remove();
  $(深緑色).remove();

  正解４.classList.remove('hidden');
  $(正解４).css('position','relative').css('animation','anime1 2s ease');

  写真５.classList.remove('hidden');
  $(写真５).css('position','relative').css('animation','anime1 2s ease');

  解説７.classList.remove('hidden');
  $(解説７).css('position','relative').css('animation','anime1 2s ease');

  次の問題７.classList.remove('hidden');
})

//青色を押したときのイベント設定　不正解
青色.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー４).remove();
  //要素削除部分
  $(問題４).remove();
  $(文４).remove();
  $(赤色).remove();
  $(青色).remove();
  $(黄色).remove();
  $(深緑色).remove();

  残念４.classList.remove('hidden');
  $(残念４).css('position','relative').css('animation','anime1 2s ease');

  写真６.classList.remove('hidden');
  $(写真６).css('position','relative').css('animation','anime1 2s ease');

  解説８.classList.remove('hidden');
  $(解説８).css('position','relative').css('animation','anime1 2s ease');

  次の問題８.classList.remove('hidden');
})

//黄色を押したときのイベント設定　不正解
黄色.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー４).remove();
  //要素削除部分
  $(問題４).remove();
  $(文４).remove();
  $(赤色).remove();
  $(青色).remove();
  $(黄色).remove();
  $(深緑色).remove();

  残念４.classList.remove('hidden');
  $(残念４).css('position','relative').css('animation','anime1 2s ease');

  写真６.classList.remove('hidden');
  $(写真６).css('position','relative').css('animation','anime1 2s ease');

  解説８.classList.remove('hidden');
  $(解説８).css('position','relative').css('animation','anime1 2s ease');

  次の問題８.classList.remove('hidden');
})

//深緑色を押したときのイベント設定　不正解
深緑色.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー４).remove();
  //要素削除部分
  $(問題４).remove();
  $(文４).remove();
  $(赤色).remove();
  $(青色).remove();
  $(黄色).remove();
  $(深緑色).remove();

  残念４.classList.remove('hidden');
  $(残念４).css('position','relative').css('animation','anime1 2s ease');

  写真６.classList.remove('hidden');
  $(写真６).css('position','relative').css('animation','anime1 2s ease');

  解説８.classList.remove('hidden');
  $(解説８).css('position','relative').css('animation','anime1 2s ease');

  次の問題８.classList.remove('hidden');
})

//問題４に正解したとき
次の問題７.addEventListener('click', () => {
  //要素削除部分
  $(正解４).remove();
  $(写真５).remove();
  $(解説７).remove();
  $(次の問題７).remove();

  問題５.classList.remove('hidden');
  $(問題５).css('position','relative').css('animation','anime1 2s ease');

  文５.classList.remove('hidden');
  $(文５).css('position','relative').css('animation','anime1 2s ease');

  タイマー５.classList.remove('hidden');
  $(タイマー５).css('position','relative').css('animation','anime1 2s ease');
  ct5();
  start5();

  七月.classList.remove('hidden');
  $(七月).css('position','relative').css('animation','anime1 2s ease');

  五月.classList.remove('hidden');
  $(五月).css('position','relative').css('animation','anime1 2s ease');

  二月.classList.remove('hidden');
  $(二月).css('position','relative').css('animation','anime1 2s ease');

  九月.classList.remove('hidden');
  $(九月).css('position','relative').css('animation','anime1 2s ease');
})

//問題４に不正解したとき
次の問題８.addEventListener('click', () => {
  //要素削除部分
  $(残念４).remove();
  $(写真６).remove();
  $(解説８).remove();
  $(次の問題８).remove();

  問題５.classList.remove('hidden');
  $(問題５).css('position','relative').css('animation','anime1 2s ease');

  文５.classList.remove('hidden');
  $(文５).css('position','relative').css('animation','anime1 2s ease');

  タイマー５.classList.remove('hidden');
  $(タイマー５).css('position','relative').css('animation','anime1 2s ease');
  ct5();
  start5();

  七月.classList.remove('hidden');
  $(七月).css('position','relative').css('animation','anime1 2s ease');

  五月.classList.remove('hidden');
  $(五月).css('position','relative').css('animation','anime1 2s ease');

  二月.classList.remove('hidden');
  $(二月).css('position','relative').css('animation','anime1 2s ease');

  九月.classList.remove('hidden');
  $(九月).css('position','relative').css('animation','anime1 2s ease');
})

//七月を押したとき
七月.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー５).remove();
  //要素削除部分
  $(問題５).remove();
  $(文５).remove();
  $(七月).remove();
  $(五月).remove();
  $(二月).remove();
  $(九月).remove();

  //要素表示部分
  残念５.classList.remove('hidden');
  $(残念５).css('position','relative').css('animation','anime1 2s ease');

  写真８.classList.remove('hidden');
  $(写真８).css('position','relative').css('animation','anime1 2s ease');

  解説１０.classList.remove('hidden');
  $(解説１０).css('position','relative').css('animation','anime1 2s ease');

  次の問題１０.classList.remove('hidden');
})

//五月を押した時　正解
五月.addEventListener('click', () => {

  stop();
  $(タイマー５).remove();
  正解.play();

  num++;
  console.log(num);

  //要素削除部分
  $(問題５).remove();
  $(文５).remove();
  $(七月).remove();
  $(五月).remove();
  $(二月).remove();
  $(九月).remove();
  
  //要素表示部分
  正解５.classList.remove('hidden');
  $(正解５).css('position','relative').css('animation','anime1 2s ease');
  
  写真７.classList.remove('hidden');
  $(写真７).css('position','relative').css('animation','anime1 2s ease');
  
  解説９.classList.remove('hidden');
  $(解説９).css('position','relative').css('animation','anime1 2s ease');
  
  次の問題９.classList.remove('hidden');
})

//二月を押した時
二月.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー５).remove();
  //要素削除部分
  $(問題５).remove();
  $(文５).remove();
  $(七月).remove();
  $(五月).remove();
  $(二月).remove();
  $(九月).remove();

  //要素表示部分
  残念５.classList.remove('hidden');
  $(残念５).css('position','relative').css('animation','anime1 2s ease');

  写真８.classList.remove('hidden');
  $(写真８).css('position','relative').css('animation','anime1 2s ease');

  解説１０.classList.remove('hidden');
  $(解説１０).css('position','relative').css('animation','anime1 2s ease');

  次の問題１０.classList.remove('hidden');
})

//九月を押したとき
九月.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー５).remove();
  //要素削除部分
  $(問題５).remove();
  $(文５).remove();
  $(七月).remove();
  $(五月).remove();
  $(二月).remove();
  $(九月).remove();

  //要素表示部分
  残念５.classList.remove('hidden');
  $(残念５).css('position','relative').css('animation','anime1 2s ease');

  写真８.classList.remove('hidden');
  $(写真８).css('position','relative').css('animation','anime1 2s ease');

  解説１０.classList.remove('hidden');
  $(解説１０).css('position','relative').css('animation','anime1 2s ease');

  次の問題１０.classList.remove('hidden');
})

//問題５に正解したとき
次の問題９.addEventListener('click', () => {
  //要素削除部分
  $(正解５).remove();
  $(写真７).remove();
  $(解説９).remove();
  $(次の問題９).remove();

  //要素表示部分
  問題６.classList.remove('hidden');
  $(問題６).css('position','relative').css('animation','anime1 2s ease');

  文６.classList.remove('hidden');
  $(文６).css('position','relative').css('animation','anime1 2s ease');

  タイマー６.classList.remove('hidden');
  $(タイマー６).css('position','relative').css('animation','anime1 2s ease');
  ct6();
  start6();

  雫.classList.remove('hidden');
  $(雫).css('position','relative').css('animation','anime1 2s ease');

  零.classList.remove('hidden');
  $(零).css('position','relative').css('animation','anime1 2s ease');

  澪.classList.remove('hidden');
  $(澪).css('position','relative').css('animation','anime1 2s ease');

  霈.classList.remove('hidden');
  $(霈).css('position','relative').css('animation','anime1 2s ease');
})

//問題５に不正解したとき
次の問題１０.addEventListener('click', () => {
  //要素削除部分
  $(残念５).remove();
  $(写真８).remove();
  $(解説１０).remove();
  $(次の問題１０).remove();

  //要素表示部分
  問題６.classList.remove('hidden');
  $(問題６).css('position','relative').css('animation','anime1 2s ease');

  文６.classList.remove('hidden');
  $(文６).css('position','relative').css('animation','anime1 2s ease');

  タイマー６.classList.remove('hidden');
  $(タイマー６).css('position','relative').css('animation','anime1 2s ease');
  ct6();
  start6();

  雫.classList.remove('hidden');
  $(雫).css('position','relative').css('animation','anime1 2s ease');

  零.classList.remove('hidden');
  $(零).css('position','relative').css('animation','anime1 2s ease');

  澪.classList.remove('hidden');
  $(澪).css('position','relative').css('animation','anime1 2s ease');

  霈.classList.remove('hidden');
  $(霈).css('position','relative').css('animation','anime1 2s ease');
})

//雫を押したとき
雫.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー６).remove();
  //要素削除部分
  $(問題６).remove();
  $(文６).remove();
  $(雫).remove();
  $(零).remove();
  $(澪).remove();
  $(霈).remove();

  //要素表示部分
  残念６.classList.remove('hidden');
  $(残念６).css('position','relative').css('animation','anime1 2s ease');

  写真１０.classList.remove('hidden');
  $(写真１０).css('position','relative').css('animation','anime1 2s ease');

  解説１２.classList.remove('hidden');
  $(解説１２).css('position','relative').css('animation','anime1 2s ease');

  次の問題１２.classList.remove('hidden');
})

//零を押したとき
零.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー６).remove();
  //要素削除部分
  $(問題６).remove();
  $(文６).remove();
  $(雫).remove();
  $(零).remove();
  $(澪).remove();
  $(霈).remove();

  //要素表示部分
  残念６.classList.remove('hidden');
  $(残念６).css('position','relative').css('animation','anime1 2s ease');

  写真１０.classList.remove('hidden');
  $(写真１０).css('position','relative').css('animation','anime1 2s ease');

  解説１２.classList.remove('hidden');
  $(解説１２).css('position','relative').css('animation','anime1 2s ease');

  次の問題１２.classList.remove('hidden');
})

//澪を押したとき　正解
澪.addEventListener('click', () => {

  stop();
  $(タイマー６).remove();
  正解.play();

  num++;
  console.log(num);

  //要素削除部分
  $(問題６).remove();
  $(文６).remove();
  $(雫).remove();
  $(零).remove();
  $(澪).remove();
  $(霈).remove();
  
  //要素表示部分
  正解６.classList.remove('hidden');
  $(正解６).css('position','relative').css('animation','anime1 2s ease');
  
  写真９.classList.remove('hidden');
  $(写真９).css('position','relative').css('animation','anime1 2s ease');
  
  解説１１.classList.remove('hidden');
  $(解説１１).css('position','relative').css('animation','anime1 2s ease');
  
  次の問題１１.classList.remove('hidden');
})

//霈を押したとき
霈.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー６).remove();
  //要素削除部分
  $(問題６).remove();
  $(文６).remove();
  $(雫).remove();
  $(零).remove();
  $(澪).remove();
  $(霈).remove();

  //要素表示部分
  残念６.classList.remove('hidden');
  $(残念６).css('position','relative').css('animation','anime1 2s ease');

  写真１０.classList.remove('hidden');
  $(写真１０).css('position','relative').css('animation','anime1 2s ease');

  解説１２.classList.remove('hidden');
  $(解説１２).css('position','relative').css('animation','anime1 2s ease');

  次の問題１２.classList.remove('hidden');
})

//問題６に正解したとき
次の問題１１.addEventListener('click', () => {
  //要素削除部分
  $(正解６).remove();
  $(写真９).remove();
  $(解説１１).remove();
  $(次の問題１１).remove();

  //要素表示部分
  問題７.classList.remove('hidden')
  $(問題７).css('position','relative').css('animation','anime1 2s ease');

  文７.classList.remove('hidden')
  $(文７).css('position','relative').css('animation','anime1 2s ease');

  タイマー７.classList.remove('hidden');
  $(タイマー７).css('position','relative').css('animation','anime1 2s ease');
  ct7();
  start7();

  写真１１.classList.remove('hidden')
  $(写真１１).css('position','relative').css('animation','anime1 2s ease');

  パンダツノウミウシ.classList.remove('hidden')
  $(パンダツノウミウシ).css('position','relative').css('animation','anime1 2s ease');

  ダイアナウミウシ.classList.remove('hidden')
  $(ダイアナウミウシ).css('position','relative').css('animation','anime1 2s ease');

  エリザベスウミウシ.classList.remove('hidden')
  $(エリザベスウミウシ).css('position','relative').css('animation','anime1 2s ease');

  シロウミウシ.classList.remove('hidden')
  $(シロウミウシ).css('position','relative').css('animation','anime1 2s ease');
})

//問題６に不正解したとき
次の問題１２.addEventListener('click', () => {
  //要素削除部分
  $(残念６).remove();
  $(写真１０).remove();
  $(解説１２).remove();
  $(次の問題１２).remove();

  //要素表示部分
  問題７.classList.remove('hidden')
  $(問題７).css('position','relative').css('animation','anime1 2s ease');

  文７.classList.remove('hidden')
  $(文７).css('position','relative').css('animation','anime1 2s ease');

  タイマー７.classList.remove('hidden');
  $(タイマー７).css('position','relative').css('animation','anime1 2s ease');
  ct7();
  start7();

  写真１１.classList.remove('hidden')
  $(写真１１).css('position','relative').css('animation','anime1 2s ease');

  パンダツノウミウシ.classList.remove('hidden')
  $(パンダツノウミウシ).css('position','relative').css('animation','anime1 2s ease');

  ダイアナウミウシ.classList.remove('hidden')
  $(ダイアナウミウシ).css('position','relative').css('animation','anime1 2s ease');

  エリザベスウミウシ.classList.remove('hidden')
  $(エリザベスウミウシ).css('position','relative').css('animation','anime1 2s ease');

  シロウミウシ.classList.remove('hidden')
  $(シロウミウシ).css('position','relative').css('animation','anime1 2s ease');
})

//パンダツノウミウシを押したとき
パンダツノウミウシ.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー７).remove();
  //要素削除部分
  $(問題７).remove();
  $(文７).remove();
  $(写真１１).remove();
  $(パンダツノウミウシ).remove();
  $(ダイアナウミウシ).remove();
  $(エリザベスウミウシ).remove();
  $(シロウミウシ).remove();

  //要素表示部分
  残念７.classList.remove('hidden');
  $(残念７).css('position','relative').css('animation','anime1 2s ease');

  解説１４.classList.remove('hidden');
  $(解説１４).css('position','relative').css('animation','anime1 2s ease');

  次の問題１４.classList.remove('hidden');
})

//ダイアナウミウシを押したとき
ダイアナウミウシ.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー７).remove();
  //要素削除部分
  $(問題７).remove();
  $(文７).remove();
  $(写真１１).remove();
  $(パンダツノウミウシ).remove();
  $(ダイアナウミウシ).remove();
  $(エリザベスウミウシ).remove();
  $(シロウミウシ).remove();

  //要素表示部分
  残念７.classList.remove('hidden');
  $(残念７).css('position','relative').css('animation','anime1 2s ease');

  解説１４.classList.remove('hidden');
  $(解説１４).css('position','relative').css('animation','anime1 2s ease');

  次の問題１４.classList.remove('hidden');
})

//エリザベスウミウシを押したとき
エリザベスウミウシ.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー７).remove();
  //要素削除部分
  $(問題７).remove();
  $(文７).remove();
  $(写真１１).remove();
  $(パンダツノウミウシ).remove();
  $(ダイアナウミウシ).remove();
  $(エリザベスウミウシ).remove();
  $(シロウミウシ).remove();

  //要素表示部分
  残念７.classList.remove('hidden');
  $(残念７).css('position','relative').css('animation','anime1 2s ease');

  解説１４.classList.remove('hidden');
  $(解説１４).css('position','relative').css('animation','anime1 2s ease');

  次の問題１４.classList.remove('hidden');
})

//シロウミウシを押したとき　正解
シロウミウシ.addEventListener('click', () => {

  stop();
  $(タイマー７).remove();
  正解.play();

  num++;
  console.log(num);
  //要素削除部分
  $(問題７).remove();
  $(文７).remove();
  $(写真１１).remove();
  $(パンダツノウミウシ).remove();
  $(ダイアナウミウシ).remove();
  $(エリザベスウミウシ).remove();
  $(シロウミウシ).remove();

  //要素表示部分
  正解７.classList.remove('hidden');
  $(正解７).css('position','relative').css('animation','anime1 2s ease');

  解説１３.classList.remove('hidden');
  $(解説１３).css('position','relative').css('animation','anime1 2s ease');

  次の問題１３.classList.remove('hidden');
})

//問題７に正解したとき
次の問題１３.addEventListener('click', () => {
  //要素削除部分
  $(正解７).remove();
  $(解説１３).remove();
  $(次の問題１３).remove();

  //要素表示部分
  問題８.classList.remove('hidden');
  $(問題８).css('position','relative').css('animation','anime1 2s ease');

  文８.classList.remove('hidden');
  $(文８).css('position','relative').css('animation','anime1 2s ease');

  タイマー８.classList.remove('hidden');
  $(タイマー８).css('position','relative').css('animation','anime1 2s ease');
  ct8();
  start8();

  七海燈子.classList.remove('hidden');
  $(七海燈子).css('position','relative').css('animation','anime1 2s ease');

  日向朱里.classList.remove('hidden');
  $(日向朱里).css('position','relative').css('animation','anime1 2s ease');

  堂島卓.classList.remove('hidden');
  $(堂島卓).css('position','relative').css('animation','anime1 2s ease');

  市ヶ谷知雪.classList.remove('hidden');
  $(市ヶ谷知雪).css('position','relative').css('animation','anime1 2s ease');
})

//問題７に不正解したとき
次の問題１４.addEventListener('click', () => {
  //要素削除部分
  $(残念７).remove();
  $(解説１４).remove();
  $(次の問題１４).remove();

  //要素表示部分
  問題８.classList.remove('hidden');
  $(問題８).css('position','relative').css('animation','anime1 2s ease');

  文８.classList.remove('hidden');
  $(文８).css('position','relative').css('animation','anime1 2s ease');

  タイマー８.classList.remove('hidden');
  $(タイマー８).css('position','relative').css('animation','anime1 2s ease');
  ct8();
  start8();

  七海燈子.classList.remove('hidden');
  $(七海燈子).css('position','relative').css('animation','anime1 2s ease');

  日向朱里.classList.remove('hidden');
  $(日向朱里).css('position','relative').css('animation','anime1 2s ease');

  堂島卓.classList.remove('hidden');
  $(堂島卓).css('position','relative').css('animation','anime1 2s ease');

  市ヶ谷知雪.classList.remove('hidden');
  $(市ヶ谷知雪).css('position','relative').css('animation','anime1 2s ease');
})

//七海燈子を押したとき
七海燈子.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー８).remove();
  //要素削除部分
  $(問題８).remove();
  $(文８).remove();
  $(七海燈子).remove();
  $(日向朱里).remove();
  $(堂島卓).remove();
  $(市ヶ谷知雪).remove();

  //要素表示部分
  残念８.classList.remove('hidden');
  $(残念８).css('position','relative').css('animation','anime1 2s ease');

  写真１３.classList.remove('hidden');
  $(写真１３).css('position','relative').css('animation','anime1 2s ease');

  解説１６.classList.remove('hidden');
  $(解説１６).css('position','relative').css('animation','anime1 2s ease');

  次の問題１６.classList.remove('hidden');
})

//日向朱里を押したとき　正解
日向朱里.addEventListener('click', () => {

  stop();
  $(タイマー８).remove();
  正解.play();

  num++;
  console.log(num);

  //要素削除部分
  $(問題８).remove();
  $(文８).remove();
  $(七海燈子).remove();
  $(日向朱里).remove();
  $(堂島卓).remove();
  $(市ヶ谷知雪).remove();

  //要素表示部分
  正解８.classList.remove('hidden');
  $(正解８).css('position','relative').css('animation','anime1 2s ease');

  写真１２.classList.remove('hidden');
  $(写真１２).css('position','relative').css('animation','anime1 2s ease');

  解説１５.classList.remove('hidden');
  $(解説１５).css('position','relative').css('animation','anime1 2s ease');

  次の問題１５.classList.remove('hidden');
})

//堂島卓を押したとき
堂島卓.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー８).remove();
  //要素削除部分
  $(問題８).remove();
  $(文８).remove();
  $(七海燈子).remove();
  $(日向朱里).remove();
  $(堂島卓).remove();
  $(市ヶ谷知雪).remove();

  //要素表示部分
  残念８.classList.remove('hidden');
  $(残念８).css('position','relative').css('animation','anime1 2s ease');

  写真１３.classList.remove('hidden');
  $(写真１３).css('position','relative').css('animation','anime1 2s ease');

  解説１６.classList.remove('hidden');
  $(解説１６).css('position','relative').css('animation','anime1 2s ease');

  次の問題１６.classList.remove('hidden');
})

//市ヶ谷知雪を押したとき
市ヶ谷知雪.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー８).remove();
  //要素削除部分
  $(問題８).remove();
  $(文８).remove();
  $(七海燈子).remove();
  $(日向朱里).remove();
  $(堂島卓).remove();
  $(市ヶ谷知雪).remove();

  //要素表示部分
  残念８.classList.remove('hidden');
  $(残念８).css('position','relative').css('animation','anime1 2s ease');

  写真１３.classList.remove('hidden');
  $(写真１３).css('position','relative').css('animation','anime1 2s ease');

  解説１６.classList.remove('hidden');
  $(解説１６).css('position','relative').css('animation','anime1 2s ease');

  次の問題１６.classList.remove('hidden');
})

//問題８に正解したとき
次の問題１５.addEventListener('click', () => {
  //要素削除部分
  $(正解８).remove();
  $(写真１２).remove();
  $(解説１５).remove();
  $(次の問題１５).remove();

  //要素表示部分
  問題９.classList.remove('hidden');
  $(問題９).css('position','relative').css('animation','anime1 2s ease');

  文９.classList.remove('hidden');
  $(文９).css('position','relative').css('animation','anime1 2s ease');

  タイマー９.classList.remove('hidden');
  $(タイマー９).css('position','relative').css('animation','anime1 2s ease');
  ct9();
  start9();

  写真１４.classList.remove('hidden');
  $(写真１４).css('position','relative').css('animation','anime1 2s ease');

  ニシキチン.classList.remove('hidden');
  $(ニシキチン).css('position','relative').css('animation','anime1 2s ease');

  チンニシキ.classList.remove('hidden');
  $(チンニシキ).css('position','relative').css('animation','anime1 2s ease');
})

//問題８に不正解したとき
次の問題１６.addEventListener('click', () => {
  //要素削除部分
  $(残念８).remove();
  $(写真１３).remove();
  $(解説１６).remove();
  $(次の問題１６).remove();

  //要素表示部分
  問題９.classList.remove('hidden');
  $(問題９).css('position','relative').css('animation','anime1 2s ease');

  文９.classList.remove('hidden');
  $(文９).css('position','relative').css('animation','anime1 2s ease');

  タイマー９.classList.remove('hidden');
  $(タイマー９).css('position','relative').css('animation','anime1 2s ease');
  ct9();
  start9();

  写真１４.classList.remove('hidden');
  $(写真１４).css('position','relative').css('animation','anime1 2s ease');

  ニシキチン.classList.remove('hidden');
  $(ニシキチン).css('position','relative').css('animation','anime1 2s ease');

  チンニシキ.classList.remove('hidden');
  $(チンニシキ).css('position','relative').css('animation','anime1 2s ease');
})

//ニシキチンを押したとき　正解
ニシキチン.addEventListener('click', () => {

  stop();
  $(タイマー９).remove();
  正解.play();

  num++;
  console.log(num);

  //要素削除部分
  $(問題９).remove();
  $(文９).remove();
  $(写真１４).remove();
  $(ニシキチン).remove();
  $(チンニシキ).remove();

  //要素表示部分
  正解９.classList.remove('hidden');
  $(正解９).css('position','relative').css('animation','anime1 2s ease');

  解説１７.classList.remove('hidden');
  $(解説１７).css('position','relative').css('animation','anime1 2s ease');

  次の問題１７.classList.remove('hidden');
})

//チンニシキを押したとき
チンニシキ.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー９).remove();
  //要素削除部分
  $(問題９).remove();
  $(文９).remove();
  $(写真１４).remove();
  $(ニシキチン).remove();
  $(チンニシキ).remove();

  //要素表示部分
  残念９.classList.remove('hidden');
  $(残念９).css('position','relative').css('animation','anime1 2s ease');

  解説１８.classList.remove('hidden');
  $(解説１８).css('position','relative').css('animation','anime1 2s ease');

  次の問題１８.classList.remove('hidden');
})

//問題９に正解したとき
次の問題１７.addEventListener('click', () => {
  //要素削除部分
  $(正解９).remove();
  $(解説１７).remove();
  $(次の問題１７).remove();

  //要素表示部分
  問題１０.classList.remove('hidden');
  $(問題１０).css('position','relative').css('animation','anime1 2s ease');

  文１０.classList.remove('hidden');
  $(文１０).css('position','relative').css('animation','anime1 2s ease');

  再生.classList.remove('hidden');
  $(再生).css('position','relative').css('animation','anime1 2s ease');

  素直じゃないんだから.classList.remove('hidden');
  $(素直じゃないんだから).css('position','relative').css('animation','anime1 2s ease');

  ふたつの吐息.classList.remove('hidden');
  $(ふたつの吐息).css('position','relative').css('animation','anime1 2s ease');

  そよぐ風と木漏れ日.classList.remove('hidden');
  $(そよぐ風と木漏れ日).css('position','relative').css('animation','anime1 2s ease');

  回遊する想い.classList.remove('hidden');
  $(回遊する想い).css('position','relative').css('animation','anime1 2s ease');
})

//問題９に不正解したとき
次の問題１８.addEventListener('click', () => {
  //要素削除部分
  $(残念９).remove();
  $(解説１８).remove();
  $(次の問題１８).remove();

  //要素表示部分
  問題１０.classList.remove('hidden');
  $(問題１０).css('position','relative').css('animation','anime1 2s ease');

  文１０.classList.remove('hidden');
  $(文１０).css('position','relative').css('animation','anime1 2s ease');

  再生.classList.remove('hidden');
  $(再生).css('position','relative').css('animation','anime1 2s ease');

  素直じゃないんだから.classList.remove('hidden');
  $(素直じゃないんだから).css('position','relative').css('animation','anime1 2s ease');

  ふたつの吐息.classList.remove('hidden');
  $(ふたつの吐息).css('position','relative').css('animation','anime1 2s ease');

  そよぐ風と木漏れ日.classList.remove('hidden');
  $(そよぐ風と木漏れ日).css('position','relative').css('animation','anime1 2s ease');

  回遊する想い.classList.remove('hidden');
  $(回遊する想い).css('position','relative').css('animation','anime1 2s ease');
})

//素直じゃないんだからを押したとき
素直じゃないんだから.addEventListener('click', () => {

  ハズレ.play();
  //要素削除部分
  $(問題１０).remove();
  $(文１０).remove();
  $(再生).remove();
  $(素直じゃないんだから).remove();
  $(ふたつの吐息).remove();
  $(そよぐ風と木漏れ日).remove();
  $(回遊する想い).remove();

  //要素表示部分
  残念１０.classList.remove('hidden');
  $(残念１０).css('position','relative').css('animation','anime1 2s ease');

  解説２０.classList.remove('hidden');
  $(解説２０).css('position','relative').css('animation','anime1 2s ease');

  結果２.classList.remove('hidden');
})

//ふたつの吐息を押したとき
ふたつの吐息.addEventListener('click', () => {

  ハズレ.play();
  //要素削除部分
  $(問題１０).remove();
  $(文１０).remove();
  $(再生).remove();
  $(素直じゃないんだから).remove();
  $(ふたつの吐息).remove();
  $(そよぐ風と木漏れ日).remove();
  $(回遊する想い).remove();

  //要素表示部分
  残念１０.classList.remove('hidden');
  $(残念１０).css('position','relative').css('animation','anime1 2s ease');

  解説２０.classList.remove('hidden');
  $(解説２０).css('position','relative').css('animation','anime1 2s ease');

  結果２.classList.remove('hidden');
})

//そよぐ風と木漏れ日を押したとき
そよぐ風と木漏れ日.addEventListener('click', () => {

  ハズレ.play();
  //要素削除部分
  $(問題１０).remove();
  $(文１０).remove();
  $(再生).remove();
  $(素直じゃないんだから).remove();
  $(ふたつの吐息).remove();
  $(そよぐ風と木漏れ日).remove();
  $(回遊する想い).remove();

  //要素表示部分
  残念１０.classList.remove('hidden');
  $(残念１０).css('position','relative').css('animation','anime1 2s ease');

  解説２０.classList.remove('hidden');
  $(解説２０).css('position','relative').css('animation','anime1 2s ease');

  結果２.classList.remove('hidden');
})

//回遊する想いを押したとき　正解
回遊する想い.addEventListener('click', () => {

  num++;
  console.log(num);
  正解.play();

  //要素削除部分
  $(問題１０).remove();
  $(文１０).remove();
  $(再生).remove();
  $(素直じゃないんだから).remove();
  $(ふたつの吐息).remove();
  $(そよぐ風と木漏れ日).remove();
  $(回遊する想い).remove();

  //要素表示部分
  正解１０.classList.remove('hidden');
  $(正解１０).css('position','relative').css('animation','anime1 2s ease');

  解説１９.classList.remove('hidden');
  $(解説１９).css('position','relative').css('animation','anime1 2s ease');

  結果１.classList.remove('hidden');
})

//問題１０に正解したとき
結果１.addEventListener('click', () => {
  //要素削除部分
  $(正解１０).remove();
  $(解説１９).remove();
  $(結果１).remove();

  //要素表示部分
  正解数.textContent = 'あなたは10問中' + num + '問正解しました！'
  正解数.classList.remove('hidden');
  $(正解数).css('position','relative').css('animation','anime1 2s ease');

  文１２.classList.remove('hidden');
  $(文１２).css('position','relative').css('animation','anime1 2s ease');

  文１３.classList.remove('hidden');
  文１３.value = 'https://mysite2-e2145.web.app/Mysite4/Lily1.html　#百合センター試験　@MKRKL　私はやがて君になるのセンター試験で10問中' + num + '問正解出来ました！';

  シェア.classList.remove('hidden');
  $(シェア).css('position','relative').css('animation','anime1 2s ease');

  文１５.classList.remove('hidden');
  $(文１５).css('position','relative').css('animation','anime1 2s ease');

  文１６.classList.remove('hidden');
  $(文１６).css('position','relative').css('animation','anime1 2s ease');

  リンク.classList.remove('hidden');
  $(リンク).css('position','relative').css('animation','anime1 2s ease');

  if(1 <= num && num <= 2){  //ここの部分をきちんとやること！
    文１１.textContent = 'あなたはまだやがて君になるをきちんと読み込めていないのかもしれません... やがて君になるは、読み込めば読み込む程奥が深い作品だと思うので、是非もう一度読んでみてください！';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(3 <= num && num <= 5){
    文１１.textContent = '悪くないと思います！ やがて君になるを読んでいて、その内容をある程度覚えることが出来ています。 本の中身だけではなく、表紙の裏などもたまに覗いてみると、面白い発見がありますので、是非見てみてください♪';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(6 <= num && num <= 9){
    文１１.textContent = '良いですね！ やがて君になるをきちんと読んでいることが分かります！ これぐらいやが君の知識があるなら、安心して布教することが出来ます。';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(num === 10){
    文１１.textContent = 'すごい！ よく満点を取ることが出来ましたね♪ 満点を取ることが出来たあなたは、もう【やが君マスター】と呼べるかもしれませんね？笑　誇りを持って他の人達にやが君を布教してください！';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }
})

//問題１０に不正解したとき
結果２.addEventListener('click', () => {
  //要素削除部分
  $(残念１０).remove();
  $(解説２０).remove();
  $(結果２).remove();

  //要素表示部分
  正解数.textContent = 'あなたは10問中' + num + '問正解しました！'
  正解数.classList.remove('hidden');
  $(正解数).css('position','relative').css('animation','anime1 2s ease');

  文１２.classList.remove('hidden');
  $(文１２).css('position','relative').css('animation','anime1 2s ease');

  文１３.classList.remove('hidden');
  $(文１３).css('position','relative').css('animation','anime1 2s ease');
  文１３.value = 'https://mysite2-e2145.web.app/Mysite4/Lily1.html　#百合センター試験　@MKRKL　私はやがて君になるのセンター試験で10問中' + num + '問正解出来ました！';

  シェア.classList.remove('hidden');
  $(シェア).css('position','relative').css('animation','anime1 2s ease');

  文１５.classList.remove('hidden');
  $(文１５).css('position','relative').css('animation','anime1 2s ease');

  文１６.classList.remove('hidden');
  $(文１６).css('position','relative').css('animation','anime1 2s ease');

  リンク.classList.remove('hidden');
  $(リンク).css('position','relative').css('animation','anime1 2s ease');

  if(0 <= num && num <= 2){  //ここの部分をきちんとやること！
    文１１.textContent = 'あなたはまだやがて君になるをきちんと読み込めていないのかもしれません... やがて君になるは、読み込めば読み込む程奥が深い作品だと思うので、是非もう一度読んでみてください！';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(3 <= num && num <= 5){
    文１１.textContent = '悪くないと思います！ やがて君になるを読んでいて、その内容をある程度覚えることが出来ています。 本の中身だけではなく、表紙の裏などもたまに覗いてみると、面白い発見がありますので、是非見てみてください♪';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(6 <= num && num <= 9){
    文１１.textContent = '良いですね！ やがて君になるをきちんと読んでいることが分かります！ これぐらいやが君の知識があるなら、安心して布教することが出来ます。';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }
})


//曲のイベント設定　一番下に配置しておく
let music = new Audio("music/005-回遊する想い.m4a");
let 正解  = new Audio('music/正解.mp3');
let ハズレ= new Audio('music/ハズレ.mp3');
let カウント = new Audio('music/カウントダウン.mp3');

再生.addEventListener('click', () =>{
  count++;
  if(count % 2 === 1){
    music.play();
    再生.textContent = '停止';
  }else{
    music.pause();
    music.currentTime = 0;
    再生.textContent = '再生';
  }

  素直じゃないんだから.addEventListener('click', () => {
    music.pause();
  })

  ふたつの吐息.addEventListener('click', () => {
    music.pause();
  })

  そよぐ風と木漏れ日.addEventListener('click', () => {
    music.pause();
  })

  回遊する想い.addEventListener('click', () => {
    music.pause();
  })
})

//ページが更新された時に起こるイベント設定
window.addEventListener('beforeunload', (e) => {
  if(num2 === 1){
    e.preventDefault();
    e.returnValue = 'やがて君になるのセンター試験のスタート画面に戻ります！';
  }
})

//10秒タイマーの部分
//要素取得部分
const タイマー     = document.getElementById('タイマー');
const タイマー２   = document.getElementById('タイマー２');
const タイマー３   = document.getElementById('タイマー３');
const タイマー４   = document.getElementById('タイマー４');
const タイマー５   = document.getElementById('タイマー５');
const タイマー６   = document.getElementById('タイマー６');
const タイマー７   = document.getElementById('タイマー７');
const タイマー８   = document.getElementById('タイマー８');
const タイマー９   = document.getElementById('タイマー９');

//関数設定部分（１０個作る！）
function ct() {
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー.textContent = count;
    カウント.play();

    コーヒー.addEventListener('click', () =>{
      clearInterval(id);
    })

    紅茶.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct2() {
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー２.textContent = count;
    カウント.play();

    藤木書店.addEventListener('click', () =>{
      clearInterval(id);
    })

    藤代書店.addEventListener('click', () =>{
      clearInterval(id);
    })

    小糸書店.addEventListener('click', ()=>{
      clearInterval(id);
    })

    藤森書店.addEventListener('click', () => {
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct3() {
  let count = 15;
  let id    = setInterval(function(){
    count--;
    タイマー３.textContent = count;
    カウント.play();

    近見東高校.addEventListener('click', () =>{
      clearInterval(id);
    })

    遠見束高校.addEventListener('click', () => {
      clearInterval(id);
    })

    遠見東高校.addEventListener('click', () =>{
      clearInterval(id);
    })

    遠見西高校.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct4() {
  let count = 15;
  let id    = setInterval(function(){
    count--;
    タイマー４.textContent = count;
    カウント.play();

    赤色.addEventListener('click', () =>{
      clearInterval(id);
    })

    青色.addEventListener('click', () =>{
      clearInterval(id);
    })

    黄色.addEventListener('click', () =>{
      clearInterval(id);
    })

    深緑色.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();カウント.pause();
    }
  }, 1000);
}

function ct5() {
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー５.textContent = count;
    カウント.play();

    七月.addEventListener('click', () =>{
      clearInterval(id);
    })

    五月.addEventListener('click', () =>{
      clearInterval(id);
    })

    二月.addEventListener('click', () =>{
      clearInterval(id);
    })

    九月.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct6() {
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー６.textContent = count;
    カウント.play();
    雫.addEventListener('click', () =>{
      clearInterval(id);
    })

    零.addEventListener('click', () =>{
      clearInterval(id);
    })

    澪.addEventListener('click', () =>{
      clearInterval(id);
    })

    霈.addEventListener('click', () =>{
      clearInterval(id);
    })
    
    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct7() {
  let count = 15;
  let id    = setInterval(function(){
    count--;
    タイマー７.textContent = count;
    カウント.play();
    パンダツノウミウシ.addEventListener('click', () =>{
      clearInterval(id);
    })

    ダイアナウミウシ.addEventListener('click', () =>{
      clearInterval(id);
    })

    エリザベスウミウシ.addEventListener('click', () =>{
      clearInterval(id);
    })

    シロウミウシ.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct8() {
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー８.textContent = count;
    カウント.play();
    七海燈子.addEventListener('click', () =>{
      clearInterval(id);
    })

    日向朱里.addEventListener('click', () =>{
      clearInterval(id);
    })

    堂島卓.addEventListener('click', () =>{
      clearInterval(id);
    })

    市ヶ谷知雪.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct9() {
  let count = 15;
  let id    = setInterval(function(){
    count--;
    タイマー９.textContent = count;
    カウント.play();
    ニシキチン.addEventListener('click', () =>{
      clearInterval(id);
    })

    チンニシキ.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

let inter;  //この変数は変えなくていい！

//インターバルを止めるための関数（これを作るのは１つでOK！）
function stop(){
  clearInterval(inter);
}

//問題１のインターバル
function start1(){
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $('#紅茶').css('opacity', 0);  //ここで紅茶ボタンが押されて、クリックを離した瞬間に紅茶の要素が消えるようにしている

      $(タイマー).remove();
      $(問題１).remove();
      $(文１).remove();
      $(コーヒー).remove();
      $(紅茶).remove();
      $(正解１).remove();
      $(解説１).remove();
      $(次の問題１).remove();

      //残念バージョンの場合、すでにHTMLファイルの上の行に正解バージョンも書かれているので、それも削除すること！

      残念１.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら残念！が表示されるようにしている
      $(残念１).css('position','relative').css('animation','anime1 2s ease');  //ここで残念１の要素にアニメーションを加えている

      解説２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら解説２が表示されるようにしている
      $(解説２).css('position','relative').css('animation','anime1 2s ease');  //ここで解説２の要素にアニメーションを加えている
 
      次の問題２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら次の問題２が表示されるようにしている
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題２のインターバル
function start2(){
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題２).remove();  //問題２の要素を削除している
      $(文２).remove();  //文２の要素を削除している
      $(タイマー２).remove();
      $(藤木書店).remove();  //藤木書店の要素を削除している
      $(藤代書店).remove();  //藤代書店の要素を削除している
      $(小糸書店).remove();  //小糸書店の要素を削除している
      $(藤森書店).remove();  //藤森書店の要素を削除している
      $(正解２).remove();  //正解２の要素を削除している
      $(写真１).remove();  //写真１の要素を削除している
      $(解説３).remove();  //解説３の要素を削除している
      $(次の問題３).remove();  //次の問題３の要素を削除している

      残念２.classList.remove('hidden');  //残念２の要素を表示させている
      $(残念２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念２の要素にアニメーションを加えている

      写真２.classList.remove('hidden');  //写真２の要素を表示させている
      $(写真２).css('position','relative').css('animation','anime1 2s ease');  //ここで写真２の要素にアニメーションを加えている

      解説４.classList.remove('hidden');  //解説４の要素を表示させている
      $(解説４).css('position','relative').css('animation','anime1 2s ease');  //ここで解説４の要素にアニメーションを加えている

      次の問題４.classList.remove('hidden');  //次の問題４の要素を表示させている
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題３のインターバル
function start3(){
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 15){
      $(問題３).remove();  //問題３の要素を削除している
      $(文３).remove();  //文３の要素を削除している
      $(タイマー３).remove();
      $(近見東高校).remove();  //近見東高校の要素を削除している
      $(遠見束高校).remove();  //遠見束高校の要素を削除している
      $(遠見東高校).remove();  //遠見東高校の要素を削除している
      $(遠見西高校).remove();  //遠見西高校の要素を削除している
      $(正解３).remove();  //正解３の要素を削除している
      $(写真３).remove();  //写真３の要素を削除している
      $(解説５).remove();  //解説５の要素を削除している
      $(次の問題５).remove();  //次の問題５の要素を削除している

      残念３.classList.remove('hidden');  //残念３の要素を表示させている
      $(残念３).css('position','relative').css('animation','anime1 2s ease');  //ここで残念３の要素にアニメーションを加えている

      写真４.classList.remove('hidden');  //写真４の要素を表示させている
      $(写真４).css('position','relative').css('animation','anime1 2s ease');  //ここで写真４の要素にアニメーションを加えている

      解説６.classList.remove('hidden');  //解説６の要素を表示させている
      $(解説６).css('position','relative').css('animation','anime1 2s ease');  //ここで解説６の要素にアニメーションを加えている

      次の問題６.classList.remove('hidden');  //次の問題６の要素を表示させている
    }
    if(number === 15) clearInterval(inter);
  },1000)
}

// 問題４のインターバル
function start4(){
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 15){
      $(問題４).remove();
      $(文４).remove();
      $(タイマー４).remove();
      $(赤色).remove();
      $(青色).remove();
      $(黄色).remove();
      $(深緑色).remove();

      残念４.classList.remove('hidden');
      $(残念４).css('position','relative').css('animation','anime1 2s ease');

      写真６.classList.remove('hidden');
      $(写真６).css('position','relative').css('animation','anime1 2s ease');

      解説８.classList.remove('hidden');
      $(解説８).css('position','relative').css('animation','anime1 2s ease');

      次の問題８.classList.remove('hidden');
    }
    if(number === 15) clearInterval(inter);
  },1000)
}

// 問題５のインターバル
function start5(){
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題５).remove();
      $(文５).remove();
      $(タイマー５).remove();
      $(七月).remove();
      $(五月).remove();
      $(二月).remove();
      $(九月).remove();

      //要素表示部分
      残念５.classList.remove('hidden');
      $(残念５).css('position','relative').css('animation','anime1 2s ease');

      写真８.classList.remove('hidden');
      $(写真８).css('position','relative').css('animation','anime1 2s ease');

      解説１０.classList.remove('hidden');
      $(解説１０).css('position','relative').css('animation','anime1 2s ease');

      次の問題１０.classList.remove('hidden');
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題６のインターバル
function start6(){
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題６).remove();
      $(文６).remove();
      $(タイマー６).remove();
      $(雫).remove();
      $(零).remove();
      $(澪).remove();
      $(霈).remove();

      //要素表示部分
      残念６.classList.remove('hidden');
      $(残念６).css('position','relative').css('animation','anime1 2s ease');

      写真１０.classList.remove('hidden');
      $(写真１０).css('position','relative').css('animation','anime1 2s ease');

      解説１２.classList.remove('hidden');
      $(解説１２).css('position','relative').css('animation','anime1 2s ease');

      次の問題１２.classList.remove('hidden');
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題７のインターバル
function start7(){
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 15){
      $(問題７).remove();
      $(文７).remove();
      $(タイマー７).remove();
      $(写真１１).remove();
      $(パンダツノウミウシ).remove();
      $(ダイアナウミウシ).remove();
      $(エリザベスウミウシ).remove();
      $(シロウミウシ).remove();

      //要素表示部分
      残念７.classList.remove('hidden');
      $(残念７).css('position','relative').css('animation','anime1 2s ease');

      解説１４.classList.remove('hidden');
      $(解説１４).css('position','relative').css('animation','anime1 2s ease');

      次の問題１４.classList.remove('hidden');
    }
    if(number === 15) clearInterval(inter);
  },1000)
}

// 問題８のインターバル
function start8(){
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題８).remove();
      $(タイマー８).remove();
      $(文８).remove();
      $(七海燈子).remove();
      $(日向朱里).remove();
      $(堂島卓).remove();
      $(市ヶ谷知雪).remove();

      //要素表示部分
      残念８.classList.remove('hidden');
      $(残念８).css('position','relative').css('animation','anime1 2s ease');

      写真１３.classList.remove('hidden');
      $(写真１３).css('position','relative').css('animation','anime1 2s ease');

      解説１６.classList.remove('hidden');
      $(解説１６).css('position','relative').css('animation','anime1 2s ease');

      次の問題１６.classList.remove('hidden');
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題９のインターバル
function start9(){
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 15){
      $(問題９).remove();
      $(タイマー９).remove();
      $(文９).remove();
      $(写真１４).remove();
      $(ニシキチン).remove();
      $(チンニシキ).remove();

      //要素表示部分
      残念９.classList.remove('hidden');
      $(残念９).css('position','relative').css('animation','anime1 2s ease');

      解説１８.classList.remove('hidden');
      $(解説１８).css('position','relative').css('animation','anime1 2s ease');

      次の問題１８.classList.remove('hidden');
    }
    if(number === 15) clearInterval(inter);
  },1000)
}

//コピーするための関数設定
function clipCopy() {
  let copytext = document.getElementById('文１３');
  if(navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    try{
      //iosの場合、readonlyではコピーできないかもなので、readonlyを外す
      copytext.readonly = false;
      //ここから下がios用でしか機能しない関数
      let range = document.createRange();
      range.selectNode(copytext);
      window.getSelection().addRange(range);
      document.execCommand('copy');
      //readonlyに戻す
      copytext.readonly = true;
      alert('コピーしました！');
    }catch(e) {
      //エラーになった場合も、readonlyに戻す
      copytext.readonly = true;
      alert('このブラウザでは対応していません！');
    }
  }else {
    //iphone以外のコピー設定
    try {
      copytext.select();
      document.execCommand('copy');
      alert('コピーしました！');
    }catch(e) {
      alert('このブラウザでは対応していません！');
    }
  }
};