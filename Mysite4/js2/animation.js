'use strict';

//要素取得部分
let   num        =0;
let   count      =0;
let   num2       =0;
// １ページ目の部分
const start      = document.getElementById('ボタン');
const h1         = document.getElementById('タイトル');
const h2         = document.getElementById('見出し');
// ２ページ目の部分
const 問題１     = document.getElementById('問題１');
const 文１       = document.getElementById('文１');
const アフロ   = document.getElementById('アフロ');
const ひげろー   = document.getElementById('ひげろー');
const ひげぞー   = document.getElementById('ひげぞー');
const ひげきんぐ = document.getElementById('ひげきんぐ');
// ３ページ目の部分　正解バージョン
const 正解１     = document.getElementById('正解１');
const 写真１     = document.getElementById('写真１');
const 解説１     = document.getElementById('解説１');
const 次の問題１ = document.getElementById('次の問題１');
// ３ページ目の部分　不正解バージョン
const 残念１     = document.getElementById('残念１');
const 写真２     = document.getElementById('写真２');
const 解説２     = document.getElementById('解説２');
const 次の問題２ = document.getElementById('次の問題２');
// ４ページ目の部分
const 問題２     = document.getElementById('問題２');
const 文２       = document.getElementById('文２');
const 輝光       = document.getElementById('輝光');
const 瞬奇跡     = document.getElementById('瞬奇跡');
const 光奇跡     = document.getElementById('光奇跡');
const 輝奇跡     = document.getElementById('輝奇跡');
// ５ページ目の部分　正解バージョン
const 正解２     = document.getElementById('正解２');
const 写真３     = document.getElementById('写真３');
const 解説３     = document.getElementById('解説３');
const 次の問題３ = document.getElementById('次の問題３');
// ５ページ目の部分　不正解バージョン
const 残念２     = document.getElementById('残念２');
const 写真４     = document.getElementById('写真４');
const 解説４     = document.getElementById('解説４');
const 次の問題４ = document.getElementById('次の問題４');
// ６ページ目の部分
const 問題３     = document.getElementById('問題３');
const 文３       = document.getElementById('文３');
const トゥンク   = document.getElementById('トゥンク');
const トクン     = document.getElementById('トクン');
const ドキ       = document.getElementById('ドキ');
const ズキューン = document.getElementById('ズキューン');
// ７ページの部分　正解バージョン
const 正解３     = document.getElementById('正解３');
const 解説５     = document.getElementById('解説５');
const 次の問題５ = document.getElementById('次の問題５');
// ７ページの部分　不正解バージョン
const 残念３     = document.getElementById('残念３');
const 解説６     = document.getElementById('解説６');
const 次の問題６ = document.getElementById('次の問題６');
// ８ページ目の部分
const 問題４     = document.getElementById('問題４');
const 文４       = document.getElementById('文４');
const マス７     = document.getElementById('マス７');
const 休み       = document.getElementById('休み');
const マス５     = document.getElementById('マス５');
const もう一回   = document.getElementById('もう一回');
// ９ページの部分　正解バージョン
const 正解４     = document.getElementById('正解４');
const 写真５     = document.getElementById('写真５');
const 解説７     = document.getElementById('解説７');
const 次の問題７ = document.getElementById('次の問題７');
// ９ページの部分　不正解バージョン
const 残念４     = document.getElementById('残念４');
const 写真６     = document.getElementById('写真６');
const 解説８     = document.getElementById('解説８');
const 次の問題８ = document.getElementById('次の問題８');
// １０ページ目の部分
const 問題５     = document.getElementById('問題５');
const 文５       = document.getElementById('文５');
const こより     = document.getElementById('こより');
const かのん     = document.getElementById('かのん');
//１１ページ目の部分　正解バージョン
const 正解５     = document.getElementById('正解５');
const 解説９     = document.getElementById('解説９');
const 次の問題９ = document.getElementById('次の問題９');
//１１ページ目の部分　不正解バージョン
const 残念５       = document.getElementById('残念５');
const 解説１０     = document.getElementById('解説１０');
const 次の問題１０ = document.getElementById('次の問題１０');
//１２ページ目の部分
const 問題６       = document.getElementById('問題６');
const 文６         = document.getElementById('文６');
const 十月         = document.getElementById('十月');
const 十一月       = document.getElementById('十一月');
const 九月         = document.getElementById('九月');
const 二月         = document.getElementById('二月');
//１３ページ目の部分　正解バージョン
const 正解６       = document.getElementById('正解６');
const 写真７     = document.getElementById('写真７');
const 解説１１     = document.getElementById('解説１１');
const 次の問題１１ = document.getElementById('次の問題１１');
//１３ページ目の部分　不正解バージョン
const 残念６       = document.getElementById('残念６');
const 写真８       = document.getElementById('写真８');
const 解説１２     = document.getElementById('解説１２');
const 次の問題１２ = document.getElementById('次の問題１２');
//１４ページ目の問題
const 問題７             = document.getElementById('問題７');
const 文７               = document.getElementById('文７');
const 五十               = document.getElementById('五十');
const 四十八             = document.getElementById('四十八');
const 五十二             = document.getElementById('五十二');
const 五十一             = document.getElementById('五十一');
//１５ページ目の部分　正解バージョン
const 正解７             = document.getElementById('正解７');
const 写真９       = document.getElementById('写真９');
const 解説１３           = document.getElementById('解説１３');
const 次の問題１３       = document.getElementById('次の問題１３');
//１５ページ目の部分　不正解バージョン
const 残念７             = document.getElementById('残念７');
const 写真１０     = document.getElementById('写真１０');
const 解説１４           = document.getElementById('解説１４');
const 次の問題１４       = document.getElementById('次の問題１４');
//１６ページ目の部分
const 問題８             = document.getElementById('問題８');
const 文８               = document.getElementById('文８');
const 六                 = document.getElementById('六');
const 七                 = document.getElementById('七');
const 八                 = document.getElementById('八');
const 十                 = document.getElementById('十');
//１７ページ目の部分　正解バージョン
const 正解８             = document.getElementById('正解８');
const 写真１１           = document.getElementById('写真１１');
const 解説１５           = document.getElementById('解説１５');
const 次の問題１５       = document.getElementById('次の問題１５');
//１７ページ目の部分　不正解バージョン
const 残念８             = document.getElementById('残念８');
const 写真１２           = document.getElementById('写真１２');
const 解説１６           = document.getElementById('解説１６');
const 次の問題１６       = document.getElementById('次の問題１６');
//１８ページ目の部分
const 問題９             = document.getElementById('問題９');
const 文９               = document.getElementById('文９');
const 髪飾り             = document.getElementById('髪飾り');
const ケーキ             = document.getElementById('ケーキ');
const プリン             = document.getElementById('プリン');
const クッキー           = document.getElementById('クッキー');
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
const 上田                 = document.getElementById('上田');
const 指出                 = document.getElementById('指出');
const 山田                 = document.getElementById('山田');
const 中川                 = document.getElementById('中川');
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

// コンソール表示部分
console.log(num);

// スタートボタンを押したときのイベント設定
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

  アフロ.classList.remove('hidden');
  $(アフロ).css('position','relative').css('animation','anime1 2s ease');

  ひげろー.classList.remove('hidden');
  $(ひげろー).css('position','relative').css('animation','anime1 2s ease');

  ひげぞー.classList.remove('hidden');
  $(ひげぞー).css('position','relative').css('animation','anime1 2s ease');

  ひげきんぐ.classList.remove('hidden');
  $(ひげきんぐ).css('position','relative').css('animation','anime1 2s ease');
});

