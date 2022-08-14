//この部分は作品の目次の編集部分のアニメーション

  $(window).scroll(function (){
    $('.作品の目次の編集部分１').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでが作品の目次の編集部分　ここからはcitrusのアニメーション

  $(window).scroll(function (){  //ここでブラウザ全体がスクロールされた時の処理設定をするための準備をしている
    $('.citrus').each(function(){
      var elemPos = $(this).offset().top,  //ここでcitrusクラスの要素のtopの距離を取得している
      scroll = $(window).scrollTop(),  //ここでブラウザ全体のスクロール位置を取得してそれを変数に代入している
      windowHeight = $(window).height();  //ここでブラウザ全体の高さを取得している
      if (scroll > elemPos - windowHeight + 100){  
        $(this).addClass('scrollin');  //citrusクラスにscrollinクラスを追加している
      }
    });
  });

//ここまでがcitrus　ここからはcitrus＋のアニメーション
  
  $(window).scroll(function (){
    $('.citrus＋').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでがcitrus＋　ここからは小百合のアニメーション

  $(window).scroll(function (){
    $('.小百合').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでが小百合　ここからはメルのアニメーション

  $(window).scroll(function (){
    $('.メル').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでがメル　ここからはふうふのアニメーション

  $(window).scroll(function (){
    $('.ふうふ').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでがふうふ　ここからはカルテのアニメーション

  $(window).scroll(function (){
    $('.カルテ').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでがカルテ　ここからは小柴のアニメーション

  $(window).scroll(function (){
    $('.小柴').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでが小柴　ここからはゆめぐりのアニメーション

  $(window).scroll(function (){
    $('.ゆめぐり').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでがゆめぐり　ここからはフラグタイム

  $(window).scroll(function (){
    $('.フラグタイム').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでがフラグタイム　ここからは連理

  $(window).scroll(function (){
    $('.連理').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでが連理　ここからはゆり

  $(window).scroll(function (){
    $('.ゆり').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでがゆり　ここからはゆり２

  $(window).scroll(function (){
    $('.ゆり２').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでがゆり２　ここからは片想い

  $(window).scroll(function (){
    $('.片想い').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでが片想い　ここからは好き

  $(window).scroll(function (){
    $('.好き').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでが好き　ここからは百合

  $(window).scroll(function (){
    $('.百合').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 100){
              $(this).addClass('scrollin');
            }
        });
    });

//ここまでが百合