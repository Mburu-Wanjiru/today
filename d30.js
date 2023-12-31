var _i_ = this._i_ || function() {}
  , _r_ = this._r_ || function(e) {
    return e
}
;
B.define("utils/bind-all", function(e, t, n) {
    _i_("fe3:ca20d562"),
    n.exports = function(e) {
        for (var t in _i_("fe3:fe723711"),
        e)
            "function" == typeof e[t] && (e[t] = e[t].bind(e));
        return _r_(e)
    }
    ,
    _r_()
}),
B.define("component/sp/map-card-component", function(e, t, n) {
    _i_("fe3:a635e494");
    var a, i, o = e("utils/bind-all"), s = e("events"), l = booking.env, _ = booking.debug("sp_on_maps"), r = B.jstmpl, c = e("et");
    l.show_rocketmiles_av_frontend && (a = e("rocketmiles-on-maps"),
    i = e("rocketmiles-api")),
    n.exports = e("component").extend({
        init: function() {
            _i_("fe3:f68b7edc"),
            o(this);
            var e = this;
            _.log("init sp_on_maps"),
            e.badgeTemplate = r("loyalty_badges_maps");
            var t = e.$el.attr("data-loyalty") || "{}";
            e.loyaltyData = JSON.parse(t);
            var n = e.$el.attr("data-has-rocketmiles-extra");
            e.hasRocketmilesExtra = !!n,
            e.checkExtensions(),
            l.show_rocketmiles_av_frontend && s.on(i.events.SR_RENDERED, this.updateRocketmilesExtension.bind(this)),
            e.bexContentData = JSON.parse(e.$el.attr("data-bex-content") || "[]"),
            e.loyaltyData && !n ? e.renderBadge() : e.$el.remove(),
            e.trackExp(),
            e.resetComponent(),
            _r_()
        },
        renderBadge: function() {
            _i_("fe3:2091c0c3");
            var e = this
              , t = {
                sp_rewards: e.loyaltyData,
                b_bex_content_data: e.bexContentData,
                design_settings: l.b_loyalty_reward_affiliate_settings,
                placement: "maps",
                b_is_mobile_site: "mdot" == l.b_site_type ? 1 : 0
            };
            e.$el.html(e.badgeTemplate.render(t)),
            _r_()
        },
        trackExp: function() {
            if (_i_("fe3:29e7d6da"),
            "mdot" == l.b_site_type) {
                var e = "bPQIMbWPHDDZTQcaNYCLUSPScUC";
                c.track(e),
                c.customGoal(e, 1)
            }
            _r_()
        },
        checkExtensions: function() {
            _i_("fe3:d3afd37d");
            this.updateRocketmilesExtension(),
            _r_()
        },
        updateRocketmilesExtension: function() {
            _i_("fe3:fdde6125");
            "searchresults" == l.b_action && l.show_rocketmiles_av_frontend && a.checkRocketMiles(this.$el.parents("[data-marker-id]")),
            _r_()
        },
        resetComponent: function() {
            _i_("fe3:4d44c622");
            var e = this;
            e.$el.removeAttr("data-loyalty"),
            e.$el.removeAttr("data-bex-content"),
            setTimeout(function() {
                _i_("fe3:729c2fa8"),
                e.$el.removeData("component-instance-sp/map-card-component"),
                _r_()
            }, 100),
            _r_()
        }
    }),
    _r_()
}),
booking.jstmpl("loyalty_badges_maps", function() {
    _i_("fe3:f22d185c");
    var a, v = ["\n    ", "\n", '\n        <div class="u-clearfix loyalty-badge-container loyalty-badge-container--', '">\n            ', "\n                \n                ", "\n                    ", "loyalty-badge loyalty-badge-standardised loyalty-badge-standardised--", " ", "loyalty-badge-standardised--popover", "\n\n\n", "standardised-info-popover-", '\n    <div id="', '" class="bui-panel bui-u-hidden">\n        <p>', '</p>\n    </div>\n    <div class="', '">\n        <span\n            class="loyalty-badge-standardised__title"\n            data-bui-component="Popover"\n            data-popover-content-id="', '"\n            data-popover-position="top"\n        >\n            ', "\n        </span>\n    </div>\n\n", '\n    <div class="', '">\n        <span class="loyalty-badge-standardised__title">\n            ', "\n        </span>\n    </div>\n", "\n                            ", "loyalty-badge loyalty-badge-instant-reward loyalty-badge-instant-reward--", "", '\n\n<span class="', '">\n    <span class="bui-icon bui-icon--medium" role="presentation">\n        ', "streamline/accounting_bills", "24", "\n    </span>\n    ", "\n</span>\n", "\n                        ", "loyalty-badge loyalty-badge-cashback loyalty-badge-cashback--", "cashback-info-popover-", '\n\n<div id="', '" class="bui-panel bui-u-hidden">\n    <p>\n        ', '\n    </p>\n</div>\n<span class="', '" data-bui-component="Popover" data-popover-content-id="', '" data-popover-position="top">\n    ', "loyalty-badge loyalty-badge-points loyalty-badge-points--", " loyalty-badge-points--tooltip--off", '\n\n<div>\n    <span class="bui-badge ', '">\n        <div class="loyalty-badge-points--logo">\n            ', '\n                <img src="', '" alt="', '" class="loyalty-badge-points--logo-image" />\n            ', '\n        </div>\n        <span class="loyalty-badge-points--text">\n            ', "\n        </span>\n    </span>\n</div>\n", "bui-badge loyalty-badge loyalty-badge-custom loyalty-badge-custom--", '\n\n<div>\n    <span class="', '">\n        <div class="loyalty-badge-custom--logo">\n            ', '" class="loyalty-badge-custom--logo-image" />\n            ', '\n        </div>\n        <span class="loyalty-badge-custom--text">\n            ', "\n                ", "\n\n                \n                ", "\n                \n            ", "\n        </div>\n    "], h = ["b_bex_content_data", "fe_placement", "fe_container_classes", "fe_popover", "fe_popover_id", "fe_key", "fe_title", "fe_logo_src", "fe_logo_alt", "b_site_type", "placement"];
    return _r_(function(f) {
        _i_("fe3:96b996a6");
        var e = ""
          , p = this.fn;
        function b(e) {
            _i_("fe3:269a70a8"),
            e += ["", v[1]].join("");
            var t = "";
            return t += [v[21], p.F.entities(p.MC(h[1])), v[22]].join(""),
            p.MN(h[2], t),
            e += [v[23], p.F.entities(p.MC(h[2])), v[24], (f.unshift({
                name: v[25],
                width: v[26]
            }),
            a = p.HELPER("icon", f[0]),
            f.shift(),
            a), v[27], p.MC(h[6]), v[28], "", v[1]].join(""),
            _r_(e)
        }
        function y(e) {
            _i_("fe3:30f059fe"),
            e += ["", v[1]].join("");
            var t = "";
            return t += [v[30], p.F.entities(p.MC(h[1])), v[22]].join(""),
            p.MN(h[2], t),
            e += v[1],
            p.MN(h[4], [v[31], p.F.entities(p.MC(h[5]))].join("")),
            e += [v[32], p.F.entities(p.MC(h[4])), v[33], p.MC(h[3]), v[34], p.F.entities(p.MC(h[2])), v[35], p.F.entities(p.MC(h[4])), v[36], p.MC(h[6]), v[28], "", v[1]].join(""),
            _r_(e)
        }
        function m(e) {
            _i_("fe3:fe5376fd"),
            e += ["", v[1]].join("");
            var t = "";
            return t += [v[37], p.F.entities(p.MC(h[1])), v[38]].join(""),
            p.MN(h[2], t),
            e += [v[39], p.F.entities(p.MC(h[2])), v[40]].join(""),
            p.MD(h[7]) && (e += [v[41], p.F.entities(p.MC(h[7])), v[42], p.F.entities(p.MC(h[8])), v[43]].join("")),
            e += [v[44], p.MC(h[6]), v[45], "", v[1]].join(""),
            _r_(e)
        }
        function g(e) {
            _i_("fe3:7fe50905"),
            e += ["", v[1]].join("");
            var t = "";
            return t += [v[46], p.F.entities(p.MC(h[1])), v[22]].join(""),
            p.MN(h[2], t),
            e += [v[47], p.F.entities(p.MC(h[2])), v[48]].join(""),
            p.MD(h[7]) && (e += [v[41], p.F.entities(p.MC(h[7])), v[42], p.F.entities(p.MC(h[8])), v[49]].join("")),
            e += [v[50], p.MC(h[6]), v[45], "", v[1]].join(""),
            _r_(e)
        }
        function u(e) {
            _i_("fe3:64638302"),
            e += ["", v[1]].join("");
            var t = "";
            return t += [v[6], p.F.entities(p.MC(h[1])), v[7]].join(""),
            p.MD(h[3]) && (t += v[8]),
            p.MN(h[2], t),
            e += v[9],
            p.MD(h[3]) ? (e += v[0],
            p.MN(h[4], [v[10], p.F.entities(p.MC(h[5]))].join("")),
            e += [v[11], p.F.entities(p.MC(h[4])), v[12], p.MC(h[3]), v[13], p.F.entities(p.MC(h[2])), v[14], p.F.entities(p.MC(h[4])), v[15], p.MC(h[6]), v[16]].join("")) : e += [v[17], p.F.entities(p.MC(h[2])), v[18], p.MC(h[6]), v[19]].join(""),
            e += [v[1], "", v[1]].join(""),
            _r_(e)
        }
        e += v[0];
        var t = {
            b_bex_content_data: p.MC(h[0]),
            fe_placement: p.MB(h[10])
        }
          , n = f;
        return (f = p.SV([{}, {}])).unshift(t),
        e = function(e) {
            _i_("fe3:74e76937"),
            e += ["", v[1]].join("");
            var t = p.MC(h[0]) || [];
            f.unshift({
                fe_ui_component: null
            });
            for (var n, a = 1, i = t.length; a <= i; a++) {
                if (f[0].fe_ui_component = n = t[a - 1],
                e += v[0],
                p.MJ(n.type + "" == "loyalty_badge_list")) {
                    e += [v[2], p.F.entities(p.MC(h[1])), v[3]].join("");
                    var o, s = a, l = t, _ = i, r = o;
                    for (t = (n || {}).badges || [],
                    f.unshift({
                        fe_badge: null
                    }),
                    a = 1,
                    i = t.length; a <= i; a++) {
                        if (f[0].fe_badge = o = t[a - 1],
                        e += v[4],
                        p.MJ(p.track_experiment("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO"))) {
                            e += v[5];
                            var c = {
                                fe_key: p.MG((o || {}).key),
                                fe_placement: p.MB(h[1]),
                                fe_popover: p.MG((o || {}).popover),
                                fe_title: p.MG((o || {}).title)
                            }
                              , d = f;
                            (f = p.SV([{}, {}])).unshift(c),
                            e = u(e),
                            f = p.SV(d),
                            e += v[4]
                        } else {
                            e += v[5];
                            var M = p.MG((o || {}).variant);
                            p.MJ(M + "" == "instantReward") ? (e += v[20],
                            c = {
                                fe_placement: p.MB(h[1]),
                                fe_title: p.MG((o || {}).title)
                            },
                            d = f,
                            (f = p.SV([{}, {}])).unshift(c),
                            e = b(e),
                            f = p.SV(d),
                            e += v[29]) : p.MJ(M + "" == "cash") ? (e += v[20],
                            c = {
                                fe_key: p.MG((o || {}).key),
                                fe_placement: p.MB(h[1]),
                                fe_popover: p.MG((o || {}).popover),
                                fe_title: p.MG((o || {}).title)
                            },
                            d = f,
                            (f = p.SV([{}, {}])).unshift(c),
                            e = y(e),
                            f = p.SV(d),
                            e += v[29]) : p.MJ(M + "" == "point") ? (e += v[20],
                            c = {
                                fe_logo_alt: p.MG((o || {}).logoAlt),
                                fe_logo_src: p.MG((o || {}).logoSrc),
                                fe_placement: p.MB(h[1]),
                                fe_title: p.MG((o || {}).title)
                            },
                            d = f,
                            (f = p.SV([{}, {}])).unshift(c),
                            e = m(e),
                            f = p.SV(d),
                            e += v[29]) : p.MJ(M + "" == "mile") ? (e += v[20],
                            c = {
                                fe_logo_alt: p.MG((o || {}).logoAlt),
                                fe_logo_src: p.MG((o || {}).logoSrc),
                                fe_placement: p.MB(h[1]),
                                fe_title: p.MG((o || {}).title)
                            },
                            d = f,
                            (f = p.SV([{}, {}])).unshift(c),
                            e = m(e),
                            f = p.SV(d),
                            e += v[29]) : p.MJ(M + "" == "custom") ? (e += v[20],
                            c = {
                                fe_logo_alt: p.MG((o || {}).logoAlt),
                                fe_logo_src: p.MG((o || {}).logoSrc),
                                fe_placement: p.MB(h[1]),
                                fe_title: p.MG((o || {}).title)
                            },
                            d = f,
                            (f = p.SV([{}, {}])).unshift(c),
                            e = g(e),
                            f = p.SV(d),
                            e += v[29]) : e += v[5],
                            e += v[51]
                        }
                        e += v[52],
                        p.MJ(p.track_experiment_stage("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO", 1)),
                        e += v[51],
                        p.MJ(p.MC(h[9]) + "" == "mdot") ? (e += v[5],
                        M = p.MG((o || {}).variant),
                        p.MJ(M + "" == "mile") ? (e += v[20],
                        p.MJ(p.track_experiment_stage("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO", 2)),
                        e += v[29]) : p.MJ(M + "" == "point") ? (e += v[20],
                        p.MJ(p.track_experiment_stage("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO", 2)),
                        e += v[29]) : p.MJ(M + "" == "cash") ? (e += v[20],
                        p.MJ(p.track_experiment_stage("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO", 3)),
                        e += v[29]) : p.MJ(M + "" == "instantReward") && (e += v[20],
                        p.MJ(p.track_experiment_stage("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO", 4)),
                        e += v[5]),
                        e += v[51]) : p.MJ(p.MC(h[9]) + "" == "www") && (e += v[5],
                        M = p.MG((o || {}).variant),
                        p.MJ(M + "" == "mile") ? (e += v[20],
                        p.MJ(p.track_experiment_stage("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO", 5)),
                        e += v[29]) : p.MJ(M + "" == "point") ? (e += v[20],
                        p.MJ(p.track_experiment_stage("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO", 5)),
                        e += v[29]) : p.MJ(M + "" == "cash") ? (e += v[20],
                        p.MJ(p.track_experiment_stage("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO", 6)),
                        e += v[29]) : p.MJ(M + "" == "instantReward") && (e += v[20],
                        p.MJ(p.track_experiment_stage("ELSXZQXbLVWXMRUMVMINPbfVMDXAWEZUZLWZHOfYO", 7)),
                        e += v[5]),
                        e += v[51]),
                        e += v[53]
                    }
                    f.shift(),
                    a = s,
                    t = l,
                    i = _,
                    o = r,
                    e += v[54]
                }
                e += v[1]
            }
            return f.shift(),
            e += [v[1], "", v[1]].join(""),
            _r_(e)
        }(e),
        f = p.SV(n),
        e += v[1],
        _r_(e)
    })
}());