// アフロを押した時(不正解)
アフロ.addEventListener('click', () => {
  stop();
  ハズレ.play();

  $(問題１).remove();
  $(文１).remove();
  $(タイマー).remove();
  $(アフロ).remove();
  $(ひげろー).remove();
  $(ひげぞー).remove();
  $(ひげきんぐ).remove();
  $(正解１).remove();
  $(写真１).remove();
  $(解説１).remove();
  $(次の問題１).remove();

  残念１.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら残念！が表示されるようにしている
  $(残念１).css('position','relative').css('animation','anime1 2s ease');  //ここで残念１の要素にアニメーションを加えている

  写真２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら残念！が表示されるようにしている
  $(写真２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念１の要素にアニメーションを加えている

  解説２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら解説２が表示されるようにしている
  $(解説２).css('position','relative').css('animation','anime1 2s ease');  //ここで解説２の要素にアニメーションを加えている

  次の問題２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら次の問題２が表示されるようにしている
})

// ひげろーを押した時(正解)
ひげろー.addEventListener('click', () => {
  num++;  //ここでnumの値を１だけ増やしている
  console.log(num);

  stop();
  正解.play();

  $(問題１).remove();  //ここでコーヒーボタンがクリックされたら問題１の要素を削除している
  $(文１).remove();  //ここでコーヒーボタンがクリックされたら文１の要素を削除している
  $(タイマー).remove();
  $(アフロ).remove();
  $(ひげろー).remove();
  $(ひげぞー).remove();
  $(ひげきんぐ).remove();

  正解１.classList.remove('hidden');  //ここでコーヒーボタンがクリックされたら正解！が表示されるようにしている
  $(正解１).css('position','relative');
  $(正解１).css('animation','anime1 2s ease');  //ここで正解１の要素にアニメーションを加えている

  写真１.classList.remove('hidden');  //ここでコーヒーボタンがクリックされたら正解！が表示されるようにしている
  $(写真１).css('position','relative');
  $(写真１).css('animation','anime1 2s ease');  //ここで正解１の要素にアニメーションを加えている

  解説１.classList.remove('hidden');  //ここでコーヒーボタンがクリックされたら解説が表示されるようにしている
  $(解説１).css('position','relative');
  $(解説１).css('animation','anime1 2s ease');  //ここで解説１の要素にアニメーションを加えている

  次の問題１.classList.remove('hidden');  //ここでコーヒーボタンがクリックされたら次の問題へボタンが表示されるようにしている
})

// ひげぞーを押した時(不正解)
ひげぞー.addEventListener('click', () => {
  stop();
  ハズレ.play();

  $(問題１).remove();
  $(文１).remove();
  $(タイマー).remove();
  $(アフロ).remove();
  $(ひげろー).remove();
  $(ひげぞー).remove();
  $(ひげきんぐ).remove();
  $(正解１).remove();
  $(写真１).remove();
  $(解説１).remove();
  $(次の問題１).remove();

  残念１.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら残念！が表示されるようにしている
  $(残念１).css('position','relative').css('animation','anime1 2s ease');  //ここで残念１の要素にアニメーションを加えている

  写真２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら残念！が表示されるようにしている
  $(写真２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念１の要素にアニメーションを加えている

  解説２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら解説２が表示されるようにしている
  $(解説２).css('position','relative').css('animation','anime1 2s ease');  //ここで解説２の要素にアニメーションを加えている

  次の問題２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら次の問題２が表示されるようにしている
})

// ひげきんぐを押した時(不正解)
ひげきんぐ.addEventListener('click', () => {
  stop();
  ハズレ.play();

  $(問題１).remove();
  $(文１).remove();
  $(タイマー).remove();
  $(アフロ).remove();
  $(ひげろー).remove();
  $(ひげぞー).remove();
  $(ひげきんぐ).remove();
  $(正解１).remove();
  $(写真１).remove();
  $(解説１).remove();
  $(次の問題１).remove();

  残念１.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら残念！が表示されるようにしている
  $(残念１).css('position','relative').css('animation','anime1 2s ease');  //ここで残念１の要素にアニメーションを加えている

  写真２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら残念！が表示されるようにしている
  $(写真２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念１の要素にアニメーションを加えている

  解説２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら解説２が表示されるようにしている
  $(解説２).css('position','relative').css('animation','anime1 2s ease');  //ここで解説２の要素にアニメーションを加えている

  次の問題２.classList.remove('hidden');  //ここで紅茶ボタンがクリックされたら次の問題２が表示されるようにしている
})

// 問題１に正解した時
次の問題１.addEventListener('click', () => {

  $(正解１).remove();  //正解１の要素を削除している
  $(写真１).remove();
  $(解説１).remove();  //解説１の要素を削除している
  $(次の問題１).remove();  //次の問題１の要素を削除している
  $(残念１).remove();  //残念１の要素を削除している
  $(写真２).remove();
  $(解説２).remove();  //解説２の要素を削除している
  $(次の問題２).remove();  //次の問題２の要素を削除している

  問題２.classList.remove('hidden');  //問題２の要素を表示させている
  $(問題２).css('position','relative').css('animation','anime1 2s ease');  //ここで問題２の要素にアニメーションを加えている

  文２.classList.remove('hidden');  //文２の要素を表示させている
  $(文２).css('position','relative').css('animation','anime1 2s ease');  //ここで文２の要素にアニメーションを加えている

  タイマー２.classList.remove('hidden');
  $(タイマー２).css('position','relative').css('animation','anime1 2s ease');
  ct2();
  start2();

  輝光.classList.remove('hidden');  //藤木書店の要素を表示させている
  $(輝光).css('position','relative').css('animation','anime1 2s ease');  //ここで藤木書店の要素にアニメーションを加えている

  瞬奇跡.classList.remove('hidden');  //藤代書店の要素を表示させている
  $(瞬奇跡).css('position','relative').css('animation','anime1 2s ease');  //ここで藤代書店の要素にアニメーションを加えている

  光奇跡.classList.remove('hidden');  //小糸書店の要素を表示させている
  $(光奇跡).css('position','relative').css('animation','anime1 2s ease');  //ここで小糸書店の要素にアニメーションを加えている

  輝奇跡.classList.remove('hidden');  //藤森書店の要素を表示させている
  $(輝奇跡).css('position','relative').css('animation','anime1 2s ease');  //ここで藤森書店の要素にアニメーションを加えている
})

// 問題１に不正解した時
次の問題２.addEventListener('click', () => {
  $(残念１).remove();  //残念１の要素を削除している
  $(写真２).remove();
  $(解説２).remove();  //解説２の要素を削除している
  $(次の問題２).remove();  //次の問題２の要素を削除している

  問題２.classList.remove('hidden');  //問題２の要素を表示させている
  $(問題２).css('position','relative').css('animation','anime1 2s ease');  //ここで問題２の要素にアニメーションを加えている

  文２.classList.remove('hidden');  //文２の要素を表示させている
  $(文２).css('position','relative').css('animation','anime1 2s ease');  //ここで文２の要素にアニメーションを加えている

  タイマー２.classList.remove('hidden');
  $(タイマー２).css('position','relative').css('animation','anime1 2s ease');
  ct2();
  start2();

  輝光.classList.remove('hidden');  //藤木書店の要素を表示させている
  $(輝光).css('position','relative').css('animation','anime1 2s ease');  //ここで藤木書店の要素にアニメーションを加えている

  瞬奇跡.classList.remove('hidden');  //藤代書店の要素を表示させている
  $(瞬奇跡).css('position','relative').css('animation','anime1 2s ease');  //ここで藤代書店の要素にアニメーションを加えている

  光奇跡.classList.remove('hidden');  //小糸書店の要素を表示させている
  $(光奇跡).css('position','relative').css('animation','anime1 2s ease');  //ここで小糸書店の要素にアニメーションを加えている

  輝奇跡.classList.remove('hidden');  //藤森書店の要素を表示させている
  $(輝奇跡).css('position','relative').css('animation','anime1 2s ease');  //ここで藤森書店の要素にアニメーションを加えている
})

// 輝光を押した時(不正解)
輝光.addEventListener('click', () => {
  stop();
  ハズレ.play();

  $(問題２).remove();  //問題２の要素を削除している
  $(文２).remove();  //文２の要素を削除している
  $(タイマー２).remove();
  $(輝光).remove();  //藤木書店の要素を削除している
  $(瞬奇跡).remove();  //藤代書店の要素を削除している
  $(光奇跡).remove();  //小糸書店の要素を削除している
  $(輝奇跡).remove();  //藤森書店の要素を削除している
  $(正解２).remove();  //正解２の要素を削除している
  $(写真３).remove();
  $(解説３).remove();  //解説３の要素を削除している
  $(次の問題３).remove();  //次の問題３の要素を削除している

  残念２.classList.remove('hidden');  //残念２の要素を表示させている
  $(残念２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念２の要素にアニメーションを加えている

  写真４.classList.remove('hidden');  //写真２の要素を表示させている
  $(写真４).css('position','relative').css('animation','anime1 2s ease');  //ここで写真２の要素にアニメーションを加えている

  解説４.classList.remove('hidden');  //解説４の要素を表示させている
  $(解説４).css('position','relative').css('animation','anime1 2s ease');  //ここで解説４の要素にアニメーションを加えている

  次の問題４.classList.remove('hidden');  //次の問題４の要素を表示させている
})

// 瞬奇跡を押した時(不正解)
瞬奇跡.addEventListener('click', () => {
  stop();
  ハズレ.play();

  $(問題２).remove();  //問題２の要素を削除している
  $(文２).remove();  //文２の要素を削除している
  $(タイマー２).remove();
  $(輝光).remove();  //藤木書店の要素を削除している
  $(瞬奇跡).remove();  //藤代書店の要素を削除している
  $(光奇跡).remove();  //小糸書店の要素を削除している
  $(輝奇跡).remove();  //藤森書店の要素を削除している
  $(正解２).remove();  //正解２の要素を削除している
  $(写真３).remove();
  $(解説３).remove();  //解説３の要素を削除している
  $(次の問題３).remove();  //次の問題３の要素を削除している

  残念２.classList.remove('hidden');  //残念２の要素を表示させている
  $(残念２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念２の要素にアニメーションを加えている

  写真４.classList.remove('hidden');  //写真２の要素を表示させている
  $(写真４).css('position','relative').css('animation','anime1 2s ease');  //ここで写真２の要素にアニメーションを加えている

  解説４.classList.remove('hidden');  //解説４の要素を表示させている
  $(解説４).css('position','relative').css('animation','anime1 2s ease');  //ここで解説４の要素にアニメーションを加えている

  次の問題４.classList.remove('hidden');  //次の問題４の要素を表示させている
})

// 光奇跡を押した時(不正解)
光奇跡.addEventListener('click', () => {
  stop();
  ハズレ.play();

  $(問題２).remove();  //問題２の要素を削除している
  $(文２).remove();  //文２の要素を削除している
  $(タイマー２).remove();
  $(輝光).remove();  //藤木書店の要素を削除している
  $(瞬奇跡).remove();  //藤代書店の要素を削除している
  $(光奇跡).remove();  //小糸書店の要素を削除している
  $(輝奇跡).remove();  //藤森書店の要素を削除している
  $(正解２).remove();  //正解２の要素を削除している
  $(写真３).remove();
  $(解説３).remove();  //解説３の要素を削除している
  $(次の問題３).remove();  //次の問題３の要素を削除している

  残念２.classList.remove('hidden');  //残念２の要素を表示させている
  $(残念２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念２の要素にアニメーションを加えている

  写真４.classList.remove('hidden');  //写真２の要素を表示させている
  $(写真４).css('position','relative').css('animation','anime1 2s ease');  //ここで写真２の要素にアニメーションを加えている

  解説４.classList.remove('hidden');  //解説４の要素を表示させている
  $(解説４).css('position','relative').css('animation','anime1 2s ease');  //ここで解説４の要素にアニメーションを加えている

  次の問題４.classList.remove('hidden');  //次の問題４の要素を表示させている
})

// 輝奇跡を押した時(正解)
輝奇跡.addEventListener('click', () => {

  stop();
  正解.play();

  num++;  //ここでnumの値を１だけ増やしている
  console.log(num);

  $(問題２).remove();  //問題２の要素を削除している
  $(文２).remove();  //文２の要素を削除している
  $(タイマー２).remove();
  $(輝光).remove();  //藤木書店の要素を削除している
  $(瞬奇跡).remove();  //藤代書店の要素を削除している
  $(光奇跡).remove();  //小糸書店の要素を削除している
  $(輝奇跡).remove();  //藤森書店の要素を削除している

  正解２.classList.remove('hidden');  //ここで正解！を表示させている
  $(正解２).css('position','relative').css('animation','anime1 2s ease');  //ここで正解２の要素にアニメーションを加えている

  写真３.classList.remove('hidden');  //ここで正解！を表示させている
  $(写真３).css('position','relative').css('animation','anime1 2s ease');  //ここで写真１の要素にアニメーションを加えている

  解説３.classList.remove('hidden');  //ここで解説３を表示させている
  $(解説３).css('position','relative').css('animation','anime1 2s ease');  //ここで解説３の要素にアニメーションを加えている

  次の問題３.classList.remove('hidden');  //ここで次の問題へを表示させている
})

// 問題２に正解した時
次の問題３.addEventListener('click', () => {

  $(正解２).remove();  //正解２の要素を削除している
  $(写真３).remove();  //写真１の要素を削除している
  $(解説３).remove();  //解説３の要素を削除している
  $(次の問題３).remove();  //次の問題３の要素を削除している
  $(残念２).remove();  //残念２の要素を削除している
  $(写真４).remove();  //写真２の要素を削除している
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

  トゥンク.classList.remove('hidden');  //近見東高校の要素を表示させている
  $(トゥンク).css('position','relative').css('animation','anime1 2s ease');  //ここで近見東高校の要素にアニメーションを加えている

  トクン.classList.remove('hidden');  //遠見束高校の要素を表示させている
  $(トクン).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見束高校の要素にアニメーションを加えている

  ドキ.classList.remove('hidden');  //遠見東高校の要素を表示させている
  $(ドキ).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見東高校の要素にアニメーションを加えている

  ズキューン.classList.remove('hidden');  //遠見西高校の要素を表示させている
  $(ズキューン).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見西高校の要素にアニメーションを加えている
})

// 問題２に不正解した時
次の問題４.addEventListener('click', () => {
  $(残念２).remove();  //残念２の要素を削除している
  $(写真４).remove();  //写真２の要素を削除している
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

  トゥンク.classList.remove('hidden');  //近見東高校の要素を表示させている
  $(トゥンク).css('position','relative').css('animation','anime1 2s ease');  //ここで近見東高校の要素にアニメーションを加えている

  トクン.classList.remove('hidden');  //遠見束高校の要素を表示させている
  $(トクン).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見束高校の要素にアニメーションを加えている

  ドキ.classList.remove('hidden');  //遠見東高校の要素を表示させている
  $(ドキ).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見東高校の要素にアニメーションを加えている

  ズキューン.classList.remove('hidden');  //遠見西高校の要素を表示させている
  $(ズキューン).css('position','relative').css('animation','anime1 2s ease');  //ここで遠見西高校の要素にアニメーションを加えている
})

// トゥンクを押した時(正解)
トゥンク.addEventListener('click', () => {

  stop();
  $(タイマー３).remove();
  正解.play();

  num++;  //numの値を１だけ増やしている
  console.log(num);

  $(問題３).remove();  //問題３の要素を削除している
  $(文３).remove();  //文３の要素を削除している
  $(トゥンク).remove();  //近見東高校の要素を削除している
  $(トクン).remove();  //遠見束高校の要素を削除している
  $(ドキ).remove();  //遠見東高校の要素を削除している
  $(ズキューン).remove();  //遠見西高校の要素を削除している

  正解３.classList.remove('hidden');  //正解３を表示させている
  $(正解３).css('position','relative').css('animation','anime1 2s ease');  //ここで正解３の要素にアニメーションを加えている

  解説５.classList.remove('hidden');  //解説５を表示させている
  $(解説５).css('position','relative').css('animation','anime1 2s ease');  //ここで解説５の要素にアニメーションを加えている

  次の問題５.classList.remove('hidden');  //次の問題５を表示させている
})

// トクンを押した時(不正解)
トクン.addEventListener('click', () => {
  stop();
  $(タイマー３).remove();
  ハズレ.play();

  $(問題３).remove();  //問題３の要素を削除している
  $(文３).remove();  //文３の要素を削除している
  $(トゥンク).remove();  //近見東高校の要素を削除している
  $(トクン).remove();  //遠見束高校の要素を削除している
  $(ドキ).remove();  //遠見東高校の要素を削除している
  $(ズキューン).remove();  //遠見西高校の要素を削除している
  $(正解３).remove();  //正解３の要素を削除している
  $(解説５).remove();  //解説５の要素を削除している
  $(次の問題５).remove();  //次の問題５の要素を削除している

  残念３.classList.remove('hidden');  //残念３の要素を表示させている
  $(残念３).css('position','relative').css('animation','anime1 2s ease');  //ここで残念３の要素にアニメーションを加えている

  解説６.classList.remove('hidden');  //解説６の要素を表示させている
  $(解説６).css('position','relative').css('animation','anime1 2s ease');  //ここで解説６の要素にアニメーションを加えている

  次の問題６.classList.remove('hidden');  //次の問題６の要素を表示させている
})

// ドキを押した時(不正解)
ドキ.addEventListener('click', () => {
  stop();
  $(タイマー３).remove();
  ハズレ.play();

  $(問題３).remove();  //問題３の要素を削除している
  $(文３).remove();  //文３の要素を削除している
  $(トゥンク).remove();  //近見東高校の要素を削除している
  $(トクン).remove();  //遠見束高校の要素を削除している
  $(ドキ).remove();  //遠見東高校の要素を削除している
  $(ズキューン).remove();  //遠見西高校の要素を削除している
  $(正解３).remove();  //正解３の要素を削除している
  $(解説５).remove();  //解説５の要素を削除している
  $(次の問題５).remove();  //次の問題５の要素を削除している

  残念３.classList.remove('hidden');  //残念３の要素を表示させている
  $(残念３).css('position','relative').css('animation','anime1 2s ease');  //ここで残念３の要素にアニメーションを加えている

  解説６.classList.remove('hidden');  //解説６の要素を表示させている
  $(解説６).css('position','relative').css('animation','anime1 2s ease');  //ここで解説６の要素にアニメーションを加えている

  次の問題６.classList.remove('hidden');  //次の問題６の要素を表示させている
})

// ズキューンを押した時(不正解)
ズキューン.addEventListener('click', () => {
  stop();
  $(タイマー３).remove();
  ハズレ.play();

  $(問題３).remove();  //問題３の要素を削除している
  $(文３).remove();  //文３の要素を削除している
  $(トゥンク).remove();  //近見東高校の要素を削除している
  $(トクン).remove();  //遠見束高校の要素を削除している
  $(ドキ).remove();  //遠見東高校の要素を削除している
  $(ズキューン).remove();  //遠見西高校の要素を削除している
  $(正解３).remove();  //正解３の要素を削除している
  $(解説５).remove();  //解説５の要素を削除している
  $(次の問題５).remove();  //次の問題５の要素を削除している

  残念３.classList.remove('hidden');  //残念３の要素を表示させている
  $(残念３).css('position','relative').css('animation','anime1 2s ease');  //ここで残念３の要素にアニメーションを加えている

  解説６.classList.remove('hidden');  //解説６の要素を表示させている
  $(解説６).css('position','relative').css('animation','anime1 2s ease');  //ここで解説６の要素にアニメーションを加えている

  次の問題６.classList.remove('hidden');  //次の問題６の要素を表示させている
})

// 問題３に正解した時
次の問題５.addEventListener('click', () => {
  //要素削除部分
  $(正解３).remove();
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

  マス７.classList.remove('hidden');
  $(マス７).css('position','relative').css('animation','anime1 2s ease');

  休み.classList.remove('hidden');
  $(休み).css('position','relative').css('animation','anime1 2s ease');

  マス５.classList.remove('hidden');
  $(マス５).css('position','relative').css('animation','anime1 2s ease');

  もう一回.classList.remove('hidden');
  $(もう一回).css('position','relative').css('animation','anime1 2s ease');
})

// 問題３に不正解した時
次の問題６.addEventListener('click', () => {
  //要素削除部分
  $(残念３).remove();
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

  マス７.classList.remove('hidden');
  $(マス７).css('position','relative').css('animation','anime1 2s ease');

  休み.classList.remove('hidden');
  $(休み).css('position','relative').css('animation','anime1 2s ease');

  マス５.classList.remove('hidden');
  $(マス５).css('position','relative').css('animation','anime1 2s ease');

  もう一回.classList.remove('hidden');
  $(もう一回).css('position','relative').css('animation','anime1 2s ease');
})

// マス７を押した時(不正解)
マス７.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー４).remove();
  //要素削除部分
  $(問題４).remove();
  $(文４).remove();
  $(マス７).remove();
  $(休み).remove();
  $(マス５).remove();
  $(もう一回).remove();

  残念４.classList.remove('hidden');
  $(残念４).css('position','relative').css('animation','anime1 2s ease');

  写真６.classList.remove('hidden');
  $(写真６).css('position','relative').css('animation','anime1 2s ease');

  解説８.classList.remove('hidden');
  $(解説８).css('position','relative').css('animation','anime1 2s ease');

  次の問題８.classList.remove('hidden');
})

// 休みを押した時(不正解)
休み.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー４).remove();
  //要素削除部分
  $(問題４).remove();
  $(文４).remove();
  $(マス７).remove();
  $(休み).remove();
  $(マス５).remove();
  $(もう一回).remove();

  残念４.classList.remove('hidden');
  $(残念４).css('position','relative').css('animation','anime1 2s ease');

  写真６.classList.remove('hidden');
  $(写真６).css('position','relative').css('animation','anime1 2s ease');

  解説８.classList.remove('hidden');
  $(解説８).css('position','relative').css('animation','anime1 2s ease');

  次の問題８.classList.remove('hidden');
})

