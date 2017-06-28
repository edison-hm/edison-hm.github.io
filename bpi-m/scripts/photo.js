!(function() {
  $(function() {
    $("#bigpicpic").removeAttr('title');
    //前后翻图
    var bw = 0;
    $(".photo-detail-big li").mousemove(function(e) {
      bw = $(this).width() / 5 * 2;
      var w = e.clientX - $(this).offset().left || e.pageX - $(this).offset().left || 0;
      if (w < bw) {
        $(this).css("cursor", "url(./images/cur1.png), default");
      } else {
        $(this).css("cursor", "url(./images/cur2.png), default");
      }
    });
    $(".photo-detail-big li").click(function(e) {
      bw = $(this).width() / 5 * 2;
      var w = e.clientX - $(this).offset().left || e.pageX - $(this).offset().left || 0;
      if (w < bw) {
        $(".photo-detail-big").find(".left").click();
      } else {
        $(".photo-detail-big").find(".right").click();
      }
    });
  });


  var photo = {
    bList: 0,
    bLen: $(".photo-detail-small").find("li").length,
    sAll: Math.ceil($(".photo-detail-small").find("li").length / 5),
    sList: 0,
    init: function() {
      $(".photo-detail-big").find("li").eq(0).show();
      $(".photo-detail-small").find("li").eq(0).addClass('on');
      this.bindFun();

      console.log("bLen,sAll",this.bLen, this.sAll);
      // picTitle()
    },
    bindFun: function() {
      var that = this,
        small = $(".photo-detail-small").find("li"),
        big = $(".photo-detail-big").find("li img");
      $(".photo-detail-big").find(".left").click(function() {
        if (that.bList > 0) {
          $(".photo-detail-big").find(".next").hide();
          that.bList--;
          small.removeClass('on');
          small.eq(that.bList).addClass('on');
          big.attr("src", small.eq(that.bList).attr("bigPic"));
          $(".photo-detail-small").find("ul").stop(true).animate({
            left: -Math.floor(that.bList / 8) * 960
          }, 600);
          that.sList = Math.floor(that.bList / 8);
          // picTitle()
        }
      });

      $(".photo-detail-big").find(".right").click(function() {
        if (that.bList < that.bLen - 1) {
          that.bList++;
          small.removeClass('on');
          small.eq(that.bList).addClass('on');
          big.attr("src", small.eq(that.bList).attr("bigPic"));
          $(".photo-detail-small").find("ul").stop(true).animate({
            left: -Math.floor(that.bList / 5) * 1100
          }, 600);
          that.sList = Math.floor(that.bList / 5);
          // picTitle()
        } else {
          if ($(".photo-detail-big").find(".next").is(":hidden")) {
            $(".photo-detail-big").find(".next").show();
          } else {
            var nextlink = "/photo/album/"+nextGallery+".html";
            if (nextlink) {
              location.href = "/photo/album/"+nextGallery+".html";
            } else {
              alert("已经是最后一个图集了");
            }
          }
        }
      });

      // $(".photo-detail-small .right,.photo-detail-small .left").hover(function() {
      //   $(this).addClass('on');
      // }, function() {
      //   $(this).removeClass('on');
      // });

      $(".photo-detail-small").find(".right").click(function() {
        if (that.sList < that.sAll - 1) {
          that.sList++;
          $(".photo-detail-small").find("ul").stop(true).animate({
            left: -that.sList * 1115
          }, 600);
        }
      });

      $(".photo-detail-small").find(".left").click(function() {
        if (that.sList > 0) {
          that.sList--;
          $(".photo-detail-small").find("ul").stop(true).animate({
            left: -that.sList * 1115
          }, 500);
        }
      });

      small.click(function() {
        $(".photo-detail-big").find(".next").hide();
        that.bList = $(this).index();
        small.removeClass('on');
        small.eq(that.bList).addClass('on');
        big.attr("src", small.eq(that.bList).attr("bigPic"));
        // picTitle()
      });
    }
  }

  photo.init()

  // function picTitle() {
  //   var title = $(".photo-detail-small .on").data("title");
  //   $(".J_pic_title").text(title);
  //   if (title) {
  //     $(".J_pic_title").css("padding", "0.5em");
  //   } else {
  //     $(".J_pic_title").css("padding", "0");
  //   }
  // }
})(jQuery);