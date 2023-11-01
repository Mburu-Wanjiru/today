var _i_ = this._i_ || function() {}
  , _r_ = this._r_ || function(e) {
    return e
}
;
booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.raf = {
    loaded: !0,
    run: !1
}),
B.define("component/referral/floater", function(e, n, i) {
    _i_("44d:439cb7dd");
    var r = e("component")
      , a = e("ga-tracker");
    i.exports = r.extend({
        init: function() {
            _i_("44d:bdf88b61");
            var e = this;
            this.$toggle = this.$el.find(".friend_landing_collapsible--header"),
            this.$toggleIcon = this.$el.find(".friend_landing_collapsible--toggle_icon"),
            this.$collapse = this.$el.find(".friend_landing_collapsible-action_button"),
            this.isMobile = this.$el.data("is-mobile"),
            this.toggleCollapseClass = this.$el.data("expanded-class"),
            this.toggleExpandClass = this.$el.data("collapsed-class"),
            this.isCollapsed = !!this.$el.data("is-collapsed"),
            this.isCollapsedClass = this.$el.data("landing-collapsed-class"),
            this.collapsingDisabled = this.$el.data("collapsing-disabled"),
            this.collapsingDisabled || (this.$toggle.on("click", function() {
                _i_("44d:db6abdaa"),
                e.isCollapsed ? e.expand() : e.collapse(),
                _r_()
            }),
            this.$collapse.on("click", function() {
                _i_("44d:ca906f67"),
                e.collapse(),
                _r_()
            })),
            a.trackEvent(a.referralFriendTracker, "view", "friend_landing"),
            this.$el.find(".friend_landing_collapsible-tandc").on("click", function() {
                _i_("44d:208b670a"),
                a.trackEvent(a.referralFriendTracker, "click", "terms_and_conditions - source: friend_landing"),
                _r_()
            }),
            _r_()
        },
        collapse: function() {
            _i_("44d:5a14237e"),
            this.$el.addClass(this.isCollapsedClass),
            this.$toggleIcon.removeClass(this.toggleCollapseClass),
            this.$toggleIcon.addClass(this.toggleExpandClass),
            this.isCollapsed = !0,
            a.trackEvent(a.referralFriendTracker, "collapse", "friend_landing"),
            _r_()
        },
        expand: function() {
            _i_("44d:9260a3a3"),
            this.$el.removeClass(this.isCollapsedClass),
            this.$toggleIcon.addClass(this.toggleCollapseClass),
            this.$toggleIcon.removeClass(this.toggleExpandClass),
            this.isCollapsed = !1,
            a.trackEvent(a.referralFriendTracker, "expand", "friend_landing"),
            _r_()
        }
    }),
    _r_()
}),
B.define("referral/clipboard", function(e, n, i) {
    _i_("44d:6dad79bc");
    var r = function() {};
    r.prototype.copy = function(e, n) {
        _i_("44d:b9e312de"),
        this.text = e,
        this.isRTL = B.env.b_lang_rtl,
        "function" == typeof n && (this.copyCallback = n),
        this.selectFake(),
        _r_()
    }
    ,
    r.prototype.selectFake = function() {
        _i_("44d:563ce6c9"),
        this.removeFake();
        var e = document.createElement("textarea");
        (this.fakeElement = e).style.fontSize = "12pt",
        e.style.border = "0",
        e.style.padding = "0",
        e.style.margin = "0",
        e.style.position = "absolute",
        e.style[this.isRTL ? "right" : "left"] = "-9999px";
        var n = window.pageYOffset || document.documentElement.scrollTop;
        e.style.top = n + "px",
        e.setAttribute("readonly", ""),
        e.value = this.text,
        document.body.appendChild(e),
        function(e) {
            var n;
            if (_i_("44d:eed13d9d"),
            "SELECT" === e.nodeName)
                e.focus(),
                n = e.value;
            else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                var i = e.hasAttribute("readonly");
                i || e.setAttribute("readonly", ""),
                e.select(),
                e.setSelectionRange(0, e.value.length),
                i || e.removeAttribute("readonly"),
                n = e.value
            } else {
                e.hasAttribute("contenteditable") && e.focus();
                var r = window.getSelection()
                  , a = document.createRange();
                a.selectNodeContents(e),
                r.removeAllRanges(),
                r.addRange(a),
                n = r.toString()
            }
            _r_(n)
        }(e),
        this.copyText(),
        _r_()
    }
    ,
    r.prototype.removeFake = function() {
        _i_("44d:dcba3dac"),
        this.fakeElement && (document.body.removeChild(this.fakeElement),
        this.fakeElement = null),
        _r_()
    }
    ,
    r.prototype.copyText = function() {
        var n;
        _i_("44d:881b30ae");
        try {
            n = document.execCommand("copy")
        } catch (e) {
            n = !1
        }
        this.handleResult(n),
        _r_()
    }
    ,
    r.prototype.handleResult = function(e) {
        _i_("44d:14c14746"),
        this.copyCallback && (e ? this.copyCallback(null) : this.copyCallback(!0)),
        this.removeFake(),
        _r_()
    }
    ,
    i.exports = new r,
    _r_()
}),
B.define("component/referral/share", function(e, n, i) {
    _i_("44d:8a1a989c");
    var _ = e("ga-tracker")
      , t = e("tooltip")
      , o = e("referral/clipboard")
      , r = e("referral/raf-goal")
      , a = e("referral/rap-goal");
    i.exports = e("component").extend({
        init: function() {
            _i_("44d:e4616695");
            var r = this
              , n = this.$el.data("share-link")
              , a = this.$el.data("tooltip-id") || "clipboard-tooltip";
            this.isPartnerProgram = this.$el.is("[data-is-partner-program]"),
            this.isShowCompliment = this.$el.is("[data-show-compliment]"),
            this.$emailShare = this.$el.find(".js-raf-share-email"),
            this.$emailShare.on("click", function() {
                _i_("44d:1c8d4064"),
                r.triggerGoal("share_email", this.isPartnerProgram ? "click email mobile button" : "click email button"),
                _r_()
            }),
            this.$gmailShare = this.$el.find(".js-raf-share-gmail"),
            this.$gmailShare.on("click", function() {
                _i_("44d:1b612da0"),
                r.triggerGoal("share_gmail", "click gmail button"),
                _r_()
            }),
            this.$fbShare = this.$el.find(".js-raf-share-facebook"),
            this.$fbShare.on("click", function(e) {
                _i_("44d:061c0e26"),
                e.preventDefault(),
                r.showPopupWindow($(this).attr("href"), "Share", 480, 320),
                r.triggerGoal("share_facebook", "click facebook button"),
                _r_()
            }),
            this.$twShare = this.$el.find(".js-raf-share-twitter"),
            this.$twShare.on("click", function(e) {
                _i_("44d:0b0d8550"),
                e.preventDefault(),
                r.triggerGoal("share_twitter", "click twitter button"),
                r.showPopupWindow($(this).attr("href"), "Share", 480, 320),
                _r_()
            }),
            this.$el.find(".raf-scoreboard--link").on("click", function(n) {
                _i_("44d:2f7ad4a8");
                var e = $(this).val();
                o.copy(e, function(e) {
                    if (_i_("44d:bce39a05"),
                    e)
                        return _r_(!1);
                    r.triggerGoal("share_copy"),
                    r.$urlShare.text(r.$urlShare.data("success-copy")),
                    n.target.select(),
                    _r_()
                }),
                _r_()
            }),
            this.$el.find(".raf-scoreboard--link").on("copy", function() {
                _i_("44d:4b58d24c"),
                _.trackEvent(_.referralAdvocateTracker, "copy link", "myreferrals"),
                _r_()
            }),
            this.$urlShare = this.$el.find(".js-raf-share-copy"),
            this.$urlShare.on("click", function(e) {
                _i_("44d:da57e023");
                var n = r.$urlShare.data("share-link")
                  , i = t.get(a);
                e.preventDefault(),
                o.copy(n, function(e) {
                    if (_i_("44d:038f8483"),
                    e)
                        return _r_(!1);
                    r.triggerGoal("share_copy"),
                    i ? (i.show(),
                    setTimeout(function() {
                        var e;
                        _i_("44d:d5add9e4"),
                        e = i,
                        _i_("44d:73af4510"),
                        e && e.hide && e.hide(),
                        _r_(),
                        _r_()
                    }, 1e3)) : r.$urlShare.text(r.$urlShare.data("success-copy")),
                    _r_()
                }),
                _.trackEvent(_.referralAdvocateTracker, "share - source: " + B.env.b_action, "click url button"),
                _r_()
            }),
            this.$whatsappShare = this.$el.find(".js-raf-share-whatsapp"),
            this.$whatsappShare.on("click", function() {
                _i_("44d:364e4520"),
                r.triggerGoal("share_whatsapp", "click whatsapp button"),
                _r_()
            }),
            this.$linkedinShare = this.$el.find(".js-raf-share-linkedin"),
            this.$linkedinShare.on("click", function() {
                _i_("44d:ba038609"),
                r.triggerGoal("share_linkedin", "click linkedin button"),
                _r_()
            }),
            this.$messengerShare = this.$el.find(".raf_scoreboard--social_share_link.-messenger, .js-raf-share-messenger"),
            this.$messengerShare.on("click", function(e) {
                _i_("44d:04de4611"),
                r.triggerGoal("share_messenger", "click messenger button"),
                "undefined" != typeof FB && void 0 !== FB.ui && (e.preventDefault(),
                n || (n = $(this).data("share-link")),
                FB.ui({
                    method: "send",
                    link: n
                })),
                _r_()
            }),
            _r_()
        },
        showPopupWindow: function(e, n, i, r) {
            _i_("44d:9957ea84");
            var a = window.screen.width / 2 - i / 2
              , _ = window.screen.height / 2 - r / 2;
            return _r_(window.open(e, n, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + r + ", top=" + _ + ", left=" + a))
        },
        triggerGoal: function(e, n) {
            _i_("44d:201f4c6e"),
            this.isPartnerProgram ? a.shareGoal(e) : r.shareGoal("gm_" + e),
            n && _.trackEvent(this.isPartnerProgram ? _.referralPartnerAdvocateTracker : _.referralAdvocateTracker, "share - source: " + B.env.b_action, n),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/referral/friend-landing-modal", function(e, n, i) {
    _i_("44d:db36d087");
    var r, a = e("component"), _ = e("lightbox"), t = e("ga-tracker"), o = e("jquery"), s = B.env, d = e("browser-storage-handler"), l = e("events"), c = e("jstmpl"), u = !1, p = e("component/referral/name-reward-copy-logic/dynamic-tag-copy-logic"), m = "raf_landing_modal_opened";
    "www" === s.b_site_type && "index" === s.b_action && (r = e("ultrafocus").getInstance("raf_landing", "[data-sb-outer],[data-raf-widget]")),
    booking.jstmpl("friend_landing_card", function() {
        _i_("44d:2c11e6b3");
        var _, t = ["\n        ", "\n    ", "\n\n\n", '\n    <div\n        class="warn-message ', '"\n        data-component="referral/warning-message"\n    >\n        <div class="warn-message__dismiss js-warning-message-dismiss">\n            ', "17", "iconset/close", "\n        </div>\n        ", '\n            <div class="warn-message__head">\n                <div class="warn-message__head-text">\n                        ', "20", "iconset/warning", "\n                    ", "\n                </div>\n            </div>\n        ", '\n        <div class="warn-message__body">\n            ', "\n        </div>\n    </div>\n", "\n", '\n<div class="raf-friend-landing-card">\n    <div class="raf-friend-landing-card__content">\n        <div class="raf-friend-landing-card__title">\n            ', "\n                ", "\n            ", "/private/raf_friend_lightbox_title/name", '\n        </div>\n\n        <div class="raf-friend-landing-card__subtitle">\n            ', "/private/raf_friend_lightbox_subtitle/name", "/private/raf_friend_lightbox_subtitle_noname/name", '\n        </div>\n\n        <hr class="raf-friend-landing-card__divisor">\n\n        ', "/private/raf_friend_lightbox_step_1_description/name", "/private/raf_friend_lightbox_step_2_description/name", "/private/raf_friend_lightbox_step_3_description/name", "\n\n        ", "\n            \n            ", '\n\n        <div class="raf-friend-landing-card__steps">\n            <div class="raf-friend-landing-card__step">\n                <div class="raf-friend-landing-card__step-number">\n                    1\n                </div>\n                <p>', '</p>\n                <img src="', '" class="raf-friend-landing-card__step-image image__gift-heart" alt="">\n            </div>\n            <div class="raf-friend-landing-card__step">\n                <div class="raf-friend-landing-card__step-number">\n                    2\n                </div>\n                <p>', '</p>\n                \n                <img src="', '" class="raf-friend-landing-card__step-image image__booking-property" alt="">\n            </div>\n            <div class="raf-friend-landing-card__step">\n                <div class="raf-friend-landing-card__step-number">\n                    3\n                </div>\n                <p>', '" class="raf-friend-landing-card__step-image image__wallet-gift" alt="">\n            </div>\n        </div>\n\n        ', '\n            <div class="raf-min-spend-message">\n                ', "\n            </div>\n        ", '\n        <div class="raf-friend-landing-card__action">\n            ', '\n                <a class="raf-friend-landing-card__button" href="', '">\n                    ', "/private/raf_flex_modal_button_signin_register/name", "\n                </a>\n            ", '\n                        <a class="raf-friend-landing-card__button" href="', '">', "/private/raf_deals_easter19_cta/name", "</a>\n                    ", '\n                        <a class="raf-friend-landing-card__button js-close-friend-landing-lightbox" href="#">\n                            ', "/private/raf_flex_post_signin_modal_button/name", "\n                        </a>\n                    ", '\n                    <a class="raf-friend-landing-card__button js-close-friend-landing-lightbox" href="', "#", '">\n                        ', "/private/raf_friend_lightbox_button_text/name", "\n                    </a>\n                ", "\n        </div>\n    </div>\n</div>\n"], o = ["fe_warning_message_extra_classes", "fe_warning_message_header", "fe_warning_message_body", "fe_self_referral", "fe_trans_raf_friend_lightbox_heading_signedin", "fe_is_raf_campaign", "b_user_auth_level_is_low_or_high", "fe_trans_raf_friend_lightbox_heading", "reward_value", "fe_trans_raf_friend_lightbox_subtitle_deals", "fe_show_deals", "fe_trans_raf_friend_lightbox_subtitle_signedin", "advocate_name", "fe_raf_friend_lightbox_step_1_description_translated", "fe_raf_friend_lightbox_step_2_description_translated", "fe_raf_friend_lightbox_step_3_description_translated", "fe_trans_raf_friendlanding_index_lightbox_step3_description", "fe_raf_desktop_friend_landing_banner_minimum_spend", "b_site_type", "fe_login_page_accounts_portal_url", "fe_deals_url", "b_url_for_raf_flow", "b_has_raf_link_saved_in_account"];
        return _r_(function(e) {
            _i_("44d:11c13f3c");
            var n, i, r = "", a = this.fn;
            return r += t[0],
            n = r,
            _i_("44d:725ec633"),
            a.MJ(a.MB(o[3])) && (n += t[1],
            e.unshift({
                fe_warning_message_body: a.MB(o[2]),
                fe_warning_message_header: a.MB(o[1])
            }),
            i = n,
            _i_("44d:dd764c99"),
            i += [t[2], "", t[3], a.F.entities(a.MC(o[0])), t[4], (e.unshift({
                height: t[5],
                name: t[6],
                width: t[5]
            }),
            _ = a.HELPER("icon", e[0]),
            e.shift(),
            _), t[7]].join(""),
            a.MD(o[1]) && (i += [t[8], (e.unshift({
                color: "#CD8900",
                height: t[9],
                name: t[10],
                width: t[9]
            }),
            _ = a.HELPER("icon", e[0]),
            e.shift(),
            _), t[11], a.MC(o[1]), t[12]].join("")),
            i += [t[13], a.MC(o[2]), t[14], "", t[15]].join(""),
            n = _r_(i),
            e.shift(),
            n += t[15]),
            n += t[16],
            a.MD(o[5]) ? (n += t[17],
            a.MJ(a.MB(o[5])) && a.MJ(a.MC(o[6])) ? n += [t[11], a.F.entities(a.MC(o[4])), t[17]].join("") : n += [t[11], a.F.entities(a.MC(o[7])), t[17]].join(""),
            n += t[18]) : n += [t[17], (e.unshift({
                value: a.MB(o[8])
            }),
            _ = a.ME(t[19], a.MB, a.MN, null),
            e.shift(),
            _), t[18]].join(""),
            n += t[20],
            a.MJ(a.MB(o[5])) && a.MJ(a.MC(o[6])) ? (n += t[17],
            a.MD(o[10]) ? n += [t[11], a.F.entities(a.MC(o[9])), t[17]].join("") : n += [t[11], a.F.entities(a.MC(o[11])), t[17]].join("")) : (n += t[17],
            a.MD(o[12]) ? n += [t[11], (e.unshift({
                friend_name: a.MB(o[12])
            }),
            _ = a.ME(t[21], a.MB, a.MN, null),
            e.shift(),
            _), t[17]].join("") : n += [t[11], a.ME(t[22], a.MB, a.MN, null), t[17]].join("")),
            n += t[18],
            n += t[23],
            a.MN(o[13], a.ME(t[24], a.MB, a.MN, null)),
            n += t[0],
            a.MN(o[14], a.ME(t[25], a.MB, a.MN, null)),
            n += t[0],
            a.MN(o[15], a.ME(t[26], a.MB, a.MN, null)),
            n += t[27],
            a.MD(o[5]) && (n += t[28],
            a.MN(o[13], a.ME(t[24], a.MB, a.MN, null)),
            n += t[18],
            a.MN(o[14], a.ME(t[25], a.MB, a.MN, null)),
            n += t[18],
            a.MN(o[15], a.F.entities(a.MC(o[16]))),
            n += t[0]),
            n += [t[29], a.MC(o[13]), t[30], a.STATIC_HOSTNAME("/static/img/referral/raf-gift-heart-decorated.svg", 0, 0, 0, 0), t[31], a.MC(o[14]), t[32], a.STATIC_HOSTNAME("/static/img/referral/raf-booking-property.svg", 0, 0, 0, 0), t[33], a.MC(o[15]), t[30], a.STATIC_HOSTNAME("/static/img/referral/raf-wallet-gift.svg", 0, 0, 0, 0), t[34]].join(""),
            a.MJ(a.MC(o[18]) + "" == "www") && (n += [t[35], a.MC(o[17]), t[36]].join("")),
            n += t[37],
            a.MJ(a.MB(o[5])) && a.MK(a.MC(o[6])) ? n += [t[38], a.F.entities(a.MC(o[19])), t[39], a.ME(t[40], a.MB, a.MN, null), t[41]].join("") : (n += t[17],
            a.MJ(a.MB(o[5])) && a.MJ(a.MC(o[6])) ? (n += t[11],
            a.MD(o[10]) ? n += [t[42], a.F.entities(a.MC(o[20])), t[43], a.ME(t[44], a.MB, a.MN, null), t[45]].join("") : n += [t[46], a.ME(t[47], a.MB, a.MN, null), t[48]].join(""),
            n += t[17]) : (n += t[49],
            a.MD(o[22]) ? n += a.F.entities(a.MC(o[21])) : n += t[50],
            n += [t[51], a.ME(t[52], a.MB, a.MN, null), t[53]].join("")),
            n += t[18]),
            n += t[54],
            r = _r_(n),
            r += t[1],
            _r_(r)
        })
    }());
    var f = function() {
        _i_("44d:b5e0eafd"),
        o(".raf-widget--hidden").removeClass("raf-widget--hidden"),
        _r_()
    };
    i.exports = a.extend({
        init: function() {
            _i_("44d:7f82f564"),
            l.on("raf-warning-hide", function() {
                _i_("44d:a146b57b"),
                _.rePosition(),
                _r_()
            }),
            this.doGaStuff(),
            this.bindExternalEvents();
            var e = this;
            window.setTimeout(function() {
                if (_i_("44d:7796f050"),
                e.shouldSkipLightbox())
                    return f(),
                    _r_();
                e.bindEvents(),
                e.renderLightbox(),
                _r_()
            }, 300),
            _r_()
        },
        bindExternalEvents: function() {
            _i_("44d:5c6748d9");
            var e = this;
            booking.eventEmitter.on("account-onboarding-modal-show", function() {
                _i_("44d:599b6801"),
                u = !0,
                _r_()
            }),
            l.on("onboarding-lightbox-dismissed", function() {
                _i_("44d:2afea17a"),
                u = !1,
                window.setTimeout(function() {
                    _i_("44d:77a78e55"),
                    _.isVisible() || e.init(),
                    _r_()
                }, 100),
                _r_()
            }),
            _r_()
        },
        bindEvents: function() {
            var e;
            (_i_("44d:9f829f3f"),
            o("body").on("click", ".js-close-friend-landing-lightbox", this.closeLightbox),
            void 0 !== r) && (r.on("ultrafocus::shown", function() {
                _i_("44d:c3af9a61"),
                o("#ss").focus(),
                e = window.setTimeout(function() {
                    _i_("44d:68f0f3a9"),
                    o("#raf-widget-text-container").addClass("expanded"),
                    _r_()
                }, 3e3),
                _r_()
            }),
            r.on("ultrafocus::hidden", function() {
                _i_("44d:941125aa"),
                window.clearTimeout(e),
                _r_()
            }));
            _r_()
        },
        renderLightbox: function() {
            _i_("44d:0914cd39");
            var e = B.jstmpl("friend_landing_card")
              , n = s.b_secure_domain + "/myreferrals" + s.b_query_params_with_lang
              , i = {
                reward_value: s.referral_data.reward_friend,
                reward_value_percentage: s.referral_data.reward_friend_percentage,
                advocate_name: s.referral_data.advocate_name,
                b_raf_li_in: s.b_raf_li_in,
                b_raf_prop_ne: s.b_raf_prop_ne,
                b_companyname: s.b_companyname,
                fe_faq_link: (s.b_secure_domain || s.b_secure_hostname) + "/content/referral-faq" + s.b_query_params_with_lang,
                fe_warning_message_header: c.translations("raf_self_landing_alert_index_headline"),
                fe_warning_message_body: "<p>" + c.translations("raf_self_landing_alert_index_subtext_1") + "</p><p><a target='_blank' href='" + n + "'>" + c.translations("raf_self_landing_alert_index_button_refer") + "</a></p>",
                fe_self_referral: !!s.referral_data.fe_self_referral,
                b_site_type: s.b_site_type,
                fe_raf_desktop_friend_landing_banner_minimum_spend: c.translations("raf_desktop_friend_landing_banner_minimum_spend", null, {
                    minimum_spend: s.referral_data.b_raf_min_qualifying_amount_campaign_currency
                }),
                b_user_auth_level_is_none: s.b_user_auth_level_is_none,
                b_myreferral_link: s.referral_data.myreferral_link,
                fe_raf_marketing_validation: s.referral_data.fe_passed_raf_marketing_validation,
                b_raf_user_has_valid_booking: s.referral_data.b_raf_user_has_valid_booking,
                fe_is_raf_campaign: s.referral_data.is_raf_campaign,
                fe_trans_raf_friend_lightbox_heading: s.referral_data.is_raf_campaign ? p.translate({
                    fe_raf_campaign_details_fragment_output: s.referral_data.fe_raf_campaign_details,
                    fe_raf_dynamic_copy_id: "raf_friendlanding_index_lightbox_headline",
                    fe_raf_dynamic_copy_variable_campaign: !0,
                    fe_raf_dynamic_copy_variable_reward: !0
                }) : "",
                fe_trans_raf_friend_lightbox_heading_signedin: s.referral_data.is_raf_campaign ? p.translate({
                    fe_raf_campaign_details_fragment_output: s.referral_data.fe_raf_campaign_details,
                    fe_raf_dynamic_copy_id: "raf_flex_post_signin_modal_headline",
                    fe_raf_dynamic_copy_variable_name: !0
                }) : "",
                fe_trans_raf_friend_lightbox_heading_instant_discount: s.referral_data.is_raf_campaign ? p.translate({
                    fe_raf_campaign_details_fragment_output: s.referral_data.fe_raf_campaign_details,
                    fe_raf_dynamic_copy_id: "raf_instant_discount_flex_modal_headline",
                    fe_raf_dynamic_copy_variable_campaign: !0
                }) : "",
                fe_trans_raf_friend_lightbox_subtitle_instant_discount: s.referral_data.is_raf_campaign ? p.translate({
                    fe_raf_campaign_details_fragment_output: s.referral_data.fe_raf_campaign_details,
                    fe_raf_dynamic_copy_variable_name: !0,
                    fe_raf_dynamic_copy_id: "raf_instant_discount_flex_modal_subtext"
                }) : "",
                fe_trans_raf_friend_lightbox_subtitle_signedin: s.referral_data.is_raf_campaign ? p.translate({
                    fe_raf_campaign_details_fragment_output: s.referral_data.fe_raf_campaign_details,
                    fe_raf_dynamic_copy_id: "raf_flex_post_signin_modal_subtext",
                    fe_raf_dynamic_copy_variable_campaign: !0,
                    fe_raf_dynamic_copy_variable_reward: !0
                }) : "",
                fe_trans_raf_friendlanding_index_lightbox_step3_description: s.referral_data.is_raf_campaign ? p.translate({
                    fe_raf_campaign_details_fragment_output: s.referral_data.fe_raf_campaign_details,
                    fe_raf_dynamic_copy_id: "raf_friendlanding_index_lightbox_step3_description",
                    fe_raf_dynamic_copy_variable_reward: !0
                }) : "",
                fe_force_login: s.referral_data.rafForceLogin || 0,
                b_user_auth_level_is_high: s.b_user_auth_level_is_high,
                b_user_auth_level_is_low_or_high: s.b_user_auth_level_is_low_or_high || +s.auth_level && 0 < +s.auth_level,
                fe_show_deals: s.raf_show_deals,
                fe_deals_url: s.raf_show_deals ? s.b_nonsecure_hostname + "/dealspage" + s.b_query_params_with_lang + s.b_query_params_delimiter + "campaign_id=easter_2019" + s.b_query_params_delimiter : "",
                fe_trans_raf_friend_lightbox_subtitle_deals: s.raf_show_deals ? p.translate({
                    fe_raf_campaign_details_fragment_output: s.referral_data.fe_raf_campaign_details,
                    fe_raf_dynamic_copy_id: "raf_deals_easter19_subheader",
                    fe_raf_dynamic_copy_variable_reward: !0
                }) : "",
                fe_login_page_accounts_portal_url: B.env.fe_login_page_accounts_portal_url
            };
            _i_("44d:ada225d4"),
            o(".raf-widget, .raf-widget-text-container").addClass("raf-widget--hidden"),
            _r_();
            var r = {
                autoWidth: !1,
                customWrapperClassName: "raf-friend-landing-card__lightbox-wrapper" + (2 == s.referral_data.rafForceLogin ? " raf-friend-landing-card__side-ui" : ""),
                customMaskClassName: "raf-friend-landing-card__lightbox-mask",
                positionAfterCallBack: function() {
                    _i_("44d:f64ef655"),
                    t.trackEvent(t.referralFriendTracker, "show", "Friend Landing Lightbox"),
                    _r_()
                },
                hideCallBack: function() {
                    _i_("44d:2b257c9a"),
                    B.env.referral_data.rafForceLogin || (t.trackEvent(t.referralFriendTracker, "dismiss", "Friend Landing Lightbox"),
                    d.addSessionValue(m, 1)),
                    f(),
                    _r_()
                }
            };
            s.referral_data.rafForceLogin && (r.bCloseButton = !1,
            r.bMaskClick = !1,
            r.closeOnEsc = !1);
            var a = _.show(e.render(i), r);
            a && a.loadComponents && a.loadComponents(),
            _r_()
        },
        closeLightbox: function(e) {
            if (_i_("44d:4fe58a90"),
            e.preventDefault(),
            t.trackEvent(t.referralFriendTracker, "click", "Friend Landing Lightbox"),
            !B.env.referral_data.rafForceLogin)
                if ("www" == B.env.b_site_type || "tdot" == B.env.b_site_type) {
                    var n = o(".raf-friend-landing-card__lightbox-wrapper");
                    s.rtl ? n.css({
                        bottom: n.css("bottom"),
                        top: "auto"
                    }).animate({
                        left: "25px",
                        bottom: "25px",
                        width: "75px",
                        height: "75px"
                    }, 400, function() {
                        _i_("44d:7eee0619"),
                        _.hide(),
                        _r_()
                    }) : n.css({
                        right: n.css("right"),
                        left: "auto",
                        bottom: n.css("bottom"),
                        top: "auto"
                    }).animate({
                        right: "25px",
                        bottom: "25px",
                        width: "75px",
                        height: "75px"
                    }, 400, function() {
                        _i_("44d:7eee06191"),
                        _.hide(),
                        _r_()
                    })
                } else
                    _.hide();
            void 0 === r || B.env.referral_data.rafForceLogin || r.show(),
            _r_()
        },
        shouldSkipLightbox: function() {
            return _i_("44d:a93e2ba9"),
            _r_(!B.env.b_is_landing && d.getSessionValue(m) && !s.b_raf_li_in && !s.b_raf_prop_ne || s.referral_data.is_incentive_campaign || s.referral_data.b_has_raf_link_saved_in_account && "89" == s.referral_data.raf_source || u)
        },
        switchView: function(e) {
            _i_("44d:ccdef575");
            var n = o("#" + e).html();
            o(".raf-friend-landing-card__content").addClass("raf-sfl-view-wrapper").html(n),
            _.rePosition(),
            _r_()
        },
        saveForLater: function() {
            _i_("44d:342dc764"),
            o.ajax({
                url: s.b_secure_domain + "/saveforlateraccount",
                method: "POST",
                data: {
                    save: 1
                },
                success: function(e) {
                    _i_("44d:bc4f7f7f");
                    var n = B.jstmpl("save_for_later_account_success");
                    _.show(n.render({
                        fe_index_url_no_raf: e.default_url,
                        b_secure_hostname: s.b_secure_domain,
                        b_query_params_with_lang: s.b_query_params_with_lang,
                        b_query_params_delimiter: s.b_query_params_delimiter
                    }), {
                        bMaskClick: !1,
                        bCloseButton: !1,
                        customWrapperClassName: "sfla-success-modal-wrapper"
                    }),
                    _r_()
                },
                error: function() {},
                xhrFields: {
                    withCredentials: !0
                }
            }),
            _r_()
        },
        doGaStuff: function() {
            if (_i_("44d:6846512c"),
            !s.referral_data || !s.referral_data.is_raf_campaign)
                return _r_();
            var e = "RAF_LOGGED_OUT_LANDING";
            0 < +s.auth_level && d.getSessionValue(e) ? (d.deleteSessionValue(e),
            t.trackEvent(t.webViralityTracker, "raf-login-success"),
            2 == +s.auth_level && s.referral_data.user_just_registered ? t.trackEvent(t.webViralityTracker, "raf-login-success-created") : t.trackEvent(t.webViralityTracker, "raf-login-success-login")) : 0 == +s.auth_level && d.addSessionValue(e, 1),
            _r_()
        }
    }),
    _r_()
}),
B.define("referral/raf-goal", function(e, n, i) {
    _i_("44d:97b3ad3a");
    var r = e("et");
    i.exports = {
        shareGoal: function(e) {
            _i_("44d:53c28dcd"),
            r.goal(e),
            r.goal("gm_share"),
            _r_()
        }
    },
    _r_()
}),
B.define("referral/rap-goal", function(e, n, i) {
    _i_("44d:2e0f5abd");
    var r = e("et");
    i.exports = {
        shareGoal: function(e) {
            _i_("44d:2cd92b4e"),
            r.goal("grap_share"),
            _r_()
        }
    },
    _r_()
}),
function(p) {
    _i_("44d:a6bb0ba0");
    function m(e) {
        _i_("44d:92f30a71"),
        p.reportError(new Error(e), "raf:copy-input"),
        _r_()
    }
    p.define("component/referral/copy-input", function(e, n, i) {
        _i_("44d:09bb1fb1");
        var r = e("component")
          , l = e("referral/clipboard")
          , a = e("tooltip")
          , _ = e("referral/raf-goal")
          , c = e("referral/rap-goal")
          , u = e("ga-tracker");
        i.exports = r.extend({
            init: function() {
                _i_("44d:2f039e91");
                var i = this
                  , e = this.$el.find(".js-raf-copy-btn")
                  , t = this.$el.find(".js-raf-copy-input")
                  , n = this.$el.is("[data-is-partner-program]")
                  , o = t.val();
                if (!t.get(0))
                    return m("Share link node is missing"),
                    _r_();
                if (!e.get(0))
                    return m("Share btn node is missing"),
                    _r_();
                if (!o)
                    return m("RAF share links is missing"),
                    _r_();
                function s() {
                    _i_("44d:35202ca9");
                    var e = i.$el.data("tooltip-id")
                      , n = a.get(e);
                    if (!n)
                        return m('Tooltip with id "' + e + '" is missing'),
                        _r_();
                    n.show(),
                    setTimeout(function() {
                        _i_("44d:ce2c5886"),
                        n.hide(),
                        _r_()
                    }, 1e3),
                    _r_()
                }
                function d() {
                    _i_("44d:43c5560b"),
                    n ? (u.trackEvent(u.referralPartnerAdvocateTracker, "share - source: " + p.env.b_action, "click copy"),
                    c.shareGoal("share_copy")) : _.shareGoal("gm_share_copy"),
                    _r_()
                }
                e.add(t).on("click", function(e) {
                    if (_i_("44d:4a7ebd46"),
                    e.preventDefault(),
                    navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                        var n = t.get(0)
                          , i = n.contentEditable
                          , r = n.readOnly;
                        n.contentEditable = !0,
                        n.readOnly = !1;
                        var a = document.createRange();
                        a.selectNodeContents(n);
                        var _ = window.getSelection();
                        _.removeAllRanges(),
                        _.addRange(a),
                        n.setSelectionRange(0, 999999),
                        n.contentEditable = i,
                        n.readOnly = r,
                        document.execCommand("copy"),
                        t.blur(),
                        s(),
                        d()
                    } else
                        l.copy(o, function(e) {
                            if (_i_("44d:3fc4dc86"),
                            t.select(),
                            e)
                                return _r_();
                            s(),
                            d(),
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
B.define("component/referral/ribbon", function(e, n, i) {
    _i_("44d:085955f7");
    var r = e("component")
      , a = e("jquery")
      , _ = e("ga-tracker")
      , t = e("events")
      , o = "index" === B.env.b_action;
    if (o)
        var s = e("ultrafocus").getInstance("raf_ribbon", "[data-sb-outer]");
    var d = "-collapsed";
    i.exports = r.extend({
        init: function() {
            _i_("44d:9648204f");
            var e = this;
            (this.searchInput = a("#ss"),
            this._onToggleClickBinded = this.onToggleClick.bind(this),
            this._onRibbonClickBinded = this.onRibbonClick.bind(this),
            this.$el.on("click", this._onRibbonClickBinded),
            this.$toggle = this.$el.find(".referral_ribbon--toggle"),
            this.$toggle.on("click", this._onToggleClickBinded),
            o) && (s.on("ultrafocus::shown", function() {
                _i_("44d:f665ceda"),
                e.searchInput && e.searchInput.focus(),
                _r_()
            }),
            B.require("search/searchbox/searchbox-sticky-controller").getController().on("show", function() {
                _i_("44d:ecb191ee"),
                s.hide(),
                _r_()
            }));
            this.$actionButton = this.$el.find(".referral_ribbon--button"),
            this.$actionButton.on("click", function(e) {
                _i_("44d:8aaed789"),
                e.stopPropagation(),
                this.collapse(),
                o && s.show(),
                _.trackEvent(_.referralFriendTracker, "click", "start-searching button on ribbon"),
                _r_()
            }
            .bind(this)),
            this.$el.find(".referral_ribbon--terms a").on("click", function() {
                _i_("44d:37900131"),
                _.trackEvent(_.referralFriendTracker, "click", "term_and_conditions - source: ribbon on" + B.env.b_action),
                _r_()
            }),
            t.on("incentives:campaignExpired", function() {
                _i_("44d:10d5b5fa"),
                this.$el.remove(),
                _r_()
            }
            .bind(this)),
            _r_()
        },
        onToggleClick: function(e) {
            _i_("44d:d81ac054"),
            e.stopPropagation(),
            this.collapse(),
            _r_()
        },
        onRibbonClick: function(e) {
            _i_("44d:88cd48cb"),
            this.$el.hasClass(d) && (e.stopPropagation(),
            this.expand(),
            this.$el.off("click", this._onRibbonClickBinded),
            this.$toggle.on("click", this._onToggleClickBinded)),
            _r_()
        },
        collapse: function() {
            _i_("44d:1277b34c"),
            this.$el.addClass(d),
            this.$toggle.off("click", this._onToggleClickBinded),
            this.$el.on("click", this._onRibbonClickBinded),
            _.trackEvent(_.referralFriendTracker, "collapse", "ribbon"),
            _r_()
        },
        expand: function() {
            _i_("44d:8865cd7b"),
            this.$el.removeClass(d),
            _.trackEvent(_.referralFriendTracker, "expand", "ribbon"),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/referral/ribbon-green", function(e, n, i) {
    _i_("44d:1d8320f8");
    var r = e("ga-tracker");
    i.exports = e("component").extend({
        init: function() {
            _i_("44d:642d9e6e"),
            $(document.documentElement).addClass("raf-ribbon-presents"),
            this.$el.on("click", function() {
                _i_("44d:1ae5e5bf"),
                r.trackEvent(r.referralFriendTracker, "click", "ribbon-green"),
                _r_()
            }
            .bind(this)),
            this.$el.on("mouseover", function() {
                _i_("44d:750d0fea"),
                r.trackEvent(r.referralFriendTracker, "hover", "ribbon-green"),
                _r_()
            }
            .bind(this)),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/referral/raf-widget", function(e, n, i) {
    _i_("44d:4fedf566"),
    i.exports = e("component").extend({
        init: function() {
            _i_("44d:0d45f1fb");
            var e = $("#raf-widget-text-container")
              , n = this.$el
              , i = e.hasClass("expanded");
            n.on("click", function() {
                _i_("44d:de2eb1da"),
                e.toggleClass("expanded"),
                _r_()
            });
            var r = e.data("expandAfter");
            r && 0 < +r && !i && window.setTimeout(function() {
                _i_("44d:ec766fba"),
                e.addClass("expanded"),
                _r_()
            }, +r),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/referral/name-reward-copy-logic/dynamic-tag-copy-logic", function(e, n, i) {
    _i_("44d:2fa0ee21");
    var c = e("jstmpl");
    function u(e, n) {
        if (_i_("44d:d4b0c3f9"),
        n)
            return _r_("employee");
        if (e.b_campaign_details.b_is_discount_campaign)
            return _r_("percent");
        return _r_("fixed")
    }
    function p(e, n) {
        return _i_("44d:6886ec45"),
        _r_(n ? e.b_campaign_details.b_raf_reward_type_friend : e.b_campaign_details.b_raf_reward_type_advocate)
    }
    function m(e) {
        if (_i_("44d:46d2fa3b"),
        e.advocate_name)
            return _r_("name");
        return _r_("noname")
    }
    function f(e, n) {
        _i_("44d:77edce6d");
        var i = null;
        return i = n ? e.b_campaign_details.b_raf_reward_advocate : e.b_campaign_details.b_is_discount_campaign ? e.b_campaign_details.b_raf_reward_friend_percentage : e.b_campaign_details.b_raf_reward_friend,
        _r_(i)
    }
    i.exports = {
        translate: function(e) {
            _i_("44d:272ee07a");
            var n = e.fe_raf_campaign_details_fragment_output
              , i = e.fe_raf_dynamic_copy_id
              , r = e.fe_raf_dynamic_copy_variable_campaign || !1
              , a = e.fe_raf_dynamic_copy_variable_reward || !1
              , _ = e.fe_raf_dynamic_copy_variable_name || !1
              , t = e.fe_raf_is_advocate_copy || !1
              , o = null
              , s = null
              , d = null
              , l = null;
            if (r && a && _)
                return o = u(n, t),
                s = p(n, t),
                d = m(n),
                l = f(n, t),
                _r_(c.translations(i + "_" + o + "_" + s + "_" + d, l, {
                    advocate_name: n.advocate_name,
                    value_percent_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_percentage,
                    value_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_with_currency,
                    minimum_spend: n && n.b_campaign_details && n.b_campaign_details.b_raf_min_qualifying_amount_campaign_currency
                }));
            if (r && a)
                return o = u(n, t),
                s = p(n, t),
                l = f(n, t),
                _r_(c.translations(i + "_" + o + "_" + s, l, {
                    value_percent_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_percentage,
                    value_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_with_currency,
                    minimum_spend: n && n.b_campaign_details && n.b_campaign_details.b_raf_min_qualifying_amount_campaign_currency
                }));
            if (a && _)
                return s = p(n, t),
                d = m(n),
                _r_((c.translations(i + "_" + s + "_" + d),
                {
                    advocate_name: n.advocate_name,
                    value_percent_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_percentage,
                    value_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_with_currency,
                    minimum_spend: n && n.b_campaign_details && n.b_campaign_details.b_raf_min_qualifying_amount_campaign_currency
                }));
            if (r && _)
                return o = u(n, t),
                d = m(n),
                l = f(n, t),
                _r_(c.translations(i + "_" + o + "_" + d, l, {
                    advocate_name: n.advocate_name
                }));
            if (r)
                return o = u(n, t),
                l = f(n, t),
                _r_(c.translations(i + "_" + o, l, {
                    value_percent_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_percentage,
                    value_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_with_currency
                }));
            if (a)
                return s = p(n, t),
                _r_(c.translations(i + "_" + s, null, {
                    value_percent_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_percentage,
                    value_friend: n && n.b_campaign_details && n.b_campaign_details.b_raf_reward_friend_with_currency,
                    minimum_spend: n && n.b_campaign_details && n.b_campaign_details.b_raf_min_qualifying_amount_campaign_currency
                }));
            if (_)
                return d = m(n),
                _r_(c.translations(i + "_" + d, null, {
                    advocate_name: n.advocate_name
                }));
            _r_()
        }
    },
    _r_()
}),
B.define("component/referral/require-login-lightbox", function(e, n, i) {
    _i_("44d:9a29c119");
    var r = e("component");
    i.exports = r.extend({
        init: function() {
            _i_("44d:57a957ef"),
            B.command("show-auth-lightbox").run({
                tab: "register",
                extraClass: "uam-lighbox-force-login"
            }),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/referral/invalid-link", function(e, n, i) {
    _i_("44d:ffdc4fb7");
    var r = e("component")
      , a = e("lightbox");
    booking.jstmpl("invalid_link_card", function() {
        _i_("44d:eaab8a16");
        var a, _ = ["\n        ", "\n", '\n    <div data-component="referral/require-login-lightbox"></div>\n', '\n    <div class="raf_modal_invalid">\n        <div class="raf_modal_invalid__title">\n            ', "\n                ", "/private/raf_friend_landing_shut_down_modal_body/name", "\n            ", "/private/raf_flex_shutdown_influencers/name", '\n        </div>\n        <div class="raf_modal_invalid_image">\n            <img width="150" src="', '" alt="invalid raf">\n        </div>\n        <div class="raf_modal_invalid__subtitle">\n        </div>\n        <div class="raf_modal_invalid__body">\n        </div>\n        <div class="raf_modal_invalid_cta">\n            <button class="bui-button bui-button--primary js-modal-close" type="button" style="width: 100%">\n                <span class="bui-button__text">\n                    ', "/private/raf_validation_error_modal_employee_button/name", '\n                </span>\n            </button>\n        </div>\n        <button class="modal-mask-closeBtn" title="Close">\n            ', "iconset/close", "large", '\n            <span class="invisible_spoken">Close</span>\n        </button>\n    </div>\n', "\n    "], t = ["b_raf_error_code", "b_raf_li_in", "b_campaign_expired"];
        return _r_(function(e) {
            _i_("44d:fe6eaff8");
            var n, i = "", r = this.fn;
            return i += _[0],
            n = i,
            _i_("44d:669836af"),
            n += _[1],
            r.MJ(r.MC(t[0]) + "" == "user_not_logged_in") ? n += _[2] : (n += _[3],
            r.MJ(1 == r.MC(t[1])) ? n += [_[4], r.ME(_[5], r.MB, r.MN, null), _[6]].join("") : r.MJ(1 == r.MC(t[2])) && (n += [_[4], r.ME(_[7], r.MB, r.MN, null), _[6]].join("")),
            n += [_[8], r.STATIC_HOSTNAME("/static/img/referral/raf-failure.svg", 0, 0, 0, 0), _[9], r.ME(_[10], r.MB, r.MN, null), _[11], (e.unshift({
                name: _[12],
                size: _[13]
            }),
            a = r.HELPER("icon", e[0]),
            e.shift(),
            a), _[14]].join("")),
            i = _r_(n),
            i += _[15],
            _r_(i)
        })
    }()),
    i.exports = r.extend({
        init: function() {
            _i_("44d:16a9c65b");
            var e = B.jstmpl("invalid_link_card")
              , n = {
                b_raf_li_in: this.$el.data("raf-li-in"),
                b_campaign_expired: this.$el.data("campaign-expired"),
                fe_companyname: B.env.b_companyname
            }
              , i = a.show(e.render(n), {
                bCloseButton: !1,
                customWrapperClassName: "raf_invalid_modal_wrapper"
            });
            i && i.loadComponents && i.loadComponents(),
            $(".js-modal-close").click(function() {
                _i_("44d:766c755e"),
                a.hide(),
                _r_()
            }),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/rewards-ui/ribbon-reactive", ["exports", "module", "component/reactive", "server-data", "jstmpl"], function(e, n, i, r, a) {
    _i_("44d:d92c1523"),
    booking.jstmpl("ribbon", function() {
        _i_("44d:e0ef38d2");
        var s, d = ['<div\n    class="\n        rewards-ribbon\n        ', "-expanded", "-collapsed", "\n        ", "-top", '\n    "\n>\n\n    ', '\n        <button type="button" class="rewards-ribbon__icon-btn" aria-label="', "/private/a11y_cta_close/name", '">\n            ', "iconset/close", "presentation", "24", "\n        </button>\n    ", "\n\n    ", '\n        <button on:click="toggleExpandContent" type="button" class="rewards-ribbon__icon-btn">\n            ', "\n                ", "iconset/navarrow_down", "\n            ", "iconset/navarrow_up", '\n\n    <div class="rewards-ribbon__collapsed">\n        ', '\n            <img class="rewards-ribbon__img" src="', '" alt=""/>\n        ', '\n            <div class="rewards-ribbon__icon">\n                ', "streamline/coupon_discount", "\n            </div>\n        ", '\n        <div class="rewards-ribbon__collapsed-content">\n            <div class="rewards-ribbon__collapsed-title">', '</div>\n        </div>\n    </div>\n\n    <div class="rewards-ribbon__expanded">\n\n        ', '\n\n            <div class="rewards-ribbon__expanded-title-wrapper">\n                ', '\n                    <img class="rewards-ribbon__img" src="', '" alt=""/>\n                ', '\n                    <div class="rewards-ribbon__icon">\n                        ', "\n                    </div>\n                ", '\n                <div class="rewards-ribbon__expanded-title">', '</div>\n            </div>\n\n            <div class="rewards-ribbon__expanded-content">\n                <div class="rewards-ribbon__expanded-subtitle">\n\n                    ', "\n\n                    ", '\n\n                        <span class="rewards-ribbon__terms-link">\n                            <span class="bui-link" data-bui-component="Modal" data-modal-id="rewards-terms-popover" aria-label="', "/private/rewards_a11y_promo_code_more_details_open/name", '">\n                                ', "/private/reward_mini_tcs_entry_point_more_info/name", "\n                            </span>\n                        </span>\n\n                        ", '\n    <template id="rewards-terms-popover">\n        <header class="bui-modal__header rewards-terms-popover">\n            ', "\n    <h3>\n        ", "/private/reward_mini_tcs_title/name", "\n    </h3>\n    <ol>\n        ", "\n            <li>", "</li>\n        ", "\n\n        ", "\n\n    </ol>\n", '\n            <p class="bui-modal__paragraph bui-u-margin-top--16">\n                <a href="', '" target="_blank" class="bui-link bui-link--primary">\n                    ', '\n                </a>\n            </p>\n        </header>\n        <footer class="bui-modal__footer">\n            <div class="bui-group bui-group--inline">\n                <button type="button" class="bui-button bui-button--primary" data-bui-ref="modal-close">\n                    <span class="bui-button__text">', "/private/incentives_engage_reward_modal_got_it_cta/name", "</span>\n                </button>\n            </div>\n        </footer>\n    </template>\n", '\n    <div id="rewards-terms-popover" class="bui-panel bui-u-hidden rewards-terms-popover">\n        ', '\n        <p class="bui-modal__paragraph bui-u-margin-top--16">\n            <a href="', '" target="_blank" class="bui-link bui-link--primary">\n                ', "\n            </a>\n        </p>\n    </div>\n", "\n\n", "\n\n                </div>\n\n                ", '\n    <span class="rewards-ribbon__link">\n        <span class="bui-link ', "bui-link--primary", "\n        </span>\n    </span>\n", '\n    <span class="rewards-ribbon__link">\n        <a class="bui-link ', '" href="', "\n        </a>\n    </span>\n", "\n", '\n    <button class="rewards-ribbon__cta bui-button bui-button--', "secondary", '" type="button">\n        <span class="bui-button__text">', "</span>\n    </button>\n", '\n    <a class="rewards-ribbon__cta bui-button bui-button--', '">\n        <span class="bui-button__text">', "</span>\n    </a>\n", "\n\n\n", "\n\n            </div>\n\n        ", "\n\n            ", '\n                <img class="rewards-ribbon__img" src="', '" alt=""/>\n            ', '\n                <div class="rewards-ribbon__icon">\n                    ', "\n                </div>\n            ", '\n\n            <div class="rewards-ribbon__expanded-content">\n\n                <div class="rewards-ribbon__expanded-title">', '</div>\n                <div class="rewards-ribbon__expanded-subtitle">', "</div>\n\n                ", '\n\n                <span class="rewards-ribbon__terms-link">\n                    <span\n                        class="bui-link"\n                        data-bui-component="Popover"\n                        data-popover-content-id="rewards-terms-popover"\n                        ', '\n                            data-popover-position="bottom"\n                        ', '\n                            data-popover-position="top"\n                        ', '\n                        tabindex="0"\n                    >\n\n                        ', "\n\n                    </span>\n                </span>\n\n                ", "\n\n                ", "\n    </div>\n\n</div>"], l = ["is_container_expanded", "placement", "is_close_button_visible", "site_type", "is_toggle_button_visible", "icon", "copy", "url", "is_more_info_visible", "link_action", "cta_1_type", "cta_1_action", "cta_2_type", "cta_2_action"];
        return _r_(function(e) {
            _i_("44d:c94e78a5");
            var n, i = "", r = this.fn;
            function a(e) {
                return _i_("44d:438a090a"),
                r.MJ(r.MB(l[3]) + "" == "mdot") ? (e = o(e += d[40]),
                e += [d[48], r.F.entities((r.MC(l[7]) || {}).terms), d[49], r.F.entities(((r.MC(l[6]) || {}).terms || {}).terms_link), d[50], r.ME(d[51], r.MB, r.MN, null), d[52]].join("")) : (e = o(e += d[53]),
                e += [d[54], r.F.entities((r.MC(l[7]) || {}).terms), d[55], r.F.entities(((r.MC(l[6]) || {}).terms || {}).terms_link), d[56]].join("")),
                e += d[57],
                _r_(e)
            }
            function _(e) {
                return _i_("44d:fd9fc9a3"),
                r.MD(l[9]) ? (e += d[59],
                r.MJ(r.MB(l[3]) + "" == "mdot") && (e += d[60]),
                e += [d[8], r.F.entities((r.MC(l[6]) || {}).link), d[61]].join("")) : r.MJ(r.MG((r.MC(l[7]) || {}).link)) && (e += d[62],
                r.MJ(r.MB(l[3]) + "" == "mdot") && (e += d[60]),
                e += [d[63], r.F.entities((r.MC(l[7]) || {}).link), d[8], r.F.entities((r.MC(l[6]) || {}).link), d[64]].join("")),
                e += d[65],
                _r_(e)
            }
            function t(e) {
                return _i_("44d:0fe64431"),
                e += d[65],
                r.MD(l[11]) ? (e += d[66],
                r.MD(l[10]) ? e += r.F.entities(r.MC(l[10])) : e += d[67],
                e += [d[68], r.F.entities((r.MC(l[6]) || {}).cta_1), d[69]].join("")) : r.MJ(r.MG((r.MC(l[7]) || {}).cta_1)) && (e += d[70],
                r.MD(l[10]) ? e += r.F.entities(r.MC(l[10])) : e += d[67],
                e += [d[63], r.F.entities((r.MC(l[7]) || {}).cta_1), d[71], r.F.entities((r.MC(l[6]) || {}).cta_1), d[72]].join("")),
                e += d[73],
                r.MD(l[13]) ? (e += d[66],
                r.MD(l[12]) ? e += r.F.entities(r.MC(l[12])) : e += d[67],
                e += [d[68], r.F.entities((r.MC(l[6]) || {}).cta_2), d[69]].join("")) : r.MJ(r.MG((r.MC(l[7]) || {}).cta_2)) && (e += d[70],
                r.MD(l[12]) ? e += r.F.entities(r.MC(l[12])) : e += d[67],
                e += [d[63], r.F.entities((r.MC(l[7]) || {}).cta_2), d[71], r.F.entities((r.MC(l[6]) || {}).cta_2), d[72]].join("")),
                e += d[65],
                _r_(e)
            }
            function o(e) {
                return _i_("44d:219b4342"),
                e += [d[41], r.ME(d[42], r.MB, r.MN, null), d[43]].join(""),
                r.MJ(r.MG(((r.MC(l[6]) || {}).terms || {}).reward)) && (e += [d[44], r.F.entities(((r.MC(l[6]) || {}).terms || {}).reward), d[45]].join("")),
                e += d[46],
                r.MJ(r.MG(((r.MC(l[6]) || {}).terms || {}).minimum_spend)) && (e += [d[44], r.F.entities(((r.MC(l[6]) || {}).terms || {}).minimum_spend), d[45]].join("")),
                e += d[46],
                r.MJ(r.MG(((r.MC(l[6]) || {}).terms || {}).expiration_date)) && (e += [d[44], r.F.entities(((r.MC(l[6]) || {}).terms || {}).expiration_date), d[45]].join("")),
                e += d[46],
                r.MJ(r.MG(((r.MC(l[6]) || {}).terms || {}).platform)) && (e += [d[44], r.F.entities(((r.MC(l[6]) || {}).terms || {}).platform), d[45]].join("")),
                e += d[46],
                r.MJ(r.MG(((r.MC(l[6]) || {}).terms || {}).maximum_reward)) && (e += [d[44], r.F.entities(((r.MC(l[6]) || {}).terms || {}).maximum_reward), d[45]].join("")),
                e += d[46],
                r.MJ(r.MG(((r.MC(l[6]) || {}).terms || {}).payback)) && (e += [d[44], r.F.entities(((r.MC(l[6]) || {}).terms || {}).payback), d[45]].join("")),
                e += d[46],
                r.MJ(r.MG(((r.MC(l[6]) || {}).terms || {}).payback_after_checkout)) && (e += [d[44], r.F.entities(((r.MC(l[6]) || {}).terms || {}).payback_after_checkout), d[45]].join("")),
                e += d[46],
                r.MJ(r.MG(((r.MC(l[6]) || {}).terms || {}).full_tncs_apply)) && (e += [d[44], r.F.entities(((r.MC(l[6]) || {}).terms || {}).full_tncs_apply), d[45]].join("")),
                e += d[47],
                _r_(e)
            }
            return n = i,
            _i_("44d:56855a66"),
            n += d[0],
            r.MD(l[0]) ? n += d[1] : n += d[2],
            n += d[3],
            r.MJ(r.MB(l[1]) + "" == "top") && (n += d[4]),
            n += d[5],
            r.MD(l[2]) && (n += [d[6], r.ME(d[7], r.MB, r.MN, null), d[8], (e.unshift({
                name: d[9],
                role: d[10],
                width: d[11]
            }),
            s = r.HELPER("icon", e[0]),
            e.shift(),
            s), d[12]].join("")),
            n += d[13],
            r.MD(l[4]) && (n += d[14],
            r.MJ(r.MB(l[3]) + "" == "mdot") ? n += [d[15], (e.unshift({
                name: d[16],
                role: d[10],
                width: d[11]
            }),
            s = r.HELPER("icon", e[0]),
            e.shift(),
            s), d[17]].join("") : n += [d[15], (e.unshift({
                name: d[18],
                role: d[10],
                width: d[11]
            }),
            s = r.HELPER("icon", e[0]),
            e.shift(),
            s), d[17]].join(""),
            n += d[12]),
            n += d[19],
            r.MJ(r.MG((r.MC(l[5]) || {}).image_url)) ? n += [d[20], r.F.entities((r.MC(l[5]) || {}).image_url), d[21]].join("") : n += [d[22], (e.unshift({
                color: "#FF8000",
                name: d[23]
            }),
            s = r.HELPER("icon", e[0]),
            e.shift(),
            s), d[24]].join(""),
            n += [d[25], r.F.entities((r.MC(l[6]) || {}).title_collapsed), d[26]].join(""),
            r.MJ(r.MB(l[3]) + "" == "mdot") ? (n += d[27],
            r.MJ(r.MG((r.MC(l[5]) || {}).image_url)) ? n += [d[28], r.F.entities((r.MC(l[5]) || {}).image_url), d[29]].join("") : n += [d[30], (e.unshift({
                color: "#FF8000",
                name: d[23]
            }),
            s = r.HELPER("icon", e[0]),
            e.shift(),
            s), d[31]].join(""),
            n += [d[32], r.F.entities((r.MC(l[6]) || {}).title_expanded), d[33], r.F.entities((r.MC(l[6]) || {}).subtitle), d[34]].join(""),
            r.MD(l[8]) && (n = a(n += [d[35], r.ME(d[36], r.MB, r.MN, null), d[37], r.ME(d[38], r.MB, r.MN, null), d[39]].join("")),
            n += d[34]),
            n = _(n += d[58]),
            n = t(n += d[15])) : (n += d[75],
            r.MJ(r.MG((r.MC(l[5]) || {}).image_url)) ? n += [d[76], r.F.entities((r.MC(l[5]) || {}).image_url), d[77]].join("") : n += [d[78], (e.unshift({
                color: "#FF8000",
                name: d[23]
            }),
            s = r.HELPER("icon", e[0]),
            e.shift(),
            s), d[79]].join(""),
            n = t(n += d[75]),
            n += [d[80], r.F.entities((r.MC(l[6]) || {}).title_expanded), d[81], r.F.entities((r.MC(l[6]) || {}).subtitle), d[82]].join(""),
            r.MD(l[8]) && (n += d[83],
            r.MJ(r.MB(l[1]) + "" == "top") ? n += d[84] : n += d[85],
            n = a(n += [d[86], r.ME(d[38], r.MB, r.MN, null), d[87]].join("")),
            n += d[88]),
            n = _(n += d[88])),
            n += d[74],
            n += d[89],
            i = _r_(n),
            _r_(i)
        })
    }());
    var _ = a.translations
      , t = {
        site_type: r.b_site_type,
        is_container_expanded: !!+r.fe_rewards_ribbon_feature_is_expanded,
        placement: r.fe_rewards_ribbon_feature_desktop_placement,
        is_close_button_visible: r.fe_rewards_ribbon_feature_close_button_show,
        is_toggle_button_visible: r.fe_rewards_ribbon_feature_toggle_button_show,
        is_more_info_visible: r.fe_rewards_ribbon_feature_toggle_more_info_show,
        link_action: r.fe_rewards_ribbon_feature_link1_action,
        cta_1_action: r.fe_rewards_ribbon_feature_cta1_action,
        cta_1_type: r.fe_rewards_ribbon_feature_cta1_type,
        cta_2_action: r.fe_rewards_ribbon_feature_cta2_action,
        cta_2_type: r.fe_rewards_ribbon_feature_cta2_type,
        icon: {
            icon_url: r.fe_rewards_ribbon_feature_icon_url,
            image_url: r.fe_rewards_ribbon_feature_image_url
        },
        copy: {
            title_expanded: r.fe_rewards_ribbon_copy_expanded_title,
            title_collapsed: r.fe_rewards_ribbon_copy_collapsed_title,
            subtitle: r.fe_rewards_ribbon_copy_expanded_subtitle,
            link: r.fe_rewards_ribbon_copy_link1,
            cta_1: r.fe_rewards_ribbon_copy_cta1,
            cta_2: r.fe_rewards_ribbon_copy_cta2,
            terms: {
                reward: r.fe_rewards_terms_popover_copy_reward,
                minimum_spend: r.fe_rewards_terms_popover_copy_minimum_spend,
                expiration_date: r.fe_rewards_terms_popover_copy_expiration_date,
                platform: r.fe_rewards_terms_popover_copy_platform,
                maximum_reward: r.fe_rewards_terms_popover_copy_maximum_reward,
                payback: r.fe_rewards_terms_popover_copy_payback,
                payback_after_checkout: r.fe_rewards_terms_popover_copy_payback_after_checkout,
                full_tncs_apply: r.fe_rewards_terms_popover_copy_full_tncs_apply || _("reward_mini_tcs_complete_tcs_link"),
                terms_link: r.fe_rewards_terms_popover_copy_terms_link || _("reward_mini_tcs_fulltcs_cta_link"),
                main_cta: r.fe_rewards_terms_popover_copy_main_cta || _("incentives_engage_reward_modal_got_it_cta")
            }
        },
        url: {
            link: r.fe_rewards_ribbon_feature_link1_url,
            cta_1: r.fe_rewards_ribbon_feature_cta1_url,
            cta_2: r.fe_rewards_ribbon_feature_cta2_url,
            faq: r.b_nonsecure_hostname + "/content/incentives-faq" + r.b_query_params_with_lang,
            terms: r.b_nonsecure_hostname + "/content/referral-terms" + r.b_query_params_with_lang + r.b_query_params_delimiter + "is_incentive=1"
        }
    };
    n.exports = i.extend({
        initialState: t,
        template: "ribbon",
        afterRender: function() {
            _i_("44d:51009026"),
            this.BUI = window.BUI,
            this.BUI && this.BUI.initComponents && this.BUI.initComponents(this.el),
            _r_()
        },
        toggleExpandContent: function() {
            _i_("44d:7c265c25"),
            this.setState({
                is_container_expanded: !this.getState().is_container_expanded
            }),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/rewards-ui/landing-reactive", ["require", "exports", "module", "component/reactive", "server-data", "jstmpl-translations", "dismiss-item", "events", "et"], function(a, e, n, i, _, r, t, o, s) {
    _i_("44d:12eee515"),
    booking.jstmpl("landing_modal", function() {
        _i_("44d:8b15f993");
        var o, s = ['\n<div id="rewards-landing" class="bui-u-hidden">\n\n    ', '\n        <div class="bui-scrim bui-scrim--position-top">\n            <div class="bui-scrim__content">\n                <button type="button" class="bui-modal__close" aria-label="Close dialog" data-bui-ref="modal-close">\n                    ', "streamline/close", "\n                </button>\n            </div>\n        </div>\n    ", '\n        <button type="button" class="bui-modal__close" aria-label="Close dialog" data-bui-ref="modal-close">\n            ', "\n        </button>\n    ", '\n\n    <header\n        class="bui-modal__header rewards-modal-img"\n        style="', " ", " background: none; padding: 16px 16px 0 16px; height: ", "px; ", "background-image: url('", "');", "height: ", "px;", '"\n    >\n        ', '\n            <img src="', '" alt="" height="', '" />\n        ', '\n    </header>\n\n    <div class="bui-modal__body bui-modal__body--primary ', "bui-u-padding-bottom--8", "bui-u-padding-bottom--16", '">\n        <h2 class="bui-modal__title" id="modal-default-title" data-bui-ref="modal-title">\n            ', '\n        </h2>\n        <p class="bui-modal__paragraph" id="modal-default-subtitle" data-bui-ref="modal-subtitle">\n            ', "\n        </p>\n\n        ", '\n            <div class="bui-container">\n                <ul class="bui-list bui-list--unordered">\n                    ', '\n                        <li class="bui-list__item">', "</li>\n                    ", "\n                </ul>\n            </div>\n        ", "\n\n        ", '\n            <p class="bui-modal__paragraph ', "bui-u-margin-top--8", "bui-u-margin-top--24", '">\n                <a href="', '" target="_blank" class="bui-link bui-link--primary">\n                    ', "\n                </a>\n            </p>\n        ", '\n\n    </div>\n    <footer class="bui-modal__footer bui-u-padding-top--8">\n        <div role="group" class="bui-group bui-group--inline bui-group--vertical-align-middle bui-button-group">\n            ', '\n                <div class="bui-group__item">\n                    <div class="rewards-promo-banner__bui-coupon-code">\n                        ', '\n                            <div class="bui-spinner bui-spinner--size-small">\n                                <div class="bui-spinner__inner"></div>\n                            </div>\n                        ', "\n                            ", "\n                        ", '\n                    </div>\n                </div>\n                <div class="bui-group__item">\n                    <button type="button" ', "disabled", ' class="bui-button js-copy-modal">\n                        <span class="bui-button__text">\n                            ', "\n                        </span>\n                    </button>\n                </div>\n            ", '\n                <a href="', '" target="_blank" class="bui-button">\n                    <span class="bui-button__text">\n                        ', "\n                    </span>\n                </a>\n            ", '\n                <div class="bui-group__item">\n                    <button type="button" class="bui-button js-main-cta">\n                        <span class="bui-button__text">', "</span>\n                    </button>\n                </div>\n            ", "\n        </div>\n\n        ", '\n\n            <p class="bui_font_caption bui_color_grayscale bui-u-margin-top--24">\n                ', '\n            </p>\n\n            <p class="bui-modal__paragraph bui-u-margin-top--16">\n                <a href="', "\n                </a>\n            </p>\n\n        ", '\n            <p class="bui-modal__paragraph bui-u-margin-top--16">\n                <a href="', '" target="_blank" class="bui-link bui-link--primary js-secondary-cta">\n                    ', "\n\n    </footer>\n\n<div>"], d = ["hide_scrim", "image_height", "show_image_inside_header", "image_url", "copy", "show_secondary_action_bottom", "has_list", "url", "reward_token", "can_copy_reward_token"];
        return _r_(function(_) {
            _i_("44d:d993674a");
            var e = ""
              , t = this.fn;
            return e = function(e) {
                if (_i_("44d:c2b7f24d"),
                e += s[0],
                t.MK(t.MB(d[0])) ? e += [s[1], (_.unshift({
                    color: "#FFFFFF",
                    name: s[2]
                }),
                o = t.HELPER("icon", _[0]),
                _.shift(),
                o), s[3]].join("") : e += [s[4], (_.unshift({
                    name: s[2]
                }),
                o = t.HELPER("icon", _[0]),
                _.shift(),
                o), s[5]].join(""),
                e += s[6],
                e += s[7],
                t.MD(d[2]) ? e += [s[8], t.F.entities(t.MI(t.MC(d[1])) + t.MI(16)), s[9]].join("") : (e += s[7],
                t.MD(d[3]) && (e += [s[10], t.F.entities(t.MC(d[3])), s[11]].join("")),
                e += s[7],
                t.MD(d[1]) && (e += [s[12], t.F.entities(t.MI(t.MC(d[1])) + t.MI(16)), s[13]].join("")),
                e += s[7]),
                e += s[7],
                e += s[14],
                t.MD(d[2]) && (e += [s[15], t.F.entities(t.MC(d[3])), s[16], t.F.entities(t.MC(d[1])), s[17]].join("")),
                e += s[18],
                t.MK(t.MC(d[4]).fineprint) && t.MJ(t.MB(d[5])) ? e += s[19] : e += s[20],
                e += [s[21], t.F.entities((t.MC(d[4]) || {}).title), s[22], t.F.entities((t.MC(d[4]) || {}).subtitle), s[23]].join(""),
                t.MD(d[6])) {
                    e += s[24];
                    var n = (t.MC(d[4]) || {}).list || [];
                    _.unshift({
                        item_list: null
                    });
                    for (var i, r = 1, a = n.length; r <= a; r++)
                        _[0].item_list = i = n[r - 1],
                        e += [s[25], t.F.entities(i), s[26]].join("");
                    _.shift(),
                    e += s[27]
                }
                return e += s[28],
                t.MK(t.MC(d[4]).fineprint || t.MB(d[5])) && (e += s[29],
                t.MD(d[6]) ? e += s[30] : e += s[31],
                e += [s[32], t.F.entities((t.MC(d[7]) || {}).link), s[33], t.F.entities((t.MC(d[4]) || {}).link), s[34]].join("")),
                e += s[35],
                t.MD(d[9]) ? (e += s[36],
                t.MK(t.MB(d[8])) ? e += s[37] : e += [s[38], t.F.entities(t.MC(d[8])), s[39]].join(""),
                e += s[40],
                t.MK(t.MB(d[8])) && (e += s[41]),
                e += [s[42], t.F.entities((t.MC(d[4]) || {}).main_cta), s[43]].join("")) : t.MJ(t.MG((t.MC(d[7]) || {}).main_link)) ? e += [s[44], t.F.entities((t.MC(d[7]) || {}).main_link), s[45], t.F.entities((t.MC(d[4]) || {}).main_cta), s[46]].join("") : e += [s[47], t.F.entities((t.MC(d[4]) || {}).main_cta), s[48]].join(""),
                e += s[49],
                t.MJ(t.MG((t.MC(d[4]) || {}).fineprint)) && (e += [s[50], t.F.entities((t.MC(d[4]) || {}).fineprint), s[51], t.F.entities((t.MC(d[7]) || {}).link), s[33], t.F.entities((t.MC(d[4]) || {}).link), s[52]].join("")),
                e += s[28],
                t.MD(d[5]) && (e += [s[53], t.F.entities((t.MC(d[7]) || {}).link), s[54], t.F.entities((t.MC(d[4]) || {}).link), s[34]].join("")),
                e += s[55],
                _r_(e)
            }(e),
            _r_(e)
        })
    }());
    var d = "bWHLEDOeHbUJXbJZQNPcebDBdLOLOLOMXC"
      , l = "bWHLEDOeHbUJXbJZQNPcebDBEBBVYUEXO"
      , c = !1
      , u = !1
      , p = {
        image_url: _.fe_rewards_landing_feature_image_url,
        hide_scrim: _.fe_rewards_landing_feature_hide_scrim,
        image_height: _.fe_rewards_landing_feature_image_height,
        show_image_inside_header: _.fe_rewards_landing_feature_show_image_inside_header,
        show_secondary_action_bottom: _.fe_rewards_landing_feature_show_secondary_action_bottom,
        has_list: !1,
        should_use_ultrafocus: "www" === _.b_site_type && "index" === _.b_action && !_.fe_bouf,
        should_landing_modal_open: !!_.fe_is_rewards_landing_not_dismissed,
        can_copy_reward_token: _.fe_rewards_landing_feature_copy_reward,
        reward_token: _.fe_rewards_landing_feature_coupon_code,
        is_mdot: "mdot" === _.b_site_type,
        copy: {
            title: _.fe_rewards_landing_copy_title,
            subtitle: _.fe_rewards_landing_copy_subtitle,
            main_cta: _.fe_rewards_landing_copy_cta || r("convert_incentives_landing_modal_cta"),
            link: _.fe_rewards_landing_copy_link || r("convert_incentives_landing_modal_tcs_cta"),
            copy_cta_done: _.fe_rewards_landing_copy_cta_copied || r("convert_incentives_index_card_copy_cta_copied"),
            list: [].concat([_.fe_rewards_landing_copy_sr_point_1, _.fe_rewards_landing_copy_sr_point_2, _.fe_rewards_landing_copy_sr_point_3, _.fe_rewards_landing_copy_sr_point_4]).filter(function(e) {
                return _i_("44d:183103b5"),
                _r_(0 != e)
            }),
            fineprint: _.fe_rewards_landing_copy_fineprint
        },
        url: {
            link: _.fe_rewards_landing_feature_link_url || _.b_nonsecure_hostname + "/content/referral-terms" + _.b_query_params_with_lang + _.b_query_params_delimiter + "is_incentive=1",
            main_link: _.fe_rewards_landing_feature_main_link_url
        },
        click_main_cta: !1,
        click_secondary_cta: !1
    };
    n.exports = i.extend({
        initialState: p,
        template: "landing_modal",
        initialize: function() {
            _i_("44d:4b875bbc");
            var e, n = this.getState(), i = window.BUI, r = this;
            n.should_use_ultrafocus && (e = a("ultrafocus").getInstance("rewards-landing", "[data-sb-outer]")),
            this.modal = i.createInstance("Modal", document.createElement("div"), {
                id: "rewards-landing",
                onBeforeOpen: function() {
                    _i_("44d:8a9e497c"),
                    n.can_copy_reward_token && this.modalEl.querySelector(".js-copy-modal") && this.modalEl.querySelector(".js-copy-modal").addEventListener("click", r.copyRewardToken.bind(r)),
                    this.modalEl.querySelector(".js-main-cta") && this.modalEl.querySelector(".js-main-cta").addEventListener("click", r.mainCTACloseAction.bind(r)),
                    this.modalEl.querySelector(".js-secondary-cta") && this.modalEl.querySelector(".js-secondary-cta").addEventListener("click", r.trackCTAclick.bind(r)),
                    _r_()
                },
                onAfterClose: function() {
                    _i_("44d:b98b4e0d"),
                    n.can_copy_reward_token && this.modalEl.querySelector(".js-copy-modal") && this.modalEl.querySelector(".js-copy-modal").removeEventListener("click", r.copyRewardToken.bind(r)),
                    this.modalEl.querySelector(".js-main-cta") && this.modalEl.querySelector(".js-main-cta").removeEventListener("click", r.mainCTACloseAction.bind(r)),
                    this.modalEl.querySelector(".js-secondary-cta") && this.modalEl.querySelector(".js-secondary-cta").removeEventListener("click", r.trackCTAclick.bind(r)),
                    t("rewards_landing"),
                    e && e.show(),
                    _.fe_firusecam_www && (c || u ? (c && s.customGoal(d, 1),
                    u && s.customGoal(d, 2)) : s.customGoal(d, 3)),
                    _.fe_firusecam_mdot && (c || u ? (c && s.customGoal(l, 1),
                    u && s.customGoal(l, 2)) : s.customGoal(l, 3)),
                    _r_()
                }
            }),
            this.modal && this.modal.mount(),
            this.toast = i.createInstance("Toast", null),
            this.toast && this.toast.mount(),
            this.setState({
                has_list: !!n.copy.list.length
            }),
            o.on("rewards:async_coupon_code_retrieved", function(e) {
                _i_("44d:a590fd11"),
                r.setState({
                    reward_token: e.reward_token
                }),
                _r_()
            }),
            _r_()
        },
        afterRender: function() {
            _i_("44d:d9b8f317");
            var e = this.getState();
            this.modal && e.should_landing_modal_open && (_.b_action.match(/index|taxi|dealspage/g) ? (this.modal.open(),
            this.setState({
                should_landing_modal_open: !1
            })) : "hotel" === _.b_action && (_.fe_INA_WWW ? (setTimeout(this.delayedModalAutoOpen.bind(this), 5e3),
            this.setState({
                should_landing_modal_open: !1
            })) : _.fe_IOU_WWW && (this.delayedModalAutoOpen(),
            this.setState({
                should_landing_modal_open: !1
            })))),
            _r_()
        },
        delayedModalAutoOpen: function() {
            _i_("44d:70e7ee76"),
            this.getState().reward_token ? this.modal.open() : setTimeout(this.delayedModalAutoOpen.bind(this), 1e3),
            _r_()
        },
        copyRewardToken: function(e) {
            if (_i_("44d:55cd5096"),
            !this.timeoutID) {
                var n = this.getState();
                clearTimeout(this.timeoutID);
                var i = document.createElement("textarea");
                i.style.fontSize = "12pt",
                i.style.border = "0",
                i.style.padding = "0",
                i.style.margin = "0",
                i.style.position = "absolute",
                i.style[_.b_lang_rtl ? "right" : "left"] = "-9999px";
                var r = window.pageYOffset || document.documentElement.scrollTop;
                i.style.top = r + "px",
                i.setAttribute("readonly", ""),
                i.value = n.reward_token,
                document.body.appendChild(i),
                i.select(),
                i.setSelectionRange(0, i.value.length),
                document.execCommand("copy") && this.toast.show({
                    text: n.copy.copy_cta_done
                }),
                document.body.removeChild(i),
                i = null
            }
            _r_()
        },
        trackCTAclick: function(e) {
            if (_i_("44d:633a1df9"),
            (_.fe_firusecam_www || _.fe_firusecam_mdot) && e && e.target && e.target.parentElement) {
                var n = e.target.classList.contains("js-main-cta") || e.target.parentElement.classList.contains("js-main-cta")
                  , i = e.target.classList.contains("js-secondary-cta");
                n ? c = !0 : i && (u = !0)
            }
            _r_()
        },
        mainCTACloseAction: function(e) {
            _i_("44d:5d70adba"),
            this.trackCTAclick(e),
            this.modal && this.modal.close() && this.modal.unmount(),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/rewards-ui/banner-reactive", ["exports", "module", "component/reactive", "server-data", "jstmpl", "dismiss-item", "jquery", "et", "events"], function(e, n, i, a, r, _, t, o, s) {
    _i_("44d:b9b6dd83"),
    booking.jstmpl("banner", function() {
        _i_("44d:c8605804");
        var o, s = ['<div class="', "bui-banner rewards-promo-banner ", "bui-u-bleed@small ", "bui-u-hidden ", "bui-u-margin-top--8 ", "bui-u-margin-bottom--8 ", "rewards-promo-banner--no_border ", "bui-u-hidden", '" data-bui-component="Banner">\n    ', '\n        <div class="bui-banner__content">\n            <div class="bui-banner__slot">\n                <div aria-label="Label" class="bui-spinner" role="alert" aria-busy="true">\n                    <div class="bui-spinner__inner"></div>\n                </div>\n            </div>\n        </div>\n    ', "\n\n        ", "\n            ", '\n                <div class="bui-banner__image-container">\n                    <img class="bui-banner__image" src="', '" alt=""/>\n                </div>\n            ', '\n                <span class="bui-banner__icon">\n                    ', "streamline/coupon_discount", "\n                </span>\n            ", "\n        ", '\n        <div class="bui-banner__content">\n            <div class="bui-banner__title">\n                ', '\n            </div>\n            <p class="bui-banner__text">\n\n                ', "\n\n                ", '\n                    <button\n                        on:click="openModal"\n                        class="bui-link bui-link--primary"\n                        aria-label="', '"\n                        type="button"\n                    >\n                        ', "\n                    </button>\n                ", "\n            </p>\n\n            ", '\n\n                <div class="bui-group bui-group--inline bui-group--vertical-align-middle bui-u-margin-top--8">\n                    ', '\n                        <div class="bui-group__item">\n                            <button\n                                on:click="copyRewardToken"\n                                class="bui-link bui-link--primary bui-u-margin-end--24"\n                                aria-label=""\n                                type="button"\n                                ', "disabled", '\n                            >\n                                <span class="bui_font_defaults">\n                                    ', "\n                                </span>\n                            </button>\n                        </div>\n                    ", '\n                    <div class="bui-group__item">\n                        ', '\n                            <button\n                                on:click="openModal"\n                                class="bui-link bui-link--primary"\n                                aria-label="', '"\n                                type="button"\n                            >\n                                ', "\n                            </button>\n                        ", "\n                    </div>\n                </div>\n\n            ", "\n                ", '\n                    <div class="bui-group bui-group--inline bui-group--vertical-align-middle bui-u-margin-top--8 bui-u-margin-bottom--8">\n                        <div class="bui-group__item">\n                            <button\n                                on:click="openModal"\n                                class="bui-link bui-link--primary"\n                                aria-label="', '"\n                                type="button"\n                            >\n                                <span class="bui_font_defaults">\n                                    ', "\n                                </span>\n                            </button>\n                        </div>\n                    </div>\n                ", '\n                    <a class="bui-button bui-button--secondary bui-banner__button" href="', '" target="_blank">\n                        <span class="bui-button__text">\n                            ', "\n                        </span>\n                    </a>\n                ", '\n                <div class="bui-group bui-group--inline bui-group--vertical-align-middle bui-u-margin-top--8">\n                    <div class="bui-group__item">\n                        <div class="rewards-promo-banner__bui-coupon-code">\n                            ', '\n                                <div class="bui-spinner bui-spinner--size-small">\n                                    <div class="bui-spinner__inner"></div>\n                                </div>\n                            ', "\n                                ", "\n                            ", "\n                        </div>\n                    </div>\n                    ", '\n                        <div class="bui-group__item">\n                            <button type="button" ', ' class="bui-button" on:click="copyRewardToken">\n                                <span class="bui-button__text">\n                                    ', "\n                </div>\n            ", "\n\n        </div>\n\n        ", '\n                <div class="bui-banner__image-container rewards-promo-banner__image-container--adj">\n                    <img class="bui-banner__image" src="', '\n                <span class="bui-banner__icon rewards-promo-banner__bui-icon">\n                    ', "36", '\n            <button type="button" class="bui-banner__close" aria-label="', '" title="', '" data-bui-ref="banner-close" on:click="closeBanner" type="button">\n                ', "", "streamline/close", "24", "\n            </button>\n        ", '<div id="rewards-banner-modal" class="bui-u-hidden">\n    <header class="bui-modal__header bui-u-padding-bottom--16">\n        <h2 class="bui-modal__title" id="modal-default-title" data-bui-ref="modal-title">\n            ', '\n        </h2>\n    </header>\n    <div class="bui-modal__body bui-modal__body--primary rewards-promo-banner__modal bui-u-padding-top--2 bui-u-padding-bottom--8">\n        <div class="bui-container  bui-u-padding-top--2">\n            ', '\n    <ul class="bui-list bui-list--unordered bui_font_defaults">\n        ', '\n            <li class="', "bui-list__item", '">', "</li>\n        ", "\n\n    </ul>\n", "\n        </div>\n    </div>\n    ", '\n        <footer class="bui-modal__footer bui-u-padding-top--4">\n            <div class="bui-group">\n                <div class="bui-group__item">\n                    <a href="', '" class="bui-link bui-u-inline" target="_blank">\n                        ', '\n                    </a>\n                </div>\n                <div class="bui-group__item bui-u-padding-top--16">\n                    <a href="', '\n                    </a>\n                </div>\n            </div>\n            <div class="bui-group bui-group--inline bui-group--vertical-align-middle  bui-u-padding-top--24">\n                <div class="bui-group__item">\n                    <div class="rewards-promo-banner__bui-coupon-code">\n                        ', '\n                            <div class="bui-spinner bui-spinner--size-small">\n                                <div class="bui-spinner__inner"></div>\n                            </div>\n                        ', "\n                        ", '\n                    </div>\n                </div>\n                <div class="bui-group__item">\n                    <button type="button" ', ' class="bui-button js-copy-modal">\n                        <span class="bui-button__text">\n                            ', "\n                        </span>\n                    </button>\n                </div>\n            </div>\n        </footer>\n    ", '\n        <footer class="bui-modal__footer bui-u-padding-top--8">\n            <div class="bui-group">\n                <div class="bui-group__item bui-u-padding-bottom--16">\n                    <a href="', '\n                    </a>\n                </div>\n                <div class="bui-group__item">\n                    <button type="button" class="bui-button bui-button--primary" data-bui-ref="modal-close">\n                        <span class="bui-button__text">', "</span>\n                    </button>\n                </div>\n            </div>\n        </footer>\n    ", "\n</div>\n\n", '<div id="rewards-banner-modal" class="bui-u-hidden">\n    <header class="bui-modal__header ', "rewards-mdot-modal-img", "rewards-modal-img", '"></header>\n\n    \n    ', '\n        <div class="bui-alert bui-alert--error" role="status">\n            <span class="bui-alert__icon">\n                ', "streamline/warning", '\n            </span>\n            <div class="bui-alert__description">\n                <p class="bui-alert__text">', "</p>\n            </div>\n        </div>\n    ", '\n\n    <div class="bui-modal__body bui-modal__body--primary bui-u-padding-bottom--16">\n\n        <h2 class="bui-modal__title" id="modal-default-title" data-bui-ref="modal-title">\n            ', '\n        </h2>\n        <p class="bui-modal__paragraph" id="modal-default-subtitle" data-bui-ref="modal-subtitle">\n            ', "\n        </p>\n\n        ", '\n            <div class="bui-container">\n                <ol class="bui-list bui-list--ordered">\n                    ', '\n                        <li class="bui-list__item">', "</li>\n                    ", "\n                </ol>\n            </div>\n        ", '\n            <p class="bui-modal__paragraph bui-u-margin-top--8">\n                <a href="', '" target="_blank" class="bui-link bui-link--primary">\n                    ', "\n                </a>\n            </p>\n        ", '\n    </div>\n\n    <footer class="bui-modal__footer bui-u-padding-top--8">\n        <div class="bui-group bui-group--inline bui-group--vertical-align-middle">\n            ', '\n                <div class="bui-group__item">\n                    <div class="rewards-promo-banner__bui-coupon-code">\n                        ', "\n                        </span>\n                    </button>\n                </div>\n            ", '\n                <div class="bui-group__item">\n                    <button type="button" class="bui-button" data-bui-ref="modal-close">\n                        <span class="bui-button__text">\n                            ', "\n        </div>\n\n        ", '\n\n            <p class="bui_font_caption bui_color_grayscale bui-u-margin-top--24">\n                ', '\n            </p>\n\n            <p class="bui-modal__paragraph bui-u-margin-top--16">\n                <a href="', "\n                </a>\n            </p>\n\n        ", "\n    </footer>\n</div>\n\n", "\n    ", "\n</div>\n"], d = ["is_mdot_bleed_enabled", "is_banner_closed", "has_top_margin", "is_async_coupon_code", "reward_token", "has_ajax_failed", "url", "is_k2_variant", "copy", "is_modal_enabled", "hide_more_info_banner_link", "is_inline_reward_token", "is_cta_as_modal", "is_token_loading", "is_reward_token_copy_enabled", "is_mdot", "show_mini_tncs_coupon", "modal_type", "is_employee", "has_more_info_list", "is_more_info_reward_token_visible"];
        return _r_(function(_) {
            _i_("44d:177f0298");
            var e, n, i, r = "", t = this.fn;
            return e = r,
            _i_("44d:78c3c430"),
            e += s[0],
            e += s[1],
            t.MD(d[0]) && (e += s[2]),
            t.MD(d[1]) && (e += s[3]),
            t.MD(d[2]) ? e += s[4] : e += s[5],
            t.MJ(t.MB(d[3])) && t.MK(t.MB(d[4])) && (e += s[6]),
            t.MJ(t.MB(d[3])) && t.MJ(t.MB(d[5])) && (e += s[7]),
            e += s[8],
            t.MJ(t.MB(d[3])) && t.MK(t.MB(d[4])) ? e += s[9] : (e += s[10],
            t.MD(d[7]) || (e += s[11],
            t.MJ(t.MG((t.MC(d[6]) || {}).image)) ? e += [s[12], t.F.entities((t.MC(d[6]) || {}).image), s[13]].join("") : e += [s[14], (_.unshift({
                color: "#FF8000",
                name: s[15]
            }),
            o = t.HELPER("icon", _[0]),
            _.shift(),
            o), s[16]].join(""),
            e += s[17]),
            e += [s[18], t.F.entities((t.MC(d[8]) || {}).title), s[19], (t.MC(d[8]) || {}).subtitle, s[20]].join(""),
            t.MJ(t.MB(d[9])) && t.MK(t.MB(d[10])) && (e += [s[21], t.F.entities((t.MC(d[8]) || {}).more_info_open), s[22], t.F.entities((t.MC(d[8]) || {}).more_info_cta), s[23]].join("")),
            e += s[24],
            t.MD(d[11]) ? (e += s[25],
            t.MD(d[7]) || (e += s[26],
            t.MK(t.MB(d[4])) && (e += s[27]),
            e += [s[28], t.F.entities((t.MC(d[8]) || {}).copy_cta), s[29]].join("")),
            e += s[30],
            t.MJ(t.MB(d[9])) && (e += [s[31], t.F.entities((t.MC(d[8]) || {}).more_info_open), s[32], t.F.entities((t.MC(d[8]) || {}).more_info_cta), s[33]].join("")),
            e += s[34]) : t.MJ(t.MG((t.MC(d[6]) || {}).cta)) ? (e += s[35],
            t.MD(d[12]) ? e += [s[36], t.F.entities((t.MC(d[8]) || {}).more_info_open), s[37], t.F.entities((t.MC(d[8]) || {}).copy_link), s[38]].join("") : e += [s[39], t.F.entities((t.MC(d[6]) || {}).cta), s[40], t.F.entities((t.MC(d[8]) || {}).copy_link), s[41]].join(""),
            e += s[11]) : (e += s[42],
            t.MD(d[13]) ? e += s[43] : e += [s[44], t.F.entities(t.MC(d[4])), s[45]].join(""),
            e += s[46],
            t.MD(d[14]) && (e += s[47],
            t.MK(t.MB(d[4])) && (e += s[27]),
            e += [s[48], t.F.entities((t.MC(d[8]) || {}).copy_cta), s[29]].join("")),
            e += s[49]),
            e += s[50],
            t.MD(d[7]) ? (e += s[11],
            t.MJ(t.MG((t.MC(d[6]) || {}).image)) ? e += [s[51], t.F.entities((t.MC(d[6]) || {}).image), s[13]].join("") : e += [s[52], (_.unshift({
                color: "#FF8000",
                name: s[15],
                width: s[53]
            }),
            o = t.HELPER("icon", _[0]),
            _.shift(),
            o), s[16]].join(""),
            e += s[17]) : e += [s[54], t.F.entities((t.MC(d[8]) || {}).banner_close), s[55], t.F.entities((t.MC(d[8]) || {}).banner_close), s[56], (_.unshift({
                class: s[57],
                name: s[58],
                width: s[59]
            }),
            o = t.HELPER("icon", _[0]),
            _.shift(),
            o), s[60]].join(""),
            e += s[10],
            t.MD(d[9]) && (e += s[11],
            e = t.MJ(t.MB(d[17]) + "" == "mini_tncs") ? (n = e += s[35],
            _i_("44d:47268744"),
            i = n += [s[61], t.F.entities(((t.MC(d[8]) || {}).terms || {}).terms_title), s[62]].join(""),
            _i_("44d:02bd2759"),
            i += s[63],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).reward)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).reward), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).minimum_spend)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).minimum_spend), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).expiration_date)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).expiration_date), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).platform)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).platform), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).extra)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).extra), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).maximum_reward)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).maximum_reward), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).payback)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).payback), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).payback_after_checkout)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).payback_after_checkout), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).terms_eight)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).terms_eight), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).terms_nine)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).terms_nine), s[67]].join("")),
            i += s[10],
            t.MJ(t.MG(((t.MC(d[8]) || {}).terms || {}).full_tncs_apply)) && (i += s[64],
            t.MK(t.MB(d[15])) && (i += s[65]),
            i += [s[66], t.F.entities(((t.MC(d[8]) || {}).terms || {}).full_tncs_apply), s[67]].join("")),
            i += s[68],
            n = _r_(i),
            n += s[69],
            t.MD(d[16]) ? (n += [s[70], t.F.entities((t.MC(d[6]) || {}).faq), s[71], t.F.entities(((t.MC(d[8]) || {}).terms || {}).item_faq), s[72], t.F.entities((t.MC(d[6]) || {}).terms), s[71], t.F.entities(((t.MC(d[8]) || {}).terms || {}).item_terms), s[73]].join(""),
            t.MD(d[13]) ? n += s[74] : n += [s[45], t.F.entities(t.MC(d[4])), s[75]].join(""),
            n += s[76],
            t.MK(t.MB(d[4])) && (n += s[27]),
            n += [s[77], t.F.entities((t.MC(d[8]) || {}).copy_cta), s[78]].join("")) : n += [s[79], t.F.entities((t.MC(d[6]) || {}).terms), s[71], t.F.entities(((t.MC(d[8]) || {}).terms || {}).item_terms), s[80], t.F.entities(((t.MC(d[8]) || {}).terms || {}).main_cta), s[81]].join(""),
            n += s[82],
            _r_(n)) : function(e) {
                if (_i_("44d:47832d84"),
                e += s[83],
                t.MD(d[15]) ? e += s[84] : e += s[85],
                e += s[86],
                t.MD(d[18]) && (e += [s[87], (_.unshift({
                    class: s[57],
                    name: s[88],
                    width: s[59]
                }),
                o = t.HELPER("icon", _[0]),
                _.shift(),
                o), s[89], t.F.entities((t.MC(d[8]) || {}).employee), s[90]].join("")),
                e += [s[91], t.F.entities((t.MC(d[8]) || {}).more_info_title), s[92], t.F.entities((t.MC(d[8]) || {}).more_info_subtitle), s[93]].join(""),
                t.MD(d[19])) {
                    e += s[94];
                    var n = (t.MC(d[8]) || {}).more_info_list || [];
                    _.unshift({
                        item_list: null
                    });
                    for (var i, r = 1, a = n.length; r <= a; r++)
                        _[0].item_list = i = n[r - 1],
                        e += [s[95], t.F.entities(i), s[96]].join("");
                    _.shift(),
                    e += s[97]
                }
                return e += s[10],
                t.MJ(t.MG((t.MC(d[8]) || {}).more_info_fineprint)) || (e += [s[98], t.F.entities((t.MC(d[6]) || {}).terms), s[99], t.F.entities((t.MC(d[8]) || {}).more_info_terms), s[100]].join("")),
                e += s[101],
                t.MD(d[20]) ? (e += s[102],
                t.MD(d[13]) ? e += s[74] : e += [s[45], t.F.entities(t.MC(d[4])), s[75]].join(""),
                e += s[76],
                t.MK(t.MB(d[4])) && (e += s[27]),
                e += [s[77], t.F.entities((t.MC(d[8]) || {}).copy_cta), s[103]].join("")) : e += [s[104], t.F.entities((t.MC(d[8]) || {}).more_info_inner_cta), s[103]].join(""),
                e += s[105],
                t.MJ(t.MG((t.MC(d[8]) || {}).more_info_fineprint)) && (e += [s[106], t.F.entities((t.MC(d[8]) || {}).more_info_fineprint), s[107], t.F.entities((t.MC(d[6]) || {}).terms), s[99], t.F.entities((t.MC(d[8]) || {}).more_info_terms), s[108]].join("")),
                e += s[109],
                _r_(e)
            }(e += s[35]),
            e += s[11],
            e += s[17]),
            e += s[110]),
            e += s[111],
            r = _r_(e),
            _r_(r)
        })
    }());
    var d = "XdKYEaEVTNeNcJHDUGTOTVMYCBOSVUIRe"
      , l = r.translations
      , c = a.b_secure_domain || a.b_secure_hostname
      , u = a.fe_rewards_promo_banner_copy_more_info_steps_list || [].concat(a.fe_rewards_promo_banner_copy_more_info_first_step, a.fe_rewards_promo_banner_copy_more_info_second_step, a.fe_rewards_promo_banner_copy_more_info_third_step).filter(function(e) {
        return _i_("44d:6eb3f6e9"),
        _r_(0 != e)
    })
      , p = {
        is_banner_closed: a.fe_is_rewards_promo_banner_dismissed && "0" !== a.fe_is_rewards_promo_banner_dismissed,
        is_mdot_bleed_enabled: a.fe_rewards_promo_banner_feature_mdot_bleed && "0" !== a.fe_rewards_promo_banner_feature_mdot_bleed,
        action_type: a.b_action,
        is_inline_reward_token: a.fe_rewards_promo_banner_feature_inline_reward_code && "0" !== a.fe_rewards_promo_banner_feature_inline_reward_code,
        is_reward_token_copy_enabled: a.fe_rewards_promo_banner_feature_show_copy_cta && "0" !== a.fe_rewards_promo_banner_feature_show_copy_cta,
        reward_token: a.fe_reward_token,
        is_modal_enabled: a.fe_rewards_promo_banner_feature_modal && "0" !== a.fe_rewards_promo_banner_feature_modal,
        should_modal_auto_open: a.fe_rewards_promo_banner_feature_modal_auto_open && "0" !== a.fe_rewards_promo_banner_feature_modal_auto_open && a.fe_is_rewards_promo_banner_modal_not_dismissed && "0" !== a.fe_is_rewards_promo_banner_modal_not_dismissed,
        url: {
            image: a.fe_rewards_promo_banner_feature_image,
            cta: a.fe_rewards_promo_banner_feature_cta_url,
            faq: a.b_nonsecure_hostname + "/content/incentives-faq" + a.b_query_params_with_lang,
            terms: a.b_nonsecure_hostname + "/content/referral-terms" + a.b_query_params_with_lang + a.b_query_params_delimiter + "is_incentive=1"
        },
        copy: {
            title: a.fe_rewards_promo_banner_copy_title,
            subtitle: a.fe_rewards_promo_banner_copy_subtitle,
            more_info_cta: a.fe_rewards_promo_banner_copy_more_info_cta || l("convert_incentives_index_card_more_info_cta"),
            reward_token_loading: l("incentives_engage_reward_banner_loading"),
            copy_cta: a.fe_rewards_promo_banner_copy_cta || l("convert_incentives_index_card_copy_cta"),
            copy_cta_done: a.fe_rewards_promo_banner_copy_cta_done || l("convert_incentives_index_card_copy_cta_copied"),
            copy_link: a.fe_rewards_promo_banner_copy_cta,
            employee: l("incentives_emk_employee_banner_text"),
            more_info_title: a.fe_rewards_promo_banner_copy_more_info_title,
            more_info_subtitle: a.fe_rewards_promo_banner_copy_more_info_subtitle,
            more_info_fineprint: a.fe_rewards_promo_banner_copy_more_info_fineprint,
            more_info_terms: l("convert_incentives_index_card_more_information_tcs"),
            more_info_list: u,
            more_info_inner_cta: l("convert_incentives_index_card_more_information_ok_cta"),
            more_info_open: l("rewards_a11y_promo_code_more_details_open"),
            banner_close: l("a11y_cta_close"),
            terms: {
                terms_title: a.fe_rewards_promo_banner_copy_terms_title || l("reward_mini_tcs_title"),
                reward: a.fe_rewards_promo_banner_copy_reward,
                minimum_spend: a.fe_rewards_promo_banner_copy_minimum_spend,
                expiration_date: a.fe_rewards_promo_banner_copy_expiration_date,
                platform: a.fe_rewards_promo_banner_copy_platform,
                maximum_reward: a.fe_rewards_promo_banner_copy_maximum_reward,
                payback: a.fe_rewards_promo_banner_copy_payback,
                payback_after_checkout: a.fe_rewards_promo_banner_copy_payback_after_checkout,
                terms_eight: a.fe_rewards_promo_banner_copy_terms_eight,
                terms_nine: a.fe_rewards_promo_banner_copy_terms_nine,
                item_faq: a.fe_rewards_promo_banner_copy_terms_faq,
                item_terms: a.fe_rewards_promo_banner_copy_terms_terms || l("reward_mini_tcs_fulltcs_cta_link"),
                full_tncs_apply: a.fe_rewards_promo_banner_copy_terms_full_tncs_apply || l("reward_mini_tcs_complete_tcs_link"),
                main_cta: a.fe_rewards_promo_banner_copy_terms_main_cta || l("incentives_engage_reward_modal_got_it_cta"),
                extra: a.fe_rewards_promo_banner_copy_terms_extra
            }
        },
        is_employee: a.fe_reward_is_for_employee,
        has_more_info_list: !!u.length,
        is_more_info_reward_token_visible: a.fe_rewards_promo_banner_feature_show_more_info_coupon && "0" !== a.fe_rewards_promo_banner_feature_show_more_info_coupon,
        is_token_just_copied: !1,
        is_token_loading: !1,
        is_mdot: "mdot" === a.b_site_type,
        is_cta_as_modal: a.fe_rewards_promo_banner_feature_cta_as_modal && "0" !== a.fe_rewards_promo_banner_feature_cta_as_modal,
        modal_type: a.fe_rewards_promo_banner_feature_modal_type,
        hide_more_info_banner_link: a.fe_rewards_promo_banner_feature_hide_more_info_banner_link,
        has_top_margin: "hotel" === a.fe_rewards_promo_banner_feature_placement && "mdot" === a.b_site_type,
        show_mini_tncs_coupon: a.fe_rewards_promo_banner_feature_show_mini_tncs_coupon,
        is_async_coupon_code: !!a.fe_rewards_promo_banner_feature_async_coupon_code,
        has_ajax_failed: !1,
        has_ajax_elapsed_max_time: !1,
        promo_code_placeholder: a.fe_rewards_promo_banner_feature_promo_code_placeholder,
        is_k2_variant: a.fe_rewards_promo_banner_feature_show_k2_banner_variant
    };
    n.exports = i.extend({
        initialState: p,
        template: "banner",
        initialize: function() {
            _i_("44d:fa36e32a");
            var e = this.getState()
              , n = window.BUI
              , i = this;
            this.timeoutID = null;
            var _ = e.promo_code_placeholder;
            e.is_modal_enabled && (this.modal = n.createInstance("Modal", document.createElement("div"), {
                id: "rewards-banner-modal",
                onBeforeOpen: function() {
                    _i_("44d:61e8f3d7"),
                    this.modalEl.querySelector(".js-copy-modal") && this.modalEl.querySelector(".js-copy-modal").addEventListener("click", i.copyRewardToken.bind(i)),
                    "mini_tncs" === e.modal_type && t(this.modalEl).addClass("rewards-promo-banner__modal--close_reset"),
                    _r_()
                },
                onAfterClose: function() {
                    _i_("44d:609c9db4"),
                    this.modalEl.querySelector(".js-copy-modal") && this.modalEl.querySelector(".js-copy-modal").removeEventListener("click", i.copyRewardToken.bind(i)),
                    _r_()
                }
            }),
            this.modal && this.modal.mount()),
            this.toast = n.createInstance("Toast", null),
            this.toast && this.toast.mount(),
            e.reward_token || e.is_token_loading ? this.modal && e.should_modal_auto_open && this.openModalOnAutoOpenAndDismiss() : (this.setState({
                is_token_loading: !0
            }),
            setTimeout(function(e) {
                _i_("44d:73b008bd"),
                e.setState({
                    has_ajax_elapsed_max_time: !0
                }),
                _r_()
            }, 5e3, this),
            t.ajax({
                url: c + "/incentives/get_active_token",
                method: "GET",
                context: this,
                success: function(n) {
                    _i_("44d:821e62a6");
                    var e = this.getState();
                    if (n.token) {
                        if (this.setState({
                            is_token_loading: !1,
                            reward_token: n.token
                        }),
                        e.is_inline_reward_token) {
                            var i = Object.assign({}, e.copy);
                            for (var r in i)
                                if ("string" == typeof i[r])
                                    -1 !== i[r].indexOf(_) && (i[r] = i[r].replace(_, "<b>" + n.token + "</b>"));
                                else if ("object" != typeof i[r] || Array.isArray(i[r])) {
                                    if (Array.isArray(i[r])) {
                                        var a = i[r].map(function(e) {
                                            return _i_("44d:1c3c4bba"),
                                            -1 !== e.indexOf(_) && (e = e.replace(_, "<b>" + n.token + "</b>")),
                                            _r_(e)
                                        });
                                        i[r] = a
                                    }
                                } else
                                    Object.keys(i[r]).forEach(function(e) {
                                        _i_("44d:e315610f"),
                                        -1 !== i[r][e].indexOf(_) && (i[r][e] = i[r][e].replace(_, "<b>" + n.token + "</b>")),
                                        _r_()
                                    });
                            this.setState({
                                copy: i
                            })
                        }
                        this.modal && e.should_modal_auto_open && this.openModalOnAutoOpenAndDismiss(),
                        e.has_ajax_elapsed_max_time ? !e.is_mdot && o.customGoal(d, 4) : !e.is_mdot && o.customGoal(d, 3),
                        s.trigger("rewards:async_coupon_code_retrieved", {
                            reward_token: n.token
                        })
                    } else
                        this.setState({
                            has_ajax_failed: !0
                        });
                    _r_()
                },
                error: function() {
                    _i_("44d:1daca2e8");
                    var e = this.getState();
                    this.setState({
                        has_ajax_failed: !0
                    }),
                    e.has_ajax_elapsed_max_time ? !e.is_mdot && o.customGoal(d, 2) : !e.is_mdot && o.customGoal(d, 1),
                    _r_()
                },
                xhrFields: {
                    withCredentials: !0
                }
            })),
            _r_()
        },
        openModalOnAutoOpenAndDismiss: function() {
            _i_("44d:41525307"),
            this.modal.open(),
            this.setState({
                should_modal_auto_open: !1
            }),
            _("rewards_promo_banner_modal_auto_open"),
            _r_()
        },
        openModal: function() {
            _i_("44d:9935ee27"),
            this.modal.open(),
            this.setState({
                should_modal_auto_open: !1
            }),
            _r_()
        },
        closeBanner: function() {
            _i_("44d:5064fc2e"),
            this.setState({
                is_banner_closed: !0
            }),
            _("rewards_promo_banner"),
            _r_()
        },
        copyRewardToken: function(e) {
            if (_i_("44d:55cd50961"),
            !this.timeoutID) {
                var n = this.getState();
                clearTimeout(this.timeoutID);
                var i = document.createElement("textarea");
                i.style.fontSize = "12pt",
                i.style.border = "0",
                i.style.padding = "0",
                i.style.margin = "0",
                i.style.position = "absolute",
                i.style[a.b_lang_rtl ? "right" : "left"] = "-9999px";
                var r = window.pageYOffset || document.documentElement.scrollTop;
                i.style.top = r + "px",
                i.setAttribute("readonly", ""),
                i.value = n.reward_token,
                document.body.appendChild(i),
                i.select(),
                i.setSelectionRange(0, i.value.length),
                document.execCommand("copy") && this.toast.show({
                    text: n.copy.copy_cta_done
                }),
                document.body.removeChild(i),
                i = null
            }
            _r_()
        }
    }),
    _r_()
}),
B.when({}).run(function(e) {
    _i_("44d:c80ae3cc");
    var n = e("et");
    "www" === B.env.b_site_type && "hotel" === B.env.b_action && n.stage("XdKYEaEVTNeNcJHDUGTOTVMYCBOSVUIRe", 2),
    _r_()
}),
B.define("component/rewards-ui/promo-code-storage", function(e, n, i) {
    var r;
    _i_("44d:33ee5288");
    try {
        (r = window.localStorage).setItem("_t", "_"),
        r.removeItem("_t")
    } catch (e) {
        r = null
    }
    var a = "rewardCouponCode";
    i.exports = {
        setCoupon: function(e) {
            _i_("44d:06d72f22"),
            r && r.setItem(a, e),
            _r_()
        },
        getCoupon: function() {
            return _i_("44d:15e5148b"),
            _r_(r ? r.getItem(a) : null)
        },
        removeCoupon: function() {
            _i_("44d:ad56fcbe"),
            r && r.removeItem(a),
            _r_()
        }
    },
    _r_()
}),
B.define("component/rewards-ui-redux/promo-code-actions", ["exports", "module", "jquery", "component/rewards-ui-redux/promo-code-reducer", "server-data", "jstmpl", "component/rewards-ui/promo-code-storage", "campaign-discounts", "et"], function(e, n, t, i, o, r, s, d, a) {
    _i_("44d:262f110f");
    var l = o.b_secure_domain || o.b_secure_hostname;
    n.exports = {
        REMOVE_STORED_REWARD: "REMOVE_STORED_REWARD",
        SET_COUPON_CODE: "SET_COUPON_CODE",
        REQUEST_REWARD_ACTIVATION: "REQUEST_REWARD_ACTIVATION",
        RESPONSE_REWARD_ACTIVATION_FAIL: "RESPONSE_REWARD_ACTIVATION_FAIL",
        RESPONSE_REWARD_ACTIVATION_SUCCESS: "RESPONSE_REWARD_ACTIVATION_SUCCESS",
        REQUEST_REWARD_REMOVAL: "REQUEST_REWARD_REMOVAL",
        RESPONSE_REWARD_REMOVAL_SUCCESS: "RESPONSE_REWARD_REMOVAL_SUCCESS",
        RESPONSE_REWARD_REMOVAL_FAIL: "RESPONSE_REWARD_REMOVAL_FAIL",
        TOGGLE_FORM_VISIBILITY: "TOGGLE_FORM_VISIBILITY",
        RETRIEVE_STORED_REWARD_CODE: "RETRIEVE_STORED_REWARD_CODE",
        TOGGLE_ACCORDION_VISIBILITY: "TOGGLE_ACCORDION_VISIBILITY",
        RESPONSE_REWARD_ACTIVATION_ALREADY_USED: "RESPONSE_REWARD_ACTIVATION_ALREADY_USED",
        resetCouponForm: function() {
            return _i_("44d:9c2fd7fb"),
            _r_({
                type: this.REMOVE_STORED_REWARD
            })
        },
        setCouponCode: function(e) {
            return _i_("44d:ef33ca72"),
            _r_({
                type: this.SET_COUPON_CODE,
                payload: e
            })
        },
        fetchingActiveReward: function() {
            return _i_("44d:b4d58d01"),
            _r_({
                type: this.REQUEST_REWARD_ACTIVATION
            })
        },
        fetchingRewardRemoval: function() {
            return _i_("44d:e0e49b4b"),
            _r_({
                type: this.REQUEST_REWARD_REMOVAL
            })
        },
        handleRewardError: function(e) {
            return _i_("44d:373728b0"),
            _r_({
                type: this.RESPONSE_REWARD_ACTIVATION_FAIL,
                payload: e
            })
        },
        handleRewardAlreadyUsed: function() {
            return _i_("44d:71f2beeb"),
            _r_({
                type: this.RESPONSE_REWARD_ACTIVATION_ALREADY_USED
            })
        },
        handleRewardSuccess: function(e, n) {
            return _i_("44d:7ea87806"),
            _r_({
                type: this.RESPONSE_REWARD_ACTIVATION_SUCCESS,
                payload: {
                    reward: e,
                    reward_code: n
                }
            })
        },
        handleRemoveRewardSuccess: function() {
            return _i_("44d:594f068f"),
            _r_({
                type: this.RESPONSE_REWARD_REMOVAL_SUCCESS
            })
        },
        handleRemoveRewardFail: function() {
            return _i_("44d:2f8c6325"),
            _r_({
                type: this.RESPONSE_REWARD_REMOVAL_FAIL
            })
        },
        toggleFormVisibility: function(e) {
            return _i_("44d:41042448"),
            _r_({
                type: this.TOGGLE_FORM_VISIBILITY
            })
        },
        handleRetrieveStoredReward: function(e) {
            return _i_("44d:5367d9ee"),
            _r_({
                type: this.RETRIEVE_STORED_REWARD_CODE,
                payload: e
            })
        },
        toggleAccordionVisibility: function() {
            return _i_("44d:7cdd0ca1"),
            _r_({
                type: this.TOGGLE_ACCORDION_VISIBILITY
            })
        },
        getStoredRewardCode: function() {
            return _i_("44d:381b7460"),
            _r_(function(i) {
                _i_("44d:b13d80ae");
                var e = this._hasStoredIncentives();
                if (i(this.handleRetrieveStoredReward(e)),
                e)
                    i(this.requestActiveReward(e, !0));
                else if (o.fe_incentives_coupon_code_auto_apply && "0" !== o.fe_incentives_coupon_code_auto_apply)
                    t.ajax({
                        url: l + "/incentives/get_active_token",
                        method: "GET",
                        context: this,
                        success: function(e) {
                            _i_("44d:48e82f82"),
                            e.token && i(this.requestActiveReward(e.token, !0)),
                            _r_()
                        },
                        error: function() {},
                        xhrFields: {
                            withCredentials: !0
                        }
                    });
                else if (o.fe_feature_running_REWARDS_CORE_AUTO_APPLY_COUPON_WWW) {
                    var n, r = d.getInstance();
                    n = r ? r.get_user_total_discount() : 0,
                    t.ajax({
                        url: l + "/reward/auto_apply_coupon",
                        method: "POST",
                        context: this,
                        data: {
                            booker_email: o.fe_email_for_coupons,
                            total_price_amount: Number(o.fe_current_value_for_coupons) - Number(n || 0),
                            total_price_currency: o.fe_user_currency_code_for_coupons,
                            checkin_date: o.b_checkin_date_ymd,
                            checkout_date: o.b_checkout_date_ymd,
                            hotel_id: o.fe_hotel_id,
                            accommodation_type_id: o.b_accommodationtype_id,
                            accommodation_cc: o.b_hotel_cc1,
                            languagecode: o.fe_user_language_for_coupons
                        },
                        success: function(e) {
                            if (_i_("44d:3789d197"),
                            !e.auto_applicable_coupon_found)
                                return _r_();
                            var n = e.coupon_code;
                            i(this.handleRewardSuccess(e, n)),
                            _r_()
                        },
                        error: function() {},
                        xhrFields: {
                            withCredentials: !0
                        }
                    })
                }
                _r_()
            }
            .bind(this))
        },
        requestActiveReward: function(r, a, _) {
            return _i_("44d:88719471"),
            _r_(function(i) {
                if (_i_("44d:ff293463"),
                i(this.fetchingActiveReward()),
                !_) {
                    var e = d.getInstance();
                    _ = e ? e.get_user_total_discount() : void 0
                }
                var n = o.b_hotel_doesnt_need_cc_data && document.querySelector("#email") && document.querySelector("#email").value;
                if (0 == r.length)
                    return i(this.handleRewardError(this._errorMessage("E_NO_INCENTIVE_LINK"))),
                    _r_();
                if (r === s.getCoupon() && !a)
                    return 1 < o.fe_new_coupon_layout ? i(this.handleRewardAlreadyUsed()) : i(this.handleRewardError(this._errorMessage("E_ALREADY_REDEEMED"))),
                    _r_();
                if (o.b_hotel_doesnt_need_cc_data && !o.fe_email_for_coupons && !n)
                    return i(this.handleRewardError(this._errorMessage("E_EMAIL_MISSING"))),
                    _r_();
                t.ajax({
                    url: l + "/reward/validate_coupon",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(this._createValidateCouponData(r, n, _)),
                    context: this,
                    success: function(e) {
                        if (_i_("44d:861df602"),
                        e.valid)
                            i(this.handleRewardSuccess(e, r));
                        else if (a)
                            i(this.resetCouponForm());
                        else {
                            var n = 0 < e.error_messages.length ? e.error_messages : this._errorMessage("E_UNKNOWN_ERROR");
                            i(this.handleRewardError(n))
                        }
                        _r_()
                    },
                    error: function(e) {
                        _i_("44d:498734e4"),
                        i(this.handleRewardError(this._errorMessage("E_UNKNOWN_ERROR"))),
                        _r_()
                    },
                    xhrFields: {
                        withCredentials: !0
                    }
                }),
                _r_()
            }
            .bind(this))
        },
        requestRemoveReward: function() {
            return _i_("44d:b40aef9d"),
            _r_(function(n) {
                _i_("44d:00a5d7e2"),
                n(this.fetchingRewardRemoval()),
                t.ajax({
                    url: l + "/incentives/clear_active",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({}),
                    context: this,
                    success: function(e) {
                        _i_("44d:34f4b018"),
                        n(this.handleRemoveRewardSuccess()),
                        _r_()
                    },
                    error: function(e) {
                        _i_("44d:5c36c1c6"),
                        n(this.handleRemoveRewardFail()),
                        _r_()
                    },
                    xhrFields: {
                        withCredentials: !0
                    }
                }),
                _r_()
            }
            .bind(this))
        },
        _createValidateCouponData: function(e, n, i) {
            return _i_("44d:d85cec00"),
            _r_({
                user_id: o.b_reg_user_id,
                booker_email: o.fe_email_for_coupons || n,
                user_language_code: o.fe_user_language_for_coupons,
                checkin_date: o.b_checkin_date_ymd,
                checkout_date: o.b_checkout_date_ymd,
                hotel_id: o.b_hotel_id,
                accommodation_type_id: o.b_accommodationtype_id,
                accommodation_cc: o.b_hotel_cc1,
                total_price: {
                    amount: i ? Number(o.fe_current_value_for_coupons - i) : Number(o.fe_current_value_for_coupons),
                    currency: o.fe_user_currency_code_for_coupons
                },
                coupon_code: e
            })
        },
        _hasStoredIncentives: function() {
            _i_("44d:85cc2f54");
            var e = o.fe_incentives_coupon_code_auto_apply && "0" !== o.fe_incentives_coupon_code_auto_apply ? o.fe_incentives_coupon_code : ""
              , n = s.getCoupon() || "";
            return _r_(e || n)
        },
        _errorMessage: function(e) {
            _i_("44d:0fe3cf2a");
            var n = [];
            return n.push(r("error_msgs").render({
                reward_error: e
            })),
            _r_(n)
        }
    },
    _r_()
}),
B.define("component/rewards-ui-redux/promo-code-base", ["exports", "module", "component/reactive", "component/rewards-ui-redux/promo-code-templates", "component/rewards-ui-redux/promo-code-reducer", "component/rewards-ui-redux/promo-code-actions", "component/rewards-ui-redux/promo-code-selectors", "jstmpl", "server-data", "jquery", "et", "events"], function(e, n, i, r, a, _, t, o, s, d, l, c) {
    _i_("44d:d4f3c49d"),
    n.exports = i.extend({
        store: a,
        initialState: a.getState(),
        template: "promo_card_block",
        initialize: function() {
            _i_("44d:e9de9371"),
            this.BUI = window.BUI || null,
            this.modal = this.BUI && this.BUI.createInstance("Modal", document.createElement("div"), {
                id: "rewards-modal-error"
            }),
            this.modalIsMounted = !1,
            this.store.subscribe(this._initComponent.bind(this)),
            this.store.dispatch(_.getStoredRewardCode()),
            this.setState({
                mdot_static_container: s.b_user_has_valid_incentive
            }),
            c.on("campaign::discounts::changed", this.handleDiscountChange.bind(this)),
            _r_()
        },
        handleInputChange: function(e) {
            _i_("44d:b77e65f6"),
            this.store.dispatch(_.setCouponCode(e.target.value)),
            _r_()
        },
        handleInputKeydown: function(e) {
            _i_("44d:39745870"),
            13 === e.keyCode && (e.preventDefault(),
            this.store.dispatch(_.requestActiveReward(this.store.getState().ui.coupon_code))),
            _r_()
        },
        handleSubmitButton: function() {
            _i_("44d:aa03631b"),
            this.store.dispatch(_.requestActiveReward(this.store.getState().ui.coupon_code)),
            _r_()
        },
        handleRemoveCard: function(e) {
            _i_("44d:78fb07ea"),
            e.preventDefault(),
            this.store.dispatch(_.requestRemoveReward()),
            _r_()
        },
        toggleFormVisibility: function(e) {
            _i_("44d:636a4812"),
            e.preventDefault(),
            this.store.dispatch(_.toggleFormVisibility(this.store.getState().ui.isFormHidden)),
            _r_()
        },
        toggleAccordionVisibility: function(e) {
            _i_("44d:f85728e9"),
            e.preventDefault(),
            this.store.dispatch(_.toggleAccordionVisibility()),
            _r_()
        },
        handleDiscountChange: function(e) {
            _i_("44d:0e76f513"),
            (this.store.getState().reward.reward_code || this.store.getState().ui.coupon_code) && this.store.dispatch(_.requestActiveReward(this.store.getState().reward.reward_code, !0, e.user_total_discount)),
            _r_()
        },
        _initComponent: function() {
            _i_("44d:cb674b4e");
            var e = this.store.getState();
            t.hasValidReward(e) && this.BUI && this.BUI.initComponents && window.BUI.initComponents(this.el.querySelector(".js-promo-code-card")),
            t.shouldOpenNonEligibleModal(e) && !this.modalIsMounted ? (this.modalIsMounted = !0,
            this.modal.mount(),
            this.modal.updateContent(o("error_modal").render({
                store: e
            })),
            this.modal.open()) : !t.shouldOpenNonEligibleModal(e) && this.modalIsMounted && (this.modalIsMounted = !1,
            this.modal.unmount()),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/rewards-ui-redux/promo-code-reducer", ["exports", "module", "redux", "component/rewards-ui-redux/promo-code-actions", "component/rewards-ui-redux/promo-code-reducer-middlewares", "redux-thunk", "jstmpl", "server-data"], function(e, n, i, r, a, _, t, o) {
    _i_("44d:04e93c22");
    var s = t.translations
      , d = {
        reward: {
            reward_code: "",
            promotion: ""
        },
        ui: {
            isLoading: !1,
            isFormHidden: !1,
            isMdotAccordionOpen: !1,
            coupon_code: "",
            isCouponNewLayout: 1 === o.fe_new_coupon_layout || 3 === o.fe_new_coupon_layout,
            showFeedbackMsg: !1,
            copy: {
                block_title_no_reward: s("desktop_bs3_do_you_have_a_promo_code"),
                block_title_with_reward: s("rewards_bs3_active_promotion_block_headline"),
                mdot_block_title_no_reward: s("rewards_promo_code_bs3_add_promo_code"),
                mdot_block_title_with_reward: s("rewards_bs3_active_promotion_block_headline"),
                mdot_accordion_aria_label: s("rewards_a11y_promo_code_input_accordion_expand"),
                form_code_replace: s("rewards_bs3_active_promotion_block_add_promo_code_cta"),
                form_warning_message: s("rewards_bs3_promo_code_field_replacing_promotion"),
                form_label: s("rewards_bs3_enter_your_promo_code"),
                form_label_new_placement_statement: s("rewards_bs3_promo_code_field_subtext_you_received"),
                form_label_new_placement_question: s("rewards_bs3_promo_code_field_subtext_we_sent_you"),
                form_apply_coupon: s("growth_marketing_fake_promo_code_cta"),
                form_error_invalid: s("www_promo_code_bs3_error_invalid"),
                form_error_already_used: s("www_promo_code_bs3_error_already_used"),
                form_error_unknown: s("www_promo_code_bs3_error_unknown"),
                form_error_email_first: s("rewards_redeem_enter_email_first_error"),
                form_coupon_already_used_no_error: s("rewards_bs3_aob_addcode_samecode_alreadyapplied")
            }
        },
        error: {
            hasErrors: !1,
            errorMsg: []
        }
    }
      , l = ["REWARD_TYPE_CASHBACK", "REWARD_TYPE_VIRTUAL_CREDIT", "REWARD_TYPE_CASHOUT", "REWARD_TYPE_NON_MONETARY", "REWARD_TYPE_INSTANT_DISCOUNT", "REWARD_TYPE_REDEEMABLE_COUPON", "REWARD_TYPE_VOUCHER"];
    var c = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: "incentive_coupons/store"
    }) || i.compose;
    n.exports = i.createStore(i.combineReducers({
        reward: function(e, n) {
            switch (_i_("44d:34151bc4"),
            e = e || d.reward,
            n.type) {
            case r.RESPONSE_REWARD_REMOVAL_FAIL:
            case r.RESPONSE_REWARD_REMOVAL_SUCCESS:
                return _r_(d.reward);
            case r.RESPONSE_REWARD_ACTIVATION_SUCCESS:
                return _r_(Object.assign({}, e, {
                    reward_code: n.payload.reward_code,
                    promotion: n.payload.reward.promotion,
                    hasValidReward: !!n.payload.reward.valid,
                    isEligible: !!n.payload.reward.eligible,
                    formatted_expiry_date: n.payload.reward.formatted_expiry_date,
                    copy: {
                        title: n.payload.reward.reward_details.rewards[0].title,
                        message: n.payload.reward.reward_details.rewards[0].text,
                        conditions: n.payload.reward.conditions,
                        non_eligible: n.payload.reward.error_messages,
                        conditions_coupon_value: s("rewards_bs3_aob_points_codeapplied", null, {
                            reward_code: n.payload.reward_code
                        }),
                        conditions_coupon_with_expiration_date: s("rewards_bs3_active_promo_block_book_before", null, {
                            promise_expiry: n.payload.reward.formatted_expiry_date
                        }),
                        conditions_coupon_no_expiration_date: s("incentives_coupon_card_no_expiration"),
                        conditions_reward_type_cashback: s("www_promo_code_bs3_card_condition_type_wc"),
                        conditions_reward_type_virtual_credit: s("www_promo_code_bs3_card_condition_type_wc"),
                        conditions_reward_type_cashout: s("www_promo_code_bs3_card_condition_type_cc"),
                        cta_more_info: s("www_promo_code_bs3_card_cta_more_info"),
                        cta_remove_coupon: s("rewards_bs3_active_promotion_block_remove_cta"),
                        mdot_modal_close_aria_label: s("rewards_a11y_promo_code_more_details_open"),
                        terms_title: s("rewards_code_redeem_more_details"),
                        terms_cta_terms: s("rewards_more_details_ts_and_cs"),
                        terms_cta_faq: s("rewards_more_details_faq"),
                        terms_cta_close: s("rewards_more_details_close_cta")
                    },
                    image: n.payload.reward.reward_details.rewards[0].image_url,
                    icon: n.payload.reward.reward_details.rewards[0].icon_name,
                    url: {
                        faq: n.payload.reward.reward_details.rewards[0].faq_url,
                        terms: n.payload.reward.reward_details.rewards[0].terms_url
                    },
                    reward_type: l[n.payload.reward.reward_details.rewards[0].reward_type - 1],
                    campaign_tag: n.payload.reward.campaign_details.tag
                }));
            default:
                return _r_(e)
            }
            _r_()
        },
        ui: function(e, n) {
            switch (_i_("44d:b2825a30"),
            e = e || d.ui,
            n.type) {
            case r.REMOVE_STORED_REWARD:
                return _r_(d.ui);
            case r.SET_COUPON_CODE:
                return _r_(Object.assign({}, e, {
                    coupon_code: n.payload,
                    showFeedbackMsg: !1
                }));
            case r.TOGGLE_FORM_VISIBILITY:
                return _r_(Object.assign({}, e, {
                    isFormHidden: !e.isFormHidden
                }));
            case r.REQUEST_REWARD_REMOVAL:
                return _r_(Object.assign({}, e, {
                    isLoading: !0
                }));
            case r.RESPONSE_REWARD_REMOVAL_FAIL:
            case r.RESPONSE_REWARD_REMOVAL_SUCCESS:
                return _r_(Object.assign({}, e, {
                    isLoading: !1,
                    isFormHidden: !1,
                    showFeedbackMsg: !1,
                    coupon_code: ""
                }));
            case r.REQUEST_REWARD_ACTIVATION:
                return _r_(Object.assign({}, e, {
                    isLoading: !0
                }));
            case r.RESPONSE_REWARD_ACTIVATION_FAIL:
                return _r_(Object.assign({}, e, {
                    isLoading: !1
                }));
            case r.RESPONSE_REWARD_ACTIVATION_SUCCESS:
                return _r_(Object.assign({}, e, {
                    isLoading: !1,
                    isFormHidden: !0,
                    isMdotAccordionOpen: o.fe_mdot_accordion_open_on_reward,
                    coupon_code: ""
                }));
            case r.RETRIEVE_STORED_REWARD_CODE:
                return _r_(Object.assign({}, e, {
                    coupon_code: n.payload
                }));
            case r.TOGGLE_ACCORDION_VISIBILITY:
                return _r_(Object.assign({}, e, {
                    isMdotAccordionOpen: !e.isMdotAccordionOpen
                }));
            case r.RESPONSE_REWARD_ACTIVATION_ALREADY_USED:
                return _r_(Object.assign({}, e, {
                    isLoading: !1,
                    showFeedbackMsg: !0
                }));
            default:
                return _r_(e)
            }
            _r_()
        },
        error: function(e, n) {
            switch (_i_("44d:f65df34c"),
            e = e || d.error,
            n.type) {
            case r.REMOVE_STORED_REWARD:
            case r.SET_COUPON_CODE:
                return _r_(d.error);
            case r.RESPONSE_REWARD_REMOVAL_FAIL:
            case r.RESPONSE_REWARD_REMOVAL_SUCCESS:
                return _r_(d.error);
            case r.RESPONSE_REWARD_ACTIVATION_FAIL:
                return _r_(Object.assign({}, e, {
                    hasErrors: !!n.payload.length,
                    errorMsg: n.payload
                }));
            case r.RESPONSE_REWARD_ACTIVATION_SUCCESS:
                return _r_(d.error);
            default:
                return _r_(e)
            }
            _r_()
        }
    }), d, c(i.applyMiddleware(_.default || _, a.etTrackingMiddleware, a.storageMiddleware, a.sideEffectsMiddleware))),
    _r_()
}),
B.define("component/rewards-ui-redux/promo-code-templates", function() {
    _i_("44d:37646a75"),
    booking.jstmpl("promo_card_block", function() {
        _i_("44d:c2bddbad");
        var s, d = ['<div class="bui-card bp-card--promo-code active_offer_block ', " ", " aob-offer-is-active", '">\n    <div class="bui-card__content">\n        <header class="bui-card__header">\n            <h2 class="bui-card__title">\n                ', "\n                    ", "\n                ", '\n            </h2>\n        </header>\n        <div class="bui-card__text">\n            ', '<div class="bui-banner bui-u-bleed@small bui-u-padding-bottom--4 js-aob--coupon" data-bui-component="Banner">\n    <input\n        type="hidden"\n        form="bookForm"\n        name="coupon_code"\n        value="', '"\n    />\n    <input\n        type="hidden"\n        form="bookForm"\n        name="promotion_code"\n        value="', '"\n    />\n    <input\n        type="hidden"\n        form="bookForm"\n        name="promotion_type"\n        value="', '"\n    />\n\n    ', '\n        <span class="bui-banner__icon">\n            ', "streamline/coupon_discount", "\n            ", "\n        </span>\n    ", '\n        <div class="bui-banner__image-container aob__image-container">\n            <img width="64" height="64" class="bui-banner__image" alt="" src="', '" />\n        </div>\n    ', '\n\n    <div class="bui-banner__content bui-u-margin-bottom--16">\n        ', '\n            <div class="bui-banner__title bui_font_strong">\n                ', "\n            </div>\n        ", "\n        ", '\n            <p class="bui-banner__text', " bui-u-margin-top--8", '">\n                ', "\n            </p>\n        ", '\n        <ul class="bui-list bui-list--text bui-list--icon bui-u-margin-top--8 bui-u-margin-bottom--8">\n            ', '\n                <li class="bui-list__item bui-u-margin-bottom--8">\n                    <span class="bui-list__icon" role="presentation">\n                        ', "small", '\n                    </span>\n                    <div class="bui-list__body">\n                        <div class="bui-list__description">\n                            ', '\n                        </div>\n                    </div>\n                </li>\n                <li class="bui-list__item bui-u-margin-bottom--8">\n                    <span class="bui-list__icon" role="presentation">\n                        ', "streamline/calendar", "\n                                ", "\n                            ", "\n                        </div>\n                    </div>\n                </li>\n            ", '\n                        </div>\n                    </div>\n                </li>\n                <li class="bui-list__item">\n                    <span class="bui-list__icon" role="presentation">\n                        ', "streamline/gift", '\n        </ul>\n        <div class="bui-group bui-group--inline aob-button-group-margin-adjust">\n            <div class="bui-group__item">\n                <button\n                    data-bui-component="Popover"\n                    data-popover-content-id="active_offer-terms"\n                    data-popover-position="top"\n                    tabindex="0"\n                    class="bui-button bui-button--tertiary js-aob--more-info-button"\n                    type="button"\n                >\n                    <span class="bui-button__text">', '</span>\n                </button>\n            </div>\n            <div class="bui-group__item">\n                <button on:click="handleRemoveCard" class="bui-button bui-button--tertiary js-aob--remove-button" type="button" ', "disabled", '>\n                    <span class="bui-button__text">', '</span>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div id="active_offer-terms" class="bui-card bui-u-hidden">\n        <div class="bui-card__content">\n            <header class="bui-card__header">\n                <h3 class="bui-card__title">', '</h3>\n            </header>\n            <ol class="bui-list bui-list--ordered bui-u-margin-top--8">\n                ', '\n                    <li class="bui-list__item">', "</li>\n                ", '\n            </ol>\n            <ul class="bui-list bui-list--text bui-u-margin-top--16">\n                <li class="bui-list__item">\n                    <a href="', '" class="bui-link bui-link--primary" target="_blank">\n                        ', '\n                    </a>\n                </li>\n                <li class="bui-list__item">\n                    <a href="', "\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n", '\n    <div class="bui-container bui-u-padding-top--8 bui-u-padding-bottom--8">\n        ', '\n            <div class="bui-alert bui-u-bleed@small bui-alert--inline bui-alert--error bui-u-margin-bottom--8" role="status">\n                <span class="bui-alert__icon">\n                    ', "streamline/warning", '\n                </span>\n                <div class="bui-alert__description">\n                    <p class="bui-alert__text">', "</p>\n                </div>\n            </div>\n        ", "\n    </div>\n", "\n", '\n                <hr class="bui-divider" />\n                <ul class="bui-accordion bui-u-bleed@small">\n                    <li class="bui-accordion__row', " bui-is-active", '">\n                        <button on:click="toggleFormVisibility" class="bui-accordion__row-inner js-aob--acordion-button" data-bui-ref="accordion-button" aria-controls="content-active_offer_block_form" aria-expanded="', '" type="button">\n                            <div class="bui-accordion__row-header">\n                                <p class="bui-accordion__subtitle">\n                                    ', '\n                                </p>\n                            </div>\n                            <span role="presentation" class="bui-accordion__icon-container">\n                                ', "bui-accordion__icon", "streamline/arrow_nav_down", "24", '\n                            </span>\n                        </button>\n                        <div id="content-active_offer_block_for" class="bui-accordion__content" role="region">\n                            ', '\n    <div class="bui-alert bui-u-bleed@small bui-alert--inline bui-alert--info bui-u-padding-bottom--16" role="status">\n        <span class="bui-alert__icon">\n            ', "", "streamline/info_sign", '\n        </span>\n        <div class="bui-alert__description">\n            <p class="bui-alert__text">', "</p>\n        </div>\n    </div>\n", '\n<div class="bui-form__group', " bui-has-error", '">\n    <label class="bui-form__label" for="coupon_code_input">\n        ', '\n    </label>\n    <div class="bui-input-text__content">\n        <div class="bui-input-text__field">\n            <input\n                type="text"\n                on:input="handleInputChange"\n                on:keydown="handleInputKeydown"\n                id="coupon_code_input"\n                class="bui-input-text__control js-aob--form-input"\n                autocomplete="false"\n                name="coupon_code_input"\n                form="bookForm"\n                value="', '"\n                ', 'aria-describedby="coupon_code-error"', '\n            />\n            <div class="bui-input-text__decorator"></div>\n            ', '\n                <div class="bui-input-text__side">\n                    <span class="bui-icon bui-icon--medium bui-icon--color-destructive" role="presentation">\n                        <svg viewBox="0 0 24 24" width="1em" height="1em" iconset="streamline" name="Warning" focusable="false" aria-hidden="true" role="img">\n                            <path d="M12 15.75A1.125 1.125 0 1 0 12 18a1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zm.75-2.25V5.25a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>\n                        </svg>\n                    </span>\n                </div>\n            ', '\n                <div class="bui-input-text__side">\n                    <span class="bui-icon bui-icon--medium bui-icon--color-constructive" role="presentation">\n                        <svg viewBox="0 0 128 128" width="1em" height="1em" iconset="streamline" name="CheckmarSelected" focusable="false" aria-hidden="true" role="img">\n                            <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>\n                        </svg>\n                    </span>\n                </div>\n            ', "\n        </div>\n    </div>\n    ", '\n            <div class="bui-form__error" id="coupon_code-error" role="alert">', "</div>\n        ", "\n    ", '\n         <div class="aob-form__feedback" role="alert">', "</div>\n    ", '\n</div>\n<button class="bui-button bui-button--secondary bui-u-margin-top--8  js-aob--form-submit', " bui-is-loading", '" type="button" on:click="handleSubmitButton" ', ' >\n    <div class="bui-button__loader" aria-busy="true" aria-live="polite">\n        <div class="bui-spinner bui-spinner--size-small">\n            <div class="bui-spinner__inner"></div>\n        </div>\n    </div>\n    <span class="bui-button__text">\n        ', "\n    </span>\n</button>\n", "\n                        </div>\n                    </li>\n                </ul>\n            ", "\n        </div>\n    </div>\n</div>"], l = ["fe_classnames_responsive_container", "store"];
        return _r_(function(t) {
            _i_("44d:cf0607ee");
            var e, n = "", o = this.fn;
            function i(e) {
                if (_i_("44d:7a0d59b2"),
                o.MJ(o.MC(l[1]).reward.hasValidReward) && o.MJ(o.MC(l[1]).ui.copy.form_warning_message) && (e += [d[64], (t.unshift({
                    class: d[65],
                    name: d[66],
                    width: d[62]
                }),
                s = o.HELPER("icon", t[0]),
                t.shift(),
                s), d[67], o.F.entities((((o.MC(l[1]) || {}).ui || {}).copy || {}).form_warning_message), d[68]].join("")),
                e += d[69],
                o.MJ(o.MG(((o.MC(l[1]) || {}).error || {}).hasErrors)) && (e += d[70]),
                e += [d[71], o.F.entities((((o.MC(l[1]) || {}).ui || {}).copy || {}).form_label), d[72], o.F.entities(((o.MC(l[1]) || {}).ui || {}).coupon_code), d[73]].join(""),
                o.MJ(o.MG(((o.MC(l[1]) || {}).ui || {}).isLoading)) && (e += d[38]),
                e += d[5],
                o.MJ(o.MG(((o.MC(l[1]) || {}).error || {}).hasErrors)) && (e += d[74]),
                e += d[75],
                o.MJ(o.MG(((o.MC(l[1]) || {}).error || {}).hasErrors)) ? e += d[76] : o.MJ(o.MG(((o.MC(l[1]) || {}).ui || {}).showFeedbackMsg)) && (e += d[77]),
                e += d[78],
                o.MJ(o.MG(((o.MC(l[1]) || {}).error || {}).hasErrors))) {
                    e += d[20];
                    var n = ((o.MC(l[1]) || {}).error || {}).errorMsg || [];
                    t.unshift({
                        error: null
                    });
                    for (var i, r = 1, a = n.length; r <= a; r++)
                        t[0].error = i = n[r - 1],
                        e += [d[79], o.F.html(i), d[80]].join("");
                    t.shift(),
                    e += d[81]
                } else
                    o.MJ(o.MG(((o.MC(l[1]) || {}).ui || {}).showFeedbackMsg)) && (e += [d[82], o.F.html((((o.MC(l[1]) || {}).ui || {}).copy || {}).form_coupon_already_used_no_error), d[83]].join(""));
                return e += d[84],
                o.MJ(o.MG(((o.MC(l[1]) || {}).ui || {}).isLoading)) && (e += d[85]),
                e += d[86],
                o.MJ(o.MG(((o.MC(l[1]) || {}).ui || {}).isLoading)) && (e += d[38]),
                e += [d[87], o.F.entities((((o.MC(l[1]) || {}).ui || {}).copy || {}).form_apply_coupon), d[88]].join(""),
                _r_(e)
            }
            return e = n,
            _i_("44d:b847db48"),
            e += [d[0], o.F.entities(o.MC(l[0])), d[1]].join(""),
            o.MJ(o.MG(((o.MC(l[1]) || {}).reward || {}).hasValidReward)) && (e += d[2]),
            e += d[3],
            o.MJ(o.MG(((o.MC(l[1]) || {}).reward || {}).hasValidReward)) ? e += [d[4], o.F.entities((((o.MC(l[1]) || {}).ui || {}).copy || {}).block_title_with_reward), d[5]].join("") : e += [d[4], o.F.entities((((o.MC(l[1]) || {}).ui || {}).copy || {}).block_title_no_reward), d[5]].join(""),
            e += d[6],
            o.MJ(o.MG(((o.MC(l[1]) || {}).reward || {}).hasValidReward)) ? (e = function(e) {
                _i_("44d:33fa5432"),
                e += [d[7], o.F.entities(((o.MC(l[1]) || {}).reward || {}).reward_code), d[8], o.F.entities((((o.MC(l[1]) || {}).reward || {}).promotion || {}).value), d[9], o.F.entities((((o.MC(l[1]) || {}).reward || {}).promotion || {}).type), d[10]].join(""),
                o.MJ(o.MC(l[1]).reward.icon + "" == "coupon_discount") ? (e += d[11],
                o.MJ(o.MG(((o.MC(l[1]) || {}).reward || {}).isEligible)) ? e += [d[5], (t.unshift({
                    color: "#FF8000",
                    name: d[12]
                }),
                s = o.HELPER("icon", t[0]),
                t.shift(),
                s), d[13]].join("") : e += [d[5], (t.unshift({
                    color: "#BDBDBD",
                    name: d[12]
                }),
                s = o.HELPER("icon", t[0]),
                t.shift(),
                s), d[13]].join(""),
                e += d[14]) : o.MJ(o.MG(((o.MC(l[1]) || {}).reward || {}).image)) ? e += [d[15], ((o.MC(l[1]) || {}).reward || {}).image, d[16]].join("") : (e += d[11],
                o.MJ(o.MG(((o.MC(l[1]) || {}).reward || {}).isEligible)) ? e += [d[5], (t.unshift({
                    color: "#FF8000",
                    name: d[12]
                }),
                s = o.HELPER("icon", t[0]),
                t.shift(),
                s), d[13]].join("") : e += [d[5], (t.unshift({
                    color: "#BDBDBD",
                    name: d[12]
                }),
                s = o.HELPER("icon", t[0]),
                t.shift(),
                s), d[13]].join(""),
                e += d[14]),
                e += d[17],
                o.MJ(o.MG((((o.MC(l[1]) || {}).reward || {}).copy || {}).title)) && (e += [d[18], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).title), d[19]].join("")),
                e += d[20],
                o.MJ(o.MG((((o.MC(l[1]) || {}).reward || {}).copy || {}).message)) && (e += d[21],
                o.MJ(o.MG((((o.MC(l[1]) || {}).reward || {}).copy || {}).title)) && (e += d[22]),
                e += [d[23], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).message), d[24]].join("")),
                e += d[25],
                o.MJ(o.MG(((o.MC(l[1]) || {}).ui || {}).isCouponNewLayout)) ? (e += [d[26], (t.unshift({
                    color: "#6B6B6B",
                    name: d[12],
                    size: d[27]
                }),
                s = o.HELPER("icon", t[0]),
                t.shift(),
                s), d[28], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).conditions_coupon_value), d[29], (t.unshift({
                    color: "#6B6B6B",
                    name: d[30],
                    size: d[27]
                }),
                s = o.HELPER("icon", t[0]),
                t.shift(),
                s), d[28]].join(""),
                o.MJ(o.MG(((o.MC(l[1]) || {}).reward || {}).formatted_expiry_date)) ? e += [d[31], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).conditions_coupon_with_expiration_date), d[32]].join("") : e += [d[31], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).conditions_coupon_no_expiration_date), d[32]].join("")) : (e += [d[26], (t.unshift({
                    color: "#6B6B6B",
                    name: d[30],
                    size: d[27]
                }),
                s = o.HELPER("icon", t[0]),
                t.shift(),
                s), d[28]].join(""),
                o.MJ(o.MG(((o.MC(l[1]) || {}).reward || {}).formatted_expiry_date)) ? e += [d[31], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).conditions_coupon_with_expiration_date), d[32]].join("") : e += [d[31], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).conditions_coupon_no_expiration_date), d[32]].join(""),
                e += [d[34], (t.unshift({
                    color: "#6B6B6B",
                    name: d[35],
                    size: d[27]
                }),
                s = o.HELPER("icon", t[0]),
                t.shift(),
                s), d[28]].join(""),
                o.MJ(o.MC(l[1]).reward.reward_type + "" == "REWARD_TYPE_CASHBACK") && (e += [d[31], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).conditions_reward_type_cashback), d[32]].join("")),
                e += d[32],
                o.MJ(o.MC(l[1]).reward.reward_type + "" == "REWARD_TYPE_VIRTUAL_CREDIT") && (e += [d[31], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).conditions_reward_type_virtual_credit), d[32]].join("")),
                e += d[32],
                o.MJ(o.MC(l[1]).reward.reward_type + "" == "REWARD_TYPE_CASHOUT") && (e += [d[31], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).conditions_reward_type_cashout), d[32]].join(""))),
                e += d[33],
                e += [d[36], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).cta_more_info), d[37]].join(""),
                o.MJ(o.MG(((o.MC(l[1]) || {}).ui || {}).isLoading)) && (e += d[38]),
                e += [d[39], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).cta_remove_coupon), d[40], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).terms_title), d[41]].join("");
                var n = (((o.MC(l[1]) || {}).reward || {}).copy || {}).conditions || [];
                t.unshift({
                    condition: null
                });
                for (var i, r = 1, a = n.length; r <= a; r++)
                    t[0].condition = i = n[r - 1],
                    e += [d[42], o.F.entities(i), d[43]].join("");
                if (t.shift(),
                e += [d[44], o.F.entities((((o.MC(l[1]) || {}).reward || {}).url || {}).terms), d[45], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).terms_cta_terms), d[46], o.F.entities((((o.MC(l[1]) || {}).reward || {}).url || {}).faq), d[45], o.F.entities((((o.MC(l[1]) || {}).reward || {}).copy || {}).terms_cta_faq), d[47]].join(""),
                !o.MJ(o.MG(((o.MC(l[1]) || {}).reward || {}).isEligible))) {
                    e += d[48];
                    var n = (((o.MC(l[1]) || {}).reward || {}).copy || {}).non_eligible || [];
                    t.unshift({
                        error: null
                    });
                    for (var _, r = 1, a = n.length; r <= a; r++)
                        t[0].error = _ = n[r - 1],
                        e += [d[49], (t.unshift({
                            name: d[50]
                        }),
                        s = o.HELPER("icon", t[0]),
                        t.shift(),
                        s), d[51], o.F.entities(_), d[52]].join("");
                    t.shift(),
                    e += d[53]
                }
                return e += d[54],
                _r_(e)
            }(e += d[5]),
            e += d[55],
            o.MJ(o.MG(((o.MC(l[1]) || {}).ui || {}).isFormHidden)) || (e += d[56]),
            e = i(e += [d[57], o.F.entities(o.MK(o.MC(l[1]).ui.isFormHidden)), d[58], o.F.entities((((o.MC(l[1]) || {}).ui || {}).copy || {}).form_code_replace), d[59], (t.unshift({
                class: d[60],
                name: d[61],
                width: d[62]
            }),
            s = o.HELPER("icon", t[0]),
            t.shift(),
            s), d[63]].join("")),
            e += d[89]) : (e = i(e += d[5]),
            e += d[13]),
            e += d[90],
            n = _r_(e),
            _r_(n)
        })
    }()),
    booking.jstmpl("error_msgs", function() {
        _i_("44d:ab293aa0");
        var a = ["/private/www_promo_code_bs3_error_invalid/name", "\n", "/private/www_promo_code_bs3_error_already_used/name", "/private/www_promo_code_bs3_error_unknown/name", "/private/rewards_redeem_enter_email_first_error/name"]
          , _ = ["reward_error"];
        return _r_(function(e) {
            _i_("44d:e1d7f70c");
            var n, i = "", r = this.fn;
            return n = i,
            _i_("44d:812d9dc3"),
            r.MJ(r.MB(_[0]) + "" == "E_NO_INCENTIVE_LINK") ? n += [r.ME(a[0], r.MB, r.MN, null), a[1]].join("") : r.MJ(r.MB(_[0]) + "" == "E_ALREADY_REDEEMED") ? n += [r.ME(a[2], r.MB, r.MN, null), a[1]].join("") : r.MJ(r.MB(_[0]) + "" == "E_UNKNOWN_ERROR") ? n += [r.ME(a[3], r.MB, r.MN, null), a[1]].join("") : r.MJ(r.MB(_[0]) + "" == "E_EMAIL_MISSING") && (n += [r.ME(a[4], r.MB, r.MN, null), a[1]].join("")),
            i = _r_(n),
            _r_(i)
        })
    }()),
    booking.jstmpl("error_modal", function() {
        _i_("44d:c5fd074b");
        var o, s = ['<div id="rewards-modal-error">\n    <div class="rewards-modal-error">\n        <header class="bui-modal__header rewards-modal-error__header">\n            <img class="rewards-modal__error-img" src="', '" alt=""/>\n        </header>\n        <div class="bui-modal__body bui-modal__body--primary rewards-modal-error__content">\n            <h3 class="rewards-modal-error__title">', "/private/rewards_book_again_bs3_modal_headline/name", '</h3>\n            <p class="rewards-modal-error__body">', "/private/rewards_book_again_bs3_modal_body/name", "</p>\n\n            ", '\n                <div class="bui-alert bui-alert--error bui-alert--inline rewards-modal-error__errors" role="status">\n                    <span class="icon--hint bui-alert__icon" role="presentation">\n                        ', "streamline/warning", "presentation", "24", '\n                    </span>\n                    <div class="bui-alert__description">\n                        <p class="bui-alert__text rewards-modal-error__error_message">', "</p>\n                    </div>\n                </div>\n            ", '\n\n        </div>\n        <footer class="bui-modal__footer">\n            <p class="rewards-modal-error__link"><a href="', '" target="_blank" class="bui-link">', "/private/rewards_book_again_bs3_modal_ts_cs/name", '</a></p>\n            <div class="bui-group bui-group--inline">\n                <button type="button" class="bui-button bui-button--primary js-main-cta" data-bui-ref="modal-close">\n                    <span class="bui-button__text">', "/private/rewards_book_again_bs3_modal_ok/name", "</span>\n                </button>\n            </div>\n        </footer>\n    </div>\n</div>"], d = ["store"];
        return _r_(function(_) {
            _i_("44d:6922a5e7");
            var e = ""
              , t = this.fn;
            return e = function(e) {
                _i_("44d:42546980"),
                e += [s[0], t.STATIC_HOSTNAME("/static/img/incentives/incentippy_gray.svg", 0, 0, 0, 0), s[1], t.ME(s[2], t.MB, t.MN, null), s[3], t.ME(s[4], t.MB, t.MN, null), s[5]].join("");
                var n = (((t.MC(d[0]) || {}).reward || {}).copy || {}).non_eligible || [];
                _.unshift({
                    error_message: null
                });
                for (var i, r = 1, a = n.length; r <= a; r++)
                    _[0].error_message = i = n[r - 1],
                    e += [s[6], (_.unshift({
                        name: s[7],
                        role: s[8],
                        width: s[9]
                    }),
                    o = t.HELPER("icon", _[0]),
                    _.shift(),
                    o), s[10], t.F.html(i), s[11]].join("");
                return _.shift(),
                e += [s[12], t.F.entities((((t.MC(d[0]) || {}).reward || {}).url || {}).terms), s[13], t.ME(s[14], t.MB, t.MN, null), s[15], t.ME(s[16], t.MB, t.MN, null), s[17]].join(""),
                _r_(e)
            }(e),
            _r_(e)
        })
    }()),
    _r_()
}),
B.define("component/rewards-ui-redux/promo-code-selectors", ["exports", "module"], function(e, n) {
    _i_("44d:c546b0eb"),
    n.exports = {
        shouldOpenNonEligibleModal: function(e) {
            return _i_("44d:180670e9"),
            _r_(!e.reward.isEligible && "force_majeure_campaign" === e.reward.campaign_tag)
        },
        hasValidReward: function(e) {
            return _i_("44d:8165b2dd"),
            _r_(e.reward && e.reward.hasValidReward)
        }
    },
    _r_()
}),
B.define("component/rewards-ui-redux/promo-code-reducer-middlewares", ["exports", "module", "component/rewards-ui-redux/promo-code-actions", "et", "component/rewards-ui/promo-code-storage", "jquery", "server-data"], function(e, n, i, r, a, _, t) {
    _i_("44d:dcecadcb"),
    n.exports = {
        etTrackingMiddleware: function(e) {
            return _i_("44d:c5db49f7"),
            _r_(function(n) {
                return _i_("44d:b991c2cf"),
                _r_(function(e) {
                    return _i_("44d:93416a5b"),
                    e.type,
                    _r_(n(e))
                })
            })
        },
        storageMiddleware: function(e) {
            return _i_("44d:e9736847"),
            _r_(function(n) {
                return _i_("44d:c6f16c2d"),
                _r_(function(e) {
                    switch (_i_("44d:15ae06d0"),
                    e.type) {
                    case i.REMOVE_STORED_REWARD:
                        return a.removeCoupon(),
                        _r_(n(e));
                    case i.RESPONSE_REWARD_ACTIVATION_SUCCESS:
                        return a.setCoupon(e.payload.reward_code),
                        _r_(n(e));
                    case i.RESPONSE_REWARD_REMOVAL_FAIL:
                    case i.RESPONSE_REWARD_REMOVAL_SUCCESS:
                        return a.removeCoupon(),
                        _r_(n(e));
                    default:
                        return _r_(n(e))
                    }
                    _r_()
                })
            })
        },
        sideEffectsMiddleware: function(e) {
            return _i_("44d:45e62b29"),
            _r_(function(n) {
                return _i_("44d:e9a8d068"),
                _r_(function(e) {
                    switch (_i_("44d:efe6affd"),
                    e.type) {
                    case i.RESPONSE_REWARD_ACTIVATION_SUCCESS:
                        return t.isImprovedDesktopUI && "msie" === t.b_browser && "11" === t.b_browser_version && function(e) {
                            if (_i_("44d:f7928ec0"),
                            _('#bookForm > input[name="coupon_code"]').remove(),
                            _('#bookForm > input[name="promotion_code"]').remove(),
                            _('#bookForm > input[name="promotion_type"]').remove(),
                            e.reward_code && e.reward && e.reward.promotion && e.reward.promotion.value && e.reward.promotion.type) {
                                var n = document.createElement("input");
                                n.type = "hidden",
                                n.form = "bookForm",
                                n.name = "coupon_code",
                                n.value = e.reward_code;
                                var i = document.createElement("input");
                                i.type = "hidden",
                                i.form = "bookForm",
                                i.name = "promotion_code",
                                i.value = e.reward.promotion.value;
                                var r = document.createElement("input");
                                r.type = "hidden",
                                r.form = "bookForm",
                                r.name = "promotion_type",
                                r.value = e.reward.promotion.type,
                                _("#bookForm").append(n, i, r)
                            }
                            _r_()
                        }(e.payload),
                        _r_(n(e));
                    case i.RESPONSE_REWARD_REMOVAL_FAIL:
                    case i.RESPONSE_REWARD_REMOVAL_SUCCESS:
                        return t.isImprovedDesktopUI && "msie" === t.b_browser && "11" === t.b_browser_version && (e.payload,
                        _i_("44d:38a66833"),
                        _('#bookForm > input[name="coupon_code"]').remove(),
                        _('#bookForm > input[name="promotion_code"]').remove(),
                        _('#bookForm > input[name="promotion_type"]').remove(),
                        _r_()),
                        _r_(n(e));
                    default:
                        return _r_(n(e))
                    }
                    _r_()
                })
            })
        }
    },
    _r_()
}),
B.define("component/rewards-ui/feedback-modal-reactive", ["require", "exports", "module", "component/reactive", "server-data", "jstmpl-translations"], function(e, n, i, r, a, _) {
    _i_("44d:d5700a59"),
    booking.jstmpl("feedback_modal", function() {
        _i_("44d:22dea1dc");
        var a, _ = ['<div id="rewards-feedback-modal" class="bui-u-hidden">\n    <header class="bui-modal__header">\n        <span class="bui-icon bui-icon--largest bui-u-margin-bottom--16">\n            ', "streamline/coupon_discount", '\n        </span>\n        <h1 class="bui-modal__title" data-bui-ref="modal-title">', '</h1>\n        <p class="bui-modal__paragraph" data-bui-ref="modal-subtitle">\n            ', '\n        </p>\n    </header>\n    <footer class="bui-modal__footer">\n        <div class="bui-group bui-group--inline bui-group--vertical-align-middle bui-button-group">\n            <div class="bui-group__item">\n                <button type="button" class="bui-button bui-button--primary" data-bui-ref="modal-close">\n                    <span class="bui-button__text">\n                        ', "\n                    </span>\n                </button>\n            </div>\n        </div>\n    </footer>\n</div>"], t = ["copy"];
        return _r_(function(e) {
            _i_("44d:cd65d4f5");
            var n, i = "", r = this.fn;
            return n = i,
            _i_("44d:ff7e73be"),
            n += [_[0], (e.unshift({
                color: "#BDBDBD",
                name: _[1]
            }),
            a = r.HELPER("icon", e[0]),
            e.shift(),
            a), _[2], r.F.entities((r.MC(t[0]) || {}).title), _[3], r.F.entities((r.MC(t[0]) || {}).subtitle), _[4], r.F.entities((r.MC(t[0]) || {}).cta), _[5]].join(""),
            i = _r_(n),
            _r_(i)
        })
    }());
    var t = {
        has_landed_with_expired_link: a.fe_rewards_error_feedback_feature_show_expired,
        has_landed_with_used_link: a.fe_rewards_error_feedback_feature_show_used,
        voucher_error: Number(a.fe_rewards_error_feedback_feature_show_voucher_error),
        copy: {
            title: a.fe_rewards_error_feedback_copy_title,
            subtitle: a.fe_rewards_error_feedback_copy_subtitle,
            cta: a.fe_rewards_error_feedback_copy_cta
        }
    };
    i.exports = r.extend({
        initialState: t,
        template: "feedback_modal",
        initialize: function() {
            _i_("44d:032dfbde");
            var e = this.getState()
              , n = window.BUI;
            e.copy.title || (e.has_landed_with_expired_link ? this.setState({
                copy: {
                    title: _("incentives_index_landing_error_link_expired_header"),
                    subtitle: _("incentives_index_landing_error_link_expired_subtext"),
                    cta: _("incentives_index_landing_error_link_expired_cta")
                }
            }) : e.has_landed_with_used_link ? this.setState({
                copy: {
                    title: _("incentives_index_landing_error_link_used_header"),
                    subtitle: _("incentives_index_landing_error_link_used_subtext"),
                    cta: _("incentives_index_landing_error_link_used_cta")
                }
            }) : 4 === e.voucher_error ? this.setState({
                copy: {
                    title: _("rewards_firstuse_taxi_emailflow_error_user_header"),
                    subtitle: _("rewards_firstuse_taxi_emailflow_error_user_body"),
                    cta: _("rewards_firstuse_taxi_emailflow_error_user_cta")
                }
            }) : 3 === e.voucher_error ? this.setState({
                copy: {
                    title: _("rewards_firstuse_taxi_emailflow_error_expired_header"),
                    subtitle: _("rewards_firstuse_taxi_emailflow_error_expired_body"),
                    cta: _("rewards_firstuse_taxi_emailflow_error_expired_cta")
                }
            }) : 2 === e.voucher_error ? this.setState({
                copy: {
                    title: _("rewards_firstuse_taxi_emailflow_error_used_header"),
                    subtitle: _("rewards_firstuse_taxi_emailflow_error_used_body"),
                    cta: _("rewards_firstuse_taxi_emailflow_error_used_generic")
                }
            }) : e.voucher_error && this.setState({
                copy: {
                    title: _("rewards_firstuse_taxi_emailflow_error_generic_header"),
                    subtitle: _("rewards_firstuse_taxi_emailflow_error_generic_body"),
                    cta: _("rewards_firstuse_taxi_emailflow_error_generic_cta")
                }
            })),
            this.modal = n.createInstance("Modal", document.createElement("div"), {
                id: "rewards-feedback-modal"
            }),
            this.modal && this.modal.mount(),
            this.modal && this.modal.open(),
            _r_()
        }
    }),
    _r_()
}),
booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.raf.run = !0);