// マス５を押した時(正解)
マス５.addEventListener('click', () => {

  stop();
  $(タイマー４).remove();
  正解.play();

  num++;
  console.log(num);

  //要素削除部分
  $(問題４).remove();
  $(文４).remove();
  $(マス７).remove();
  $(休み).remove();
  $(マス５).remove();
  $(もう一回).remove();

  正解４.classList.remove('hidden');
  $(正解４).css('position','relative').css('animation','anime1 2s ease');

  写真５.classList.remove('hidden');
  $(写真５).css('position','relative').css('animation','anime1 2s ease');

  解説７.classList.remove('hidden');
  $(解説７).css('position','relative').css('animation','anime1 2s ease');

  次の問題７.classList.remove('hidden');
})

// もう一回を押した時(不正解)
もう一回.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー４).remove();
  //要素削除部分
  $(問題４).remove();
  $(文４).remove();
  $(マス７).remove();
  $(休み).remove();
  $(マス５).remove();
  $(もう一回).remove();

  残念４.classList.remove('hidden');
  $(残念４).css('position','relative').css('animation','anime1 2s ease');

  写真６.classList.remove('hidden');
  $(写真６).css('position','relative').css('animation','anime1 2s ease');

  解説８.classList.remove('hidden');
  $(解説８).css('position','relative').css('animation','anime1 2s ease');

  次の問題８.classList.remove('hidden');
})

