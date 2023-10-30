/*! For license information please see 811.f5f9a44c.chunk.js.LICENSE.txt */
(self["b-lp-web-mfe"] = self["b-lp-web-mfe"] || []).push([[811], {
    18757: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return f
            }
        });
        var i, r = n(31191), a = n(66022), o = n(32735), s = n(82497), l = n(24605), u = n(6637);
        !function(e) {
            e[e.Query = 0] = "Query",
            e[e.Mutation = 1] = "Mutation",
            e[e.Subscription = 2] = "Subscription"
        }(i || (i = {}));
        var c = new Map;
        function d(e) {
            var t;
            switch (e) {
            case i.Query:
                t = "Query";
                break;
            case i.Mutation:
                t = "Mutation";
                break;
            case i.Subscription:
                t = "Subscription"
            }
            return t
        }
        var v = function(e) {
            function t(t) {
                var n = t.options
                  , i = t.context
                  , r = t.onNewData
                  , a = e.call(this, n, i) || this;
                return a.runLazy = !1,
                a.previous = Object.create(null),
                a.runLazyQuery = function(e) {
                    a.cleanup(),
                    a.runLazy = !0,
                    a.lazyOptions = e,
                    a.onNewData()
                }
                ,
                a.obsRefetch = function(e) {
                    var t;
                    return null === (t = a.currentObservable) || void 0 === t ? void 0 : t.refetch(e)
                }
                ,
                a.obsFetchMore = function(e) {
                    var t;
                    return null === (t = a.currentObservable) || void 0 === t ? void 0 : t.fetchMore(e)
                }
                ,
                a.obsUpdateQuery = function(e) {
                    var t;
                    return null === (t = a.currentObservable) || void 0 === t ? void 0 : t.updateQuery(e)
                }
                ,
                a.obsStartPolling = function(e) {
                    var t;
                    null === (t = a.currentObservable) || void 0 === t || t.startPolling(e)
                }
                ,
                a.obsStopPolling = function() {
                    var e;
                    null === (e = a.currentObservable) || void 0 === e || e.stopPolling()
                }
                ,
                a.obsSubscribeToMore = function(e) {
                    var t;
                    return null === (t = a.currentObservable) || void 0 === t ? void 0 : t.subscribeToMore(e)
                }
                ,
                a.onNewData = r,
                a
            }
            return (0,
            r.ZT)(t, e),
            t.prototype.execute = function() {
                this.refreshClient();
                var e = this.getOptions()
                  , t = e.skip
                  , n = e.query;
                return (t || n !== this.previous.query) && (this.removeQuerySubscription(),
                this.removeObservable(!t),
                this.previous.query = n),
                this.updateObservableQuery(),
                this.getExecuteSsrResult() || this.getExecuteResult()
            }
            ,
            t.prototype.executeLazy = function() {
                return this.runLazy ? [this.runLazyQuery, this.execute()] : [this.runLazyQuery, {
                    loading: !1,
                    networkStatus: u.I.ready,
                    called: !1,
                    data: void 0
                }]
            }
            ,
            t.prototype.fetchData = function() {
                var e = this
                  , t = this.getOptions();
                return !t.skip && !1 !== t.ssr && new Promise((function(t) {
                    return e.startQuerySubscription(t)
                }
                ))
            }
            ,
            t.prototype.afterExecute = function(e) {
                var t = (void 0 === e ? {} : e).lazy
                  , n = void 0 !== t && t;
                this.isMounted = !0;
                var i = this.getOptions();
                return this.currentObservable && !this.ssrInitiated() && this.startQuerySubscription(),
                n && !this.runLazy || this.handleErrorOrCompleted(),
                this.previousOptions = i,
                this.unmount.bind(this)
            }
            ,
            t.prototype.cleanup = function() {
                this.removeQuerySubscription(),
                this.removeObservable(!0),
                delete this.previous.result
            }
            ,
            t.prototype.getOptions = function() {
                var t = e.prototype.getOptions.call(this);
                return this.lazyOptions && (t.variables = (0,
                r.pi)((0,
                r.pi)({}, t.variables), this.lazyOptions.variables),
                t.context = (0,
                r.pi)((0,
                r.pi)({}, t.context), this.lazyOptions.context)),
                this.runLazy && delete t.skip,
                t
            }
            ,
            t.prototype.ssrInitiated = function() {
                return this.context && this.context.renderPromises
            }
            ,
            t.prototype.getExecuteSsrResult = function() {
                var e = this.getOptions()
                  , t = e.ssr
                  , n = e.skip
                  , i = !1 === t
                  , a = this.refreshClient().client.disableNetworkFetches
                  , o = (0,
                r.pi)({
                    loading: !0,
                    networkStatus: u.I.loading,
                    called: !0,
                    data: void 0,
                    stale: !1,
                    client: this.client
                }, this.observableQueryFields());
                if (i && (this.ssrInitiated() || a))
                    return this.previous.result = o,
                    o;
                if (this.ssrInitiated()) {
                    var s = this.getExecuteResult() || o;
                    return s.loading && !n && this.context.renderPromises.addQueryPromise(this, (function() {
                        return null
                    }
                    )),
                    s
                }
            }
            ,
            t.prototype.prepareObservableQueryOptions = function() {
                var e = this.getOptions();
                this.verifyDocumentType(e.query, i.Query);
                var t = e.displayName || "Query";
                return !this.ssrInitiated() || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e.fetchPolicy = "cache-first"),
                (0,
                r.pi)((0,
                r.pi)({}, e), {
                    displayName: t,
                    context: e.context
                })
            }
            ,
            t.prototype.initializeObservableQuery = function() {
                if (this.ssrInitiated() && (this.currentObservable = this.context.renderPromises.getSSRObservable(this.getOptions())),
                !this.currentObservable) {
                    var e = this.prepareObservableQueryOptions();
                    this.previous.observableQueryOptions = (0,
                    r.pi)((0,
                    r.pi)({}, e), {
                        children: void 0
                    }),
                    this.currentObservable = this.refreshClient().client.watchQuery((0,
                    r.pi)({}, e)),
                    this.ssrInitiated() && this.context.renderPromises.registerSSRObservable(this.currentObservable, e)
                }
            }
            ,
            t.prototype.updateObservableQuery = function() {
                if (this.currentObservable) {
                    var e = (0,
                    r.pi)((0,
                    r.pi)({}, this.prepareObservableQueryOptions()), {
                        children: void 0
                    });
                    this.getOptions().skip ? this.previous.observableQueryOptions = e : (0,
                    s.D)(e, this.previous.observableQueryOptions) || (this.previous.observableQueryOptions = e,
                    this.currentObservable.setOptions(e).catch((function() {}
                    )))
                } else
                    this.initializeObservableQuery()
            }
            ,
            t.prototype.startQuerySubscription = function(e) {
                var t = this;
                void 0 === e && (e = this.onNewData),
                this.currentSubscription || this.getOptions().skip || (this.currentSubscription = this.currentObservable.subscribe({
                    next: function(n) {
                        var i = n.loading
                          , r = n.networkStatus
                          , a = n.data
                          , o = t.previous.result;
                        o && o.loading === i && o.networkStatus === r && (0,
                        s.D)(o.data, a) || e()
                    },
                    error: function(n) {
                        if (t.resubscribeToQuery(),
                        !n.hasOwnProperty("graphQLErrors"))
                            throw n;
                        var i = t.previous.result;
                        (i && i.loading || !(0,
                        s.D)(n, t.previous.error)) && (t.previous.error = n,
                        e())
                    }
                }))
            }
            ,
            t.prototype.resubscribeToQuery = function() {
                this.removeQuerySubscription();
                var e = this.currentObservable;
                if (e) {
                    var t = e.last;
                    try {
                        e.resetLastResults(),
                        this.startQuerySubscription()
                    } finally {
                        e.last = t
                    }
                }
            }
            ,
            t.prototype.getExecuteResult = function() {
                var e = this.observableQueryFields()
                  , t = this.getOptions();
                if (t.skip)
                    e = (0,
                    r.pi)((0,
                    r.pi)({}, e), {
                        data: void 0,
                        error: void 0,
                        loading: !1,
                        networkStatus: u.I.ready,
                        called: !0
                    });
                else if (this.currentObservable) {
                    var n = this.currentObservable.getCurrentResult()
                      , i = n.data
                      , a = n.loading
                      , o = n.partial
                      , s = n.networkStatus
                      , c = n.errors
                      , d = n.error;
                    if (c && c.length > 0 && (d = new l.c({
                        graphQLErrors: c
                    })),
                    e = (0,
                    r.pi)((0,
                    r.pi)({}, e), {
                        data: i,
                        loading: a,
                        networkStatus: s,
                        error: d,
                        called: !0
                    }),
                    a)
                        ;
                    else if (d)
                        Object.assign(e, {
                            data: (this.currentObservable.getLastResult() || {}).data
                        });
                    else {
                        var v = this.currentObservable.options.fetchPolicy;
                        if (t.partialRefetch && o && (!i || 0 === Object.keys(i).length) && "cache-only" !== v)
                            return Object.assign(e, {
                                loading: !0,
                                networkStatus: u.I.loading
                            }),
                            e.refetch(),
                            e
                    }
                }
                e.client = this.client,
                this.setOptions(t, !0);
                var m = this.previous.result;
                return this.previous.loading = m && m.loading || !1,
                e.previousData = m && (m.data || m.previousData),
                this.previous.result = e,
                this.currentObservable && this.currentObservable.resetQueryStoreErrors(),
                e
            }
            ,
            t.prototype.handleErrorOrCompleted = function() {
                if (this.currentObservable && this.previous.result) {
                    var e = this.previous.result
                      , t = e.data
                      , n = e.loading
                      , i = e.error;
                    if (!n) {
                        var r = this.getOptions()
                          , a = r.query
                          , o = r.variables
                          , l = r.onCompleted
                          , u = r.onError
                          , c = r.skip;
                        if (this.previousOptions && !this.previous.loading && (0,
                        s.D)(this.previousOptions.query, a) && (0,
                        s.D)(this.previousOptions.variables, o))
                            return;
                        !l || i || c ? u && i && u(i) : l(t)
                    }
                }
            }
            ,
            t.prototype.removeQuerySubscription = function() {
                this.currentSubscription && (this.currentSubscription.unsubscribe(),
                delete this.currentSubscription)
            }
            ,
            t.prototype.removeObservable = function(e) {
                this.currentObservable && (this.currentObservable.tearDownQuery(),
                e && delete this.currentObservable)
            }
            ,
            t.prototype.observableQueryFields = function() {
                var e;
                return {
                    variables: null === (e = this.currentObservable) || void 0 === e ? void 0 : e.variables,
                    refetch: this.obsRefetch,
                    fetchMore: this.obsFetchMore,
                    updateQuery: this.obsUpdateQuery,
                    startPolling: this.obsStartPolling,
                    stopPolling: this.obsStopPolling,
                    subscribeToMore: this.obsSubscribeToMore
                }
            }
            ,
            t
        }(function() {
            function e(e, t) {
                this.isMounted = !1,
                this.previousOptions = {},
                this.context = {},
                this.options = {},
                this.options = e || {},
                this.context = t || {}
            }
            return e.prototype.getOptions = function() {
                return this.options
            }
            ,
            e.prototype.setOptions = function(e, t) {
                void 0 === t && (t = !1),
                t && !(0,
                s.D)(this.options, e) && (this.previousOptions = this.options),
                this.options = e
            }
            ,
            e.prototype.unmount = function() {
                this.isMounted = !1
            }
            ,
            e.prototype.refreshClient = function() {
                var e = this.options && this.options.client || this.context && this.context.client;
                __DEV__ ? (0,
                a.kG)(!!e, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : (0,
                a.kG)(!!e, 29);
                var t = !1;
                return e !== this.client && (t = !0,
                this.client = e,
                this.cleanup()),
                {
                    client: this.client,
                    isNew: t
                }
            }
            ,
            e.prototype.verifyDocumentType = function(e, t) {
                var n = function(e) {
                    var t, n, r = c.get(e);
                    if (r)
                        return r;
                    __DEV__ ? (0,
                    a.kG)(!!e && !!e.kind, "Argument of " + e + " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0,
                    a.kG)(!!e && !!e.kind, 34);
                    var o = e.definitions.filter((function(e) {
                        return "FragmentDefinition" === e.kind
                    }
                    ))
                      , s = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "query" === e.operation
                    }
                    ))
                      , l = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "mutation" === e.operation
                    }
                    ))
                      , u = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "subscription" === e.operation
                    }
                    ));
                    __DEV__ ? (0,
                    a.kG)(!o.length || s.length || l.length || u.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0,
                    a.kG)(!o.length || s.length || l.length || u.length, 35),
                    __DEV__ ? (0,
                    a.kG)(s.length + l.length + u.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + e + " had " + s.length + " queries, " + u.length + " subscriptions and " + l.length + " mutations. You can use 'compose' to join multiple operation types to a component") : (0,
                    a.kG)(s.length + l.length + u.length <= 1, 36),
                    n = s.length ? i.Query : i.Mutation,
                    s.length || l.length || (n = i.Subscription);
                    var d = s.length ? s : l.length ? l : u;
                    __DEV__ ? (0,
                    a.kG)(1 === d.length, "react-apollo only supports one definition per HOC. " + e + " had " + d.length + " definitions. You can use 'compose' to join multiple operation types to a component") : (0,
                    a.kG)(1 === d.length, 37);
                    var v = d[0];
                    t = v.variableDefinitions || [];
                    var m = {
                        name: v.name && "Name" === v.name.kind ? v.name.value : "data",
                        type: n,
                        variables: t
                    };
                    return c.set(e, m),
                    m
                }(e)
                  , r = d(t)
                  , o = d(n.type);
                __DEV__ ? (0,
                a.kG)(n.type === t, "Running a " + r + " requires a graphql " + r + ", but a " + o + " was used instead.") : (0,
                a.kG)(n.type === t, 30)
            }
            ,
            e
        }());
        var m = n(55261);
        function p(e, t, n) {
            void 0 === n && (n = !1);
            var i = (0,
            o.useContext)((0,
            m.K)())
              , a = (0,
            o.useReducer)((function(e) {
                return e + 1
            }
            ), 0)
              , l = a[0]
              , u = a[1]
              , c = t ? (0,
            r.pi)((0,
            r.pi)({}, t), {
                query: e
            }) : {
                query: e
            }
              , d = (0,
            o.useRef)()
              , p = d.current || (d.current = new v({
                options: c,
                context: i,
                onNewData: function() {
                    p.ssrInitiated() ? u() : Promise.resolve().then((function() {
                        return d.current && d.current.isMounted && u()
                    }
                    ))
                }
            }));
            p.setOptions(c),
            p.context = i;
            var f = function(e, t) {
                var n = (0,
                o.useRef)();
                return n.current && (0,
                s.D)(t, n.current.key) || (n.current = {
                    key: t,
                    value: e()
                }),
                n.current.value
            }((function() {
                return n ? p.executeLazy() : p.execute()
            }
            ), {
                options: (0,
                r.pi)((0,
                r.pi)({}, c), {
                    onError: void 0,
                    onCompleted: void 0
                }),
                context: i,
                tick: l
            })
              , g = n ? f[1] : f;
            return __DEV__ && function(e) {
                if (__DEV__) {
                    var t = (0,
                    o.useRef)(!1);
                    (0,
                    o.useEffect)((function() {
                        return function() {
                            t.current = !0
                        }
                    }
                    ), []),
                    (0,
                    o.useEffect)((function() {
                        !0 === t.current && (t.current = !1,
                        e())
                    }
                    ), [])
                }
            }(u),
            (0,
            o.useEffect)((function() {
                return function() {
                    p.cleanup(),
                    d.current = void 0
                }
            }
            ), []),
            (0,
            o.useEffect)((function() {
                return p.afterExecute({
                    lazy: n
                })
            }
            ), [g.loading, g.networkStatus, g.error, g.data, p.currentObservable]),
            f
        }
        function f(e, t) {
            return p(e, t, !1)
        }
    },
    39770: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var i = n(32735)
          , r = n(23793)
          , a = function(e) {
            var t = e.rating
              , n = e.showHalf
              , a = e.isEstimate
              , o = e.className
              , s = e.size
              , l = void 0 === s ? "smaller" : s
              , u = n ? Math.round(2 * t) / 2 : Math.round(t)
              , c = a ? "circles" : "stars";
            return 0 === u ? null : i.createElement(r.iG, {
                value: u,
                variant: c,
                className: o,
                size: l
            })
        }
    },
    84440: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return d
            }
        });
        var i = n(92577)
          , r = n(39476)
          , a = n(32735)
          , o = "b267fbcf9c"
          , s = "d1812b86a5"
          , l = "d5cbac0608"
          , u = n(40841)
          , c = n.n(u)
          , d = function(e) {
            var t = e.children
              , n = e.className
              , u = e.alwaysShow
              , d = e.readMoreClassName
              , v = (0,
            a.useRef)(null)
              , m = (0,
            a.useState)(!1)
              , p = (0,
            i.Z)(m, 2)
              , f = p[0]
              , g = p[1]
              , h = (0,
            a.useState)(!u)
              , b = (0,
            i.Z)(h, 2)
              , y = b[0]
              , _ = b[1];
            return (0,
            a.useEffect)((function() {
                v.current && g(v.current.clientHeight < v.current.scrollHeight)
            }
            ), [t]),
            a.createElement("div", {
                className: n
            }, a.createElement("div", {
                className: c()(o, y && s),
                ref: v
            }, t), f && a.createElement("button", {
                className: c()(l, d),
                onClick: function(e) {
                    e.stopPropagation(),
                    _((function(e) {
                        return !e
                    }
                    ))
                }
            }, y ? a.createElement(r.cC, {
                tag: "seo_geo_lp_ugc_block_cta_more"
            }) : a.createElement(r.cC, {
                tag: "seo_geo_lp_ugc_block_cta_less"
            })))
        }
    },
    20336: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return L
            }
        });
        var i, r = n(20011), a = n(47169), o = n(32735), s = n(23793), l = "dd2b6b5d78", u = "ae2e47ceef", c = "aeb12fd78f", d = "bd08f205f8", v = "feb26dbaba", m = "ca43ee2cb8", p = "bc0dd4fbeb", f = "d12e15586f", g = "dccde6b34b", h = "eefe3d1e38", b = "f2a765a032", y = "a6f32e2e6a", _ = "ca714f1c98", k = "a0dd212711", S = n(40841), O = n.n(S), w = n(39476), N = n(3212);
        function j() {
            return j = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ,
            j.apply(this, arguments)
        }
        var x = function(e) {
            return o.createElement("svg", j({
                "aria-hidden": "true",
                fill: "#006607",
                height: 20,
                width: 20,
                viewBox: "0 0 128 128"
            }, e), i || (i = o.createElement("path", {
                d: "M52 102a8 8 0 0 1-5.7-2.3l-28-28a8 8 0 0 1 11.4-11.4L52 82.7l46.3-46.4a8 8 0 0 1 11.4 11.4l-52 52A8 8 0 0 1 52 102z"
            })))
        }
          , E = n(84440)
          , P = n(39770)
          , D = n(74041);
        function F(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var T = function(e) {
            var t = e.imageAlt
              , n = e.imageSrc
              , i = e.name
              , l = e.address
              , S = e.url
              , j = e.linkTitle
              , F = e.onClick
              , T = e.label
              , Q = e.description
              , A = e.reviewText
              , Z = e.pricePerNightWithCurrency
              , L = e.reviewScore
              , R = e.reviewCount
              , I = e.descriptionIsFeature
              , M = e.starsRating
              , q = (0,
            D.Z)()
              , z = q.cardAttributes
              , G = q.ctaRef
              , H = (0,
            w.QT)().language
              , V = !!Q
              , U = A || V
              , $ = I && V && !A;
            return o.createElement(s.Zb, {
                fill: !0,
                attributes: C((0,
                a.Z)({
                    itemScope: !0,
                    itemType: "http://schema.org/Hotel"
                }, "data-testid", "hotel"), z),
                className: u
            }, o.createElement(s.oM, {
                ratio: "4:3"
            }, o.createElement(s.Ee, {
                src: n,
                alt: t,
                imgAttributes: {
                    itemProp: "image"
                }
            })), o.createElement(s.xu, null, o.createElement("a", {
                href: S,
                className: c,
                onClick: F,
                ref: G,
                "data-testid": "hotelLink",
                title: j
            }, o.createElement(s.Dx, {
                variant: "strong_1",
                title: o.createElement(o.Fragment, null, i, " ", M && o.createElement(P.Z, (0,
                r.Z)({}, M, {
                    className: _
                }))),
                titleTagName: "h3",
                titleAttributes: {
                    itemProp: "name"
                },
                subtitle: o.createElement("span", {
                    itemProp: "addressLocality",
                    className: d
                }, l),
                subtitleAttributes: {
                    itemProp: "address",
                    itemScope: !0,
                    itemType: "http://schema.org/PostalAddress"
                }
            })), T && o.createElement("div", {
                className: v
            }, o.createElement(s.Ct, {
                text: T,
                variant: "outline"
            })), U && o.createElement(E.Z, {
                className: O()(I && g),
                alwaysShow: $
            }, Q && I && o.createElement(x, {
                "aria-hidden": !0,
                className: h
            }), Q && o.createElement(s.xv, {
                variant: "body_2",
                tagName: "p",
                className: O()(b, I && y)
            }, Q), A && o.createElement(s.xv, {
                variant: "body_2",
                tagName: "p",
                className: O()(m, Q && p)
            }, A)), !!Z && o.createElement("div", {
                className: f
            }, o.createElement(w.cC, {
                tag: "seo_lp_average_price_per_night",
                variables: {
                    price: Z
                }
            })), !!L && o.createElement(N.Z, {
                score: L,
                scoreFormatted: function(e) {
                    var t = Math.min(10, Math.max(0, e));
                    return new Intl.NumberFormat(H,{
                        maximumFractionDigits: 1,
                        minimumFractionDigits: 1
                    }).format(t)
                }(L),
                reviewCount: R,
                showRating: !0,
                inline: !0,
                size: "small",
                className: k
            })))
        }
          , Q = n(24094);
        function A(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? A(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var L = function(e) {
            var t = e.title
              , n = e.action
              , i = e.hotels
              , u = e.onHotelClick
              , c = e.onActionClick
              , d = e.onCarouselNavigate
              , v = e.descriptionsAsFeature
              , m = void 0 !== v && v
              , p = (0,
            w.QT)().trans;
            return o.createElement(s.lr, {
                nextButtonAriaLabel: p((0,
                Q.t)("a11y_aria_label_carousel_next_previous")),
                previousButtonAriaLabel: p((0,
                Q.t)("a11y_aria_label_carousel_previous")),
                title: o.createElement(s.Dx, {
                    title: t,
                    titleTagName: "h2",
                    variant: "headline_2"
                }),
                action: Z(Z({}, n), {}, {
                    className: l,
                    attributes: (0,
                    a.Z)({}, "data-testid", "more"),
                    onClick: c
                }),
                onAfterNavigate: d,
                size: "medium"
            }, i.map((function(e) {
                return o.createElement(T, (0,
                r.Z)({
                    key: e.url
                }, e, {
                    onClick: function() {
                        return null === u || void 0 === u ? void 0 : u(e)
                    },
                    descriptionIsFeature: m
                }))
            }
            )))
        }
    },
    3212: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var i = n(32735)
          , r = n(39476)
          , a = n(24094)
          , o = function(e) {
            var t = (0,
            r.QT)();
            return (0,
            i.useMemo)((function() {
                var n, i;
                return e < 3 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "1"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_very_poor"))) : e >= 3 && e < 4 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "2"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_poor"))) : e >= 4 && e < 5 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "3"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_disappointing"))) : e >= 5 && e < 5.6 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "4"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_average"))) : e >= 5.6 && e < 6 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "5"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_above_average"))) : e >= 6 && e < 7 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "6"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_pleasant"))) : e >= 7 && e < 8 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "7"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_good"))) : e >= 8 && e < 8.6 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "8"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_very_good"))) : e >= 8.6 && e < 9 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "9"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_fabulous"))) : e >= 9 && e < 9.5 ? (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "10"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_superb"))) : (n = t.trans((0,
                a.t)("a11y_adjective_rating", {
                    variables: {
                        rating_adjective: "11"
                    }
                })),
                i = t.trans((0,
                a.t)("review_adj_exceptional"))),
                {
                    a11yRatingAdjective: n,
                    ratingAdjective: i
                }
            }
            ), [t, e])
        }
          , s = n(23793)
          , l = function(e) {
            var t = e.score
              , n = e.scoreFormatted
              , l = e.size
              , u = e.alignment
              , c = e.variant
              , d = e.reviewCount
              , v = e.showRating
              , m = e.className
              , p = e.inline
              , f = e.isExternal
              , g = e.reviewCountFormatted
              , h = (0,
            r.QT)()
              , b = o(t)
              , y = b.a11yRatingAdjective
              , _ = b.ratingAdjective
              , k = (0,
            i.useMemo)((function() {
                return n || (t >= 10 ? "10" : t <= 0 ? "0" : t.toFixed(1))
            }
            ), [t, n])
              , S = (0,
            i.useMemo)((function() {
                if (d)
                    return g || (f ? h.trans((0,
                    a.t)("extl_reviews_no_bcom_reviews", {
                        variables: {
                            total_num_reviews: d.toLocaleString(h.language)
                        },
                        num_exception: d
                    })) : h.trans((0,
                    a.t)("m_pp_num_reviews_entry", {
                        variables: {
                            num_reviews: d.toLocaleString(h.language)
                        },
                        num_exception: d
                    })))
            }
            ), [f, d, h, g]);
            return i.createElement(s.l, {
                className: m,
                score: k,
                scoreAriaLabel: h.trans((0,
                a.t)("a11y_rating_score_for_screenreader", {
                    variables: {
                        review_score_number: k
                    }
                })),
                rating: v ? _ : void 0,
                reviewCount: S,
                ratingReviewAriaLabel: y,
                size: l,
                inline: p,
                alignment: u,
                variant: c
            })
        }
    },
    47780: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return y
            }
        });
        var i = n(20011)
          , r = n(32735)
          , a = n(20336)
          , o = n(39476)
          , s = n(24094)
          , l = "f535aed1a1"
          , u = n(80656)
          , c = n(99070)
          , d = n(21930)
          , v = function(e, t, n) {
            for (var i = n.maxLength, r = void 0 === i ? 300 : i, a = n.stripNewlines, o = void 0 !== a && a, s = n.minLength, l = o ? e.replace(/\n/g, " ").trim() : e.trim(), u = null !== s && void 0 !== s ? s : r / 3, c = [], d = !1, v = !1, f = 0, g = p(l, t); f < g.length; f++) {
                var h = g[f]
                  , b = h.index
                  , y = h.segment
                  , _ = b + y.trim().length;
                if (_ < u)
                    c.push(y);
                else {
                    if (!(_ <= r)) {
                        if (v)
                            break;
                        c.push(m(y, t, r - b)),
                        d = !0;
                        break
                    }
                    c.push(y),
                    v = !0
                }
            }
            var k = c.join("").trim();
            return !/[\.?!]/.test(k[k.length - 1]) && d ? k + "..." : k
        }
          , m = function(e, t, n) {
            for (var i = [], r = 0, a = f(e, t); r < a.length; r++) {
                var o = a[r]
                  , s = o.index
                  , l = o.segment
                  , u = o.isWordLike
                  , c = s + l.length;
                if (!u && c <= n)
                    i.push(l);
                else {
                    if (!(c <= n))
                        break;
                    i.push(l)
                }
            }
            return i.join("")
        }
          , p = function(e, t) {
            if (Intl.Segmenter) {
                var n = new Intl.Segmenter(t,{
                    granularity: "sentence"
                });
                return (0,
                d.Z)(n.segment(e.trim()))
            }
            var i = (0,
            d.Z)(e.matchAll(/(.*?[\.?!]+\s*)/g));
            return i.length ? i.map((function(t) {
                var n, i;
                return {
                    segment: t[0],
                    index: null !== (n = t.index) && void 0 !== n ? n : 0,
                    input: null !== (i = t.input) && void 0 !== i ? i : e
                }
            }
            )) : [{
                segment: e,
                index: 0,
                input: e
            }]
        }
          , f = function(e, t) {
            if (Intl.Segmenter) {
                var n = new Intl.Segmenter(t,{
                    granularity: "word"
                });
                return (0,
                d.Z)(n.segment(e))
            }
            return (0,
            d.Z)(e.matchAll(/(\w+)|(\W)/g)).map((function(t) {
                var n, i;
                return {
                    segment: t[0],
                    index: null !== (n = t.index) && void 0 !== n ? n : 0,
                    input: null !== (i = t.input) && void 0 !== i ? i : e,
                    isWordLike: /\w+/.test(t[0])
                }
            }
            ))
        }
          , g = n(82489)
          , h = function(e) {
            var t = (0,
            o.QT)()
              , n = t.trans
              , i = t.language;
            return {
                getHotelSegmentPropsForType: function(t, r) {
                    var a, o, l, c, d, v, m, p, f = null === e || void 0 === e || null === (a = e.landingContent) || void 0 === a || null === (o = a.targetedHotelSegments) || void 0 === o ? void 0 : o.segments.find((function(e) {
                        return (null === e || void 0 === e ? void 0 : e.type) === t
                    }
                    ));
                    if (f) {
                        var h = null === e || void 0 === e || null === (l = e.landingContent) || void 0 === l || null === (c = l.destination) || void 0 === c || null === (d = c.taxonomy) || void 0 === d || null === (v = d.city) || void 0 === v ? void 0 : v.translation
                          , y = b({
                            language: i,
                            trans: n,
                            label: r,
                            cityName: null !== (m = null === h || void 0 === h ? void 0 : h.name) && void 0 !== m ? m : "",
                            inCityName: null !== (p = null === h || void 0 === h ? void 0 : h.inName) && void 0 !== p ? p : ""
                        })
                          , _ = f.objects.filter(u.V).map(y);
                        if (_.length)
                            return {
                                action: {
                                    text: n((0,
                                    s.t)("seo_lp_generic_see_all_for_carousels_cta"))
                                },
                                onActionClick: function() {
                                    var e;
                                    location.href = (0,
                                    g.Z)(null !== (e = f.searchUrl) && void 0 !== e ? e : "")
                                },
                                hotels: _
                            }
                    }
                }
            }
        }
          , b = function(e) {
            var t = e.language
              , n = e.trans
              , i = e.label
              , r = e.cityName
              , a = e.inCityName;
            return function(e) {
                var o, l, u, d, m, p, f, h, b, y, _;
                return {
                    name: null !== (o = e.basicInfo.nameTranslation.name) && void 0 !== o ? o : "",
                    address: e.district ? n((0,
                    s.t)("seo_core_lps_hotel_in_district_city", {
                        variables: {
                            city_name: r,
                            in_city_name: a,
                            district_name: e.district
                        }
                    })) : n((0,
                    s.t)("seo_core_lps_hotel_in_city_only", {
                        variables: {
                            city_name: r,
                            in_city_name: a
                        }
                    })),
                    imageAlt: null !== (l = e.imageAlt) && void 0 !== l ? l : e.basicInfo.nameTranslation.name,
                    imageSrc: e.imageSrc ? (0,
                    c.Z)(e.imageSrc) : "",
                    url: (0,
                    g.Z)(null !== (u = e.url) && void 0 !== u ? u : ""),
                    description: v(null !== (d = null === (m = e.translation) || void 0 === m ? void 0 : m.description) && void 0 !== d ? d : "", t, {
                        maxLength: 200,
                        stripNewlines: !0
                    }),
                    pricePerNightWithCurrency: null !== (p = null === (f = e.basicInfo.minPrice) || void 0 === f ? void 0 : f.value) && void 0 !== p ? p : "",
                    reviewCount: null !== (h = e.reviewsCount) && void 0 !== h ? h : void 0,
                    reviewScore: null !== (b = e.reviewsScore) && void 0 !== b ? b : void 0,
                    reviewText: null !== (y = e.reviewText) && void 0 !== y ? y : void 0,
                    label: i,
                    linkTitle: null !== (_ = e.basicInfo.nameTranslation.name) && void 0 !== _ ? _ : ""
                }
            }
        }
          , y = function(e) {
            var t, n, u, c, d, v, m, p, f, g, b, y, _, k = e.queryData, S = k.loading, O = k.data, w = k.error, N = (0,
            o.QT)().trans, j = !S && w && null === (null === O || void 0 === O || null === (t = O.landingContent) || void 0 === t ? void 0 : t.targetedHotelSegments), x = h(O).getHotelSegmentPropsForType;
            if (S || j)
                return null;
            var E = null !== (n = null === O || void 0 === O || null === (u = O.landingContent) || void 0 === u || null === (c = u.destination) || void 0 === c || null === (d = c.taxonomy) || void 0 === d || null === (v = d.city) || void 0 === v || null === (m = v.translation) || void 0 === m ? void 0 : m.name) && void 0 !== n ? n : ""
              , P = null !== (p = null === O || void 0 === O || null === (f = O.landingContent) || void 0 === f || null === (g = f.destination) || void 0 === g || null === (b = g.taxonomy) || void 0 === b || null === (y = b.city) || void 0 === y || null === (_ = y.translation) || void 0 === _ ? void 0 : _.inName) && void 0 !== p ? p : ""
              , D = x("breakfast", N((0,
            s.t)("seo_core_all_actions_breakfast_options_badge")))
              , F = x("budget", N((0,
            s.t)("lp_theme_names", "7", "singular_uc")))
              , C = x("city_center", N((0,
            s.t)("hotel_theme_central_location")))
              , T = {
                city_name: E,
                in_city_name: P
            };
            return r.createElement(r.Fragment, null, D && r.createElement("div", {
                className: l
            }, r.createElement(a.Z, (0,
            i.Z)({
                title: N((0,
                s.t)("seo_city_lp_hotels_with_breakfast_header", {
                    variables: T
                }))
            }, D))), F && r.createElement("div", {
                className: l
            }, r.createElement(a.Z, (0,
            i.Z)({
                title: N((0,
                s.t)("seo_city_lp_budget_hotels_only_header", {
                    variables: T
                }))
            }, F))), C && r.createElement("div", {
                className: l
            }, r.createElement(a.Z, (0,
            i.Z)({
                title: N((0,
                s.t)("seo_city_lp_city_centre_hotels_only_header", {
                    variables: T
                }))
            }, C))))
        }
    },
    71940: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return c
            }
        });
        var i = n(32735)
          , r = n(18757)
          , a = n(29572)
          , o = n(17590)
          , s = {
            kind: "Document",
            definitions: function(e) {
                var t = {};
                return e.filter((function(e) {
                    if ("FragmentDefinition" !== e.kind)
                        return !0;
                    var n = e.name.value;
                    return !t[n] && (t[n] = !0,
                    !0)
                }
                ))
            }([{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TargetedHotels"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "input"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "LandingQueriesInput"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "excludeMinPrice"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Boolean"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "landingContent"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "input"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "TargetedHotelsFragment"
                                },
                                directives: []
                            }, {
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "TargetedHotelCityDestinationFragment"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }].concat(o._.definitions, o.S.definitions)),
            loc: {
                start: 0,
                end: 225,
                source: {
                    body: "\n  query TargetedHotels(\n    $input: LandingQueriesInput!\n    $excludeMinPrice: Boolean!\n  ) {\n    landingContent(input: $input) {\n      ...TargetedHotelsFragment\n      ...TargetedHotelCityDestinationFragment\n    }\n  }\n  \n  \n",
                    name: "GraphQL request",
                    locationOffset: {
                        line: 1,
                        column: 1
                    }
                }
            }
        }
          , l = n(47780)
          , u = n(28691)
          , c = function() {
            var e = (0,
            r.a)(s, {
                variables: {
                    input: {
                        originalUri: (0,
                        a.ZP)()
                    },
                    excludeMinPrice: (0,
                    u.Z)()
                }
            });
            return i.createElement(l.Z, {
                queryData: e
            })
        }
    },
    17590: function(e, t, n) {
        "use strict";
        n.d(t, {
            S: function() {
                return r
            },
            _: function() {
                return i
            }
        });
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "TargetedHotelsFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "LandingContentQueries"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "targetedHotelSegments"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "segments"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "searchUrl"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "objects"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "basicInfo"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "minPrice"
                                                        },
                                                        arguments: [],
                                                        directives: [{
                                                            kind: "Directive",
                                                            name: {
                                                                kind: "Name",
                                                                value: "skip"
                                                            },
                                                            arguments: [{
                                                                kind: "Argument",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "if"
                                                                },
                                                                value: {
                                                                    kind: "Variable",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "excludeMinPrice"
                                                                    }
                                                                }
                                                            }]
                                                        }],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "amount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "currency"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "roundedValue"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "value"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "nameTranslation"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "inName"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "languageCode"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "imageSrc"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "imageAlt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "url"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "description"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "district"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "reviewText"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "reviewsScore"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "reviewsCount"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "translation"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "description"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 720,
                source: {
                    body: "\n  fragment TargetedHotelsFragment on LandingContentQueries {\n    targetedHotelSegments {\n      segments {\n        searchUrl\n        type\n        objects {\n          basicInfo {\n            id\n            minPrice @skip(if: $excludeMinPrice) {\n              amount\n              currency\n              roundedValue\n              value\n            }\n            nameTranslation {\n              name\n              inName\n              languageCode\n            }\n          }\n          imageSrc\n          imageAlt\n          url\n          description\n          district\n          reviewText\n          reviewsScore\n          reviewsCount\n          translation {\n            description\n          }\n        }\n      }\n    }\n  }\n",
                    name: "GraphQL request",
                    locationOffset: {
                        line: 1,
                        column: 1
                    }
                }
            }
        }
          , r = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "TargetedHotelCityDestinationFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "LandingContentQueries"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "destination"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "taxonomy"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "city"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "translation"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "inName"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 226,
                source: {
                    body: "\n  fragment TargetedHotelCityDestinationFragment on LandingContentQueries {\n    destination {\n      taxonomy {\n        city {\n          translation {\n            name\n            inName\n          }\n        }\n      }\n    }\n  }\n",
                    name: "GraphQL request",
                    locationOffset: {
                        line: 1,
                        column: 1
                    }
                }
            }
        }
    },
    82489: function(e, t, n) {
        "use strict";
        var i = n(80827);
        t.Z = function(e) {
            var t = new URL(e,"https://booking.com");
            return (0,
            i.K)({
                pathname: t.pathname,
                searchParams: t.searchParams
            }).toString()
        }
    },
    99070: function(e, t, n) {
        "use strict";
        var i = n(79399);
        t.Z = function(e) {
            var t = (0,
            i.T)().getCDNOrigin();
            return "".concat(t).concat(e)
        }
    },
    29572: function(e, t, n) {
        "use strict";
        n.d(t, {
            EJ: function() {
                return a
            },
            ks: function() {
                return o
            }
        });
        var i = n(79399)
          , r = function() {
            var e;
            return (null === (e = (0,
            i.T)().getBasePageUrl()) || void 0 === e ? void 0 : e.pathname.toString()) || ""
        }
          , a = function() {
            return r().includes("country")
        }
          , o = function() {
            return (0,
            i.T)().getBasePageUrl().toString()
        };
        t.ZP = r
    },
    28691: function(e, t, n) {
        "use strict";
        var i = n(79399);
        t.Z = function() {
            var e;
            return null !== (e = (0,
            i.T)().isRobotRequest()) && void 0 !== e && e
        }
    },
    80656: function(e, t, n) {
        "use strict";
        n.d(t, {
            V: function() {
                return i
            }
        });
        var i = function(e) {
            return null !== e && void 0 !== e
        }
    },
    74041: function(e, t, n) {
        "use strict";
        var i = n(32735);
        t.Z = function() {
            var e = (0,
            i.useRef)(null)
              , t = +new Date;
            return {
                cardAttributes: {
                    onClick: function(n) {
                        var i, r;
                        (null === (i = e.current) || void 0 === i ? void 0 : i.contains(n.target)) || +new Date - t < 200 && (null === (r = e.current) || void 0 === r || r.click())
                    },
                    onMouseDown: function() {
                        t = +new Date
                    }
                },
                ctaRef: e
            }
        }
    },
    80827: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return N
            }
        });
        var i, r, a = n(79399), o = n(98178);
        !function(e) {
            e.admin = "admin",
            e.app = "app",
            e.book = "book",
            e.join = "join"
        }(i || (i = {}));
        var s, l, u, c, d = ((r = {
            DEFAULT: ["label", "sid", "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "gclid"]
        })[o.N.EXTRANET] = ["hotel_id", "lang", "ses"],
        r), v = {
            PRODUCTION: (s = {},
            s[i.admin] = "admin",
            s[i.app] = "www",
            s[i.book] = "secure",
            s[i.join] = "join",
            s),
            STAGING: (l = {},
            l[i.admin] = "a",
            l[i.app] = "w",
            l[i.book] = "b",
            l[i.join] = "j",
            l),
            KVM: (u = {},
            u[i.admin] = ["adm", "devadmin"],
            u[i.app] = ["app", "devapp"],
            u[i.book] = ["book", "devbook"],
            u[i.join] = ["joinapp", "devjoinapp"],
            u),
            DQS: (c = {},
            c[i.admin] = "admin",
            c[i.app] = "app",
            c[i.book] = "book",
            c[i.join] = "join",
            c)
        }, m = "booking.com", p = S(v.PRODUCTION), f = S(v.STAGING), g = S(v.KVM), h = S(v.DQS), b = new RegExp("^(.*?)\\.?(" + m + "|booking.cn)$"), y = new RegExp("^(?:" + f.join("|") + ")(\\d+)$"), _ = new RegExp("^(\\w+)-(" + g.join("|") + ").*?\\.dev$"), k = new RegExp("(?:" + h.join("|") + ")\\.dqs$");
        function S(e) {
            return Object.values(e).flat()
        }
        function O(e, t) {
            var n = new Set;
            null == t || t.forEach((function(t, i) {
                n.has(i) ? e.append(i, t) : (e.set(i, t),
                n.add(i))
            }
            ))
        }
        function w(e) {
            return Array.isArray(e) ? e[0] : e
        }
        function N(e) {
            return function() {
                var e = (0,
                a.T)()
                  , t = e.getBasePageUrl();
                if (!t)
                    throw new Error("Cannot construct URLs without base page URL, most likely it is an integration error. Please report this issue to #capla channel in Slack.");
                var n = function(e, t, n, i) {
                    var r = new URLSearchParams
                      , a = t && d.hasOwnProperty(t) ? t : "DEFAULT";
                    return d[a].forEach((function(t) {
                        var n = e.searchParams.get(t);
                        n && r.set(t, n)
                    }
                    )),
                    "number" === typeof (null == n ? void 0 : n.id) && r.set("aid", n.id.toString()),
                    (null == n ? void 0 : n.label) && r.set("label", n.label.toString()),
                    i && e.searchParams.forEach((function(e, t) {
                        var n;
                        (0 === (n = t).indexOf("exp_") || 0 === n.indexOf("b_feature_running_") || "exp_all" === n || "hotel_account_id" === n || "i_am_from" === n || "my_ip" === n) && r.set(t, e)
                    }
                    )),
                    r
                }(t, e.getSiteType(), e.getAffiliate(), e.isInternalIp());
                return function(i) {
                    var r = new URL("" + t.origin + t.pathname)
                      , a = i.host ? function(e, t) {
                        var n = e.host.match(b);
                        if (!n)
                            return e;
                        var i = n[1]
                          , r = n[2];
                        if ("" === i || p.includes(i)) {
                            var a = w(v.PRODUCTION[t]);
                            e.host = a + "." + r
                        } else if (_.test(i)) {
                            var o = w(v.KVM[t]);
                            e.host = i.replace(_, "$1-" + o + ".dev." + m)
                        } else if (k.test(i)) {
                            var s = w(v.DQS[t]);
                            e.host = s + ".dqs." + m
                        } else if (y.test(i)) {
                            var l = w(v.STAGING[t]);
                            e.host = i.replace(y, l + "$1." + m)
                        }
                        return e
                    }(r, i.host) : r;
                    return i.pathname && (a.pathname = i.pathname),
                    a.hash = i.hash || "",
                    e.isRobotRequest() || (O(a.searchParams, n),
                    O(a.searchParams, i.searchParams)),
                    a
                }
            }()(e)
        }
    },
    40841: function(e, t) {
        var n;
        !function() {
            "use strict";
            var i = {}.hasOwnProperty;
            function r() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var a = typeof n;
                        if ("string" === a || "number" === a)
                            e.push(n);
                        else if (Array.isArray(n) && n.length) {
                            var o = r.apply(null, n);
                            o && e.push(o)
                        } else if ("object" === a)
                            for (var s in n)
                                i.call(n, s) && n[s] && e.push(s)
                    }
                }
                return e.join(" ")
            }
            e.exports ? (r.default = r,
            e.exports = r) : void 0 === (n = function() {
                return r
            }
            .apply(t, [])) || (e.exports = n)
        }()
    },
    37017: function(e, t, n) {
        "use strict";
        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        n.d(t, {
            Z: function() {
                return i
            }
        })
    },
    92577: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var i = n(49139);
        function r(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var i, r, a = [], o = !0, s = !1;
                    try {
                        for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value),
                        !t || a.length !== t); o = !0)
                            ;
                    } catch (l) {
                        s = !0,
                        r = l
                    } finally {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (s)
                                throw r
                        }
                    }
                    return a
                }
            }(e, t) || (0,
            i.Z)(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    21930: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var i = n(37017);
        var r = n(49139);
        function a(e) {
            return function(e) {
                if (Array.isArray(e))
                    return (0,
                    i.Z)(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || (0,
            r.Z)(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    49139: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var i = n(37017);
        function r(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return (0,
                    i.Z)(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0,
                i.Z)(e, t) : void 0
            }
        }
    }
}]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/811.f5f9a44c.chunk.js.map
