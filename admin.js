!function(t) {
    var n = {};
    function e(o) {
        if (n[o])
            return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, e),
        i.l = !0,
        i.exports
    }
    e.m = t,
    e.c = n,
    e.d = function(t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: o
        })
    }
    ,
    e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    e.t = function(t, n) {
        if (1 & n && (t = e(t)),
        8 & n)
            return t;
        if (4 & n && "object" == typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (e.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & n && "string" != typeof t)
            for (var i in t)
                e.d(o, i, function(n) {
                    return t[n]
                }
                .bind(null, i));
        return o
    }
    ,
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }
    ,
    e.p = "",
    e(e.s = 0)
}([function(t, n) {
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function o(t, n, e) {
        var o = e || null
          , i = new RegExp("(?:^".concat(n, "|;s*").concat(n, "|;s*\\s").concat(n, ")=(.*?)(?:;|$)"),"g").exec(this.cookie);
        return i ? i[1] : t.apply(this, [n, o])
    }
    function i(t, n) {
        var e, o, i = (e = (new Date).getTime(),
        o = performance && performance.now && 1e3 * performance.now() || 0,
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
            var n = 16 * Math.random();
            return e > 0 ? (n = (e + n) % 16 | 0,
            e = Math.floor(e / 16)) : (n = (o + n) % 16 | 0,
            o = Math.floor(o / 16)),
            ("x" === t ? n : 3 & n | 8).toString(16)
        }
        ))), r = "".concat(t, "=").concat(i, "; path=/; domain=").concat(window.location.hostname, "; Secure; sameSite=Lax; ");
        return n && (r += "max-age=".concat(n, "; ")),
        this.cookie = r,
        i
    }
    function r(t) {
        clearInterval(t),
        console.log("ADARA JS SKD initialization failed")
    }
    Number.isInteger = Number.isInteger || function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }
    ;
    var c, a = !1, f = function t(n) {
        if (window && window.adara) {
            var e = window.adara.q;
            if (void 0 !== e) {
                if (!e.length)
                    return;
                var o = e.shift()
                  , i = o[0];
                if (!n.hasOwnProperty(i) || "function" != typeof n[i])
                    return;
                var r = Array.prototype.slice.call(o);
                r = r.slice(1),
                n[i].apply(n, r)
            }
        } else
            ;return a || (a = !0,
        c = setInterval(t, 1e3, n)),
        c
    };
    new function() {
        var t, n, c = this;
        this._context = {
            title: "",
            path: "",
            clientDefined: null,
            i: {},
            sid: ""
        },
        this.init = function(t, n) {
            "string" != typeof t || n && !Number.isInteger(n) || 0 === arguments.length || arguments.length > 2 || this._clientKey || (this._clientKey = t,
            this._dpID = n,
            this._yoid = o.apply(document, [i, "_yoid", "31536000"]),
            this._yosid = o.apply(document, [i, "_yosid"]),
            this.send("init"))
        }
        ,
        this.getBrowserContext = function() {
            c._context.title = window.document.title,
            c._context.path = window.location,
            c._context.cookie = "_yoid=".concat(c._yoid, "; _yosid=").concat(c._yosid)
        }
        ,
        this.context = function() {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
                n[e] = arguments[e];
            c._context.clientDefined = n
        }
        ,
        this.identity = function(t, n, o) {
            if (t && "object" == e(t) && (c._context.i = t,
            n && "function" == typeof n && window.fetch)) {
                t.yoid = c._yoid,
                t.yosid = c._yosid;
                var i = "".concat("https://sdk-graph.adara.com", "/graphql");
                fetch(i, {
                    method: "POST",
                    headers: {
                        "X-Adara-Key": c._clientKey,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        query: "\n        query GetToken($payload: String!) {\n          token(payload: $payload)\n        }\n      ",
                        variables: {
                            payload: JSON.stringify(t)
                        }
                    })
                }).then((function(t) {
                    return t.json()
                }
                )).then((function(t) {
                    n(t)
                }
                )).catch((function(t) {
                    o && "function" == typeof o && o(t)
                }
                ))
            }
        }
        ,
        this.send = function(e) {
            c.getBrowserContext();
            var o = "".concat("https://sdk.adara.com", "/api")
              , i = {
                event: e,
                context: c._context
            };
            (t || "init" === e) && e && c._clientKey && window.fetch && fetch(o, {
                method: "POST",
                headers: {
                    "X-Adara-Key": c._clientKey
                },
                body: JSON.stringify(i)
            }).then((function(o) {
                return "init" === e && (!1 === (t = o.ok) ? r(n) : c._dpID && c._yoid && c._yosid && fetch("https://tag.yieldoptimizer.com/ps/ps?t=i&p=".concat(c._dpID, "&_yoid=").concat(c._yoid, "&_yosid=").concat(c._yosid), {
                    method: "GET",
                    mode: "no-cors",
                    credentials: "include"
                })),
                o.json()
            }
            )).then((function(t) {
                "bk" === e && t.flSrc.length && fetch(t.flSrc, {
                    method: "GET",
                    mode: "no-cors",
                    credentials: "include"
                })
            }
            )).catch((function(t) {
                return "init" === e && r(n),
                t
            }
            ))
        }
        ,
        this.session = function(t) {
            "string" == typeof t && (c._context.sid = t)
        }
        ,
        n = f(this)
    }
}
]);