// 問題４に正解した時
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

  こより.classList.remove('hidden');
  $(こより).css('position','relative').css('animation','anime1 2s ease');

  かのん.classList.remove('hidden');
  $(かのん).css('position','relative').css('animation','anime1 2s ease');
})

// 問題４に不正解した時
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

  こより.classList.remove('hidden');
  $(こより).css('position','relative').css('animation','anime1 2s ease');

  かのん.classList.remove('hidden');
  $(かのん).css('position','relative').css('animation','anime1 2s ease');
})

// こよりを押した時(不正解)
こより.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー５).remove();
  //要素削除部分
  $(問題５).remove();
  $(文５).remove();
  $(こより).remove();
  $(かのん).remove();

  //要素表示部分
  残念５.classList.remove('hidden');
  $(残念５).css('position','relative').css('animation','anime1 2s ease');

  解説１０.classList.remove('hidden');
  $(解説１０).css('position','relative').css('animation','anime1 2s ease');

  次の問題１０.classList.remove('hidden');
})

// かのんを押した時(正解)
かのん.addEventListener('click', () => {

  stop();
  $(タイマー５).remove();
  正解.play();

  num++;
  console.log(num);

  //要素削除部分
  $(問題５).remove();
  $(文５).remove();
  $(こより).remove();
  $(かのん).remove();
  
  //要素表示部分
  正解５.classList.remove('hidden');
  $(正解５).css('position','relative').css('animation','anime1 2s ease');
  
  解説９.classList.remove('hidden');
  $(解説９).css('position','relative').css('animation','anime1 2s ease');
  
  次の問題９.classList.remove('hidden');
})

// 問題５に正解した時
次の問題９.addEventListener('click', () => {
  //要素削除部分
  $(正解５).remove();
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

  十月.classList.remove('hidden');
  $(十月).css('position','relative').css('animation','anime1 2s ease');

  十一月.classList.remove('hidden');
  $(十一月).css('position','relative').css('animation','anime1 2s ease');

  九月.classList.remove('hidden');
  $(九月).css('position','relative').css('animation','anime1 2s ease');

  二月.classList.remove('hidden');
  $(二月).css('position','relative').css('animation','anime1 2s ease');
})

