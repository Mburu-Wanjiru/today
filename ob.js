var _i_ = this._i_ || function() {}
  , _r_ = this._r_ || function(e) {
    return e
}
;
function calcage(e, t, i) {
    return _i_("3da:f8784014"),
    s = (Math.floor(e / t) % i).toString(),
    LeadingZero && s.length < 2 && (s = "0" + s),
    _r_("<b>" + s + "</b>")
}
function CountBack(e) {
    if (_i_("3da:732c2356"),
    e < 0) {
        if (document.getElementById("cntdwn"))
            return document.getElementById("cntdwn").innerHTML = FinishMessage,
            _r_()
    } else
        86400 < e ? (DisplayStr_days = DisplayFormat_days.replace(/%%D%%/g, calcage(e, 86400, 1e5)),
        document.getElementById("flash_days").innerHTML = DisplayStr_days) : document.getElementById("flash_days_wrapper").style.display = "none";
    DisplayStr_hours = DisplayFormat_hours.replace(/%%H%%/g, calcage(e, 3600, 24)),
    DisplayStr_minutes = DisplayFormat_minutes.replace(/%%M%%/g, calcage(e, 60, 60)),
    DisplayStr_seconds = DisplayFormat_seconds.replace(/%%S%%/g, calcage(e, 1, 60)),
    document.getElementById("flash_hours").innerHTML = DisplayStr_hours,
    document.getElementById("flash_minutes").innerHTML = DisplayStr_minutes,
    document.getElementById("flash_seconds").innerHTML = DisplayStr_seconds,
    CountActive && setTimeout("CountBack(" + (e + CountStepper) + ")", SetTimeOutPeriod),
    _r_()
}
booking.env.enable_scripts_tracking && ("www" === booking.env.b_site_type && (booking.env.scripts_tracking.jquery = {
    loaded: !!window.jQuery,
    run: !!window.jQuery
}),
booking.env.scripts_tracking.main = {
    loaded: !0,
    run: !1
}),
"function" != typeof booking.debug && (booking.debug = function() {
    return _i_("3da:4fde6557"),
    _r_(new function() {
        _i_("3da:284ce5e0"),
        this.log = this.debug = this.info = this.warn = this.error = this.assert = this.dir = this.table = this.profile = this.trace = this.time = this.timeEnd = function() {}
        ,
        _r_()
    }
    )
}
,
booking.debug.enabled = function() {}
),
booking.console = booking.debug("booking"),
window.console = window.console || booking.console,
B.tools = {
    inherits: function(e, t, i) {
        _i_("3da:3b819f8b");
        var n = function() {};
        n.prototype = t.prototype,
        e.superClass_ = t.prototype,
        e.prototype = new n,
        e.prototype.constructor = e,
        i && $.extend(e.prototype, i),
        _r_()
    },
    base: function(e, t, i) {
        _i_("3da:d61f2398");
        var n = arguments.callee.caller;
        if (!n)
            throw Error("arguments.caller not defined.  tools.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (n.superClass_)
            return _r_(n.superClass_.constructor.apply(e, Array.prototype.slice.call(arguments, 1)));
        for (var a = Array.prototype.slice.call(arguments, 2), r = !1, o = e.constructor; o; o = o.superClass_ && o.superClass_.constructor)
            if (o.prototype[t] === n)
                r = !0;
            else if (r)
                return _r_(o.prototype[t].apply(e, a));
        if (e[t] === n)
            return _r_(e.constructor.prototype[t].apply(e, a));
        throw Error("tools.base called from a method of one name to a method of a different name")
    },
    addSingletonGetter: function(e) {
        _i_("3da:05aa7d5a"),
        e.getInstance = function() {
            return _i_("3da:9080694e"),
            e.__instance__ || (e.__instance__ = new e),
            _r_(e.__instance__)
        }
        ,
        _r_()
    },
    abstractMethod: function() {
        throw _i_("3da:a2838eee"),
        Error("unimplemented abstract method")
    },
    parseInt: function(e) {
        return _i_("3da:e4374960"),
        _r_(parseInt(e, 10))
    },
    string: {
        substitute: function(e, t) {
            _i_("3da:aee7f97a");
            for (var i = 1; i < arguments.length; i++) {
                var n = String(arguments[i]).replace(/\$/g, "$$$$");
                e = e.replace(/%s/, n)
            }
            return _r_(e)
        },
        htmlEncode: function(e) {
            return _i_("3da:2bb1f5d4"),
            _r_($("<textarea />").text(e).html())
        },
        htmlDecode: function(e) {
            return _i_("3da:dd7e6be7"),
            _r_($("<textarea />").html(e).text())
        }
    },
    object: {
        clone: function(e) {
            _i_("3da:2d2d06d3");
            var t = $.type(e);
            if ("object" === t || "array" === t) {
                if ("function" == typeof e.clone)
                    return _r_(e.clone());
                var i = "array" === t ? [] : {};
                for (var n in e)
                    e.hasOwnProperty(n) && (i[n] = B.tools.object.clone(e[n]));
                return _r_(i)
            }
            return _r_(e)
        },
        keys: Object.keys,
        defaults: function(e, t) {
            var i;
            for (i in _i_("3da:2e9fa1f8"),
            e = e || {},
            t = t || {})
                t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
            return _r_(e)
        },
        getByName: function(e, t) {
            _i_("3da:36108244");
            for (var i, n = e.split("."), a = t || window; i = n.shift(); ) {
                if (null === a[i] || void 0 === a[i])
                    return _r_(null);
                a = a[i]
            }
            return _r_(a)
        },
        pick: function(t, e) {
            _i_("3da:a3c77937");
            var i = [].slice.call(arguments, 1)
              , n = {};
            return i.forEach(function(e) {
                _i_("3da:79894d40"),
                e in t && (n[e] = t[e]),
                _r_()
            }),
            _r_(n)
        }
    },
    array: {
        toObject: function(e) {
            _i_("3da:b201fd43");
            for (var t = {}, i = 0, n = e.length; i < n; i++)
                t[e[i]] = !0;
            return _r_(t)
        },
        indexOf: function(e, t, i) {
            _i_("3da:a622c555");
            for (var n = i || 0, a = e.length; n < a; n++)
                if (e[n] == t)
                    return _r_(n);
            return _r_(-1)
        }
    },
    math: {
        getRandomInt: function(e, t) {
            return _i_("3da:9034e421"),
            _r_(Math.round(Math.random() * (t - e)) + e)
        }
    },
    dom: {
        window: $(window),
        getBlockWidth: function(e) {
            return _i_("3da:11c3ef4c"),
            _r_(e.width())
        },
        getBlockHeight: function(e) {
            return _i_("3da:d82c80f0"),
            _r_(e.height())
        },
        getBlockOffset: function(e, t) {
            _i_("3da:c1a71f0c");
            var i = e.offset()
              , n = {
                left: 0,
                top: 0
            };
            return t && (n = t.offset()),
            _r_({
                left: i.left - n.left,
                top: i.top - n.top
            })
        },
        getBounds: function(e) {
            _i_("3da:498d4970");
            var t = $(e)
              , i = t.offset()
              , n = t.outerWidth()
              , a = t.outerHeight();
            return _r_({
                left: i.left,
                right: i.left + n,
                top: i.top,
                bottom: i.top + a,
                width: n,
                height: a
            })
        },
        boundsOverlap: function(e, t) {
            return _i_("3da:08783e24"),
            _r_(e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top)
        },
        getWindowWidth: function() {
            return _i_("3da:ea5e3d4b"),
            _r_(B.tools.dom.getBlockWidth(B.tools.dom.window))
        },
        getWindowHeight: function() {
            return _i_("3da:93649787"),
            _r_(B.tools.dom.getBlockHeight(B.tools.dom.window))
        },
        getWindowScrollLeft: function() {
            return _i_("3da:3f7f24a5"),
            _r_(B.tools.dom.window.scrollLeft())
        },
        getWindowScrollTop: function() {
            return _i_("3da:9d4c8d1d"),
            _r_(B.tools.dom.window.scrollTop())
        },
        watchIfBlockVisibleInViewport: function(e, t, i, n) {
            function a() {
                _i_("3da:df318563"),
                B.tools.dom.isBlockVisibleInViewport(e, i) && (t(),
                n || r()),
                _r_()
            }
            function r() {
                _i_("3da:a0b5f679"),
                B.tools.dom.window.unbind("resize scroll", a),
                _r_()
            }
            return _i_("3da:0952379a"),
            B.tools.dom.window.bind("resize scroll", a),
            setTimeout(a, 0),
            _r_({
                forceCheck: a,
                stopWatch: r
            })
        },
        isBlockVisibleInViewport: function(e, t) {
            if (_i_("3da:ac292b0a"),
            !e || 0 === e.length || !e.is(":visible"))
                return _r_(!1);
            var i = e.offset().top
              , n = i
              , a = i + e.innerHeight()
              , r = B.tools.dom.getWindowScrollTop()
              , o = r
              , _ = r + B.tools.dom.getWindowHeight();
            if (t)
                return _r_(o <= n && a <= _);
            return _r_(o <= n && n <= _ || o <= a && a <= _ || n < o && _ < a)
        },
        popupCancel: function(e) {
            return _i_("3da:27466c71"),
            window.open(e, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=400,height=350,left=200,top=200"),
            _r_(!1)
        }
    },
    css: {
        CSS_OPACITY_SUPPORT: "opacity"in document.body.style
    },
    url: {
        parse: function(e) {
            _i_("3da:5e603d6c");
            var n = {};
            if ("string" != typeof e)
                return _r_(n);
            return e.split(/[;&]/g).forEach(function(e) {
                _i_("3da:3454ef69");
                var t = e.indexOf("=")
                  , i = e.substr(0, t);
                void 0 === n[i] && (n[i] = e.substr(t + 1)),
                _r_()
            }),
            _r_(n)
        },
        stringify: function(t, e, i) {
            _i_("3da:a7c2f184"),
            e = e || "&",
            i = i || "=";
            var n = [];
            return t && Object.keys(t).forEach(function(e) {
                _i_("3da:0002a692"),
                n.push(e + i + t[e]),
                _r_()
            }),
            _r_(n.join(e))
        }
    },
    functions: {
        throttle: function(i, n, e) {
            var a, r, o;
            _i_("3da:19f5ab0c");
            var _ = null
              , s = 0
              , d = e || {}
              , c = function() {
                _i_("3da:0bb38fa5"),
                s = !1 === d.leading ? 0 : +new Date,
                _ = null,
                o = i.apply(a || {}, r || []),
                a = r = null,
                _r_()
            };
            return _r_(function() {
                _i_("3da:c61c6438");
                var e = +new Date;
                s || !1 !== d.leading || (s = e);
                var t = n - (e - s);
                return a = this,
                r = arguments,
                t <= 0 ? (clearTimeout(_),
                _ = null,
                s = e,
                o = i.apply(a, r),
                a = r = null) : _ || !1 === d.trailing || (_ = setTimeout(c, t)),
                _r_(o)
            })
        }
    },
    jsStaticUrl: function(e) {
        return _i_("3da:10509603"),
        _r_(e ? B.tools.getStaticHost(e) + e : "")
    },
    getStaticHost: function(e) {
        if (_i_("3da:4531d4d4"),
        !B.env.static_hostnames || !B.env.static_hostnames.length)
            return _r_(document.location.protocol + "//q.bstatic.com");
        if (1 === B.env.static_hostnames.length || !e)
            return _r_(B.env.static_hostnames[0]);
        var t = B.tools.getHashCode(e.toString())
          , i = Math.abs(t) % B.env.static_hostnames.length;
        return _r_(B.env.static_hostnames[i])
    },
    getHashCode: function(e) {
        _i_("3da:8040537e");
        var t, i, n = 0;
        if (0 === e.length)
            return _r_(n);
        for (t = 0,
        i = e.length; t < i; t++)
            n = (n << 5) - n + e.charCodeAt(t),
            n |= 0;
        return _r_(n)
    }
},
B.tools.dom.Bounds,
void 0 !== B.define && B.define("tools", B.tools)/* @preserve https://mths.be/cssescape v0.2.1 by @mathias | MIT license */
,
/* @preserve https://mths.be/cssescape v0.2.1 by @mathias | MIT license */
function(e) {
    _i_("3da:451d774e"),
    e.CSS || (e.CSS = {});
    var t = e.CSS
      , _ = function(e) {
        _i_("3da:6e65499b"),
        this.message = e,
        _r_()
    };
    (_.prototype = new Error).name = "InvalidCharacterError",
    t.escape ? e.CSS_escape = t.escape : t.escape = e.CSS_escape = function(e) {
        _i_("3da:b1c62348");
        for (var t, i = String(e), n = i.length, a = -1, r = "", o = i.charCodeAt(0); ++a < n; ) {
            if (0 == (t = i.charCodeAt(a)))
                throw new _("Invalid character: the input contains U+0000.");
            if (1 <= t && t <= 31 || 127 == t || 0 == a && 48 <= t && t <= 57 || 1 == a && 48 <= t && t <= 57 && 45 == o) {
                r += "\\" + t.toString(16) + " ";
                continue
            }
            if (128 <= t || 45 == t || 95 == t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122) {
                r += i.charAt(a);
                continue
            }
            r += "\\" + i.charAt(a)
        }
        return _r_(r)
    }
    ,
    _r_()
}("undefined" != typeof global ? global : window),
B.define("booking-command", function(e, t, i) {
    _i_("3da:e8e68916");
    var o = e("jquery");
    function n() {
        _i_("3da:a5cc80f6");
        var e = arguments;
        if ("string" == typeof e[0] && (!e[1] || "string" == typeof e[1]))
            return _r_(n.get.apply(n, e));
        return _r_(n.define.apply(n, e))
    }
    function a() {}
    o.extend(n, {
        define: function() {
            _i_("3da:fc3afb38");
            var e, t = arguments;
            return "string" == typeof (e = "object" == typeof t[0] ? t[0] : {
                name: t[0],
                handler: t[1]
            }).name && "function" == typeof e.handler && (this._list[this._key(e)] = this.create(e)),
            _r_(this)
        },
        get: function(e, t) {
            return _i_("3da:7f898c8b"),
            t = t || "",
            _r_(this._list[this._key(e, t)])
        },
        register: function(n, a) {
            _i_("3da:111e59d2");
            var r = this;
            o(document.body).delegate("[" + n + "]", a, function(e) {
                _i_("3da:1cbb8765");
                var t = o(this).attr(n)
                  , i = r.get(t, a) || r.get(t);
                i && i.run(r.params(this, n), e),
                _r_()
            }),
            _r_()
        },
        create: function(e) {
            _i_("3da:e7c0ba6d");
            var t = new this._onea;
            return o.extend(t, e),
            _r_(t)
        },
        params: function(e, t, i) {
            _i_("3da:0a2c4f0f"),
            "string" == typeof t && (i = t,
            t = void 0);
            var n = (i || "data-command") + "-params";
            if ("object" != typeof t)
                return _r_(this._parse(o(e).attr(n)));
            var a = [];
            o.each(t, function(e, t) {
                _i_("3da:6d1b6bfd"),
                a.push(e + "=" + encodeURIComponent(t)),
                _r_()
            }),
            o(e).attr(n, a.join(";")),
            _r_()
        },
        _list: {},
        _onea: a,
        _key: function(e, t) {
            _i_("3da:d34250a6");
            var i = "object" == typeof e ? e : {
                name: e,
                type: t
            };
            return _r_(i.name + (i.type ? " " + i.type : ""))
        },
        _parse: function(e) {
            _i_("3da:b8bf9251");
            var n = {};
            return e && o.each(e.split(";"), function(e, t) {
                _i_("3da:1d92d7f1");
                var i = t.split("=");
                try {
                    n[i.shift()] = decodeURIComponent(i.join("="))
                } catch (e) {}
                _r_()
            }),
            _r_(n)
        }
    }),
    o.each(["bind", "unbind", "one", "trigger"], function(e, t) {
        _i_("3da:10516703"),
        n[t] = function() {
            _i_("3da:cc3871dd");
            var e = o.makeArray(arguments);
            return e[0] = "command:" + e[0],
            _r_(B.eventEmitter[t].apply(B.eventEmitter, e))
        }
        ,
        _r_()
    }),
    a.prototype = {
        name: "",
        type: "",
        run: function() {
            _i_("3da:f00990df");
            var e = o.makeArray(arguments);
            return e[0] = e[0] || {},
            n.trigger.apply(n, [this.name].concat(e)),
            _r_(this.handler.apply(this, e))
        },
        handler: function() {}
    },
    n.register("data-command", "click"),
    i.exports = n,
    _r_()
}),
booking.command = B.require("booking-command"),
function(e) {
    "use strict";
    _i_("3da:e230c60a");
    var o = "function"
      , t = "object" == typeof module && module.exports && "function" != typeof __webpack_require__;
    function _() {
        _i_("3da:28dc421c"),
        this._act = 0,
        this._cbs = [],
        this._ebs = [],
        _r_()
    }
    _.tick = function(e) {
        _i_("3da:3bcd8a97"),
        t ? process.nextTick(e) : setTimeout(e, 0),
        _r_()
    }
    ,
    _.prototype = {
        _exec: function(n) {
            _i_("3da:a0aebc06");
            var a = this._val
              , r = this._act;
            _.tick(function() {
                var e, t, i;
                for (_i_("3da:6af52a72"); e = n.shift(); )
                    if (t = e.pr,
                    typeof (i = e.cb) === o)
                        try {
                            t.fulfill(i(a))
                        } catch (e) {
                            t.reject(e)
                        }
                    else
                        t[r](a);
                _r_()
            }),
            _r_()
        },
        reject: function(e) {
            _i_("3da:e2732f8b");
            var t = this;
            0 === t._act && (t._val = e,
            t._act = "reject",
            t._exec(t._ebs)),
            _r_()
        },
        fulfill: function(e) {
            var t, i;
            _i_("3da:8331f372");
            var n = this
              , a = 1;
            if (0 === n._act) {
                try {
                    if (e === n)
                        throw TypeError();
                    t = ((i = e && typeof e) === o || "object" === i) && e.then
                } catch (e) {
                    return n.reject(e),
                    _r_()
                }
                if (typeof t === o)
                    try {
                        t.call(e, function(e) {
                            _i_("3da:b37ef092"),
                            a = a && n.fulfill(e),
                            _r_()
                        }, function(e) {
                            _i_("3da:d37161ea"),
                            a = a && n.reject(e),
                            _r_()
                        })
                    } catch (e) {
                        a = a && n.reject(e)
                    }
                else
                    n._val = e,
                    n._act = "fulfill",
                    n._exec(n._cbs)
            }
            _r_()
        },
        then: function(e, t) {
            _i_("3da:0d927ca3");
            var i = this
              , n = new _;
            return 0 === i._act ? (i._cbs.push({
                cb: e,
                pr: n
            }),
            i._ebs.push({
                cb: t,
                pr: n
            })) : i._exec([{
                cb: "reject" === i._act ? t : e,
                pr: n
            }]),
            _r_(n)
        }
    },
    t ? module.exports = _ : e.p0 = _,
    _r_()
}(booking),
booking.promise = function() {
    return _i_("3da:ccd4f956"),
    _r_(new booking.p0)
}
,
booking.promise.when = function(e) {
    var n, a, r;
    if (_i_("3da:4e812c99"),
    n = e.length,
    a = [],
    r = booking.promise(),
    !n)
        return r.fulfill([]),
        _r_(r);
    return e.forEach(function(e, t) {
        _i_("3da:1a3af61c");
        var i = function(e) {
            _i_("3da:a37f46f5"),
            n--,
            a[t] = e,
            n || r.fulfill(a),
            _r_()
        };
        booking.promise.is(e) ? e.then(i, function(e) {
            _i_("3da:7bf0f6e4"),
            r.reject(e),
            _r_()
        }) : i(e),
        _r_()
    }),
    _r_(r)
}
,
booking.promise.is = function(e) {
    return _i_("3da:63a41ed1"),
    _r_(e && "function" == typeof e.then)
}
,
booking.p0.prototype.pipe = function(t) {
    return _i_("3da:71ec2e3c"),
    _r_(booking.promise.is(t) ? this.then(function(e) {
        _i_("3da:581dbd5e"),
        t.fulfill(e),
        _r_()
    }, function(e) {
        _i_("3da:1bc482d7"),
        t.reject(e),
        _r_()
    }) : this)
}
,
booking.p0.prototype.log = function(a) {
    _i_("3da:f697203c"),
    a = a || "";
    var e = function(i, n) {
        return _i_("3da:f7dd2223"),
        _r_(function(e) {
            if (_i_("3da:52167346"),
            window.console && console.log && console.log([a, i].join(" "), e),
            n) {
                var t = B.promise();
                return t.reject(e),
                _r_(t)
            }
            return _r_(e)
        })
    };
    return _r_(this.then(e("resolved - "), e("rejected - ", !0)))
}
,
booking.p0.prototype.finishChain = function() {
    _i_("3da:4df662cf"),
    this.then(null, function(e) {
        _i_("3da:ae628ea4"),
        e instanceof Error && setTimeout(function() {
            throw _i_("3da:a8425948"),
            e
        }, 0),
        _r_()
    }),
    _r_()
}
,
window.goog = {},
goog.inherits = B.tools.inherits,
goog.base = B.tools.base,
goog.abstractMethod = B.tools.abstractMethod,
goog.addSingletonGetter = B.tools.addSingletonGetter,
goog.isBoolean = function(e) {
    return _i_("3da:9128dcbd"),
    _r_("boolean" == typeof e)
}
,
goog.isNumber = function(e) {
    return _i_("3da:22fe08e0"),
    _r_("number" == typeof e)
}
,
goog.isString = function(e) {
    return _i_("3da:62ef19cc"),
    _r_("string" == typeof e)
}
,
goog.isObject = function(e) {
    _i_("3da:57ab6953");
    var t = typeof e;
    return _r_("object" === t && null != e || "function" === t)
}
,
goog.isArray = function(e) {
    return _i_("3da:45405f7d"),
    _r_("array" === $.type(e))
}
,
goog.isFunction = function(e) {
    return _i_("3da:464a4c18"),
    _r_("function" === $.type(e))
}
,
function(r) {
    _i_("3da:2d7701e9"),
    r.ajaxSetup && r.ajaxSetup({
        cache: !1,
        beforeSend: function(e, t) {
            if (_i_("3da:a0c88bd4"),
            e.setRequestHeader("X-Booking-Pageview-Id", booking.env.pageview_id),
            e.setRequestHeader("X-Booking-AID", booking.env.aid || booking.env.b_aid),
            e.setRequestHeader("X-Booking-Session-Id", booking.env.b_sid),
            booking.env.b_site_type_id && e.setRequestHeader("X-Booking-SiteType-Id", booking.env.b_site_type_id),
            booking.env.b_partner_channel_id && e.setRequestHeader("X-Partner-Channel-Id", booking.env.b_partner_channel_id),
            booking.env.b_label && e.setRequestHeader("X-Booking-Label", encodeURIComponent(booking.env.b_label || "")),
            booking.env.b_csrf_token && e.setRequestHeader("X-Booking-CSRF", booking.env.b_csrf_token),
            booking.env.b_lang_for_url && e.setRequestHeader("X-Booking-Language-Code", booking.env.b_lang_for_url),
            booking.env.b_extra_ajax_headers)
                for (var i in booking.env.b_extra_ajax_headers)
                    booking.env.b_extra_ajax_headers.hasOwnProperty(i) && e.setRequestHeader(i, booking.env.b_extra_ajax_headers[i]);
            var n = booking.require("et").tracked();
            n && e.setRequestHeader("X-Booking-Client-Info", n);
            var a = r("#req_info").html();
            a && e.setRequestHeader("X-Booking-Info", a),
            _r_()
        }
    }),
    _r_()
}(window.jQuery),
window.bookmark = function(t, i, e) {
    if (_i_("3da:35fee8c5"),
    window.sidebar && window.sidebar.addPanel)
        window.sidebar.addPanel(i, t, "");
    else if (window.external)
        try {
            window.external.AddToFavoritesBar(t, i)
        } catch (e) {
            window.external.AddFavorite(t, i)
        }
    else
        window.opera && window.print && (e.title = i);
    return _r_(!1)
}
,
window.addBookmark = function(e, t) {
    _i_("3da:f38dfcc1"),
    window.sidebar ? window.sidebar.addPanel(e, t, "") : document.all ? window.external.AddFavorite(t, e) : alert("Sorry your browser doesn't support this function\nTo bookmark this page\nWindows users press ctrl + D\nMac users press cmd + D"),
    _r_()
}
,
window.hideFrameContainer = function(e) {
    (_i_("3da:5e6e61eb"),
    document.getElementById) && (document.getElementById(e).style.display = "none",
    document.getElementById("headline_newsletter").style.display = "block",
    document.getElementById("headline_createprofile").style.display = "none");
    _r_()
}
,
window.changeHeadline = function() {
    _i_("3da:e2c3df8b"),
    document.getElementById("headline_newsletter").style.display = "none",
    document.getElementById("headline_createprofile").style.display = "block",
    _r_()
}
,
window.hideEl = function e(t) {
    _i_("3da:1cb96ab6"),
    $.isArray(t) && $.each(t, function() {
        _i_("3da:f6501281"),
        e(this),
        _r_()
    }),
    $("#" + t).hide(),
    _r_()
}
,
window.showEl = function(e) {
    _i_("3da:1a055500"),
    $("#" + e).show(),
    _r_()
}
,
window.showFrameContainer = function(e, t, i, n, a, r, o, _) {
    if (_i_("3da:0a2ed645"),
    document.getElementById) {
        var s = document.getElementById(e)
          , d = document.getElementById(t)
          , c = document.getElementById(i);
        if ("block" === d.style.display)
            return d.style.display = "none",
            _r_(!1);
        c.src !== n && (c.src = n),
        d.style.visibility = "hidden",
        d.style.display = "block";
        var l = $(s).position() || {}
          , u = l.left
          , f = l.top;
        o && (u += o),
        _ && (f += _),
        a || (a = d.offsetWidth);
        var h = document.getElementById("bodyconstraint").offsetWidth;
        return h < u + a && (u = h - a - 40),
        d.style.left = u + "px",
        d.style.top = f + "px",
        d.style.visibility = "visible",
        _r_(!1)
    }
    window.open(n),
    _r_()
}
,
window.sSc = function(e, t, i) {
    _i_("3da:8535804d"),
    document.getElementById && (document.getElementById("rsc_" + e).innerHTML = i),
    _r_()
}
,
window.sSc3 = function(e, t) {
    _i_("3da:36464334"),
    $("li[id^=" + e + "]").attr("style", "display: none; "),
    $("li[id^=" + t + "]").removeAttr("style"),
    _r_()
}
,
window.sSc2 = function(e, t, i) {
    if (_i_("3da:bda7dcfd"),
    document.getElementById) {
        document.getElementById("rnr") && (document.getElementById("rnr").innerHTML = e);
        for (var n = -1; n < 10; n++) {
            var a = document.getElementById("rl" + n);
            a && (a.style.color = "",
            a.style.textDecoration = "underline")
        }
        var r;
        t.style.color = "#003580",
        t.style.textDecoration = "none",
        t.blur(),
        $("#gr_profile_chooser ul").removeClass().addClass(i),
        $(".review_filter_sub").text($(t).find(".key").text()),
        r = "group" === i || "review_category_group_of_friends" === i ? "group_big" : "solo_traveller" === i ? "solo_big" : "family_with_young_children" === i || "review_category_family" === i ? "youngchildren_big" : "mature_couple" === i ? "maturecouple_big" : "family_with_older_children" === i ? "oldchildren_big" : "with_friends" === i ? "withfriends_big" : "young_couple" === i || "review_category_couple" === i ? "youngcouple_big" : "global_big",
        $(".review_user_type").attr("class", "review_user_type type_" + r)
    }
    _r_()
}
,
$(function() {
    _i_("3da:8ec28485"),
    $(".newsletter_ajax_error").hide(),
    $('input#to[type="text"]').css({
        backgroundColor: "#FFFFFF"
    }),
    $('input#to[type="text"]').focus(function() {
        _i_("3da:0468c968"),
        $(this).css({
            color: "#003580"
        }),
        this.value === this.defaultValue && (this.value = ""),
        this.value !== this.defaultValue && this.select(),
        _r_()
    }),
    $("input.text-input").blur(function() {
        _i_("3da:804f202b"),
        $(this).css({
            backgroundColor: "#FFFFFF"
        }),
        _r_()
    }),
    _r_()
}),
function(e, t) {
    _i_("3da:d5469f34"),
    t = t || {};
    var i = e.console || {};
    i.warn = i.warn || function() {}
    ;
    var n = {
        _list: {},
        get: function(e) {
            return _i_("3da:271cbdff"),
            _r_(n._list[e])
        },
        set: function(e, t) {
            _i_("3da:81ac4711"),
            t = t || "",
            "string" == typeof (e = e || "") && (e = e.replace(/^\s+|\s+$/g, "")),
            "string" == typeof t && (t = t.replace(/^\s+|\s+$/g, "")),
            0 < e.length && "string" == typeof e || "string" != typeof e ? (void 0 !== n._list[e] && i.warn("Booking Strings: replacing string with id: " + e),
            n._list[e] = t) : i.warn("Booking Strings: trying to insert string with empty id"),
            _r_()
        }
    };
    t.strings = function(e, t) {
        return _i_("3da:08e3bf09"),
        _r_(n[void 0 !== t ? "set" : "get"](e, t))
    }
    ,
    t.strings.get = n.get,
    t.strings.set = n.set,
    _r_()
}(window, booking),
B.define("search-config", ["tmpl_data", "event-emitter"], function(t, i, n) {
    "use strict";
    function a(e) {
        if (_i_("3da:e7f2ca2d"),
        !(this instanceof a))
            return _r_(new a(e));
        this.adults = Number(e.b_adults) || 0,
        this.children = Number(e.b_children) || 0,
        this.childrenAges = this.children ? e.b_children_ages.map(Number) : [],
        this.order = Number(e.b_room_order),
        _r_()
    }
    function r(e) {
        _i_("3da:90281b16"),
        e === n && (e = t("b_search_config") || window.__be_data__ && window.__be_data__.b_search_config),
        e ? this._set(e) : (this.isDefault = !0,
        this.isGroupSearch = !1,
        this.adults = 2,
        this.children = 0,
        this.rooms = [a({
            b_adults: 2,
            b_children: 0,
            b_children_ages: [],
            b_room_order: 1
        })],
        this.childrenAges = [],
        this.tripLeg = "roundtrip",
        this.travelClass = "",
        this.infants = 0),
        i.extend(this),
        _r_()
    }
    return _i_("3da:e92bb476"),
    a.prototype.toString = function() {
        _i_("3da:961d1e29");
        for (var e = [], t = 0; t < this.adults; t++)
            e.push("A");
        return e = e.concat(this.childrenAges),
        _r_(e.join(","))
    }
    ,
    r.prototype._set = function(e) {
        _i_("3da:722ff569"),
        e.b_rooms || (e.b_rooms = []),
        this.isDefault = !1,
        this.isGroupSearch = Boolean(Number(e.b_is_group_search)),
        this.adults = Number(e.b_adults_total),
        this.children = Number(e.b_children_total) || 0,
        this.infants = Number(e.b_infants_total) || 0,
        this.pets = Number(e.b_pets_total) || 0,
        this.rooms = e.b_rooms.map(a),
        this.childrenAges = this.rooms.reduce(function(e, t) {
            return _i_("3da:3ec3ada4"),
            _r_(e.concat(t.childrenAges))
        }, []),
        0 == this.rooms.length && 0 < this.children && e.b_children_ages_total && (this.childrenAges = e.b_children_ages_total),
        B.env && B.env.search_box_keep_children_ages_order || this.childrenAges.sort(),
        this.travelClass = e.travel_class ? e.travel_class : "",
        this.tripLeg = e.trip_leg ? e.trip_leg : "roundtrip",
        _r_()
    }
    ,
    r.prototype.set = function(e) {
        _i_("3da:ac19c19f"),
        this._set(e),
        this.emit("change"),
        _r_()
    }
    ,
    r.prototype.toArray = function(e) {
        return _i_("3da:ad251652"),
        _r_(e ? new r(e).toArray() : this.rooms.map(Function.prototype.call, a.prototype.toString))
    }
    ,
    r.prototype.toObject = function(e) {
        return _i_("3da:4783e94e"),
        _r_(this.toArray(e).reduce(function(e, t, i) {
            return _i_("3da:074a9374"),
            e["room" + (i + 1)] = t,
            _r_(e)
        }, {}))
    }
    ,
    r.prototype.getRawValue = function() {
        return _i_("3da:548cb758"),
        _r_({
            b_adults_total: this.adults,
            b_nr_rooms_needed: this.rooms.length,
            b_children_total: this.children,
            b_children_ages_total: this.childrenAges,
            b_is_group_search: this.isGroupSearch ? 1 : 0,
            b_pets_total: this.pets,
            b_rooms: this.rooms.map(function(e) {
                _i_("3da:ae9e70ac");
                var t = {
                    b_adults: e.adults,
                    b_room_order: e.order
                };
                return e.children && (t.b_children = e.children,
                t.b_children_ages = e.childrenAges),
                _r_(t)
            })
        })
    }
    ,
    _r_(new r)
}),
booking.formatter = booking.formatter || {},
booking.formatter.date = B.require("formatting/date").compat,
B.define("fragment", ["jquery", "promise"], function(s, a) {
    _i_("3da:b90971cd");
    var r, o, d = B.debug("fragment"), _ = 0, c = [], l = function() {
        _i_("3da:db8e41a3");
        var e, t, r = [], i = !0;
        if (1 === c.length)
            ((t = c[0]).args.tmpl || t.args.async_component) && (i = !1),
            e = Object.assign({
                name: t.name
            }, t.args),
            r.push(t);
        else {
            for (var n = {}, a = 0, o = c.length; a < o; a++)
                t = c[a],
                r.push(t),
                t.name in n || (n[t.name] = {}),
                n[t.name][t.id] = t.args;
            e = {
                batch: JSON.stringify(n)
            }
        }
        var _ = i ? B.env.b_fragment_url_json : B.env.b_fragment_url_html;
        c = [],
        d.info("Request", _, e),
        s.ajax({
            url: _,
            data: e,
            type: "POST",
            cache: !1
        }).done(function(e) {
            _i_("3da:fcef9659"),
            d.info("Resolve", e, r);
            var t = function(e, t) {
                _i_("3da:219ff66e"),
                t && "object" == typeof t && "status"in t && "data"in t ? 200 <= t.status && t.status < 300 ? e.resolve(t.data) : e.reject(t.status) : e.resolve(t),
                _r_()
            };
            if (1 === r.length)
                t(r[0], e);
            else
                for (var i, n = 0, a = r.length; n < a; n++) {
                    if (!e[(i = r[n]).name]) {
                        i.resolve(void 0);
                        continue
                    }
                    t(i, e[i.name][i.id])
                }
            (B.env.b_dev_server || B.env.dev_server) && u(e),
            _r_()
        }).fail(function(e) {
            _i_("3da:344e4324"),
            d.info("Reject", e, r);
            for (var t = 0, i = r.length; t < i; t++)
                r[t].reject();
            _r_()
        }),
        _r_()
    }, u = function(e) {
        _i_("3da:2a26a8c8");
        var t = B.require("events")
          , i = B.devTools && B.devTools.trackedExperiments || []
          , n = {};
        "object" == typeof e && (B.devTools = B.devTools || {},
        i = i.concat(e._exp_debug_data)),
        window.B.devTools.trackedExperiments = i.reduce(function(e, t, i) {
            return _i_("3da:72064c76"),
            void 0 !== t && (isNaN(n[t.name]) ? (n[t.name] = e.length,
            e.push(t)) : e[n[t.name]].name == t.name ? e[n[t.name]].trackingPoints = e[n[t.name]].trackingPoints.concat(t.trackingPoints) : console.warn("ops", e[n[t.name]].name, t.name)),
            _r_(e)
        }, []),
        t.trigger("TRACKING.exp_tracking_update"),
        _r_()
    };
    return _r_({
        call: function(e, t) {
            return _i_("3da:3d319043"),
            _r_(function(i, n) {
                if (_i_("3da:35903f34"),
                !i)
                    throw new Error("Fragment name cannot be undefined.");
                return _r_(new a(function(e, t) {
                    _i_("3da:d2ca29a7"),
                    clearTimeout(o),
                    0 === c.length && (r = Date.now()),
                    c.push({
                        id: "frg-" + _++,
                        name: i,
                        args: n,
                        resolve: e,
                        reject: t
                    }),
                    1 < c.length && 200 < Date.now() - r || 50 === c.length ? l() : o = setTimeout(l, 15),
                    _r_()
                }
                ))
            }(e, function(e) {
                _i_("3da:e18fcd7e");
                var t = {};
                if (e)
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var n = e[i];
                            t[i] = "object" == typeof n ? JSON.stringify(n) : n
                        }
                return _r_(t)
            }(t)))
        }
    })
}),
B.define("images", function(e, t, i) {
    "use strict";
    _i_("3da:24bf386d");
    var a = e("promise");
    i.exports = {
        getImage: function(n) {
            return _i_("3da:2eb9f03e"),
            _r_(new a(function(e, t) {
                _i_("3da:43d6da4a");
                var i = new Image;
                i.onload = function() {
                    _i_("3da:6e7b4063"),
                    e(n),
                    _r_()
                }
                ,
                i.onerror = function() {
                    _i_("3da:a5362b72"),
                    t(n),
                    _r_()
                }
                ,
                i.src = n,
                _r_()
            }
            ))
        }
    },
    _r_()
}),
B.define("component/close-animate", function(e, t, i) {
    "use strict";
    _i_("3da:36e8e880");
    var n = e("component")
      , a = {
        anim: "fadeOut",
        speed: 200
    };
    i.exports = n.extend({
        init: function() {
            _i_("3da:3bbc92e7"),
            this.container = this.$el.closest("[data-close-container]"),
            this.options = $.extend(a, this.$el.data("close-options")),
            this.addEventListeners(),
            _r_()
        },
        addEventListeners: function() {
            _i_("3da:55faea1e");
            var e = this
              , t = B.env.pointerEvents && B.env.pointerEvents.click ? B.env.pointerEvents.click : "click";
            e.$el.on(t, function() {
                _i_("3da:230a6951"),
                e.container[e.options.anim](e.options.speed, function() {
                    _i_("3da:23c288a2"),
                    e.options.cb && $(this)[e.options.cb](),
                    _r_()
                }),
                _r_()
            }),
            _r_()
        }
    }),
    _r_()
}),
function(e, _, n) {
    _i_("3da:0e2a4c10");
    var t = n(document)
      , a = {
        mouseenter: "hover",
        click: "click"
    };
    t.on("click mouseenter mouseleave", "[data-google-track]", function(e) {
        _i_("3da:97f84ced");
        var t = (n(this).data("google-track") || "").split("/")
          , i = B.require("ga-tracker");
        t[0].toLowerCase() === a[e.type] && i.trackEvent.apply(i, t),
        _r_()
    }),
    B.env.b_new_ga_track || t.delegate("[data-ga-track]", "click", function(e) {
        _i_("3da:64ce1e09");
        var t = B.require("ga-tracker")
          , i = (n(this).data("ga-track") || "").split(":");
        i[0].toLowerCase() === a[e.type] && t.trackPageview.apply(t, i),
        _r_()
    }),
    _.env.b_occupancy = function() {
        _i_("3da:398b95e0");
        var e, t, i, n = _.env.b_group, a = 0, r = 0, o = {
            adults: 2,
            children: 0,
            guests: 2
        };
        if ("[object Array]" !== Object.prototype.toString.apply(n))
            return _r_(o);
        if (t = n.length,
        i = n[0],
        !(1 < t || 1 === t && (1 === i.guests || 2 < i.guests || 0 < i.children)))
            return _r_(o);
        for (e = 0; e < t; e += 1)
            a += (i = n[e]).guests,
            r += i.children;
        return _r_({
            adults: a,
            children: r,
            guests: a + r
        })
    }(),
    _.eventEmitter = n(e),
    _r_()
}(window, window.booking, window.jQuery),
B.define("component", function() {
    "use strict";
    function r() {}
    return _i_("3da:54b5afef"),
    r.prototype.prepare = function(e) {
        for (var t in _i_("3da:c3a19528"),
        e)
            e.hasOwnProperty(t) && (this[t] = e[t]);
        _r_()
    }
    ,
    r.prototype.init = function() {}
    ,
    r.prototype.destroy = function() {}
    ,
    r.prototype.render = function() {}
    ,
    r.extend = function(e, t) {
        _i_("3da:7cd29073");
        var i = function() {}
          , n = t ? new t : new r;
        for (var a in e)
            e.hasOwnProperty(a) && (n[a] = e[a]);
        return i.prototype = n,
        i.extend = function(e) {
            return _i_("3da:5d973ff6"),
            _r_(r.extend.call(null, e, i))
        }
        ,
        _r_(i)
    }
    ,
    _r_(r)
}),
B.define("component/legacy", function(e, t, i) {
    "use strict";
    _i_("3da:c7ebef83");
    var r = e("jquery")
      , o = {};
    function n(e, t) {
        _i_("3da:8f1f98f7"),
        t.legacy = !0,
        B.define("component/" + e, function() {
            return _i_("3da:bb152c39"),
            _r_(t)
        }),
        _r_()
    }
    function a(e, t, i) {
        _i_("3da:f951c395");
        var n = B.require("component/" + e);
        if (!n.legacy)
            throw new Error("Illegal legacy B.components.require of non-legacy component " + e + ".");
        var a = t ? t.data("component-instance-" + e) : o[e];
        return (i || void 0 === a) && (a = "function" == typeof n ? new n(B,r) : library[e],
        i || (t ? t.data("component-instance-" + e, a) : o[e] = a,
        a.init && a.init(t))),
        _r_(a)
    }
    function _(e) {
        var t;
        _i_("3da:e41243a1");
        for (var i = 1, n = arguments.length; i < n; i++)
            (t = a(arguments[i], void 0, !0)).extend ? t.extend(e) : r.extend(e, t);
        _r_()
    }
    function s(e, t) {
        _i_("3da:f32c9b7c");
        var i = a(t, void 0, !0);
        r.extend(e, i, {
            parent: i
        }),
        _r_()
    }
    t.register = function(e) {
        _i_("3da:c9ee3103"),
        e.components = e.components || {},
        e.components.define = n,
        e.components.extend = _,
        e.components.inherit = s,
        e.components.require = a,
        _r_()
    }
    ,
    _r_()
}),
B.define("component/loader", function(a, e, t) {
    "use strict";
    _i_("3da:62ad2f1c");
    var d = a("jquery");
    function r(e, t) {
        _i_("3da:f4311e97");
        var i = a("component/" + e)
          , n = t.data("component-instance-" + e);
        if ("function" != typeof i)
            throw new Error("component/" + e + " is not a constructor");
        return void 0 === n && (i.legacy ? (n = new i(B,d)).init && n.init(t) : ((n = new i).prepare({
            el: t[0],
            $el: t
        }),
        n.init && n.init()),
        t.data("component-instance-" + e, n)),
        _r_(n)
    }
    function c(e, t, i) {
        _i_("3da:408aa594");
        var n = function(e) {
            _i_("3da:83029d99");
            var t, i = e.getAttribute("data-async-css"), n = e.getAttribute("data-async-js");
            if (i || n)
                return t = {},
                i && (t.css = i),
                n && (t.js = n),
                _r_(t);
            return _r_(!1)
        }(t[0]);
        n ? setTimeout(function() {
            _i_("3da:61e1e386"),
            a("async-loader").load(n).then(function() {
                _i_("3da:50fef3c2"),
                r(e, t),
                _r_()
            }),
            _r_()
        }, 4) : B.env.bcomponents_events ? (i = i || function(e) {
            _i_("3da:8d4783ac"),
            e(),
            _r_()
        }
        ,
        setTimeout(i(r.bind(null, e, t), 4))) : setTimeout(r.bind(null, e, t), 4),
        _r_()
    }
    function i(e) {
        if (_i_("3da:522790a7"),
        0 == this.length)
            throw new Error("No element found with selector, unable to look for component.");
        if (1 != this.length)
            throw new Error("Multiple elements found with selector, refusing to look for component.");
        return _r_(r(e, this))
    }
    function n() {
        return _i_("3da:890426f2"),
        e.loadComponents(this),
        a("et").initAttributesTracking(this),
        _r_(this)
    }
    function l(a, r, o, _) {
        return _i_("3da:745e95a6"),
        _r_(function(e) {
            var t;
            _i_("3da:f447a6c8"),
            e();
            var i = a.data(_.ELEMENTS_AMOUNT)
              , n = (r.data(_.COMPONENTS_AMOUNT) || 0) + 1;
            r.data(_.COMPONENTS_AMOUNT, n),
            n == o.length && (r.data(_.COMPONENTS_AMOUNT, n),
            t = a.data(_.ELEMENTS_LOADED) + 1,
            a.data(_.ELEMENTS_LOADED, t),
            i == t && (a.trigger(_.ON_ELEMENTS_LOAD),
            a.data(_.ELEMENTS_FINISHED, !0))),
            _r_()
        })
    }
    e.loadComponents = function(e) {
        var t, i, n, a, r, o;
        _i_("3da:2a4c0702");
        var _ = {
            COMPONENTS_AMOUNT: "components-amount",
            ELEMENTS_AMOUNT: "component-elements-amount",
            ELEMENTS_LOADED: "component-elements-loaded",
            ELEMENTS_FINISHED: "component-elements-finished",
            ON_ELEMENTS_LOAD: "bcomponents:elements-load"
        }
          , s = (e = e || d("html")).find("[data-component]");
        for (e.is("[data-component]") && (s = 1 < e.length ? s.add(e) : s.add(e.filter("[data-component]"))),
        e.data(_.ELEMENTS_AMOUNT, s.length),
        e.data(_.ELEMENTS_LOADED, 0),
        e.data(_.ELEMENTS_FINISHED, !1),
        t = 0,
        n = s.length; t < n; t++)
            for (r = s.eq(t),
            i = 0,
            a = (o = d.trim(r.attr("data-component")).split(/\s+/g)).length; i < a; i++)
                c(o[i], r, l(e, r, o, _));
        _r_()
    }
    ,
    e.getComponent = function(e, t) {
        _i_("3da:07ebab98");
        var i, n = d(e);
        if (t && n.data("component-instance-" + t))
            return _r_(n.data("component-instance-" + t));
        return i = n.attr("data-component"),
        _r_(i ? n.data("component-instance-" + i) : null)
    }
    ,
    e.registerJQuery = function() {
        _i_("3da:e015de72"),
        d.fn.component = i,
        d.fn.loadComponents = n,
        _r_()
    }
    ,
    _r_()
}),
function(e, t) {
    "use strict";
    _i_("3da:22692b34");
    var i = e.require("component/loader")
      , n = e.require("component/legacy");
    i.registerJQuery(),
    n.register(e),
    t(function() {
        _i_("3da:3aaefcfd"),
        i.loadComponents(),
        _r_()
    }),
    _r_()
}(booking, jQuery),
function() {
    _i_("3da:ea2a063a");
    var a = B.require("jquery")
      , e = {
        popups: [],
        tempTar: null,
        sizes: {
            s: {
                width: 300,
                height: 400
            },
            m: {
                width: 400,
                height: 400
            },
            l: {
                width: 600,
                height: 580
            },
            xl: {
                width: 850,
                height: 600
            }
        },
        init: function() {
            _i_("3da:1b54b733");
            var n = this;
            a(document).on("click.popup_win", ".popup_s, .popup_m, .popup_l, .popup_xl", function() {
                _i_("3da:da083f96");
                for (var e = "l", t = a(this).attr("class").split(" "), i = 0; i < t.length; i++)
                    -1 < t[i].indexOf("popup_") && (e = t[i].split("_")[1]);
                return n.tempTar = a(this).attr("href") || a(this).data("url"),
                n.openPopup(e),
                _r_(!1)
            }),
            _r_()
        },
        openPopup: function(e) {
            _i_("3da:119dd43e");
            var t = this.sizes[e];
            this.popups.push(window.open(this.tempTar, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=" + t.width + ",height=" + t.height + ",left=200,top=200")),
            1 < this.popups.length && (this.popups[0].close(),
            this.popups.shift(),
            this.tempTar = null),
            _r_()
        }
    };
    B.when({
        events: "ready"
    }).run(function() {
        _i_("3da:31eef147"),
        e.init(),
        _r_()
    }),
    _r_()
}(),
B.define("component/fragment", function(e, t, i) {
    _i_("3da:90431b31");
    var n = e("component")
      , a = e("fragment")
      , r = e("when")
      , o = e("et");
    i.exports = n.extend({
        fragmentName: void 0,
        fragmentTemplate: void 0,
        fragmentIsCS: void 0,
        fragmentArgs: {},
        init: function() {
            _i_("3da:92038f12");
            var e = this.$el.attr("data-fragment-event") || !1;
            e ? this._loadWithWhen(e) : this.fragmentLoadFragment(),
            _r_()
        },
        _loadWithWhen: function(e) {
            _i_("3da:a238260f"),
            r({
                events: e
            }).run(function() {
                _i_("3da:f73b9404"),
                this.fragmentLoadFragment(),
                _r_()
            }
            .bind(this)),
            _r_()
        },
        fragmentParamAttrs: function() {
            _i_("3da:52e349b1");
            for (var e, t, i = {}, n = this.el.attributes, a = 0, r = n.length; a < r; a++)
                (t = (e = n[a]).nodeName) && 5 < t.length && 0 === t.indexOf("data-param-") && (i[t.slice(11)] = e.nodeValue);
            return _r_(i)
        },
        fragmentLoadFragment: function() {
            _i_("3da:82923ef3");
            var r, o, e = this.fragmentParamAttrs(), _ = this.$el.attr("data-fragment-source"), t = this.$el.attr("data-fragment-name");
            void 0 === t && (t = this.fragmentName);
            var i = this.$el.attr("data-fragment-tmpl")
              , n = this.$el.attr("data-fragment-cs-tmpl")
              , s = this.$el.attr("data-fragment-replace");
            void 0 !== i && void 0 !== n && B.env.b_is_dev_server && console.error("Fragment component cannot have both `fragment-tmpl` and `fragment-cs-tmpl` defined."),
            void 0 !== i ? (o = i,
            r = !1) : void 0 !== n ? (o = n,
            r = !0) : (o = this.fragmentTemplate,
            r = this.fragmentIsCS);
            var d = Object.assign({}, this.fragmentArgs, e)
              , a = {
                soruce: _,
                tmpl: o,
                isCS: r,
                args: d
            };
            if (!1 !== this.fragmentBeforeRequest(a)) {
                d = a.args,
                !r && o && (d.tmpl = o);
                var c = this;
                this.fragmentRequest(t, d).then(function(e) {
                    _i_("3da:40e3b10b");
                    var t = {
                        source: _,
                        data: e,
                        ctx: {},
                        args: d
                    };
                    if (!1 !== c.fragmentBeforeRender(t) && o) {
                        var i, n;
                        if (r) {
                            var a = Object.assign(t.ctx, {
                                data: t.data || "",
                                source: t.source || ""
                            });
                            i = B.jstmpl(o).render(a)
                        } else
                            i = t.data || "";
                        t.$targetEl ? t.$targetEl.html(i) : s ? (n = $(i),
                        c.$el.replaceWith(n),
                        c.$el = n) : c.$el.html(i),
                        c.fragmentAfterRender(t)
                    }
                    _r_()
                }, function(e) {
                    _i_("3da:b58a6351");
                    var t = {
                        source: _,
                        error: e
                    };
                    c.fragmentRequestError(t),
                    _r_()
                })
            }
            _r_()
        },
        fragmentRequest: function(e, t) {
            return _i_("3da:d80c3468"),
            _r_(a.call(e, t))
        },
        fragmentBeforeRequest: function() {},
        fragmentRequestError: function() {},
        fragmentBeforeRender: function() {},
        fragmentAfterRender: function() {
            _i_("3da:1168c49a"),
            o.initAttributesTracking(this.$el),
            this.$el.loadComponents && this.$el.loadComponents(),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/sh", function(e, t, i) {
    "use strict";
    _i_("3da:0632d919");
    var a = e = e("jquery")
      , r = a(window);
    return _r_(function() {
        function n(e) {
            _i_("3da:66ce9ae5"),
            e.map(function(e) {
                _i_("3da:c5a44a80"),
                B.eventEmitter.triggerHandler("SH:" + e),
                _r_()
            }),
            _r_()
        }
        _i_("3da:b038b5b8"),
        this.prepare = function(e) {
            for (var t in _i_("3da:29eb02c6"),
            e)
                e.hasOwnProperty(t) && (this[t] = e[t]);
            _r_()
        }
        ,
        this.init = function() {
            _i_("3da:0e179b3a");
            var e = this.$el
              , t = e.offset().top
              , i = function() {
                var e;
                _i_("3da:ff8c668e"),
                e = t,
                _i_("3da:68a90ba5"),
                _r_(r.scrollTop() + r.height() > e) && (n(["seen"]),
                r.unbind("scroll", i)),
                _r_()
            };
            r.bind("scroll", i),
            e.delegate(".lp-search-history-list-item", "click", function(e) {
                _i_("3da:60ac7c16");
                var t = a(this);
                if (!t.find(".lp-search-history-list-item-link").length)
                    return _r_();
                var i = t.get(0).className.match(/sh-timestamp[^ \n]*/g) || [];
                i.push("clicked"),
                n(i),
                _r_()
            }),
            e.find(".lp-sh-hide-search").bind("click", function(e) {
                _i_("3da:34344c81"),
                n(["removed"]),
                _r_()
            }),
            i(),
            _r_()
        }
        ,
        _r_()
    })
}),
B.define("user-left-client", function(e, t, i) {
    "use strict";
    _i_("3da:bac1796d");
    var n = e("user-left-tab")
      , a = e("user-left-store")
      , r = e("utils/simple-unique-id")
      , o = "lastSeen";
    i.exports = {
        enabled: a.enabled,
        onHideTab: function(e) {
            _i_("3da:2f754e12"),
            a.set(o, (new Date).getTime()),
            _r_()
        },
        onShowTab: function(e) {
            _i_("3da:f80c973e"),
            a.set(o, 0),
            _r_()
        },
        addEventListeners: function() {
            _i_("3da:5ef8545b"),
            this._onShowTab = this.onShowTab.bind(this),
            this._onHideTab = this.onHideTab.bind(this),
            n.addListener("show", this._onShowTab),
            n.addListener("hide", this._onHideTab),
            _r_()
        },
        removeEventListeners: function() {
            _i_("3da:98384402"),
            this._onShowTab && n.removeListener("show", this._onShowTab),
            this._onHideTab && n.removeListener("hide", this._onHideTab),
            _r_()
        },
        register: function(e) {
            _i_("3da:13593386"),
            this.tabId = e + "_" + r(),
            this.addEventListeners(),
            _r_()
        }
    },
    _r_()
}),
B.define("user-left-master", function(e, t, i) {
    _i_("3da:633612db");
    var n = e("event-emitter")
      , a = e("user-left-tab")
      , r = e("user-left-store")
      , o = e("utils/simple-unique-id")
      , _ = "lastSeen"
      , s = booking.env.bp_has_left_threshold ? booking.env.bp_has_left_threshold : 7;
    i.exports = n.extend({
        enabled: r.enabled,
        didUserLeft: function() {
            if (_i_("3da:84ceaa3d"),
            this.halt)
                return _r_();
            this.checkSessionMarker() || (this.stopCounting(),
            this.removeEventListeners());
            var e = parseInt(r.get(_), 10);
            if (!e)
                return _r_();
            var t = (new Date).getTime();
            s <= (t - e) / 1e3 && (this.stopCounting(),
            this.showNotification()),
            _r_()
        },
        removeNotification: function() {
            _i_("3da:0471214a"),
            this.originalFavicon && this.changeFavicon(this.originalFavicon),
            document.title = this.originalTitle,
            _r_()
        },
        changeFavicon: function(e) {
            _i_("3da:4d1c4104"),
            this.$favicon && this.$favicon.attr("href", e),
            _r_()
        },
        setNotifyFavicon: function(e) {
            _i_("3da:6282194d"),
            this.$favicon = $('link[rel="shortcut icon"]').first(),
            this.$favicon.length && (this.originalFavicon = this.$favicon.attr("href"),
            this.notifyFavicon = e),
            _r_()
        },
        setNotificationStatus: function(e) {
            _i_("3da:93e8642b"),
            this.notificationStatus = !1 !== e,
            _r_()
        },
        showNotification: function() {
            _i_("3da:ce88ee18"),
            !(this.notified = !0) !== this.notificationStatus && (this.notifyFavicon && this.changeFavicon(this.notifyFavicon),
            document.title = "(1) " + document.title),
            _r_()
        },
        startCounting: function() {
            if (_i_("3da:e4bd9b87"),
            this.notified)
                return _r_();
            this.halt = !1,
            this.counterId = setInterval(this.didUserLeft.bind(this), 1e3),
            _r_()
        },
        stopCounting: function() {
            _i_("3da:9eb8dc8d"),
            this.halt = !0,
            clearInterval(this.counterId),
            _r_()
        },
        onShowTab: function(e) {
            _i_("3da:04d1e8a3"),
            this.stopCounting(),
            r.set(_, 0),
            this.notified && !this.cameBack && (this.cameBack = !0,
            this.removeEventListeners(),
            this.removeNotification(),
            this.trigger("back")),
            _r_()
        },
        onHideTab: function(e) {
            _i_("3da:215c1c5e"),
            r.set(_, (new Date).getTime()),
            this.startCounting(),
            _r_()
        },
        addEventListeners: function() {
            _i_("3da:7814d1cc"),
            this._onShowTab = this.onShowTab.bind(this),
            this._onHideTab = this.onHideTab.bind(this),
            a.addListener("show", this._onShowTab),
            a.addListener("hide", this._onHideTab),
            _r_()
        },
        removeEventListeners: function() {
            _i_("3da:61702491"),
            this._onShowTab && a.removeListener("show", this._onShowTab),
            this._onHideTab && a.removeListener("hide", this._onHideTab),
            _r_()
        },
        setSessionMarker: function() {
            if (_i_("3da:1f335348"),
            !booking.browserStorageHandler)
                return _r_();
            booking.browserStorageHandler.addPermanentValue(this.sessionMarkerKey, this.tabId, !1),
            _r_()
        },
        checkSessionMarker: function() {
            if (_i_("3da:c33202df"),
            this.tabId != booking.browserStorageHandler.getPermanentValue(this.sessionMarkerKey, !1))
                return _r_(!1);
            return _r_(!0)
        },
        register: function(e, t) {
            _i_("3da:b9327949"),
            this.originalTitle = document.title,
            this.tabId = e + "_" + o(),
            this.sessionMarkerKey = t,
            this.setSessionMarker(),
            r.set(_, 0),
            this.addEventListeners(),
            _r_()
        }
    }),
    _r_()
}),
B.define("user-left-store", function(e, t, i) {
    "use strict";
    _i_("3da:9d934088");
    var n = e("jquery");
    i.exports = {
        enabled: 1,
        encode: function(e) {
            return _i_("3da:803f6de1"),
            _r_(e)
        },
        decode: function(e) {
            return _i_("3da:803f6de11"),
            _r_(e)
        },
        get: function(e) {
            return _i_("3da:ee50ccac"),
            _r_(this.decode(n.cookie(e)))
        },
        set: function(e, t) {
            return _i_("3da:470a89b3"),
            _r_(n.cookie(e, this.encode(t), {
                expires: null,
                path: "/",
                domain: "booking.com"
            }))
        }
    },
    _r_()
}),
B.define("user-left-tab", function(e, t, i) {
    "use strict";
    _i_("3da:81f83760");
    var n = e("window-visibilitychange")
      , a = e("event-emitter")
      , r = a.extend({
        init: function() {
            _i_("3da:a5a033db"),
            this.didInit || ($(window).focus(this.show.bind(this)),
            $(window).blur(this.hide.bind(this)),
            $(window).bind("load", this.onLoad.bind(this)),
            n.on("visibilitychange", this.visibilityChange.bind(this)),
            this.didInit = !0),
            _r_()
        },
        visibilityChange: function(e) {
            _i_("3da:ec74818a"),
            n.hidden ? this.emit("hide", e) : this.emit("show", e),
            _r_()
        },
        onLoad: function(e) {
            _i_("3da:8b815fd7"),
            n.hidden || this.show(e),
            _r_()
        },
        show: function(e) {
            _i_("3da:5a589ea5"),
            this.emit("show", e),
            _r_()
        },
        hide: function(e) {
            _i_("3da:06f0f6c8"),
            this.emit("hide", e),
            _r_()
        }
    });
    r.addListener = r.on = function() {
        _i_("3da:50481165"),
        r.init(),
        a.prototype.addListener.apply(r, arguments),
        _r_()
    }
    ,
    i.exports = r,
    _r_()
}),
B.define("component/popup-open", function(e, t, i) {
    _i_("3da:38e0536e");
    var n = e("component");
    i.exports = n.extend({
        init: function() {
            _i_("3da:d513fdf2"),
            this.$el.click(this.click.bind(this)),
            _r_()
        },
        click: function(e) {
            _i_("3da:9a303f81"),
            e.preventDefault();
            var t = this.$el.attr("href")
              , i = Math.floor(this.$el.attr("data-width")) || 400
              , n = Math.floor(this.$el.attr("data-height")) || 400
              , a = screen.availTop || 0
              , r = screen.availLeft || 0
              , o = screen.width / 2 - i / 2 + r
              , _ = screen.height / 2 - n / 2 + a
              , s = window;
            s.open.call(s, t, "_blank", "width=" + i + ",height=" + n + ",top=" + _ + ",left=" + o + ",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes"),
            _r_()
        }
    }),
    _r_()
}),
function(e, t) {
    _i_("3da:9781e3c1"),
    t.define("core/fly-content-tooltip/fly-content-tooltip", function(e, t, i) {
        "use strict";
        _i_("3da:2b2cc3ea"),
        i.exports = function() {
            _i_("3da:ec8b519b");
            var a = e("jquery")
              , r = "fly-content-tooltip--wrap";
            if (void 0 === a || void 0 === a.fly || void 0 === a.fly.tooltip)
                return _r_();
            var t = a.fly.tooltip.extend({
                dataAttr: "data-content-tooltip",
                defaults: {
                    baseClass: "fly-dropdown",
                    extraClass: "fly-content-tooltip",
                    hideClass: "fly-dropdown_hidden",
                    showDelay: 100,
                    hideDelay: 100,
                    arrowSize: 5,
                    content: function(e) {
                        _i_("3da:73b0cf3f");
                        var t = this.handle().attr("data-content-tooltip-element")
                          , i = t ? a(t).html() : this.handle().attr(this.dataAttr);
                        i && e((n = i,
                        _i_("3da:15c591f4"),
                        _r_('<div id="fly-tooltip" class="' + r + '">' + n + "</div>")));
                        var n;
                        _r_()
                    }
                },
                init: function() {
                    _i_("3da:d2b032fe");
                    var e, t = this.handle();
                    t.attr("data-position-tooltip") && (this.options.position = this.handle().attr("data-position-tooltip")),
                    t.attr("data-position-tooltip-align") && (this.options.positionAlign = this.handle().attr("data-position-tooltip-align")),
                    t.attr("data-extra-class-tooltip") && (this.options.extraClass = this.handle().attr("data-extra-class-tooltip")),
                    (e = t.attr("data-require-tooltip-class")) && (this.options.requireTooltipClass = e),
                    _r_()
                },
                timeout: null
            });
            return _r_({
                flyContentTooltip: t,
                init: function(e) {
                    _i_("3da:45010bad"),
                    e && (t = t.extend(e)),
                    e = e || {},
                    t.delegate(e.delegateTo ? e.delegateTo : ".js-fly-content-tooltip"),
                    _r_()
                }
            })
        }(),
        _r_()
    });
    var i = {
        extraClass: "fly-content-tooltip ge-fly-content-tooltip"
    };
    t.require(["require"], function(e) {
        _i_("3da:f93c7b1d");
        var t = e("core/fly-content-tooltip/fly-content-tooltip");
        void 0 !== t && "function" == typeof t.init && (t.init(),
        t.init({
            defaults: i,
            dataAttr: "data-ge-fly-tooltip",
            delegateTo: ".js-fly-content-tooltip[data-ge-fly-tooltip]"
        })),
        _r_()
    }),
    _r_()
}(jQuery, booking),
B.define("component/dropdown-onload-shower", function(e, t, i) {
    _i_("3da:c4e40e37");
    var n = e("component")
      , a = e("jquery")
      , r = e("et");
    i.exports = n.extend({
        init: function() {
            _i_("3da:9d95a870");
            var e = void 0 !== a && void 0 !== a.fly && void 0 !== a.fly.dropdown;
            if (this.isDisabled() || !e)
                return _r_();
            var t = a.fly.dropdown.create(this.$el, {
                ignoreClicksOutside: !!this.$el.attr("data-component-ignore-clicks-outside"),
                content: this.getContent(),
                position: this.getPosition(),
                extraClass: "fly-dropdown--onload-shower " + this.getExtraClass(),
                ignoreClicksClass: this.$el.data("component-ignore-clicks-class")
            });
            t.bind(t.events.rootready, function() {
                _i_("3da:018d9046"),
                t.root().delegate("[data-command]", "click", function() {
                    _i_("3da:0cf39a02"),
                    setTimeout(t.hide.bind(t), 0),
                    _r_()
                }),
                t.bind(t.events.hide, t._destroy.bind(t)),
                _r_()
            }),
            setTimeout(function() {
                _i_("3da:d95c8963"),
                t.show(),
                t.root().find(".header-signin-prompt [data-et-view]") && (r.initAttributesTracking(t.root()),
                B.eventEmitter.trigger("GENERAL:layout_changed")),
                _r_()
            }, +this.$el.attr("data-component-delay") || 0),
            _r_()
        },
        isDisabled: function() {
            _i_("3da:f43b78c4");
            var e = this.$el.attr("data-component-show-once-key");
            if (e) {
                if (a.cookie(e))
                    return _r_(!0);
                a.cookie(e, 1)
            }
            _r_()
        },
        getExtraClass: function() {
            return _i_("3da:0f53b211"),
            _r_(this.$el.attr("data-component-extra-class") || "")
        },
        getPosition: function() {
            return _i_("3da:d6697d39"),
            _r_(this.$el.attr("data-component-position"))
        },
        getContent: function() {
            _i_("3da:d0295d52");
            var e = this.$el.attr("data-component-content");
            return /^[a-z0-9_]+$/.test(e) ? _r_(booking.jstmpl(e).render(booking.env["component/dropdown-onload-shower/" + e])) : _r_(e)
        }
    }),
    _r_()
}),
B.define("component/tt-fancy", function(e, t, i) {
    "use strict";
    _i_("3da:4c5d3408");
    var n = e("component")
      , a = {
        delay: 300,
        width: 300,
        id: "tt-fancy",
        content: "",
        triggerOn: "hover",
        trackGoals: ""
    };
    i.exports = n.extend({
        init: function() {
            _i_("3da:0850629a"),
            this.domHelper = {},
            this._getOptions(),
            this._createDomNodes(),
            this._attachEvents(),
            this.isMouseIn = !1,
            _r_()
        },
        _getOptions: function() {
            _i_("3da:33e1e52b"),
            $.extend(this, a, {
                width: this.$el.data("width"),
                id: this.$el.data("id"),
                content: this.$el.data("content"),
                triggerOn: this.$el.data("trigger"),
                trackGoals: this.$el.data("track-goals")
            }),
            _r_()
        },
        _createDomNodes: function() {
            _i_("3da:bd8daa55");
            var e = $("#" + this.id);
            if (0 < e.length)
                this.domHelper = {
                    $parent: e,
                    $content: e.find(".tt-fancy-content"),
                    $pointer: e.find(".tt-fancy-pointer")
                };
            else {
                var t = $('<div class="tt-fancy-pointer"></div>')
                  , i = $('<div class="tt-fancy-content"></div>');
                this.domHelper = {
                    $parent: $('<div id="' + this.id + '" style="width: ' + this.width + 'px;" class="tt-fancy-holder tt-fancy-holder--hidden"></div>').prepend(t).append(i).appendTo(document.body),
                    $pointer: t,
                    $content: i
                }
            }
            _r_()
        },
        _attachEvents: function() {
            switch (_i_("3da:dca69258"),
            this.triggerOn) {
            case "textSelect":
                var i = this;
                i.$el.bind("mouseup.fancyTT", function() {
                    _i_("3da:5ff07ee3");
                    var e = $.trim(i._getSelectedText())
                      , t = $.trim(i.$el.text());
                    e && t.search && -1 < t.search(e) && (i._showTT.call(i),
                    setTimeout(function() {
                        _i_("3da:298b17df"),
                        $("body").on("mouseup.fancyTTclose", function() {
                            _i_("3da:f05e400a"),
                            i._hideTT.call(i),
                            $("body").off("mouseup.fancyTTclose"),
                            _r_()
                        }),
                        _r_()
                    }, 200)),
                    _r_()
                });
                break;
            case "hover":
            default:
                this.$el.on("mouseenter.fancyTT", $.proxy(this._showTT, this)).on("mouseleave.fancyTT", $.proxy(this._hideTT, this)).on("focus", $.proxy(this._showTT, this)).on("blur", $.proxy(this._hideTT, this))
            }
            _r_()
        },
        _showTT: function() {
            _i_("3da:23be4054");
            var e = this;
            e.isMouseIn = !0,
            setTimeout(function() {
                _i_("3da:eb27df72"),
                e.isMouseIn && (e.domHelper.$content.html(e.content),
                e._position_tt(),
                e.domHelper.$parent.css({
                    display: "block"
                }),
                setTimeout(function() {
                    _i_("3da:433904cf"),
                    e.domHelper.$parent.removeClass("tt-fancy-holder--hidden"),
                    B.events.trigger("TT-Fancy:show"),
                    e.trackGoals.split(" ").map(function(e) {
                        _i_("3da:0b2380dd");
                        var t = e.split(":");
                        2 === t.length && B.et.customGoal(t[0], t[1]),
                        _r_()
                    }),
                    _r_()
                }, 10)),
                _r_()
            }, this.delay),
            _r_()
        },
        _hideTT: function() {
            _i_("3da:75d8b1ad"),
            this.isMouseIn = !1,
            this.domHelper.$parent.css({
                display: "none"
            }).addClass("tt-fancy-holder--hidden"),
            B.events.trigger("TT-Fancy:hide"),
            _r_()
        },
        _position_tt: function() {
            _i_("3da:58e15c16");
            var e = $(window).width()
              , t = this.$el
              , i = (this.width && "number" == typeof this.width ? this.width : this.domHelper.$parent.width()) / 2
              , n = t.offset().left + t.outerWidth() / 2
              , a = t.offset().top + t.outerHeight() + 7
              , r = n - i
              , o = "auto"
              , _ = !1;
            e < n + i ? (r = "auto",
            o = 15,
            _ = !0,
            this.domHelper.$pointer.css({
                right: e - n - 15 - 6 + "px",
                left: "auto"
            })) : n - i < 15 && (r = 15,
            o = "auto",
            _ = !0,
            this.domHelper.$pointer.css({
                left: n - 15 + "px",
                right: "auto"
            })),
            this.domHelper.$parent.css({
                left: r,
                right: o,
                top: a
            }),
            _ || this.domHelper.$pointer.attr("style", ""),
            _r_()
        },
        _getSelectedText: function() {
            _i_("3da:95cb8706");
            var e = "";
            return void 0 !== window.getSelection ? e = window.getSelection().toString() : void 0 !== document.selection && "Text" == document.selection.type && (e = document.selection.createRange().text),
            _r_($.trim(e))
        }
    }),
    _r_()
}),
B.define("hijri-calendar", function() {
    _i_("3da:e18bb072");
    var v = ["ar_islamic_calendar_muharram", "ar_islamic_calendar_safar", "ar_islamic_calendar_rabiul_awwal", "ar_islamic_calendar_rabiul_akhir", "ar_islamic_calendar_jumadal_ula", "ar_islamic_calendar_jumadal_ukhra", "ar_islamic_calendar_rajab", "ar_islamic_calendar_shaban", "ar_islamic_calendar_ramadan", "ar_islamic_calendar_shawwal", "ar_islamic_calendar_dhul_qaadah", "ar_islamic_calendar_dhul_hijjah"];
    var e = "1" === $.cookie("hijri_enabled")
      , t = B.env.b_hijri_calendar_available;
    return _r_({
        enable: function() {
            _i_("3da:f41a946d"),
            t && !e && (e = !0,
            $.cookie("hijri_enabled", 1),
            B.eventEmitter.trigger("CALENDAR:hijri_enabled")),
            _r_()
        },
        disable: function() {
            _i_("3da:3e456148"),
            t && e && (e = !1,
            $.cookie("hijri_enabled", 0),
            B.eventEmitter.trigger("CALENDAR:hijri_disabled")),
            _r_()
        },
        enabled: function() {
            return _i_("3da:d42b789f"),
            _r_(e)
        },
        available: function() {
            return _i_("3da:3ec9dd98"),
            _r_(t)
        },
        convert: function(e) {
            _i_("3da:f72fb3ef");
            var t = e.day
              , i = e.month
              , n = e.year
              , a = i + 1
              , r = n;
            a < 3 && (r -= 1,
            a += 12);
            var o = Math.floor(r / 100)
              , _ = 2 - o + Math.floor(o / 4);
            r < 1583 && (_ = 0),
            1582 === r && (10 < a && (_ = -10),
            10 == a && (_ = 0,
            4 < t && (_ = -10)));
            var s = Math.floor(365.25 * (r + 4716)) + Math.floor(30.6001 * (a + 1)) + t + _ - 1524;
            _ = 0,
            2299160 < s && (_ = 1 + (o = Math.floor((s - 1867216.25) / 36524.25)) - Math.floor(o / 4));
            var d = s + _ + 1524
              , c = Math.floor((d - 122.1) / 365.25)
              , l = Math.floor(365.25 * c)
              , u = Math.floor((d - l) / 30.6001);
            t = d - l - Math.floor(30.6001 * u),
            i = u - 1,
            13 < u && (c += 1,
            i = u - 13),
            n = c - 4716;
            var f = s - 1948084
              , h = Math.floor(f / 10631);
            f -= 10631 * h;
            var p = Math.floor((f - .1335) / (10631 / 30))
              , m = 30 * h + p;
            f -= Math.floor(p * (10631 / 30) + .1335);
            var b = Math.floor((f + 28.5001) / 29.5);
            13 == b && (b = 12);
            var g = f - Math.floor(29.5001 * b - 29);
            return _r_({
                gregorian_day: t,
                gregorian_month: i - 1,
                gregorian_year: n,
                julian_day: s - 1,
                hijri_day: g,
                hijri_month: b - 1,
                hijri_year: m,
                hijri_month_tag: v[b - 1]
            })
        }
    })
}),
B.define("utils", function(e, t, i) {
    _i_("3da:1ae1366f"),
    t.assertExists = function(e, t) {
        if (_i_("3da:9d42554a"),
        "object" != typeof e || !(t in e))
            throw new Error("Property " + t + " is not found");
        _r_()
    }
    ,
    t.camelCaseKeys = function(e) {
        _i_("3da:dbbbdfa4");
        var t, i = {};
        for (t in e)
            e.hasOwnProperty(t) && (i[t.replace(/-([a-zA-Z])/g, function(e, t) {
                return _i_("3da:aefe3784"),
                _r_(t.toUpperCase())
            })] = e[t]);
        return _r_(i)
    }
    ,
    t.nodeData = function(e) {
        _i_("3da:c0d6317e"),
        e.jquery && (e = e[0]),
        this.assertExists(e, "attributes");
        var t, i, n, a = {};
        for (t = 0,
        i = e.attributes.length; t < i; t++)
            (n = e.attributes[t]) && 0 == n.name.indexOf("data-") && (a[n.name.replace(/^data-/, "")] = n.value);
        return _r_(this.camelCaseKeys(a))
    }
    ,
    _r_()
}),
B.define("utils/simple-unique-id", function(e, t, i) {
    _i_("3da:9e09743c"),
    i.exports = function() {
        return _i_("3da:79142c91"),
        _r_((new Date).getTime() + "_" + (e = 100,
        t = 999,
        _i_("3da:ad6af9b3"),
        _r_(Math.floor(Math.random() * (t - e)) + e)));
        var e, t
    }
    ,
    _r_()
}),
B.define("window-visibilitychange", function(e, t, i) {
    "use strict";
    _i_("3da:369b7d76");
    var n = e("event-emitter")
      , a = {
        focus: "visible",
        focusin: "visible",
        pageshow: "visible",
        blur: "hidden",
        focusout: "hidden",
        pagehide: "hidden"
    };
    i.exports = n.extend({
        setup: function() {
            _i_("3da:c2393e8e"),
            this.didSetup || (this.didSetup = !0,
            this.hidden = null,
            this.visibilityState = null,
            this.hiddenAttribute = "hidden",
            this.hiddenAttribute in document ? document.addEventListener("visibilitychange", this.visibilityChange.bind(this)) : (this.hiddenAttribute = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", this.visibilityChange.bind(this)) : (this.hiddenAttribute = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", this.visibilityChange.bind(this)) : (this.hiddenAttribute = "msHidden")in document ? document.addEventListener("msvisibilitychange", this.visibilityChange.bind(this)) : "onfocusin"in document ? document.onfocusin = document.onfocusout = this.visibilityChange.bind(this) : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.visibilityChange.bind(this)),
            _r_()
        },
        visibilityChange: function(e) {
            _i_("3da:2ef96ee8"),
            e = e || window.event;
            var t = this.visibilityState;
            e.type in a ? (this.hidden = "hidden" == a[e.type],
            this.visibilityState = a[e.type]) : (this.hidden = document[this.hiddenAttribute],
            this.visibilityState = document[this.hiddenAttribute] ? "hidden" : "visible"),
            t != this.visibilityState && this.emit("visibilitychange", this.visibilityState),
            _r_()
        }
    }),
    i.exports.addListener = i.exports.on = function() {
        _i_("3da:2f617f65"),
        i.exports.setup(),
        n.prototype.addListener.apply(i.exports, arguments),
        _r_()
    }
    ,
    _r_()
}),
B.define("window-scroller", ["jquery", "promise"], function(_, s) {
    _i_("3da:b5c34e65");
    var d = _(window)
      , c = jQuery({
        progress: 0
    })
      , l = 700;
    function u(e) {
        _i_("3da:1298f338");
        var t = e.offset().top;
        return _r_({
            top: t,
            bottom: t + e.outerHeight()
        })
    }
    function f() {
        return _i_("3da:70d4d0ea"),
        _r_(window.innerHeight || document.documentElement.clientHeight)
    }
    return _r_({
        scrollToBlock: function(e, t, i, n) {
            _i_("3da:8212fefb");
            var a, r = "number" == typeof n ? n : 10;
            if (e && "string" == typeof e && (e = _(e)),
            !e || !e.length)
                return _r_(new s(function(e) {
                    _i_("3da:8dee672b"),
                    e(),
                    _r_()
                }
                ));
            if (t)
                a = u(e).top - r;
            else {
                var o = function(e, t) {
                    if (_i_("3da:9200966d"),
                    0 === e.height())
                        return _r_(null);
                    var i = u(e)
                      , n = function() {
                        _i_("3da:73f45065");
                        var e = d.scrollTop();
                        return _r_({
                            top: e,
                            bottom: e + f()
                        })
                    }()
                      , a = i.top < n.top
                      , r = i.bottom > n.bottom
                      , o = e.outerHeight() + t > f();
                    return _r_(a || r ? o || a ? i.top - t : i.bottom + t - f() : null)
                }(e, r);
                null === o && (o = d.scrollTop()),
                a = o
            }
            return _r_(this.scrollToOffset(a, i))
        },
        scrollToOffset: function(e, r) {
            _i_("3da:161038fe"),
            c.stop(!0);
            var o = d.scrollTop()
              , _ = e;
            return _r_(new s(function(e) {
                var t, i, n, a;
                _i_("3da:5e09766a"),
                Math.abs(o - _) < 5 ? e() : (t = o,
                i = _,
                n = r,
                a = e,
                _i_("3da:fafb30c7"),
                c[0].progress = 0,
                c.animate({
                    progress: 1
                }, {
                    step: function(e) {
                        _i_("3da:3800b453"),
                        d.scrollTop(t + e * (i - t)),
                        _r_()
                    },
                    duration: "number" == typeof n ? n : l,
                    easing: "function" == typeof jQuery.easing.easeInOutExpo ? "easeInOutExpo" : "swing",
                    complete: a
                }),
                _r_()),
                _r_()
            }
            ))
        }
    })
}),
B.define("countdown", ["jquery", "event-emitter"], function(t, e) {
    _i_("3da:b750e9ec");
    var i = function(e) {
        if (_i_("3da:ae517d41"),
        e.endTime)
            "number" == typeof e.endTime ? this.endTime = new Date(e.endTime) : this.endTime = Date.parse(e.endTime);
        else {
            if (!e.timeLeft)
                throw new Error("Please pass either endTime or timeLeft.");
            this.endTime = new Date(Date.now() + e.timeLeft)
        }
        return this.dimensionsToCheck = ["seconds", "minutes", "hours", "days"],
        this.defaults = {
            updateInterval: 1e3,
            callback: !1,
            expiredCallback: !1,
            callbacks: !1,
            leadingZeroes: {
                seconds: !0,
                minutes: !0,
                hours: !0,
                days: !1
            }
        },
        this.options = t.extend(!0, {}, this.defaults, e),
        this._processOptions(),
        this._init(),
        _r_(this)
    };
    return t.extend(i.prototype, {
        _processOptions: function() {
            _i_("3da:1e129d9e");
            var e = this.options.leadingZeroes;
            if ("boolean" == typeof e)
                for (var t = 0; t < this.dimensionsToCheck.length; t++)
                    this.options.leadingZeroes[this.dimensionsToCheck[t]] = e;
            _r_()
        },
        _init: function() {
            _i_("3da:90a28ff6"),
            e.extend(this),
            this.previousTime = !1,
            this._saveStartRemainingTime(),
            this._setCallbacks(),
            this._start(),
            _r_()
        },
        _saveStartRemainingTime: function() {
            _i_("3da:5239a844"),
            this.startRemainingTime = this._getRemainingTime(),
            _r_()
        },
        _start: function() {
            _i_("3da:c093452d"),
            this._processTime(),
            this.timer = setInterval(this._processTime.bind(this), this.options.updateInterval),
            _r_()
        },
        _processTime: function() {
            _i_("3da:5c8aa07e");
            var e = this._getRemainingTime();
            0 <= e.total ? (this._fireEvents(e),
            this.previousTime = e) : (this.stop(),
            this._fireEvents(!1)),
            _r_()
        },
        _getRemainingTime: function() {
            _i_("3da:6b308dcb");
            var e = this.endTime - Date.now()
              , t = Math.floor(e / 1e3 % 60)
              , i = Math.floor(e / 1e3 / 60 % 60)
              , n = Math.floor(e / 36e5 % 24)
              , a = Math.floor(e / 864e5);
            return _r_({
                total: e,
                days: a,
                hours: n,
                minutes: i,
                seconds: t
            })
        },
        _fireEvents: function(e) {
            if (_i_("3da:d85a9d51"),
            !this.previousTime)
                return _r_();
            e ? (this._fireProgressEvents(e),
            this._fireEveryTickEvent(e)) : this._fireExpiredEvent(),
            _r_()
        },
        _fireProgressEvents: function(e) {
            _i_("3da:6a426117");
            for (var t = 0; t < this.dimensionsToCheck.length; t++)
                this._dimensionIsChanged(e, this.dimensionsToCheck[t]) && this.trigger("changed", {
                    type: this.dimensionsToCheck[t],
                    remainingTime: this._formatDate(e)
                });
            _r_()
        },
        _fireEveryTickEvent: function(e) {
            _i_("3da:12f85d76"),
            this.trigger("ticked", {
                remainingTime: this._formatDate(e)
            }),
            _r_()
        },
        _fireExpiredEvent: function() {
            _i_("3da:89c635b0"),
            this.trigger("expired", {
                timeExpired: this._formatDate(this.startRemainingTime)
            }),
            _r_()
        },
        _dimensionIsChanged: function(e, t) {
            return _i_("3da:bdadff41"),
            _r_(!!(e[t] - this.previousTime[t]))
        },
        _setCallbacks: function() {
            _i_("3da:c395cd72");
            var t = this;
            this.options.callback && "function" == typeof this.options.callback && this.on("ticked", function(e) {
                _i_("3da:e0e4db99"),
                t.options.callback(t._formatDate(e.remainingTime)),
                _r_()
            }),
            this.options.expiredCallback && "function" == typeof this.options.expiredCallback && this.on("expired", function(e) {
                _i_("3da:2cacaabf"),
                t.options.expiredCallback(t._formatDate(e.remainingTime)),
                _r_()
            }),
            this.options.callbacks && this.on("changed", function(e) {
                _i_("3da:3ef813f1"),
                t.options.callbacks[e.type] && "function" == typeof t.options.callbacks[e.type] && t.options.callbacks[e.type](t._formatDate(e.remainingTime)),
                _r_()
            }),
            _r_()
        },
        _formatDate: function(e) {
            var t;
            for (var i in _i_("3da:1aa570d0"),
            e)
                this.options.leadingZeroes[i] && e.hasOwnProperty(i) && (t = "" + e[i]).length <= 1 && (e[i] = "0" + t);
            return _r_(e)
        },
        getStartRemainingTime: function() {
            return _i_("3da:ab1fd337"),
            _r_(this._formatDate(this.startRemainingTime))
        },
        stop: function() {
            _i_("3da:79f6c547"),
            clearInterval(this.timer),
            _r_()
        },
        proceed: function() {
            _i_("3da:c3c5fef5"),
            this._start(),
            _r_()
        }
    }),
    _r_(i)
}),
B.define("dismiss-item", function(e, t, i) {
    _i_("3da:4fa1a5b8");
    var n = e("jquery");
    i.exports = function(e) {
        if (_i_("3da:ffcf03b7"),
        !e)
            throw new Error("param itemId is required");
        return _r_(n.ajax({
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
B.Search = B.Search || {},
B.Search.Events = {
    DESTINATION_CHANGED: "SEARCH:DESTINATION_CHANGED",
    DESTINATION_INVALID: "SEARCH:DESTINATION_INVALID",
    TRAVEL_PURPOSE_CHANGED: "SEARCH:travel_purpose_changed",
    DATE_CHANGED: "SEARCH:date_changed",
    DATE_MONTH_CHANGED: "SEARCH:month_changed",
    DATE_MODE_CHANGED: "SEARCH:mode_changed",
    DATE_INVALID: "SEARCH:dates_invalid",
    DATE_VALID: "SEARCH:dates_valid",
    FLEXIBLE_MONTHYEAR_CHANGED: "SEARCH:flexible_monthyear_changed",
    FLEXIBLE_INTERVAL_CHANGED: "SEARCH:flexible_interval_changed",
    FLEXIBLE_INVALID: "SEARCH:monthyear_invalid",
    FLEXIBLE_VALID: "SEARCH:monthyear_valid",
    MULTI_GROUP_CHANGED: "SEARCH:multi_group_changed",
    GROUP_CHANGED: "SEARCH:group_changed",
    GROUP_MODE_CHANGED: "SEARCH:group_mode_changed",
    GROUP_VALID: "SEARCH:group_valid",
    GROUP_INVALID: "SEARCH:group_invalid",
    ADVANCED_SEARCH_ENABLED: "SEARCH:advanced_search_enabled",
    ADVANCED_SEARCH_DISABLED: "SEARCH:advanced_search_disabled",
    POPULAR_BUSINESS_FILTERS_OPENED: "SEARCH:pouplar_business_filters_opened",
    POPULAR_BUSINESS_FILTERS_DISABLED: "SEARCH:pouplar_business_filters_closed"
},
B.Search.TrackingEvents = {
    DESTINATION_CHANGED: "destination_changed",
    CHECKOUT_DATEPICKER: "checkout_changed_datepicker",
    CHECKOUT_MONTH_SELECTOR: "checkout_changed_month_selector",
    CHECKOUT_DAY_SELECTOR: "checkout_changed_day_selector",
    CHECKIN_DATEPICKER: "checkin_changed_datepicker",
    CHECKIN_MONTH_SELECTOR: "checkin_changed_month_selector",
    CHECKIN_DAY_SELECTOR: "checkin_changed_day_selector",
    NO_DATES_SELECTED: "no_dates_selected",
    FLEXIBLE_INTERVAL_SELECTED: "flexible_interval_selected",
    FLEXIBLE_MONTH_SELECTED: "flexible_month_selected",
    GROUP_ADVANCED_MODE_SELECTED: "group_advanced_mode_selected",
    GROUP_BASIC_MODE_SELECTED: "group_basic_mode_selected",
    GROUP_PREDEFINED_OPTION_SELECTED: "group_predefined_option_selected",
    GROUP_ROOMS_NUMBER_CHANGED: "rooms_number_changed",
    GROUP_ADULTS_NUMBER_CHANGED: "adults_number_changed",
    GROUP_CHILDREN_NUMBER_CHANGED: "children_number_changed",
    GROUP_CHILDREN_AGE_CHANGED: "children_age_changed",
    ADVANCED_SEARCH_CHANGED: "advanced_search_changed",
    ADVANCED_SEARCH_ENABLED: "advanced_search_enabled",
    ADVANCED_SEARCH_DISABLED: "advanced_search_disabled",
    FORM_SUBMITTED: "form_submitted"
},
B.Search.TravelTypeModes = {
    BUSINESS: "business",
    LEISURE: "leisure"
},
B.Search.DateModes = {
    REGULAR: "regular",
    NODATES: "no-dates",
    FLEXIBLE: "flexible"
},
B.Search.GroupModes = {
    REGULAR: "basic",
    CUSTOM: "custom"
},
function(e) {
    _i_("3da:fd238914"),
    e.events = e.require("events"),
    _r_()
}(booking),
B.define("utils/wait-for-event", function(e, t, i) {
    _i_("3da:381a529d");
    var r = e("promise");
    i.exports = function(i, n, a) {
        return _i_("3da:9e5d3c7d"),
        _r_(new r(function(e) {
            if (_i_("3da:0df88881"),
            a) {
                var t = function() {
                    _i_("3da:f4d6989c"),
                    a.apply(this, arguments) && (i.off(t),
                    e()),
                    _r_()
                };
                i.on(n, t)
            } else
                i.once(n, e);
            _r_()
        }
        ))
    }
    ,
    _r_()
}),
function() {
    _i_("3da:1732da9e");
    var n = {
        _count: 0,
        _mixin: {},
        _instances: []
    };
    n._base = {
        events: {
            hide: "hide",
            show: "show",
            rootready: "rootready"
        },
        _cuid: n._count++,
        _ctor: function() {},
        _$root: null,
        _$handle: null,
        _emitter: null,
        defaults: {
            content: "",
            redrawOnShow: !0
        },
        ens: "",
        options: null,
        create: function(e, t) {
            _i_("3da:9c77c538");
            var i = this.extend({
                ens: ".ns" + n._count++,
                _$handle: $(e),
                _emitter: $({})
            });
            return i.options = $.extend({}, i.defaults, t),
            n._instances.push(i),
            _r_(i._init())
        },
        extend: function(e) {
            _i_("3da:ba24f787"),
            this._ctor.prototype = this,
            e && "defaults"in e && (e.defaults = $.extend({}, this.defaults, e.defaults));
            var t = $.extend(new this._ctor, e);
            return t._cuid = n._count++,
            e.register$ && n.register$(e.register$, t),
            _r_(t)
        },
        delegate: function(e, i) {
            _i_("3da:540da2b9");
            var n = this
              , a = "fly_delegated_" + n._cuid;
            $.each(n.actions, function(t) {
                _i_("3da:16172fcd"),
                $(document.body).delegate(e, t, function() {
                    if (_i_("3da:30467c44"),
                    $(this).data(a))
                        return _r_();
                    var e = n.create(this, i);
                    e.handle().data(a, 1),
                    e._actionHandler(e.actions[t]).apply(e, arguments),
                    _r_()
                }),
                _r_()
            }),
            _r_()
        },
        onrootready: function() {},
        root: function() {
            if (_i_("3da:8b148e01"),
            !this._$root) {
                var e = this.options;
                this._$root = $("<div/>").addClass(e.baseClass).addClass(e.extraClass).addClass(e.hideClass).appendTo("body"),
                this.trigger(this.events.rootready)
            }
            return _r_(this._$root)
        },
        handle: function() {
            return _i_("3da:1dc488c9"),
            _r_(this._$handle)
        },
        _init: function() {
            return _i_("3da:2e70171a"),
            this._action(!0),
            this.bind(this.events.rootready, $.proxy(this.onrootready, this)),
            this.init(),
            _r_(this)
        },
        _destroy: function() {
            _i_("3da:396de614"),
            this.destroy(),
            this._$root && (this._$root.remove(),
            this._$root = null),
            this._action(!1);
            for (var e = 0, t = n._instances.length; e < t; e++)
                if (n._instances[e] === this) {
                    n._instances.splice(e, 1);
                    break
                }
            _r_()
        },
        _action: function(e, t, i) {
            for (var n in _i_("3da:baf77e07"),
            i = i || this.handle(),
            t = t || this.actions)
                e ? i.bind(n + this.ens, this._actionHandler(t[n])) : i.unbind(n + this.ens);
            _r_()
        },
        _actionHandler: function(e) {
            return _i_("3da:f7578e17"),
            _r_("string" == typeof e ? $.proxy(this[e], this) : $.proxy(e, this))
        },
        _content: function(e) {
            _i_("3da:28b2e141");
            var t = this.options.content;
            "function" == typeof t ? t.length ? t.call(this, e) : e(t.call(this)) : e(t),
            _r_()
        },
        _render: function(e) {
            _i_("3da:c54a30be"),
            this.root().html(e || ""),
            this._rendered = !0,
            _r_()
        },
        _modCss: function() {
            _i_("3da:c2fec718");
            var e = this.options.position.split(" ")
              , t = this.options.baseClass;
            return _r_([t + "_" + e[0], t + "_arrow-" + e[1]].join(" "))
        },
        _position: function() {},
        init: function() {},
        destroy: function() {},
        show: function(e) {
            if (_i_("3da:d89f07fa"),
            (this.options.redrawOnShow || !this._rendered) && !arguments.length)
                return _r_(this._content($.proxy(this.show, this)));
            arguments.length && this._render(e),
            this.trigger(this.events.show),
            this.root().css(this._position()).addClass(this._modCss()).removeClass(this.options.hideClass),
            _r_()
        },
        hide: function() {
            if (_i_("3da:2e196d7f"),
            this.hidden())
                return _r_();
            this.trigger(this.events.hide),
            this.root().addClass(this.options.hideClass),
            _r_()
        },
        redraw: function(t) {
            _i_("3da:a2f76f3c");
            var i = this;
            this._content(function(e) {
                _i_("3da:8051f45b"),
                i._render(e),
                "function" == typeof t && t(e),
                _r_()
            }),
            _r_()
        },
        toggle: function(e) {
            _i_("3da:d2ee15f5"),
            e = arguments.length ? e : this.hidden(),
            this[e ? "show" : "hide"](),
            _r_()
        },
        hidden: function() {
            return _i_("3da:68ac5a4c"),
            _r_(!this._$root || this.root().hasClass(this.options.hideClass))
        }
    },
    $.each(["bind", "unbind", "one", "trigger"], function(e, t) {
        _i_("3da:6fb3a69d"),
        n._base[t] = function() {
            return _i_("3da:18ac858c"),
            this._emitter[t].apply(this._emitter, arguments),
            _r_(this)
        }
        ,
        _r_()
    }),
    n._mixin.rect = function(e) {
        _i_("3da:03c4cf28");
        var t = e[0].getBoundingClientRect();
        return "width"in t || ((t = $.extend({}, t)).width = e.outerWidth(),
        t.height = e.outerHeight()),
        _r_(t)
    }
    ,
    n._mixin.position = function() {
        _i_("3da:409241a4");
        var e = {}
          , t = $(window)
          , i = this.options.position.split(" ")
          , n = this.options.arrowSize
          , a = i.shift()
          , r = i.shift()
          , o = {}
          , _ = 0
          , s = this._rect(this.root())
          , d = this._rect(this.handle())
          , c = "fixed" === this.root().css("position") ? {
            top: 0,
            left: 0
        } : {
            top: t.scrollTop(),
            left: t.scrollLeft()
        };
        switch (r) {
        case "top":
            o.top = d.height / 2 - 1.5 * n;
            break;
        case "left":
            o.left = d.width / 2 - 1.5 * n;
            break;
        case "right":
            o.left = d.width / 2 - s.width + 1.5 * n;
            break;
        case "bottom":
            o.top = d.height / 2 - s.height + 1.5 * n;
            break;
        default:
            o.top = (d.height - s.height) / 2,
            o.left = (d.width - s.width) / 2
        }
        switch (_ = "right" === this.options.positionAlign || "left" === this.options.positionAlign ? 0 : o.left,
        a) {
        case "left":
            e.top = c.top + d.top + o.top,
            e.left = c.left + d.left - s.width - n;
            break;
        case "right":
            e.top = c.top + d.top + o.top,
            e.left = c.left + d.left + d.width + n;
            break;
        case "top":
            e.top = c.top + d.top - s.height - n,
            "right" === this.options.positionAlign ? e.left = c.left + d.right - s.width + _ : e.left = c.left + d.left + _;
            break;
        default:
            e.top = c.top + d.top + d.height + n,
            "right" === this.options.positionAlign ? e.left = c.left + d.right - s.width + _ : e.left = c.left + d.left + _
        }
        return _r_(e)
    }
    ,
    n.tooltip = n._base.extend({
        actions: {
            mouseenter: "onmouseenter",
            mouseleave: "onmouseleave"
        },
        _showTimeout: null,
        _hideTimeout: null,
        onmouseenter: function() {
            _i_("3da:13e1a356");
            var e = this;
            if (this._hideTimeout && (clearTimeout(this._hideTimeout),
            this._hideTimeout = null),
            this.options.requireTooltipClass && (this.options.requireTooltipClass,
            1) && 0 < this.options.requireTooltipClass.length && this._$handle && !this._$handle.hasClass(this.options.requireTooltipClass))
                return _r_();
            this.hidden() && (this._showTimeout = setTimeout(function() {
                _i_("3da:a1b17003"),
                e.show(),
                _r_()
            }, this.options.showDelay)),
            this.options.keepContentOnHover && (this.root().off("mouseenter").mouseenter(function() {
                _i_("3da:5a6ff10e"),
                e._hideTimeout && (clearTimeout(e._hideTimeout),
                e._hideTimeout = null),
                _r_()
            }),
            this.root().off("mouseleave").mouseleave(function() {
                _i_("3da:eaf59268"),
                e._hideTimeout = setTimeout(function() {
                    _i_("3da:8e73cc0f"),
                    e.hide(),
                    _r_()
                }, e.options.hideDelay),
                _r_()
            })),
            _r_()
        },
        onmouseleave: function() {
            _i_("3da:25e8074d");
            var e = this;
            this._showTimeout && (clearTimeout(this._showTimeout),
            this._showTimeout = null),
            this._hideTimeout = setTimeout(function() {
                _i_("3da:a55b3d11"),
                e.hide(),
                _r_()
            }, this.options.hideDelay),
            _r_()
        },
        _action: function(e) {
            _i_("3da:9c3adcf5"),
            n._base._action.apply(this, arguments),
            this.options.keepOnContent && this._keepOnContent(e),
            _r_()
        },
        _keepOnContent: function(e) {
            _i_("3da:9bea6083");
            var t = this
              , i = this.events.rootready + "._keepOnContent";
            e ? this.bind(i, function() {
                _i_("3da:dc4ce97d"),
                n._base._action.call(t, e, t.actions, t.root()),
                _r_()
            }) : (this.unbind(i),
            n._base._action.call(this, e, this.actions, this.root())),
            _r_()
        },
        defaults: {
            baseClass: "fly-tooltip",
            hideClass: "fly-tooltip_hidden",
            extraClass: "",
            position: "bottom center",
            positionAlign: "",
            requireTooltipClass: "",
            arrowSize: 10,
            showDelay: 300,
            hideDelay: 300
        },
        _rect: n._mixin.rect,
        _position: n._mixin.position
    }),
    n.dropdown = n._base.extend({
        actions: {
            click: "onclick"
        },
        onclick: function() {
            _i_("3da:e0f2f340"),
            this.toggle(),
            _r_()
        },
        onresize: function() {
            if (_i_("3da:21ae0e9f"),
            this.hidden())
                return _r_();
            this.root().css(this._position()),
            _r_()
        },
        _action: function(e) {
            _i_("3da:a26724bd"),
            n._base._action.apply(this, arguments),
            n._base._action.call(this, e, {
                resize: "onresize"
            }, $(window)),
            this._autohide(e),
            _r_()
        },
        _autohide: function(e) {
            _i_("3da:97489840");
            var a = this
              , t = "click" + a.ens + " keydown" + a.ens + " touchstart" + a.ens
              , i = a.options && a.options.ignoreClicksOutside;
            if (!e)
                return _r_();
            function n() {
                _i_("3da:0e9772b5"),
                $(document).bind(t, function(e) {
                    _i_("3da:6c5555de");
                    var t = e.target
                      , i = a.root()[0]
                      , n = a.handle()[0];
                    if ("keydown" === e.type && 27 === e.which || ("click" === e.type || "touchstart" === e.type) && t !== i && !$.contains(i, t) && t !== n && !$.contains(n, t)) {
                        if (a.options && a.options.ignoreClicksClass && $(e.target).closest(a.options.ignoreClicksClass).length)
                            return _r_();
                        a.hide()
                    }
                    _r_()
                }),
                _r_()
            }
            this.bind(this.events.hide, function() {
                _i_("3da:f87e6ce9"),
                $(document).unbind(t),
                _r_()
            }),
            i || this.bind(this.events.show, function() {
                _i_("3da:6b0560ce"),
                setTimeout(n, 0),
                _r_()
            }),
            _r_()
        },
        defaults: {
            baseClass: "fly-dropdown",
            hideClass: "fly-dropdown_hidden",
            extraClass: "",
            position: "bottom center",
            arrowSize: 10
        },
        _rect: n._mixin.rect,
        _position: n._mixin.position
    }),
    n.hideAll = function() {
        _i_("3da:52a8348f");
        for (var e = 0, t = n._instances.length; e < t; e++)
            "function" == typeof n._instances[e].hide && n._instances[e].hide();
        _r_()
    }
    ,
    ($.fly = n).register$ = function(e, o) {
        if (_i_("3da:69fe6179"),
        o === n._base || !(o instanceof n._base._ctor) || $.fn[e])
            return _r_();
        var _ = "fly_" + e + "_" + +new Date;
        $.fn[e] = function(n) {
            var a;
            return _i_("3da:50d69545"),
            this.each(function(e) {
                if (_i_("3da:a465c57f"),
                a)
                    return _r_(!1);
                var t = $(this)
                  , i = t.data(_);
                switch (n) {
                case "instance":
                    a = i;
                    break;
                case "destroy":
                    r(i);
                    break;
                default:
                    r(i),
                    t.data(_, o.create(t, n))
                }
                _r_()
            }),
            _r_(a || this);
            function r(e) {
                _i_("3da:79108a0b"),
                e && (e.handle().removeData(_),
                e._destroy()),
                _r_()
            }
        }
        ,
        _r_()
    }
    ,
    $.each(n, n.register$),
    _r_()
}(),
$.fly.tooltip = $.fly.tooltip.extend({
    actions: {
        mouseenter: "onmouseenter",
        mouseleave: "onmouseleave",
        focus: "onmouseenter",
        blur: "onmouseleave"
    }
}),
/* @preserve
 * accounting.js v0.3.2
 * Copyright 2011, Joss Crowcroft
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://josscrowcroft.github.com/accounting.js/
 */
function(e, t) {
    _i_("3da:f70a21a0");
    var l = {
        version: "0.3.2",
        settings: {
            currency: {
                symbol: "$",
                format: "%s%v",
                decimal: ".",
                thousand: ",",
                precision: 2,
                grouping: 3
            },
            number: {
                precision: 0,
                grouping: 3,
                thousand: ",",
                decimal: "."
            }
        }
    }
      , o = Array.prototype.map
      , i = Array.isArray
      , n = Object.prototype.toString;
    function u(e) {
        return _i_("3da:795d7019"),
        _r_(!!("" === e || e && e.charCodeAt && e.substr))
    }
    function f(e) {
        return _i_("3da:e44e39bd"),
        _r_(i ? i(e) : "[object Array]" === n.call(e))
    }
    function h(e) {
        return _i_("3da:5572d3b3"),
        _r_(e && "[object Object]" === n.call(e))
    }
    function p(e, t) {
        var i;
        for (i in _i_("3da:17da1f12"),
        e = e || {},
        t = t || {})
            t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
        return _r_(e)
    }
    function m(e, t, i) {
        _i_("3da:0f7966f0");
        var n, a, r = [];
        if (!e)
            return _r_(r);
        if (o && e.map === o)
            return _r_(e.map(t, i));
        for (n = 0,
        a = e.length; n < a; n++)
            r[n] = t.call(i, e[n], n, e);
        return _r_(r)
    }
    function b(e, t) {
        return _i_("3da:423ad09f"),
        e = Math.round(Math.abs(e)),
        _r_(isNaN(e) ? t : e)
    }
    function g(e) {
        _i_("3da:f941cf92");
        var t = l.settings.currency.format;
        if ("function" == typeof e && (e = e()),
        u(e) && e.match("%v"))
            return _r_({
                pos: e,
                neg: e.replace("-", "").replace("%v", "-%v"),
                zero: e
            });
        if (!e || !e.pos || !e.pos.match("%v"))
            return _r_(u(t) ? l.settings.currency.format = {
                pos: t,
                neg: t.replace("%v", "-%v"),
                zero: t
            } : t);
        return _r_(e)
    }
    var a, v = l.unformat = l.parse = function(e, t) {
        if (_i_("3da:2cdb06bf"),
        f(e))
            return _r_(m(e, function(e) {
                return _i_("3da:d37600ac"),
                _r_(v(e, t))
            }));
        if ("number" == typeof (e = e || 0))
            return _r_(e);
        t = t || l.settings.number.decimal;
        var i = new RegExp("[^0-9-" + t + "]",["g"])
          , n = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(i, "").replace(t, "."));
        return _r_(isNaN(n) ? 0 : n)
    }
    , d = l.toFixed = function(e, t) {
        _i_("3da:cc360289"),
        t = b(t, l.settings.number.precision);
        var i = Math.pow(10, t);
        return _r_((Math.round(l.unformat(e) * i) / i).toFixed(t))
    }
    , y = l.formatNumber = function(e, t, i, n) {
        if (_i_("3da:bd21cd68"),
        f(e))
            return _r_(m(e, function(e) {
                return _i_("3da:06ed8003"),
                _r_(y(e, t, i, n))
            }));
        e = v(e);
        var a = p(h(t) ? t : {
            precision: t,
            thousand: i,
            decimal: n
        }, l.settings.number)
          , r = b(a.precision)
          , o = e < 0 ? "-" : ""
          , _ = parseInt(d(Math.abs(e || 0), r), 10) + ""
          , s = 3 < _.length ? _.length % 3 : 0;
        return _r_(o + (s ? _.substr(0, s) + a.thousand : "") + _.substr(s).replace(/(\d{3})(?=\d)/g, "$1" + a.thousand) + (r ? a.decimal + d(Math.abs(e), r).split(".")[1] : ""))
    }
    , c = l.formatMoney = function(e, t, i, n, a, r) {
        if (_i_("3da:0bec288d"),
        f(e))
            return _r_(m(e, function(e) {
                return _i_("3da:eca60a24"),
                _r_(c(e, t, i, n, a, r))
            }));
        e = v(e);
        var o = p(h(t) ? t : {
            symbol: t,
            precision: i,
            thousand: n,
            decimal: a,
            format: r
        }, l.settings.currency)
          , _ = g(o.format)
          , s = 0 < e ? _.pos : e < 0 ? _.neg : _.zero;
        return _r_(s.replace("%s", o.symbol).replace("%v", y(Math.abs(e), b(o.precision), o.thousand, o.decimal)))
    }
    ;
    l.formatColumn = function(e, t, i, n, a, r) {
        if (_i_("3da:2f725b91"),
        !e)
            return _r_([]);
        var o = p(h(t) ? t : {
            symbol: t,
            precision: i,
            thousand: n,
            decimal: a,
            format: r
        }, l.settings.currency)
          , _ = g(o.format)
          , s = _.pos.indexOf("%s") < _.pos.indexOf("%v")
          , d = 0
          , c = m(e, function(e, t) {
            if (_i_("3da:94139f0c"),
            f(e))
                return _r_(l.formatColumn(e, o));
            var i = (0 < (e = v(e)) ? _.pos : e < 0 ? _.neg : _.zero).replace("%s", o.symbol).replace("%v", y(Math.abs(e), b(o.precision), o.thousand, o.decimal));
            return i.length > d && (d = i.length),
            _r_(i)
        });
        return _r_(m(c, function(e, t) {
            if (_i_("3da:f63eb5c5"),
            u(e) && e.length < d)
                return _r_(s ? e.replace(o.symbol, o.symbol + new Array(d - e.length + 1).join(" ")) : new Array(d - e.length + 1).join(" ") + e);
            return _r_(e)
        }))
    }
    ,
    l.noConflict = (a = e.accounting,
    _i_("3da:dd0debf6"),
    _r_(function() {
        return _i_("3da:61b01b1b"),
        e.accounting = a,
        l.noConflict = void 0,
        _r_(l)
    })),
    e.accounting = l,
    _r_()
}(window),
function() {
    if (_i_("3da:1684841a"),
    !window.accounting || !booking.env.accounting_config)
        return _r_();
    var o = window.accounting
      , l = booking.env.accounting_config
      , e = {
        init: function(e) {
            _i_("3da:37aae2fc"),
            this._current = e,
            _r_()
        },
        formatMoney: function(e, t, i) {
            if (_i_("3da:a940b4e1"),
            "number" != typeof e && isNaN(parseFloat(e)) && ("function" == typeof B.debug && B.debug("jstmpl").warn("formatMoney expected a number but got a string.", arguments),
            "function" == typeof B.squeak && B.squeak("MMZXZAQUfUfWcZZYTRXO")),
            void 0 !== t ? "object" == typeof t && (i = t,
            t = this._current) : t = this._current,
            void 0 === t)
                throw "The module hasn't been initiated, so you have to provide currencyCode";
            e % 1 == 0 && ((i = i || {}).precision = void 0 !== i.precision ? i.precision : "integer");
            var n = i && void 0 !== i.is_arabic_number ? i.is_arabic_number : void 0 !== l.is_arabic_number && l.is_arabic_number
              , a = _(t, i)
              , r = o.formatMoney(e, a);
            return n && (r = function(e) {
                _i_("3da:4542c876");
                var a = ["&#1632;", "&#1633;", "&#1634;", "&#1635;", "&#1636;", "&#1637;", "&#1638;", "&#1639;", "&#1640;", "&#1641;"]
                  , t = "";
                return t = e.replace(/(?!&#[\d|a-z|A-Z]*)\d(?![\d|a-z|A-Z]*;)/g, function(e, t, i, n) {
                    return _i_("3da:614aff87"),
                    _r_(a[parseInt(e, 10)])
                }),
                _r_(t)
            }(r)),
            _r_(r)
        },
        formatDistanceNumber: function(e, t) {
            _i_("3da:71c8d5bd");
            var i = _(this._current, t)
              , n = i.symbol
              , a = o.formatMoney(e, i)
              , r = new RegExp(n,"g");
            return a = (a = a.replace(r, "")).replace(/[^0-9\.\,]/g, ""),
            _r_(a)
        },
        formatDistance: function(e, t) {
            _i_("3da:4cb1f0fc");
            var i, n = booking.env, a = {
                number: e,
                unit: "m",
                isImperial: n.distance_config && "metric" != n.distance_config
            };
            return (t = t || {}).unit = t.unit || a.unit,
            t.hasOwnProperty("precision") || (t.precision = 1),
            this.changeDistanceToMetricUnit(a, t),
            a.isImperial && this.convertDistanceToImperial(a, t),
            i = this.formatDistanceNumber(a.number, t),
            _r_(i + " " + a.unit)
        },
        changeDistanceToMetricUnit: function(e, t) {
            _i_("3da:f0665492");
            var i = e.number;
            if (t.unit)
                switch (t.unit) {
                case "m":
                    e.unit = "m";
                    break;
                case "km":
                    e.number = .001 * i,
                    !e.isImperial && t.autoUnit && Math.floor(e.number) < 1 ? (e.number = i,
                    t.precision = 0,
                    e.unit = "m") : e.unit = "km"
                }
            _r_()
        },
        convertDistanceToImperial: function(e, t) {
            _i_("3da:cb35885d");
            var i = e.number;
            switch (t.unit) {
            case "m":
                e.unit = "yd",
                e.number = 1.0936133 * i;
                break;
            case "km":
                e.number = .621371192 * i,
                e.unit = "mi"
            }
            _r_()
        },
        getOptions: function() {
            return _i_("3da:d275547a"),
            _r_(_(this._current))
        }
    };
    function _(e, t) {
        _i_("3da:9e130143"),
        (t = $.extend({
            symbolFormat: "%s",
            valueFormat: "%s"
        }, t)).valueFormat = t.valueFormat.replace("%s", "%v");
        var i, n, a, r = t.symbolFormat, o = t.valueFormat, _ = void 0 !== l.html_symbol[e] ? l.html_symbol[e] : e, s = void 0 !== l.decimal_separator[e] ? l.decimal_separator[e] : void 0 !== l.decimal_separator.default ? l.decimal_separator.default : ".", d = void 0 !== l.group_separator[e] ? l.group_separator[e] : void 0 !== l.group_separator.default ? l.group_separator.default : ",", c = (n = void 0 !== l.currency_separator[e] ? l.currency_separator[e] : void 0 !== l.currency_separator.default && e ? l.currency_separator.default : " ",
        a = void 0 !== l.symbol_position[e] ? l.symbol_position[e] : void 0 !== l.symbol_position.default ? l.symbol_position.default : "before",
        _i_("3da:ed260718"),
        _r_("before" === a ? r + n + o : o + n + r));
        return void 0 !== l.num_decimals && (i = l.num_decimals.default),
        void 0 !== l.num_decimals && (i = void 0 !== l.num_decimals[e] ? l.num_decimals[e] : i),
        "integer" === t.precision && (i = 0),
        isNaN(parseInt(t.precision, 10)) || (i = t.precision),
        _r_({
            symbol: _,
            decimal: s,
            thousand: d,
            format: c,
            precision: i
        })
    }
    e.init(booking.env.b_selected_currency_symbol || booking.env.b_selected_currency || booking.env.b_hotel_currencycode),
    booking.utils = booking.utils || {},
    booking.utils.accounting = e,
    _r_()
}(),
$(function() {
    _i_("3da:5fed0027"),
    booking.jstmpl && booking.jstmpl.setup(function(a) {
        if (_i_("3da:f496a254"),
        !a || !a.formatMoney)
            return _r_({});
        function r(e, t) {
            if (_i_("3da:4542c07f"),
            isNaN(e))
                return _r_(e);
            if ((t = t || {}) && !t.precision) {
                var i = ("" + e).split(".")
                  , n = (1 < i.length ? i[1] : "").length;
                t.precision = n
            }
            return _r_(a.formatMoney(e, "", t))
        }
        function e(e, t) {
            _i_("3da:aeab377c");
            var i = r(e, t);
            return /,|\./.test(i) || 10 == i || (i += booking.env.accounting_config.decimal_separator.default + "0"),
            _r_(i)
        }
        return _r_({
            fn: {
                format_number: function(e, t) {
                    if (_i_("3da:03fd9b5e"),
                    isNaN(e) || e % 1 != 0)
                        return _r_(e);
                    return (t = t || {}).precision = 0,
                    _r_(a.formatMoney(e, "", t))
                },
                format_number_decimal: r,
                format_number_rounded: function(e, t) {
                    if (_i_("3da:67c4a173"),
                    isNaN(e) || e % 1 != 0)
                        return _r_(e);
                    return (t = t || {}).precision = 0,
                    e = function(e) {
                        _i_("3da:e4052c27");
                        var t, i = Math.abs;
                        if (i(e) < 50)
                            return _r_(e);
                        if (e % (t = i(e) < 100 ? 5 : i(e) < 500 ? 10 : i(e) < 1e3 ? 50 : i(e) < 5e3 ? 100 : i(e) < 1e4 ? 500 : i(e) < 5e4 ? 1e3 : i(e) < 1e5 ? 5e3 : 1e4) == 0)
                            return _r_(e);
                        var n = 1;
                        return e < 0 && (n = 0),
                        e = Math.floor(e / t),
                        e *= t,
                        n && (e += t),
                        _r_(e)
                    }(e),
                    _r_(a.formatMoney(e, "", t))
                },
                format_price: function(e, t) {
                    return _i_("3da:68b96faf"),
                    _r_(a.formatMoney(e, t))
                },
                format_review_score: e,
                format_review_score_plain: e,
                format_review_score_new: function(e) {
                    _i_("3da:30aade93");
                    var t = Math.round(10 * (Number(e) || 0)) / 10
                      , i = Number(t).toFixed(1)
                      , n = i <= 1 ? Number(1).toFixed(1) : 10 <= i ? 10 : i;
                    return _r_(r(n))
                }
            }
        })
    }(booking && booking.utils && booking.utils.accounting)),
    _r_()
}),
"function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = function(e) {
    _i_("3da:cc520cf2");
    var t = e.__proto__;
    return t || null === t ? _r_(t) : "[object Function]" === Function.prototype.call.call(Object.prototype.toString, e.constructor) ? _r_(e.constructor.prototype) : e instanceof Object ? _r_(Object.prototype) : _r_(null)
}
),
B.define("redux", function(e, t, i) {
    var n, a;
    _i_("3da:f7758ddb"),
    n = this,
    a = function() {
        return _i_("3da:98a9b0ae"),
        _r_(function(i) {
            _i_("3da:efd781f9");
            var n = {};
            function a(e) {
                if (_i_("3da:df0bf25d"),
                n[e])
                    return _r_(n[e].exports);
                var t = n[e] = {
                    exports: {},
                    id: e,
                    loaded: !1
                };
                return i[e].call(t.exports, t, t.exports, a),
                t.loaded = !0,
                _r_(t.exports)
            }
            return a.m = i,
            a.c = n,
            a.p = "",
            _r_(a(0))
        }([function(e, t, i) {
            "use strict";
            _i_("3da:b154c0e9"),
            t.__esModule = !0,
            t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
            var n = s(i(2))
              , a = s(i(7))
              , r = s(i(6))
              , o = s(i(5))
              , _ = s(i(1));
            s(i(3));
            function s(e) {
                return _i_("3da:5b60c357"),
                _r_(e && e.__esModule ? e : {
                    default: e
                })
            }
            t.createStore = n.default,
            t.combineReducers = a.default,
            t.bindActionCreators = r.default,
            t.applyMiddleware = o.default,
            t.compose = _.default,
            _r_()
        }
        , function(e, t) {
            "use strict";
            _i_("3da:4a4789e7"),
            t.__esModule = !0,
            t.default = function() {
                _i_("3da:0cc6f208");
                for (var e = arguments.length, i = Array(e), t = 0; t < e; t++)
                    i[t] = arguments[t];
                {
                    if (0 === i.length)
                        return _r_(function(e) {
                            return _i_("3da:0e026f32"),
                            _r_(e)
                        });
                    var n = function() {
                        _i_("3da:d03ba723");
                        var e = i[i.length - 1]
                          , t = i.slice(0, -1);
                        return _r_({
                            v: function() {
                                return _i_("3da:78214a93"),
                                _r_(t.reduceRight(function(e, t) {
                                    return _i_("3da:43a87ba7"),
                                    _r_(t(e))
                                }, e.apply(void 0, arguments)))
                            }
                        })
                    }();
                    if ("object" == typeof n)
                        return _r_(n.v)
                }
                _r_()
            }
            ,
            _r_()
        }
        , function(e, t, i) {
            "use strict";
            _i_("3da:2b402008"),
            t.__esModule = !0,
            t.ActionTypes = void 0,
            t.default = function e(t, i, n) {
                _i_("3da:e847f5c6");
                var a;
                "function" == typeof i && void 0 === n && (n = i,
                i = void 0);
                if (void 0 !== n) {
                    if ("function" != typeof n)
                        throw new Error("Expected the enhancer to be a function.");
                    return _r_(n(e)(t, i))
                }
                if ("function" != typeof t)
                    throw new Error("Expected the reducer to be a function.");
                var r = t;
                var o = i;
                var _ = [];
                var s = _;
                var d = !1;
                function c() {
                    _i_("3da:47a919c7"),
                    s === _ && (s = _.slice()),
                    _r_()
                }
                function l() {
                    return _i_("3da:401ca8b9"),
                    _r_(o)
                }
                function u(t) {
                    if (_i_("3da:948954ff"),
                    "function" != typeof t)
                        throw new Error("Expected listener to be a function.");
                    var i = !0;
                    return c(),
                    s.push(t),
                    _r_(function() {
                        if (_i_("3da:2b1c1818"),
                        !i)
                            return _r_();
                        i = !1,
                        c();
                        var e = s.indexOf(t);
                        s.splice(e, 1),
                        _r_()
                    })
                }
                function f(e) {
                    if (_i_("3da:ebb31983"),
                    !(0,
                    h.default)(e))
                        throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                    if (void 0 === e.type)
                        throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                    if (d)
                        throw new Error("Reducers may not dispatch actions.");
                    try {
                        d = !0,
                        o = r(o, e)
                    } finally {
                        d = !1
                    }
                    for (var t = _ = s, i = 0; i < t.length; i++)
                        t[i]();
                    return _r_(e)
                }
                f({
                    type: m.INIT
                });
                return _r_((a = {
                    dispatch: f,
                    subscribe: u,
                    getState: l,
                    replaceReducer: function(e) {
                        if (_i_("3da:45410f1f"),
                        "function" != typeof e)
                            throw new Error("Expected the nextReducer to be a function.");
                        r = e,
                        f({
                            type: m.INIT
                        }),
                        _r_()
                    }
                },
                a[p.default] = function() {
                    var e;
                    _i_("3da:1082d68b");
                    var n = u;
                    return _r_(((e = {
                        subscribe: function(e) {
                            if (_i_("3da:c6b06053"),
                            "object" != typeof e)
                                throw new TypeError("Expected the observer to be an object.");
                            function t() {
                                _i_("3da:86256af8"),
                                e.next && e.next(l()),
                                _r_()
                            }
                            t();
                            var i = n(t);
                            return _r_({
                                unsubscribe: i
                            })
                        }
                    })[p.default] = function() {
                        return _i_("3da:08888aa1"),
                        _r_(this)
                    }
                    ,
                    e))
                }
                ,
                a))
            }
            ;
            var h = n(i(4))
              , p = n(i(11));
            function n(e) {
                return _i_("3da:5b60c3571"),
                _r_(e && e.__esModule ? e : {
                    default: e
                })
            }
            var m = t.ActionTypes = {
                INIT: "@@redux/INIT"
            };
            _r_()
        }
        , function(e, t) {
            "use strict";
            _i_("3da:28d57c08"),
            t.__esModule = !0,
            t.default = function(e) {
                _i_("3da:f2a02361"),
                "undefined" != typeof console && "function" == typeof console.error && console.error(e);
                try {
                    throw new Error(e)
                } catch (e) {}
                _r_()
            }
            ,
            _r_()
        }
        , function(e, t, i) {
            _i_("3da:6b29ad30");
            var n = i(8)
              , a = i(9)
              , r = i(10)
              , o = Object.prototype
              , _ = Function.prototype.toString
              , s = o.hasOwnProperty
              , d = _.call(Object)
              , c = o.toString;
            e.exports = function(e) {
                if (_i_("3da:446a64bb"),
                !r(e) || "[object Object]" != c.call(e) || a(e))
                    return _r_(!1);
                var t = n(e);
                if (null === t)
                    return _r_(!0);
                var i = s.call(t, "constructor") && t.constructor;
                return _r_("function" == typeof i && i instanceof i && _.call(i) == d)
            }
            ,
            _r_()
        }
        , function(e, t, i) {
            "use strict";
            _i_("3da:d98172e0"),
            t.__esModule = !0;
            var d = Object.assign || function(e) {
                _i_("3da:e889572d");
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return _r_(e)
            }
            ;
            t.default = function() {
                _i_("3da:6f3d7eac");
                for (var e = arguments.length, s = Array(e), t = 0; t < e; t++)
                    s[t] = arguments[t];
                return _r_(function(_) {
                    return _i_("3da:06055349"),
                    _r_(function(e, t, i) {
                        _i_("3da:e561fb03");
                        var n = _(e, t, i)
                          , a = n.dispatch
                          , r = []
                          , o = {
                            getState: n.getState,
                            dispatch: function(e) {
                                return _i_("3da:0fe5411b"),
                                _r_(a(e))
                            }
                        };
                        return r = s.map(function(e) {
                            return _i_("3da:0e53476f"),
                            _r_(e(o))
                        }),
                        a = c.default.apply(void 0, r)(n.dispatch),
                        _r_(d({}, n, {
                            dispatch: a
                        }))
                    })
                })
            }
            ;
            var n, a = i(1), c = (n = a,
            _i_("3da:5b60c3572"),
            _r_(n && n.__esModule ? n : {
                default: n
            }));
            _r_()
        }
        , function(e, t) {
            "use strict";
            function _(e, t) {
                return _i_("3da:1f384beb"),
                _r_(function() {
                    return _i_("3da:aa71ca8f"),
                    _r_(t(e.apply(void 0, arguments)))
                })
            }
            _i_("3da:9b51b09e"),
            t.__esModule = !0,
            t.default = function(e, t) {
                if (_i_("3da:91a20bc4"),
                "function" == typeof e)
                    return _r_(_(e, t));
                if ("object" != typeof e || null === e)
                    throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                for (var i = Object.keys(e), n = {}, a = 0; a < i.length; a++) {
                    var r = i[a]
                      , o = e[r];
                    "function" == typeof o && (n[r] = _(o, t))
                }
                return _r_(n)
            }
            ,
            _r_()
        }
        , function(e, t, i) {
            "use strict";
            _i_("3da:85f873a8"),
            t.__esModule = !0,
            t.default = function(e) {
                _i_("3da:e16c4d38");
                for (var t = Object.keys(e), l = {}, i = 0; i < t.length; i++) {
                    var n = t[i];
                    "function" == typeof e[n] && (l[n] = e[n])
                }
                var u, f = Object.keys(l);
                try {
                    a = l,
                    _i_("3da:eb4939eb"),
                    Object.keys(a).forEach(function(e) {
                        _i_("3da:3d5a65bf");
                        var t = a[e]
                          , i = t(void 0, {
                            type: h.ActionTypes.INIT
                        });
                        if (void 0 === i)
                            throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                        var n = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                        if (void 0 === t(void 0, {
                            type: n
                        }))
                            throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + h.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.');
                        _r_()
                    }),
                    _r_()
                } catch (e) {
                    u = e
                }
                var a;
                return _r_(function() {
                    _i_("3da:3a86098d");
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
                      , t = arguments[1];
                    if (u)
                        throw u;
                    var i = function(e, t, i) {
                        _i_("3da:f2a73eb0");
                        var n = Object.keys(t)
                          , a = i && i.type === h.ActionTypes.INIT ? "initialState argument passed to createStore" : "previous state received by the reducer";
                        if (0 === n.length)
                            return _r_("Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.");
                        if (!(0,
                        p.default)(e))
                            return _r_("The " + a + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following keys: "' + n.join('", "') + '"');
                        var r = Object.keys(e).filter(function(e) {
                            return _i_("3da:34903b2b"),
                            _r_(!t.hasOwnProperty(e))
                        });
                        if (0 < r.length)
                            return _r_("Unexpected " + (1 < r.length ? "keys" : "key") + ' "' + r.join('", "') + '" found in ' + a + '. Expected to find one of the known reducer keys instead: "' + n.join('", "') + '". Unexpected keys will be ignored.');
                        _r_()
                    }(e, l, t);
                    i && (0,
                    m.default)(i);
                    for (var n = !1, a = {}, r = 0; r < f.length; r++) {
                        var o = f[r]
                          , _ = l[o]
                          , s = e[o]
                          , d = _(s, t);
                        if (void 0 === d) {
                            var c = b(o, t);
                            throw new Error(c)
                        }
                        a[o] = d,
                        n = n || d !== s
                    }
                    return _r_(n ? a : e)
                })
            }
            ;
            var h = i(2)
              , p = n(i(4))
              , m = n(i(3));
            function n(e) {
                return _i_("3da:5b60c3573"),
                _r_(e && e.__esModule ? e : {
                    default: e
                })
            }
            function b(e, t) {
                _i_("3da:cff602e1");
                var i = t && t.type
                  , n = i && '"' + i.toString() + '"' || "an action";
                return _r_("Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.')
            }
            _r_()
        }
        , function(e, t) {
            _i_("3da:0efa003b");
            var i = Object.getPrototypeOf;
            e.exports = function(e) {
                return _i_("3da:62c74501"),
                _r_(i(Object(e)))
            }
            ,
            _r_()
        }
        , function(e, t) {
            _i_("3da:5ad08b03"),
            e.exports = function(e) {
                _i_("3da:57204afd");
                var t = !1;
                if (null != e && "function" != typeof e.toString)
                    try {
                        t = !!(e + "")
                    } catch (e) {}
                return _r_(t)
            }
            ,
            _r_()
        }
        , function(e, t) {
            _i_("3da:2dd6413a"),
            e.exports = function(e) {
                return _i_("3da:44c94211"),
                _r_(!!e && "object" == typeof e)
            }
            ,
            _r_()
        }
        , function(t, e, i) {
            _i_("3da:340049b5"),
            function(e) {
                "use strict";
                _i_("3da:54146ae9"),
                t.exports = i(12)(e || window || this),
                _r_()
            }
            .call(e, function() {
                return _i_("3da:693c131b"),
                _r_(this)
            }()),
            _r_()
        }
        , function(e, t) {
            "use strict";
            _i_("3da:d8389621"),
            e.exports = function(e) {
                var t;
                _i_("3da:16dfda09");
                var i = e.Symbol;
                return "function" == typeof i ? i.observable ? t = i.observable : (t = "function" == typeof i.for ? i.for("observable") : i("observable"),
                i.observable = t) : t = "@@observable",
                _r_(t)
            }
            ,
            _r_()
        }
        ]))
    }
    ,
    _i_("3da:cdacee32"),
    "object" == typeof t && "object" == typeof i ? i.exports = a() : "function" == typeof define && define.amd ? define([], a) : "object" == typeof t ? t.Redux = a() : n.Redux = a(),
    _r_(),
    _r_()
}),
B.define("redux-thunk", function(e, t, i) {
    function n(a) {
        return _i_("3da:a7fd3be6"),
        _r_(function(e) {
            _i_("3da:062ac9a3");
            var i = e.dispatch
              , n = e.getState;
            return _r_(function(t) {
                return _i_("3da:a578fd04"),
                _r_(function(e) {
                    if (_i_("3da:e53004a6"),
                    "function" == typeof e)
                        return _r_(e(i, n, a));
                    return _r_(t(e))
                })
            })
        })
    }
    _i_("3da:24d16021");
    var a = n();
    a.withExtraArgument = n,
    i.exports = a,
    _r_()
}),
B.define("report-error", function() {
    return _i_("3da:c368b216"),
    _r_(function(e, t) {
        _i_("3da:cc4fb343");
        var i, n = B.env && B.env.b_dev_server, a = (i = B.reportError,
        _i_("3da:8ea0d968"),
        _r_(i && "[object Function]" === {}.toString.call(i)) && B.reportError.bind(B));
        if (n || !a)
            throw new Error(e);
        a({
            message: e
        }, t),
        _r_()
    })
}),
B.define("event-map", function(e, t, i) {
    _i_("3da:0259f673");
    var s = e("jquery");
    i.exports = function(e, t, i) {
        _i_("3da:53304879");
        e = s(e);
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var a = n.split(/\s+/)
                  , r = a.shift()
                  , o = a.join(" ")
                  , _ = i ? t[n].bind(i) : t[n];
                o ? e.on(r, o, _) : e.on(r, _)
            }
        _r_()
    }
    ,
    _r_()
}),
B.define("morphdom", function(e, t, i) {
    _i_("3da:e2c86c4b"),
    function(e) {
        if (_i_("3da:ab944764"),
        "object" == typeof t && void 0 !== i)
            i.exports = e();
        else if ("function" == typeof define && define.amd)
            define([], e);
        else {
            ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).morphdom = e()
        }
        _r_()
    }(function() {
        var e, O;
        _i_("3da:6ef9ef9c"),
        e = {
            exports: {}
        };
        var M, t = "undefined" != typeof document ? document.body || document.createElement("div") : {}, N = "http://www.w3.org/1999/xhtml";
        function $(e) {
            for (var t in _i_("3da:ace7a10f"),
            e)
                if (e.hasOwnProperty(t))
                    return _r_(!1);
            return _r_(!0)
        }
        M = t.hasAttributeNS ? function(e, t, i) {
            return _i_("3da:eade7059"),
            _r_(e.hasAttributeNS(t, i))
        }
        : t.hasAttribute ? function(e, t, i) {
            return _i_("3da:48b626c7"),
            _r_(e.hasAttribute(i))
        }
        : function(e, t, i) {
            return _i_("3da:b1b897cf"),
            _r_(!!e.getAttributeNode(i))
        }
        ;
        var D = {
            OPTION: function(e, t) {
                _i_("3da:766a26cf"),
                e.selected = t.selected,
                e.selected ? e.setAttribute("selected", "") : e.removeAttribute("selected", ""),
                _r_()
            },
            INPUT: function(e, t) {
                _i_("3da:8ce9f1cf"),
                e.checked = t.checked,
                e.checked ? e.setAttribute("checked", "") : e.removeAttribute("checked"),
                e.value !== t.value && (e.value = t.value),
                M(t, null, "value") || e.removeAttribute("value"),
                e.disabled = t.disabled,
                e.disabled ? e.setAttribute("disabled", "") : e.removeAttribute("disabled"),
                _r_()
            },
            TEXTAREA: function(e, t) {
                _i_("3da:fafa0a75");
                var i = t.value;
                e.value !== i && (e.value = i),
                e.firstChild && e.firstChild.nodeValue !== i && (e.firstChild.nodeValue = i),
                _r_()
            }
        };
        function L() {}
        var j = function(e, t) {
            return _i_("3da:ee20f945"),
            _r_(e.nodeName === t.nodeName && e.namespaceURI === t.namespaceURI)
        };
        function P(e) {
            return _i_("3da:dc0a4ac8"),
            _r_(e.id)
        }
        return e.exports = function(e, t, i) {
            if (_i_("3da:af448acf"),
            i || (i = {}),
            "string" == typeof t)
                if ("#document" === e.nodeName || "HTML" === e.nodeName) {
                    var n = t;
                    (t = document.createElement("html")).innerHTML = n
                } else
                    a = t,
                    _i_("3da:6e64c2c2"),
                    !O && document.createRange && (O = document.createRange()).selectNode(document.body),
                    O && O.createContextualFragment ? r = O.createContextualFragment(a) : (r = document.createElement("body")).innerHTML = a,
                    t = _r_(r.childNodes[0]);
            var a, r, m = {}, b = {}, g = i.getNodeKey || P, v = i.onBeforeNodeAdded || L, y = i.onNodeAdded || L, w = i.onBeforeElUpdated || L, k = i.onElUpdated || L, o = i.onBeforeNodeDiscarded || L, _ = i.onNodeDiscarded || L, E = i.onBeforeElChildrenUpdated || L, s = !0 === i.childrenOnly, T = [];
            function d(e) {
                if (_i_("3da:5e13d614"),
                1 === e.nodeType)
                    for (var t = e.firstChild; t; )
                        g(t) || (_(t),
                        d(t)),
                        t = t.nextSibling;
                _r_()
            }
            function C(e, t, i) {
                if (_i_("3da:f34545d8"),
                !1 === o(e))
                    return _r_();
                t.removeChild(e),
                i ? g(e) || (_(e),
                d(e)) : function e(t, i) {
                    _i_("3da:17cb2e51");
                    var n = g(t);
                    if (n ? m[n] = t : i || _(t),
                    1 === t.nodeType)
                        for (var a = t.firstChild; a; )
                            e(a, i || n),
                            a = a.nextSibling;
                    _r_()
                }(e),
                _r_()
            }
            function x(e, t, i, n) {
                _i_("3da:cb66c668");
                var a = g(t);
                if (a && delete m[a],
                !n) {
                    if (!1 === w(e, t))
                        return _r_();
                    if (function(e, t) {
                        _i_("3da:3c17c39e");
                        var i, n, a, r, o, _, s = t.attributes;
                        for (i = s.length - 1; 0 <= i; i--)
                            a = (n = s[i]).name,
                            o = n.value,
                            (r = n.namespaceURI) ? (a = n.localName || a,
                            _ = e.getAttributeNS(r, a)) : _ = e.getAttribute(a),
                            _ !== o && (r ? ("xmlns" === n.prefix && (a = n.name),
                            e.setAttributeNS(r, a, o)) : e.setAttribute(a, o));
                        for (i = (s = e.attributes).length - 1; 0 <= i; i--)
                            !1 !== (n = s[i]).specified && (a = n.name,
                            r = n.namespaceURI,
                            M(t, r, r ? a = n.localName || a : a) || e.removeAttributeNode(n));
                        _r_()
                    }(e, t),
                    k(e),
                    !1 === E(e, t))
                        return _r_()
                }
                if ("TEXTAREA" !== e.nodeName) {
                    var r, o, _, s, d, c = t.firstChild, l = e.firstChild;
                    e: for (; c; ) {
                        for (_ = c.nextSibling,
                        r = g(c); l; ) {
                            var u = g(l);
                            if (o = l.nextSibling,
                            !i && u && (d = b[u])) {
                                d.parentNode.replaceChild(l, d),
                                x(l, d, i),
                                l = o;
                                continue
                            }
                            var f = l.nodeType;
                            if (f === c.nodeType) {
                                var h = !1;
                                if (1 === f ? (j(l, c) && (u || r ? r === u && (h = !0) : h = !0),
                                h && x(l, c, i)) : 3 !== f && 8 != f || (h = !0,
                                l.nodeValue = c.nodeValue),
                                h) {
                                    c = _,
                                    l = o;
                                    continue e
                                }
                            }
                            C(l, e, i),
                            l = o
                        }
                        r && ((s = m[r]) ? (x(s, c, !0),
                        c = s) : b[r] = c),
                        !1 !== v(c) && (e.appendChild(c),
                        y(c)),
                        1 === c.nodeType && (r || c.firstChild) && T.push(c),
                        c = _,
                        l = o
                    }
                    for (; l; )
                        o = l.nextSibling,
                        C(l, e, i),
                        l = o
                }
                var p = D[e.nodeName];
                p && p(e, t),
                _r_()
            }
            var c, l, u = e, f = u.nodeType, h = t.nodeType;
            if (!s)
                if (1 === f)
                    1 === h ? j(e, t) || (_(e),
                    u = function(e, t) {
                        _i_("3da:6593b9e4");
                        for (var i = e.firstChild; i; ) {
                            var n = i.nextSibling;
                            t.appendChild(i),
                            i = n
                        }
                        return _r_(t)
                    }(e, (c = t.nodeName,
                    l = t.namespaceURI,
                    _i_("3da:b9ab9e43"),
                    _r_(l && l !== N ? document.createElementNS(l, c) : document.createElement(c))))) : u = t;
                else if (3 === f || 8 === f) {
                    if (h === f)
                        return u.nodeValue = t.nodeValue,
                        _r_(u);
                    u = t
                }
            if (u === t)
                _(e);
            else {
                x(u, t, !1, s);
                var p = function(e) {
                    _i_("3da:07e8f038");
                    for (var t = e.firstChild; t; ) {
                        var i = t.nextSibling
                          , n = g(t);
                        if (n) {
                            var a = m[n];
                            if (a && j(t, a)) {
                                if (t.parentNode.replaceChild(a, t),
                                x(a, t, !0),
                                t = i,
                                $(m))
                                    return _r_(!1);
                                continue
                            }
                        }
                        1 === t.nodeType && p(t),
                        t = i
                    }
                    _r_()
                };
                if (!$(m))
                    e: for (; T.length; ) {
                        var B = T;
                        T = [];
                        for (var S = 0; S < B.length; S++)
                            if (!1 === p(B[S]))
                                break e
                    }
                for (var A in m)
                    if (m.hasOwnProperty(A)) {
                        var I = m[A];
                        _(I),
                        d(I)
                    }
            }
            return !s && u !== e && e.parentNode && e.parentNode.replaceChild(u, e),
            _r_(u)
        }
        ,
        _r_(e.exports)
    }),
    _r_()
}),
B.define("component/reactive", function(e, t, i) {
    _i_("3da:e7dfeb42");
    var n, a = !1, r = window.B && window.B.env && 1 == window.B.env.b_dev_server, o = e("morphdom"), _ = e("component"), s = e("component/loader"), d = e("event-map"), c = e("et"), l = window.B && window.B.env && window.B.env.b_load_et_reactive_components, u = window.B && window.B.env && window.B.env.b_load_bui_reactive_components, f = (_i_("3da:eb08434a"),
    _r_([])), h = 0;
    function p(e) {
        return _i_("3da:df331070"),
        _r_(1 === (t = e,
        _i_("3da:d12e6d1c"),
        !n && document.createRange && (n = document.createRange()).selectNode(document.body),
        n && n.createContextualFragment ? i = n.createContextualFragment(t) : (i = document.createElement("body")).innerHTML = t,
        _r_(i.childNodes)).length);
        var t, i
    }
    function m(e, t, i) {
        var n, a, r, o, _;
        _i_("3da:95620d52");
        var s = i ? i.attributes : t.attributes;
        if (!s)
            return _r_();
        for (n = 0,
        a = s.length; n < a; ++n)
            if (0 === (r = s[n]).name.indexOf("on:")) {
                _ = r.name.split(":")[1],
                o = r.value,
                t.addEventListener(_, e[o], !1);
                var d = t.getAttribute(r.name);
                d !== r.value && t.removeEventListener(_, e[d], !1)
            }
        if (i)
            for (n = 0,
            a = t.attributes.length; n < a; ++n)
                0 !== (r = t.attributes[n]).name.indexOf("on:") || i.hasAttribute(r.name) || (_ = r.name.split(":")[1],
                o = r.value,
                t.removeEventListener(_, e[o], !1));
        _r_()
    }
    function b(e, t) {
        _i_("3da:5b730617");
        var i, n = function() {
            return _i_("3da:8d3439e9"),
            _r_(NodeFilter.FILTER_ACCEPT)
        };
        if (i = t,
        _i_("3da:c394c36c"),
        !_r_(i.nodeType === Node.ELEMENT_NODE))
            return _r_();
        n.acceptNode = n;
        var a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, n, !1);
        for (m(e, t); a.nextNode(); )
            a.currentNode && a.currentNode.hasAttribute("data-component") && a.nextSibling(),
            m(e, a.currentNode);
        _r_()
    }
    function g(i) {
        _i_("3da:5c448b89");
        var r, e = {
            onBeforeElUpdated: function(e, t) {
                _i_("3da:25652c8b"),
                m(i, e, t),
                _r_()
            },
            onBeforeElChildrenUpdated: function(e, t) {
                return _i_("3da:a45f5979"),
                _r_(function(e, t, i) {
                    var n;
                    _i_("3da:79234ca2");
                    var a = e.el;
                    if (t !== i && t !== a && (n = s.getComponent(t)) && n.render !== _.prototype.render)
                        return n.render(),
                        _r_(!1);
                    _r_()
                }(i, e, t))
            },
            onNodeAdded: function(e) {
                _i_("3da:ff98ccf6"),
                b(i, e),
                _r_()
            },
            onBeforeNodeDiscarded: function(e) {
                _i_("3da:182b441e"),
                "string" == typeof e.localName && e.localName.match(/^grammarly\-/) && !a && (a = !0),
                _r_()
            }
        };
        return r = e,
        _i_("3da:f7fc0779"),
        f.forEach(function(e) {
            if (_i_("3da:616a171f"),
            "function" != typeof e)
                return _r_(!1);
            var t = e();
            Object.keys(t).forEach(function(e) {
                _i_("3da:bef6248f"),
                function(i, n) {
                    if (_i_("3da:d9e9eff7"),
                    !i.hasOwnProperty(n) || "function" != typeof i[n])
                        return _r_(!1);
                    if ("function" == typeof r[n]) {
                        var e = r[n];
                        r[n] = (a = e,
                        _i_("3da:eca07329"),
                        _r_(function() {
                            _i_("3da:9e624c95");
                            var e = i[n].apply(this, arguments)
                              , t = a.apply(this, arguments);
                            if (void 0 !== e)
                                return _r_(e);
                            if (void 0 !== t)
                                return _r_(t);
                            _r_()
                        }))
                    } else
                        r[n] = i[n];
                    var a;
                    _r_()
                }(t, e),
                _r_()
            }),
            _r_()
        }),
        _r_(),
        _r_(e)
    }
    i.exports = _.extend({
        init: function() {
            _i_("3da:93ad71f0"),
            this.name = function(e) {
                if (_i_("3da:db849ab7"),
                0 <= e.indexOf(" "))
                    throw new Error('component/reactive: invalid "' + e + '". Component name must not contain spaces');
                return _r_(e)
            }(this.el.getAttribute("data-component")),
            this.connectStore(),
            this.__state = this.initialState || {},
            this.renderOptions = g(this),
            function(e) {
                for (var t in _i_("3da:187091b6"),
                e)
                    "function" == typeof e[t] && (e[t] = e[t].bind(e));
                _r_()
            }(this),
            this.initialize && this.initialize(),
            b(this, this.el),
            this.render(),
            _r_()
        },
        connectStore: function() {
            if (_i_("3da:c18d37e7"),
            this.store) {
                if ("function" != typeof this.store.getState)
                    throw new Error("Reactive Component: " + this.name + ": Store should have getState method");
                if ("function" != typeof this.store.subscribe)
                    throw new Error("Reactive Component: " + this.name + ": Store should have subscribe method");
                this.store.subscribe(this.render.bind(this))
            }
            _r_()
        },
        dispatch: function(e) {
            _i_("3da:a69533bf"),
            this.store && this.store.dispatch(e),
            _r_()
        },
        getStoreState: function() {
            _i_("3da:eaf2e35d");
            var e = {};
            return this.store && (e.store = this.store.getState()),
            _r_(e)
        },
        getInnerState: function() {
            return _i_("3da:ddde5c51"),
            _r_(this.__state)
        },
        getState: function() {
            return _i_("3da:f3022fe0"),
            _r_(Object.assign({}, this.getStoreState(), this.getInnerState()))
        },
        setState: function(e) {
            _i_("3da:0e8b521c"),
            this.__state = Object.assign({}, this.__state, e),
            this.render(),
            _r_()
        },
        events: function(e) {
            _i_("3da:f7962b33"),
            d(this.el, e, this),
            _r_()
        },
        _destroy: function() {
            _i_("3da:5b40527e"),
            "function" == typeof this.unsubscribe && this.unsubscribe(),
            "function" == typeof this.destroy && this.destroy(),
            _r_()
        },
        render: function() {
            if (_i_("3da:886a647f"),
            !this.template)
                return _r_();
            if (50 < ++h)
                throw new Error(this.name + ": max render depth reached (50). Stuck in a loop?");
            var e = B.jstmpl(this.template).render(this.getState()).trim();
            if (r && !p(e))
                throw new Error("Broken. Reactive components requires having one root node element in rendered template. Add a root element to the template.","component/reactive");
            try {
                o(this.el, e, this.renderOptions)
            } catch (e) {
                throw new Error("Reactive Component: " + this.name + ": Failed to render using morphdom")
            }
            this.$el && (s.loadComponents(this.$el),
            l && c.initAttributesTracking(this.$el),
            u && window.BUI.initComponents(this.el)),
            h = 0,
            "function" == typeof this.afterRender && this.afterRender(),
            _r_()
        }
    }),
    _r_()
}),
B.define("with-capla", function(e, t, i) {
    _i_("3da:cabb24f6");
    var n = e("promise")
      , a = {}
      , r = {};
    function o(e) {
        return _i_("3da:4d350593"),
        _r_(e.slice(0, -8))
    }
    function _(t) {
        return _i_("3da:dcecff49"),
        a[t] || (a[t] = new n(function(e) {
            _i_("3da:e000dba4"),
            r[t] = e,
            _r_()
        }
        )),
        _r_({
            promise: a[t],
            resolve: r[t]
        })
    }
    window.B.__caplaInitialised && Object.keys(window.B.__caplaInitialised).forEach(function(e) {
        _i_("3da:1d620442"),
        _(o(e)).resolve(window.B.__caplaInitialised[e]),
        _r_()
    }),
    document.addEventListener("booking-capla-initialized", function(e) {
        _i_("3da:bf4fa97b"),
        _(o(e.detail.namespace)).resolve(e.detail),
        _r_()
    }),
    i.exports = function(e, t, n) {
        return _i_("3da:edf87387"),
        _r_(function() {
            _i_("3da:e42d11f1");
            var i = arguments;
            _("b-" + e + "-" + t).promise.then(function(e) {
                _i_("3da:7774fbc2");
                var t = [].slice.call(i);
                t.unshift(e),
                n.apply(n, t),
                _r_()
            }),
            _r_()
        })
    }
    ,
    _r_()
}),
B.when({
    events: "load",
    condition: B.env.fe_cookie_warning && B.env.b_bookings_owned && B.env.fe_cookie_detector
}).run(function(e) {
    if (_i_("3da:07c3eb83"),
    !B.eventEmitter || !window.navigator || "function" != typeof window.navigator.sendBeacon || "function" != typeof window.FormData)
        return _r_();
    function t() {
        if (_i_("3da:75fc5f43"),
        !window.performance || !window.performance.getEntriesByType || "function" != typeof window.performance.getEntriesByType)
            return _r_();
        var e = function(e) {
            _i_("3da:7ec4798c");
            for (var t, i, n, a, r = {}, o = [], _ = 0; _ < e.length; _++) {
                if (i = e[_],
                (n = document.createElement("a")).href = i.name,
                a = i.initiatorType,
                !n.hostname || !n.pathname || /bstatic/.test(n.hostname) || /booking\.com/.test(n.hostname) || "css" === a || n.hostname === location.hostname || s(n))
                    continue;
                (t = r[n.hostname + a] = r[n.hostname + a] || {}).domain = n.hostname,
                t.scriptname = t.scriptname || [],
                t.scriptname.push(n.pathname.split("/").pop().split(";")[0]),
                t.type = a
            }
            for (t in r)
                r.hasOwnProperty(t) && o.push(r[t]);
            return _r_(o)
        }(window.performance.getEntriesByType("resource"));
        if (!e.length)
            return _r_();
        var t = "/log_foreign_resources?bhc_csrf_token=" + B.env.b_csrf_token
          , i = {
            action: B.env.b_action || location.pathname,
            aid: B.env.b_aid || 0,
            landing: B.env.b_is_landing || 0,
            resources: e
        };
        window.navigator.sendBeacon(t, JSON.stringify(i)),
        _r_()
    }
    function s(e) {
        _i_("3da:57a199ca");
        for (var t = [{
            hostname: "www.google-analytics.com",
            pathname: "/analytics.js"
        }, {
            hostname: "www.google-analytics.com",
            pathname: "/collect"
        }, {
            hostname: "maps.googleapis.com",
            pathname: "/maps/api/staticmap"
        }, {
            hostname: "www.google-analytics.com",
            scriptname: "ec.js"
        }, {
            hostname: "graph.facebook.com",
            scriptname: "picture"
        }, {
            hostname: "d3sqxisklclazg.cloudfront.net"
        }, {
            hostname: "maps.gstatic.com"
        }, {
            hostname: /\.kaspersky-labs.com/
        }], i = e.pathname.split("/").pop().split(";")[0], n = 0; n < t.length; n++) {
            var a = t[n];
            if ("string" == typeof a.hostname) {
                if (e.hostname !== a.hostname)
                    continue
            } else if (!a.hostname.test(e.hostname))
                continue;
            if (a.pathname && e.pathname === a.pathname)
                return _r_(!0);
            if (a.scriptname && a.scriptname === i)
                return _r_(!0);
            if (!a.scriptname && !a.pathname)
                return _r_(!0)
        }
        return _r_(!1)
    }
    B.eventEmitter.on("COOKIE_CONSENT_PROVIDED", function() {
        _i_("3da:32920979"),
        window.removeEventListener("beforeunload", t),
        _r_()
    }),
    B.env.b_dev_server ? window.addEventListener("test:report:cookies", t) : window.addEventListener("beforeunload", t),
    _r_()
}),
function(e, r) {
    if (_i_("3da:f5fc6b37"),
    !r)
        return _r_();
    r.easing.jswing = r.easing.swing,
    r.extend(r.easing, {
        def: "easeOutQuad",
        swing: function(e, t, i, n, a) {
            return _i_("3da:885049d7"),
            _r_(r.easing[r.easing.def](e, t, i, n, a))
        },
        easeInQuad: function(e, t, i, n, a) {
            return _i_("3da:a60f8a31"),
            _r_(n * (t /= a) * t + i)
        },
        easeOutQuad: function(e, t, i, n, a) {
            return _i_("3da:1429b37a"),
            _r_(-n * (t /= a) * (t - 2) + i)
        },
        easeInOutQuad: function(e, t, i, n, a) {
            if (_i_("3da:c873508e"),
            (t /= a / 2) < 1)
                return _r_(n / 2 * t * t + i);
            return _r_(-n / 2 * (--t * (t - 2) - 1) + i)
        },
        easeInCubic: function(e, t, i, n, a) {
            return _i_("3da:9234452c"),
            _r_(n * (t /= a) * t * t + i)
        },
        easeOutCubic: function(e, t, i, n, a) {
            return _i_("3da:981f963a"),
            _r_(n * ((t = t / a - 1) * t * t + 1) + i)
        },
        easeInOutCubic: function(e, t, i, n, a) {
            if (_i_("3da:8b80c709"),
            (t /= a / 2) < 1)
                return _r_(n / 2 * t * t * t + i);
            return _r_(n / 2 * ((t -= 2) * t * t + 2) + i)
        },
        easeInQuart: function(e, t, i, n, a) {
            return _i_("3da:6201f1a3"),
            _r_(n * (t /= a) * t * t * t + i)
        },
        easeOutQuart: function(e, t, i, n, a) {
            return _i_("3da:716de497"),
            _r_(-n * ((t = t / a - 1) * t * t * t - 1) + i)
        },
        easeInOutQuart: function(e, t, i, n, a) {
            if (_i_("3da:0ce15a2c"),
            (t /= a / 2) < 1)
                return _r_(n / 2 * t * t * t * t + i);
            return _r_(-n / 2 * ((t -= 2) * t * t * t - 2) + i)
        },
        easeInQuint: function(e, t, i, n, a) {
            return _i_("3da:9872e11d"),
            _r_(n * (t /= a) * t * t * t * t + i)
        },
        easeOutQuint: function(e, t, i, n, a) {
            return _i_("3da:412de34e"),
            _r_(n * ((t = t / a - 1) * t * t * t * t + 1) + i)
        },
        easeInOutQuint: function(e, t, i, n, a) {
            if (_i_("3da:4c6a0089"),
            (t /= a / 2) < 1)
                return _r_(n / 2 * t * t * t * t * t + i);
            return _r_(n / 2 * ((t -= 2) * t * t * t * t + 2) + i)
        },
        easeInSine: function(e, t, i, n, a) {
            return _i_("3da:704788a5"),
            _r_(-n * Math.cos(t / a * (Math.PI / 2)) + n + i)
        },
        easeOutSine: function(e, t, i, n, a) {
            return _i_("3da:b1cab38b"),
            _r_(n * Math.sin(t / a * (Math.PI / 2)) + i)
        },
        easeInOutSine: function(e, t, i, n, a) {
            return _i_("3da:0b3e7973"),
            _r_(-n / 2 * (Math.cos(Math.PI * t / a) - 1) + i)
        },
        easeInExpo: function(e, t, i, n, a) {
            return _i_("3da:fe6b329b"),
            _r_(0 == t ? i : n * Math.pow(2, 10 * (t / a - 1)) + i)
        },
        easeOutExpo: function(e, t, i, n, a) {
            return _i_("3da:42ce570f"),
            _r_(t == a ? i + n : n * (1 - Math.pow(2, -10 * t / a)) + i)
        },
        easeInOutExpo: function(e, t, i, n, a) {
            if (_i_("3da:c6c5ee76"),
            0 == t)
                return _r_(i);
            if (t == a)
                return _r_(i + n);
            if ((t /= a / 2) < 1)
                return _r_(n / 2 * Math.pow(2, 10 * (t - 1)) + i);
            return _r_(n / 2 * (2 - Math.pow(2, -10 * --t)) + i)
        },
        easeInCirc: function(e, t, i, n, a) {
            return _i_("3da:f43b702e"),
            _r_(-n * (Math.sqrt(1 - (t /= a) * t) - 1) + i)
        },
        easeOutCirc: function(e, t, i, n, a) {
            return _i_("3da:669b8915"),
            _r_(n * Math.sqrt(1 - (t = t / a - 1) * t) + i)
        },
        easeInOutCirc: function(e, t, i, n, a) {
            if (_i_("3da:dd8a0b06"),
            (t /= a / 2) < 1)
                return _r_(-n / 2 * (Math.sqrt(1 - t * t) - 1) + i);
            return _r_(n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i)
        },
        easeInElastic: function(e, t, i, n, a) {
            _i_("3da:e8810a8f");
            var r = 1.70158
              , o = 0
              , _ = n;
            if (0 == t)
                return _r_(i);
            if (1 == (t /= a))
                return _r_(i + n);
            if (o || (o = .3 * a),
            _ < Math.abs(n)) {
                _ = n;
                r = o / 4
            } else
                r = o / (2 * Math.PI) * Math.asin(n / _);
            return _r_(-_ * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / o) + i)
        },
        easeOutElastic: function(e, t, i, n, a) {
            _i_("3da:61cd3cde");
            var r = 1.70158
              , o = 0
              , _ = n;
            if (0 == t)
                return _r_(i);
            if (1 == (t /= a))
                return _r_(i + n);
            if (o || (o = .3 * a),
            _ < Math.abs(n)) {
                _ = n;
                r = o / 4
            } else
                r = o / (2 * Math.PI) * Math.asin(n / _);
            return _r_(_ * Math.pow(2, -10 * t) * Math.sin((t * a - r) * (2 * Math.PI) / o) + n + i)
        },
        easeInOutElastic: function(e, t, i, n, a) {
            _i_("3da:e12b4b1f");
            var r = 1.70158
              , o = 0
              , _ = n;
            if (0 == t)
                return _r_(i);
            if (2 == (t /= a / 2))
                return _r_(i + n);
            if (o || (o = a * (.3 * 1.5)),
            _ < Math.abs(n)) {
                _ = n;
                r = o / 4
            } else
                r = o / (2 * Math.PI) * Math.asin(n / _);
            if (t < 1)
                return _r_(_ * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / o) * -.5 + i);
            return _r_(_ * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / o) * .5 + n + i)
        },
        easeInBack: function(e, t, i, n, a, r) {
            return _i_("3da:38e5601d"),
            null == r && (r = 1.70158),
            _r_(n * (t /= a) * t * ((r + 1) * t - r) + i)
        },
        easeOutBack: function(e, t, i, n, a, r) {
            return _i_("3da:7aa0b251"),
            null == r && (r = 1.70158),
            _r_(n * ((t = t / a - 1) * t * ((r + 1) * t + r) + 1) + i)
        },
        easeInOutBack: function(e, t, i, n, a, r) {
            if (_i_("3da:39ad2456"),
            null == r && (r = 1.70158),
            (t /= a / 2) < 1)
                return _r_(n / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + i);
            return _r_(n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + i)
        },
        easeInBounce: function(e, t, i, n, a) {
            return _i_("3da:2d5e6c38"),
            _r_(n - r.easing.easeOutBounce(e, a - t, 0, n, a) + i)
        },
        easeOutBounce: function(e, t, i, n, a) {
            return _i_("3da:9317b0a0"),
            (t /= a) < 1 / 2.75 ? _r_(n * (7.5625 * t * t) + i) : _r_(t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i)
        },
        easeInOutBounce: function(e, t, i, n, a) {
            if (_i_("3da:c17153c8"),
            t < a / 2)
                return _r_(.5 * r.easing.easeInBounce(e, 2 * t, 0, n, a) + i);
            return _r_(.5 * r.easing.easeOutBounce(e, 2 * t - a, 0, n, a) + .5 * n + i)
        }
    }),
    _r_()
}(window.booking, window.jQuery),
/* @preserve
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
function(d, c, e) {
    _i_("3da:994c3015");
    var t, l = "hashchange", u = document, i = d.event.special, n = u.documentMode, f = "on" + l in c && (void 0 === n || 7 < n);
    function h(e) {
        return _i_("3da:539bad7d"),
        e = e || location.href,
        _r_("#" + e.replace(/^[^#]*#?(.*)$/, "$1"))
    }
    d.fn[l] = function(e) {
        return _i_("3da:67fc6130"),
        _r_(e ? this.bind(l, e) : this.trigger(l))
    }
    ,
    d.fn[l].delay = 50,
    i[l] = d.extend(i[l], {
        setup: function() {
            if (_i_("3da:83a3e31e"),
            f)
                return _r_(!1);
            d(t.start),
            _r_()
        },
        teardown: function() {
            if (_i_("3da:d0c52f9e"),
            f)
                return _r_(!1);
            d(t.stop),
            _r_()
        }
    }),
    t = function() {
        _i_("3da:d115597a");
        var i, a, e, t = {}, n = h(), r = function(e) {
            return _i_("3da:99d121f5"),
            _r_(e)
        }, o = r, _ = r;
        function s() {
            _i_("3da:1268a9b9");
            var e = h()
              , t = _(n);
            e !== n ? (o(n = e, t),
            d(c).trigger(l)) : t !== n && (location.href = location.href.replace(/#.*/, "") + t),
            i = setTimeout(s, d.fn[l].delay),
            _r_()
        }
        return t.start = function() {
            _i_("3da:ce717d7b"),
            i || s(),
            _r_()
        }
        ,
        t.stop = function() {
            _i_("3da:75089a6b"),
            i && clearTimeout(i),
            i = void 0,
            _r_()
        }
        ,
        "msie" === B.env.b_browser && !f && (_i_("3da:81fe97ba"),
        t.start = function() {
            _i_("3da:d8e080ef"),
            a || (e = (e = d.fn[l].src) && e + h(),
            a = d('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                _i_("3da:d654d244"),
                e || o(h()),
                s(),
                _r_()
            }).attr("src", e || "javascript:0").insertAfter("body")[0].contentWindow,
            u.onpropertychange = function() {
                _i_("3da:af1f9d27");
                try {
                    "title" === event.propertyName && (a.document.title = u.title)
                } catch (e) {}
                _r_()
            }
            ),
            _r_()
        }
        ,
        t.stop = r,
        _ = function() {
            return _i_("3da:eedd8003"),
            _r_(h(a.location.href))
        }
        ,
        o = function(e, t) {
            _i_("3da:948d5096");
            var i = a.document
              , n = d.fn[l].domain;
            e !== t && (i.title = u.title,
            i.open(),
            n && i.write('<script>document.domain="' + n + '"<\/script>'),
            i.close(),
            a.location.hash = e),
            _r_()
        }
        ,
        _r_()),
        _r_(t)
    }(),
    _r_()
}(jQuery, window),
function(o) {
    _i_("3da:d0d90c40"),
    o.fn.hint = function(r) {
        return _i_("3da:f63f2dbc"),
        r || (r = "blur"),
        _r_(this.each(function() {
            _i_("3da:fba2ab11");
            var e = o(this)
              , t = e.attr("title")
              , i = o(this.form)
              , n = o(window);
            function a() {
                _i_("3da:04b8889d"),
                e.val() === t && e.hasClass(r) && e.val("").removeClass(r),
                _r_()
            }
            t && (e.blur(function() {
                _i_("3da:07700097"),
                "" === this.value && e.val(t).addClass(r),
                _r_()
            }).focus(a).blur(),
            i.submit(a),
            n.unload(a)),
            _r_()
        }))
    }
    ,
    _r_()
}(jQuery),
booking.env.no_search_placeholder_ie || $("input#keyword.faq_search_input").hint(),
function() {
    _i_("3da:dbbfd9f0");
    var c = B.require("jquery")
      , l = B.env.b_is_tdot_traffic ? "click touchstart" : "click";
    c.extend({
        noticeAdd: function(n) {
            _i_("3da:24fb5696");
            if (booking.events.on("growl:growlClosedManually", function(e) {
                if (_i_("3da:fea82840"),
                e && e.type.indexOf("abandoned-cart-growl-notification")) {
                    if (e.growlElem.attr("data-cart-id"))
                        return _r_();
                    c.cookie("fscag01", null, {
                        path: "/",
                        domain: booking.env.b_domain_end
                    })
                }
                _r_()
            }),
            "abandoned_cart_growl_notification" == n.textLabel) {
                if (c.cookie("fscag01"))
                    ;
                else if (!c.canShowNotice() || c.isNoticesDisabled())
                    return _r_(!1)
            } else if ("abandoned_rooms_table" == n.textLabel) {
                if (c.isNoticesDisabled())
                    return _r_(!1)
            } else if (!c.canShowNotice() || c.isNoticesDisabled())
                return _r_(!1);
            0;
            var e, t, a, i, r, o = !1, _ = "notice-wrap  " + (n = c.extend({}, {
                inEffect: {
                    opacity: "show"
                },
                inEffectDuration: 600,
                stayTime: 3e3,
                text: "",
                stay: !1,
                type: "notice",
                destination: "",
                platform: "mac",
                addClassName: "",
                injectHTML: !1,
                zindex: !1,
                isAutomatic: !1,
                textLabel: null,
                wrapperClass: "",
                fullyClickable: !1,
                closeOnCross: !1
            }, n)).platform;
            B.env.b_is_tablet && "book" === B.env.b_action && (_ += " growl_font_stack"),
            B.env.rtl && (_ += " growl_rtl"),
            c(".notice-wrap").length ? e = c(".notice-wrap") : (e = c("<div></div>").addClass(_).addClass(n.wrapperClass).appendTo("body"))[0].id = "growl_squash",
            !1 === n.zindex || isNaN(n.zindex) || e.css("z-index", n.zindex),
            B.env.rtl,
            o && e.addClass(o),
            t = c("<div></div>").addClass("notice-item-wrapper"),
            r = "" == n.destination || n.fullyClickable ? "<p>" + n.text + "</p>" : '<p class="abandoned-cart-growl-item__details"><a  href="' + n.destination + '">' + n.text + "</a></p>",
            a = "" !== n.destination && n.fullyClickable ? c('<a  class="notice-item-clickable" href="' + n.destination + '"></a>') : c("<div></div>"),
            n.cartId && a.attr("data-cart-id", n.cartId),
            a.hide().addClass("notice-item  " + n.type + " " + n.addClassName).appendTo(e).html(r).animate(n.inEffect, n.inEffectDuration).wrap(t);
            var s = a;
            if (i = c("<div></div>").addClass("notice-item-close-x").prependTo(a),
            n.closeOnCross && (s = i),
            s.bind(l, function(e) {
                if (_i_("3da:b5414c23"),
                "hotel" === booking.env.b_action) {
                    var t = JSON.parse(c.cookie("bs")) || {};
                    t.gc = 1,
                    "undefined" != typeof JSON && c.cookie("bs", JSON.stringify(t), {
                        path: "/",
                        domain: booking.env.b_domain_end
                    })
                }
                var i = B.require("ga-tracker");
                if (i.trackEvent(i.clickTracker, "growl_removed", e && e.target && c(e.target).closest(".notice-item-close-x").length ? "x" : "message"),
                c.noticeRemove(a, n.addClassName, !1, !0),
                "" !== n.destination && n.fullyClickable && c(e.target).is(".notice-item-close-x"))
                    return _r_(!1);
                return _r_(!!n.destination)
            }),
            n.injectHTML && a.prepend(n.injectHTML),
            "language" == n.type && (c(".notice-item p").css("cursor", "pointer"),
            c(".notice-item p").bind(l, function() {
                return _i_("3da:d7a1d3c2"),
                c("#langselectformlist").val(booking.env.browser_lang),
                c("#languageselect")[0].submit(),
                c.noticeRemove(a),
                _r_(!1)
            })),
            !n.stay) {
                var d = n.stayTime;
                setTimeout(function() {
                    _i_("3da:2f821d9e"),
                    c.noticeRemove(a, "", 1),
                    _r_()
                }, d)
            }
            return booking.eventEmitter.triggerHandler("growl:show", n),
            booking.events.trigger("growl:show", n),
            _r_(a)
        },
        noticeRemove: function(e, t, i, n, a) {
            _i_("3da:0c5b08dc");
            var r = e.attr("data-cart-id") && 1;
            n && !r && c.setCookieOnClose(),
            n && B.env.b_growls_close_fast || "tdot" === B.env.b_site_type && "book" === B.env.b_action && 2 === B.env.b_stage || a ? e.parent().remove() : e.animate({
                opacity: "0"
            }, 600, function() {
                _i_("3da:b63f388b"),
                e.parent().animate({
                    height: "0px"
                }, 300, function() {
                    _i_("3da:e1704f2c"),
                    e.parent().remove(),
                    _r_()
                }),
                _r_()
            }),
            t && "" != t && c("." + t).removeClass(t),
            booking.eventEmitter.triggerHandler("growl:close", {
                growlElem: e,
                type: e.attr("class"),
                isGrowlClickedManually: n
            }),
            n && booking.events.emit("growl:growlClosedManually", {
                growlElem: e,
                type: e.attr("class"),
                isGrowlClickedManually: n
            }),
            _r_()
        },
        canShowNotice: function() {
            _i_("3da:0d56013a");
            var e = !0
              , t = parseInt(c.cookie("gcmdt")) || !1;
            !1 !== t && (((new Date).getTime() - t) / 1e3 / 60 <= 20 && (e = !1));
            return _r_(e)
        },
        isNoticesDisabled: function() {
            return _i_("3da:fb141a1e"),
            _r_(!!(B && B.env && B.env.disableNotices))
        },
        setCookieOnClose: function() {
            return _i_("3da:2c29d5af"),
            booking.env.b_paid_traffic || c.cookie("gcmdt", (new Date).getTime(), {
                expires: 30,
                path: "/",
                domain: booking.env.b_domain_end
            }),
            _r_()
        }
    }),
    _r_()
}(),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:83a507e2"),
    booking.env.touch_os = "ontouchstart"in document.documentElement,
    /(chrome)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase()) && (booking.env.touch_os = !1),
    _r_()
}),
B.define("growl", function(e, t, i) {
    "use strict";
    _i_("3da:b8d859d1"),
    i.exports = {
        show: $.noticeAdd,
        trigger: function(e) {
            if (_i_("3da:f2451602"),
            e && booking.env.growl_triggers && booking.env.growl_triggers[e])
                return _r_($.noticeAdd(booking.env.growl_triggers[e]));
            _r_()
        }
    },
    _r_()
}),
function(o) {
    _i_("3da:ee21a99d"),
    o.fn.placeholder = function(e) {
        _i_("3da:9a8b71fe");
        var r = o.extend({
            attr: "placeholder",
            emptyClass: "empty"
        }, e);
        if ("placeholder" === r.attr && "placeholder"in document.createElement("input"))
            return _r_(this);
        return _r_(this.each(function() {
            _i_("3da:64df5f6f");
            var e, t = o(this), i = t.attr(r.attr), n = "password" === t.attr("type"), a = "placeholder-polyfill";
            if (!i || t.hasClass(a))
                return _r_();
            t.addClass(a),
            n && (e = o('<input type="text" />').attr({
                value: i,
                className: t[0].className
            }).insertAfter(t.hide())),
            t.closest("form").submit(function() {
                _i_("3da:2c3964eb"),
                t.trigger("focus"),
                _r_()
            }),
            "" === t.val() && t.val(i).addClass(r.emptyClass),
            t.focus(function() {
                _i_("3da:4650d91b"),
                t.val() == i && t.val("").removeClass(r.emptyClass),
                _r_()
            }),
            t.blur(function() {
                if (_i_("3da:2319735d"),
                "" !== o.trim(this.value))
                    return _r_();
                n ? t.after(e).hide() : t.val(i).addClass(r.emptyClass),
                _r_()
            }),
            n && e.addClass(r.emptyClass).focus(function() {
                _i_("3da:65b5ddd1"),
                e.detach(),
                t.show().focus(),
                _r_()
            }),
            _r_()
        }))
    }
    ,
    _r_()
}(jQuery),
function(e) {
    "use strict";
    _i_("3da:838a7d3f"),
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery),
    _r_()
}(function(o) {
    "use strict";
    function b(e) {
        return _i_("3da:329dacac"),
        _r_(!e.nodeName || -1 !== o.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]))
    }
    function t(e) {
        return _i_("3da:5f521c02"),
        _r_(o.isFunction(e) || o.isPlainObject(e) ? e : {
            top: e,
            left: e
        })
    }
    _i_("3da:083685ab");
    var g = o.scrollTo = function(e, t, i) {
        return _i_("3da:9320c56b"),
        _r_(o(window).scrollTo(e, t, i))
    }
    ;
    return g.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    },
    o.fn.scrollTo = function(e, i, p) {
        _i_("3da:1308ad89"),
        "object" == typeof i && (p = i,
        i = 0),
        "function" == typeof p && (p = {
            onAfter: p
        }),
        "max" === e && (e = 9e9),
        p = o.extend({}, g.defaults, p),
        i = i || p.duration;
        var m = p.queue && 1 < p.axis.length;
        return m && (i /= 2),
        p.offset = t(p.offset),
        p.over = t(p.over),
        _r_(this.each(function() {
            function _(e) {
                _i_("3da:3253487f");
                var t = o.extend({}, p, {
                    queue: !0,
                    duration: i,
                    complete: e && function() {
                        _i_("3da:6eee562b"),
                        e.call(c, u, p),
                        _r_()
                    }
                });
                l.animate(f, t),
                _r_()
            }
            if (_i_("3da:600b114b"),
            null !== e) {
                var s, d = b(this), c = d ? this.contentWindow || window : this, l = o(c), u = e, f = {};
                switch (typeof u) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)) {
                        u = t(u);
                        break
                    }
                    u = d ? o(u) : o(u, c);
                case "object":
                    if (0 === u.length)
                        return _r_();
                    (u.is || u.style) && (s = (u = o(u)).offset())
                }
                var h = o.isFunction(p.offset) && p.offset(c, u) || p.offset;
                o.each(p.axis.split(""), function(e, t) {
                    _i_("3da:08168348");
                    var i = "x" === t ? "Left" : "Top"
                      , n = i.toLowerCase()
                      , a = "scroll" + i
                      , r = l[a]()
                      , o = g.max(c, t);
                    s ? (f[a] = s[n] + (d ? 0 : r - l.offset()[n]),
                    p.margin && (f[a] -= parseInt(u.css("margin" + i), 10) || 0,
                    f[a] -= parseInt(u.css("border" + i + "Width"), 10) || 0),
                    f[a] += h[n] || 0,
                    p.over[n] && (f[a] += u["x" === t ? "width" : "height"]() * p.over[n])) : (i = u[n],
                    f[a] = i.slice && "%" === i.slice(-1) ? parseFloat(i) / 100 * o : i),
                    p.limit && /^\d+$/.test(f[a]) && (f[a] = f[a] <= 0 ? 0 : Math.min(f[a], o)),
                    !e && 1 < p.axis.length && (r === f[a] ? f = {} : m && (_(p.onAfterFirst),
                    f = {})),
                    _r_()
                }),
                _(p.onAfter)
            }
            _r_()
        }))
    }
    ,
    g.max = function(e, t) {
        _i_("3da:fbd5ad97");
        var i = "scroll" + (n = "x" === t ? "Width" : "Height");
        if (!b(e))
            return _r_(e[i] - o(e)[n.toLowerCase()]());
        var n = "client" + n
          , a = (r = e.ownerDocument || e.document).documentElement
          , r = r.body;
        return _r_(Math.max(a[i], r[i]) - Math.min(a[n], r[n]))
    }
    ,
    o.Tween.propHooks.scrollLeft = o.Tween.propHooks.scrollTop = {
        get: function(e) {
            return _i_("3da:b0eac659"),
            _r_(o(e.elem)[e.prop]())
        },
        set: function(e) {
            _i_("3da:c3e9bfff");
            var t = this.get(e);
            if (e.options.interrupt && e._last && e._last !== t)
                return _r_(o(e.elem).stop());
            var i = Math.round(e.now);
            t !== i && (o(e.elem)[e.prop](i),
            e._last = this.get(e)),
            _r_()
        }
    },
    _r_(g)
}),
function() {
    _i_("3da:e9d2d4a3");
    var t = {
        priority: 9,
        opening_state: 0,
        cur_open: "",
        max_select_height: 240,
        is_ie: 0,
        openSlow: !1,
        init: function() {
            _i_("3da:4908be71");
            var i = this
              , e = $(".aff_languages_popover")
              , t = $(".aff_currency_popover");
            $(".b_msie_6").length && (this.is_ie = 6),
            $(".b_msie_7").length && (this.is_ie = 7),
            $(".aff_select_box").mouseenter(function() {
                _i_("3da:e93a39c3"),
                $(this).addClass("sel_hover"),
                _r_()
            }),
            $(".aff_select_box").mouseleave(function() {
                _i_("3da:92080a23"),
                $(this).removeClass("sel_hover"),
                _r_()
            }),
            $("body").click(function(e) {
                if (_i_("3da:7734ae0f"),
                2 == i.opening_state) {
                    var t = $(e.target);
                    $(t).length && i.closeSelect()
                }
                _r_()
            }),
            e.css({
                width: i.getPopoverWidth($(".aff_language_flags")) + "px"
            }),
            t.css({
                width: i.getPopoverWidth($("#currency_dropdown_all .currency_list")) + "px"
            }),
            $(".aff_select_box[data-target]").click(function(e) {
                _i_("3da:70e19b49"),
                0 == i.opening_state ? i.openSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) : i.cur_open != $(this).attr("data-target") ? i.closeSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) : i.closeSelect(),
                _r_()
            }),
            _r_()
        },
        openSelect: function(e, t) {
            _i_("3da:e1ceceee"),
            (oThat = this).cur_open = e;
            var i = 0
              , n = 0
              , a = 0
              , r = 0
              , o = 0
              , _ = 0
              , s = 0
              , d = 0
              , c = 0
              , l = 0
              , u = 0
              , f = 0
              , h = 0
              , p = 0
              , m = 0
              , b = $("." + t).parent()
              , g = $("." + e)
              , v = oThat.getScreenSize()[0]
              , y = (oThat.getScreenSize()[1],
            parseInt(b.width() / 2, 10))
              , w = $("#partner_branding3")[0] ? $("#partner_branding3") : $(".bp_header__primary")
              , k = $(".hybrid-header #aff_personal_form")[0] ? $(".hybrid-header #aff_personal_form") : $(".bp_header__primary__wrapper #aff_personal_form")
              , E = $($(".uc_top_arrow", g))
              , T = parseInt(g.outerWidth(!0) / 2, 10)
              , C = T - y
              , x = T - 8
              , B = oThat.getLeftPos(k)[0]
              , S = oThat.getLeftPos(k)[1]
              , A = oThat.getRightPos(k)[0]
              , I = oThat.getRightPos(k)[1]
              , O = parseInt(k.css("marginLeft"), 10)
              , M = parseInt(k.css("marginRight"), 10)
              , N = parseInt(b.offset().left, 10) - parseInt(w.offset().left, 10)
              , D = parseInt(w.width(), 10) - (T + y + N)
              , L = N + y - T
              , j = $(".language_select_button")
              , P = $(".currency_select_button")
              , R = $(".affiliate_mybooking")
              , H = parseInt(P.outerWidth(), 10)
              , q = parseInt(H / 2, 10)
              , F = parseInt(j.outerWidth(), 10)
              , V = parseInt(F / 2, 10)
              , U = parseInt(R.outerWidth(), 10)
              , W = parseInt(P.css("marginLeft"), 10)
              , z = parseInt(P.css("marginRight"), 10)
              , G = parseInt(j.css("marginLeft"), 10)
              , K = parseInt(j.css("marginRight"), 10)
              , Y = parseInt(P.css("paddingLeft"), 10)
              , J = parseInt(P.css("paddingRight"), 10)
              , X = parseInt(j.css("paddingLeft"), 10)
              , Z = parseInt(j.css("paddingRight"), 10)
              , Q = parseInt(R.css("marginLeft"), 10)
              , ee = parseInt(R.css("marginRight"), 10)
              , te = parseInt(R.css("paddingLeft"), 10)
              , ie = parseInt(R.css("paddingRight"), 10)
              , ne = oThat.getHeight($(".aff_select_box"));
            $(".aff_select_wrap").hasClass("currency_select_button") && ((0 < W || 0 < z) && (o = W + z),
            (0 < Y || 0 < J) && (s = Y + J,
            d = Y / 2 + J / 2),
            btnClear = oThat.getClearCSS(P),
            n = H + o),
            $(".aff_select_wrap").hasClass("language_select_button") && ((0 < G || 0 < K) && (r = G + K),
            (0 < X || 0 < Z) && (c = X + Z,
            l = X / 2 + Z / 2),
            btnClear = oThat.getClearCSS(j),
            a = F + r),
            $(".aff_select_wrap").hasClass("affiliate_mybooking") && ((0 < Q || 0 < ee) && (_ = Q + ee),
            (0 < te || 0 < ie) && te + ie,
            btnClear = oThat.getClearCSS(R),
            i = U + _);
            var ae = oThat.getDistanceBetweenCenterElements(w, k);
            (v <= 1625 && -285 <= ae || 1626 < v && -410 <= ae || ae < 0 && -150 <= ae) && (p = 1),
            (v <= 1625 && ae <= 285 || 1626 < v && ae <= 410 || 0 < ae && ae <= 150) && (m = 1),
            oThat.isrtlLang() ? B && 0 == p ? (g.hasClass("aff_currency_popover") ? (u = i + a + o + s,
            h = g.width() - S - O - o - i - a - d - q - 6) : g.hasClass("aff_languages_popover") && (u = i + r + c,
            h = g.width() - S - O - i - l - V - 6),
            0 <= u && (f = u + S + O),
            g.css({
                left: (0 < f ? "-" : "") + f + "px",
                right: "auto",
                top: ne + "px"
            }),
            E.css({
                left: "-" + h + "px"
            })) : A && 0 == m ? (g.hasClass("aff_currency_popover") ? (u = I,
            h = g.width() - I - M + d - q - 6) : g.hasClass("aff_languages_popover") && (u = I + n,
            h = g.width() - I - M + l - n - V - 6),
            0 <= u && (f = u + M),
            g.css({
                left: "auto",
                right: (0 < f ? "-" : "") + f + "px",
                top: ne + "px"
            }),
            E.css({
                left: h
            })) : (p || m) && (D < 0 && 0 < L ? (C -= D,
            x -= D) : 0 < D && L < 0 && (C += L,
            x += L),
            g.css({
                left: -Math.round(C),
                top: ne + "px"
            }),
            $(".aff_user_popover .uc_top_arrow", b).css("left", x)) : B && 0 == p ? (g.hasClass("aff_currency_popover") ? h = (u = S) + O + q - d - 6 : g.hasClass("aff_languages_popover") && (u = S + o + H,
            h = S + O + n + V - l - 6),
            0 <= u && (f = u + O),
            g.css({
                left: (0 < f ? "-" : "") + f + "px",
                right: "auto",
                top: ne + "px"
            }),
            E.css({
                left: h
            })) : A && 0 == m ? (g.hasClass("aff_currency_popover") ? (u = I + (btnClear ? 0 : i) + (btnClear ? 0 : a) + o + s,
            h = g.width() - I - M - (btnClear ? 0 : i) - (btnClear ? 0 : a) - o - d - q - 6) : g.hasClass("aff_languages_popover") && (u = I + (btnClear ? 0 : i) + r + c,
            h = g.width() - I - M - (btnClear ? 0 : i) - r - l - V - 9),
            0 <= u && (f = u + M),
            g.css({
                left: "auto",
                right: (0 < f ? "-" : "") + f + "px",
                top: ne + "px"
            }),
            E.css({
                left: h
            })) : (p || m) && (D < 0 && 0 < L ? (C -= D,
            x -= D) : 0 < D && L < 0 && (C += L,
            x += L),
            g.css({
                left: -Math.round(C),
                top: ne + "px"
            }),
            $(".aff_user_popover .uc_top_arrow", b).css("left", x)),
            $("." + t).addClass("sel_open"),
            this.opening_state = 1,
            g.css({
                display: "block",
                opacity: "1"
            }),
            this.openSlow ? (this.openSlow = !1,
            g.animate({
                height: iNewHeight + "px"
            }, 800)) : g.css({
                height: "auto"
            }),
            setTimeout(function() {
                _i_("3da:c707cff3"),
                oThat.opening_state = 2,
                _r_()
            }, 200),
            _r_()
        },
        getScreenSize: function() {
            _i_("3da:9ad2bfbd");
            var e = $("#partner_branding3")[0] ? parseInt($("#partner_branding3").width(), 10) : parseInt($(".bp_header__primary").width(), 10)
              , t = e / 2
              , i = t - 150;
            return e <= 1625 ? i = t - 285 : 1626 < e && (i = t - 410),
            _r_([e, i])
        },
        getHeight: function(e) {
            _i_("3da:116ddb32");
            var t = parseInt(e.height(), 10);
            return _r_(t)
        },
        getClearCSS: function(e) {
            if (_i_("3da:e4127330"),
            "both" == $(e).css("clear"))
                return _r_(!0);
            return _r_(!1)
        },
        getLeftPos: function(e) {
            _i_("3da:10924076");
            var t = parseInt(e.css("left"), 10);
            if (0 <= t && t < 405)
                return _r_([!0, t]);
            return _r_([!1, t])
        },
        getRightPos: function(e) {
            _i_("3da:fa5b2ec6");
            var t = parseInt(e.css("right"), 10);
            if (0 <= t && t < 405)
                return _r_([!0, t]);
            return _r_([!1, t])
        },
        isrtlLang: function() {
            if (_i_("3da:be4e87fa"),
            $("body").hasClass("lang_is_rtl"))
                return _r_(!0);
            return _r_(!1)
        },
        getPopoverWidth: function(e) {
            var t;
            switch (_i_("3da:cc051ffd"),
            e.length) {
            case 4:
                t = 802;
                break;
            case 3:
                t = 602;
                break;
            case 2:
                t = 402;
                break;
            default:
                t = 202
            }
            return _r_(t)
        },
        getDistanceBetweenCenterElements: function(e, t) {
            _i_("3da:07e0bd6d");
            var i = e.width()
              , n = t.width()
              , a = e.offset().left
              , r = t.offset().left
              , o = parseInt(a) + parseInt(i) / 2
              , _ = parseInt(r) + parseInt(n) / 2;
            return _r_(_ - o)
        },
        closeSelect: function(e, t) {
            _i_("3da:403b1b89");
            var i = this;
            2 == this.opening_state && ($(".aff_user_popover").animate({
                height: "0px"
            }, 200, function() {
                _i_("3da:2c367a68"),
                $(".aff_user_popover").css({
                    display: "none"
                }),
                $(".aff_select_box").removeClass("sel_open"),
                e && null != e && i.openSelect(e, t),
                _r_()
            }),
            this.opening_state = 0),
            _r_()
        }
    };
    B.when({
        events: "ready"
    }).run(function(e) {
        _i_("3da:49dbaca1"),
        t.init(),
        _r_()
    }),
    _r_()
}(),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:3f4f47fb");
    var n = e("events")
      , a = e("jquery")
      , t = a(".iam-social-expand-link");
    t.length && t.on("click", function() {
        _i_("3da:750880ee");
        var e = a(".iam_login_form__social-expand-link")
          , t = a(".iam_login_form__social-button--hidden");
        e.length && e.remove(),
        t.length && t.removeClass("iam_login_form__social-button--hidden"),
        _r_()
    }),
    n.on("iam-auth-requested:lightbox", function(e) {
        _i_("3da:93c07d14");
        var t = a(".iam_account_access");
        if (!t.length)
            return _r_();
        var i = !e.modal;
        B.lightbox.hide(),
        B.lightbox.show(t, {
            customWrapperClassName: "iam_account_access_lightbox",
            addDialogStartEndText: !0,
            bAnimation: !booking.env.b_is_tdot_traffic,
            trapFocus: !!booking.env.b_is_tdot_traffic,
            bCloseButton: i,
            bMaskClick: i,
            closeOnEsc: i,
            hideCallBack: function() {
                _i_("3da:82db0ac3"),
                n.trigger("auth-dialog:hide", e),
                B.eventEmitter.trigger("auth-dialog:hide", e),
                _r_()
            }
        }),
        n.trigger("auth-dialog:show", e),
        B.eventEmitter.trigger("auth-dialog:show", e),
        _r_()
    }),
    _r_()
}),
B.define("component/iam/social-button", function(e, t, i) {
    _i_("3da:38ff14eb");
    var n = e("component")
      , a = e("events");
    i.exports = n.extend({
        init: function() {
            _i_("3da:b8a0fad2");
            var t = this.$el.data("popup-href") || this.$el.attr("href")
              , i = !!this.$el.data("mask");
            this.$el.click(function(e) {
                _i_("3da:ff1188fb"),
                e.preventDefault(),
                this.openPopup(t, i),
                _r_()
            }
            .bind(this)),
            this.onWindowFocus = this.onWindowFocus.bind(this),
            a.on("iam-auth-result", this.onWindowFocus),
            _r_()
        },
        openPopup: function(e, t) {
            _i_("3da:cde714ec");
            var i = void 0 !== window.screenLeft ? window.screenLeft : screen.left
              , n = void 0 !== window.screenTop ? window.screenTop : screen.top
              , a = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
              , r = {
                toolbar: "no",
                location: "no",
                directories: "no",
                status: "no",
                menubar: "no",
                scrollbars: "no",
                resizable: "no",
                copyhistory: "no",
                width: 400,
                height: 700,
                top: (window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height) / 2 - 350 + n,
                left: a / 2 - 200 + i
            }
              , o = Object.keys(r).map(function(e) {
                return _i_("3da:933b4528"),
                _r_(e + "=" + r[e])
            }).join(", ");
            this.popupWindow = window.open(e, "Booking.com Account", o),
            this.popupWindow.focus && this.popupWindow.focus(),
            t && (this.popupMask = $('<div class="modal-mask"></div>').css({
                width: "100vw",
                height: "100vh",
                opacity: .5,
                display: "block",
                position: "fixed"
            }).on("click", this.onWindowFocus).appendTo("body")),
            window.addEventListener("focus", this.onWindowFocus),
            _r_()
        },
        onWindowFocus: function() {
            _i_("3da:84fe115e"),
            this.popupMask && (this.popupMask.remove(),
            this.popupMask = null),
            window.removeEventListener("focus", this.onWindowFocus),
            _r_()
        }
    }),
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:746ce75c");
    var t = e("events");
    t.on("iam-auth-requested", function(e) {
        (_i_("3da:03de02f8"),
        !e.event || !e.event.originalEvent || !e.redirect_uri) ? t.trigger("iam-auth-requested:lightbox", e) : /[?&;]iframe=1/.test(e.redirect_uri) ? t.trigger("iam-auth-requested:iframe", e) : t.trigger("iam-auth-requested:redirect", e);
        _r_()
    }),
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:5049a5b0"),
    e("events").on("iam-auth-requested:redirect", function(e) {
        if (_i_("3da:6ead0502"),
        !e.redirect_uri)
            throw new Error("iam-auth-requested:redirect: redirect_uri not provided");
        location.href = e.redirect_uri,
        _r_()
    }),
    _r_()
}),
B.when({
    events: "ready"
}).run(function(a) {
    _i_("3da:eb2ebbf8"),
    a("events").on("iam-auth-requested:iframe", function(e) {
        var t;
        _i_("3da:f2d4386c");
        var i = e && e.event && e.event.target;
        if (i) {
            var n = $(i).closest("[data-command=show-auth-lightbox]");
            n.length && (t = n.data("lightbox"))
        }
        t || (t = new (a("components/iam/iframe-lightbox"))(e.redirect_uri,e.success_url),
        n.data("lightbox", t));
        t.show(e),
        _r_()
    }),
    _r_()
}),
B.define("components/iam/iframe-lightbox", function(t, e, i) {
    _i_("3da:7f4a292b");
    var n = t("events")
      , a = function(e) {
        _i_("3da:b6c59571"),
        this.uri = e,
        this.close = this.close.bind(this),
        this.closeOnEsc = this.closeOnEsc.bind(this),
        this.onWindowMessage = this.onWindowMessage.bind(this),
        this.firstTime = !0,
        this.createEl(),
        this.startLoading(),
        _r_()
    };
    a.prototype.createEl = function() {
        _i_("3da:8a8ac9fa");
        var e = t("jstmpl")("iam_login_iframe").render();
        this.$el = $(e),
        _r_()
    }
    ,
    a.prototype.startLoading = function() {
        _i_("3da:98487ad3"),
        this.loading = !0,
        $("iframe", this.$el).attr({
            src: this.uri
        }).on("load", function() {
            _i_("3da:24e4d5f7"),
            this.loading = !1,
            this.$el.removeClass("user-access-form-iframe--loading"),
            this.iframeMsg && (this.postMessage(this.iframeMsg),
            delete this.iframeMsg),
            _r_()
        }
        .bind(this)),
        this.$el.addClass("user-access-form-iframe--loading").appendTo("body").on("click", function(e) {
            _i_("3da:987675d8"),
            $(e.target).is("iframe,.user-access-form-iframe-loader") || this.close(),
            _r_()
        }
        .bind(this)),
        _r_()
    }
    ,
    a.prototype.close = function() {
        _i_("3da:4e78254b"),
        delete this.showOnResized,
        this.$el.hide(),
        $(document).off("keyup", this.closeOnEsc),
        window.removeEventListener("message", this.onWindowMessage),
        n.trigger("auth-dialog:hide", this.params),
        B.eventEmitter.trigger("auth-dialog:hide", this.params),
        _r_()
    }
    ,
    a.prototype.closeOnEsc = function(e) {
        _i_("3da:64841f50"),
        27 === e.keyCode && this.close(),
        _r_()
    }
    ,
    a.prototype.onWindowMessage = function(e) {
        _i_("3da:f156aed9");
        var t = $("iframe", this.$el);
        if ("string" == typeof e.data)
            try {
                var i = JSON.parse(e.data);
                i && "iam-ifr-size" === i.message && (i.width && t.width(i.width),
                i.height && t.height(i.height),
                this.showOnResized && (delete this.showOnResized,
                setTimeout(function() {
                    _i_("3da:7b21e645"),
                    this.$el.show(),
                    _r_()
                }
                .bind(this), 1)))
            } catch (e) {}
        _r_()
    }
    ,
    a.prototype.show = function(e) {
        _i_("3da:b01a7e36"),
        this.params = e;
        var t = !1;
        if (!B.env.b_user_auth_level_is_low) {
            var i = {
                message: "set-step",
                step: "register" === e.tab || "signup" === e.tab ? "register" : "signin"
            };
            this.loading ? this.iframeMsg = i : this.postMessage(i),
            this.firstTime && "register" === i.step && (t = !0)
        }
        t ? (this.showOnResized = !0,
        setTimeout(function() {
            _i_("3da:44a77911"),
            this.showOnResized && this.$el.show(),
            _r_()
        }
        .bind(this), 500)) : this.$el.show(),
        $(document).on("keyup", this.closeOnEsc),
        window.addEventListener("message", this.onWindowMessage),
        n.trigger("auth-dialog:show", e),
        B.eventEmitter.trigger("auth-dialog:show", e),
        delete this.firstTime,
        _r_()
    }
    ,
    a.prototype.postMessage = function(e) {
        _i_("3da:6884cde4"),
        e = JSON.stringify(e);
        var t = this.uri.match("https://[^/]+")[0];
        $("iframe", this.$el)[0].contentWindow.postMessage(e, t),
        _r_()
    }
    ,
    i.exports = a,
    _r_()
}),
B.define("component/iam/preload-iframe", function(e, t, i) {
    _i_("3da:224cd6ec");
    var n = e("component")
      , a = e("components/iam/iframe-lightbox")
      , r = {};
    i.exports = n.extend({
        init: function() {
            _i_("3da:93949e63");
            var e = this.readParams().redirect_uri;
            if (!e)
                return _r_();
            var t = r[e];
            t || (t = new a(e),
            r[e] = t),
            this.$el.data("lightbox", t),
            _r_()
        },
        readParams: function() {
            _i_("3da:bf7b5088");
            var e = this.$el.data("command-params");
            if (!e)
                return _r_();
            var i = {};
            return e.split(";").forEach(function(e) {
                _i_("3da:6a38e31e");
                var t = e.match(/([^=]+)=?(.*)/);
                t && (i[t[1]] = decodeURIComponent(t[2] || "")),
                _r_()
            }),
            _r_(i)
        }
    }),
    i.exports.getLightbox = function(e) {
        return _i_("3da:8f25db12"),
        _r_(r[e])
    }
    ,
    _r_()
}),
B.when({
    events: "ready"
}).run(function(a) {
    function i(e) {
        if (_i_("3da:7027b9e3"),
        a("events").trigger("iam-auth-result", e),
        e.success) {
            var t = B.env && B.env.b_this_url || window.location.href;
            if ("searchresults" === B.env.b_action && (t = location.href),
            (t = t.replace(/[&;]logout=1/, "")).indexOf("auth_success=") < 0) {
                var i = t.split("#")
                  , n = i[1];
                t = (t = i[0]) + (/[&;]$/.test(t) ? "" : B.env.b_query_params_delimiter) + "auth_success=1",
                n && (t = t + "#" + n)
            }
            location.href = t
        }
        _r_()
    }
    _i_("3da:a06d8d1f"),
    window.addEventListener("message", function(e) {
        if (_i_("3da:809b1ded"),
        e && e.data && "iam-auth-result" === e.data.message)
            i(e.data);
        else if (e && e.data && "string" == typeof e.data)
            try {
                var t = JSON.parse(e.data);
                "iam-auth-result" === t.message && i(t)
            } catch (e) {}
        _r_()
    }),
    _r_()
}),
booking.jstmpl("iam_login_iframe", function() {
    _i_("3da:d35025af");
    var n, a = ['\n    <div class="js-user-access-form-iframe user-access-form-modal-mask user-access-form-iframe">\n        <div class="user-access-form-modal-scroll">\n            <div class="user-access-form-modal-container ', " user-access-form-modal-container--extended", '">\n                <div class="user-access-form-iframe-content">\n                    <iframe\n                        id="iam_iframe"\n                        ', '\n                            width="100%"\n                            height="692"\n                        ', '\n                            width="385"                        \n                            height="640"\n                        ', '\n                        scrolling="no"\n                    ></iframe>\n                    <div class="user-access-form-iframe-loader">\n                        ', "logos/booking-logo", "150", "\n                        <br/>\n                        <p>", "/private/loading/name", '...</p>\n                    </div>\n                    <div class="user-access-form-iframe-lightbox-close">\n                        ', "iconset/close", "large", '\n                    </div>\n                </div>\n                <div class="user-access-form-iframe-padding"> </div>\n            </div>\n        </div>\n    </div>\n'];
    return _r_(function(e) {
        _i_("3da:1225b170");
        var t = ""
          , i = this.fn;
        return t += a[0],
        i.MJ(i.track_experiment("HVUBYBBVYUTafZJYCEEIC")) && (t += a[1]),
        t += a[2],
        i.MJ(i.track_experiment("HVUBYBBVYUTafZJYCEEIC")) ? t += a[3] : t += a[4],
        t += [a[5], (e.unshift({
            name: a[6],
            width: a[7]
        }),
        n = i.HELPER("icon", e[0]),
        e.shift(),
        n), a[8], i.ME(a[9], i.MB, i.MN, null), a[10], (e.unshift({
            name: a[11],
            size: a[12]
        }),
        n = i.HELPER("icon", e[0]),
        e.shift(),
        n), a[13]].join(""),
        _r_(t)
    })
}()),
function(e, t) {
    if (_i_("3da:cd97ee61"),
    "function" == typeof define && define.amd)
        define(["exports"], t);
    else if ("undefined" != typeof exports)
        t(exports);
    else {
        var i = {};
        t(i),
        e.googleOneTap = i
    }
    _r_()
}("undefined" == typeof globalThis ? "undefined" == typeof self ? this : self : globalThis, function(e) {
    "use strict";
    function u(e, t) {
        return _i_("3da:6012b518"),
        _r_(function(e) {
            if (_i_("3da:5a714393"),
            Array.isArray(e))
                return _r_(e);
            _r_()
        }(e) || function(e, t) {
            if (_i_("3da:a03bcb9f"),
            "undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var i = []
                  , n = !0
                  , a = !1
                  , r = void 0;
                try {
                    for (var o, _ = e[Symbol.iterator](); !(n = (o = _.next()).done) && (i.push(o.value),
                    !t || i.length !== t); n = !0)
                        ;
                } catch (e) {
                    a = !0,
                    r = e
                } finally {
                    try {
                        n || null == _.return || _.return()
                    } finally {
                        if (a)
                            throw r
                    }
                }
                return _r_(i)
            }
            _r_()
        }(e, t) || function(e, t) {
            if (_i_("3da:7247d321"),
            e) {
                if ("string" == typeof e)
                    return _r_(n(e, t));
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return _r_(("Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0))
            }
            _r_()
        }(e, t) || function() {
            throw _i_("3da:fd3780e9"),
            new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }())
    }
    function n(e, t) {
        _i_("3da:db44c725"),
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = Array(t); i < t; i++)
            n[i] = e[i];
        return _r_(n)
    }
    function t(e) {
        var t, i, n, a, r, o;
        if (_i_("3da:4248c1e1"),
        !h && !p) {
            var _, s;
            if ("object" == typeof e.placement)
                _ = e.placement;
            else
                _ = m[null !== (s = e.placement) && void 0 !== s ? s : "top-left"];
            (f = {
                googleClientId: "901905703382-m88jn1h9ll89odkt6t5muc6h7ep83rlh.apps.googleusercontent.com",
                oauthClientId: e.oauthClientId,
                oauthRedirectUri: e.oauthRedirectUri,
                oauthState: e.oauthState,
                containerId: null !== (t = e.containerId) && void 0 !== t ? t : "google-one-tap-wrapper",
                placement: _,
                googleCopyVariant: null !== (i = e.googleCopyVariant) && void 0 !== i ? i : "signin",
                translations: null !== (n = e.translations) && void 0 !== n ? n : {
                    loadingHeader: "Verifying...",
                    loadingText: "Signing in to Booking.com"
                },
                cancelOnTapOutside: null === (a = e.cancelOnTapOutside) || void 0 === a || a,
                autoSelect: null !== (r = e.autoSelect) && void 0 !== r && r,
                onDisplayed: e.onDisplayed,
                onDismissedByUser: e.onDismissedByUser,
                onAutoDismissed: e.onAutoDismissed,
                debugLogging: null !== (o = e.debugLogging) && void 0 !== o && o,
                apHost: e.apHost
            }).oauthClientId && f.oauthRedirectUri && (window.onGoogleLibraryLoad = d,
            function() {
                _i_("3da:ccb84ce6");
                var e = document.createElement("script");
                e.setAttribute("async", ""),
                e.setAttribute("defer", ""),
                e.setAttribute("src", "https://accounts.google.com/gsi/client"),
                document.head.appendChild(e),
                _r_()
            }(),
            p = !0)
        }
        _r_()
    }
    function i() {
        _i_("3da:4dbe540b"),
        h && l && document.body.removeChild(l),
        _r_()
    }
    function a() {
        var e, t;
        _i_("3da:312d8858"),
        r = !0,
        null === (e = window.google) || void 0 === e || null === (t = e.accounts) || void 0 === t || t.id.disableAutoSelect(),
        _r_()
    }
    function d() {
        _i_("3da:d4a52221");
        var s = Math.random().toString().substr(2);
        l = function() {
            function e(e, t, i) {
                _i_("3da:0aca701d");
                var n = document.createElement("div");
                return _r_((t && (n.className = t),
                i && (n.id = i.toString()),
                e.appendChild(n),
                n))
            }
            _i_("3da:e4116bde");
            var t = document.createElement("div");
            t.className = "google-one-tap",
            t.style.position = "absolute";
            for (var i = 0, n = Object.entries(f.placement); i < n.length; i++) {
                var a = u(n[i], 2)
                  , r = a[0]
                  , o = a[1];
                t.style[r] = o
            }
            document.body.appendChild(t);
            var _ = e(t, "google-one-tap-continue-box-wrap");
            _.style.display = "none";
            var s = e(_, "google-one-tap-continue-box")
              , d = e(s, "google-one-tap-continue-box-header");
            e(d, "google-one-tap-continue-logo").innerHTML = '<svg width="28" height="28" viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M.06.495h333.788V334.94H.06z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path d="M333.839 59.179c0-32.395-26.28-58.684-58.684-58.684H58.683C26.278.495 0 26.784 0 59.179l.019 186.995v30.152L0 335h275.164c32.415 0 58.675-26.268 58.684-58.674l-.009-217.147" fill="#253C69" mask="url(#b)"/><path d="M218.481 230.088c0-10.783 8.705-19.516 19.44-19.516 10.752 0 19.496 8.733 19.496 19.516 0 10.781-8.744 19.527-19.496 19.527-10.735 0-19.44-8.746-19.44-19.527" fill="#2393C5"/><path d="M148.861 220.31l-27.224-.017v-32.561c0-6.955 2.704-10.57 8.656-11.39h18.568c13.267 0 21.816 8.357 21.834 21.863-.018 13.875-8.365 22.105-21.834 22.105zm-27.224-87.802v-8.579c0-7.497 3.168-11.062 10.144-11.506h13.931c11.96 0 19.101 7.138 19.101 19.1 0 9.12-4.899 19.777-18.656 19.777h-24.52v-18.792zm62.006 32.491l-4.927-2.772 4.308-3.681c4.995-4.28 13.372-13.943 13.372-30.647 0-25.535-19.826-42.016-50.471-42.016H106.95c-9.082.338-16.356 7.728-16.453 16.868v144.938h16.057c.039.02.049 0 .069.02l39.997-.02c34.085 0 56.094-18.548 56.094-47.281 0-15.457-7.13-28.685-19.071-35.409z" fill="#FFFFFE"/></g></svg>',
            e(d, "google-one-tap-continue-header-text bui-f-font-strong").innerText = f.translations.loadingHeader,
            e(d, "google-one-tap-continue-box-close bui-f-color-grayscale").innerText = "✕";
            var c = e(s, "google-one-tap-continue-box-content")
              , l = e(e(c, "google-one-tap-continue-spinner-wrapper"), "bui-spinner");
            return _r_((e(l, "bui-spinner__inner"),
            e(c, "bui-f-font-emphasized").innerText = f.translations.loadingText,
            e(t, "google-one-tap-wrapper", "google-one-tap-wrapper"),
            t))
        }(),
        function() {
            _i_("3da:ffaca500");
            var e, d = !1;
            null === (e = l.querySelector(".google-one-tap-continue-box-close")) || void 0 === e || e.addEventListener("click", function() {
                return _i_("3da:ca6c415c"),
                _r_(l.remove())
            }),
            r && (f.autoSelect = !1),
            window.google.accounts.id.initialize({
                client_id: f.googleClientId,
                callback: function(e) {
                    _i_("3da:128f459c"),
                    c("callback", e);
                    var t = l.querySelector(".google-one-tap-continue-box-wrap")
                      , i = l.querySelector(".google-one-tap-continue-box")
                      , n = i && !!parseInt(window.getComputedStyle(i).borderTopLeftRadius);
                    t && d && n && (t.style.display = "block");
                    var a = /\.(?:dev|dqs)\.booking\.com/.test(f.apHost || location.origin)
                      , r = f.apHost || (a ? "account.dqs.booking.com" : "account.booking.com")
                      , o = (a ? "dqs_" : "") + "g_one_tap_nonce"
                      , _ = Object.entries({
                        secure: !0,
                        "max-age": 10,
                        domain: "booking.com",
                        path: "/social/google_one_tap"
                    }).map(function(e) {
                        return _i_("3da:1297a017"),
                        _r_(e.join("="))
                    }).join(";");
                    document.cookie = "".concat(o, "=").concat(s, ";").concat(_),
                    fetch("https://" + r + "/social/google_one_tap", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            id_token: e.credential,
                            nonce: s,
                            state: f.oauthState || "",
                            client_id: f.oauthClientId,
                            redirect_uri: f.oauthRedirectUri || ""
                        })
                    }).then(function(e) {
                        return _i_("3da:e85511ed"),
                        _r_(e.json())
                    }).then(function(e) {
                        if (_i_("3da:89a0fd61"),
                        e && e.redirect_uri) {
                            var t = e.redirect_uri;
                            /^\//.test(e.redirect_uri) && (t = "https://" + r + t),
                            location.href = t
                        }
                        _r_()
                    }),
                    _r_()
                },
                state_cookie_domain: "booking.com",
                nonce: s,
                prompt_parent_id: f.containerId,
                context: f.googleCopyVariant,
                cancel_on_tap_outside: f.cancelOnTapOutside,
                auto_select: f.autoSelect
            }),
            r && window.google.accounts.id.disableAutoSelect(),
            window.google.accounts.id.prompt(function(e) {
                var t, i, n;
                if (_i_("3da:4d40d2c5"),
                c("notification", e),
                e.isDisplayMoment() && e.isDisplayed())
                    null !== (t = l.querySelector(".google-one-tap-wrapper")) && void 0 !== t && t.childNodes.length ? function e() {
                        _i_("3da:93dfc5d6");
                        var t, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, n = null === (t = document.getElementById(f.containerId)) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        (null == n ? void 0 : n.width) ? (l.style.width = n.width + "px",
                        d = !0) : i < 100 && setTimeout(function() {
                            return _i_("3da:430df989"),
                            _r_(e(i + 1))
                        }, 100),
                        _r_()
                    }() : function() {
                        _i_("3da:a19dfe3e");
                        var e = document.querySelector('iframe[src^="https://accounts.google.com/"]');
                        return _r_(!!e && "fixed" === (null == e ? void 0 : e.style.position) && 0 === parseInt(e.style.bottom))
                    }() && (d = !0,
                    l.className += " google-one-tap-mobile"),
                    null === (i = (n = f).onDisplayed) || void 0 === i || i.call(n);
                else if (clearTimeout(void 0),
                e.isSkippedMoment()) {
                    var a, r, o = e.getSkippedReason();
                    if ("user_cancel" === o || "tap_outside" === o)
                        null === (a = (r = f).onDismissedByUser) || void 0 === a || a.call(r, o);
                    else if ("auto_cancel" === o) {
                        var _, s;
                        null === (_ = (s = f).onAutoDismissed) || void 0 === _ || _.call(s, o)
                    }
                }
                _r_()
            }),
            p = !(h = !0),
            _r_()
        }(),
        _r_()
    }
    function c() {
        if (_i_("3da:308fb918"),
        f.debugLogging) {
            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
            console.log.apply(console.log, t)
        }
        _r_()
    }
    _i_("3da:35f2f0d1"),
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e.init = t,
    e.hide = i,
    e.disableAutoSelect = a,
    e.default = void 0;
    var l, f, r = !1, h = !1, p = !1, m = {
        "top-left": {
            top: "32px",
            left: "32px"
        },
        "top-right": {
            top: "32px",
            right: "32px"
        }
    };
    e.default = {
        init: t,
        hide: i,
        disableAutoSelect: a
    },
    _r_()
}),
B.when({
    events: "ready",
    action: ["index", "searchresults", "hotel"],
    condition: B.env.fe_run_google_one_tap && !B.env.fe_google_one_tap_dev_warning
}).run(function(e) {
    _i_("3da:aa46b9bb");
    var n = window.googleOneTap
      , a = e("events");
    if (!n)
        return _r_();
    if (B.env.fe_google_one_tap_logged_out)
        return n.disableAutoSelect(),
        _r_();
    setTimeout(function() {
        _i_("3da:293ab594");
        var e = document.querySelector(".js-header-login-link");
        if (!e)
            return _r_();
        var t = e.href;
        if (!t)
            return _r_();
        var i = t.split(/[?&;]/g).reduce(function(e, t) {
            _i_("3da:be46c79a");
            var i = t.split("=");
            return i[1] && (e[i[0]] = decodeURIComponent(i[1])),
            _r_(e)
        }, {});
        n.init({
            oauthClientId: i.client_id,
            oauthState: i.state,
            oauthRedirectUri: i.redirect_uri,
            placement: B.env.rtl ? "top-left" : "top-right",
            translations: {
                loadingHeader: B.jstmpl.translations("account_sign_in_one_tap_verifying_header", null, B.env),
                loadingText: B.jstmpl.translations("account_sign_in_one_tap_verifying_body", null, B.env)
            },
            cancelOnTapOutside: "mdot" === B.env.b_site_type,
            onDisplayed: function() {
                _i_("3da:4b7fc202"),
                a.trigger("google-one-tap:show"),
                _r_()
            },
            onDismissedByUser: function() {
                _i_("3da:7ca73182"),
                a.trigger("google-one-tap:dismissed", {
                    byUser: !0
                }),
                _r_()
            },
            onAutoDismissed: function() {
                _i_("3da:2157ec6c"),
                a.trigger("google-one-tap:dismissed", {
                    autoDismissed: !0
                }),
                _r_()
            }
        }),
        _r_()
    }, 200),
    _r_()
}),
booking.jstmpl("genius_one_tap_addon", function() {
    _i_("3da:1b48a3e6");
    var n = ['\n    <div\n        class="', "google-one-tap-continue-box js-google-one-tap-genius google-one-tap-genius ", "google-one-tap-genius--mobile", '"\n    >\n        <div class="google-one-tap-genius__content bui-f-font-emphasized">\n            ', "\n                ", "/private/gex_google_popup_email/name", "\n            ", "/private/m_gex_google_popup_email/name", "\n        </div>\n    </div>\n"]
      , a = ["is_full_sized"];
    return _r_(function(e) {
        _i_("3da:e531077e");
        var t = ""
          , i = this.fn;
        return t += n[0],
        t += n[1],
        i.MK(i.MB(a[0])) && (t += n[2]),
        t += n[3],
        i.MD(a[0]) ? t += [n[4], i.ME(n[5], i.MB, i.MN, null), n[6]].join("") : t += [n[4], i.ME(n[7], i.MB, i.MN, null), n[6]].join(""),
        t += n[8],
        _r_(t)
    })
}()),
B.when({
    events: "load",
    condition: "www" === B.env.b_site_type && B.env.fe_run_google_one_tap && !B.env.fe_google_one_tap_dev_warning
}).run(function(e) {
    _i_("3da:cbd382b8");
    var i = e("jquery")
      , t = e("events");
    function s(e) {
        _i_("3da:790dabb6");
        var t = B.jstmpl("genius_one_tap_addon");
        return _r_(i(t.render({
            is_full_sized: e
        }))[0])
    }
    function a(i, n, a) {
        _i_("3da:f1ba300e");
        var e = new (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(function(e) {
            _i_("3da:70f8829d");
            var t = n.style[i].replace(/[^0-9]/g, "");
            e.forEach(function(e) {
                _i_("3da:6ae37689"),
                "attributes" === e.type && "style" == e.attributeName && 100 < t && a(t),
                _r_()
            }),
            _r_()
        }
        );
        return e.observe(n, {
            attributes: !0
        }),
        _r_(e)
    }
    t.on("google-one-tap:show", function() {
        _i_("3da:5138241a");
        var e = document.querySelector("#credential_picker_container iframe");
        Boolean(e) ? function(r) {
            _i_("3da:9ba7d2c8");
            var o = document.querySelector(".google-one-tap-continue-box-wrap")
              , _ = a("width", r, function(e) {
                _i_("3da:0294db76");
                var t = !(!o || null == o.prepend)
                  , i = !!(r && r.parentNode && r.parentNode.parentNode && null != r.parentNode.parentNode.prepend);
                if (t && i) {
                    var n = s(!0);
                    o.prepend(n);
                    var a = n.cloneNode(!0);
                    a.style.width = e - 14 + "px",
                    r.parentNode.parentNode.prepend(a)
                }
                _.disconnect(),
                _r_()
            });
            _r_()
        }(e) : function() {
            _i_("3da:37acc804");
            var i = document.getElementById("credential_picker_iframe")
              , n = 0;
            a("height", i, function(e) {
                if (_i_("3da:98ad5fbf"),
                !(t = document.querySelector(".js-google-one-tap-genius")) && i && i.parentNode && i.parentNode.append) {
                    var t = s();
                    i.parentNode.append(t),
                    n = t.clientHeight
                }
                t.style.height = +e + n - 24 + "px",
                _r_()
            }),
            _r_()
        }();
        _r_()
    }),
    t.on("google-one-tap:dismissed", function() {
        _i_("3da:bb95b411"),
        i(".js-google-one-tap-genius").remove(),
        _r_()
    }),
    _r_()
}),
_i_("3da:7ac8ab27"),
B.when({
    events: "ready",
    condition: B.env.b_sso_init_anon_session && window === window.top && (B.env.b_sso_return_url || B.env.b_secure_domain)
}).run(function() {
    _i_("3da:1a1d4796"),
    window.bookingSSO = {
        autoInitAnonSession: !0,
        oauthClientId: B.env.b_oauth_client_id,
        redirectUri: B.env.b_sso_return_url || B.env.b_secure_domain + "/login.html?op=oauth_return",
        state: B.env.b_sso_anon_session_state,
        initAnonSessionCallback: function(e) {
            _i_("3da:6bf9a10b"),
            window.booking && window.booking.reportError && B.env.b_sso_anon_session_report_errors && window.booking.reportError(e, "sso"),
            _r_()
        }
    },
    setTimeout(function() {
        _i_("3da:95f1ef3d");
        var e = document.createElement("script");
        e.setAttribute("src", B.env.b_accounts_portal_url + "static/booking-sso.v1.js"),
        e.async = !0,
        document.head.appendChild(e),
        _r_()
    }, 1e3),
    _r_()
}),
_r_(),
_i_("3da:71ff4302"),
B.when({
    events: "ready",
    experiment: "dDfPWKHAdDECLSCNVAELXT"
}).run(function() {
    _i_("3da:5de8a6e0"),
    setTimeout(function() {
        _i_("3da:19e6917e");
        var e = document.createElement("iframe");
        e.style.left = "-100000px",
        e.style.top = "-100000px",
        e.style.width = "1px",
        e.style.height = "1px";
        var t = (B.env.b_dev_server ? B.env.b_accounts_portal_url || "https://account.dqs.booking.com/" : "https://spar42.buid.booking.com/") + "bex";
        e.setAttribute("src", t),
        document.body.appendChild(e),
        _r_()
    }, 1e3),
    _r_()
}),
_r_(),
_i_("3da:8914ea04"),
B.when({
    events: "ready",
    experiment: "dDfPWKHAdDECLSCNVAELIVYeNMUSHLDeLWTYTZJYCYcUO"
}).run(function() {
    _i_("3da:f1d38664"),
    setTimeout(function() {
        _i_("3da:f75be68d");
        var e = document.createElement("iframe");
        e.style.left = "-100000px",
        e.style.top = "-100000px",
        e.style.width = "1px",
        e.style.height = "1px";
        var t = (B.env.b_dev_server ? B.env.b_secure_domain || "https://book.dqs.booking.com" : "https://qygcq.booking.com") + "/vpkftldsjj.html";
        e.setAttribute("src", t),
        document.body.appendChild(e),
        _r_()
    }, 1e3),
    _r_()
}),
_r_(),
B.define("utils/throttled", function(e, t, i) {
    _i_("3da:c05117b8"),
    i.exports = function(o, _) {
        var s;
        _i_("3da:6684d35e");
        var d = 0;
        return _r_(function e() {
            _i_("3da:f991b93f");
            for (var t = this, i = new Array(arguments.length), n = 0, a = arguments.length; n < a; n++)
                i[n] = arguments[n];
            var r = +new Date;
            if (d && clearTimeout(d),
            r - s < _)
                return d = setTimeout(function() {
                    _i_("3da:74556d05"),
                    e.apply(t, i),
                    _r_()
                }, _),
                _r_();
            s = r,
            setTimeout(function() {
                _i_("3da:68a22e39"),
                o.apply(t, i),
                _r_()
            }),
            _r_()
        })
    }
    ,
    _r_()
}),
function(T, a) {
    _i_("3da:b9e3568a");
    var C = B;
    C.bookingSticker = function() {
        var a, r, o, _, t, i, n, s, d, c, l, u, f;
        _i_("3da:d590ab2f");
        C.bookingSticker.stickToZIndex = void 0 === C.bookingSticker.stickToZIndex ? 999 : C.bookingSticker.stickToZIndex,
        C.bookingSticker.stickedElements = void 0 === C.bookingSticker.stickedElements ? [] : C.bookingSticker.stickedElements,
        C.bookingSticker.stickers = void 0 === C.bookingSticker.stickers ? [] : C.bookingSticker.stickers;
        var h = function(e) {
            _i_("3da:c73b29ff"),
            _.scrollTop() + 3 > u - r.data("stick-to-offset") && m(),
            _.scrollTop() + 3 <= u - r.data("stick-to-offset") && b(),
            _r_()
        }
          , p = function(e) {
            _i_("3da:235372b6"),
            r.css("width", "auto"),
            o.css("width", "auto").html(r.html()),
            o.is(":visible") ? (r.css("width", o.width()),
            E(o)) : (r.css("width", r.width()),
            E(r)),
            k(),
            h(),
            _r_()
        }
          , m = function() {
            _i_("3da:cbd68d31");
            var e = -parseInt(r.css("top"), 10) || 0
              , t = parseInt(r.height(), 10);
            if (e < t && -1 === C.bookingSticker.stickedElements.indexOf(r) && (g(),
            w()),
            _.scrollTop() + t + r.data("stick-to-offset") > k())
                return e = -(_.scrollTop() + parseInt(r.height(), 10) - k()),
                r.css({
                    top: e
                }),
                t < e && (v(),
                w()),
                _r_();
            if (f)
                return r.css({
                    top: r.data("stick-to-offset")
                }),
                _r_();
            return E(r),
            r.addClass("sticked").css({
                top: r.data("stick-to-offset"),
                "z-index": C.bookingSticker.stickToZIndex
            }).before(o),
            C.bookingSticker.stickToZIndex--,
            f = !0,
            g(),
            w(),
            B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_STUCK, r),
            _r_()
        }
          , b = function() {
            if (_i_("3da:efb073a3"),
            !f)
                return _r_();
            return r.removeClass("sticked").css({
                top: void 0,
                "z-index": l
            }),
            o.remove(),
            C.bookingSticker.stickToZIndex++,
            f = !1,
            v(),
            w(),
            B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_RELEASE, r),
            _r_()
        }
          , g = function() {
            _i_("3da:9f1c17cf"),
            -1 === C.bookingSticker.stickedElements.indexOf(r) && (C.bookingSticker.stickedElements.push(r),
            y()),
            _r_()
        }
          , v = function() {
            _i_("3da:f4a8e154");
            var e = C.bookingSticker.stickedElements.indexOf(r);
            -1 !== e && (C.bookingSticker.stickedElements.splice(e, 1),
            y()),
            _r_()
        }
          , y = function() {
            _i_("3da:a101cc8a"),
            C.bookingSticker.stickedElements.sort(function(e, t) {
                if (_i_("3da:1de875be"),
                e.data("elem-original-offset-top") > t.data("elem-original-offset-top"))
                    return _r_(1);
                if (e.data("elem-original-offset-top") < t.data("elem-original-offset-top"))
                    return _r_(-1);
                return _r_(0)
            }),
            _r_()
        }
          , w = function() {
            if (_i_("3da:36cc230f"),
            0 < C.bookingSticker.stickedElements.length)
                for (var e = 0; e < C.bookingSticker.stickedElements.length; e++) {
                    var t = C.bookingSticker.stickedElements[e]
                      , i = t.data("initial-offset") || 0;
                    if (t.data("stick-to-offset", i),
                    1 === t.data("no-stacking"))
                        continue;
                    if (0 < e) {
                        for (var n = e, a = e - 1, r = i; 0 <= a; ) {
                            var o = C.bookingSticker.stickedElements[a];
                            1 !== o.data("no-stacking") && (r += o.outerHeight()),
                            a--
                        }
                        C.bookingSticker.stickedElements[n].data("stick-to-offset", r)
                    }
                }
            _r_()
        }
          , k = function() {
            _i_("3da:4f36ae34");
            var e = a && a.offset && a.offset();
            return d = e ? "html" === a.selector ? 0 : parseInt(e.top, 10) : 0,
            t = parseInt(a.css("border-bottom-width"), 10),
            n = parseInt(a.css("padding-bottom"), 10),
            i = d + parseInt(a.height(), 10) + n + t,
            _r_(i)
        }
          , E = function(e) {
            _i_("3da:7e89dd17");
            var n = T(e);
            r.css({
                width: n.width()
            }),
            1 < ["inline", "inline-block", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group"].indexOf(n.css("display")) && r.find("td, th").each(function(e, t) {
                _i_("3da:d5ca6b8e");
                var i = T(n.find("td, th").get(e));
                T(t).css({
                    width: i.width()
                }),
                _r_()
            }),
            _r_()
        };
        return _r_({
            init: function(e, t, i) {
                if (_i_("3da:79cc5cc1"),
                a = T(t || "html"),
                s = parseInt(a.height(), 10),
                r = T(e),
                c = parseInt(r.height(), 10),
                i = i || {},
                !r.length)
                    return _r_();
                if (s <= c)
                    return _r_();
                var n = C.bookingSticker.stickers;
                -1 === n.indexOf(this) && n.push(this),
                _ = T(window),
                elemOriginalCSSDisplay = r.css("display"),
                emOriginalCSSTop = r.css("top"),
                l = r.css("z-index"),
                k(),
                u = parseInt(r.offset().top, 10),
                r.data("elem-original-offset-top", u),
                r.data("stick-to-offset", 0),
                r.data("initial-offset", i.initialOffset),
                i.initialZIndex && (B.bookingSticker.stickToZIndex = i.initialZIndex),
                !0 === i.noStacking && r.data("no-stacking", 1),
                o = r.clone(!1).css({
                    visibility: "hidden"
                }).addClass("sticked-placeholder"),
                E(r),
                _i_("3da:56633fd4"),
                _.bind({
                    scroll: h,
                    resize: p,
                    load: p
                }),
                _r_(),
                g(),
                w(),
                h(),
                _r_()
            },
            restartPosition: function() {
                _i_("3da:3d322222"),
                u = o.is(":visible") ? parseInt(o.offset().top, 10) : parseInt(r.offset().top, 10),
                p(),
                w(),
                h(),
                _r_()
            },
            getElement: function() {
                return _i_("3da:a24f296d"),
                _r_(r)
            },
            getOffsetTopBoundaries: function() {
                return _i_("3da:7c92dc06"),
                _r_({
                    lowerBound: u,
                    upperBound: k() - parseInt(r.height(), 10)
                })
            },
            isSticked: function() {
                return _i_("3da:24bbee0a"),
                _r_(f)
            }
        })
    }
    ,
    C.bookingSticker.update = function() {
        _i_("3da:144c2337");
        var e = C.bookingSticker.stickers || [];
        if (!e.length)
            return _r_();
        T.each(e, function(e, t) {
            _i_("3da:28437775"),
            t.restartPosition(),
            _r_()
        }),
        a.events.emit("booking_sticker:update"),
        _r_()
    }
    ,
    C.bookingSticker.destroy = function(i) {
        _i_("3da:9f64cea4");
        var e = C.bookingSticker.stickers || []
          , n = -1;
        if (!e.length)
            return _r_();
        e.forEach(function(e, t) {
            _i_("3da:ce9d74a9"),
            e.getElement().is(i) && (n = t),
            _r_()
        }),
        -1 !== n && (C.bookingSticker.stickers.splice(n, 1),
        a.events.emit("booking_sticker:destroy"));
        var t = C.bookingSticker.stickedElements || [];
        t.forEach(function(e, t) {
            _i_("3da:c3baad91"),
            e.is(i) && (n = t),
            _r_()
        }),
        -1 !== n && t.splice(n, 1),
        _r_()
    }
    ,
    B.define("booking-sticker", function() {
        return _i_("3da:9f255b53"),
        _r_(C.bookingSticker)
    }),
    _r_()
}(window.jQuery, window.booking),
booking.command("lightbox-hide", function() {
    _i_("3da:58c3be19"),
    booking.lightbox.hide(),
    _r_()
}),
B.require([], function() {
    _i_("3da:88069096"),
    booking.command.define({
        name: "show-auth-lightbox",
        handler: function(e, t) {
            _i_("3da:324054aa");
            var i = B.require("events");
            e.event = t,
            i.trigger("iam-auth-requested", e),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/utils/form-submit-on-click", function(e, t, i) {
    "use strict";
    _i_("3da:6f765ac8");
    var n = e("component")
      , a = e("utils");
    i.exports = n.extend({
        init: function() {
            _i_("3da:1b384fe7"),
            this.options = a.nodeData(this.el),
            this.$el.on("click", function() {
                _i_("3da:41fd958c"),
                this.$el.find(this.options.clickOn).length && this.$el.submit();
                _r_()
            }
            .bind(this)),
            _r_()
        }
    }),
    _r_()
}),
booking.command("show-profile-menu", function() {}),
booking.command.define({
    name: "show-currency-selector",
    handler: function(e) {
        _i_("3da:7d2affdf"),
        $(".user_center_option[data-id=currency_selector] .popover_trigger").click(),
        _r_()
    }
}),
booking.command.define("social-disconnect", function(e) {
    _i_("3da:38f2c03a");
    var t = B.require("lightbox")
      , i = $(".js-social-connect-dialog--" + e.provider + "-disconnect");
    i.length && t.show(i, {
        customWrapperClassName: "social-connect-dialog-wrapper"
    }),
    _r_()
}),
B.command("profile-add-email", function(e) {
    if (_i_("3da:4b431111"),
    !B.require("mysettings-model-emails") || "mysettings" != booking.env.b_action)
        return _r_();
    B.require("mysettings-model-emails").getInstance().save({
        b_is_new: !0,
        b_email: e.email
    }),
    _r_()
}),
function() {
    if (_i_("3da:8ae0eb46"),
    !window.B || !B.env || !B.env.fe_display_package_travel_directive_warning)
        return _r_();
    var t, e, i = window.jQuery, n = !1;
    function a() {
        _i_("3da:f80b906e"),
        window.setTimeout(r, 500),
        _r_()
    }
    function r() {
        if (_i_("3da:a23455b8"),
        n)
            return _r_();
        var e = i("#cookie_warning:visible");
        e.length && (t.css("bottom", e.height() + "px"),
        n = !0),
        _r_()
    }
    function o() {
        _i_("3da:8e9f19e6"),
        function() {
            _i_("3da:bdd6ec5d");
            var e = B.env.b_domain_end || ".booking.com";
            document.cookie = "ptdwc=1; domain=" + e + "; path=/;",
            _r_()
        }(),
        B.env.fe_new_ptd_modal && "mdot" === B.env.b_site_type ? e.close() : t.hide(),
        _r_()
    }
    function _() {
        _i_("3da:c6770e37"),
        i(".package_travel_directive_warning_extra_content").show(),
        _r_()
    }
    function s() {
        _i_("3da:e328e078");
        var t = B.env && B.env.b_dev_server ? "dqs_ptdwc" : "ptdwc";
        return _r_(document.cookie.split(";").some(function(e) {
            return _i_("3da:050d8d90"),
            _r_(0 == e.trim().indexOf(t + "="))
        }))
    }
    i(function() {
        _i_("3da:56093cf2"),
        B.env.fe_new_ptd_modal && "mdot" === B.env.b_site_type ? (e = window.BUI.createInstance("Modal", i("#ptd_warning")[0]),
        s() ? e.close() : (e.mount(),
        e.open()),
        i("#ptd_warning .bui-modal__close").on("click", function() {
            _i_("3da:57a54105"),
            o(),
            _r_()
        })) : (t = i("#package_travel_directive_warning"),
        "www" === B.env.b_site_type && (B.eventEmitter && "function" == typeof B.eventEmitter.on ? (B.eventEmitter.on("COOKIE_WARNING_SHOWN", r),
        a()) : B.env.cookie_warning ? r() : a()),
        t.toggle(!s()),
        i(document).on("click", ".close_package_travel_directive_warning", o));
        i(document).on("click", ".expand_package_travel_directive_warning", _),
        _r_()
    }),
    _r_()
}(),
function(e, t) {
    _i_("3da:9908e03a"),
    e("et_copy_tracking", ["et"], function(_) {
        _i_("3da:d4454a6a");
        var s = [];
        function e(r) {
            _i_("3da:b21b8c3d");
            var e = function(e) {
                {
                    if (_i_("3da:0770852f"),
                    "string" == typeof e)
                        return _r_([].slice.call(document.querySelectorAll(e)));
                    if (e instanceof HTMLCollection)
                        return _r_([].slice.call(e));
                    if (e instanceof NodeList)
                        return _r_([].slice.call(e));
                    if (e instanceof Element)
                        return _r_([e]);
                    if ("[object Array]" === Object.prototype.toString.call(e))
                        return _r_(e);
                    if (window.jQuery && e instanceof jQuery)
                        return _r_(e.toArray())
                }
                return _r_([])
            }("script[type='track_copy']")
              , o = t();
            e.forEach(function(e, t) {
                _i_("3da:1e2bfdcc");
                var i = e.getAttribute("data-hash")
                  , n = e.parentElement;
                if (!n.parentElement)
                    return _r_(!0);
                if (n.removeChild(e),
                r && d(n))
                    _.on("view", n).stage(i, 1);
                else {
                    var a = n.getBoundingClientRect();
                    s.push({
                        hash: i,
                        node: n,
                        offsetTop: a.top + o
                    })
                }
                _r_()
            }),
            _r_()
        }
        function t() {
            return _i_("3da:6610e969"),
            _r_(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
        }
        function d(e) {
            var t, i, n;
            if (_i_("3da:8f407b3c"),
            !e)
                return _r_(!1);
            if (!e.parentElement)
                return _r_(!1);
            if (!e.getBoundingClientRect)
                return _r_(!0);
            if (t = e.getBoundingClientRect(),
            i = window.innerHeight || document.documentElement.clientHeight,
            n = window.innerWidth || document.documentElement.clientWidth,
            t.right < 0 || t.left > n || 0 === t.top && 0 === t.left && 0 === t.right && 0 === t.bottom)
                return _r_(!1);
            return _r_(t.top < i)
        }
        return document.addEventListener("DOMContentLoaded", function() {
            _i_("3da:8d9340d8"),
            e(!0),
            setInterval(function() {
                _i_("3da:48f495fb"),
                s.length && function() {
                    _i_("3da:44013bbc");
                    var e = window.innerHeight || document.documentElement.clientHeight
                      , n = t()
                      , a = n + e;
                    s = s.filter(function(e, t) {
                        if (_i_("3da:11f13f63"),
                        !e.node.parentElement)
                            return _r_(!1);
                        if (e.offsetTop < a) {
                            var i = e.node.getBoundingClientRect();
                            if (e.offsetTop = i.top + n,
                            d(e.node) && e.offsetTop < a)
                                return _.stage(e.hash, 1),
                                _r_(!1)
                        }
                        return _r_(!0)
                    }),
                    _r_()
                }(),
                _r_()
            }, 1e3),
            setInterval(e, 5e3),
            _r_()
        }),
        _r_({})
    }),
    t("et_copy_tracking"),
    _r_()
}(B.define, B.require),
function(a) {
    if (_i_("3da:d783430f"),
    !a)
        return _r_();
    var i = !1;
    a.define("genius/collect-auto-opened-interstitials", function() {
        _i_("3da:bfc9fbc8");
        var t = [];
        return window.PCM && 1 === window.PCM.isCountryNeedCookieBanner && window.PCM.isUserGaveConsent instanceof Function && !window.PCM.isUserGaveConsent() && t.push("cookie consent banner"),
        _r_({
            registerAutoOpenInterstial: function(e) {
                _i_("3da:beede9e5"),
                t.push(e),
                _r_()
            },
            getAllOpenedInterstitials: function() {
                return _i_("3da:c7964e08"),
                _r_([].concat(t))
            }
        })
    }),
    a.define("genius/bcomponents-load-promise", function(e) {
        _i_("3da:59e5c904");
        var t = e("jquery")("html")
          , i = new Promise(function(e) {
            _i_("3da:016c1401"),
            t.data("component-elements-finished") || !1 ? e() : t.one("bcomponents:elements-load", function() {
                _i_("3da:50c1cad7"),
                e(),
                _r_()
            }),
            _r_()
        }
        );
        return _r_(i)
    }),
    a.env.ge_monitor_interstitials && a.require(["with-capla", "server-data"], function(e, n) {
        _i_("3da:ec76b4b6");
        var t = {
            index: {
                project: "index",
                service: "lp-web-mfe"
            },
            searchresults: {
                project: "search",
                service: "web-searchresults"
            },
            hotel: {
                project: "property-web",
                service: "property-page"
            }
        }[n.b_action];
        if (!t)
            return _r_();
        e(t.project, t.service, function(e) {
            _i_("3da:2951831c");
            var t = e.eventBus;
            t.subscribe("CAPLA_EVENT_generic_CHECK_AUTOOPEN_MODALS", function(e, i) {
                _i_("3da:c32ce2be"),
                a.require("genius/bcomponents-load-promise").then(function() {
                    if (_i_("3da:2d7b2aff"),
                    a.require("genius/collect-auto-opened-interstitials").getAllOpenedInterstitials().length < 1) {
                        var e = n.b_user_genius_status
                          , t = e && "b_genius_level"in e ? e.b_genius_level : 0;
                        i.resolve(t)
                    }
                    _r_()
                }),
                _r_()
            }),
            t.subscribe("CAPLA_EVENT_generic_GENIUS_ONBOARDING_AFTER_OPEN", function(e, t) {
                _i_("3da:81a3326e"),
                a.require(["et"], function(e) {
                    _i_("3da:12ed88a3"),
                    !i && e.goalWithValue("js_genius_onboarding_after_open", 1),
                    i = !0,
                    _r_()
                }),
                _r_()
            }),
            _r_()
        })(),
        _r_()
    }),
    _r_()
}(window.B),
B.define("component/wl252-modal", function(e, t, i) {
    _i_("3da:97b49533");
    var n = e("component")
      , a = e("lightbox")
      , r = e("events")
      , o = e("jquery")
      , _ = !1;
    i.exports = n.extend({
        init: function() {
            _i_("3da:09a2eed2");
            var e = o("#wl252-modal-name");
            if (!e.length)
                return _r_();
            if ("true" === o.cookie("wl252-gotit") && !B.env.acc_force_show_onboarding_popup)
                return _r_();
            B.env.ge_monitor_interstitials && B.require(["genius/collect-auto-opened-interstitials"], function(e) {
                _i_("3da:ac2a4e1f"),
                e.registerAutoOpenInterstial("account-onboarding-modal"),
                _r_()
            }),
            a.show(e, {
                customWrapperClassName: "wl252-modal-wrapper--styled",
                hideCallBack: this.lightboxHideCallback
            }, this.autoFocus.bind(this)),
            booking.eventEmitter.trigger("account-onboarding-modal-show"),
            this.addCookie(),
            this.initForms(),
            _r_()
        },
        lightboxHideCallback: function() {
            _i_("3da:b8e3f7bf"),
            _ ? _ = !1 : r.trigger("onboarding-lightbox-dismissed"),
            r.trigger("onboarding-lightbox-hidden"),
            _r_()
        },
        addCookie: function() {
            _i_("3da:7471f67f"),
            o.cookie("wl252-gotit", "true", {
                expires: 365,
                path: "/",
                domain: booking.env.b_domain_end
            }),
            _r_()
        },
        autoFocus: function() {
            _i_("3da:789f9d7b"),
            setTimeout(function() {
                _i_("3da:ca7da8f6"),
                o("#wl252-firstname").focus(),
                _r_()
            }, 0),
            _r_()
        },
        initForms: function() {
            _i_("3da:b89a0c06");
            var t = this;
            o("#wl252-onboard-name, #wl252-onboard-stars").submit(function() {
                _i_("3da:5a7c5d32"),
                t.showNextModal(),
                _r_()
            }),
            o(".wl252-modal__skip").click(function(e) {
                _i_("3da:e453e8a8"),
                e.preventDefault(),
                t.showNextModal(),
                _r_()
            }),
            o(".wl252-btn-done").click(function(e) {
                _i_("3da:18cddbc1"),
                e.preventDefault(),
                a.hide(),
                window.location.reload(),
                _r_()
            }),
            _r_()
        },
        showNextModal: function() {
            _i_("3da:697a3345");
            var e = o(".wl252-modal--inside:visible").data("next")
              , t = o("#wl252-modal-" + e);
            t.length ? (_ = !0,
            a.hide(),
            a.show(t, {
                customWrapperClassName: "wl252-modal-wrapper--styled",
                hideCallBack: this.lightboxHideCallback
            })) : (_ = !1,
            a.hide()),
            _r_()
        }
    }),
    _r_()
}),
window.switchDateStack = function(e, t) {
    _i_("3da:b4e06f72");
    var i = e
      , n = 0;
    for ($(e).parents("div").length && (i = $(e).parents("div").get(0)); i; )
        "div" === i.nodeName.toLowerCase() && ++n == t && (i.style.display = "block"),
        i = i.nextSibling;
    _r_()
}
,
_i_("3da:6e1bc5e5"),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:d75d9372"),
    {
        init: function() {
            _i_("3da:26de4048");
            var n = this
              , a = ".user-notification-email-confirm-resend, .js-notification-confirm-email";
            $(document).on("click", a, function(e) {
                _i_("3da:c0af3786"),
                e.preventDefault();
                var t = $(a)
                  , i = $(e.currentTarget).data("target-url") || "/resend_confirm_primary_email";
                return n.$targetParent = t.parent(),
                i && (t.hide(),
                n.showLoadingMsg(),
                $.ajax({
                    url: i,
                    dataType: "json",
                    data: {
                        aid: B.env.b_aid,
                        lang: B.env.b_lang
                    },
                    success: function(e) {
                        _i_("3da:c02c3150"),
                        $(".user-notification-email-confirm-default").hide(),
                        e && "sent" === e.status ? n.showSuccessMsg() : n.showErrorMsg(),
                        _r_()
                    },
                    error: function() {
                        _i_("3da:44fb5501"),
                        $(".user-notification-email-confirm-default").hide(),
                        n.showErrorMsg(),
                        _r_()
                    }
                })),
                _r_(!1)
            }),
            _r_()
        },
        showLoadingMsg: function() {
            _i_("3da:1c8d3de9"),
            $(".user_resend_conf_email_status", this.$targetParent).hide(),
            $(".user_resend_conf_email_loading", this.$targetParent).show(),
            _r_()
        },
        showErrorMsg: function() {
            _i_("3da:34051bf8"),
            $(".user_resend_conf_email_status", this.$targetParent).hide(),
            $(".user_resend_conf_email_retry", this.$targetParent).show(),
            _r_()
        },
        showSuccessMsg: function() {
            _i_("3da:0ca6e935"),
            $(".user_resend_conf_email_status", this.$targetParent).hide(),
            $(".user_resend_conf_email_success", this.$targetParent).show(),
            _r_()
        }
    }.init(),
    _r_()
}),
_r_(),
$(function() {
    _i_("3da:d2b75168");
    var e = ["item_searching", "topten", "item_volcano_eruption", "item_roomtypes", "item_pricing", "item_creditcards", "item_payments", "item_reservation_process", "item_hotelpolicies", "item_confirmation", "item_extrafacilities", "item_cancellation", "item_directions", "item_reviews"]
      , t = window.location.search.match(/.*?[\&\;\?]faq=([^\&\;]+)/);
    if (null !== t && 1 < t.length && t[1].length) {
        var i = t[1].split(",");
        i.length && ($(e).each(function(e, t) {
            _i_("3da:3de40a84"),
            hideEl(t),
            _r_()
        }),
        $.each(i, function(e, t) {
            _i_("3da:2786d58d");
            var i = $("span#" + t)
              , n = i.prev();
            i && n && t.match(/faqa\d+/) && !n.parents("span.faqA").length && (n.clone().appendTo("#faq_deeplink"),
            i.clone().appendTo("#faq_deeplink")),
            _r_()
        }))
    }
    if ($(".staticmenustyle").children("li").children("a").each(function(e, t) {
        _i_("3da:e0dbb841"),
        $(t).click(function() {
            _i_("3da:52a583aa"),
            $("#faq_deeplink").children().remove(),
            _r_()
        }),
        _r_()
    }),
    location && location.hash) {
        var n = location.hash.slice(1);
        if ("" != n)
            for (var a = 0; a < e.length; a++) {
                var r = e[a];
                r == "item_" + n || r == n ? showEl(r) : hideEl(r)
            }
    }
    _r_()
}),
booking.ensureNamespaceExists("feature"),
booking.feature.transition = function() {
    _i_("3da:6a1d2626");
    var e = (document.body || document.documentElement).style;
    if ("string" == typeof e[i = "transition"])
        return _r_(!0);
    for (var t = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"], i = i.charAt(0).toUpperCase() + i.substr(1), n = 0; n < t.length; n++)
        if ("string" == typeof e[t[n] + i])
            return _r_(!0);
    return _r_(!1)
}(),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:0d2580af"),
    $(".encrypted").each(function() {
        var e;
        _i_("3da:54c23a3b"),
        $(this).html((e = $(this).text(),
        _i_("3da:c056c3ba"),
        _r_(e.replace(/[a-zA-Z]/g, function(e) {
            return _i_("3da:ae728d87"),
            _r_(String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26))
        })))),
        $(this).removeClass("encrypted"),
        _r_()
    }),
    _r_()
}),
booking.trapFocus = function() {
    var a, r;
    _i_("3da:c47d8a88");
    var t = !1
      , o = null
      , _ = null
      , s = []
      , d = [];
    function c(e) {
        if (_i_("3da:38afd117"),
        r === document.body && Array.prototype.forEach.call(s, function(e) {
            if (_i_("3da:32f221d6"),
            e === a)
                return _r_();
            -1 == d.indexOf(e) && e.removeAttribute("aria-hidden"),
            _r_()
        }),
        document.removeEventListener("focus", u, !0),
        document.removeEventListener("keydown", l, !0),
        document.removeEventListener("keyup", l, !0),
        e || o && o.focus(),
        a = o = null,
        _) {
            _.removeEventListener("focus", f, !0);
            var t = _.parentNode;
            t && t.removeChild(_),
            _ = null
        }
        r = null,
        _r_()
    }
    function l(e) {
        _i_("3da:cb87d9ce"),
        t = e.shiftKey,
        _r_()
    }
    function i() {
        _i_("3da:6533c779");
        var e = h(a);
        if (!e.length)
            return _r_();
        t ? e[e.length - 1].focus() : e[0].focus(),
        _r_()
    }
    function u(e) {
        _i_("3da:fe492bdb"),
        e.target instanceof Node && a.contains(e.target) || e.target && String(e.target.className || "").match(/\bforce-focusable\b/) || (e.preventDefault(),
        i()),
        _r_()
    }
    function f(e) {
        _i_("3da:2f542439"),
        e.preventDefault(),
        i(),
        _r_()
    }
    function h(e) {
        _i_("3da:dabcb935");
        var t = e.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [role=button], iframe, object, embed, *[tabindex], *[contenteditable]");
        return _r_(Array.prototype.filter.call(t, function(e) {
            return _i_("3da:f737424e"),
            _r_(0 < e.offsetWidth && 0 < e.offsetHeight)
        }))
    }
    return _r_({
        trap: function(e, t, i) {
            if (_i_("3da:99774295"),
            !e && e instanceof Node)
                return console.log("You must provide target container where the focus to be trapped!"),
                _r_();
            a && c(i),
            a = e,
            o = t || document.activeElement;
            var n = h(a);
            n.length && n[0].focus(),
            document.addEventListener("focus", u, !0),
            document.addEventListener("keydown", l, !0),
            document.addEventListener("keyup", l, !0),
            (_ = document.createElement("div")).setAttribute("tabindex", 0),
            _.addEventListener("focus", f, !0),
            a.appendChild(_),
            (r = a.parentNode) === document.body ? (s = document.querySelectorAll("body > *"),
            Array.prototype.forEach.call(s, function(e) {
                if (_i_("3da:601539e4"),
                e === a)
                    return _r_();
                "true" === e.getAttribute("aria-hidden") ? d.push(e) : e.setAttribute("aria-hidden", !0),
                _r_()
            })) : B && B.env && B.env.b_dev_server && console.warn("trap-focus: The target element is not a direct descendant of body, therefore focus could not be trapped in it properly for screen readers! Consider appending target element to the body for better support!"),
            _r_()
        },
        release: c
    })
}(),
B.define("trap-focus", booking.trapFocus),
booking.announceToScreenReader = function() {
    _i_("3da:af005806");
    var o = B.require("jquery")
      , _ = 900
      , s = 500
      , d = {
        isAnnouncementAlive: !1,
        announcements: []
    };
    return _r_({
        announce: function(e, t) {
            _i_("3da:6badeb36"),
            d.announcements.push({
                msg: e,
                isError: t
            }),
            d.isAnnouncementAlive || function e() {
                _i_("3da:8a6d6b41");
                var t = d.announcements.shift();
                d.isAnnouncementAlive = !0;
                var i = t.isError ? 'role="alert"' : 'aria-live="polite"'
                  , n = '<div class="invisible_spoken" ' + i + ">" + t.msg + "</div>"
                  , a = o(n)
                  , r = setTimeout(function() {
                    _i_("3da:4fb95572"),
                    o("body").prepend(a),
                    setTimeout(function() {
                        _i_("3da:459ca186"),
                        a.detach(),
                        d.isAnnouncementAlive = !1,
                        clearTimeout(r),
                        d.announcements.length && e(),
                        _r_()
                    }, s),
                    _r_()
                }, _);
                _r_()
            }(),
            _r_()
        }
    })
}(),
B.define("announce-to-screen-reader", booking.announceToScreenReader),
"undefined" == typeof TargetDate && (TargetDate = "12/31/2020 5:00 AM"),
"undefined" == typeof DisplayFormat && (DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds."),
"undefined" == typeof CountActive && (CountActive = !0),
"undefined" == typeof FinishMessage && (FinishMessage = ""),
"number" != typeof CountStepper && (CountStepper = -1),
"undefined" == typeof LeadingZero && (LeadingZero = !0),
CountStepper = Math.ceil(CountStepper),
0 == CountStepper && (CountActive = !1);
var SetTimeOutPeriod = 1e3 * (Math.abs(CountStepper) - 1) + 990
  , dthen = new Date(TargetDate)
  , dnow = new Date;
0 < CountStepper ? ddiff = new Date(dnow - dthen) : ddiff = new Date(dthen - dnow),
gsecs = Math.floor(ddiff.valueOf() / 1e3),
document.getElementById("flash_seconds") && CountBack(gsecs),
function(e, t) {
    _i_("3da:b678018e"),
    t(document).ready(function() {
        _i_("3da:871f6264"),
        e.env.b_run_ge_new_newsletter_login && booking.eventEmitter.bind("auth-dialog:show", function() {
            _i_("3da:6ae485da"),
            t(".user_signup_password").focus(),
            _r_()
        }),
        _r_()
    }),
    _r_()
}(window.booking, window.jQuery),
function(t) {
    _i_("3da:0c48582b");
    var e, i = {
        "SH:seen": "sh_seen",
        "SH:clicked": "sh_clicked",
        "SH:removed": "sh_removed",
        "SH:sh-timestamp-today": "sh_resume_last_24",
        "SH:sh-timestamp-24-48-hrs": "sh_resume_last_24_48",
        "SH:sh-timestamp-48-72-hrs": "sh_resume_last_48_72",
        "SH:sh-timestamp-72-96-hrs": "sh_resume_last_72_96"
    };
    for (e in i)
        i.hasOwnProperty(e) && t.eventEmitter.one(e, function(e) {
            return _i_("3da:83494874"),
            _r_(function() {
                _i_("3da:92a842bc"),
                t.et.goal(e),
                _r_()
            })
        }(i[e]));
    _r_()
}(booking),
Array.prototype.walk || (Array.prototype.walk = function(e) {
    _i_("3da:dddc4585");
    for (var t = [], i = this.length; i--; )
        t.push(e(this[i]));
    return _r_(t.reverse())
}
),
Array.prototype.flatten || (Array.prototype.flatten = function() {
    _i_("3da:7e5723e5");
    for (var e = [], t = -1, i = this.length; ++t < i; )
        e = e.concat(this[t].constructor == Array ? this[t].flatten() : this[t]);
    return _r_(e)
}
),
B.define("ga/deprecated-custom-track-click", function(e, t, i) {
    _i_("3da:6c1b971b");
    var n = e("ga-tracker");
    function a() {
        _i_("3da:d9d50154");
        var e = $(this).attr("data-trackname")
          , t = $(this).attr("data-track-prefix") || booking.env.b_action
          , i = $(this).attr("data-tracker") || "userProfileTracker";
        e && n[i] && n.trackEvent(n[i], t + " : " + e, booking.env.b_action),
        _r_()
    }
    i.exports = function(e) {
        _i_("3da:720ab583"),
        !e || e.length ? e = $(".custom_track") : e.hasClass(".custom_track") || (e = e.find(".custom_track")),
        e.off("click", a).click(a),
        _r_()
    }
    ,
    _r_()
}),
function(e, t) {
    _i_("3da:cb6a547a"),
    e("ga-tracker-base", function(e, t) {
        _i_("3da:7c495c2c"),
        t.trackTiming = function(e, t, i, n) {
            if (_i_("3da:4f31b963"),
            !window.ga)
                return _r_();
            if (void 0 === e)
                return _r_();
            if (!t || "string" != typeof t)
                return _r_();
            if ("string" == typeof i && i && (i = +i),
            isNaN(i) || !isFinite(i))
                return _r_();
            if ((!n || "string" != typeof n) && void 0 !== n)
                return _r_();
            window.ga("send", {
                hitType: "timing",
                timingCategory: e,
                timingVar: t,
                timingValue: i,
                timingLabel: n
            }),
            _r_()
        }
        ,
        t.trackEvent = function(e, t, i, n, a) {
            _i_("3da:10645770"),
            void 0 === a && (a = 1),
            void 0 !== e && ("undefined" != typeof _gaq && _gaq.push(["_trackEvent", e, t, i, n, !0]),
            window.ga && window.ga("send", {
                hitType: "event",
                eventCategory: e,
                eventAction: t,
                eventLabel: i,
                eventValue: n,
                nonInteraction: a
            })),
            _r_()
        }
        ,
        t.trackPageview = function(e, t) {
            _i_("3da:0b8e2536"),
            void 0 !== t && ("undefined" != typeof _gaq && _gaq.push(["_trackPageview", t]),
            window.ga && window.ga("send", "pageview", t)),
            _r_()
        }
        ,
        t.ecommerceAddPromo = function(e, t, i, n) {
            _i_("3da:b11d6d43"),
            window.ga && window.ga("ec:addPromo", {
                id: e,
                name: t,
                creative: i,
                position: n
            }),
            _r_()
        }
        ,
        t.ecommerceSetAction = function(e) {
            _i_("3da:cad269c2"),
            window.ga && window.ga("ec:setAction", e),
            _r_()
        }
        ,
        _r_()
    }),
    e("ga-tracker", function(e, t) {
        _i_("3da:fc901f10");
        var i = e("promise")
          , n = e("ga-tracker-base")
          , a = window.__ga__tracker_initialized__ = new i(function(e, t) {
            _i_("3da:1e2182fe"),
            window.booking = window.booking || {},
            window.__ga_tracker_set_page_as_tracked__ = e,
            _r_()
        }
        );
        t.errorTracker = "Error",
        t.clickTracker = "Click",
        t.changeTracker = "Change",
        t.hoverTracker = "Hover",
        t.mapTracker = "Map",
        t.pageviewTracker = "Pageview",
        t.viewTracker = "View",
        t.cityTracker = "City",
        t.groupTracker = "Group",
        t.cardTracker = "Credit Card",
        t.comparisonTracker = "Hotel Comparison",
        t.userProfileTracker = "User profile",
        t.bookProcessTracker = "Book process",
        t.bookingProcessTracker = "Booking Process",
        t.hotelPageTracker = "Hotel Page",
        t.reviewSearchTracker = "Review search",
        t.BBToolTracker = "Business Bookers Tool",
        t.SabreTracker = "Sabre Red",
        t.TripPlannerTracker = "Trip Planner",
        t.growlTracker = "Growl",
        t.WebMessagingTracker = "Web Messaging",
        t.SearchResultsTracker = "Search Results",
        t.SearchResultsCardClickEventsTracker = "Search Results Card Click Event",
        t.SearchResultsCardHoverEventsTracker = "Search Results Card Hover Event",
        t.SearchResultsFilterTracker = "Filter",
        t.SearchResultsFilterMapTracker = "Filter - Map",
        t.articlesTracker = "Articles",
        t.DSFTracker = "DSF",
        t.ugcdTracker = "UGC Review Page",
        t.ugccDestinationTracker = "Destination UGC",
        t.ugccPropertyTracker = "Property UGC",
        t.assistantTracker = "Messaging V2",
        t.referralAdvocateTracker = "Referral - Advocate",
        t.referralPartnerAdvocateTracker = "Referral Partner - Advocate",
        t.referralFriendTracker = "Referral - Friend",
        t.webViralityTracker = "Web Virality",
        t.Rewards = "Rewards",
        t.SearchBoxTracker = "Searchbox",
        t.travelGuide = "TravelGuide",
        t.paymentForm = "Checkout Form",
        t.communityTracker = "Communities",
        t.unitPageTracker = "property",
        t.incentivesTracker = "Reward",
        t.landingPagesTracker = "Landing Pages",
        t.superSaverTracker = "SuperSaver",
        t.TIMING = {},
        t.TIMING.PERFORMANCE = "Browser Performance",
        t.trackEvent = function() {
            return _i_("3da:eb8a238b"),
            _r_(n.trackEvent.apply(this, arguments))
        }
        ,
        t.ecommerceAddPromo = function() {
            return _i_("3da:fb643b71"),
            _r_(n.ecommerceAddPromo.apply(this, arguments))
        }
        ,
        t.ecommerceSetAction = function() {
            return _i_("3da:094a8cc6"),
            _r_(n.ecommerceSetAction.apply(this, arguments))
        }
        ,
        t.trackEventAfterPageview = function() {
            _i_("3da:2405f110");
            var e = arguments;
            a.then(function() {
                _i_("3da:1664453a"),
                n.trackEvent.apply(null, e),
                _r_()
            }),
            _r_()
        }
        ,
        t.trackTiming = function() {
            _i_("3da:6a3bb694");
            var e = arguments;
            a.then(function() {
                _i_("3da:92ec20e6"),
                n.trackTiming.apply(null, e),
                _r_()
            }),
            _r_()
        }
        ,
        t.trackPageview = n.trackPageview,
        t.pageviewIsTracked = function() {
            return _i_("3da:1f0b3c6d"),
            _r_(a)
        }
        ,
        _r_()
    }),
    _r_()
}(B.define, B.require),
B.require(["et", "jquery", "ga-tracker"], function(e, c, l) {
    _i_("3da:930ded27");
    var t = ["click", "mouseenter", "mouseleave", "change"]
      , u = booking.debug("GA")
      , f = function(e) {
        if (_i_("3da:26174f72"),
        e && e.category)
            return _r_(["category ->", e.category, "; action ->", e.action, "; label ->", e.label, "; value ->", e.value].join(" "));
        if (e && e.pageview)
            return _r_("link -> " + e.pageview);
        _r_()
    };
    (t = t.join(" ")) && c("body").on(t, "[data-ga-track]", function(e) {
        _i_("3da:97face21");
        var t, i, n, a, r, o, _ = c(this), s = _.data("ga-track");
        if (!s || !s.length)
            return _r_();
        var d = s.split("|");
        if (2 <= d.length) {
            if ((t = (s = d)[0]) !== e.type)
                return _r_();
            s[1].indexOf("pageview:") ? (i = s[1],
            n = s[2] || "",
            a = s[3] || "",
            r = parseInt(s[4], 10) || "") : o = s[1].substr(s[1].indexOf(":") + 1)
        } else {
            if (s !== e.type)
                return _r_();
            t = s,
            i = _.data("ga-category"),
            n = _.data("ga-action"),
            a = _.data("ga-label"),
            r = parseInt(_.data("ga-value"), 10),
            o = _.data("ga-track-pageview")
        }
        t && "string" == typeof t ? i && n && a ? ("number" == typeof r && 0 <= r ? l.trackEvent(i, n, a, r) : l.trackEvent(i, n, a),
        u.log("trackEvent:", f({
            category: i,
            action: n,
            label: a,
            value: r
        }))) : o && (l.trackPageview(null, o),
        u.log("trackPageview:", f({
            pageview: o
        }))) : u.warn("trackEvent: DOM Event:" + t + " not supported!"),
        _r_()
    }),
    _r_()
}),
B.define("ga-data-attributes-tracker", function(e) {
    "use strict";
    _i_("3da:c0755c0a");
    var r = e("jquery")
      , o = e("ga-tracker");
    function t(e) {
        _i_("3da:9b736739"),
        this.$el = r(e),
        this.elString = e,
        this.$viewEl = this.$el.filter("[data-ga-promo-view]"),
        this.$window = r(window),
        this.init(),
        _r_()
    }
    return t.prototype = {
        init: function() {
            _i_("3da:27d4e948"),
            this.bindEvents(),
            _r_()
        },
        bindEvents: function() {
            _i_("3da:5cf773f3");
            var n = this
              , a = ["a", ":submit", "[data-ga-promo-dismiss]"];
            a = a.map(function(e) {
                return _i_("3da:a2460896"),
                _r_(n.elString + e + "," + n.elString + " " + e)
            }).join(),
            this.$viewEl.length && (this.$window.on("scroll.trackElements load", function() {
                _i_("3da:ce0549e6");
                var e = r(this).scrollTop() + window.innerHeight;
                n.checkElOnViewport(e),
                _r_()
            }),
            this.$viewEl.one("view", function() {
                _i_("3da:9801e935");
                var e = r(this);
                e.is(":visible") && n.onEvent("view", e),
                _r_()
            })),
            r(document).off("click.gaTrackerClick").on("click.gaTrackerClick", a, function(e) {
                _i_("3da:235185f0");
                var t = r(e.target).is(a) ? r(e.target) : r(e.target).closest(a)
                  , i = t.closest(n.elString);
                t.is("[data-ga-promo-dismiss]") ? n.onEvent("dismiss", i) : t.is("[data-ga-promo-ignore-click]") || n.onEvent("click", i),
                _r_()
            }),
            r(document).off("click.gaTrackerLink").on("click.gaTrackerLink", n.elString, function() {
                _i_("3da:18d3e018");
                var e = r(this);
                e.is(a) && !e.is("[data-ga-promo-ignore-click]") && n.onEvent("click", e),
                _r_()
            }),
            _r_()
        },
        checkElOnViewport: function(a) {
            _i_("3da:fa7ac8bc"),
            this.$viewEl.each(function() {
                _i_("3da:5034777d");
                var e = r(this);
                if (e.is(":visible")) {
                    var t = e.offset().top
                      , i = t + e.outerHeight() / 2
                      , n = a - r(window).innerHeight();
                    i <= a && n <= t && e.trigger("view")
                }
                _r_()
            }),
            _r_()
        },
        parsePromo: function(e) {
            _i_("3da:1552c2cd");
            var t = e.split("|");
            return _r_({
                id: t[0],
                name: t[1],
                creative: t[2],
                position: t[3]
            })
        },
        onEvent: function(e, t) {
            _i_("3da:c805aec0");
            var i = r(t).attr("data-ga-promo");
            if (!i)
                return _r_();
            var n = this.parsePromo(i);
            if (!n.id || !n.name)
                return _r_();
            var a = "Entry-Point";
            o.ecommerceAddPromo(n.id, n.name, n.creative, n.position),
            "click" === e && (a = "Internal Promotions",
            o.ecommerceSetAction("promo_click")),
            o.trackEvent(a, e, n.name, 0, 0),
            _r_()
        }
    },
    _r_(t)
}),
B.define("ga-data-attributes-tracker", function(e) {
    "use strict";
    _i_("3da:c0755c0a1");
    var r = e("jquery")
      , o = e("ga-tracker");
    function t(e) {
        _i_("3da:9b7367391"),
        this.$el = r(e),
        this.elString = e,
        this.$viewEl = this.$el.filter("[data-ga-promo-view]"),
        this.$window = r(window),
        this.init(),
        _r_()
    }
    return t.prototype = {
        init: function() {
            _i_("3da:27d4e9481"),
            this.bindEvents(),
            _r_()
        },
        bindEvents: function() {
            _i_("3da:5cf773f31");
            var n = this
              , a = ["a", ":submit", "[data-ga-promo-dismiss]"];
            a = a.map(function(e) {
                return _i_("3da:a24608961"),
                _r_(n.elString + e + "," + n.elString + " " + e)
            }).join(),
            this.$viewEl.length && (this.$window.on("scroll.trackElements load", function() {
                _i_("3da:ce0549e61");
                var e = r(this).scrollTop() + window.innerHeight;
                n.checkElOnViewport(e),
                _r_()
            }),
            this.$viewEl.one("view", function() {
                _i_("3da:9801e9351");
                var e = r(this);
                e.is(":visible") && n.onEvent("view", e),
                _r_()
            })),
            r(document).off("click.gaTrackerClick").on("click.gaTrackerClick", a, function(e) {
                _i_("3da:235185f01");
                var t = r(e.target).is(a) ? r(e.target) : r(e.target).closest(a)
                  , i = t.closest(n.elString);
                t.is("[data-ga-promo-dismiss]") ? n.onEvent("dismiss", i) : t.is("[data-ga-promo-ignore-click]") || n.onEvent("click", i),
                _r_()
            }),
            r(document).off("click.gaTrackerLink").on("click.gaTrackerLink", n.elString, function() {
                _i_("3da:18d3e0181");
                var e = r(this);
                e.is(a) && !e.is("[data-ga-promo-ignore-click]") && n.onEvent("click", e),
                _r_()
            }),
            _r_()
        },
        checkElOnViewport: function(a) {
            _i_("3da:fa7ac8bc1"),
            this.$viewEl.each(function() {
                _i_("3da:5034777d1");
                var e = r(this);
                if (e.is(":visible")) {
                    var t = e.offset().top
                      , i = t + e.outerHeight() / 2
                      , n = a - r(window).innerHeight();
                    i <= a && n <= t && e.trigger("view")
                }
                _r_()
            }),
            _r_()
        },
        parsePromo: function(e) {
            _i_("3da:1552c2cd1");
            var t = e.split("|");
            return _r_({
                id: t[0],
                name: t[1],
                creative: t[2],
                position: t[3]
            })
        },
        onEvent: function(e, t) {
            _i_("3da:c805aec01");
            var i = r(t).attr("data-ga-promo");
            if (!i)
                return _r_();
            var n = this.parsePromo(i);
            if (!n.id || !n.name)
                return _r_();
            var a = "Entry-Point";
            o.ecommerceAddPromo(n.id, n.name, n.creative, n.position),
            "click" === e && (a = "Internal Promotions",
            o.ecommerceSetAction("promo_click")),
            o.trackEvent(a, e, n.name, 0, 0),
            _r_()
        }
    },
    _r_(t)
}),
B.when({
    events: "ready"
}).run(function(e) {
    if (_i_("3da:cef205d9"),
    !B.env.b_feature_running_TRACK_GA_EC_PROMO)
        return _r_();
    new (e("ga-data-attributes-tracker"))("[data-ga-promo]"),
    _r_()
}),
function() {
    _i_("3da:6f592c43");
    var n = B.require("jquery")
      , a = B.require("ga/deprecated-custom-track-click")
      , r = B.require("ga-tracker");
    B.when({
        events: "ready"
    }).run(function() {
        if (_i_("3da:54b866af"),
        "undefined" != typeof _gaq) {
            B.when({
                events: "load"
            }).run(function() {
                if (_i_("3da:c9f78f47"),
                void 0 !== booking.env.b_changed_language) {
                    var e = booking.env.b_lang_for_url
                      , t = booking.env.b_changed_language;
                    r.trackEvent(r.changeTracker, "Language", "From " + t + " to " + e)
                }
                _r_()
            });
            for (var e = n(".error, .errorSimpleMsg"), t = 0; t < e.length; t++)
                if (0 == n(e[t]).hasClass("disabled")) {
                    var i = e[t].getAttribute("rel");
                    null != i && r.trackEvent(r.errorTracker, "Display", i)
                }
            a(),
            n("#bookconditions").click(function() {
                _i_("3da:7d2c24c0"),
                r.trackEvent(r.clickTracker, "Booking Conditions", "Link clicked"),
                _r_()
            }),
            n("#localcurr_dis a").mouseenter(function() {
                _i_("3da:d05d9e8d"),
                r.trackEvent(r.clickTracker, "Action: " + booking.env.b_action, "hover_tooltip_local_currency"),
                _r_()
            }),
            booking.env.smart_deals_count && 0 < booking.env.smart_deals_count && r.trackEvent(r.viewTracker, "Smart deal filter", booking.env.smart_deals_count + " deals displayed")
        }
        return _r_(!0)
    }),
    _r_()
}(),
B.when({
    events: "load"
}).run(function() {
    if (_i_("3da:0cc193cb"),
    void 0 === B.env.google_analytics_tracking_enabled || !B.env.google_analytics_tracking_enabled)
        return _r_();
    var e, t = booking.env, i = t.b_action, n = booking.require("ga-tracker");
    t.survey_key && $('div#survey[surveykey="' + t.survey_key + '"] button[value="accept"]').click(function() {
        _i_("3da:e400568c"),
        n.trackPageview("click", t.surveytracklink),
        _r_()
    }),
    "confirmation" === i && $("#external_review_invite_link").click(function() {
        _i_("3da:67b9b06c"),
        n.trackPageview("click", "/outgoinglink/confirmation/external_review_invite/"),
        _r_()
    }),
    /error/.test(i) && (e = (t.b_referrer || "").split("?")[0].replace(window.location.origin, "") || "dont-know",
    n.trackPageview("click", "/error-action/" + i + "/caused-by" + e)),
    _r_()
}),
B.define("gta/impression-tracking", ["et", "jquery"], function(e, t) {
    _i_("3da:5eb445c4");
    var n = !0
      , a = []
      , r = []
      , o = []
      , _ = null;
    function s() {
        _i_("3da:6370fb3a"),
        a.length && r.length && (c({
            placement: a.join("|"),
            method: r.join("|"),
            page: o.join("|")
        }),
        a.length = 0,
        r.length = 0,
        o.length = 0),
        _r_()
    }
    function d(e, t) {
        if (_i_("3da:e28d3c73"),
        !e || !t)
            return _r_();
        var i = B.env && B.env.b_action;
        n ? (clearTimeout(_),
        a.push(e),
        r.push(t),
        o.push(i),
        _ = setTimeout(s, 500)) : c({
            placement: e,
            method: t,
            page: i
        }),
        _r_()
    }
    function c(e) {
        _i_("3da:67a84fd8"),
        t.ajax({
            url: "/gta_impression",
            type: "POST",
            data: e
        }),
        _r_()
    }
    return _r_({
        trackWidgetImpressionOnView: function(e, t) {
            _i_("3da:9acdd93a"),
            function(e, t) {
                _i_("3da:4935302b");
                var i = e.getAttribute("id");
                i || (i = ("gta-" + t.getMethodName() + "-" + t.getCurrentPlacementName()).toLowerCase(),
                e.setAttribute("id", i)),
                B.when({
                    events: ["view #" + i, "gta:lightbox:init #" + i]
                }).run(function() {
                    _i_("3da:8852ad20"),
                    d(t.getCurrentPlacementName(), t.getMethodName()),
                    _r_()
                }),
                _r_()
            }(e, t),
            _r_()
        },
        trackLinkImpressionOnView: function(e) {
            _i_("3da:4df570ab"),
            function(e) {
                _i_("3da:bc596103");
                var t = e.getAttribute("id")
                  , i = e.getAttribute("data-placement");
                t || (t = ("gta-link-" + i).toLowerCase(),
                e.setAttribute("id", t)),
                B.when({
                    events: ["view #" + t, "gta:lightbox:init #" + t]
                }).run(function() {
                    _i_("3da:379165dd"),
                    d(i, "link"),
                    _r_()
                }),
                _r_()
            }(e),
            _r_()
        },
        trackImpression: function(e, t) {
            _i_("3da:af56aff9"),
            d(e, t),
            _r_()
        }
    })
}),
B.require(["gta/impression-tracking", "jquery"], function(i, e) {
    _i_("3da:5b984adc"),
    e(".gta-link-track").each(function(e, t) {
        _i_("3da:506a2561"),
        i.trackLinkImpressionOnView(t),
        _r_()
    }),
    _r_()
}),
B.define("gta/country-flags-dropdown", ["et"], function(e) {
    return _i_("3da:0711fab2"),
    _r_({
        init: function(t, e) {
            _i_("3da:7a9aa409");
            var i = e || $(".gta-country-flag-dropdown").get(0)
              , n = $(".gta-cfd-list", i)
              , a = $(".gta-cfd-value", i)
              , r = a.children(".cprefix")
              , o = a.children('[class^="cflag"]').get(0)
              , _ = n.children()
              , s = !1
              , d = $(document);
            function c() {
                _i_("3da:0f86853e"),
                n.hide(),
                s = !1,
                d.unbind("click", l),
                d.unbind("keypress", u),
                _r_()
            }
            function l(e) {
                _i_("3da:c7ad6cd7"),
                $.contains(i, e.target) || c(),
                _r_()
            }
            function u(e) {
                _i_("3da:e8e373c3");
                var t = String.fromCharCode(e.which).toLowerCase().replace(/[\n\s]/g, "");
                if (!t.length)
                    return _r_();
                var i = _.filter('[data-s^="' + t + '"]').get(0);
                if (i) {
                    var n = d.scrollTop();
                    i.scrollIntoView(!0),
                    d.scrollTop(n)
                }
                _r_()
            }
            t.setCountryCode(r.data("prefix"), {
                isUserAction: !1
            }),
            n.delegate("li", "click", function() {
                _i_("3da:6494c6ef");
                var e = $(this).data();
                r.text(e.cc + " +" + e.prefix),
                o.className = o.className.replace(/cflag-\w+/, "cflag-" + e.cc.toLowerCase()),
                t.setCountryCode(e.prefix, {
                    isUserAction: !0
                }),
                c(),
                _r_()
            }),
            a.bind("click", function() {
                _i_("3da:875235a3"),
                s ? c() : (_i_("3da:38dedc38"),
                n.show(),
                s = !0,
                d.bind("click", l),
                d.bind("keypress", u),
                _r_()),
                _r_()
            }),
            _r_()
        }
    })
}),
B.define("gta/base-widget", ["gta/impression-tracking", "et", "ga-tracker"], function(e, t, i) {
    _i_("3da:a9649b16");
    var n = ["placement", "exp", "variant", "source", "city", "firstname", "lastname", "booknumber", "pincode", "authkey"]
      , a = function(e) {
        _i_("3da:3eac2f71"),
        this.dom = {
            root: e,
            wrapper: e.parent(),
            label: e.find(".gta-widget-label"),
            input: e.find(".gta-widget-input"),
            button: e.find(".gta-widget-submit"),
            message: e.find(".gta-widget-message")
        },
        this.sharedParams = this.dom.wrapper.data(),
        this.payload = this.getPayload(),
        this.isInputMasked = this.dom.input.hasClass("gta-widget-input-masked"),
        this.addEvents(),
        _r_()
    };
    return a.prototype.addEvents = function() {
        _i_("3da:52cd8650"),
        this.dom.label.bind("click", function() {
            _i_("3da:cf752d2b"),
            this.dom.input.focus(),
            _r_()
        }
        .bind(this)),
        t.track("dLYHMRFeRQLOLOLOMLTbYIPfZBVXVLCOJdFMC") && (this.dom.input.bind("keydown", function(e) {
            _i_("3da:bb24a982");
            var t = new RegExp("\\d");
            if (e.ctrlKey || e.originalEvent.ctrlKey || e.altKey || e.originalEvent.altKey || e.metaKey || e.originalEvent.metaKey || "string" != typeof e.key || 1 !== e.key.length)
                return _r_();
            t.test(e.key) || e.preventDefault(),
            _r_()
        }
        .bind(this)),
        this.dom.input.on("change", function(e) {
            _i_("3da:867b5adb");
            var t = e.target.value
              , i = t.replace(/[^\d]/g, "");
            i !== t && (e.target.value = i),
            _r_()
        })),
        this.dom.root.data("prevent-widget-submit") || (this.dom.button.bind("click", this.onSubmit.bind(this)),
        this.dom.input.bind("keyup", function(e) {
            _i_("3da:570f9d13"),
            13 == e.keyCode && this.onSubmit(e),
            _r_()
        }
        .bind(this))),
        e.trackWidgetImpressionOnView(this.dom.root.get(0), this),
        _r_()
    }
    ,
    a.prototype.getPayload = function() {
        _i_("3da:215b8de0");
        var e = {
            stype: B.env.b_site_type_id,
            page: B.env.b_action
        };
        for (var t in this.sharedParams)
            this.sharedParams.hasOwnProperty(t) && -1 < n.indexOf(t) && (e[t] = this.sharedParams[t]);
        return _r_(e)
    }
    ,
    a.prototype.getCurrentPlacementName = function() {
        return _i_("3da:caf9552e"),
        _r_(this.dom.wrapper.data("override-placement") || this.sharedParams.placement)
    }
    ,
    a.prototype.getMethodName = function() {
        return _i_("3da:5daac92e"),
        _r_(this.method)
    }
    ,
    a.prototype.onSubmit = function(e) {
        if (_i_("3da:aba01031"),
        e.preventDefault(),
        t.stage("dLYHMRFeRQLOLOLOMLTbYIPfZBVXVLCOJdFMC", 1),
        this.hideMessage(),
        !this.validate())
            return _r_();
        this.payload.placement = this.getCurrentPlacementName(),
        this.disableInputs(),
        this.sendRequest(),
        _r_()
    }
    ,
    a.prototype.sendRequest = function() {
        _i_("3da:c8b3fc48"),
        $.ajax({
            url: this.action,
            type: "POST",
            data: this.payload,
            success: this.onSucessCallback.bind(this),
            error: this.onErrorCallback.bind(this)
        }),
        _r_()
    }
    ,
    a.prototype.onSucessCallback = function(e) {
        if (_i_("3da:6efd3408"),
        "true" === e.isOk)
            this.showMessage("success"),
            this.enableInputs(),
            i.trackEvent("App Marketing", "apps-landing-page-sms-sent", null, null, !1);
        else
            switch (e.err) {
            case "limited":
                this.showMessage("limit");
                break;
            case "multiple":
                this.showMessage("multiple");
                break;
            case "invalid":
                this.showMessage("validation"),
                this.enableInputs(),
                this.dom.input.focus();
                break;
            default:
                this.showMessage("error"),
                this.enableInputs()
            }
        _r_()
    }
    ,
    a.prototype.onErrorCallback = function() {
        _i_("3da:8000f1fe"),
        this.showMessage("error"),
        this.enableInputs(),
        _r_()
    }
    ,
    a.prototype.validate = function() {
        return _i_("3da:8039e006"),
        _r_(!1)
    }
    ,
    a.prototype.showMessage = function(e) {
        _i_("3da:92e86ccc"),
        this.dom.message.addClass(-1 < e.indexOf("success") ? "success" : "invalid").text(this.dom.message.data(e)),
        this.dom.message.slideDown(),
        _r_()
    }
    ,
    a.prototype.hideMessage = function() {
        _i_("3da:178d7939"),
        this.dom.message.hide().removeClass("success").removeClass("invalid"),
        _r_()
    }
    ,
    a.prototype.disableInputs = function() {
        _i_("3da:09de76ea"),
        this.dom.button.attr("disabled", !0),
        this.dom.input.attr("disabled", !0),
        _r_()
    }
    ,
    a.prototype.enableInputs = function() {
        _i_("3da:dfe9246f"),
        this.dom.button.removeAttr("disabled"),
        this.dom.input.removeAttr("disabled"),
        _r_()
    }
    ,
    a.extend = function() {
        if (_i_("3da:5a9ded99"),
        null != Object.create)
            return _r_(Object.create(a.prototype));
        function e() {}
        return e.prototype = a.prototype,
        _r_(new e)
    }
    ,
    _r_(a)
}),
B.define("gta/sms-widget", ["gta/base-widget", "gta/country-flags-dropdown", "et"], function(a, t, o) {
    _i_("3da:1992162c");
    var e = function(e) {
        _i_("3da:4f00f7a3"),
        this.method = "sms",
        o.track("dLYHMRFeRQePeEBARCLFNZfKXe") ? this.action = "/send_app_sms_v2" : this.action = "/send_app_sms_v3",
        a.apply(this, arguments),
        this.dom.countryFlagsDropdown = this.dom.root.find(".gta-country-flag-dropdown"),
        this.countryCode = "",
        this.dom.countryFlagsDropdown.length && t.init(this, this.dom.countryFlagsDropdown.get(0)),
        o.stage("dLYHMRFeRLPYKDcdRFcYCMQMLZXbSBGDeHINCdae", 1),
        o.on("click", ".gta-widget-submit-sms").stage("dLYHMRFeRQePeEBARCLFNZfKXe", 1),
        o.on("click", ".gta-widget-submit-sms").customGoal("dLYHMRFeRLPYKDcdRFcYCMQMLZXbSBGDeHINCdae", 1),
        o.on("click", ".bui-modal__close").customGoal("dLYHMRFeRLPYKDcdRFcYCMQMLZXbSBGDeHINCdae", 3),
        _r_()
    };
    return (e.prototype = a.extend()).onSucessCallback = function(e) {
        _i_("3da:7dbdc769"),
        void 0 !== e.isOk ? a.prototype.onSucessCallback.call(this, e) : void 0 !== e.appId && void 0 !== e.blockScript && (o.customGoal("dLYHMRFeRQePeEBARCLFNZfKXe", 1),
        this.handleCaptcha(e, this.action)),
        _r_()
    }
    ,
    e.prototype.handleCaptcha = function(t, i) {
        _i_("3da:705ffc13");
        var n = this.sendRequest.bind(this)
          , a = this.showSmsButton.bind(this)
          , r = this.humanChallenge.bind(this);
        r(t, 1, i),
        window._pxAppId = t.appId,
        window._pxJsClientSrc = t.jsClientSrc,
        window._pxHostUrl = t.hostUrl,
        window._pxFirstPartyEnabled = !!t.firstPartyEnabled,
        window._pxVid = t.vid,
        window._pxUuid = t.uuid,
        window._pxOnCaptchaSuccess = function(e) {
            _i_("3da:3e23cba8"),
            e ? (a(),
            n(),
            r(t, 2, i),
            o.customGoal("dLYHMRFeRQePeEBARCLFNZfKXe", 2)) : (r(t, 3, i),
            o.customGoal("dLYHMRFeRQePeEBARCLFNZfKXe", 3)),
            _r_()
        }
        ,
        this.styleCaptcha(t.appId),
        this.embedCaptcha(t.blockScript),
        _r_()
    }
    ,
    e.prototype.humanChallenge = function(n, a, r) {
        return _i_("3da:2aa4ec77"),
        _r_(new Promise(function(t, i) {
            _i_("3da:e09dc4ff");
            var e = "/px_hc_track";
            return n.op_token && (e = e + "?op_token=" + n.op_token),
            _r_(fetch(e, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: JSON.stringify({
                    url: r,
                    action: a,
                    at: n.at,
                    uuid: n.uuid,
                    uuidVerify: n.uuidVerify
                })
            }).then(function(e) {
                _i_("3da:23c8270a"),
                e.ok ? t(e) : i(e.statusText),
                _r_()
            }))
        }
        ))
    }
    ,
    e.prototype.embedCaptcha = function(e) {
        _i_("3da:f0667cd3");
        var t = this.showSmsButton.bind(this, a.prototype.onErrorCallback.bind(this))
          , i = this.hideSmsButton.bind(this)
          , n = document.createElement("script");
        n.src = e,
        document.getElementsByTagName("head")[0].appendChild(n),
        n.onload = i,
        n.onerror = t,
        _r_()
    }
    ,
    e.prototype.styleCaptcha = function(e) {
        _i_("3da:3180accb");
        var t = {};
        t[window.B.env.b_lang] = {
            btn: B.jstmpl.translations("app_marketing_www_landing_anti_fraud_cta"),
            ac_1: B.jstmpl.translations("app_marketing_www_landing_anti_fraud_voice_ac1"),
            ac_2: B.jstmpl.translations("app_marketing_www_landing_anti_fraud_voice_ac2"),
            failed: B.jstmpl.translations("app_marketing_www_landing_anti_fraud_cta_error_generic")
        },
        window["_" + e] = {
            locale: window.B.env.b_lang,
            challenge: {
                translation: t,
                view: {
                    textColor: "#fff",
                    height: 48,
                    width: "100%",
                    backgroundColor: "#0071c2",
                    fillColor: "#003580",
                    texSize: 14,
                    textFont: "BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif",
                    animation: !0,
                    borderWidth: 0,
                    borderRadius: 4,
                    pressableAreaPadding: "0",
                    pressableAreaWidth: "100%",
                    margin: "0 auto 0 auto",
                    fontWeight: "normal",
                    textTransform: "none",
                    targetColor: "#fff",
                    checkmarkThickness: "3px",
                    checkmarkHeight: "20px",
                    checkmarkWidth: "7px"
                }
            }
        },
        _r_()
    }
    ,
    e.prototype.addEvents = function() {
        _i_("3da:9a468daf"),
        a.prototype.addEvents.apply(this, arguments);
        var t = this;
        this.isInputMasked && (this.dom.input.one("input", function(e) {
            _i_("3da:5f2bd706"),
            t.clearMaskedInput(e.originalEvent.data),
            _r_()
        }),
        this.dom.input.one("oncut", function() {
            _i_("3da:c4a53520"),
            setTimeout(t.clearMaskedInput, 0),
            _r_()
        }),
        this.dom.input.one("onpropertychange", function() {
            _i_("3da:04f5460b"),
            "value" == event.propertyName && t.clearMaskedInput(),
            _r_()
        })),
        _r_()
    }
    ,
    e.prototype.getPayload = function() {
        _i_("3da:67da518c");
        var e = a.prototype.getPayload.apply(this);
        return e.msgtype = "app_download_sms",
        _r_(e)
    }
    ,
    e.prototype.validate = function() {
        if (_i_("3da:d32fff57"),
        this.isInputMasked)
            return delete this.payload.telno,
            delete this.payload.cc_prefix,
            _r_(!0);
        var e = this.countryCode + this.dom.input.val().replace(/\D/g, "");
        if (e.length < 6)
            return this.showMessage("validation"),
            _r_(!1);
        return this.payload.telno = e,
        this.payload.cc_prefix = this.countryCode,
        _r_(!0)
    }
    ,
    e.prototype.setCountryCode = function(e, t) {
        _i_("3da:cc4966d4"),
        this.countryCode = e,
        this.isInputMasked && t.isUserAction && this.clearMaskedInput(),
        _r_()
    }
    ,
    e.prototype.clearMaskedInput = function(e) {
        return _i_("3da:beb21aea"),
        this.dom.input.val(e || ""),
        this.isInputMasked = !1,
        _r_(!0)
    }
    ,
    e.prototype.showSmsButton = function(e) {
        _i_("3da:d0d86f39"),
        $(".gta-widget-submit-sms").show(0, e),
        _r_()
    }
    ,
    e.prototype.hideSmsButton = function(e) {
        _i_("3da:7f76e459"),
        $(".gta-widget-submit-sms").hide(0, e),
        _r_()
    }
    ,
    _r_(e)
}),
B.define("gta/quick-sms-widget", ["gta/base-widget", "et"], function(t, e) {
    _i_("3da:9bd4862e");
    var i = function(e) {
        _i_("3da:ed067742"),
        this.method = "sms",
        this.action = "/send_app_sms_v2",
        t.apply(this, arguments),
        _r_()
    };
    return (i.prototype = t.extend()).getPayload = function() {
        _i_("3da:67da518c1");
        var e = t.prototype.getPayload.apply(this);
        return e.msgtype = "app_download_sms",
        _r_(e)
    }
    ,
    i.prototype.validate = function() {
        return _i_("3da:d7e5665c"),
        _r_(!0)
    }
    ,
    _r_(i)
}),
B.define("gta/email-widget", ["gta/base-widget"], function(t) {
    _i_("3da:f4fb55bb");
    var e = function(e) {
        _i_("3da:8ac99fe7"),
        this.method = "email",
        this.action = "/send_app_email_v2",
        t.apply(this, arguments),
        _r_()
    };
    return (e.prototype = t.extend()).getPayload = function() {
        _i_("3da:47592219");
        var e = t.prototype.getPayload.apply(this);
        return e.msgtype = "app_download_email",
        _r_(e)
    }
    ,
    e.prototype.validate = function() {
        _i_("3da:db365864");
        var e = this.dom.input.val();
        if (!e)
            return _r_(!1);
        if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e))
            return this.showMessage("validation"),
            _r_(!1);
        return this.payload.email = e,
        _r_(!0)
    }
    ,
    _r_(e)
}),
B.require(["gta/sms-widget", "gta/quick-sms-widget", "gta/email-widget", "gta/base-widget", "et"], function(i, n, a, e, t) {
    _i_("3da:0c56295b");
    var r = [];
    $(".gta-sms-widget").each(function(e, t) {
        _i_("3da:6d5fb5eb"),
        r.push(new i($(t))),
        _r_()
    }),
    $(".gta-sms-widget-quick").each(function(e, t) {
        _i_("3da:4c8872ae"),
        r.push(new n($(t))),
        _r_()
    }),
    $(".gta-email-widget").each(function(e, t) {
        _i_("3da:8d2d2104"),
        r.push(new a($(t))),
        _r_()
    }),
    _r_()
}),
B.require(["gta/impression-tracking", "jquery"], function(e, t) {
    _i_("3da:c86233f4");
    var i = function(e) {
        _i_("3da:5e94fa5d"),
        this.placeholder = t(e),
        this.placement = this.placeholder.data("placement"),
        this.image = null,
        this.init(),
        _r_()
    };
    i.prototype.loadImage = function() {
        if (_i_("3da:34fed129"),
        this.image)
            return _r_();
        this.image = new Image,
        this.image.onload = function() {
            _i_("3da:a038d61a"),
            this.placeholder.empty().append(this.image),
            e.trackImpression(this.placement, "qr"),
            "Desktop-Apps-LP-QR" === this.placement ? B.et.stage("dLYHMRFeRQLOLOLOOPRAFTUDdHeaGVbWRC", 1) : "UniversalLightboxQR" === this.placement && B.et.stage("dLYHMRFeRQLOLOLOOPRAFTUDdHeaGVbWRC", 3),
            _r_()
        }
        .bind(this),
        this.image.src = this.placeholder.data("url"),
        _r_()
    }
    ,
    i.prototype.init = function() {
        _i_("3da:52780600"),
        B.when({
            events: ["view #" + this.placeholder.attr("id"), "gta:lightbox:init #" + this.placeholder.attr("id"), "gta:banner:init #" + this.placeholder.attr("id")]
        }).run(this.loadImage.bind(this)),
        _r_()
    }
    ,
    t(".gta-qr-code-placeholder").each(function(e, t) {
        _i_("3da:61406f08"),
        new i(t),
        _r_()
    }),
    _r_()
}),
B.define("web-shell-events", function(e, t, i) {
    _i_("3da:4cde3ca0");
    i.exports = {
        HEADER_READY: "CAPLA_EVENT_web-shell_header-mfe_HEADER_READY",
        HEADER_DISPLAY_BACK: "CAPLA_EVENT_web-shell_header-mfe_HEADER_DISPLAY_BACK",
        HEADER_DISPLAY_LOGO: "CAPLA_EVENT_web-shell_header-mfe_HEADER_DISPLAY_LOGO",
        HEADER_GO_BACK: "CAPLA_EVENT_web-shell_header-mfe_HEADER_GO_BACK",
        TABNAV_OPENED: "CAPLA_EVENT_web-shell_header-mfe_TABNAV_OPENED",
        TABNAV_RESET: "CAPLA_EVENT_web-shell_header-mfe_TABNAV_RESET",
        NOTIF_UPDATE_LIST: "CAPLA_EVENT_web-shell_header-mfe_UPDATE_LIST",
        NOTIF_UPDATE_COUNTER: "CAPLA_EVENT_web-shell_header-mfe_UPDATE_COUNTER",
        NOTIF_POPOVER_CLOSE: "CAPLA_EVENT_web-shell_header-mfe_POPOVER_CLOSE",
        NOTIF_POPOVER_OPEN: "CAPLA_EVENT_web-shell_header-mfe_POPOVER_OPEN",
        ASSISTANT_UPDATE_STATE: "CAPLA_EVENT_web-shell_header-mfe_ASSISTANT_UPDATE_STATE"
    },
    _r_()
}),
B.define("with-web-shell", function(e, t, i) {
    _i_("3da:cee6b74c");
    var n = e("with-capla")
      , s = e("promise")
      , d = e("web-shell-events");
    i.exports = function(e, t, _) {
        return _i_("3da:f41cc8d1"),
        _r_(n(e, t, function(e) {
            var t, i;
            _i_("3da:48f55421");
            var n = B.env.__headerInitialized
              , a = new s(function(e) {
                _i_("3da:973cb47a"),
                t = e,
                n && e(),
                _r_()
            }
            )
              , r = e.eventBus;
            if (!r)
                return _r_();
            n || i || (i = r.subscribe(d.HEADER_READY, function() {
                _i_("3da:1c6fd0cc"),
                n = !0,
                t(),
                _r_()
            }));
            var o = {
                eventBus: r,
                events: d
            };
            return _r_(a.then(function() {
                _i_("3da:9f832474"),
                _(o),
                _r_()
            }))
        }))
    }
    ,
    _r_()
}),
B.define("web-shell-event-emitter", function(e, t, i) {
    _i_("3da:b21241ff");
    var n = e("server-data")
      , a = n.b_action
      , r = n.fe_use_header_mfe
      , o = {
        index: {
            project: "index-lp",
            service: "web-mfe"
        },
        searchresults: {
            project: "search-web",
            service: "searchresults"
        },
        hotel: {
            project: "property-web",
            service: "property-page"
        },
        genius: {
            project: "genius-lp",
            service: "mfe"
        },
        confirmation: {
            project: "post-booking-web",
            service: "mfe"
        },
        mybooking: {
            project: "post-booking-web",
            service: "mfe"
        },
        myreservations: {
            project: "post-booking-web",
            service: "mfe"
        },
        book: {
            project: "checkout",
            service: "bp-accommodation"
        },
        tpi_book: {
            project: "tpi",
            service: "tpi-bp-mfe"
        }
    }[a];
    if (o && r) {
        var _ = e("with-web-shell")
          , s = o.project
          , d = o.service;
        return _r_(i.exports = {
            publish: function(t, i) {
                _i_("3da:9b15320c"),
                _(s, d, function(e) {
                    _i_("3da:abf4385f"),
                    e.eventBus.publish(t, i),
                    _r_()
                })(),
                _r_()
            },
            bind: function(t) {
                _i_("3da:21c2589e"),
                _(s, d, function(e) {
                    _i_("3da:50ee84d8"),
                    t && t(e),
                    _r_()
                })(),
                _r_()
            },
            subscribe: function(t, i) {
                _i_("3da:853b082b"),
                _(s, d, function(e) {
                    _i_("3da:a3a4e60e"),
                    e.eventBus.subscribe(t, i),
                    _r_()
                })(),
                _r_()
            }
        })
    }
    i.exports = {
        publish: function() {},
        bind: function() {},
        subscribe: function() {}
    },
    _r_()
}),
B.define("header/notifications/notifications", function(n, e, t) {
    "use strict";
    _i_("3da:3ed3a68b");
    var a = n("web-shell-events")
      , i = n("web-shell-event-emitter")
      , r = i.publish
      , o = i.subscribe
      , _ = "NLJZaTaTaBfaNaPbPELXVWFfBOMYEZUKe";
    t.exports = {
        isLoggedIn: function() {
            return _i_("3da:931f52ac"),
            _r_(0 < Number(B.env.auth_level))
        },
        init: function() {
            _i_("3da:71a187de");
            var i = this;
            this.$root = $(".js-uc-notifications"),
            this.elToggle = $(".js-uc-notifications-toggle")[0],
            this.tooltipInstance = null,
            this.popoverInstance = null,
            this.elToggle && (this.tooltipInstance = window.BUI.createInstance("Tooltip", this.elToggle, {
                position: "bottom",
                text: this.elToggle.getAttribute("data-text")
            }),
            this.popoverInstance = window.BUI.createInstance("Popover", this.elToggle, {
                position: "bottom",
                trigger: "click",
                stretch: !0,
                contentId: "traveller-header-notifications",
                arrowNavigation: !0,
                onBeforeOpen: function() {
                    _i_("3da:1819470c"),
                    i.tooltipInstance.hide(),
                    B.et && B.et.customGoal(_, 1),
                    B.et && B.et.stage(_, 1),
                    B.env.notification_squeaks && B.squeak(B.env.notification_squeaks.entrypoint_clicked_on_www),
                    _r_()
                },
                onAfterOpen: function() {
                    var i;
                    _i_("3da:bd838e71"),
                    $(".js-uc-notifications-popover-content").on("click", ".js-uc-notification", function(e) {
                        _i_("3da:58af2f61"),
                        B.et && B.et.customGoal(_, 2);
                        try {
                            var t = $(this).data("type")
                              , i = t && "message_clicked_for_" + t
                              , n = i && B.env.notification_squeaks[i];
                            n && B.squeak(n)
                        } catch (e) {
                            B && B.reportError && B.reportError(e, "[notification]")
                        }
                        _r_()
                    }),
                    $(".js-uc-notifications-popover-content:visible .js-uc-notification[data-type=mm_notifications_generic]").each(function(e, t) {
                        _i_("3da:8e13d06e"),
                        (i = i || n("emk/in-web-notification-tracker"))(t),
                        _r_()
                    }),
                    _r_()
                },
                onAfterClose: function() {
                    _i_("3da:db14f890"),
                    i.markAsSeen(i.getNotifications("unseen")),
                    _r_()
                }
            }),
            this.tooltipInstance.mount(),
            this.popoverInstance.mount()),
            this._readNotificationsFromDOM(),
            this.isLoggedIn() && (this.updateState(),
            o(a.NOTIF_POPOVER_CLOSE, function(e, t) {
                _i_("3da:34d9d726"),
                i.markAsSeen(i.getNotifications("unseen")),
                _r_()
            })),
            this.bindEvents(),
            (0 < this.getNotifications("unseen").length || this._hasMultipleTravelGuides) && this.lazySeen(),
            _r_()
        },
        refresh: function() {
            _i_("3da:a33be347"),
            this._readNotificationsFromDOM(),
            this.isLoggedIn() && this.updateState(),
            _r_()
        },
        _readNotificationsFromDOM: function() {
            _i_("3da:e9162e8b"),
            this._notifications = this.$root.find(".js-uc-notification").map(function(e, t) {
                return _i_("3da:1d0dac2c"),
                t = $(t),
                _r_({
                    type: t.attr("data-type"),
                    fingerprint: t.attr("data-fingerprint"),
                    id: t.data("id"),
                    seen: "0" !== String(t.attr("data-seen"))
                })
            }).toArray(),
            this._hasMultipleTravelGuides = 1 < this.getNotificationsByType("explorer_available").length || this.getNotificationsByType("multiple_travel_guides").length,
            _r_()
        },
        lazySeen: function() {
            _i_("3da:2072360a");
            var e = /notif_id=([\w\d]+)/.exec(window.location.href);
            if (null == e)
                return _r_();
            var t = e[1];
            if (void 0 === this._notifications.filter(function(e) {
                return _i_("3da:929c7feb"),
                _r_(e.id === t)
            })[0])
                return _r_();
            _r_()
        },
        seen: function(e, t) {
            _i_("3da:722012be"),
            e.seen = t,
            this.getNotificationNode(e).toggleClass("uc-notification-seen", t && !this.popoverInstance).toggleClass("bui-traveller-header__notification--seen", t && this.popoverInstance).toggleClass("uc-notification-unseen", !t && !this.popoverInstance),
            _r_()
        },
        markAsSeen: function(e) {
            _i_("3da:1e3cb4ab");
            var t = this;
            if (0 === e.length)
                return _r_();
            var i = JSON.stringify(e);
            e.forEach(function(e) {
                _i_("3da:3662a5c0"),
                t.seen(e, !0),
                _r_()
            }),
            this.updateState(),
            $.ajax({
                type: "POST",
                url: "/seen_notifications",
                data: {
                    notifications: i
                }
            }),
            _r_()
        },
        _setCount: function(e) {
            _i_("3da:145c5232");
            var t = this.$root.find(".js-uc-notifications-bell-count")
              , i = this.$root.find(".js-uc-notifications-bell-count-a11y");
            if (0 === t.length)
                return _r_();
            if (t.text(e),
            i && B.jstmpl) {
                var n = B.jstmpl.translations("language_exception_a11y_travheader_view_notifications_count_1", e, {
                    num_notifications: e
                });
                i.text(n)
            }
            t.toggleClass("g-hidden", 0 === e),
            _r_()
        },
        updateState: function() {
            _i_("3da:0154f2a8"),
            this.updateCounter(),
            this.$root.toggleClass("uc-notifactions-has-unseen", 0 < this.getNotifications("unseen").length);
            var e = $("#traveller-header-notifications").html();
            e && e.trim() && r(a.NOTIF_UPDATE_LIST, {
                list: e
            }),
            _r_()
        },
        updateCounter: function() {
            _i_("3da:4f8f94a8");
            var e = this.getNotifications("unseen").length + this._getUnseenCountsFromGroups();
            r(a.NOTIF_UPDATE_COUNTER, {
                count: e
            }),
            this._setCount(e),
            this.$root.toggleClass("uc-notifications_new", 0 !== this.getNotifications().length),
            _r_()
        },
        bindEvents: function() {
            _i_("3da:639e4015");
            var i = this;
            B.eventEmitter.bind("header:notifications:item_removed", function() {
                _i_("3da:c12c9157"),
                i.updateState(),
                _r_()
            }),
            B.eventEmitter.bind("uc_popover_showed", function(e, t) {
                _i_("3da:e9d84139"),
                i.$root.find(".user_center_popover").focus(),
                "notifications" === t.id && (B.eventEmitter.trigger("header:notifications:shown"),
                B.events.emit("header:notifications:shown")),
                _r_()
            }),
            this.$root.delegate(".js-uc-notification a", "click", function(e) {
                if (_i_("3da:0dcbff0e"),
                null == i.getNotificationFromEvent(e))
                    return _r_();
                _r_()
            }),
            B.eventEmitter.bind("header:notifications:hidden", function() {
                _i_("3da:c12c91571"),
                i.updateState(),
                _r_()
            }),
            this.$root.delegate(".js-uc-notification-close", "click", function(e) {
                _i_("3da:d7c96e43");
                var t = i.getNotificationFromEvent(e);
                i.hideNotification(t),
                _r_()
            }),
            this.$root.delegate(".js-uc-notification-seen", "click", function(e) {
                _i_("3da:75e2df91");
                var t = i.getNotificationFromEvent(e);
                "thread" === t.type || i.markAsSeen([t]),
                _r_()
            }),
            this.$root.delegate(".js-uc-notification-list__close", "click", function() {
                _i_("3da:68e0cf65"),
                i.$root.find(".user_center_popover").hide(),
                i.$root.focus(),
                _r_()
            }),
            _r_()
        },
        getNotificationNode: function(e) {
            return _i_("3da:0cc3c0f5"),
            _r_(this.$root.find('[data-fingerprint="' + e.fingerprint + '"][data-type="' + e.type + '"]'))
        },
        getNotificationData: function(t) {
            _i_("3da:5e1cf04c");
            var i = null;
            return this.getNotifications().forEach(function(e) {
                _i_("3da:84945a2a"),
                $(t).attr("data-type") === e.type && $(t).attr("data-fingerprint") === e.fingerprint && (i = e),
                _r_()
            }),
            _r_(i)
        },
        getNotificationFromEvent: function(e) {
            _i_("3da:fb8d4ec6");
            var t = $(e.currentTarget).closest(".js-uc-notification");
            return _r_(t && this.getNotificationData(t))
        },
        hideNotification: function(e) {
            _i_("3da:a6ebdaf3");
            var t = this.getNotifications().indexOf(e);
            $.post("/dismiss_user_notification", e),
            this.getNotificationNode(e).addClass("uc-notification_hidden"),
            -1 !== t && this.getNotifications().splice(t, 1),
            B.eventEmitter.trigger("header:notifications:item_removed", {
                id: e.id,
                fingerprint: e.fingerprint
            }),
            _r_()
        },
        _filters: {
            seen: function(e) {
                return _i_("3da:db3c9429"),
                _r_(e.seen)
            },
            unseen: function(e) {
                return _i_("3da:67b995e6"),
                _r_(!e.seen)
            }
        },
        getNotifications: function(e) {
            if (_i_("3da:b0d5cd85"),
            this._filters[e])
                return _r_(this._notifications.filter(this._filters[e]));
            return _r_(this._notifications)
        },
        getNotificationsByType: function(t) {
            return _i_("3da:dc68b375"),
            _r_(this._notifications.filter(function(e) {
                return _i_("3da:1e97e6a6"),
                _r_(e.type === t)
            }))
        },
        _getUnseenCountsFromGroups: function() {
            _i_("3da:6b668002");
            var n = 0;
            return this.$root.find(".uc-notifications-group_iframe").each(function(e, t) {
                _i_("3da:faa0817a");
                var i = $(t).data("unread-count");
                void 0 !== i && (n += i),
                _r_()
            }),
            _r_(n)
        }
    },
    _r_()
}),
B.require(["require"], function(e) {
    _i_("3da:ea376a3f"),
    e("header/notifications/notifications").init(),
    _r_()
}),
function() {
    _i_("3da:161e3f88");
    var t = function() {
        _i_("3da:83d2187e"),
        $(".js-user-access-form--back-to-signin").click(function() {
            _i_("3da:a743c5f1");
            var e = $(".user_access_signin_menu, .user_access_signup_menu");
            e.find(".js-user-access-form--signin").removeClass("g-hidden"),
            e.find(".js-user-access-form--signup").removeClass("g-hidden"),
            e.find(".js-user-access-form--reminder").addClass("g-hidden"),
            e.find(".js-user-access-form--reminder-sent").addClass("g-hidden"),
            _r_()
        }),
        $("body").delegate(".forgot_link_look, .forgot_pass_trigger", "click", function(e) {
            if (_i_("3da:63f0fff3"),
            e.preventDefault(),
            B.env.b_show_user_accounts_features && $(this).closest(".user_access_signin_menu, .user_access_signup_menu").length) {
                var t = $(this).closest(".user_access_signin_menu, .user_access_signup_menu");
                t.find(".js-user-access-form--signin").addClass("g-hidden"),
                t.find(".js-user-access-form--signup").addClass("g-hidden"),
                t.find(".js-user-access-form--reminder").removeClass("g-hidden"),
                t.find(".js-user-access-form--reminder .user_access_email").val(t.find(".js-user-access-form--signin .user_access_email, .js-user-access-form--signup .user_access_email").val()).focus().select(),
                booking.eventEmitter.one("UA:password-reminder-sent", function() {
                    _i_("3da:a762848e"),
                    t.find(".form-loading").hide(),
                    t.find(".alert-error").removeClass("alert-displayed"),
                    t.find(".js-user-access-form--reminder").addClass("g-hidden"),
                    t.find(".js-user-access-form--reminder-sent").removeClass("g-hidden"),
                    _r_()
                })
            } else {
                var i = $(this).attr("data-href") || $(this).attr("href");
                window.open(i, "_blank", "left=42,top=42,height=502px,width=440px,resizable=false")
            }
            _r_()
        }),
        $("#foldout_loggedin").delegate("li", "click", function() {
            _i_("3da:6f3a76c2");
            var e = $(this);
            e.hasClass("seo_link_look") && e.attr("data-href") && (e.hasClass("my_logout") || (window.location = e.attr("data-href"))),
            _r_()
        }),
        $("body").delegate(".js-sso-link", "click", function(e) {
            _i_("3da:bf6952ac"),
            window.location = $(".js-sso-link").data("sso-url"),
            e.preventDefault(),
            _r_()
        }),
        _r_()
    };
    B.when({
        events: "ready"
    }).run(function(e) {
        _i_("3da:b0a43de8"),
        t(),
        _r_()
    }),
    _r_()
}(),
function() {
    "use strict";
    _i_("3da:9e6b8a4b");
    var e, r = window.jQuery, t = ".d-deal", o = "d-deal__tooltip-left", _ = "d-deal__tooltip-right", s = "d-deal__pre-init", d = r(window);
    function i() {
        _i_("3da:edcc9dda"),
        clearTimeout(e),
        e = setTimeout(function() {
            var i;
            _i_("3da:6f802c8f");
            var n, a = d.width() || 1e3;
            clearTimeout(e),
            r(t).each(function(e, t) {
                _i_("3da:c3e5bc31"),
                (i = r(t)).removeClass(s),
                i.removeClass(o),
                i.removeClass(_),
                n = i.offset().left,
                a - 270 < n ? i.addClass(_) : n < 200 && i.addClass(o),
                _r_()
            }),
            _r_()
        }, 300),
        _r_()
    }
    i(),
    r(window).on("resize", i),
    _r_()
}(),
"object" != typeof JSON && (JSON = {}),
function() {
    "use strict";
    function f(e) {
        return _i_("3da:457873c3"),
        _r_(e < 10 ? "0" + e : e)
    }
    _i_("3da:deb55463"),
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return _i_("3da:aa4c2ea0"),
        _r_(isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null)
    }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return _i_("3da:65b6e6eb"),
        _r_(this.valueOf())
    }
    );
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    function quote(e) {
        return _i_("3da:efa4c6d1"),
        escapable.lastIndex = 0,
        _r_(escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            _i_("3da:d0842d1e");
            var t = meta[e];
            return _r_("string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4))
        }) + '"' : '"' + e + '"')
    }
    function str(e, t) {
        _i_("3da:49f85ddf");
        var i, n, a, r, o, _ = gap, s = t[e];
        switch (s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(e)),
        "function" == typeof rep && (s = rep.call(t, e, s)),
        typeof s) {
        case "string":
            return _r_(quote(s));
        case "number":
            return _r_(isFinite(s) ? String(s) : "null");
        case "boolean":
        case "null":
            return _r_(String(s));
        case "object":
            if (!s)
                return _r_("null");
            if (gap += indent,
            o = [],
            "[object Array]" === Object.prototype.toString.apply(s)) {
                for (r = s.length,
                i = 0; i < r; i += 1)
                    o[i] = str(i, s) || "null";
                return a = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + _ + "]" : "[" + o.join(",") + "]",
                gap = _,
                _r_(a)
            }
            if (rep && "object" == typeof rep)
                for (r = rep.length,
                i = 0; i < r; i += 1)
                    "string" == typeof rep[i] && (a = str(n = rep[i], s)) && o.push(quote(n) + (gap ? ": " : ":") + a);
            else
                for (n in s)
                    Object.prototype.hasOwnProperty.call(s, n) && (a = str(n, s)) && o.push(quote(n) + (gap ? ": " : ":") + a);
            return a = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + _ + "}" : "{" + o.join(",") + "}",
            gap = _,
            _r_(a)
        }
        _r_()
    }
    "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, i) {
        var n;
        if (_i_("3da:d203f3d2"),
        indent = gap = "",
        "number" == typeof i)
            for (n = 0; n < i; n += 1)
                indent += " ";
        else
            "string" == typeof i && (indent = i);
        if ((rep = t) && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
            throw new Error("JSON.stringify");
        return _r_(str("", {
            "": e
        }))
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        var j;
        function walk(e, t) {
            _i_("3da:8f0d4c1b");
            var i, n, a = e[t];
            if (a && "object" == typeof a)
                for (i in a)
                    Object.prototype.hasOwnProperty.call(a, i) && (void 0 !== (n = walk(a, i)) ? a[i] = n : delete a[i]);
            return _r_(reviver.call(e, t, a))
        }
        if (_i_("3da:7939f763"),
        text = String(text),
        cx.lastIndex = 0,
        cx.test(text) && (text = text.replace(cx, function(e) {
            return _i_("3da:bc17d97b"),
            _r_("\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4))
        })),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"),
            _r_("function" == typeof reviver ? walk({
                "": j
            }, "") : j);
        throw new SyntaxError("JSON.parse")
    }
    ),
    _r_()
}(),
$.cookie("b") ? window.b_cookie = JSON.parse($.cookie("b")) || {} : window.b_cookie = {};
var dont_execute_in_tdot = function() {
    _i_("3da:c14a3692");
    var u = B.require("jquery")
      , f = booking.env
      , i = {
        priority: 9,
        init: function() {
            _i_("3da:029361c1");
            var e = function() {
                _i_("3da:fe2d7504"),
                window.b_cookie.langPrompt = "dontshow",
                "undefined" != typeof JSON && u.cookie("b", JSON.stringify(window.b_cookie), {
                    expires: 30,
                    path: "/",
                    domain: f.b_domain_end
                }),
                _r_()
            };
            if (void 0 === window.b_cookie && (window.b_cookie = {}),
            u("#langselectbutton, #languageselect input").hide(),
            u("#langselectformlist, #currList").change(function() {
                _i_("3da:6de1efb7"),
                u("#languageselect")[0].submit(),
                e(),
                _r_()
            }),
            u(".current_language, .prompt_close").click(function(e) {
                _i_("3da:58829dfb"),
                e.preventDefault(),
                u(".language_prompt").hide(),
                u.get("/general." + booking.env.b_lang + ".html?tmpl=blank"),
                _r_()
            }),
            u(".language_flags").click(function() {
                _i_("3da:76795bb4"),
                e(),
                _r_()
            }),
            f.show_language_suggestion) {
                if (window.b_cookie.countLang)
                    if (isNaN(window.b_cookie.countLang))
                        f.language_dialog_count2 = 1,
                        window.b_cookie.countLang = 1;
                    else {
                        var t = parseInt(parseInt(window.b_cookie.countLang, 10) + 1, 10);
                        t <= 4 && (f.language_dialog_count2 = t,
                        window.b_cookie.countLang = f.language_dialog_count2)
                    }
                else
                    f.language_dialog_count2 = 1,
                    window.b_cookie.countLang = 1;
                "undefined" != typeof JSON && u.cookie("b", JSON.stringify(window.b_cookie), {
                    expires: 30,
                    path: "/",
                    domain: f.b_domain_end
                }),
                "dontshow" !== window.b_cookie.langPrompt && f.language_dialog_count2 < 4 && !booking.affiliate.platform.isHybrid && setTimeout(i.createAlert, 2e3)
            }
            _r_()
        },
        createAlert: function(e) {
            _i_("3da:136c78be");
            var t, i = f.show_language_suggestion, n = !1, a = "", r = "", o = "";
            if (i) {
                var _ = u("#current_currency").width()
                  , s = u("#current_language").width()
                  , d = Math.round(_ + s / 2 - 115)
                  , c = "";
                u("#languageselect .language-wrapper").length ? (t = u("#languageselect .language-wrapper"),
                a = "margin-top:10px;",
                r = "top: -2px;",
                f.b_is_ie7 && (o = "margin-top:25px;left:100px;"),
                n = !0) : (t = u("#personal_form"),
                r = "top: -11px;",
                o = "top:40px;");
                c += '<div id="lang-prompt" style="display:none;height:1px;position:absolute;z-index:50;width:230px;left:' + d + "px;" + o + '"><div style="position:absolute;zoom:1;' + r + ";left:120px;width:17px;height:13px;background:url('//cf.bstatic.com/static/img/experiments/top-info-arrrow2/932e26ee2c70a335e5031bf87df7595bf93ca5b9.png');\"></div><div style=\"border:2px solid #a2bbda;padding:10px;background:#e6edf6;width:230px;-moz-box-shadow:0 1px 2px rgba(0,0,0,.7);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.7);" + a + '"><a href="#" class="close" style="float:right;font-weight:normal;font-size:12px;line-height:1.3;opacity:.35;filter:alpha(opacity=35);">' + f.transl_close_x + "</a>",
                c += '<a href="#scs" id="lang_change_link" class="lang_change_link" style="display:block;font-weight:normal;margin-right:50px;padding-left:40px;white-space:normal;background:url(' + B.tools.jsStaticUrl("/static/img/flags/24/" + f.b_flag_to_suggest + ".png") + ') no-repeat;" data-lang-code="' + i.suggested_lang_select + '">' + i.transl_change_page_lang_to_x + "</a>",
                c += "</div></div>",
                t.append(c),
                u("#lang-prompt").fadeIn("slow");
                var l = booking.require("ga-tracker");
                l.trackEvent(l.clickTracker, "Lang prompt", "Show"),
                u("#lang-prompt .close").click(function() {
                    return _i_("3da:61bee817"),
                    window.b_cookie.langPrompt = "dontshow",
                    "undefined" != typeof JSON && u.cookie("b", JSON.stringify(window.b_cookie), {
                        expires: 30,
                        path: "/",
                        domain: f.b_domain_end
                    }),
                    u("#lang-prompt").hide(),
                    l.trackEvent(l.clickTracker, "Lang prompt", "Close"),
                    _r_(!1)
                }),
                u("#lang-prompt .lang_change_link").click(function() {
                    var e;
                    _i_("3da:3ba354c8"),
                    window.b_cookie.langPrompt = "dontshow",
                    "undefined" != typeof JSON && u.cookie("b", JSON.stringify(window.b_cookie), {
                        expires: 30,
                        path: "/",
                        domain: f.b_domain_end
                    });
                    var t = u(this).attr("data-lang-code");
                    n ? (u("#langselectformlist").val(t),
                    u("#languageselect")[0].submit()) : (e = u(".lang_" + t).find("a").attr("href")) && (window.location = e),
                    _r_()
                })
            }
            _r_()
        }
    };
    window.addEventListener("load", i.init),
    _r_()
};
booking.env.b_is_tablet || dont_execute_in_tdot(),
function() {
    _i_("3da:8dd2e868");
    var n = {
        priority: 9,
        resultsPerPage: booking.env.b_is_android_tablet ? 4 : 5,
        totalPages: 0,
        currentPage: 0,
        click: null,
        googleTracked: !1,
        lastViewedHotels: null,
        overlay: null,
        ajaxPath: "/userhistory." + booking.env.b_lang_for_url + ".html",
        ajaxStatus: 0,
        staticPath: [],
        init: function() {
            if (_i_("3da:308503bf"),
            "tdot" !== B.env.b_site_type)
                return _r_();
            this.staticPath = booking.env.b_static_images_hostnames,
            $("body").append('<div id="ng-overlay" hidden></div>'),
            this.$overlay = $("#ng-overlay"),
            this.addEvents(),
            _r_()
        },
        addEvents: function() {
            _i_("3da:1be9fe17");
            var i = this
              , n = $("#top_lw_wrapper")
              , t = $("a#top_last_viewed")
              , a = booking.require("ga-tracker");
            t.bind("click", {
                exp: i
            }, function(e) {
                _i_("3da:78be3cbd");
                var t = $("#history_count").attr("data-count");
                i.googleTracked || (a.trackEvent(a.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the header button"),
                i.googleTracked = !0),
                i.isVisibleOverlay() && "lw" == i.click ? (i.distroyOverlay(),
                n.hide()) : (i.createOverlay(),
                $(".milk_menu").hide(),
                n.show(),
                i.click = "lw"),
                !i.ajaxStatus && t && 0 < t - 0 && i.getLastViewedHotels(),
                void 0 !== booking.maps && booking.maps.map_opened && booking.maps.close(),
                e.preventDefault(),
                _r_()
            }),
            $("#ng-overlay, #current_account, #header_currency, #header_language, #current_account_create").bind("click", function(e) {
                _i_("3da:c2b704e2"),
                "ng-overlay" == $(e.target).get(0).id && e.preventDefault(),
                i.distroyOverlay(),
                _r_()
            }),
            $("#lw_next, #lw_prev").bind("click", function(e) {
                _i_("3da:a7ad577e");
                var t = $(this);
                e.preventDefault(),
                setTimeout(function() {
                    _i_("3da:6defccd8"),
                    i.renderItems(t.data("page")),
                    _r_()
                }, 300),
                _r_()
            }),
            $("#sidebar_last_viewed").bind("click", function(e) {
                _i_("3da:360b26da"),
                e.preventDefault(),
                $(document.body).animate({
                    scrollTop: 0
                }, 400, function() {
                    _i_("3da:c6d9d45d"),
                    t.trigger("click"),
                    a.trackEvent(a.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the sidebar button"),
                    _r_()
                }),
                _r_()
            }),
            _r_()
        },
        handleCookieWarning: function(e) {
            if (_i_("3da:901d8b80"),
            "nl" != booking.env.b_guest_country)
                return _r_();
            var t = $("#cookie_warning");
            t.length && ("show" == e ? t.show() : t.hide()),
            _r_()
        },
        createOverlay: function() {
            _i_("3da:86acf7b7");
            this.handleCookieWarning(),
            $("#ng-overlay").height($("html").outerHeight(!0)).show(),
            _r_()
        },
        distroyOverlay: function() {
            _i_("3da:3989f757");
            return $("#ng-overlay").hide(),
            $("#top_lw_wrapper").hide(),
            this.handleCookieWarning("show"),
            $(".milk_menu").hide(),
            $(".b_recentlyviewed").length && $(".b_recentlyviewed").removeClass("rv-content-visible"),
            _r_(!1)
        },
        isVisibleOverlay: function() {
            _i_("3da:9db2130e");
            return _r_(this.$overlay.is(":visible"))
        },
        getLastViewedHotels: function() {
            _i_("3da:221ede95");
            var t = this
              , i = $("#lw_list #spinner");
            return t.ajaxStatus = 1,
            $.ajax && $.ajax({
                type: "GET",
                cache: !1,
                url: t.ajaxPath,
                dataType: "JSON",
                data: {
                    last_viewed_json: 1,
                    tmpl: "profile/json",
                    stid: 350339
                },
                success: function(e) {
                    if (_i_("3da:cf4f75ff"),
                    t.ajaxStatus = 2,
                    "object" != typeof e && (e = $.parseJSON(e)),
                    !e || $.isEmptyObject(e) || e instanceof Array && !e.length)
                        return _r_();
                    t.lastViewedHotels = e,
                    t.totalPages = Math.ceil(e.length / t.resultsPerPage),
                    t.renderItems(1),
                    i.remove(),
                    _r_()
                }
            }),
            _r_(!0)
        },
        renderItems: function(e) {
            _i_("3da:76a34bdf");
            var t = this
              , i = $("#lw_next")
              , n = $("#lw_prev")
              , a = $("#lw_list")
              , r = t.lastViewedHotels
              , o = (e - 1) * t.resultsPerPage
              , _ = o + t.resultsPerPage;
            for (_ = _ > r.length ? r.length : _,
            a.empty(),
            t.currentPage = e; o < _; o++)
                a.append(this.renderItem(r[o]));
            t.currentPage < t.totalPages ? i.data("page", t.currentPage + 1).show() : i.hide(),
            1 != t.currentPage ? n.data("page", t.currentPage - 1).show() : n.hide(),
            _r_()
        },
        renderItem: function(e) {
            _i_("3da:32fb2409");
            var t = "";
            if (t += "<li>",
            t += '<a class="ui-helper-clearfix" href="',
            t += booking.env.b_nonsecure_hostname_signup + e.url + booking.env.b_query_params_with_lang,
            t += booking.env.b_url_params + booking.env.b_query_params_delimiter,
            "undefined" != booking.env.b_param_do_availability_check && (t += "do_availability_check=on" + booking.env.b_query_params_delimiter,
            booking.env.b_checkin_date && booking.env.b_checkout_date && (t += "checkin=" + booking.env.b_checkin_date,
            t += booking.env.b_query_params_delimiter,
            t += "checkout=" + booking.env.b_checkout_date)),
            t += '">',
            e.photo_id) {
                var i = Math.round(Math.random());
                t += '<img width="60px" height="60px" src="' + this.staticPath[i] + "/images/hotel/square60/" + e.photo_id.substring(0, 3) + "/" + e.photo_id + '.jpg " />'
            }
            return t += '<span class="lw_hotel_name">' + e.title + "</span>",
            e.rating && (e.class_is_estimated && "de" == e.hotel_cc1 ? t += '<span class="retina_estimated_small ' + this.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' : e.class_is_estimated && "au" == e.hotel_cc1 ? t += '<span class="retina_estimated_small ' + this.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' : t += '<span class="retina_stars_small ' + this.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>'),
            e.address && (t += '<span class="lw_address">' + e.address + "</span>"),
            t += "</a>",
            _r_(t += "</li>")
        },
        loadRatingClass: function(e, t) {
            return _i_("3da:e53958b7"),
            _r_(t ? "circle" + e + "i4half" : "circle" + e + "i4")
        },
        loadRetinaRatingClass: function(e, t) {
            return _i_("3da:2ba1cced"),
            _r_("retina_stars_small_" + e + (t ? "half" : ""))
        }
    };
    B.define("t_main_rm_js/ng_last_viewed", function(e, t, i) {
        _i_("3da:c4a50a52"),
        i.exports = n,
        _r_()
    }),
    B.when({
        events: "ready"
    }).run(function(e) {
        _i_("3da:bdfa825d"),
        B.require("t_main_rm_js/ng_last_viewed").init(),
        _r_()
    }),
    _r_()
}(),
_i_("3da:45ef7cad"),
B.env && B.env.b_lazy_load_print_css && window.addEventListener("load", function() {
    _i_("3da:416e4b90");
    var e = document.createElement("link");
    e.rel = "stylesheet",
    e.type = "text/css",
    e.href = booking.env.print_css_href,
    e.media = "print",
    document.getElementsByTagName("head")[0].appendChild(e),
    _r_()
}),
_r_(),
booking.lightbox = function() {
    _i_("3da:db5e35fc");
    var d, c, a, r, o, _, i, n = $("body"), s = {
        bAnimation: !0,
        bCloseButton: !0,
        bMaskClick: !0,
        closeOnEsc: !0,
        customWrapperClassName: "",
        customMaskClassName: "",
        bFullscreen: !1,
        hideCallBack: null,
        hideBeforeCallBack: null,
        positionBeforeCallBack: null,
        positionAfterCallBack: null,
        cloneElement: !1,
        bCanScroll: !1,
        bOverflowVisible: !1,
        autoCenter: !0,
        limitHeight: !1,
        opacity: .5,
        autoWidth: !1,
        position: "fixed",
        topMargin: 0,
        bottomMargin: 0,
        preventBodyScroll: !1,
        trapFocus: !0,
        addDialogStartEndText: !1,
        modalLabeledById: ""
    }, l = {}, t = [], u = function() {
        _i_("3da:b0c0e96f");
        for (var e = ["", "moz", "webkit"], t = 0; t < 3; t++)
            if (e[t] + ("" === e[t] ? "b" : "B") + "oxSizing"in document.body.style)
                return _r_(!0);
        return _r_(!1)
    }(), f = !1;
    var h = function(i) {
        var n;
        _i_("3da:4cee35e6"),
        l.positionBeforeCallBack && l.positionBeforeCallBack(),
        d.css({
            width: $(document).width(),
            height: $(document).height()
        });
        var e = $(window).width()
          , t = Math.max(0, $(window).height() - l.topMargin - l.bottomMargin);
        if (u || (e = e - parseInt(c.css("paddingLeft")) - parseInt(c.css("paddingRight")),
        t = t - parseInt(c.css("paddingTop")) - parseInt(c.css("paddingBottom"))),
        !l.limitHeight) {
            var a = Math.max(0, $(window).height() - l.topMargin - l.bottomMargin);
            c.outerHeight() > a ? (c.css("height", t),
            n = !0) : (c.css("height", ""),
            c.outerHeight() >= a && c.css("height", t))
        }
        if (c.outerWidth() > $(window).width())
            c.css("width", e);
        else if (c.css("width", ""),
        c.outerWidth() >= $(window).width())
            c.css("width", e);
        else if (l.autoWidth) {
            var r = c.children().first().outerWidth();
            u && (r += parseInt(c.css("padding-left"), 10) + parseInt(c.css("padding-right"), 10),
            r += parseInt(c.css("border-left-width"), 10) + parseInt(c.css("border-right-width"), 10)),
            c.css({
                width: r
            })
        }
        var o = 0
          , _ = 0;
        l.bFullscreen ? c.css({
            width: e,
            height: t
        }) : (o = Math.max(l.topMargin, $(window).height() / 2 - c.outerHeight() / 2),
        _ = Math.max(0, $(window).width() / 2 - c.outerWidth() / 2));
        var s = "hidden";
        l.bCanScroll ? s = "auto" : l.bOverflowVisible && (s = "visible"),
        "absolute" == l.position ? (o = Math.max(0, $(window).height() / 2 - c.outerHeight() / 2),
        o += $(document).scrollTop(),
        c.css("position", "absolute")) : "dynamic" == l.position && function() {
            _i_("3da:247e6024");
            var e = "modal-pos-abs"
              , t = "modal-pos-to-fix";
            n ? (o = i && i.preserveAbsolute && c.hasClass(e) ? (c.offset() || {}).top : $(document).scrollTop() + l.topMargin,
            c.css({
                position: "absolute",
                height: ""
            }).addClass(e)) : (c.css({
                position: "fixed"
            }),
            c.hasClass(e) ? c.removeClass(e).addClass(t) : c.removeClass(t)),
            _r_()
        }(),
        c.css({
            top: o,
            left: _,
            overflow: s
        }),
        l.positionAfterCallBack && l.positionAfterCallBack(),
        _r_()
    }
      , p = function(e) {
        _i_("3da:540f2962"),
        c && c.is(":visible") && h(e),
        _r_()
    }
      , m = function() {
        if (_i_("3da:881a5a71"),
        !c)
            return _r_();
        l.hideBeforeCallBack && l.hideBeforeCallBack(),
        l.cloneElement || (r.prepend(a),
        a.css("display", _)),
        l.trapFocus && booking.trapFocus && booking.trapFocus.release(),
        d.remove(),
        c.remove(),
        f = !1,
        $("body").removeClass("modal-visible"),
        $(window).unbind("scroll", p),
        $(window).unbind("resize", p),
        l.closeOnEsc && $(document).unbind("keyup", b),
        $(".modal-wrapper").off("click.userClose"),
        $("#calendar_popup").css("display", "none"),
        l.hideCallBack && l.hideCallBack(),
        l.preventBodyScroll && (_i_("3da:347a5263"),
        n.css({
            overflow: "auto",
            paddingRight: i
        }),
        _r_()),
        booking.eventEmitter.trigger("modal:close"),
        B.events.trigger("modal:close"),
        _r_()
    }
      , b = function(e) {
        _i_("3da:53ad8b02"),
        27 !== e.keyCode || t.length || m(),
        _r_()
    }
      , g = function() {
        if (_i_("3da:5029372f"),
        d = $('<div class="modal-mask"/>').appendTo(document.body),
        0 < l.customMaskClassName.length && d.addClass(l.customMaskClassName),
        c = $('<div class="modal-wrapper"/>').attr({
            role: "dialog",
            "aria-label": l.ariaLabel ? l.ariaLabel : "dialog",
            "aria-modal": "true"
        }).appendTo(document.body),
        l.modalLabeledById) {
            var e = $("#" + l.modalLabeledById)
              , t = e.text().trim();
            e.length && t ? c.attr("aria-label", t) : c.attr("aria-labelledby", l.modalLabeledById)
        }
        0 < l.customWrapperClassName.length && c.addClass(l.customWrapperClassName),
        l.addDialogStartEndText && booking.env.a11y_dialog_content_start_text && $('<span class="invisible_spoken"/>').text(booking.env.a11y_dialog_content_start_text).appendTo(c),
        l.cloneElement ? a.clone().appendTo(c) : c.append(a),
        l.bCloseButton && $('<button class="modal-mask-closeBtn" title="' + booking.env.experiment_popups_close + '"><span class="invisible_spoken">' + booking.env.experiment_popups_close + "</span></button>").appendTo(c),
        l.addDialogStartEndText && booking.env.a11y_dialog_content_end_text && $('<span class="invisible_spoken"/>').text(booking.env.a11y_dialog_content_end_text).appendTo(c),
        l.bFullscreen && c.addClass("modal-wrapper--fullscreen"),
        f = !0,
        $("body").addClass("modal-visible"),
        l.preventBodyScroll && function() {
            _i_("3da:0a9b623a");
            var e = n.width();
            i = parseInt(n.css("padding-right"), 10),
            n.css("overflow", "hidden");
            var t = n.width() - e;
            n.css("padding-right", i + t),
            _r_()
        }(),
        a.show(),
        h(),
        _i_("3da:8fed2503"),
        $(".modal-wrapper .modal-mask-closeBtn").add('.modal-wrapper [data-lightbox-close=""]').one("click", function() {
            _i_("3da:b5838b9c"),
            m(),
            _r_()
        }),
        $(".modal-wrapper").on("click.userClose", ".lightbox-element-close", function() {
            _i_("3da:ab60bbf1"),
            m(),
            _r_()
        }),
        l.bMaskClick && $(".modal-mask").one("click", function() {
            _i_("3da:2beba14a"),
            m(),
            _r_()
        }),
        l.closeOnEsc && $(document).bind("keyup", b),
        $(window).bind("resize", p),
        "absolute" == l.position && l.autoCenter && $(window).bind("scroll", p),
        _r_(),
        _r_()
    }
      , v = function() {
        if (_i_("3da:77b79d8f"),
        g(),
        c.css("visibility", "visible"),
        l.bAnimation) {
            var e = l.bAnimation;
            "number" != typeof e && (e = parseInt(e, 10) || 1e3),
            d.fadeTo(Math.max(0, Math.min(600, e - 400)), l.opacity),
            c.css("opacity", "0").animate({
                opacity: 1
            }, e, function() {
                _i_("3da:2e039ac2"),
                $(this).css("opacity", ""),
                _r_()
            }),
            l.trapFocus && booking.trapFocus && setTimeout(function() {
                _i_("3da:e718942f"),
                booking.trapFocus.trap(c[0], o),
                o = null,
                _r_()
            }, 100)
        } else
            d.css("opacity", l.opacity).show(),
            l.trapFocus && booking.trapFocus && (booking.trapFocus.trap(c[0], o),
            o = null);
        l.ajax && "function" == typeof l.loadCallBack && l.loadCallBack.call(),
        booking.eventEmitter.trigger("modal:open"),
        B.events.trigger("modal:open"),
        _r_()
    };
    return _r_({
        show: function(e, t, i) {
            if (_i_("3da:8db3284d"),
            c && c.is(":visible"))
                return _r_();
            if (l = {},
            $.extend(l, s, t),
            l.trapFocus && void 0 === booking.trapFocus && B.debug("The trapFocus module was not defined, include please tarpFocus module in your concat"),
            l.trapFocus && booking.trapFocus && (o = $(document.activeElement)),
            l.iframe) {
                var n = $('<iframe id="lightbox_iframe" src="' + e + '" width="100%" height="' + l.iframeHeight + '"></iframe> ');
                "function" == typeof l.loadCallBack && n.load(l.loadCallBack),
                r = (a = n).parent(),
                _ = a.css("display"),
                v()
            } else
                l.ajax ? jQuery.ajax({
                    url: e,
                    cache: !0,
                    success: function(e) {
                        _i_("3da:7acdb394"),
                        a = l.ajaxRawContent ? $(e) : $($.trim(e)).eq(0),
                        r = a.parent(),
                        _ = a.css("display"),
                        v(),
                        _r_()
                    }
                }) : ((a = $(e)).length && "SCRIPT" === a[0].tagName && (a = $($.trim(a.html()))),
                r = a.parent(),
                _ = a.css("display"),
                v());
            return void 0 !== i && i(),
            _r_(c)
        },
        hide: m,
        rePosition: p,
        open: function(e, t, i, n) {
            _i_("3da:c48b243c"),
            booking.lightbox.show($("#" + n)),
            _r_()
        },
        isVisible: function() {
            return _i_("3da:460df769"),
            _r_(f)
        },
        pushEscStack: function(e) {
            _i_("3da:5fd3d9f7"),
            t.push(e),
            _r_()
        },
        popEscStack: function() {
            _i_("3da:29642ab7"),
            t.pop(),
            _r_()
        },
        hideWithFade: function(e, t) {
            _i_("3da:0cf0d60c"),
            c.fadeOut(e),
            d.fadeOut(e, function() {
                _i_("3da:b8953fa0"),
                m(),
                t && t(),
                _r_()
            }),
            _r_()
        }
    })
}(),
B.define("lightbox", booking.lightbox),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:9966703c"),
    $(".map_links").hover(function() {
        _i_("3da:8027f581");
        var e = this.id;
        $("#" + e + "_in").show(),
        _r_()
    }, function() {
        _i_("3da:12685b1c");
        var e = this.id;
        $("#" + e + "_in").hide(),
        _r_()
    }),
    $(".tab01").click(function() {
        _i_("3da:60f3a068"),
        $(".map_overseas").hide(),
        $(".map_ja").show(),
        $(".tab02").removeClass("active"),
        $(".tab01").addClass("active"),
        _r_()
    }),
    $(".tab02, #ja11").click(function() {
        _i_("3da:bf4fedce"),
        $(".map_ja").hide(),
        $(".map_overseas").show(),
        $(".tab01").removeClass("active"),
        $(".tab02").addClass("active"),
        _r_()
    });
    var a, t = $(".map_overseas"), r = $(".overseas_cities");
    t.delegate(".country_list", "click", function(e) {
        _i_("3da:f6317687"),
        e.preventDefault();
        var t = $(this)
          , i = t.data("id")
          , n = r.find(".country_" + i).clone();
        a.open({
            title: t.clone(),
            content: n
        }),
        _r_()
    }),
    a = function() {
        _i_("3da:66467936");
        var t, n = $(".map_box_overlay"), a = n.find(".map_box_overlay_header_title"), r = n.find(".map_box_overlay_content");
        return n.delegate(".map_box_overlay_mask", "click", function(e) {
            _i_("3da:7399f08c1"),
            t.close(),
            _r_()
        }).delegate(".map_box_overlay_close_button", "click", function(e) {
            _i_("3da:7399f08c"),
            t.close(),
            _r_()
        }),
        _r_(t = {
            open: function(e) {
                _i_("3da:daa7874f");
                var t = e.content || ""
                  , i = e.title || "";
                a.empty().append(i),
                r.empty().append(t),
                n.show(),
                _r_()
            },
            close: function() {
                _i_("3da:ee4dcd7b"),
                n.hide(),
                _r_()
            }
        })
    }(),
    _r_()
}),
function() {
    _i_("3da:a2224bb4");
    var u = B.require("jquery")
      , t = {
        fontchange: !1,
        init: function() {
            _i_("3da:15ba4436");
            var n = this;
            booking.env.b_can_acc_bp_auth_lightbox || u("#login_redesign").click(function() {
                return _i_("3da:74057c0f"),
                u(this).hasClass("no_arrow") || (u(this).hasClass("login_opened") ? u(this).removeClass("login_opened") : u(this).addClass("login_opened"),
                u("#login-form_wrapper fieldset").toggle()),
                _r_(!1)
            }),
            u(".stay_login").submit(function() {
                _i_("3da:00103c9e");
                var e = booking.require("ga-tracker");
                e.userProfileTracker && e.trackEvent(e.userProfileTracker, "Login attempt : Header", booking.env.b_action),
                u("#foldout_error").hide(),
                u("#login_loading").show();
                var t = document.getElementById("username_input_top").value;
                if ("" == t)
                    return n.hideLoader(),
                    u('label[for="username_input_top"]').css({
                        color: "#B30000",
                        "font-weight": "bold"
                    }),
                    u("#username_input_top").focus(),
                    _r_(!1);
                if (/^[0-9[\.]+$/.exec(t)) {
                    var i = u("#bm_log").val();
                    i += i.indexOf(!1) ? "&" : "?",
                    i += "pincode=" + u("#password_input_top", this).val() + "&bn=" + t,
                    u("#tar_tmpl").attr("value", ""),
                    u(this).attr("action", i),
                    u(this).attr("target", "_top")
                }
                setTimeout(function() {
                    _i_("3da:5abe93d3"),
                    n.hideLoader(),
                    _r_()
                }, 1e4),
                _r_()
            }),
            u("#signup_form_regular,#sign_up_form").submit(function() {
                if (_i_("3da:b8794f1d"),
                !n.validateLoginSubmitData({
                    formId: this.id
                }))
                    return _r_(!1);
                _r_()
            }),
            u(window).bind("beforeunload", function() {
                _i_("3da:c47f4006"),
                u("iframe[name=log_tar]").each(function() {
                    _i_("3da:01fcf54a");
                    var e = u(this).parent();
                    u(this).remove().attr("src", "about:blank").appendTo(e),
                    _r_()
                }),
                _r_()
            }),
            _r_()
        },
        validateLoginSubmitData: function(e) {
            _i_("3da:5967126b");
            var t, i, n, a, r, o, _, s = u("#" + e.formId);
            if (r = s.parents(".user_login_form"),
            o = u(".user_login_error_msg", r),
            e.loginIsBookingNr && (_ = (_ = u(".user_bn_login_input", s).val()).replace(/\./g, ""),
            u(".user_bn_login_input", s).val(_),
            !_.length || !/^\d+$/g.test(_)))
                return this.displayLoginErrorMsg({
                    errorTarget: o,
                    errorMsg: 0 === _.length ? booking.env.b_blank_bkng_nr : booking.env.b_bkng_nr_must_be_numeric
                }),
                _r_(!1);
            if (!(i = u(".password_input", s)).length)
                return _r_(1);
            if (t = i.val(),
            e.passwordIsNumeric || o.length && r.hasClass("user_login_single_signup") || u(".userlogin_signup_tab", r).hasClass("active")) {
                if (n = t && t.length ? t.length : 0,
                e.passwordIsNumeric) {
                    if (!n || !/^\d+$/g.test(t))
                        return this.displayLoginErrorMsg({
                            errorTarget: o,
                            errorMsg: 0 === n ? booking.env.b_blank_numeric_pin : booking.env.b_password_must_be_numeric
                        }),
                        _r_(!1)
                } else {
                    if (n < 8)
                        return this.displayLoginErrorMsg({
                            errorTarget: o,
                            errorMsg: booking.env[n ? "password_needs_8" : "account_error_add_password"]
                        }),
                        _r_(!1);
                    if ((a = u(".username_input", s)).length && a.val() && a.val() === t)
                        return this.displayLoginErrorMsg({
                            errorTarget: o,
                            errorMsg: booking.env.password_cant_be_username
                        }),
                        _r_(!1)
                }
                return _r_(!0)
            }
            _r_()
        },
        displayLoginErrorMsg: function(e) {
            if (_i_("3da:3e6a8083"),
            !e || !e.errorTarget || !e.errorMsg)
                return _r_();
            e.errorTarget.show().text(e.errorMsg),
            _r_()
        },
        reCall: function(e) {
            _i_("3da:7f68f0b1");
            var t = this;
            if (e.reload && (booking.env.b_req_login = "1"),
            "OK" == e.loginstatus)
                if (e.userlanguage || e.currency) {
                    var i = booking.env.b_this_url
                      , n = 0 < i.indexOf("?") ? "&" : "?";
                    e.userlanguage && (i += n + "lang=" + e.userlanguage,
                    n = "&"),
                    e.currency && (i += n + "selected_currency=" + e.currency),
                    i.replace("logout=1", ""),
                    document.location.href = i
                } else if (booking.env.b_redirect)
                    document.location.href = booking.env.b_redirect;
                else if ("1" == booking.env.b_req_login) {
                    var a = booking.env.b_this_url;
                    a.replace("logout=1", ""),
                    document.location.href = a
                } else {
                    var r = booking.env.b_this_url;
                    if (r.replace("logout=1", ""),
                    r = 0 < r.indexOf("?") ? r + ";logout=1" : r + "?logout=1",
                    u("#login-form_wrapper fieldset").hide(),
                    u(".welcome_login_link").hide(),
                    booking.env.is_user_wishlists) {
                        u("#search_tab_favourite").hide(),
                        u("#search_tab_wishlists").show(),
                        booking.env.is_user_wishlists_for_all && (u("#wishlist_modal_user_access").hide(),
                        u("#wishlist_modal_content").show(),
                        booking.lightbox.rePosition(),
                        booking.env.b_user_has_imported_faves && u("#search_tab_wishlists").find(".user_imported_faves_new").show());
                        var o = booking.env.b_hotel_id;
                        u.get("/wishlist/get", {
                            hotel_id: o,
                            aid: booking.env.b_aid,
                            lang: booking.env.b_lang_for_url,
                            sid: booking.env.b_sid,
                            stype: booking.env.b_site_type_id
                        }, function(e) {
                            if (_i_("3da:1b6fe08c"),
                            e && e.success && e.lists && e.lists.length) {
                                for (var t, i = "", n = "", a = 0, r = e.lists.length; a < r; a++)
                                    i += '<li><label><input type="checkbox" id="wl_' + (t = e.lists[a]).id + '" value="wl_' + t.id + '"' + (1 == t.selected ? 'checked="checked"' : "") + " />" + t.name + "</label></li>",
                                    n += '<li><a href="' + booking.env.new_wishlist_url + t.id + '"><span>' + t.name + "</span></a></li>";
                                u("#wl_list").html(i),
                                u("#search_tab_wishlists_content .menu_wishlists").html(n),
                                u(".wl_list_box").addClass("scrolling_list")
                            }
                            _r_()
                        })
                    } else
                        u("#search_tab_favourite").show(),
                        u("#search_tab_wishlists").hide(),
                        booking.lightbox.hide();
                    if (u("#login_redesign").length) {
                        var _ = u("#login_redesign").get(0);
                        u(_).addClass("no_arrow"),
                        u(_).mouseover(function() {
                            return _i_("3da:c85fe122"),
                            _r_(!1)
                        }),
                        u(_.parentNode).mouseover(function() {
                            return _i_("3da:c85fe1221"),
                            _r_(!1)
                        })
                    }
                    setTimeout(function() {
                        _i_("3da:4ecfb90f"),
                        u("#password_input_top").val(""),
                        e.avatarurl && "0" != e.avatarurl ? u(".my_image img").length && u(".my_image img").each(function() {
                            _i_("3da:5c5e01b5"),
                            u(this).attr("src", e.avatarurl),
                            u(".head_firstname").length && u(this).css({
                                "margin-top": "-5px",
                                width: "26px",
                                height: "26px"
                            }),
                            _r_()
                        }) : 0 != e.defaultavatar && u(".my_image img").length && (u(".my_image img").addClass("def_avtr"),
                        u(".my_image img").addClass("t_s_avtr_" + e.defaultavatar),
                        u(".my_image img").css({
                            "margin-top": "-4px",
                            "margin-left": "-1px",
                            width: "24px",
                            height: "24px"
                        })),
                        setTimeout(function() {
                            _i_("3da:151fed10"),
                            t.preShowMenu(),
                            _r_()
                        }, 100),
                        u("#b_header").length || void 0 !== u.noticeAdd && e.growl1 && e.growl2 && u.noticeAdd({
                            text: "\n \n \n " + unescape(e.growl1) + "<br>" + unescape(e.growl2) + " \n \n \n ",
                            textLabel: "user_login_notice",
                            stay: !1,
                            stayTime: 3e3,
                            type: "users",
                            close: "all",
                            destination: "",
                            addClassName: "notice_login"
                        }),
                        _r_()
                    }, 500),
                    "" != e.email && (u("#email_confirm").length && "" == u("#email_confirm").val() && (u("#email_confirm").val(e.email),
                    u("#error_email_confirm").hide(),
                    u("#label_email_confirm").removeClass("val-no").addClass("val-yes")),
                    u("#email").length && "" == u("#email").val() && (u("#email").val(e.email),
                    u("#error_email").hide(),
                    u("#label_email").removeClass("val-no").addClass("val-yes"))),
                    e.fdata1 && u("#address1").length && "" == u("#address1").val() && u("#address1").val(e.fdata1),
                    e.fdata2 && u("#city").length && "" == u("#city").val() && u("#city").val(e.fdata2),
                    e.fdata3 && u("#zip").length && "" == u("#zip").val() && u("#zip").val(e.fdata3),
                    e.fdata4 && u("#cc1").length && "" == u("#cc1").val() && u("#cc1").val(e.fdata4),
                    e.fdata5 && u("#phone").length && "" == u("#phone").val() && u("#phone").val(e.fdata5);
                    var s = " ";
                    if (e.fdata6 && (u("#lastname").length && "" == u("#lastname").val() && (u("#lastname").val(e.fdata6),
                    u("#error_lastname").hide(),
                    u("#label_lastname").removeClass("val-no").addClass("val-yes")),
                    u(".head_lastname").text(e.fdata6),
                    s = e.fdata6),
                    e.fdata7 ? (u("#firstname").length && "" == u("#firstname").val() && (u("#firstname").val(e.fdata7),
                    u("#error_firstname").hide(),
                    u("#label_firstname").removeClass("val-no").addClass("val-yes")),
                    u(".head_firstname").text(e.fdata7),
                    s = e.fdata7 + " " + s) : e.fdata6 && u(".head_firstname").text(""),
                    u(".login_for_name").length && " " != s && (u(".login_for_name").val(s),
                    u(".login_for_name").css({
                        color: "#003580"
                    })),
                    u("input[name='username']").val(e.email),
                    booking.lightbox && booking.lightbox.isopen && booking.lightbox.close(),
                    B.require("login/new-personal-menu").closeSelect(null, !0),
                    0 < e.has_stored_cc) {
                        var d = booking.env.b_this_url;
                        d = d.replace(";logout=1", ""),
                        d += ";tmpl=profile/creditcards_ajax;",
                        u("#bs3_cc_form #book_credit_card").load(d + " #book_credit_card"),
                        u("#cc_img").remove()
                    }
                    u("#multiple_login").hide(),
                    t.hideLoader()
                }
            else {
                if (e.error)
                    var c = unescape(e.error);
                else
                    c = "";
                var l = !e.nofoldout;
                setTimeout(function() {
                    if (_i_("3da:ad980d95"),
                    l) {
                        if (B.env.b_is_tdot_traffic) {
                            u("#foldout_error").html(c);
                            var e = u(".forgot_link_look").text()
                              , t = u(".forgot_link_look").attr("data-href");
                            u(".forgot_pass_trigger").attr("href", t).attr("data-href", t).text(e),
                            u("#foldout_error").show()
                        } else
                            u("#foldout_error").html(c).show();
                        B.require("login/new-personal-menu").openSelect("current_account")
                    } else
                        u("#bs2_page_login_error").length && u("#bs2_page_login_error").html(c).show();
                    _r_()
                }, 500),
                t.hideLoader()
            }
            _r_()
        },
        hideLoader: function() {
            _i_("3da:50dd539c"),
            u("#login_loading").hide(),
            u("#page_login_loading").hide(),
            _r_()
        },
        preShowMenu: function() {
            _i_("3da:6b77da00");
            var e = this;
            "book" == booking.env.b_action && "1" != booking.env.is_exp_user_center_bar || (B.require("login/new-personal-menu").openSelect("current_account"),
            e.moused_menu = !1,
            u("#current_account").mouseenter(function() {
                _i_("3da:07768f4a"),
                e.moused_menu = !0,
                _r_()
            }),
            setTimeout(function() {
                _i_("3da:68eca157"),
                e.moused_menu || B.require("login/new-personal-menu").closeSelect(),
                _r_()
            }, 4e3)),
            _r_()
        }
    };
    B.when({
        events: "ready"
    }).run(function(e) {
        _i_("3da:6e2758be"),
        t.init(),
        _r_()
    }),
    B.define("login/new-personal-menu", function(e, t, i) {
        _i_("3da:4ecd1e15"),
        i.exports = {
            opening_state: 0,
            cur_open: "",
            max_select_height: 240,
            init: function() {
                _i_("3da:2774ff07");
                var n = this;
                "1" == booking.env.is_user_center_bar || (u(".select_box").mouseenter(function() {
                    _i_("3da:626cf434"),
                    u(this).addClass("sel_hover"),
                    _r_()
                }),
                u(".select_box").mouseleave(function() {
                    _i_("3da:c436d0d7"),
                    u(this).removeClass("sel_hover"),
                    _r_()
                })),
                u("body").click(function(e) {
                    if (_i_("3da:d580edda"),
                    2 == n.opening_state) {
                        var t = u(e.target);
                        u(t).length && n.closeSelect()
                    }
                    if (booking.maps && booking.maps.map_opened && (!booking.maps.is_sr || !booking.map.mapHasBeenDragged)) {
                        var i = u(e.target);
                        !booking.maps.is_hp && !booking.maps.is_sr || !i.length || i.is("#b_map_container") || i.parents("#b_map_container,#sr_map").length || "close_map" === i.attr("id") || /gstatic/.test(i.attr("src")) || (0 < u("#close_map").length ? u("#close_map").click() : 0 < u("#close_map_lightbox").length && u("#close_map_lightbox").click())
                    }
                    _r_()
                }),
                u(".select_box").click(function(e) {
                    _i_("3da:13f43ab3"),
                    0 == n.opening_state ? n.openSelect(u(this).attr("id")) : n.cur_open != u(this).attr("id") ? n.closeSelect(u(this).attr("id")) : n.closeSelect(),
                    _r_()
                }),
                _r_()
            },
            openSelect: function(e) {
                if ((_i_("3da:2346539a"),
                booking.env.b_is_tdot_traffic) && "show-auth-lightbox" === u("#" + e).attr("data-command"))
                    return _r_();
                if ("1" != booking.env.is_user_center_bar || booking.env.b_is_tdot_traffic) {
                    var i = this;
                    if ("login_redesign" === e && booking.env.b_can_acc_bp_auth_lightbox)
                        return _r_();
                    this.cur_open = e;
                    var t, n = u("#" + e + "_foldout");
                    u("#" + e).addClass("sel_open"),
                    this.opening_state = 1,
                    n.css({
                        display: "block",
                        opacity: "0",
                        overflow: "hidden",
                        height: "400px",
                        width: "200px"
                    }),
                    (t = u(u(".select_foldout_wrap", n).get(0))).css({
                        "overflow-y": "hidden",
                        height: "auto"
                    });
                    var a = t.height()
                      , r = t.width()
                      , o = this.max_select_height;
                    if (n.hasClass("flex_foldout"))
                        var _ = r + 10;
                    else if (u("#" + e).hasClass("sel_done"))
                        _ = r;
                    else {
                        var _ = r + 20;
                        u("#" + e).addClass("sel_done")
                    }
                    a >= this.max_select_height - 10 ? n.hasClass("flex_foldout") ? (o = a + 10) < 300 && (o = 300) : (t.css({
                        "overflow-y": "scroll",
                        height: "230px",
                        width: _ + "px"
                    }),
                    _ += 10) : (o = a + 10,
                    t.css({
                        "overflow-y": "hidden",
                        height: "auto"
                    })),
                    n.css({
                        opacity: "1",
                        height: "0px",
                        width: "auto"
                    }),
                    n.hasClass("left_foldout") && !booking.env.rtl ? n.css({
                        width: _ + "px",
                        "padding-right": "0px"
                    }) : n.css({
                        width: _ + "px",
                        "padding-right": "10px",
                        left: "0"
                    }),
                    n.css({
                        height: o + "px"
                    }),
                    setTimeout(function() {
                        _i_("3da:688b950e"),
                        i.opening_state = 2,
                        _r_()
                    }, 200),
                    booking.env.b_is_ipad && u("body").bind("touchstart", function(e) {
                        if (_i_("3da:f581b48b"),
                        2 == i.opening_state) {
                            var t = u(e.target);
                            u(t).length && !u(t).is("#current_account") && (u(t).parents("#login_redesign") || (i.closeSelect(),
                            u(this).unbind(e)))
                        }
                        _r_()
                    })
                } else
                    ;_r_()
            },
            closeSelect: function(e, t) {
                _i_("3da:c0a78e46");
                var i = this;
                t && (u("#foldout_login").css({
                    display: "none"
                }),
                u("#multiple_login").css({
                    display: "none"
                }),
                u("#foldout_loggedin").css({
                    display: "block"
                })),
                2 == this.opening_state && (u(".select_foldout").animate({
                    height: "0px"
                }, 200, function() {
                    _i_("3da:bf7c13dc"),
                    u(".select_foldout").css({
                        display: "none"
                    }),
                    u(".select_box").removeClass("sel_open"),
                    e && null != e && i.openSelect(e),
                    _r_()
                }),
                this.opening_state = 0),
                _r_()
            },
            hideLoader: function() {
                _i_("3da:57011a30"),
                u("#login_loading").hide(),
                u("#page_login_loading").hide(),
                _r_()
            },
            setOpeningState: function(e) {
                _i_("3da:f3921c77"),
                this.opening_state = e,
                _r_()
            }
        },
        _r_()
    }),
    B.when({
        events: "ready"
    }).require(["login/new-personal-menu"], function(e) {
        _i_("3da:32053b3e"),
        e.init(),
        _r_()
    }),
    _r_()
}(),
_i_("3da:9ce73f89"),
B.when({
    events: "ready"
}).run(function() {
    _i_("3da:669402cb");
    var i = $(window);
    function n() {
        _i_("3da:5fa9e59a"),
        $("body").unbind("click.resize_partners"),
        window.moveTo(0, 0),
        $(window).trigger("resize"),
        _r_()
    }
    "login_mini" !== B.env.b_action && function() {
        if (_i_("3da:5ab5194d"),
        null == window.opener)
            return _r_();
        if (screen.width <= i.width())
            return _r_();
        var e = "404815" == booking.env.b_partner_id
          , t = i.width() < .9 * screen.width;
        e ? t && $("body").bind("click.resize_partners", function(e) {
            if (_i_("3da:0f7e90c2"),
            e && e.target && $(e.target).hasClass("no-trigger-resize"))
                return _r_();
            window.resizeTo(.95 * screen.width, .95 * screen.height),
            n(),
            _r_()
        }) : $("body").bind("click.resize_partners", function(e) {
            if (_i_("3da:12f5736d"),
            e && e.target && $(e.target).hasClass("no-trigger-resize"))
                return _r_();
            window.resizeTo(screen.width, screen.height),
            n(),
            _r_()
        }),
        _r_()
    }(),
    _r_()
}),
_r_(),
window.addEventListener("load", function() {
    _i_("3da:1dbd5e7b"),
    $("#self_change1 .messageBox").click(function(e) {
        _i_("3da:117d4096");
        var t = $(this).children("a").attr("href");
        return t && "#" != t && !/(?:\b)tmpl[\=]docs[\\\/]customer_service(?:\b)/i.test(t) && (location.href = $(this).children("a").attr("href")),
        _r_(!1)
    }),
    $("#isDifferent").fadeIn(),
    _r_()
}),
booking.newsLanding = function() {
    _i_("3da:0a1c6624");
    return _r_({
        init: function() {
            _i_("3da:7ce6aaa9"),
            $(document).on("focus", ".location_dropdowns select", function() {
                _i_("3da:21f2357b");
                var e = $(this).find(":selected").text();
                $(this).attr("oldValue", e),
                _r_()
            });
            var r = booking.require("ga-tracker");
            $(".location_dropdowns select").change(function() {
                _i_("3da:be229d0c");
                var e, t = $(this).attr("id"), i = $(this).find(":selected").val(), n = $(this).find(":selected").text(), a = $(this).attr("oldValue");
                0 < i.length ? "fd_title_countryname" == t ? e = booking.env.b_lang + " | Countries | " + n : "fd_title_regionname" == t ? e = booking.env.b_lang + " | Regions | " + n : "fd_title_cityname" == t && (e = booking.env.b_lang + " | Cities | " + n) : "fd_title_countryname" == t ? e = booking.env.b_lang + " | Countries Remove | " + a : "fd_title_regionname" == t ? e = booking.env.b_lang + " | Regions Remove | " + a : "fd_title_cityname" == t && (e = booking.env.b_lang + " | Cities Remove | " + a),
                r.trackEvent(r.clickTracker, "Dealfinder", e),
                this.form.submit(),
                _r_()
            }),
            $("#b_sortbox select").change(function() {
                _i_("3da:a86b3aa3"),
                r.trackEvent(r.clickTracker, "Dealfinder", "df_dropdown_sorting"),
                this.form.submit(),
                _r_()
            }),
            $("#checkin-flexible-form").submit(function() {
                _i_("3da:83921a18");
                var e, t = $("#b_fd_checkin_date").val(), i = $("#fd_flex").attr("checked");
                e = "undefined" != t ? i ? booking.env.b_lang + " | Date Select | Flexible" : booking.env.b_lang + " | Date Select" : booking.env.b_lang + " | Date Remove | ",
                r.trackEvent(r.clickTracker, "Dealfinder", e),
                _r_()
            }),
            _r_()
        }
    })
}(),
B.when({
    events: "ready"
}).run(function(e) {
    if (_i_("3da:f6f556e6"),
    $(".subscriptionbox").click(function() {
        return _i_("3da:99b064d4"),
        booking.lightbox.show($("#subsciber_firstname_lightbox"), {
            customWrapperClassName: "subscribername-lightbox"
        }),
        _r_(!1)
    }),
    booking.env.b_show_newsletter_popup && booking.lightbox.show($("#subsciber_firstname_lightbox"), {
        customWrapperClassName: "subscribername-lightbox"
    }),
    booking.env.b_show_solicitation_popup) {
        if (booking.env.b_show_success_popup_content)
            return booking.lightbox.show($("#solicitation_feedback_success"), {
                customWrapperClassName: "solicitation-lightbox"
            }),
            _r_(!1);
        if (booking.env.b_show_error_popup_content)
            return booking.lightbox.show($("#solicitation_feedback_error"), {
                customWrapperClassName: "solicitation-lightbox"
            }),
            _r_(!1)
    }
    _r_()
}),
function() {
    _i_("3da:76ebeeec");
    var t = function() {
        _i_("3da:099c6335"),
        $(".country_flag a").click(function(e) {
            _i_("3da:af857d33");
            var t = $(this).parents("div.country_block");
            $("div.aaa:eq(0)", t).is(":visible") ? $("div.aaa", t).hide() : $("div.aaa", t).show(),
            e.preventDefault(),
            _r_()
        }),
        $(".gcityname a").click(function(e) {
            _i_("3da:951918f2");
            var t = $(this).parents("div.office");
            $("div.bbb:eq(0)", t).is(":visible") ? $("div.bbb", t).hide() : $("div.bbb", t).show(),
            e.preventDefault(),
            _r_()
        }),
        _r_()
    };
    B.when({
        events: "ready"
    }).run(function(e) {
        _i_("3da:9e225cfd"),
        t(),
        _r_()
    }),
    _r_()
}(),
B.when({
    events: "ready"
}).require(["jquery"], function(d) {
    _i_("3da:463e51d1");
    var i = !1
      , n = 240
      , a = 0
      , r = 28
      , c = "g-hidden";
    function e(e) {
        _i_("3da:e2aec216");
        var t = d(e.target).closest(".resend-conf");
        return t.closest(".popover_content--has-footer").length && (_i_("3da:26e39bbc"),
        i || (i = !0,
        n = d(".popover_content--has-footer").outerHeight(),
        d(".popover_content--has-footer").css("min-height", n),
        d(".resend-conf").addClass("resend-conf--absolute")),
        _r_()),
        a = a || t.find(".resend-conf__step--invite").outerHeight(),
        n = booking.env.b_is_tdot_traffic ? n + 100 : n,
        t.addClass("resend-conf--active"),
        t.animate({
            height: n - r
        }, 250),
        t.find(".resend-conf__step").addClass(c),
        t.find(".resend-conf__step--form").removeClass(c),
        _r_(!1)
    }
    function t(e) {
        _i_("3da:7f80c1b6");
        var t = d(e.target).closest(".resend-conf");
        return t.removeClass("resend-conf--active"),
        t.find(".resend-conf__step").addClass(c),
        t.find(".resend-conf__step--invite").removeClass(c),
        t.animate({
            height: a
        }, 250),
        _r_(!1)
    }
    function o(e) {
        _i_("3da:9d31e74a"),
        d(".bn-pin-form .invalid-input").length && d(".bn-pin-form .invalid-input").each(function(e) {
            _i_("3da:e50f0161"),
            d(this).removeClass("invalid-input"),
            _r_()
        });
        var i, t, n, a = d(e.target), r = a.closest(".resend-conf"), o = a.is("form") ? a : a.closest(".resend-conf-form"), _ = r.find(".resend-conf-form__send"), s = o.attr("action");
        if (e.preventDefault(),
        _.is(".disabled"))
            return _r_(!1);
        if ("" == o.find("input[name=email]").val() || !o.find("input[name=email]").val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
            return o.find("input[name=email]").addClass("invalid-input"),
            o.find(".resend-conf-form__error").removeClass(c),
            _r_(!1);
        o.find("input[name=email]").removeClass("invalid-input"),
        o.find(".resend-conf-form__error").addClass(c),
        _.addClass("disabled"),
        i = o.find('input[name="email"]').val(),
        (n = o.serialize()) && (n = n.replace(/[\?&]email=[^&]+/, "")),
        t = s + "?utoken=" + btoa(unescape(encodeURIComponent(i))) + "&" + n,
        d.ajax({
            url: t,
            dataType: "jsonp",
            jsonpCallback: "booking_cb_" + Date.now(),
            success: function() {
                var e, t;
                _i_("3da:34548650"),
                e = r,
                t = i,
                _i_("3da:69ee1d2f"),
                e.find(".resend-conf__step").addClass(c),
                e.find(".resend-conf__step--success").removeClass(c),
                e.find(".resend-conf__success__email").text(t),
                _r_(),
                function(e) {
                    _i_("3da:4ed88968");
                    var t = e.find(".resend-conf-form");
                    t.length && t[0].reset();
                    e.find(".resend-conf-form input[name=email]").removeClass("invalid-input"),
                    e.find(".resend-conf-form .resend-conf-form__error").addClass(c),
                    e.find(".resend-conf-form__send").removeClass("disabled"),
                    _r_()
                }(r),
                _r_()
            },
            error: function() {
                var e;
                _i_("3da:1faf22a7"),
                e = r,
                _i_("3da:c6810eaf"),
                e.find(".resend-conf__step").addClass(c),
                e.find(".resend-conf__step--error").removeClass(c),
                e.find(".resend-conf-form__send").removeClass("disabled"),
                _r_(),
                _r_()
            }
        }),
        _r_()
    }
    function _(e) {
        _i_("3da:bf365df1");
        var t = d(".invalid-input");
        t.length && t.each(function() {
            _i_("3da:eb4b7a13"),
            d(this).removeClass("invalid-input"),
            _r_()
        });
        var i = !0
          , n = d(e.target)
          , a = n.is("form") ? n : n.closest(".bn-pin-form")
          , r = a.find("input[name=bn]")
          , o = a.find("input[name=pincode]");
        if (r.length && "" === r.val() && (r.addClass("invalid-input"),
        i = !1),
        o.length && "" === o.val() && (o.addClass("invalid-input"),
        i = !1),
        !1 === i)
            return _r_(!1);
        _r_()
    }
    _i_("3da:8b4513b2"),
    d("body").delegate(".js-btn--invite-to-resend, .js-btn--repeat", "click", e),
    d("body").delegate(".js-btn--close", "click", t),
    d("body").delegate(".resend-conf-form", "submit", o),
    d("body").delegate(".bn-pin-form", "submit", _),
    _r_(),
    _r_()
}),
function() {
    _i_("3da:129449b8");
    var i = B.require("jquery")
      , t = function() {
        _i_("3da:40454ed8");
        var e = ["#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip "].join(",")
          , t = ["status=1", "toolbar=0", "menubar=0", "width=450", "height=550", "scrollbars=1"].join(",");
        return i(document).on("click", e, function() {
            return _i_("3da:db791d08"),
            window.open(this.href, "RateGuarantee", t),
            _r_(!1)
        }),
        _r_(!0)
    };
    B.when({
        events: "ready"
    }).run(function(e) {
        _i_("3da:97f7750d"),
        t(),
        _r_()
    }),
    _r_()
}(),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:7d2f1ad5"),
    $(".disambBlockHeader").click(function() {
        _i_("3da:85142140");
        var e = $(this)
          , t = $("#" + e.attr("data-results"));
        return t.hasClass("disambBlockShown") ? t.slideUp().removeClass("disambBlockShown") : t.slideDown().addClass("disambBlockShown"),
        _r_(!1)
    }),
    _r_()
}),
B.Search.tracker = {
    track: function(e, t, i) {
        _i_("3da:60b1dcfe");
        var n = ["Searchbox", B.env.b_action, "[" + e + "] " + t, i]
          , a = B.require("ga-tracker");
        a.trackEvent.apply(a, n),
        _r_()
    },
    trackError: function(e) {},
    trackEvent: function(e) {
        return _i_("3da:a4507e67"),
        _r_(this.track("interaction", e))
    }
},
function() {
    _i_("3da:ee96a6c3");
    var t = function() {
        _i_("3da:e40c7c70");
        var m = B.require("jquery")
          , e = m("#newsletter_to", ".footerForm")
          , t = e.attr("value");
        e.click(function() {
            _i_("3da:a55e2c76");
            var e = m(this);
            m("dl #newsletter_to").removeClass("error"),
            e.val() === t ? e.val("") : e.select(),
            _r_()
        }),
        e.blur(function() {
            _i_("3da:b3b66680");
            var e = m(this);
            "" === e.val() && e.val(t),
            _r_()
        }),
        m(".signupForm").submit(function(e) {
            _i_("3da:5cca7487"),
            e.preventDefault(),
            m(".newsletter_ajax_error").hide();
            var t, i = booking.env, n = m(this), a = m("input[name=url]", n).val(), r = m("input[name=hostname]", n).val(), o = m("input[name=aid]", n).val(), _ = m("input[name=companyname]", n).val(), s = m("input[name=subscribe_source]", n).val(), d = m("input[name=subscribe_notification]", n).val(), c = m("input[name=dest_id]", n).val(), l = m("input[name=dest_type]", n).val(), u = m("input[name=to]", n).val(), f = m("input[name=get_the_app]", n).is(":checked"), h = m("input[name=incentive_popup_campaign_id]", n).val(), p = m("input[name=incentive_popup_share_link]", n).val();
            if ("" === u || !/^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/.test(u))
                return m(this).find(".nl_inputfield_track").addClass("error"),
                m(".newsletter_subscribe_error_invalid", n).show(),
                _r_(!1);
            t = "to=" + (u = encodeURIComponent(u)) + "&url=" + a + "&hostname=" + r + "&aid=" + o + "&companyname=" + _ + "&subscribe_source=" + s,
            "" !== d && (t = t + "&subscribe_notification=" + d),
            "" != c && (t = t + "&dest_id=" + c),
            "" != l && (t = t + "&dest_type=" + l),
            !0 === f && (t += "&get_the_app=1"),
            h && (t = t + "&incentive_popup_campaign_id=" + h),
            p && (t = t + "&incentive_popup_share_link=" + p),
            m(".newsletter_sub_preloader", n).show(),
            m.ajax({
                type: "POST",
                url: "/newslettersubscribe.json",
                data: t,
                dataType: "json",
                success: function(e) {
                    if (_i_("3da:c8f3be95"),
                    m(".newsletter_sub_preloader", n).hide(),
                    0 === e.success)
                        return "denied" === e.error ? m("form").hasClass("unsubHero-action") ? (m("form.unsubHero-action").addClass("error"),
                        m(".unsubHero-form .blurb .error").show()) : (m(this).find(".nl_inputfield_track").addClass("error"),
                        m(".newsletter_subscribe_error_denied", n).show(),
                        m(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide()) : "bad_params" === e.error && (m("form").hasClass("unsubHero-action") ? (m("form.unsubHero-action").addClass("error"),
                        m(".unsubHero-form .blurb .error").show()) : (m(".nl_inputfield_track").addClass("error"),
                        m(".newsletter_subscribe_error_bad_unknown", n).show(),
                        m(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide())),
                        _r_();
                    if (1 === e.success)
                        if (m("div#flashdealsbg_wrapper").length)
                            window.location.href = i.b_nonsecure_hostname_signup + i.b_fd_searchresults_url_signup;
                        else if (m("form").hasClass("unsubHero-action"))
                            m("form.unsubHero-action, .unsubHero-form .blurb, .unsubHero-benefits, .unsubHero-tagline").hide(),
                            m(".unsubHero-form .success-blurb, .b_unsubscribe_user .b_unsubscribe_user").show(),
                            m(".unsubDesc strong").replaceWith("<strong>" + u + "</strong>"),
                            m(".unsubHero-form").addClass("success"),
                            m("body").hasClass("unsub_hero_thanks") || m("html, body").animate({
                                scrollTop: m(".unsubHero-form").offset().top
                            }, 750),
                            m("input[value='subscribe_flash_deals'], input[value='subscribe_cityspecial']").attr("checked", "checked"),
                            m(".feedback.error", ".unsub_messages").hide(),
                            m("input[value='subscribe_genius'], input[value='subscribe_weekly'], input[value='subscribe_sunday_newsletter'], input[value='subscribe_popular']").removeAttr("checked");
                        else if (m(".newsletter_sub_info", n).hide(),
                        m(".newsletter_sub_success", n).show(),
                        m("#add_location_to").val(u),
                        m(".newsletter_form_fields, .newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid", n).hide(),
                        e.has_account) {
                            var t = m("#userdataform form").eq(0);
                            t && t.attr("action", t.attr("data-url-login"))
                        }
                    _r_()
                }
            }),
            _r_()
        }),
        m(".signupWithnameForm").submit(function(e) {
            _i_("3da:c3101671"),
            e.preventDefault(),
            m(".feedback_msg").each(function() {
                _i_("3da:0ab1aaca"),
                m(this).hide(),
                _r_()
            });
            var t, i = m(this), n = m("input[name=companyname]", i).val(), a = m("input[name=aid]", i).val(), r = m("input[name=subscribe_source]", i).val(), o = m("input[name=email]", i).val(), _ = m("input[name=firstname]", i).val();
            if ("" === o || !/^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/.test(o))
                return m(".newsletter_subscribe_error_invalid", i).show(),
                _r_(!1);
            m('<div class="loader_placer"></div>').appendTo("#sfl_stepOne"),
            t = "to=" + o + "&email=" + o + "&aid=" + a + "&companyname=" + n + "&subscribe_source=" + r,
            m.ajax({
                type: "POST",
                url: "/newslettersubscribe.json",
                data: t,
                dataType: "json",
                success: function(e) {
                    if (_i_("3da:e272ccbe"),
                    0 == e.success)
                        return m(".loader_placer").hide(),
                        "denied" == e.error ? (m(".newsletter_subscribe_error_denied", i).show(),
                        m(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", i).hide()) : "bad_params" != e.error && "unknown" != e.error || (m(".newsletter_subscribe_error_bad_unknown", i).show(),
                        m(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", i).hide()),
                        _r_();
                    if (1 == e.success)
                        if (m(".loader_placer").hide(),
                        m(".uspfield").hide(),
                        m("#sfl_stepOne").hide(),
                        "" == _ || booking.env.b_exclude_lang_firstname)
                            m("#sfl_stepThree").show(),
                            m(".userWithoutFirstname").show();
                        else if (_ = escape(_),
                        1 == e.has_account)
                            m(".firstnameplacer").html(_),
                            m("#sfl_stepThree").show(),
                            m(".userWithAccount").show();
                        else {
                            var t = booking.env.b_signup_iframe_url + "&firstname=" + _ + "&email=" + escape(o);
                            t += "&aid=" + B.env.aid,
                            t += "&label=" + B.env.b_label,
                            m('<iframe border="0" id="sfl_stepTwo" src="' + t + '" width="656" height="320" frameborder="no" scrolling="no"></iframe>').appendTo(".signupWithnameForm")
                        }
                    _r_()
                }
            }),
            _r_()
        }),
        m("#subscriber_account_active").submit(function(e) {
            if (_i_("3da:69fc6c31"),
            m('input[name="mypassword"]').val().length < 1)
                return m(".newsletter_register_error_nopassword").show(),
                _r_(!1);
            m('<input type="hidden" name="password" value="' + m('input[name="myssword"]').val() + '" />').appendTo("#subscriber_account_active"),
            _r_()
        }),
        m(".modal-mask-closeBtn").click(function() {
            return _i_("3da:1135dfc8"),
            _r_(!1)
        }),
        m(".modal-mask").click(function() {
            return _i_("3da:1135dfc81"),
            _r_(!1)
        }),
        _r_()
    };
    B.when({
        events: "ready"
    }).run(function(e) {
        _i_("3da:0ad1c5bd"),
        t(),
        _r_()
    }),
    _r_()
}(),
B.define("component/emk/subscription-entry-point", function(e, t, i) {
    "use strict";
    _i_("3da:c6929f9a");
    var a = e("events")
      , r = e("when")
      , n = e("component");
    i.exports = n.extend({
        init: function() {
            _i_("3da:ab33b331"),
            this.$form = function(e) {
                var t;
                _i_("3da:9e35f10b"),
                e.is("form") ? t = e : (t = e.find("form")) || (t = e.parents("form").first());
                return _r_(t)
            }(this.$el);
            var e = "emk-entrypoint-" + Math.floor(1e4 * Math.random());
            this.uniqueClass = e,
            this.$el.addClass(e),
            this.entryPointLabel = this.$el.data("emk-entry-point-label"),
            this.addEventListeners(),
            _r_()
        },
        addEventListeners: function() {
            _i_("3da:ee26c7cc");
            var n = this
              , e = this.$el.data("emk-entry-point-view-event")
              , t = "." + this.uniqueClass
              , i = function() {
                _i_("3da:db306836"),
                a.trigger("emk:subscription-entry-point-seen", {
                    $el: n.$el,
                    entryPointLabel: n.entryPointLabel
                }),
                _r_()
            };
            e ? a.on(e, function(e) {
                _i_("3da:c026688c"),
                e.$el.find(t) && i(),
                _r_()
            }) : r({
                events: "view " + t
            }).run(i),
            this.$form.on("submit", function(e) {
                var t;
                _i_("3da:17bbc067"),
                e.preventDefault(),
                a.trigger("emk:subscription-entry-point-submitted", {
                    $el: n.$el,
                    entryPointLabel: n.entryPointLabel
                }),
                (t = n.$form,
                _i_("3da:fb13b339"),
                _r_($.ajax({
                    method: t.attr("method"),
                    url: t.attr("action"),
                    dataType: "json",
                    data: t.find("[data-ajax-submit]").serialize()
                }))).then(function(e, t) {
                    _i_("3da:9843bb19"),
                    a.trigger("emk:subscription-success", {
                        $el: n.$el,
                        subscriberId: e.subscriber_id,
                        entryPointLabel: n.entryPointLabel
                    }),
                    _r_()
                }, function(e, t) {
                    _i_("3da:1ce1ebfe");
                    var i = "error";
                    e.responseJSON && e.responseJSON.error && (i = e.responseJSON.error),
                    a.trigger("emk:subscription-error", {
                        $el: n.$el,
                        entryPointLabel: n.entryPointLabel,
                        error: i
                    }),
                    _r_()
                }),
                _r_()
            }),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/emk/subscription-entry-point-feedback-msg", function(e, t, i) {
    "use strict";
    _i_("3da:2e671004");
    var n = e("events")
      , a = e("component")
      , r = {
        submitted: "subscription-submitted",
        success: "subscription-success",
        error: "subscription-error",
        invalid: "subscription-invalid"
    };
    i.exports = a.extend({
        init: function() {
            _i_("3da:3ecb3334"),
            this.addEventListeners(),
            _r_()
        },
        addEventListeners: function() {
            _i_("3da:b693fc3e");
            var t = this;
            n.on("emk:subscription-entry-point-submitted", function(e) {
                _i_("3da:09ae3e92"),
                t.state = "submitted",
                t.render(),
                _r_()
            }),
            n.on("emk:subscription-success", function(e) {
                _i_("3da:3c85a2a5"),
                t.state = "success",
                t.render(),
                _r_()
            }),
            n.on("emk:subscription-error", function(e) {
                _i_("3da:1a83f04b"),
                t.state = "bad_params" == e.error ? "invalid" : "error",
                t.render(),
                _r_()
            }),
            _r_()
        },
        render: function() {
            for (var e in _i_("3da:9b32d96a"),
            r) {
                if (e == this.state)
                    continue;
                this.$el.removeClass(r[e])
            }
            this.$el.addClass(r[this.state]),
            _r_()
        }
    }),
    _r_()
}),
B.when({
    events: "load"
}).run(function(e) {
    _i_("3da:f8d92986");
    var t = e("events")
      , i = e("jquery");
    t.on("emk:subscription-success", function(e) {
        _i_("3da:0453bd57"),
        setTimeout(function() {
            _i_("3da:7a9db314"),
            i("[data-emk-subscription-success-remove]").slideUp(),
            _r_()
        }, 2700),
        _r_()
    }),
    _r_()
}),
B.define("components/emk/ga-tracking", function(t, e, i) {
    _i_("3da:e11da8a9");
    var n = t("ga-tracker")
      , a = "EMK";
    function r(e, t, i) {
        _i_("3da:932c8756"),
        ("main" == t || "both" == t) && n.trackEvent(a, e, i),
        _r_()
    }
    i.exports = {
        addEventListeners: function() {
            _i_("3da:45d68a10");
            var e = t("events");
            e.on("emk:subscription-success", function(e) {
                _i_("3da:8105ee76"),
                r("Subscribe", "both", e.entryPointLabel),
                _r_()
            }),
            e.on("emk:subscription-frequency-submitted", function(e) {
                _i_("3da:674ab66b"),
                r("Select Frequency", "emk", e.frequency),
                "never" == e.frequency && r("Unsubscribe", "both"),
                _r_()
            }),
            e.on("emk:subscription-feedback-submitted", function(e) {
                _i_("3da:427e0d70"),
                r("Unsubscription Feedback", "emk", e.unsubscriptionReason),
                _r_()
            }),
            e.on("emk:unsubscription-auto", function(e) {
                _i_("3da:75fb2eff"),
                r("Unsubscribe"),
                _r_()
            }),
            e.on("emk:subscription-entry-point-seen", function(e) {
                _i_("3da:b849e4e5"),
                r("Entry-Point Seen", "main", e.entryPointLabel),
                _r_()
            }),
            _r_()
        }
    },
    _r_()
}),
B.when({
    events: "load"
}).run(function(e) {
    _i_("3da:708f2567"),
    e("components/emk/ga-tracking").addEventListeners();
    var t = e("jquery")
      , i = e("events")
      , n = t("[data-emk-ga-track-subscription]");
    if (n.length) {
        var a = n.data("emk-subscriber-id")
          , r = n.data("emk-entry-point-label");
        r && a && i.trigger("emk:subscription-success", {
            subscriberId: a,
            entryPointLabel: r
        })
    }
    _r_()
}),
booking.social_plugins_footer = function() {
    _i_("3da:2bf5e2fc");
    return _r_({
        init: function() {
            _i_("3da:f657bd04");
            var e = $("#footer_weibo")
              , t = $("#footer_wechat")
              , i = $("#footer_naver");
            i.hover(function() {
                _i_("3da:e57dcb5d"),
                i.find(".footer_tooltip").stop(!0, !0).fadeIn(),
                _r_()
            }, function() {
                _i_("3da:c029aadb"),
                i.find(".footer_tooltip").stop(!0, !0).fadeOut(),
                _r_()
            }),
            e.hover(function() {
                _i_("3da:439a5e8e"),
                e.find(".footer_tooltip").stop(!0, !0).fadeIn(),
                _r_()
            }, function() {
                _i_("3da:538949e8"),
                e.find(".footer_tooltip").stop(!0, !0).fadeOut(),
                _r_()
            }),
            t.hover(function() {
                _i_("3da:126619b1"),
                t.find(".footer_tooltip").stop(!0, !0).fadeIn(),
                _r_()
            }, function() {
                _i_("3da:aa36a551"),
                t.find(".footer_tooltip").stop(!0, !0).fadeOut(),
                _r_()
            }),
            _r_()
        }
    })
}(),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:dc6895f9"),
    booking.env.social_plugins_footer && booking.social_plugins_footer.init(),
    _r_()
}),
booking.env.Tabs = function(t) {
    _i_("3da:4533640f");
    t = $.extend({
        baseEl: "#newsletter_deals_city",
        menuEl: ".deals_menu",
        contentEl: ".deals_wrapper",
        dealsEl: ".deals",
        navEl: ".nav_menu",
        defaultEl: 1
    }, t);
    $(t.menuEl + " li:nth-child(" + t.defaultEl + ")").addClass("active").show(),
    $(t.contentEl + " ul.deals:nth-child(" + t.defaultEl + ")").show(),
    $("li", t.menuEl).click(function() {
        _i_("3da:6cf92b39"),
        $("li", t.menuEl).removeClass("active"),
        $(this).addClass("active"),
        $(t.dealsEl, t.contentEl).hide();
        var e = $(this).find("a").attr("href");
        return $(e).show(),
        _r_(!1)
    }),
    $(t.contentEl, t.baseEl).show(),
    _r_()
}
,
function(d, e, t, i) {
    "use strict";
    _i_("3da:86fa4e01"),
    d.when({
        condition: "tdot" === d.env.b_site_type,
        events: "ready"
    }).run(function() {
        _i_("3da:5606ff00");
        var e = !d.env.b_is_ipad && d.env.pointer_events_s_r_n_d ? 1 : 0;
        if (!d.env.b_is_ipad && !e)
            return _r_();
        var i, t, n, a, r, o = d.require("jquery"), _ = !1;
        function s(e) {
            if (_i_("3da:3b14d83c"),
            i.isVisibleOverlay() && i.click == e)
                i.distroyOverlay();
            else {
                if (a.data("spinner-loaded") || (a.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'),
                r.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'),
                a.data("spinner-loaded", !0)),
                i.createOverlay(),
                i.click = e,
                o(".milk_menu").hide(),
                o(".b_recentlyviewed").length && o(".b_recentlyviewed").removeClass("rv-content-visible"),
                o("#top_lw_wrapper").hide(),
                "lang" === e && !_) {
                    _ = !0;
                    var t = a.clone();
                    t.find(".t_flag").each(function() {
                        _i_("3da:24cdbe80");
                        var e = o(this)
                          , t = e.data("img")
                          , i = e.data("size");
                        e.append('<img src="' + t + '" width="' + i + '" height="' + i + '" />'),
                        _r_()
                    }),
                    a.html(t.html())
                }
                "lang" === e ? a.show() : "curr" === e && r.show()
            }
            _r_()
        }
        _i_("3da:f08a4c40"),
        i = d.require("t_main_rm_js/ng_last_viewed") || "",
        t = o("#b_nav_language"),
        n = o("#b_nav_currency"),
        a = o("#top_language"),
        r = o("#top_currency"),
        function() {
            _i_("3da:45178ff2"),
            t.on("click", function() {
                _i_("3da:933505ea"),
                s("lang"),
                _r_()
            }),
            n.on("click", function() {
                _i_("3da:94f5c6fd"),
                s("curr"),
                _r_()
            });
            var e = function() {
                _i_("3da:813f6d7d");
                var e = o(this).parent();
                if (e.hasClass("selected"))
                    return i.distroyOverlay(),
                    _r_(!1);
                e.parent().parent().find("li.selected").removeClass("selected"),
                o(".mm_loading").removeClass("mm_loading"),
                e.addClass("mm_loading"),
                _r_()
            };
            a.on("click", "li a", e),
            r.on("click", "li a", e),
            _r_()
        }(),
        _r_(),
        _r_()
    }),
    _r_()
}(window.booking, window, document),
function() {
    _i_("3da:942ac580");
    var a = "OTfdASFNKNMUJBYdFZC";
    B.define("rewrite_tt", function(e, t, i) {
        _i_("3da:af3985ca");
        var m = e("jquery")
          , n = e("et")
          , b = n.track(a);
        i.exports = {
            version: "1.3.1",
            tt: null,
            ttWinHeight: 0,
            ttWinWidth: 0,
            ttScrollTop: 0,
            ttScrollLeft: 0,
            ttShowLeft: !1,
            ttShowTop: !1,
            ttCounter: 0,
            ttShow: null,
            ttContent: "",
            ttCurElem: null,
            ttCurText: "",
            ttCurNode: null,
            ttTimedOut: null,
            ttTimeout: 300,
            ttClass: "basic_tooltip_class js-tooltip-wrap",
            ttHidennodeId: "node_tt_id",
            ttHidennodeAttr: "tt_id",
            ttNodes: [".jq_tooltip", "*[data-title]", ".policy_name_tt"],
            toolTips: {},
            preLoadedImages: {},
            init: function() {
                if (_i_("3da:7c3a7c09"),
                booking.env.disable_b_tooltip)
                    return _r_(!0);
                if (booking.env.b_is_tdot_traffic && "book" === booking.env.b_action)
                    return _r_(!0);
                booking.env.rtl && (this.ttClass += " rtl_tooltip_class");
                var c = this;
                booking.env.b_is_ie7 && (this.ttTimeout = 0),
                this.tt = document.getElementById("tooltip_wrap") || function() {
                    _i_("3da:697d5eb3");
                    var e = document.createElement("div");
                    e.id = "tooltip_wrap",
                    e.setAttribute("role", "tooltip");
                    return document.body.appendChild(e),
                    e.innerHTML = '<div class="tt_shadow"><div class="tt_content"></div></div>',
                    _r_(e)
                }(),
                window.onresize = function() {
                    _i_("3da:ed53e53e"),
                    c.setWindowSize(),
                    _r_()
                }
                ,
                m(window).on("scroll", function() {
                    _i_("3da:a412f28f"),
                    c.setScrollPosition(),
                    _r_()
                }),
                setTimeout(function() {
                    _i_("3da:ffd587cf");
                    var o = c.ttNodes.join(", ");
                    function _(e, t) {
                        _i_("3da:56f778ce");
                        var i = e.pageX || e.clientX + t.ttScrollLeft || 0
                          , n = e.pageY || e.clientY + t.ttScrollTop || 0;
                        return _r_({
                            x: i,
                            y: n
                        })
                    }
                    function s(e) {
                        return _i_("3da:4a148596"),
                        _r_("tooltip" === e.getAttribute("data-component"))
                    }
                    function d(e) {
                        _i_("3da:406fd3bf");
                        var t = m(e).offset();
                        return _r_({
                            x: t.left,
                            y: t.top
                        })
                    }
                    c.ttContent = m(".tt_content", c.tt).length ? m(".tt_content", c.tt).get(0) : c.tt,
                    c.setWindowSize(),
                    c.setScrollPosition(),
                    booking.env.b_is_tdot_traffic && m(document).on("touchstart.ttfix", ".js-tooltip-wrap", function() {
                        _i_("3da:3d183e2d"),
                        c.showHideTooltip(null, 0, 0),
                        _r_()
                    });
                    var e = m("body");
                    if (e.on("mouseleave focusout", o, function(e) {
                        if (_i_("3da:9ccf10f3"),
                        s(this))
                            return _r_();
                        var t = _(e || window.event, this);
                        "focusout" === e.type && (t = d(e.target)),
                        c.showHideTooltip(null, t.x, t.y),
                        _r_()
                    }),
                    e.on("mouseover mousemove focusin", function(e) {
                        _i_("3da:0d42e71a");
                        var t, i = e || window.event, n = m(e.target), a = n.is(o) ? n : n.parents(o).first();
                        if (!a.length)
                            return c.ttCurElem && !m.contains(document, c.ttCurElem) && c.showHideTooltip(null),
                            _r_();
                        if (s(a[0]))
                            return _r_();
                        var r = "focusin" === e.type;
                        t = r ? d(a[0]) : _(i, a[0]),
                        c.showHideTooltip(a[0], t.x, t.y, r),
                        _r_()
                    }),
                    booking.env.b_is_ie8 || booking.env.b_is_ie9) {
                        var t = c.ttNodes.join("[title], ");
                        m(t).each(function() {
                            _i_("3da:0d65dd7d");
                            var e = this.getAttribute("title");
                            this.setAttribute("data-title", e),
                            this.removeAttribute("title"),
                            _r_()
                        })
                    }
                    _r_()
                }, 500),
                _r_()
            },
            showHideTooltip: function(e, t, i, n) {
                if (_i_("3da:a6ef38d8"),
                null == n && (n = !1),
                null !== this.ttShow || null === e)
                    if (e !== this.ttCurElem && null != this.ttCurElem) {
                        if (this.ttShow = null,
                        b && null != this.ttCurNode)
                            m(this.ttCurNode).detach().appendTo(this.getTooltipJar()),
                            this.ttCurNode = null;
                        else
                            this.ttContent && (this.ttContent.innerHTML = "");
                        this.ttCurText = "",
                        this.ttCurElem = null,
                        this.ttShowLeft = !1,
                        this.ttShowTop = !1,
                        this.tt && (this.tt.style.display = "none",
                        this.tt.className = "",
                        this.tt.style.width = "auto")
                    } else {
                        if (this.tt)
                            (_ = this.getPosition(t, i, this.tt)) && 1 < _.length && (this.tt.style.left = _[0] + "px",
                            this.tt.style.top = _[1] + "px")
                    }
                else {
                    var a = this.getTTNode(e);
                    if (null != a) {
                        this.ttShow = e.id;
                        var r = a;
                        if (this.ttCurElem = e,
                        b)
                            this.ttCurNode = r[0],
                            m(this.ttCurNode).detach().appendTo(this.ttContent);
                        else
                            this.ttCurText = r[0],
                            this.ttContent.innerHTML = this.ttCurText;
                        var o = "" != r[1] ? r[1] : this.ttClass;
                        if (r[2] && (this.ttShowLeft = !0),
                        r[5] && (this.ttShowTop = !0),
                        r[4] && (o += " tt_loading",
                        this.preloadImg(e.id)),
                        this.tt && (this.tt.className = o,
                        null != r[3] ? this.tt.style.width = ("function" == typeof r[3] ? r[3].call(this.tt) : r[3]) + "px" : this.tt.style.width = "auto"),
                        r[4] || this.showToolTip(0),
                        this.tt) {
                            var _ = this.getPosition(t, i, this.tt, n, e);
                            this.tt.style.left = _[0] + "px",
                            this.tt.style.top = _[1] + "px"
                        }
                    }
                }
                _r_()
            },
            showToolTip: function(e) {
                _i_("3da:72fd11fc");
                var t = this;
                if (0 != this.ttTimeout) {
                    var i = e < this.ttTimeout ? this.ttTimeout - e : 10;
                    t.showingTooltip && clearTimeout(t.showingTooltip),
                    t.showingTooltip = setTimeout(function() {
                        _i_("3da:49aefe40"),
                        b ? null != t.ttCurNode ? (booking.eventEmitter.trigger("tooltip.show", [t.ttCurElem, t]),
                        t.tt.style.display = "block") : t.showHideTooltip(null, 0, 0) : "" != t.ttCurText ? (booking.eventEmitter.trigger("tooltip.show", [t.ttCurElem, t]),
                        t.tt.style.display = "block") : t.showHideTooltip(null, 0, 0),
                        _r_()
                    }, i)
                } else
                    this.tt && (this.tt.style.display = "block");
                n.stage(a, 1),
                _r_()
            },
            setScrollPosition: function() {
                _i_("3da:75b521ba"),
                "number" == typeof window.pageYOffset ? (this.ttScrollLeft = window.pageXOffset,
                this.ttScrollTop = window.pageYOffset) : document.documentElement && document.documentElement.scrollTop ? (this.ttScrollLeft = document.documentElement.scrollLeft,
                this.ttScrollTop = document.documentElement.scrollTop) : (this.ttScrollLeft = document.body.scrollLeft,
                this.ttScrollTop = document.body.scrollTop),
                _r_()
            },
            setWindowSize: function() {
                _i_("3da:f8ffdf3c"),
                window.innerWidth ? (this.ttWinWidth = window.innerWidth,
                this.ttWinHeight = window.innerHeight) : 0 != document.documentElement.clientWidth ? (this.ttWinWidth = document.documentElement.clientWidth,
                this.ttWinHeight = document.documentElement.clientHeight) : (this.ttWinWidth = document.body.clientWidth,
                this.ttWinHeight = document.body.clientHeight),
                _r_()
            },
            getTTNode: function(e) {
                _i_("3da:cd0bbbbd");
                var t, i = m(e);
                if (!i.attr("data-resized")) {
                    if (e.id)
                        var n = e.id;
                    else {
                        this.ttCounter++;
                        n = "b_tt_holder_" + this.ttCounter;
                        e.id = n
                    }
                    if (this.toolTips[n])
                        return _r_(this.toolTips[n]);
                    if (i.attr("data-" + this.ttHidennodeId) && m("#" + i.attr("data-" + this.ttHidennodeId)).length)
                        var a = m("#" + i.attr("data-" + this.ttHidennodeId)).html();
                    else if (i.data(this.ttHidennodeId) && (t = m("[data-" + this.ttHidennodeAttr + "=" + i.data(this.ttHidennodeId) + "]")) && t.length)
                        a = t.first().html();
                    else if (i.hasClass("policy_name_tt"))
                        a = i.siblings(".differing_policies").html();
                    else if (i.hasClass("fleximeter_tt"))
                        a = i.parents(".hp-rt__policy-list").siblings(".differing_policies").html();
                    else if (i.hasClass("non-refundable-savings"))
                        a = i.siblings(".differing_policies").html();
                    else {
                        a = e.getAttribute("data-title") || e.getAttribute("title");
                        e.getAttribute("title") && !e.getAttribute("data-title") && (e.setAttribute("data-title", e.getAttribute("title")),
                        e.removeAttribute("title"))
                    }
                    var r = e.nodeName.toLowerCase();
                    if ("option" != r && "link" != r && "select" != r || (a = ""),
                    a && "" != a) {
                        var o = this.ttClass
                          , _ = i.hasClass("left_tt")
                          , s = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]><\/script>)")
                          , d = s.exec(a)
                          , c = d && d[2];
                        c && (a = a.replace(s, ""),
                        B.et.stage(c, 1));
                        var l = null
                          , u = e.getAttribute("data-width");
                        if (u && !isNaN(u) && 150 < u && u < 1001)
                            l = u;
                        else {
                            var f = e.getAttribute("rel");
                            f && !isNaN(f) && 150 < f && f < 1001 && (l = f)
                        }
                        var h = -1 < a.indexOf("<img") && null == l;
                        -1 < e.className.indexOf("large_tooltip") && (o += " tt_large"),
                        h && (o += " blackBorderTooltip"),
                        i.attr("data-tooltip-class") && (o += " " + i.attr("data-tooltip-class"));
                        var p = !!i.attr("data-toponly");
                        return this.toolTips[n] = b ? this.getOrPutNodeFromJar(this.getTooltipJar(), n, a, o, _, l, h, p) : [a, o, _, l, h, p],
                        null != e.getAttribute("title") && (null == e.getAttribute("data-title") && e.setAttribute("data-title", e.title),
                        e.title = "",
                        e.removeAttribute("title")),
                        booking.env.b_is_ie && e.removeAttribute("alt"),
                        _r_(this.toolTips[n])
                    }
                    return _r_(null)
                }
                _r_()
            },
            getPosition: function(e, n, t, i, a) {
                _i_("3da:8e32698b"),
                null == i && (i = !1);
                var r = e + 15
                  , o = n + 10
                  , _ = !1;
                i && (o += m(a).outerHeight());
                var s = m(t).width()
                  , d = m(t).height()
                  , c = 20;
                return (function() {
                    return _i_("3da:c0bf24c6"),
                    _r_(e + s + this.ttScrollLeft > this.ttWinWidth - c)
                }
                .call(this) || this.ttShowLeft && (_i_("3da:f546c8b3"),
                _r_(s + c < e))) && (r = e - s - c,
                i && (r = e - s - 15,
                _ = !0,
                o = n)),
                B.env.rtl && (r = e - s - 15,
                s + c > e - this.ttScrollLeft && (r = e + 15)),
                _ || (this.ttShowTop ? n - d - 10 > this.ttScrollTop && (o = n - d - 10) : function() {
                    _i_("3da:242a77b5");
                    var e = n + d
                      , t = this.ttWinHeight - c
                      , i = e - this.ttScrollTop;
                    return _r_(t < i)
                }
                .call(this) && (o = n - d - 10)),
                _r_([r, o])
            },
            preloadImg: function(e) {
                _i_("3da:ddf15a33");
                var t, a = this, r = new Date;
                if (b) {
                    var i = this.toolTips[e][0].getElementsByTagName("img")[0];
                    t = i ? i.src : null
                } else {
                    var n = this.toolTips[e][0].match(/src=['"]([^'"]+)['"]/);
                    n && n[1] && (t = n[1])
                }
                if (!t)
                    return this.toolTips[e][4] = !1,
                    _r_();
                if (this.preLoadedImages[t])
                    return this.toolTips[e][4] = !1,
                    -1 === this.preLoadedImages[t].ttid.indexOf(e) && this.preLoadedImages[t].ttid.push(e),
                    _r_();
                this.preLoadedImages[t] = {
                    ttid: [e],
                    loaded: !1
                };
                var o = document.createElement("img");
                o.onload = function() {
                    _i_("3da:6f1c2a2f"),
                    a.preLoadedImages[this.src].loaded = !0,
                    a.preLoadedImages[this.src].ttid.forEach(function(e) {
                        _i_("3da:05dfb4b6");
                        var t = a.toolTips[e];
                        if (null != t[3]) {
                            var i = this.width + 20;
                            150 < i && (t[3] = i)
                        }
                        if (t[4] = !1,
                        a.ttShow !== e)
                            return _r_();
                        null != t[3] && (a.tt.style.width = t[3] + "px");
                        var n = (new Date).getTime() - r.getTime();
                        a.showToolTip(n),
                        _r_()
                    }),
                    _r_()
                }
                ,
                o.src = t,
                _r_()
            },
            addTooltip: function(e, t, i, n, a, r) {
                _i_("3da:9fb1972f"),
                "function" == typeof t && (t = t());
                var o = this;
                "string" == typeof e && m("#" + e).length ? (m("#" + e).addClass("jq_tooltip"),
                this.toolTips[e] = b ? this.getOrPutNodeFromJar(this.getTooltipJar(), e, t, i, n, a, r, !1) : [t, i, n, a, r]) : "object" == typeof e && m(e).each(function() {
                    if (_i_("3da:820a9a13"),
                    m(this).addClass("jq_tooltip"),
                    this.id)
                        var e = this.id;
                    else {
                        o.ttCounter++;
                        e = "b_tt_holder_" + o.ttCounter;
                        this.id = e
                    }
                    t || (t = m(this).attr("data-title")),
                    a || (a = m(this).attr("data-width")),
                    o.toolTips[e] = b ? o.getOrPutNodeFromJar(o.getTooltipJar(), e, t, i, n, a, r, !1) : [t, i, n, a, r],
                    _r_()
                });
                _r_()
            },
            updateTooltip: function(e, t, i, n) {
                if (_i_("3da:69f22fec"),
                n = n || {},
                m(e).attr("id"))
                    var a = m(e).attr("id");
                else {
                    this.ttCounter++;
                    a = "b_tt_holder_" + this.ttCounter;
                    m(e).attr("id", a)
                }
                if (!i && this.toolTips[a]) {
                    if (b) {
                        var r = this.updateNodeInJar(this.getTooltipJar(), a, t);
                        this.toolTips[a][0] = r
                    } else
                        this.toolTips[a][0] = t;
                    n.width && (this.toolTips[a][3] = n.width)
                } else
                    this.addTooltip(a, t, "", !1, n.width || null, !1);
                _r_()
            },
            getTooltipJar: function() {
                if (_i_("3da:a8ed7d74"),
                !this.ttJar)
                    if (null !== document.getElementById("tooltip_jar"))
                        this.ttJar = document.getElementById("tooltip_jar");
                    else {
                        var e = document.createElement("div");
                        e.id = "tooltip_jar",
                        e.style.display = "none !important",
                        document.body.appendChild(e),
                        this.ttJar = e
                    }
                return _r_(this.ttJar)
            },
            getOrPutNodeFromJar: function(e, t, i, n, a, r, o, _) {
                _i_("3da:6178227b");
                var s, d = m("#" + t);
                if (d.data("materialized-id") && (s = document.getElementById(d.data("materialized-id"))),
                !s) {
                    var c = "materialized_tooltip_" + Math.random().toString(36).substr(2, 5);
                    (s = document.createElement("div")).id = c,
                    s.innerHTML = i,
                    e.appendChild(s),
                    d.data("materialized-id", c),
                    d.attr("aria-describedby", c)
                }
                return _r_([s, n, a, r, o, _])
            },
            updateNodeInJar: function(e, t, i) {
                _i_("3da:bec8045f");
                var n, a = m("#" + t);
                if (a.data("materialized-id") && (n = document.getElementById(a.data("materialized-id"))),
                n)
                    n.innerHTML = i;
                else {
                    var r = "materialized_tooltip_" + Math.random().toString(36).substr(2, 5);
                    (n = document.createElement("div")).id = r,
                    n.innerHTML = i,
                    e.appendChild(n),
                    a.data("materialized-id", r),
                    a.attr("aria-describedby", r)
                }
                return _r_(n)
            }
        },
        _r_()
    }),
    B.when({
        events: "ready"
    }).require(["rewrite_tt"], function(e) {
        _i_("3da:1885ca8a"),
        e.init(),
        _r_()
    }),
    _r_()
}(),
function() {
    _i_("3da:e2c32049");
    var e = B.env.async_signin;
    B.env.fe_m_async_login && e && e.init_cbs ? e.init_cbs.push(function() {
        _i_("3da:dc3b60e6"),
        booking.userAccessFormHandler.init(),
        _r_()
    }) : B.when({
        events: "ready"
    }).run(function(e) {
        _i_("3da:4692d30b"),
        booking.userAccessFormHandler.init(),
        _r_()
    }),
    _r_()
}(),
B.define("user-access-menu/api", function(e, t, i) {
    _i_("3da:c41f1365");
    var n = e("promise")
      , _ = {
        id: null,
        meta: {},
        target: null,
        success: function() {},
        fail: function() {}
    };
    i.exports = {
        _pendingRequests: {},
        _call: function(e) {
            _i_("3da:fb5c5eeb");
            var t = $(e.target);
            t.is("form") && function(e, t) {
                _i_("3da:106c479a");
                var i = $("input[name=rid]", e)[0];
                i ? $(i).val(t.id) : e.prepend('<input type="hidden" name="rid" value="' + t.id + '">'),
                e.trigger("submit"),
                $(i).val(""),
                _r_()
            }(t, e),
            _r_()
        },
        _getRequestById: function(e) {
            return _i_("3da:d0c9d680"),
            _r_(Object.assign({}, _, this._pendingRequests[e]))
        },
        _removeRequestById: function(e) {
            _i_("3da:07b84896"),
            this._pendingRequests[e] = null,
            delete this._pendingRequests[e],
            _r_()
        },
        _registerRequest: function(e) {
            _i_("3da:dfa85ca7"),
            e.id && (this._pendingRequests[e.id] = Object.assign({}, e)),
            _r_()
        },
        requestFailed: function(e, t) {
            _i_("3da:e8368dff");
            var i = this._getRequestById(e);
            this._removeRequestById(i.id),
            i.fail(t),
            _r_()
        },
        requestSucceed: function(e, t) {
            _i_("3da:71886e67");
            var i = this._getRequestById(e);
            this._removeRequestById(i.id),
            i.success(t),
            _r_()
        },
        send: function(r) {
            _i_("3da:ca71067f");
            var o = this;
            return _r_(new n(function(e, t) {
                _i_("3da:bf3747ef");
                var i, n, a = Object.assign({}, _, r, {
                    id: (i = 1,
                    n = 1e6,
                    _i_("3da:cbfb86c9"),
                    i = Math.ceil(i),
                    n = Math.floor(n),
                    _r_(Math.floor(Math.random() * (n - i + 1)) + i)),
                    success: e,
                    fail: t
                });
                o._registerRequest(a),
                o._call(a),
                _r_()
            }
            ))
        }
    },
    _r_()
}),
booking.userAccessFormHandler = function(h) {
    _i_("3da:dc56a405");
    var p = B.require("jquery")
      , n = {
        $userAccessMenu: {},
        $parentForm: {},
        $parentFormWrapper: {},
        submitHooks: {},
        globalSubmitHooks: {},
        api: B.require("user-access-menu/api"),
        _init: function(e) {
            _i_("3da:fb15c2e4");
            var a = this;
            this.$userAccessMenu = p(".user_access_menu"),
            e && (this.$userAccessMenu = p(e)),
            this.$userAccessMenu.delegate(".user_access_section_trigger", "click", function(e) {
                _i_("3da:a3d7b016");
                var t = p(this)
                  , i = t.parents(".user_access_menu")
                  , n = this.getAttribute("data-target");
                return p(".form-section", i).addClass("form-hidden-section").removeClass("form-shown-section"),
                a.$parentForm = p("." + n, i),
                a.$parentForm.removeClass("form-hidden-section").addClass("form-shown-section"),
                p(".form-tabs", i).removeClass("user_menu_active_tab").attr("aria-selected", "false"),
                p("." + n + "_tab", i).addClass("user_menu_active_tab").attr("aria-selected", "true"),
                booking.eventEmitter && ("user_access_signup_menu" === t.data("target") && booking.eventEmitter.trigger("user_access_menu_register_tab"),
                "user_access_signin_menu" === t.data("target") && booking.eventEmitter.trigger("user_access_menu_login_tab")),
                _r_(!1)
            }),
            p(".user_access_menu_auth_low_not_me").click(function(t) {
                _i_("3da:e5a4347f");
                var i, n, e = p(t.target).attr("href");
                e && (B.env.b_sso_logout_url ? B.require("fragment").call("user.logout_state", {
                    redirect_uri: e
                }).then(function(e) {
                    _i_("3da:3ad27e99"),
                    i = '<form method="POST" action="' + B.env.b_sso_logout_url + '" ></form>',
                    (n = p(i)).prepend('<input type="hidden" name="bhc_csrf_token" value="' + booking.env.b_csrf_token + '">'),
                    n.prepend('<input type="hidden" name="client_id" value="' + booking.env.b_oauth_client_id + '">'),
                    n.prepend('<input type="hidden" name="state" value="' + e + '">'),
                    n.prepend('<input type="hidden" name="redirect_uri" value="' + booking.env.b_sso_logout_callback_url + '">'),
                    t.preventDefault(),
                    p("body").append(n),
                    n.submit(),
                    _r_()
                }) : ((n = p(i = '<form method="POST" action="' + e + '" ><input type="hidden" name="logout" value="1" /></form>')).prepend('<input type="hidden" name="bhc_csrf_token" value="' + booking.env.b_csrf_token + '">'),
                n.prepend('<input type="hidden" name="logout_by_sso" value="1">'),
                t.preventDefault(),
                p("body").append(n),
                n.submit())),
                _r_()
            }),
            this.$userAccessMenu.on("click", "[data-dismiss]", function() {
                var e, t;
                _i_("3da:ba4ad809"),
                e = a.$userAccessMenu,
                _i_("3da:edaf7940"),
                t = e,
                _i_("3da:2220bbce"),
                p(".form-section", t).addClass("form-hidden-section").removeClass("form-shown-section"),
                _r_(),
                p(".user_access_signin_menu").removeClass("form-hidden-section").addClass("form-shown-section"),
                _r_(),
                _r_()
            }),
            this.$userAccessMenu.delegate(".user_access_form", "submit", function(e, t) {
                if (_i_("3da:cb276c52"),
                a.$parentForm = p(this),
                a.$submitedForm = p(this),
                a.$parentFormWrapper = p(this).parents(".form-section"),
                !a._validateForm(t))
                    return _r_(!1);
                if (a.userNameIsPhone && (a.fe_enable_login_with_phone_number && a.$parentForm.hasClass("js-user-access-form--signin") || a.fe_enable_signup_with_phone_number && a.$parentForm.hasClass("js-user-access-form--signup")))
                    p(".js-suppress_refresh").val(1),
                    p(".js-no_login_after_signup").val(1),
                    p(".js-no_redirect").val(1),
                    p(".js-username_is_phone").val(1),
                    booking.phoneNumberLogin.setPassword(p("input[name=password]", a.$parentFormWrapper).val()),
                    p(".form-loading", a.$parentFormWrapper).show();
                else if (a.userNameIsPhone || (p(".js-suppress_refresh").val(0),
                p(".js-no_login_after_signup").val(0),
                p(".js-username_is_phone").val(0)),
                p(".form-loading", a.$parentFormWrapper).show(),
                p(this).trigger("submit_pb_mybooking_cant_find"),
                p(this).hasClass("form-secondary-login") && "msie" === B.env.b_browser && B.env.b_browser_version < 9) {
                    var i = "&" + p(this).serialize()
                      , n = p(this).attr("action") + i;
                    location.href = n
                } else
                    booking.eventEmitter.trigger("user-acess-menu:valid-submit-start", a);
                _r_()
            }),
            p("#login_redesign").click(function() {
                _i_("3da:30ef4f70"),
                p(".bs2_inline_signin_box").toggle(),
                B.eventEmitter.trigger("user-access-menu:toggle"),
                _r_()
            }),
            this._initPassStrength(),
            _r_()
        },
        _initPassStrength: function(e) {
            _i_("3da:77295291");
            var i, t, n = this;
            e || (e = ".password_strength"),
            (t = (t = p(p(e).attr("data-wrapper"))).length ? t : this.$userAccessMenu).delegate(e, "keyup", function() {
                _i_("3da:b27c09ba");
                var e = p(this)
                  , t = e.val();
                i && clearTimeout(i),
                i = setTimeout(function() {
                    _i_("3da:40eddc9e"),
                    n._calculatePasswordStrength(e, t),
                    booking.eventEmitter && B.eventEmitter.trigger("passStrength"),
                    _r_()
                }, 400),
                _r_()
            }),
            _r_()
        },
        _validations: {
            email: function(e) {
                _i_("3da:ed8bb6ee");
                var t = e.indexOf("@")
                  , i = e.lastIndexOf(".");
                return _r_(0 < t && t < i)
            },
            emailOrPhone: function(e) {
                _i_("3da:4f28b9bb");
                var t = this.email(e)
                  , i = this.phone(e);
                return _r_(t || i)
            },
            phone: function(e) {
                return _i_("3da:67c7be8e"),
                _r_(e.match(/1[3-9]\d{9}$/g))
            },
            phoneNo170: function(e) {
                return _i_("3da:25eee57c"),
                _r_(!(e.match(/^(170|171)/g) && this.phone(e)))
            }
        },
        fe_enable_login_with_phone_number: B.env.fe_enable_login_with_phone_number,
        fe_enable_signup_with_phone_number: B.env.fe_enable_signup_with_phone_number,
        fe_run_email_validation: 0 === parseInt(B.env.auth_level, 10),
        _validateForm: function(e) {
            if (_i_("3da:54a182e0"),
            !this.$parentForm.length)
                return _r_(1);
            var d = !0
              , c = h.error_sign_up_password_email_combo_01
              , l = this;
            return p("input", this.$parentForm).each(function() {
                _i_("3da:644a0efd");
                var e, t, i, n, a = p(this), r = a.attr("data-validation"), o = a.val();
                if (r) {
                    for (var _ = 0, s = (r = r.split("|")).length; _ < s && d; _++)
                        "required" !== (t = (e = r[_].split(/\{/))[0]) || o ? "numeric_with_dots" === t || "numeric" === t ? ("numeric_with_dots" === t && (o = o.replace(/\./g, ""),
                        a.val(o)),
                        /^\d+$/g.test(o) || (d = !1)) : /min_length\([0-9]+\)/.test(t) ? (i = (i = t.split("(")[1]).slice(0, -1),
                        o.length < i && (d = !1)) : /required_match\([a-zA-Z_]+\)/.test(t) && (n = (n = t.split("(")[1]).slice(0, -1),
                        p(this).val() !== p("#" + n).val() && (d = !1)) : d = !1,
                        l.fe_enable_login_with_phone_number && ("email-or-phone" === t && (d = l._validations.emailOrPhone(o),
                        l.userNameIsPhone = l._validations.phone(o),
                        l.userNameIsPhone && booking.phoneNumberLogin.setPhone(o)),
                        "phone" === t && (d = l._validations.phone(o),
                        l.userNameIsPhone = l._validations.phone(o),
                        l.userNameIsPhone && booking.phoneNumberLogin.setPhone(o)),
                        "phoneNo170" === t && (d = l._validations.phoneNo170(o))),
                        l.fe_run_email_validation && "email" === t && (d = l._validations.email(o)),
                        e[1] && (c = e[1].slice(0, -1));
                    if (!d)
                        return _r_(!1)
                }
                _r_()
            }),
            d ? _r_(!0) : (p(".alert-error", this.$parentFormWrapper).html(c).show(),
            booking.eventEmitter.trigger("form-error", this.$parentFormWrapper),
            e && this.api.requestFailed(e),
            _r_(!1))
        },
        _calculatePasswordStrength: function(e, t) {
            if (_i_("3da:ebef6507"),
            void 0 === t || void 0 === t.length)
                return _r_();
            for (var i, n, a = t.length, r = parseInt(a / 2.5, 10), o = 0, _ = !1, s = 0, d = 0, c = e.attr("data-wrapper") ? e.parents(e.attr("data-wrapper")) : e.parents(".user_access_form"), l = p(".user_access_password_strength", c).find(".pass_strength_step").width(), u = p(".user_access_password_strength", c).find(".pass_strength_progress"), f = 0; f < a; f++)
                isNaN(t.charAt(f)) ? _ = !0 : o += 1,
                -1 < "!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_".indexOf(t.charAt(f)) && (s += 2),
                -1 < "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t.charAt(f)) && (d += 1);
            4 < s && (s = 4),
            2 < o && (o = 2),
            2 < d && (d = 2),
            _ && (r += o),
            r += s,
            10 < (r += d) ? r = 10 : 0 === r && (r = 1),
            a < 8 ? (u.addClass("pass_strength_invalid"),
            3 < r && (r = 3),
            n = 0) : (u.removeClass("pass_strength_invalid"),
            n = parseInt(r / 2, 10) + 1),
            n = 5 < n ? 5 : n,
            i = l * r,
            u.animate({
                width: i + "px"
            }),
            h.b_password_strength_msg && p(".pass_strength_text", c).text(h.b_password_strength_msg[n]),
            _r_()
        },
        _displayErrorMsg: function(e) {
            if (_i_("3da:cb0e6d60"),
            !e || !e.msg)
                return _r_();
            var t, i;
            e.parent && (t = p(e.parent)),
            (e.target ? p(e.target, t) : p(".alert-error", t)).html(e.msg).addClass("alert-displayed"),
            p(".form-loading, #page_login_loading").hide(),
            booking.env.is_genius_onboarding && (i = p("#slide1").height(),
            p("#slides").animate({
                height: i
            })),
            _r_()
        },
        _resetErrors: function(e) {
            if (_i_("3da:86b2855d"),
            !e || !e.msg)
                return _r_();
            var t;
            e.parent && (t = p(e.parent)),
            (e.target ? p(e.target, t) : p(".alert-error", t)).removeClass("alert-displayed"),
            _r_()
        },
        _addSubmitHook: function(e, t, i) {
            _i_("3da:d0e9a6b5");
            var n = i ? this.globalSubmitHooks : this.submitHooks;
            if (!t || !e)
                return _r_();
            n[e] = t,
            _r_()
        },
        _removeSubmitHook: function(e, t) {
            _i_("3da:84c995d6");
            var i = t ? this.globalSubmitHooks : this.submitHooks;
            if (!n)
                return _r_();
            delete i[e],
            _r_()
        },
        _promtUserForPhoneVerification: function() {
            _i_("3da:5d7ebf61"),
            booking.authNextStepSMS && booking.authNextStepSMS.promtUserForPhoneVerification(this.$userAccessMenu, "verify"),
            _r_()
        },
        _promptForNextAuthStep: function(e) {
            _i_("3da:99f0f054"),
            function(e) {
                _i_("3da:58bc22d7");
                var t = {
                    sms: n._promtUserForPhoneVerification.bind(n)
                };
                return _r_(t[e] || function() {}
                )
            }(e && e.step)(),
            _r_()
        }
    };
    return _r_({
        init: function() {
            _i_("3da:9cba14bb"),
            n._init(),
            _r_()
        },
        api: n.api,
        getSubmitedForm: function() {
            return _i_("3da:c7875864"),
            _r_(n.$submitedForm)
        },
        getSigninForm: function() {
            return _i_("3da:3360d2a9"),
            _r_(p(".js-user-access-form--signin", n.$userAccessMenu))
        },
        initPassStrength: function(e) {
            _i_("3da:efd20cd2"),
            n._initPassStrength(e),
            _r_()
        },
        displayErrorMsg: n._displayErrorMsg,
        resetErrors: n._resetErrors,
        promptForNextAuthStep: n._promptForNextAuthStep
    })
}(booking.env),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:f6b59113");
    var i = !1
      , n = !1
      , a = $("#current_language_foldout")
      , r = function(n) {
        _i_("3da:1c03f5e5");
        var a = "loading_option";
        n.delegate("a", "click", function(e) {
            _i_("3da:8740a496");
            var t = $(this).parent();
            if (t.hasClass("selected_language") || t.hasClass("selected_currency"))
                return e.preventDefault(),
                _r_();
            if (t.hasClass(a) ? e.preventDefault() : n.find("." + a).removeClass(a),
            t.addClass(a),
            B.env.b_run_sr_ajax) {
                var i = B.require("searchresults/events");
                i.trigger(i.UI_NAVIGATE_TO, {
                    url: $(this).attr("href"),
                    fixUrl: !0,
                    reload: !0
                }),
                e.preventDefault()
            }
            _r_()
        }),
        _r_()
    }
      , t = function() {
        _i_("3da:273d5836"),
        i || $.get(booking.env.b_currency_url, function(e) {
            var t;
            _i_("3da:5703df6b"),
            $("#current_currency").html(e),
            r($("#current_currency_foldout")),
            t = $("#current_currency a"),
            _i_("3da:652491ba"),
            $(t).each(function() {
                _i_("3da:577efa9e");
                var e = booking.env.b_this_url;
                "genius" !== booking.env.b_action && "guest" !== booking.env.b_action || (e = booking.env.b_this_url_without_lang);
                var t = $(this).attr("data-currency")
                  , i = -1 < e.indexOf("?") ? ";" : "?";
                t += ";changed_currency=1",
                $(this).closest(".select_foldout_wrap").is(".select_foldout_wrap_top") && (t += ";top_currency=1"),
                $(this).attr("href", e + i + "selected_currency=" + t),
                _r_()
            }),
            _r_(),
            i = !0,
            _r_()
        }),
        _r_()
    }
      , o = function() {
        _i_("3da:a141ae6c"),
        n || $.get(booking.env.b_languages_url, function(e) {
            var t;
            _i_("3da:ff31ecb8"),
            a.length ? a.replaceWith(e) : $("#current_language").html(e),
            r(a),
            t = $("#current_language li"),
            _i_("3da:8926f436"),
            $(t).each(function() {
                _i_("3da:3d14eedb");
                var e = $(this).attr("data-lang")
                  , t = booking.env.b_switch_language_url[e];
                $(this).find("a").attr("href", t),
                _r_()
            }),
            _r_(),
            n = !0,
            _r_()
        }),
        _r_()
    };
    !function() {
        _i_("3da:378e4067");
        var e = $("#current_language_foldout");
        r(e),
        $(".uc_currency a.popover_trigger").click(function() {
            _i_("3da:dabfdc7d"),
            t(),
            _r_()
        }),
        "zh" === B.env.b_lang && $(".zh .uc_language a.popover_trigger").click(function() {
            _i_("3da:e42973e3"),
            o(),
            _r_()
        }),
        _r_()
    }(),
    _r_()
}),
window.addEventListener("load", function() {
    _i_("3da:1de4073c"),
    $(".wl_dates_trigger").click(function() {
        _i_("3da:921415c1"),
        booking.lightbox.show($("#wl_dates_modal"), {
            customWrapperClassName: "wl_dates_modal_wrapper",
            bOverflowVisible: !0,
            hideCallBack: function() {
                _i_("3da:490ecf5e"),
                $(".alert-error").hide(),
                _r_()
            }
        }),
        _r_()
    }),
    _r_()
}),
B.when({
    condition: B.env.b_run_2fa_suggestion__mysettings
}).run(function(e) {
    _i_("3da:c8f2eb30");
    var t = e("jquery");
    t("body").on("click", "[data-add-two-factor-authentication]", function() {
        _i_("3da:b98ae6d6"),
        (new (e("component/mysettings-highlight"))).highlight({
            fields: "2fa_enrollment",
            fieldAttribute: "data-settings-item"
        }),
        t("[data-detail-trigger]", '[data-button="mysettings_2fa_enrollment_button"]').trigger("click"),
        _r_()
    }),
    _r_()
}),
B.define("profile/profile-menu/profile-menu", function(e, t, c) {
    "use strict";
    _i_("3da:e3248d83"),
    function() {
        _i_("3da:0cfa3120");
        var a = e("jquery")
          , i = "[data-command=show-profile-menu]"
          , n = e("ga-tracker")
          , r = "www" === B.env.b_site_type && B.require("trap-focus")
          , o = !1
          , _ = !1
          , s = !1
          , d = 0;
        c.exports = {
            _dropdown: null,
            init: function() {
                _i_("3da:513b72c4");
                var t = this;
                void 0 !== a && void 0 !== a.fly && void 0 !== a.fly.dropdown && a.fly.dropdown.extend({
                    init: function() {
                        _i_("3da:5527573d"),
                        (t._dropdown = this).bind(this.events.show, t.onshow.bind(t)),
                        this.bind(this.events.hide, t.onhide.bind(t));
                        var e = booking.jstmpl("profile_menu_extra_class");
                        e && "__no_op__" !== e.name ? this.options.extraClass += " " + e.render(booking.env.profile_menu) : this.options.extraClass += " g-hidden",
                        _r_()
                    }
                }).delegate(i, {
                    extraClass: "fly-dropdown--profile-menu",
                    position: booking.env.rtl ? "bottom left" : "bottom right",
                    content: function() {
                        _i_("3da:1b2c2763");
                        var e, t = booking.jstmpl("profile_menu");
                        if ("center" === this.handle().data("menu-location") && (this.options.position = "bottom center"),
                        !t || "__no_op__" === t.name) {
                            var i = (this.handle() || a()).eq(0).children("a[href]")
                              , n = i && i.attr("href") || "";
                            return /\/mydashboard/.test(n) && (window.location.href = n),
                            _r_("")
                        }
                        return e = "switch-accounts" == this.handle().data("menu-mode") ? t.render(Object.assign({}, booking.env.profile_menu, {
                            b_menu_mode: "switch-accounts"
                        })) : t.render(booking.env.profile_menu),
                        _r_(a(e).loadComponents())
                    }
                }),
                a(document).on("click", ".profile-menu__item--myreferrals .profile-menu__link", function() {
                    _i_("3da:e22198db"),
                    n.trackEvent(n.referralAdvocateTracker, "click", "myreferrals item in profile menu"),
                    _r_()
                }),
                a(document).on("click", ".profile_menu__item--wishlists .profile-menu__link", function() {
                    _i_("3da:c51a4111"),
                    B.squeak(B.env.wl_squeak.open_wishlist_from_profile),
                    _r_()
                }),
                a(document).on("click", ".profile_menu__item--travel-communities .profile-menu__link", function() {
                    _i_("3da:40934ce4"),
                    n.trackEvent(n.communityTracker, "entry-point-button-click", "menu"),
                    _r_()
                }),
                a(document).on("mouseenter", "#current_account", function() {
                    _i_("3da:282bb283"),
                    o = !0,
                    _r_()
                }),
                a(document).on("mouseleave", "#current_account", function() {
                    _i_("3da:a3ee00fa"),
                    o = !1,
                    _r_()
                }),
                _r_()
            },
            onshow: function() {
                _i_("3da:51b5e750"),
                "android" === booking.env.b_browser && this.forceReflow(),
                a(".milk_menu").hide(),
                a(".b_recentlyviewed").length && a(".b_recentlyviewed").removeClass("rv-content-visible"),
                a(".uc_genius_tooltip").remove(),
                !o && r && setTimeout(function() {
                    _i_("3da:a240a6e4");
                    var e = this._dropdown && this._dropdown.root();
                    e && (r.trap(e[0]),
                    _ = !0),
                    _r_()
                }
                .bind(this), 200),
                a(".profile_menu__item--travel-communities").length && !s && (n.trackEvent(n.communityTracker, "entry-point-button-show", "menu"),
                s = !0);
                var e = this._dropdown && this._dropdown.root();
                e && (a("*[role=menuitem]", e).first().focus(),
                window.addEventListener("keydown", this.handleMenuKeys.bind(this)),
                a(".invisible_spoken button", e).on("click", function(e) {
                    _i_("3da:54afd51e"),
                    a(i).click(),
                    _r_()
                }),
                d = 0,
                a(e).attr("aria-hidden", "false"));
                var t = this._dropdown.handle();
                t && t.attr("aria-expanded", !0),
                B.env.b_connected_user_accounts || B.et.stage("YQKSXPTLKGBfSOaSJTSXeUMAae", 1),
                B.et.stage("YTBAWTWEUXFSOERXUC", 1),
                _r_()
            },
            onhide: function() {
                _i_("3da:dc6a4fcd");
                var e = this._dropdown && this._dropdown.root();
                window.removeEventListener("keydown", this.handleMenuKeys),
                _ && r && (r.release(),
                _ = !1),
                e && a(e).attr("aria-hidden", "true");
                var t = this._dropdown && this._dropdown.handle();
                t && t.attr("aria-expanded", !1),
                booking.eventEmitter.trigger("uc_popover_hidden"),
                B.env.b_connected_user_accounts || B.et.customGoal("YQKSXPTLKGBfSOaSJTSXeUMAae", 3),
                _r_()
            },
            forceReflow: function() {
                _i_("3da:1d487354"),
                setTimeout(function() {
                    _i_("3da:2b3c563e");
                    var e = this._dropdown && this._dropdown.root();
                    e && e.hide().show(0),
                    _r_()
                }
                .bind(this), 0),
                _r_()
            },
            handleMenuKeys: function(e) {
                _i_("3da:8ef28c51");
                var t = a("#profile-menu *[role=menuitem]");
                switch (e.keyCode) {
                case 27:
                    window.removeEventListener("keydown", this.handleMenuKeys);
                    var i = this._dropdown && this._dropdown.root();
                    i && i.hide().show(0);
                    break;
                case 32:
                    e.preventDefault(),
                    t[d] && t[d].click();
                    break;
                case 39:
                case 40:
                    e.preventDefault(),
                    d < t.length - 1 && d++,
                    t[d] && t[d].focus();
                    break;
                case 37:
                case 38:
                    e.preventDefault(),
                    0 < d && d--,
                    t[d] && t[d].focus()
                }
                _r_()
            }
        },
        _r_()
    }(),
    _r_()
}),
_i_("3da:5b006ffc"),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:aa4fb7c7"),
    B.require("profile/profile-menu/profile-menu").init(),
    _r_()
}),
_r_(),
B.define("component/company/account-split/profile-switch-link", function(e, t, i) {
    "use strict";
    _i_("3da:0720655f");
    var n = e("component");
    function r() {
        var e, t, i;
        _i_("3da:a2abb747");
        var n = B.env.b_connected_user_accounts
          , a = this.$el.attr("data-user-id");
        for (e = 0,
        t = n.length; e < t; ++e)
            n[e].b_user_id !== a && (i = n[e]);
        return _r_(i)
    }
    i.exports = n.extend({
        init: function() {
            _i_("3da:802c453f"),
            this.$el.on("click", function() {
                _i_("3da:44ee8248");
                var e = r.call(this)
                  , t = this.$el.attr("data-href")
                  , i = this.$el.attr("data-redirect-url-business")
                  , n = this.$el.attr("data-redirect-url-leisure")
                  , a = $("<form>", {
                    action: t,
                    method: "POST"
                });
                $("<input>").attr({
                    type: "hidden",
                    name: "redirect_url",
                    value: "business" === e.b_type ? i : n
                }).appendTo(a),
                $("<input>").attr({
                    type: "hidden",
                    name: "switch_to_user_id",
                    value: e.b_user_id
                }).appendTo(a),
                $("<input>").attr({
                    type: "hidden",
                    name: "bhc_csrf_token",
                    value: B.env.b_csrf_token
                }).appendTo(a),
                $("<input>").attr({
                    type: "hidden",
                    name: "bhc_csrf_token_check",
                    value: 1
                }).appendTo(a),
                a.appendTo("body").submit(),
                _r_()
            }
            .bind(this)),
            function() {
                _i_("3da:7250f2cc");
                var e = r.call(this);
                $("<input>").attr({
                    type: "hidden",
                    name: "sb_travel_purpose",
                    value: "business" === e.b_type ? "leisure" : "business"
                }).appendTo(this.$el),
                _r_()
            }
            .call(this),
            _r_()
        }
    }),
    _r_()
}),
function(i) {
    _i_("3da:af8646a2");
    var n = i.require("jquery")
      , a = null
      , _ = "show_non_age_message";
    function r() {
        return _i_("3da:87d2d34c"),
        _r_(new RegExp(_ + "=1").test(location.href))
    }
    function o() {
        _i_("3da:07e1e539"),
        i.when({
            action: "searchresults"
        }).run(function(e) {
            function t() {
                _i_("3da:62e7d8a7"),
                a && a.hide(),
                _r_()
            }
            _i_("3da:61799959"),
            n('[name="group_children"]').on("change", t),
            i.eventEmitter.bind("CALENDAR:opened", t),
            _r_()
        }),
        _r_()
    }
    function s() {
        _i_("3da:1d8b39ca");
        var e = i.env.rtl ? "left" : "right"
          , t = "searchbox_children_age_default_12_dropdown";
        a && a.hide(),
        setTimeout(function() {
            if (_i_("3da:277cfe60"),
            0 === n(".b-children-ages-configurator, .sb-group__children__field").length)
                return _r_();
            (a = n.fly.dropdown.extend({
                defaults: {
                    position: e,
                    content: function() {
                        return _i_("3da:8dbf8bd6"),
                        _r_(i.jstmpl("searchbox_children_ages_default_12_tooltip").render({}))
                    },
                    extraClass: t
                },
                actions: {
                    click: function(e) {
                        _i_("3da:fe76b345"),
                        n(e.target).is("select") && this.hide(),
                        _r_()
                    }
                },
                _autohide: function() {},
                init: function() {
                    _i_("3da:6e9a028f"),
                    this.bind(this.events.show, function() {
                        _i_("3da:7720bd99"),
                        n("." + t).delegate(".fly-dropdown-close", "click", function(e) {
                            _i_("3da:edc671d6"),
                            a.hide(),
                            _r_()
                        }),
                        _r_()
                    }),
                    _r_()
                }
            }).create(".b-children-ages-configurator, .sb-group__children__field")).show(),
            _r_()
        }, 200),
        _r_()
    }
    i.when({
        condition: r(),
        events: "load",
        action: "searchresults"
    }).run(function(e) {
        _i_("3da:408d0647"),
        s(),
        _r_()
    }),
    i.when({
        events: "load",
        action: ["index", "hotel", "searchresults", "continent", "country", "region", "city", "district", "landmark", "airport", "reviews_region", "reviews_city", "genius", "mydashboard"]
    }).run(function(e) {
        _i_("3da:695f7f32");
        var a = n("#frm")
          , r = a.find("[name=group_children]")
          , o = n('<input type="hidden" name="' + _ + '" value="1">');
        a.on("submit", function(e) {
            _i_("3da:3293dba0");
            var t = a.find("[name=" + _ + "]")
              , i = parseInt(r.val())
              , n = a.find("[name=age]").find(":selected.sb_child_ages_empty_zero").length;
            i && n ? a.append(o) : t.remove(),
            _r_()
        }),
        _r_()
    }),
    i.when({
        events: "load",
        action: "searchresults"
    }).run(function(e) {
        _i_("3da:33832b54");
        var t = e("searchresults/events");
        t.on(t.DATA_ENVIRONMENT_UPDATED, function(e) {
            _i_("3da:b4687a04"),
            r() && (o(),
            s()),
            _r_()
        }),
        _r_()
    }),
    o(),
    _r_()
}(booking),
B.when({
    events: "ready",
    condition: 0 < $(".pincode_expired_error").length
}).run(function() {
    _i_("3da:5efc7ec3");
    var t = $(".pincode_expired_error")
      , i = t.data("bn")
      , n = "<p>" + t.data("msg") + "</p>";
    t.find(".pincode_expired_error__resend_email_link").on("click", function(e) {
        _i_("3da:838fd39d"),
        e.preventDefault(),
        $.ajax({
            url: "/resend_confirmation_email",
            type: "POST",
            data: {
                bn: i,
                bhc_csrf_token: B.env.b_csrf_token
            },
            success: function() {
                _i_("3da:c9825986"),
                "mdot" === B.env.b_site_type ? (_i_("3da:77d4deb1"),
                t.html(n).closest(".js-pincode-ondemand-error").css({
                    backgroundColor: "#CEE5C3",
                    color: "#2C5520",
                    fontWeight: "bold"
                }),
                _r_()) : function() {
                    _i_("3da:55308dff");
                    var e = $(n);
                    e.hide(),
                    $("body").append(e),
                    B.require("lightbox").show(e, {
                        customWrapperClassName: "user-access-menu-lightbox user-access-menu-lightbox--user-center pincode_expired_error__resend_lightbox",
                        hideCallback: function() {
                            _i_("3da:1bf95c71"),
                            e.remove(),
                            _r_()
                        }
                    }),
                    _r_()
                }(),
                _r_()
            }
        }),
        _r_()
    }),
    _r_()
}),
function() {
    "use strict";
    _i_("3da:9717d843");
    var i, _ = (new Date).getTime(), s = B.require("ga-tracker"), d = B.require("jquery"), a = {
        beta: !1,
        mouseenterFlag: !1
    }, c = void 0, r = [], l = [], e = [{
        name: "fast-click",
        type: "mouseup",
        browsers: ["chrome", "opera", "safari"],
        match: {
            previous: {
                type: "mousedown",
                timeDiff: 5,
                matchElement: !0
            },
            isInputOrLink: !0
        }
    }, {
        name: "fast-click-no-dblclick",
        type: "mouseup",
        browsers: ["firefox", "edge"],
        match: {
            previous: {
                type: "mousedown",
                timeDiff: 5,
                matchElement: !0
            },
            isInputOrLink: !0
        },
        rejections: [{
            previous: {
                type: "mouseup",
                timeDiff: 50,
                matchElement: !0
            }
        }]
    }, {
        name: "ghost-click",
        type: "click",
        browsers: ["msie"],
        match: {
            isInputOrLink: !0,
            hasOriginalEvent: !0
        },
        rejections: [{
            previous: {
                type: "click",
                timeDiff: 500,
                targetSelector: "label"
            }
        }, {
            previous: {
                type: "keydown",
                timeDiff: 500
            }
        }, {
            previous: {
                type: "keyup",
                timeDiff: 500,
                matchElement: !0
            }
        }, {
            previous: {
                type: "mouseup",
                timeDiff: 500,
                matchElement: !0
            }
        }]
    }].filter(function(e) {
        return _i_("3da:e875e610"),
        _r_(-1 < e.browsers.indexOf(B.env.b_browser))
    });
    function n(n, a) {
        return _i_("3da:8c866ee2"),
        _r_((!a.previous || function e(t) {
            _i_("3da:a1df1917");
            var i = r[t - 1];
            return _r_(!(i && a.previous.type === i.type && a.previous.timeDiff > n.timeStamp - i.timeStamp) || a.previous.matchElement && i.target !== n.target || a.previous.targetSelector && !d(i.target).is(a.previous.targetSelector) ? i && a.previous.timeDiff > n.timeStamp - i.timeStamp ? e(t - 1) : null : i)
        }(r.indexOf(n))) && (!a.isInputOrLink || (_i_("3da:1a5edcce"),
        _r_(d(n.target).is("a, button, input") || d(n.target).closest("a, button").length))) && (!a.hasOriginalEvent || !!n.originalEvent))
    }
    d(document.body).on("keyup keydown mouseup mousedown click", function(o) {
        if (_i_("3da:7f27477a"),
        i)
            return _r_();
        var t;
        r.push(o),
        15 < r.length && r.shift(),
        (t = o,
        _i_("3da:8d856414"),
        _r_(e.filter(function(e) {
            return _i_("3da:774b3233"),
            _r_(e.type === t.type)
        }))).filter(function(t, e) {
            return _i_("3da:16847a90"),
            _r_(n(t, e.match) && (!e.rejections || e.rejections.every(function(e) {
                return _i_("3da:a99e6f73"),
                _r_(!n(t, e))
            })))
        }
        .bind(this, o)).forEach(function(t) {
            if (_i_("3da:8b88609c"),
            !d.cookie("qr_is_sr")) {
                var e = new Date;
                d.cookie("qr_is_sr", t.name, {
                    path: "/",
                    domain: "booking.com",
                    expires: e.setHours(e.getHours() + 1)
                })
            }
            l.forEach(function(e) {
                _i_("3da:3f8087a1"),
                (e.mouseenterFlag && o.target != c || !e.mouseenterFlag) && (e.callback({
                    pattern: t.name,
                    mouseenterOnDifferentElement: o.target != c
                }),
                l.splice(l.indexOf(e), 1)),
                _r_()
            });
            var i = function(e) {
                _i_("3da:ca65da08");
                for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
                    var i = e.nodeName.toLowerCase()
                      , n = ""
                      , a = e.getAttribute("id")
                      , r = e.getAttribute("class")
                      , o = i;
                    a && (o += a ? "#" + a : "",
                    n = '@id="' + a + '"'),
                    !a && r && r.length < 40 && (n += '@class="' + (r = r.replace(/\s+/g, " ").replace(/\.+/g, ".").replace(/^\s+|\s+$/gm, "").replace("@", "\\@")) + '"',
                    o += "." + r.split(" ").join("."));
                    var _ = d(e.parentNode).children(o).index(e) + 1
                      , s = i;
                    0 < n.length && (s += "[" + n + "]"),
                    s += "[" + _ + "]",
                    t.unshift(s)
                }
                return _r_(t.length ? "/" + t.join("/") : null)
            }(o.target)
              , n = [B.env.b_action, t.name, B.env.b_browser, i].join("_")
              , a = (new Date).getTime()
              , r = Math.ceil((a - _) / 1e3);
            B.env.a11y_is_sr = !0,
            s.trackEvent("Accessibility", "Detection", n, r),
            _r_()
        }),
        _r_()
    }),
    d(window).on("focus", function(e) {
        _i_("3da:b7b9decb"),
        i = !0,
        window.setTimeout(function() {
            _i_("3da:d653c7b3"),
            i = !1,
            _r_()
        }, 100),
        _r_()
    }),
    B.define("screen-reader-detector", function(e, t, i) {
        _i_("3da:6156eeb7"),
        i.exports = {
            onDetect: function(e, t) {
                _i_("3da:558a07bb"),
                B.env.a11y_is_sr || (B.env.a11y_is_sr = !1);
                var i = d.extend({}, a, t);
                if (i.beta) {
                    if (B.env.touch_os)
                        return _r_();
                    d(document.body).on("mouseenter", "a, button, input, label, span, select", function(e) {
                        _i_("3da:dac72d82");
                        var t = d(e.target)
                          , i = t.closest("a, button");
                        c = t.is("a, button, input") ? e.target : i.length ? i[0] : void 0,
                        _r_()
                    })
                }
                var n = d.cookie("qr_is_sr");
                n && !i.beta ? (e({
                    pattern: n,
                    mouseenterOnDifferentElemen: !1
                }),
                B.env.a11y_is_sr = !0) : l.push({
                    callback: e,
                    mouseenterFlag: i.mouseenterFlag
                }),
                _r_()
            }
        },
        _r_()
    }),
    _r_()
}(),
B.define("screen-reader-detection/chromevox", function(e, t, i) {
    var n, a;
    function r() {
        _i_("3da:7d2555f1"),
        function e(t, i, n) {
            _i_("3da:5933d345");
            var a, r = t();
            !r && 0 < i && (a = setTimeout(function() {
                _i_("3da:5ccc712d"),
                clearTimeout(a),
                e(t, --i, 2 * n),
                _r_()
            }, n));
            _r_()
        }(o, 7, 100),
        _r_()
    }
    function o() {
        if (_i_("3da:9a08c818"),
        void 0 !== window.cvox && void 0 !== window.cvox.Api && "function" == typeof window.cvox.Api.isChromeVoxActive && window.cvox.Api.isChromeVoxActive())
            return n.trigger("detected_feature", a.features.CHROMEVOX),
            _r_(!0);
        return _r_(!1)
    }
    _i_("3da:2e7c7f70"),
    i.exports = function(e, t) {
        _i_("3da:46531bf8"),
        n = e,
        a = t,
        r(),
        _r_()
    }
    ,
    _r_()
}),
B.define("screen-reader-detection/mousepos", function(e, t, i) {
    _i_("3da:7fd64a75");
    var r, o, _ = e("jquery"), s = ["A", "BUTTON"];
    function n() {
        _i_("3da:fb39efa1");
        var n = !1
          , a = {
            x: -1 / 0,
            y: -1 / 0
        };
        document.body.addEventListener("keydown", function(e) {
            _i_("3da:7f0af3f2");
            var t = 13 === e.keyCode || 32 === e.keyCode
              , i = 0 <= s.indexOf(document.activeElement.tagName);
            t && i && (n = !0),
            _r_()
        }, !0),
        document.body.addEventListener("mousemove", function(e) {
            _i_("3da:16a09abe"),
            a = {
                x: e.clientX,
                y: e.clientY
            },
            _r_()
        }, !0),
        document.body.addEventListener("click", function(e) {
            if (_i_("3da:759ed3c0"),
            !_(e.target).closest(s.join(",")).length)
                return _r_();
            if (!e.isTrusted || n)
                return n = !1,
                _r_();
            n = !1;
            var t = Math.abs(a.x - e.clientX)
              , i = Math.abs(a.y - e.clientY);
            n || t + i < 100 || !function(e) {
                if (_i_("3da:ee41c014"),
                "msie" === B.env.b_browser && e.clientX <= 0 && e.clientY <= 0)
                    return _r_(!0);
                if (0 === e.clientX && 0 === e.clientY)
                    return _r_(!0);
                var t = e.target.getBoundingClientRect()
                  , i = {
                    x: t.left + t.width / 2,
                    y: t.top + t.height / 2
                }
                  , n = {
                    x: Math.round(Math.abs(i.x - e.clientX)),
                    y: Math.round(Math.abs(i.y - e.clientY))
                };
                return _r_(0 === n.x && 0 === n.x)
            }(e) || r.trigger("detected_feature", o.features.MOUSEPOS),
            _r_()
        }, !0),
        _r_()
    }
    i.exports = function(e, t) {
        _i_("3da:46531bf81"),
        r = e,
        o = t,
        n(),
        _r_()
    }
    ,
    _r_()
}),
B.define("screen-reader-detection/fast-click", function(e, t, i) {
    _i_("3da:01f00118");
    var n, a, r = e("jquery"), o = [], _ = [{
        name: "fast-click",
        type: "mouseup",
        browsers: ["chrome", "opera", "safari"],
        match: {
            previous: {
                type: "mousedown",
                timeDiff: 5,
                matchElement: !0
            }
        }
    }, {
        name: "fast-click-no-dblclick",
        type: "mouseup",
        browsers: ["firefox", "edge"],
        match: {
            previous: {
                type: "mousedown",
                timeDiff: 5,
                matchElement: !0
            }
        },
        rejections: [{
            previous: {
                type: "mouseup",
                timeDiff: 50,
                matchElement: !0
            }
        }]
    }, {
        name: "ghost-click",
        type: "click",
        browsers: ["msie"],
        match: {
            hasOriginalEvent: !0
        },
        rejections: [{
            previous: {
                type: "click",
                timeDiff: 500,
                targetSelector: "label"
            }
        }, {
            previous: {
                type: "keydown",
                timeDiff: 500
            }
        }, {
            previous: {
                type: "keyup",
                timeDiff: 500,
                matchElement: !0
            }
        }, {
            previous: {
                type: "mouseup",
                timeDiff: 500,
                matchElement: !0
            }
        }]
    }];
    function s(t, i) {
        if (_i_("3da:be0a52ad"),
        void 0 === i.previous && i.hasOriginalEvent && void 0 !== t.originalEvent)
            return _r_(!0);
        var e = o.some(function(e) {
            _i_("3da:0c441e8c");
            try {
                if (i.previous.type !== e.type)
                    return _r_(!1);
                if (i.previous.timeDiff < t.timeStamp - e.timeStamp)
                    return _r_(!1);
                if (!0 === i.previous.matchElement && e.target !== t.target)
                    return _r_(!1);
                if (void 0 !== i.previous.targetSelector && !r(e.target).is(i.previous.targetSelector))
                    return _r_(!1);
                return _r_(!0)
            } catch (e) {
                return _r_(!1)
            }
            _r_()
        });
        return _r_(e)
    }
    function d() {
        _i_("3da:33646320"),
        r(document.body).on("keyup keydown mouseup mousedown click", function(t) {
            if (_i_("3da:fc0bf3c1"),
            B.env.touch_os)
                return _r_();
            if (a.winLostFocus)
                return _r_();
            if (!r(t.target).is("a, button, input, label") && 0 === r(t.target).closest("a, button").length)
                return _r_();
            _.filter(function(e) {
                return _i_("3da:aebabb76"),
                _r_(-1 < e.browsers.indexOf(B.env.b_browser))
            }).filter(function(e) {
                return _i_("3da:be3e821b"),
                _r_(e.type === t.type)
            }).filter(function(e) {
                return _i_("3da:6dcea367"),
                _r_(s(t, e.match))
            }).filter(function(e) {
                return _i_("3da:405c0e65"),
                _r_(function(t, e) {
                    if (_i_("3da:2668b8e7"),
                    !e.rejections)
                        return _r_(!0);
                    if (!1 === e.rejections.some(function(e) {
                        return _i_("3da:4d8c5451"),
                        _r_(s(t, e))
                    }))
                        return _r_(!0);
                    _r_()
                }(t, e))
            }).forEach(function(e) {
                _i_("3da:08428693"),
                n.trigger("detected_feature", a.features.FAST_CLICK),
                _r_()
            }),
            o.unshift(t),
            15 < o.length && o.pop(),
            _r_()
        }),
        _r_()
    }
    i.exports = function(e, t) {
        _i_("3da:46531bf82"),
        n = e,
        a = t,
        d(),
        _r_()
    }
    ,
    _r_()
}),
B.define("screen-reader-detection/calendar", function(e, t, i) {
    _i_("3da:4d1d4e82");
    var n, a, r = e("jquery");
    i.exports = function(e, t) {
        _i_("3da:3900bb52"),
        n = e,
        a = t,
        r(".sb-searchbox").first().length && (_i_("3da:787fd14d"),
        r(".sb-searchbox").on("focus.srd", ".b-datepicker .sb-date-field__icon-btn", function() {
            _i_("3da:20ab2391"),
            a.tabPressed ? n.trigger("detected_feature", a.features.FOCUS_CALENDAR_ICON) : n.trigger("detected_feature", a.features.FOCUS_CALENDAR_ICON_NO_TAB),
            _r_()
        }),
        _r_()),
        _r_()
    }
    ,
    _r_()
}),
B.define("screen-reader-detection/stmc", function(e, t, i) {
    _i_("3da:db596583");
    var n, a, r = e("jquery")(".a11y-skip-to-content");
    function o() {
        var e;
        if (_i_("3da:c5826b8a"),
        a.winLostFocus)
            return a.winLostFocus = !1,
            _r_();
        e = a.features.STMC_FOCUS,
        a.tabPressed || (e = a.features.STMC_FOCUS_NO_TAB),
        n.trigger("detected_feature", e),
        _r_()
    }
    i.exports = function(e, t) {
        _i_("3da:46531bf83"),
        n = e,
        a = t,
        _i_("3da:f42ccd66"),
        r.on("focus.a11y_srd", o),
        _r_(),
        _r_()
    }
    ,
    _r_()
}),
B.define("screen-reader-detection/buttons-sequence", function(e, t, i) {
    _i_("3da:a8c54f70");
    var n, a, r, o, _, s = e("jquery"), d = 0, c = 3, l = 0;
    function u() {
        if (_i_("3da:e3467b20"),
        _ && (s(this).next().is(_) || s(this).prev().is(_)))
            return _r_();
        _ = s(this),
        c <= ++l && (n.trigger("detected_feature", a.features.BUTTON_FOCUS_SEQUENCE),
        l = 0),
        _r_()
    }
    function f() {
        _i_("3da:d02de4fe"),
        l = 0,
        _r_()
    }
    i.exports = function(e, t) {
        _i_("3da:46531bf84"),
        n = e,
        a = t,
        function() {
            if (_i_("3da:9a541ccd"),
            r = s("button"),
            d = r.length,
            o = s("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex]:not(button), *[contenteditable]"),
            d < 2)
                return _r_();
            d < c && (c = d),
            r.on("focus", u),
            o.on("focus", f),
            _r_()
        }(),
        _r_()
    }
    ,
    _r_()
}),
B.define("screen-reader-detection", function(e, t, i) {
    "use strict";
    _i_("3da:de586c46");
    var n = e("event-emitter")
      , a = e("jquery")
      , r = "11_srd"
      , o = 8
      , _ = 0
      , s = {
        DEBUG: {
            id: 9999,
            score: 9999,
            cg: 9999
        },
        IOS: {
            id: 1,
            score: o,
            cg: -1
        },
        CHROMEVOX: {
            id: 2,
            score: o,
            cg: 1
        },
        FAST_CLICK: {
            id: 5,
            score: 3,
            cg: -1
        },
        STMC_FOCUS: {
            id: 7,
            score: 5,
            cg: -1
        },
        STMC_FOCUS_NO_TAB: {
            id: 8,
            score: 5,
            cg: 3
        },
        BUTTON_FOCUS_SEQUENCE: {
            id: 9,
            score: 3,
            cg: 4
        },
        FOCUS_CALENDAR_ICON: {
            id: 11,
            score: 5,
            cg: -1
        },
        FOCUS_CALENDAR_ICON_NO_TAB: {
            id: 12,
            score: 3,
            cg: 5
        },
        MOUSEPOS: {
            id: 16,
            score: 3,
            cg: -1
        }
    }
      , d = []
      , c = []
      , l = !1
      , u = !1
      , f = []
      , h = {
        features: s,
        winLostFocus: !1,
        tabPressed: !1
    }
      , p = new n;
    function m(e) {
        _i_("3da:0f7cfe7e");
        var t, i = !1;
        if (!(e && e.id && e.cg && e.score))
            return _r_();
        for (t = 0; t < d.length; t++)
            if (d[t].id === e.id) {
                i = !0;
                break
            }
        for (t = 0; t < f.length; t++)
            f[t](e);
        if (i)
            return _r_();
        d.push({
            id: e.id
        }),
        _ += e.score,
        o <= _ ? (y(!0),
        function() {
            _i_("3da:71422294");
            for (var e = c.length; 0 <= e; e--)
                "function" == typeof c[e] && (c[e](),
                c.splice(e, 1));
            _r_()
        }()) : y(!1),
        _r_()
    }
    function b() {
        _i_("3da:885b020d"),
        h.winLostFocus = !0,
        _r_()
    }
    function g() {
        _i_("3da:34184027");
        var e = setTimeout(function() {
            _i_("3da:96805cef"),
            h.winLostFocus = !1,
            clearTimeout(e),
            _r_()
        }, 100);
        _r_()
    }
    function v(e) {
        _i_("3da:2e534d0f");
        var t = e.which;
        h.tabPressed = 9 === t,
        _r_()
    }
    function y(e) {
        _i_("3da:ef12fc60");
        var t = new Date;
        B.env.a11y_is_sr_v5 = !!e;
        try {
            var i = {
                features: d,
                score: _,
                detected: B.env.a11y_is_sr_v5
            };
            e && !u && (i.action = B.env.b_action,
            "book" === i.action && (i.action = i.action + B.env.b_stage)),
            a.cookie(r, JSON.stringify(i), {
                path: "/",
                domain: "booking.com",
                expires: t.setDate(t.getDate() + 7)
            }),
            function(e) {
                if (_i_("3da:b9a88882"),
                !B.env.feature_a11y_store_srd_data || "app" !== B.env.b_server_role)
                    return _r_();
                e.features && (e.features = JSON.stringify(e.features.map(function(e) {
                    return _i_("3da:2baa3174"),
                    _r_({
                        id: e.id
                    })
                })));
                a.post("/srd_data", e),
                _r_()
            }(i)
        } catch (e) {
            B.reportError(e, "a11y_srd")
        }
        _r_()
    }
    function w() {
        _i_("3da:b62ee150");
        try {
            var e = JSON.parse(a.cookie(r) || "{}");
            (d = (d = e.features || []).map(function(e) {
                return _i_("3da:572c1f39"),
                _r_(function(e) {
                    for (var t in _i_("3da:6c9eca78"),
                    s)
                        if (s[t].id === e)
                            return _r_(s[t]);
                    return _r_(void 0)
                }(e.id))
            }).filter(function(e) {
                return _i_("3da:c49557ed"),
                _r_(!!e)
            })).length && (_ = d.reduce(function(e, t) {
                return _i_("3da:891066bb"),
                _r_(e + t.score)
            }, 0)),
            u = e.action || !1,
            B.env.a11y_is_sr_v5 = o <= _
        } catch (e) {
            B.env.a11y_is_sr_v5 = !1,
            B.reportError(e, "a11y_srd")
        }
        _r_()
    }
    function k() {
        return _i_("3da:5c74d08a"),
        _r_(B.env.a11y_is_sr_v5)
    }
    B.env.feature_a11y_store_srd_data && "app" === B.env.b_server_role && a.post("/srd_data", {
        features: "[]"
    });
    try {
        _i_("3da:477b1958"),
        w(),
        k() && (l = !0),
        function() {
            for (var e in _i_("3da:0dcee388"),
            h.features)
                h.features[e].name = e.toLowerCase();
            _r_()
        }(),
        p.on("detected_feature", m),
        e("screen-reader-detection/mousepos")(p, h),
        e("screen-reader-detection/stmc")(p, h),
        e("screen-reader-detection/chromevox")(p, h),
        e("screen-reader-detection/calendar")(p, h),
        e("screen-reader-detection/buttons-sequence")(p, h),
        e("screen-reader-detection/fast-click")(p, h),
        a(window).on("blur.a11y_srd", b).on("focus.a11y_srd", g),
        a(document).on("keydown.a11y_srd", v),
        _r_()
    } catch (e) {
        B.reportError(e, "a11y_srd")
    }
    i.exports = {
        onDetect: function(e) {
            if (_i_("3da:2a48acf3"),
            "function" != typeof e)
                return _r_(this);
            if (k())
                return e(),
                _r_(this);
            return c.push(e),
            _r_(this)
        },
        onFeatureDetect: function(e) {
            return _i_("3da:a0b47608"),
            "function" == typeof e && f.push(e),
            _r_(this)
        },
        getSubscribers: function() {
            return _i_("3da:303b72bf"),
            _r_(f)
        },
        getCurrentScore: function() {
            return _i_("3da:f5d6c9b0"),
            _r_(_)
        },
        wasDetectedOnPageLoad: function() {
            return _i_("3da:ddfde322"),
            _r_(l)
        },
        getFirstSeenAction: function() {
            return _i_("3da:ee992b62"),
            _r_(u)
        }
    },
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:4391f924"),
    e("jquery");
    var t = e("et")
      , i = e("screen-reader-detection")
      , n = {
        OTfdASFBPIabKeKeZQObdSVQZRO: {
            options: {
                events: "ready",
                condition: "www" === B.env.b_site_type
            }
        },
        OTfdASFZKZPHceNfRDccSfKLfdPLQLQZRO: {
            options: {
                events: "ready",
                condition: "www" === B.env.b_site_type && "index" === B.env.b_action
            },
            callback: function() {
                _i_("3da:49896dbe");
                i.onDetect(function() {
                    _i_("3da:64f13231"),
                    t.stage("OTfdASFZKZPHceNfRDccSfKLfdPLQLQZRO", 2),
                    _r_()
                }),
                _r_()
            }
        }
    };
    function a(e) {
        return _i_("3da:013f8cab"),
        _r_(function() {
            _i_("3da:81fdb376"),
            i.onDetect(function() {
                _i_("3da:0669e8e1"),
                t.stage(e, 1),
                _r_()
            }),
            _r_()
        })
    }
    for (var r in n) {
        var o = "object" == typeof n[r].options ? n[r].options : {}
          , _ = "function" == typeof n[r].callback ? n[r].callback : a(r);
        B.when(o).run(_)
    }
    _r_()
}),
B.when({
    events: "ready",
    condition: B.env.is_user_center_bar
}).require(["main/user-center-bar"], function(t) {
    "use strict";
    _i_("3da:cd0032dd");
    var n, i, a, r = {
        currency_selector: ".js-uc-currency",
        language_selector: ".js-uc-language",
        notifications: ".js-uc-notifications",
        current_account: ".js-uc-account"
    }, o = 27, _ = 32, s = 37, d = 38, c = 39, l = 40, u = 0;
    function f(e) {
        switch (_i_("3da:9818bf02"),
        (i = $("a[role=option]", n)).length || (i = $("li[role=listitem]", n)),
        e.keyCode) {
        case o:
            t.hideDropdowns(),
            window.removeEventListener("keydown", f);
            break;
        case _:
            e.preventDefault(),
            i[u] && $(i)[u].click();
            break;
        case c:
        case l:
            e.preventDefault(),
            u < i.length - 1 && u++,
            i[u] && i[u].focus();
            break;
        case s:
        case d:
            e.preventDefault(),
            0 < u && u--,
            i[u] && i[u].focus();
            break;
        default:
            return _r_()
        }
        _r_()
    }
    B.eventEmitter.bind("uc_popover_showed", function(e, t) {
        _i_("3da:b800c98f"),
        a = t.id;
        var i = r[a];
        if (!i)
            return _r_();
        if ($(i).find(".popover_trigger").attr("aria-expanded", "true"),
        n = $(i).find(".user_center_popover"),
        u = 0,
        window.addEventListener("keydown", f),
        !n.length || !n.is(":visible"))
            return _r_();
        n.focus(),
        _r_()
    }),
    B.eventEmitter.bind("uc_popover_hidden", function(e) {
        _i_("3da:2dde8eb7");
        var t = $.map(r, function(e, t) {
            return _i_("3da:908e5d05"),
            _r_(e)
        }).join(", ");
        $(t).find(".popover_trigger").attr("aria-expanded", "false"),
        _r_()
    }),
    _r_()
}),
function(o, _) {
    var s, d, c;
    _i_("3da:47332ba5");
    var l = 0;
    function i(e) {
        if (_i_("3da:55a19ed7"),
        s || (s = o(".notice-wrap")),
        !s.length)
            return _r_();
        d || (d = parseInt(s.css("top"), 10)),
        s.css({
            transition: "0.3s top",
            "-webkit-transition": "0.3s top"
        });
        var t = +new Date + e.stayTime;
        l < t && (l = t);
        var r = d;
        (function e(t) {
            _i_("3da:6721a0d3");
            var i = o(".displace_growl:visible")
              , n = function() {
                _i_("3da:67bf40f8");
                var e = o(document).scrollTop()
                  , t = _.tools.dom.getBounds(s);
                return t.top = d + e,
                t.bottom = d + t.height + e,
                _r_(t)
            }();
            r = d,
            i.each(function() {
                _i_("3da:a195bd1c");
                var e = _.tools.dom.getBounds(this)
                  , t = e.bottom;
                _.tools.dom.boundsOverlap(e, n) && r <= t && (r = d + Math.max(0, t)),
                _r_()
            });
            var a = Math.max(d, r - o(document).scrollTop());
            t != a && s.css({
                top: a + "px"
            }),
            new Date < l && (clearTimeout(c),
            c = setTimeout(e, 500, a)),
            _r_()
        }
        ).call(),
        _r_()
    }
    B.when({
        events: "ready"
    }).run(function(e) {
        if (_i_("3da:bb8592a0"),
        !window.navigator || !navigator.platform || -1 == navigator.platform.indexOf("Mac"))
            return _r_();
        o(".uc_genius_tooltip").addClass("displace_growl"),
        _.eventEmitter.bind("growl:show", function(e, t) {
            _i_("3da:64398639"),
            i(t),
            _r_()
        }),
        _r_()
    }),
    _r_()
}(window.jQuery, window.booking),
function(e, t) {
    _i_("3da:4bdafb2d"),
    t(document).ready(function() {
        _i_("3da:4e7963e6"),
        e.user && e.user.showGeniusForGoogle && booking.eventEmitter.bind("auth-dialog:show", function() {
            _i_("3da:acea74ef"),
            t(".user_center_popover").css("z-index", "999"),
            e.lightbox.rePosition(),
            t(".user_access_email").focus(),
            _r_()
        }),
        _r_()
    }),
    _r_()
}(window.booking, window.jQuery),
function(t) {
    "use strict";
    _i_("3da:1fc8329b"),
    $(".profile-area__nav").delegate(".js-insiderguides-track", "click", function() {
        _i_("3da:f9941ec2");
        var e = $(this).data("trackname");
        t.require("ga-tracker").trackEvent("Insider Guides", "Profile Nav Click", [t.env.b_action, ":", e].join(" ")),
        _r_()
    }),
    _r_()
}(booking),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:eb5aa925"),
    $(".ga-sh-tracker").click(function() {
        _i_("3da:7d6c5c66");
        var e, t = $(this).data("google-track-event-category") || "Click", i = $(this).data("google-track-event-label") || "", n = [];
        "[" === (e = (e = $(this).data("google-track-event-action") || "").replace(/\n/g, "")).substr(0, 1) && "]" === e.substr(-1) ? n = e.substr(1, e.length - 2).split(";") : e && n.push(e);
        for (var a = B.require("ga-tracker"), r = 0; r < n.length; r++)
            n[r] && a.trackEvent(t, n[r], i);
        _r_()
    }),
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:ba64d522");
    var t = e("user-left-client");
    if (!(t.enabled && B.browserStorageHandler && B.browserStorageHandler.isLocalStorageSupported()))
        return _r_();
    t.register(B.env.b_action || "_client_"),
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    "use strict";
    _i_("3da:705e8c77");
    var n = 167;
    function t(e) {
        _i_("3da:f1489d1f"),
        this.$element = $(e),
        this.priority_ = this.$element.data("priority") || 5,
        _r_()
    }
    function a(e) {
        _i_("3da:12916aea"),
        this.$element = $(e),
        this.items = $.map(this.$element.find(".user_center_option"), function(e) {
            return _i_("3da:4c54d545"),
            _r_(new t(e))
        }),
        this.sortedItems = this.items.sort(function(e, t) {
            return _i_("3da:98a42074"),
            _r_(e.priority() - t.priority())
        }),
        _r_()
    }
    "ar" === B.env.b_lang && (n = 295),
    "zh-cn" === B.env.b_lang_for_url && (n = 236),
    t.prototype.width = function() {
        return _i_("3da:7475b142"),
        this.width_ || (this.width_ = this.$element.outerWidth()),
        _r_(this.width_)
    }
    ,
    t.prototype.priority = function() {
        return _i_("3da:02cc3d72"),
        _r_(this.priority_)
    }
    ,
    t.prototype.hide = function() {
        return _i_("3da:e9a1419e"),
        this.$element.hide(),
        _r_(this)
    }
    ,
    t.prototype.show = function() {
        return _i_("3da:b996baf8"),
        this.$element.show(),
        _r_(this)
    }
    ,
    a.prototype.fitWidth = function(i) {
        return _i_("3da:f6a7ba65"),
        $.each(this.sortedItems, function(e, t) {
            _i_("3da:da870481"),
            0 < i - t.width() ? (i -= t.width(),
            t.show()) : t.hide(),
            _r_()
        }),
        B.events && B.events.trigger("header:fit-width"),
        _r_(this)
    }
    ,
    function() {
        _i_("3da:dfb60251");
        var e = $(".header-wrapper")
          , t = new a(e.find(".user_center_nav"));
        function i() {
            _i_("3da:90dd1af3"),
            t.fitWidth(e.width() - n),
            _r_()
        }
        $(window).bind("resize", B.tools.functions.throttle(i, 300)),
        i(),
        _r_()
    }(),
    _r_()
}),
function() {
    _i_("3da:c8fd0bff");
    var t = {
        priority: 9,
        init: function() {
            _i_("3da:67683191"),
            this.initializeNotifications(),
            _r_()
        },
        initializeNotifications: function() {
            _i_("3da:3547f6bb");
            var e = $("#notificationMenu .alert");
            e.css({
                display: "block",
                visibility: "hidden"
            });
            var t = $("#formwrap")
              , i = t.height()
              , n = $(".sidebar_menu_placeholder").height();
            i < n && t.animate({
                "min-height": n
            }, {
                duration: 400
            }),
            e.css({
                display: "none",
                visibility: "visible"
            }).css("opacity", 0).slideDown(500).animate({
                opacity: 1
            }, {
                queue: !1,
                duration: 750
            }),
            _r_()
        }
    };
    B.when({
        events: "ready"
    }).run(function(e) {
        _i_("3da:a9e47a0f"),
        t.init(),
        _r_()
    }),
    _r_()
}(),
B.when({
    events: "ready"
}).run(function(a) {
    _i_("3da:be2f6c2a");
    var e = {
        priority: 9,
        run: function() {
            _i_("3da:89d0a48b");
            var e = $("#survey").attr("surveyurl");
            if (e && (window.b_survey_url = e,
            booking.env.survey_key = $("#survey").attr("surveykey"),
            booking.env.surveytracklink = "/outgoinglink/survey/" + booking.env.survey_key),
            void 0 !== window.b_survey_url && window.b_survey_url) {
                var i = $("#conf_survey,#survey,#conf_survey_bottom")
                  , n = function() {
                    _i_("3da:f46c5266"),
                    "hotel" === booking.env.b_action && a("booking-sticker").update(),
                    _r_()
                }
                  , t = function(e) {
                    if (_i_("3da:be242669"),
                    booking.env.showRevdSurvey2016Q1)
                        var t = $(e.target).val();
                    else
                        t = $(this).val();
                    return t && ("accept" === t || "Yes" === t || "yes" === t || "Ja, ik doe mee" === t || "Okay" === t ? window.open(window.b_survey_url, "booking_survey_window") : i.hide("normal", n),
                    $.get("/survey?decision=" + t + "&survey_key=" + booking.env.survey_key, {}, function(e) {
                        _i_("3da:398c4c37"),
                        i.hide("normal", function() {
                            _i_("3da:5951ed50"),
                            i.remove(),
                            n(),
                            _r_()
                        }),
                        _r_()
                    })),
                    _r_(!1)
                };
                booking.env.showRevdSurvey2016Q1 ? (booking.events.on("REVIEWS:fetched", function() {
                    _i_("3da:7f514403"),
                    i.addClass("show"),
                    _r_()
                }),
                i.find("button").on("click", t)) : (i.fadeIn("normal", n),
                i.find("button").click(t))
            }
            _r_()
        },
        init: function() {
            if (_i_("3da:dff626a9"),
            this.run(),
            B.env.b_run_sr_ajax) {
                var t = this;
                B.require(["searchresults/events"], function(e) {
                    _i_("3da:2cdd7226"),
                    e.on(e.UI_RESULTS_UPDATED, function() {
                        _i_("3da:648fe614"),
                        t.run(),
                        _r_()
                    }),
                    _r_()
                })
            }
            _r_()
        }
    };
    B.env.b_check_ot_consent ? $.cookie("OptanonAlertBoxClosed") && e.init() : B.env.fe_may_set_marketing_cookies ? e.init() : B.env.force_initialize_survey_module_on_confirmation_page ? e.init() : B.env.fe_cookie_warning ? B.eventEmitter && "function" == typeof B.eventEmitter.on && B.eventEmitter.on("ACCEPT_COOKIE_POLICY", function() {
        _i_("3da:a2172e81"),
        e.init(),
        _r_()
    }) : B.eventEmitter && "function" == typeof B.eventEmitter.on && B.eventEmitter.on("COOKIE_CONSENT_PROVIDED", function() {
        _i_("3da:d08fb95c"),
        e.init(),
        _r_()
    }),
    _r_()
}),
B.define("component/banner", function(e, t, i) {
    "use strict";
    _i_("3da:f700273a");
    var n = e("component");
    i.exports = n.extend({
        init: function() {
            _i_("3da:3ecb33341"),
            this.addEventListeners(),
            _r_()
        },
        addEventListeners: function() {
            _i_("3da:7abf0601"),
            this.$el.on("click", ".js-close", this.hideEl.bind(this)),
            _r_()
        },
        hideEl: function(e) {
            _i_("3da:5561c744"),
            e.preventDefault(),
            this.$el.fadeOut("fast"),
            _r_()
        }
    }),
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:ec18ec9d");
    var t = e("jquery");
    t(".fe_banner__dismiss").click(function(e) {
        _i_("3da:70104f88"),
        e.preventDefault(),
        t(this).parents(".fe_banner").fadeOut("fast", function() {}),
        _r_()
    }),
    _r_()
}),
B.when({
    events: "focus .fe_banner__dismiss"
}).run(function(e) {
    _i_("3da:eceeb839");
    var t = e("jquery");
    t(".fe_banner__dismiss").keypress(function(e) {
        _i_("3da:3a79db11"),
        0 !== e.keyCode && 32 !== e.keyCode && 13 !== e.keyCode || (e.preventDefault(),
        t(this).trigger("click")),
        _r_()
    }),
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:17c56f3e"),
    {
        $ul: !1,
        setFocusAndOrTrack: function() {
            _i_("3da:6b5d60d1");
            var e = this;
            setTimeout(function() {
                _i_("3da:588343c9"),
                e.$ul.find(".user_access_email:visible:first").select(),
                _r_()
            }, 50),
            _r_()
        },
        setFocusSignIn: function() {
            _i_("3da:7c5718fb");
            var e = this;
            e.$ul.find(".signin_cta").add(".user_access_section_trigger").click(function() {
                _i_("3da:c0e5864e"),
                e.setFocusAndOrTrack(),
                _r_()
            }),
            _r_()
        },
        setFocusSignUp: function() {
            _i_("3da:641555b5");
            var e = this;
            e.$ul.find(".user_center_nav").find(".user_access_signup_menu_tab").click(function() {
                _i_("3da:c0e5864e1"),
                e.setFocusAndOrTrack(),
                _r_()
            }),
            _r_()
        },
        init: function() {
            _i_("3da:fcdd81e4"),
            this.$ul = $(".user_center_nav"),
            this.setFocusSignIn(),
            this.setFocusSignUp(),
            _r_()
        }
    }.init(),
    _r_()
}),
booking.browserStorageHandler = function(c, e, l, u) {
    _i_("3da:a11e61ce");
    var f = !1;
    try {
        (f = !(!c.localStorage || !c.sessionStorage)) && c.localStorage.setItem("btest", "1")
    } catch (e) {
        f = !1
    }
    var n = {
        _readCookie: function(e) {
            _i_("3da:51d0b270");
            var t = {};
            try {
                "undefined" != typeof JSON && (t = JSON.parse(u.cookie(e)) || {})
            } catch (e) {}
            return _r_(t)
        },
        _modifySingleValue: function(e, t, i, n, a) {
            if (_i_("3da:22c7266b"),
            !t || !i)
                return _r_(!1);
            if (f && !a) {
                var r = "session" === e ? c.sessionStorage : c.localStorage;
                if ("delete" === t)
                    r.removeItem(i);
                else
                    try {
                        r.setItem(i, n)
                    } catch (e) {}
            } else {
                var o, _, s, d;
                "session" === e ? o = "bs" : (o = "b",
                d = 30),
                _ = this._readCookie(o),
                "delete" === t ? delete _[i] : _[i] = n,
                s = u.isEmptyObject(_) ? null : JSON.stringify(_),
                u.cookie(o, s, {
                    expires: d,
                    path: "/",
                    domain: l.b_domain_end
                })
            }
            _r_()
        },
        _getValue: function(e, t, i) {
            if (_i_("3da:f1ea0118"),
            !t)
                return _r_(void 0);
            if (f && !i) {
                var n = "session" === e ? c.sessionStorage : c.localStorage;
                return _r_(n.getItem(t))
            }
            var a, r;
            return a = "session" === e ? "bs" : "b",
            r = this._readCookie(a),
            _r_(r[t])
        }
    };
    return _r_({
        addSessionValue: function(e, t, i) {
            return _i_("3da:b380b492"),
            _r_(n._modifySingleValue("session", "add", e, t, i))
        },
        deleteSessionValue: function(e, t) {
            return _i_("3da:d61f09c2"),
            _r_(n._modifySingleValue("session", "delete", e, void 0, t))
        },
        getSessionValue: function(e, t) {
            return _i_("3da:d6b8f5d6"),
            _r_(n._getValue("session", e, t))
        },
        addPermanentValue: function(e, t, i) {
            return _i_("3da:fe0aaa49"),
            _r_(n._modifySingleValue("permanent", "add", e, t, i))
        },
        deletePermanentValue: function(e, t) {
            return _i_("3da:99a942db"),
            _r_(n._modifySingleValue("permanent", "delete", e, void 0, t))
        },
        getPermanentValue: function(e, t) {
            return _i_("3da:07d7aebb"),
            _r_(n._getValue("permanent", e, t))
        },
        isLocalStorageSupported: function() {
            return _i_("3da:1bca3a3a"),
            _r_(f)
        }
    })
}(window, document, booking.env, window.jQuery),
booking.define && booking.define("browser-storage-handler", booking.browserStorageHandler),
B.define("main/user-center-bar", function(e, t, i) {
    _i_("3da:6d5e90f8");
    var f, h = e("jquery"), a = e("browser-storage-handler");
    i.exports = {
        init: function() {
            _i_("3da:fc2a77a5"),
            this.initializeUserCenterBar(),
            booking.events.emit("user_center_bar:init"),
            _r_()
        },
        initializeUserCenterBar: function() {
            _i_("3da:ac501c40");
            var o = this
              , _ = [];
            _ = _.concat([{
                className: "uc_language",
                offset: 0
            }]),
            h(".user_imported_faves_new_badge").hide(),
            h(document.body).on("click", ".popover_trigger", function(e) {
                _i_("3da:ccf44803");
                var t = h(this);
                if (t.hasClass("js-disable-popover"))
                    return _r_();
                if (e && e.currentTarget && h(e.currentTarget).hasClass("profile_menu_trigger") && booking.eventEmitter) {
                    var i = h(e.currentTarget).parent();
                    if (!i)
                        return _r_();
                    var n = i.attr("data-id") || i.attr("id");
                    booking.eventEmitter.trigger("user_access_menu_open_close", {
                        id: n
                    })
                }
                e.preventDefault();
                for (var a = {}, r = _.length - 1; 0 <= r; r--) {
                    if (t.parent().hasClass(_[r].className)) {
                        a.offset = _[r].offset;
                        break
                    }
                }
                t.next(".user_center_popover").is(":visible") ? o.hideDropdowns() : (o.hideDropdowns(t.parent()),
                o.positionPopover(t, a)),
                _r_()
            }),
            h(document).ready(function() {
                _i_("3da:e47c045f"),
                h("body").on("click", function(e) {
                    _i_("3da:74908221"),
                    0 === h(e.target).closest(".user_center_option").length && o.hideDropdowns(),
                    _r_()
                }),
                (booking.user.showUserLoginOnLoad || booking.user.showUserLoginOnLoadDSF) && h(".signin_cta").click(),
                _r_()
            }),
            !a.getSessionValue("np_user_popover_continue_registration") && h(".uc_account .popover_trigger").length && h(".new_partnership_user_center_popover").length && (o.positionPopover(h(".uc_account .popover_trigger"), {
                popover: ".new_partnership_user_center_popover"
            }),
            a.addSessionValue("np_user_popover_continue_registration", !0)),
            h(".new_partnership_user_center_popover").on("click", function(e) {
                _i_("3da:67fc1361"),
                e.stopPropagation(),
                _r_()
            });
            var i = !1
              , n = !1;
            h(".uc_viewed_hotels .popover_trigger").click(function() {
                if (_i_("3da:f5daddcc"),
                i || n)
                    return _r_();
                booking.eventEmitter.trigger("uc_recently_viewed_opened"),
                n = !0;
                var e = h(this).attr("data-href")
                  , t = h(".uc_viewedhotels .hotels_container");
                h.ajax({
                    url: e,
                    type: "GET",
                    success: function(e) {
                        _i_("3da:6b63a930"),
                        t.html(e),
                        i = !0,
                        booking.eventEmitter.trigger("uc_recently_viewed_loaded"),
                        _r_()
                    },
                    complete: function() {
                        _i_("3da:e4ce1fe0"),
                        h(".uc_viewedhotels .ajax_loading").hide(),
                        h(".user_search_header").hide(),
                        h(".no_listing:visible").length ? h(".uc_viewed_hotels .popover_content").addClass("empty_list") : (h(".user_search_header").appendTo(".uc_viewedhotels .popover_footer"),
                        h(".user_search_header").show()),
                        n = !1,
                        _r_()
                    }
                }),
                _r_()
            }),
            h(document).on("click", ".socnet_mailafriend", function() {
                _i_("3da:a1d270e4"),
                setTimeout(function() {
                    _i_("3da:56ea5ba7"),
                    h(".user_center_popover").hide(),
                    booking.env.showFavesToWishlistNotice && h(".popover_notice").remove(),
                    h("li .popover_trigger").removeClass("active_option"),
                    _r_()
                }, 200),
                _r_()
            }),
            h(document).on("click", "#user_form a.remove_hotel, #user_form a.user_search_item_remove_link", function(e) {
                _i_("3da:ce227710");
                var t = h(this).attr("href").split("#")[1]
                  , i = {
                    hotel_id: t
                };
                i = o.addDefaultParams(i),
                h.ajax({
                    url: "/hotel_history",
                    type: "DELETE",
                    data: i
                }),
                this.blur();
                var n = h(this).parents(".user_search_item").get(0)
                  , a = n.parentNode;
                return h(n).hide("slow", function() {
                    if (_i_("3da:8cf631c0"),
                    h(".hidden_item", a).length) {
                        var e = h(".hidden_item", a).get(0);
                        h(e).removeClass("hidden_item")
                    }
                    _r_()
                }),
                o.removeOneHome(t),
                h("#user_form .user_search_item:visible").length || h(this).parents("#user_form").find(".user_search_item:visible").length || (h(".uc_viewedhotels .popover_footer").hide(),
                h(".uc_viewed_hotels .popover_content").addClass("empty_list"),
                h(".user_center_popover .no_listing").show()),
                _r_(!1)
            }),
            h(document).on("click", "#user_form a#removeAllHistoryHotel", function() {
                return _i_("3da:cab8dab7"),
                o.removeAll("removeAllHistoryHotel"),
                h(".user_center_popover").hide(),
                h(".uc_viewed_hotels .popover_content").addClass("empty_list"),
                h(".user_searches_content").show(),
                h(".user_searches_content .user_search_item").hide(),
                h(".user_search_footer").hide(),
                h("#user_form .uc_viewed_hotels .popover_footer").remove(),
                h(".uc_viewed_hotels .no_listing").show(),
                _r_(!1)
            }),
            _r_()
        },
        hideDropdowns: function(e) {
            _i_("3da:36f98eec");
            var t = h(".user_center_option").not(e)
              , i = t.find(".user_center_popover:visible")
              , n = h(".new_partnership_user_center_popover");
            f && (f.focus(),
            f = null),
            0 < i.length && (i.hide(),
            booking.eventEmitter.trigger("uc_popover_hidden")),
            booking.env.showFavesToWishlistNotice && h(".popover_notice").remove(),
            n.length && n.remove(),
            t.removeClass("active_option"),
            _r_()
        },
        removeAll: function(e) {
            _i_("3da:d4c8b2a1");
            var t = h("#" + e).parents(".user_searches_content")
              , i = {
                hotel_id: -1
            };
            i = this.addDefaultParams(i),
            h.ajax({
                url: "/hotel_history",
                type: "DELETE",
                data: i
            }),
            this.removeAllHome(),
            h("#" + e).blur(),
            h(".user_search_item", t).each(function() {
                _i_("3da:55f5c33f"),
                h(this).hasClass("no_listing") ? h(this).show("slow") : h(this).hide("slow", function() {
                    _i_("3da:3be83a32"),
                    h(this).remove(),
                    _r_()
                }),
                _r_()
            }),
            h(".user_search_header", t).hide(),
            h(".user_search_footer", t).hide(),
            _r_()
        },
        removeAllHome: function() {
            _i_("3da:5cde94c0"),
            h(".user_searches_content").hide(),
            _r_()
        },
        removeOneHome: function(e) {
            _i_("3da:d1dd04b7"),
            h(".user_searches_content .remove_hotel").each(function() {
                _i_("3da:dc0e562a"),
                h(this).attr("href") == "#" + e && h(this).parents(".user_search_item").remove(),
                _r_()
            }),
            _r_()
        },
        positionPopover: function(e, t) {
            _i_("3da:224aee7c");
            var i = h(e).parent();
            if (!i)
                return _r_();
            var n, a = i.width() / 2;
            n = "string" == typeof t.popover ? h(t.popover, i) : h(".user_center_popover", i),
            "current_account" == i.attr("id") && (1 < n.length || !n.hasClass("uc_genius_tooltip")) && (n = n.filter(":not(.uc_genius_tooltip)"),
            h(".uc_genius_tooltip").remove());
            var r = n.width() / 2
              , o = r - a
              , _ = r - 8
              , s = i.offset().left - h("#bodyconstraint").offset().left
              , d = h("#bodyconstraint").width() - (r + a + s)
              , c = s + a - r;
            d < 0 && 0 < c ? (o -= d,
            _ -= d) : 0 < d && c < 0 && (o += c,
            _ += c);
            var l = t && t.offset;
            if (l && (o += l,
            _ += l),
            n.css("left", -Math.round(o)),
            h(".user_center_popover .uc_top_arrow", i).css("left", _),
            h(".user_center_popover:visible").length && booking.eventEmitter.trigger("uc_popover_hidden"),
            h(".user_center_popover:visible", i).length)
                h(".user_center_popover").hide(),
                booking.eventEmitter.trigger("uc_popover_hidden");
            else {
                var u = i.attr("data-id") || i.attr("id");
                h(".user_center_popover").hide(),
                n.length && (n.show(),
                f = e,
                booking.eventEmitter.trigger("uc_popover_showed", {
                    id: u
                }))
            }
            h("body.user_center #formwrap #signup_password:visible").length && (h("#formwrap #signup_password").css("z-index", "99"),
            h("#formwrap .pwd_strength").css("z-index", "99")),
            h("#dashboard_search #inout").css("z-index", "99"),
            _r_()
        },
        addDefaultParams: function(e) {
            return _i_("3da:6104395f"),
            _r_(h.extend(e, {
                aid: B.env.b_aid,
                sid: B.env.b_sid,
                stype: B.env.b_site_type_id,
                stid: B.env.b_stid,
                label: B.env.b_label
            }))
        }
    },
    _r_()
}),
B.when({
    events: "ready",
    condition: B.env.is_user_center_bar
}).require(["main/user-center-bar"], function(e) {
    _i_("3da:b30150bf"),
    e.init(),
    _r_()
}),
function() {
    _i_("3da:d3ec4f89");
    var e = B.require("ga-tracker");
    B.require("jquery")(document.documentElement).on("click", ".js-raf-center-bar-link", function() {
        _i_("3da:c09f0dab"),
        e.trackEvent(e.referralAdvocateTracker, "click", "center bar"),
        _r_()
    }),
    _r_()
}(),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:f3fc1d6a");
    var i = B.require("jquery");
    function t() {
        _i_("3da:016fe894");
        var e = B.require("lightbox")
          , t = B.jstmpl("bpg_module_overlay").render({
            bpg_label: B.env.bpg_label,
            b_site_type: B.env.b_site_type,
            cs_page_link: B.env.prd_bpg_overlay_cs_link,
            b_companyname: B.env.b_companyname,
            b_action: B.env.b_action
        });
        e.show(t, {
            customWrapperClassName: "bgp_module_overlay",
            autoWidth: !1,
            bCloseButton: !1,
            bAnimation: !1,
            modalLabeledById: "bpg-overlay-content-title",
            addDialogStartEndText: !0
        }),
        i(".bpg-overlay--content").on("click", ".bpg-overlay--close", function() {
            _i_("3da:949a1fbc"),
            e.hide(),
            _r_()
        }),
        _r_()
    }
    !function() {
        _i_("3da:09bcc4b7");
        var e = ["#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip", ".best_price_popup", ".pp_bpg_tooltip_holder", ".bp-usps__usp__title"].join(",");
        i("body").on("click", e, function() {
            _i_("3da:68be873f"),
            B.events.trigger("BPG:Click"),
            _r_()
        }).on("mouseenter", e, function() {
            _i_("3da:bcebab70"),
            B.events.trigger("BPG:Hover"),
            _r_()
        }),
        _r_()
    }(),
    _i_("3da:24617609"),
    i("body").on("click", "a.open-bpg-in-overlay-instead", function(e) {
        _i_("3da:3376df38"),
        e.preventDefault(),
        e.stopPropagation(),
        B.require("lightbox").hide(),
        B.require("async-loader").load({
            js: "async_wpm_overlay_js",
            css: "async_wpm_overlay_css"
        }).then(t),
        _r_()
    }),
    _r_(),
    _r_()
}),
B.define("font-face-on-load", function(e, t, i) {
    "use strict";
    _i_("3da:8f19f5f7");
    var a = e("jquery")
      , f = B.debug("font-face-on-load")
      , h = "sans-serif"
      , n = {
        normal: "400",
        bold: "700"
    }
      , r = {
        tolerance: 2,
        delay: 100,
        glyphs: "",
        success: function() {},
        error: function() {},
        timeout: 5e3,
        weight: "400",
        style: "normal"
    }
      , p = ["display:block", "position:absolute", "top:-999px", "left:-999px", "font-size:48px", "width:auto", "height:auto", "line-height:normal", "margin:0", "padding:0", "font-variant:normal", "white-space:nowrap"]
      , m = '<div style="%s">AxmTYklsjo190QW</div>';
    function o() {
        _i_("3da:a562b552"),
        this.fontFamily = "",
        this.appended = !1,
        this.serif = void 0,
        this.sansSerif = void 0,
        this.parent = void 0,
        this.options = {},
        _r_()
    }
    o.prototype.getMeasurements = function() {
        return _i_("3da:21f719d1"),
        _r_({
            sansSerif: {
                width: this.sansSerif.offsetWidth,
                height: this.sansSerif.offsetHeight
            },
            serif: {
                width: this.serif.offsetWidth,
                height: this.serif.offsetHeight
            }
        })
    }
    ,
    o.prototype.load = function() {
        _i_("3da:b42bd3c4");
        var t, i = new Date, n = this, a = n.serif, r = n.sansSerif, o = n.parent, _ = n.appended, s = this.options, d = s.reference;
        function e(e) {
            return _i_("3da:5ee72a73"),
            _r_(p.concat(["font-weight:" + s.weight, "font-style:" + s.style]).concat("font-family:" + e).join(";"))
        }
        var c = m.replace(/\%s/, e(h))
          , l = m.replace(/\%s/, e("serif"));
        function u(e, t, i) {
            return _i_("3da:e834fba8"),
            _r_(Math.abs(e.width - t.offsetWidth) > i || Math.abs(e.height - t.offsetHeight) > i)
        }
        o || (o = n.parent = document.createElement("div")),
        o.innerHTML = c + l,
        r = n.sansSerif = o.firstChild,
        a = n.serif = r.nextSibling,
        s.glyphs && (r.innerHTML += s.glyphs,
        a.innerHTML += s.glyphs),
        function e() {
            _i_("3da:f5919170"),
            d || (d = document.body),
            !_ && d && (d.appendChild(o),
            _ = n.appended = !0,
            t = n.getMeasurements(),
            r.style.fontFamily = n.fontFamily + ", " + h,
            a.style.fontFamily = n.fontFamily + ", serif"),
            _ && t && (u(t.sansSerif, r, s.tolerance) || u(t.serif, a, s.tolerance)) ? (f.log(n.fontFamily + " font loaded"),
            s.success()) : (_i_("3da:e9b305f9"),
            _r_((new Date).getTime() - i.getTime() > s.timeout) ? (f.error(n.fontFamily + " font loading timed out"),
            s.error()) : !_ && "requestAnimationFrame"in window ? window.requestAnimationFrame(e) : window.setTimeout(e, s.delay)),
            _r_()
        }(),
        _r_()
    }
    ,
    o.prototype.checkFontFaces = function(t) {
        _i_("3da:c2a26529");
        var i = this;
        document.fonts.forEach(function(e) {
            _i_("3da:dd58e149"),
            e.family.toLowerCase() === i.fontFamily.toLowerCase() && (n[e.weight] || e.weight) === "" + i.options.weight && e.style === i.options.style && e.load().then(function() {
                _i_("3da:357f8c05"),
                f.log(i.fontFamily + " font loaded"),
                i.options.success(),
                window.clearTimeout(t),
                _r_()
            }),
            _r_()
        }),
        _r_()
    }
    ,
    o.prototype.init = function(e, t) {
        var i;
        for (var n in _i_("3da:fa5f923d"),
        r)
            t.hasOwnProperty(n) || (t[n] = r[n]);
        this.options = t,
        this.fontFamily = e,
        !t.glyphs && "fonts"in document && "function" == typeof document.fonts.forEach ? (t.timeout && (i = window.setTimeout(a.proxy(function() {
            _i_("3da:b761d933"),
            f.error(this.fontFamily + " font loading timed out"),
            t.error(),
            _r_()
        }, this), t.timeout)),
        this.checkFontFaces(i)) : this.load(),
        _r_()
    }
    ,
    i.exports = function(e, t) {
        _i_("3da:84ea2b9f");
        var i = new o;
        return i.init(e, t),
        _r_(i)
    }
    ,
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:f8541481");
    var t = e("font-face-on-load")
      , i = {
        woff: "//cf.bstatic.com/static/css/fonticons_clean/base64/woff/5d61b8a7156073e5e3e9741f65dda44ae3eef7d2.css",
        opentype: "//cf.bstatic.com/static/css/fonticons_clean/base64/opentype/379fae32e03d316d4fa8a000bd53978baa8de48a.css",
        truetype: "//cf.bstatic.com/static/css/fonticons_clean/base64/truetype/789d396d92f96569dc6900688e31505670801b0e.css"
    }
      , n = function() {
        _i_("3da:49ff48a9"),
        $("body").removeClass("iconfont_is_loading"),
        _r_()
    }
      , a = function() {
        _i_("3da:14359623");
        var e = function() {
            if (_i_("3da:3ccac772"),
            "msie" == B.env.b_browser)
                return _r_("opentype");
            if ("safari" == B.env.b_browser && B.env.b_browser <= 5)
                return _r_("truetype");
            if ("android" == B.env.b_browser && B.env.b_browser_version <= 4.4)
                return _r_("truetype");
            return _r_("woff")
        }();
        return _r_(i[e])
    };
    t("booking-iconset", {
        success: function() {
            _i_("3da:66ad67ca"),
            n(),
            _r_()
        },
        error: function() {
            _i_("3da:bf27aa95"),
            function() {
                _i_("3da:45ce11ac");
                var e = a()
                  , t = document.createElement("link");
                t.type = "text/css",
                t.rel = "stylesheet",
                t.href = e;
                var i = document.createElement("img");
                i.onerror = function() {
                    _i_("3da:cf9417cd"),
                    n(),
                    _r_()
                }
                ,
                i.src = e,
                document.getElementsByTagName("head")[0].appendChild(t),
                _r_()
            }(),
            _r_()
        },
        timeout: 250
    }),
    _r_()
}),
B.define("profile/social/social-connect/social-connect", function(e, t, i) {
    "use strict";
    _i_("3da:0d65e654"),
    i.exports = {
        getEnv: function() {
            return _i_("3da:a0d7c492"),
            _r_(booking.env["social-connect"])
        },
        findPendingState: function() {
            return _i_("3da:853ab917"),
            _r_(this.getEnv().filter(function(e) {
                return _i_("3da:46f95e6f"),
                _r_(/_REQUIRED|_CONFLICT|_EXISTING/.test(e.state))
            })[0])
        },
        clearState: function(e) {
            _i_("3da:c7fc311e"),
            $.get("/update_facebook_connect_state", {
                action: "clear_state",
                state: e.state,
                provider: e.provider
            }),
            _r_()
        }
    },
    _r_()
}),
B.define("profile/social/social-connect-dialogs/social-connect-dialogs", function(e, t, i) {
    "use strict";
    _i_("3da:d806a2b2");
    var n = e("profile/social/social-connect/social-connect");
    i.exports = {
        support: {
            MERGE_REQUIRED: "merge-required",
            EMAIL_REQUIRED: "email-required",
            EMAIL_CONFLICT: "email-conflict",
            EMAIL_EXISTING: "email-existing",
            CONNECTED: void 0
        },
        onload: function() {
            _i_("3da:7f7c1b4e");
            var e = n.findPendingState();
            e && this.show(e),
            _r_()
        },
        selector: function(e) {
            return _i_("3da:eae176c3"),
            _r_(".js-social-connect-dialog--" + e.provider + "-" + this.support[e.state])
        },
        show: function(e) {
            _i_("3da:c6e25cd6");
            var t = $(this.selector(e));
            if (0 === t.length)
                return _r_();
            booking.lightbox.show(t, {
                hideCallBack: n.clearState.bind(n, e),
                customWrapperClassName: "social-connect-dialog-wrapper"
            }),
            _r_()
        }
    },
    "b_run_wechat_connect"in B.env && B.env.b_run_wechat_connect && B.et.track("AcdJFebeHEIbQUdPUMWZYO") && (i.exports.support.UNIONID_CONFLICT = "unionid-conflict"),
    _r_()
}),
B.when({
    condition: B.env.b_run_social_connect,
    events: "ready"
}).run(function() {
    _i_("3da:67288f43"),
    B.require("profile/social/social-connect-dialogs/social-connect-dialogs").onload(),
    _r_()
}),
B.when({
    condition: $('li.uc-notification[data-type="genius_trial_reminder"] a').length
}).run(function(e) {
    _i_("3da:84cf8130"),
    e("jquery")('li.uc-notification[data-type="genius_trial_reminder"] a').click(function(e) {
        _i_("3da:d101807c"),
        e.preventDefault(),
        document.forms.ge_trial_opt_in_notifi_form.submit(),
        _r_()
    }),
    _r_()
}),
B.when({
    events: "ready",
    condition: B.env.ge_b_b_notif
}).run(function(e) {
    _i_("3da:4ec2696b");
    var t = e("dismiss-item")
      , i = e("jquery")
      , n = i(".fe_banner--genius-invalid-cc-booking");
    n.find("button").on("click", function() {
        _i_("3da:f78b93ce"),
        n.remove(),
        i(window).trigger("resize"),
        t("ge_b_b_notif_read"),
        _r_()
    }),
    i(".fe_banner__message_short a").on("click", function() {
        _i_("3da:8cfc3228"),
        n.addClass("fe_banner--genius-invalid-cc-booking-opened"),
        i(window).trigger("resize"),
        _r_()
    }),
    _r_()
}),
B.when({
    experiment: "BffIEcEUXPNMPOHET",
    condition: 0 < B.env.auth_level,
    events: "load"
}).require(["jquery", "header/notifications/notifications"], function(r, o) {
    _i_("3da:1aed6a74"),
    window.addEventListener("message", function(e) {
        if (_i_("3da:74a11448"),
        !e)
            return _r_();
        if (!e.data)
            return _r_();
        if (-1 < e.data.indexOf("notifications-height:")) {
            var t = parseInt(e.data.replace("notifications-height:", ""), 10);
            isNaN(t) || (a = t,
            _i_("3da:26221a33"),
            r(".uc-notifications-group__messenger").height(a),
            _r_())
        } else if (-1 < e.data.indexOf("notifications-unread-count:")) {
            var i = parseInt(e.data.replace("notifications-unread-count:", ""), 10);
            isNaN(i) || (n = i,
            _i_("3da:e4d661d7"),
            r(".uc-notifications-group__messenger").data("unread-count", n),
            o.refresh(),
            _r_())
        }
        var n, a;
        _r_()
    }),
    B.eventEmitter.bind("uc_popover_showed", function(e, t) {
        if (_i_("3da:9547b822"),
        !t || !t.id || "notifications" !== t.id)
            return _r_();
        var i = r(".uc-notifications__messenger").get(0);
        if (!i || !i.contentWindow)
            return _r_();
        i.contentWindow.postMessage("you-are-visible", i.src),
        _r_()
    }),
    _r_()
}),
B.when({
    condition: B.env.fe_enable_fps_goal_with_value && void 0 !== window.requestAnimationFrame && void 0 !== window.performance && void 0 !== performance.now
}).run(function() {
    "use strict";
    if (_i_("3da:e8fb3e94"),
    B.env.fe_new_perf_tracking && 2 === Number(B.env.fe_new_perf_tracking.version))
        return _r_();
    var o, _ = B.debug("fps"), s = 0;
    var e, d = !1;
    function t() {
        _i_("3da:0d5bda12");
        var n = performance.now()
          , a = 0;
        d = !1;
        var r = function() {
            if (_i_("3da:6b4a2672"),
            a++,
            d) {
                var e = performance.now()
                  , t = Math.round(1e3 * a / (e - n));
                i = t,
                _i_("3da:561242d6"),
                _.log(i),
                s ? o = (s * o + i) / (s += 1) : (s = 1,
                o = i),
                _.log("fps_avg", o),
                _r_()
            } else
                requestAnimationFrame(r);
            var i;
            _r_()
        };
        requestAnimationFrame(r),
        _r_()
    }
    function i() {
        _i_("3da:a22a736e"),
        d = !(e = void 0),
        _r_()
    }
    function n() {
        _i_("3da:a592d981"),
        void 0 === e ? t() : clearTimeout(e),
        e = setTimeout(i, 200),
        _r_()
    }
    window.addEventListener("scroll", n, !0),
    B.eventEmitter.on("et-scroll-observer:scroll", n),
    setTimeout(function() {
        _i_("3da:04cdec97"),
        o && (_.log("js_fps_avg_1m", o),
        B.env.fe_send_fe_stats_hash && (B.env.fps_avg_1m = o),
        B.et.goalWithValue("js_fps_avg_1m", parseInt(o))),
        window.removeEventListener("scroll", n, !0),
        B.eventEmitter.off("et-scroll-observer:scroll", n),
        _r_()
    }, 6e4),
    _r_()
}),
B.define("component/core/number-input-spinner", ["component"], function(e) {
    return _i_("3da:10bf6caf"),
    _r_(e.extend({
        init: function() {
            _i_("3da:d28a20e5");
            var i = this.$el.find("[data-input]")
              , n = this.$el.attr("data-max-value")
              , a = this.$el.attr("data-min-value")
              , e = this.$el.find("[data-increment]")
              , t = this.$el.find("[data-decrement]");
            e.bind("click", function(e) {
                _i_("3da:e947b533");
                var t = parseInt(i.val(), 10);
                if (n <= t)
                    return _r_();
                t += 1,
                i.val(t),
                i.trigger("change"),
                _r_()
            }),
            t.bind("click", function(e) {
                _i_("3da:db6d206f");
                var t = parseInt(i.val(), 10);
                if (t <= a)
                    return _r_();
                t -= 1,
                i.val(t),
                i.trigger("change"),
                _r_()
            }),
            _r_()
        }
    }))
}),
B.define("component/villas-redirect-msg", function(e, t, i) {
    _i_("3da:e4cf0d88");
    var n = e("component")
      , a = B.env.b_is_tdot_traffic ? B.lightbox : e("lightbox")
      , r = e("jquery");
    i.exports = n.extend({
        init: function() {
            _i_("3da:40b89c41"),
            r.cookie("villas_redirect_msg_seen") || (a.show(r(".villas-redirect-msg"), {
                opacity: .7,
                autoWidth: !0
            }),
            r.cookie("villas_redirect_msg_seen", 1, {
                path: "/"
            })),
            _r_()
        }
    }),
    _r_()
}),
B.define("detect-device", function() {
    "use strict";
    _i_("3da:7e125f67");
    var e = window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : null;
    if (!e)
        return _r_("Unknown");
    return e = -1 < e.indexOf("Xbox") && -1 < e.indexOf("Xbox One") ? "Xbox One" : -1 < e.indexOf("Xbox") ? "Xbox 360" : -1 < e.indexOf("Playstation 4") ? "PlayStation 4" : -1 < e.indexOf("Playstation 3") ? "PlayStation 3" : -1 < e.indexOf("Nintendo WiiU") || -1 < e.indexOf("NintendoBrowser") ? "Nintendo" : -1 < e.indexOf("SMART-TV") || -1 < e.indexOf("SmartTV") || -1 < e.indexOf("Opera TV Store") || -1 < e.indexOf("PhilipsTV") ? "Smart TV" : -1 < e.indexOf("GoogleTV") ? "Google TV" : -1 < e.indexOf("AppleTV") ? "Apple TV" : -1 < e.indexOf("Android") && -1 < e.indexOf("SM-G900P") ? "Galaxy S5" : -1 < e.indexOf("Android") && -1 < e.indexOf("Nexus 5") ? "Nexus 5" : -1 < e.indexOf("Android") && -1 < e.indexOf("Nexus 6") ? "Nexus 6" : -1 < e.indexOf("Android") && -1 < e.indexOf("Nexus 7") ? "Nexus 7" : -1 < e.indexOf("Android") && -1 < e.indexOf("Nexus 10") ? "Nexus 10" : -1 < e.indexOf("Android") ? "Android" : -1 < e.indexOf("BlackBerry") ? "BlackBerry" : -1 < e.indexOf("KFAPWI") ? "Kindle Fire" : -1 < e.indexOf("NOKIA") || -1 < e.indexOf("NokiaBrowser") ? "Nokia" : -1 < e.indexOf("Windows Phone") ? "Windows Phone" : -1 < e.indexOf("MSIE") ? "Internet Explorer" : -1 < e.indexOf("Opera Mini") ? "Opera Mini" : -1 < e.indexOf("iPhone") ? "iPhone" : -1 < e.indexOf("iPod") ? "iPod" : -1 < e.indexOf("iPad") ? "iPad" : "Unknown",
    _r_(e)
}),
B.define("screen-info", function() {
    "use strict";
    _i_("3da:fc9bd6a4");
    var e = window && window.screen ? window.screen : null;
    if (!e)
        return _r_(null);
    var t = {
        height: e.height,
        width: e.width
    };
    return t.orientation = t.height < t.width ? "landscape" : "portrait",
    window.devicePixelRatio && (t.pixelDensity = window.devicePixelRatio,
    t.retinaDisplay = 1 < t.pixelDensity),
    window.navigator && window.navigator.maxTouchPoints && (t.max_touch_points = window.navigator.maxTouchPoints),
    _r_(t)
}),
B.when({
    condition: 0 < B.env.auth_level,
    events: "ready"
}).run(function(e) {
    _i_("3da:c318c3c0");
    var i, n = e("jquery");
    n("#modal-dotcn_tc").length && n.post("/cn_terms_and_conditions", {}, function(e) {
        if (_i_("3da:7d8c856c"),
        e.popup) {
            i = e.latest_version;
            var t = window.BUI.createInstance("Modal", document.getElementById("modal_trigger-dotcn_tc"));
            t.mount(),
            t.lockClose(),
            t.open(),
            document.getElementById("dotcn_tc-cta").addEventListener("click", function() {
                _i_("3da:34cab980"),
                this.classList.add("bui-is-loading"),
                n.post("/cn_terms_and_conditions", {
                    version: i
                }, function(e) {
                    _i_("3da:dcec4543"),
                    t.unlockClose(),
                    t.close(),
                    _r_()
                }),
                _r_()
            })
        }
        _r_()
    }),
    _r_()
}),
B.when({
    events: "ready",
    condition: B.env.b_is_dot_cn
}).run(function() {
    _i_("3da:38fb00e7"),
    B.require("et").stage("bYFBaJYTYRKecNfdPKeEeWXe", 1),
    _r_()
}),
B.define("async-css-style", function(e, t, i) {
    "use strict";
    _i_("3da:93d289cc");
    var n = e("promise")
      , r = window.document;
    t.load = function(e) {
        if (_i_("3da:957431ab"),
        "object" != typeof e)
            throw new Error("async-css: .load() expects options object");
        var t;
        if ((e = Object.assign({}, {
            href: "",
            media: "all",
            after: ""
        }, e)).href = e.href || e.path,
        "string" != typeof e.href || 0 === e.href.length)
            throw new Error("async-css: href or path should be defined.");
        return _r_((t = e.href,
        _i_("3da:9c8fd8f1"),
        _r_(new n(function(n, a) {
            _i_("3da:d365b147"),
            function(e, t) {
                _i_("3da:64bbf2ed");
                var i = new XMLHttpRequest;
                i.open("GET", e),
                i.onreadystatechange = function() {
                    _i_("3da:40d64557"),
                    i.readyState === XMLHttpRequest.DONE && t(i),
                    _r_()
                }
                ,
                i.send(),
                _r_()
            }(t, function(e) {
                _i_("3da:b321ca81");
                var t, i = function(e) {
                    _i_("3da:e7129ae6");
                    var t = r.getElementsByTagName("head")[0]
                      , i = (r.body || t).childNodes
                      , n = i[i.length - 1];
                    return _r_(n)
                }();
                switch (e.status) {
                case 200:
                    (t = document.createElement("style")).innerHTML = e.responseText,
                    i.parentNode.insertBefore(t, i.nextSibling),
                    n();
                    break;
                default:
                    a()
                }
                _r_()
            }),
            _r_()
        }
        ))))
    }
    ,
    _r_()
}),
B.define("async-css-link", function(e, t, i) {
    "use strict";
    _i_("3da:96c8dfd5");
    var n = e("promise")
      , a = window.document;
    t.load = function(e) {
        if (_i_("3da:2c8ed0e8"),
        "object" != typeof e)
            throw new Error("async-css: .load() expects options object");
        if ((e = Object.assign({}, {
            href: "",
            media: "all",
            after: ""
        }, e)).href = e.href || e.path,
        "string" != typeof e.href || 0 === e.href.length)
            throw new Error("async-css: href or path should be defined.");
        var r, t = function(e) {
            _i_("3da:7811a243");
            var t = a.getElementsByTagName("head")[0]
              , i = (a.body || t).childNodes
              , n = i[i.length - 1];
            return "main" === e && void 0 !== t && (n = function(e, t) {
                _i_("3da:88118108");
                for (var i = t.getElementsByTagName("link"), n = 0; n < i.length; n++)
                    if ("1" === i[n].getAttribute("data-main-css"))
                        return _r_(i[n]);
                return _r_(e)
            }(n, t)),
            _r_(n)
        }(e.after), i = function(e) {
            _i_("3da:851d86ba");
            var t = a.createElement("link");
            return t.rel = "stylesheet",
            t.href = e,
            _r_(t)
        }(e.href);
        return function e(t) {
            if (_i_("3da:47b0dd81"),
            a.body)
                return _r_(t());
            window.setTimeout(function() {
                _i_("3da:7962f8f0"),
                e(t),
                _r_()
            }, 100),
            _r_()
        }(function() {
            _i_("3da:cbb52693"),
            t.parentNode.insertBefore(i, t.nextSibling),
            _r_()
        }),
        _r_((r = i,
        _i_("3da:63a16c21"),
        _r_(new n(function(e, t) {
            var i, n, a;
            _i_("3da:5f729357"),
            i = r,
            n = function() {
                _i_("3da:099fe1d6"),
                e(),
                _r_()
            }
            ,
            a = function() {
                _i_("3da:d47bd0fa"),
                t(),
                _r_()
            }
            ,
            _i_("3da:d8e74345"),
            i.addEventListener && (i.addEventListener("load", n),
            i.addEventListener("error", a)),
            i.attachEvent && (i.attachEvent("onload", n),
            i.attachEvent("onerror", a)),
            _r_(),
            _r_()
        }
        ))))
    }
    ,
    _r_()
}),
B.define("async-css", function(e, t, i) {
    "use strict";
    _i_("3da:9f8987c6"),
    "isApplicationInstalled"in navigator ? t.load = e("async-css-style").load : t.load = e("async-css-link").load,
    _r_()
}),
B.define("loadscript", function(e, t, i) {
    _i_("3da:d47addb3");
    var n = e("promise");
    function r(e, t) {
        _i_("3da:75dd9346");
        var a, i = r._urls[e] || e;
        if (!i)
            throw new Error("Must provide a URL.");
        if (i === e && -1 === i.indexOf("/"))
            throw new Error('"' + i + "\" doesn't seem like a script URL.");
        return _r_((a = i,
        _i_("3da:97f97f7c"),
        _r_(new n(function(i, e) {
            _i_("3da:92422bf0");
            var n = document.createElement("script");
            n.onload = n.onreadystatechange = function(e, t) {
                _i_("3da:280f4643"),
                (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                n.parentNode && n.parentNode.removeChild(n),
                n = null,
                t || i()),
                _r_()
            }
            ,
            n.onerror = e,
            n.type = "text/javascript",
            n.src = a;
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(n, t),
            _r_()
        }
        ))))
    }
    r._urls = {},
    r.add = function(e, t) {
        _i_("3da:9f107474");
        var i = r._urls;
        $.isPlainObject(e) ? $.extend(i, e) : i[name] = t,
        _r_()
    }
    ,
    i.exports = r,
    _r_()
}),
B.define("async-loader", function(e, t, i) {
    "use strict";
    _i_("3da:a15e0d77");
    var n = e("loadscript")
      , a = e("async-css")
      , r = e("promise")
      , o = {}
      , _ = B.env || {};
    function s(e, t) {
        _i_("3da:ee19ee6e");
        var i = t.path = function(e) {
            var t;
            if (_i_("3da:5ab4a82f"),
            !_.hasOwnProperty("asyncLoader") || !_.asyncLoader.hasOwnProperty(e))
                throw new Error("async-loader: could not find file " + e + " in B.env.asyncLoader");
            if ("string" != typeof (t = _.asyncLoader[e]) || 0 === t.length)
                throw new Error("async-loader: invalid path for " + e);
            return _r_(t)
        }(t.path);
        return o[i] || (o[i] = function(e, t) {
            var i;
            switch (_i_("3da:b8123876"),
            e) {
            case "css":
                return (i = a.load(t)).catch(function() {
                    _i_("3da:82ff7fe4"),
                    B.squeak && B.squeak("OdeFAAOZOGaDIARMGZYfNXMDDBXe"),
                    _r_()
                }),
                _r_(i);
            case "js":
                return (i = n(t.path)).catch(function() {
                    _i_("3da:65eb6ffd"),
                    B.squeak && B.squeak("OdeFAAOZOGaDIARMGZGTXMDDBXe"),
                    _r_()
                }),
                _r_(i);
            default:
                throw new Error("async-loader: file type [" + e + "] not supported!")
            }
            _r_()
        }(e, t)),
        _r_(o[i])
    }
    t.load = function(n) {
        if (_i_("3da:a52750db"),
        "object" != typeof n)
            throw new Error("async-loader: load() expects an object!");
        var e = Object.keys(n).map(function(e) {
            _i_("3da:b97aa9bc");
            var t = n[e]
              , i = t;
            if ("string" == typeof i && 0 < i.length && (t = {
                path: i
            }),
            "object" != typeof t || !t.hasOwnProperty("path"))
                throw new Error("async-loader: .load() invalid argument!");
            return _r_(s(e, t))
        });
        return _r_(r.all(e))
    }
    ,
    t.css = function(e) {
        if (_i_("3da:111db707"),
        "string" == typeof e && 0 < e.length && (e = {
            path: e
        }),
        "object" != typeof e || !("path"in e))
            throw new Error("async-loader: .css() invalid argument!");
        return _r_(s("css", e))
    }
    ,
    t.js = function(e) {
        if (_i_("3da:b4ea448e"),
        "string" == typeof e && 0 < e.length && (e = {
            path: e
        }),
        "object" != typeof e || !("path"in e))
            throw new Error("async-loader: .js() invalid argument!");
        return _r_(s("js", e))
    }
    ,
    t.registerPath = function(e) {
        if (_i_("3da:016e0e69"),
        "string" != typeof e || 0 === e.length)
            throw new Error("async-loader: registerPath() invalid argument");
        if (!_.hasOwnProperty("asyncLoader"))
            throw new Error("async-loader: B.env.asyncLoader is not defined");
        return _.asyncLoader.hasOwnProperty(e) || (_.asyncLoader[e] = e),
        _r_(e)
    }
    ,
    _r_()
}),
B.define("assistant/overview", function(e, t, i) {
    _i_("3da:18ab494d");
    var n, a = e("jquery"), r = e("promise"), o = {
        baOverview: null,
        unreadConversations: null
    }, _ = "/get_ba_overview?include_cancelled_bookings=1&test_old_ba_overview=1", s = B.env.b_messaging_assistant_overview_url || _, d = s + "&caller_client=unread_badge", c = B.env.b_messaging_url || "/messages2.html", l = [], u = new h(b), f = new h(function(e) {
        _i_("3da:20c5fb13");
        var t = e || l;
        if (t && !t.length || o.unreadConversations)
            return f.scheduleNext.call(f),
            _r_(o.unreadConversations);
        return o.unreadConversations = r.resolve((_i_("3da:4b445cf5"),
        _r_(a.ajax({
            type: "POST",
            url: "/messaging_unread_status",
            data: JSON.stringify({
                hres_ids: t
            }),
            contentType: "application/json",
            beforeSend: function(e) {
                _i_("3da:0863bca8"),
                e.setRequestHeader("X-Booking-CSRF", B.env.b_csrf_token),
                _r_()
            },
            dataType: "json"
        })))).then(f.scheduleNext.bind(f)).then(m("unreadConversations")).then(f.notifyAll.bind(f)).catch(function(e) {
            return _i_("3da:27c61f7b"),
            f.clearNext(),
            _r_(r.reject("failed to fetch unread_conversations"))
        }),
        _r_(o.unreadConversations)
    }
    );
    function h(e, t) {
        _i_("3da:1359a4e4"),
        this.listeners = [],
        this.startFetch = !0,
        this.interval = null,
        this.duration = t || 6e4,
        this.fetch = e,
        _r_()
    }
    function p(e) {
        return _i_("3da:609ae3b3"),
        n = Object.assign({}, e, {
            b_messaging_url: c,
            reservations: (e.reservations || e.conversations).map(function(e) {
                return _i_("3da:d2131e8a"),
                _r_(Object.assign({}, e, {
                    fe_messaging_url: c + ";bn=" + e.reservation_id
                }))
            })
        }),
        l = n.reservations.slice(0, 20).map(function(e) {
            return _i_("3da:9c93cd01"),
            _r_(e.reservation_id)
        }),
        _r_(n)
    }
    function m(t) {
        return _i_("3da:3dde06ff"),
        _r_(function(e) {
            return _i_("3da:454b3db1"),
            o[t] = null,
            _r_(e)
        })
    }
    function b() {
        if (_i_("3da:df8a305b"),
        o.baOverview)
            return _r_(o.baOverview);
        var i = 1
          , n = [];
        return o.baOverview = r.resolve(B.env.b_assistant_overview_pagination ? function t() {
            _i_("3da:5d951b7e");
            var e = d;
            return e += "&limit=20",
            e += "&offset=" + 20 * (i - 1),
            _r_(a.getJSON(e).then(function(e) {
                if (_i_("3da:b0ba3d5a"),
                e.conversations && e.conversations.length && (n = n.concat(e.conversations)),
                e.has_more)
                    return i++,
                    _r_(t());
                return _r_(Object.assign({}, e, {
                    conversations: n
                }))
            }))
        }() : a.getJSON(d)).then(p).then(m("baOverview")).then(u.scheduleNext.bind(u)).then(u.notifyAll.bind(u)).catch(function(e) {
            return _i_("3da:a632101c"),
            u.clearNext(),
            _r_(r.reject("failed to fetch overview"))
        }),
        _r_(o.baOverview)
    }
    "function" == typeof B.squeak && s === _ && B.squeak("aDMJLOdeEFQBJOBTGbAC"),
    h.prototype.scheduleNext = function(e) {
        return _i_("3da:1aa6e60e"),
        this.listeners.length && (this.interval = window.setTimeout(this.fetch, this.duration)),
        _r_(e)
    }
    ,
    h.prototype.clearNext = function() {
        _i_("3da:82c1692b"),
        window.clearTimeout(this.interval),
        _r_()
    }
    ,
    h.prototype.subscribe = function(e, t) {
        return _i_("3da:f40d97cb"),
        this.listeners.push(e),
        this.fetch = this.fetch.bind(this, t),
        this.startFetch && this.fetch(),
        this.startFetch = !1,
        _r_(this.unsubscribe.bind(this, e))
    }
    ,
    h.prototype.unsubscribe = function(t) {
        _i_("3da:b480a88b"),
        this.listeners = this.listeners.filter(function(e) {
            return _i_("3da:7d7e10f6"),
            _r_(e === t)
        }),
        this.listeners.length || this.clearNext(),
        _r_()
    }
    ,
    h.prototype.notifyAll = function(t) {
        return _i_("3da:3d5f48dd"),
        this.listeners.forEach(function(e) {
            _i_("3da:4004b4b2"),
            e(t),
            _r_()
        }),
        _r_(t)
    }
    ,
    i.exports = {
        fetchOnce: function(e) {
            return _i_("3da:2c7a00ec"),
            _r_(b().then(e))
        },
        subscribe: function(e) {
            _i_("3da:963b5331"),
            u.subscribe(e),
            _r_()
        },
        subscribeUnread: function(e, t) {
            _i_("3da:7984146c"),
            f.subscribe(e, t),
            _r_()
        }
    },
    _r_()
}),
B.define("assistant/tracker", function(e, t, i) {
    _i_("3da:f3633083");
    var n = e("ga-tracker-base").trackEvent
      , a = "Messaging V2"
      , r = {
        "bk_exit menu": "BK Exit Menu",
        bk_wall: "BK Wall",
        entry_point: "Entry Point",
        welcome_screen: "Welcome screen"
    };
    i.exports.CATEGORY = {
        MESSAGING: "Messaging V2",
        PARTNER_CHAT: "Guest Partner Chat",
        CS_LIVE_CHAT: "CS Live Chat"
    },
    i.exports.EVENT = {
        ENTRY_POINT: "Entry Point",
        ENTRY_POINT_INDEX_ORGANIC: "Entry Point Index (Organic)",
        ENTRY_POINT_INDEX_RED_DOT: "Entry Point Index (Red Dot)",
        ENTRY_POINT_GPC_ORGANIC: "Entry Point GPC (Organic)",
        ENTRY_POINT_GPC_RED_DOT: "Entry Point GPC (Red Dot)",
        WELCOME_SCREEN: "Welcome Screen",
        HELP_MENU: "Help Menu",
        FEEDBACK_LOOP: "Feedback Loop",
        SEND_MESSAGE: "Send Message",
        USER: "User",
        ENTRY_POINT_SHOWN: "Entrypoint shown",
        ENTRY_POINT_USED: "Entrypoint used",
        ENTRY_POINT_MISS: "Entrypoint miss",
        TIME_TO_MESSAGE: "time_to_receive_message",
        ENTRY_POINT_ACTION: "entry_point_action",
        INDEX_SCREEN_GPC: "gpc_index",
        INDEX_SCREEN_BA: "ba_index"
    },
    i.exports.actions = r,
    i.exports.trackEvent = n,
    i.exports.trackAssistantEvent = n.bind(null, a),
    i.exports.trackAssistantEntryPoint = n.bind(null, a, r.entry_point),
    i.exports.trackAssistantWelcomeScreen = n.bind(null, a, r.welcome_screen),
    _r_()
}),
B.define("assistant/utils", function(e, t, i) {
    _i_("3da:8269bd58");
    var r = e("report-error")
      , o = $("#assistant-panel--content")
      , _ = e("sliding-panel-model").get("assistant-panel")
      , n = e("et");
    o.length && _.on("sliding-panel/hide", function() {
        _i_("3da:29b7b0b7"),
        o.empty(),
        n.customGoal("HMGLLFCeRbLMTBLLFGO", 3),
        _r_()
    }),
    i.exports = {
        openAssistant: function(e) {
            _i_("3da:07523296");
            var t, i = e || {};
            if (!o.length || !_)
                return r("No assistant sliding panel on page", "Assistant"),
                _r_();
            if (!window.B.env.b_messaging_url && !i.url)
                return r("No messaging url provided", "Assistant"),
                _r_();
            if (i.url)
                t = i.url;
            else {
                t = window.B.env.b_messaging_url;
                var n = i.urlParams;
                n && (n.bn && (t += "&bn=" + n.bn),
                n.channel && (t += "&channel=" + n.channel),
                n.unread && (t += "&unread=1"),
                n.entrypoint && (t += "&entrypoint=" + n.entrypoint),
                n.dt_entrypoint && (t += "&dt_entrypoint=" + n.dt_entrypoint))
            }
            var a = B.jstmpl("assistant_modal").render({
                b_messaging_url: t
            });
            o.html($(a)),
            _.show(),
            _r_()
        }
    },
    _r_()
}),
B.when({
    events: "ready",
    condition: B.env.b_user_auth_level_is_high,
    action: ["help", "confirmation", "myreservations", "cancel", "book", "tpi_book"]
}).run(function(e) {
    _i_("3da:d1e98ffa");
    var t = e("with-capla")
      , i = e("assistant/utils")
      , n = [{
        project: "trips-frontend",
        service: "trip-xp-mfe"
    }, {
        project: "help-center-ui",
        service: "web"
    }, {
        project: "retention-funnel",
        service: "cancellation-mfe"
    }, {
        project: "web-shell",
        service: "header-mfe"
    }, {
        project: "checkout",
        service: "bp-accommodation"
    }, {
        project: "tpi",
        service: "tpi-bp-mfe"
    }, {
        project: "post-booking-web",
        service: "mfe"
    }];
    n.forEach(function(t) {
        _i_("3da:10b329ae"),
        t.handler = function(e) {
            _i_("3da:16ae4172"),
            e.eventBus.subscribe(function(e) {
                if (_i_("3da:4d6ba8c5"),
                e.project && e.service)
                    return _r_("CAPLA_EVENT_" + e.project + "-" + e.service + "_OPEN_ASSISTANT");
                _r_()
            }(t), function(e, t) {
                _i_("3da:7e58e41c"),
                i && i.openAssistant(t),
                _r_()
            }),
            _r_()
        }
        ,
        _r_()
    }),
    n.forEach(function(e) {
        _i_("3da:17ce328e"),
        t(e.project, e.service, e.handler)(),
        _r_()
    }),
    _r_()
}),
B.define("component/assistant/entrypoint", function(o, e, t) {
    _i_("3da:8f658fdd");
    var i = o("component")
      , _ = o("jquery")
      , n = o("assistant/overview").subscribeUnread
      , a = o("assistant/overview").fetchOnce
      , s = o("async-loader")
      , d = o("assistant/tracker")
      , c = o("web-shell-events")
      , l = o("web-shell-event-emitter").publish
      , r = ".assistant-entry-point__text";
    function u(e) {
        _i_("3da:64034d52");
        var t = e.attr("data-messaging-url") || e.attr("href");
        return _r_({
            url: t,
            privacyPolicyUrl: e.attr("data-privacy-policy-url"),
            messengerUrl: e.attr("data-messenger-link"),
            text: e.find(r).text(),
            modal: Boolean(e.attr("data-messages-is-modal")),
            reservations: [],
            unreadConversations: {},
            selectedReservationId: function(e) {
                if (_i_("3da:49ff3c45"),
                !e)
                    return _r_(null);
                if ("string" != typeof e)
                    return _r_(null);
                var t = e.match(/[;&]bn=(\d*)/);
                return t && t[1] ? _r_(t[1]) : _r_(null)
            }(t),
            consistentText: Boolean(e.attr("data-consistent-text")),
            channel: e.attr("data-channel")
        })
    }
    function f(e) {
        _i_("3da:09ee7b9f");
        var t = e.reservations
          , i = e.selectedReservationId
          , n = e.unreadConversations;
        if (n)
            return _r_(i ? n[i] : Object.values(n).reduce(function(e, t) {
                return _i_("3da:aa59ab4b"),
                _r_(e + t)
            }, 0));
        if (!i)
            return _r_(t.reduce(function(e, t) {
                return _i_("3da:71ff386c"),
                Boolean(t.has_unread) && (e += 1),
                _r_(e)
            }, 0));
        for (var a = 0; a < t.length; a++)
            if (String(t[a].reservation_id) === i)
                return e.channel && "partner_chat" === e.channel ? _r_(t[a].partner_chat && t[a].partner_chat.has_unread) : _r_(t[a].booking_assistant && t[a].booking_assistant.has_unread || t[a].has_unread);
        return _r_(!1)
    }
    function h(e) {
        _i_("3da:58a762b1");
        var t = {
            url: e.url,
            text: function(e) {
                if (_i_("3da:aa49304e"),
                e.consistentText)
                    return _r_(e.text);
                var t = f(e);
                return _r_(t ? B.jstmpl.translations("msg_web_entry_new_messages") : e.text || B.jstmpl.translations("msg_www_ask_a_question"))
            }(e),
            unread: f(e)
        };
        return _r_(t)
    }
    function p(e, t) {
        _i_("3da:0ca3e7aa");
        var i = t.url;
        Boolean(t.unread) && (i += "&unread=1"),
        e.find(r).text(t.text),
        e.toggleClass("assistant-entry-point_has-unread", Boolean(t.unread)),
        e.attr("href", i),
        _r_()
    }
    t.exports = i.extend({
        init: function() {
            _i_("3da:76c626b7"),
            s.css("async_assistant_entrypoint_css").then(function() {
                _i_("3da:4821a9cb"),
                _("#assistant-sliding-panel-wrapper").show(),
                _r_()
            });
            var r = u(this.$el);
            this._defaultText = r.text,
            n(function(e) {
                _i_("3da:d542a554");
                var t = h(r = Object.assign({}, r, {
                    unreadConversations: e.unread_conversations
                }));
                p(this.$el, t),
                l(c.ASSISTANT_UPDATE_STATE, t),
                _r_()
            }
            .bind(this)),
            a(function(e) {
                _i_("3da:021b0fff");
                var t = h(r = Object.assign({}, r, {
                    reservations: e.reservations
                }));
                p(this.$el, t),
                l(c.ASSISTANT_UPDATE_STATE, t),
                _r_()
            }
            .bind(this));
            var e = h(r);
            p(this.$el, e),
            l(c.ASSISTANT_UPDATE_STATE, e),
            this.$el.on("click", function(e) {
                _i_("3da:2c202778");
                var t = f(r);
                if ("www" === B.env.b_site_type && function() {
                    _i_("3da:a5c0afc3");
                    var e = window.B.env.b_action;
                    d.trackEvent(d.CATEGORY.MESSAGING, d.EVENT.ENTRY_POINT_ACTION, e),
                    _r_()
                }(),
                r.modal) {
                    e.preventDefault();
                    var i = o("assistant/utils");
                    if (i) {
                        _(".user_center_popover").hide();
                        var n = r.url;
                        t && (n += "&unread=1");
                        var a = {
                            url: n
                        };
                        i.openAssistant(a)
                    }
                }
                _r_()
            }),
            window.addEventListener("message", function(e) {
                if (_i_("3da:223d03d0"),
                e.origin != window.location.origin)
                    return _r_();
                if (e.data && "BA_MESSAGES_READ" === e.data.type) {
                    var t = e.data.reservationId
                      , i = e.data.channel;
                    if (null === t)
                        r.reservations.forEach(function(e) {
                            _i_("3da:395ac2c2"),
                            e.has_unread = !1,
                            _r_()
                        }),
                        p(this.$el, h(r));
                    else if (r.selectedReservationId == t) {
                        for (var n, a = 0; a < r.reservations.length; a++)
                            if (r.reservations[a].reservation_id === t) {
                                n = r.reservations[a];
                                break
                            }
                        n && (i && "partner_chat" === i ? void 0 !== n.partner_chat && (n.partner_chat.has_unread = !1) : (void 0 !== n.booking_assistant && (n.booking_assistant.has_unread = !1),
                        void 0 !== n.has_unread && (n.has_unread = !1)),
                        p(this.$el, h(r)))
                    }
                }
                _r_()
            }
            .bind(this), !1),
            _r_()
        }
    }),
    _r_()
}),
booking.jstmpl("assistant_modal", function() {
    _i_("3da:6a5b9914");
    var n = ['\n  <div class="assistant-modal-view">\n    <div class="assistant-view assistant-view_app-screen">\n      <iframe\n        width="100%"\n        height="100%"\n        src="', '"\n        class="app-screen_iframe" frameborder="0"\n        id="assistant-iframe"></iframe>\n    </div>\n  </div>\n']
      , a = ["b_messaging_url"];
    return _r_(function(e) {
        _i_("3da:2a96cd0a");
        var t = ""
          , i = this.fn;
        return t += [n[0], i.MC(a[0]), n[1]].join(""),
        _r_(t)
    })
}()),
B.define("tooltip", function(e, t, i) {
    _i_("3da:c1994aae");
    var n, a, r = e("event-emitter"), o = e("jquery"), _ = e("jstmpl"), s = 0, d = {}, c = {
        position: "top",
        arrow: !0,
        animation: !0,
        customClass: "",
        trigger: "hover focus",
        hiddenClass: "tltp--hidden",
        animationClass: "tltp--animate",
        wrapperTemplate: '<div class="tltp tltp--hidden"></div>',
        innerTemplate: '<div class="tltp__content"><div class="tltp__image" role="image"></div><div class="tltp__header" role="header"></div><div class="tltp__body" role="body"></div>' + ("mdot" == B.env.b_site_type ? '<svg class="bk-icon -iconset-close tltp__close_icon" fill="#F5F5F5" height="14" width="14" viewBox="0 0 128 128" role="presentation" aria-hidden="true" focusable="false"><path d="M69.7 64l33.1-33.2a4 4 0 0 0-5.6-5.6L64 58.3 30.8 25.2a4 4 0 1 0-5.6 5.6L58.3 64 25.2 97.2a4 4 0 1 0 5.6 5.6L64 69.7l33.2 33.1a4 4 0 0 0 5.6-5.6z"/></svg>' : "") + "</div>",
        latency: 0,
        hideLatency: 0,
        rtl: B.env.rtl,
        triggerDelays: {
            mouseenter: 200,
            mouseleave: 200
        },
        keepOpen: !1,
        smartPositioning: !0,
        preventDefaultOnClick: !1,
        a11yNavMode: !1,
        a11yAriaHidden: !1,
        a11yReadOnClick: !1,
        theme: "dark"
    }, l = {
        booking: c
    }, u = l.booking, f = o("body"), b = o(window), h = {
        mouseenter: "mouseleave",
        focus: "blur",
        click: "click"
    }, p = /start|end/i, m = /^top|bottom$/i, g = /^start|top$/i, v = /^end|bottom$/i, y = ["top", "bottom", "start", "end", "middle"], w = [[0, 1, 2, 3], [1, 0, 2, 3], [2, 3, 0, 1], [3, 2, 0, 1]], k = [[2, 4, 3], [2, 4, 3], [0, 4, 1], [0, 4, 1]], E = [[0, 1, 2], [2, 1, 0], [0, 1, 2], [2, 1, 0], [1, 0, 2]];
    n = {
        setup: function(e) {
            var t;
            _i_("3da:a3164e35");
            try {
                return t = new a(e),
                _r_(t.api)
            } catch (e) {
                B.debug("tooltip").error(e)
            }
            _r_()
        },
        hideAll: function() {
            return _i_("3da:afab8048"),
            o.each(d, function(e, t) {
                _i_("3da:6aa0338b"),
                t.hide(),
                _r_()
            }),
            _r_(this)
        },
        get: function(e) {
            return _i_("3da:5a7b7fb4"),
            _r_(d[e])
        },
        each: function(e) {
            return _i_("3da:b38ca521"),
            o.each(d, e),
            _r_(this)
        },
        addPreset: function(e, t) {
            return _i_("3da:80667e0d"),
            l[e] = o.extend({}, c, t),
            _r_(this)
        },
        usePreset: function(e) {
            _i_("3da:71107b79");
            var t = l[e];
            return t && (u = t),
            _r_(this)
        }
    },
    r.extend(n),
    i.exports = n,
    a = function() {
        _i_("3da:30879fe4");
        var e = function(e) {
            _i_("3da:f70215b3"),
            this.options = e,
            o.isFunction(e.onBeforeInit) && e.onBeforeInit.call(this),
            this.processOptions(e),
            this.api = {
                id: this.id,
                $target: this.$el,
                settings: this.settings,
                isVisible: o.proxy(this.isVisible, this),
                show: o.proxy(this.show, this),
                hide: o.proxy(this.hide, this),
                toggle: o.proxy(this.toggle, this),
                set: o.proxy(this.set, this),
                reposition: o.proxy(this.position, this),
                destroy: o.proxy(this.destroy, this),
                on: o.proxy(this.on, this)
            },
            function(e) {
                _i_("3da:d4c74bea"),
                d[e.id] = e,
                _r_(this)
            }(this.api),
            this.$el.data("tooltip-instance", this.api),
            this.triggerEvent("init"),
            _r_()
        };
        return e.prototype.processOptions = function(e) {
            _i_("3da:4034a263");
            var t = l[e.preset] || u
              , i = this.settings = o.extend({}, t, e);
            if (this.id = i.id || ++s,
            d[this.id])
                throw new Error('A tooltip with the same id "' + this.id + '" already exists.');
            if (this.$el = o(i.target).first(),
            this.el = this.$el[0],
            !(i.title || i.text || i.content || i.contentTemplate || i.contentTarget))
                throw new Error('No content for the tooltip. Please use any of these options: "content", "template" or "content-target".');
            this.namespace = ".tooltip." + this.id,
            this.setupPosition(),
            this.setupEvents(),
            this.setupTriggers(),
            _r_()
        }
        ,
        e.prototype.setupTriggers = function() {
            _i_("3da:aba301ab");
            var n = this.settings.triggerShow ? this.settings.triggerShow.split(/\s+/) : []
              , a = this.settings.triggerHide ? this.settings.triggerHide.split(/\s+/) : []
              , e = !n.length && this.settings.trigger ? this.settings.trigger.split(/\s+/) : []
              , r = this
              , t = function(i) {
                return _i_("3da:a465ae71"),
                _r_(o.grep(i, function(e, t) {
                    return _i_("3da:e484c1af"),
                    _r_(t === o.inArray(e, i))
                }))
            };
            o.each(e, function(e, t) {
                var i;
                _i_("3da:7a63d5a3"),
                "hover" === t && (t = "mouseenter"),
                i = h[t],
                n.push(t),
                i && a.push(i),
                _r_()
            }),
            n = t(n),
            a = t(a),
            o.each(n, function(e, t) {
                _i_("3da:64f7e853");
                var i, n = o.inArray(t, a);
                i = t + r.namespace,
                -1 < n ? (r.$el.on(i, o.proxy(r.toggle, r)),
                a.splice(n, 1)) : (r.$el.on(i, o.proxy(r.show, r)),
                "click" == t ? r.$el.on(i, o.proxy(r._showOnClick, r)) : r.$el.on(i, o.proxy(r.show, r))),
                _r_()
            }),
            o.each(a, function(e, t) {
                _i_("3da:adb2472b"),
                r.$el.on(t, o.proxy(r.hide, r)),
                _r_()
            }),
            _r_()
        }
        ,
        e.prototype.setupPosition = function() {
            _i_("3da:4442c31b");
            var e, t, i = this.settings.position;
            if (i = (i = i.replace(/left/g, "start")).replace(/right/g, "end"),
            this.settings.rtl && (i = i.replace(p, function(e) {
                return _i_("3da:bf34760b"),
                _r_("end" === e ? "start" : "end")
            })),
            i = o.trim(i).split(/\s+/),
            e = this.placement = i[0],
            t = i[1],
            this.placementAxis = p.test(e) ? "x" : "y",
            p.test(t) || m.test(t) || (t = "middle"),
            this.alignment = t,
            !p.test(e) && !m.test(e))
                throw new Error("The tooltip has to be aligned either on top, bottom, left or right.");
            _r_()
        }
        ,
        e.prototype.setupEvents = function() {
            _i_("3da:ffe77f60");
            var n = /^on[A-Z].+/;
            o.each(this.settings, o.proxy(function(e, t) {
                if (_i_("3da:05862ddd"),
                !n.test(e))
                    return _r_();
                var i = e[2].toLowerCase() + e.substring(3);
                this.on("tooltip:" + i + ":" + this.id, o.proxy(t, this)),
                _r_()
            }, this)),
            _r_()
        }
        ,
        e.prototype.addArrow = function(e, t) {
            if (_i_("3da:912e4f8b"),
            this.$tip.removeClass(this.arrowClass),
            !this.settings.arrow)
                return _r_();
            var i = "tltp--" + e;
            "middle" !== t && (i = i + "-" + t),
            this.$tip.addClass(i),
            this.arrowClass = i,
            _r_()
        }
        ,
        e.prototype.createTooltipNode = function() {
            _i_("3da:b2cd134c"),
            this.triggerEvent("beforeCreateTooltipNode");
            var e, t = this.settings, i = this.$tip = o(t.wrapperTemplate);
            t.icon || t.image || t.title || t.text ? e = this.buildLayout(t) : t.content ? e = t.content : t.contentTemplate ? e = _(t.contentTemplate).render(t.contentTemplateData) : (e = o(t.contentTarget)).is("script") && (e = o(e.html())),
            i.find('[role="content"]').andSelf().last().append(e),
            i.addClass(this.settings.customClass);
            var n = i.attr("id") || "tooltip-" + this.id;
            return i.attr("id", n),
            this.$el.attr("aria-describedby", n),
            this.settings.animation && i.addClass(this.settings.animationClass),
            this.settings.insideTriggerHide && i.on(this.settings.insideTriggerHide, function() {
                _i_("3da:2d2e0945"),
                this.api.hide(),
                _r_()
            }
            .bind(this)),
            B.et.initAttributesTracking(i),
            f.append(i),
            this.api.$tooltip = i,
            this.triggerEvent("createTooltipNode"),
            _r_(this)
        }
        ,
        e.prototype.triggerByEvent = function(e, t) {
            _i_("3da:c9a37149");
            var i = this.settings.delay;
            void 0 === i && (i = this.settings.triggerDelays[e.type]),
            clearTimeout(this.timeout),
            this.timeout = setTimeout(o.proxy(t, this), i),
            _r_()
        }
        ,
        e.prototype.isVisible = function() {
            return _i_("3da:b7a12224"),
            _r_(this.$tip && (!this.$tip.hasClass(this.settings.hiddenClass) || this.$tip.hasClass(this.settings.visibleClass)))
        }
        ,
        e.prototype.triggerEvent = function(e) {
            _i_("3da:d16807f7");
            var t = o.Event("tooltip:" + e, {
                tooltip: this.api
            })
              , i = o.Event(t.type + ":" + this.id, {
                tooltip: this.api
            });
            n.emit(t.type, t, this),
            this.$el.trigger(t),
            n.emit(i.type, i, this),
            this.$el.trigger(i),
            _r_()
        }
        ,
        e.prototype.on = function(e, t) {
            return _i_("3da:b6010415"),
            this.$el.on(e, t),
            _r_(this.api)
        }
        ,
        e.prototype.toggle = function() {
            return _i_("3da:3d22d8fd"),
            this.isVisible() ? this.hide() : this.show(),
            _r_(this.api)
        }
        ,
        e.prototype.show = function() {
            _i_("3da:4a4cc1ff");
            var e = this;
            if (this.hideTimer && (this.hideTimer = clearTimeout(this.hideTimer)),
            this.isVisible())
                return _r_(this.api);
            return this.triggerEvent("beforeShow"),
            this.$tip || (this.createTooltipNode(),
            this.options.keepOpen && (this.$tip.on("mouseenter", this.show.bind(this)),
            this.$tip.on("mouseleave", this.hide.bind(this)))),
            this.position(),
            clearTimeout(this.timeout),
            this.showTimer || (this.showTimer = setTimeout(function() {
                _i_("3da:8f412835"),
                e.$tip.removeClass(e.settings.hiddenClass),
                e.$tip.addClass(e.settings.visibleClass),
                _r_()
            }, this.settings.latency)),
            this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", o.proxy(this.triggerEvent, this, "show")) : this.triggerEvent("show"),
            _r_(this.api)
        }
        ,
        e.prototype._showOnClick = function(e) {
            _i_("3da:2747aa6e"),
            this.settings.preventDefaultOnClick && e.preventDefault(),
            this.show(),
            _r_()
        }
        ,
        e.prototype.hide = function() {
            _i_("3da:b3e85cdf");
            var e = this;
            if (this.showTimer && (this.showTimer = clearTimeout(this.showTimer)),
            !this.isVisible())
                return _r_(this.api);
            return this.triggerEvent("beforeHide"),
            clearTimeout(this.timeout),
            this.hideTimer || (this.hideTimer = setTimeout(function() {
                _i_("3da:6190f63c"),
                e.$tip.addClass(e.settings.hiddenClass),
                e.$tip.removeClass(e.settings.visibleClass),
                _r_()
            }, this.settings.hideLatency)),
            this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", o.proxy(this.triggerEvent, this, "hide")) : this.triggerEvent("hide"),
            _r_(this.api)
        }
        ,
        e.prototype.position = function(e, t) {
            var i, n;
            _i_("3da:04eb4fdb"),
            this.triggerEvent("beforePosition"),
            e = e || this.placement,
            t = t || this.alignment;
            var a, r, o, _ = this.$el, s = this.$tip, d = this.buildInsideWindowFn(s.outerWidth(), s.outerHeight(), b.scrollLeft(), b.scrollTop(), b.width(), b.height()), c = y.indexOf(e), l = y.indexOf(t), u = w[c], f = E[l], h = -1;
            e: for (var p = 0; p < 4; p++) {
                c = u[p],
                e = y[c];
                for (var m = 0; m < 3; m++)
                    if (l = f[m],
                    t = y[k[c][l]],
                    h < (n = d((i = this.calcCoords(e, t, _, s)).left, i.top)) && (h = n,
                    a = i,
                    r = e,
                    o = t),
                    !this.settings.smartPositioning || 1 === n)
                        break e
            }
            if (this.coords && this.coords.left === a.left && this.coords.top === a.top)
                return _r_(this.api);
            return this.settings.animation && this.$tip.removeClass(this.settings.animationClass),
            this.coords = a,
            s.css(a),
            this.addArrow(r, o),
            s.outerWidth(),
            this.settings.animation && this.$tip.addClass(this.settings.animationClass),
            this.triggerEvent("position"),
            _r_(this.api)
        }
        ,
        e.prototype.set = function(e, t) {
            _i_("3da:29a36048");
            var i = {};
            return "object" === o.type(e) ? i = e : i[e] = t,
            o.extend(this.settings, i),
            this.setupPosition(),
            this.$tip && (this.$tip.toggleClass(this.settings.animationClass, this.settings.animation),
            this.position()),
            _r_(this.api)
        }
        ,
        e.prototype.destroy = function() {
            _i_("3da:c42e14a4"),
            this.triggerEvent("beforeDestroy"),
            clearTimeout(this.timeout),
            this.$el.off(this.namespace),
            this.$el.removeData("tooltip-instance"),
            this.$tip && this.$tip.remove(),
            delete d[this.id],
            _r_()
        }
        ,
        e.prototype.calcCoords = function(e, t, i, n) {
            _i_("3da:51682758");
            var a = i.offset()
              , r = {}
              , o = "top"
              , _ = "outerHeight"
              , s = "left"
              , d = "outerWidth";
            return p.test(e) && (o = "left",
            _ = "outerWidth",
            s = "top",
            d = "outerHeight"),
            g.test(e) ? r[o] = a[o] - n[_]() : r[o] = a[o] + i[_](),
            g.test(t) ? r[s] = a[s] : v.test(t) ? r[s] = a[s] + i[d]() - n[d]() : r[s] = a[s] + i[d]() / 2 - n[d]() / 2,
            _r_(r)
        }
        ,
        e.prototype.buildInsideWindowFn = function(c, l, u, f, e, t) {
            _i_("3da:8f04d46a");
            var h = u + e
              , p = f + t;
            return _r_(function(e, t) {
                _i_("3da:3c25f907");
                var i = e + c
                  , n = t + l
                  , a = Math.max(u, e)
                  , r = Math.min(h, i)
                  , o = Math.max(f, t)
                  , _ = Math.min(p, n)
                  , s = (i - e) * (n - t)
                  , d = Math.max(0, r - a) * Math.max(0, _ - o);
                return _r_(d / s)
            })
        }
        ,
        e.prototype.buildLayout = function(e) {
            _i_("3da:6c481249");
            var t = o(e.innerTemplate)
              , i = o('[role="image"]', t);
            o('[role="header"]', t).append(e.title).filter(":empty").remove(),
            o('[role="body"]', t).andSelf().last().append(e.text).filter(":empty").remove(),
            e.image ? i.append(o('<img src="' + e.image + '">')) : e.icon ? i.append(o('<i class="bicon bicon-' + e.icon + '"></i>')) : i.remove();
            var n = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]><\/script>)").exec(e.text)
              , a = n && n[2];
            return a && B.et.stage(a, 1),
            _r_(t)
        }
        ,
        _r_(e)
    }(),
    _r_()
}),
B.define("component/tooltip", function(e, t, i) {
    _i_("3da:9de96736");
    var n = e("component")
      , a = e("jquery")
      , r = e("tooltip");
    i.exports = n.extend({
        init: function() {
            _i_("3da:edd3b0a0");
            var e = function(e) {
                _i_("3da:658ce0c9");
                var n = {}
                  , t = e.data();
                return a.each(t, function(e, t) {
                    var i;
                    if (_i_("3da:2be7427a"),
                    e.length < 8 || 0 !== e.indexOf("tooltip"))
                        return _r_();
                    i = (e = e.substring(7))[0].toLowerCase() + e.slice(1),
                    n[i] = t,
                    _r_()
                }),
                n.target = e,
                _r_(n)
            }(this.$el);
            this.tooltip = r.setup(e),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/assistant/overview", function(a, e, t) {
    _i_("3da:c19e0a60");
    var n, i = a("component"), r = a("assistant/overview").subscribeUnread, o = a("assistant/overview").fetchOnce, _ = a("async-loader"), s = a("assistant/tracker"), d = a("et"), c = a("events"), l = a("web-shell-events"), u = a("web-shell-event-emitter").publish;
    "www" === B.env.b_site_type && (n = B.require("window-visibilitychange"));
    var f = "assistant_entry_point_interacted";
    function h(e) {
        return _i_("3da:d5a33dc8"),
        _r_(e.reduce(function(e, t) {
            return _i_("3da:f592da1d"),
            t.booking_assistant && t.booking_assistant.has_unread && e++,
            t.partner_chat && t.partner_chat.has_unread && e++,
            t.has_unread && e++,
            _r_(e)
        }, 0))
    }
    var p, m = {}, b = [], g = $("[rel='shortcut icon']").first(), v = "//cf.bstatic.com/static/img/b25logo/favicon-notify-messaging/1bed06444830f34ea20f529426b84abd95b233ce.ico", y = "NVBYNFIYEIbQHUYEQYFGXITKe", w = "YTBHMGLLZBbKeHAcCOSPJTRHe", k = "book" !== B.env.b_action, E = d.track(y), T = d.track("VMITcZJLCZBfaNKe"), C = {
        faviconUrl: null,
        documentTitle: null
    }, x = "www" === B.env.b_site_type, S = "mdot" === B.env.b_site_type;
    t.exports = i.extend({
        init: function() {
            _i_("3da:6c5d8f53");
            var a = this
              , e = this.$el.find(".js-assistant-overview-content");
            e.length ? this.$content = e : this.$content = this.$el,
            p = $("#assistant-notification");
            var t = S ? " is-mdot" : "";
            function i() {
                _i_("3da:42c9f178"),
                d.stage(w, 1),
                d.stage(w, 3),
                d.goal(f);
                var e = h(a.cachedData ? a.cachedData.reservations : []);
                s.trackEvent(s.CATEGORY.MESSAGING, s.EVENT.ENTRY_POINT, "Header");
                var t = 0 < e ? s.EVENT.ENTRY_POINT_INDEX_RED_DOT : s.EVENT.ENTRY_POINT_INDEX_ORGANIC;
                B.env.b_messaging_partner_chat_available && (s.trackEvent(s.CATEGORY.PARTNER_CHAT, s.EVENT.ENTRY_POINT, "Header"),
                s.trackEvent(s.CATEGORY.PARTNER_CHAT, t, "Header")),
                _r_()
            }
            p.length || (p = $('<div id="assistant-notification" class="' + t + '"></div>')),
            x && $("#assistant-sliding-panel-wrapper").before(p),
            S && $("#main_content").before(p),
            this.$triggerEl = $("#assistat_header_entrypoint"),
            this.$unreadEl = T ? $(".js-assistant-notifications-count") : $("#assistat_header_entrypoint__unread"),
            a.cachedData = null,
            _.css("async_assistant_entrypoint_css").then(function() {
                _i_("3da:4821a9cb1"),
                $("#assistant-sliding-panel-wrapper").show(),
                _r_()
            }),
            o(this.onNewOverview.bind(this)),
            r(this.onUnReadUpdate.bind(this)),
            k && E && x && (_i_("3da:9832dc02"),
            C.faviconUrl = g.attr("href"),
            C.documentTitle = document.title,
            _r_(),
            n.on("visibilitychange", this.onVisibilityChange.bind(this)),
            c.on("growl:show", function() {
                _i_("3da:512316b9"),
                !n.hidden && b.length && a.hideNotification(),
                _r_()
            })),
            window.addEventListener("message", function(e) {
                if (_i_("3da:d28e2b41"),
                e.origin != window.location.origin)
                    return _r_();
                if (e.data && "BA_MESSAGES_READ" === e.data.type && e.data.reservationId && a.cachedData) {
                    var t = e.data.reservationId
                      , i = e.data.channel
                      , n = !1;
                    a.cachedData.reservations.forEach(function(e) {
                        _i_("3da:c3eb77e3"),
                        e.reservation_id == t && (i && "partner_chat" === i ? void 0 !== e.partner_chat && (e.partner_chat.has_unread = !1,
                        n = !0) : (void 0 !== e.booking_assistant && (e.booking_assistant.has_unread = !1,
                        n = !0),
                        void 0 !== e.has_unread && (e.has_unread = !1,
                        n = !0))),
                        _r_()
                    }),
                    n && (b = [],
                    a.hideNotification(),
                    a.render(a.cachedData))
                }
                _r_()
            }, !1),
            a.$content.closest(".user_center_option.ba-notifications,.js-assistant-notifications").length && $(document).on("click", ".user_center_option.ba-notifications .popover_trigger,.js-assistant-notifications .js-assistant-notifications-trigger", i),
            $(".site-header--nav--item__assistant,.js-assistant-notifications .js-assistant-notifications-trigger").on("click", i),
            _r_()
        },
        onNewOverview: function(e) {
            _i_("3da:5516c7ad");
            var a = this;
            k && E && (b = [],
            $.each(e.conversations, function(e, n) {
                _i_("3da:5b5561cf"),
                $.each(["customer_service_live_chat", "partner_chat"], function(e, t) {
                    _i_("3da:5ccb731c");
                    var i = n[t];
                    i.has_unread ? b.push({
                        bn: n.reservation_id,
                        thread_id: i.thread_id,
                        channel: t,
                        hotel_name: n.hotel_name,
                        message: "partner_chat" === t ? {
                            text: i.last_message_text,
                            staff_name: n.hotel_name
                        } : i.last_unread_message
                    }) : a.hideNotification({
                        thread_id: i.thread_id
                    }),
                    _r_()
                }),
                _r_()
            }),
            b.length ? (d.stage(y, 2),
            x && (n.hidden ? (d.stage(y, 3),
            this.addTabNotification()) : (d.stage(y, 4),
            this.removeTabNotification())),
            this.showNotifications(b)) : (x && this.removeTabNotification(),
            this.hideNotification())),
            this.render(e),
            _r_()
        },
        onUnReadUpdate: function(e) {
            if (_i_("3da:770d5029"),
            e && e.unread_conversations) {
                var t = Object.values(e.unread_conversations).reduce(function(e, t) {
                    return _i_("3da:aa59ab4b1"),
                    _r_(e + t)
                }, 0);
                this.renderUnRead(t)
            }
            _r_()
        },
        onVisibilityChange: function() {
            _i_("3da:6394b828"),
            b.length ? n.hidden ? this.addTabNotification() : (d.customGoal(y, 2),
            this.removeTabNotification()) : (this.removeTabNotification(),
            this.hideNotification()),
            _r_()
        },
        addTabNotification: function() {
            if (_i_("3da:ad508396"),
            !E)
                return _r_();
            document.title = B.jstmpl.translations("msg_lc_tab_new"),
            function() {
                _i_("3da:d22ec7a5");
                var e, t = 0, i = !0;
                e = setInterval(function() {
                    if (_i_("3da:a30fb599"),
                    10 == t)
                        return clearInterval(e),
                        g.attr("href", v),
                        _r_();
                    i ? (g.attr("href", v),
                    t++) : g.attr("href", C.faviconUrl),
                    i = !i,
                    _r_()
                }, 500),
                _r_()
            }(),
            _r_()
        },
        removeTabNotification: function() {
            if (_i_("3da:39898eee"),
            !E)
                return _r_();
            _i_("3da:157596f4"),
            C.documentTitle && (document.title = C.documentTitle),
            C.faviconUrl && g.attr("href", C.faviconUrl),
            _r_(),
            _r_()
        },
        showNotifications: function(e) {
            if (_i_("3da:8733e9a5"),
            !e.length)
                return _r_();
            $.each(e, function(e, t) {
                if (_i_("3da:332784f0"),
                t.message.text && t.message.staff_name || this.hideNotification(t),
                !m[t.thread_id])
                    return m[t.thread_id] = t.message.text,
                    this.showNotification(t),
                    _r_();
                if (m[t.thread_id] !== t.message.text) {
                    if (m[t.thread_id] = t.message.text,
                    $("#" + t.thread_id).length)
                        return this.updateNotification(t),
                        _r_();
                    this.showNotification(t)
                }
                _r_()
            }
            .bind(this)),
            _r_()
        },
        updateNotification: function(e) {
            _i_("3da:6fc9c398");
            var t = e.message
              , i = $("#" + e.thread_id).find(".bui-avatar-block__subtitle");
            i.text() !== t.text && (i.hide(),
            i.text(t.text),
            i.fadeIn()),
            _r_()
        },
        showNotification: function(n) {
            _i_("3da:239e385a");
            var e = n.message;
            if ($(".notice-wrap .notice-item").length)
                return _r_();
            if (!E)
                return _r_();
            if (!e || !e.text || !e.staff_name)
                return this.hideNotification(n),
                _r_();
            var t = function(e) {
                _i_("3da:e7c9ddad");
                var t, i = e.message, n = "customer_service_live_chat" === e.channel ? '<svg class="bk-icon -streamline-headphones" fill="#FFFFFF" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M4.5 17.25h-.75A2.25 2.25 0 0 1 1.5 15v-3a2.25 2.25 0 0 1 2.25-2.25h.75v7.5zm0 1.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5h-.75A3.75 3.75 0 0 0 0 12v3a3.75 3.75 0 0 0 3.75 3.75h.75zm15.75-1.5h-.75v-7.5h.75A2.25 2.25 0 0 1 22.5 12v3a2.25 2.25 0 0 1-2.25 2.25zm0 1.5A3.75 3.75 0 0 0 24 15v-3a3.75 3.75 0 0 0-3.75-3.75h-.75a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h.75zM4.5 9a7.5 7.5 0 1 1 15 0A.75.75 0 0 0 21 9 9 9 0 1 0 3 9a.75.75 0 0 0 1.5 0zM15 22.5h2.25A3.75 3.75 0 0 0 21 18.75V18a.75.75 0 0 0-1.5 0v.75A2.25 2.25 0 0 1 17.25 21H15a.75.75 0 0 0 0 1.5zm-1.5 0H12a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5zm0 1.5a2.25 2.25 0 0 0 0-4.5H12a2.25 2.25 0 0 0 0 4.5h1.5z"/></svg>' : '<svg class="bk-icon -streamline-hotel" fill="#FFFFFF" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M19.5 3.75v19.5a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0zM3.75 4.5h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zm.75 18.75V3.75a.75.75 0 0 0-1.5 0v19.5a.75.75 0 0 0 1.5 0zm15.75-.75H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm0-19.5H3.75l.67 1.085 1.5-3-.67.415h13.5l-.67-.415 1.5 3L20.25 3zm0 1.5a.75.75 0 0 0 .67-1.085l-1.5-3A.75.75 0 0 0 18.75 0H5.25a.75.75 0 0 0-.67.415l-1.5 3A.75.75 0 0 0 3.75 4.5h16.5zM.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM15 21a3 3 0 1 0-6 0v2.25c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V21zm-1.5 0v2.25l.75-.75h-4.5l.75.75V21a1.5 1.5 0 0 1 3 0zm-6-13.875a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zM7.5 6.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zm.375 4.875a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zm-.375-.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zm.375 4.875a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zm-.375-.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zM12 7.125a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zM12 6.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zM12 11.625a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zM12 10.875c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zM12 16.125a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zM12 15.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zM16.5 7.125a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zm-.375-.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zm.375 4.875a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zm-.375-.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zm.375 4.875a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zm-.375-.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0z"/></svg>', a = $('        <div class="assistant-notification-item">                <div class="bui-avatar-block">                    <div class="bui-avatar" aria-hidden="true">                        <div class="bui-avatar__image"></div>                    </div>                    <div class="bui-avatar-block__text">                        <span class="bui-avatar-block__title"></span>                        <span class="bui-avatar-block__subtitle"></span>                    </div>                    <div class="bui-link bui-link--primary">open</div>                    </div>            </div>        ');
                return a.find(".bui-avatar-block__subtitle").text(i.text),
                t = "customer_service_live_chat" === e.channel ? B.jstmpl.translations("msg_lc_notification_in_browser", null, {
                    agentname: i.staff_name
                }) : e.hotel_name,
                a.find(".bui-avatar-block__title").text(t),
                a.find(".bui-avatar__image").addClass(e.channel).html(n),
                a.attr("title", i.text),
                a.attr("id", e.thread_id),
                _r_(a)
            }(n);
            p.append(t),
            setTimeout(function() {
                _i_("3da:710c6a42"),
                t.addClass("--show"),
                _r_()
            }),
            t.on("click", function() {
                _i_("3da:9e9cd177"),
                d.customGoal(y, 3);
                var e = {
                    urlParams: {
                        bn: n.bn,
                        entrypoint: "Live Chat - New Messages Notification",
                        channel: n.channel
                    }
                }
                  , i = window.B.env.b_messaging_url;
                if (S && i)
                    $.each(e.urlParams, function(e, t) {
                        _i_("3da:7a5ca228"),
                        i += "&" + e + "=" + t,
                        _r_()
                    }),
                    window.location.href = i;
                else {
                    var t = a("assistant/utils");
                    t && t.openAssistant(e),
                    b = b.filter(function(e) {
                        return _i_("3da:beafc324"),
                        _r_(e.thread_id != n.thread_id)
                    }),
                    this.hideNotification(n)
                }
                _r_()
            }
            .bind(this)),
            _r_()
        },
        hideNotification: function(e) {
            if (_i_("3da:aab436dc"),
            !E)
                return _r_();
            if (!e)
                return p.empty(),
                _r_();
            $("#" + e.thread_id).remove(),
            _r_()
        },
        renderUnRead: function(e) {
            _i_("3da:a2d6604a");
            var t = B.jstmpl.translations("msg_lc_alt_messaging_platform", e, {
                number: e
            });
            this.$triggerEl.attr("aria-label", t),
            T ? this.$unreadEl.toggleClass("bui-u-hidden", 0 === e) : this.$unreadEl.toggleClass("assistant_bicon__overlay_visible", 0 < e),
            this.$unreadEl.html(0 < e ? e : ""),
            u(l.ASSISTANT_UPDATE_STATE, {
                unreadCount: e
            }),
            _r_()
        },
        render: function(e) {
            _i_("3da:bfeca7a4");
            var t = h(e.reservations);
            this.cachedData = e,
            this.renderUnRead(t),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/referral/web-virality/ga", function(e, t, i) {
    _i_("3da:a0535f39");
    var n = e("component")
      , a = e("ga-tracker")
      , r = e("jquery")
      , o = e("when/events-view");
    "mdot" == B.env.b_site_type && B.events && B.eventNames && B.eventNames.TABNAV_MENU_LOADED && B.events.one(B.eventNames.TABNAV_MENU_LOADED, function() {
        _i_("3da:e5a27b97"),
        r("#raf-nav-entrypoint").loadComponents(),
        _r_()
    }),
    i.exports = n.extend({
        init: function() {
            _i_("3da:9d0bfdba");
            var e = this.$el;
            switch (e.data("wv-ga-type")) {
            case "pageview":
                var t = e.data("wv-ga-details");
                if (!t)
                    return _r_();
                switch (B.env.b_action) {
                case "index":
                    a.trackEvent(a.webViralityTracker, "raf-index-page-entered|" + t);
                    break;
                case "searchresults":
                    a.trackEvent(a.webViralityTracker, "raf-sr-page-entered|" + t);
                    break;
                case "hotel":
                    a.trackEvent(a.webViralityTracker, "raf-hp-page-entered|" + t);
                    break;
                case "book":
                    2 == B.env.b_stage ? a.trackEvent(a.webViralityTracker, "raf-bs2-entered|" + t) : 3 == B.env.b_stage && a.trackEvent(a.webViralityTracker, "raf-bs3-entered|" + t);
                    break;
                case "confirmation":
                    a.trackEvent(a.webViralityTracker, "raf-confirmation-page-entered|" + t)
                }
                break;
            case "viewandclick":
                e.on("click", function() {
                    _i_("3da:5def794c"),
                    a.trackEvent(a.webViralityTracker, "entry-point-button-click", e.data("wv-ga-placement")),
                    _r_()
                }),
                o(e, function() {
                    _i_("3da:b5a7c9fa"),
                    a.trackEvent(a.webViralityTracker, "entry-point-button-show", e.data("wv-ga-placement")),
                    _r_()
                });
                break;
            case "myreferrals-pageview":
                a.trackEvent(a.webViralityTracker, "raf-dashbard-show|" + e.data("wv-ga-action"), e.data("wv-ga-code"));
                break;
            case "click":
                e.on("click", function() {
                    _i_("3da:9127e7ae"),
                    a.trackEvent(a.webViralityTracker, e.data("wv-ga-action")),
                    _r_()
                });
                break;
            case "share":
                e.on("click", function() {
                    _i_("3da:3ad9c335"),
                    a.trackEvent(a.webViralityTracker, e.data("wv-ga-action"), e.data("wv-ga-placement")),
                    _r_()
                })
            }
            _r_()
        }
    }),
    _r_()
}),
B.define("component/communities/entry-point", function(e, t, i) {
    _i_("3da:0a49d5d5");
    var n = e("component")
      , a = e("when/events-view")
      , r = e("ga-tracker")
      , o = "[data-ep-link]";
    i.exports = n.extend({
        init: function() {
            _i_("3da:f8545825"),
            this.eventLabel = this.$el.data("epEventLabel"),
            this.eventValue = this.$el.data("epEventValue"),
            a(this.$el, this.trackEvent.bind(this, "entry-point-button-show")),
            this.$el.is(o) ? this.$el.on("click", this.trackEvent.bind(this, "entry-point-button-click")) : this.$el.on("click", o, this.trackEvent.bind(this, "entry-point-button-click")),
            _r_()
        },
        trackEvent: function(e) {
            _i_("3da:90c2a6cc"),
            r.trackEvent(r.communityTracker, e, this.eventLabel, this.eventValue),
            _r_()
        }
    }),
    _r_()
}),
B.when({
    action: "index",
    events: "ready",
    condition: B.env.b_bbtool_embargo_redirect && B.env.b_is_bbtool_user
}).run(function(e) {
    _i_("3da:c9e1fb20");
    var t = e("jquery")
      , i = e("lightbox")
      , n = t("[data-banner-embargo] [data-close]")
      , a = t("[data-banner-embargo]")
      , r = parseInt(a.attr("data-dismiss-delay"))
      , o = {
        bCloseButton: !1,
        autoWidth: !0
    };
    i.show(a, o);
    var _ = function() {
        _i_("3da:9f89d60d"),
        i.hide(a, o),
        _r_()
    };
    n.on("click", _),
    0 < r && setTimeout(_, r),
    _r_()
}),
B.when({
    events: "ready",
    condition: B.env.b_exp_a11y_screen_reader_detection_v5_on
}).run(function(e) {
    _i_("3da:b847de46");
    var t, i = e("et"), n = "OTfdASFTUaIQLHKZKcDMeffdTDPdeRe", a = e("ga-tracker"), r = e("screen-reader-detection");
    r.onDetect(function() {
        switch (_i_("3da:fb4f67e4"),
        i.stage(n, 1),
        a.trackEvent("Accessibility", "Detection (v5)", "_detected_", r.getCurrentScore()),
        r.getFirstSeenAction()) {
        case "index":
            t = 2;
            break;
        case "searchresults":
            t = 3;
            break;
        case "hotel":
            t = 4;
            break;
        case "book2":
            t = 5;
            break;
        case "book3":
            t = 6;
            break;
        case "confirmation":
            t = 7
        }
        t && i.stage(n, t),
        _r_()
    }).onFeatureDetect(function(e) {
        _i_("3da:3befc86b"),
        0 < e.cg && i.customGoal(n, e.cg),
        a.trackEvent("Accessibility", "Detection (v5)", e.name, e.score),
        _r_()
    }),
    _r_()
}),
B.define("screen-reader-detection/sr-click", function(e, t, i) {
    "use strict";
    _i_("3da:9e19d8a2");
    var o = e("jquery")
      , _ = [];
    function s() {
        return _i_("3da:7585497e"),
        _r_(B.env.a11y_is_sr_click)
    }
    !function() {
        _i_("3da:28ea791d");
        var n = "a11y_srd_click"
          , t = {
            set: function(e, t) {
                _i_("3da:6feab037");
                var i = {};
                i[e] = t;
                try {
                    o.cookie(n, JSON.stringify(i), {
                        path: "/",
                        domain: "booking.com",
                        expires: 7
                    })
                } catch (e) {
                    B.reportError(e, "a11y_srd")
                }
                _r_()
            },
            get: function(e) {
                var t;
                _i_("3da:e1116dd7");
                try {
                    t = JSON.parse(o.cookie(n))
                } catch (e) {
                    B.reportError(e, "a11y_srd")
                }
                return _r_(t)
            }
        }
          , e = o(window)
          , i = t.get("ctrlKeyUp") || !1
          , a = t.get("altKeyUp") || !1
          , r = t.get("anyClick") || !1;
        e.on("keyup", function(e) {
            _i_("3da:861582af"),
            17 !== e.keyCode && 18 !== e.keyCode || (17 === e.keyCode && (i = !0,
            t.set("ctrlKeyUp", !0)),
            18 === e.keyCode && (a = !0,
            t.set("altKeyUp", !0)),
            r && i && a && (s() || (function() {
                _i_("3da:175ded8f");
                for (var e = _.length; 0 <= e; e--)
                    "function" == typeof _[e] && (_[e](),
                    _.splice(e, 1));
                _r_()
            }(),
            B.env.a11y_is_sr_click = !0),
            r = !1,
            t.set("clicked", !1))),
            _r_()
        }),
        o(window).on("keydown", function(e) {
            _i_("3da:ba98ef58"),
            17 !== e.keyCode && 18 !== e.keyCode || (a = i = r = !1,
            t.set("anyClick", !1),
            t.set("ctrlKeyUp", !1),
            t.set("altKeyUp", !1)),
            _r_()
        }),
        o(window).on("click", function(e) {
            _i_("3da:f1c58521"),
            r = !0,
            t.set("anyClick", !0),
            _r_()
        }),
        _r_()
    }(),
    i.exports = {
        onDetect: function(e) {
            if (_i_("3da:2a48acf31"),
            "function" != typeof e)
                return _r_(this);
            if (s())
                return e(),
                _r_(this);
            return _.push(e),
            _r_(this)
        }
    },
    _r_()
}),
B.when({
    condition: B.env.track_skip_links
}).run(function(e) {
    _i_("3da:1cfac101");
    var t = e("ga-tracker")
      , r = document.querySelector(".bypass_menu a")
      , i = !1;
    function o(e) {
        _i_("3da:7a752d50");
        var t = window.getComputedStyle(e, null);
        if ("absolute" == t.getPropertyValue("position")) {
            if (e.offsetLeft < 0 || e.offsetTop < 0)
                return _r_(!0);
            if ("hidden" == t.getPropertyValue("overflow")) {
                if (e.offsetHeight < 1 || e.offsetWidth < 1)
                    return _r_(!0);
                var i = t.getPropertyValue("clip")
                  , n = i.match(/(-?\d+)(,-?\s*\d+)*/gm);
                if (3 < i.length && (n[0] - n[1] < 1 || n[2] - n[3] < 1))
                    return _r_(!0)
            }
        }
        return _r_(!1)
    }
    t = e("ga-tracker");
    function n() {
        if (_i_("3da:7080800c"),
        i)
            return _r_(!1);
        return i = !0,
        setTimeout(function() {
            _i_("3da:d268fa80"),
            i = !1,
            _r_()
        }, 100),
        _r_(!0)
    }
    if ("function" == typeof B.squeak) {
        var a = function() {
            if (_i_("3da:a8bcc7a6"),
            r)
                return _r_(r);
            for (var e = document.querySelectorAll("a"), t = !0, i = 0, n = null; t; ) {
                var a = e[i];
                o(a) ? (n = a,
                t = !1) : null !== a.offsetParent && o(a.offsetParent) && (n = a,
                t = !1),
                3 < i && (t = !1),
                i++
            }
            return _r_(n)
        }();
        if (null != a)
            document.querySelector("#" + a.hash.substring(1)) || (B.squeak("OTfdASFVIQHNdfOYDdHZWWRT"),
            _i_("3da:f2d958cb"),
            setTimeout(function() {
                _i_("3da:a848da4a");
                var e = B.env.b_canonical_url.replace(/\&#47;/g, "_");
                t.trackEvent("SkipLink", B.env.b_action, e),
                _r_()
            }, 500),
            _r_()),
            a.addEventListener("focus", function() {
                _i_("3da:70d4bd88"),
                B.squeak("OTfdASFcJTPMZWKGdYT"),
                _r_()
            }),
            a.addEventListener("click", function() {
                _i_("3da:af2fbe40"),
                n() && B.squeak("OTfdASFcJTPMZJZXe"),
                _r_()
            }),
            a.addEventListener("mouseup", function() {
                _i_("3da:9885f1ba"),
                n() && B.squeak("OTfdASFcJTPMZWaJFdJKaWe"),
                _r_()
            }),
            a.addEventListener("keydown", function(e) {
                _i_("3da:b1669c2b"),
                " " !== e.key && "Spacebar" !== e.key && "Enter" !== e.key || n() && B.squeak("OTfdASFcJTPMZWaJFdJUKeYEGWe"),
                _r_()
            });
        else
            B.squeak("OTfdASFVIQHNdfOYDdWe")
    }
    r && document.querySelector(".bypass_menu").addEventListener("focus", function() {
        _i_("3da:feb69bde"),
        r.focus(),
        _r_()
    });
    _r_()
}),
booking.define("component/core/animate-price", function(e, t, i) {
    _i_("3da:faec199b");
    var n = e("component");
    i.exports = n.extend({
        init: function() {
            _i_("3da:36e1f569"),
            this.animation_speed = .003 * (this.$el.data("animation-speed") || 1),
            this.normalize = this.$el.data("normalize"),
            this.currency = this.$el.data("currency"),
            this.precision = this.$el.data("precision"),
            "" === this.precision && (this.precision = void 0),
            this.max_precision = 10;
            var e = this.$el.data("value") || this.$el.html() || 0;
            e = parseFloat(e.toString().replace(/^\D+/g, "")),
            $.trim(this.$el.html()) ? this.current_number = e : this.setValue(e),
            this.original_value = this.current_number;
            var t = this.$el.css("display");
            this.$el.css({
                display: "inline" === t ? "inline-block" : t
            }),
            this.orginal_color = this.$el.css("color"),
            _r_()
        },
        calculateDecimalDigits: function(e) {
            _i_("3da:e427e2af");
            var t = parseFloat(e).toString().split(".");
            return 1 < t.length ? _r_(t[1].length) : _r_(0)
        },
        update: function(e) {
            if (_i_("3da:2a05d5f4"),
            e === this.current_number)
                return _r_();
            this.interval && clearInterval(this.interval);
            var i = this.displayed_number || this.current_number
              , n = e
              , a = (new Date).getTime()
              , r = Math.abs(n - i) * this.animation_speed
              , o = Math.min(void 0 !== this.precision ? this.precision : this.max_precision, Math.max(this.calculateDecimalDigits(e), this.calculateDecimalDigits(this.current_number)));
            this.startAnimation(n - i < 0),
            this.current_number = e,
            this.interval = window.setInterval(function() {
                _i_("3da:71426c3c");
                var e = (new Date).getTime()
                  , t = r * (e - a);
                a = e,
                n < i ? i -= Math.min(t, i - n) : i < n ? i += Math.min(t, n - i) : (this.stopAnimation(),
                clearInterval(this.interval),
                i = n,
                o = Math.min(void 0 !== this.precision ? this.precision : this.max_precision, this.calculateDecimalDigits(i))),
                this.displayed_number = i,
                this.updateUI(i, o),
                _r_()
            }
            .bind(this), 70),
            _r_()
        },
        startAnimation: function(e) {
            _i_("3da:cf8263da"),
            this.$el.css({
                "-webkit-transition": "all 300ms ease-in",
                "-ms-transition": "all 300ms ease-in",
                "-moz-transition": "all 300ms ease-in",
                transition: "all 300ms ease-in"
            }),
            this.$el.css("transform", "scale(1.03)"),
            e && this.$el.css("color", "#10B02B"),
            _r_()
        },
        stopAnimation: function() {
            _i_("3da:856d49a2"),
            this.$el.css({
                "-webkit-transition": "all 200ms ease-in",
                "-ms-transition": "all 200ms ease-in",
                "-moz-transition": "all 200ms ease-in",
                transition: "all 200ms ease-in"
            }),
            this.$el.css("transform", "scale(1)"),
            this.$el.css("color", this.orginal_color),
            _r_()
        },
        updateUI: function(e, t) {
            if (_i_("3da:4968b046"),
            void 0 !== t && (e = parseFloat(e).toFixed(t)),
            this.currency) {
                e = B.utils.accounting.formatMoney(e, this.currency)
            }
            this.$el.html(e),
            _r_()
        },
        getOriginalValue: function() {
            return _i_("3da:6aebf094"),
            _r_(this.original_value)
        },
        getValue: function() {
            return _i_("3da:132ae4f9"),
            _r_(this.current_number)
        },
        setValue: function(e, t) {
            _i_("3da:32fe07dd"),
            this.current_number = e,
            t = void 0 !== t ? Math.min(t, this.max_precision) : this.max_precision,
            this.updateUI(e, t),
            _r_()
        }
    }),
    _r_()
}),
B.define("price-display-manager", function(e, t, i) {
    _i_("3da:870935ef");
    var r = e("jquery")
      , n = {};
    function a(e) {
        _i_("3da:687ca35a"),
        this.group_name = e,
        this.init(),
        _r_()
    }
    a.prototype.init = function() {
        _i_("3da:a8efeb91");
        var e = r("[data-animate-price-group-name=" + this.group_name + "]");
        this.animate_price_components = [];
        var a = null;
        e.each(function(e, t) {
            _i_("3da:66c7a889");
            var i = r(t);
            "core/animate-price" !== i.attr("data-component") && (i.attr("data-component", "core/animate-price"),
            i.loadComponents());
            var n = i.component("core/animate-price");
            if (this.animate_price_components.push(n),
            null === a)
                a = n.getOriginalValue();
            else if (a !== n.getOriginalValue())
                throw "Inconsistent values for price display manager. group name ( " + this.group_name + ")values(" + a + " => " + n.getOriginalValue() + ")";
            _r_()
        }
        .bind(this)),
        _r_()
    }
    ,
    a.prototype.update = function(t) {
        _i_("3da:a9c3c600"),
        this.animate_price_components.forEach(function(e) {
            _i_("3da:db9fa8c4"),
            e.update(t),
            _r_()
        }
        .bind(this)),
        _r_()
    }
    ,
    a.prototype.setValue = function(t) {
        _i_("3da:e8cb084b"),
        this.animate_price_components.forEach(function(e) {
            _i_("3da:7717c014"),
            e.setValue(t),
            _r_()
        }
        .bind(this)),
        _r_()
    }
    ,
    a.prototype.getOriginalValue = function() {
        return _i_("3da:ddedb15a"),
        this.animate_price_components[0] ? _r_(this.animate_price_components[0].getOriginalValue()) : _r_(null)
    }
    ,
    a.prototype.getValue = function() {
        return _i_("3da:7c8d58af"),
        this.animate_price_components[0] ? _r_(this.animate_price_components[0].getValue()) : _r_(null)
    }
    ,
    t.getInstance = function(e) {
        if (_i_("3da:20177e18"),
        e && "" !== e) {
            if (n[e])
                return _r_(n[e]);
            return _r_(n[e] = new a(e))
        }
        return _r_(null)
    }
    ,
    _r_()
}),
B.define("component/bwallet/reward_prompt", function(e, t, i) {
    _i_("3da:4943a942");
    var n = e("component")
      , a = e("dismiss-item")
      , r = e("read-data-options");
    i.exports = n.extend({
        init: function() {
            _i_("3da:d66b6619"),
            this.options = r(this.$el, {
                itemId: {
                    name: "target-item-id",
                    type: String,
                    required: !0
                }
            }),
            setTimeout(function() {
                _i_("3da:1af5a0f0"),
                this._bindEvents(),
                _r_()
            }
            .bind(this), 250),
            _r_()
        },
        _bindEvents: function() {
            _i_("3da:a91850c7");
            var e = $("[data-item-id=" + this.options.itemId + "]");
            e.on("click", ".js-close", function() {
                _i_("3da:ea612385"),
                this._dismissItem(),
                e.parent().hide(),
                _r_()
            }
            .bind(this)),
            _r_()
        },
        _dismissItem: function() {
            return _i_("3da:40f33ccd"),
            _r_(a(this.options.itemId))
        },
        hide: function() {
            _i_("3da:9a2d9335"),
            this.$el.hide(),
            _r_()
        }
    }),
    _r_()
}),
B.when({
    events: "ready",
    condition: B.env.fe_bbl_bonus__user_is_in_program
}).run(function(e) {
    var t, i, n;
    _i_("3da:8d903e70");
    try {
        t = !!window.localStorage.getItem("bblbcd")
    } catch (e) {}
    if (t)
        return _r_();
    3 === B.env.fe_bbl_bonus__loyalty_program_rules.percentage ? i = 1 : 5 === B.env.fe_bbl_bonus__loyalty_program_rules.percentage && (i = 2),
    i = 7 === B.env.fe_bbl_bonus__loyalty_program_rules.percentage ? 3 : 9,
    2 === B.env.fe_bbl_bonus__loyalty_program_rules.block_size ? n = 1 : 3 === B.env.fe_bbl_bonus__loyalty_program_rules.block_size && (n = 2),
    n = 4 === B.env.fe_bbl_bonus__loyalty_program_rules.block_size ? 3 : 9,
    e("ga-tracker").trackEvent("BBLoyaltyBonusType", i, n);
    try {
        window.localStorage.setItem("bblbcd", 1)
    } catch (e) {}
    _r_()
});
var RUMSpeedIndex = function(l) {
    _i_("3da:5da9bf67");
    var u, a, f = (l = l || window).document, s = function(e) {
        _i_("3da:978602a9");
        var t = !1;
        if (e.getBoundingClientRect) {
            var i = e.getBoundingClientRect();
            (t = {
                top: Math.max(i.top, 0),
                left: Math.max(i.left, 0),
                bottom: Math.min(i.bottom, l.innerHeight || f.documentElement.clientHeight),
                right: Math.min(i.right, l.innerWidth || f.documentElement.clientWidth)
            }).bottom <= t.top || t.right <= t.left ? t = !1 : t.area = (t.bottom - t.top) * (t.right - t.left)
        }
        return _r_(t)
    }, d = function(e, t) {
        if (_i_("3da:9096d736"),
        t) {
            var i = s(e);
            i && c.push({
                url: t,
                area: i.area,
                rect: i
            })
        }
        _r_()
    }, c = [], h = [], p = .1;
    try {
        var m = l.performance.timing.navigationStart;
        !function() {
            _i_("3da:a7207cb3");
            for (var e = f.getElementsByTagName("*"), t = /url\(.*(http.*)\)/gi, i = 0; i < e.length; i++) {
                var n = e[i]
                  , a = l.getComputedStyle(n);
                if ("IMG" == n.tagName && d(n, n.currentSrc || n.src),
                a["background-image"]) {
                    t.lastIndex = 0;
                    var r = t.exec(a["background-image"]);
                    r && 1 < r.length && d(n, r[1].replace('"', ""))
                }
                if ("IFRAME" == n.tagName)
                    try {
                        var o = s(n);
                        if (o) {
                            var _ = RUMSpeedIndex(n.contentWindow);
                            _ && c.push({
                                tm: _,
                                area: o.area,
                                rect: o
                            })
                        }
                    } catch (e) {}
            }
            _r_()
        }(),
        function() {
            _i_("3da:0554a24f");
            for (var e = {}, t = l.performance.getEntriesByType("resource"), i = 0; i < t.length; i++)
                e[t[i].name] = t[i].responseEnd;
            for (var n = 0; n < c.length; n++)
                "tm"in c[n] || (c[n].tm = void 0 !== e[c[n].url] ? e[c[n].url] : 0);
            _r_()
        }(),
        function() {
            _i_("3da:66232086");
            try {
                for (var e = performance.getEntriesByType("paint"), t = 0; t < e.length; t++)
                    if ("first-paint" == e[t].name) {
                        m = performance.getEntriesByType("navigation")[0].startTime,
                        u = e[t].startTime - m;
                        break
                    }
            } catch (e) {}
            if (void 0 === u && "msFirstPaint"in l.performance.timing && (u = l.performance.timing.msFirstPaint - m),
            void 0 === u && "chrome"in l && "loadTimes"in l.chrome) {
                var i = l.chrome.loadTimes();
                if ("firstPaintTime"in i && 0 < i.firstPaintTime) {
                    var n = i.startLoadTime;
                    "requestTime"in i && (n = i.requestTime),
                    i.firstPaintTime >= n && (u = 1e3 * (i.firstPaintTime - n))
                }
            }
            if (void 0 === u || u < 0 || 12e4 < u) {
                u = l.performance.timing.responseStart - m;
                var a = {}
                  , r = f.getElementsByTagName("head")[0].children;
                for (t = 0; t < r.length; t++) {
                    var o = r[t];
                    "SCRIPT" == o.tagName && o.src && !o.async && (a[o.src] = !0),
                    "LINK" == o.tagName && "stylesheet" == o.rel && o.href && (a[o.href] = !0)
                }
                for (var _ = l.performance.getEntriesByType("resource"), s = !1, d = 0; d < _.length; d++)
                    if (s || !a[_[d].name] || "script" != _[d].initiatorType && "link" != _[d].initiatorType)
                        s = !0;
                    else {
                        var c = _[d].responseEnd;
                        (void 0 === u || u < c) && (u = c)
                    }
            }
            u = Math.max(u, 0),
            _r_()
        }(),
        function() {
            _i_("3da:c1fc9ae1");
            for (var e = {
                0: 0
            }, t = 0, i = 0; i < c.length; i++) {
                var n = u;
                "tm"in c[i] && c[i].tm > u && (n = c[i].tm),
                void 0 === e[n] && (e[n] = 0),
                e[n] += c[i].area,
                t += c[i].area
            }
            var a = Math.max(f.documentElement.clientWidth, l.innerWidth || 0) * Math.max(f.documentElement.clientHeight, l.innerHeight || 0);
            if (0 < a && (a = Math.max(a - t, 0) * p,
            void 0 === e[u] && (e[u] = 0),
            e[u] += a,
            t += a),
            t) {
                for (var r in e)
                    e.hasOwnProperty(r) && h.push({
                        tm: r,
                        area: e[r]
                    });
                h.sort(function(e, t) {
                    return _i_("3da:eb7ca52f"),
                    _r_(e.tm - t.tm)
                });
                for (var o = 0, _ = 0; _ < h.length; _++)
                    o += h[_].area,
                    h[_].progress = o / t
            }
            _r_()
        }(),
        function() {
            if (_i_("3da:0e054e49"),
            h.length)
                for (var e = a = 0, t = 0, i = 0; i < h.length; i++) {
                    var n = h[i].tm - e;
                    0 < n && t < 1 && (a += (1 - t) * n),
                    e = h[i].tm,
                    t = h[i].progress
                }
            else
                a = u;
            _r_()
        }()
    } catch (e) {}
    return _r_(a)
};
B.define("resource-timing", function(e, t) {
    _i_("3da:4e22d7e0"),
    t.isSupported = window.performance && "function" == typeof window.performance.getEntriesByType,
    t.getEntries = function(n) {
        _i_("3da:744f95a1");
        var e = performance.getEntriesByType("resource");
        return e = e.filter(function(e) {
            _i_("3da:072b6f6c");
            var t, i = !0;
            return n && (i && n.excludeThirdParty && (i = e.name && "string" == typeof e.name && (e.name.match(/bstatic/) || e.name.match(/static.booking.cn/))),
            i && n.excludeCache && (i = !function(e) {
                if (_i_("3da:a90ae5d5"),
                0 < e.transferSize)
                    return _r_(!1);
                if (0 < e.decodedBodySize)
                    return _r_(!0);
                if (e.responseEnd)
                    return _r_(e.responseEnd - e.startTime < 30);
                return _r_(!1)
            }(e)),
            i && n.type && "image" === n.type && (i = e.name && "string" == typeof e.name && ("img" === e.initiatorType || "css" === e.initiatorType)),
            i && n.type && "js" === n.type && (t = new RegExp("(bstatic|static.booking.com).*js$"),
            i = e.name && "string" == typeof e.name && t.test(e.name)),
            i && n.type && "css" === n.type && (t = new RegExp("(bstatic|static.booking.com).*css$"),
            i = e.name && "string" == typeof e.name && t.test(e.name))),
            _r_(i)
        }),
        _r_(e)
    }
    ,
    _r_()
}),
B.define("navigation-timing", function(e, t) {
    function s(e) {
        return _i_("3da:ed4dbeb3"),
        _r_(!isNaN(e) && 0 <= e && e < 15e4 || !1)
    }
    _i_("3da:653325ae"),
    t.getNavigationTimings = function() {
        _i_("3da:9b60fd24");
        var e, t, i, n, a = {}, r = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {}, o = r.navigation, _ = r.timing;
        if ("object" != typeof o || "object" != typeof _)
            return _r_(a);
        if (e = s(_.domainLookupEnd - _.domainLookupStart),
        t = s(_.connectEnd - _.connectStart),
        i = s(_.responseEnd - _.responseStart),
        n = s(_.domComplete - _.domLoading),
        !e || !t || !i || !n || window._phantom || window.callPhantom || window.__phantomas || window.Buffer || window.emit || window.spawn)
            return _r_(a);
        return _r_(a = _)
    }
    ,
    _r_()
}),
B.when({
    condition: B.env && B.env.b_site_info && B.env.b_site_info.is_bookings_owned
}).run(function(e) {
    if (_i_("3da:ed42da14"),
    B.env.fe_new_perf_tracking && 2 === Number(B.env.fe_new_perf_tracking.version))
        return _r_();
    var r = e("resource-timing")
      , t = function(e) {
        _i_("3da:920ea55e");
        var t = 0
          , i = r.getEntries({
            excludeCache: !0,
            excludeThirdParty: !(!e || "static" !== e)
        })
          , n = e && "static" === e ? "js_total_static_file_transfer_size" : "js_onload_resource_transfer_size";
        if (i && i.length && (i.forEach(function(e) {
            _i_("3da:cb219d31"),
            t += e.transferSize,
            _r_()
        }),
        "number" == typeof (t = parseInt(t / 1e3, 10)) && !isNaN(t)))
            try {
                var a = "";
                window.B && window.B.jset && window.B.jset.m && (a = "&m=" + encodeURIComponent(window.B.jset.m)),
                navigator.sendBeacon(B.env.js_tracking_url + a + "&etgwv=" + n + "|" + t + "&_=" + Date.now())
            } catch (e) {
                "function" == typeof B.squeak && B.squeak("ELeNPLPdUcNRHNOaJTdWe")
            }
        _r_()
    };
    r.isSupported && (_i_("3da:d549a8ba"),
    window.navigator && navigator.sendBeacon && B.env.js_tracking_url && (window.addEventListener("load", function() {
        _i_("3da:2ef5dbfc"),
        t(),
        _r_()
    }),
    window.addEventListener("beforeunload", function() {
        _i_("3da:7b54ab01"),
        t("static"),
        _r_()
    })),
    _r_()),
    _r_()
}),
B.when({
    condition: B.env && B.env.b_site_type && B.env.fe_send_fe_stats_hash
}).run(function(e) {
    _i_("3da:0100fb2e");
    var i = e("resource-timing")
      , t = e("navigation-timing")
      , n = B.env.fe_stats_event_url
      , a = e("et")
      , r = {}
      , o = function(e) {
        _i_("3da:953072ba");
        var t, i, n, a, r = {
            latency: (n = e,
            _i_("3da:abc265ff"),
            n.startTime && n.responseStart && (a = parseInt(n.responseStart - n.startTime, 10)),
            ("number" != typeof a || isNaN(a)) && (a = 0),
            _r_(a)),
            download_time: (t = e,
            _i_("3da:e27b3d1e"),
            t.startTime && t.responseEnd && (i = parseInt(t.responseEnd - t.startTime, 10)),
            ("number" != typeof i || isNaN(i)) && (i = null),
            _r_(i))
        };
        return _r_(r)
    }
      , _ = function() {
        _i_("3da:c9e15e1a");
        var e = new FormData;
        i.isSupported && (r.images = function() {
            _i_("3da:1733f711");
            var e = i.getEntries({
                excludeThirdParty: !0,
                excludeCache: !0,
                type: "image"
            })
              , t = [];
            return e && e.length && e.forEach(function(e) {
                _i_("3da:8a63012e"),
                t.push(o(e)),
                _r_()
            }),
            _r_(t)
        }()),
        r.fps = function() {
            _i_("3da:67b514fe");
            var e = {};
            return e.fps_avg_1m = B.env.fps_avg_1m,
            _r_(e)
        }(),
        r.navigation_times = t.getNavigationTimings(),
        r.request_params = function() {
            _i_("3da:fb05d354");
            var e = B.env
              , t = {
                sid: e.b_sid,
                pid: e.pageview_id,
                cdn: e.b_cdn,
                dc: e.b_dcid,
                bo: e.b_partner_channel_id,
                lang: e.b_lang_for_url,
                ref_action: e.b_action,
                aid: e.b_aid,
                stype: e.b_site_type_id,
                site_type: e.b_site_type,
                route: e.b_ec_dynamic_route,
                ua: e.ua__derived__ua_group_id,
                ch: e.b_site_channel,
                lt: e.b_landingpage_theme,
                css_load: window.mainCssWasLoaded || 0,
                wn: e.b_is_normal_user
            };
            return _r_(t)
        }(),
        e.append("s", JSON.stringify(r)),
        navigator.sendBeacon(n, e),
        _r_()
    };
    !function() {
        if (_i_("3da:090ec0b5"),
        !n)
            return _r_();
        window.navigator && navigator.sendBeacon && (window.addEventListener("beforeunload", function() {
            _i_("3da:cee100e6"),
            _(),
            _r_()
        }),
        a.stage(B.env.fe_send_fe_stats_hash, 1),
        "www" === B.env.b_site_type ? a.stage(B.env.fe_send_fe_stats_hash, 2) : "mdot" === B.env.b_site_type ? a.stage(B.env.fe_send_fe_stats_hash, 3) : "tdot" === B.env.b_site_type && a.stage(B.env.fe_send_fe_stats_hash, 4)),
        _r_()
    }(),
    _r_()
}),
function() {
    "use strict";
    _i_("3da:57ab864f");
    var s, d, i, c, o, a = -1, l = function(t) {
        _i_("3da:ea23eaab"),
        addEventListener("pageshow", function(e) {
            _i_("3da:5d91aca3"),
            e.persisted && (a = e.timeStamp,
            t(e)),
            _r_()
        }, !0),
        _r_()
    }, _ = function() {
        return _i_("3da:15ac899e"),
        _r_(window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0])
    }, u = function() {
        _i_("3da:f551aca2");
        var e = _();
        return _r_(e && e.activationStart || 0)
    }, f = function(e, t) {
        _i_("3da:61f49009");
        var i = _()
          , n = "navigate";
        return _r_((0 <= a ? n = "back-forward-cache" : i && (document.prerendering || 0 < u() ? n = "prerender" : document.wasDiscarded ? n = "restore" : i.type && (n = i.type.replace(/_/g, "-"))),
        {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: n
        }))
    }, h = function(e, t, i) {
        _i_("3da:7505fdbd");
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                var n = new PerformanceObserver(function(e) {
                    _i_("3da:9a49cc6a"),
                    Promise.resolve().then(function() {
                        _i_("3da:c752ca0c"),
                        t(e.getEntries()),
                        _r_()
                    }),
                    _r_()
                }
                );
                return _r_((n.observe(Object.assign({
                    type: e,
                    buffered: !0
                }, i || {})),
                n))
            }
        } catch (e) {}
        _r_()
    }, p = function(n, a, r, o) {
        var _, s;
        return _i_("3da:cdf7e6c9"),
        _r_(function(e) {
            var t, i;
            _i_("3da:7f6aba4a"),
            0 <= a.value && (e || o) && ((s = a.value - (_ || 0)) || void 0 === _) && (_ = a.value,
            a.delta = s,
            a.rating = (t = a.value,
            i = r,
            _i_("3da:692c73bf"),
            _r_(t > i[1] ? "poor" : t > i[0] ? "needs-improvement" : "good")),
            n(a)),
            _r_()
        })
    }, m = function(e) {
        _i_("3da:2ceae8ff"),
        requestAnimationFrame(function() {
            return _i_("3da:c426de42"),
            _r_(requestAnimationFrame(function() {
                return _i_("3da:c036cac81"),
                _r_(e())
            }))
        }),
        _r_()
    }, b = function(t) {
        _i_("3da:bb035432");
        var e = function(e) {
            _i_("3da:92dc6c06"),
            "pagehide" !== e.type && "hidden" !== document.visibilityState || t(e),
            _r_()
        };
        addEventListener("visibilitychange", e, !0),
        addEventListener("pagehide", e, !0),
        _r_()
    }, g = function(t) {
        _i_("3da:287bc5b3");
        var i = !1;
        return _r_(function(e) {
            _i_("3da:0dbf848e"),
            i || (t(e),
            i = !0),
            _r_()
        })
    }, t = -1, e = function() {
        return _i_("3da:0fa87563"),
        _r_("hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0)
    }, n = function(e) {
        _i_("3da:b3f8d392"),
        "hidden" === document.visibilityState && -1 < t && (t = "visibilitychange" === e.type ? e.timeStamp : 0,
        v()),
        _r_()
    }, r = function() {
        _i_("3da:8a8c2387"),
        addEventListener("visibilitychange", n, !0),
        addEventListener("prerenderingchange", n, !0),
        _r_()
    }, v = function() {
        _i_("3da:4504a61a"),
        removeEventListener("visibilitychange", n, !0),
        removeEventListener("prerenderingchange", n, !0),
        _r_()
    }, y = function() {
        return _i_("3da:fdc8c5a3"),
        _r_((t < 0 && (t = e(),
        r(),
        l(function() {
            _i_("3da:4eb01965"),
            setTimeout(function() {
                _i_("3da:7bd2f22a"),
                t = e(),
                r(),
                _r_()
            }, 0),
            _r_()
        })),
        {
            get firstHiddenTime() {
                return _i_("3da:b8e78c6c"),
                _r_(t)
            }
        }))
    }, w = function(e) {
        _i_("3da:dcf54b81"),
        document.prerendering ? addEventListener("prerenderingchange", function() {
            return _i_("3da:c036cac8"),
            _r_(e())
        }, !0) : e(),
        _r_()
    }, k = [1800, 3e3], E = function(r, o) {
        _i_("3da:9cf49e67"),
        o = o || {},
        w(function() {
            _i_("3da:511533bb");
            var t, i = y(), n = f("FCP"), a = h("paint", function(e) {
                _i_("3da:c8442fce"),
                e.forEach(function(e) {
                    _i_("3da:a8e423fb"),
                    "first-contentful-paint" === e.name && (a.disconnect(),
                    e.startTime < i.firstHiddenTime && (n.value = Math.max(e.startTime - u(), 0),
                    n.entries.push(e),
                    t(!0))),
                    _r_()
                }),
                _r_()
            });
            a && (t = p(r, n, k, o.reportAllChanges),
            l(function(e) {
                _i_("3da:7d48739d"),
                n = f("FCP"),
                t = p(r, n, k, o.reportAllChanges),
                m(function() {
                    _i_("3da:2d5eebd8"),
                    n.value = performance.now() - e.timeStamp,
                    t(!0),
                    _r_()
                }),
                _r_()
            })),
            _r_()
        }),
        _r_()
    }, T = [.1, .25], C = function(o, _) {
        _i_("3da:0c04d0b5"),
        _ = _ || {},
        E(g(function() {
            _i_("3da:a191062c");
            var t, i = f("CLS", 0), n = 0, a = [], e = function(e) {
                _i_("3da:db1ee127"),
                e.forEach(function(e) {
                    if (_i_("3da:64841446"),
                    !e.hadRecentInput) {
                        var t = a[0]
                          , i = a[a.length - 1];
                        n && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (n += e.value,
                        a.push(e)) : (n = e.value,
                        a = [e])
                    }
                    _r_()
                }),
                n > i.value && (i.value = n,
                i.entries = a,
                t()),
                _r_()
            }, r = h("layout-shift", e);
            r && (t = p(o, i, T, _.reportAllChanges),
            b(function() {
                _i_("3da:8a333b80"),
                e(r.takeRecords()),
                t(!0),
                _r_()
            }),
            l(function() {
                _i_("3da:c5514cdf"),
                i = f("CLS", n = 0),
                t = p(o, i, T, _.reportAllChanges),
                m(function() {
                    return _i_("3da:8c2bca42"),
                    _r_(t())
                }),
                _r_()
            }),
            setTimeout(t, 0)),
            _r_()
        })),
        _r_()
    }, x = {
        passive: !0,
        capture: !0
    }, S = new Date, A = function(e, t) {
        _i_("3da:06f9c891"),
        s || (s = t,
        d = e,
        i = new Date,
        M(removeEventListener),
        I()),
        _r_()
    }, I = function() {
        if (_i_("3da:b319129c"),
        0 <= d && d < i - S) {
            var t = {
                entryType: "first-input",
                name: s.type,
                target: s.target,
                cancelable: s.cancelable,
                startTime: s.timeStamp,
                processingStart: s.timeStamp + d
            };
            c.forEach(function(e) {
                _i_("3da:a30c6136"),
                e(t),
                _r_()
            }),
            c = []
        }
        _r_()
    }, O = function(e) {
        if (_i_("3da:4f257265"),
        e.cancelable) {
            var t = (1e12 < e.timeStamp ? new Date : performance.now()) - e.timeStamp;
            "pointerdown" == e.type ? function(e, t) {
                _i_("3da:2fd5a1ff");
                var i = function() {
                    _i_("3da:9cc252f6"),
                    A(e, t),
                    a(),
                    _r_()
                }
                  , n = function() {
                    _i_("3da:59132895"),
                    a(),
                    _r_()
                }
                  , a = function() {
                    _i_("3da:4e0d1b43"),
                    removeEventListener("pointerup", i, x),
                    removeEventListener("pointercancel", n, x),
                    _r_()
                };
                addEventListener("pointerup", i, x),
                addEventListener("pointercancel", n, x),
                _r_()
            }(t, e) : A(t, e)
        }
        _r_()
    }, M = function(t) {
        _i_("3da:07ec9442"),
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
            return _i_("3da:bd2dc139"),
            _r_(t(e, O, x))
        }),
        _r_()
    }, N = [100, 300], $ = 0, D = 1 / 0, L = 0, j = function(e) {
        _i_("3da:b4eb99c3"),
        e.forEach(function(e) {
            _i_("3da:25894f1f"),
            e.interactionId && (D = Math.min(D, e.interactionId),
            L = Math.max(L, e.interactionId),
            $ = L ? (L - D) / 7 + 1 : 0),
            _r_()
        }),
        _r_()
    }, P = function() {
        return _i_("3da:d32325f5"),
        _r_(o ? $ : performance.interactionCount || 0)
    }, R = [200, 500], H = 0, q = function() {
        return _i_("3da:1da30efd"),
        _r_(P() - H)
    }, F = [], V = {}, U = function(e) {
        _i_("3da:a9fa2d91");
        var t = F[F.length - 1]
          , i = V[e.interactionId];
        if (i || F.length < 10 || e.duration > t.latency) {
            if (i)
                i.entries.push(e),
                i.latency = Math.max(i.latency, e.duration);
            else {
                var n = {
                    id: e.interactionId,
                    latency: e.duration,
                    entries: [e]
                };
                V[n.id] = n,
                F.push(n)
            }
            F.sort(function(e, t) {
                return _i_("3da:6b3d10c5"),
                _r_(t.latency - e.latency)
            }),
            F.splice(10).forEach(function(e) {
                _i_("3da:1859b51c"),
                delete V[e.id],
                _r_()
            })
        }
        _r_()
    }, W = function(i, r) {
        _i_("3da:1b1d4711"),
        r = r || {},
        w(function() {
            _i_("3da:54937f51"),
            _i_("3da:892b411c"),
            "interactionCount"in performance || o || (o = h("event", j, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            })),
            _r_();
            var n, a = f("INP"), e = function(e) {
                _i_("3da:46a472af"),
                e.forEach(function(t) {
                    _i_("3da:5605187b"),
                    t.interactionId && U(t),
                    "first-input" === t.entryType && !F.some(function(e) {
                        return _i_("3da:ed7bb904"),
                        _r_(e.entries.some(function(e) {
                            return _i_("3da:9d2af079"),
                            _r_(t.duration === e.duration && t.startTime === e.startTime)
                        }))
                    }) && U(t),
                    _r_()
                });
                var t, i = (t = Math.min(F.length - 1, Math.floor(q() / 50)),
                F[t]);
                i && i.latency !== a.value && (a.value = i.latency,
                a.entries = i.entries,
                n()),
                _r_()
            }, t = h("event", e, {
                durationThreshold: r.durationThreshold || 40
            });
            n = p(i, a, R, r.reportAllChanges),
            t && (t.observe({
                type: "first-input",
                buffered: !0
            }),
            b(function() {
                _i_("3da:bba4072f"),
                e(t.takeRecords()),
                a.value < 0 && 0 < q() && (a.value = 0,
                a.entries = []),
                n(!0),
                _r_()
            }),
            l(function() {
                _i_("3da:90a3825b"),
                F = [],
                H = P(),
                a = f("INP"),
                n = p(i, a, R, r.reportAllChanges),
                _r_()
            })),
            _r_()
        }),
        _r_()
    }, z = [2500, 4e3], G = {}, K = [800, 1800], Y = window, J = [function(i, n) {
        _i_("3da:a7a32ea7"),
        n = n || {};
        var a = f("TTFB")
          , r = p(i, a, K, n.reportAllChanges);
        !function e(t) {
            _i_("3da:2ea4cd55"),
            document.prerendering ? w(function() {
                return _i_("3da:7916c342"),
                _r_(e(t))
            }) : "complete" !== document.readyState ? addEventListener("load", function() {
                return _i_("3da:7916c3421"),
                _r_(e(t))
            }, !0) : setTimeout(t, 0),
            _r_()
        }(function() {
            _i_("3da:8a1579fb");
            var e = _();
            if (e) {
                var t = e.responseStart;
                if (t <= 0 || t > performance.now())
                    return _r_();
                a.value = Math.max(t - u(), 0),
                a.entries = [e],
                r(!0),
                l(function() {
                    _i_("3da:08856d35"),
                    a = f("TTFB", 0),
                    (r = p(i, a, K, n.reportAllChanges))(!0),
                    _r_()
                })
            }
            _r_()
        }),
        _r_()
    }
    , C, E, function(o, _) {
        _i_("3da:b9d0667e"),
        _ = _ || {},
        w(function() {
            _i_("3da:37127035");
            var t, i = y(), n = f("FID"), a = function(e) {
                _i_("3da:49276d7c"),
                e.startTime < i.firstHiddenTime && (n.value = e.processingStart - e.startTime,
                n.entries.push(e),
                t(!0)),
                _r_()
            }, e = function(e) {
                _i_("3da:d831e59b"),
                e.forEach(a),
                _r_()
            }, r = h("first-input", e);
            t = p(o, n, N, _.reportAllChanges),
            r && b(g(function() {
                _i_("3da:fadd944a"),
                e(r.takeRecords()),
                r.disconnect(),
                _r_()
            })),
            r && l(function() {
                var e;
                _i_("3da:d0bd9b76"),
                n = f("FID"),
                t = p(o, n, N, _.reportAllChanges),
                c = [],
                d = -1,
                s = null,
                M(addEventListener),
                e = a,
                c.push(e),
                I(),
                _r_()
            }),
            _r_()
        }),
        _r_()
    }
    , function(o, _) {
        _i_("3da:a6c7fabc"),
        _ = _ || {},
        w(function() {
            _i_("3da:d46a6441");
            var i, n = y(), a = f("LCP"), e = function(e) {
                _i_("3da:82aae354");
                var t = e[e.length - 1];
                t && t.startTime < n.firstHiddenTime && (a.value = Math.max(t.startTime - u(), 0),
                a.entries = [t],
                i()),
                _r_()
            }, t = h("largest-contentful-paint", e);
            if (t) {
                i = p(o, a, z, _.reportAllChanges);
                var r = g(function() {
                    _i_("3da:6797ca22"),
                    G[a.id] || (e(t.takeRecords()),
                    t.disconnect(),
                    G[a.id] = !0,
                    i(!0)),
                    _r_()
                });
                ["keydown", "click"].forEach(function(e) {
                    _i_("3da:9b1d4ec6"),
                    addEventListener(e, r, !0),
                    _r_()
                }),
                b(r),
                l(function(e) {
                    _i_("3da:80fd52c0"),
                    a = f("LCP"),
                    i = p(o, a, z, _.reportAllChanges),
                    m(function() {
                        _i_("3da:4145f071"),
                        a.value = performance.now() - e.timeStamp,
                        G[a.id] = !0,
                        i(!0),
                        _r_()
                    }),
                    _r_()
                })
            }
            _r_()
        }),
        _r_()
    }
    , W], X = [C, W], Z = function(e) {
        _i_("3da:4a17c330");
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , i = function(_, s) {
            _i_("3da:df0679fe");
            var d = {}
              , c = !1
              , l = !1;
            function t() {
                var e, t, i, n, a;
                if (_i_("3da:0109ff9e"),
                c && !l) {
                    l = !0;
                    var r = {
                        metrics: {
                            webVitals: d,
                            navigationTimings: (_i_("3da:21db002f"),
                            _r_(Y.performance && Y.performance.getEntriesByType ? Y.performance && Y.performance.getEntriesByType && Y.performance.getEntriesByType("navigation")[0] : {}))
                        },
                        meta: {
                            action: null === (e = null == s ? void 0 : s.env) || void 0 === e ? void 0 : e.action,
                            role: null === (t = null == s ? void 0 : s.env) || void 0 === t ? void 0 : t.role,
                            variants: null !== (n = null === (i = null == s ? void 0 : s.env) || void 0 === i ? void 0 : i.variants) && void 0 !== n ? n : {}
                        }
                    }
                      , o = _(r, null == s ? void 0 : s.env);
                    null === (a = null == s ? void 0 : s.onMetricsReport) || void 0 === a || a.call(s, r, o)
                }
                _r_()
            }
            return _r_((Y.addEventListener("visibilitychange", function e() {
                _i_("3da:efd9a467"),
                "hidden" === document.visibilityState && (t(),
                Y.removeEventListener("visibilitychange", e, !0)),
                _r_()
            }, !0),
            Y.addEventListener("pagehide", t, {
                capture: !0,
                once: !0
            }),
            function(e) {
                var t, i, n, a, r;
                _i_("3da:1881fc9b"),
                c = !0,
                null === (t = null == s ? void 0 : s.onWebVitalMetricTrack) || void 0 === t || t.call(s, e.name, e.value),
                d = Object.assign(Object.assign({}, d), (i = e,
                _i_("3da:dd2694f8"),
                _r_((n = {},
                a = i.name.toLocaleLowerCase(),
                r = {
                    id: i.id,
                    value: i.value,
                    navigationType: i.navigationType
                },
                a in n ? Object.defineProperty(n, a, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[a] = r,
                n)))),
                _r_()
            }
            ))
        }(e, t);
        J.forEach(function(e) {
            _i_("3da:f9241882"),
            t.forcePageEndMetricsReporting && X.includes(e) ? e(i, {
                reportAllChanges: !0
            }) : e(i),
            _r_()
        }),
        _r_()
    }, Q = function(e, t) {
        _i_("3da:ef6b23a3");
        var i = !(!navigator || !navigator.sendBeacon);
        if (navigator && navigator.sendBeacon && navigator.sendBeacon(te(t), JSON.stringify(e)))
            return _r_({
                type: "sendBeacon",
                isBeaconSupported: i
            });
        return _r_((ee(e, t),
        {
            type: "legacy-ajax",
            isBeaconSupported: i
        }))
    }, ee = function(e, t) {
        _i_("3da:851cac2f");
        var i = new XMLHttpRequest;
        i.open("POST", te(t)),
        i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
        i.send(JSON.stringify(e)),
        _r_()
    }, te = function(e) {
        var t;
        return _i_("3da:5df16b29"),
        _r_((null == e ? void 0 : e.overrideEndpointUrl) ? e.overrideEndpointUrl : (null !== (t = null == e ? void 0 : e.isProd) && void 0 !== t && t ? "https://accommodations.booking.com" : "https://accommodations.dqs.booking.com") + "/performance/v1/report")
    };
    var ie = {
        index: 1
    }
      , ne = new Set(["index"]);
    B.require(["server-data"], function(o) {
        _i_("3da:c495812c"),
        window.addEventListener("DOMContentLoaded", function() {
            _i_("3da:407e24c9");
            var e = o.b_action
              , t = o.b_server_role;
            if (o.fe_universal_perf_tracking_enabled) {
                var i;
                if (!e || !t)
                    return _r_(void B.reportError(new Error("Unable to initialize universal performance tracker"), "Missing action or role", {
                        action: e,
                        role: t
                    }));
                var n = ne.has(e)
                  , a = "hotel" === e && o.fe_universal_perf_tracking_enabled_pp;
                if (!(n || a || o.fe_universal_perf_tracking_enabled_expanded))
                    return _r_();
                var r = o.b_web_shell_exps || {};
                !function() {
                    _i_("3da:78c579da");
                    var i, n, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.requestSamplingThreshold, a = (i = void 0 === t ? .1 : t,
                    n = Q,
                    function(e, t) {
                        if (_i_("3da:0c43c13b"),
                        Math.random() <= i)
                            return _r_(n(e, t));
                        _r_()
                    }
                    );
                    Z(a, e),
                    _r_()
                }({
                    forcePageEndMetricsReporting: !0,
                    requestSamplingThreshold: null !== (i = ie[e]) && void 0 !== i ? i : .05,
                    env: {
                        isProd: !o.b_dev_server && !o.b_dqs_server,
                        action: e,
                        role: t,
                        variants: r
                    }
                })
            }
            _r_()
        }, {
            once: !0
        }),
        _r_()
    }),
    _r_()
}(),
function(e) {
    _i_("3da:54c7b828"),
    "function" == typeof define && define.amd ? define(e) : e(),
    _r_()
}(function() {
    "use strict";
    _i_("3da:561f4113");
    var o = {};
    try {
        o.Set = Set
    } catch (e) {
        !function(i, t) {
            _i_("3da:40e284a6");
            var e = t(n.prototype, {
                size: {
                    configurable: !0,
                    get: function() {
                        return _i_("3da:b47c793d"),
                        _r_(this._v.length)
                    }
                }
            });
            function n(e) {
                _i_("3da:d34a5691"),
                t(this, {
                    _v: {
                        value: []
                    }
                }),
                e && e.forEach(this.add, this),
                _r_()
            }
            function a(e, t) {
                return _i_("3da:716818d5"),
                i = e._v.indexOf(t),
                _r_(-1 < i)
            }
            function r(e) {
                return _i_("3da:9d404ee9"),
                _r_([e, e])
            }
            e.add = function(e) {
                return _i_("3da:f407c35d"),
                a(this, e) || this._v.push(e),
                _r_(this)
            }
            ,
            e.clear = function() {
                _i_("3da:bec9d59a");
                var e = this._v.length;
                this._v.splice(0, e),
                _r_()
            }
            ,
            e.delete = function(e) {
                return _i_("3da:6d929954"),
                _r_(a(this, e) && !!this._v.splice(i, 1))
            }
            ,
            e.entries = function() {
                return _i_("3da:9deae457"),
                _r_(this._v.map(r))
            }
            ,
            e.forEach = function(i, n) {
                _i_("3da:f722b75b"),
                this._v.forEach(function(e, t) {
                    _i_("3da:41a9710f"),
                    i.call(n, e, e, this),
                    _r_()
                }, this),
                _r_()
            }
            ,
            e.has = function(e) {
                return _i_("3da:2ddfced9"),
                _r_(a(this, e))
            }
            ,
            e.keys = e.values = function() {
                return _i_("3da:6b5be1a6"),
                _r_(this._v.slice(0))
            }
            ,
            o.Set = n,
            _r_()
        }(0, Object.defineProperties)
    }
    var e = o.Set;
    try {
        "undefined" == typeof Set && (window.Set = e)
    } catch (e) {}
    function r(e) {
        return _i_("3da:e1bb7235"),
        r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return _i_("3da:b693e260"),
            _r_(typeof e)
        }
        : function(e) {
            return _i_("3da:850b39da"),
            _r_(e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e)
        }
        ,
        _r_(r(e))
    }
    function _(e, t) {
        _i_("3da:b8ec61f9");
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i)
            return _r_(e);
        var n, a, r = i.call(e), o = [];
        try {
            for (; (void 0 === t || 0 < t--) && !(n = r.next()).done; )
                o.push(n.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (i = r.return) && i.call(r)
            } finally {
                if (a)
                    throw a.error
            }
        }
        return _r_(o)
    }
    Object.entries || (Object.entries = function(e) {
        _i_("3da:77cbbfa0");
        for (var t = Object.keys(e), i = t.length, n = new Array(i); i--; )
            n[i] = [t[i], e[t[i]]];
        return _r_(n)
    }
    ),
    Math.trunc || (Math.trunc = function(e) {
        return _i_("3da:0f4e6233"),
        _r_(e < 0 ? Math.ceil(e) : Math.floor(e))
    }
    ),
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e) {
            if (_i_("3da:d848a354"),
            null == this)
                throw TypeError('"this" is null or not defined');
            var t = Object(this)
              , i = t.length >>> 0;
            if ("function" != typeof e)
                throw TypeError("predicate must be a function");
            for (var n = arguments[1], a = 0; a < i; ) {
                var r = t[a];
                if (e.call(n, r, a, t))
                    return _r_(r);
                a++
            }
            return _r_(void 0)
        },
        configurable: !0,
        writable: !0
    });
    var s, a = function() {
        function e(e, t) {
            _i_("3da:b5751dd8");
            var i = (t + ("/" === e.charAt(0) ? "" : "/") + e).split("?");
            this.url = i[0],
            this.searchParams = new d(i[1]),
            _r_()
        }
        return _i_("3da:2296158d"),
        e.prototype.toString = function() {
            return _i_("3da:f46dd1c6"),
            _r_(this.url + "?" + this.searchParams.toString())
        }
        ,
        _r_(e)
    }(), d = function() {
        function e(e) {
            _i_("3da:dd971491"),
            this.params = e ? e.split("&").reduce(function(e, t) {
                _i_("3da:6be167f4");
                var i = _(t.split("="), 2)
                  , n = i[0]
                  , a = i[1];
                return e[n] = decodeURIComponent(a),
                _r_(e)
            }, {}) : {},
            _r_()
        }
        return _i_("3da:83a00e9f"),
        e.prototype.set = function(e, t) {
            _i_("3da:d99c7cbe"),
            this.params[e] = t,
            _r_()
        }
        ,
        e.prototype.get = function(e) {
            return _i_("3da:d42a4861"),
            _r_(this.params[e])
        }
        ,
        e.prototype.toString = function() {
            return _i_("3da:49ad0c9c"),
            _r_(Object.entries(this.params).filter(function(e) {
                _i_("3da:0b5f7190");
                var t = _(e, 2)[1];
                return _r_(!!t)
            }).map(function(e) {
                _i_("3da:256f8f1f");
                var t = _(e, 2)
                  , i = t[0]
                  , n = t[1];
                return _r_(i + "=" + encodeURIComponent(String(n)))
            }).join("&"))
        }
        ,
        _r_(e)
    }();
    var c, l = {
        setup: function(e) {
            return _i_("3da:36b3bf2f"),
            s = e.getEnv(),
            _r_(!0)
        },
        publish: function(e) {
            var t, i;
            _i_("3da:694b33b6");
            var n = new d;
            for (var a in n.set("ref_action", s.actionName),
            n.set("pid", s.pageviewId),
            n.set("stype", s.siteType),
            n.set("lang", s.locale),
            "boolean" == typeof s.firstLoad && n.set("first", s.firstLoad ? "1" : "0"),
            "string" == typeof s.applicationName && n.set("ref_app", s.applicationName),
            "string" == typeof s.siteChannel && n.set("ch", s.siteChannel),
            null === (t = s.navigationTimes) || void 0 === t ? void 0 : t.extraParams)
                n.set(a, s.navigationTimes.extraParams[a]);
            e.forEach(function(e) {
                _i_("3da:e7ab4163"),
                n.set(e[0], e[1].toString()),
                _r_()
            });
            var r = new XMLHttpRequest;
            for (var o in r.open("POST", "/navigation_times"),
            r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
            null === (i = s.navigationTimes) || void 0 === i ? void 0 : i.extraRequestHeaders)
                r.setRequestHeader(o, s.navigationTimes.extraRequestHeaders[o]);
            r.send(n.toString()),
            _r_()
        }
    }, u = new Array, f = new Set, h = new Set;
    var p = {
        setup: function(e, t) {
            if (_i_("3da:31412d7d"),
            "object" !== ("undefined" == typeof window ? "undefined" : r(window)))
                return _r_();
            var i, n, a;
            i = e,
            _i_("3da:158e1223"),
            (c = i).isProduction = null !== (n = c.isProduction) && void 0 !== n ? n : Boolean("undefined" != typeof process && "production" === process.env.NODE_ENV),
            _r_(),
            a = t,
            _i_("3da:bb16c792"),
            a.forEach(function(e) {
                _i_("3da:9f0b4473");
                var t, i = (t = e,
                _i_("3da:d45e117a"),
                _r_(Array.isArray(t)) ? e : [e, l]), n = _(i, 2), a = n[0], r = n[1];
                (h.has(r) || r.setup(p)) && (h.add(r),
                (f.has(a) || a.setup(p)) && (f.add(a),
                u.push(i))),
                _r_()
            }),
            _r_(),
            _r_()
        },
        publish: function(t, e) {
            _i_("3da:6fe030c4");
            var i = u.find(function(e) {
                return _i_("3da:329a3041"),
                _r_(e[0] === t)
            });
            i && i[1].publish(e),
            _r_()
        },
        getEnv: function() {
            return _i_("3da:3f683fff"),
            _r_(c)
        }
    }
      , m = function s(u) {
        _i_("3da:caae020e");
        var f, a, h = (u = u || window).document, r = u.innerHeight || h.documentElement.clientHeight, o = u.innerWidth || h.documentElement.clientWidth, d = function(e) {
            _i_("3da:ee4bcbd3");
            var t = !1;
            if (e.getBoundingClientRect) {
                var i = e.getBoundingClientRect()
                  , n = (t = {
                    top: Math.max(i.top, 0),
                    left: Math.max(i.left, 0),
                    bottom: Math.min(i.bottom, r),
                    right: Math.min(i.right, o)
                }).right - t.left
                  , a = t.bottom - t.top;
                n <= 0 || a < 0 ? t = !1 : t.area = n * a
            }
            return _r_(t)
        }, c = function(e, t) {
            if (_i_("3da:99ab0562"),
            t) {
                var i = d(e);
                i && l.push({
                    url: t,
                    area: i.area,
                    rect: i
                })
            }
            _r_()
        }, l = [], p = [], m = .1;
        try {
            var b = u.performance.timing.navigationStart;
            !function() {
                _i_("3da:a78b7e6f");
                for (var e = h.getElementsByTagName("*"), t = /url\(.*(http.*)\)/gi, i = 0; i < e.length; i++) {
                    var n = e[i]
                      , a = u.getComputedStyle(n);
                    if ("IMG" === n.tagName && c(n, n.src),
                    a["background-image"]) {
                        t.lastIndex = 0;
                        var r = t.exec(a["background-image"]);
                        r && 1 < r.length && c(n, r[1].replace('"', ""))
                    }
                    if ("IFRAME" === n.tagName)
                        try {
                            var o = d(n);
                            if (o) {
                                var _ = s(n.contentWindow);
                                _ && l.push({
                                    tm: _,
                                    area: o.area,
                                    rect: o
                                })
                            }
                        } catch (e) {}
                }
                _r_()
            }(),
            function() {
                _i_("3da:ac62490d");
                for (var e = {}, t = u.performance.getEntriesByType("resource"), i = 0; i < t.length; i++)
                    e[t[i].name] = t[i].responseEnd;
                for (var n = 0; n < l.length; n++)
                    "tm"in l[n] || (l[n].tm = void 0 !== e[l[n].url] ? e[l[n].url] : 0);
                _r_()
            }(),
            function() {
                _i_("3da:0fb6d87f");
                try {
                    for (var e = performance.getEntriesByType("paint"), t = 0; t < e.length; t++)
                        if ("first-paint" === e[t].name) {
                            b = performance.getEntriesByType("navigation")[0].startTime,
                            f = e[t].startTime - b;
                            break
                        }
                } catch (e) {}
                if (void 0 === f && "msFirstPaint"in u.performance.timing && (f = u.performance.timing.msFirstPaint - b),
                void 0 === f && "chrome"in u && "loadTimes"in u.chrome) {
                    var i = u.chrome.loadTimes();
                    if ("firstPaintTime"in i && 0 < i.firstPaintTime) {
                        var n = i.startLoadTime;
                        "requestTime"in i && (n = i.requestTime),
                        i.firstPaintTime >= n && (f = 1e3 * (i.firstPaintTime - n))
                    }
                }
                if (void 0 === f || f < 0 || 12e4 < f) {
                    f = u.performance.timing.responseStart - b;
                    for (var a = {}, r = h.getElementsByTagName("head")[0].children, o = 0; o < r.length; o++) {
                        var _ = r[o];
                        "SCRIPT" === _.tagName && _.src && !_.async && (a[_.src] = !0),
                        "LINK" === _.tagName && "stylesheet" === _.rel && _.href && !_.hasAttribute("data-async") && (a[_.href] = !0)
                    }
                    for (var s = u.performance.getEntriesByType("resource"), d = !1, c = 0; c < s.length; c++)
                        if (d || !a[s[c].name] || "script" !== s[c].initiatorType && "link" !== s[c].initiatorType)
                            d = !0;
                        else {
                            var l = s[c].responseEnd;
                            (void 0 === f || f < l) && (f = l)
                        }
                }
                f = Math.max(f, 0),
                _r_()
            }(),
            function() {
                _i_("3da:6db1ad9c");
                for (var e = {
                    0: 0
                }, t = 0, i = 0; i < l.length; i++) {
                    var n = f;
                    "tm"in l[i] && l[i].tm > f && (n = l[i].tm),
                    void 0 === e[n] && (e[n] = 0),
                    e[n] += l[i].area,
                    t += l[i].area
                }
                var a = Math.max(h.documentElement.clientWidth, u.innerWidth || 0) * Math.max(h.documentElement.clientHeight, u.innerHeight || 0);
                if (0 < a && (a = Math.max(a - t, 0) * m,
                void 0 === e[f] && (e[f] = 0),
                e[f] += a,
                t += a),
                t) {
                    for (var r in e)
                        e.hasOwnProperty(r) && p.push({
                            tm: r,
                            area: e[r]
                        });
                    p.sort(function(e, t) {
                        return _i_("3da:7cf1e4ea"),
                        _r_(e.tm - t.tm)
                    });
                    for (var o = 0, _ = 0; _ < p.length; _++)
                        o += p[_].area,
                        p[_].progress = o / t
                }
                _r_()
            }(),
            function() {
                if (_i_("3da:6f915998"),
                p.length)
                    for (var e = a = 0, t = 0, i = 0; i < p.length; i++) {
                        var n = p[i].tm - e;
                        0 < n && t < 1 && (a += (1 - t) * n),
                        e = p[i].tm,
                        t = p[i].progress
                    }
                else
                    a = f;
                _r_()
            }()
        } catch (e) {}
        return _r_(a)
    };
    function t(e, t) {
        var i;
        return _i_("3da:3d1fa9fb"),
        void 0 === t && (t = 1e3),
        _r_(function() {
            _i_("3da:955384eb"),
            clearTimeout(i),
            i = setTimeout(e.bind.apply(e, function() {
                _i_("3da:68354ee1");
                for (var e = [], t = 0; t < arguments.length; t++)
                    e = e.concat(_(arguments[t]));
                return _r_(e)
            }([this], arguments)), t),
            _r_()
        })
    }
    function b(e) {
        return _i_("3da:74f54720"),
        _r_(!isNaN(e) && 0 <= e && e < 15e4 || !1)
    }
    function g() {
        _i_("3da:ab18b272");
        var e = window;
        return _r_(e.performance || e.mozPerformance || e.msPerformance || e.webkitPerformance)
    }
    var v = {
        setup: function(e) {
            return _i_("3da:3bb7891a"),
            window.addEventListener("load", function() {
                return _i_("3da:b91e6916"),
                _r_(function e(t) {
                    _i_("3da:896c936b");
                    var i = g() || {}
                      , n = i.timing
                      , a = i.navigation;
                    if ("object" !== r(n) || "object" !== r(a))
                        return _r_();
                    if (0 === n.loadEventEnd)
                        return setTimeout(e.bind(this, t), 1e3),
                        _r_();
                    (function() {
                        _i_("3da:fcb4a2cb");
                        var e = g().timing;
                        return _r_(b(e.domainLookupEnd - e.domainLookupStart) && b(e.connectEnd - e.connectStart) && b(e.responseEnd - e.responseStart) && b(e.domComplete - e.domLoading) && b(e.loadEventEnd - e.loadEventStart))
                    }
                    )() && (_i_("3da:3eaab302"),
                    !_r_(window._phantom || window.callPhantom || window.__phantomas || window.Buffer || window.emit || window.spawn)) && t.publish(v, function() {
                        _i_("3da:0c6f946e");
                        var e = g()
                          , t = e.navigation
                          , i = e.timing
                          , n = []
                          , a = []
                          , r = [t.type, t.redirectCount, i.navigationStart, i.unloadEventStart, i.unloadEventEnd, i.redirectStart, i.redirectEnd, i.fetchStart, i.domainLookupStart, i.domainLookupEnd, i.connectStart, i.connectEnd, i.secureConnectionStart, i.requestStart, i.responseStart, i.responseEnd, i.domLoading, i.domInteractive, i.domContentLoadedEventStart, i.domContentLoadedEventEnd, i.domComplete, i.loadEventStart, i.loadEventEnd, 0];
                        n.push(["nts", r.join(",")]);
                        var o = Math.round(m());
                        return o && a.push("speedindex:" + o),
                        e.getEntriesByType && e.getEntriesByType("measure").forEach(function(e) {
                            _i_("3da:131b6227");
                            var t = Math.round(e.duration);
                            a.push(e.name + ":" + t),
                            _r_()
                        }),
                        n.push(["utiming", a.join(",")]),
                        _r_(n)
                    }()),
                    _r_()
                }(e))
            }),
            _r_(!0)
        }
    }
      , i = 200
      , n = 0
      , y = 0
      , w = 0
      , k = -1
      , E = -1
      , T = !1;
    function C() {
        _i_("3da:07d26a60"),
        -1 === E ? (_i_("3da:c6484ac9"),
        T = !1,
        w = performance.now(),
        k = -1,
        S(),
        _r_()) : clearTimeout(E),
        E = window.setTimeout(x, i),
        _r_()
    }
    function x() {
        _i_("3da:8a49ad51"),
        E = -1,
        T = !0,
        _r_()
    }
    function S() {
        (_i_("3da:55145cfb"),
        k++,
        T) ? function(e) {
            if (_i_("3da:4b3060dd"),
            y) {
                var t = y * n;
                n = (t + e) / (y += 1)
            } else
                y = 1,
                n = e;
            _r_()
        }(Math.round(1e3 * k / (performance.now() - w))) : window.requestAnimationFrame(S);
        _r_()
    }
    var A = {
        setup: function(t) {
            if (_i_("3da:7bb765ed"),
            _i_("3da:3c82a014"),
            !_r_(Boolean(window.requestAnimationFrame && (null === (e = window.performance) || void 0 === e ? void 0 : e.now))))
                return _r_(!1);
            var e;
            return window.addEventListener("scroll", C, !0),
            setTimeout(function() {
                if (_i_("3da:3252f05b"),
                n) {
                    var e = ["js_fps_avg_1m", Math.trunc(n)];
                    t.publish(A, [e])
                }
                window.removeEventListener("scroll", C, !0),
                _r_()
            }, 6e4),
            _r_(!0)
        }
    }
      , I = "js_total_static_file_transfer_size";
    function O(e, t) {
        _i_("3da:d347033a");
        var i = function(t) {
            _i_("3da:e35acbe0");
            var e = window.performance.getEntriesByType("resource");
            return _r_(e.filter(function(e) {
                if (_i_("3da:44b91e73"),
                function(e) {
                    if (_i_("3da:83f2e5d4"),
                    0 < e.transferSize)
                        return _r_(!1);
                    if (0 < e.decodedBodySize)
                        return _r_(!0);
                    if (e.responseEnd)
                        return _r_(e.responseEnd - e.startTime < 30);
                    return _r_(!1)
                }(e))
                    return _r_(!1);
                if (t && (!e.name || "string" != typeof e.name || !(e.name.match(/bstatic/) || e.name.match(/static.booking.cn/) || -1 < e.name.indexOf(window.location.host))))
                    return _r_(!1);
                return _r_(!0)
            }))
        }(t === I)
          , n = Math.trunc(i.reduce(function(e, t) {
            return _i_("3da:6f51ff29"),
            _r_(e + t.transferSize)
        }, 0) / 1e3);
        0 < n && e.publish($, [[t, n]]),
        _r_()
    }
    var M, N, $ = {
        setup: function(e) {
            if (_i_("3da:102912c5"),
            _i_("3da:ef5161fc"),
            _r_(Boolean("function" == typeof (null === (t = window.performance) || void 0 === t ? void 0 : t.getEntriesByType))))
                return window.addEventListener("load", function() {
                    return _i_("3da:f15625fb"),
                    _r_(O(e, "js_onload_resource_transfer_size"))
                }),
                window.addEventListener("beforeunload", function() {
                    return _i_("3da:a3c6122a"),
                    _r_(O(e, I))
                }),
                _r_(!0);
            var t;
            return _r_(!1)
        }
    }, D = function(e) {
        _i_("3da:5b5d25e4");
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1;
        return _r_({
            name: e,
            value: t,
            delta: 0,
            entries: [],
            id: (_i_("3da:3cd06a30"),
            _r_("".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12))),
            isFinal: !1
        })
    }, L = function(e, t) {
        _i_("3da:ad4e9b86");
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                var i = new PerformanceObserver(function(e) {
                    return _i_("3da:a0c1d465"),
                    _r_(e.getEntries().map(t))
                }
                );
                return _r_((i.observe({
                    type: e,
                    buffered: !0
                }),
                i))
            }
        } catch (e) {}
        _r_()
    }, j = !1, P = !1, R = function(e) {
        _i_("3da:5810c078"),
        j = !e.persisted,
        _r_()
    }, H = function(i) {
        _i_("3da:45f2a4b5");
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        P || (_i_("3da:12e1c473"),
        addEventListener("pagehide", R),
        addEventListener("beforeunload", function() {}),
        _r_(),
        P = !0),
        addEventListener("visibilitychange", function(e) {
            _i_("3da:edd18949");
            var t = e.timeStamp;
            "hidden" === document.visibilityState && i({
                timeStamp: t,
                isUnloading: j
            }),
            _r_()
        }, {
            capture: !0,
            once: e
        }),
        _r_()
    }, q = function(e, t, i, n) {
        var a;
        return _i_("3da:1f572339"),
        _r_(function() {
            _i_("3da:2314ddac"),
            i && t.isFinal && i.disconnect(),
            0 <= t.value && (n || t.isFinal || "hidden" === document.visibilityState) && (t.delta = t.value - (a || 0),
            (t.delta || t.isFinal || void 0 === a) && (e(t),
            a = t.value)),
            _r_()
        })
    }, F = function() {
        return _i_("3da:1b85cda7"),
        _r_((void 0 === M && (M = "hidden" === document.visibilityState ? 0 : 1 / 0,
        H(function(e) {
            _i_("3da:cc185411");
            var t = e.timeStamp;
            return _r_(M = t)
        }, !0)),
        {
            get timeStamp() {
                return _i_("3da:ca0c4d82"),
                _r_(M)
            }
        }))
    }, V = function(e) {
        _i_("3da:c5693f16");
        var i, t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = D("LCP"), a = F(), r = function(e) {
            _i_("3da:874a186a");
            var t = e.startTime;
            t < a.timeStamp ? (n.value = t,
            n.entries.push(e)) : n.isFinal = !0,
            i(),
            _r_()
        }, o = L("largest-contentful-paint", r);
        if (o) {
            i = q(e, n, o, t);
            var _ = function() {
                _i_("3da:851ff279"),
                n.isFinal || (o.takeRecords().map(r),
                n.isFinal = !0,
                i()),
                _r_()
            };
            (_i_("3da:346583af"),
            _r_((N || (N = new Promise(function(t) {
                return _i_("3da:b840aa66"),
                _r_(["scroll", "keydown", "pointerdown"].map(function(e) {
                    _i_("3da:14f5ecd8"),
                    addEventListener(e, t, {
                        once: !0,
                        passive: !0,
                        capture: !0
                    }),
                    _r_()
                }))
            }
            )),
            N))).then(_),
            H(_, !0)
        }
        _r_()
    };
    function U(t) {
        return _i_("3da:b64b8a92"),
        _r_(function(e) {
            if (_i_("3da:642c9777"),
            !e.value)
                return _r_();
            t.publish(z, [[e.name, e.value]]),
            _r_()
        })
    }
    var W, z = {
        setup: function(e) {
            return _i_("3da:bee51fab"),
            function(e) {
                _i_("3da:392ef2c7");
                var i, t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = D("CLS", 0), a = function(e) {
                    _i_("3da:eb4a0267"),
                    e.hadRecentInput || (n.value += e.value,
                    n.entries.push(e),
                    i()),
                    _r_()
                }, r = L("layout-shift", a);
                r && (i = q(e, n, r, t),
                H(function(e) {
                    _i_("3da:1bb0b440");
                    var t = e.isUnloading;
                    r.takeRecords().map(a),
                    t && (n.isFinal = !0),
                    i(),
                    _r_()
                })),
                _r_()
            }(t(U(e)), !0),
            function(e) {
                _i_("3da:24b35462");
                var i = D("FID")
                  , n = F()
                  , t = function(e) {
                    _i_("3da:d2b97cb0"),
                    e.startTime < n.timeStamp && (i.value = e.processingStart - e.startTime,
                    i.entries.push(e),
                    i.isFinal = !0,
                    r()),
                    _r_()
                }
                  , a = L("first-input", t)
                  , r = q(e, i, a);
                a ? H(function() {
                    _i_("3da:7cfa342a"),
                    a.takeRecords().map(t),
                    a.disconnect(),
                    _r_()
                }, !0) : window.perfMetrics && window.perfMetrics.onFirstInputDelay && window.perfMetrics.onFirstInputDelay(function(e, t) {
                    _i_("3da:1cb5ff27"),
                    t.timeStamp < n.timeStamp && (i.value = e,
                    i.isFinal = !0,
                    i.entries = [{
                        entryType: "first-input",
                        name: t.type,
                        target: t.target,
                        cancelable: t.cancelable,
                        startTime: t.timeStamp,
                        processingStart: t.timeStamp + e
                    }],
                    r()),
                    _r_()
                }),
                _r_()
            }(U(e)),
            V(U(e)),
            _r_(!0)
        }
    };
    var G, K = {
        setup: function(e) {
            return _i_("3da:b5c2a219"),
            W = e.getEnv(),
            _r_((_i_("3da:f89d8c33"),
            _r_("function" == typeof (null === (i = null === (t = W.et) || void 0 === t ? void 0 : t.tracker) || void 0 === i ? void 0 : i.goalWithValue))));
            var t, i
        },
        publish: function(e) {
            _i_("3da:8b7dbb28"),
            e.forEach(function(e) {
                return _i_("3da:26d2e3f8"),
                _r_(W.et.tracker.goalWithValue(e[0], e[1]))
            }),
            _r_()
        }
    };
    var Y, J = {
        setup: function(e) {
            return _i_("3da:1f02ee1f"),
            G = e.getEnv(),
            _r_((_i_("3da:c13aa56f"),
            _r_(Boolean(window.navigator && window.navigator.sendBeacon))))
        },
        publish: function(e) {
            _i_("3da:389b8b88"),
            e.forEach(function(e) {
                _i_("3da:755684de");
                try {
                    var t = function() {
                        if (_i_("3da:0a62c75e"),
                        G.et.jsTrackingUrl) {
                            var e = new a(G.et.jsTrackingUrl,window.location.origin);
                            return e.searchParams.set("m", G.et.m),
                            _r_(e)
                        }
                        var t = (window.location.href || "").match(/([a-zA-Z_\-]+?)\.html/)
                          , i = t && 0 < t.length && t[1] || ""
                          , n = new a("js_tracking",window.location.origin);
                        return n.searchParams.set("ver", "2"),
                        n.searchParams.set("ref_action", i),
                        n.searchParams.set("pid", G.pageviewId),
                        n.searchParams.set("stype", G.siteType),
                        n.searchParams.set("lang", G.locale),
                        n.searchParams.set("m", G.et.m),
                        _r_(n)
                    }();
                    t.searchParams.set("etgwv", e[0] + "|" + e[1]),
                    t.searchParams.set("_", Date.now().toString()),
                    window.navigator.sendBeacon(t.toString())
                } catch (e) {}
                _r_()
            }),
            _r_()
        }
    }, X = "web-vitals.booking.com", Z = "web-vitals.dqs.booking.com", Q = {
        CLS: 1e3
    }, ee = {
        CLS: "js_web_vitals_cls_per_mille",
        FID: "js_web_vitals_fid_ms",
        LCP: "js_web_vitals_lcp_ms"
    }, te = "BPHAUbWNZXGOXUSHXT", ie = {
        CLS: 1,
        FID: 2,
        LCP: 3
    }, ne = {
        CLS: .1 * Q.CLS,
        FID: 100,
        LCP: 2500
    };
    function ae(e) {
        _i_("3da:233854a9");
        var t = Q[e[0]] || 1;
        return _r_(Number(e[1]) * t)
    }
    var re = {
        setup: function(e) {
            return _i_("3da:57b03ed8"),
            Y = e.getEnv(),
            _r_(!0)
        },
        publish: function(t, i) {
            var n;
            _i_("3da:37e2ba51"),
            void 0 === i && (i = 1e3);
            var a = [];
            return _r_(function(e) {
                _i_("3da:158aa3a5"),
                clearTimeout(n),
                a.push.apply(a, e),
                n = setTimeout(function() {
                    _i_("3da:ce7e55ec"),
                    t(a),
                    a = [],
                    _r_()
                }, i),
                _r_()
            })
        }(function(e) {
            var t, i;
            _i_("3da:693e986a"),
            function(e) {
                _i_("3da:fcf395bb");
                var t = {
                    pid: Y.pageviewId,
                    refAction: Y.actionName
                };
                e.forEach(function(e) {
                    _i_("3da:19e40ed0"),
                    t[e[0].toLowerCase()] = ae(e),
                    _r_()
                });
                var i = new XMLHttpRequest;
                i.open("POST", "https://" + (Y.isProduction ? X : Z) + "/web-vitals/send-vitals"),
                i.setRequestHeader("Content-Type", "application/json"),
                i.setRequestHeader("X-Booking-API-Version", "1"),
                i.send(JSON.stringify(t)),
                _r_()
            }(e),
            _i_("3da:2112c01c"),
            _r_((null === (i = Y.et) || void 0 === i ? void 0 : i.tracker) && "function" == typeof Y.et.tracker.goalWithValue) && (t = e,
            _i_("3da:25d44c53"),
            t.forEach(function(e) {
                _i_("3da:2e963856");
                var t = e[0]
                  , i = ae(e);
                Y.et.tracker.goalWithValue(ee[t], parseInt(i.toString(), 10)),
                "function" == typeof Y.et.tracker.customGoal && i > ne[t] && Y.et.tracker.customGoal(te, ie[t]),
                _r_()
            }),
            _r_()),
            _r_()
        })
    };
    B.require(["et", "server-data"], function(e, t) {
        _i_("3da:7efaf805");
        var i = window
          , n = t.fe_new_perf_tracking
          , a = {
            index: 1,
            searchresults: 2,
            searchresults_irene: 3,
            hotel: 4,
            city: 5,
            book: 6,
            myreservations: 7
        };
        if (a[t.b_action] && e.stage("BPHAUbWNZXGOXUSHXT", a[t.b_action]),
        e.stage("NVNZYeJBBYZUeQKBBTZMcET", 1),
        e.stage("NVNZYeJBBYZUeQKBBTZMcET", "www" === t.b_site_type ? 2 : 3),
        e.stage("NVNZYeJBBYZUeQKBBTZVGO", 1),
        e.stage("NVNZYeJBBYZUeQKBBTZVGO", "www" === t.b_site_type ? 2 : 3),
        !n || n.setup)
            return e.customGoal("NVNZYeJBBYZUeQKBBTZMcET", n && n.setup ? 2 : 1),
            e.customGoal("NVNZYeJBBYZUeQKBBTZVGO", n && n.setup ? 2 : 1),
            _r_();
        var r = Number(n.version)
          , o = Number(n.web_vitals)
          , _ = []
          , s = {
            isProduction: !t.b_dev_server,
            actionName: t.b_action,
            pageviewId: t.pageview_id,
            siteType: t.b_site_type_id,
            locale: t.b_lang,
            siteChannel: 1 === Number(t.b_site_type_id) ? "d" : "m",
            firstLoad: Boolean(Number(n.first_visit)),
            et: {
                tracker: e,
                m: B.jset.m,
                jsTrackingUrl: t.js_tracking_url
            },
            navigationTimes: {
                extraParams: Object.assign({
                    bo: t.b_partner_channel_id,
                    aid: t.b_aid,
                    css_load: i.mainCssWasLoaded || 0
                }, n.params),
                extraRequestHeaders: {
                    "X-Booking-CSRF": t.b_csrf_token
                }
            }
        };
        if (1 === r ? i.addEventListener("load", function() {
            _i_("3da:0560e1c3");
            try {
                t.fe_force_perf_tracking = !0,
                i.sendNavigationTiming()
            } catch (e) {
                B.reportError && B.reportError(e, "performance-metrics")
            }
            _r_()
        }) : 1 < r && (_.push(v),
        _.push([A, K]),
        t.js_tracking_url && _.push([$, J])),
        o && _.push([z, re]),
        _.length)
            try {
                p.setup(s, _),
                n.setup = !0
            } catch (e) {
                B.reportError && B.reportError(e, "performance-metrics")
            }
        _r_()
    }),
    _r_()
}),
B.define("components/time-tracker/time-interval", function(e, t, i) {
    _i_("3da:f5079f17");
    var n = function(e) {
        _i_("3da:50618634"),
        e = e || {},
        this._startTime = e.startTime || null,
        this._firstStartTime = this._startTime,
        this._value = e.value || null,
        this._tempValue = 0,
        this._meta = e.meta || {},
        _r_()
    };
    n.prototype.start = function() {
        _i_("3da:91e67b61"),
        this._startTime = +new Date,
        this._firstStartTime || (this._firstStartTime = this._startTime),
        _r_()
    }
    ,
    n.prototype.pause = function() {
        _i_("3da:c8ffc7d4"),
        this._tempValue = this.value(),
        this._startTime = 0,
        _r_()
    }
    ,
    n.prototype.stop = function() {
        _i_("3da:6e6c1128"),
        this._value || (this._value = this._tempValue + this._calculateValue()),
        _r_()
    }
    ,
    n.prototype.value = function() {
        if (_i_("3da:ef8813fd"),
        this._value)
            return _r_(this._value);
        return _r_(this._tempValue + this._calculateValue())
    }
    ,
    n.prototype.setMeta = function(e) {
        _i_("3da:58b75a96"),
        this._meta = e,
        _r_()
    }
    ,
    n.prototype.serialize = function() {
        _i_("3da:0c817ed2");
        var t = "t=" + this.value() + "&h=" + +new Date;
        return this._meta && Object.keys(this._meta).forEach(function(e) {
            _i_("3da:9cf01501"),
            t += "&" + e + "=" + encodeURIComponent(this._meta[e]),
            _r_()
        }
        .bind(this)),
        _r_(t)
    }
    ,
    n.prototype.forFragment = function() {
        _i_("3da:97828402");
        var e = JSON.parse(JSON.stringify(this._meta));
        return e.time_sec = ~~(this.value() / 1e3),
        _r_(e)
    }
    ,
    n.prototype.serializeMeta = function() {
        return _i_("3da:c559d84b"),
        _r_(JSON.stringify(this._meta))
    }
    ,
    n.prototype.forLocalStorage = function() {
        return _i_("3da:d3e628ab"),
        _r_({
            s: this._firstStartTime,
            v: this.value(),
            m: this._meta
        })
    }
    ,
    n.prototype._calculateValue = function() {
        return _i_("3da:cb8758ab"),
        _r_(this._startTime ? +new Date - this._startTime : 0)
    }
    ,
    n.fromObject = function(e) {
        return _i_("3da:8aee59a7"),
        _r_(new n({
            startTime: e.s,
            value: e.v,
            meta: e.m
        }))
    }
    ,
    i.exports = n,
    _r_()
}),
B.define("components/time-tracker/local-storage-reader", function(e, t, i) {
    _i_("3da:5043fe12");
    var n = e("components/time-tracker/time-interval")
      , a = e("fragment")
      , r = function(e) {
        _i_("3da:ef950ce7"),
        this._timers = [],
        this._key = e || r.localStorageKey,
        this.storage,
        this.quotaExceeded = !1;
        try {
            e = r.localStorageKey + "_test";
            window.localStorage.setItem(e, 1),
            window.localStorage.removeItem(e),
            this.storage = window.localStorage
        } catch (e) {}
        _r_()
    };
    r.prototype.start = function(t) {
        if (_i_("3da:d0fa85e2"),
        !this.storage)
            return _r_();
        function i() {
            _i_("3da:ed3bb7f9");
            var e = this.get();
            e.length && (this.store(),
            e.forEach(function(e) {
                _i_("3da:c7e07372"),
                t ? t(e) : r.flushToServer(e),
                _r_()
            })),
            _r_()
        }
        window.addEventListener("storage", this.storageListener = function(e) {
            _i_("3da:ce859784"),
            e.key == r.localStorageKey && setTimeout(function() {
                _i_("3da:9f19df2c"),
                i.call(this),
                _r_()
            }
            .bind(this), ~~(50 * Math.random())),
            _r_()
        }
        .bind(this)),
        i.call(this),
        _r_()
    }
    ,
    r.prototype.stop = function() {
        _i_("3da:cac9a1df"),
        this.storageListener && window.removeEventListener("storage", this.storageListener),
        _r_()
    }
    ,
    r.prototype.get = function(e) {
        _i_("3da:9a0748d1");
        var t = []
          , i = [];
        if (!this.storage)
            return _r_(i);
        try {
            t = JSON.parse(e || this.storage.getItem(this._key))
        } catch (e) {}
        return t && t.length && t.forEach(function(e) {
            _i_("3da:84f1d1a5"),
            i.push(n.fromObject({
                s: e.s,
                v: e.v,
                m: e.m
            })),
            _r_()
        }),
        _r_(i)
    }
    ,
    r.prototype.store = function(e) {
        _i_("3da:812750a3");
        var t = [];
        if (!this.storage || this.quotaExceeded)
            return _r_(t);
        e && e.length && e.forEach(function(e) {
            _i_("3da:641955d3"),
            e && t.push(e.forLocalStorage()),
            _r_()
        });
        try {
            this.storage.setItem(this._key, JSON.stringify(t))
        } catch (e) {
            this.quotaExceeded = !0
        }
        return _r_(t)
    }
    ,
    r.flushToServer = function(e) {
        _i_("3da:5a16e37b"),
        a.call("personalisation_infra.track_time_spent_hotel_page", e.forFragment()).then(function(e) {}, function(e) {}),
        _r_()
    }
    ,
    r.localStorageKey = "timetracker_timers",
    i.exports = r,
    _r_()
}),
B.when({
    condition: B.env.b_time_spent_track
}).run(function(c) {
    _i_("3da:0e2cc362");
    var l = c("jquery");
    function e() {
        _i_("3da:158be560");
        var t = new (c("components/time-tracker/local-storage-reader"))
          , e = !B.env.b_time_spent_track_uuid
          , i = !!B.env.b_time_spent_track_pageview_id
          , n = null;
        if ("mdot" == B.env.b_site_type && (n = function(e) {
            _i_("3da:d6e729b6");
            var t = e.forFragment();
            t.metric_value = t.time_sec,
            t.metric_name = "time_sec",
            t.behaviour_name = "time_spent_hp",
            t.batch_data = [],
            l.ajax({
                url: "/personalisationinfra/track_behaviour_property_with_metric",
                method: "POST",
                data: t
            }),
            _r_()
        }
        ),
        e)
            return t.start(n),
            window.addEventListener("beforeunload", function() {
                _i_("3da:35e7b2e9"),
                t.stop(),
                _r_()
            }),
            _r_();
        var a = c("components/time-tracker/time-interval")
          , r = _()
          , o = !1;
        function _() {
            _i_("3da:3ef97f7e");
            var e = new a
              , t = {
                hotel_id: B.env.b_hotel_id,
                behaviour_started_at: B.env.b_time_spent_track_started_at,
                behaviour_uuid: B.env.b_time_spent_track_uuid
            };
            return B.env.b_time_spent_track_pageview_id && (t.pageview_id = B.env.b_time_spent_track_pageview_id),
            e.setMeta(t),
            _r_(e)
        }
        function s(e) {
            _i_("3da:593206dc"),
            999 < e.value() && t.store([e]),
            _r_()
        }
        function d() {
            if (_i_("3da:3468d6bd"),
            o)
                return _r_();
            document.hidden ? (r.pause(),
            s(r)) : (i && (r = _()),
            r.start()),
            _r_()
        }
        t.start(n),
        document.addEventListener("visibilitychange", d),
        d(),
        window.addEventListener("beforeunload", function() {
            _i_("3da:752e7a24"),
            t.stop(),
            r.stop(),
            s(r),
            o = !0,
            _r_()
        }),
        _r_()
    }
    "mdot" == B.env.b_site_type ? l(function() {
        _i_("3da:522a7bd7"),
        setTimeout(function() {
            _i_("3da:962a9829"),
            e(),
            _r_()
        }, 500),
        _r_()
    }) : e(),
    _r_()
}),
function() {
    "use strict";
    function s(e) {
        return _i_("3da:fb46e7a1"),
        _r_((s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return _i_("3da:2f16918f"),
            _r_(typeof e)
        }
        : function(e) {
            return _i_("3da:07a6812a"),
            _r_(e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e)
        }
        )(e))
    }
    function d(e, t) {
        if (_i_("3da:f0325f12"),
        !(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        _r_()
    }
    function n(e, t) {
        _i_("3da:152f808e");
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
        _r_()
    }
    function a(e, t, i) {
        return _i_("3da:5ddc03a3"),
        _r_((t && n(e.prototype, t),
        i && n(e, i),
        e))
    }
    function u(e, t, i) {
        return _i_("3da:95e5a106"),
        _r_((t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i,
        e))
    }
    function h() {
        return _i_("3da:46493c44"),
        _r_((h = Object.assign || function(e) {
            _i_("3da:e4ded0ef");
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return _r_(e)
        }
        ).apply(this, arguments))
    }
    function f(t) {
        _i_("3da:2a91eff2");
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {}
              , n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                return _i_("3da:d9d77b7c"),
                _r_(Object.getOwnPropertyDescriptor(i, e).enumerable)
            }))),
            n.forEach(function(e) {
                _i_("3da:4879846a"),
                u(t, e, i[e]),
                _r_()
            })
        }
        return _r_(t)
    }
    function i(e, t) {
        if (_i_("3da:b5840aeb"),
        "function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && r(e, t),
        _r_()
    }
    function c(e) {
        return _i_("3da:ce107ddb"),
        _r_((c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return _i_("3da:a04eed3c"),
            _r_(e.__proto__ || Object.getPrototypeOf(e))
        }
        )(e))
    }
    function r(e, t) {
        return _i_("3da:6bc035fd"),
        _r_((r = Object.setPrototypeOf || function(e, t) {
            return _i_("3da:13814c6a"),
            _r_((e.__proto__ = t,
            e))
        }
        )(e, t))
    }
    function l(e) {
        if (_i_("3da:ee285d63"),
        void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _r_(e)
    }
    function p(e, t) {
        return _i_("3da:9bf6c52a"),
        _r_(!t || "object" != typeof t && "function" != typeof t ? l(e) : t)
    }
    function o(e, t, i) {
        return _i_("3da:45528186"),
        _r_((o = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
            _i_("3da:4f88e8c0");
            var n = function(e, t) {
                for (_i_("3da:7505f3ca"); !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
                    ;
                return _r_(e)
            }(e, t);
            if (n) {
                var a = Object.getOwnPropertyDescriptor(n, t);
                return _r_(a.get ? a.get.call(i) : a.value)
            }
            _r_()
        }
        )(e, t, i || e))
    }
    function _(e) {
        return _i_("3da:e7562670"),
        _r_(function(e) {
            if (_i_("3da:3849de3e"),
            Array.isArray(e)) {
                for (var t = 0, i = new Array(e.length); t < e.length; t++)
                    i[t] = e[t];
                return _r_(i)
            }
            _r_()
        }(e) || function(e) {
            if (_i_("3da:02227c23"),
            Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                return _r_(Array.from(e));
            _r_()
        }(e) || function() {
            throw _i_("3da:5de1cbba"),
            new TypeError("Invalid attempt to spread non-iterable instance")
        }())
    }
    _i_("3da:954eb929");
    var m, b = 9, g = {}, v = 0;
    function y(e, t) {
        return _i_("3da:03b93399"),
        _r_((t || document).querySelector(e))
    }
    function w(e, t) {
        _i_("3da:145c2337");
        var i = (t || document).querySelectorAll(e);
        if ("function" == typeof i.forEach)
            return _r_(i);
        for (var n = new Array(i.length), a = 0, r = i.length; a < r; a++)
            n[a] = i[a];
        return _r_(n)
    }
    function k(n, e, a) {
        _i_("3da:0781fe49");
        var t = "_handler_" + (n._eid ? n._eid : n._eid = v++) + "_" + e
          , i = g[t] || (g[t] = []);
        if ("function" == typeof n.addEventListener)
            n.addEventListener(e, a, !1),
            i.push(a);
        else if (n.attachEvent) {
            var r = function(e) {
                _i_("3da:81013ab3");
                var t = [].slice.call(arguments)[0] || window.event
                  , i = !0;
                return _r_((t.target = e.target || e.srcElement,
                t.currentTarget = n,
                t.preventDefault || (t.preventDefault = function() {
                    _i_("3da:3569f014"),
                    i = !1,
                    _r_()
                }
                ),
                a.call(this, t),
                i))
            };
            return _r_((n.attachEvent("on" + e, r),
            i.push(r),
            r))
        }
        return _r_(a)
    }
    function E(e, t) {
        var i;
        _i_("3da:ed71ff68"),
        "function" == typeof Event ? i = new Event(t,{
            bubbles: !0
        }) : (i = document.createEvent("Event")).initEvent(t, !0, !0),
        e.dispatchEvent(i),
        _r_()
    }
    function T(i, n, a) {
        var r;
        return _i_("3da:94e60880"),
        _r_(function() {
            _i_("3da:d3bcae92");
            var e = this
              , t = arguments;
            !0 === a && void 0 === r && i.apply(e, t),
            clearTimeout(r),
            r = setTimeout(function() {
                _i_("3da:92424284"),
                i.apply(e, t),
                _r_()
            }, n),
            _r_()
        })
    }
    function C(t, i, e) {
        _i_("3da:638f95f8");
        var n = "_handler_" + (t._eid ? t._eid : t._eid = v++) + "_" + i
          , a = g[n] || (g[n] = []);
        if ("function" == typeof t.removeEventListener) {
            if ("function" == typeof e)
                return _r_(t.removeEventListener(i, e));
            a.forEach(function(e) {
                _i_("3da:2d73a584"),
                t.removeEventListener(i, e),
                _r_()
            })
        } else if (t.detachEvent) {
            if ("function" == typeof e)
                return _r_(t.detachEvent(i, e));
            a.forEach(function(e) {
                _i_("3da:488eac64"),
                t.detachEvent(i, e),
                _r_()
            })
        }
        _r_()
    }
    function x(e, t) {
        if (_i_("3da:24a6ab9f"),
        "function" == typeof e.closest)
            return _r_(e.closest(t));
        for (var i = w(t), n = 0; n < i.length; n++)
            for (var a = e; a; ) {
                if (i[n] === a)
                    return _r_(a);
                r = a,
                _i_("3da:5b095ed9"),
                a = _r_(r && r.parentElement || r.parentNode && r.parentNode.nodeType !== b ? r.parentNode : void 0)
            }
        var r;
        _r_()
    }
    function B(e, t) {
        _i_("3da:00b414d3"),
        e.classList ? e.classList.add(t) : e.className = (e.className || "").split(" ").concat(t).join(" "),
        _r_()
    }
    function S(e, t) {
        _i_("3da:99778c99"),
        e.classList ? e.classList.remove(t) : A(e, t) && (e.className = e.className.replace(new RegExp("\\b(" + t + ")\\b","gi"), "")),
        _r_()
    }
    function A(e, t) {
        return _i_("3da:83a5f7ae"),
        _r_(new RegExp("\\b(" + t + ")\\b").test(e.className))
    }
    function I(e, t, i) {
        _i_("3da:1fcf30c9"),
        void 0 === i && (i = !A(e, t)),
        !0 === i ? B(e, t) : S(e, t),
        _r_()
    }
    function O(e, t) {
        return _i_("3da:f25a03f1"),
        _r_((e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t))
    }
    function M(e, t) {
        _i_("3da:fda5c309");
        for (var i = e; i.previousElementSibling; )
            if (O(i = i.previousElementSibling, t))
                return _r_(i);
        _r_()
    }
    function N(e, t, i) {
        return _i_("3da:39735720"),
        _r_(i.indexOf(e) === t)
    }
    function $(e) {
        _i_("3da:faaf338d"),
        e.parentNode.removeChild(e),
        _r_()
    }
    function D(e) {
        _i_("3da:8cb2005d");
        var t = function(e) {
            _i_("3da:4e02eea1");
            var t = e.getBoundingClientRect();
            return _r_({
                top: t.top,
                right: t.right,
                bottom: t.bottom,
                left: t.left,
                width: t.width,
                height: t.height,
                x: t.x,
                y: t.y
            })
        }(e);
        return _r_((t.width = t.width || t.right - t.left,
        t.height = t.height || t.bottom - t.top,
        t))
    }
    function L(e) {
        _i_("3da:2e331a6b");
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0
          , i = document.documentElement.offsetWidth - t
          , n = document.documentElement.scrollTop + t
          , a = n + document.documentElement.clientHeight - t;
        return _r_(e.left >= t && e.right <= i && e.top >= n && e.bottom <= a)
    }
    function j(e) {
        _i_("3da:e1842010");
        var t = document.createElement("div");
        return _r_((t.innerHTML = e,
        t.children[0]))
    }
    function P(e) {
        _i_("3da:53ee5d5f"),
        window.setImmediate ? window.setImmediate(e) : window.setTimeout(e, 4),
        _r_()
    }
    window.BUI || (window.BUI = {});
    var R = 1
      , H = new (function() {
        function e() {
            _i_("3da:669e2625"),
            d(this, e),
            this.components = {},
            this.instances = {},
            _r_()
        }
        return _i_("3da:b0861b44"),
        _r_((a(e, [{
            key: "register",
            value: function(e, t, i) {
                if (_i_("3da:b565b10d"),
                e in Object.keys(this.components))
                    throw new Error("BUI: ".concat(e, " is already registered"));
                this.components[e] = {
                    Component: t,
                    props: i
                },
                _r_()
            }
        }, {
            key: "get",
            value: function(e) {
                _i_("3da:85d95b95");
                var t = this.components[e];
                if (t)
                    return _r_(t);
                _r_()
            }
        }, {
            key: "saveInstance",
            value: function(e, t, i) {
                return _i_("3da:68f18488"),
                _r_((R += 1,
                this.instances[R] = {
                    instance: t,
                    name: i
                },
                e._buiIds || (e._buiIds = []),
                e._buiIds.push(R),
                R))
            }
        }, {
            key: "getInstances",
            value: function(e) {
                _i_("3da:0a10fc26");
                var t = this;
                return _r_(e._buiIds ? e._buiIds.map(function(e) {
                    return _i_("3da:7f618947"),
                    _r_(t.instances[e])
                }) : [])
            }
        }]),
        e))
    }());
    window.BUI || (window.BUI = {}),
    window.BUI._version = "9.9.2";
    var t = function() {
        function i(e, t) {
            _i_("3da:a8b81f72"),
            d(this, i),
            this.root = e,
            this.props = t || {},
            this.handlers = null,
            this.selectors = {},
            this.modifiers = {},
            this._removeHandlersMap = {},
            _r_()
        }
        return _i_("3da:29f7c257"),
        _r_((a(i, [{
            key: "setState",
            value: function(e) {
                _i_("3da:b83d766d");
                var a = this;
                if (!this.state)
                    throw new Error("\n        BUI:\n        You are trying to update a state that wasn't initialised yet.\n        Create it in the init method of your component first e.g. this.state = { foo: 'bar' };\n        ");
                var r = this.state
                  , o = h({}, this.state, e)
                  , _ = this.handlers;
                this.state = o,
                _ && Object.keys(_).forEach(function(e) {
                    _i_("3da:d9c6e414");
                    var t = a._parseHandlers(e)
                      , i = t.elName
                      , n = t.subscriptionName;
                    "state" === i && r[n] !== o[n] && _[e].call(a, r),
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_parseHandlers",
            value: function(e) {
                _i_("3da:93f80a5a");
                var t = e.split("@")
                  , i = t[0]
                  , n = t[1];
                if (!i || !n)
                    throw new Error("BUI: Wrong component handler syntax");
                return _r_({
                    elName: i,
                    subscriptionName: n
                })
            }
        }, {
            key: "_toggleHandlers",
            value: function(s) {
                _i_("3da:c148a5a4");
                var d = this
                  , c = this.handlers
                  , l = this.selectors;
                c && Object.keys(c).forEach(function(e) {
                    _i_("3da:e03b0400");
                    var t = d._parseHandlers(e)
                      , i = t.elName
                      , n = t.subscriptionName
                      , a = c[e].bind(d);
                    if ("state" !== i) {
                        var r, o = l[i];
                        if ("window" === i && (r = window),
                        "root" === i && (r = d.root),
                        "root" === i || "scroll" !== n && "focus" !== n && "blur" !== n || (r = y(o, d.root)),
                        r)
                            s ? (d._removeHandlersMap[e] = a,
                            r.addEventListener(n, a)) : r.removeEventListener(n, d._removeHandlersMap[e]);
                        else if (d.root) {
                            if (!o)
                                throw new Error("BUI: Selector for element not found");
                            if (s)
                                d._removeHandlersMap[e] = function(e, t, i, n) {
                                    _i_("3da:df03a08f");
                                    var a = function(e) {
                                        _i_("3da:74b9b4e2");
                                        var t = x(e.target, i);
                                        (e.delegateTarget = t) && n.call(null, e),
                                        _r_()
                                    };
                                    return _r_((k(e, t, a),
                                    function() {
                                        _i_("3da:1b34ba9e"),
                                        C(e, t, a),
                                        _r_()
                                    }
                                    ))
                                }(d.root, n, o, a);
                            else {
                                var _ = d._removeHandlersMap[e];
                                _ && _()
                            }
                        }
                    }
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "onMount",
            value: function() {}
        }, {
            key: "onUnmount",
            value: function() {}
        }, {
            key: "mount",
            value: function() {
                _i_("3da:56581b8e"),
                this._toggleHandlers(!0),
                this.onMount(),
                _r_()
            }
        }, {
            key: "update",
            value: function() {
                _i_("3da:6f0dd327"),
                this._toggleHandlers(!1),
                this._toggleHandlers(!0),
                this.onMount(),
                _r_()
            }
        }, {
            key: "unmount",
            value: function() {
                _i_("3da:04d1a0a8"),
                this._toggleHandlers(!1),
                this.onUnmount(),
                _r_()
            }
        }]),
        i))
    }();
    function q(e, t, i) {
        _i_("3da:fb44d955");
        var n = H.get(e)
          , a = n.Component
          , r = n.props;
        return _r_(new a(t || document.createElement("div"),h({}, r, i)))
    }
    function F(e) {
        _i_("3da:3de9350c");
        var t = e || document.body;
        w("[".concat("data-bui-component", "]"), t).forEach(function(n) {
            _i_("3da:0c6532ce");
            var e = n.getAttribute("data-bui-component");
            e && e.split(",").forEach(function(t) {
                _i_("3da:a9a061e4");
                var i = !1;
                if ((H.getInstances(n) || []).forEach(function(e) {
                    _i_("3da:7b250826"),
                    e.name === t && (i = !0),
                    _r_()
                }),
                !i) {
                    var e = q(t, n);
                    H.saveInstance(n, e, t),
                    e.mount()
                }
                _r_()
            }),
            _r_()
        }),
        _r_()
    }
    window.BUI.createInstance = q,
    window.BUI.getInstance = function(e) {
        _i_("3da:4973f8cf");
        var t = H.getInstances(e);
        if (t.length)
            return _r_(1 === t.length ? t[0].instance : t.map(function(e) {
                return _i_("3da:28ea74f9"),
                _r_(e.instance)
            }));
        _r_()
    }
    ,
    window.BUI.initComponents = F,
    window.BUI.extendComponent = function(e, t) {
        _i_("3da:65aa7123");
        var i = e.split(".")[0]
          , n = H.get(i).Component;
        H.register(e, n, t),
        _r_()
    }
    ,
    P(function() {
        return _i_("3da:0e492bbc"),
        _r_(F())
    });
    var e = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:01b2f88d"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).selectors = {
                button: "[data-bui-ref=accordion-button]"
            },
            i.modifiers = {
                activeRow: "bui-is-active"
            },
            i.handlers = {
                "button@click": i._handleButtonClick,
                "button@keydown": i._handleKeyDown
            },
            i))
        }
        return _i_("3da:88055aee"),
        _r_((i(n, t),
        a(n, [{
            key: "toggle",
            value: function(e, t) {
                _i_("3da:4a533d93"),
                "true" !== e.getAttribute("aria-expanded") ? this.open(e, t) : this.close(e, t),
                _r_()
            }
        }, {
            key: "open",
            value: function(e, t) {
                _i_("3da:c7bdde3d");
                var i = this.props
                  , n = i.onAfterItemOpen
                  , a = i.onAfterItemToggle
                  , r = e.parentNode;
                I(r, this.modifiers.activeRow, !0),
                e.setAttribute("aria-expanded", !0),
                n && n.call(this, {
                    event: t,
                    el: r
                }),
                a && a.call(this, {
                    event: t,
                    el: r
                }),
                _r_()
            }
        }, {
            key: "close",
            value: function(e, t) {
                _i_("3da:b5ac13d1");
                var i = this.props
                  , n = i.onAfterItemClose
                  , a = i.onAfterItemToggle
                  , r = e.parentNode;
                I(r, this.modifiers.activeRow, !1),
                e.setAttribute("aria-expanded", !1),
                n && n.call(this, {
                    event: t,
                    el: r
                }),
                a && a.call(this, {
                    event: t,
                    el: r
                }),
                _r_()
            }
        }, {
            key: "_handleButtonClick",
            value: function(e) {
                _i_("3da:1a55fefd");
                var t = e.delegateTarget;
                this.toggle(t, e),
                _r_()
            }
        }, {
            key: "_handleKeyDown",
            value: function(e) {
                _i_("3da:444c6959"),
                32 !== e.which && 13 !== e.which || (e.preventDefault(),
                this.toggle(e.delegateTarget, e)),
                _r_()
            }
        }]),
        n))
    }();
    H.register("Accordion", e);
    var V = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:d69f2d5c"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).selectors = {
                close: "[data-bui-ref=badge-close]"
            },
            i.handlers = {
                "close@click": i.close
            },
            i))
        }
        return _i_("3da:756fdb5f"),
        _r_((i(n, t),
        a(n, [{
            key: "close",
            value: function() {
                _i_("3da:52d5a6ad");
                var e = this.props.onAfterClose;
                this.root.style.display = "none",
                e && e.call(this),
                _r_()
            }
        }]),
        n))
    }();
    H.register("Badge", V);
    var U = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:d2b4ec64"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).selectors = {
                close: "[data-bui-ref=banner-close]"
            },
            i.handlers = {
                "close@click": i.close
            },
            i))
        }
        return _i_("3da:707c6c99"),
        _r_((i(n, t),
        a(n, [{
            key: "close",
            value: function(e) {
                _i_("3da:0228d6f2");
                var t = this.props.onAfterClose;
                this.root.style.display = "none",
                t && t.call(this, e),
                _r_()
            }
        }]),
        n))
    }();
    H.register("Banner", U);
    var W = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:0c3c219f"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).handlers = {
                "root@keydown": i._handleItemKeyDown
            },
            i))
        }
        return _i_("3da:6bde015e"),
        _r_((i(n, t),
        a(n, [{
            key: "_handleItemKeyDown",
            value: function(e) {
                _i_("3da:781ce83d"),
                32 === e.which && (e.preventDefault(),
                e.target.click()),
                _r_()
            }
        }]),
        n))
    }();
    H.register("Button", W);
    var z = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
      , G = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
      , K = function(e) {
        return _i_("3da:c1947195"),
        _r_(e <= 9 ? "0".concat(e) : e.toString())
    }
      , Y = function(e, t) {
        return _i_("3da:1f27a849"),
        _r_(new Date(e.getFullYear(),e.getMonth() + t,1))
    }
      , J = function(t, e) {
        _i_("3da:44c5f938");
        var i = z.slice(0, e)
          , n = z.slice(e);
        return _r_([].concat(_(n), _(i)).map(function(e) {
            return _i_("3da:c5743c24"),
            _r_(t[e])
        }))
    }
      , X = function(e) {
        _i_("3da:2d3b8d0e");
        var t = e.getFullYear()
          , i = K(e.getMonth() + 1)
          , n = K(e.getDate());
        return _r_("".concat(t, "-").concat(i, "-").concat(n))
    }
      , Z = function(e) {
        _i_("3da:ba2637a7");
        var t = e.split("-");
        return _r_(new Date(t[0],t[1] - 1,t[2]))
    }
      , Q = function(e) {
        _i_("3da:6a6dd670");
        var t = e.day
          , i = e.getDayMarkup
          , n = e.monthName;
        if (!t)
            return _r_('<td class="bui-calendar__date bui-calendar__date--empty" role="presentation"></td>');
        var a = t.date
          , r = X(a)
          , o = ["bui-calendar__date"]
          , _ = X(new Date)
          , s = i(a)
          , d = a.getDate()
          , c = "".concat(d, " ").concat(n, " ").concat(a.getFullYear());
        return _r_((r === _ && o.push("bui-calendar__date--today"),
        '\n        <td class="'.concat(o.join(" "), '" data-bui-ref="calendar-date" data-date="').concat(r, '" role="gridcell" tabindex="-1">\n          <span aria-label="').concat(c, '" role="checkbox" aria-checked="false">\n            ').concat(s, "\n          </span>\n        </td>\n    ")))
    }
      , ee = function(e) {
        _i_("3da:7f60f460");
        for (var t = e.week, i = e.minDate, n = e.maxDate, a = e.selectedDates, r = e.disabledDates, o = e.getDayMarkup, _ = e.monthName, s = '<tr class="bui-calendar__row">', d = 0; d < 7; d++)
            s += Q({
                day: t[d],
                minDate: i,
                maxDate: n,
                selectedDates: a,
                disabledDates: r,
                getDayMarkup: o,
                monthName: _
            });
        return _r_(s + "</tr>")
    }
      , te = function(e) {
        function s(e, t) {
            var i;
            _i_("3da:6e3f4cfb"),
            d(this, s),
            (i = p(this, c(s).call(this, e, t))).props = h({}, {
                singleDate: !!e.getAttribute("data-single-date"),
                vertical: !!e.getAttribute("data-vertical"),
                monthsToShow: +e.getAttribute("data-months-to-show") || 1,
                minDate: e.getAttribute("data-min-date"),
                maxDate: e.getAttribute("data-max-date"),
                startDate: e.getAttribute("data-start-date"),
                endDate: e.getAttribute("data-end-date"),
                baseDate: e.getAttribute("data-base-date"),
                firstWeekDay: e.getAttribute("data-first-week-day") || 1,
                renderOnHover: e.getAttribute("data-render-on-hover"),
                allowSameDateSelection: e.getAttribute("data-allow-same-date-selection"),
                disableDateSelection: e.getAttribute("data-disable-date-selection"),
                renderSelected: null,
                getDayMarkup: t.getDayMarkup || i._getRenderDay.bind(l(i))
            }, t);
            var n = new Date
              , a = i.props.startDate ? Z(i.props.startDate) : null
              , r = i.props.endDate ? Z(i.props.endDate) : null
              , o = !i.props.startDate || i.props.endDate || i.props.singleDate ? "start" : "end";
            i.modifiers = {
                dateDisabled: "bui-calendar__date--disabled",
                dateSelected: "bui-calendar__date--selected",
                dateInRange: "bui-calendar__date--in-range",
                controlHidden: "bui-calendar__control--hidden",
                vertical: "bui-calendar--vertical"
            },
            i.attributes = {
                date: "data-date"
            },
            i.selectors = {
                content: "[data-bui-ref=calendar-content]",
                selectedDisplay: "[data-bui-ref=calendar-selected-display]",
                prevButton: "[data-bui-ref=calendar-prev]",
                nextButton: "[data-bui-ref=calendar-next]",
                date: "[data-bui-ref=calendar-date]",
                month: "[data-bui-ref=calendar-month]"
            },
            i.handlers = {
                "prevButton@click": i._handlePrevClick,
                "nextButton@click": i._handleNextClick,
                "date@click": i._handleDateClick,
                "content@keydown": i._handleKeyboardEvents,
                "content@scroll": i._handleScroll,
                "state@baseMonthDate": i._handleMonthChange,
                "state@startDate": i._handleSelectedDateStateChange,
                "state@endDate": i._handleSelectedDateStateChange,
                "state@maxDate": i._updateVisual,
                "state@minDate": i._updateVisual
            };
            var _ = i.props.baseDate ? Z(i.props.baseDate) : new Date(n.getFullYear(),n.getMonth(),1);
            return _r_((i.props.vertical && (_ = Y(_, -2)),
            i.state = {
                today: n,
                startDate: a,
                endDate: r,
                minDate: i.props.minDate,
                maxDate: i.props.maxDate,
                chooseMode: o,
                baseMonthDate: _,
                hoveredISODate: null
            },
            i.id = (_i_("3da:251c146a"),
            _r_("bui-calendar-" + Date.now() + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10))),
            i._handleMount(),
            i))
        }
        return _i_("3da:6909e203"),
        _r_((i(s, t),
        a(s, [{
            key: "_handleMount",
            value: function() {
                _i_("3da:a82f1710");
                var e = this.root
                  , t = this.props.vertical
                  , i = this.state.baseMonthDate;
                if (this.elsDate = null,
                this.elsMonth = null,
                this.elContent = y(this.selectors.content, e),
                this.elSelectedDisplay = y(this.selectors.selectedDisplay, e),
                this.elPrev = y(this.selectors.prevButton, e),
                this.elNext = y(this.selectors.nextButton, e),
                I(this.root, this.modifiers.vertical, this.props.vertical),
                this._renderMonths(i, t && 5),
                t && this.elsMonth) {
                    var n = [].slice.call(this.elsMonth, 0, Math.max(2 - this.movedBy, 0));
                    this.elContent.scrollTop = n.reduce(function(e, t) {
                        return _i_("3da:9be7c103"),
                        _r_(e + t.clientHeight)
                    }, 0)
                }
                this.scrollTop = this.elContent.scrollTop,
                _r_()
            }
        }, {
            key: "_isDateDisabled",
            value: function(e) {
                return _i_("3da:a1151010"),
                _r_(A(e, this.modifiers.dateDisabled))
            }
        }, {
            key: "_isMinMonth",
            value: function(e) {
                _i_("3da:d3b9889f");
                var t = this.props.minDate
                  , i = new Date(e);
                return _r_((i.setDate(i.getDate() - 1),
                t > X(i)))
            }
        }, {
            key: "_isMaxMonth",
            value: function(e) {
                _i_("3da:b53efeb5");
                var t = this.state.maxDate
                  , i = Y(e, 1);
                return _r_(t < X(i))
            }
        }, {
            key: "_updateDateElements",
            value: function(e, t) {
                _i_("3da:39c21b02");
                var i = this
                  , n = w(this.selectors.date, e || this.root);
                if (e && this.elsDate) {
                    var a = [].slice.call(this.elsDate)
                      , r = [].slice.call(n);
                    this.elsDate = t ? [].concat(_(r), _(a)) : [].concat(_(a), _(r))
                } else
                    this.elsDate = n;
                this.elsMonth = w(this.selectors.month, this.root),
                n.forEach(function(e) {
                    _i_("3da:32e236ff"),
                    e.addEventListener("mouseenter", i._handleDateMouseEnter.bind(i)),
                    e.addEventListener("mouseleave", i._handleDateMouseLeave.bind(i)),
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_updateClassNames",
            value: function() {
                _i_("3da:6afa504d");
                var d, c, l = this, e = this.state, u = e.startDate, f = e.endDate, h = e.hoveredISODate, p = e.chooseMode, m = e.minDate, b = e.maxDate, t = this.props, g = t.selectedDates, v = t.disabledDates;
                this.props.disableDateSelection || (this.elsDate.forEach(function(e, t) {
                    _i_("3da:29821f2c");
                    var i = e.getAttribute(l.attributes.date)
                      , n = u && X(u)
                      , a = f && X(f)
                      , r = i === n || i === a || !(!g || -1 === g.indexOf(i))
                      , o = n < i && (i < a || "end" === p && i < h)
                      , _ = i < m || b < i || !!v && -1 !== v.indexOf(i)
                      , s = e.querySelector('[role="checkbox"]');
                    s && s.setAttribute("aria-checked", r),
                    I(e, l.modifiers.dateSelected, r),
                    I(e, l.modifiers.dateInRange, o),
                    I(e, l.modifiers.dateDisabled, _),
                    0 === t && (d = i),
                    t === l.elsDate.length - 1 && (c = i),
                    _r_()
                }),
                I(this.elPrev, this.modifiers.controlHidden, d && d <= m),
                I(this.elNext, this.modifiers.controlHidden, c && b <= c)),
                _r_()
            }
        }, {
            key: "_updateDisplayRender",
            value: function(e) {
                if (_i_("3da:f965b85b"),
                this.props.renderSelected && !this.props.disableDateSelection) {
                    var t = this.state
                      , i = t.startDate
                      , n = t.endDate
                      , a = t.chooseMode
                      , r = e && Z(e)
                      , o = "start" === a && r && !i ? r : i
                      , _ = "end" === a && r && !n ? r : n;
                    this.elSelectedDisplay.innerHTML = this.props.renderSelected({
                        startDate: o,
                        endDate: _
                    })
                }
                _r_()
            }
        }, {
            key: "_getMonthsHTML",
            value: function(e) {
                _i_("3da:ffb17d13");
                var t = this.props
                  , i = t.vertical
                  , n = t.firstWeekDay
                  , a = t.selectedDates
                  , r = t.disabledDates
                  , o = t.dayNames
                  , _ = t.monthNames
                  , s = t.getDayMarkup
                  , d = this.state
                  , c = d.minDate
                  , l = d.maxDate;
                return _r_(function(e) {
                    _i_("3da:30db7bd6");
                    for (var t = e.date, i = e.dayNames, n = e.monthNames, a = e.minDate, r = e.maxDate, o = e.showDayNames, _ = e.firstWeekDay, s = e.selectedDates, d = e.disabledDates, c = e.id, l = e.getDayMarkup, u = function(e, t) {
                        _i_("3da:7da93c65");
                        for (var i = e.getMonth(), n = e.getFullYear(), a = [], r = new Date(n,i,1), o = null, _ = null; i === r.getMonth(); ) {
                            var s = r.getDay()
                              , d = t <= s ? s - t : 7 - t + s;
                            (null === o || d < o) && (a.push([]),
                            _ = null === _ ? 0 : _ + 1),
                            a[_][d] = {
                                date: new Date(r)
                            },
                            r.setDate(r.getDate() + 1),
                            o = d
                        }
                        return _r_(a)
                    }(t, _), f = function(t) {
                        return _i_("3da:91fe6d6a"),
                        _r_(G.map(function(e) {
                            return _i_("3da:c5743c241"),
                            _r_(t[e])
                        }))
                    }(n)[t.getMonth()], h = t.getFullYear(), p = J(i, _), m = "", b = 0; b < u.length; b++)
                        m += ee({
                            week: u[b],
                            minDate: a,
                            maxDate: r,
                            selectedDates: s,
                            disabledDates: d,
                            getDayMarkup: l,
                            monthName: f
                        });
                    return _r_('\n        <div class="bui-calendar__wrapper" data-bui-ref="calendar-month">\n            <div class="bui-calendar__month" id="'.concat(c, '" aria-live="polite">').concat(f, " ").concat(h, '</div>\n            <table class="bui-calendar__dates" aria-labelledby="').concat(c, '">\n                ').concat(function(e, t) {
                        _i_("3da:1c92f4c9");
                        var i = ["bui-calendar__row"];
                        return _r_((t || i.push("bui-u-sr-only"),
                        '\n    <thead class="'.concat(i.join(" "), '">\n        ').concat(e.map(function(e) {
                            return _i_("3da:51f0701b"),
                            _r_('<th scope="col" class="bui-calendar__day-name">'.concat(e, "</th>"))
                        }).join(""), "\n    </thead>\n    ")))
                    }(p, o), "\n                ").concat(m, "\n            </table>\n        </div>\n    "))
                }({
                    id: this.id,
                    date: e,
                    dayNames: o,
                    monthNames: _,
                    minDate: c,
                    maxDate: l,
                    firstWeekDay: n,
                    showDayNames: !i,
                    selectedDates: a,
                    disabledDates: r,
                    getDayMarkup: s
                }))
            }
        }, {
            key: "_updateVisual",
            value: function(e, t) {
                _i_("3da:e40f54a5"),
                this._updateClassNames(),
                ("hover" !== e || this.props.renderOnHover) && this._updateDisplayRender(t),
                _r_()
            }
        }, {
            key: "_renderMonths",
            value: function(e, t) {
                _i_("3da:e1c49125");
                var i, n = this.props.vertical, a = t || this.props.monthsToShow, r = J(this.props.dayNames, this.props.firstWeekDay), o = "", _ = Y(e, 0);
                this.movedBy = 0,
                n && (o += (i = r,
                _i_("3da:dada3bd0"),
                _r_('\n        <div class="bui-calendar__vertical-header">\n            <table class="bui-calendar__vertical-day-names">\n                <thead class="bui-calendar__row">\n                    '.concat(i.map(function(e) {
                    return _i_("3da:51f0701b1"),
                    _r_('<th scope="col" class="bui-calendar__day-name">'.concat(e, "</th>"))
                }).join(""), "\n                </thead>\n            </table>\n        </div>\n    "))));
                for (var s = 0; s < a + this.movedBy; s++) {
                    var d = Y(_, 1)
                      , c = !this._isMinMonth(d);
                    if ((!n || n && c) && (o += this._getMonthsHTML(_)),
                    n && !c && (this.movedBy = Math.min(2, this.movedBy + 1)),
                    this._isMaxMonth(_))
                        break;
                    _ = Y(_, 1)
                }
                this.elContent.innerHTML = o,
                this._updateDateElements(),
                this._updateVisual(),
                _r_()
            }
        }, {
            key: "_getChooseMode",
            value: function(e) {
                _i_("3da:b7734ca4");
                var t = this.props.singleDate
                  , i = e.startDate
                  , n = e.endDate;
                return _r_(t ? "start" : i && !n ? "end" : "start")
            }
        }, {
            key: "_handleScroll",
            value: function() {
                if (_i_("3da:82474dca"),
                this.props.vertical) {
                    var e, t, i, n = this.elContent.scrollTop, a = this.scrollTop > n, r = !1;
                    if (this.scrollTop = n,
                    a) {
                        var o = this.elsDate[0].getAttribute(this.attributes.date);
                        if (t = Z(o),
                        this._isMinMonth(t))
                            return _r_();
                        r = n < 200
                    } else {
                        var _ = this.elsDate[this.elsDate.length - 1].getAttribute(this.attributes.date);
                        if (t = Z(_),
                        this._isMaxMonth(t))
                            return _r_();
                        var s = n + this.elContent.clientHeight;
                        r = this.elContent.scrollHeight - s < 200
                    }
                    r && (i = Y(t, a ? -1 : 1),
                    e = j(this._getMonthsHTML(i)),
                    a ? this.elContent.insertBefore(e, this.elsMonth[0]) : this.elContent.appendChild(e),
                    this._updateDateElements(e, a),
                    this._updateClassNames(),
                    a && (this.elContent.scrollTop = 200 + this.elsMonth[0].clientHeight))
                }
                _r_()
            }
        }, {
            key: "_handleDateClick",
            value: function(e) {
                _i_("3da:7ff5738f");
                var t = e.delegateTarget;
                if (e.preventDefault(),
                !this._isDateDisabled(t)) {
                    var i = this.props
                      , n = i.onDateChange
                      , a = i.allowSameDateSelection
                      , r = i.disableDateSelection
                      , o = t.getAttribute(this.attributes.date)
                      , _ = Z(o);
                    if (!r) {
                        var s = this.state
                          , d = s.chooseMode
                          , c = s.startDate
                          , l = c && X(c)
                          , u = {};
                        if (o === l && !a)
                            return _r_();
                        "start" === d ? (u.startDate = _,
                        u.endDate = null) : "end" === d && o < l ? u.startDate = _ : u.endDate = _,
                        this.setState(u)
                    }
                    n && n({
                        startDate: this.state.startDate,
                        endDate: this.state.endDate,
                        clickedDate: _
                    })
                }
                _r_()
            }
        }, {
            key: "_handleDateMouseEnter",
            value: function(e) {
                _i_("3da:a9dd8f3a");
                var t = e.target;
                if (!this._isDateDisabled(t)) {
                    var i = t.getAttribute(this.attributes.date);
                    this.setState({
                        hoveredISODate: i
                    }),
                    this._updateVisual("hover", i)
                }
                _r_()
            }
        }, {
            key: "_handleDateMouseLeave",
            value: function() {
                _i_("3da:e4ea03eb"),
                this.setState({
                    hoveredISODate: null
                }),
                this._updateVisual("hover"),
                _r_()
            }
        }, {
            key: "_handlePrevClick",
            value: function() {
                _i_("3da:10d391e3"),
                this.setState({
                    baseMonthDate: Y(this.state.baseMonthDate, -1)
                }),
                _r_()
            }
        }, {
            key: "_handleNextClick",
            value: function() {
                _i_("3da:953ac4f2"),
                this.setState({
                    baseMonthDate: Y(this.state.baseMonthDate, 1)
                }),
                _r_()
            }
        }, {
            key: "_handleMonthChange",
            value: function() {
                _i_("3da:ccb2b80d"),
                this.props.vertical || this._renderMonths(this.state.baseMonthDate),
                _r_()
            }
        }, {
            key: "_handleSelectedDateStateChange",
            value: function() {
                _i_("3da:2e8895aa");
                var e = this._getChooseMode(this.state);
                this.setState({
                    chooseMode: e
                }),
                this._updateVisual(),
                _r_()
            }
        }, {
            key: "_getRenderDay",
            value: function(e) {
                _i_("3da:28d8a36d");
                var t = e.getDate();
                return _r_('<span aria-hidden="true">'.concat(t, "</span>"))
            }
        }, {
            key: "_handleKeyboardEvents",
            value: function(e) {
                if (_i_("3da:ef228da5"),
                37 === e.which || 39 === e.which || 38 === e.which || 40 === e.which || 32 === e.which) {
                    switch (e.preventDefault(),
                    this.focusItem || (this.focusItem = 1),
                    e.which) {
                    case 37:
                        this.focusItem--;
                        break;
                    case 39:
                        this.focusItem++;
                        break;
                    case 40:
                        this.focusItem += 7;
                        break;
                    case 38:
                        this.focusItem -= 7;
                        break;
                    case 32:
                    case 13:
                        this.elsDate[this.focusItem - 1].click()
                    }
                    this._handleDateFocus()
                }
                _r_()
            }
        }, {
            key: "_handleDateFocus",
            value: function() {
                if (_i_("3da:976442e4"),
                0 < this.focusItem) {
                    if (this.focusItem > this.elsDate.length) {
                        var e = this.focusItem - this.elsDate.length;
                        this.setState({
                            baseMonthDate: Y(this.state.baseMonthDate, 1)
                        }),
                        31 < this.elsDate.length && (e += new Date(this.state.baseMonthDate.getFullYear(),this.state.baseMonthDate.getMonth() + 1,0).getDate()),
                        this.focusItem = e
                    }
                } else
                    this.setState({
                        baseMonthDate: Y(this.state.baseMonthDate, -1)
                    }),
                    31 < this.elsDate.length ? this.focusItem += new Date(this.state.baseMonthDate.getFullYear(),this.state.baseMonthDate.getMonth() + 1,0).getDate() : this.focusItem += this.elsDate.length;
                var t = this.elsDate[this.focusItem - 1];
                t.focus();
                var i = t.getAttribute(this.attributes.date);
                this.setState({
                    hoveredISODate: i
                }),
                this._updateVisual("hover", i),
                _r_()
            }
        }]),
        s))
    }();
    H.register("Calendar", te);
    var ie, ne = function() {
        return _i_("3da:d95c2590"),
        _r_(!!y(".rtl", document) || !!y("[dir=rtl]", document))
    };
    function ae(e, t) {
        if (_i_("3da:1b645b40"),
        !ne())
            return _r_(t);
        var i = function() {
            if (_i_("3da:4828e66f"),
            ie)
                return _r_(ie);
            var e = window.document.createElement("div");
            return _r_((e.innerHTML = '<div style="width: 2px"><span style="display: inline-block; width: 1px"></span><span style="display: inline-block; width: 1px"></span></div>',
            document.body.appendChild(e),
            e.dir = "rtl",
            e.style.width = "1px",
            e.style.height = "1px",
            e.style.position = "fixed",
            e.style.top = "0",
            e.style.left = "0",
            e.style.overflow = "hidden",
            ie = "reverse",
            0 < e.scrollLeft ? ie = "default" : "undefined" != typeof Element && Element.prototype.scrollIntoView ? (e.children[0].children[1].scrollIntoView(),
            e.scrollLeft < 0 && (ie = "negative")) : (e.scrollLeft = 1,
            0 === e.scrollLeft && (ie = "negative")),
            document.body.removeChild(e),
            ie))
        }();
        return _r_("negative" === i ? -t : "reverse" === i ? t : e.scrollWidth - e.clientWidth - t)
    }
    var re = ae
      , oe = "scrollBehavior"in document.documentElement.style;
    function _e(e) {
        return _i_("3da:2719195f"),
        _r_((t = e,
        _i_("3da:76e92cc0"),
        _r_(ae(t, t.scrollLeft))));
        var t
    }
    function se(e, t) {
        _i_("3da:12c3a0dd");
        var i = D(t)
          , n = D(e);
        return _r_(ne() ? i.right - n.right : n.left - i.left)
    }
    var de = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:789c0184"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).props = {
                infinite: t.infinite,
                onAfterNavigate: null,
                wcu_387_carousel_navigation: e.getAttribute("data-wcu_387_carousel_navigation")
            },
            i.selectors = {
                prevButton: "[data-bui-ref=slider-prev]",
                nextButton: "[data-bui-ref=slider-next]",
                container: "[data-bui-ref=slider-container]",
                item: "[data-bui-ref=slider-item]"
            },
            i.modifiers = {
                visible: "bui-is-visible",
                clickable: "bui-is-clickable"
            },
            i.prevButton = null,
            i.nextButton = null,
            i.container = null,
            i.items = null,
            i.itemsWithGhosts = null,
            i.timer = null,
            i.currentIndex = 0,
            i.handlers = {
                "prevButton@click": i.navigatePrev,
                "nextButton@click": i.navigateNext,
                "container@scroll": T(i._handleScroll, 20),
                "root@keyup": i._handleKeyup
            },
            i))
        }
        return _i_("3da:49aa710d"),
        _r_((i(n, t),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:d3fa3f71");
                var e = this.props.infinite;
                this.prevButton = y(this.selectors.prevButton, this.root),
                this.nextButton = y(this.selectors.nextButton, this.root),
                this.container = y(this.selectors.container, this.root),
                this.items = w(this.selectors.item, this.root),
                this.currentIndex = this._getCurrentIndex(),
                this.items.forEach(function(e, t) {
                    return _i_("3da:cdc795db"),
                    _r_(e.setAttribute("data-index", t))
                }),
                this._updateNavigation(),
                e && (this._addGhosts(),
                this.itemsWithGhosts = w(this.selectors.item, this.root)),
                _r_()
            }
        }, {
            key: "_handleKeyup",
            value: function(e) {
                _i_("3da:b65b8158"),
                37 === e.keyCode && this.navigatePrev(),
                39 === e.keyCode && this.navigateNext(),
                _r_()
            }
        }, {
            key: "_handleScroll",
            value: function() {
                _i_("3da:9d5e7c90");
                var e = this.props
                  , t = e.onAfterNavigate
                  , i = e.infinite
                  , n = this._getCurrentItem();
                if (n) {
                    var a = +n.getAttribute("data-index");
                    a !== this.currentIndex && t && (this.currentIndex = a,
                    t.call(this, {
                        index: this.currentIndex
                    })),
                    i && this._handleInfiniteScrolling(n, a),
                    this._updateNavigation()
                }
                _r_()
            }
        }, {
            key: "_handleInfiniteScrolling",
            value: function(e, t) {
                _i_("3da:a8d7acf3");
                var i = this._getThreshold()
                  , n = _e(this.container);
                if (n < i) {
                    var a = se(e, this.container);
                    this.navigate(t, {
                        instant: !0,
                        delta: -a
                    })
                } else if (this.container.scrollWidth - n - this.container.clientWidth < i) {
                    var r = se(e, this.container);
                    this.navigate(t, {
                        instant: !0,
                        delta: -r
                    })
                }
                _r_()
            }
        }, {
            key: "_addGhosts",
            value: function() {
                _i_("3da:052ddfed");
                var s = this.container
                  , d = this.items
                  , c = this._getThreshold()
                  , l = d.length - 1;
                ["start", "end"].forEach(function(e) {
                    _i_("3da:3684855b");
                    for (var t = "start" === e, i = [], n = t ? -1 : 1, a = t ? l : 0, r = 0; r <= c && a <= l && 0 <= a; ) {
                        var o = d[a]
                          , _ = o.cloneNode(!0);
                        _.setAttribute("data-index", a),
                        _.setAttribute("data-ghost", !0),
                        i.push(_),
                        r += o.clientWidth,
                        a += n
                    }
                    i.forEach(function(e) {
                        _i_("3da:ceaada77"),
                        t ? s.insertBefore(e, s.firstChild) : s.appendChild(e),
                        _r_()
                    }),
                    _r_()
                }),
                this.navigate(0, {
                    instant: !0
                }),
                _r_()
            }
        }, {
            key: "_getThreshold",
            value: function() {
                return _i_("3da:264072c4"),
                _r_(this.container.clientWidth + 50)
            }
        }, {
            key: "_getCurrentItem",
            value: function(e) {
                _i_("3da:7bca38ad");
                var t = this.itemsWithGhosts || this.items;
                return _r_(function(e, t) {
                    _i_("3da:9d6c706c");
                    for (var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "center", n = 0; n < t.length; n++) {
                        var a = t[n];
                        if (0 <= se(a, e) + 5 + ("center" === i ? a.clientWidth / 2 : 0))
                            return _r_(a)
                    }
                    _r_()
                }(this.container, t, e))
            }
        }, {
            key: "_getCurrentIndex",
            value: function(e) {
                _i_("3da:9702665a");
                var t = this._getCurrentItem(e);
                return _r_(t ? +t.getAttribute("data-index") : 0)
            }
        }, {
            key: "_updateControl",
            value: function(e, t) {
                _i_("3da:e396ed15");
                var i = this
                  , n = document.activeElement;
                e.disabled = !t,
                t ? (B(e, this.modifiers.visible),
                B(e, this.modifiers.clickable)) : (S(e, this.modifiers.visible),
                this.timer = setTimeout(function() {
                    _i_("3da:cb637180"),
                    S(e, i.modifiers.clickable),
                    _r_()
                }, 3e3),
                e === n && (this.prevButton === e ? setTimeout(function() {
                    _i_("3da:2d318620"),
                    i.nextButton.focus(),
                    _r_()
                }, 100) : this.prevButton.focus())),
                _r_()
            }
        }, {
            key: "_updateNavigation",
            value: function() {
                _i_("3da:4d27fd43"),
                clearTimeout(this.timer),
                this.prevButton && this.nextButton && (this._updateControl(this.prevButton, !(_e(this.container) < 5)),
                this._updateControl(this.nextButton, !function(e) {
                    _i_("3da:67738b22");
                    var t = _e(e);
                    return _r_(e.scrollWidth - (t + e.clientWidth) < 5)
                }(this.container))),
                _r_()
            }
        }, {
            key: "navigate",
            value: function(e) {
                _i_("3da:a2c4c6e9");
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = this.props.infinite
                  , n = t.delta
                  , a = void 0 === n ? 0 : n
                  , r = e
                  , o = null
                  , _ = this.items.length - 1;
                if (i && r < 0)
                    r = _ + r + 1,
                    o = this.root.querySelector('[data-ghost][data-index="'.concat(r, '"]'));
                else if (i && _ < r) {
                    r = r - _ - 1;
                    var s = this.root.querySelectorAll('[data-ghost][data-index="'.concat(r, '"]'));
                    o = s[s.length - 1]
                } else
                    r = Math.max(0, Math.min(r, _)),
                    o = this.items[r];
                var d, c, l, u = (d = o,
                c = this.container,
                l = ne() ? c.clientWidth - d.offsetLeft - d.clientWidth : d.offsetLeft,
                Math.ceil(l) + a);
                !function(a, e, t) {
                    _i_("3da:f5884500");
                    var i = (t || {}).instant
                      , n = re(a, e);
                    if (oe || i)
                        a.scrollTo({
                            left: n,
                            behavior: i ? void 0 : "smooth"
                        });
                    else {
                        var r = window.performance.now()
                          , o = a.scrollLeft
                          , _ = n;
                        !function e() {
                            _i_("3da:fe161c22");
                            var t = window.performance.now()
                              , i = Math.min((t - r) / 468, 1)
                              , n = o + (_ - o) * i;
                            (a.scrollLeft = n) !== _ && window.requestAnimationFrame(e),
                            _r_()
                        }()
                    }
                    _r_()
                }(this.container, u, t),
                _r_()
            }
        }, {
            key: "_getShownItemsLength",
            value: function() {
                _i_("3da:8c680e26");
                var e = this.container.offsetWidth
                  , t = this._getCurrentItem().offsetWidth;
                return _r_(Math.round(e / t))
            }
        }, {
            key: "navigateNext",
            value: function() {
                _i_("3da:f463f73c");
                var e = this.props.wcu_387_carousel_navigation
                  , t = this._getShownItemsLength()
                  , i = this._getCurrentIndex() + (e ? t : 1);
                this.navigate(i),
                _r_()
            }
        }, {
            key: "navigatePrev",
            value: function() {
                _i_("3da:d721acd6");
                var e = this.props.wcu_387_carousel_navigation
                  , t = this._getShownItemsLength()
                  , i = this._getCurrentIndex() - (e ? t : 1);
                this.navigate(i),
                _r_()
            }
        }]),
        n))
    }()
      , ce = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:65577c99"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).selectors = {
                prevButton: "[data-bui-ref=carousel-prev]",
                nextButton: "[data-bui-ref=carousel-next]",
                container: "[data-bui-ref=carousel-container]",
                item: "[data-bui-ref=carousel-item]"
            },
            i.props = h({}, f({}, t, {
                onAfterNavigate: t.onAfterNavigate,
                wcu_387_carousel_navigation: e.getAttribute("data-wcu_387_carousel_navigation") || !1
            }), t),
            i))
        }
        return _i_("3da:c127ea36"),
        _r_((i(n, de),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:3b1ade38"),
                o(c(n.prototype), "onMount", this).call(this),
                _r_()
            }
        }]),
        n))
    }();
    H.register("Carousel", ce);
    var le, ue, fe, he, pe, me = function(e) {
        _i_("3da:4154d97f");
        var t = [];
        return _r_((w('a,button,input:not([type="hidden"]),textarea,select,details,[tabindex]:not([tabindex="-1"])', e).forEach(function(e) {
            _i_("3da:3237837f"),
            t.push(e),
            _r_()
        }),
        t.filter(function(e) {
            return _i_("3da:89cc2563"),
            _r_(!e.hasAttribute("disabled"))
        })))
    }, be = (le = [],
    ue = function(e) {
        _i_("3da:117cce9f");
        for (var t = e.parentNode && e.parentNode.firstChild; t; ) {
            var i = t !== e
              , n = 1 === t.nodeType && !t.hasAttribute("aria-hidden");
            i && n && (t.setAttribute("aria-hidden", "true"),
            le.push(t)),
            t = t.nextSibling
        }
        _r_()
    }
    ,
    fe = function() {
        _i_("3da:2b9df4c8"),
        le.forEach(function(e) {
            _i_("3da:b24468ae"),
            e.removeAttribute("aria-hidden"),
            _r_()
        }),
        le = [],
        _r_()
    }
    ,
    function(e) {
        _i_("3da:92f1a42d");
        var t = e;
        for (le.length && fe(); t && t !== document.body; )
            ue(t),
            t = t.parentElement;
        return _r_({
            release: fe
        })
    }
    ), ge = (pe = he = null,
    function(p) {
        _i_("3da:0518c5d1");
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , m = e.arrowNavigation
          , t = e.mode
          , i = void 0 === t ? "hard" : t
          , b = e.onRelease
          , g = document.activeElement
          , v = "hard" === i
          , y = "linear" === i
          , n = function(e) {
            _i_("3da:72ed37ce");
            var t = e.keyCode
              , i = 9 === t && !e.shiftKey
              , n = 9 === t && e.shiftKey
              , a = m && 38 === t
              , r = m && 40 === t
              , o = n || a
              , _ = !(a || r || v);
            if (o || i || r) {
                var s = document.activeElement
                  , d = me(p);
                y && g && d.unshift(g);
                var c = d.length - 1
                  , l = d.indexOf(s)
                  , u = o ? l - 1 : l + 1
                  , f = c < u || u < 0;
                if (y && f && _) {
                    if (b && b({
                        withoutFocusReturn: !0
                    }),
                    g) {
                        var h = document.createElement("button");
                        g.insertAdjacentElement(o ? "beforebegin" : "afterend", h),
                        h.focus(),
                        h.parentElement.removeChild(h)
                    }
                } else
                    e.preventDefault(),
                    l = u,
                    f && (l = o ? c : 0,
                    _) ? b && b() : d[l] && d[l].focus()
            }
            _r_()
        };
        he && he(),
        he = function() {
            return _i_("3da:c08a9f9f"),
            _r_(document.removeEventListener("keydown", n))
        }
        ,
        v && (pe = be(p));
        var a = me(p);
        return _r_((y && g && a.unshift(g),
        a && a.length && (y || setTimeout(function() {
            _i_("3da:61186e0d"),
            a[0].focus(),
            _r_()
        }, 10),
        document.addEventListener("keydown", n)),
        {
            release: function() {
                _i_("3da:41fab68d");
                var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).withoutFocusReturn;
                he && (he(),
                pe && pe.release(),
                !e && g && g.focus(),
                pe = he = null),
                _r_()
            }
        }))
    }
    ), ve = function(t, e) {
        _i_("3da:5f179c42");
        var i = e.templates
          , n = e.sourceEl;
        t.innerHTML = "",
        i.forEach(function(e) {
            _i_("3da:555bc871"),
            "string" == typeof e ? t.innerHTML += e : e && t.appendChild(e),
            _r_()
        }),
        n && (t.innerHTML += n.innerHTML),
        _r_()
    }, ye = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:3f9ff987"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).state = {
                template: null
            },
            i.selectors = {
                contentWrapper: null,
                content: null,
                title: null,
                subtitle: null,
                close: null
            },
            i.overlayInstance = null,
            i.modalEl = null,
            i.contentWrapper = null,
            i.closeEls = null,
            i.trap = null,
            i.elTemplate = null,
            i.boundClose = i.close.bind(l(i)),
            i))
        }
        return _i_("3da:2a3ee167"),
        _r_((i(n, t),
        a(n, [{
            key: "_showModal",
            value: function() {
                _i_("3da:8a37e254");
                var e = this.props.onAfterOpen;
                this.modalEl && (this.overlayInstance.updateContent(this.modalEl),
                F(this.modalEl),
                e && e.call(this)),
                _r_()
            }
        }, {
            key: "_hideModal",
            value: function() {
                _i_("3da:8ea9ee4c");
                var e = this
                  , t = this.props
                  , i = t.onAfterClose
                  , n = t.keepMounted;
                this.trap && this.trap.release && P(function() {
                    return _i_("3da:d59ecb4c"),
                    _r_(e.trap.release())
                }),
                i && i.call(this),
                n || (this._removeModalListeners(),
                this._removeModalEl()),
                _r_()
            }
        }, {
            key: "_getModalTemplate",
            value: function() {
                return _i_("3da:991e7b9d"),
                _r_("")
            }
        }, {
            key: "_getCloseTemplate",
            value: function() {
                return _i_("3da:991e7b9d1"),
                _r_("")
            }
        }, {
            key: "_handleRootClick",
            value: function(e) {
                _i_("3da:23e831ac"),
                e.preventDefault(),
                this.open(),
                _r_()
            }
        }, {
            key: "_handleOverlayOpen",
            value: function() {
                _i_("3da:eb7d83e6");
                var e = this.props
                  , t = e.onBeforeOpen
                  , i = e.keepMounted;
                this.modalEl && i ? this._setDefaultControlFocus() : (this._insertModalEl(),
                this._attachModalListeners()),
                t && t.call(this),
                this._showModal(),
                _r_()
            }
        }, {
            key: "_handleOverlayClose",
            value: function() {
                if (_i_("3da:958bfd7f"),
                !this.overlayInstance.getLockCloseState()) {
                    var e = this.props.onBeforeClose;
                    e && e.call(this),
                    this._hideModal()
                }
                _r_()
            }
        }, {
            key: "_buildModalContent",
            value: function() {
                _i_("3da:02906036");
                var e = this.state.template;
                this.contentWrapper = y(this.selectors.contentWrapper, this.modalEl),
                ve(this.contentWrapper, {
                    templates: [this._getCloseTemplate(), e],
                    sourceEl: y(this.selectors.content)
                });
                var t = y(this.selectors.title, this.contentWrapper)
                  , i = y(this.selectors.subtitle, this.contentWrapper)
                  , n = t && t.getAttribute("id") || null
                  , a = i && i.getAttribute("id") || null;
                n && this.contentWrapper.setAttribute("aria-labelledby", n),
                a ? this.contentWrapper.setAttribute("aria-describedby", a) : this.contentWrapper.removeAttribute("aria-describedby"),
                _r_()
            }
        }, {
            key: "_insertModalEl",
            value: function() {
                _i_("3da:a27f87b5"),
                this.modalEl = this._getModalTemplate.call(this),
                this._buildModalContent(),
                this.closeEls = w(this.selectors.close, this.modalEl),
                this._setDefaultControlFocus(),
                _r_()
            }
        }, {
            key: "_setDefaultControlFocus",
            value: function() {
                _i_("3da:0fa31891");
                var e = this
                  , t = this.props.arrowNavigation;
                P(function() {
                    return _i_("3da:a77d9dd1"),
                    _r_(e.trap = ge(e.modalEl, {
                        arrowNavigation: t
                    }))
                }),
                _r_()
            }
        }, {
            key: "_removeModalEl",
            value: function() {
                _i_("3da:fd7873b4"),
                this.modalEl = null,
                _r_()
            }
        }, {
            key: "_attachModalListeners",
            value: function() {
                _i_("3da:35187fc5");
                var t = this;
                this.closeEls.forEach(function(e) {
                    return _i_("3da:2172f6d1"),
                    _r_(k(e, "click", t.boundClose))
                }),
                _r_()
            }
        }, {
            key: "_removeModalListeners",
            value: function() {
                _i_("3da:7949916d");
                var t = this;
                this.closeEls && this.closeEls.forEach(function(e) {
                    return _i_("3da:539a55e5"),
                    _r_(C(e, "click", t.boundClose))
                }),
                _r_()
            }
        }, {
            key: "lockClose",
            value: function() {
                _i_("3da:38754d18"),
                this.overlayInstance.lockClose(),
                _r_()
            }
        }, {
            key: "unlockClose",
            value: function() {
                _i_("3da:a300c4dd"),
                this.overlayInstance.unlockClose(),
                _r_()
            }
        }, {
            key: "open",
            value: function() {
                _i_("3da:36c72124"),
                this.overlayInstance.open(),
                _r_()
            }
        }, {
            key: "close",
            value: function() {
                _i_("3da:5568a9c4"),
                this.overlayInstance.close(),
                _r_()
            }
        }, {
            key: "updateContent",
            value: function(e) {
                _i_("3da:31c62ca1"),
                this._removeModalListeners(),
                this.setState({
                    template: e
                }),
                this._insertModalEl(),
                this._attachModalListeners(),
                F(this.modalEl),
                _r_()
            }
        }, {
            key: "getModalRoot",
            value: function() {
                return _i_("3da:d19356a7"),
                _r_(this.modalEl ? y(this.selectors.contentWrapper, this.modalEl) : null)
            }
        }, {
            key: "onMount",
            value: function() {
                _i_("3da:05d9ff05");
                var e = this.props
                  , t = e.lockClose
                  , i = e.keepMounted;
                this.elTemplate = y(this.selectors.content, document),
                this.overlayInstance = null,
                this.overlayInstance = q("Overlay", null, {
                    onBeforeOpen: this._handleOverlayOpen.bind(this),
                    onBeforeClose: this._handleOverlayClose.bind(this),
                    lockClose: t,
                    keepMounted: i
                }),
                this.overlayInstance.mount(),
                this.elTemplate && this.elTemplate.style.setProperty("display", "none", "important"),
                _r_()
            }
        }, {
            key: "onUnmount",
            value: function() {
                _i_("3da:dbb24dd8"),
                this.overlayInstance.unmount(),
                this.overlayInstance = null,
                _r_()
            }
        }]),
        n))
    }(), we = function() {
        return _i_("3da:1a4c1f51"),
        _r_("_" + Math.random().toString(36).substr(2, 9))
    }, ke = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:006340c4"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).props = f({}, t, {
                id: t.id || e && e.getAttribute("data-drawer-id") || we(),
                position: t.position || e && e.getAttribute("data-drawer-position") || "bottom",
                fill: t.fill || e && e.getAttribute("data-drawer-fill"),
                ariaLabel: t.ariaLabel || e && e.getAttribute("data-drawer-aria-label"),
                closeAriaLabel: t.closeAriaLabel || e && e.getAttribute("data-drawer-close-aria-label"),
                arrowNavigation: t.arrowNavigation || e && e.getAttribute("data-drawer-arrow-navigation")
            }),
            i.handlers = {
                "root@click": i._handleRootClick
            },
            i.state = {
                template: t.template
            },
            i.selectors = {
                content: "#".concat(i.props.id),
                contentWrapper: '[data-bui-ref~="drawer-content-wrapper"]',
                close: '[data-bui-ref~="drawer-close"]',
                title: '[data-bui-ref~="drawer-title"]',
                subtitle: '[data-bui-ref~="drawer-subtitle"]'
            },
            i.modifiers = {
                active: "bui-drawer--active",
                fill: "bui-drawer--fill"
            },
            i))
        }
        return _i_("3da:f89320f0"),
        _r_((i(n, ye),
        a(n, [{
            key: "_getModalTemplate",
            value: function() {
                return _i_("3da:453d64dd"),
                _r_((t = (e = {
                    position: this.props.position,
                    ariaLabel: this.props.ariaLabel
                }).ariaLabel,
                j('\n    <div class="bui-drawer bui-drawer--position-'.concat(e.position, '">\n        <div \n            class="bui-drawer__slot" \n            data-bui-ref="drawer-content-wrapper" \n            role="dialog" \n            aria-modal="true"\n            ').concat(t ? 'aria-label="'.concat(t, '"') : "", "\n        ></div>\n    </div>\n"))));
                var e, t
            }
        }, {
            key: "_getCloseTemplate",
            value: function() {
                return _i_("3da:71cd0c30"),
                _r_((e = {
                    closeAriaLabel: this.props.closeAriaLabel || "Close modal"
                },
                j('\n  <button type="button" class="bui-drawer__close" aria-label="'.concat(e.closeAriaLabel, '" data-bui-ref="drawer-close">\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation"><path d="M13 12l6.26-6.26a.73.73 0 0 0-1-1L12 11 5.74 4.71a.73.73 0 1 0-1 1L11 12l-6.29 6.26a.73.73 0 0 0 .52 1.24.73.73 0 0 0 .51-.21L12 13l6.26 6.26a.74.74 0 0 0 1 0 .74.74 0 0 0 0-1z"/></svg>\n  </button>\n'))));
                var e
            }
        }, {
            key: "_showModal",
            value: function() {
                _i_("3da:19f8c20e");
                var e = this;
                o(c(n.prototype), "_showModal", this).call(this),
                requestAnimationFrame(function() {
                    _i_("3da:bea40011"),
                    requestAnimationFrame(function() {
                        _i_("3da:644e5d16"),
                        e.modalEl && (B(e.modalEl, e.modifiers.active),
                        I(e.modalEl, e.modifiers.fill, !!e.props.fill)),
                        _r_()
                    }),
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_hideModal",
            value: function() {
                _i_("3da:c8757765"),
                S(this.modalEl, this.modifiers.active),
                o(c(n.prototype), "_hideModal", this).call(this),
                _r_()
            }
        }]),
        n))
    }();
    H.register("Drawer", ke);
    var Ee = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:c4c38c3c"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).props = h({
                buttonActiveClassName: e.getAttribute("data-active-button-classname") || t.activeButtonClassName || ""
            }, t),
            i.selectors = h({
                button: "[data-bui-ref=dropdown-button]",
                item: "[data-bui-ref=dropdown-item]",
                slot: "[data-bui-ref=dropdown-slot]"
            }, t.selectors),
            i.handlers = {
                "button@click": i._handleClick,
                "window@click": i._handleOutsideClick,
                "window@keydown": i._handleKeyDown,
                "item@keydown": i._handleItemKeyDown,
                "item@click": i._handleItemClick,
                "state@active": i._handleActiveChange
            },
            i.modifiers = h({
                buttonActive: i.props.buttonActiveClassName,
                disabled: "bui-dropdown--disabled",
                active: "bui-dropdown--active"
            }, t.modifiers),
            i.state = {
                active: !1
            },
            i))
        }
        return _i_("3da:ce834b2f"),
        _r_((i(n, t),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:f4614e1d");
                var e = this.root;
                this.elButton = y(this.selectors.button, e),
                this.elSlot = y(this.selectors.slot, e),
                _r_()
            }
        }, {
            key: "_isItemDisabled",
            value: function(e) {
                return _i_("3da:4e6ecb55"),
                _r_(e.hasAttribute("disabled"))
            }
        }, {
            key: "_handleOutsideClick",
            value: function(e) {
                _i_("3da:8bae0d72"),
                this.state.active && function(e, t) {
                    _i_("3da:297e26ed");
                    for (var i = e; i; ) {
                        if (i === t)
                            return _r_(!1);
                        i = i.parentElement
                    }
                    return _r_(!0)
                }(e.target, this.root) && this.toggle({
                    ignoreFocus: !0
                }),
                _r_()
            }
        }, {
            key: "_handleItemChoose",
            value: function(e) {
                _i_("3da:3dcf3cec");
                var t = e.delegateTarget;
                this._isItemDisabled(t) ? e.preventDefault() : (this.toggle(),
                this.props.onItemChoose && this.props.onItemChoose({
                    event: e,
                    el: t
                })),
                _r_()
            }
        }, {
            key: "_handleClick",
            value: function(e) {
                _i_("3da:7d8d0ff5"),
                e.preventDefault(),
                this.state.active ? this.close() : this.open(),
                _r_()
            }
        }, {
            key: "_handleItemClick",
            value: function(e) {
                _i_("3da:33b5b219"),
                this._handleItemChoose(e),
                _r_()
            }
        }, {
            key: "_handleItemKeyDown",
            value: function(e) {
                _i_("3da:9faa0475"),
                32 === e.which && e.delegateTarget.href && e.delegateTarget.click(),
                _r_()
            }
        }, {
            key: "_handleKeyDown",
            value: function(e) {
                _i_("3da:b9790cf2"),
                27 === e.which && this.toggle({
                    active: !1
                }),
                _r_()
            }
        }, {
            key: "_handleActiveChange",
            value: function() {
                _i_("3da:059a4877"),
                I(this.root, this.modifiers.active, this.state.active),
                _r_()
            }
        }, {
            key: "isDisabled",
            value: function() {
                return _i_("3da:abbb756b"),
                _r_(A(this.root, this.modifiers.disabled))
            }
        }, {
            key: "open",
            value: function() {
                _i_("3da:213ed19e"),
                this.toggle({
                    active: !0
                }),
                _r_()
            }
        }, {
            key: "close",
            value: function() {
                _i_("3da:5889105a"),
                this.toggle({
                    active: !1
                }),
                _r_()
            }
        }, {
            key: "toggle",
            value: function(e) {
                if (_i_("3da:d3a17894"),
                !this.isDisabled()) {
                    var t = e || {}
                      , i = t.ignoreFocus
                      , n = t.active
                      , a = this.props
                      , r = a.onAfterOpen
                      , o = a.onAfterClose
                      , _ = a.onAfterToggle
                      , s = "boolean" == typeof n ? n : !this.state.active;
                    this.setState({
                        active: s
                    }),
                    this.elButton && (this.modifiers.buttonActive && I(this.elButton, this.modifiers.buttonActive, s),
                    this.elButton.setAttribute("aria-expanded", s),
                    this.elSlot && this.elSlot.setAttribute("aria-hidden", !s)),
                    s ? (this.elButton.setAttribute("aria-pressed", "true"),
                    this.trap = this.elSlot && ge(this.elSlot, {
                        arrowNavigation: !0,
                        mode: "soft",
                        onRelease: this.close.bind(this)
                    }),
                    r && r.call(this)) : (this.elButton.setAttribute("aria-pressed", "false"),
                    this.trap && this.trap.release && this.trap.release({
                        withoutFocusReturn: i
                    }),
                    o && o.call(this)),
                    _ && _.call(this)
                }
                _r_()
            }
        }]),
        n))
    }();
    H.register("Dropdown", Ee);
    var Te = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:6d96428b"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).props = {
                onChange: t.onChange && t.onChange.bind(l(i)),
                onOptionChange: t.onOptionChange && t.onOptionChange.bind(l(i)),
                onTextChange: t.onTextChange && t.onTextChange.bind(l(i)),
                multiple: t.multiple || e.getAttribute("data-multiple")
            },
            i.selectors = {
                selectedSlot: "[data-bui-ref=input-autocomplete-selected-slot]",
                dropdownSlot: "[data-bui-ref=input-autocomplete-dropdown]",
                textValue: "[data-bui-ref=input-autocomplete-text-value]",
                option: "[data-bui-ref=input-autocomplete-option]",
                value: "[data-bui-ref=input-autocomplete-value]",
                apply: "[data-bui-ref=input-autocomplete-apply]",
                clear: "[data-bui-ref=input-autocomplete-clear]"
            },
            i.modifiers = {
                active: "bui-input-autocomplete--active",
                disabled: "bui-input-autocomplete--disabled"
            },
            i.handlers = {
                "option@change": i._handleOptionChange,
                "option@click": i._handleOptionClick,
                "value@change": i._handleChange,
                "textValue@input": i._handleTextChange,
                "clear@click": i._handleClear,
                "apply@click": i.close
            },
            i))
        }
        return _i_("3da:80a02588"),
        _r_((i(n, t),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:5357e012"),
                this.dropdownInstance = q("Dropdown", this.root, {
                    modifiers: {
                        active: this.modifiers.active,
                        disabled: this.modifiers.disabled
                    },
                    selectors: {
                        slot: this.selectors.dropdownSlot
                    },
                    onAfterClose: this._handleClose.bind(this),
                    trapFocusWithCurrentElement: !0
                }),
                this.dropdownInstance.mount(),
                this.elValue = y(this.selectors.value, this.root),
                this.elTextValue = y(this.selectors.textValue, this.root),
                this.elSelectedSlot = y(this.selectors.selectedSlot, this.root),
                this.elDropdownSlot = y(this.selectors.dropdownSlot, this.root),
                _r_()
            }
        }, {
            key: "onUnmount",
            value: function() {
                _i_("3da:2689ad7f"),
                this.dropdownInstance && (this.dropdownInstance.unmount(),
                this.dropdownInstance = null),
                _r_()
            }
        }, {
            key: "open",
            value: function() {
                _i_("3da:40c55ce1"),
                this.dropdownInstance.open(),
                _r_()
            }
        }, {
            key: "close",
            value: function() {
                _i_("3da:56c29496"),
                this.dropdownInstance.close(),
                _r_()
            }
        }, {
            key: "getValue",
            value: function() {
                _i_("3da:9107bfdf");
                var e = this.elValue.value;
                return _r_(this._formatValue(e))
            }
        }, {
            key: "setTextValue",
            value: function(e) {
                _i_("3da:89c95665"),
                this.elTextValue.value = e,
                _r_()
            }
        }, {
            key: "renderSelected",
            value: function(e) {
                _i_("3da:dd6ce116"),
                this.elSelectedSlot && (this.elSelectedSlot.innerHTML = e),
                _r_()
            }
        }, {
            key: "renderOptions",
            value: function(e) {
                _i_("3da:bffa3a52"),
                this.elDropdownSlot && (this.elDropdownSlot.innerHTML = e),
                _r_()
            }
        }, {
            key: "_formatValue",
            value: function(e) {
                _i_("3da:1b1a258f");
                var t = this.props.multiple;
                return _r_(t && !e.length ? [] : t ? e.split(",") : e)
            }
        }, {
            key: "_getNextValue",
            value: function(e) {
                _i_("3da:25abdda5");
                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]
                  , i = this.props.multiple
                  , n = e.target
                  , a = n.getAttribute("data-value") || n.getAttribute("value")
                  , r = this.getValue();
                return _r_(i ? t ? [].concat(_(r), [a]) : r.filter(function(e) {
                    return _i_("3da:f9108fba"),
                    _r_(e !== a)
                }) : a)
            }
        }, {
            key: "_changeValue",
            value: function(e) {
                _i_("3da:8d24626e");
                var t = this.props
                  , i = t.multiple
                  , n = t.onOptionChange;
                this.elValue.value = e,
                this.dirty = !0,
                n && n({
                    value: e
                }),
                i || this.close(),
                _r_()
            }
        }, {
            key: "_handleOptionChange",
            value: function(e) {
                _i_("3da:ef6ae0d9");
                var t = e.delegateTarget.checked
                  , i = this._getNextValue(e, t);
                this._changeValue(i),
                _r_()
            }
        }, {
            key: "_handleOptionClick",
            value: function(e) {
                if (_i_("3da:35dc2aac"),
                "INPUT" !== e.delegateTarget.tagName) {
                    var t = this._getNextValue(e);
                    this._changeValue(t)
                }
                _r_()
            }
        }, {
            key: "_handleChange",
            value: function() {
                _i_("3da:8d253186");
                var e = this.props.onChange;
                e && e({
                    value: this.getValue()
                }),
                _r_()
            }
        }, {
            key: "_handleTextChange",
            value: function(e) {
                _i_("3da:55bf4c3c");
                var t = this.props.onTextChange;
                t && t({
                    value: e.target.value
                }),
                _r_()
            }
        }, {
            key: "_handleClear",
            value: function() {
                _i_("3da:bcf66ba4");
                var e = this._formatValue("");
                this._changeValue(e),
                this.close(),
                _r_()
            }
        }, {
            key: "_handleClose",
            value: function() {
                _i_("3da:7edb560a"),
                this.dirty && (E(this.elValue, "change"),
                this.dirty = !1),
                _r_()
            }
        }]),
        n))
    }();
    H.register("InputAutocomplete", Te);
    var Ce = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:0d13c479"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).props = {
                getValueMarkup: t.getValueMarkup || i._getRenderText.bind(l(i)),
                placeholder: t.placeholder || e.getAttribute("data-placeholder"),
                onChange: t.onChange
            },
            i.selectors = {
                button: "[data-bui-ref=input-multiselect-button]",
                display: "[data-bui-ref=input-multiselect-display]",
                field: "[data-bui-ref=input-multiselect-field]",
                label: "[data-bui-ref=input-multiselect-label]",
                clear: "[data-bui-ref=input-multiselect-clear]",
                apply: "[data-bui-ref=input-multiselect-apply]"
            },
            i.modifiers = {
                active: "bui-input-multiselect--active",
                disabled: "bui-input-multiselect--disabled"
            },
            i.handlers = {
                "clear@click": i._handleClear,
                "apply@click": i._handleApply,
                "button@keypress": i._handleButton
            },
            i))
        }
        return _i_("3da:95700413"),
        _r_((i(n, t),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:215b966e"),
                this.dropdownInstance = q("Dropdown", this.root, {
                    selectors: {
                        button: this.selectors.button
                    },
                    modifiers: {
                        active: this.modifiers.active,
                        disabled: this.modifiers.disabled
                    },
                    onAfterClose: this._handleClose.bind(this)
                }),
                this.dropdownInstance.mount(),
                this.fieldsArray = [].slice.call(w(this.selectors.field, this.root), 0),
                this.elsLabel = w(this.selectors.label, this.root),
                this.elDisplay = y(this.selectors.display, this.root);
                var e = this.getValue();
                this._renderValue(e),
                _r_()
            }
        }, {
            key: "onUnmount",
            value: function() {
                _i_("3da:2689ad7f1"),
                this.dropdownInstance && (this.dropdownInstance.unmount(),
                this.dropdownInstance = null),
                _r_()
            }
        }, {
            key: "getValue",
            value: function() {
                _i_("3da:05ab048b");
                var t = [];
                return _r_((this.fieldsArray.forEach(function(e) {
                    return _i_("3da:a4a51a28"),
                    _r_(e.checked && t.push(e.value))
                }),
                t))
            }
        }, {
            key: "_handleButton",
            value: function(e) {
                _i_("3da:72ffaf25"),
                32 !== e.which && 13 !== e.which || (e.preventDefault(),
                this.dropdownInstance.toggle()),
                _r_()
            }
        }, {
            key: "_handleClear",
            value: function() {
                _i_("3da:66f11084"),
                this.fieldsArray.forEach(function(e) {
                    return _i_("3da:f8817327"),
                    _r_(e.checked = !1)
                }),
                this._renderValue(this.getValue()),
                this._handleApply(),
                _r_()
            }
        }, {
            key: "_handleApply",
            value: function() {
                _i_("3da:daab94c8"),
                this.dropdownInstance.toggle(),
                _r_()
            }
        }, {
            key: "_handleClose",
            value: function() {
                _i_("3da:686cbcd6");
                var e = this.props.onChange;
                this._renderValue(this.getValue()),
                e && e({
                    value: this.getValue()
                }),
                _r_()
            }
        }, {
            key: "_getRenderText",
            value: function(e) {
                return _i_("3da:5d6210cb"),
                _r_(e && e.map(function(e) {
                    return _i_("3da:5ebeb7a8"),
                    _r_(e.label)
                }).join(", "))
            }
        }, {
            key: "_renderValue",
            value: function(e) {
                _i_("3da:231d74ad");
                var n = this
                  , t = this.props
                  , i = t.getValueMarkup
                  , a = t.placeholder;
                e.length && (a = i(e.map(function(t) {
                    _i_("3da:069599aa");
                    var e = n.fieldsArray.findIndex(function(e) {
                        return _i_("3da:8ef2fcbe"),
                        _r_(e.value === t)
                    })
                      , i = n.elsLabel[e].innerText;
                    return _r_({
                        value: t,
                        label: i
                    })
                }))),
                this.elDisplay.innerHTML = a,
                _r_()
            }
        }]),
        n))
    }();
    H.register("InputMultiselect", Ce);
    var xe = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:4fce4592"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).selectors = {
                value: "[data-bui-ref=input-slider-value]",
                handle: "[data-bui-ref=input-slider-handle]",
                bar: "[data-bui-ref=input-slider-bar]",
                display: "[data-bui-ref=input-slider-display]",
                selectedArea: "[data-bui-ref=input-slider-selected-area]"
            },
            i.attributes = {
                type: "data-type"
            },
            i.modifiers = {
                activeHandle: "bui-slider__handle--active"
            },
            i.handlers = {
                "handle@mousedown": i._handleMousedown,
                "handle@touchstart": i._handleMousedown,
                "bar@mousedown": i._handleBarMousedown,
                "window@mouseup": i._handleMouseup,
                "window@touchend": i._handleMouseup,
                "window@mousemove": i._handleMousemove,
                "window@touchmove": i._handleMousemove,
                "value@change": i._handleChange
            },
            i.state = {
                min: null,
                max: null,
                interval: 1,
                dragged: !1,
                dragId: null,
                isRTL: ne()
            },
            i))
        }
        return _i_("3da:67317a6f"),
        _r_((i(n, t),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:e678d442");
                var t = this
                  , e = this.root;
                this.elSelectedArea = y(this.selectors.selectedArea, e),
                this.elsValue = w(this.selectors.value, e),
                this.elsHandle = w(this.selectors.handle, e),
                this.elsDisplay = w(this.selectors.display, e),
                this.elCurrentHandle = null;
                var i = +(this.props.min || this.elsValue[0].getAttribute("min") || 0)
                  , n = +(this.props.max || this.elsValue[0].getAttribute("max") || 100)
                  , a = +(this.props.interval || this.root.getAttribute("data-interval") || 1);
                this.setState({
                    min: i,
                    max: n,
                    interval: a
                }),
                this.elsHandle.forEach(function(e) {
                    _i_("3da:74bf4cfd"),
                    t._moveHandle(e.getAttribute(t.attributes.type)),
                    _r_()
                }),
                this.elsValue.forEach(function(e) {
                    _i_("3da:dc22a121"),
                    t._setBounds(e.getAttribute(t.attributes.type)),
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_isDisabled",
            value: function() {
                return _i_("3da:5e840d7a"),
                _r_(this.elsValue[0] && this.elsValue[0].disabled)
            }
        }, {
            key: "_getMouseX",
            value: function(e) {
                return _i_("3da:5af5eedb"),
                _r_(void 0 !== e.pageX ? e.pageX : e.changedTouches && 1 === e.changedTouches.length ? e.changedTouches[0].pageX : void 0 !== e.screenX ? e.screenX : void 0)
            }
        }, {
            key: "_getDragId",
            value: function() {
                return _i_("3da:267261eb"),
                _r_(this.elCurrentHandle.getAttribute(this.attributes.type))
            }
        }, {
            key: "_filterByType",
            value: function(e, t) {
                _i_("3da:6602d76b");
                var i = this
                  , n = [];
                return _r_((e.forEach(function(e) {
                    _i_("3da:16107886"),
                    e.getAttribute(i.attributes.type) !== t && t || n.push(e),
                    _r_()
                }),
                n))
            }
        }, {
            key: "_setBounds",
            value: function(e) {
                _i_("3da:1d334c4f");
                var t = this.state.interval
                  , i = "min" === e ? "max" : "min"
                  , n = this._filterByType(this.elsValue, e)[0]
                  , a = this._filterByType(this.elsValue, i)[0]
                  , r = t || 1;
                n && t && n.setAttribute("step", t),
                n && a && ("min" === e && a.setAttribute(e, +n.value + r),
                "max" === e && a.setAttribute(e, +n.value - r)),
                _r_()
            }
        }, {
            key: "_handleBarMousedown",
            value: function(e) {
                _i_("3da:420bce47");
                var i, n = this, a = this._getMouseX(e);
                this.elsHandle.forEach(function(e) {
                    _i_("3da:30ab4d82");
                    var t = Math.abs(e.getBoundingClientRect().left - a);
                    (void 0 === i || t < i) && (i = t,
                    n.elCurrentHandle = e),
                    _r_()
                }),
                this.elCurrentHandle && (B(this.elCurrentHandle, this.modifiers.activeHandle),
                this.setState({
                    dragged: !0,
                    dragId: this._getDragId()
                }),
                this._handleMousemove(e)),
                _r_()
            }
        }, {
            key: "_handleMousedown",
            value: function(e) {
                _i_("3da:db862185"),
                e.preventDefault(),
                this._isDisabled() || (this.elCurrentHandle = e.delegateTarget,
                B(this.elCurrentHandle, this.modifiers.activeHandle),
                this.setState({
                    dragged: !0,
                    dragId: this._getDragId()
                })),
                _r_()
            }
        }, {
            key: "_handleMouseup",
            value: function() {
                _i_("3da:fc3d6072"),
                this.state.dragged && this.elCurrentHandle && (S(this.elCurrentHandle, this.modifiers.activeHandle),
                this.setState({
                    dragId: null,
                    dragged: !1
                }),
                this.elCurrentHandle = null),
                _r_()
            }
        }, {
            key: "_handleMousemove",
            value: function(e) {
                if (_i_("3da:e4dcaedb"),
                !this._isDisabled() && this.state.dragged) {
                    var t = this.state
                      , i = t.min
                      , n = t.max
                      , a = t.interval
                      , r = this.root.getBoundingClientRect()
                      , o = r.left
                      , _ = r.width
                      , s = this.elsHandle[0]
                      , d = this.elsHandle[1]
                      , c = this.elCurrentHandle === s && d
                      , l = this.elCurrentHandle === d && s
                      , u = this._getDragId()
                      , f = this._filterByType(this.elsValue, u)[0]
                      , h = o
                      , p = h + _
                      , m = this._getMouseX(e);
                    this.state.isRTL ? (c && (h = d.getBoundingClientRect().right),
                    l && (p = s.getBoundingClientRect().left)) : (c && (p = d.getBoundingClientRect().left),
                    l && (h = s.getBoundingClientRect().right)),
                    m < h && (m = h),
                    p < m && (m = p);
                    var b = (m - o) / _;
                    this.state.isRTL && (b = 1 - b);
                    var g = i + (n - i) * b;
                    f.value = Math.round(g / a) * a,
                    E(f, "change")
                }
                _r_()
            }
        }, {
            key: "_handleChange",
            value: function(e) {
                _i_("3da:46594eaa");
                var t = this.props.onChange
                  , i = e.delegateTarget
                  , n = i.getAttribute(this.attributes.type);
                this._setBounds(n),
                this._moveHandle(n || null),
                t && t.call(this, {
                    event: e,
                    value: i.value
                }),
                _r_()
            }
        }, {
            key: "_updateSelectedArea",
            value: function(e, t) {
                _i_("3da:27db152e");
                var i = this.state.isRTL ? "left" : "right"
                  , n = this.state.isRTL ? "right" : "left";
                "min" === e.getAttribute(this.attributes.type) ? this.elSelectedArea.style[n] = 100 * t + "%" : this.elSelectedArea.style[i] = 100 * (1 - t) + "%",
                _r_()
            }
        }, {
            key: "_updateValueDisplays",
            value: function(t, e) {
                _i_("3da:dc7553a6");
                var i = this.props.renderValue;
                this._filterByType(this.elsDisplay, e).forEach(function(e) {
                    _i_("3da:e6b325f1"),
                    e.innerText = i ? i(t) : t,
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_moveHandle",
            value: function(e) {
                _i_("3da:cb34d1ad");
                var t = this.state
                  , i = t.min
                  , n = t.max
                  , a = t.isRTL
                  , r = this._filterByType(this.elsValue, e)[0]
                  , o = this._filterByType(this.elsHandle, e)[0]
                  , _ = (r.value - i) / (n - i)
                  , s = a ? "right" : "left";
                o.style[s] = 100 * _ + "%",
                this._updateSelectedArea(o, _),
                this._updateValueDisplays(r.value, e),
                1 < this.elsValue.length ? r.setAttribute("aria-valuetext", this.elsValue[0].value + " - " + this.elsValue[1].value) : r.setAttribute("aria-valuetext", r.value),
                _r_()
            }
        }]),
        n))
    }();
    H.register("InputSlider", xe);
    var Be = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:9f6f3cc0"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).selectors = {
                addButton: "[data-bui-ref=input-stepper-add-button]",
                subtractButton: "[data-bui-ref=input-stepper-subtract-button]",
                value: "[data-bui-ref=input-stepper-value]",
                field: "[data-bui-ref=input-stepper-field]"
            },
            i.handlers = {
                "addButton@click": i._handleAddClick,
                "subtractButton@click": i._handleSubtractClick,
                "field@change": i._handleChange,
                "field@keypress": i._handleButton
            },
            i.state = {
                min: null,
                max: null
            },
            i))
        }
        return _i_("3da:1967f033"),
        _r_((i(n, t),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:43293a8a");
                var e = this.root;
                this.elField = y(this.selectors.field, e),
                this.elAddButton = y(this.selectors.addButton, e),
                this.elSubtractButton = y(this.selectors.subtractButton, e),
                this.elValue = y(this.selectors.value, e),
                this.setState({
                    min: this.props.min || +this.elField.getAttribute("min") || 0,
                    max: this.props.max || +this.elField.getAttribute("max") || 100
                });
                var t = this.getValue();
                this._updateRender(t),
                this.mounted = !0,
                _r_()
            }
        }, {
            key: "_updateRender",
            value: function(e) {
                _i_("3da:dd660b9f");
                var t = this.state
                  , i = t.min
                  , n = t.max;
                this._updateButton(this.elAddButton, e === n),
                this._updateButton(this.elSubtractButton, e === i),
                this.elValue.innerText = e,
                this.elField.setAttribute("aria-valuenow", e),
                _r_()
            }
        }, {
            key: "_updateButton",
            value: function(e, t) {
                _i_("3da:ab363e1e"),
                t ? e.setAttribute("disabled", !0) : this.mounted && e.removeAttribute("disabled"),
                _r_()
            }
        }, {
            key: "_handleButton",
            value: function(e) {
                _i_("3da:bb1ea0c6"),
                "+" !== e.key && "-" !== e.key || (e.preventDefault(),
                "+" === e.key ? this._handleAddClick(e) : this._handleSubtractClick(e)),
                _r_()
            }
        }, {
            key: "_handleAddClick",
            value: function(e) {
                if (_i_("3da:4e45eb56"),
                !e.delegateTarget.disabled) {
                    var t = this.props.onButtonClick
                      , i = this.getValue() + 1;
                    this.setValue(i),
                    t && t.call(this, {
                        value: i
                    })
                }
                _r_()
            }
        }, {
            key: "_handleSubtractClick",
            value: function(e) {
                if (_i_("3da:7641a765"),
                !e.delegateTarget.disabled) {
                    var t = this.props.onButtonClick
                      , i = this.getValue() - 1;
                    this.setValue(i),
                    t && t.call(this, {
                        value: i
                    })
                }
                _r_()
            }
        }, {
            key: "_handleChange",
            value: function(e) {
                _i_("3da:577e6e21");
                var t = this.props.onChange
                  , i = +e.delegateTarget.value;
                this._updateRender(i),
                t && t.call(this, {
                    event: e,
                    value: i
                }),
                _r_()
            }
        }, {
            key: "setValue",
            value: function(e) {
                _i_("3da:0271a94d");
                var t = this.state
                  , i = t.min
                  , n = t.max;
                e < i || n < e || (this.elField.value = e,
                E(this.elField, "change")),
                _r_()
            }
        }, {
            key: "getValue",
            value: function() {
                return _i_("3da:c4bcee8c"),
                _r_(+this.elField.value || 0)
            }
        }]),
        n))
    }();
    H.register("InputStepper", Be);
    var Se = function(e) {
        function t(e, i) {
            var n;
            return _i_("3da:6acc472e"),
            _r_((d(this, t),
            (n = p(this, c(t).call(this, e, i))).selectors = {
                prevButton: "[data-bui-ref=media-slider-prev]",
                nextButton: "[data-bui-ref=media-slider-next]",
                container: "[data-bui-ref=media-slider-container]",
                item: "[data-bui-ref=media-slider-item]",
                progress: "[data-bui-ref=media-slider-progress]"
            },
            n.props = f({}, i, {
                infinite: !0,
                onAfterNavigate: function(e) {
                    _i_("3da:8e54e072");
                    var t = i.onAfterNavigate;
                    n.progressIndex !== e.index && (n.progressIndex = e.index,
                    n.progressInstance._navigate(e.index),
                    t && t(e)),
                    _r_()
                }
            }),
            n.progressIndex = 0,
            n.progressInstance = null,
            n.elProgress = null,
            n))
        }
        return _i_("3da:04d7e6e9"),
        _r_((i(t, de),
        a(t, [{
            key: "onMount",
            value: function() {
                _i_("3da:a57aec84"),
                o(c(t.prototype), "onMount", this).call(this),
                this.elProgress = this.root.querySelector(this.selectors.progress),
                this.progressInstance = q("PaginationIndicator", this.elProgress, {
                    total: this.items.length
                }),
                this.progressInstance.mount(),
                _r_()
            }
        }]),
        t))
    }();
    H.register("MediaSlider", Se);
    var Ae = function(e) {
        function r(e, t) {
            var i;
            return _i_("3da:87139e1c"),
            _r_((d(this, r),
            (i = p(this, c(r).call(this, e, t))).props = f({}, t, {
                id: t.id || e && e.getAttribute("data-modal-id") || we(),
                fill: t.fill || e && e.getAttribute("data-modal-fill"),
                fullScreen: t.fullScreen || e && e.getAttribute("data-modal-full-screen"),
                size: t.size || e && e.getAttribute("data-modal-size"),
                ariaLabel: t.ariaLabel || e && e.getAttribute("data-modal-aria-label"),
                closeAriaLabel: t.closeAriaLabel || e && e.getAttribute("data-modal-close-aria-label"),
                arrowNavigation: t.arrowNavigation || e && e.getAttribute("data-modal-arrow-navigation"),
                keepMounted: t.keepMounted || e && e.getAttribute("data-modal-keep-mounted")
            }),
            i.handlers = {
                "root@click": i._handleRootClick
            },
            i.modifiers = {
                active: "bui-modal--active",
                fill: "bui-modal--fill",
                fullScreen: "bui-modal--full-screen",
                large: "bui-modal--size-large",
                paddingLarge: "bui-modal--padding-large"
            },
            i.state = {
                template: t.template
            },
            i.selectors = {
                content: "#".concat(i.props.id),
                contentWrapper: '[data-bui-ref~="modal-content-wrapper"]',
                close: '[data-bui-ref~="modal-close"]',
                title: '[data-bui-ref~="modal-title"]',
                subtitle: '[data-bui-ref~="modal-subtitle"]'
            },
            i))
        }
        return _i_("3da:b05d81ef"),
        _r_((i(r, ye),
        a(r, [{
            key: "_getModalTemplate",
            value: function() {
                return _i_("3da:e974d8d6"),
                _r_((t = (e = {
                    id: this.props.id,
                    ariaLabel: this.props.ariaLabel
                }).ariaLabel,
                j('\n    <div class="bui-modal" id="'.concat(e.id, '">\n        <div class="bui-modal__inner">\n            <div \n                class="bui-modal__slot" \n                data-bui-ref="modal-content-wrapper" \n                role="dialog" \n                aria-modal="true"\n                ').concat(t ? 'aria-label="'.concat(t, '"') : "", "\n            ></div>\n        </div>\n    </div>\n"))));
                var e, t
            }
        }, {
            key: "_getCloseTemplate",
            value: function() {
                return _i_("3da:8fef4b44"),
                _r_((e = {
                    closeAriaLabel: this.props.closeAriaLabel || "Close dialog"
                },
                j('\n  <button type="button" class="bui-modal__close" aria-label="'.concat(void 0 === (t = e.closeAriaLabel) ? "Close dialog" : t, '" data-bui-ref="modal-close">\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation">\n      <path\n        d="M13 12l6.26-6.26a.73.73 0 0 0-1-1L12 11 5.74 4.71a.73.73 0 1 0-1 1L11 12l-6.29 6.26a.73.73 0 0 0 .52 1.24.73.73 0 0 0 .51-.21L12 13l6.26 6.26a.74.74 0 0 0 1 0 .74.74 0 0 0 0-1z"/>\n    </svg>\n  </button>\n'))));
                var e, t
            }
        }, {
            key: "_showModal",
            value: function() {
                _i_("3da:fb6f07e0");
                var e = this
                  , t = this.props
                  , i = t.size
                  , n = t.fill
                  , a = t.fullScreen;
                o(c(r.prototype), "_showModal", this).call(this),
                requestAnimationFrame(function() {
                    _i_("3da:589106f5"),
                    requestAnimationFrame(function() {
                        _i_("3da:3b25e1b5"),
                        e.modalEl && (I(e.modalEl, e.modifiers.fill, !!n),
                        I(e.modalEl, e.modifiers.fullScreen, !!a),
                        i && "large" === i && B(e.modalEl, e.modifiers.large),
                        i && "large" !== i && (e.modalEl.style.width = "".concat(i, "px"),
                        I(e.modalEl, e.modifiers.paddingLarge, 780 <= i)),
                        B(e.modalEl, e.modifiers.active)),
                        _r_()
                    }),
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_hideModal",
            value: function() {
                _i_("3da:cea1a64a"),
                this.modalEl && S(this.modalEl, this.modifiers.active),
                o(c(r.prototype), "_hideModal", this).call(this),
                _r_()
            }
        }]),
        r))
    }();
    H.register("Modal", Ae);
    var Ie = void 0
      , Oe = !1
      , Me = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:5a6a15c9"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).props = {
                onBeforeClose: t.onBeforeClose,
                onAfterClose: t.onAfterClose,
                onBeforeOpen: t.onBeforeOpen,
                onAfterOpen: t.onAfterOpen,
                keepMounted: t.keepMounted || !1
            },
            i.handlers = {
                "window@keyup": i._handleKeyUp
            },
            i.modifiers = {
                active: "bui-overlay--active",
                lockScroll: "bui-overlay--lock-scroll",
                hidden: "bui-overlay--hidden"
            },
            i.selectors = {
                content: "[data-bui-ref=overlay-content]"
            },
            i.state = {
                active: !1,
                lockClose: t.lockClose
            },
            i.overlayEl = null,
            i.contentEl = null,
            i.close = i.close.bind(l(i)),
            i._handleOpenTransitionEnd = i._handleOpenTransitionEnd.bind(l(i)),
            i._handleCloseTransitionEnd = i._handleCloseTransitionEnd.bind(l(i)),
            i))
        }
        return _i_("3da:aa39dd0d"),
        _r_((i(n, t),
        a(n, [{
            key: "_handleKeyUp",
            value: function(e) {
                _i_("3da:b5b51a87"),
                27 === e.keyCode && this.state.active && this.close(),
                _r_()
            }
        }, {
            key: "_handleScroll",
            value: function() {
                _i_("3da:8d7136ef"),
                this.isScrolling = !0,
                _r_()
            }
        }, {
            key: "_handleMouseDown",
            value: function(e) {
                _i_("3da:1319d669"),
                this.contentEl && (this.isScrolling = !1,
                this.isMouseDownInsideModal = this.contentEl.contains(e.target)),
                _r_()
            }
        }, {
            key: "_handleMouseUp",
            value: function(e) {
                if (_i_("3da:5abb818d"),
                this.contentEl) {
                    var t = e.target
                      , i = this.contentEl.contains(t);
                    this.isMouseDownInsideModal || i || this.isScrolling || this.close(),
                    this.isScrolling = !1,
                    this.isMouseDownInsideModal = null
                }
                _r_()
            }
        }, {
            key: "_handleOpenTransitionEnd",
            value: function() {
                _i_("3da:986bf862"),
                this._toggleScrollLock(!1),
                this.overlayEl.removeEventListener("transitionend", this._handleOpenTransitionEnd),
                _r_()
            }
        }, {
            key: "_handleCloseTransitionEnd",
            value: function() {
                _i_("3da:d235ab3e");
                var e = this.props
                  , t = e.onAfterClose
                  , i = e.keepMounted;
                this.overlayEl.removeEventListener("transitionend", this._handleCloseTransitionEnd),
                this._releaseBodyScroll(),
                this._detachHandlers(),
                t && t(),
                i ? B(this.overlayEl, this.modifiers.hidden) : ($(this.overlayEl),
                this.contentEl = null,
                this.overlayEl = null),
                _r_()
            }
        }, {
            key: "_attachHandlers",
            value: function() {
                _i_("3da:a3f37019"),
                this.overlayEl.addEventListener("mousedown", this._handleMouseDown.bind(this)),
                this.overlayEl.addEventListener("mouseup", this._handleMouseUp.bind(this)),
                this.overlayEl.addEventListener("scroll", this._handleScroll.bind(this)),
                _r_()
            }
        }, {
            key: "_detachHandlers",
            value: function() {
                _i_("3da:9602996b"),
                this.overlayEl.removeEventListener("mousedown", this._handleMouseDown.bind(this)),
                this.overlayEl.removeEventListener("mouseup", this._handleMouseUp.bind(this)),
                this.overlayEl.removeEventListener("scroll", this._handleScroll.bind(this)),
                _r_()
            }
        }, {
            key: "_toggleScrollLock",
            value: function(e) {
                _i_("3da:be3170b7"),
                I(this.overlayEl, this.modifiers.lockScroll, e),
                _r_()
            }
        }, {
            key: "_openOverlay",
            value: function() {
                _i_("3da:fe3e9368");
                var e = this
                  , t = this.props
                  , i = t.onBeforeOpen
                  , n = t.onAfterOpen;
                this.overlayEl ? S(this.overlayEl, this.modifiers.hidden) : (this.overlayEl = j('\n<div class="bui-overlay">\n    <div class="bui-overlay__wrapper">\n        <div class="bui-overlay__align">\n            <div class="bui-overlay__content" data-bui-ref="overlay-content"></div>\n        </div>\n    </div>\n</div>\n'),
                document.body.appendChild(this.overlayEl)),
                this.contentEl = y(this.selectors.content, this.overlayEl),
                this._toggleScrollLock(!0),
                i && i(),
                requestAnimationFrame(function() {
                    _i_("3da:dca921b8"),
                    requestAnimationFrame(function() {
                        _i_("3da:1d903c55"),
                        B(e.overlayEl, e.modifiers.active),
                        e._adjustScroll(),
                        e._preventBodyScroll(),
                        e._attachHandlers(),
                        e.overlayEl.addEventListener("transitionend", e._handleOpenTransitionEnd),
                        n && n(),
                        _r_()
                    }),
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_closeOverlay",
            value: function() {
                _i_("3da:29000b76");
                var e = this.props.onBeforeClose;
                e && e(),
                this._toggleScrollLock(!0),
                this.overlayEl.addEventListener("transitionend", this._handleCloseTransitionEnd),
                S(this.overlayEl, this.modifiers.active),
                _r_()
            }
        }, {
            key: "_adjustScroll",
            value: function() {
                _i_("3da:5a68aeaf");
                var e = this;
                P(function() {
                    _i_("3da:d6c0dcaa"),
                    e.overlayEl.scrollTop = 0,
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_preventBodyScroll",
            value: function() {
                _i_("3da:303a86c7");
                var e, t = D(document.body);
                if (this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                e = document.body.style.overflow,
                Oe || (Ie = e),
                Oe = !0,
                document.body.style.overflow = "hidden",
                this._isBodyOverflowing) {
                    var i = (_i_("3da:008fad92"),
                    _r_(m || (m = function() {
                        _i_("3da:90cabb1c");
                        var e = document.createElement("div");
                        e.style.position = "absolute",
                        e.style.top = "-9999px",
                        e.style.width = "50px",
                        e.style.height = "50px",
                        e.style.overflow = "scroll",
                        document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return _r_((document.body.removeChild(e),
                        t))
                    }())));
                    document.body.style.paddingRight = "".concat(i, "px")
                }
                _r_()
            }
        }, {
            key: "_releaseBodyScroll",
            value: function() {
                _i_("3da:60e0790c"),
                document.body.style.overflow = Ie,
                this._isBodyOverflowing && (document.body.style.paddingRight = ""),
                _r_()
            }
        }, {
            key: "lockClose",
            value: function() {
                _i_("3da:5229f042"),
                this.setState({
                    lockClose: !0
                }),
                _r_()
            }
        }, {
            key: "unlockClose",
            value: function() {
                _i_("3da:a44b9b50"),
                this.setState({
                    lockClose: !1
                }),
                _r_()
            }
        }, {
            key: "getLockCloseState",
            value: function() {
                return _i_("3da:80b77705"),
                _r_(this.state.lockClose)
            }
        }, {
            key: "open",
            value: function() {
                _i_("3da:7668a46a"),
                this.setState({
                    active: !0
                }),
                this._openOverlay(),
                _r_()
            }
        }, {
            key: "close",
            value: function() {
                _i_("3da:68e3de2f");
                var e = this.state
                  , t = e.lockClose
                  , i = e.active;
                !t && i && (this.setState({
                    active: !1
                }),
                this._closeOverlay()),
                _r_()
            }
        }, {
            key: "updateContent",
            value: function(e) {
                if (_i_("3da:21be64e3"),
                !this.contentEl)
                    throw new Error("\n          You're trying to update overlay content while it's not in the DOM.\n          Most likely you should call it after overlay was opened or in component handlers.\n      ");
                ve(this.contentEl, {
                    templates: [e]
                }),
                _r_()
            }
        }]),
        n))
    }();
    H.register("Overlay", Me);
    var Ne = function(e) {
        function u(e, t) {
            var i;
            return _i_("3da:e0553269"),
            _r_((d(this, u),
            (i = p(this, c(u).call(this, e, t))).props = {
                total: t.total || +e.getAttribute("data-total"),
                activeIndex: t.activeIndex || +e.getAttribute("data-active-index") || 0
            },
            i.handlers = {
                "state@activeIndex": i._updateSelection
            },
            i.modifiers = {
                itemActive: "bui-pagination-indicator__item--active",
                itemSmall: "bui-pagination-indicator__item--size-small",
                itemSmaller: "bui-pagination-indicator__item--size-smaller",
                itemHidden: "bui-pagination-indicator__item--hidden",
                ghostStart: "bui-pagination-indicator--ghost-start",
                ghostEnd: "bui-pagination-indicator--ghost-end",
                notAnimated: "bui-pagination-indicator--not-animated"
            },
            i.selectors = {
                item: "[data-bui-ref=pagination-indicator-item]",
                container: "[data-bui-ref=pagination-indicator-container]"
            },
            i.state = {
                activeIndex: i.props.activeIndex,
                startIndex: i._getStartIndex(i.props.activeIndex)
            },
            i.container = null,
            i.itemEls = [],
            i._handleContainerTransition = i._handleContainerTransition.bind(l(i)),
            i))
        }
        return _i_("3da:87157ddc"),
        _r_((i(u, t),
        a(u, [{
            key: "onMount",
            value: function() {
                _i_("3da:334dc4ad"),
                this._renderItems(),
                this._updateSelection(),
                _r_()
            }
        }, {
            key: "onUnmount",
            value: function() {
                _i_("3da:6274c546"),
                this.container && this.container.removeEventListener("transitionend", this._handleContainerTransition),
                _r_()
            }
        }, {
            key: "_getStartIndex",
            value: function(e) {
                _i_("3da:e9bf4092");
                var t = this.props.total
                  , i = t - 1;
                return _r_(this._isStatic() ? 0 : e <= u.threshold ? 0 : i - u.threshold <= e ? t - u.maxAmount : e - u.threshold)
            }
        }, {
            key: "_getDirection",
            value: function(e) {
                return _i_("3da:450c90aa"),
                _r_(e - this.state.activeIndex < 0 ? "start" : "end")
            }
        }, {
            key: "_isStatic",
            value: function() {
                return _i_("3da:6ddc2091"),
                _r_(this.props.total <= u.maxAmount)
            }
        }, {
            key: "_renderItems",
            value: function() {
                _i_("3da:5d92cbd3");
                for (var e = this.props.total, t = Math.min(u.maxAmount, e), i = "", n = 0; n < t; n++)
                    i += '<div class="bui-pagination-indicator__item" data-bui-ref="pagination-indicator-item"></div>';
                this.root.innerHTML = '<div class="bui-pagination-indicator__container" data-bui-ref="pagination-indicator-container">'.concat(i, "</div>"),
                this.container = this.root.querySelector(this.selectors.container),
                this.itemEls = w(this.selectors.item, this.root),
                this.container.addEventListener("transitionend", this._handleContainerTransition),
                _r_()
            }
        }, {
            key: "_addGhost",
            value: function(e) {
                _i_("3da:508935f6");
                var t = this.modifiers
                  , i = t.ghostStart
                  , n = t.ghostEnd
                  , a = "start" === e ? i : n;
                this.root.classList.add(a),
                _r_()
            }
        }, {
            key: "_removeGhost",
            value: function() {
                _i_("3da:52bfece8");
                var e, t = this.state.activeIndex, i = this.modifiers, n = i.ghostStart, a = i.ghostEnd, r = i.notAnimated, o = this.root.classList;
                o.add(r),
                o.remove(n, a),
                this.setState({
                    startIndex: this._getStartIndex(t)
                }),
                this._updateSelection(),
                e = function() {
                    return _i_("3da:ee02f581"),
                    _r_(o.remove(r))
                }
                ,
                window.requestAnimationFrame(function() {
                    _i_("3da:952fb4b3"),
                    window.requestAnimationFrame(function() {
                        _i_("3da:cc4e062b"),
                        e(),
                        _r_()
                    }),
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_handleContainerTransition",
            value: function(e) {
                _i_("3da:3c668aed"),
                e.target === this.container && this._removeGhost(),
                _r_()
            }
        }, {
            key: "_updateSelection",
            value: function() {
                _i_("3da:ea7c4408");
                var o = this
                  , e = this.props.total
                  , t = this.state
                  , i = t.activeIndex
                  , n = t.startIndex
                  , _ = this._isStatic()
                  , a = e - 1
                  , s = i - n
                  , r = Math.max(u.threshold - i, 0)
                  , d = Math.max(u.threshold - (a - i), 0)
                  , c = s + r + 1
                  , l = s - d - 1;
                this.itemEls.forEach(function(e, t) {
                    _i_("3da:97c2f9ea");
                    var i = t === s;
                    if (I(e, o.modifiers.itemActive, i),
                    !_) {
                        var n = t === c + 1 || t === l - 1
                          , a = t === c + 2 || t === l - 2
                          , r = c + 2 < t || t < l - 2;
                        I(e, o.modifiers.itemSmall, n),
                        I(e, o.modifiers.itemSmaller, a),
                        I(e, o.modifiers.itemHidden, r)
                    }
                    _r_()
                }),
                _r_()
            }
        }, {
            key: "_navigate",
            value: function(e) {
                _i_("3da:a4de465a");
                var t = this.props.total
                  , i = this._getDirection(e)
                  , n = this._isStatic()
                  , a = t - 1 - u.threshold
                  , r = e < u.threshold || "end" === i && e === u.threshold || a < e || "start" === i && e === a;
                if (this.setState({
                    activeIndex: e
                }),
                n || r)
                    return _r_((this.setState({
                        startIndex: this._getStartIndex(e)
                    }),
                    void this._updateSelection()));
                this._addGhost(i),
                _r_()
            }
        }, {
            key: "navigate",
            value: function(e) {
                _i_("3da:b777ff86"),
                this._navigate(e),
                _r_()
            }
        }, {
            key: "navigateNext",
            value: function() {
                _i_("3da:f3dea546");
                var e = this.state.activeIndex + 1;
                e > this.props.total - 1 && (e = 0),
                this._navigate(e),
                _r_()
            }
        }, {
            key: "navigatePrev",
            value: function() {
                _i_("3da:dcea0984");
                var e = this.state.activeIndex
                  , t = this.props.total
                  , i = e - 1;
                i < 0 && (i = t - 1),
                this._navigate(i),
                _r_()
            }
        }]),
        u))
    }();
    Ne.maxAmount = 7,
    Ne.threshold = (Ne.maxAmount - 1) / 2,
    H.register("PaginationIndicator", Ne);
    var $e = function() {
        return _i_("3da:4ec763be"),
        _r_(document.documentElement && document.documentElement.offsetWidth < 768)
    }
      , De = ["bottom right", "bottom", "bottom left", "top right", "top", "top left"]
      , Le = {
        left: "right",
        right: "left",
        start: "end",
        end: "start",
        "top start": "top end",
        "top end": "top start",
        "top left": "top right",
        "top right": "top left",
        "bottom end": "bottom start",
        "bottom start": "bottom end",
        "bottom left": "bottom right",
        "bottom right": "bottom left"
    };
    function je(e, t) {
        return _i_("3da:a28435a7"),
        _r_(Math.floor(e + (t - e) / 2))
    }
    function Pe(e, t, i) {
        _i_("3da:1eecc5aa");
        var n, a, r, o = i.position, _ = i.offset;
        switch (ne() && (o = Le[o] || o),
        $e() && -1 !== ["left", "right", "start", "end"].indexOf(o) && (o = "top"),
        o) {
        case "bottom":
            n = je(e.left, e.right) - t.width / 2,
            a = e.bottom + _;
            break;
        case "top":
            n = je(e.left, e.right) - t.width / 2,
            a = e.top - t.height - _;
            break;
        case "start":
        case "left":
            n = e.left - _ - t.width,
            a = je(e.top, e.bottom) - t.height / 2;
            break;
        case "end":
        case "right":
            n = e.right + _,
            a = je(e.top, e.bottom) - t.height / 2;
            break;
        case "top start":
        case "top left":
            n = e.left,
            a = e.top - _ - t.height;
            break;
        case "top end":
        case "top right":
            n = e.right - t.width,
            a = e.top - _ - t.height;
            break;
        case "bottom start":
        case "bottom left":
            n = e.left,
            a = e.bottom + _;
            break;
        case "bottom end":
        case "bottom right":
            n = e.right - t.width,
            a = e.bottom + _;
            break;
        default:
            return _r_("object" === ("undefined" == typeof console ? "undefined" : s(console)) && console.warn('"' + o + '" is not a valid position'))
        }
        return _r_((a += window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        r = (n += window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0) + t.width,
        {
            top: a,
            left: n,
            bottom: a + t.height,
            right: r
        }))
    }
    var Re = function(e, t, i) {
        _i_("3da:29678e57");
        var n = i.position
          , a = void 0 === n ? "bottom" : n
          , r = i.offset
          , o = void 0 === r ? 8 : r
          , _ = i.done
          , s = function(i, n, e) {
            _i_("3da:b2b2004a");
            var t = e.position
              , a = e.offset
              , r = Pe(i, n, {
                position: t,
                offset: a
            });
            return _r_((r.position = t,
            L(r, a) || (/left/.test(t) ? De.slice(0).reverse() : De).some(function(e) {
                _i_("3da:9bdb21b5");
                var t = Pe(i, n, {
                    position: e,
                    offset: a
                });
                if (L(t, a))
                    return _r_(((r = t).position = e,
                    !0));
                _r_()
            }),
            r))
        }(D(t), D(e), {
            position: a,
            offset: o
        });
        s.top && (e.style.top = Math.round(s.top) + "px"),
        s.left && (e.style.left = Math.round(s.left) + "px"),
        "function" == typeof _ && _(s),
        _r_()
    }
      , He = 400
      , qe = function(e) {
        var t;
        if (_i_("3da:247c5021"),
        "modal" !== e && "drawer" !== e || (t = He),
        t)
            return _r_(t + 1);
        _r_()
    }
      , Fe = "data-popover-content-id"
      , Ve = "data-popover-position"
      , Ue = "data-popover-no-arrow"
      , We = "data-popover-trigger"
      , ze = "data-popover-stretch"
      , Ge = "data-popover-z-index"
      , Ke = "data-popover-hide-close"
      , Ye = "data-popover-arrow-navigation"
      , Je = "data-popover-trap-focus"
      , Xe = function(e) {
        function _(e, t) {
            var i;
            _i_("3da:0858a10a"),
            d(this, _),
            i = p(this, c(_).call(this, e, t));
            var n = t.zIndex || e.getAttribute(Ge)
              , a = qe(n) || n
              , r = e.getAttribute(Je)
              , o = !0;
            switch (r && (o = "false" !== r),
            "boolean" == typeof t.trapFocus && (o = t.trapFocus),
            i.props = h({}, t, {
                noArrow: t.noArrow || !!e.hasAttribute(Ue),
                position: t.position || e.getAttribute(Ve),
                trigger: t.trigger || e.getAttribute(We) || "hover",
                stretch: t.stretch || !!e.getAttribute(ze),
                zIndex: a,
                contentId: t.contentId || e.getAttribute(Fe),
                arrowNavigation: t.arrowNavigation || e.getAttribute(Ye),
                hideClose: t.hideClose || e.getAttribute(Ke),
                trapFocus: o
            }),
            i.modifiers = {
                hidden: "bui-u-hidden",
                stretch: "bui-popover--stretch"
            },
            i.state = {
                active: !1,
                lockClose: t.lockClose
            },
            i.handlers = {},
            i.selectors = {
                close: '[data-bui-ref~="popover-close"]'
            },
            i.props.trigger) {
            case "click":
                i.handlers["root@click"] = i._handleClick,
                i.handlers["window@click"] = i._handleOutsideClick,
                i.handlers["state@active"] = i._handleActiveState;
                break;
            case "hover":
            default:
                i.handlers["root@mouseenter"] = i._handleEnter,
                i.handlers["root@mouseleave"] = i._handleLeave,
                i.handlers["root@focus"] = i._handleEnter,
                i.handlers["root@blur"] = i._handleLeave
            }
            return _r_((i.id = we(),
            i.position = null,
            i.leaveTimer = null,
            i.enterTimer = null,
            i.trap = null,
            i._handleResize = T(i._handleResize.bind(l(i)), 100),
            i._handleKeyDown = i._handleKeyDown.bind(l(i)),
            i))
        }
        return _i_("3da:5b2aae91"),
        _r_((i(_, t),
        a(_, [{
            key: "_updateContainer",
            value: function() {
                _i_("3da:1f610b97");
                var e = document.createElement("div");
                e.setAttribute("role", "tooltip"),
                e.style.position = "absolute",
                e.id = this.id,
                this.container = e;
                var t = document.createElement("div");
                t.className = "bui-popover__arrow",
                this.arrow = t,
                _r_()
            }
        }, {
            key: "_handleActiveState",
            value: function() {
                _i_("3da:b5575848"),
                this.state.active ? (this.closeEl = y(this.selectors.close, this.container),
                this._attachListeners()) : this._removeListeners(),
                _r_()
            }
        }, {
            key: "_handleResize",
            value: function() {
                _i_("3da:a17c556c"),
                this._position(),
                _r_()
            }
        }, {
            key: "_handleKeyDown",
            value: function(e) {
                _i_("3da:930624f7"),
                this.state.active && 27 === e.keyCode && this.close(),
                _r_()
            }
        }, {
            key: "_attachListeners",
            value: function() {
                _i_("3da:dfd75f19");
                var e = this;
                this.closeEl && k(this.closeEl, "click", function() {
                    return _i_("3da:4aa9b7f0"),
                    _r_(e.close())
                }),
                _r_()
            }
        }, {
            key: "_removeListeners",
            value: function() {
                _i_("3da:fe126514"),
                this.closeEl && C(this.closeEl, "click"),
                _r_()
            }
        }, {
            key: "_hasFocusTrapping",
            value: function() {
                return _i_("3da:d01be0ea"),
                _r_("click" === this.props.trigger)
            }
        }, {
            key: "_handleClick",
            value: function() {
                _i_("3da:fc37f6ad"),
                this.state.active ? this.close() : this.open(),
                _r_()
            }
        }, {
            key: "_handleOutsideClick",
            value: function(e) {
                if (_i_("3da:ea078b25"),
                this.container) {
                    var t = this.root === e.target || this.root.contains(e.target)
                      , i = this.container === e.target || this.container.contains(e.target);
                    t || i || this.close({
                        withoutFocusReturn: !0
                    })
                }
                _r_()
            }
        }, {
            key: "_handleEnter",
            value: function() {
                _i_("3da:f27c1c35");
                var e = this;
                this._clearTimeout(),
                this.enterTimer = setTimeout(function() {
                    return _i_("3da:2abf28b5"),
                    _r_(e.open())
                }, 100),
                _r_()
            }
        }, {
            key: "_handleLeave",
            value: function() {
                _i_("3da:39c30b52"),
                this._clearTimeout(),
                this.leaveTimer = setTimeout(this.close.bind(this), 250),
                _r_()
            }
        }, {
            key: "_clearTimeout",
            value: function() {
                _i_("3da:41f67918"),
                this.leaveTimer && clearTimeout(this.leaveTimer),
                this.enterTimer && clearTimeout(this.enterTimer),
                _r_()
            }
        }, {
            key: "_getPositionClass",
            value: function(e) {
                _i_("3da:80e7e2bb");
                var t = e.replace(" ", "-").replace("left", "start").replace("right", "end");
                return _r_("bui-popover--".concat(t))
            }
        }, {
            key: "_position",
            value: function(e) {
                _i_("3da:0f811384");
                var i = this
                  , t = (e || {}).noReset;
                this.position && this.container && !t && S(this.container, this._getPositionClass(this.position)),
                Re(this.container, this.root, {
                    position: this.props.position,
                    offset: 16,
                    done: function(e) {
                        _i_("3da:14c10ff6");
                        var t = e.position;
                        B(i.container, i._getPositionClass(t)),
                        i.position = t,
                        _r_()
                    }
                }),
                $e() && (this.container.style.left = "16px",
                this.container.style.right = "16px"),
                _r_()
            }
        }, {
            key: "lockClose",
            value: function() {
                _i_("3da:5229f0421"),
                this.setState({
                    lockClose: !0
                }),
                _r_()
            }
        }, {
            key: "unlockClose",
            value: function() {
                _i_("3da:a44b9b501"),
                this.setState({
                    lockClose: !1
                }),
                _r_()
            }
        }, {
            key: "open",
            value: function() {
                _i_("3da:c2df8339");
                var e = this;
                if (!this.state.active) {
                    this._updateContainer();
                    var t, i, n = this.root, a = this.container, r = this.arrow, o = this.props, _ = o.onAfterOpen, s = o.onAfterToggle, d = o.onBeforeOpen, c = o.onBeforeToggle, l = o.zIndex, u = o.arrowNavigation, f = o.contentId && y("#".concat(o.contentId));
                    this.content = o.content || f && f.cloneNode(!0),
                    this.content && (d && d.call(this),
                    c && c.call(this),
                    "hover" === o.trigger && (k(this.content, "mouseenter", function() {
                        return _i_("3da:23d7a504"),
                        _r_(e._clearTimeout())
                    }),
                    k(this.content, "mouseleave", function() {
                        return _i_("3da:dcf59116"),
                        _r_(e._handleLeave())
                    })),
                    k(window, "resize", this._handleResize),
                    k(document, "keydown", this._handleKeyDown),
                    n.setAttribute("aria-describedby", a.id),
                    a.appendChild(this.content),
                    a.appendChild(r),
                    a.style.opacity = "0",
                    B(a, "bui-popover"),
                    S(this.content, this.modifiers.hidden),
                    this.content.style.display = "block",
                    I(this.arrow, this.modifiers.hidden, o.noArrow || $e()),
                    I(a, this.modifiers.stretch, o.stretch),
                    document.body.appendChild(a),
                    this._position(),
                    a.style.opacity = "1",
                    l && (a.style.zIndex = l),
                    this.setState({
                        active: !0
                    }),
                    _ && _.call(this),
                    s && s.call(this),
                    this.observer = (t = function() {
                        return _i_("3da:280e0288"),
                        _r_(e._position({
                            noReset: !0
                        }))
                    }
                    ,
                    window.MutationObserver ? (i = new MutationObserver(t),
                    {
                        start: function(e) {
                            _i_("3da:bb680af8");
                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            i.observe(e, h({
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            }, t)),
                            _r_()
                        },
                        stop: function() {
                            return _i_("3da:03e24bdb"),
                            _r_(i.disconnect())
                        }
                    }) : {
                        start: function() {},
                        stop: function() {}
                    }),
                    this.observer.start(this.content),
                    this._hasFocusTrapping() && (this.trap = ge(a, {
                        mode: o.trapFocus ? this.closeEl ? "hard" : "soft" : "linear",
                        onRelease: this.close.bind(this),
                        arrowNavigation: u
                    })))
                }
                _r_()
            }
        }, {
            key: "close",
            value: function(e) {
                if (_i_("3da:890161be"),
                !this.state.lockClose && this.state.active) {
                    var t = (e || {}).withoutFocusReturn
                      , i = this.props
                      , n = i.onAfterClose
                      , a = i.onAfterToggle
                      , r = i.onBeforeClose
                      , o = i.onBeforeToggle;
                    r && r.call(this),
                    o && o.call(this),
                    this._clearTimeout(),
                    C(this.content, "mouseenter"),
                    C(this.content, "mouseleave"),
                    C(window, "resize", this._handleResize),
                    C(document, "keydown", this._handleKeyDown),
                    document.body.removeChild(this.container),
                    this.content = null,
                    this.container.innerHTML = "",
                    this.setState({
                        active: !1
                    }),
                    this.trap && this.trap.release && (this.trap.release({
                        withoutFocusReturn: t
                    }),
                    this.trap = null),
                    this.observer && this.observer.stop(),
                    n && n.call(this),
                    a && a.call(this)
                }
                _r_()
            }
        }]),
        _))
    }();
    H.register("Popover", Xe);
    var Ze = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:c6eee26e"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).modifiers = {
                focused: "bui-segmented-control--focused"
            },
            i.selectors = {
                radio: "[data-bui-ref=segmented-control-radio]",
                select: "[data-bui-ref=segmented-control-select]"
            },
            i.handlers = {
                "radio@change": i._handleRadioChange,
                "select@change": i._handleSelectChange,
                "select@focus": i._handleSelectFocus,
                "select@blur": i._handleSelectBlur,
                "state@value": i._handleValueChange
            },
            i.state = {
                value: null
            },
            i))
        }
        return _i_("3da:58dc95e9"),
        _r_((i(n, t),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:11d69a48"),
                this.radioEls = w(this.selectors.radio, this.root),
                this.selectEl = y(this.selectors.select, this.root),
                this.radioArray = [].slice.call(this.radioEls),
                this.radioArray.length && this.selectEl && this.setState({
                    value: this._getCheckedRadio()
                }),
                _r_()
            }
        }, {
            key: "_getCheckedRadio",
            value: function() {
                _i_("3da:cf5f7d03");
                var e = this.radioArray.filter(function(e) {
                    return _i_("3da:21de9696"),
                    _r_(e.hasAttribute("checked"))
                })[0];
                return _r_(this._getRadioValue(e))
            }
        }, {
            key: "_getRadioValue",
            value: function(e) {
                return _i_("3da:867b5a0d"),
                _r_(e && e.value)
            }
        }, {
            key: "_getSelectValue",
            value: function() {
                return _i_("3da:af0fa121"),
                _r_(this.selectEl.value)
            }
        }, {
            key: "_handleRadioChange",
            value: function(e) {
                if (_i_("3da:76c7b567"),
                this.selectEl) {
                    var t = e && e.target || null
                      , i = this._getRadioValue(t);
                    this.setState({
                        value: i
                    })
                }
                _r_()
            }
        }, {
            key: "_handleSelectChange",
            value: function() {
                if (_i_("3da:9b306a0b"),
                this.radioArray.length) {
                    var e = this._getSelectValue();
                    this.setState({
                        value: e
                    })
                }
                _r_()
            }
        }, {
            key: "_handleSelectFocus",
            value: function() {
                _i_("3da:515974cf"),
                B(this.root, this.modifiers.focused),
                _r_()
            }
        }, {
            key: "_handleSelectBlur",
            value: function() {
                _i_("3da:a69e2ccc"),
                S(this.root, this.modifiers.focused),
                _r_()
            }
        }, {
            key: "_handleValueChange",
            value: function() {
                _i_("3da:bfee679c");
                var t = this.state.value
                  , e = this.props.onChange;
                t && (this.selectEl.value = t),
                t ? this.radioArray.forEach(function(e) {
                    _i_("3da:27597b6d"),
                    e.value === t ? (e.checked = !0,
                    e.setAttribute("checked", "")) : e.removeAttribute("checked"),
                    _r_()
                }) : this.radioArray.forEach(function(e) {
                    _i_("3da:6d0add13"),
                    e.hasAttribute("checked") && (e.checked = !1,
                    e.removeAttribute("checked")),
                    _r_()
                }),
                e && e.call(this, {
                    value: t
                }),
                _r_()
            }
        }]),
        n))
    }();
    H.register("SegmentedControl", Ze);
    var Qe = "data-tab-id"
      , et = "aria-selected"
      , tt = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:f63fac1a"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).props = h({}, t, {
                itemsToShow: t.itemsToShow || e.getAttribute("data-items-to-show") || void 0,
                moreTranslation: t.moreTranslation || e.getAttribute("data-more-translation")
            }),
            i.selectors = {
                item: "[data-bui-ref=tab-item]",
                items: "[data-bui-ref=tab-items]",
                content: "[data-bui-ref=tab-content]",
                more: "[data-bui-ref=tab-more]",
                moreButton: "[data-bui-ref=tab-more-button]",
                moreContent: "[data-bui-ref=tab-more-content]",
                text: "[data-bui-ref=tab-text]",
                title: "[data-bui-ref=tab-title]",
                icon: "[data-bui-ref=tab-icon]",
                textSlot: "[data-bui-ref=tab-text-slot]",
                button: "[data-bui-ref=tab-button]"
            },
            i.modifiers = {
                buttonActive: "bui-tab__link--selected",
                itemHidden: "bui-tab__item--hidden",
                moreActive: "bui-tab__item--more-active",
                moreDropdownActive: "bui-tab__item--more-dropdown-active",
                contentActive: "bui-tab__content--selected",
                equal: "bui-tab--equal"
            },
            i.handlers = {
                "button@click": i._handleButtonClick,
                "button@keyup": i._handleKeyboardEvents,
                "window@resize": T(i._handleResize, 10)
            },
            i.dropdownInstance = null,
            i.state = {
                visibleButtons: 0,
                moreWidth: 0,
                currentTabIndex: 0
            },
            i))
        }
        return _i_("3da:9b387a78"),
        _r_((i(n, t),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:0eba017a");
                var e = this.root
                  , t = this.props.itemsToShow;
                if (this.elItems = y(this.selectors.items, e),
                this.elsItem = w(this.selectors.item, e),
                this.elsContent = w(this.selectors.content, e),
                this.elsButton = w(this.selectors.button, e),
                this.elMore = y(this.selectors.more, e),
                this.elMoreContent = y(this.selectors.moreContent, e),
                this.elMoreButton = y(this.selectors.moreButton, e),
                void 0 !== t && this.elMore) {
                    var i = "".concat(100 / t, "%");
                    this.elsItem.forEach(function(e) {
                        return _i_("3da:a8d30a68"),
                        _r_(e.style.width = i)
                    }),
                    this.elMore.style.width = i,
                    B(e, this.modifiers.equal)
                }
                if (this.setState({
                    visibleButtons: this.elsButton.length
                }),
                !this.props.moreTranslation && this.elMore)
                    throw new Error("BUI: [Tab] Translation is not provided for More button");
                this.elMoreButton && (this.elMoreButton.innerHTML = '<span class="bui-tab__text">'.concat(this.props.moreTranslation, "</span>")),
                this._getMoreWidth(),
                this._toggleMore();
                var n = y(".".concat(this.modifiers.buttonActive), this.root);
                if (this.elItems && n) {
                    var a = n.offsetLeft;
                    if (a < this.elItems.clientWidth - 32)
                        return _r_();
                    if (0 === a)
                        return _r_();
                    this.elItems.scroll(a - 32, 0)
                }
                _r_()
            }
        }, {
            key: "_handleButtonClick",
            value: function(e) {
                _i_("3da:94d61e1a");
                var t = e.delegateTarget.getAttribute(Qe);
                t && this.changeTab(t),
                _r_()
            }
        }, {
            key: "_handleDropdownItemChoose",
            value: function(e) {
                _i_("3da:4d55fbf4");
                var t = e.event
                  , i = t.delegateTarget.getAttribute(Qe);
                i && (t.preventDefault(),
                this.changeTab(i)),
                _r_()
            }
        }, {
            key: "_handleResize",
            value: function() {
                _i_("3da:435aa961"),
                void 0 === this.props.itemsToShow && this._toggleMore(),
                _r_()
            }
        }, {
            key: "_toggleMore",
            value: function() {
                _i_("3da:98d3938e");
                var o = this
                  , e = this.props.itemsToShow
                  , _ = this.state.moreWidth;
                if (this.elMore)
                    if (void 0 === e && $e())
                        this.elsItem.forEach(function(e) {
                            return _i_("3da:27247440"),
                            _r_(S(e, o.modifiers.itemHidden))
                        });
                    else {
                        var s = !1
                          , d = 0
                          , c = this.root.clientWidth
                          , l = [];
                        this.elsItem.forEach(function(e, t) {
                            _i_("3da:cb40076a");
                            var i = o.elsButton[t];
                            S(e, o.modifiers.itemHidden);
                            var n = (d += e.clientWidth) > c;
                            if (n && !s && c < d + _) {
                                var a = o.elsItem[t - 1]
                                  , r = o.elsButton[t - 1];
                                B(a, o.modifiers.itemHidden),
                                l.push(r)
                            }
                            n && (s = !0),
                            s && l.push(i),
                            I(e, o.modifiers.itemHidden, s),
                            _r_()
                        }),
                        this.state.visibleButtons !== l.length && (this.setState({
                            visibleButtons: l.length
                        }),
                        this.elMoreContent.innerHTML = function(e, t) {
                            _i_("3da:7b2bfdcc");
                            var d = t.selectors
                              , c = {
                                class: "bui-dropdown-menu__button",
                                "data-bui-ref": "dropdown-item",
                                tabindex: "0",
                                role: "tab"
                            }
                              , i = e.map(function(e) {
                                _i_("3da:44bf6281");
                                var t = [].slice.call(e.attributes).reduce(function(e, t) {
                                    return _i_("3da:9005b947"),
                                    _r_(f({}, e, u({}, t.name, t.value)))
                                }, {})
                                  , i = e.getAttribute("data-classname")
                                  , n = h({}, t, c)
                                  , a = e.querySelector(d.text) || e
                                  , r = e.querySelector(d.icon)
                                  , o = e.querySelector(d.title)
                                  , _ = e.querySelector(d.textSlot);
                                i && (n.class = "".concat(c.class, " ").concat(i));
                                var s = Object.keys(n).reduce(function(e, t) {
                                    return _i_("3da:0cc13b47"),
                                    _r_("style" === t ? e : "".concat(e, " ").concat(t, '="').concat(n[t], '"'))
                                }, "");
                                return _r_({
                                    text: a.innerText,
                                    icon: r && r.innerHTML,
                                    title: o && o.innerText,
                                    textSlot: _ && _.innerHTML,
                                    tagName: n.href ? "a" : "button",
                                    attrString: s
                                })
                            });
                            return _r_('\n        <div class="bui-dropdown-menu" data-bui-ref="dropdown-menu" role="menu">\n            <ul class="bui-dropdown-menu__items">\n                '.concat(i.map(function(e) {
                                return _i_("3da:9d255f9b"),
                                _r_('\n                    <li class="bui-dropdown-menu__item">\n                        <'.concat(e.tagName, " ").concat(e.attrString, ">\n                            ").concat(e.icon ? '<span class="bui-icon bui-dropdown-menu__icon">'.concat(e.icon, "</span>") : "", '\n                            <span class="bui-dropdown-menu__text">').concat(e.text, "</span>\n                            ").concat(e.textSlot ? '<span class="bui-dropdown-menu__text-slot">'.concat(e.textSlot, "</span>") : "", "\n                            ").concat(e.title ? '<span class="bui-dropdown-menu__end-slot">'.concat(e.title, "</span>") : "", "\n                        </").concat(e.tagName, ">\n                    </li>\n                "))
                            }).join(""), "\n            </ul>\n        </div>\n    "))
                        }(l, this),
                        I(this.elMore, this.modifiers.moreActive, s)),
                        s && this._createDropdownInstance()
                    }
                _r_()
            }
        }, {
            key: "_getMoreWidth",
            value: function() {
                _i_("3da:be662828"),
                this.elMore && (B(this.elMore, this.modifiers.moreActive),
                this.setState({
                    moreWidth: this.elMore.clientWidth
                }),
                S(this.elMore, this.modifiers.moreActive)),
                _r_()
            }
        }, {
            key: "_createDropdownInstance",
            value: function() {
                _i_("3da:9f9ac061"),
                this.elMore && (this.dropdownInstance && this.dropdownInstance.unmount(),
                this.dropdownInstance = q("Dropdown", this.elMore, {
                    modifiers: {
                        active: this.modifiers.moreDropdownActive
                    },
                    selectors: {
                        button: this.selectors.moreButton,
                        slot: this.selectors.moreContent
                    },
                    onItemChoose: this._handleDropdownItemChoose.bind(this)
                }),
                this.dropdownInstance.mount()),
                _r_()
            }
        }, {
            key: "_handleKeyboardEvents",
            value: function(e) {
                _i_("3da:186fa2cf");
                var t = this;
                if (this.elsButton && !(this.elsButton.length <= 1)) {
                    var i = e.keyCode
                      , n = this.elsButton.length - 1
                      , a = this.state.currentTabIndex === n ? 0 : this.state.currentTabIndex + 1
                      , r = 0 === this.state.currentTabIndex ? n : this.state.currentTabIndex - 1
                      , o = function(e) {
                        return _i_("3da:d07bba80"),
                        _r_(t.elsButton[e].getAttribute(Qe))
                    };
                    switch (i) {
                    case 39:
                        this.changeTab(o(a));
                        break;
                    case 37:
                        this.changeTab(o(r));
                        break;
                    case 36:
                        this.changeTab(o(0));
                        break;
                    case 35:
                        this.changeTab(o(n))
                    }
                }
                _r_()
            }
        }, {
            key: "changeTab",
            value: function(n) {
                _i_("3da:900fe9e4");
                var i, a, r = this, e = this.props.onAfterTabChange, t = this.modifiers, o = t.buttonActive, _ = t.contentActive;
                this.elsButton.forEach(function(e, t) {
                    _i_("3da:dcd4a7f7");
                    var i = e.getAttribute(Qe);
                    S(e, o),
                    i === n && (a = e,
                    r.setState({
                        currentTabIndex: t
                    })),
                    _r_()
                }),
                this.elsContent.forEach(function(e) {
                    _i_("3da:3a3f5859");
                    var t = e.getAttribute(Qe);
                    S(e, _),
                    t === n && (i = e),
                    _r_()
                }),
                this.elsButton.forEach(function(e) {
                    _i_("3da:cf331798"),
                    e.hasAttribute(et) && e.setAttribute(et, "false"),
                    e.removeAttribute("aria-current"),
                    _r_()
                }),
                a && (a.hasAttribute(et) ? a.setAttribute(et, "true") : a.setAttribute("aria-current", "page"),
                B(a, o),
                a.focus()),
                i && B(i, _),
                e && e.call(this, {
                    id: n
                }),
                _r_()
            }
        }]),
        n))
    }();
    H.register("Tab", tt);
    var it = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:4b84e37f"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).props = h({}, {
                icon: e.getAttribute("data-icon") || '\n        <svg data-width="24" data-icon-name="arrow_nav_down" viewBox="0 0 24 24">\n          <path d="M18 9.45a.74.74 0 0 1-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"/>\n        </svg>\n    ',
                showText: e.getAttribute("data-show-text"),
                hideText: e.getAttribute("data-hide-text")
            }, t),
            i.selectors = {
                expander: "[data-bui-ref=table-row-expander]",
                selector: "[data-bui-ref=table-row-selector]",
                checkbox: "[data-bui-ref=table-checkbox]",
                collapsible: "[data-bui-ref=collapsible-cell]",
                expand: "[data-bui-ref=row-expand]",
                checkboxAll: "[data-bui-ref=table-checkbox-all]",
                ignoreAction: "[data-bui-ref=table-ignore-action]",
                toggle: "[data-bui-ref=table-row-toggle]",
                expandable: "[data-bui-ref=table-row-epansion]"
            },
            i.modifiers = {
                initialized: "bui-table--initialized",
                rowExpanded: "bui-table__row--expanded",
                rowSelected: "bui-table__row--selected",
                checkboxIndeterminate: "bui-checkbox__input--indeterminate"
            },
            i.handlers = {
                "expander@click": i._handleExpand,
                "checkbox@change": i._handleChange,
                "checkboxAll@change": i._handleChangeAll,
                "expand@click": i._handleToggle
            },
            i))
        }
        return _i_("3da:e13ccb5b"),
        _r_((i(n, t),
        a(n, [{
            key: "onMount",
            value: function() {
                _i_("3da:93597c38");
                var i = this
                  , e = this.root;
                this.elCheckboxAll = y(this.selectors.checkboxAll, e),
                this.elsCheckbox = w(this.selectors.checkbox, e),
                this.elsRowSelector = w(this.selectors.selector, e),
                this.elsIgnore = w(this.selectors.ignoreAction, e),
                this.elsCollapsibleCells = w(this.selectors.collapsible, e),
                this.elsExpandableRows = w(this.selectors.expandable, e);
                var t = [].slice.call(this.elsExpandableRows).map(function(e) {
                    return _i_("3da:9f8fdd34"),
                    _r_(M(e, ".bui-table__row"))
                })
                  , n = [].slice.call(this.elsCollapsibleCells).map(function(e) {
                    return _i_("3da:a991c96d"),
                    _r_(x(e, "tr"))
                })
                  , a = [].concat(_(t), _(n));
                this.elsCollapsibleRows = a.length ? a.filter(N) : null,
                this.elsCollapsibleRows && this.elsCollapsibleRows.length && (B(this.root, this.modifiers.initialized),
                this.elsCollapsibleRows.forEach(function(e) {
                    _i_("3da:fe89781d");
                    var t = e;
                    A(e.nextElementSibling, "bui-table__row-expansion") && (t = e.nextElementSibling),
                    t.insertAdjacentHTML("afterEnd", nt({
                        text: A(e, i.modifiers.rowExpanded) ? i.props.hideText : i.props.showText,
                        icon: i.props.icon
                    })),
                    _r_()
                })),
                _r_()
            }
        }, {
            key: "_isFocusableElementClicked",
            value: function(e) {
                _i_("3da:a6496daa");
                for (var t = e.target, i = [].slice.call(this.elsIgnore, 0); t !== e.delegateTarget; ) {
                    if (-1 != i.indexOf(t))
                        return _r_(!0);
                    t = t.parentNode
                }
                return _r_(!1)
            }
        }, {
            key: "_handleToggle",
            value: function(e) {
                _i_("3da:e2f6ebbb"),
                e.preventDefault();
                var t = x(e.delegateTarget, "tr")
                  , i = M(t, ".bui-table__row");
                this._toggle(i, t),
                _r_()
            }
        }, {
            key: "_handleExpand",
            value: function(e) {
                if (_i_("3da:35dba404"),
                !this._isFocusableElementClicked(e)) {
                    var t = x(e.delegateTarget, ".bui-table__row")
                      , i = function(e, t) {
                        _i_("3da:ff3fba1e");
                        for (var i = e; i.nextElementSibling; )
                            if (O(i = i.nextElementSibling, t))
                                return _r_(i);
                        _r_()
                    }(t, this.selectors.toggle);
                    this._toggle(t, i)
                }
                _r_()
            }
        }, {
            key: "_handleChange",
            value: function(e) {
                _i_("3da:0d38a633");
                var t = x(e.target, this.selectors.selector)
                  , i = this.elsCheckbox.length
                  , n = 0;
                I(t, this.modifiers.rowSelected, e.target.checked),
                this.elsCheckbox.forEach(function(e) {
                    _i_("3da:494e2cf5"),
                    e.checked && (n += 1),
                    _r_()
                }),
                this.elCheckboxAll.indeterminate = n < i && 0 < n,
                this.elCheckboxAll.checked = n === i,
                _r_()
            }
        }, {
            key: "_handleChangeAll",
            value: function(e) {
                _i_("3da:9cf03742");
                var t = this
                  , i = e.delegateTarget;
                this.elsCheckbox.forEach(function(e) {
                    return _i_("3da:4abcfc77"),
                    _r_(e.checked = i.checked)
                }),
                this.elsRowSelector.forEach(function(e) {
                    return _i_("3da:8db80c79"),
                    _r_(I(e, t.modifiers.rowSelected, i.checked))
                }),
                _r_()
            }
        }, {
            key: "_toggle",
            value: function(e, t) {
                _i_("3da:e5fbd121");
                var i = A(e, this.modifiers.rowExpanded);
                t.outerHTML = nt({
                    text: i ? this.props.showText : this.props.hideText,
                    icon: this.props.icon
                }),
                I(e, this.modifiers.rowExpanded, !i),
                _r_()
            }
        }]),
        n))
    }();
    function nt(e) {
        _i_("3da:1faaf964");
        var t = e.text
          , i = e.icon;
        return _r_('\n        <tr data-bui-ref="table-row-toggle" class="bui-table__row-toggle">\n            <td class="bui-table__row-toggle-cell">\n                <a class="bui-table__row-toggle-link" href="#" data-bui-ref="row-expand">\n                    '.concat(i + t, "\n                </a>\n            </td>\n        </tr>\n    "))
    }
    H.register("Table", it),
    function(e) {
        _i_("3da:60581b8f");
        var t = {
            transition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend"
        }
          , i = document.createElement("div");
        for (var n in t)
            if (void 0 !== i.style[n]) {
                e.transitionEnd = t[n];
                break
            }
        _r_()
    }(window);
    var at, rt = [], ot = !1, _t = function(e) {
        function n(e, t) {
            var i;
            return _i_("3da:118e5149"),
            _r_((d(this, n),
            (i = p(this, c(n).call(this, e, t))).props = {
                onBeforeClose: t.onBeforeClose,
                onAfterClose: t.onAfterClose,
                duration: t.duration || 4e3
            },
            i.modifiers = {
                enterFrom: "bui-toast--enter-from",
                enterSettings: "bui-toast--enter-settings",
                exitTo: "bui-toast--exit-to",
                exitSettings: "bui-toast--exit-settings"
            },
            i.selectors = {
                action: "[data-bui-ref=toast-action]"
            },
            i.state = {
                removed: !0
            },
            i))
        }
        return _i_("3da:f3d3dfe3"),
        _r_((i(n, t),
        a(n, [{
            key: "_startToastTimer",
            value: function() {
                _i_("3da:937c27a6"),
                at = setTimeout(this.hide.bind(this), this.props.duration),
                _r_()
            }
        }, {
            key: "_addToast",
            value: function(e) {
                _i_("3da:794b5228");
                var t = this
                  , i = e.data
                  , n = e.elToast;
                window.transitionEnd && (n.addEventListener("transitionend", function(e) {
                    _i_("3da:dd4dbb45"),
                    e.currentTarget.classList.remove(t.modifiers.enterSettings),
                    _r_()
                }, !1),
                n.classList.add(this.modifiers.enterSettings),
                n.classList.add(this.modifiers.enterFrom)),
                document.body.appendChild(n),
                this._startToastTimer(),
                n.addEventListener("mouseenter", function() {
                    return _i_("3da:aad0afa5"),
                    _r_(clearTimeout(at))
                }),
                n.addEventListener("mouseleave", this._startToastTimer.bind(this)),
                i.actionText && i.onActionClick && y(this.selectors.action, n).addEventListener("click", function() {
                    _i_("3da:ad3834aa"),
                    i.onActionClick.call(t),
                    t.hide(),
                    _r_()
                }),
                requestAnimationFrame(function() {
                    return _i_("3da:e4fe3491"),
                    _r_(requestAnimationFrame(function() {
                        return _i_("3da:7a0078b8"),
                        _r_(n.classList.remove(t.modifiers.enterFrom))
                    }))
                }),
                _r_()
            }
        }, {
            key: "_removeToast",
            value: function(e) {
                _i_("3da:fb592478");
                var t = e.elToast
                  , i = this.props.onAfterClose;
                this.state.removed || ($(t),
                this.setState({
                    removed: !0
                }),
                i && i()),
                _r_()
            }
        }, {
            key: "show",
            value: function(e) {
                _i_("3da:defd4332");
                var t, i = document.createElement("div");
                i.innerHTML = (t = e,
                _i_("3da:c541d1a9"),
                _r_('<div class="bui-toast">\n        <span class="bui-toast__text" role="alert">'.concat(t.text, "</span>\n        ").concat(t.actionText && t.onActionClick ? '\n            <button type="button" aria-hidden="true" class="bui-toast__button bui-link bui-link--primary" data-bui-ref="toast-action">\n                '.concat(t.actionText, "\n            </button>\n        ") : "", "\n    </div>")));
                var n = {
                    data: e,
                    elToast: i.firstChild
                };
                rt.push(n),
                ot || (ot = !0,
                this._addToast(n),
                this.setState({
                    active: !0
                })),
                _r_()
            }
        }, {
            key: "hide",
            value: function() {
                _i_("3da:0f17f8cc");
                var e = rt[0];
                if (e) {
                    var t = e.elToast
                      , i = this.props.onBeforeClose;
                    i && i(),
                    this.setState({
                        removed: !1
                    }),
                    window.transitionEnd ? t.addEventListener("transitionend", this._removeToast.bind(this, e), !1) : this._removeToast(e),
                    t.classList.remove(this.modifiers.enterSettings),
                    t.classList.add(this.modifiers.exitSettings),
                    t.classList.add(this.modifiers.exitTo),
                    rt.shift();
                    var n = rt[0];
                    n ? this._addToast(n) : ot = !1
                }
                _r_()
            }
        }]),
        n))
    }();
    H.register("Toast", _t);
    var st = "data-tooltip-text"
      , dt = "data-tooltip-position"
      , ct = "data-tooltip-follow"
      , lt = "data-tooltip-light"
      , ut = "data-tooltip-z-index"
      , ft = function(e) {
        function r(e, t) {
            var i;
            _i_("3da:30b31225"),
            d(this, r),
            (i = p(this, c(r).call(this, e, t))).state = {
                active: !1
            },
            i.modifiers = {
                light: "bui-tooltip--light",
                noArrow: "bui-tooltip--no-arrow"
            },
            i.handlers = {
                "root@mouseenter": i._handleMouseEnter,
                "root@mouseleave": i._handleMouseLeave,
                "root@focus": i.show,
                "root@blur": i.hide
            };
            var n = t.zIndex || e.getAttribute(ut)
              , a = qe(n) || n;
            return _r_((i.props = h({}, t, {
                text: t.text || e.getAttribute(st) || e.getAttribute("title") || e.getAttribute("aria-label"),
                position: t.position || e.getAttribute(dt) || "bottom",
                follow: t.follow || null !== e.getAttribute(ct),
                light: t.light || null !== e.getAttribute(lt),
                zIndex: a
            }),
            i.id = we(),
            i.enterTimer = null,
            i))
        }
        return _i_("3da:dfa020d8"),
        _r_((i(r, t),
        a(r, [{
            key: "onMount",
            value: function() {
                _i_("3da:ca2336fb");
                var e = this.props.text;
                e && (this.root.removeAttribute("title"),
                this.root.removeAttribute("aria-label"),
                this.root.setAttribute(st, e)),
                _r_()
            }
        }, {
            key: "_follow",
            value: function(e) {
                _i_("3da:e8dc6bfd"),
                this.container.style.left = e.pageX + 16 + "px",
                this.container.style.top = e.pageY + 16 + "px",
                _r_()
            }
        }, {
            key: "_createContainer",
            value: function() {
                _i_("3da:2f20c161"),
                this.container = document.createElement("div"),
                this.container.setAttribute("role", "tooltip"),
                this.container.style.position = "absolute",
                this.container.className = "bui-tooltip",
                this.container.id = this.id,
                _r_()
            }
        }, {
            key: "_handleMouseEnter",
            value: function() {
                _i_("3da:afcd3ebd");
                var e = this;
                this.enterTimer = setTimeout(function() {
                    return _i_("3da:71a7c0c2"),
                    _r_(e.show())
                }, 100),
                _r_()
            }
        }, {
            key: "_handleMouseLeave",
            value: function() {
                _i_("3da:71b25b04"),
                this.enterTimer && clearTimeout(this.enterTimer),
                this.hide(),
                _r_()
            }
        }, {
            key: "show",
            value: function() {
                _i_("3da:1786b87b");
                var e, i = this;
                if (!this.state.active) {
                    var t = this.props
                      , n = t.onAfterShow
                      , a = t.onAfterToggle
                      , r = t.text
                      , o = t.position
                      , _ = t.light
                      , s = t.follow
                      , d = t.zIndex;
                    this._createContainer(),
                    this.root.setAttribute("aria-describedby", this.container.id),
                    this.container.innerHTML = (e = r,
                    _i_("3da:bf7adafd"),
                    _r_('\n    <div class="bui-tooltip__content">'.concat(e, '</div>\n    <div class="bui-tooltip__arrow"></div>\n'))),
                    this.container.style.opacity = "0",
                    this.container.style.left = "0",
                    this.container.style.top = "0",
                    _ && B(this.container, this.modifiers.light),
                    document.body.appendChild(this.container),
                    s && !$e() && (B(this.container, this.modifiers.noArrow),
                    k(this.root, "mousemove", this._follow.bind(this))),
                    Re(this.container, this.root, {
                        position: o,
                        offset: 8,
                        done: function(e) {
                            _i_("3da:2bf0da9c");
                            var t = e.position.replace(" ", "-").replace("left", "start").replace("right", "end");
                            B(i.container, "bui-tooltip--" + t),
                            _r_()
                        }
                    }),
                    this.container.style.opacity = "1",
                    d && (this.container.style.zIndex = d),
                    this.setState({
                        active: !0
                    }),
                    n && n.call(this),
                    a && a.call(this)
                }
                _r_()
            }
        }, {
            key: "hide",
            value: function() {
                if (_i_("3da:7549eb8b"),
                this.state.active) {
                    var e = this.props
                      , t = e.onAfterHide
                      , i = e.onAfterToggle;
                    document.body.removeChild(this.container),
                    C(this.root, "mousemove", this._follow.bind(this)),
                    this.root.removeAttribute("aria-describedby"),
                    this.container.innerHTML = "",
                    this.setState({
                        active: !1
                    }),
                    t && t.call(this),
                    i && i.call(this)
                }
                _r_()
            }
        }, {
            key: "changeRoot",
            value: function(e) {
                _i_("3da:b7f49daf"),
                this.unmount(),
                this.root = e,
                this.mount(),
                _r_()
            }
        }]),
        r))
    }();
    H.register("Tooltip", ft),
    _r_()
}(),
function() {
    _i_("3da:48206881");
    var r = {
        currencyDesktop: B.env.b_currency_url
    }
      , o = null;
    function _(e) {
        _i_("3da:59c300ac"),
        window.BUI.initComponents(e),
        B.et.initAttributesTracking($(e)),
        _r_()
    }
    function s(e, t) {
        _i_("3da:9d94eb56");
        var i = B.env.b_this_url;
        "guest" === B.env.b_action && B.env.b_this_url_without_lang && (i = B.env.b_this_url_without_lang),
        t && (i = t);
        var n = "data-modal-header-async-url-param"
          , a = ";" === B.env.b_query_params_delimiter ? ";" : "&"
          , r = -1 < i.indexOf("?") ? a : "?";
        i.slice(-1) === r && (r = ""),
        $(e).find("[" + n + "]").each(function() {
            _i_("3da:0d36be41");
            var e = $(this).attr(n);
            $(this).attr("href", i + r + e),
            _r_()
        }),
        _r_()
    }
    window.BUI.extendComponent("Modal.HeaderAsync", {
        onBeforeOpen: function() {
            _i_("3da:30e1af17");
            var t = this
              , e = this.root.getAttribute("data-modal-header-async-type")
              , i = this.root.getAttribute("data-modal-header-async-url") || r[e]
              , n = "currencyDesktop" === e || "currencyMobile" === e ? B.env.b_currency_change_base_url : null
              , a = function(e) {
                _i_("3da:11c25d89"),
                t.contentWrapper.innerHTML = t._getCloseTemplate().outerHTML + e,
                t.closeEls = t.modalEl.querySelectorAll(t.selectors.close),
                t._attachModalListeners(),
                s(t.getModalRoot(), n),
                _(t.getModalRoot()),
                _r_()
            };
            if (!i)
                return s(t.getModalRoot(), n),
                _(t.getModalRoot()),
                _r_();
            if (o)
                return a(o),
                _(t.getModalRoot()),
                _r_();
            a('<div class="bui-traveller-header__content-loader"><div class="bui-spinner"><div class="bui-spinner__inner"></div></div></div>'),
            $.get(i, function(e) {
                _i_("3da:23634191"),
                a(o = e),
                _r_()
            }),
            _r_()
        },
        template: null
    }),
    _r_()
}(),
function(e, t) {
    if (_i_("3da:b66d43fa"),
    !(e && e.cookie && t && t.env && t.et))
        return _r_();
    var i = e(".js-header-signin-notification")
      , n = e(".js-bui-traveller-header__profile-icon");
    if (!i.length)
        return _r_();
    e.cookie("ghrd") || (n.removeClass("bui-u-hidden"),
    i.on("click", function() {
        _i_("3da:29372279"),
        e.cookie("ghrd", 1, {
            expires: 1
        }),
        _r_()
    })),
    _r_()
}(jQuery, window.B),
B.define("dismiss-item", function(e, t, i) {
    _i_("3da:4fa1a5b81");
    var n = e("jquery");
    i.exports = function(e) {
        if (_i_("3da:ffcf03b71"),
        !e)
            throw new Error("param itemId is required");
        return _r_(n.ajax({
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
B.when({
    events: "ready",
    action: "index"
}).run(function() {
    if (_i_("3da:9a79f366"),
    !window.BUI || !window.BUI.createInstance)
        return _r_();
    var e = document.querySelectorAll(".js-campaign-banner");
    if (!e.length)
        return _r_();
    var t = B.require("events");
    Array.prototype.forEach.call(e, function(e) {
        _i_("3da:0ea1a7ec"),
        window.BUI.createInstance("Banner", e, {
            onAfterClose: function() {
                _i_("3da:c97a2cac"),
                t.trigger("CAMPAIGN_BANNER:CLOSE"),
                _r_()
            }
        }).mount(),
        _r_()
    }),
    _r_()
}),
B.when({
    action: "index",
    events: "click #btn_deals_index_banner_close"
}).run(function(e) {
    _i_("3da:06ac52f8"),
    e("dismiss-item")("deals_index_banner"),
    _r_()
}),
B.when({
    action: "index",
    events: "click #raf_banner_close"
}).run(function(e) {
    _i_("3da:6bf7b40f"),
    e("dismiss-item")("raf_banner"),
    _r_()
}),
B.when({
    action: ["index", "city"],
    events: "click #emk_banner_index_close"
}).run(function(e) {
    _i_("3da:335caaba"),
    e("dismiss-item")("emk_banner_index"),
    _r_()
}),
B.when({
    action: "index",
    events: "click #signin_banner_close"
}).run(function(e) {
    _i_("3da:341f362e"),
    e("dismiss-item")("signin_banner"),
    _r_()
}),
B.when({
    action: "index",
    events: "click #join_index_banner_close"
}).run(function(e) {
    _i_("3da:f251325a"),
    e("dismiss-item")("join_index_banner"),
    _r_()
}),
B.when({
    action: "index",
    events: "click #genius_banner_index_close"
}).run(function(e) {
    _i_("3da:87b3f713"),
    e("dismiss-item")("genius_banner_index"),
    _r_()
}),
B.when({
    condition: window.perfMetrics && perfMetrics.onFirstInputDelay && !0
}).run(function(e) {
    "use strict";
    _i_("3da:608adaf5");
    var n = e("et");
    perfMetrics.onFirstInputDelay(function(e, t) {
        _i_("3da:d6c2006f");
        e = Math.round(e);
        n.goalWithValue("js_first_input_delay", e);
        var i = Math.round(t.timeStamp);
        n.goalWithValue("js_time_to_first_input", i),
        _r_()
    }),
    _r_()
}),
B.when({
    events: "ready"
}).run(function() {
    _i_("3da:96b95d03");
    var e = "GfHMYYBLYDDBXGcMdNLEHXT"
      , t = "cx_tracker_aa";
    B.et.track(e),
    function() {
        _i_("3da:d9b3fc54");
        try {
            window.localStorage && window.localStorage.getItem(t) && B.et.stage(e, 2)
        } catch (e) {}
        _r_()
    }(),
    function() {
        _i_("3da:17ad05a1");
        try {
            if (!window.localStorage)
                return _r_();
            window.localStorage.setItem(t, "1"),
            B.et.stage(e, 1)
        } catch (e) {}
        _r_()
    }(),
    _r_()
}),
function() {
    "use strict";
    _i_("3da:3557c07a");
    var t = "Atlas/";
    function n(e) {
        return _i_("3da:212232c8"),
        _r_(t + e)
    }
    function e(e, t) {
        _i_("3da:9d1725e1");
        var i = [].slice.call(arguments, 0);
        return "string" == typeof e ? i[0] = n(e) : Array.isArray(e) ? i[0] = e.map(n) : Array.isArray(t) && (i[1] = e.map(n)),
        _r_(B.require.apply(this, i))
    }
    B.atlas = B.atlas || {
        requirejs: e,
        require: e,
        define: function(e, t) {
            _i_("3da:6f103607");
            var i = [].slice.call(arguments, 0);
            i[0] = n(e),
            Array.isArray(t) && (i[1] = t.map(n)),
            B.define.apply(this, i),
            _r_()
        },
        getVariant: function() {
            return _i_("3da:fa3ca699"),
            _r_(0)
        }
    },
    _r_()
}(),
B.define("atlas/core.tracking", function() {
    "use strict";
    _i_("3da:46b45d72");
    var e = {};
    function t(t) {
        _i_("3da:dfed5e51");
        var i = 0;
        if (!B.atlas.EXPERIMENTS)
            return _r_(i);
        if (void 0 !== e[t])
            return _r_(e[t]);
        return B.atlas.EXPERIMENTS.forEach(function(e) {
            _i_("3da:7ecd4e64"),
            e.name !== t || !e.cond || e.mapId && "default" !== e.mapId || (i = void 0 !== e._FORCE_VARIANT_ && "" !== e._FORCE_VARIANT_ ? parseInt(e._FORCE_VARIANT_, 10) || 0 : B.et.track(t)),
            _r_()
        }),
        e[t] = i,
        _r_(i)
    }
    return _r_({
        getVariant: t,
        trackInTemplate: function(e) {
            return _i_("3da:b5df74fe"),
            _r_(t(e))
        }
    })
}),
booking.define("squeak", function() {
    "use strict";
    _i_("3da:47bcbf25");
    var t = !1
      , i = []
      , n = {};
    function e() {
        _i_("3da:068737cb"),
        i.length ? setTimeout(a, 1e3) : t = !1,
        _r_()
    }
    function a() {
        _i_("3da:22ddbaf1"),
        $.ajax({
            url: "/squeak",
            type: "GET",
            success: e,
            error: e,
            data: {
                pid: booking.env.pageview_id,
                stid: booking.env.b_stid,
                sqk: "1:" + i.join(","),
                site_type: booking.env.b_site_type || ""
            }
        }),
        i = [],
        _r_()
    }
    return _r_(function(e) {
        if (_i_("3da:3c0bc2e3"),
        n.hasOwnProperty(e) || (n[e] = 0),
        10 < ++n[e])
            return _r_();
        if (i.push(e),
        t)
            return _r_();
        t = !0,
        setTimeout(a, 1e3),
        _r_()
    })
}),
booking.squeak = booking.require("squeak"),
B.when({
    condition: B.env.fe_show_amazon_prime_onboarding_modal,
    events: "ready"
}).run(function() {
    _i_("3da:506b32b3");
    var e = window.BUI.createInstance("Modal", null, {
        id: "amazonPrimeOnboardingModal"
    });
    e.mount(),
    e.open(),
    _r_()
}),
B.when({
    condition: B.env.fe_show_opentable_welcome_modal,
    events: "ready"
}).run(function() {
    _i_("3da:979a5c2c"),
    window.BUI.createInstance("Modal", null, {
        id: "openTableWelcomeModal"
    }).open(),
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:6ac19229");
    var a = e("jquery");
    function r(e) {
        _i_("3da:31a15207");
        var t = {
            behaviour_name: e,
            extra_info: {
                current_page: "index"
            }
        }
          , i = JSON.stringify(t);
        a.ajax({
            url: "/personalisationinfra/track_user_general_behaviour",
            contentType: "application/json",
            method: "POST",
            data: i
        }),
        _r_()
    }
    a("[data-decider-banner]").each(function(e) {
        _i_("3da:0882b09b");
        var t = a(this)
          , i = t.find(".bui-banner__button")
          , n = t.find(".bui-banner__close");
        i.click(function() {
            _i_("3da:a68a79be"),
            r(t.attr("data-decider-banner") + "_click"),
            _r_()
        }),
        n.click(function() {
            _i_("3da:658ef16a"),
            r(t.attr("data-decider-banner") + "_dismiss"),
            _r_()
        }),
        _r_()
    }),
    a("#midYearDealsBanner a").click(function() {
        _i_("3da:589efaf6"),
        r(a("#midYearDealsBanner").attr("data-decider-banner") + "_click"),
        _r_()
    }),
    _r_()
}),
B.when({
    events: "ready"
}).run(function(e) {
    _i_("3da:a85d3505");
    var n = e("jquery");
    n("[data-decider-header]").each(function(e) {
        _i_("3da:f9d14a48"),
        n(this).click(function() {
            _i_("3da:ac1429e4"),
            function(e) {
                _i_("3da:703c6bc5");
                var t = {
                    behaviour_name: e,
                    extra_info: {
                        current_page: "header"
                    }
                }
                  , i = JSON.stringify(t);
                n.ajax({
                    url: "/personalisationinfra/track_user_general_behaviour",
                    contentType: "application/json",
                    method: "POST",
                    data: i
                }),
                _r_()
            }(n(this).attr("data-decider-header") + "_click"),
            _r_()
        }),
        _r_()
    }),
    _r_()
}),
B.define("component/core/recaptcha/v3", function(e, t, i) {
    _i_("3da:daababa4");
    var n = e("component")
      , a = e("jquery");
    i.exports = n.extend({
        init: function() {
            _i_("3da:f1785304");
            var e = this.createScriptElement()
              , t = function() {
                _i_("3da:6f540b3f"),
                a(document.body).append(e),
                _r_()
            }
              , i = this.$el.data("delay-load");
            "ready" == i ? a(document).ready(t) : "load" == i ? a(window).load(t) : t(),
            _r_()
        },
        createScriptElement: function() {
            _i_("3da:39146acd");
            var e = this.$el.data("key")
              , t = this.$el.data("onload")
              , i = document.createElement("script");
            return i.src = "https://www.google.com/recaptcha/api.js?render=" + e + "&onload=" + t,
            _r_(i)
        }
    }),
    _r_()
}),
B.when({
    events: "ready"
}).run(function() {
    _i_("3da:eecf78cc");
    var e = B.env.fe_robot_note;
    e && B.require("jquery").post("/seo/robot_note", {
        note: e
    });
    _r_()
}),
B.when({
    events: "ready",
    condition: B.env.b_is_dot_cn && "3" === B.env.b_partner_channel_id && $("#cnSiteSelect").length
}).run(function(e) {
    _i_("3da:4a0a6d93");
    var t = e("lightbox")
      , i = e("server-data")
      , n = e("jquery")
      , a = e("et")
      , r = "cn_site_select"
      , o = "EKIKOCeTeBZEWPTJWe"
      , _ = "cn" === i.ip_country
      , s = l("localStorage")
      , d = (l("sessionStorage"),
    s && localStorage.getItem(r))
      , c = 0 < i.auth_level;
    function l(e) {
        var t;
        _i_("3da:bba2b352");
        try {
            t = window[e];
            var i = "__storage_test__";
            return t.setItem(i, i),
            t.removeItem(i),
            _r_(!0)
        } catch (e) {
            return _r_(e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && t && 0 !== t.length)
        }
        _r_()
    }
    "cn" !== d && (c || _ || (_i_("3da:5b3a2524"),
    t.show(n("#cnSiteSelect"), {
        customWrapperClassName: "cn_site_select_popup",
        bOverflowVisible: !0,
        ariaLabel: B.jstmpl.translations("hp_rt_sticky_search_head"),
        hideCallBack: function() {
            _i_("3da:37ec9681"),
            s && localStorage.setItem(r, "cn"),
            a.customGoal(o, 2),
            _r_()
        }
    }, function() {
        _i_("3da:65005be5"),
        n(".cn_site_select_popup .site-selelct-close-btn").click(function() {
            _i_("3da:3cfb1006"),
            t.hide(),
            _r_()
        }),
        n(".cn_site_select_popup .site-selelct-redirect-btn").click(function(e) {
            _i_("3da:86757a29"),
            e.preventDefault();
            var t = n(this).attr("href");
            a.customGoal(o, 1),
            setTimeout(function() {
                _i_("3da:d4255f90"),
                window.location.href = t,
                _r_()
            }, 300),
            _r_()
        }),
        _r_()
    }),
    _r_())),
    _r_()
}),
B.when({
    events: "ready",
    condition: void 0 !== B.env.fe_china_dot_cn_redirect
}).run(function(e) {
    _i_("3da:151ec45d");
    var i = e("server-data")
      , t = "mdot" === i.b_site_type
      , n = e("jquery")
      , a = t ? "com_site_select_anonymous_mdot3" : "com_site_select_anonymous"
      , r = e("lightbox")
      , o = /(Baiduspider|Googlebot|AdsBot-Google-Mobile|Bytespider)/.test(navigator.userAgent)
      , _ = t ? "touchstart.CNLaunch mousemove.CNLaunch scroll.CNLaunch" : "touchstart.CNLaunch mousemove.CNLaunch";
    n(document).on(_, function() {
        _i_("3da:09b8bbd4"),
        B.squeak(i.cn_launch_anonymous_squeak.stage2),
        n(document).off(_),
        _r_()
    });
    var s, d, c = 1 === i.fe_china_dot_cn_redirect, l = (s = a,
    d = "localStorage",
    _i_("3da:30a839b3"),
    u(d) ? _r_("localStorage" === d ? localStorage.getItem(s) : "sessionStorage" === d && sessionStorage.getItem(s)) : _r_(!1));
    function u(e) {
        var t;
        _i_("3da:bba2b3521");
        try {
            t = window[e];
            var i = "__storage_test__";
            return t.setItem(i, i),
            t.removeItem(i),
            _r_(!0)
        } catch (e) {
            return _r_(e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && t && 0 !== t.length)
        }
        _r_()
    }
    "com" !== l && c && 0 < n("#cnSiteSelect").length && booking.lightbox ? (B.squeak(i.cn_launch_anonymous_squeak.stage1_before_openlightbox),
    _i_("3da:433b6e34"),
    r.show(n("#cnSiteSelect"), {
        customWrapperClassName: "cn_site_select_popup",
        bOverflowVisible: !0,
        ariaLabel: B.jstmpl.translations("hp_rt_sticky_search_head"),
        closeOnEsc: !1,
        hideCallBack: function() {
            _i_("3da:2ff1a3fe"),
            u("localStorage") && localStorage.setItem(a, "com"),
            B.squeak(i.cn_launch_anonymous_squeak.stage1_chose_stay),
            _r_()
        }
    }, function() {
        _i_("3da:278d019e"),
        B.squeak(i.cn_launch_anonymous_squeak.stage1_lightbox_loaded),
        n(".cn_site_select_popup .site-selelct-close-btn").click(function() {
            _i_("3da:3cfb10061"),
            r.hide(),
            _r_()
        }),
        n(".cn_site_select_popup .site-selelct-redirect-btn").click(function(e) {
            _i_("3da:87a0edc7"),
            e.preventDefault();
            var t = n(this).attr("href");
            setTimeout(function() {
                _i_("3da:d4255f901"),
                window.location.href = t,
                _r_()
            }, 300),
            B.squeak(i.cn_launch_anonymous_squeak.stage1_chose_go),
            _r_()
        }),
        _r_()
    }),
    _r_()) : o || B.squeak(i.cn_launch_anonymous_squeak.stage1_without_openlightbox),
    o ? B.squeak(i.cn_launch_anonymous_squeak.stage1_is_spider) : (B.squeak(i.cn_launch_anonymous_squeak.stage1),
    c ? (B.squeak(i.cn_launch_anonymous_squeak.stage1_in_v1),
    "com" !== l && B.squeak(i.cn_launch_anonymous_squeak.stage1_in_v1_no_history)) : B.squeak(i.cn_launch_anonymous_squeak.stage1_in_v0),
    n("#cnSiteSelect").length && B.squeak(i.cn_launch_anonymous_squeak.stage1_with_popup_dom),
    booking.lightbox && B.squeak(i.cn_launch_anonymous_squeak.stage1_with_lightbox_func),
    u("localStorage") && B.squeak(i.cn_launch_anonymous_squeak.stage1_can_use_localstorage)),
    _r_()
}),
B.when({
    events: "ready",
    condition: void 0 !== B.env.fe_china_dot_cn_redirect_logged
}).run(function(e) {
    if (_i_("3da:bcb457e1"),
    B.lightbox) {
        var t = e("server-data")
          , i = "mdot" === t.b_site_type
          , n = e("jquery")
          , a = i ? "com_site_select_logged_mdot" : "com_site_select_logged2"
          , r = e("lightbox")
          , o = t.fe_china_dot_cn_redirect_logged
          , _ = "cn" === t.ip_country
          , s = c(a, "localStorage")
          , d = c("hasCnPhoneNumberCache", "sessionStorage");
        !function(t) {
            _i_("3da:97c29d3c"),
            d ? t(d) : n.get("/cn/hook/hasChinesePhoneNumber").done(function(e) {
                _i_("3da:7a52a150"),
                e.code && "200" === e.code && (l("sessionStorage") && sessionStorage.setItem("hasCnPhoneNumberCache", e.data.toString()),
                t(e.data.toString())),
                _r_()
            });
            _r_()
        }(function(e) {
            if (_i_("3da:71cc87e5"),
            "true" === e) {
                if (o && r)
                    if (1 === o) {
                        var t = n("#cnRedirectPopup .js_site_selelct_redirect_btn").attr("href");
                        setTimeout(function() {
                            _i_("3da:c114821b"),
                            window.location.href = t,
                            _r_()
                        }, 300)
                    } else
                        _i_("3da:6662212f"),
                        r.show(n("#cnRedirectPopup"), {
                            customWrapperClassName: "cn_site_select_popup",
                            bOverflowVisible: !0,
                            bCloseButton: !1,
                            bMaskClick: !1
                        }, function() {
                            _i_("3da:a993a734");
                            var i, e = 5;
                            i = setInterval(function() {
                                _i_("3da:fab080f4"),
                                n(".js_cn_redirect_countdown").text(e.toString()),
                                0 < e ? e-- : (clearInterval(i),
                                n("#cnRedirectPopup .js_site_selelct_redirect_btn").trigger("click")),
                                _r_()
                            }, 1e3),
                            n("#cnRedirectPopup .js_site_selelct_redirect_btn").click(function(e) {
                                _i_("3da:4ed3267d"),
                                clearInterval(i),
                                e.preventDefault();
                                var t = n(this).attr("href");
                                setTimeout(function() {
                                    _i_("3da:d4255f902"),
                                    window.location.href = t,
                                    _r_()
                                }, 300),
                                _r_()
                            }),
                            _r_()
                        }),
                        _r_()
            } else
                _ && o && r && function() {
                    _i_("3da:c904f07a"),
                    "com" !== s && 0 !== n("#cnSiteSelect").length && r.show(n("#cnSiteSelect"), {
                        customWrapperClassName: "cn_site_select_popup",
                        bOverflowVisible: !0,
                        hideCallBack: function() {
                            _i_("3da:3e4f1035"),
                            l("localStorage") && localStorage.setItem(a, "com"),
                            _r_()
                        }
                    }, function() {
                        _i_("3da:0ff400f0"),
                        n(".cn_site_select_popup .site-selelct-close-btn").click(function() {
                            _i_("3da:70046991"),
                            r.hide(),
                            _r_()
                        }),
                        n(".cn_site_select_popup .site-selelct-redirect-btn").click(function(e) {
                            _i_("3da:36afd86c"),
                            e.preventDefault();
                            var t = n(this).attr("href");
                            setTimeout(function() {
                                _i_("3da:c114821b1"),
                                window.location.href = t,
                                _r_()
                            }, 300),
                            _r_()
                        }),
                        _r_()
                    });
                    _r_()
                }();
            _r_()
        })
    }
    function c(e, t) {
        if (_i_("3da:3a3b5d30"),
        l(t)) {
            if ("localStorage" === t)
                return _r_(localStorage.getItem(e));
            if ("sessionStorage" === t)
                return _r_(sessionStorage.getItem(e))
        }
        _r_()
    }
    function l(e) {
        var t;
        _i_("3da:bba2b3522");
        try {
            t = window[e];
            var i = "__storage_test__";
            return t.setItem(i, i),
            t.removeItem(i),
            _r_(!0)
        } catch (e) {
            return _r_(e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && t && 0 !== t.length)
        }
        _r_()
    }
    _r_()
}),
B.when({
    condition: document.querySelector(".js-coronavirus-banner")
}).run(function(e) {
    _i_("3da:c92c96cc");
    var t = e("jquery")
      , i = t(".js-coronavirus-banner")
      , n = !i.hasClass("is-collapsed");
    t(document).on("click", ".js-coronavirus-banner-collapse-button", function() {
        _i_("3da:9ffcf6f7"),
        i.toggleClass("is-collapsed"),
        n && (n = !1,
        t.ajax({
            url: "/dismiss_item",
            type: "POST",
            data: {
                item_id: "coronavirus_main_funnel_banner"
            }
        })),
        _r_()
    }),
    _r_()
}),
B.define("component/accommodation-classification-rating", function(e, t, i) {
    _i_("3da:2e12f1e7");
    var n = e("component")
      , a = e("jquery")
      , r = e("et");
    i.exports = n.extend({
        init: function() {
            _i_("3da:295664fb"),
            this.initPopover(),
            _r_()
        },
        onAfterOpen: function() {
            _i_("3da:b351f26e"),
            this.popoverOpenTime = Date.now(),
            _r_()
        },
        onAfterClose: function() {
            _i_("3da:4058ccc7"),
            this.popoverOpenTime && (this.root.classList.contains("c-accommodation-classification-rating__badge--tiles") ? r.goalWithValue("js_qc_tooltip_open_duration", Date.now() - this.popoverOpenTime) : this.root.classList.contains("c-accommodation-classification-rating__badge--stars") ? r.goalWithValue("js_stars_tooltip_open_duration", Date.now() - this.popoverOpenTime) : r.goalWithValue("js_other_tooltip_open_duration", Date.now() - this.popoverOpenTime),
            this.popoverOpenTime = null),
            _r_()
        },
        initPopover: function() {
            _i_("3da:6c55437a");
            var e = this.$el.attr("title")
              , t = a('<div class="bui-card c-accommodation-classification-rating-popover-content"><div class="bui-card__content">' + e + "</div></div>").get(0);
            window.BUI.createInstance("Popover", this.el, {
                content: t,
                onAfterOpen: this.onAfterOpen,
                onAfterClose: this.onAfterClose,
                position: "bottom",
                zIndex: 1003
            }).mount(),
            this.$el.attr("title", ""),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/image-fallback", function(e, t, i) {
    _i_("3da:c91185f7");
    var a = e("report-error");
    i.exports = e("component").extend({
        init: function() {
            _i_("3da:26b5065c");
            var e = this.$el;
            if (!e[0])
                return _r_();
            var n, t = e.data("fallback-src");
            if (!t)
                return a("component/image-fallback missing data-fallback-src attribute"),
                _r_();
            e[0].complete ? 0 === e[0].naturalHeight && (e.attr("src", t).on("error", function() {
                _i_("3da:1448b0b2"),
                a("component/image-fallback - fallback image failed to load"),
                _r_()
            }),
            -1 < navigator.userAgent.toLowerCase().indexOf("firefox") && (n = e.attr("src"),
            _i_("3da:8346846e"),
            _r_(new Promise(function(e, t) {
                _i_("3da:c761061b");
                var i = new Image;
                i.addEventListener("load", e),
                i.addEventListener("error", t),
                i.src = n,
                _r_()
            }
            ))).catch(function() {
                _i_("3da:336e9315"),
                e.attr("src", t).on("error", function() {
                    _i_("3da:b48da793"),
                    a("component/image-fallback - fallback image failed to load"),
                    _r_()
                }),
                _r_()
            })) : e.on("error", function() {
                if (_i_("3da:97c6adc9"),
                e.attr("src") === t)
                    return a("component/image-fallback - fallback image failed to load"),
                    _r_();
                e.attr("src", t),
                _r_()
            });
            _r_()
        }
    }),
    _r_()
}),
B.define("component/prevent-default-helper", function(e, t, i) {
    _i_("3da:6ec0d5fa"),
    i.exports = e("component").extend({
        init: function() {
            _i_("3da:4c0d614c");
            var e = this.$el[0];
            if (!e)
                return _r_();
            "#" === e.getAttribute("href") && e.addEventListener("click", function(e) {
                _i_("3da:b662324c"),
                e.preventDefault(),
                _r_()
            }),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/security/csp_banner", function(e, t, i) {
    _i_("3da:d039fdb5"),
    i.exports = e("component").extend({
        init: function() {
            _i_("3da:6c4a21c1");
            var e = B.env.b_action;
            if (!["index", "searchresults", "hotel", "book", "tpi_book", "confirmation", "myreservations", "mybooking"].includes(e))
                return _r_();
            var t = this;
            this.violations = [],
            this.$banner = this.$el,
            this.$banner.css("background-color", "#fff0f0"),
            this.$banner.css("border-color", "#c00");
            var i = this.$banner.find(".bui-banner__icon");
            i.css("fill", "#c00"),
            i.css("color", "#c00");
            var n = this.$banner.find(".bui-banner__text");
            n.css("font-weight", "bold"),
            n.css("color", "#c00"),
            this.$errorList = this.$banner.find(".asec-csp-banner__list"),
            this.$errorList.css("list-style", "inherit"),
            this.bindCSPEvent();
            var a = this.$banner.find(".asec-csp-banner__bypass");
            a && a.on("click", function(e) {
                _i_("3da:c77fc43f"),
                e.preventDefault(),
                window.location.search = "?disable_csp_headers=1&" + window.location.search.slice(1),
                _r_()
            }),
            window.dqs_csp_violations.length && (window.dqs_csp_violations.forEach(function(e) {
                _i_("3da:f39e1403"),
                t.showViolation(e),
                _r_()
            }),
            this.$banner.show(),
            window.scrollTo(0, 0)),
            _r_()
        },
        bindCSPEvent: function() {
            if (_i_("3da:8af5b976"),
            "SecurityPolicyViolationEvent"in window) {
                var t = this;
                document.addEventListener("securitypolicyviolation", function(e) {
                    _i_("3da:ce15476d"),
                    t.showViolation(e),
                    _r_()
                })
            }
            _r_()
        },
        showViolation: function(e) {
            _i_("3da:014b021d"),
            this.violations.push(e),
            this.appendViolationToList(e),
            this.$banner.show(),
            window.scrollTo(0, 0),
            _r_()
        },
        appendViolationToList: function(e) {
            if (_i_("3da:d9529d90"),
            !this.$errorList)
                return _r_();
            this.$errorList.append("<li><i>" + e.blockedURI + "</i> on <b>col: " + e.columnNumber + ", line: " + e.lineNumber + "</b>: <i>" + e.sample + "</i></li>"),
            _r_()
        }
    }),
    _r_()
}),
B.define("component/security/csp_exp_tracker", function(e, t, i) {
    _i_("3da:a405adc4"),
    i.exports = e("component").extend({
        init: function() {
            _i_("3da:0660a7b8"),
            this.exp_hash = this.$el.data("exp-hash"),
            this.violations = window.cspViolationsCount || 0,
            1 <= this.violations && (B.et.customGoal(this.exp_hash, 1),
            3 <= this.violations && B.et.customGoal(this.exp_hash, 2)),
            this.bindCSPEvent(),
            _r_()
        },
        bindCSPEvent: function() {
            if (_i_("3da:dee68df4"),
            "SecurityPolicyViolationEvent"in window) {
                var t = this;
                document.addEventListener("securitypolicyviolation", function(e) {
                    _i_("3da:944fde3c"),
                    -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") ? t.violations++ : "enforce" === e.disposition && t.violations++,
                    1 === t.violations && B.et.customGoal(t.exp_hash, 1),
                    3 === t.violations && B.et.customGoal(t.exp_hash, 2),
                    _r_()
                })
            }
            _r_()
        }
    }),
    _r_()
}),
B.define("emk/in-web-notification-tracker", function(e, t, i) {
    _i_("3da:76951d2a");
    var a = e("when/events-view")
      , r = e("jquery")
      , o = B.require("c360Tracker");
    i.exports = function(e) {
        _i_("3da:de2d7d66");
        var i = r(e)
          , n = function() {
            _i_("3da:405089ec");
            var e = i.data("mm-generic-notif-payload");
            return _r_({
                message: {
                    activity_timestamp: Math.round(Date.now() / 1e3),
                    affiliate_id: parseInt(i.data("mm-generic-notif-aid")),
                    campaign_name: i.data("mm-generic-notif-cname"),
                    message_format: "notification",
                    message_id: i.data("mm-generic-notif-id"),
                    message_subformat: "inweb",
                    payload: "string" != typeof e ? JSON.stringify(e) || "" : e,
                    subformat_id: "" + i.data("id")
                }
            })
        }
          , t = function(e) {
            _i_("3da:0df43e0b"),
            o.track({
                action_name: "mm_notifications.message_clicked",
                action_version: "1.0.0",
                content: n()
            }),
            _r_()
        };
        i.hasClass("js-uc-notification-link") ? i.on("click", t) : i.on("click", ".js-uc-notification-link", t),
        a(i, function() {
            _i_("3da:d4558aa1"),
            o.track({
                action_name: "mm_notifications.message_viewed",
                action_version: "1.0.0",
                content: n()
            }),
            _r_()
        }),
        B.eventEmitter.on("header:notifications:item_removed", function(e, t) {
            _i_("3da:b0400fbb"),
            t.id === i.data("id") && t.fingerprint === i.data("fingerprint") && o.track({
                action_name: "mm_notifications.message_dismissed",
                action_version: "1.0.0",
                content: n()
            }),
            _r_()
        }),
        _r_()
    }
    ,
    _r_()
}),
B.define("component/header/language", function(e, t, i) {
    _i_("3da:18b47083");
    var n = e("component");
    i.exports = n.extend({
        init: function() {
            _i_("3da:4f697c55"),
            $(document.documentElement).on("click", ".js-header-language-item", function() {
                _i_("3da:d1b33788"),
                B.et && B.et.goal("web_shell_ux_header_language_switched"),
                _r_()
            }),
            _r_()
        }
    }),
    _r_()
}),
booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.main.run = !0);
