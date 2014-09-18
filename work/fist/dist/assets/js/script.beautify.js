/*
Developer: themephe 
Name: fist
Version: 0.1.2
Last Compile: 2014-09-18 */

function onYouTubePlayerAPIReady() {
    var vidHeight = "420";
    var listVid = [ "wnvaxK8lkTM", "4rzElbTwsU4", "4fd1IwUz7YQ", "ONZqMOVrTRg", "GtG7n-qu_gs" ];
    for (var i = 0; i < listVid.length; i++) {
        var isLength = "ytb" + i;
        window[isLength] = new YT.Player(isLength, {
            height: vidHeight,
            width: "640",
            videoId: listVid[i],
            playerVars: {
                rel: 0,
                wMode: "opaque"
            }
        });
    }
}

function c(val) {
    console.log(val);
}

function centerImages(imgContainer) {
    $(window).width();
    $(window).height();
    $(imgContainer).each(function() {
        $(this).append('<div class="img-loading"></div>');
    });
    $(imgContainer).each(function() {
        var src = $(this).find("> img").attr("src");
        $(this).find("> img").attr("src", "");
        $(this).find("> img").attr("src", src);
        $(this).find("> img").load(function() {
            var img = $(this);
            img.css({
                width: "auto",
                height: "auto"
            });
            var imgW = img.width();
            var imgH = img.height();
            var boxW = $(this).parent().width();
            var boxH = $(this).parent().height();
            if (imgW / imgH > boxW / boxH) {
                img.css({
                    height: "100%",
                    width: "auto"
                });
                imgW = img.width();
                img.css({
                    "margin-top": 0,
                    "margin-left": (boxW - imgW) / 2
                });
            } else {
                img.css({
                    width: "100%",
                    height: "auto"
                });
                imgH = img.height();
                img.css({
                    "margin-left": 0,
                    "margin-top": (boxH - imgH) / 2
                });
            }
            img.parent().find(".img-loading").remove();
        });
    });
}

function testScroll() {
    var thisScroll = "";
    $(window).scroll(function() {
        var $this = $(this);
        thisScroll = $this.scrollTop();
    });
    $(window).scroll(function() {
        console.log(thisScroll);
        $(".fixed-menu .fixed-menu-in").animate({
            top: thisScroll / 6 * -1
        }, 1, function() {});
    });
}

function sementara() {
    $(".sign-up-sementara").on("click", function(event) {
        event.preventDefault();
        $(".data-is-open-user-profile").slideUp(400).delay(400).remove();
        $(".data-is-open-verifikasi").slideDown(400);
        $("html, body").animate({
            scrollTop: 0
        }, 0);
        $(".list-menu .user-profile").remove();
        $(".user-profile-login").css("display", "block");
        return false;
    });
}

var tag = document.createElement("script");

tag.src = "http://www.youtube.com/player_api";