// 問題５に不正解した時
次の問題１０.addEventListener('click', () => {
  //要素削除部分
  $(残念５).remove();
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

  十月.classList.remove('hidden');
  $(十月).css('position','relative').css('animation','anime1 2s ease');

  十一月.classList.remove('hidden');
  $(十一月).css('position','relative').css('animation','anime1 2s ease');

  九月.classList.remove('hidden');
  $(九月).css('position','relative').css('animation','anime1 2s ease');

  二月.classList.remove('hidden');
  $(二月).css('position','relative').css('animation','anime1 2s ease');
})

// 十月を押した時(正解)
十月.addEventListener('click', () => {

  stop();
  $(タイマー６).remove();
  正解.play();

  num++;
  console.log(num);

  //要素削除部分
  $(問題６).remove();
  $(文６).remove();
  $(十月).remove();
  $(十一月).remove();
  $(九月).remove();
  $(二月).remove();
  
  //要素表示部分
  正解６.classList.remove('hidden');
  $(正解６).css('position','relative').css('animation','anime1 2s ease');
  
  写真７.classList.remove('hidden');
  $(写真７).css('position','relative').css('animation','anime1 2s ease');
  
  解説１１.classList.remove('hidden');
  $(解説１１).css('position','relative').css('animation','anime1 2s ease');
  
  次の問題１１.classList.remove('hidden');
})

// 十一月を押した時(不正解)
十一月.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー６).remove();
  //要素削除部分
  $(問題６).remove();
  $(文６).remove();
  $(十月).remove();
  $(十一月).remove();
  $(九月).remove();
  $(二月).remove();

  //要素表示部分
  残念６.classList.remove('hidden');
  $(残念６).css('position','relative').css('animation','anime1 2s ease');

  写真８.classList.remove('hidden');
  $(写真８).css('position','relative').css('animation','anime1 2s ease');

  解説１２.classList.remove('hidden');
  $(解説１２).css('position','relative').css('animation','anime1 2s ease');

  次の問題１２.classList.remove('hidden');
})

// 九月を押した時(不正解)
九月.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー６).remove();
  //要素削除部分
  $(問題６).remove();
  $(文６).remove();
  $(十月).remove();
  $(十一月).remove();
  $(九月).remove();
  $(二月).remove();

  //要素表示部分
  残念６.classList.remove('hidden');
  $(残念６).css('position','relative').css('animation','anime1 2s ease');

  写真８.classList.remove('hidden');
  $(写真８).css('position','relative').css('animation','anime1 2s ease');

  解説１２.classList.remove('hidden');
  $(解説１２).css('position','relative').css('animation','anime1 2s ease');

  次の問題１２.classList.remove('hidden');
})

// 二月を押した時(不正解)
二月.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー６).remove();
  //要素削除部分
  $(問題６).remove();
  $(文６).remove();
  $(十月).remove();
  $(十一月).remove();
  $(九月).remove();
  $(二月).remove();

  //要素表示部分
  残念６.classList.remove('hidden');
  $(残念６).css('position','relative').css('animation','anime1 2s ease');

  写真８.classList.remove('hidden');
  $(写真８).css('position','relative').css('animation','anime1 2s ease');

  解説１２.classList.remove('hidden');
  $(解説１２).css('position','relative').css('animation','anime1 2s ease');

  次の問題１２.classList.remove('hidden');
})

// 問題６に正解した時
次の問題１１.addEventListener('click', () => {
  //要素削除部分
  $(正解６).remove();
  $(写真７).remove();
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

  五十.classList.remove('hidden')
  $(五十).css('position','relative').css('animation','anime1 2s ease');

  四十八.classList.remove('hidden')
  $(四十八).css('position','relative').css('animation','anime1 2s ease');

  五十二.classList.remove('hidden')
  $(五十二).css('position','relative').css('animation','anime1 2s ease');

  五十一.classList.remove('hidden')
  $(五十一).css('position','relative').css('animation','anime1 2s ease');
})

// 問題６に不正解した時
次の問題１２.addEventListener('click', () => {
  //要素削除部分
  $(残念６).remove();
  $(写真８).remove();
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

  五十.classList.remove('hidden')
  $(五十).css('position','relative').css('animation','anime1 2s ease');

  四十八.classList.remove('hidden')
  $(四十八).css('position','relative').css('animation','anime1 2s ease');

  五十二.classList.remove('hidden')
  $(五十二).css('position','relative').css('animation','anime1 2s ease');

  五十一.classList.remove('hidden')
  $(五十一).css('position','relative').css('animation','anime1 2s ease');
})

// 五十を押した時(正解)
五十.addEventListener('click', () => {

  stop();
  $(タイマー７).remove();
  正解.play();

  num++;
  console.log(num);
  //要素削除部分
  $(問題７).remove();
  $(文７).remove();
  $(五十).remove();
  $(四十八).remove();
  $(五十二).remove();
  $(五十一).remove();

  //要素表示部分
  正解７.classList.remove('hidden');
  $(正解７).css('position','relative').css('animation','anime1 2s ease');

  写真９.classList.remove('hidden');
  $(写真９).css('position','relative').css('animation','anime1 2s ease');

  解説１３.classList.remove('hidden');
  $(解説１３).css('position','relative').css('animation','anime1 2s ease');

  次の問題１３.classList.remove('hidden');
})

// 四十八を押した時(不正解)
四十八.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー７).remove();
  //要素削除部分
  $(問題７).remove();
  $(文７).remove();
  $(五十).remove();
  $(四十八).remove();
  $(五十二).remove();
  $(五十一).remove();

  //要素表示部分
  残念７.classList.remove('hidden');
  $(残念７).css('position','relative').css('animation','anime1 2s ease');

  写真１０.classList.remove('hidden');
  $(写真１０).css('position','relative').css('animation','anime1 2s ease');

  解説１４.classList.remove('hidden');
  $(解説１４).css('position','relative').css('animation','anime1 2s ease');

  次の問題１４.classList.remove('hidden');
})

// 五十二を押した時(不正解)
五十二.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー７).remove();
  //要素削除部分
  $(問題７).remove();
  $(文７).remove();
  $(五十).remove();
  $(四十八).remove();
  $(五十二).remove();
  $(五十一).remove();

  //要素表示部分
  残念７.classList.remove('hidden');
  $(残念７).css('position','relative').css('animation','anime1 2s ease');

  写真１０.classList.remove('hidden');
  $(写真１０).css('position','relative').css('animation','anime1 2s ease');

  解説１４.classList.remove('hidden');
  $(解説１４).css('position','relative').css('animation','anime1 2s ease');

  次の問題１４.classList.remove('hidden');
})

// 五十一を押した時(不正解)
五十一.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー７).remove();
  //要素削除部分
  $(問題７).remove();
  $(文７).remove();
  $(五十).remove();
  $(四十八).remove();
  $(五十二).remove();
  $(五十一).remove();

  //要素表示部分
  残念７.classList.remove('hidden');
  $(残念７).css('position','relative').css('animation','anime1 2s ease');

  写真１０.classList.remove('hidden');
  $(写真１０).css('position','relative').css('animation','anime1 2s ease');

  解説１４.classList.remove('hidden');
  $(解説１４).css('position','relative').css('animation','anime1 2s ease');

  次の問題１４.classList.remove('hidden');
})

// 問題７に正解した時
次の問題１３.addEventListener('click', () => {
  //要素削除部分
  $(正解７).remove();
  $(写真９).remove();
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

  六.classList.remove('hidden');
  $(六).css('position','relative').css('animation','anime1 2s ease');

  七.classList.remove('hidden');
  $(七).css('position','relative').css('animation','anime1 2s ease');

  八.classList.remove('hidden');
  $(八).css('position','relative').css('animation','anime1 2s ease');

  十.classList.remove('hidden');
  $(十).css('position','relative').css('animation','anime1 2s ease');
})

// 問題７に不正解した時
次の問題１４.addEventListener('click', () => {
  //要素削除部分
  $(残念７).remove();
  $(写真１０).remove();
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

  六.classList.remove('hidden');
  $(六).css('position','relative').css('animation','anime1 2s ease');

  七.classList.remove('hidden');
  $(七).css('position','relative').css('animation','anime1 2s ease');

  八.classList.remove('hidden');
  $(八).css('position','relative').css('animation','anime1 2s ease');

  十.classList.remove('hidden');
  $(十).css('position','relative').css('animation','anime1 2s ease');
})

