var _i_ = this._i_ || function() {}
  , _r_ = this._r_ || function(e) {
    return e
}
;
function shuffle(e) {
    _i_("35b:bb22248c");
    for (var t = $("<div>"), n = e.size(), i = e.first().parent(); 1 <= n; ) {
        var r = Math.floor(Math.random() * n)
          , a = e.get(r);
        t.append(a),
        e = e.not(a),
        n--
    }
    i.html(t.html()),
    _r_()
}
booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.landing = {
    loaded: !0,
    run: !1
}),
function(c, e, t) {
    _i_("35b:0a04d949");
    var n = {
        paging: function(e) {
            _i_("35b:d3e3dcba");
            var s = c.extend({}, {
                $tabButton: ".rlp-main-section-tab__btn",
                $tabButtonActive: ".rlp-main-section-tab__btn--active",
                tabButtonActiveClass: "rlp-main-section-tab__btn--active",
                $tabSectionContainer: ".rlp-main-section-hotels--tab",
                tabSectionContainerActiveClass: "rlp-main-section-hotels--tab-active",
                callback: null
            }, e)
              , o = c(this)
              , i = 13
              , r = 32
              , _ = 37
              , l = 39
              , a = function(e) {
                _i_("35b:3ce2c986");
                var t = c(e)
                  , n = c(s.$tabButtonActive, o).index()
                  , i = t.index()
                  , r = c(s.$tabButton, o);
                n !== i && (r.not(t).removeClass(s.tabButtonActiveClass).attr({
                    tabindex: -1,
                    "aria-selected": !1
                }),
                t.addClass(s.tabButtonActiveClass).attr({
                    tabindex: 0,
                    "aria-selected": !0
                }),
                c(s.$tabSectionContainer, o).eq(n).removeClass(s.tabSectionContainerActiveClass),
                c(s.$tabSectionContainer, o).eq(i).addClass(s.tabSectionContainerActiveClass)),
                "function" == typeof s.callback && s.callback.call(t),
                _r_()
            };
            return function() {
                _i_("35b:a87f8d4d");
                var e = c(s.$tabButton, o);
                if (!e.length)
                    return _r_();
                e.attr("role", "tab").filter(s.$tabButtonActive).attr({
                    tabindex: 0,
                    "aria-selected": !0
                }).end().not(s.$tabButtonActive).attr({
                    tabindex: -1,
                    "aria-selected": !1
                });
                var t = e.parent();
                1 === t.length && t.attr("role", "tablist"),
                _r_()
            }(),
            _r_(this.each(function() {
                _i_("35b:69193a7b"),
                c(s.$tabButton, this).bind({
                    mousedown: function(e) {
                        _i_("35b:50362892"),
                        e.preventDefault(),
                        _r_()
                    },
                    click: function(e) {
                        _i_("35b:56340cc9"),
                        a(e.target),
                        _r_()
                    },
                    keydown: function(e) {
                        _i_("35b:1a5f1c44");
                        var t = e.keyCode
                          , n = e.target;
                        switch (t) {
                        case _:
                        case l:
                            !function(e, t) {
                                _i_("35b:f0e071b6");
                                var n = c(e)
                                  , i = c(s.$tabButton, o);
                                if (t === _) {
                                    var r = n.prev();
                                    r.length ? r.focus() : i.last().focus()
                                } else if (t === l) {
                                    var a = n.next();
                                    a.length ? a.focus() : i.first().focus()
                                }
                                _r_()
                            }(n, t),
                            e.preventDefault();
                            break;
                        case i:
                        case r:
                            a(n),
                            e.preventDefault()
                        }
                        _r_()
                    }
                }),
                _r_()
            }))
        },
        flipover: function(e) {
            _i_("35b:213bfd75");
            return c.extend({}, {
                callback: null
            }, e),
            _r_(this.each(function() {}))
        }
    };
    c.fn.swapTab = function(e, t) {
        if (_i_("35b:fd3344d4"),
        n[e])
            return _r_(n[e].apply(this, Array.prototype.slice.call(arguments, 1)));
        c.error("Tab Category " + e + " does not exist"),
        _r_()
    }
    ,
    _r_()
}(jQuery, window, document),
function(t, e, n) {
    _i_("35b:066cdf38"),
    t.fn.textLabel = function(e) {
        return _i_("35b:deba8222"),
        _r_(this.each(function() {
            _i_("35b:04f5dbcb"),
            t(this).bind({
                mouseover: function() {
                    _i_("35b:04904cf3"),
                    t(this).addClass("active").find("*").addClass("active"),
                    _r_()
                },
                mouseleave: function() {
                    _i_("35b:14dcd3ac"),
                    t(this).removeClass("active").find("*").removeClass("active"),
                    _r_()
                }
            }),
            _r_()
        }))
    }
    ,
    _r_()
}(jQuery, window, document),
function(i) {
    function r(e) {
        _i_("35b:3305f118"),
        e.each(function(e) {
            _i_("35b:b3111710");
            var t = i(i(this).parent()[0]).siblings()[0];
            t.clientHeight < t.scrollHeight && i(this).show(),
            _r_()
        }),
        e.off("click keypress"),
        e.on("click keypress", function(e) {
            _i_("35b:5b2150c0");
            var t = i(this).parent()[0]
              , n = i(t).siblings()[0];
            i(n).toggleClass("hotel-card__text--wrapped"),
            _r_()
        }),
        _r_()
    }
    _i_("35b:a76906c5"),
    r(i(".js-hotel-card__read_more_button")),
    B.define("component/landingpage/text_wrapping_solution", function(e, t, n) {
        _i_("35b:b2646c6f"),
        n.exports = {
            setUp: function(e) {
                _i_("35b:d1113aed"),
                r(e.find(".js-hotel-card__read_more_button")),
                _r_()
            }
        },
        _r_()
    }),
    _r_()
}(B.require("jquery")),
function(i) {
    function r(e) {
        _i_("35b:3ebc025a"),
        e.each(function(e) {
            _i_("35b:c75d7592");
            var t = i(i(this).parent()[0]).siblings()[0];
            i(t).hide(),
            _r_()
        }),
        e.off("click keypress"),
        e.on("click keypress", function(e) {
            _i_("35b:036a3595");
            var t = i(this).parent()[0]
              , n = i(t).siblings()[0];
            i(n).toggleClass("hotel-card__text--wrapped"),
            i(n).toggle(),
            i(i(this).children()[0]).hasClass("hotel-card__read_block") ? (i(i(this).children()[0]).removeClass("hotel-card__read_block"),
            i(i(this).children()[0]).addClass("hotel-card__read_hide"),
            i(i(this).children()[1]).removeClass("hotel-card__read_hide"),
            i(i(this).children()[1]).addClass("hotel-card__read_block")) : (i(i(this).children()[1]).removeClass("hotel-card__read_block"),
            i(i(this).children()[1]).addClass("hotel-card__read_hide"),
            i(i(this).children()[0]).removeClass("hotel-card__read_hide"),
            i(i(this).children()[0]).addClass("hotel-card__read_block")),
            _r_()
        }),
        _r_()
    }
    _i_("35b:34c83b06"),
    r(i(".hotel-card__read_more_button-new")),
    B.define("component/landingpage/review_wrapping", function(e, t, n) {
        _i_("35b:fdb41c57"),
        n.exports = {
            setUp: function(e) {
                _i_("35b:4dfca7db"),
                r(e.find(".hotel-card__read_more_button-new")),
                _r_()
            }
        },
        _r_()
    }),
    _r_()
}(B.require("jquery")),
function(e) {
    _i_("35b:1c4391f1"),
    B.define("component/in-and-around-swap-tab", function(e, t, n) {
        _i_("35b:848b2370");
        var i = e("component");
        n.exports = i.extend({
            init: function() {
                var e;
                _i_("35b:dee6c465"),
                e = this.$el,
                _i_("35b:9afc259d"),
                e.swapTab("paging", {
                    $tabButton: ".ia_tab_btn",
                    $tabButtonActive: ".ia_tab_btn.active",
                    tabButtonActiveClass: "active",
                    $tabSectionContainer: ".ia_section",
                    tabSectionContainerActiveClass: "active"
                }),
                _r_(),
                _r_()
            }
        }),
        _r_()
    }),
    e(".country-carousel__toggle").click(function() {
        _i_("35b:6dbc62c9"),
        e(".country-carousel__module").toggleClass("slide"),
        _r_()
    }),
    e(".lp_static_map").click(function() {}),
    _r_()
}(B.require("jquery")),
B.define("component/surveygizmo_survey", function(e, t, n) {
    _i_("35b:f17ba267");
    var i, r = e("component"), a = e("jquery"), s = e("jstmpl"), o = [], _ = {};
    try {
        _ = JSON.parse(window.localStorage.getItem("survey_history")) || {}
    } catch (e) {
        _ = {}
    }
    function l(e) {
        _i_("35b:e1d5a86c");
        try {
            _[e] = 1,
            window.localStorage.setItem("survey_history", JSON.stringify(_))
        } catch (e) {}
        _r_()
    }
    function c() {
        _i_("35b:075f90b4"),
        i && clearTimeout(i),
        i = setTimeout(function() {
            if (_i_("35b:329ffc49"),
            0 < o.length) {
                var e = Math.floor(1e3 * Math.random()) % o.length;
                o[e].runSurvey()
            }
            _r_()
        }, 500),
        _r_()
    }
    n.exports = r.extend({
        init: function() {
            if (_i_("35b:768888fb"),
            this.title = this.$el.data("survey-title"),
            this.description = this.$el.data("survey-description"),
            this.survey_url = this.$el.data("survey-url"),
            this.invite_position = this.$el.data("survey-invite-position"),
            this.survey_url_base = this.survey_url.split("?")[0],
            _[this.survey_url_base] || o.push(this),
            B.env.b_check_ot_consent)
                if (a.cookie("OptanonAlertBoxClosed"))
                    c();
                else {
                    var e = ["#onetrust-accept-btn-handler", "#accept-recommended-btn-handler", ".save-preference-btn-handler"].join(", ");
                    a(document).one("click", e, function() {
                        _i_("35b:03694206"),
                        setTimeout(function() {
                            _i_("35b:6805cf16"),
                            a.cookie("OptanonAlertBoxClosed") && c(),
                            _r_()
                        }, 700),
                        _r_()
                    })
                }
            else
                B.env.fe_may_set_marketing_cookies ? c() : B.env.fe_cookie_warning ? B.eventEmitter && "function" == typeof B.eventEmitter.on && B.eventEmitter.on("ACCEPT_COOKIE_POLICY", function() {
                    _i_("35b:b27d0b96"),
                    c(),
                    _r_()
                }) : B.eventEmitter && "function" == typeof B.eventEmitter.on && B.eventEmitter.on("COOKIE_CONSENT_PROVIDED", function() {
                    _i_("35b:dcec8cc3"),
                    c(),
                    _r_()
                });
            _r_()
        },
        runSurvey: function() {
            _i_("35b:d7bd5ae5");
            var e = this
              , t = this.$el;
            B.et.stage("OAZOXPKSXPbNSNHRUeIBHAVO", 1);
            var n = a(s("surveygizmo_survey_invite").render({
                title: e.title,
                description: e.description,
                survey_url: e.survey_url,
                invite_position: e.invite_position
            }));
            t.append(n),
            n.on("click", ".js-surveygizmo-survey-cancel", function() {
                return _i_("35b:6e2294a1"),
                n.addClass("surveygizmo-survey-invite--hidden"),
                B.et.customGoal("OAZOXPKSXPbNSNHRUeIBHAVO", 2),
                l(e.survey_url_base),
                setTimeout(function() {
                    _i_("35b:fa934b29"),
                    n.remove(),
                    _r_()
                }, 200),
                _r_(!1)
            }),
            n.on("click", ".js-surveygizmo-survey-ok", function() {
                return _i_("35b:4995caf9"),
                n.remove(),
                l(e.survey_url_base),
                B.et.customGoal("OAZOXPKSXPbNSNHRUeIBHAVO", 1),
                window.open(t.data("survey-url"), "_blank"),
                _r_(!1)
            }),
            setTimeout(function() {
                _i_("35b:c3625f0c"),
                n.removeClass("surveygizmo-survey-invite--hidden"),
                _r_()
            }, 10),
            _r_()
        }
    }),
    _r_()
}),
booking.jstmpl("surveygizmo_survey_invite", function() {
    _i_("35b:13314a1d");
    var i = ['\n    <div class="surveygizmo-survey-invite surveygizmo-survey-invite--hidden surveygizmo-survey-invite--position-', '">\n        \n        <div class="survey-container">\n            <div class="survey-image">\n                <img src="https://t-cf.bstatic.com/design-assets/assets/v3.79.0/illustrations-traveller/TravellerQuestion@2x.png" />\n            </div>\n            <div class="survey-content">\n                <div class="surveygizmo-survey-invite__title">', '</div>\n                <div class="surveygizmo-survey-invite__description">', '</div>\n                <div class="surveygizmo-survey-invite__buttons-wrapper">\n                    <a class="surveygizmo-survey-invite__button surveygizmo-survey-invite__button--primary js-surveygizmo-survey-ok">\n                        ', "/private/mlx_holidays_survey_popup_take/name", '\n                    </a>\n                    <a class="surveygizmo-survey-invite__button js-surveygizmo-survey-cancel">\n                        ', "/private/mlx_holidays_survey_popup_dismiss/name", "\n                    </a>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n"]
      , r = ["invite_position", "title", "description"];
    return _r_(function(e) {
        _i_("35b:03135e4f");
        var t = ""
          , n = this.fn;
        return t += [i[0], n.MC(r[0]), i[1], n.MC(r[1]), i[2], n.MC(r[2]), i[3], n.ME(i[4], n.MB, n.MN, null), i[5], n.ME(i[6], n.MB, n.MN, null), i[7]].join(""),
        _r_(t)
    })
}()),
B.define("referral/raf-goal", function(e, t, n) {
    _i_("35b:97b3ad3a");
    var i = e("et");
    n.exports = {
        shareGoal: function(e) {
            _i_("35b:53c28dcd"),
            i.goal(e),
            i.goal("gm_share"),
            _r_()
        }
    },
    _r_()
}),
B.define("referral/rap-goal", function(e, t, n) {
    _i_("35b:2e0f5abd");
    var i = e("et");
    n.exports = {
        shareGoal: function(e) {
            _i_("35b:2cd92b4e"),
            i.goal("grap_share"),
            _r_()
        }
    },
    _r_()
}),
function(p) {
    _i_("35b:a6bb0ba0");
    function h(e) {
        _i_("35b:92f30a71"),
        p.reportError(new Error(e), "raf:copy-input"),
        _r_()
    }
    p.define("component/referral/copy-input", function(e, t, n) {
        _i_("35b:09bb1fb1");
        var i = e("component")
          , c = e("referral/clipboard")
          , r = e("tooltip")
          , a = e("referral/raf-goal")
          , d = e("referral/rap-goal")
          , u = e("ga-tracker");
        n.exports = i.extend({
            init: function() {
                _i_("35b:2f039e91");
                var n = this
                  , e = this.$el.find(".js-raf-copy-btn")
                  , s = this.$el.find(".js-raf-copy-input")
                  , t = this.$el.is("[data-is-partner-program]")
                  , o = s.val();
                if (!s.get(0))
                    return h("Share link node is missing"),
                    _r_();
                if (!e.get(0))
                    return h("Share btn node is missing"),
                    _r_();
                if (!o)
                    return h("RAF share links is missing"),
                    _r_();
                function _() {
                    _i_("35b:35202ca9");
                    var e = n.$el.data("tooltip-id")
                      , t = r.get(e);
                    if (!t)
                        return h('Tooltip with id "' + e + '" is missing'),
                        _r_();
                    t.show(),
                    setTimeout(function() {
                        _i_("35b:ce2c5886"),
                        t.hide(),
                        _r_()
                    }, 1e3),
                    _r_()
                }
                function l() {
                    _i_("35b:43c5560b"),
                    t ? (u.trackEvent(u.referralPartnerAdvocateTracker, "share - source: " + p.env.b_action, "click copy"),
                    d.shareGoal("share_copy")) : a.shareGoal("gm_share_copy"),
                    _r_()
                }
                e.add(s).on("click", function(e) {
                    if (_i_("35b:4a7ebd46"),
                    e.preventDefault(),
                    navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                        var t = s.get(0)
                          , n = t.contentEditable
                          , i = t.readOnly;
                        t.contentEditable = !0,
                        t.readOnly = !1;
                        var r = document.createRange();
                        r.selectNodeContents(t);
                        var a = window.getSelection();
                        a.removeAllRanges(),
                        a.addRange(r),
                        t.setSelectionRange(0, 999999),
                        t.contentEditable = n,
                        t.readOnly = i,
                        document.execCommand("copy"),
                        s.blur(),
                        _(),
                        l()
                    } else
                        c.copy(o, function(e) {
                            if (_i_("35b:3fc4dc86"),
                            s.select(),
                            e)
                                return _r_();
                            _(),
                            l(),
                            _r_()
                        }
                        .bind(this));
                    _r_()
                }),
                _r_()
            }
        }),
        _r_()
    }),
    _r_()
}(window.B),
B.define("referral/clipboard", function(e, t, n) {
    _i_("35b:6dad79bc");
    var i = function() {};
    i.prototype.copy = function(e, t) {
        _i_("35b:b9e312de"),
        this.text = e,
        this.isRTL = B.env.b_lang_rtl,
        "function" == typeof t && (this.copyCallback = t),
        this.selectFake(),
        _r_()
    }
    ,
    i.prototype.selectFake = function() {
        _i_("35b:563ce6c9"),
        this.removeFake();
        var e = document.createElement("textarea");
        (this.fakeElement = e).style.fontSize = "12pt",
        e.style.border = "0",
        e.style.padding = "0",
        e.style.margin = "0",
        e.style.position = "absolute",
        e.style[this.isRTL ? "right" : "left"] = "-9999px";
        var t = window.pageYOffset || document.documentElement.scrollTop;
        e.style.top = t + "px",
        e.setAttribute("readonly", ""),
        e.value = this.text,
        document.body.appendChild(e),
        function(e) {
            var t;
            if (_i_("35b:eed13d9d"),
            "SELECT" === e.nodeName)
                e.focus(),
                t = e.value;
            else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var n = e.hasAttribute("readonly");
                n || e.setAttribute("readonly", ""),
                e.select(),
                e.setSelectionRange(0, e.value.length),
                n || e.removeAttribute("readonly"),
                t = e.value
            } else {
                e.hasAttribute("contenteditable") && e.focus();
                var i = window.getSelection()
                  , r = document.createRange();
                r.selectNodeContents(e),
                i.removeAllRanges(),
                i.addRange(r),
                t = i.toString()
            }
            _r_(t)
        }(e),
        this.copyText(),
        _r_()
    }
    ,
    i.prototype.removeFake = function() {
        _i_("35b:dcba3dac"),
        this.fakeElement && (document.body.removeChild(this.fakeElement),
        this.fakeElement = null),
        _r_()
    }
    ,
    i.prototype.copyText = function() {
        var t;
        _i_("35b:881b30ae");
        try {
            t = document.execCommand("copy")
        } catch (e) {
            t = !1
        }
        this.handleResult(t),
        _r_()
    }
    ,
    i.prototype.handleResult = function(e) {
        _i_("35b:14c14746"),
        this.copyCallback && (e ? this.copyCallback(null) : this.copyCallback(!0)),
        this.removeFake(),
        _r_()
    }
    ,
    n.exports = new i,
    _r_()
}),
B.define("component/referral/share-buttons", function(e, t, n) {
    _i_("35b:691bb842");
    var i = e("ga-tracker")
      , r = e("referral/raf-goal")
      , a = e("referral/rap-goal");
    n.exports = e("component").extend({
        init: function() {
            _i_("35b:5cc084e3");
            var t = this
              , n = this.$el.is(".js-raf-share-buttons-partner");
            this.$emailShare = this.$el.find(".js-raf-share-email"),
            this.$emailShare.on("click", function(e) {
                _i_("35b:b3d23747"),
                n ? (i.trackEvent(i.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click email button"),
                a.shareGoal("share_email")) : (r.shareGoal("gm_share_email"),
                i.trackEvent(i.referralAdvocateTracker, "share - source: " + B.env.b_action, "click email button")),
                _r_()
            }),
            this.$twShare = this.$el.find(".js-raf-share-twitter"),
            this.$twShare.on("click", function(e) {
                _i_("35b:63d3fdbb"),
                e.preventDefault(),
                n ? (i.trackEvent(i.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click twitter button"),
                a.shareGoal("share_twitter")) : (r.shareGoal("gm_share_twitter"),
                i.trackEvent(i.referralAdvocateTracker, "share - source: " + B.env.b_action, "click twitter button")),
                t.showPopupWindow($(this).attr("href"), "Share", 480, 320),
                _r_()
            }),
            this.$messengerShare = this.$el.find(".js-raf-share-messenger"),
            this.$messengerShare.on("click", function(e) {
                _i_("35b:89f1d120"),
                n ? (i.trackEvent(i.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click messenger button"),
                a.shareGoal("share_messenger")) : (r.shareGoal("gm_share_messenger"),
                i.trackEvent(i.referralAdvocateTracker, "share - source: " + B.env.b_action, "click messenger button")),
                "undefined" != typeof FB && void 0 !== FB.ui && $(e.delegateTarget).data("share-link") ? FB.ui({
                    method: "send",
                    link: $(e.delegateTarget).data("share-link")
                }) : window.open($(e.delegateTarget).data("url-link")),
                _r_()
            }),
            this.$gmailShare = this.$el.find(".js-raf-share-gmail"),
            this.$gmailShare.on("click", function(e) {
                _i_("35b:cad2ce2f"),
                e.preventDefault(),
                t.showPopupWindow($(this).attr("href"), "Share", 650, 550),
                n ? (i.trackEvent(i.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click gmail button"),
                a.shareGoal("share_gmail")) : (r.shareGoal("gm_share_gmail"),
                i.trackEvent(i.referralAdvocateTracker, "share - source: " + B.env.b_action, "click gmail button")),
                _r_()
            }),
            this.$whatsappShare = this.$el.find(".js-raf-share-whatsapp"),
            this.$whatsappShare.on("click", function(e) {
                _i_("35b:aa2b38f0"),
                n ? (i.trackEvent(i.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click whatsapp button"),
                a.shareGoal("share_whatsapp")) : (r.shareGoal("gm_share_whatsapp"),
                i.trackEvent(i.referralAdvocateTracker, "share - source: " + B.env.b_action, "click whatsapp button")),
                _r_()
            }),
            this.$linkedinShare = this.$el.find(".js-raf-share-linkedin"),
            this.$linkedinShare.on("click", function(e) {
                _i_("35b:a7a9a0c7"),
                n ? (i.trackEvent(i.referralPartnerAdvocateTracker, "share - source: " + B.env.b_action, "click linkedin button"),
                a.shareGoal("share_linkedin")) : (r.shareGoal("gm_share_linkedin"),
                i.trackEvent(i.referralAdvocateTracker, "share - source: " + B.env.b_action, "click linkedin button")),
                _r_()
            }),
            _r_()
        },
        showPopupWindow: function(e, t, n, i) {
            _i_("35b:9957ea84");
            var r = window.screen.width / 2 - n / 2
              , a = window.screen.height / 2 - i / 2;
            return _r_(window.open(e, t, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + n + ", height=" + i + ", top=" + a + ", left=" + r))
        }
    }),
    _r_()
}),
B.define("lp/ga-tracker-base", function(e, t, n) {
    _i_("35b:27e3597c");
    var r = e("ga-tracker")
      , a = e("server-data")
      , s = function() {
        _i_("35b:06f24c81");
        var e = r.landingPagesTracker
          , t = (n = a.b_action,
        _i_("35b:fe5d35e3"),
        _r_((n = n || "").replace(/^[a-z]/, function(e) {
            return _i_("35b:82edf285"),
            _r_(e.toUpperCase())
        }).replace(/([_][a-z])/g, function(e) {
            return _i_("35b:6ce83264"),
            _r_(e.toUpperCase().replace("_", " "))
        })));
        var n;
        t && (e += ": " + t);
        return _r_(e)
    }();
    n.exports = {
        trackEvent: function(e, t, n, i) {
            if (_i_("35b:cb5373c5"),
            !a.fe_is_landing_pages_ga_tracking_enabled)
                return _r_();
            if (!e)
                return _r_();
            r.trackEvent(s, e, t, n, i),
            _r_()
        }
    },
    _r_()
}),
B.define("lp/ga-tracker", function(e, t, n) {
    _i_("35b:8771c70c");
    var r = e("jquery")
      , a = e("lp/ga-tracker-base")
      , i = e("when/events-view")
      , s = !1;
    n.exports = {
        init: function() {
            if (_i_("35b:cc372f89"),
            s)
                return _r_();
            s = !0,
            r(document).on("click", "[data-lp-ga-click]", this._clickEventHandler.bind(this)),
            this.addViewEventListeners(),
            _r_()
        },
        addViewEventListeners: function() {
            _i_("35b:551ccee6"),
            r("[data-lp-ga-view]").each(function(e, t) {
                _i_("35b:1c7d369d");
                var n = r(t);
                if (n.data("lpGaViewEventRegistered"))
                    return _r_();
                n.data("lpGaViewEventRegistered", !0),
                i(t, function() {
                    _i_("35b:8b85d270"),
                    this._triggerElementEvent("view", t),
                    _r_()
                }
                .bind(this)),
                _r_()
            }
            .bind(this)),
            _r_()
        },
        _clickEventHandler: function(e) {
            _i_("35b:9cbbb22c");
            var t = e.currentTarget;
            this._triggerElementEvent("click", t),
            _r_()
        },
        _triggerElementEvent: function(e, t) {
            _i_("35b:169a6374");
            var n, i = r(t);
            if (0 === t.length)
                return _r_();
            if ("view" === e)
                n = i.attr("data-lp-ga-view");
            else {
                if ("click" !== e)
                    return _r_();
                n = i.attr("data-lp-ga-click")
            }
            "string" == typeof (n = n.split(":").map(function(e) {
                return _i_("35b:ddb6427a"),
                _r_(e.trim())
            }))[3] && n[3].match(/^[0-9]+$/) && (n[3] = Number(n[3])),
            a.trackEvent.apply(null, n),
            _r_()
        }
    },
    _r_()
}),
function(e) {
    _i_("35b:d215060d");
    var t = e("jquery")
      , n = e("lp/ga-tracker");
    t(function() {
        _i_("35b:5084647d"),
        n.init(),
        _r_()
    }),
    _r_()
}(B.require),
B.define("dismiss-item", function(e, t, n) {
    _i_("35b:4fa1a5b8");
    var i = e("jquery");
    n.exports = function(e) {
        if (_i_("35b:ffcf03b7"),
        !e)
            throw new Error("param itemId is required");
        return _r_(i.ajax({
            url: "/dismiss_item",
            type: "POST",
            data: {
                item_id: e
            }
        }))
    }
    ,
    _r_()
}),
B.define("component/dismissible-item/block", function(e, t, n) {
    _i_("35b:1d6e38f0");
    var i = e("component")
      , r = e("dismiss-item")
      , a = e("read-data-options");
    n.exports = i.extend({
        init: function() {
            _i_("35b:60262eac"),
            this.options = a(this.$el, {
                itemId: {
                    name: "item-id",
                    type: String,
                    required: !0
                }
            }),
            this._bindEvents(),
            _r_()
        },
        _bindEvents: function() {
            _i_("35b:bc2d0b27"),
            this.$el.on("click", ".js-close", function() {
                _i_("35b:5fb0e455"),
                this._dismissItem(),
                this.hide(),
                _r_()
            }
            .bind(this)),
            _r_()
        },
        _dismissItem: function() {
            return _i_("35b:40f33ccd"),
            _r_(r(this.options.itemId))
        },
        hide: function() {
            _i_("35b:9a2d9335"),
            this.$el.hide(),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/dismissible-item/on-init", function(e, t, n) {
    _i_("35b:8d48d686");
    var i = e("component")
      , r = e("dismiss-item")
      , a = e("read-data-options");
    n.exports = i.extend({
        init: function() {
            return _i_("35b:16676dbf"),
            this.options = a(this.$el, {
                itemId: {
                    name: "item-id",
                    type: String,
                    required: !0
                }
            }),
            _r_(r(this.options.itemId))
        }
    }),
    _r_()
}),
B.define("seo/search-results-snippet/calendar-prompt/utils", function(e, t, n) {
    _i_("35b:e7df9e57");
    var i = e("server-data")
      , r = e("event-emitter")
      , a = {
        monday: "Mon",
        tuesday: "Tue",
        wednesday: "Wed",
        thursday: "Thu",
        friday: "Fri",
        saturday: "Sat",
        sunday: "Sun"
    }
      , s = {
        january: "January",
        february: "February",
        march: "March",
        april: "April",
        may: "May",
        june: "June",
        july: "July",
        august: "August",
        september: "September",
        october: "October",
        november: "November",
        december: "December"
    }
      , o = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
      , _ = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
      , l = function(e, t) {
        if (_i_("35b:82e546e9"),
        e && t && e.length === t.length) {
            for (var n = {}, i = 0, r = e.length; i < r; i++)
                n[e[i]] = t[i];
            return _r_(n)
        }
        return _r_(void 0)
    }
      , c = function(e) {
        return _i_("35b:6fc59267"),
        _r_(("0" + e).slice(-2))
    }
      , d = function(e) {
        return _i_("35b:4e59969f"),
        _r_(e.getFullYear() + "-" + c(e.getMonth() + 1) + "-" + c(e.getDate()))
    }
      , u = function() {
        _i_("35b:de21604e");
        var e = new Date
          , t = new Date;
        return i.b_search_max_months ? (t.setMonth(t.getMonth() + i.b_search_max_months),
        t.setDate(0)) : t = new Date(t.getFullYear() + 1,t.getMonth() + 1,0),
        _r_({
            minDate: e,
            minDateISO: d(e),
            maxDate: t,
            maxDateISO: d(t)
        })
    }
      , p = {};
    r.extend(p),
    n.exports = {
        eventBus: p,
        areDatesValid: function(e, t) {
            _i_("35b:08753710");
            var n = e.startDate
              , i = e.endDate;
            if (t && null === n && null === i)
                return _r_(!0);
            if (!(n instanceof Date && i instanceof Date))
                return _r_(!1);
            var r = Date.parse(d(n))
              , a = Date.parse(d(i))
              , s = u();
            if (s.minDateISO && r < Date.parse(s.minDateISO))
                return _r_(!1);
            if (s.maxDateISO && Date.parse(s.maxDateISO) < a)
                return _r_(!1);
            return _r_(r < a)
        },
        dateToISO: d,
        doubleDigitify: c,
        getMinMaxDates: u,
        getMonthAndWeekDayNames: function() {
            _i_("35b:17f16249");
            var e = {
                weekDayNames: a,
                weekDayLongNames: a,
                monthNames: s
            };
            return i.b_simple_weekdays && l(o, i.b_simple_weekdays) && (e.weekDayNames = l(o, i.b_simple_weekdays)),
            i.b_long_weekdays && l(o, i.b_long_weekdays) && (e.weekDayLongNames = l(o, i.b_long_weekdays)),
            i.b_short_months && l(_, i.b_short_months) && (e.monthNames = l(_, i.b_short_months)),
            _r_(e)
        },
        mapKeysToValues: l,
        monthAndWeekDayKeys: {
            monthKeys: _,
            weekDayKeys: o
        }
    },
    _r_()
}),
booking.jstmpl("seo_search_results_snippet_calendar_prompt", function() {
    _i_("35b:5be79e9c");
    var s, o = ["\n    ", "\n\n\n\n\n\n\n", "\n\n", '\n\n<div\n    id="calendar-prompt', '"\n    class="calendar-prompt"\n    tabindex="-1"\n    aria-hidden="true"\n    aria-labelledby="', '"\n>\n    <div class="calendar-prompt__overlay js-overlay">\n        <div class="calendar-prompt__overlay-wrapper">\n            <div class="calendar-prompt__overlay-align">\n                <div class="calendar-prompt__overlay-content">\n                    <div class="calendar-prompt__content js-content" role="dialog" tabindex="-1" aria-modal="true">\n                         <header class="calendar-prompt__header">\n                            <h3 class="calendar-prompt__title js-title" id="', '">\n                                ', "/private/mjo_lp_snippet_calendar_popup_header_name/name", "\n", "/private/mjo_lp_snippet_calendar_popup_header/name", '\n                            </h3>\n                        </header>\n                        <div class="calendar-prompt__body">\n                            <div class="bui-calendar bui-spacer--medium" aria-hidden="true">\n                                <div class="bui-calendar__main">\n                                    <button class="bui-calendar__control bui-calendar__control--prev" aria-hidden="true" tabindex="-1" data-bui-ref="calendar-prev">\n                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="presentation">\n                                            <path d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path>\n                                        </svg>\n                                    </button>\n                                    <button class="bui-calendar__control bui-calendar__control--next" aria-hidden="true" tabindex="-1" data-bui-ref="calendar-next">\n                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="presentation">\n                                            <path d="M9.45 6a.74.74 0 0 1 .53.22l5 5a1.08 1.08 0 0 1 .32.78 1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path>\n                                        </svg>\n                                    </button>\n                                    <div class="bui-calendar__content" data-bui-ref="calendar-content"></div>\n                                </div>\n                            </div>\n\n                            <hr class="bui-divider bui-divider--light bui-spacer--large" />\n\n                            <div class="bui-grid">\n                                <div class="bui-grid__column-4">\n                                    ', "/private/sbox_adults/name", "\n                                    ", '\n    \n    \n    \n    \n    \n    \n    \n    \n\n    <div class="bui-stepper ', '" data-bui-component="InputStepper">\n        <div class="bui-stepper__title-wrapper">\n            <label class="bui-stepper__title calendar-prompt__stepper-title" for="', '">\n                ', '\n            </label>\n        </div>\n        <div class="bui-stepper__wrapper">\n            <input\n                type="range"\n                class="bui-stepper__input ', '"\n                data-bui-ref="input-stepper-field"\n                id="', '"\n                min="', '"\n                max="', '"\n                value="', '"\n            />\n            <button class="bui-button bui-button--secondary bui-stepper__subtract-button" data-bui-ref="input-stepper-subtract-button" type="button" aria-hidden="true">\n                <span class="bui-button__text">-</span>\n            </button>\n            <span class="bui-stepper__display" data-bui-ref="input-stepper-value" aria-hidden="true"></span>\n            <button class="bui-button bui-button--secondary bui-stepper__add-button" data-bui-ref="input-stepper-add-button" type="button" aria-hidden="true">\n                <span class="bui-button__text">+</span>\n            </button>\n        </div>\n    </div>\n', "js-group-stepper-adults", "js-group-stepper-input", '\n                                </div>\n                                <div class="bui-grid__column-4">\n                                    ', "/private/sbox_children/name", "js-group-stepper-children", "/private/sbox_rooms/name", "js-group-stepper-rooms", '\n                                </div>\n                            </div>\n                        </div>\n                        <footer class="calendar-prompt__footer">\n                            <div class="bui-group bui-group--inline bui-u-text-right">\n                                <button class="bui-button bui-button--primary js-main-cta" type="button" disabled="disabled">\n                                  <span class="bui-button__text">', "/private/mjo_city_lp_date_modal_check_avail_cta/name", "</span>\n                                </button>\n                            </div>\n                        </footer>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"], _ = ["fe_id_suffix", "fe_calendar_prompt_title_id", "fe_property_name", "fe_adults_label", "fe_class", "fe_input_id", "fe_label", "fe_input_class", "fe_input_options", "fe_adults_input_options", "fe_children_label", "fe_children_input_options", "fe_rooms_label", "fe_rooms_input_options"];
    return _r_(function(e) {
        _i_("35b:29e731c0");
        var t, n, i = "", r = this.fn;
        function a(e) {
            return _i_("35b:db6e499b"),
            e += [o[13], r.F.entities(r.MC(_[4])), o[14], r.MC(_[5]), o[15], r.F.html(r.MC(_[6])), o[16], r.MC(_[7]), o[17], r.MC(_[5]), o[18], (r.MC(_[8]) || {}).min, o[19], (r.MC(_[8]) || {}).max, o[20], (r.MC(_[8]) || {}).value, o[21]].join(""),
            _r_(e)
        }
        return i += o[0],
        t = i,
        _i_("35b:ec401861"),
        t += o[1],
        r.MN("fe_calendar_prompt_title_id", "calendar-prompt-title" + r.MB(_[0])),
        t += [o[2], "", o[3], r.F.entities(r.MC(_[0])), o[4], r.F.entities(r.MC(_[1])), o[5], r.F.entities(r.MC(_[1])), o[6]].join(""),
        e.unshift({
            fe_property_name: r.MB(_[2])
        }),
        n = t,
        _i_("35b:8d4736a6"),
        n += o[2],
        r.MD(_[2]) ? n += [o[0], (e.unshift({
            property_name: r.MB(_[2])
        }),
        s = r.ME(o[7], r.MB, r.MN, null),
        e.shift(),
        s), o[8]].join("") : n += [o[0], r.ME(o[9], r.MB, r.MN, null), o[8]].join(""),
        n += o[8],
        t = _r_(n),
        e.shift(),
        t += o[10],
        r.MN(_[3], r.ME(o[11], r.MB, r.MN, null)),
        t += o[12],
        e.unshift({
            fe_class: o[22],
            fe_input_class: o[23],
            fe_input_id: "calendar-prompt-adults" + r.MB(_[0]),
            fe_input_options: r.MB(_[9]),
            fe_label: r.MB(_[3])
        }),
        t = a(t),
        e.shift(),
        t += o[24],
        r.MN(_[10], r.ME(o[25], r.MB, r.MN, null)),
        t += o[12],
        e.unshift({
            fe_class: o[26],
            fe_input_class: o[23],
            fe_input_id: "calendar-prompt-children" + r.MB(_[0]),
            fe_input_options: r.MB(_[11]),
            fe_label: r.MB(_[10])
        }),
        t = a(t),
        e.shift(),
        t += o[24],
        r.MN(_[12], r.ME(o[27], r.MB, r.MN, null)),
        t += o[12],
        e.unshift({
            fe_class: o[28],
            fe_input_class: o[23],
            fe_input_id: "calendar-prompt-rooms" + r.MB(_[0]),
            fe_input_options: r.MB(_[13]),
            fe_label: r.MB(_[12])
        }),
        t = a(t),
        e.shift(),
        t += [o[29], r.ME(o[30], r.MB, r.MN, null), o[31], "", o[2]].join(""),
        t += o[2],
        i = _r_(t),
        i += o[8],
        _r_(i)
    })
}()),
booking.jstmpl("seo_search_results_snippet_calendar_prompt_title", function() {
    _i_("35b:838dc0c0");
    var r, a = ["\n    ", "\n\n", "/private/mjo_lp_snippet_calendar_popup_header_name/name", "\n", "/private/mjo_lp_snippet_calendar_popup_header/name"], s = ["fe_property_name"];
    return _r_(function(e) {
        _i_("35b:4b564325");
        var t, n = "", i = this.fn;
        return n += a[0],
        e.unshift({
            fe_property_name: i.MB(s[0])
        }),
        t = n,
        _i_("35b:880ff2db"),
        t += a[1],
        i.MD(s[0]) ? t += [a[0], (e.unshift({
            property_name: i.MB(s[0])
        }),
        r = i.ME(a[2], i.MB, i.MN, null),
        e.shift(),
        r), a[3]].join("") : t += [a[0], i.ME(a[4], i.MB, i.MN, null), a[3]].join(""),
        t += a[3],
        n = _r_(t),
        e.shift(),
        n += a[3],
        _r_(n)
    })
}()),
B.define("seo/search-results-snippet/calendar-prompt", function(e, t, n) {
    _i_("35b:390dd520");
    var i = e("jstmpl")
      , r = e("server-data")
      , a = e("trap-focus")
      , s = e("seo/search-results-snippet/calendar-prompt/utils")
      , o = e("jquery")
      , _ = o("body")
      , l = window.BUI
      , c = {
        CALENDAR_SHOW: "calendar-show",
        CALENDAR_HIDE: "calendar-hide",
        STATE_CHANGED: "state-changed",
        OVERLAY_CLICK: "overlay-click",
        CTA_CLICK: "cta-click"
    }
      , d = "calendar-prompt--active"
      , u = ".js-title"
      , p = ".js-content"
      , h = ".bui-calendar"
      , b = ".js-group-stepper-input"
      , f = ".js-group-stepper-adults"
      , v = ".js-group-stepper-children"
      , m = ".js-group-stepper-rooms"
      , g = ".js-main-cta"
      , y = function() {
        _i_("35b:d60c248b"),
        r.b_dev_server && console.warn.apply(null, arguments),
        _r_()
    }
      , k = {
        calendarDates: {
            startDate: null,
            endDate: null
        },
        groupAdultsInput: {
            min: 1,
            max: 30,
            value: 2
        },
        groupChildrenInput: {
            min: 0,
            max: 10,
            value: 0
        },
        groupRoomsInput: {
            min: 1,
            max: 30,
            value: 1
        },
        resetValuesOnCalendarClose: !1
    };
    function C(e) {
        _i_("35b:6d0ce03c"),
        this._settings = o.extend(!0, {}, k, e),
        this.resetValuesOnCalendarClose = this._settings.resetValuesOnCalendarClose,
        this.events = o.extend({}, c),
        this.isCalendarMounted = !1,
        this.isOpen = !1,
        this.ownerId = null,
        this.propertyName = "";
        var t = i("seo_search_results_snippet_calendar_prompt").render({
            fe_adults_input_options: this._settings.groupAdultsInput,
            fe_children_input_options: this._settings.groupChildrenInput,
            fe_rooms_input_options: this._settings.groupRoomsInput
        });
        this.$el = o(t),
        this.el = this.$el.get(0),
        this.$el.appendTo("body"),
        this.$content = this.$el.find(p),
        this.$calendar = this.$content.find(h),
        this.$mainCtaBtn = this.$content.find(g),
        this.$title = this.$content.find(u),
        this._initCalendar(),
        l.initComponents(this.el),
        this._getGroupStepperInstances(),
        this._updateDOMStyles(),
        this._bindEvents(),
        _r_()
    }
    C.prototype.open = function(e) {
        _i_("35b:4f27f2bf"),
        e.ownerId && (this.ownerId = e.ownerId),
        e.propertyName && (this.propertyName = e.propertyName),
        this._setTitleContent(),
        this._showCalendar(),
        _r_()
    }
    ,
    C.prototype.close = function() {
        _i_("35b:d1834086"),
        this._hideCalendar(),
        this.ownerId = null,
        this.propertyName = "",
        this._setTitleContent(),
        _r_()
    }
    ,
    C.prototype.getState = function() {
        _i_("35b:dbdd2695");
        var e = this._getGroupValues()
          , t = this._getCalendarDates();
        return _r_({
            dates: t,
            group: e
        })
    }
    ,
    C.prototype._setCalendarDates = function(e) {
        _i_("35b:6500025c");
        var t = o.extend({}, this._getCalendarDates(), e);
        if (!s.areDatesValid(t, !0))
            return y("Calendar Prompt: you tried to set invalid dates! They have been ignored"),
            _r_();
        this._calendarInstance.setState(e),
        this._updateDOMStyles(),
        _r_()
    }
    ,
    C.prototype._getCalendarDates = function() {
        _i_("35b:aa770141");
        var e = this._calendarInstance.state;
        return _r_({
            startDate: e.startDate,
            endDate: e.endDate
        })
    }
    ,
    C.prototype._getGroupValues = function() {
        _i_("35b:c4d4ff90");
        var e = this._groupStepperAdultsInstance.getValue()
          , t = this._groupStepperChildrenInstance.getValue()
          , n = this._groupStepperRoomsInstance.getValue();
        return _r_({
            adultsCount: e,
            childrenCount: t,
            roomsCount: n
        })
    }
    ,
    C.prototype._setGroupValues = function(e) {
        _i_("35b:bf8cb346"),
        this._groupStepperAdultsInstance.setValue(e.adultsCount),
        this._groupStepperChildrenInstance.setValue(e.childrenCount),
        this._groupStepperRoomsInstance.setValue(e.roomsCount),
        _r_()
    }
    ,
    C.prototype.resetValues = function() {
        _i_("35b:63f2b96c"),
        this._setCalendarDates(this._settings.calendarDates),
        this._setGroupValues({
            adultsCount: this._settings.groupAdultsInput.value,
            childrenCount: this._settings.groupChildrenInput.value,
            roomsCount: this._settings.groupRoomsInput.value
        }),
        _r_()
    }
    ,
    C.prototype._bindEvents = function() {
        _i_("35b:b8b16eef"),
        this.$el.on("click", this._clickEventHandler.bind(this)),
        _.on("keyup", function(e) {
            _i_("35b:b6376bda"),
            this.isOpen && 27 === e.keyCode && this.close(),
            _r_()
        }
        .bind(this)),
        this.$el.on("change", b, function() {
            _i_("35b:e0d621fc");
            var e = {
                state: this.getState()
            };
            this._emitEvent(this.events.STATE_CHANGED, e),
            _r_()
        }
        .bind(this)),
        _r_()
    }
    ,
    C.prototype._clickEventHandler = function(e) {
        _i_("35b:61bb9af7");
        var t = o(e.target);
        if (0 < t.closest(this.$mainCtaBtn).length) {
            var n = {
                state: this.getState()
            };
            return this._emitEvent(this.events.CTA_CLICK, n),
            this.close(),
            _r_()
        }
        if (0 === t.closest(this.$content).length)
            return this._emitEvent(this.events.OVERLAY_CLICK),
            this.close(),
            _r_();
        _r_()
    }
    ,
    C.prototype._getGroupStepperInstances = function() {
        _i_("35b:995fc4da");
        var e = this.$content.find(f).get(0)
          , t = this.$content.find(v).get(0)
          , n = this.$content.find(m).get(0);
        this._groupStepperAdultsInstance = l.getInstance(e),
        this._groupStepperChildrenInstance = l.getInstance(t),
        this._groupStepperRoomsInstance = l.getInstance(n),
        _r_()
    }
    ,
    C.prototype._initCalendar = function() {
        _i_("35b:0a076f73");
        var e = {
            monthsToShow: 2,
            allowSameDateSelection: 0,
            onDateChange: function(e) {
                _i_("35b:c313dc0a");
                var t = {
                    state: {
                        group: this._getGroupValues(),
                        dates: e
                    }
                };
                this._emitEvent(this.events.STATE_CHANGED, t),
                this._updateDOMStyles(),
                _r_()
            }
            .bind(this)
        }
          , t = s.getMonthAndWeekDayNames();
        e.dayNames = t.weekDayNames,
        e.monthNames = t.monthNames,
        r.sunday_first && (e.firstWeekDay = 7);
        var n = s.getMinMaxDates()
          , i = this._settings.calendarDates;
        e.minDate = n.minDateISO,
        e.maxDate = n.maxDateISO,
        e.startDate = i.startDate ? s.dateToISO(i.startDate) : null,
        e.endDate = i.endDate ? s.dateToISO(i.endDate) : null,
        this._calendarInstance = l.createInstance("Calendar", this.$calendar.get(0), e),
        _r_()
    }
    ,
    C.prototype._emitEvent = function(e, t) {
        _i_("35b:847e1fab"),
        s.eventBus.emit(e, o.extend({}, t, {
            ownerId: this.ownerId
        })),
        _r_()
    }
    ,
    C.prototype._showCalendar = function() {
        if (_i_("35b:8344b35d"),
        this.isOpen)
            return _r_();
        this.isOpen = !0,
        this._mountCalendar(),
        this.$el.addClass(d),
        this._emitEvent(this.events.CALENDAR_SHOW),
        a.trap(this.el),
        this.$el.attr("aria-hidden", "false"),
        _.css("overflow", "hidden"),
        _r_()
    }
    ,
    C.prototype._hideCalendar = function() {
        _i_("35b:ec76906a"),
        this.isOpen = !1,
        this.$el.removeClass(d),
        this._emitEvent(this.events.CALENDAR_HIDE),
        a.release(),
        this.$el.attr("aria-hidden", "true"),
        _.css("overflow", ""),
        this.resetValuesOnCalendarClose && this.resetValues(),
        _r_()
    }
    ,
    C.prototype._mountCalendar = function() {
        _i_("35b:76146d58"),
        this.isCalendarMounted || (this._calendarInstance.mount(),
        this.isCalendarMounted = !0),
        _r_()
    }
    ,
    C.prototype._updateDOMStyles = function() {
        _i_("35b:629e6ec7");
        var e = s.areDatesValid(this._getCalendarDates(), !1);
        this.$mainCtaBtn.prop("disabled", !e),
        _r_()
    }
    ,
    C.prototype._setTitleContent = function() {
        _i_("35b:cd0de889");
        var e = i("seo_search_results_snippet_calendar_prompt_title").render({
            fe_property_name: this.propertyName
        });
        this.$title.html(e),
        _r_()
    }
    ,
    n.exports = C,
    _r_()
}),
B.define("component/seo/search-results-snippet/hotel-card-list", function(e, t, n) {
    _i_("35b:5d85471f");
    var i = e("component")
      , r = e("search/searchbox/model")
      , _ = e("search/modules/search-date").SearchDate
      , a = e("seo/search-results-snippet/calendar-prompt")
      , s = e("seo/search-results-snippet/calendar-prompt/utils")
      , o = e("server-data");
    n.exports = i.extend({
        init: function() {
            _i_("35b:880ce98d"),
            this.url = null,
            this.shouldOpenUrlInNewTab = !1,
            this.$searchBoxForm = this.$el.find(".js-searchbox-wrapper form"),
            this.model = r.getInstance("seo_hotel_card_list"),
            this.model.use("dates"),
            this.model.use("group"),
            this._initCalendarPrompt();
            var e = this.calendarPromptInstance.events
              , t = s.eventBus;
            t.on(e.CALENDAR_HIDE, this._onCalendarHide.bind(this)),
            t.on(e.CTA_CLICK, this._onCtaClick.bind(this)),
            this.$el.on("click", ".js-calendar-prompt-link", this._onCalendarPromptLinkClick.bind(this)),
            _r_()
        },
        _initCalendarPrompt: function() {
            var e, t, n, i;
            _i_("35b:314035c6"),
            o.b_has_valid_dates_not_in_past && o.b_checkin_date && o.b_checkout_date && (e = {
                startDate: new Date(o.b_checkin_date),
                endDate: new Date(o.b_checkout_date)
            }),
            o.b_search_config && (t = {
                value: o.b_search_config.b_adults_total
            },
            n = {
                value: o.b_search_config.b_children_total
            },
            i = {
                value: o.b_search_config.b_nr_rooms_needed
            }),
            this.calendarPromptInstance = new a({
                resetValuesOnCalendarClose: !0,
                calendarDates: e,
                groupAdultsInput: t,
                groupChildrenInput: n,
                groupRoomsInput: i
            }),
            _r_()
        },
        _onCalendarPromptLinkClick: function(e) {
            _i_("35b:0563f5e4");
            var t = $(e.currentTarget)
              , n = t.attr("href")
              , i = t.closest(".js-sr-card").data("propertyName") || "";
            n && (e.preventDefault(),
            this.url = n,
            "_blank" === t.attr("target") && (this.shouldOpenUrlInNewTab = !0),
            this.calendarPromptInstance.open({
                propertyName: i
            })),
            _r_()
        },
        _onCalendarHide: function() {
            _i_("35b:0bfa29ef"),
            this.url = null,
            this.shouldOpenUrlInNewTab = !1,
            _r_()
        },
        _onCtaClick: function(e) {
            _i_("35b:4d4d2b93"),
            this._setSearchModel(e.state),
            this.$searchBoxForm.attr("action", this.url),
            this.$searchBoxForm.submit(),
            _r_()
        },
        _setSearchModel: function(e) {
            _i_("35b:efbaefaa");
            var t = e.dates
              , n = e.group
              , i = t && t.startDate
              , r = t && t.endDate
              , a = n && n.roomsCount
              , s = n && n.adultsCount
              , o = n && n.childrenCount;
            i && (i = _.create({
                year: i.getFullYear(),
                month: i.getMonth(),
                day: i.getDate()
            }),
            this.model.dates.setDate("checkin", i)),
            r && (r = _.create({
                year: r.getFullYear(),
                month: r.getMonth(),
                day: r.getDate()
            }),
            this.model.dates.setDate("checkout", r)),
            "number" == typeof a && this.model.group.set({
                key: "rooms_count",
                value: a
            }),
            "number" == typeof s && this.model.group.set({
                key: "adults_count",
                value: s
            }),
            "number" == typeof o && this.model.group.set({
                key: "children_count",
                value: o
            }),
            _r_()
        },
        _openUrl: function(e) {
            if (_i_("35b:95bf08f7"),
            this.shouldOpenUrlInNewTab)
                return window.open(e),
                _r_();
            location.href = e,
            _r_()
        }
    }),
    _r_()
}),
B.define("component/seo/search-results-snippet/hotel-card", function(e, t, n) {
    _i_("35b:8975cd22");
    var i = e("component");
    n.exports = i.extend({
        init: function() {}
    }),
    _r_()
}),
B.define("component/seo/search-results-snippet/add-dates-alert", function(e, t, n) {
    _i_("35b:7430c9d2");
    var i = e("component")
      , r = e("jquery");
    n.exports = i.extend({
        init: function() {
            _i_("35b:f0c6088a"),
            this.$scrollTopEls = r("html, body"),
            this.$sbCalendarEl = r('.xp-calendar[data-sb-id="main"]'),
            1 < this.$sbCalendarEl.length && (this.$sbCalendarEl = r(this.$sbCalendarEl.get(0))),
            this.$el.on("click", ".js-link", this.handleLinkClick.bind(this)),
            _r_()
        },
        handleLinkClick: function() {
            _i_("35b:152a50b7"),
            this.scrollToPageTop(this.openSearchboxCalendar.bind(this)),
            _r_()
        },
        scrollToPageTop: function(e) {
            _i_("35b:3e78cbbd"),
            e = e || function() {}
            ,
            this.$scrollTopEls.animate({
                scrollTop: 200
            }, {
                duration: 200,
                complete: e
            }),
            _r_()
        },
        openSearchboxCalendar: function() {
            _i_("35b:82c399de");
            var e = this.$sbCalendarEl.component("search/dates/single-calendar");
            e && e.showStartCalendar(),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/seo/lp_trending_properties", function(e, t, n) {
    _i_("35b:cdc7f63c");
    var i = e("component")
      , r = e("component/landingpage/text_wrapping_solution");
    n.exports = i.extend({
        init: function() {
            _i_("35b:af46e22f");
            var t = this;
            this.contentElements = t.$el.find(".lp-trending_properties");
            var e = document.querySelector("#c-lp-trending_properties");
            window.BUI.createInstance("SegmentedControl", e, {
                onChange: function(e) {
                    _i_("35b:59b83b53"),
                    t.renderSegment(e.value),
                    _r_()
                }
            }).mount(),
            _r_()
        },
        renderSegment: function(e) {
            _i_("35b:742df5d5"),
            this.contentElements.hide();
            var t = this.contentElements.filter("#" + e);
            t.show(),
            this.remountCarousel(t.get(0)),
            r.setUp(t),
            _r_()
        },
        remountCarousel: function(e) {
            _i_("35b:6c836277"),
            window.BUI.createInstance("Carousel", e).mount(),
            _r_()
        }
    }),
    _r_()
}),
function() {
    _i_("35b:94958f45");
    var n, a, t = (n = booking,
    a = jQuery,
    _i_("35b:ae726666"),
    _r_({
        init: function t() {
            if (_i_("35b:6bd5c4be"),
            n.env.b_run_sr_ajax) {
                var e = n.require("searchresults/events");
                e.on(e.UI_BLOCK_UPDATED, function(e) {
                    _i_("35b:9101a212"),
                    "search_history" === e.id && t(),
                    _r_()
                })
            }
            a(".lp-sh-hide-search, .js-lp-sh-hide-search-bicon").click(function(e) {
                _i_("35b:8ad6cfba"),
                e.preventDefault(),
                e.stopPropagation();
                var t = a(this).closest("div")
                  , n = t.hasClass("lp-dest-search-history")
                  , i = t.data("sh_id");
                function r() {
                    _i_("35b:581c65b1"),
                    t.remove(),
                    a(".lp-search-history-list-item").length || a(".lp-sh-block").fadeOut(),
                    _r_()
                }
                n ? (t.css({
                    overflow: "hidden",
                    border: "none"
                }),
                t.animate({
                    opacity: 0,
                    height: "0px",
                    padding: 0,
                    margin: 0
                }, 100, r)) : t.fadeOut(300, r),
                a.ajax({
                    url: "/hide_search_hist",
                    dataType: "json",
                    type: "POST",
                    xhrFields: {
                        withCredentials: !0
                    },
                    timeout: 1e4,
                    data: {
                        id: String(i)
                    }
                }),
                _r_()
            }),
            _r_()
        }
    }));
    B.when({
        events: "ready"
    }).run(function(e) {
        _i_("35b:b9efa76e"),
        t.init(),
        _r_()
    }),
    _r_()
}(),
B.when({
    events: "ready",
    experiment: "BPHMAEEEWIcLeWWBTATC"
}).run(function(e) {
    _i_("35b:7ab517eb");
    var t = "BPHMAEEEWIcLeWWBTATC";
    1 === B.et.track(t) && (shuffle($("#booking-survey > div")),
    $("#booking-survey").append('<div class="bui-group__item"><button class="bui-button bui-button--secondary booking-survey__answer" type="button" data-response-num="7"><span class="bui-button__text">Other</span></button></div>')),
    $(".booking-survey__answer").click(function(e) {
        _i_("35b:f6ba582d"),
        B.et.stage(t, $(this).data("response-num")),
        "7" == $(this).data("response-num") ? $("#booking-survey__fq").toggleClass("bui-u-hidden") : $("#booking-survey__r").toggleClass("bui-u-hidden"),
        $("#booking-survey__q").toggleClass("bui-u-hidden"),
        $("#booking-survey").toggleClass("bui-u-hidden"),
        _r_()
    }),
    _r_()
}()),
B.when({
    events: "ready",
    experiment: "BPHMAEEEWIcLeWWBTATWAUDAFdPBPJLT"
}).run(function(e) {
    _i_("35b:8e97dac9");
    var t = "BPHMAEEEWIcLeWWBTATWAUDAFdPBPJLT";
    1 === B.et.track(t) && (shuffle($("#lp-survey--plan #booking-survey > div")),
    shuffle($("#lp-survey--followup #booking-survey > div")),
    $("#lp-survey--followup #booking-survey").append('<div class="bui-group__item"><button class="bui-button bui-button--secondary booking-survey__answer" type="button" data-response-num="7"><span class="bui-button__text">Other</span></button></div>')),
    $("#lp-survey--plan .booking-survey__answer").click(function(e) {
        _i_("35b:223aa8e7"),
        "1" == $(this).data("trigger-followup") ? (B.et.stage(t, 1),
        $("#lp-survey--followup").toggleClass("bui-u-hidden")) : $("#booking-survey__r").toggleClass("bui-u-hidden"),
        $("#lp-survey--plan").toggleClass("bui-u-hidden"),
        _r_()
    }),
    $("#lp-survey--followup .booking-survey__answer").click(function(e) {
        _i_("35b:00c0bab9"),
        B.et.stage(t, $(this).data("response-num") + 1),
        "7" == $(this).data("response-num") ? $("#booking-survey__fq").toggleClass("bui-u-hidden") : $("#booking-survey__r").toggleClass("bui-u-hidden"),
        $("#lp-survey--followup").toggleClass("bui-u-hidden"),
        _r_()
    }),
    _r_()
}()),
booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.landing.run = !0);
