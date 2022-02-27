'use strict';
(function(p, x, e, l) {
    function g(a, b) {
        if (!a || !a.isDefaultPrevented()) {
            a.preventDefault();
            b = b || {};
            a && a.data && (b = v(a.data.options, b));
            var c = b.$target || e(a.currentTarget).trigger("blur");
            var d = e.fancybox.getInstance();
            d && d.$trigger && d.$trigger.is(c) || (b.selector ? a = e(b.selector) : (d = c.attr("data-fancybox") || "") ? (a = a.data ? a.data.items : [], a = a.length ? a.filter('[data-fancybox="' + d + '"]') : e('[data-fancybox="' + d + '"]')) : a = [c], d = e(a).index(c), 0 > d && (d = 0), d = e.fancybox.open(a, b, d), d.$trigger = c)
        }
    }
    p.console = p.console || {
        info: function(a) {}
    };
    if (e)
        if (e.fn.fancybox) console.info("fancyBox already initialized");
        else {
            var r = {
                    closeExisting: !1,
                    loop: !1,
                    gutter: 50,
                    keyboard: !0,
                    preventCaptionOverlap: !0,
                    arrows: !0,
                    infobar: !0,
                    smallBtn: "auto",
                    toolbar: "auto",
                    buttons: ["zoom", "slideShow", "thumbs", "close"],
                    idleTime: 3,
                    protect: !1,
                    modal: !1,
                    image: {
                        preload: !1
                    },
                    ajax: {
                        settings: {
                            data: {
                                fancybox: !0
                            }
                        }
                    },
                    iframe: {
                        tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                        preload: !0,
                        css: {},
                        attr: {
                            scrolling: "auto"
                        }
                    },
                    video: {
                        tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                        format: "",
                        autoStart: !0
                    },
                    defaultType: "image",
                    animationEffect: "zoom",
                    animationDuration: 366,
                    zoomOpacity: "auto",
                    transitionEffect: "fade",
                    transitionDuration: 366,
                    slideClass: "",
                    baseClass: "",
                    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                    spinnerTpl: '<div class="fancybox-loading"></div>',
                    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                    btnTpl: {
                        download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                        zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                        smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                    },
                    parentEl: "body",
                    hideScrollbar: !0,
                    autoFocus: !0,
                    backFocus: !0,
                    trapFocus: !0,
                    fullScreen: {
                        autoStart: !1
                    },
                    touch: {
                        vertical: !0,
                        momentum: !0
                    },
                    hash: null,
                    media: {},
                    slideShow: {
                        autoStart: !1,
                        speed: 3E3
                    },
                    thumbs: {
                        autoStart: !1,
                        hideOnClose: !0,
                        parentEl: ".fancybox-container",
                        axis: "y"
                    },
                    wheel: "auto",
                    onInit: e.noop,
                    beforeLoad: e.noop,
                    afterLoad: e.noop,
                    beforeShow: e.noop,
                    afterShow: e.noop,
                    beforeClose: e.noop,
                    afterClose: e.noop,
                    onActivate: e.noop,
                    onDeactivate: e.noop,
                    clickContent: function(a, b) {
                        return "image" === a.type ? "zoom" : !1
                    },
                    clickSlide: "close",
                    clickOutside: "close",
                    dblclickContent: !1,
                    dblclickSlide: !1,
                    dblclickOutside: !1,
                    mobile: {
                        preventCaptionOverlap: !1,
                        idleTime: !1,
                        clickContent: function(a, b) {
                            return "image" === a.type ? "toggleControls" : !1
                        },
                        clickSlide: function(a, b) {
                            return "image" === a.type ? "toggleControls" : "close"
                        },
                        dblclickContent: function(a, b) {
                            return "image" === a.type ? "zoom" : !1
                        },
                        dblclickSlide: function(a, b) {
                            return "image" === a.type ? "zoom" : !1
                        }
                    },
                    lang: "en",
                    i18n: {
                        en: {
                            CLOSE: "Close",
                            NEXT: "Next",
                            PREV: "Previous",
                            ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                            PLAY_START: "Start slideshow",
                            PLAY_STOP: "Pause slideshow",
                            FULL_SCREEN: "Full screen",
                            THUMBS: "Thumbnails",
                            DOWNLOAD: "Download",
                            SHARE: "Share",
                            ZOOM: "Zoom"
                        },
                        de: {
                            CLOSE: "Schlie&szlig;en",
                            NEXT: "Weiter",
                            PREV: "Zur&uuml;ck",
                            ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                            PLAY_START: "Diaschau starten",
                            PLAY_STOP: "Diaschau beenden",
                            FULL_SCREEN: "Vollbild",
                            THUMBS: "Vorschaubilder",
                            DOWNLOAD: "Herunterladen",
                            SHARE: "Teilen",
                            ZOOM: "Vergr&ouml;&szlig;ern"
                        }
                    }
                },
                m = e(p),
                n = e(x),
                z = 0,
                A = function() {
                    return p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || function(a) {
                        return p.setTimeout(a, 1E3 / 60)
                    }
                }(),
                f = function() {
                    return p.cancelAnimationFrame || p.webkitCancelAnimationFrame || p.mozCancelAnimationFrame || p.oCancelAnimationFrame || function(a) {
                        p.clearTimeout(a)
                    }
                }(),
                h = function() {
                    var a = x.createElement("fakeelement"),
                        b, c = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (b in c)
                        if (a.style[b] !== l) return c[b];
                    return "transitionend"
                }(),
                u = function(a) {
                    return a && a.length && a[0].offsetHeight
                },
                v = function(a, b) {
                    var c = e.extend(!0, {}, a, b);
                    e.each(b, function(d, k) {
                        e.isArray(k) && (c[d] = k)
                    });
                    return c
                },
                y = function(a, b, c) {
                    this.opts = v({
                        index: c
                    }, e.fancybox.defaults);
                    e.isPlainObject(b) && (this.opts = v(this.opts, b));
                    e.fancybox.isMobile && (this.opts = v(this.opts, this.opts.mobile));
                    this.id = this.opts.id || ++z;
                    this.currIndex = parseInt(this.opts.index, 10) || 0;
                    this.prevPos = this.prevIndex = null;
                    this.currPos = 0;
                    this.firstRun = !0;
                    this.group = [];
                    this.slides = {};
                    this.addContent(a);
                    this.group.length && this.init()
                };
            e.extend(y.prototype, {
                init: function() {
                    var a = this,
                        b = a.group[a.currIndex].opts;
                    b.closeExisting && e.fancybox.close(!0);
                    e("body").addClass("fancybox-active");
                    !e.fancybox.getInstance() && !1 !== b.hideScrollbar && !e.fancybox.isMobile && x.body.scrollHeight > p.innerHeight && (e("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (p.innerWidth - x.documentElement.clientWidth) +
                        "px;}</style>"), e("body").addClass("compensate-for-scrollbar"));
                    var c = "";
                    e.each(b.buttons, function(k, q) {
                        c += b.btnTpl[q] || ""
                    });
                    var d = e(a.translate(a, b.baseTpl.replace("{{buttons}}", c).replace("{{arrows}}", b.btnTpl.arrowLeft + b.btnTpl.arrowRight))).attr("id", "fancybox-container-" + a.id).addClass(b.baseClass).data("FancyBox", a).appendTo(b.parentEl);
                    a.$refs = {
                        container: d
                    };
                    "bg inner infobar toolbar stage caption navigation".split(" ").forEach(function(k) {
                        a.$refs[k] = d.find(".fancybox-" + k)
                    });
                    a.trigger("onInit");
                    a.activate();
                    a.jumpTo(a.currIndex)
                },
                translate: function(a, b) {
                    var c = a.opts.i18n[a.opts.lang] || a.opts.i18n.en;
                    return b.replace(/\{\{(\w+)\}\}/g, function(d, k) {
                        return c[k] === l ? d : c[k]
                    })
                },
                addContent: function(a) {
                    var b = this;
                    this.modifyContent(a, function(c) {
                        b.group.push(c)
                    })
                },
                prependContent: function(a) {
                    var b = this;
                    this.modifyContent(a, function(c) {
                        b.group.unshift(c)
                    })
                },
                modifyContent: function(a, b) {
                    var c = this;
                    a = e.makeArray(a);
                    e.each(a, function(d, k) {
                        d = {};
                        var q = {};
                        if (e.isPlainObject(k)) d = k, q = k.opts || k;
                        else if ("object" === e.type(k) && e(k).length) {
                            var w = e(k);
                            q = w.data() || {};
                            q = e.extend(!0, {}, q, q.options);
                            q.$orig = w;
                            d.src = c.opts.src || q.src || w.attr("href");
                            d.type || d.src || (d.type = "inline", d.src = k)
                        } else d = {
                            type: "html",
                            src: k + ""
                        };
                        d.opts = e.extend(!0, {}, c.opts, q);
                        e.isArray(q.buttons) && (d.opts.buttons = q.buttons);
                        e.fancybox.isMobile && d.opts.mobile && (d.opts = v(d.opts, d.opts.mobile));
                        q = d.type || d.opts.type;
                        var t = d.src || "";
                        !q && t && ((w = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (q = "video", d.opts.video.format || (d.opts.video.format = "video/" +
                            ("ogv" === w[1] ? "ogg" : w[1]))) : t.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? q = "image" : t.match(/\.(pdf)((\?|#).*)?$/i) ? (q = "iframe", d = e.extend(!0, d, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === t.charAt(0) && (q = "inline"));
                        q ? d.type = q : c.trigger("objectNeedsType", d);
                        d.contentType || (d.contentType = -1 < e.inArray(d.type, ["html", "inline", "ajax"]) ? "html" : d.type);
                        d.index = c.group.length;
                        "auto" == d.opts.smallBtn && (d.opts.smallBtn = -1 < e.inArray(d.type, ["html", "inline", "ajax"]));
                        "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn);
                        d.$thumb = d.opts.$thumb || null;
                        d.opts.$trigger && d.index === c.opts.index && (d.$thumb = d.opts.$trigger.find("img:first"), d.$thumb.length && (d.opts.$orig = d.opts.$trigger));
                        d.$thumb && d.$thumb.length || !d.opts.$orig || (d.$thumb = d.opts.$orig.find("img:first"));
                        d.$thumb && !d.$thumb.length && (d.$thumb = null);
                        d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null);
                        "function" === e.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(k, [c, d]));
                        "function" === e.type(c.opts.caption) && (d.opts.caption = c.opts.caption.apply(k, [c, d]));
                        d.opts.caption instanceof e || (d.opts.caption = d.opts.caption === l ? "" : d.opts.caption + "");
                        "ajax" === d.type && (k = t.split(/\s+/, 2), 1 < k.length && (d.src = k.shift(), d.opts.filter = k.shift()));
                        d.opts.modal && (d.opts = e.extend(!0, d.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        }));
                        b(d)
                    });
                    Object.keys(c.slides).length && (c.updateControls(), (a = c.Thumbs) && a.isActive && (a.create(), a.focus()))
                },
                reindexSlides: function() {
                    this.group.forEach(function(a, b) {
                        a.index = b
                    })
                },
                findIndexFromSrc: function(a) {
                    var b = null;
                    this.group.forEach(function(c, d) {
                        c.src === a && (b = d)
                    });
                    return b
                },
                addEvents: function() {
                    var a = this;
                    a.removeEvents();
                    a.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(b) {
                        b.stopPropagation();
                        b.preventDefault();
                        a.close(b)
                    }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(b) {
                        b.stopPropagation();
                        b.preventDefault();
                        a.previous()
                    }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(b) {
                        b.stopPropagation();
                        b.preventDefault();
                        a.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function(b) {
                        a[a.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    });
                    m.on("orientationchange.fb resize.fb", function(b) {
                        b && b.originalEvent && "resize" === b.originalEvent.type ? (a.requestId && f(a.requestId), a.requestId = A(function() {
                            a.update(b)
                        })) : (a.current && "iframe" === a.current.type && a.$refs.stage.hide(), setTimeout(function() {
                            a.$refs.stage.show();
                            a.update(b)
                        }, e.fancybox.isMobile ? 600 : 250))
                    });
                    n.on("keydown.fb", function(b) {
                        var c = (e.fancybox ? e.fancybox.getInstance() : null).current,
                            d = b.keyCode || b.which;
                        9 == d ? c.opts.trapFocus && a.focus(b) : !c.opts.keyboard || b.ctrlKey || b.altKey || b.shiftKey || e(b.target).is("input,textarea,video,audio,select,*[contenteditable]") || (8 === d || 27 === d ? (b.preventDefault(), a.close(b)) : 37 === d || 38 === d ? (b.preventDefault(), a.previous()) : 39 === d || 40 === d ? (b.preventDefault(), a.next()) : a.trigger("afterKeydown", b, d))
                    });
                    a.group[a.currIndex].opts.idleTime && (a.idleSecondsCounter = 0, n.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(b) {
                        a.idleSecondsCounter = 0;
                        a.isIdle && a.showControls();
                        a.isIdle = !1
                    }), a.idleInterval = p.setInterval(function() {
                        a.idleSecondsCounter++;
                        a.idleSecondsCounter >= a.group[a.currIndex].opts.idleTime && !a.isDragging && (a.isIdle = !0, a.idleSecondsCounter = 0, a.hideControls())
                    }, 1E3))
                },
                removeEvents: function() {
                    m.off("orientationchange.fb resize.fb");
                    n.off("keydown.fb .fb-idle");
                    this.$refs.container.off(".fb-close .fb-prev .fb-next");
                    this.idleInterval && (p.clearInterval(this.idleInterval), this.idleInterval = null)
                },
                previous: function(a) {
                    return this.jumpTo(this.currPos - 1, a)
                },
                next: function(a) {
                    return this.jumpTo(this.currPos + 1, a)
                },
                jumpTo: function(a, b) {
                    var c = this,
                        d = c.group.length;
                    if (!(c.isDragging || c.isClosing || c.isAnimating && c.firstRun)) {
                        a = parseInt(a, 10);
                        var k = c.current ? c.current.opts.loop : c.opts.loop;
                        if (!k && (0 > a || a >= d)) return !1;
                        var q = c.firstRun = !Object.keys(c.slides).length;
                        var w = c.current;
                        c.prevIndex = c.currIndex;
                        c.prevPos = c.currPos;
                        var t = c.createSlide(a);
                        1 < d && ((k || t.index < d - 1) && c.createSlide(a + 1), (k || 0 < t.index) && c.createSlide(a - 1));
                        c.current = t;
                        c.currIndex = t.index;
                        c.currPos = t.pos;
                        c.trigger("beforeShow", q);
                        c.updateControls();
                        t.forcedDuration = l;
                        e.isNumeric(b) ? t.forcedDuration = b : b = t.opts[q ? "animationDuration" : "transitionDuration"];
                        b = parseInt(b, 10);
                        a = c.isMoved(t);
                        t.$slide.addClass("fancybox-slide--current");
                        if (q) t.opts.animationEffect && b && c.$refs.container.css("transition-duration", b + "ms"), c.$refs.container.addClass("fancybox-is-open").trigger("focus"), c.loadSlide(t);
                        else {
                            var B = e.fancybox.getTranslate(w.$slide);
                            var C = e.fancybox.getTranslate(c.$refs.stage);
                            e.each(c.slides, function(F, D) {
                                e.fancybox.stop(D.$slide, !0)
                            });
                            w.pos !== t.pos && (w.isComplete = !1);
                            w.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
                            if (a) {
                                var E = B.left - (w.pos * B.width + w.pos * w.opts.gutter);
                                e.each(c.slides, function(F, D) {
                                    D.$slide.removeClass("fancybox-animated").removeClass(function(I, H) {
                                        return (H.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                    });
                                    e.fancybox.setTranslate(D.$slide, {
                                        top: 0,
                                        left: D.pos * B.width + D.pos * D.opts.gutter - C.left + E
                                    });
                                    D.pos !== t.pos && D.$slide.addClass("fancybox-slide--" + (D.pos > t.pos ? "next" : "previous"));
                                    u(D.$slide);
                                    e.fancybox.animate(D.$slide, {
                                        top: 0,
                                        left: (D.pos - t.pos) * B.width + (D.pos - t.pos) * D.opts.gutter
                                    }, b, function() {
                                        D.$slide.css({
                                            transform: "",
                                            opacity: ""
                                        }).removeClass("fancybox-slide--next fancybox-slide--previous");
                                        D.pos === c.currPos && c.complete()
                                    })
                                })
                            } else if (b && t.opts.transitionEffect) {
                                var G = "fancybox-animated fancybox-fx-" + t.opts.transitionEffect;
                                w.$slide.addClass("fancybox-slide--" + (w.pos > t.pos ? "next" : "previous"));
                                e.fancybox.animate(w.$slide, G, b, function() {
                                    w.$slide.removeClass(G).removeClass("fancybox-slide--next fancybox-slide--previous")
                                }, !1)
                            }
                            t.isLoaded ? c.revealContent(t) : c.loadSlide(t)
                        }
                        c.preload("image")
                    }
                },
                createSlide: function(a) {
                    var b = a % this.group.length;
                    b = 0 > b ? this.group.length + b : b;
                    if (!this.slides[a] && this.group[b]) {
                        var c = e('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage);
                        this.slides[a] = e.extend(!0, {}, this.group[b], {
                            pos: a,
                            $slide: c,
                            isLoaded: !1
                        });
                        this.updateSlide(this.slides[a])
                    }
                    return this.slides[a]
                },
                scaleToActual: function(a, b, c) {
                    var d = this,
                        k = d.current,
                        q = k.$content,
                        w = e.fancybox.getTranslate(k.$slide).width,
                        t = e.fancybox.getTranslate(k.$slide).height,
                        B = k.width,
                        C = k.height;
                    if (!d.isAnimating && !d.isMoved() && q && "image" == k.type && k.isLoaded && !k.hasError) {
                        d.isAnimating = !0;
                        e.fancybox.stop(q);
                        a = a === l ? .5 * w : a;
                        b = b === l ? .5 * t : b;
                        var E = e.fancybox.getTranslate(q);
                        E.top -= e.fancybox.getTranslate(k.$slide).top;
                        E.left -= e.fancybox.getTranslate(k.$slide).left;
                        var G = B / E.width;
                        var F = C / E.height;
                        k = .5 * w - .5 * B;
                        var D = .5 * t - .5 * C;
                        B > w && (k = E.left * G - (a * G - a), 0 < k && (k = 0), k < w - B && (k = w - B));
                        C > t && (D = E.top * F - (b * F - b), 0 < D && (D = 0), D < t - C && (D = t - C));
                        d.updateCursor(B, C);
                        e.fancybox.animate(q, {
                            top: D,
                            left: k,
                            scaleX: G,
                            scaleY: F
                        }, c || 366, function() {
                            d.isAnimating = !1
                        });
                        d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop()
                    }
                },
                scaleToFit: function(a) {
                    var b = this,
                        c = b.current,
                        d = c.$content;
                    b.isAnimating || b.isMoved() || !d || "image" != c.type || !c.isLoaded || c.hasError || (b.isAnimating = !0, e.fancybox.stop(d), c = b.getFitPos(c), b.updateCursor(c.width, c.height), e.fancybox.animate(d, {
                        top: c.top,
                        left: c.left,
                        scaleX: c.width / d.width(),
                        scaleY: c.height / d.height()
                    }, a || 366, function() {
                        b.isAnimating = !1
                    }))
                },
                getFitPos: function(a) {
                    var b = a.$content,
                        c = a.$slide,
                        d = a.width || a.opts.width,
                        k = a.height || a.opts.height,
                        q = {};
                    if (!a.isLoaded || !b || !b.length) return !1;
                    var w = e.fancybox.getTranslate(this.$refs.stage).width;
                    var t = e.fancybox.getTranslate(this.$refs.stage).height;
                    w -= parseFloat(c.css("paddingLeft")) + parseFloat(c.css("paddingRight")) + parseFloat(b.css("marginLeft")) + parseFloat(b.css("marginRight"));
                    t -= parseFloat(c.css("paddingTop")) + parseFloat(c.css("paddingBottom")) + parseFloat(b.css("marginTop")) + parseFloat(b.css("marginBottom"));
                    d && k || (d = w, k = t);
                    b = Math.min(1, w / d, t / k);
                    d *= b;
                    k *= b;
                    d > w - .5 && (d = w);
                    k > t - .5 && (k = t);
                    "image" === a.type ? (q.top = Math.floor(.5 * (t - k)) + parseFloat(c.css("paddingTop")), q.left = Math.floor(.5 * (w -
                        d)) + parseFloat(c.css("paddingLeft"))) : "video" === a.contentType && (a = a.opts.width && a.opts.height ? d / k : a.opts.ratio || 16 / 9, k > d / a ? k = d / a : d > k * a && (d = k * a));
                    q.width = d;
                    q.height = k;
                    return q
                },
                update: function(a) {
                    var b = this;
                    e.each(b.slides, function(c, d) {
                        b.updateSlide(d, a)
                    })
                },
                updateSlide: function(a, b) {
                    var c = a && a.$content,
                        d = a.width || a.opts.width,
                        k = a.height || a.opts.height,
                        q = a.$slide;
                    this.adjustCaption(a);
                    c && (d || k || "video" === a.contentType) && !a.hasError && (e.fancybox.stop(c), e.fancybox.setTranslate(c, this.getFitPos(a)), a.pos === this.currPos && (this.isAnimating = !1, this.updateCursor()));
                    this.adjustLayout(a);
                    q.length && (q.trigger("refresh"), a.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", q.get(0).scrollHeight > q.get(0).clientHeight));
                    this.trigger("onUpdate", a, b)
                },
                centerSlide: function(a) {
                    var b = this,
                        c = b.current,
                        d = c.$slide;
                    !b.isClosing && c && (d.siblings().css({
                        transform: "",
                        opacity: ""
                    }), d.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), e.fancybox.animate(d, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, a === l ? 0 : a, function() {
                        d.css({
                            transform: "",
                            opacity: ""
                        });
                        c.isComplete || b.complete()
                    }, !1))
                },
                isMoved: function(a) {
                    a = a || this.current;
                    if (!a) return !1;
                    var b = e.fancybox.getTranslate(this.$refs.stage);
                    var c = e.fancybox.getTranslate(a.$slide);
                    return !a.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(c.top - b.top) || .5 < Math.abs(c.left - b.left))
                },
                updateCursor: function(a, b) {
                    var c = this.current,
                        d = this.$refs.container;
                    c && !this.isClosing && this.Guestures && (d.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), b = (a = this.canPan(a, b)) ? !0 : this.isZoomable(), d.toggleClass("fancybox-is-zoomable", b), e("[data-fancybox-zoom]").prop("disabled", !b), a ? d.addClass("fancybox-can-pan") : b && ("zoom" === c.opts.clickContent || e.isFunction(c.opts.clickContent) && "zoom" == c.opts.clickContent(c)) ? d.addClass("fancybox-can-zoomIn") : c.opts.touch && (c.opts.touch.vertical || 1 < this.group.length) && "video" !== c.contentType && d.addClass("fancybox-can-swipe"))
                },
                isZoomable: function() {
                    var a = this.current,
                        b;
                    return a && !this.isClosing && "image" === a.type && !a.hasError && (!a.isLoaded || (b = this.getFitPos(a)) && (a.width > b.width || a.height > b.height)) ? !0 : !1
                },
                isScaledDown: function(a, b) {
                    var c = !1,
                        d = this.current,
                        k = d.$content;
                    a !== l && b !== l ? c = a < d.width && b < d.height : k && (c = e.fancybox.getTranslate(k), c = c.width < d.width && c.height < d.height);
                    return c
                },
                canPan: function(a, b) {
                    var c = this.current,
                        d = null,
                        k = !1;
                    "image" === c.type && (c.isComplete || a && b) && !c.hasError && (k = this.getFitPos(c), a !== l && b !== l ? d = {
                        width: a,
                        height: b
                    } : c.isComplete && (d = e.fancybox.getTranslate(c.$content)), d && k && (k = 1.5 < Math.abs(d.width - k.width) || 1.5 < Math.abs(d.height - k.height)));
                    return k
                },
                loadSlide: function(a) {
                    var b = this;
                    if (!a.isLoading && !a.isLoaded) {
                        a.isLoading = !0;
                        if (!1 === b.trigger("beforeLoad", a)) return a.isLoading = !1;
                        var c = a.type;
                        var d = a.$slide;
                        d.off("refresh").trigger("onReset").addClass(a.opts.slideClass);
                        switch (c) {
                            case "image":
                                b.setImage(a);
                                break;
                            case "iframe":
                                b.setIframe(a);
                                break;
                            case "html":
                                b.setContent(a, a.src || a.content);
                                break;
                            case "video":
                                b.setContent(a, a.opts.video.tpl.replace(/\{\{src\}\}/gi, a.src).replace("{{format}}", a.opts.videoFormat || a.opts.video.format || "").replace("{{poster}}", a.thumb || ""));
                                break;
                            case "inline":
                                e(a.src).length ? b.setContent(a, e(a.src)) : b.setError(a);
                                break;
                            case "ajax":
                                b.showLoading(a);
                                var k = e.ajax(e.extend({}, a.opts.ajax.settings, {
                                    url: a.src,
                                    success: function(q, w) {
                                        "success" === w && b.setContent(a, q)
                                    },
                                    error: function(q, w) {
                                        q && "abort" !== w && b.setError(a)
                                    }
                                }));
                                d.one("onReset", function() {
                                    k.abort()
                                });
                                break;
                            default:
                                b.setError(a)
                        }
                        return !0
                    }
                },
                setImage: function(a) {
                    var b = this;
                    setTimeout(function() {
                        var d = a.$image;
                        b.isClosing || !a.isLoading || d && d.length && d[0].complete || a.hasError || b.showLoading(a)
                    }, 50);
                    b.checkSrcset(a);
                    a.$content = e('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(a.$slide.addClass("fancybox-slide--image"));
                    if (!1 !== a.opts.preload && a.opts.width && a.opts.height && a.thumb) {
                        a.width = a.opts.width;
                        a.height = a.opts.height;
                        var c = x.createElement("img");
                        c.onerror = function() {
                            e(this).remove();
                            a.$ghost = null
                        };
                        c.onload = function() {
                            b.afterLoad(a)
                        };
                        a.$ghost = e(c).addClass("fancybox-image").appendTo(a.$content).attr("src", a.thumb)
                    }
                    b.setBigImage(a)
                },
                checkSrcset: function(a) {
                    var b = a.opts.srcset || a.opts.image.srcset;
                    if (b) {
                        var c = p.devicePixelRatio || 1;
                        var d = p.innerWidth * c;
                        var k = b.split(",").map(function(B) {
                            var C = {};
                            B.trim().split(/\s+/).forEach(function(E, G) {
                                var F = parseInt(E.substring(0, E.length - 1), 10);
                                if (0 === G) return C.url = E;
                                F && (C.value = F, C.postfix = E[E.length - 1])
                            });
                            return C
                        });
                        k.sort(function(B, C) {
                            return B.value - C.value
                        });
                        for (var q = 0; q < k.length; q++) {
                            var w = k[q];
                            if ("w" === w.postfix && w.value >= d || "x" === w.postfix && w.value >= c) {
                                var t = w;
                                break
                            }
                        }!t && k.length && (t = k[k.length - 1]);
                        t && (a.src = t.url, a.width && a.height && "w" == t.postfix && (a.height = a.width / a.height * t.value, a.width = t.value), a.opts.srcset = b)
                    }
                },
                setBigImage: function(a) {
                    var b = this,
                        c = x.createElement("img"),
                        d = e(c);
                    a.$image = d.one("error", function() {
                        b.setError(a)
                    }).one("load", function() {
                        var k;
                        a.$ghost || (b.resolveImageSlideSize(a, this.naturalWidth, this.naturalHeight), b.afterLoad(a));
                        b.isClosing || (a.opts.srcset && ((k = a.opts.sizes) && "auto" !== k || (k = (1 < a.width / a.height && 1 < m.width() / m.height() ? "100" : Math.round(a.width / a.height * 100)) + "vw"), d.attr("sizes", k).attr("srcset", a.opts.srcset)), a.$ghost && setTimeout(function() {
                            a.$ghost && !b.isClosing && a.$ghost.hide()
                        }, Math.min(300, Math.max(1E3, a.height / 1600))), b.hideLoading(a))
                    }).addClass("fancybox-image").attr("src", a.src).appendTo(a.$content);
                    (c.complete || "complete" == c.readyState) && d.naturalWidth && d.naturalHeight ? d.trigger("load") : c.error && d.trigger("error")
                },
                resolveImageSlideSize: function(a, b, c) {
                    var d = parseInt(a.opts.width, 10),
                        k = parseInt(a.opts.height, 10);
                    a.width = b;
                    a.height = c;
                    0 < d && (a.width = d, a.height = Math.floor(d * c / b));
                    0 < k && (a.width = Math.floor(k * b / c), a.height = k)
                },
                setIframe: function(a) {
                    var b = this,
                        c = a.opts.iframe,
                        d = a.$slide,
                        k;
                    a.$content = e('<div class="fancybox-content' + (c.preload ? " fancybox-is-hidden" : "") + '"></div>').css(c.css).appendTo(d);
                    d.addClass("fancybox-slide--" + a.contentType);
                    a.$iframe = k = e(c.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(c.attr).appendTo(a.$content);
                    c.preload ? (b.showLoading(a), k.on("load.fb error.fb", function(q) {
                        this.isReady = 1;
                        a.$slide.trigger("refresh");
                        b.afterLoad(a)
                    }), d.on("refresh.fb", function() {
                        var q = a.$content,
                            w = c.css.width,
                            t = c.css.height;
                        if (1 === k[0].isReady) {
                            try {
                                var B = k.contents();
                                var C = B.find("body")
                            } catch (E) {}
                            C && C.length && C.children().length && (d.css("overflow", "visible"), q.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), w === l && (w = Math.ceil(Math.max(C[0].clientWidth, C.outerWidth(!0)))), q.css("width", w ? w : "").css("max-width", ""), t === l && (t = Math.ceil(Math.max(C[0].clientHeight, C.outerHeight(!0)))), q.css("height", t ? t : ""), d.css("overflow", "auto"));
                            q.removeClass("fancybox-is-hidden")
                        }
                    })) : b.afterLoad(a);
                    k.attr("src", a.src);
                    d.one("onReset", function() {
                        try {
                            e(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (q) {}
                        e(this).off("refresh.fb").empty();
                        a.isLoaded = !1;
                        a.isRevealed = !1
                    })
                },
                setContent: function(a, b) {
                    this.isClosing || (this.hideLoading(a), a.$content && e.fancybox.stop(a.$content), a.$slide.empty(), b && b.hasOwnProperty && b instanceof e && b.parent().length ? ((b.hasClass("fancybox-content") || b.parent().hasClass("fancybox-content")) && b.parents(".fancybox-slide").trigger("onReset"), a.$placeholder = e("<div>").hide().insertAfter(b), b.css("display", "inline-block")) : a.hasError || ("string" === e.type(b) && (b = e("<div>").append(e.trim(b)).contents()), a.opts.filter && (b = e("<div>").html(b).find(a.opts.filter))), a.$slide.one("onReset", function() {
                        e(this).find("video,audio").trigger("pause");
                        a.$placeholder && (a.$placeholder.after(b.removeClass("fancybox-content").hide()).remove(), a.$placeholder = null);
                        a.$smallBtn && (a.$smallBtn.remove(), a.$smallBtn = null);
                        a.hasError || (e(this).empty(), a.isLoaded = !1, a.isRevealed = !1)
                    }), e(b).appendTo(a.$slide), e(b).is("video,audio") && (e(b).addClass("fancybox-video"), e(b).wrap("<div></div>"), a.contentType = "video", a.opts.width = a.opts.width || e(b).attr("width"), a.opts.height = a.opts.height || e(b).attr("height")), a.$content = a.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), a.$content.siblings().hide(), a.$content.length || (a.$content = a.$slide.wrapInner("<div></div>").children().first()), a.$content.addClass("fancybox-content"), a.$slide.addClass("fancybox-slide--" + a.contentType), this.afterLoad(a))
                },
                setError: function(a) {
                    a.hasError = !0;
                    a.$slide.trigger("onReset").removeClass("fancybox-slide--" + a.contentType).addClass("fancybox-slide--error");
                    a.contentType = "html";
                    this.setContent(a, this.translate(a, a.opts.errorTpl));
                    a.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function(a) {
                    (a = a || this.current) && !a.$spinner && (a.$spinner = e(this.translate(this, this.opts.spinnerTpl)).appendTo(a.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function(a) {
                    (a = a || this.current) && a.$spinner && (a.$spinner.stop().remove(), delete a.$spinner)
                },
                afterLoad: function(a) {
                    this.isClosing || (a.isLoading = !1, a.isLoaded = !0, this.trigger("afterLoad", a), this.hideLoading(a), !a.opts.smallBtn || a.$smallBtn && a.$smallBtn.length || (a.$smallBtn = e(this.translate(a, a.opts.btnTpl.smallBtn)).appendTo(a.$content)), a.opts.protect && a.$content && !a.hasError && (a.$content.on("contextmenu.fb", function(b) {
                        2 == b.button && b.preventDefault();
                        return !0
                    }), "image" === a.type && e('<div class="fancybox-spaceball"></div>').appendTo(a.$content)), this.adjustCaption(a), this.adjustLayout(a), a.pos === this.currPos && this.updateCursor(), this.revealContent(a))
                },
                adjustCaption: function(a) {
                    a = a || this.current;
                    var b = a.opts.caption,
                        c = a.opts.preventCaptionOverlap,
                        d = this.$refs.caption,
                        k = !1;
                    d.toggleClass("fancybox-caption--separate", c);
                    c && b && b.length && (a.pos !== this.currPos ? (c = d.clone().appendTo(d.parent()), c.children().eq(0).empty().html(b), k = c.outerHeight(!0), c.empty().remove()) : this.$caption && (k = this.$caption.outerHeight(!0)), a.$slide.css("padding-bottom", k || ""))
                },
                adjustLayout: function(a) {
                    a = a || this.current;
                    var b;
                    if (a.isLoaded && !0 !== a.opts.disableLayoutFix) {
                        a.$content.css("margin-bottom", "");
                        if (a.$content.outerHeight() > a.$slide.height() + .5) {
                            var c = a.$slide[0].style["padding-bottom"];
                            var d = a.$slide.css("padding-bottom");
                            if (0 < parseFloat(d)) {
                                var k = a.$slide[0].scrollHeight;
                                a.$slide.css("padding-bottom", 0);
                                1 > Math.abs(k - a.$slide[0].scrollHeight) && (b = d);
                                a.$slide.css("padding-bottom", c)
                            }
                        }
                        a.$content.css("margin-bottom", b)
                    }
                },
                revealContent: function(a) {
                    var b = this,
                        c = a.$slide,
                        d = !1,
                        k = !1,
                        q = b.isMoved(a),
                        w = a.isRevealed;
                    a.isRevealed = !0;
                    var t = a.opts[b.firstRun ? "animationEffect" : "transitionEffect"];
                    var B = a.opts[b.firstRun ? "animationDuration" : "transitionDuration"];
                    B = parseInt(a.forcedDuration === l ? B : a.forcedDuration, 10);
                    if (q || a.pos !== b.currPos || !B) t = !1;
                    "zoom" === t && (a.pos === b.currPos && B && "image" === a.type && !a.hasError && (k = b.getThumbPos(a)) ? d = b.getFitPos(a) : t = "fade");
                    if ("zoom" === t) b.isAnimating = !0, d.scaleX = d.width / k.width, d.scaleY = d.height / k.height, q = a.opts.zoomOpacity, "auto" == q && (q = .1 < Math.abs(a.width / a.height - k.width / k.height)), q && (k.opacity = .1, d.opacity = 1), e.fancybox.setTranslate(a.$content.removeClass("fancybox-is-hidden"), k), u(a.$content), e.fancybox.animate(a.$content, d, B, function() {
                        b.isAnimating = !1;
                        b.complete()
                    });
                    else if (b.updateSlide(a), t) {
                        e.fancybox.stop(c);
                        var C = "fancybox-slide--" + (a.pos >= b.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t;
                        c.addClass(C).removeClass("fancybox-slide--current");
                        a.$content.removeClass("fancybox-is-hidden");
                        u(c);
                        "image" !== a.type && a.$content.hide().show(0);
                        e.fancybox.animate(c, "fancybox-slide--current", B, function() {
                            c.removeClass(C).css({
                                transform: "",
                                opacity: ""
                            });
                            a.pos === b.currPos && b.complete()
                        }, !0)
                    } else a.$content.removeClass("fancybox-is-hidden"), w || !q || "image" !== a.type || a.hasError || a.$content.hide().fadeIn("fast"), a.pos === b.currPos && b.complete()
                },
                getThumbPos: function(a) {
                    var b;
                    a = a.$thumb;
                    var c;
                    if (!(b = !a)) {
                        if ((c = a[0]) && c.ownerDocument === x) {
                            e(".fancybox-container").css("pointer-events", "none");
                            b = c.getBoundingClientRect().left +
                                c.offsetWidth / 2;
                            var d = c.getBoundingClientRect().top + c.offsetHeight / 2;
                            b = x.elementFromPoint(b, d) === c;
                            e(".fancybox-container").css("pointer-events", "")
                        } else b = !1;
                        b = !b
                    }
                    if (b) return !1;
                    b = e.fancybox.getTranslate(a);
                    d = parseFloat(a.css("border-top-width") || 0);
                    c = parseFloat(a.css("border-right-width") || 0);
                    var k = parseFloat(a.css("border-bottom-width") || 0);
                    a = parseFloat(a.css("border-left-width") || 0);
                    a = {
                        top: b.top + d,
                        left: b.left + a,
                        width: b.width - c - a,
                        height: b.height - d - k,
                        scaleX: 1,
                        scaleY: 1
                    };
                    return 0 < b.width && 0 < b.height ? a : !1
                },
                complete: function() {
                    var a = this,
                        b = a.current,
                        c = {};
                    if (!a.isMoved() && b.isLoaded) {
                        b.isComplete || (b.isComplete = !0, b.$slide.siblings().trigger("onReset"), a.preload("inline"), u(b.$slide), b.$slide.addClass("fancybox-slide--complete"), e.each(a.slides, function(k, q) {
                            q.pos >= a.currPos - 1 && q.pos <= a.currPos + 1 ? c[q.pos] = q : q && (e.fancybox.stop(q.$slide), q.$slide.off().remove())
                        }), a.slides = c);
                        a.isAnimating = !1;
                        a.updateCursor();
                        a.trigger("afterShow");
                        if (b.opts.video.autoStart) b.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                            Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen();
                            a.next()
                        });
                        if (b.opts.autoFocus && "html" === b.contentType) {
                            var d = b.$content.find("input[autofocus]:enabled:visible:first");
                            d.length ? d.trigger("focus") : a.focus(null, !0)
                        }
                        b.$slide.scrollTop(0).scrollLeft(0)
                    }
                },
                preload: function(a) {
                    var b;
                    if (!(2 > this.group.length)) {
                        var c = this.slides[this.currPos + 1];
                        (b = this.slides[this.currPos - 1]) && b.type === a && this.loadSlide(b);
                        c && c.type === a && this.loadSlide(c)
                    }
                },
                focus: function(a, b) {
                    if (!this.isClosing)
                        if (b = !a && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (b ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible"), b = b.filter('a[href],area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]),select:not([disabled]):not([aria-hidden]),textarea:not([disabled]):not([aria-hidden]),button:not([disabled]):not([aria-hidden]),iframe,object,embed,video,audio,[contenteditable],[tabindex]:not([tabindex^="-"])').filter(function() {
                                return "hidden" !== e(this).css("visibility") && !e(this).hasClass("disabled")
                            }), b.length) {
                            var c = b.index(x.activeElement);
                            if (a && a.shiftKey) {
                                if (0 > c || 0 == c) a.preventDefault(), b.eq(b.length - 1).trigger("focus")
                            } else if (0 > c || c == b.length - 1) a && a.preventDefault(), b.eq(0).trigger("focus")
                        } else this.$refs.container.trigger("focus")
                },
                activate: function() {
                    var a = this;
                    e(".fancybox-container").each(function() {
                        var b = e(this).data("FancyBox");
                        b && b.id !== a.id && !b.isClosing && (b.trigger("onDeactivate"), b.removeEvents(), b.isVisible = !1)
                    });
                    a.isVisible = !0;
                    if (a.current || a.isIdle) a.update(), a.updateControls();
                    a.trigger("onActivate");
                    a.addEvents()
                },
                close: function(a, b) {
                    var c = this,
                        d = c.current,
                        k, q = function() {
                            c.cleanUp(a)
                        };
                    if (c.isClosing) return !1;
                    c.isClosing = !0;
                    if (!1 === c.trigger("beforeClose", a)) return c.isClosing = !1, A(function() {
                        c.update()
                    }), !1;
                    c.removeEvents();
                    var w = d.$content;
                    var t = d.opts.animationEffect;
                    b = e.isNumeric(b) ? b : t ? d.opts.animationDuration : 0;
                    d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
                    !0 !== a ? e.fancybox.stop(d.$slide) : t = !1;
                    d.$slide.siblings().trigger("onReset").remove();
                    b && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", b + "ms");
                    c.hideLoading(d);
                    c.hideControls(!0);
                    c.updateCursor();
                    "zoom" !== t || w && b && "image" === d.type && !c.isMoved() && !d.hasError && (k = c.getThumbPos(d)) || (t = "fade");
                    if ("zoom" === t) {
                        e.fancybox.stop(w);
                        t = e.fancybox.getTranslate(w);
                        var B = {
                            top: t.top,
                            left: t.left,
                            scaleX: t.width / k.width,
                            scaleY: t.height / k.height,
                            width: k.width,
                            height: k.height
                        };
                        t = d.opts.zoomOpacity;
                        "auto" == t && (t = .1 < Math.abs(d.width / d.height - k.width / k.height));
                        t && (k.opacity = 0);
                        e.fancybox.setTranslate(w, B);
                        u(w);
                        e.fancybox.animate(w, k, b, q);
                        return !0
                    }
                    t && b ? e.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + t, b, q) : !0 === a ? setTimeout(q, b) : q();
                    return !0
                },
                cleanUp: function(a) {
                    var b = this.current.opts.$orig;
                    this.current.$slide.trigger("onReset");
                    this.$refs.container.empty().remove();
                    this.trigger("afterClose", a);
                    if (this.current.opts.backFocus && (b && b.length && b.is(":visible") || (b = this.$trigger), b && b.length)) {
                        a = p.scrollX;
                        var c = p.scrollY;
                        b.trigger("focus");
                        e("html, body").scrollTop(c).scrollLeft(a)
                    }
                    this.current = null;
                    (b = e.fancybox.getInstance()) ? b.activate(): (e("body").removeClass("fancybox-active compensate-for-scrollbar"), e("#fancybox-style-noscroll").remove())
                },
                trigger: function(a, b) {
                    var c = Array.prototype.slice.call(arguments, 1),
                        d = b && b.opts ? b : this.current,
                        k;
                    d ? c.unshift(d) : d = this;
                    c.unshift(this);
                    e.isFunction(d.opts[a]) && (k = d.opts[a].apply(d, c));
                    if (!1 === k) return k;
                    "afterClose" !== a && this.$refs ? this.$refs.container.trigger(a + ".fb", c) : n.trigger(a + ".fb", c)
                },
                updateControls: function() {
                    var a = this.current,
                        b = a.index,
                        c = this.$refs.container,
                        d = this.$refs.caption,
                        k = a.opts.caption;
                    a.$slide.trigger("refresh");
                    k && k.length ? (this.$caption = d, d.children().eq(0).html(k)) : this.$caption = null;
                    this.hasHiddenControls || this.isIdle || this.showControls();
                    c.find("[data-fancybox-count]").html(this.group.length);
                    c.find("[data-fancybox-index]").html(b + 1);
                    c.find("[data-fancybox-prev]").prop("disabled", !a.opts.loop && 0 >= b);
                    c.find("[data-fancybox-next]").prop("disabled", !a.opts.loop && b >= this.group.length - 1);
                    "image" === a.type ? c.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", a.opts.image.src || a.src).show() : a.opts.toolbar && c.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
                    e(x.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus")
                },
                hideControls: function(a) {
                    var b = ["infobar", "toolbar", "nav"];
                    !a && this.current.opts.preventCaptionOverlap || b.push("caption");
                    this.$refs.container.removeClass(b.map(function(c) {
                        return "fancybox-show-" + c
                    }).join(" "));
                    this.hasHiddenControls = !0
                },
                showControls: function() {
                    var a = this.current ? this.current.opts : this.opts,
                        b = this.$refs.container;
                    this.hasHiddenControls = !1;
                    this.idleSecondsCounter = 0;
                    b.toggleClass("fancybox-show-toolbar", !(!a.toolbar || !a.buttons)).toggleClass("fancybox-show-infobar", !!(a.infobar && 1 < this.group.length)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(a.arrows && 1 < this.group.length)).toggleClass("fancybox-is-modal", !!a.modal)
                },
                toggleControls: function() {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            });
            e.fancybox = {
                version: "3.5.7",
                defaults: r,
                getInstance: function(a) {
                    var b = e('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                        c = Array.prototype.slice.call(arguments, 1);
                    return b instanceof y ? ("string" === e.type(a) ? b[a].apply(b, c) : "function" === e.type(a) && a.apply(b, c), b) : !1
                },
                open: function(a, b, c) {
                    return new y(a, b, c)
                },
                close: function(a) {
                    var b = this.getInstance();
                    b && (b.close(), !0 === a && this.close(a))
                },
                destroy: function() {
                    this.close(!0);
                    n.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function() {
                    var a = x.createElement("div");
                    return p.getComputedStyle && p.getComputedStyle(a) && p.getComputedStyle(a).getPropertyValue("transform") && !(x.documentMode && 11 > x.documentMode)
                }(),
                getTranslate: function(a) {
                    if (!a || !a.length) return !1;
                    var b = a[0].getBoundingClientRect();
                    return {
                        top: b.top || 0,
                        left: b.left || 0,
                        width: b.width,
                        height: b.height,
                        opacity: parseFloat(a.css("opacity"))
                    }
                },
                setTranslate: function(a, b) {
                    var c = "",
                        d = {};
                    if (a && b) {
                        if (b.left !== l || b.top !== l) c = (b.left === l ? a.position().left : b.left) + "px, " + (b.top === l ? a.position().top : b.top) + "px", c = this.use3d ? "translate3d(" + c + ", 0px)" : "translate(" + c + ")";
                        b.scaleX !== l && b.scaleY !== l ? c += " scale(" + b.scaleX + ", " + b.scaleY + ")" : b.scaleX !== l && (c += " scaleX(" + b.scaleX + ")");
                        c.length && (d.transform = c);
                        b.opacity !== l && (d.opacity = b.opacity);
                        b.width !== l && (d.width = b.width);
                        b.height !== l && (d.height = b.height);
                        return a.css(d)
                    }
                },
                animate: function(a, b, c, d, k) {
                    var q = this;
                    e.isFunction(c) && (d = c, c = null);
                    q.stop(a);
                    var w = q.getTranslate(a);
                    a.on(h, function(t) {
                        if (!t || !t.originalEvent || a.is(t.originalEvent.target) && "z-index" != t.originalEvent.propertyName) q.stop(a), e.isNumeric(c) && a.css("transition-duration", ""), e.isPlainObject(b) ? b.scaleX !== l && b.scaleY !== l && q.setTranslate(a, {
                            top: b.top,
                            left: b.left,
                            width: w.width * b.scaleX,
                            height: w.height * b.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== k && a.removeClass(b), e.isFunction(d) && d(t)
                    });
                    e.isNumeric(c) && a.css("transition-duration", c + "ms");
                    e.isPlainObject(b) ? (b.scaleX !== l && b.scaleY !== l && (delete b.width, delete b.height, a.parent().hasClass("fancybox-slide--image") && a.parent().addClass("fancybox-is-scaling")), e.fancybox.setTranslate(a, b)) : a.addClass(b);
                    a.data("timer", setTimeout(function() {
                        a.trigger(h)
                    }, c + 33))
                },
                stop: function(a, b) {
                    a && a.length && (clearTimeout(a.data("timer")), b && a.trigger(h), a.off(h).css("transition-duration", ""), a.parent().removeClass("fancybox-is-scaling"))
                }
            };
            e.fn.fancybox = function(a) {
                var b;
                a = a || {};
                if (b = a.selector || !1) e("body").off("click.fb-start", b).on("click.fb-start", b, {
                    options: a
                }, g);
                else this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: a
                }, g);
                return this
            };
            n.on("click.fb-start", "[data-fancybox]", g);
            n.on("click.fb-start", "[data-fancybox-trigger]", function(a) {
                e('[data-fancybox="' + e(this).attr("data-fancybox-trigger") + '"]').eq(e(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: e(this)
                })
            });
            (function() {
                var a = null;
                n.on("mousedown mouseup focus blur", ".fancybox-button", function(b) {
                    switch (b.type) {
                        case "mousedown":
                            a = e(this);
                            break;
                        case "mouseup":
                            a = null;
                            break;
                        case "focusin":
                            e(".fancybox-button").removeClass("fancybox-focus");
                            e(this).is(a) || e(this).is("[disabled]") || e(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            e(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            })()
        }
})(window, document, jQuery);
(function(p) {
    var x = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "https://www.youtube-nocookie.com/embed/$4",
                thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(g) {
                    return "//maps.google." + g[2] + "/?ll=" + (g[9] ? g[9] + "&z=" + Math.floor(g[10]) + (g[12] ? g[12].replace(/^\//, "&") : "") : g[12] + "").replace(/\?/, "&") +
                        "&output=" + (g[12] && 0 < g[12].indexOf("layer=c") ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(g) {
                    return "//maps.google." + g[2] + "/maps?q=" + g[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        e = function(g, r, m) {
            if (g) return m = m || "", "object" === p.type(m) && (m = p.param(m, !0)), p.each(r, function(n, z) {
                g = g.replace("$" + n, z || "")
            }), m.length && (g += (0 < g.indexOf("?") ? "&" : "?") + m), g
        };
    p(document).on("objectNeedsType.fb", function(g, r, m) {
        var n = m.src || "",
            z = !1,
            A, f, h, u, v, y;
        g = p.extend(!0, {}, x, m.opts.media);
        p.each(g, function(a, b) {
            if (f = n.match(b.matcher)) {
                z = b.type;
                y = a;
                v = {};
                if (b.paramPlace && f[b.paramPlace]) {
                    u = f[b.paramPlace];
                    "?" == u[0] && (u = u.substring(1));
                    u = u.split("&");
                    for (var c = 0; c < u.length; ++c) {
                        var d = u[c].split("=", 2);
                        2 == d.length && (v[d[0]] = decodeURIComponent(d[1].replace(/\+/g, " ")))
                    }
                }
                h = p.extend(!0, {}, b.params, m.opts[a], v);
                n = "function" === p.type(b.url) ? b.url.call(this, f, h, m) : e(b.url, f, h);
                A = "function" === p.type(b.thumb) ? b.thumb.call(this, f, h, m) : e(b.thumb, f);
                "youtube" === a ? n = n.replace(/&t=((\d+)m)?(\d+)s/, function(k, q, w, t) {
                    return "&start=" + ((w ? 60 * parseInt(w, 10) : 0) + parseInt(t, 10))
                }) : "vimeo" === a && (n = n.replace("&%23", "#"));
                return !1
            }
        });
        z ? (m.opts.thumb || m.opts.$thumb && m.opts.$thumb.length || (m.opts.thumb = A), "iframe" === z && (m.opts = p.extend(!0, m.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), p.extend(m, {
            type: z,
            src: n,
            origSrc: m.src,
            contentSource: y,
            contentType: "image" === z ? "image" : "gmap_place" == y || "gmap_search" == y ? "map" : "video"
        })) : n && (m.type = m.opts.defaultType)
    });
    var l = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(g) {
            var r = this;
            if (this[g].loaded) setTimeout(function() {
                r.done(g)
            });
            else if (!this[g].loading) {
                this[g].loading = !0;
                var m = document.createElement("script");
                m.type = "text/javascript";
                m.src = this[g].src;
                "youtube" === g ? window.onYouTubeIframeAPIReady = function() {
                    r[g].loaded = !0;
                    r.done(g)
                } : m.onload = function() {
                    r[g].loaded = !0;
                    r.done(g)
                };
                document.body.appendChild(m)
            }
        },
        done: function(g) {
            var r;
            "youtube" === g && delete window.onYouTubeIframeAPIReady;
            if (r = p.fancybox.getInstance()) {
                var m = r.current.$content.find("iframe");
                "youtube" === g && void 0 !== YT && YT ? g = new YT.Player(m.attr("id"), {
                    events: {
                        onStateChange: function(n) {
                            0 == n.data && r.next()
                        }
                    }
                }) : "vimeo" === g && void 0 !== Vimeo && Vimeo && (g = new Vimeo.Player(m), g.on("ended", function() {
                    r.next()
                }))
            }
        }
    };
    p(document).on({
        "afterShow.fb": function(g, r, m) {
            1 < r.group.length && ("youtube" === m.contentSource || "vimeo" === m.contentSource) && l.load(m.contentSource)
        }
    })
})(jQuery);
(function(p, x, e) {
    var l = function() {
            return p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || function(f) {
                return p.setTimeout(f, 1E3 / 60)
            }
        }(),
        g = function() {
            return p.cancelAnimationFrame || p.webkitCancelAnimationFrame || p.mozCancelAnimationFrame || p.oCancelAnimationFrame || function(f) {
                p.clearTimeout(f)
            }
        }(),
        r = function(f) {
            var h = [];
            f = f.originalEvent || f || p.e;
            f = f.touches && f.touches.length ? f.touches : f.changedTouches && f.changedTouches.length ? f.changedTouches : [f];
            for (var u in f) f[u].pageX ? h.push({
                x: f[u].pageX,
                y: f[u].pageY
            }) : f[u].clientX && h.push({
                x: f[u].clientX,
                y: f[u].clientY
            });
            return h
        },
        m = function(f, h, u) {
            return h && f ? "x" === u ? f.x - h.x : "y" === u ? f.y - h.y : Math.sqrt(Math.pow(f.x - h.x, 2) + Math.pow(f.y - h.y, 2)) : 0
        },
        n = function(f) {
            if (f.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || e.isFunction(f.get(0).onclick) || f.data("selectable")) return !0;
            var h = 0;
            f = f[0].attributes;
            for (var u = f.length; h < u; h++)
                if ("data-fancybox-" === f[h].nodeName.substr(0, 14)) return !0;
            return !1
        },
        z = function(f) {
            for (var h;;) {
                h = f.get(0);
                var u = p.getComputedStyle(h)["overflow-y"],
                    v = p.getComputedStyle(h)["overflow-x"];
                v = ("scroll" === v || "auto" === v) && h.scrollWidth > h.clientWidth;
                if (h = ("scroll" === u || "auto" === u) && h.scrollHeight > h.clientHeight || v) break;
                f = f.parent();
                if (!f.length || f.hasClass("fancybox-stage") || f.is("body")) break
            }
            return h
        },
        A = function(f) {
            this.instance = f;
            this.$bg = f.$refs.bg;
            this.$stage = f.$refs.stage;
            this.$container = f.$refs.container;
            this.destroy();
            this.$container.on("touchstart.fb.touch mousedown.fb.touch", e.proxy(this, "ontouchstart"))
        };
    A.prototype.destroy = function() {
        this.$container.off(".fb.touch");
        e(x).off(".fb.touch");
        this.requestId && (g(this.requestId), this.requestId = null);
        this.tapped && (clearTimeout(this.tapped), this.tapped = null)
    };
    A.prototype.ontouchstart = function(f) {
        var h = e(f.target),
            u = this.instance,
            v = u.current,
            y = v.$slide,
            a = v.$content,
            b = "touchstart" == f.type;
        b && this.$container.off("mousedown.fb.touch");
        if (!(f.originalEvent && 2 == f.originalEvent.button || !y.length || !h.length || n(h) || n(h.parent()) || !h.is("img") && f.originalEvent.clientX > h[0].clientWidth + h.offset().left))
            if (!v || u.isAnimating || v.$slide.hasClass("fancybox-animated")) f.stopPropagation(), f.preventDefault();
            else if (this.realPoints = this.startPoints = r(f), this.startPoints.length) {
            v.touch && f.stopPropagation();
            this.startEvent = f;
            this.canTap = !0;
            this.$target = h;
            this.$content = a;
            this.opts = v.opts.touch;
            this.isScrolling = this.isZooming = this.isSwiping = this.isPanning = !1;
            this.canPan = u.canPan();
            this.startTime = (new Date).getTime();
            this.distanceX = this.distanceY = this.distance = 0;
            this.canvasWidth = Math.round(y[0].clientWidth);
            this.canvasHeight = Math.round(y[0].clientHeight);
            this.contentLastPos = null;
            this.contentStartPos = e.fancybox.getTranslate(this.$content) || {
                top: 0,
                left: 0
            };
            this.sliderStartPos = e.fancybox.getTranslate(y);
            this.stagePos = e.fancybox.getTranslate(u.$refs.stage);
            this.sliderStartPos.top -= this.stagePos.top;
            this.sliderStartPos.left -= this.stagePos.left;
            this.contentStartPos.top -= this.stagePos.top;
            this.contentStartPos.left -= this.stagePos.left;
            e(x).off(".fb.touch").on(b ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", e.proxy(this, "ontouchend")).on(b ? "touchmove.fb.touch" : "mousemove.fb.touch", e.proxy(this, "ontouchmove"));
            e.fancybox.isMobile && x.addEventListener("scroll", this.onscroll, !0);
            if (!this.opts && !this.canPan || !h.is(this.$stage) && !this.$stage.find(h).length)
                if (h.is(".fancybox-image") && f.preventDefault(), !e.fancybox.isMobile || !h.parents(".fancybox-caption").length) return;
            this.isScrollable = z(h) || z(h.parent());
            e.fancybox.isMobile && this.isScrollable || f.preventDefault();
            if (1 === this.startPoints.length || v.hasError) this.canPan ? (e.fancybox.stop(this.$content), this.isPanning = !0) : this.isSwiping = !0, this.$container.addClass("fancybox-is-grabbing");
            2 === this.startPoints.length && "image" === v.type && (v.isLoaded || v.$ghost) && (this.isPanning = this.isSwiping = this.canTap = !1, this.isZooming = !0, e.fancybox.stop(this.$content), this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - e(p).scrollLeft(), this.centerPointStartY = .5 * (this.startPoints[0].y +
                this.startPoints[1].y) - e(p).scrollTop(), this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, this.startDistanceBetweenFingers = m(this.startPoints[0], this.startPoints[1]))
        }
    };
    A.prototype.onscroll = function(f) {
        this.isScrolling = !0;
        x.removeEventListener("scroll", this.onscroll, !0)
    };
    A.prototype.ontouchmove = function(f) {
        if (void 0 !== f.originalEvent.buttons && 0 === f.originalEvent.buttons) this.ontouchend(f);
        else if (this.isScrolling) this.canTap = !1;
        else if (this.newPoints = r(f), (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || f.preventDefault(), this.distanceX = m(this.newPoints[0], this.startPoints[0], "x"), this.distanceY = m(this.newPoints[0], this.startPoints[0], "y"), this.distance = m(this.newPoints[0], this.startPoints[0]), 0 < this.distance))
            if (this.isSwiping) this.onSwipe(f);
            else if (this.isPanning) this.onPan();
        else if (this.isZooming) this.onZoom()
    };
    A.prototype.onSwipe = function(f) {
        var h = this,
            u = h.instance;
        f = h.isSwiping;
        var v = h.sliderStartPos.left || 0;
        !0 === f ? 10 < Math.abs(h.distance) && (h.canTap = !1, 2 > u.group.length && h.opts.vertical ? h.isSwiping = "y" : u.isDragging || !1 === h.opts.vertical || "auto" === h.opts.vertical && 800 < e(p).width() ? h.isSwiping = "x" : (f = Math.abs(180 * Math.atan2(h.distanceY, h.distanceX) / Math.PI), h.isSwiping = 45 < f && 135 > f ? "y" : "x"), "y" === h.isSwiping && e.fancybox.isMobile && h.isScrollable ? h.isScrolling = !0 : (u.isDragging = h.isSwiping, h.startPoints = h.newPoints, e.each(u.slides, function(y, a) {
            e.fancybox.stop(a.$slide);
            y = e.fancybox.getTranslate(a.$slide);
            var b = e.fancybox.getTranslate(u.$refs.stage);
            a.$slide.css({
                transform: "",
                opacity: "",
                "transition-duration": ""
            }).removeClass("fancybox-animated").removeClass(function(c, d) {
                return (d.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
            });
            a.pos === u.current.pos && (h.sliderStartPos.top = y.top - b.top, h.sliderStartPos.left = y.left - b.left);
            e.fancybox.setTranslate(a.$slide, {
                top: y.top - b.top,
                left: y.left - b.left
            })
        }), u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())) : ("x" == f && (v = 0 < h.distanceX && (2 > h.instance.group.length || 0 === h.instance.current.index && !h.instance.current.opts.loop) ? v + Math.pow(h.distanceX, .8) : 0 > h.distanceX && (2 > h.instance.group.length || h.instance.current.index === h.instance.group.length - 1 && !h.instance.current.opts.loop) ? v - Math.pow(-h.distanceX, .8) : v + h.distanceX), h.sliderLastPos = {
            top: "x" == f ? 0 : h.sliderStartPos.top + h.distanceY,
            left: v
        }, h.requestId && (g(h.requestId), h.requestId = null), h.requestId = l(function() {
            h.sliderLastPos && (e.each(h.instance.slides, function(y, a) {
                y = a.pos - h.instance.currPos;
                e.fancybox.setTranslate(a.$slide, {
                    top: h.sliderLastPos.top,
                    left: h.sliderLastPos.left + y * h.canvasWidth + y * a.opts.gutter
                })
            }), h.$container.addClass("fancybox-is-sliding"))
        }))
    };
    A.prototype.onPan = function() {
        var f = this;
        m(f.newPoints[0], f.realPoints[0]) < (e.fancybox.isMobile ? 10 : 5) ? f.startPoints = f.newPoints : (f.canTap = !1, f.contentLastPos = f.limitMovement(), f.requestId && g(f.requestId), f.requestId = l(function() {
            e.fancybox.setTranslate(f.$content, f.contentLastPos)
        }))
    };
    A.prototype.limitMovement = function() {
        var f = this.canvasWidth,
            h = this.canvasHeight,
            u = this.distanceX,
            v = this.distanceY,
            y = this.contentStartPos,
            a = y.left,
            b = y.top,
            c = y.width,
            d = y.height;
        var k = c > f ? a + u : a;
        var q = b + v;
        y = Math.max(0, .5 * f - .5 * c);
        var w = Math.max(0, .5 * h - .5 * d);
        f = Math.min(f - c, .5 * f - .5 * c);
        h = Math.min(h - d, .5 * h - .5 * d);
        0 < u && k > y && (k = y - 1 + Math.pow(-y + a + u, .8) || 0);
        0 > u && k < f && (k = f + 1 - Math.pow(f - a - u, .8) || 0);
        0 < v && q > w && (q = w - 1 + Math.pow(-w + b + v, .8) || 0);
        0 > v && q < h && (q = h + 1 - Math.pow(h - b - v, .8) || 0);
        return {
            top: q,
            left: k
        }
    };
    A.prototype.limitPosition = function(f, h, u, v) {
        var y = this.canvasWidth,
            a = this.canvasHeight;
        u > y ? (f = 0 < f ? 0 : f, f = f < y - u ? y - u : f) : f = Math.max(0, y / 2 - u / 2);
        v > a ? (h = 0 < h ? 0 : h, h = h < a - v ? a - v : h) : h = Math.max(0, a / 2 - v / 2);
        return {
            top: h,
            left: f
        }
    };
    A.prototype.onZoom = function() {
        var f = this,
            h = f.contentStartPos,
            u = h.width,
            v = h.height,
            y = h.left,
            a = h.top,
            b = m(f.newPoints[0], f.newPoints[1]) / f.startDistanceBetweenFingers;
        h = Math.floor(u * b);
        var c = Math.floor(v * b);
        u = (u - h) * f.percentageOfImageAtPinchPointX;
        v = (v - c) * f.percentageOfImageAtPinchPointY;
        var d = (f.newPoints[0].x + f.newPoints[1].x) / 2 - e(p).scrollLeft(),
            k = (f.newPoints[0].y + f.newPoints[1].y) / 2 - e(p).scrollTop();
        y = {
            top: a + (v + (k - f.centerPointStartY)),
            left: y + (u + (d - f.centerPointStartX)),
            scaleX: b,
            scaleY: b
        };
        f.canTap = !1;
        f.newWidth = h;
        f.newHeight = c;
        f.contentLastPos = y;
        f.requestId && g(f.requestId);
        f.requestId = l(function() {
            e.fancybox.setTranslate(f.$content, f.contentLastPos)
        })
    };
    A.prototype.ontouchend = function(f) {
        var h = this.isSwiping,
            u = this.isPanning,
            v = this.isZooming,
            y = this.isScrolling;
        this.endPoints = r(f);
        this.dMs = Math.max((new Date).getTime() - this.startTime, 1);
        this.$container.removeClass("fancybox-is-grabbing");
        e(x).off(".fb.touch");
        x.removeEventListener("scroll", this.onscroll, !0);
        this.requestId && (g(this.requestId), this.requestId = null);
        this.isScrolling = this.isZooming = this.isPanning = this.isSwiping = !1;
        this.instance.isDragging = !1;
        if (this.canTap) return this.onTap(f);
        this.speed = 100;
        this.velocityX = this.distanceX / this.dMs * .5;
        this.velocityY = this.distanceY / this.dMs * .5;
        u ? this.endPanning() : v ? this.endZooming() : this.endSwiping(h, y)
    };
    A.prototype.endSwiping = function(f, h) {
        var u = !1,
            v = this.instance.group.length,
            y = Math.abs(this.distanceX);
        v = "x" == f && 1 < v && (130 < this.dMs && 10 < y || 50 < y);
        this.sliderLastPos = null;
        "y" == f && !h && 50 < Math.abs(this.distanceY) ? (e.fancybox.animate(this.instance.current.$slide, {
            top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
            opacity: 0
        }, 200), u = this.instance.close(!0, 250)) : v && 0 < this.distanceX ? u = this.instance.previous(300) : v && 0 > this.distanceX && (u = this.instance.next(300));
        !1 !== u || "x" != f && "y" != f || this.instance.centerSlide(200);
        this.$container.removeClass("fancybox-is-sliding")
    };
    A.prototype.endPanning = function() {
        if (this.contentLastPos) {
            if (!1 === this.opts.momentum || 350 < this.dMs) {
                var f = this.contentLastPos.left;
                var h = this.contentLastPos.top
            } else f = this.contentLastPos.left + 500 * this.velocityX, h = this.contentLastPos.top + 500 * this.velocityY;
            f = this.limitPosition(f, h, this.contentStartPos.width, this.contentStartPos.height);
            f.width = this.contentStartPos.width;
            f.height = this.contentStartPos.height;
            e.fancybox.animate(this.$content, f, 366)
        }
    };
    A.prototype.endZooming = function() {
        var f = this.instance.current,
            h = this.newWidth,
            u = this.newHeight;
        if (this.contentLastPos) {
            var v = this.contentLastPos.left;
            var y = this.contentLastPos.top;
            e.fancybox.setTranslate(this.$content, {
                top: y,
                left: v,
                width: h,
                height: u,
                scaleX: 1,
                scaleY: 1
            });
            h < this.canvasWidth && u < this.canvasHeight ? this.instance.scaleToFit(150) : h > f.width || u > f.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (f = this.limitPosition(v, y, h, u), e.fancybox.animate(this.$content, f, 150))
        }
    };
    A.prototype.onTap = function(f) {
        var h = this,
            u = e(f.target),
            v = h.instance,
            y = v.current,
            a = f && r(f) || h.startPoints,
            b = a[0] ? a[0].x - e(p).scrollLeft() - h.stagePos.left : 0,
            c = a[0] ? a[0].y - e(p).scrollTop() - h.stagePos.top : 0,
            d = function(q) {
                q = y.opts[q];
                e.isFunction(q) && (q = q.apply(v, [y, f]));
                if (q) switch (q) {
                    case "close":
                        v.close(h.startEvent);
                        break;
                    case "toggleControls":
                        v.toggleControls();
                        break;
                    case "next":
                        v.next();
                        break;
                    case "nextOrClose":
                        1 < v.group.length ? v.next() : v.close(h.startEvent);
                        break;
                    case "zoom":
                        "image" == y.type && (y.isLoaded || y.$ghost) && (v.canPan() ? v.scaleToFit() : v.isScaledDown() ? v.scaleToActual(b, c) : 2 > v.group.length && v.close(h.startEvent))
                }
            };
        if (!f.originalEvent || 2 != f.originalEvent.button)
            if (u.is("img") || !(b > u[0].clientWidth + u.offset().left)) {
                if (u.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) var k = "Outside";
                else if (u.is(".fancybox-slide")) k = "Slide";
                else if (v.current.$content && v.current.$content.find(u).addBack().filter(u).length) k = "Content";
                else return;
                if (h.tapped) {
                    clearTimeout(h.tapped);
                    h.tapped = null;
                    if (50 < Math.abs(b - h.tapX) || 50 < Math.abs(c - h.tapY)) return this;
                    d("dblclick" + k)
                } else h.tapX = b, h.tapY = c, y.opts["dblclick" + k] && y.opts["dblclick" + k] !== y.opts["click" + k] ? h.tapped = setTimeout(function() {
                    h.tapped = null;
                    v.isAnimating || d("click" + k)
                }, 500) : d("click" + k);
                return this
            }
    };
    e(x).on("onActivate.fb", function(f, h) {
        h && !h.Guestures && (h.Guestures = new A(h))
    }).on("beforeClose.fb", function(f, h) {
        h && h.Guestures && h.Guestures.destroy()
    })
})(window, document, jQuery);
(function(p, x) {
    x.extend(!0, x.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3E3,
            progress: !0
        }
    });
    var e = function(l) {
        this.instance = l;
        this.init()
    };
    x.extend(e.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var l = this,
                g = l.instance,
                r = g.group[g.currIndex].opts.slideShow;
            l.$button = g.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                l.toggle()
            });
            2 > g.group.length || !r ? l.$button.hide() : r.progress && (l.$progress = x('<div class="fancybox-progress"></div>').appendTo(g.$refs.inner))
        },
        set: function(l) {
            var g = this.instance,
                r = g.current;
            r && (!0 === l || r.opts.loop || g.currIndex < g.group.length - 1) ? this.isActive && "video" !== r.contentType && (this.$progress && x.fancybox.animate(this.$progress.show(), {
                scaleX: 1
            }, r.opts.slideShow.speed), this.timer = setTimeout(function() {
                g.current.opts.loop || g.current.index != g.group.length - 1 ? g.next() : g.jumpTo(0)
            }, r.opts.slideShow.speed)) : (this.stop(), g.idleSecondsCounter = 0, g.showControls())
        },
        clear: function() {
            clearTimeout(this.timer);
            this.timer = null;
            this.$progress && this.$progress.removeAttr("style").hide()
        },
        start: function() {
            var l = this.instance.current;
            l && (this.$button.attr("title", (l.opts.i18n[l.opts.lang] || l.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, l.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var l = this.instance.current;
            this.clear();
            this.$button.attr("title", (l.opts.i18n[l.opts.lang] || l.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
            this.isActive = !1;
            this.instance.trigger("onSlideShowChange", !1);
            this.$progress && this.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start()
        }
    });
    x(p).on({
        "onInit.fb": function(l, g) {
            g && !g.SlideShow && (g.SlideShow = new e(g))
        },
        "beforeShow.fb": function(l, g, r, m) {
            l = g && g.SlideShow;
            m ? l && r.opts.slideShow.autoStart && l.start() : l && l.isActive && l.clear()
        },
        "afterShow.fb": function(l, g, r) {
            (l = g && g.SlideShow) && l.isActive && l.set()
        },
        "afterKeydown.fb": function(l, g, r, m, n) {
            !(l = g && g.SlideShow) || !r.opts.slideShow || 80 !== n && 32 !== n || x(p.activeElement).is("button,a,input") || (m.preventDefault(), l.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(l, g) {
            (l = g && g.SlideShow) && l.stop()
        }
    });
    x(p).on("visibilitychange", function() {
        var l = x.fancybox.getInstance();
        (l = l && l.SlideShow) && l.isActive && (p.hidden ? l.clear() : l.set())
    })
})(document, jQuery);
(function(p, x) {
    var e = function() {
        for (var g = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], r = {}, m = 0; m < g.length; m++) {
            var n = g[m];
            if (n && n[1] in p) {
                for (m = 0; m < n.length; m++) r[g[0][m]] = n[m];
                return r
            }
        }
        return !1
    }();
    if (e) {
        var l = {
            request: function(g) {
                g = g || p.documentElement;
                g[e.requestFullscreen](g.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                p[e.exitFullscreen]()
            },
            toggle: function(g) {
                g = g || p.documentElement;
                this.isFullscreen() ? this.exit() : this.request(g)
            },
            isFullscreen: function() {
                return !!p[e.fullscreenElement]
            },
            enabled: function() {
                return !!p[e.fullscreenEnabled]
            }
        };
        x.extend(!0, x.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        });
        x(p).on(e.fullscreenchange, function() {
            var g = l.isFullscreen(),
                r = x.fancybox.getInstance();
            r && (r.current && "image" === r.current.type && r.isAnimating && (r.isAnimating = !1, r.update(!0, !0, 0), r.isComplete || r.complete()), r.trigger("onFullscreenChange", g), r.$refs.container.toggleClass("fancybox-is-fullscreen", g), r.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !g).toggleClass("fancybox-button--fsexit", g))
        })
    }
    x(p).on({
        "onInit.fb": function(g, r) {
            e ? r && r.group[r.currIndex].opts.fullScreen ? (g = r.$refs.container, g.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(m) {
                m.stopPropagation();
                m.preventDefault();
                l.toggle()
            }), r.opts.fullScreen && !0 === r.opts.fullScreen.autoStart && l.request(), r.FullScreen = l) : r && r.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : r.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(g, r, m, n, z) {
            r && r.FullScreen && 70 === z && (n.preventDefault(), r.FullScreen.toggle())
        },
        "beforeClose.fb": function(g, r) {
            r && r.FullScreen && r.$refs.container.hasClass("fancybox-is-fullscreen") && l.exit()
        }
    })
})(document, jQuery);
(function(p, x) {
    x.fancybox.defaults = x.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, x.fancybox.defaults);
    var e = function(l) {
        this.init(l)
    };
    x.extend(e.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(l) {
            var g = this,
                r = l.group,
                m = 0;
            g.instance = l;
            g.opts = r[l.currIndex].opts.thumbs;
            l.Thumbs = g;
            g.$button = l.$refs.toolbar.find("[data-fancybox-thumbs]");
            l = 0;
            for (var n = r.length; l < n && !(r[l].thumb && m++, 1 < m); l++);
            1 < m && g.opts ? (g.$button.removeAttr("style").on("click", function() {
                g.toggle()
            }), g.isActive = !0) : g.$button.hide()
        },
        create: function() {
            var l = this.instance,
                g = this.opts.parentEl,
                r = [],
                m;
            this.$grid || (this.$grid = x('<div class="fancybox-thumbs fancybox-thumbs-' + this.opts.axis + '"></div>').appendTo(l.$refs.container.find(g).addBack().filter(g)), this.$grid.on("click", "a", function() {
                l.jumpTo(x(this).attr("data-index"))
            }));
            this.$list || (this.$list = x('<div class="fancybox-thumbs__list">').appendTo(this.$grid));
            x.each(l.group, function(n, z) {
                m = z.thumb;
                m || "image" !== z.type || (m = z.src);
                r.push('<a href="javascript:;" tabindex="0" data-index="' +
                    n + '"' + (m && m.length ? ' style="background-image:url(' + m + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            });
            this.$list[0].innerHTML = r.join("");
            "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + l.group.length * this.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(l) {
            var g = this.$list,
                r = this.$grid;
            if (this.instance.current) {
                var m = g.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active");
                var n = m.position();
                "y" === this.opts.axis && (0 > n.top || n.top > g.height() - m.outerHeight()) ? g.stop().animate({
                    scrollTop: g.scrollTop() + n.top
                }, l) : "x" === this.opts.axis && (n.left < r.scrollLeft() || n.left > r.scrollLeft() + (r.width() - m.outerWidth())) && g.parent().stop().animate({
                    scrollLeft: n.left
                }, l)
            }
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
            this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide");
            this.instance.update()
        },
        hide: function() {
            this.isVisible = !1;
            this.update()
        },
        show: function() {
            this.isVisible = !0;
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible;
            this.update()
        }
    });
    x(p).on({
        "onInit.fb": function(l, g) {
            g && !g.Thumbs && (l = new e(g), l.isActive && !0 === l.opts.autoStart && l.show())
        },
        "beforeShow.fb": function(l, g, r, m) {
            (l = g && g.Thumbs) && l.isVisible && l.focus(m ? 0 : 250)
        },
        "afterKeydown.fb": function(l, g, r, m, n) {
            (l = g && g.Thumbs) && l.isActive && 71 === n && (m.preventDefault(), l.toggle())
        },
        "beforeClose.fb": function(l, g) {
            (l = g && g.Thumbs) && l.isVisible && !1 !== l.opts.hideOnClose && l.$grid.hide()
        }
    })
})(document, jQuery);
(function(p, x) {
    function e(l) {
        var g = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return String(l).replace(/[&<>"'`=\/]/g, function(r) {
            return g[r]
        })
    }
    x.extend(!0, x.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(l, g) {
                return (l.currentHash || "inline" === g.type || "html" === g.type ? !1 : g.origSrc || g.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    });
    x(p).on("click", "[data-fancybox-share]", function() {
        var l = x.fancybox.getInstance(),
            g = l.current || null,
            r;
        g && ("function" === x.type(g.opts.share.url) && (r = g.opts.share.url.apply(g, [l, g])), g = g.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === g.type ? encodeURIComponent(g.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(r)).replace(/\{\{url_raw\}\}/g, e(r)).replace(/\{\{descr\}\}/g, l.$caption ? encodeURIComponent(l.$caption.text()) : ""), x.fancybox.open({
            src: l.translate(l, g),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(m, n) {
                    l.$refs.container.one("beforeClose.fb", function() {
                        m.close(null, 0)
                    });
                    n.$content.find(".fancybox-share__button").click(function() {
                        window.open(this.href, "Share", "width=550, height=450");
                        return !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
})(document, jQuery);
(function(p, x, e) {
    function l() {
        var m = p.location.hash.substr(1),
            n = m.split("-"),
            z = 1 < n.length && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1;
        n = n.join("-");
        return {
            hash: m,
            index: 1 > z ? 1 : z,
            gallery: n
        }
    }

    function g(m) {
        "" !== m.gallery && e("[data-fancybox='" + e.escapeSelector(m.gallery) + "']").eq(m.index - 1).focus().trigger("click.fb-start")
    }

    function r(m) {
        if (!m) return !1;
        m = m.current ? m.current.opts : m.opts;
        m = m.hash || (m.$orig ? m.$orig.data("fancybox") || m.$orig.data("fancybox-trigger") : "");
        return "" === m ? !1 : m
    }
    e.escapeSelector || (e.escapeSelector = function(m) {
        return (m + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(n, z) {
            return z ? "\x00" === n ? "\ufffd" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
        })
    });
    e(function() {
        !1 !== e.fancybox.defaults.hash && (e(x).on({
            "onInit.fb": function(m, n) {
                var z;
                !1 !== n.group[n.currIndex].opts.hash && (m = l(), (z = r(n)) && m.gallery && z == m.gallery && (n.currIndex = m.index - 1))
            },
            "beforeShow.fb": function(m, n, z, A) {
                z && !1 !== z.opts.hash && (m = r(n)) && (n.currentHash = m + (1 < n.group.length ? "-" + (z.index + 1) : ""), p.location.hash !== "#" + n.currentHash && (A && !n.origHash && (n.origHash = p.location.hash), n.hashTimer && clearTimeout(n.hashTimer), n.hashTimer = setTimeout(function() {
                    "replaceState" in p.history ? (p.history[A ? "pushState" : "replaceState"]({}, x.title, p.location.pathname + p.location.search + "#" + n.currentHash), A && (n.hasCreatedHistory = !0)) : p.location.hash = n.currentHash;
                    n.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(m, n, z) {
                z && !1 !== z.opts.hash && (clearTimeout(n.hashTimer), n.currentHash && n.hasCreatedHistory ? p.history.back() : n.currentHash && ("replaceState" in p.history ? p.history.replaceState({}, x.title, p.location.pathname + p.location.search + (n.origHash || "")) : p.location.hash = n.origHash), n.currentHash = null)
            }
        }), e(p).on("hashchange.fb", function() {
            var m = l(),
                n = null;
            e.each(e(".fancybox-container").get().reverse(), function(z, A) {
                if ((z = e(A).data("FancyBox")) && z.currentHash) return n = z, !1
            });
            n ? n.currentHash === m.gallery + "-" + m.index || 1 === m.index && n.currentHash == m.gallery || (n.currentHash = null, n.close()) : "" !== m.gallery && g(m)
        }), setTimeout(function() {
            e.fancybox.getInstance() || g(l())
        }, 50))
    })
})(window, document, jQuery);
(function(p, x) {
    var e = (new Date).getTime();
    x(p).on({
        "onInit.fb": function(l, g, r) {
            g.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(m) {
                var n = g.current,
                    z = (new Date).getTime();
                2 > g.group.length || !1 === n.opts.wheel || "auto" === n.opts.wheel && "image" !== n.type || (m.preventDefault(), m.stopPropagation(), n.$slide.hasClass("fancybox-animated") || (m = m.originalEvent || m, 250 > z - e || (e = z, g[0 > (-m.deltaY || -m.deltaX || m.wheelDelta || -m.detail) ? "next" : "previous"]())))
            })
        }
    })
})(document, jQuery);
'use strict';
! function(e, l, k, n) {
    XF.Lightbox = XF.Element.newHandler({
        options: {
            lbInfobar: 1,
            lbSlideShow: 1,
            lbThumbsAuto: 1,
            lbUniversal: 0,
            lbTrigger: ".js-lbImage",
            lbContainer: ".js-lbContainer",
            lbHistory: 0,
            lbPrev: null,
            lbNext: null
        },
        $sidebar: null,
        initialUrl: null,
        prevUrl: null,
        nextUrl: null,
        thumbsInitialized: !1,
        lastIndex: null,
        isJumping: !1,
        pushStateCount: 0,
        init: function() {
            this.initContainers();
            e(k).on("xf:reinit", XF.proxy(this, "checkReInit"));
            e(k).on("click", "a.js-lightboxCloser", function(a) {
                a = e(a.target);
                XF.findRelativeIf("< .fancybox-inner | .fancybox-toolbar", a).find("[data-fancybox-close]").click()
            })
        },
        getInstance: function() {
            return e.fancybox.getInstance()
        },
        handlePopstate: function(a) {
            if (this.options.lbHistory) {
                var b = this.getInstance();
                this.pushStateCount--;
                a && "object" === typeof a && a.hasOwnProperty("slide_src") ? (this.isJumping = !0, b && (a = b.findIndexFromSrc(a.slide_src), null !== a && b.jumpTo(a))) : b && (this.pushStateCount = 0, b.close())
            }
        },
        initContainers: function() {
            var a = this;
            (this.options.lbUniversal ? this.$target : this.$target.find(this.options.lbContainer)).each(function() {
                a._initContainer(e(this))
            })
        },
        _initContainer: function(a) {
            if (!a.data("lbInitialized")) {
                a.data("lbInitialized", !0);
                var b = this;
                a.find(this.options.lbTrigger).on("click.xflbtrigger mousedown.xflbtrigger", function(d) {
                    var g = e(d.target).parent();
                    ("mousedown" === d.type ? 2 === d.which : d.ctrlKey || d.altKey || d.metaKey || d.shiftKey) && b.isSingleImage(g) && (d.stopImmediatePropagation(), l.open(g.data("src"), "_blank"));
                    return !0
                });
                a.find(b.options.lbTrigger).each(function() {
                    var d = e(this);
                    d.on("lightbox:image-checked", XF.proxy(b, "imageChecked"));
                    b.checkImageSizes(d, a)
                });
                var c = e.extend(this.getConfig(a), {
                    selector: this.options.lbTrigger + '[data-fancybox="' + this.getContainerId(a) + '"]'
                });
                a.fancybox(c);
                a.on("lightbox:init", XF.proxy(this, "onInit"));
                a.on("lightbox:activate", XF.proxy(this, "onActivate"));
                a.on("lightbox:after-load", XF.proxy(this, "afterLoad"));
                a.on("lightbox:before-show", XF.proxy(this, "beforeShow"));
                a.on("lightbox:after-show", XF.proxy(this, "afterShow"));
                a.on("lightbox:before-close", XF.proxy(this, "beforeClose"));
                a.on("lightbox:after-close", XF.proxy(this, "afterClose"))
            }
        },
        checkReInit: function(a, b) {
            if (b != k && this.$target.find(b).length) {
                a = e(b);
                b = this.options.lbTrigger;
                var c = this.options.lbContainer;
                this.options.lbUniversal ? (a.is(b) || a.find(b).length) && this._reInitContainer(this.$target) : a.is(c) || a.find(c).length ? this.initContainers() : a.closest(c).length && (a.is(b) || a.find(b).length) && this._reInitContainer(a.closest(c))
            }
        },
        _reInitContainer: function(a) {
            if (a.data("lbInitialized")) {
                var b = this.getInstance();
                b && b.close();
                a.removeData("lbInitialized");
                a.off("onThumbsShow.fb");
                a.off("onThumbsHide.fb");
                this.thumbsInitialized = !1;
                a.off("lightbox:init");
                a.off("lightbox:activate");
                a.off("lightbox:before-show");
                a.off("lightbox:after-show");
                a.off("lightbox:before-close");
                a.off("lightbox:after-close");
                this._initContainer(a)
            }
        },
        initSidebar: function(a) {
            var b = this.getInstance();
            b && (b = b.$refs.container, this.$sidebar ? a && this.$sidebar.addClass("is-loading") : (this.$sidebar = a = e("<div />").html('<div class="fancybox-sidebar-content"></div><div class="fancybox-sidebar-loader"><i class="fa--xf fa' +
                XF.config.fontAwesomeWeight + ' fa-spinner-third fa-4x"></i></div>').addClass("fancybox-sidebar").addClass(a ? "is-loading" : ""), this.$sidebar.appendTo(b), b.find(".fancybox-button[data-fancybox-sidebartoggle]").off("click.lbSidebar").on("click.lbSidebar", XF.proxy(this, "toggleSidebar")), e(l).on("resize.lbSidebar", XF.proxy(this, "sidebarCheckSize"))), b.addClass("fancybox-has-sidebar"), this.isSidebarEnabled() && (this.$sidebar.addClass("is-active"), b.addClass("fancybox-show-sidebar")), this.sidebarCheckSize())
        },
        isSidebarEnabled: function() {
            return !XF.LocalStorage.get("lbSidebarDisabled") && XF.Breakpoint.isAtOrWiderThan("full")
        },
        setIsSidebarEnabled: function(a) {
            a ? XF.LocalStorage.remove("lbSidebarDisabled") : XF.LocalStorage.set("lbSidebarDisabled", "1", !0)
        },
        toggleSidebar: function() {
            this.$sidebar.hasClass("is-active") ? this.closeSidebar(!1) : this.openSidebar(!1)
        },
        openSidebar: function(a) {
            var b = this.getInstance(),
                c = b.$refs.container;
            this.$sidebar.addClass("is-active");
            c.addClass("fancybox-show-sidebar");
            a || this.setIsSidebarEnabled(!0);
            b.update()
        },
        closeSidebar: function(a) {
            if (this.$sidebar) {
                var b = this.getInstance(),
                    c = b.$refs.container;
                this.$sidebar.removeClass("is-active");
                c.removeClass("fancybox-show-sidebar");
                a || this.setIsSidebarEnabled(!1);
                b.update()
            }
        },
        sidebarCheckSize: function() {
            var a = this.getInstance().$refs.container;
            XF.Breakpoint.isAtOrNarrowerThan("medium") ? (a.removeClass("fancybox-has-sidebar"), this.closeSidebar(!0)) : a.addClass("fancybox-has-sidebar")
        },
        initThumbs: function() {
            var a = this.getInstance(),
                b = this;
            if (a && !this.thumbsInitialized) {
                if (this.options.lbThumbsAuto) {
                    var c = this.measureThumbsScrollbar();
                    this.setThumbsScrollbarOffset(c)
                }
                a.$refs.container.off("onThumbsShow.fb").on("onThumbsShow.fb", function() {
                    c = b.measureThumbsScrollbar();
                    b.setThumbsScrollbarOffset(c)
                });
                a.$refs.container.off("onThumbsHide.fb").on("onThumbsHide.fb", function() {
                    b.setThumbsScrollbarOffset(0)
                });
                this.thumbsInitialized = !0
            }
        },
        measureThumbsScrollbar: function() {
            var a = this.getInstance();
            return a && a.Thumbs && a.Thumbs.isActive ? XF.measureScrollBar(a.Thumbs.$grid, "height") : 0
        },
        setThumbsScrollbarOffset: function(a) {
            var b = this.getInstance();
            b && b.Thumbs && b.Thumbs.isActive && b.$refs.caption.css("padding-bottom", a + "px")
        },
        updateLastIndex: function() {
            var a = this.getInstance();
            a && (a = Object.keys(a.group), this.lastIndex = parseInt(a[a.length - 1]))
        },
        onInit: function(a, b, c) {
            this.updateLastIndex();
            this.prevUrl = this.options.lbPrev;
            this.nextUrl = this.options.lbNext;
            this.thumbsInitialized = !1
        },
        onActivate: function() {
            XF.Modal.open();
            XF.Lightbox.activeLb = this
        },
        afterLoad: function(a, b, c, d) {
            "ajax" === d.type && (a = d.$content, b = a.find(".js-embedContent"), c = {}, b.length && (c[b.data("media-site-id")] = !0, XF.applyJsState(XF.config.jsState, c), d.$slide.removeClass("fancybox-slide--video").addClass("fancybox-slide--embed")), XF.activate(a))
        },
        beforeShow: function(a, b, c, d) {
            XF.hideOverlays();
            XF.hideTooltips();
            if (a = d.opts.$orig) c = c.$refs.container, a.data("lb-sidebar") || a.data("lb-sidebar-href") ? this.initSidebar(!0) : (c.removeClass("fancybox-has-sidebar"), this.closeSidebar(!0)), a.data("lb-type-override") && (d.contentType = a.data("lb-type-override"));
            this.initThumbs()
        },
        afterShow: function(a, b, c, d) {
            a = d.opts.$orig;
            b = c.$refs.container;
            var g = this;
            var h = a ? a.attr("href") || d.src : d.src;
            c.$refs.toolbar.find("[data-fancybox-nw]").attr("href", h).attr("target", "_blank");
            this.options.lbHistory && !this.isJumping && (XF.History.push({
                slide_src: d.src
            }, null, h), this.pushStateCount++);
            this.isJumping = !1;
            (a.data("lb-sidebar") || a.data("lb-sidebar-href")) && b.hasClass("fancybox-has-sidebar") && (c = a ? a.data("lb-sidebar-href") || h : h, XF.ajax("get", c, {
                lightbox: !0
            }, function(f) {
                g.sidebarLoaded(f)
            }, {
                skipDefault: !0,
                skipError: !0,
                global: !1
            }));
            d.index === this.lastIndex && this.nextUrl ? XF.ajax("get", this.nextUrl, {
                lightbox: !0
            }, function(f) {
                g.nextLoaded(f)
            }, {
                skipDefault: !0,
                skipError: !0,
                global: !1
            }) : 0 === d.index && this.prevUrl && XF.ajax("get", this.prevUrl, {
                lightbox: !0
            }, function(f) {
                g.prevLoaded(f)
            }, {
                skipDefault: !0,
                skipError: !0,
                global: !1
            })
        },
        sidebarLoaded: function(a) {
            if (a.html && this.$sidebar) {
                var b = this;
                XF.setupHtmlInsert(a.html, function(c, d, g) {
                    b.$sidebar && (b.$sidebar.find(".fancybox-sidebar-content").html(c), b.$sidebar.removeClass("is-loading"))
                })
            }
        },
        prevLoaded: function(a) {
            if (a.html) {
                var b = this,
                    c = this.getInstance();
                c && XF.setupHtmlInsert(a.html, function(d, g, h) {
                    d = d.find(b.options.lbContainer);
                    d.find(b.options.lbTrigger).reverse().each(function() {
                        var f = e(this);
                        b.updateCaption(f);
                        c.prependContent(f);
                        c.reindexSlides();
                        f = c.currIndex;
                        var m = c.prevIndex;
                        f++;
                        m++;
                        c.currIndex = f;
                        c.currPos = f;
                        c.current.index = f;
                        c.current.pos = f;
                        c.prevIndex = m;
                        c.prevPos = m
                    });
                    c.update();
                    c.Thumbs.update();
                    b.updateLastIndex();
                    b.prevUrl = d.data("lb-prev");
                    h(!0)
                })
            } else this.prevUrl = null
        },
        nextLoaded: function(a) {
            if (a.html) {
                var b = this,
                    c = this.getInstance();
                c && XF.setupHtmlInsert(a.html, function(d, g, h) {
                    d = d.find(b.options.lbContainer);
                    d.find(b.options.lbTrigger).each(function() {
                        var f = e(this);
                        b.updateCaption(f);
                        c.addContent(f)
                    });
                    b.updateLastIndex();
                    b.nextUrl = d.data("lb-next");
                    h(!0)
                })
            } else this.nextUrl = null
        },
        beforeClose: function(a, b, c, d) {
            this.options.lbHistory && this.pushStateCount && (XF.History.go(-this.pushStateCount), this.pushStateCount = 0);
            this.$sidebar && (this.$sidebar.remove(), this.$sidebar = null, e(l).off("resize.lbSidebar"))
        },
        afterClose: function() {
            XF.Modal.close();
            XF.Lightbox.activeLb = null
        },
        getContainerId: function(a) {
            return "lb-" + a.data("lb-id")
        },
        imageChecked: function(a, b, c, d) {
            a = !0;
            d && this.isImageNaturalSize(d) && (a = !1);
            a && (b.attr("data-fancybox", this.getContainerId(c)), b.css("cursor", "pointer"), this.updateCaption(b))
        },
        checkImageSizes: function(a, b) {
            var c = e.Event("lightbox:image-checked");
            if (this.isSingleImage(a)) {
                var d = a.find("img[data-zoom-target=1]");
                d.parents("a").length || setTimeout(function() {
                    if (d.prop("complete")) a.trigger(c, [a, b, d]);
                    else d.on("load", function() {
                        a.trigger(c, [a, b, d])
                    })
                }, 500)
            } else a.trigger(c, [a, b])
        },
        isImageNaturalSize: function(a) {
            var b = a.width(),
                c = a.height(),
                d = a.prop("naturalWidth");
            a = a.prop("naturalHeight");
            return d && a ? b == d && c == a : !0
        },
        isSingleImage: function(a) {
            return a.is("div") && a.data("single-image")
        },
        updateCaption: function(a) {
            if (!a.data("caption")) {
                var b = a.closest(this.options.lbContainer),
                    c = a.find("img"),
                    d = b.data("lb-id");
                b = {
                    title: b.data("lb-caption-title") || c.attr("alt") || c.attr("title") || "",
                    desc: a.data("lb-caption-desc") || b.data("lb-caption-desc") || "",
                    href: a.data("lb-caption-href") || (d ? l.location.href.replace(/#.*$/, "") + "#" + d : null),
                    extra_html: a.data("lb-caption-extra-html") || ""
                };
                a.attr("data-caption", Mustache.render('<h4>{{title}}</h4><p><a href="{{href}}" class="js-lightboxCloser">{{desc}}</a>{{{extra_html}}}</p>', b))
            }
        },
        getConfig: function(a) {
            return {
                hash: !1,
                lang: "xf",
                i18n: {
                    xf: this.getLanguage()
                },
                loop: !(this.options.lbPrev || this.options.lbNext),
                wheel: !1,
                closeExisting: !0,
                smallBtn: !1,
                buttons: "zoom newWindow fullScreen slideShow download thumbs close sidebarToggle".split(" "),
                btnTpl: {
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><i></i><i></i></button>',
                    newWindow: '<a data-fancybox-nw class="fancybox-button fancybox-button--nw" title="{{NEW_WINDOW}}" href="javascript:;"><i></i></a>',
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><i></i><i></i></button>',
                    slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><i></i><i></i></button>',
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><i></i></a>',
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><i></i></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><i></i></button>',
                    sidebarToggle: '<div class="fancybox-sidebartoggle"><button data-fancybox-sidebartoggle class="fancybox-button fancybox-button--sidebartoggle" title="{{SIDEBAR_TOGGLE}}"><i></i></button></div>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><i></i></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><i></i></button>'
                },
                slideShow: this.options.lbSlideShow ? {
                    autoStart: !1,
                    speed: 3E3
                } : !1,
                thumbs: {
                    autoStart: this.options.lbThumbsAuto ? !0 : !1,
                    axis: "x"
                },
                video: {
                    autoStart: !1
                },
                infobar: this.options.lbInfobar,
                onInit: function(b) {
                    var c = e.Event("lightbox:init");
                    a.trigger(c, [a, b])
                },
                beforeLoad: function(b, c) {
                    var d = e.Event("lightbox:before-load");
                    a.trigger(d, [a, b, c])
                },
                afterLoad: function(b, c) {
                    var d = e.Event("lightbox:after-load");
                    a.trigger(d, [a, b, c])
                },
                beforeShow: function(b, c) {
                    var d = e.Event("lightbox:before-show");
                    a.trigger(d, [a, b, c])
                },
                afterShow: function(b, c) {
                    var d = e.Event("lightbox:after-show");
                    a.trigger(d, [a, b, c])
                },
                beforeClose: function(b, c) {
                    var d = e.Event("lightbox:before-close");
                    a.trigger(d, [a, b, c])
                },
                afterClose: function(b, c) {
                    var d = e.Event("lightbox:after-close");
                    a.trigger(d, [a, b, c])
                },
                onActivate: function(b) {
                    var c = e.Event("lightbox:activate");
                    a.trigger(c, [a, b])
                },
                onDeactivate: function(b) {
                    var c = e.Event("lightbox:deactivate");
                    a.trigger(c, [a, b])
                }
            }
        },
        getLanguage: function() {
            return {
                CLOSE: XF.phrase("lightbox_close"),
                NEXT: XF.phrase("lightbox_next"),
                PREV: XF.phrase("lightbox_previous"),
                ERROR: XF.phrase("lightbox_error"),
                PLAY_START: XF.phrase("lightbox_start_slideshow"),
                PLAY_STOP: XF.phrase("lightbox_stop_slideshow"),
                FULL_SCREEN: XF.phrase("lightbox_full_screen"),
                THUMBS: XF.phrase("lightbox_thumbnails"),
                DOWNLOAD: XF.phrase("lightbox_download"),
                SHARE: XF.phrase("lightbox_share"),
                ZOOM: XF.phrase("lightbox_zoom"),
                NEW_WINDOW: XF.phrase("lightbox_new_window"),
                SIDEBAR_TOGGLE: XF.phrase("lightbox_toggle_sidebar")
            }
        }
    });
    XF.Lightbox.activeLb = null;
    e(k).on("xf:reinit", function(a, b) {
        if (b != k) {
            var c = e(b).closest("[data-xf-init~=lightbox]");
            c.length && (XF.Element.getHandler(c, "lightbox") || setTimeout(function() {
                XF.Element.initializeElement(c)
            }, 0))
        }
    });
    XF.History.handle(function(a) {
        var b = XF.Lightbox.activeLb;
        if (b) return b.handlePopstate(a), !0
    });
    XF.Element.register("lightbox", "XF.Lightbox")
}(jQuery, window, document);