// 六を押した時(不正解)
六.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー８).remove();
  //要素削除部分
  $(問題８).remove();
  $(文８).remove();
  $(六).remove();
  $(七).remove();
  $(八).remove();
  $(十).remove();

  //要素表示部分
  残念８.classList.remove('hidden');
  $(残念８).css('position','relative').css('animation','anime1 2s ease');

  写真１２.classList.remove('hidden');
  $(写真１２).css('position','relative').css('animation','anime1 2s ease');

  解説１６.classList.remove('hidden');
  $(解説１６).css('position','relative').css('animation','anime1 2s ease');

  次の問題１６.classList.remove('hidden');
})

// 七を押した時(不正解)
七.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー８).remove();
  //要素削除部分
  $(問題８).remove();
  $(文８).remove();
  $(六).remove();
  $(七).remove();
  $(八).remove();
  $(十).remove();

  //要素表示部分
  残念８.classList.remove('hidden');
  $(残念８).css('position','relative').css('animation','anime1 2s ease');

  写真１２.classList.remove('hidden');
  $(写真１２).css('position','relative').css('animation','anime1 2s ease');

  解説１６.classList.remove('hidden');
  $(解説１６).css('position','relative').css('animation','anime1 2s ease');

  次の問題１６.classList.remove('hidden');
})

// 八を押した時(不正解)
八.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー８).remove();
  //要素削除部分
  $(問題８).remove();
  $(文８).remove();
  $(六).remove();
  $(七).remove();
  $(八).remove();
  $(十).remove();

  //要素表示部分
  残念８.classList.remove('hidden');
  $(残念８).css('position','relative').css('animation','anime1 2s ease');

  写真１２.classList.remove('hidden');
  $(写真１２).css('position','relative').css('animation','anime1 2s ease');

  解説１６.classList.remove('hidden');
  $(解説１６).css('position','relative').css('animation','anime1 2s ease');

  次の問題１６.classList.remove('hidden');
})

// 十を押した時(正解)
十.addEventListener('click', () => {

  stop();
  $(タイマー８).remove();
  正解.play();

  num++;
  console.log(num);

  //要素削除部分
  $(問題８).remove();
  $(文８).remove();
  $(六).remove();
  $(七).remove();
  $(八).remove();
  $(十).remove();

  //要素表示部分
  正解８.classList.remove('hidden');
  $(正解８).css('position','relative').css('animation','anime1 2s ease');

  写真１１.classList.remove('hidden');
  $(写真１１).css('position','relative').css('animation','anime1 2s ease');

  解説１５.classList.remove('hidden');
  $(解説１５).css('position','relative').css('animation','anime1 2s ease');

  次の問題１５.classList.remove('hidden');
})

// 問題８に正解した時
次の問題１５.addEventListener('click', () => {
  //要素削除部分
  $(正解８).remove();
  $(写真１１).remove();
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

  髪飾り.classList.remove('hidden');
  $(髪飾り).css('position','relative').css('animation','anime1 2s ease');

  ケーキ.classList.remove('hidden');
  $(ケーキ).css('position','relative').css('animation','anime1 2s ease');

  プリン.classList.remove('hidden');
  $(プリン).css('position','relative').css('animation','anime1 2s ease');

  クッキー.classList.remove('hidden');
  $(クッキー).css('position','relative').css('animation','anime1 2s ease');
})

// 問題８に不正解した時
次の問題１６.addEventListener('click', () => {
  //要素削除部分
  $(残念８).remove();
  $(写真１２).remove();
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

  髪飾り.classList.remove('hidden');
  $(髪飾り).css('position','relative').css('animation','anime1 2s ease');

  ケーキ.classList.remove('hidden');
  $(ケーキ).css('position','relative').css('animation','anime1 2s ease');

  プリン.classList.remove('hidden');
  $(プリン).css('position','relative').css('animation','anime1 2s ease');

  クッキー.classList.remove('hidden');
  $(クッキー).css('position','relative').css('animation','anime1 2s ease');
})

// 髪飾りを押した時(不正解)
髪飾り.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー９).remove();
  //要素削除部分
  $(問題９).remove();
  $(文９).remove();
  $(髪飾り).remove();
  $(ケーキ).remove();
  $(プリン).remove();
  $(クッキー).remove();

  //要素表示部分
  残念９.classList.remove('hidden');
  $(残念９).css('position','relative').css('animation','anime1 2s ease');

  解説１８.classList.remove('hidden');
  $(解説１８).css('position','relative').css('animation','anime1 2s ease');

  次の問題１８.classList.remove('hidden');
})

// ケーキを押した時(正解)
ケーキ.addEventListener('click', () => {

  num++;
  console.log(num);
  正解.play();
  stop();

  //要素削除部分
  $(問題９).remove();
  $(文９).remove();
  $(タイマー９).remove();
  $(髪飾り).remove();
  $(ケーキ).remove();
  $(プリン).remove();
  $(クッキー).remove();

  //要素表示部分
  正解９.classList.remove('hidden');
  $(正解１０).css('position','relative').css('animation','anime1 2s ease');

  解説１７.classList.remove('hidden');
  $(解説１７).css('position','relative').css('animation','anime1 2s ease');

  次の問題１７.classList.remove('hidden');
})

// プリンを押した時(不正解)
プリン.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー９).remove();
  //要素削除部分
  $(問題９).remove();
  $(文９).remove();
  $(髪飾り).remove();
  $(ケーキ).remove();
  $(プリン).remove();
  $(クッキー).remove();

  //要素表示部分
  残念９.classList.remove('hidden');
  $(残念９).css('position','relative').css('animation','anime1 2s ease');

  解説１８.classList.remove('hidden');
  $(解説１８).css('position','relative').css('animation','anime1 2s ease');

  次の問題１８.classList.remove('hidden');
})

// クッキーを押した(不正解)
クッキー.addEventListener('click', () => {

  stop();
  ハズレ.play();
  $(タイマー９).remove();
  //要素削除部分
  $(問題９).remove();
  $(文９).remove();
  $(髪飾り).remove();
  $(ケーキ).remove();
  $(プリン).remove();
  $(クッキー).remove();

  //要素表示部分
  残念９.classList.remove('hidden');
  $(残念９).css('position','relative').css('animation','anime1 2s ease');

  解説１８.classList.remove('hidden');
  $(解説１８).css('position','relative').css('animation','anime1 2s ease');

  次の問題１８.classList.remove('hidden');
})

// 問題９に正解した時
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

  タイマー１０.classList.remove('hidden');
  $(タイマー１０).css('position','relative').css('animation','anime1 2s ease');
  ct10();
  start10();

  上田.classList.remove('hidden');
  $(上田).css('position','relative').css('animation','anime1 2s ease');

  指出.classList.remove('hidden');
  $(指出).css('position','relative').css('animation','anime1 2s ease');

  山田.classList.remove('hidden');
  $(山田).css('position','relative').css('animation','anime1 2s ease');

  中川.classList.remove('hidden');
  $(中川).css('position','relative').css('animation','anime1 2s ease');
})

// 問題９に不正解した時
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

  タイマー１０.classList.remove('hidden');
  $(タイマー１０).css('position','relative').css('animation','anime1 2s ease');
  ct10();
  start10();

  上田.classList.remove('hidden');
  $(上田).css('position','relative').css('animation','anime1 2s ease');

  指出.classList.remove('hidden');
  $(指出).css('position','relative').css('animation','anime1 2s ease');

  山田.classList.remove('hidden');
  $(山田).css('position','relative').css('animation','anime1 2s ease');

  中川.classList.remove('hidden');
  $(中川).css('position','relative').css('animation','anime1 2s ease');
})

// 上田を押した時(不正解)
上田.addEventListener('click', () => {

  ハズレ.play();
  //要素削除部分
  $(問題１０).remove();
  $(文１０).remove();
  $(タイマー１０).remove();
  $(上田).remove();
  $(指出).remove();
  $(山田).remove();
  $(中川).remove();

  //要素表示部分
  残念１０.classList.remove('hidden');
  $(残念１０).css('position','relative').css('animation','anime1 2s ease');

  解説２０.classList.remove('hidden');
  $(解説２０).css('position','relative').css('animation','anime1 2s ease');

  結果２.classList.remove('hidden');
})

