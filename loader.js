var ttd_dom_ready = function() {
    var t, n, i = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Object]": "object"
    }, l = {
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? l.readyWait++ : l.ready(!0)
        },
        ready: function(e) {
            if (!0 === e && !--l.readyWait || !0 !== e && !l.isReady) {
                if (!document.body)
                    return setTimeout(l.ready, 1);
                (l.isReady = !0) !== e && 0 < --l.readyWait || t.resolveWith(document, [l])
            }
        },
        bindReady: function() {
            if (!t) {
                if (t = l._Deferred(),
                "complete" === document.readyState)
                    return setTimeout(l.ready, 1);
                if (document.addEventListener)
                    document.addEventListener("DOMContentLoaded", n, !1),
                    window.addEventListener("load", l.ready, !1);
                else if (document.attachEvent) {
                    document.attachEvent("onreadystatechange", n),
                    window.attachEvent("onload", l.ready);
                    var e = !1;
                    try {
                        e = null == window.frameElement
                    } catch (e) {}
                    document.documentElement.doScroll && e && o()
                }
            }
        },
        _Deferred: function() {
            var a, n, d, c = [], u = {
                done: function() {
                    if (!d) {
                        var e, t, n, i, o, r = arguments;
                        for (a && (o = a,
                        a = 0),
                        e = 0,
                        t = r.length; e < t; e++)
                            "array" === (i = l.type(n = r[e])) ? u.done.apply(u, n) : "function" === i && c.push(n);
                        o && u.resolveWith(o[0], o[1])
                    }
                    return this
                },
                resolveWith: function(e, t) {
                    if (!d && !a && !n) {
                        t = t || [],
                        n = 1;
                        try {
                            for (; c[0]; )
                                c.shift().apply(e, t)
                        } finally {
                            a = [e, t],
                            n = 0
                        }
                    }
                    return this
                },
                resolve: function() {
                    return u.resolveWith(this, arguments),
                    this
                },
                isResolved: function() {
                    return !(!n && !a)
                },
                cancel: function() {
                    return d = 1,
                    c = [],
                    this
                }
            };
            return u
        },
        type: function(e) {
            return null == e ? String(e) : i[Object.prototype.toString.call(e)] || "object"
        }
    };
    function o() {
        if (!l.isReady) {
            try {
                document.documentElement.doScroll("left")
            } catch (e) {
                return void setTimeout(o, 1)
            }
            l.ready()
        }
    }
    return document.addEventListener ? n = function() {
        document.removeEventListener("DOMContentLoaded", n, !1),
        l.ready()
    }
    : document.attachEvent && (n = function() {
        "complete" === document.readyState && (document.detachEvent("onreadystatechange", n),
        l.ready())
    }
    ),
    function(e) {
        l.bindReady(),
        l.type(e),
        t.done(e)
    }
}();
function TTDUniversalPixelApi(C) {
    this.getVersion = function() {
        return "1.1.0"
    }
    ,
    this.init = function(e, o, t, n) {
        if ("string" == typeof arguments[3] && (arguments[3] = null,
        4 < arguments.length))
            for (var i = 4; i < arguments.length; i++)
                arguments[i - 1] = arguments[i];
        if (e && "" != e && o && !(o.length <= 0)) {
            var r = document.getElementsByTagName("body")[0];
            if (r) {
                var a = ""
                  , d = {
                    MonetaryValue: "v",
                    MonetaryValueFormat: "vf"
                }
                  , c = [];
                if ("undefined" != typeof _pixelParams)
                    for (var i in _pixelParams) {
                        var u = _pixelParams[i]
                          , l = d[i];
                        l && u && !/%%.*%%/i.test(u) && c.push(l + "=" + encodeURIComponent(u))
                    }
                var p = "adv=" + e
                  , f = "upid=" + o.join(",")
                  , s = C || function() {
                    var e = window
                      , t = ""
                      , n = !1;
                    try {
                        top.location.href && (t = top.location.href)
                    } catch (e) {
                        n = !0
                    }
                    if (n)
                        for (; ; )
                            try {
                                if (t = e.document.referrer,
                                window.parent == e)
                                    break;
                                e = window.parent
                            } catch (e) {
                                break
                            }
                    -1 < t.indexOf("cloudfront.net") && (t = function(e, t) {
                        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                        t = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                        return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
                    }(t, "url") || t);
                    return t
                }()
                  , a = t + "?" + p + "&ref=" + encodeURIComponent(s) + "&" + f + "&upv=" + this.getVersion();
                if (n)
                    for (var m in n)
                        a = a + "&" + m + "=" + n[m];
                0 < c.length && (a = a + "&" + c.join("&"));
                var g = null
                  , v = !1
                  , y = null
                  , _ = ("function" == typeof __tcfapi ? (b = setTimeout(x, 1e3),
                __tcfapi("addEventListener", 2, A)) : "function" == typeof __cmp ? (g = setTimeout(D, 1e3),
                __cmp("ping", null, L)) : "function" == typeof __gpp ? void 0 !== (p = w()).gppString ? I(p.gppString, p.gppSid) : (_ = setTimeout(S, 1e3),
                __gpp("addEventListener", j)) : T(),
                null)
                  , h = !1
                  , b = null
                  , E = !1
            }
        }
        function w() {
            var e, t = __gpp("getGPPData"), t = {
                gppString: t?.gppString,
                gppSid: t?.applicableSections?.join(",")
            };
            return void 0 === t.gppString && (e = __gpp("ping"),
            t.gppString = e?.gppString,
            t.gppSid = e?.applicableSections?.join(",")),
            t
        }
        function S() {
            h = !0,
            T()
        }
        function j(e, t) {
            var n;
            h ? __gpp("removeEventListener", function() {}, e.listenerId) : "signalStatus" === e.eventName && "ready" === e.data && (n = w(),
            clearTimeout(_),
            y = new Date,
            I(n.gppString, n.gppSid),
            __gpp("removeEventListener", function() {}, e.listenerId))
        }
        function D() {
            v = !0,
            T()
        }
        function L(e) {
            v || (e.cmpLoaded || e.gdprAppliesGlobally ? (clearTimeout(g),
            y = new Date,
            __cmp("getConsentData", null, T)) : setTimeout(function() {
                __cmp("ping", null, L)
            }, 200))
        }
        function T(e) {
            null != y && (a = a + "&ret=" + (new Date - y)),
            v && (a += "&pto=1"),
            null != e && (a = a + "&gdpr=" + (e.gdprApplies ? "1" : "0") + "&gdpr_consent=" + e.consentData),
            R()
        }
        function R() {
            for (var e = "universal_pixel_" + o.join("_"), t = document.getElementById(e); t && t.parentElement.removeChild(t),
            t = document.getElementById(e); )
                ;
            var n = document.createElement("iframe");
            function i() {
                r.appendChild(n)
            }
            n.setAttribute("id", e),
            n.setAttribute("height", 0),
            n.setAttribute("width", 0),
            n.setAttribute("style", "display:none;"),
            n.setAttribute("src", a),
            n.setAttribute("title", "TTD Universal Pixel"),
            "complete" === document.readyState ? setTimeout(i, 0) : window.addEventListener ? window.addEventListener("load", i) : window.attachEvent ? window.attachEvent("onload", i) : i()
        }
        function x() {
            E = !0,
            T()
        }
        function A(e, t) {
            E ? __tcfapi("removeEventListener", 2, function(e) {}, e.listenerId) : t && (clearTimeout(b),
            t = e,
            null != y && (a = a + "&ret=" + (new Date - y)),
            E && (a += "&pto=1"),
            null != t && (a = a + "&gdpr=" + function(e) {
                return e ? "1" : "0"
            }(t.gdprApplies) + "&gdpr_consent=" + t.tcString),
            R(),
            y = new Date,
            __tcfapi("removeEventListener", 2, function(e) {}, e.listenerId))
        }
        function I(e, t) {
            null != y && (a = a + "&ret=" + (new Date - y)),
            null != e && (a = a + "&gpp_consent=" + e),
            null != t && (a = a + "&gpp_sid=" + t),
            R()
        }
    }
}
