// var blocos_vamos_aprender = $("a.vamos-aprender");
// blocos_vamos_aprender.each(function(e) { e++, $(this).attr("id", "vamos-aprender-" + e), $(this).attr("href", "#video-card-" + e), $(this).attr("onclick", "open_videocard(" + e + ")") });
var blocos_video_card = $("video-card");

function open_videocard(e) {
    betterScroll(`#video-card-${e}`), setTimeout(function() {
        history.pushState("", document.title, window.location.pathname), history.pushState("", document.title, window.location.pathname + window.location.search + `?bloco=vamos-aprender-${e}`), abrirModal(`videocard-${e}`);
        var a = $(`div[name="modal-videocard-${e}"]`);
        a.prepend('<div class="video-card-modal-bg"></div>'), modalClose = a.find("span.em-modal-close-btn"), modalClose.addClass("swap_close"), history.pushState("", document.title, window.location.pathname), $("span.swap_close").click(function() { hasSwap = $(this).hasClass("swap_close"), 1 == hasSwap && (scrollToHash(`#vamos-aprender-${e}`), $(this).removeClass("swap_close"), a.find("div.video-card-modal-bg").remove()) }), $("div.video-card-modal-bg").click(function() { hasBg = $(this).hasClass("video-card-modal-bg"), 1 == hasBg && (scrollToHash(`#vamos-aprender-${e}`), a.find("span.swap_close").removeClass("swap_close"), $(`div[name="modal-videocard-${e}"]`).addClass("closed"), $(this).remove()) })
    }, 1e3)
}

function scrollToHash(e) { location.href = e, betterScroll(e), history.pushState("", document.title, window.location.pathname) }

function betterScroll(e) { $("html, body").animate({ scrollTop: $(e).offset().top - 160 }, 400) }
var numeroVc = $("video-card").length;
i = "1", $("video-card").each(function() {
    var e = $(this),
        a = e.find("video-card-title");
    a = a.html(), textIntroVc = e.find("video-card-text-intro"), textIntroVc = textIntroVc.html(), textFullVc = e.find("video-card-text-full"), textFullVc = textFullVc.html(), e.attr("id", `video-card-${i}`);
    var o = e.attr("link"),
        t = e.attr("cover"),
        d = e.attr("class");
    e.html(`\n    <div class="video-card ${d}">\n        <div class="content">\n            <a href='javascript:void(0)' onclick="abrirModal('videocard-${i}')">\n                <i class="content-icon fas fa-play-circle fa-4x"></i>\n                <div class="content-overlay"></div>\n                <img class="content-image rounded" src="${t}">\n                <div class="content-details">\n                    <div class="borda-video-card">\n                        <h2 class="commomText-video-card line-height-video-card text-white">${a}</h2>\n\n                        <p class="commomText-video-card line-height-video-card">${textIntroVc}</p>\n                    </div>\n                </div>\n                <div class="hover_play"><p><i class="fas fa-play-circle mr-2"></i>Assistir vídeo</p></div>\n            </a>\n        </div>\n    </div>\n\n    <em-modal name='videocard-${i}' class='video-card-modal'>\n        <div class='container'>\n            <div class='row align-items-center justify-content-center'>\n                <div class='col-12 col-md-12 col-lg-12'>\n                    <h2 class="text_primary">${a}</h2>\n                    ${textFullVc}\n                    <div class="embed-responsive embed-responsive-16by9 frame_video mt-4">\n                        <iframe id ="iframe-video-modal-${i}" class="embed-responsive-item" src="${o}" allowfullscreen></iframe>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </em-modal>\n                        \n    `), e.removeAttr("link"), e.removeAttr("cover"), e.removeAttr("class");
    var c = e.closest("div.container").find("h1.module-topic-title");
    c.length > 0 ? e.attr("reference", c.text()) : e.attr("reference", "undefined"), i++
});