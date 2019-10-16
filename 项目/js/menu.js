/**
 * Created by Administrator on 2017/1/2.
 */
$(function () {
    $(".shortcut_sjqL .dl").each(function () {
        $(this).mouseenter(function () {
            $(this).addClass("dladd");
            $(this).prev(".dl").children(".dl_r").addClass("dl_radd");
            var dlIndex=$(this).index();
            switch (dlIndex){
                case 0:
                {
                  $(this).children(".dl_l").css({"background-color":"#5c90b7","border-color":"#5c90b7"})
                  $(this).children(".dl_r").css({"border-bottom-color":"#5c90b7","border-top-color":"#5c90b7"})
                }
                    break;
                case 1:
                {
                    $(this).children(".dl_l").css({"background-color":"#974676","border-color":"#974676"})
                    $(this).children(".dl_r").css({"border-bottom-color":"#974676","border-top-color":"#974676"})
                }
                    break;
                case 2:
                {
                    $(this).children(".dl_l").css({"background-color":"#498c94","border-color":"#498c94"})
                    $(this).children(".dl_r").css({"border-bottom-color":"#498c94","border-top-color":"#498c94"})
                }
                    break;
                case 3:
                {
                    $(this).children(".dl_l ").css({"background-color":"#cb365b","border-color":"#cb365b"});
                    $(this).children(".dl_r ").css({"border-bottom-color":"#cb365b","border-top-color":"#cb365b"})
                }
                    break;
                case 4:
                {
                    $(this).children(".dl_l ").css({"background-color":"#d48800","border-color":"#d48800"});
                    $(this).children(".dl_r ").css({"border-bottom-color":"#d48800","border-top-color":"#d48800"})
                }
                    break;
                case 5:
                {
                    $(this).children(".dl_l ").css({"background-color":"#866350","border-color":"#866350"});
                    $(this).children(".dl_r ").css({"border-bottom-color":"#866350","border-top-color":"#866350"})
                }
                    break;
                case 6:
                {
                    $(this).children(".dl_l ").css({"background-color":"#ce4140","border-color":"#ce4140"});
                    $(this).children(".dl_r ").css({"border-bottom-color":"#ce4140","border-top-color":"#ce4140"})
                }
                    break;
            }
        });
        $(this).mouseleave(function () {
            bdColorhy();
            $(this).removeClass("dladd");
            $(this).prev(".dl").children(".dl_r").removeClass("dl_radd");
        })
    });
    function bdColorhy(){
        $(".dl").each(function () {
            $(this).children(".dl_l").css({"background-color":"#e0e0e0","border-color":"#e0e0e0"})
            $(this).children(".dl_r").css({"border-bottom-color":"#e0e0e0","border-top-color":"#fff"})
        })
    }

})