// 指出を押した時(正解)
指出.addEventListener('click', () => {

  num++;
  console.log(num);
  正解.play();
  stop();

  //要素削除部分
  $(問題１０).remove();
  $(文１０).remove();
  $(タイマー１０).remove();
  $(上田).remove();
  $(指出).remove();
  $(山田).remove();
  $(中川).remove();

  //要素表示部分
  正解１０.classList.remove('hidden');
  $(正解１０).css('position','relative').css('animation','anime1 2s ease');

  解説１９.classList.remove('hidden');
  $(解説１９).css('position','relative').css('animation','anime1 2s ease');

  結果１.classList.remove('hidden');
})

// 山田を押した時(不正解)
山田.addEventListener('click', () => {

  ハズレ.play();
  //要素削除部分
  $(問題１０).remove();
  $(文１０).remove();
  $(タイマー１０).remove();
  $(上田).remove();
  $(指出).remove();
  $(山田).remove();
  $(中川).remove();

  //要素表示部分
  残念１０.classList.remove('hidden');
  $(残念１０).css('position','relative').css('animation','anime1 2s ease');

  解説２０.classList.remove('hidden');
  $(解説２０).css('position','relative').css('animation','anime1 2s ease');

  結果２.classList.remove('hidden');
})

// 中川を押した時(不正解)
中川.addEventListener('click', () => {

  ハズレ.play();
  //要素削除部分
  $(問題１０).remove();
  $(文１０).remove();
  $(タイマー１０).remove();
  $(上田).remove();
  $(指出).remove();
  $(山田).remove();
  $(中川).remove();

  //要素表示部分
  残念１０.classList.remove('hidden');
  $(残念１０).css('position','relative').css('animation','anime1 2s ease');

  解説２０.classList.remove('hidden');
  $(解説２０).css('position','relative').css('animation','anime1 2s ease');

  結果２.classList.remove('hidden');
})

// 問題１０に正解した時
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
  文１３.value = 'https://mysite2-e2145.web.app/Mysite4/Lily1.html　#百合センター試験　@MKRKL　私は私に天使が舞い降りた!のセンター試験で10問中' + num + '問正解出来ました！';

  シェア.classList.remove('hidden');
  $(シェア).css('position','relative').css('animation','anime1 2s ease');

  文１５.classList.remove('hidden');
  $(文１５).css('position','relative').css('animation','anime1 2s ease');

  文１６.classList.remove('hidden');
  $(文１６).css('position','relative').css('animation','anime1 2s ease');

  リンク.classList.remove('hidden');
  $(リンク).css('position','relative').css('animation','anime1 2s ease');

  if(1 <= num && num <= 2){  //ここの部分をきちんとやること！
    文１１.textContent = 'あなたはまだわたてんをきちんと読み込めていないのかもしれません... わたてんは読んでいてとにかく面白いし、おねロリが好きな人にとってはすごくおすすめの作品です。是非もう一度読んでみてください！';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(3 <= num && num <= 5){
    文１１.textContent = 'わたてんの内容をある程度覚えることが出来ています！ 本の中身だけではなく、表紙の裏なども覗いてみると、面白い発見がありますので、是非見てみてください♪';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(6 <= num && num <= 9){
    文１１.textContent = '良いですね！ わたてんをきちんと読み込めています！ これぐらいわたてんの知識があるなら、安心して布教することが出来ます。';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(num === 10){
    文１１.textContent = 'よく満点を取ることが出来ましたね♪ 難問も解くことが出来て本当にすごいです！';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }
})

// 問題１０に不正解した時
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
  文１３.value = 'https://mysite2-e2145.web.app/Mysite4/Lily1.html　#百合センター試験　@MKRKL　私は私に天使が舞い降りた!のセンター試験で10問中' + num + '問正解出来ました！';

  シェア.classList.remove('hidden');
  $(シェア).css('position','relative').css('animation','anime1 2s ease');

  文１５.classList.remove('hidden');
  $(文１５).css('position','relative').css('animation','anime1 2s ease');

  文１６.classList.remove('hidden');
  $(文１６).css('position','relative').css('animation','anime1 2s ease');

  リンク.classList.remove('hidden');
  $(リンク).css('position','relative').css('animation','anime1 2s ease');

  if(0 <= num && num <= 2){  //ここの部分をきちんとやること！
    文１１.textContent = 'あなたはまだわたてんをきちんと読み込めていないのかもしれません... わたてんは読んでいてとにかく面白いし、おねロリが好きな人にとってはすごくおすすめの作品です。是非もう一度読んでみてください！';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(3 <= num && num <= 5){
    文１１.textContent = 'わたてんを読んでいて、その内容をある程度覚えることが出来ています！ 本の中身だけではなく、表紙の裏なども覗いてみると、面白い発見がありますので、是非見てみてください♪';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }else if(6 <= num && num <= 9){
    文１１.textContent = '良いですね！ わたてんをきちんと読み込めています！ これぐらいわたてんの知識があるなら、安心して布教することが出来ます。';
    文１１.classList.remove('hidden');
    $(文１１).css('position','relative').css('animation','anime1 2s ease');
  }
})

//ページが更新された時に起こるイベント設定
window.addEventListener('beforeunload', (e) => {
  if(num2 === 1){
    e.preventDefault();
    e.returnValue = '私に天使が舞い降りた!のセンター試験のスタート画面に戻ります！';
  }
})

// 効果音取得
let 正解  = new Audio('music/正解.mp3');
let ハズレ= new Audio('music/ハズレ.mp3');
let カウント = new Audio('music/カウントダウン.mp3');

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
const タイマー１０ = document.getElementById('タイマー１０');

