"use strict";
(self["b-lp-web-mfe"] = self["b-lp-web-mfe"] || []).push([[111], {
    18757: function(e, t, n) {
        n.d(t, {
            a: function() {
                return f
            }
        });
        var i, r = n(31191), o = n(66022), a = n(32735), s = n(82497), u = n(24605), l = n(6637);
        !function(e) {
            e[e.Query = 0] = "Query",
            e[e.Mutation = 1] = "Mutation",
            e[e.Subscription = 2] = "Subscription"
        }(i || (i = {}));
        var c = new Map;
        function p(e) {
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
        var d = function(e) {
            function t(t) {
                var n = t.options
                  , i = t.context
                  , r = t.onNewData
                  , o = e.call(this, n, i) || this;
                return o.runLazy = !1,
                o.previous = Object.create(null),
                o.runLazyQuery = function(e) {
                    o.cleanup(),
                    o.runLazy = !0,
                    o.lazyOptions = e,
                    o.onNewData()
                }
                ,
                o.obsRefetch = function(e) {
                    var t;
                    return null === (t = o.currentObservable) || void 0 === t ? void 0 : t.refetch(e)
                }
                ,
                o.obsFetchMore = function(e) {
                    var t;
                    return null === (t = o.currentObservable) || void 0 === t ? void 0 : t.fetchMore(e)
                }
                ,
                o.obsUpdateQuery = function(e) {
                    var t;
                    return null === (t = o.currentObservable) || void 0 === t ? void 0 : t.updateQuery(e)
                }
                ,
                o.obsStartPolling = function(e) {
                    var t;
                    null === (t = o.currentObservable) || void 0 === t || t.startPolling(e)
                }
                ,
                o.obsStopPolling = function() {
                    var e;
                    null === (e = o.currentObservable) || void 0 === e || e.stopPolling()
                }
                ,
                o.obsSubscribeToMore = function(e) {
                    var t;
                    return null === (t = o.currentObservable) || void 0 === t ? void 0 : t.subscribeToMore(e)
                }
                ,
                o.onNewData = r,
                o
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
                    networkStatus: l.I.ready,
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
                  , o = this.refreshClient().client.disableNetworkFetches
                  , a = (0,
                r.pi)({
                    loading: !0,
                    networkStatus: l.I.loading,
                    called: !0,
                    data: void 0,
                    stale: !1,
                    client: this.client
                }, this.observableQueryFields());
                if (i && (this.ssrInitiated() || o))
                    return this.previous.result = a,
                    a;
                if (this.ssrInitiated()) {
                    var s = this.getExecuteResult() || a;
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
                          , o = n.data
                          , a = t.previous.result;
                        a && a.loading === i && a.networkStatus === r && (0,
                        s.D)(a.data, o) || e()
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
                        networkStatus: l.I.ready,
                        called: !0
                    });
                else if (this.currentObservable) {
                    var n = this.currentObservable.getCurrentResult()
                      , i = n.data
                      , o = n.loading
                      , a = n.partial
                      , s = n.networkStatus
                      , c = n.errors
                      , p = n.error;
                    if (c && c.length > 0 && (p = new u.c({
                        graphQLErrors: c
                    })),
                    e = (0,
                    r.pi)((0,
                    r.pi)({}, e), {
                        data: i,
                        loading: o,
                        networkStatus: s,
                        error: p,
                        called: !0
                    }),
                    o)
                        ;
                    else if (p)
                        Object.assign(e, {
                            data: (this.currentObservable.getLastResult() || {}).data
                        });
                    else {
                        var d = this.currentObservable.options.fetchPolicy;
                        if (t.partialRefetch && a && (!i || 0 === Object.keys(i).length) && "cache-only" !== d)
                            return Object.assign(e, {
                                loading: !0,
                                networkStatus: l.I.loading
                            }),
                            e.refetch(),
                            e
                    }
                }
                e.client = this.client,
                this.setOptions(t, !0);
                var v = this.previous.result;
                return this.previous.loading = v && v.loading || !1,
                e.previousData = v && (v.data || v.previousData),
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
                          , o = r.query
                          , a = r.variables
                          , u = r.onCompleted
                          , l = r.onError
                          , c = r.skip;
                        if (this.previousOptions && !this.previous.loading && (0,
                        s.D)(this.previousOptions.query, o) && (0,
                        s.D)(this.previousOptions.variables, a))
                            return;
                        !u || i || c ? l && i && l(i) : u(t)
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
                o.kG)(!!e, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : (0,
                o.kG)(!!e, 29);
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
                    o.kG)(!!e && !!e.kind, "Argument of " + e + " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0,
                    o.kG)(!!e && !!e.kind, 34);
                    var a = e.definitions.filter((function(e) {
                        return "FragmentDefinition" === e.kind
                    }
                    ))
                      , s = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "query" === e.operation
                    }
                    ))
                      , u = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "mutation" === e.operation
                    }
                    ))
                      , l = e.definitions.filter((function(e) {
                        return "OperationDefinition" === e.kind && "subscription" === e.operation
                    }
                    ));
                    __DEV__ ? (0,
                    o.kG)(!a.length || s.length || u.length || l.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0,
                    o.kG)(!a.length || s.length || u.length || l.length, 35),
                    __DEV__ ? (0,
                    o.kG)(s.length + u.length + l.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + e + " had " + s.length + " queries, " + l.length + " subscriptions and " + u.length + " mutations. You can use 'compose' to join multiple operation types to a component") : (0,
                    o.kG)(s.length + u.length + l.length <= 1, 36),
                    n = s.length ? i.Query : i.Mutation,
                    s.length || u.length || (n = i.Subscription);
                    var p = s.length ? s : u.length ? u : l;
                    __DEV__ ? (0,
                    o.kG)(1 === p.length, "react-apollo only supports one definition per HOC. " + e + " had " + p.length + " definitions. You can use 'compose' to join multiple operation types to a component") : (0,
                    o.kG)(1 === p.length, 37);
                    var d = p[0];
                    t = d.variableDefinitions || [];
                    var v = {
                        name: d.name && "Name" === d.name.kind ? d.name.value : "data",
                        type: n,
                        variables: t
                    };
                    return c.set(e, v),
                    v
                }(e)
                  , r = p(t)
                  , a = p(n.type);
                __DEV__ ? (0,
                o.kG)(n.type === t, "Running a " + r + " requires a graphql " + r + ", but a " + a + " was used instead.") : (0,
                o.kG)(n.type === t, 30)
            }
            ,
            e
        }());
        var v = n(55261);
        function h(e, t, n) {
            void 0 === n && (n = !1);
            var i = (0,
            a.useContext)((0,
            v.K)())
              , o = (0,
            a.useReducer)((function(e) {
                return e + 1
            }
            ), 0)
              , u = o[0]
              , l = o[1]
              , c = t ? (0,
            r.pi)((0,
            r.pi)({}, t), {
                query: e
            }) : {
                query: e
            }
              , p = (0,
            a.useRef)()
              , h = p.current || (p.current = new d({
                options: c,
                context: i,
                onNewData: function() {
                    h.ssrInitiated() ? l() : Promise.resolve().then((function() {
                        return p.current && p.current.isMounted && l()
                    }
                    ))
                }
            }));
            h.setOptions(c),
            h.context = i;
            var f = function(e, t) {
                var n = (0,
                a.useRef)();
                return n.current && (0,
                s.D)(t, n.current.key) || (n.current = {
                    key: t,
                    value: e()
                }),
                n.current.value
            }((function() {
                return n ? h.executeLazy() : h.execute()
            }
            ), {
                options: (0,
                r.pi)((0,
                r.pi)({}, c), {
                    onError: void 0,
                    onCompleted: void 0
                }),
                context: i,
                tick: u
            })
              , b = n ? f[1] : f;
            return __DEV__ && function(e) {
                if (__DEV__) {
                    var t = (0,
                    a.useRef)(!1);
                    (0,
                    a.useEffect)((function() {
                        return function() {
                            t.current = !0
                        }
                    }
                    ), []),
                    (0,
                    a.useEffect)((function() {
                        !0 === t.current && (t.current = !1,
                        e())
                    }
                    ), [])
                }
            }(l),
            (0,
            a.useEffect)((function() {
                return function() {
                    h.cleanup(),
                    p.current = void 0
                }
            }
            ), []),
            (0,
            a.useEffect)((function() {
                return h.afterExecute({
                    lazy: n
                })
            }
            ), [b.loading, b.networkStatus, b.error, b.data, h.currentObservable]),
            f
        }
        function f(e, t) {
            return h(e, t, !1)
        }
    },
    15291: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var i = n(32735)
          , r = "e02455895f"
          , o = function(e) {
            var t = e.children;
            return i.createElement("div", {
                className: r
            }, t)
        }
    },
    82192: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return x
            }
        });
        var i, r = n(32735), o = n(39476), a = n(23793), s = "a1a51dd3c7", u = "e44dc33358", l = function(e) {
            var t = e.title
              , n = e.subtitle
              , i = e.signInOrRegisterUrl;
            return t && i ? r.createElement(a.Zb, {
                variant: "neutral",
                className: s
            }, r.createElement(a.Kq, {
                direction: "row",
                gap: 6,
                justifyContent: "space-between",
                alignItems: "center"
            }, r.createElement(a.Kq.Item, {
                grow: !0,
                shrink: !0
            }, r.createElement(a.Kq, {
                gap: 3
            }, r.createElement(a.Dx, {
                variant: "headline_3",
                title: t,
                subtitle: n,
                titleTagName: "h2",
                subtitleTagName: "p"
            }), r.createElement(a.xv, {
                variant: "body_1"
            }, r.createElement(o.cC, {
                tag: "lx_web_desktop_city_search_sr_genius_sign_in_banner_cta",
                variables: {
                    start_link: "<0>",
                    end_link: "</0>"
                },
                components: [r.createElement(a.rU, {
                    key: "link",
                    variant: "primary",
                    className: u,
                    href: i
                })]
            })))), r.createElement(a.Kq.Item, null, r.createElement(a.Ee, {
                asset: {
                    setName: "illustrations-traveller",
                    assetName: "GeniusRewardGiftBoxDiscount"
                },
                height: 116,
                attributes: {
                    "aria-hidden": "true"
                }
            })))) : null
        }, c = n(80827), p = function(e) {
            var t = (0,
            c.K)({
                pathname: "index.html"
            });
            return t.searchParams.set("login_redirect", e),
            t.toString()
        }, d = n(29572), v = n(79399), h = function() {
            return (0,
            v.T)().getUserIdentity()
        }, f = n(13736), b = n(44393), m = n(93354), y = n(2365), g = (0,
        b.Z)(i || (i = (0,
        f.Z)(["OAZOXHHZGSRaPSPNIfPXPRLO"]))), k = 1, O = 2, _ = {
            allUsers: (0,
            y.B)((function() {
                (0,
                m.ti)(g, k)
            }
            )),
            usersNotLoggedIn: (0,
            y.B)((function() {
                (0,
                m.ti)(g, O)
            }
            ))
        }, S = function(e) {
            var t = e.cityName
              , n = e.inCityName
              , i = (0,
            d.ks)()
              , a = p(i);
            return r.createElement(l, {
                title: r.createElement(o.cC, {
                    tag: "lx_web_desktop_city_search_sr_genius_sign_in_banner_header",
                    variables: {
                        in_city_name: n,
                        city_name: t
                    }
                }),
                subtitle: r.createElement(o.cC, {
                    tag: "lx_web_desktop_city_search_sr_genius_sign_in_banner_subheader"
                }),
                signInOrRegisterUrl: a
            })
        }, N = function(e) {
            var t = e.cityName
              , n = e.inCityName;
            if (!t || !n)
                return null;
            var i = h()
              , o = i && !!i.userId;
            return _.allUsers(),
            o ? null : (_.usersNotLoggedIn(),
            0 === (0,
            m.zm)(g) ? null : r.createElement(S, {
                cityName: t,
                inCityName: n
            }))
        }, E = "ed551c2ed7", w = n(15291), Q = n(80656), x = function(e) {
            var t, n, i, o, a, s, u, l, c, p, d = e.queryData.data, v = null === d || void 0 === d || null === (t = d.landingContent) || void 0 === t || null === (n = t.destination) || void 0 === n || null === (i = n.taxonomy) || void 0 === i || null === (o = i.city) || void 0 === o || null === (a = o.translation) || void 0 === a ? void 0 : a.name, h = null === d || void 0 === d || null === (s = d.landingContent) || void 0 === s || null === (u = s.destination) || void 0 === u || null === (l = u.taxonomy) || void 0 === l || null === (c = l.city) || void 0 === c || null === (p = c.translation) || void 0 === p ? void 0 : p.inName, f = [N({
                cityName: v,
                inCityName: h
            })].filter(Q.V);
            return f.length ? r.createElement(w.Z, null, r.createElement("div", {
                className: E
            }, f)) : null
        }
    },
    6592: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return l
            }
        });
        var i = n(32735)
          , r = n(18757)
          , o = n(66485)
          , a = {
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
                    value: "CityBanners"
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
                                    value: "CityBannersFragment"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }].concat(o.g.definitions)),
            loc: {
                start: 0,
                end: 131,
                source: {
                    body: "\n  query CityBanners($input: LandingQueriesInput!) {\n    landingContent(input: $input) {\n      ...CityBannersFragment\n    }\n  }\n  \n",
                    name: "GraphQL request",
                    locationOffset: {
                        line: 1,
                        column: 1
                    }
                }
            }
        }
          , s = n(82192)
          , u = n(29572)
          , l = function() {
            var e = (0,
            r.a)(a, {
                variables: {
                    input: {
                        originalUri: (0,
                        u.ZP)()
                    }
                }
            });
            return i.createElement(s.Z, {
                queryData: e
            })
        }
    },
    66485: function(e, t, n) {
        n.d(t, {
            g: function() {
                return i
            }
        });
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "CityBannersFragment"
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
                                                            value: "inName"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
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
                end: 209,
                source: {
                    body: "\n  fragment CityBannersFragment on LandingContentQueries {\n    destination {\n      taxonomy {\n        city {\n          translation {\n            inName\n            name\n          }\n        }\n      }\n    }\n  }\n",
                    name: "GraphQL request",
                    locationOffset: {
                        line: 1,
                        column: 1
                    }
                }
            }
        }
    },
    2365: function(e, t, n) {
        n.d(t, {
            B: function() {
                return r
            }
        });
        var i = n(79399)
          , r = function(e) {
            return function() {
                (0,
                i.T)().isRobotRequest() || e.apply(void 0, arguments)
            }
        }
    },
    29572: function(e, t, n) {
        n.d(t, {
            EJ: function() {
                return o
            },
            ks: function() {
                return a
            }
        });
        var i = n(79399)
          , r = function() {
            var e;
            return (null === (e = (0,
            i.T)().getBasePageUrl()) || void 0 === e ? void 0 : e.pathname.toString()) || ""
        }
          , o = function() {
            return r().includes("country")
        }
          , a = function() {
            return (0,
            i.T)().getBasePageUrl().toString()
        };
        t.ZP = r
    },
    80656: function(e, t, n) {
        n.d(t, {
            V: function() {
                return i
            }
        });
        var i = function(e) {
            return null !== e && void 0 !== e
        }
    },
    80827: function(e, t, n) {
        n.d(t, {
            K: function() {
                return E
            }
        });
        var i, r, o = n(79399), a = n(98178);
        !function(e) {
            e.admin = "admin",
            e.app = "app",
            e.book = "book",
            e.join = "join"
        }(i || (i = {}));
        var s, u, l, c, p = ((r = {
            DEFAULT: ["label", "sid", "utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign", "gclid"]
        })[a.N.EXTRANET] = ["hotel_id", "lang", "ses"],
        r), d = {
            PRODUCTION: (s = {},
            s[i.admin] = "admin",
            s[i.app] = "www",
            s[i.book] = "secure",
            s[i.join] = "join",
            s),
            STAGING: (u = {},
            u[i.admin] = "a",
            u[i.app] = "w",
            u[i.book] = "b",
            u[i.join] = "j",
            u),
            KVM: (l = {},
            l[i.admin] = ["adm", "devadmin"],
            l[i.app] = ["app", "devapp"],
            l[i.book] = ["book", "devbook"],
            l[i.join] = ["joinapp", "devjoinapp"],
            l),
            DQS: (c = {},
            c[i.admin] = "admin",
            c[i.app] = "app",
            c[i.book] = "book",
            c[i.join] = "join",
            c)
        }, v = "booking.com", h = _(d.PRODUCTION), f = _(d.STAGING), b = _(d.KVM), m = _(d.DQS), y = new RegExp("^(.*?)\\.?(" + v + "|booking.cn)$"), g = new RegExp("^(?:" + f.join("|") + ")(\\d+)$"), k = new RegExp("^(\\w+)-(" + b.join("|") + ").*?\\.dev$"), O = new RegExp("(?:" + m.join("|") + ")\\.dqs$");
        function _(e) {
            return Object.values(e).flat()
        }
        function S(e, t) {
            var n = new Set;
            null == t || t.forEach((function(t, i) {
                n.has(i) ? e.append(i, t) : (e.set(i, t),
                n.add(i))
            }
            ))
        }
        function N(e) {
            return Array.isArray(e) ? e[0] : e
        }
        function E(e) {
            return function() {
                var e = (0,
                o.T)()
                  , t = e.getBasePageUrl();
                if (!t)
                    throw new Error("Cannot construct URLs without base page URL, most likely it is an integration error. Please report this issue to #capla channel in Slack.");
                var n = function(e, t, n, i) {
                    var r = new URLSearchParams
                      , o = t && p.hasOwnProperty(t) ? t : "DEFAULT";
                    return p[o].forEach((function(t) {
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
                      , o = i.host ? function(e, t) {
                        var n = e.host.match(y);
                        if (!n)
                            return e;
                        var i = n[1]
                          , r = n[2];
                        if ("" === i || h.includes(i)) {
                            var o = N(d.PRODUCTION[t]);
                            e.host = o + "." + r
                        } else if (k.test(i)) {
                            var a = N(d.KVM[t]);
                            e.host = i.replace(k, "$1-" + a + ".dev." + v)
                        } else if (O.test(i)) {
                            var s = N(d.DQS[t]);
                            e.host = s + ".dqs." + v
                        } else if (g.test(i)) {
                            var u = N(d.STAGING[t]);
                            e.host = i.replace(g, u + "$1." + v)
                        }
                        return e
                    }(r, i.host) : r;
                    return i.pathname && (o.pathname = i.pathname),
                    o.hash = i.hash || "",
                    e.isRobotRequest() || (S(o.searchParams, n),
                    S(o.searchParams, i.searchParams)),
                    o
                }
            }()(e)
        }
    },
    13736: function(e, t, n) {
        function i(e, t) {
            return t || (t = e.slice(0)),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        n.d(t, {
            Z: function() {
                return i
            }
        })
    }
}]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/111.7fc763d5.chunk.js.map