var firstScriptTag = document.getElementsByTagName("script")[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytb0;

var ytb1;

var ytb2;

var ytb3;

var ytb4;

$(document).ready(function() {
    $("html").removeClass("no-js");
    $("html").addClass("has-js ready");
    $(window).load(function() {
        $("html").addClass("load");
    });
});

var xion = function() {
    function validateContactForm() {
        if ("" == $("#user-data #name").val()) {
            $("#user-data #name").addClass("error").next(".error-msg").html("Anda belum mengisi nama").show();
        } else {
            $("#user-data #name").removeClass("error").next(".error-msg").html("").hide();
        }
        if ("" == $("#user-data #telp").val()) {
            $("#user-data #telp").addClass("error").next(".error-msg").html("Anda belum mengisi nomor telepon").show();
        } else {
            if (!numReg.test($("#user-data #telp").val())) {
                $("#user-data #telp").addClass("error").next(".error-msg").html("Nomor telepon harus angka").show();
            } else {
                if ($("#user-data #telp").val().length < 7) {
                    $("#user-data #telp").addClass("error").next(".error-msg").html("Nomor telepon minimal 7 digit").show();
                } else {
                    $("#user-data #telp").removeClass("error").next(".error-msg").html("").hide();
                }
            }
        }
        if ("" == $("#user-data #email").val()) {
            $("#user-data #email").addClass("error").next(".error-msg").html("Anda belum mengisi alamat email").show();
        } else {
            if (!emailReg.test($("#user-data #email").val())) {
                $("#user-data #email").addClass("error").next(".error-msg").html("Alamat email tidak valid").show();
            } else {
                $("#user-data #email").removeClass("error").next(".error-msg").html("").hide();
            }
        }
    }
    function validateContact() {
        var validated = 0;
        $('.contact form input[type="submit"]').on("click", function() {
            validated = 1;
            validateContactForm();
            if ($(".contact form .error").length > 0) {
                return false;
            }
        });
        $(".contact form input").blur(function() {
            if (1 == validated) {
                validateContactForm();
            }
        });
    }
    function showPopup(popupID, cscroll) {
        $(".overlay").fadeIn(300);
        $(".popup#" + popupID).fadeIn(600);
        if (cscroll || true == cscroll) {
            $(".popup#" + popupID + " .cscroll").jScrollPane();
            if (cscroll || true == cscroll) {
                $(".cscroll").jScrollPane({
                    autoReinitialise: true,
                    verticalDragMinHeight: 54,
                    verticalDragMaxHeight: 54,
                    mouseWheelSpeed: 50,
                    animateScroll: true
                });
            }
        }
    }
    function popups() {
        $(".show-popup").on("click", function() {
            var id = $(this).attr("data-popup");
            showPopup(id, true);
            return false;
        });
        $(".popup-close,.overlay").on("click", function() {
            $(".popup.box").fadeOut(300);
            $(".overlay").fadeOut(600);
        });
    }
    function _checkCheckbox() {
        $(".checkbox, .radio").each(function() {
            if (true == $(this).find("input").prop("checked")) {
                $(this).addClass("checked");
            } else {
                $(this).removeClass("checked");
            }
        });
    }
    function customCheckbox() {
        $('input[type="checkbox"]').each(function() {
            if (true == $(this).parent().hasClass("custom")) {
                $(this).parent().addClass("checkbox");
            }
        });
        $('input[type="radio"]').each(function() {
            if (true == $(this).parent().hasClass("custom")) {
                $(this).parent().addClass("radio");
            }
        });
        _checkCheckbox();
        $(".checkbox, .radio").click(function() {
            _checkCheckbox();
        });
    }
    function customInputFile() {
        $("input[type=file]").val("");
        $("nput[type=file]").on("change", function() {
            var fileName = $(this).val();
            sizeupload = this.files[0].size;
            var splitName = fileName.split(":\\fakepath\\");
            if (splitName.length > 1) {
                $(this).prev(".filenameTxt").html(splitName[1]);
            } else {
                $(".filenameTxt").html(splitName[0]);
            }
        });
    }
    function socialShares() {
        var title;
        var shareURL;
        var imgURL;
        var caption;
        var description;
        $(".btnbelow .shareleft").on("click", function() {
            title = $(".jdlrecipe .recipe-name").html();
            shareURL = "http://stag.xituz.com/quaker/inspirasi-sahur-sehat/";
            imgURL = "http://stag.xituz.com/quaker/inspirasi-sahur-sehat/" + $("#header > img").attr("src");
            caption = "Sahur Inspiration";
            description = "Temukan inspirasi sahur sehat lezat, dengan bahan-bahan yang pasti sehat untuk sekeluarga.";
            FB.ui({
                method: "feed",
                name: title,
                link: shareURL,
                picture: imgURL,
                caption: caption,
                description: description
            }, function(response) {
                if (response) {
                    console.log("Share success!");
                }
            });
        });
        var sendURL;
        $(".share-pesan .share.sendit").on("click", function() {
            sendURL = "http://bit.ly/101Ekspresi";
            FB.ui({
                method: "send",
                link: sendURL
            });
        });
        var twitText;
        var twitURL;
        var completeTwitURL;
        $(".share .twit").on("click", function() {
            twitText = "Serunya ikutan Ekspresi 101 Rasa Ramadan ABC Special Grade, dan jangan lupa kirim pesan semangat Ramadan-nya! Join yuk!";
            twitURL = "https://stag.xituz.com/heinz/cocopandan/";
            completeTwitURL = "https://twitter.com/intent/tweet?text=" + twitText + "&url=" + twitURL;
            $(this).attr({
                href: completeTwitURL,
                target: "_blank"
            });
        });
    }
    function mainScroll() {
        $(window).scroll(function() {
            var $this = $(this);
            if ($this.scrollTop() > 70) {
                $("body").addClass("scroll-run");
            } else {
                if ($this.scrollTop() < 70) {
                    $("body").removeClass("scroll-run");
                }
            }
        });
    }
    function openSearch() {
        $("#open-s").on("click", function(event) {
            event.preventDefault();
            $(this).parents(".search-menu").addClass("run-open-search");
        });
        $(".search-menu").click(function(event) {
            event.stopPropagation();
        });
        $("body").on("click", function() {
            $(".search-menu").removeClass("run-open-search");
        });
    }
    function getHeightMain() {
        var sideHeight = $("#getsideheight").height();
        var mainHeight = $("#main").height();
        if (mainHeight < sideHeight) {
            $("#main").height(sideHeight + 100);
        }
    }
    function openMenu() {
        $(".fixed-menu .list .list-target").on("click", function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 0);
            var _this = $(this);
            var _thisParent = _this.parent();
            var dataToOpen = _this.parent().attr("data-open");
            _this.parent().addClass("active").siblings().removeClass("active");
            $("body").addClass("run-leftme");
            if (_this.hasClass("run")) {
                $("body").click();
            } else {
                $(".list-data-menu").not(".data-is-" + dataToOpen).slideUp(400).removeClass("active");
                if (!$(".list-data-menu.data-is-" + dataToOpen).hasClass("active")) {
                    $(".list-data-menu.data-is-" + dataToOpen).delay(500).slideDown(400, function() {
                        getHeightMain();
                    }).addClass("active");
                }
                $(".fixed-menu .list .list-target").removeClass("run");
                $(this).addClass("run");
            }
            if (_thisParent.hasClass("user-profile")) {
                $(".form1-register").hide(400);
                $(".form2-login").show(400);
                return false;
            }
        });
        $(".wrap-list-data-menu, .fixed-menu-in").click(function(event) {
            event.stopPropagation();
        });
        $("body").on("click", function() {
            $("body").removeClass("run-leftme");
            $(".fixed-menu .list, .list-data-menu .list").removeClass("active");
            $(".fixed-menu .list .list-target").removeClass("run");
            $("#main").removeAttr("style");
        });
    }
    function closeMenu() {
        $(".close-menu, .cancel-logout").on("click", function() {
            $("body").removeClass("run-leftme");
            $(".fixed-menu .list, .list-data-menu .list").removeClass("active");
            $(".fixed-menu .list .list-target").removeClass("run");
            return false;
        });
    }
    function jumToComment() {
        $(".reviews").on("click", function() {
            $("html, body").animate({
                scrollTop: $(".comment-wrap").offset().top - 90
            }, 500);
        });
    }
    function recipeDetailSlider() {
        function rdsNavCheck() {
            limit = -($(".highlighted .users .page").length - 1) * $(".highlighted .users .frame").width();
            prev = $(".highlighted .users .nav.prev");
            next = $(".highlighted .users .nav.next");
            if (pages <= 1) {
                prev.hide();
                next.hide();
            } else {
                if (parseInt($(".highlighted .users .container").css("margin-left")) >= 0) {
                    prev.hide();
                    next.show();
                } else {
                    if (parseInt($(".highlighted .users .container").css("margin-left")) <= limit) {
                        prev.show();
                        next.hide();
                    } else {
                        prev.show();
                        next.show();
                    }
                }
            }
        }
        function rdsNav() {
            $(".highlighted .users .nav.prev").on("click", function() {
                if (0 == anim) {
                    anim = 1;
                    container.animate({
                        marginLeft: "+=" + width
                    }, 500, function() {
                        rdsNavCheck();
                        anim = 0;
                    });
                }
            });
            $(".highlighted .users .nav.next").on("click", function() {
                if (0 == anim) {
                    anim = 1;
                    container.animate({
                        marginLeft: "-=" + width
                    }, 500, function() {
                        rdsNavCheck();
                        anim = 0;
                    });
                }
            });
        }
        var anim = 0;
        var container;
        var boxes;
        var pages;
        var width;
        var limit;
        var prev;
        var next;
        if ($(".highlighted .users").length > 0) {
            container = $(".highlighted .users .container");
            boxes = $(".highlighted .users .box");
            for (var i = 0; i < boxes.length; i += 10) {
                boxes.slice(i, i + 10).wrapAll('<div class="page"></div>');
            }
            pages = $(".highlighted .users .page").length;
            width = $(".highlighted .users .frame").width();
            container.css("width", pages * width);
            rdsNavCheck();
            rdsNav();
        }
    }
    function recipeDetailInterchange() {
        recipeDetailSlider();
        $(".recipe-detail-header .backtobanner").on("click", function() {
            $(".recipe-detail-header .users").fadeOut(500);
            $(".recipe-detail-header .video").fadeOut(500, function() {
                $(this).html("");
            });
            $(".recipe-detail-header .banner").fadeIn(500);
        });
        $(".recipe-detail-header .user-tried").on("click", function() {
            if (!$(this).hasClass("active")) {
                $(".recipe-detail-header .banner").fadeOut(500);
                $(".recipe-detail-header .video").fadeOut(500, function() {
                    $(this).html("");
                });
                $(".recipe-detail-header .users").fadeIn(500);
            } else {
                $(".recipe-detail-header .banner").fadeIn(500);
                $(".recipe-detail-header .video").fadeOut(500, function() {
                    $(this).html("");
                });
                $(".recipe-detail-header .users").fadeOut(500);
            }
            $(this).toggleClass("active");
        });
        $(".recipe-statistics .svideo").on("click", function() {
            if (!$(this).hasClass("active")) {
                $(".recipe-detail-header .banner").fadeOut(500);
                $(".recipe-detail-header .users").fadeOut(500);
                $(".recipe-detail-header .video").fadeIn(500, function() {
                    $(this).html('<iframe width="560" height="340" src="http://www.youtube.com/embed/' + $(this).attr("data-vid") + '?wmode=opaque" frameborder="0" allowfullscreen></iframe>');
                });
            } else {
                $(".recipe-detail-header .banner").fadeIn(500);
                $(".recipe-detail-header .users").fadeOut(500);
                $(".recipe-detail-header .video").fadeOut(500, function() {
                    $(this).html('<iframe width="560" height="340" src="http://www.youtube.com/embed/' + $(this).attr("data-vid") + '?wmode=opaque" frameborder="0" allowfullscreen></iframe>');
                });
            }
            $(this).toggleClass("active");
        });
        $(".readmore span").html("see more").on("click", function() {
            if ("see more" == $(this).html()) {
                $(this).parent().prev().css("max-height", 200);
                $(this).html("see less");
            } else {
                if ("see less" == $(this).html()) {
                    $(this).parent().prev().css("max-height", 34);
                    $(this).html("see more");
                }
            }
        });
        var tipsanim = 0;
        var placeholder = "Tulis tips & tricks Anda di sini";
        $(".tips-flash .create-tips").on("click", function() {
            if (0 == tipsanim) {
                tipsanim = 1;
                $(this).parent().fadeOut(600, function() {
                    $(".quote-input textarea").val(placeholder);
                    $(".tips-flash .submit-tips").fadeIn(600, function() {
                        tipsanim = 0;
                    });
                });
            }
        });
        $(".tips-flash .cancel-tips").on("click", function() {
            if (0 == tipsanim) {
                tipsanim = 1;
                $(this).parent().fadeOut(600, function() {
                    $(".tips-flash .intro").fadeIn(600, function() {
                        tipsanim = 0;
                    });
                });
            }
        });
        $('.quote-input input[type="submit"]').on("click", function() {
            if ("" == $(".quote-input textarea").val() || $(".quote-input textarea").val().toLowerCase() == placeholder.toLowerCase()) {
                var msg = "Please insert your tips";
                var auto = "true";
                var stayTime = 700;
                var fadeTime = 2e3;
                showAlert(msg, auto, stayTime, fadeTime);
                return false;
            }
        });
    }
    function showAlert(errmsg, auto, stayTime, fadeTime) {
        if ("false" == auto) {
            $(".err-alert").addClass("dismissable");
        } else {
            $(".err-alert").removeClass("dismissable");
        }
        $(".err-alert").stop(true, true).fadeIn(200, function() {
            if ("true" == auto) {
                $(".err-alert").fadeTo(stayTime, 1, function() {
                    $(".err-alert").fadeOut(fadeTime, function() {
                        $(".err-alert .inner").html("");
                    });
                });
            }
        });
        $(".err-alert .inner").html(errmsg);
    }
    function SearchResultSlider() {
        function addToSlider(selectorID) {
            var tempelatte;
            if ("resultInspiration" == selectorID) {
                tempelatte = '<div class="box list-data">' + '<div class="img-box">' + '<img src="assets/img/dummy/dummy7.png" alt="" />' + "</div>" + '<div class="bottom-data">' + '<article class="bottom-in">' + '<div class="g-star-mini">' + '<span class="star-1">star 1</span>' + '<span class="star-2">star 2</span>' + '<span class="star-3">star 3</span>' + '<span class="star-4 empty">star 4</span>' + '<span class="star-5 empty">star 5</span>' + "</div>" + '<h2 class="list-title"><a href="recipe-detail">Lorem Ipsum Dolor Sit Amet</a></h2>' + '<span class="resep-see-more">See More: <span class="data-more"><a href="recipe-detail">iga</a>, <a href="recipe-detail">iga</a></span></span>' + "</article>" + '<div class="action">' + '<div class="act-in">' + '<div class="act-left add-to-book">' + '<span class="ico"></span>Tambahkan ke<span class="bold">CookBook</span>' + "</div>" + '<div class="sep"></div>' + '<div class="act-right">' + '<span class="ico"></span>Tambahkan ke<span class="bold">Planner</span>' + "</div>" + "</div>" + "</div>" + "</div>" + '<div class="last-ele">' + '<div class="last-in">' + '<figure class="avatar">' + '<img data-img-size="58x58" class="" alt="" src="assets/img/dummy/avatar.jpg">' + "</figure>" + '<div class="data">' + '<span class="name">Murni Astuti</span>' + '<span class="data-bottom">' + '<span class="count">+6</span>' + "Teman telah mencoba" + "</span>" + "</div>" + "</div>" + "</div>" + '<div class="ingredients">' + "<h4>13 Bahan-Bahan :</h4>" + '<table cellpadding="0" cellspacing="0" border="0">' + "<tr>" + "<td>300 gr</td>" + "<td>daging kambing has dalam, giling</td>" + "</tr>" + "<tr>" + "<td>25 gr</td>" + "<td>kacang tolo rebus</td>" + "</tr>" + "<tr>" + "<td>50 gr</td>" + "<td><em>krecek</em></td>" + "</tr>" + "<tr>" + "<td>300 gr</td>" + "<td>daging kambing has dalam, giling</td>" + "</tr>" + "<tr>" + "<td>25 gr</td>" + "<td>kacang tolo rebus</td>" + "</tr>" + "<tr>" + "<td>50 gr</td>" + "<td><em>krecek</em></td>" + "</tr>" + "<tr>" + "<td>300 gr</td>" + "<td>daging kambing has dalam, giling</td>" + "</tr>" + "<tr>" + "<td>25 gr</td>" + "<td>kacang tolo rebus</td>" + "</tr>" + "<tr>" + "<td>50 gr</td>" + "<td><em>krecek</em></td>" + "</tr>" + "<tr>" + "<td>300 gr</td>" + "<td>daging kambing has dalam, giling</td>" + "</tr>" + "<tr>" + "<td>25 gr</td>" + "<td>kacang tolo rebus</td>" + "</tr>" + "<tr>" + "<td>50 gr</td>" + "<td><em>krecek</em></td>" + "</tr>" + "</table>" + '<a class="seedetail">Lihat detail resep</a>' + "</div>" + "</div>";
                $("#" + selectorID + " .container").append(tempelatte);
                $("#" + selectorID + " .container").append(tempelatte);
                $("#" + selectorID + " .container").append(tempelatte);
            } else {
                if ("resultCooking" == selectorID) {
                    tempelatte = '<div class="box">' + '<img src="assets/img/dummy/cooking.jpg" alt="" />' + "<h4>Ayam Goreng Kremes Cabe Ijo</h4>" + "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>" + "</div>";
                    $("#" + selectorID + " .container").append(tempelatte);
                    $("#" + selectorID + " .container").append(tempelatte);
                    $("#" + selectorID + " .container").append(tempelatte);
                    $("#" + selectorID + " .container").append(tempelatte);
                } else {
                    if ("resultOthers" == selectorID) {
                        tempelatte = '<div class="box">' + '<div class="img"><img src="assets/img/dummy/resep3.jpg" alt="" /></div>' + '<div class="txt">' + "<p>Lorem Ipsum Dolor</p>" + "<h4>Ut enim ad minim veniam, quis nostrud exercitation</h4>" + "</div>" + "</div>";
                        $("#" + selectorID + " .container").append(tempelatte);
                        $("#" + selectorID + " .container").append(tempelatte);
                        $("#" + selectorID + " .container").append(tempelatte);
                    }
                }
            }
            assembleSlider(selectorID);
        }
        function disassembleSlider(selectorID) {
            $("#" + selectorID + " .box").unwrap('<div class="page"></div>');
            addToSlider(selectorID);
        }
        function srsNavCheck(selectorID) {
            boxes = $("#" + selectorID + " .box");
            limit = -($("#" + selectorID + " .page").length - 1) * $("#" + selectorID + " .frame").width();
            prev = $("#" + selectorID + " .nav.prev");
            next = $("#" + selectorID + " .nav.next");
            if (pages <= 1) {
                prev.hide();
                next.hide();
            } else {
                if (parseInt($("#" + selectorID + " .container").css("margin-left")) >= 0) {
                    prev.hide();
                    next.show();
                } else {
                    if (parseInt($("#" + selectorID + " .container").css("margin-left")) <= limit) {
                        prev.show();
                        next.addClass("load-next");
                    } else {
                        prev.show();
                        next.show();
                    }
                }
            }
        }
        function srsNav() {
            var _this;
            $(".slider .nav.prev").on("click", function() {
                _this = $(this);
                if (0 == anim) {
                    anim = 1;
                    _this.parent().find(".container").animate({
                        marginLeft: "+=" + width
                    }, 500, function() {
                        srsNavCheck(_this.parents(".slider").attr("id"));
                        anim = 0;
                    });
                }
            });
            $(".slider .nav.next").on("click", function() {
                if (0 == anim) {
                    anim = 1;
                    _this = $(this);
                    if (false == _this.hasClass("load-next")) {
                        _this.parent().find(".container").animate({
                            marginLeft: "-=" + width
                        }, 500, function() {
                            srsNavCheck(_this.parents(".slider").attr("id"));
                            anim = 0;
                        });
                    } else {
                        _this.addClass("now-loading");
                        setTimeout(function() {
                            disassembleSlider(_this.parents(".slider").attr("id"));
                            _this.removeClass("now-loading").removeClass("load-next");
                            _this.parent().find(".container").animate({
                                marginLeft: "-=" + width
                            }, 500, function() {
                                srsNavCheck($(this).parents(".slider").attr("id"));
                                anim = 0;
                            });
                        }, 3e3);
                    }
                }
            });
        }
        function assembleSlider(selectorID) {
            if ($("#" + selectorID + " .box").length > 0) {
                container = $("#" + selectorID + " .container");
                boxes = $("#" + selectorID + " .box");
                pageAmt = parseInt($("#" + selectorID).attr("data-items"));
                for (var i = 0; i < boxes.length; i += pageAmt) {
                    boxes.slice(i, i + pageAmt).wrapAll('<div class="page"></div>');
                }
                pages = $("#" + selectorID + " .page").length;
                width = $("#" + selectorID + " .frame").width();
                container.css("width", pages * width);
                srsNavCheck(selectorID);
            }
        }
        var anim = 0;
        var container;
        var boxes;
        var pageAmt;
        var pages;
        var width;
        var limit;
        var prev;
        var next;
        $(".slider").each(function() {
            var ID = $(this).attr("id");
            assembleSlider(ID);
        });
        srsNav();
    }
    function advancedSearch() {
        $(".g-search .adv").on("click", function() {
            $("#main-search").addClass("advanced");
            $(".container-content .section").not(".adv-choice").slideUp(400);
            $(".container-content .section.adv-choice").slideDown(400);
            $(".adv-option input, .adv-choice input").removeAttr("disabled");
        });
        $(".adv-choice .close-adv").on("click", function() {
            $("#main-search").removeClass("advanced");
            if (true == $("#result-all input").prop("checked")) {
                $(".container-content .section").not(".adv-choice").slideDown(400);
            } else {
                if (true == $("#result-inspirasi input").prop("checked")) {
                    $(".container-content .section.inspiration").slideDown(400);
                } else {
                    if (true == $("#result-cooking input").prop("checked")) {
                        $(".container-content .section.cooking").slideDown(400);
                    } else {
                        if (true == $("#result-others input").prop("checked")) {
                            $(".container-content .section.others").slideDown(400);
                        }
                    }
                }
            }
            $(".container-content .section.adv-choice").slideUp(400);
            $(".adv-option input, .adv-choice input").attr("disabled", "disabled");
        });
        $(".result-toggle > label:first-child").click();
        $(".result-toggle > label > input").on("click", function() {
            if ("result-all" == $(this).parent().attr("id")) {
                $(".container-content .section").not(".adv-choice").slideDown(300);
            } else {
                if ("result-inspirasi" == $(this).parent().attr("id")) {
                    $(".container-content .section").not(".inspiration").slideUp(300);
                    $(".container-content .section.inspiration").slideDown(300);
                } else {
                    if ("result-cooking" == $(this).parent().attr("id")) {
                        $(".container-content .section").not(".cooking").slideUp(300);
                        $(".container-content .section.cooking").slideDown(300);
                    } else {
                        if ("result-others" == $(this).parent().attr("id")) {
                            $(".container-content .section").not(".others").slideUp(300);
                            $(".container-content .section.others").slideDown(300);
                        }
                    }
                }
            }
        });
    }
    function jobAccordion() {
        $(".career-list .job").each(function() {
            var det = $(this).find(".details");
            var dh = det.height();
            det.attr("data-height", dh).css("height", 0);
            det.css("transition", "all 0.5s");
            var tog = $(this).find(".toggle");
            tog.html("see details").addClass("closed").show();
        });
        $(".career-list .job .toggle").on("click", function() {
            if (true == $(this).hasClass("closed")) {
                $(this).html("see less").removeClass("closed");
                var h = $(this).parent().find(".details").attr("data-height");
                $(this).parent().find(".details").css("height", h);
            } else {
                $(this).html("see details").addClass("closed");
                $(this).parent().find(".details").css("height", 0);
            }
        });
    }
    function plannerCalendar() {
        $("#planner-calendar").datepicker({
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
            dayNamesMin: [ "M", "S", "S", "R", "K", "J", "S" ],
            yearRange: "2010:+01"
        });
        $("#planner-calendar .ui-datepicker-calendar *").unbind("click");
        $("#planner-calendar .ui-datepicker-calendar td a").on("click", function() {
            return false;
        });
        $("#planner-calendar td > a").each(function() {
            if ("12" == $(this).html()) {
                $(this).addClass("hascontent");
            }
            if ("20" == $(this).html()) {
                $(this).parent().addClass("active");
            }
        });
    }
    function productCarousel() {
        var anim = 0;
        var t = 500;
        var easing = "linear";
        var viewed = 5;
        var container = $(".carousel .container");
        var items = $(".carousel .item");
        var w = items.width();
        var n = items.length;
        if (n > viewed) {
            $(".carousel .nav").show();
            $(".carousel .next").on("click", function() {
                if (0 == anim) {
                    anim = 1;
                    items.each(function() {
                        var index = $(this).index();
                        if (index > 0 && index <= viewed) {
                            $(this).removeClass().addClass("item").addClass("viewed").addClass("viewed" + index);
                        } else {
                            $(this).removeClass().addClass("item");
                        }
                    });
                    container.animate({
                        marginLeft: "-=" + w
                    }, t, function() {
                        container.find(".item:first-child").appendTo(container);
                        container.css("margin-left", 0);
                        anim = 0;
                    });
                }
            });
            $(".carousel .prev").on("click", function() {
                if (0 == anim) {
                    anim = 1;
                    container.find(".item:last-child").prependTo(container);
                    container.css("margin-left", -w);
                    items.each(function() {
                        var index = $(this).index();
                        if (index < viewed) {
                            $(this).removeClass().addClass("item").addClass("viewed").addClass("viewed" + (index + 1));
                        } else {
                            $(this).removeClass().addClass("item");
                        }
                    });
                    container.animate({
                        marginLeft: "+=" + w
                    }, t, easing, function() {
                        anim = 0;
                    });
                }
            });
        }
    }
    function sliderVideo() {
        var Target = $(".wrap-list-video");
        var vSliderWidth = Target.width();
        var targetChild = Target.children().length;
        Target.children().width(vSliderWidth);
        Target.wrapInner('<div class="wrap-list-video-in"></div>');
        $(".wrap-list-video-in").css("width", vSliderWidth * targetChild);
        $(".nav-video li").on("click", function(event) {
            event.preventDefault();
            ytb0.pauseVideo();
            ytb1.pauseVideo();
            ytb2.pauseVideo();
            ytb3.pauseVideo();
            ytb4.pauseVideo();
        });
        $(".nav-video li").each(function(index) {
            $(this).on("click", function(event) {
                event.preventDefault();
                $(this).addClass("active").siblings().removeClass("active");
                $(".wrap-list-video-in").animate({
                    left: -index * vSliderWidth
                }, 600, function() {
                    $(".wrap-list-video .list-video iframe").each(function() {
                        var srcVideo = $(this).attr("data-src");
                        $(this).attr("src", srcVideo);
                    });
                });
            });
        });
        $(".content-video").swipe({
            swipe: function(event, direction) {
                if ("left" == direction) {
                    $(".nav-video .active").next().click();
                } else {
                    if ("right" == direction) {
                        $(".nav-video .active").prev().click();
                    }
                }
            }
        });
    }
    function caroselVideo() {
        var _index = 0;
        var caroChild = 4;
        var t = $(".start-carousel");
        var tWidth = t.width();
        t.children().addClass("child").width(tWidth / caroChild);
        t.wrap('<div class="slider-wrap"></div>');
        var _child = $(".start-carousel > .child");
        for (var i = 0; i < _child.length; i += caroChild) {
            _child.slice(i, i + caroChild).wrapAll("<div class='caro-wrap'></div>");
        }
        for (var a = 0; a < _child.length; a++) {
            _child.eq(a).attr("data-index", a);
            console.log(a);
        }
        var caroLength = t.find(".caro-wrap").length;
        var caroLengthPag = t.find(".caro-wrap").length - 1;
        t.width(tWidth * caroLength);
        t.find(".caro-wrap").width(tWidth).attr("style", "float: left");
        var _nav = "";
        for (i = 0; i < caroLength; i++) {
            _nav += "<li>" + i + "</li>";
        }
        t.parent().after('<ul class="start-pag">' + _nav + "</ul>");
        $(".start-pag").children().eq(0).addClass("active");
        $(".start-pag li").on("click", function() {
            _index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".start-carousel .caro-wrap").eq(_index).addClass("act");
            $(".start-carousel").animate({
                left: -_index * tWidth
            });
        });
        var infinite = true;
        $(".start-nav li").on("click", function() {
            _this = $(this);
            if (_this.hasClass("left")) {
                c("left");
                _index--;
                if (_index < 0) {
                    if (true === infinite) {
                        _index = caroLengthPag;
                    } else {
                        _index = 0;
                    }
                }
            } else {
                if (_this.hasClass("right")) {
                    c("right");
                    _index++;
                    if (_index > caroLengthPag) {
                        if (true === infinite) {
                            _index = 0;
                        } else {
                            _index = caroLengthPag;
                        }
                    }
                }
            }
            $(".start-carousel").animate({
                left: -_index * tWidth
            });
        });
    }
    function promoSlider() {
        var bannerSliderHeight = $(".banner-slide ul li").eq(0).height();
        $(".banner-slide").height(bannerSliderHeight);
        $(".carousel-for-event li.list-caro").on("click", function() {
            var _this = $(this);
            var thisIndex = _this.attr("data-index");
            var thisIndex = parseInt(thisIndex);
            console.log(thisIndex);
            $(".banner-slide ul li").eq(thisIndex).addClass("active").siblings().removeClass("active");
        });
    }
    function sliderOfday() {
        function loopNav() {
            __index++;
            if (__index > tChildLengthPag) {
                __index = 0;
            }
            $(".nav li").eq(__index).click();
            return false;
        }
        function myTimeoutFunction() {
            loopNav();
            setTimeout(myTimeoutFunction, 4200);
        }
        var __index = 0;
        var t = $(".slider-recipe-list");
        var tWidth = t.width();
        var tChildLength = t.children().length;
        var tChildLengthPag = tChildLength - 1;
        t.wrapInner('<div class="slider-in"></div>');
        $(".slider-recipe-list").addClass("active-is" + __index).find("li").width(tWidth).eq(0).addClass("act");
        var _nav = "";
        for (i = 0; i < tChildLength; i++) {
            _nav += "<li>" + i + "</li>";
        }
        $(".slider-recipe-list").after('<ul class="nav">' + _nav + "</ul>");
        $(".nav").children().eq(0).addClass("active");
        $(".nav li").on("click", function() {
            __index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".slider-recipe-list .recipe-list").eq(__index).addClass("act").siblings().removeClass("act");
            return false;
        });
        infinite = true;
        $(".pag li").on("click", function() {
            _this = $(this);
            if (_this.hasClass("left")) {
                __index--;
                if (__index < 0) {
                    if (true === infinite) {
                        __index = tChildLengthPag;
                    } else {
                        __index = 0;
                    }
                }
            } else {
                if (_this.hasClass("right")) {
                    __index++;
                    if (__index > tChildLengthPag) {
                        if (true === infinite) {
                            __index = 0;
                        } else {
                            __index = tChildLengthPag;
                        }
                    }
                }
            }
            $(".nav li").eq(__index).click();
            return false;
        });
        autoRun = true;
        if (true == autoRun) {
            myTimeoutFunction();
        }
    }
    function tagsView() {
        function loopNav() {
            ___index++;
            if (___index > caroLengthPag) {
                ___index = 0;
            }
            $(".caro-nav li").eq(___index).click();
            return false;
        }
        function myTimeoutFunction() {
            loopNav();
            setTimeout(myTimeoutFunction, 6e3);
        }
        var ___index = 0;
        var caroChild = 8;
        var t = $(".caro-tags");
        t.width();
        t.children().addClass("child");
        t.wrap('<div class="caro-list-inner"></div>');
        var _child = $(".caro-tags > .child");
        for (var i = 0; i < _child.length; i += caroChild) {
            _child.slice(i, i + caroChild).wrapAll("<div class='caro-wrap'></div>");
        }
        var caroLength = t.find(".caro-wrap").length;
        var caroLengthPag = t.find(".caro-wrap").length - 1;
        var _nav = "";
        for (i = 0; i < caroLength; i++) {
            _nav += "<li>" + i + "</li>";
        }
        t.parent().after('<ul class="caro-nav">' + _nav + "</ul>");
        $(".caro-nav").children().eq(0).addClass("active");
        $(".caro-nav li").on("click", function() {
            ___index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".caro-tags .caro-wrap").eq(___index).addClass("act").siblings().removeClass("act");
            return false;
        });
        var autoRunTags = true;
        if (true == autoRunTags) {
            myTimeoutFunction();
        }
    }
    function addToCookBook() {
        var _thisData = "";
        var _thisIndex = null;
        $(".add-to-book").on("click", function(event) {
            event.preventDefault();
            var _this = $(this);
            _thisData = _this.parents(".list-data").html();
            _thisIndex = _this.parents(".list-data").index();
            var _thisCookieName = "cook-is" + _thisIndex;
            _this.parents(".list-data").attr("data-cook", _thisCookieName);
            $.cookie(_thisCookieName, _thisData);
            c("list ");
            c($.cookie("list-cookies"));
            $.cookie("list-cookies");
            JSON.parse("[" + string + "]");
            var listCookies = [];
            listCookies.push(_thisCookieName);
            $.cookie("list-cookies", listCookies);
        });
        var names = [ "Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl" ];
        var uniqueNames = [];
        $.each(names, function(i, el) {
            if ($.inArray(el, uniqueNames) === -1) {
                uniqueNames.push(el);
            }
        });
    }
    function InputFIle() {
        $(".wrap-upload").on("change", 'input[type="file"]', function() {
            var $this = $(this);
            var input = this;
            var reader = new FileReader();
            reader.onload = function(e) {
                input.files[0].name;
                var DataPreview = '<img src="' + e.target.result + '">';
                $this.parents(".wrap-upload").find(".img-result").html(DataPreview);
            };
            if ("image/jpeg" == input.files[0].type || "image/jpg" == input.files[0].type || "image/png" == input.files[0].type || "image/gif" == input.files[0].type) {
                if (input.files[0].size > 2097152) {
                    alert("Ga boleh lebih dari 2MB");
                } else {
                    reader.readAsDataURL(input.files[0]);
                    $this.parents(".custom-upload").find(".notice-hide").removeClass("notice-hide");
                    $this.parent(".wrap-upload").find(".img-result").addClass("upload-proced");
                    console.log($this);
                    console.log(input);
                }
            } else {
                alert("Selain gambar ga boleh dimasukin");
            }
        });
    }
    function showHideRegister() {
        $(".btn-login").on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 200);
            $(".form1-register").slideUp(400);
            $(".form2-login").delay(400).slideDown(400);
            return false;
        });
        $(".btn-signup").on("click", function() {
            $(".form2-login").slideUp(400);
            $(".form1-register").delay(400).slideDown(400);
            $("html, body").animate({
                scrollTop: 0
            }, 0);
            return false;
        });
        $(".forget-pass span").on("click", function() {
            $(".form2-login").slideUp(400);
            $(".form3-lostpass").delay(400).slideDown(400);
            $("html, body").animate({
                scrollTop: 0
            }, 0);
            return false;
        });
        $(".btn-back").on("click", function() {
            $(".form3-lostpass").slideUp(400);
            $(".form2-login").delay(400).slideDown(400);
            $("html, body").animate({
                scrollTop: 0
            }, 0);
            return false;
        });
    }
    function toLeft() {
        $(window).load(function() {});
    }
    function changeProvince() {
        $("#rnegara").on("change", function() {
            var countryVal = $(this).val();
            if ("Indonesia" == countryVal) {
                $("#wrap-rprovince1").show();
                $("#wrap-rprovince2").hide();
            } else {
                $("#wrap-rprovince2").show();
                $("#wrap-rprovince1").hide();
            }
        });
    }
    function inputTanggal() {
        $("#tanggallahir").datepicker({
            dateFormat: "yy-mm-dd",
            autoSize: true,
            dayNamesMin: [ "S", "S", "R", "K", "J", "S", "M" ]
        });
        $("#ui-datepicker-div").click(function(event) {
            event.stopPropagation();
        });
    }
    function customScroll() {
        $(".content-dictionary, .dict-menu").jScrollPane();
    }
    function removeRecipes() {
        $(".selected-recipes .remove-list").on("click", function(event) {
            event.preventDefault();
            var taergetR = $(this).parents(".recipes");
            taergetR.remove();
        });
    }
    function removeCookbook() {
        $(".data-in-cookbook .list-data .remove-cookbook").on("click", function(event) {
            event.preventDefault();
            var taergetR = $(this).parents(".list-data");
            taergetR.remove();
        });
    }
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var numReg = /^[0-9]+$/;
    var sizeupload;
    return {
        init: function() {
            validateContact();
            popups();
            changeProvince();
            inputTanggal();
            customInputFile();
            customCheckbox();
            socialShares();
            promoSlider();
            removeRecipes();
            removeCookbook();
            mainScroll();
            openMenu();
            closeMenu();
            openSearch();
            sliderVideo();
            caroselVideo();
            sliderOfday();
            tagsView();
            addToCookBook();
            customScroll();
            if ($(".content#recipe-detail").length > 0) {
                recipeDetailInterchange();
            }
            if ($(".content#search").length > 0) {
                SearchResultSlider();
                advancedSearch();
            }
            if ($(".content#career").length > 0) {
                jobAccordion();
            }
            if ($(".content#products").length > 0) {
                productCarousel();
            }
            plannerCalendar();
            jumToComment();
            InputFIle();
            showHideRegister();
            toLeft();
        }
    };
}();

$(document).ready(function() {
    xion.init();
});

centerImages(".highlighted .users .box");

$(document).ready(function() {});

$(document).ready(function() {
    sementara();
});