// 関数設定部分(１０個)
function ct() {  // １０秒に設定
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー.textContent = count;
    カウント.play();

    アフロ.addEventListener('click', () =>{
      clearInterval(id);
    })

    ひげろー.addEventListener('click', () =>{
      clearInterval(id);
    })

    ひげぞー.addEventListener('click', () => {
      clearInterval(id);
    })

    ひげきんぐ.addEventListener('click', () => {
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct2() {  // １０秒に設定
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー２.textContent = count;
    カウント.play();

    輝光.addEventListener('click', () =>{
      clearInterval(id);
    })

    瞬奇跡.addEventListener('click', () =>{
      clearInterval(id);
    })

    光奇跡.addEventListener('click', ()=>{
      clearInterval(id);
    })

    輝奇跡.addEventListener('click', () => {
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct3() {  // １５秒に設定
  let count = 15;
  let id    = setInterval(function(){
    count--;
    タイマー３.textContent = count;
    カウント.play();

    トゥンク.addEventListener('click', () =>{
      clearInterval(id);
    })

    トクン.addEventListener('click', () => {
      clearInterval(id);
    })

    ドキ.addEventListener('click', () =>{
      clearInterval(id);
    })

    ズキューン.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct4() {  // １５秒に設定
  let count = 15;
  let id    = setInterval(function(){
    count--;
    タイマー４.textContent = count;
    カウント.play();

    マス７.addEventListener('click', () =>{
      clearInterval(id);
    })

    休み.addEventListener('click', () =>{
      clearInterval(id);
    })

    マス５.addEventListener('click', () =>{
      clearInterval(id);
    })

    もう一回.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();カウント.pause();
    }
  }, 1000);
}

function ct5() {  // １０秒に設定
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー５.textContent = count;
    カウント.play();

    こより.addEventListener('click', () =>{
      clearInterval(id);
    })

    かのん.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct6() {  // １０秒に設定
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー６.textContent = count;
    カウント.play();

    十月.addEventListener('click', () =>{
      clearInterval(id);
    })

    十一月.addEventListener('click', () =>{
      clearInterval(id);
    })

    九月.addEventListener('click', () =>{
      clearInterval(id);
    })

    二月.addEventListener('click', () =>{
      clearInterval(id);
    })
    
    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct7() {  // １０秒に設定
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー７.textContent = count;
    カウント.play();

    五十.addEventListener('click', () =>{
      clearInterval(id);
    })

    四十八.addEventListener('click', () =>{
      clearInterval(id);
    })

    五十二.addEventListener('click', () =>{
      clearInterval(id);
    })

    五十一.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct8() {  // １０秒に設定
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー８.textContent = count;
    カウント.play();

    六.addEventListener('click', () =>{
      clearInterval(id);
    })

    七.addEventListener('click', () =>{
      clearInterval(id);
    })

    八.addEventListener('click', () =>{
      clearInterval(id);
    })

    十.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct9() {  // １０秒に設定
  let count = 10;
  let id    = setInterval(function(){
    count--;
    タイマー９.textContent = count;
    カウント.play();

    髪飾り.addEventListener('click', () =>{
      clearInterval(id);
    })

    ケーキ.addEventListener('click', () =>{
      clearInterval(id);
    })

    プリン.addEventListener('click', () =>{
      clearInterval(id);
    })

    クッキー.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();
      カウント.pause();
    }
  }, 1000);
}

function ct10() {  // １５秒に設定
  let count = 15;
  let id    = setInterval(function(){
    count--;
    タイマー１０.textContent = count;
    カウント.play();

    上田.addEventListener('click', () =>{
      clearInterval(id);
    })

    指出.addEventListener('click', () =>{
      clearInterval(id);
    })

    山田.addEventListener('click', () =>{
      clearInterval(id);
    })

    中川.addEventListener('click', () =>{
      clearInterval(id);
    })

    if(count <= 0){
      clearInterval(id);
      ハズレ.play();カウント.pause();
    }
  }, 1000);
}

// clearIntervalで使うための変数
let inter;

//インターバルを止めるための関数（これを作るのは１つでOK！）
function stop(){
  clearInterval(inter);
}

//問題１のインターバル
function start1(){  // １０秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){

      $(問題１).remove();
      $(文１).remove();
      $(タイマー).remove();
      $(アフロ).remove();
      $(ひげろー).remove();
      $(ひげぞー).remove();
      $(ひげきんぐ).remove();
      $(正解１).remove();
      $(写真１).remove();
      $(解説１).remove();
      $(次の問題１).remove();

      残念１.classList.remove('hidden');
      $(残念１).css('position','relative').css('animation','anime1 2s ease');

      写真２.classList.remove('hidden');
      $(写真２).css('position','relative').css('animation','anime1 2s ease');

      解説２.classList.remove('hidden');
      $(解説２).css('position','relative').css('animation','anime1 2s ease');
 
      次の問題２.classList.remove('hidden');
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題２のインターバル
function start2(){  // １０秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題２).remove();  //問題２の要素を削除している
      $(文２).remove();  //文２の要素を削除している
      $(タイマー２).remove();
      $(輝光).remove();  //藤木書店の要素を削除している
      $(瞬奇跡).remove();  //藤代書店の要素を削除している
      $(光奇跡).remove();  //小糸書店の要素を削除している
      $(輝奇跡).remove();  //藤森書店の要素を削除している
      $(正解２).remove();  //正解２の要素を削除している
      $(写真３).remove();  //写真１の要素を削除している
      $(解説３).remove();  //解説３の要素を削除している
      $(次の問題３).remove();  //次の問題３の要素を削除している

      残念２.classList.remove('hidden');  //残念２の要素を表示させている
      $(残念２).css('position','relative').css('animation','anime1 2s ease');  //ここで残念２の要素にアニメーションを加えている

      写真４.classList.remove('hidden');  //写真２の要素を表示させている
      $(写真４).css('position','relative').css('animation','anime1 2s ease');  //ここで写真２の要素にアニメーションを加えている

      解説４.classList.remove('hidden');  //解説４の要素を表示させている
      $(解説４).css('position','relative').css('animation','anime1 2s ease');  //ここで解説４の要素にアニメーションを加えている

      次の問題４.classList.remove('hidden');  //次の問題４の要素を表示させている
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題３のインターバル
function start3(){  // １５秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 15){
      $(問題３).remove();  //問題３の要素を削除している
      $(文３).remove();  //文３の要素を削除している
      $(タイマー３).remove();
      $(トゥンク).remove();  //近見東高校の要素を削除している
      $(トクン).remove();  //遠見束高校の要素を削除している
      $(ドキ).remove();  //遠見東高校の要素を削除している
      $(ズキューン).remove();  //遠見西高校の要素を削除している
      $(正解３).remove();  //正解３の要素を削除している
      $(解説５).remove();  //解説５の要素を削除している
      $(次の問題５).remove();  //次の問題５の要素を削除している

      残念３.classList.remove('hidden');  //残念３の要素を表示させている
      $(残念３).css('position','relative').css('animation','anime1 2s ease');  //ここで残念３の要素にアニメーションを加えている

      解説６.classList.remove('hidden');  //解説６の要素を表示させている
      $(解説６).css('position','relative').css('animation','anime1 2s ease');  //ここで解説６の要素にアニメーションを加えている

      次の問題６.classList.remove('hidden');  //次の問題６の要素を表示させている
    }
    if(number === 15) clearInterval(inter);
  },1000)
}

// 問題４のインターバル
function start4(){  // １５秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 15){
      $(問題４).remove();
      $(文４).remove();
      $(タイマー４).remove();
      $(マス７).remove();
      $(休み).remove();
      $(マス５).remove();
      $(もう一回).remove();

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
function start5(){  // １０秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題５).remove();
      $(文５).remove();
      $(タイマー５).remove();
      $(こより).remove();
      $(かのん).remove();

      //要素表示部分
      残念５.classList.remove('hidden');
      $(残念５).css('position','relative').css('animation','anime1 2s ease');

      解説１０.classList.remove('hidden');
      $(解説１０).css('position','relative').css('animation','anime1 2s ease');

      次の問題１０.classList.remove('hidden');
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題６のインターバル
function start6(){  // １０秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題６).remove();
      $(文６).remove();
      $(タイマー６).remove();
      $(十月).remove();
      $(十一月).remove();
      $(九月).remove();
      $(二月).remove();

      //要素表示部分
      残念６.classList.remove('hidden');
      $(残念６).css('position','relative').css('animation','anime1 2s ease');

      写真８.classList.remove('hidden');
      $(写真８).css('position','relative').css('animation','anime1 2s ease');

      解説１２.classList.remove('hidden');
      $(解説１２).css('position','relative').css('animation','anime1 2s ease');

      次の問題１２.classList.remove('hidden');
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題７のインターバル
function start7(){  // １０秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題７).remove();
      $(文７).remove();
      $(タイマー７).remove();
      $(五十).remove();
      $(四十八).remove();
      $(五十二).remove();
      $(五十一).remove();

      //要素表示部分
      残念７.classList.remove('hidden');
      $(残念７).css('position','relative').css('animation','anime1 2s ease');

      写真１０.classList.remove('hidden');
      $(写真１０).css('position','relative').css('animation','anime1 2s ease');

      解説１４.classList.remove('hidden');
      $(解説１４).css('position','relative').css('animation','anime1 2s ease');

      次の問題１４.classList.remove('hidden');
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題８のインターバル
function start8(){  // １０秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題８).remove();
      $(タイマー８).remove();
      $(文８).remove();
      $(六).remove();
      $(七).remove();
      $(八).remove();
      $(十).remove();

      //要素表示部分
      残念８.classList.remove('hidden');
      $(残念８).css('position','relative').css('animation','anime1 2s ease');

      写真１２.classList.remove('hidden');
      $(写真１２).css('position','relative').css('animation','anime1 2s ease');

      解説１６.classList.remove('hidden');
      $(解説１６).css('position','relative').css('animation','anime1 2s ease');

      次の問題１６.classList.remove('hidden');
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題９のインターバル
function start9(){  // １０秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 10){
      $(問題９).remove();
      $(タイマー９).remove();
      $(文９).remove();
      $(髪飾り).remove();
      $(ケーキ).remove();
      $(プリン).remove();
      $(クッキー).remove();

      //要素表示部分
      残念９.classList.remove('hidden');
      $(残念９).css('position','relative').css('animation','anime1 2s ease');

      解説１８.classList.remove('hidden');
      $(解説１８).css('position','relative').css('animation','anime1 2s ease');

      次の問題１８.classList.remove('hidden');
    }
    if(number === 10) clearInterval(inter);
  },1000)
}

// 問題１０のインターバル
function start10(){  // １５秒に設定
  let number = 0;
  inter = setInterval(function(){
    number++;
    if(number === 15){
      $(問題１０).remove();
      $(タイマー１０).remove();
      $(文１０).remove();
      $(上田).remove();
      $(指出).remove();
      $(山田).remove();
      $(中川).remove();

      //要素表示部分
      残念１０.classList.remove('hidden');
      $(残念１０).css('position','relative').css('animation','anime1 2s ease');

      解説２０.classList.remove('hidden');
      $(解説２０).css('position','relative').css('animation','anime1 2s ease');

      結果２.classList.remove('hidden');
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