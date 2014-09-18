/*
Developer: themephe 
Name: fist
Version: 0.1.2
Last Compile: 2014-09-18 */

window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
        var newarr, args = arguments;
        args.callee = args.callee.caller;
        newarr = [].slice.call(args);
        if ("object" === typeof console.log) {
            log.apply.call(console.log, console, newarr);
        } else {
            console.log.apply(console, newarr);
        }
    }
};

!function(a) {
    function b() {}
    for (var d, c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","); !!(d = c.pop()); ) {
        a[d] = a[d] || b;
    }
}(function() {
    try {
        console.log();
        return window.console;
    } catch (a) {
        return window.console = {};
    }
}());

window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1e3 / 60);
    };
}();

!function(a) {
    if ("function" === typeof define && define.amd && define.amd.jQuery) {
        define([ "jquery" ], a);
    } else {
        a(jQuery);
    }
}(function(f) {
    function w(E) {
        if (E && void 0 === E.allowPageScroll && (void 0 !== E.swipe || void 0 !== E.swipeStatus)) {
            E.allowPageScroll = m;
        }
        if (void 0 !== E.click && void 0 === E.tap) {
            E.tap = E.click;
        }
        if (!E) {
            E = {};
        }
        E = f.extend({}, f.fn.swipe.defaults, E);
        return this.each(function() {
            var G = f(this);
            var F = G.data(B);
            if (!F) {
                F = new C(this, E);
                G.data(B, F);
            }
        });
    }
    function C(a4, av) {
        function aN(bd) {
            if (aB()) {
                return;
            }
            if (f(bd.target).closest(av.excludedElements, aR).length > 0) {
                return;
            }
            var be = bd.originalEvent ? bd.originalEvent : bd;
            var bc, bb = a ? be.touches[0] : be;
            Z = g;
            if (a) {
                W = be.touches.length;
            } else {
                bd.preventDefault();
            }
            ag = 0;
            aP = null;
            aJ = null;
            ab = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            aq = 0;
            aQ = aj();
            M = aa();
            R();
            if (!a || W === av.fingers || av.fingers === i || aX()) {
                ai(0, bb);
                T = at();
                if (2 == W) {
                    ai(1, be.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start);
                }
                if (av.swipeStatus || av.pinchStatus) {
                    bc = O(be, Z);
                }
            } else {
                bc = false;
            }
            if (false === bc) {
                Z = q;
                O(be, Z);
                return bc;
            } else {
                if (av.hold) {
                    af = setTimeout(f.proxy(function() {
                        aR.trigger("hold", [ be.target ]);
                        if (av.hold) {
                            bc = av.hold.call(aR, be, be.target);
                        }
                    }, this), av.longTapThreshold);
                }
                ao(true);
            }
            return null;
        }
        function a3(be) {
            var bh = be.originalEvent ? be.originalEvent : be;
            if (Z === h || Z === q || am()) {
                return;
            }
            var bd, bc = a ? bh.touches[0] : bh;
            var bf = aH(bc);
            a2 = at();
            if (a) {
                W = bh.touches.length;
            }
            if (av.hold) {
                clearTimeout(af);
            }
            Z = k;
            if (2 == W) {
                if (0 == a1) {
                    ai(1, bh.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start);
                } else {
                    aH(bh.touches[1]);
                    aZ = au(aQ[0].end, aQ[1].end);
                    aJ = ar(aQ[0].end, aQ[1].end);
                }
                G = a7(a1, aZ);
                aq = Math.abs(a1 - aZ);
            }
            if (W === av.fingers || av.fingers === i || !a || aX()) {
                aP = aL(bf.start, bf.end);
                al(be, aP);
                ag = aS(bf.start, bf.end);
                ab = aM();
                aI(aP, ag);
                if (av.swipeStatus || av.pinchStatus) {
                    bd = O(bh, Z);
                }
                if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) {
                    var bb = true;
                    if (av.triggerOnTouchLeave) {
                        var bg = aY(this);
                        bb = E(bf.end, bg);
                    }
                    if (!av.triggerOnTouchEnd && bb) {
                        Z = aC(k);
                    } else {
                        if (av.triggerOnTouchLeave && !bb) {
                            Z = aC(h);
                        }
                    }
                    if (Z == q || Z == h) {
                        O(bh, Z);
                    }
                }
            } else {
                Z = q;
                O(bh, Z);
            }
            if (false === bd) {
                Z = q;
                O(bh, Z);
            }
        }
        function L(bb) {
            var bc = bb.originalEvent;
            if (a) {
                if (bc.touches.length > 0) {
                    F();
                    return true;
                }
            }
            if (am()) {
                W = ad;
            }
            a2 = at();
            ab = aM();
            if (ba() || !an()) {
                Z = q;
                O(bc, Z);
            } else {
                if (av.triggerOnTouchEnd || false == av.triggerOnTouchEnd && Z === k) {
                    bb.preventDefault();
                    Z = h;
                    O(bc, Z);
                } else {
                    if (!av.triggerOnTouchEnd && a6()) {
                        Z = h;
                        aF(bc, Z, A);
                    } else {
                        if (Z === k) {
                            Z = q;
                            O(bc, Z);
                        }
                    }
                }
            }
            ao(false);
            return null;
        }
        function a9() {
            W = 0;
            a2 = 0;
            T = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            R();
            ao(false);
        }
        function K(bb) {
            var bc = bb.originalEvent;
            if (av.triggerOnTouchLeave) {
                Z = aC(h);
                O(bc, Z);
            }
        }
        function aK() {
            aR.unbind(J, aN);
            aR.unbind(aD, a9);
            aR.unbind(ay, a3);
            aR.unbind(U, L);
            if (S) {
                aR.unbind(S, K);
            }
            ao(false);
        }
        function aC(bf) {
            var be = bf;
            var bd = aA();
            var bc = an();
            var bb = ba();
            if (!bd || bb) {
                be = q;
            } else {
                if (bc && bf == k && (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)) {
                    be = h;
                } else {
                    if (!bc && bf == h && av.triggerOnTouchLeave) {
                        be = q;
                    }
                }
            }
            return be;
        }
        function O(bd, bb) {
            var bc = void 0;
            if (I() || V()) {
                bc = aF(bd, bb, l);
            } else {
                if ((P() || aX()) && false !== bc) {
                    bc = aF(bd, bb, t);
                }
            }
            if (aG() && false !== bc) {
                bc = aF(bd, bb, j);
            } else {
                if (ap() && false !== bc) {
                    bc = aF(bd, bb, b);
                } else {
                    if (ah() && false !== bc) {
                        bc = aF(bd, bb, A);
                    }
                }
            }
            if (bb === q) {
                a9(bd);
            }
            if (bb === h) {
                if (a) {
                    if (0 == bd.touches.length) {
                        a9(bd);
                    }
                } else {
                    a9(bd);
                }
            }
            return bc;
        }
        function aF(be, bb, bd) {
            var bc = void 0;
            if (bd == l) {
                aR.trigger("swipeStatus", [ bb, aP || null, ag || 0, ab || 0, W, aQ ]);
                if (av.swipeStatus) {
                    bc = av.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ab || 0, W, aQ);
                    if (false === bc) {
                        return false;
                    }
                }
                if (bb == h && aV()) {
                    aR.trigger("swipe", [ aP, ag, ab, W, aQ ]);
                    if (av.swipe) {
                        bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ);
                        if (false === bc) {
                            return false;
                        }
                    }
                    switch (aP) {
                      case p:
                        aR.trigger("swipeLeft", [ aP, ag, ab, W, aQ ]);
                        if (av.swipeLeft) {
                            bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ);
                        }
                        break;

                      case o:
                        aR.trigger("swipeRight", [ aP, ag, ab, W, aQ ]);
                        if (av.swipeRight) {
                            bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ);
                        }
                        break;

                      case e:
                        aR.trigger("swipeUp", [ aP, ag, ab, W, aQ ]);
                        if (av.swipeUp) {
                            bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ);
                        }
                        break;

                      case x:
                        aR.trigger("swipeDown", [ aP, ag, ab, W, aQ ]);
                        if (av.swipeDown) {
                            bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ);
                        }
                    }
                }
            }
            if (bd == t) {
                aR.trigger("pinchStatus", [ bb, aJ || null, aq || 0, ab || 0, W, G, aQ ]);
                if (av.pinchStatus) {
                    bc = av.pinchStatus.call(aR, be, bb, aJ || null, aq || 0, ab || 0, W, G, aQ);
                    if (false === bc) {
                        return false;
                    }
                }
                if (bb == h && a8()) {
                    switch (aJ) {
                      case c:
                        aR.trigger("pinchIn", [ aJ || null, aq || 0, ab || 0, W, G, aQ ]);
                        if (av.pinchIn) {
                            bc = av.pinchIn.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ);
                        }
                        break;

                      case z:
                        aR.trigger("pinchOut", [ aJ || null, aq || 0, ab || 0, W, G, aQ ]);
                        if (av.pinchOut) {
                            bc = av.pinchOut.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ);
                        }
                    }
                }
            }
            if (bd == A) {
                if (bb === q || bb === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Y() && !H()) {
                        N = at();
                        aW = setTimeout(f.proxy(function() {
                            N = null;
                            aR.trigger("tap", [ be.target ]);
                            if (av.tap) {
                                bc = av.tap.call(aR, be, be.target);
                            }
                        }, this), av.doubleTapThreshold);
                    } else {
                        N = null;
                        aR.trigger("tap", [ be.target ]);
                        if (av.tap) {
                            bc = av.tap.call(aR, be, be.target);
                        }
                    }
                }
            } else {
                if (bd == j) {
                    if (bb === q || bb === h) {
                        clearTimeout(aW);
                        N = null;
                        aR.trigger("doubletap", [ be.target ]);
                        if (av.doubleTap) {
                            bc = av.doubleTap.call(aR, be, be.target);
                        }
                    }
                } else {
                    if (bd == b) {
                        if (bb === q || bb === h) {
                            clearTimeout(aW);
                            N = null;
                            aR.trigger("longtap", [ be.target ]);
                            if (av.longTap) {
                                bc = av.longTap.call(aR, be, be.target);
                            }
                        }
                    }
                }
            }
            return bc;
        }
        function an() {
            var bb = true;
            if (null !== av.threshold) {
                bb = ag >= av.threshold;
            }
            return bb;
        }
        function ba() {
            var bb = false;
            if (null !== av.cancelThreshold && null !== aP) {
                bb = aT(aP) - ag >= av.cancelThreshold;
            }
            return bb;
        }
        function ae() {
            if (null !== av.pinchThreshold) {
                return aq >= av.pinchThreshold;
            }
            return true;
        }
        function aA() {
            var bb;
            if (av.maxTimeThreshold) {
                if (ab >= av.maxTimeThreshold) {
                    bb = false;
                } else {
                    bb = true;
                }
            } else {
                bb = true;
            }
            return bb;
        }
        function al(bb, bc) {
            if (av.allowPageScroll === m || aX()) {
                bb.preventDefault();
            } else {
                var bd = av.allowPageScroll === s;
                switch (bc) {
                  case p:
                    if (av.swipeLeft && bd || !bd && av.allowPageScroll != D) {
                        bb.preventDefault();
                    }
                    break;

                  case o:
                    if (av.swipeRight && bd || !bd && av.allowPageScroll != D) {
                        bb.preventDefault();
                    }
                    break;

                  case e:
                    if (av.swipeUp && bd || !bd && av.allowPageScroll != u) {
                        bb.preventDefault();
                    }
                    break;

                  case x:
                    if (av.swipeDown && bd || !bd && av.allowPageScroll != u) {
                        bb.preventDefault();
                    }
                }
            }
        }
        function a8() {
            var bc = aO();
            var bb = X();
            var bd = ae();
            return bc && bb && bd;
        }
        function aX() {
            return !!(av.pinchStatus || av.pinchIn || av.pinchOut);
        }
        function P() {
            return !!(a8() && aX());
        }
        function aV() {
            var be = aA();
            var bg = an();
            var bd = aO();
            var bb = X();
            var bc = ba();
            var bf = !bc && bb && bd && bg && be;
            return bf;
        }
        function V() {
            return !!(av.swipe || av.swipeStatus || av.swipeLeft || av.swipeRight || av.swipeUp || av.swipeDown);
        }
        function I() {
            return !!(aV() && V());
        }
        function aO() {
            return W === av.fingers || av.fingers === i || !a;
        }
        function X() {
            return 0 !== aQ[0].end.x;
        }
        function a6() {
            return !!av.tap;
        }
        function Y() {
            return !!av.doubleTap;
        }
        function aU() {
            return !!av.longTap;
        }
        function Q() {
            if (null == N) {
                return false;
            }
            var bb = at();
            return Y() && bb - N <= av.doubleTapThreshold;
        }
        function H() {
            return Q();
        }
        function ax() {
            return (1 === W || !a) && (isNaN(ag) || ag < av.threshold);
        }
        function a0() {
            return ab > av.longTapThreshold && ag < r;
        }
        function ah() {
            return !!(ax() && a6());
        }
        function aG() {
            return !!(Q() && Y());
        }
        function ap() {
            return !!(a0() && aU());
        }
        function F() {
            a5 = at();
            ad = event.touches.length + 1;
        }
        function R() {
            a5 = 0;
            ad = 0;
        }
        function am() {
            var bb = false;
            if (a5) {
                var bc = at() - a5;
                if (bc <= av.fingerReleaseThreshold) {
                    bb = true;
                }
            }
            return bb;
        }
        function aB() {
            return !!(true === aR.data(B + "_intouch"));
        }
        function ao(bb) {
            if (true === bb) {
                aR.bind(ay, a3);
                aR.bind(U, L);
                if (S) {
                    aR.bind(S, K);
                }
            } else {
                aR.unbind(ay, a3, false);
                aR.unbind(U, L, false);
                if (S) {
                    aR.unbind(S, K, false);
                }
            }
            aR.data(B + "_intouch", true === bb);
        }
        function ai(bc, bb) {
            var bd = void 0 !== bb.identifier ? bb.identifier : 0;
            aQ[bc].identifier = bd;
            aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX;
            aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY;
            return aQ[bc];
        }
        function aH(bb) {
            var bd = void 0 !== bb.identifier ? bb.identifier : 0;
            var bc = ac(bd);
            bc.end.x = bb.pageX || bb.clientX;
            bc.end.y = bb.pageY || bb.clientY;
            return bc;
        }
        function ac(bc) {
            for (var bb = 0; bb < aQ.length; bb++) {
                if (aQ[bb].identifier == bc) {
                    return aQ[bb];
                }
            }
        }
        function aj() {
            var bb = [];
            for (var bc = 0; bc <= 5; bc++) {
                bb.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
            }
            return bb;
        }
        function aI(bb, bc) {
            bc = Math.max(bc, aT(bb));
            M[bb].distance = bc;
        }
        function aT(bb) {
            if (M[bb]) {
                return M[bb].distance;
            }
            return void 0;
        }
        function aa() {
            var bb = {};
            bb[p] = aw(p);
            bb[o] = aw(o);
            bb[e] = aw(e);
            bb[x] = aw(x);
            return bb;
        }
        function aw(bb) {
            return {
                direction: bb,
                distance: 0
            };
        }
        function aM() {
            return a2 - T;
        }
        function au(be, bd) {
            var bc = Math.abs(be.x - bd.x);
            var bb = Math.abs(be.y - bd.y);
            return Math.round(Math.sqrt(bc * bc + bb * bb));
        }
        function a7(bb, bc) {
            var bd = bc / bb * 1;
            return bd.toFixed(2);
        }
        function ar() {
            if (G < 1) {
                return z;
            } else {
                return c;
            }
        }
        function aS(bc, bb) {
            return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)));
        }
        function aE(be, bc) {
            var bb = be.x - bc.x;
            var bg = bc.y - be.y;
            var bd = Math.atan2(bg, bb);
            var bf = Math.round(180 * bd / Math.PI);
            if (bf < 0) {
                bf = 360 - Math.abs(bf);
            }
            return bf;
        }
        function aL(bc, bb) {
            var bd = aE(bc, bb);
            if (bd <= 45 && bd >= 0) {
                return p;
            } else {
                if (bd <= 360 && bd >= 315) {
                    return p;
                } else {
                    if (bd >= 135 && bd <= 225) {
                        return o;
                    } else {
                        if (bd > 45 && bd < 135) {
                            return x;
                        } else {
                            return e;
                        }
                    }
                }
            }
        }
        function at() {
            var bb = new Date();
            return bb.getTime();
        }
        function aY(bb) {
            bb = f(bb);
            var bd = bb.offset();
            var bc = {
                left: bd.left,
                right: bd.left + bb.outerWidth(),
                top: bd.top,
                bottom: bd.top + bb.outerHeight()
            };
            return bc;
        }
        function E(bb, bc) {
            return bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom;
        }
        var az = a || d || !av.fallbackToMouseEvents, J = az ? d ? v ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", ay = az ? d ? v ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", U = az ? d ? v ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", S = az ? null : "mouseleave", aD = d ? v ? "MSPointerCancel" : "pointercancel" : "touchcancel";
        var ag = 0, aP = null, ab = 0, a1 = 0, aZ = 0, G = 1, aq = 0, aJ = 0, M = null;
        var aR = f(a4);
        var Z = "start";
        var W = 0;
        var aQ = null;
        var T = 0, a2 = 0, a5 = 0, ad = 0, N = 0;
        var aW = null, af = null;
        try {
            aR.bind(J, aN);
            aR.bind(aD, a9);
        } catch (ak) {
            f.error("events not supported " + J + "," + aD + " on jQuery.swipe");
        }
        this.enable = function() {
            aR.bind(J, aN);
            aR.bind(aD, a9);
            return aR;
        };
        this.disable = function() {
            aK();
            return aR;
        };
        this.destroy = function() {
            aK();
            aR.data(B, null);
            return aR;
        };
        this.option = function(bc, bb) {
            if (void 0 !== av[bc]) {
                if (void 0 === bb) {
                    return av[bc];
                } else {
                    av[bc] = bb;
                }
            } else {
                f.error("Option " + bc + " does not exist on jQuery.swipe.options");
            }
            return null;
        };
    }
    var p = "left", o = "right", e = "up", x = "down", c = "in", z = "out", m = "none", s = "auto", l = "swipe", t = "pinch", A = "tap", j = "doubletap", b = "longtap", D = "horizontal", u = "vertical", i = "all", r = 10, g = "start", k = "move", h = "end", q = "cancel", a = "ontouchstart" in window, v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, B = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    f.fn.swipe = function(G) {
        var F = f(this), E = F.data(B);
        if (E && "string" === typeof G) {
            if (E[G]) {
                return E[G].apply(this, Array.prototype.slice.call(arguments, 1));
            } else {
                f.error("Method " + G + " does not exist on jQuery.swipe");
            }
        } else {
            if (!E && ("object" === typeof G || !G)) {
                return w.apply(this, arguments);
            }
        }
        return F;
    };
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: z
    };
    f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: D,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };
});

!function(e, t) {
    function i(t, i) {
        var s, n, r, o = t.nodeName.toLowerCase();
        return "area" === o ? (s = t.parentNode, n = s.name, t.href && n && "map" === s.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], 
        !!r && a(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && a(t);
    }
    function a(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility");
        }).length;
    }
    var s = 0, n = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(i, a) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), a && a.call(t);
                    }, i);
                }) : t.apply(this, arguments);
            };
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
        },
        zIndex: function(i) {
            if (i !== t) {
                return this.css("zIndex", i);
            }
            if (this.length) {
                for (var a, s, n = e(this[0]); n.length && n[0] !== document; ) {
                    if (a = n.css("position"), ("absolute" === a || "relative" === a || "fixed" === a) && (s = parseInt(n.css("zIndex"), 10), 
                    !isNaN(s) && 0 !== s)) {
                        return s;
                    }
                    n = n.parent();
                }
            }
            return 0;
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s);
            });
        },
        removeUniqueId: function() {
            return this.each(function() {
                n.test(this.id) && e(this).removeAttr("id");
            });
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t);
            };
        }) : function(t, i, a) {
            return !!e.data(t, a[3]);
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")));
        },
        tabbable: function(t) {
            var a = e.attr(t, "tabindex"), s = isNaN(a);
            return (s || a >= 0) && i(t, !s);
        }
    }), e("<a>").outerWidth(1).jquery || e.each([ "Width", "Height" ], function(i, a) {
        function s(t, i, a, s) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, a && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
            }), i;
        }
        var n = "Width" === a ? [ "Left", "Right" ] : [ "Top", "Bottom" ], r = a.toLowerCase(), o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + a] = function(i) {
            return i === t ? o["inner" + a].call(this) : this.each(function() {
                e(this).css(r, s(this, i) + "px");
            });
        }, e.fn["outer" + a] = function(t, i) {
            return "number" != typeof t ? o["outer" + a].call(this, t) : this.each(function() {
                e(this).css(r, s(this, t, !0, i) + "px");
            });
        };
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
        };
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), 
    e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault();
            });
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, a) {
                var s, n = e.ui[t].prototype;
                for (s in a) {
                    n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([ i, a[s] ]);
                }
            },
            call: function(e, t, i) {
                var a, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) {
                    for (a = 0; s.length > a; a++) {
                        e.options[s[a][0]] && s[a][1].apply(e.element, i);
                    }
                }
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) {
                return !1;
            }
            var a = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
            return t[a] > 0 ? !0 : (t[a] = 1, s = t[a] > 0, t[a] = 0, s);
        }
    });
}(jQuery);

!function(e, t) {
    var i = 0, s = Array.prototype.slice, a = e.cleanData;
    e.cleanData = function(t) {
        for (var i, s = 0; null != (i = t[s]); s++) {
            try {
                e(i).triggerHandler("remove");
            } catch (n) {}
        }
        a(t);
    }, e.widget = function(i, s, a) {
        var n, r, o, h, l = {}, u = i.split(".")[0];
        i = i.split(".")[1], n = u + "-" + i, a || (a = s, s = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
            return !!e.data(t, n);
        }, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i);
        }, e.extend(o, r, {
            version: a.version,
            _proto: e.extend({}, a),
            _childConstructors: []
        }), h = new s(), h.options = e.widget.extend({}, h.options), e.each(a, function(i, a) {
            return e.isFunction(a) ? (l[i] = function() {
                var e = function() {
                    return s.prototype[i].apply(this, arguments);
                }, t = function(e) {
                    return s.prototype[i].apply(this, e);
                };
                return function() {
                    var i, s = this._super, n = this._superApply;
                    return this._super = e, this._superApply = t, i = a.apply(this, arguments), this._super = s, this._superApply = n, i;
                };
            }(), t) : (l[i] = a, t);
        }), o.prototype = e.widget.extend(h, {
            widgetEventPrefix: r ? h.widgetEventPrefix : i
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: i,
            widgetFullName: n
        }), r ? (e.each(r._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto);
        }), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o);
    }, e.widget.extend = function(i) {
        for (var a, n, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++) {
            for (a in r[o]) {
                n = r[o][a], r[o].hasOwnProperty(a) && n !== t && (i[a] = e.isPlainObject(n) ? e.isPlainObject(i[a]) ? e.widget.extend({}, i[a], n) : e.widget.extend({}, n) : n);
            }
        }
        return i;
    }, e.widget.bridge = function(i, a) {
        var n = a.prototype.widgetFullName || i;
        e.fn[i] = function(r) {
            var o = "string" == typeof r, h = s.call(arguments, 1), l = this;
            return r = !o && h.length ? e.widget.extend.apply(null, [ r ].concat(h)) : r, o ? this.each(function() {
                var s, a = e.data(this, n);
                return a ? e.isFunction(a[r]) && "_" !== r.charAt(0) ? (s = a[r].apply(a, h), s !== a && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, 
                !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'");
            }) : this.each(function() {
                var t = e.data(this, n);
                t ? t.option(r || {})._init() : e.data(this, n, new a(r, this));
            }), l;
        };
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, s) {
            s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, 
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), 
            this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === s && this.destroy();
                }
            }), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), 
            this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
        },
        _destroy: e.noop,
        widget: function() {
            return this.element;
        },
        option: function(i, s) {
            var a, n, r, o = i;
            if (0 === arguments.length) {
                return e.widget.extend({}, this.options);
            }
            if ("string" == typeof i) {
                if (o = {}, a = i.split("."), i = a.shift(), a.length) {
                    for (n = o[i] = e.widget.extend({}, this.options[i]), r = 0; a.length - 1 > r; r++) {
                        n[a[r]] = n[a[r]] || {}, n = n[a[r]];
                    }
                    if (i = a.pop(), s === t) {
                        return n[i] === t ? null : n[i];
                    }
                    n[i] = s;
                } else {
                    if (s === t) {
                        return this.options[i] === t ? null : this.options[i];
                    }
                    o[i] = s;
                }
            }
            return this._setOptions(o), this;
        },
        _setOptions: function(e) {
            var t;
            for (t in e) {
                this._setOption(t, e[t]);
            }
            return this;
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), 
            this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this;
        },
        enable: function() {
            return this._setOption("disabled", !1);
        },
        disable: function() {
            return this._setOption("disabled", !0);
        },
        _on: function(i, s, a) {
            var n, r = this;
            "boolean" != typeof i && (a = s, s = i, i = !1), a ? (s = n = e(s), this.bindings = this.bindings.add(s)) : (a = s, s = this.element, 
            n = this.widget()), e.each(a, function(a, o) {
                function h() {
                    return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t;
                }
                "string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
                var l = a.match(/^(\w+)\s*(.*)$/), u = l[1] + r.eventNamespace, c = l[2];
                c ? n.delegate(c, u, h) : s.bind(u, h);
            });
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t);
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments);
            }
            var s = this;
            return setTimeout(i, t || 0);
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(t, i, s) {
            var a, n, r = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), 
            i.target = this.element[0], n = i.originalEvent) {
                for (a in n) {
                    a in i || (i[a] = n[a]);
                }
            }
            return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [ i ].concat(s)) === !1 || i.isDefaultPrevented());
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, a, n) {
            "string" == typeof a && (a = {
                effect: a
            });
            var r, o = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
            a = a || {}, "number" == typeof a && (a = {
                duration: a
            }), r = !e.isEmptyObject(a), a.complete = n, a.delay && s.delay(a.delay), r && e.effects && e.effects.effect[o] ? s[t](a) : o !== t && s[o] ? s[o](a.duration, a.easing, n) : s.queue(function(i) {
                e(this)[t](), n && n.call(s[0]), i();
            });
        };
    });
}(jQuery);

!function(e) {
    var t = !1;
    e(document).mouseup(function() {
        t = !1;
    }), e.widget("ui.mouse", {
        version: "1.10.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e);
            }).bind("click." + this.widgetName, function(i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), 
                i.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this, a = 1 === i.which, n = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return a && !n && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, 
                !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(e) {
                    return s._mouseMove(e);
                }, this._mouseUpDelegate = function(e) {
                    return s._mouseUp(e);
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                i.preventDefault(), t = !0, !0)) : !0;
            }
        },
        _mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), 
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, 
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(t)), !1;
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    });
}(jQuery);

!function(e, t) {
    function i(e, t, i) {
        return [ parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1) ];
    }
    function s(t, i) {
        return parseInt(e.css(t, i), 10) || 0;
    }
    function a(t) {
        var i = t[0];
        return 9 === i.nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : e.isWindow(i) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        };
    }
    e.ui = e.ui || {};
    var n, r = Math.max, o = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, p = /%$/, f = e.fn.position;
    e.position = {
        scrollbarWidth: function() {
            if (n !== t) {
                return n;
            }
            var i, s, a = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), r = a.children()[0];
            return e("body").append(a), i = r.offsetWidth, a.css("overflow", "scroll"), s = r.offsetWidth, i === s && (s = a[0].clientWidth), 
            a.remove(), n = i - s;
        },
        getScrollInfo: function(t) {
            var i = t.isWindow ? "" : t.element.css("overflow-x"), s = t.isWindow ? "" : t.element.css("overflow-y"), a = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth, n = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
            return {
                width: n ? e.position.scrollbarWidth() : 0,
                height: a ? e.position.scrollbarWidth() : 0
            };
        },
        getWithinInfo: function(t) {
            var i = e(t || window), s = e.isWindow(i[0]);
            return {
                element: i,
                isWindow: s,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: s ? i.width() : i.outerWidth(),
                height: s ? i.height() : i.outerHeight()
            };
        }
    }, e.fn.position = function(t) {
        if (!t || !t.of) {
            return f.apply(this, arguments);
        }
        t = e.extend({}, t);
        var n, p, m, g, v, y, b = e(t.of), _ = e.position.getWithinInfo(t.within), x = e.position.getScrollInfo(_), k = (t.collision || "flip").split(" "), w = {};
        return y = a(b), b[0].preventDefault && (t.at = "left top"), p = y.width, m = y.height, g = y.offset, v = e.extend({}, g), 
        e.each([ "my", "at" ], function() {
            var e, i, s = (t[this] || "").split(" ");
            1 === s.length && (s = l.test(s[0]) ? s.concat([ "center" ]) : u.test(s[0]) ? [ "center" ].concat(s) : [ "center", "center" ]), 
            s[0] = l.test(s[0]) ? s[0] : "center", s[1] = u.test(s[1]) ? s[1] : "center", e = c.exec(s[0]), i = c.exec(s[1]), w[this] = [ e ? e[0] : 0, i ? i[0] : 0 ], 
            t[this] = [ d.exec(s[0])[0], d.exec(s[1])[0] ];
        }), 1 === k.length && (k[1] = k[0]), "right" === t.at[0] ? v.left += p : "center" === t.at[0] && (v.left += p / 2), "bottom" === t.at[1] ? v.top += m : "center" === t.at[1] && (v.top += m / 2), 
        n = i(w.at, p, m), v.left += n[0], v.top += n[1], this.each(function() {
            var a, l, u = e(this), c = u.outerWidth(), d = u.outerHeight(), f = s(this, "marginLeft"), y = s(this, "marginTop"), D = c + f + s(this, "marginRight") + x.width, T = d + y + s(this, "marginBottom") + x.height, M = e.extend({}, v), S = i(w.my, u.outerWidth(), u.outerHeight());
            "right" === t.my[0] ? M.left -= c : "center" === t.my[0] && (M.left -= c / 2), "bottom" === t.my[1] ? M.top -= d : "center" === t.my[1] && (M.top -= d / 2), 
            M.left += S[0], M.top += S[1], e.support.offsetFractions || (M.left = h(M.left), M.top = h(M.top)), a = {
                marginLeft: f,
                marginTop: y
            }, e.each([ "left", "top" ], function(i, s) {
                e.ui.position[k[i]] && e.ui.position[k[i]][s](M, {
                    targetWidth: p,
                    targetHeight: m,
                    elemWidth: c,
                    elemHeight: d,
                    collisionPosition: a,
                    collisionWidth: D,
                    collisionHeight: T,
                    offset: [ n[0] + S[0], n[1] + S[1] ],
                    my: t.my,
                    at: t.at,
                    within: _,
                    elem: u
                });
            }), t.using && (l = function(e) {
                var i = g.left - M.left, s = i + p - c, a = g.top - M.top, n = a + m - d, h = {
                    target: {
                        element: b,
                        left: g.left,
                        top: g.top,
                        width: p,
                        height: m
                    },
                    element: {
                        element: u,
                        left: M.left,
                        top: M.top,
                        width: c,
                        height: d
                    },
                    horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                    vertical: 0 > n ? "top" : a > 0 ? "bottom" : "middle"
                };
                c > p && p > o(i + s) && (h.horizontal = "center"), d > m && m > o(a + n) && (h.vertical = "middle"), h.important = r(o(i), o(s)) > r(o(a), o(n)) ? "horizontal" : "vertical", 
                t.using.call(this, e, h);
            }), u.offset(e.extend(M, {
                using: l
            }));
        });
    }, e.ui.position = {
        fit: {
            left: function(e, t) {
                var i, s = t.within, a = s.isWindow ? s.scrollLeft : s.offset.left, n = s.width, o = e.left - t.collisionPosition.marginLeft, h = a - o, l = o + t.collisionWidth - n - a;
                t.collisionWidth > n ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - n - a, e.left += h - i) : e.left = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionWidth : a : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = r(e.left - o, e.left);
            },
            top: function(e, t) {
                var i, s = t.within, a = s.isWindow ? s.scrollTop : s.offset.top, n = t.within.height, o = e.top - t.collisionPosition.marginTop, h = a - o, l = o + t.collisionHeight - n - a;
                t.collisionHeight > n ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - n - a, e.top += h - i) : e.top = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionHeight : a : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = r(e.top - o, e.top);
            }
        },
        flip: {
            left: function(e, t) {
                var i, s, a = t.within, n = a.offset.left + a.scrollLeft, r = a.width, h = a.isWindow ? a.scrollLeft : a.offset.left, l = e.left - t.collisionPosition.marginLeft, u = l - h, c = l + t.collisionWidth - r - h, d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, f = -2 * t.offset[0];
                0 > u ? (i = e.left + d + p + f + t.collisionWidth - r - n, (0 > i || o(u) > i) && (e.left += d + p + f)) : c > 0 && (s = e.left - t.collisionPosition.marginLeft + d + p + f - h, 
                (s > 0 || c > o(s)) && (e.left += d + p + f));
            },
            top: function(e, t) {
                var i, s, a = t.within, n = a.offset.top + a.scrollTop, r = a.height, h = a.isWindow ? a.scrollTop : a.offset.top, l = e.top - t.collisionPosition.marginTop, u = l - h, c = l + t.collisionHeight - r - h, d = "top" === t.my[1], p = d ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, m = -2 * t.offset[1];
                0 > u ? (s = e.top + p + f + m + t.collisionHeight - r - n, e.top + p + f + m > u && (0 > s || o(u) > s) && (e.top += p + f + m)) : c > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, 
                e.top + p + f + m > c && (i > 0 || c > o(i)) && (e.top += p + f + m));
            }
        },
        flipfit: {
            left: function() {
                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
            },
            top: function() {
                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
            }
        }
    }, function() {
        var t, i, s, a, n, r = document.getElementsByTagName("body")[0], o = document.createElement("div");
        t = document.createElement(r ? "div" : "body"), s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, r && e.extend(s, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (n in s) {
            t.style[n] = s[n];
        }
        t.appendChild(o), i = r || document.documentElement, i.insertBefore(t, i.firstChild), o.style.cssText = "position: absolute; left: 10.7432222px;", 
        a = e(o).offset().left, e.support.offsetFractions = a > 10 && 11 > a, t.innerHTML = "", i.removeChild(t);
    }();
}(jQuery);

!function(e) {
    e.widget("ui.selectable", e.ui.mouse, {
        version: "1.10.3",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function() {
                    var t = e(this), i = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>");
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), 
            this._mouseDestroy();
        },
        _mouseStart: function(t) {
            var i = this, s = this.options;
            this.opos = [ t.pageX, t.pageY ], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), 
            e(s.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = e.data(this, "selectable-item");
                s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), 
                s.unselecting = !0, i._trigger("unselecting", t, {
                    unselecting: s.element
                }));
            }), e(t.target).parents().addBack().each(function() {
                var s, a = e.data(this, "selectable-item");
                return a ? (s = !t.metaKey && !t.ctrlKey || !a.$element.hasClass("ui-selected"), a.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), 
                a.unselecting = !s, a.selecting = s, a.selected = s, s ? i._trigger("selecting", t, {
                    selecting: a.element
                }) : i._trigger("unselecting", t, {
                    unselecting: a.element
                }), !1) : void 0;
            }));
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, a = this.options, n = this.opos[0], r = this.opos[1], o = t.pageX, h = t.pageY;
                return n > o && (i = o, o = n, n = i), r > h && (i = h, h = r, r = i), this.helper.css({
                    left: n,
                    top: r,
                    width: o - n,
                    height: h - r
                }), this.selectees.each(function() {
                    var i = e.data(this, "selectable-item"), l = !1;
                    i && i.element !== s.element[0] && ("touch" === a.tolerance ? l = !(i.left > o || n > i.right || i.top > h || r > i.bottom) : "fit" === a.tolerance && (l = i.left > n && o > i.right && i.top > r && h > i.bottom), 
                    l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), 
                    i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
                        selecting: i.element
                    }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, 
                    i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), 
                    i.unselecting = !0), s._trigger("unselecting", t, {
                        unselecting: i.element
                    }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, 
                    i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
                        unselecting: i.element
                    })))));
                }), !1;
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
                    unselected: s.element
                });
            }), e(".ui-selecting", this.element[0]).each(function() {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, 
                i._trigger("selected", t, {
                    selected: s.element
                });
            }), this._trigger("stop", t), this.helper.remove(), !1;
        }
    });
}(jQuery);

!function(e, t) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, 
        this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", 
        this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", 
        this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", 
        this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover");
        }).delegate(i, "mouseover", function() {
            e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
            e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"));
        });
    }
    function s(t, i) {
        e.extend(t, i);
        for (var a in i) {
            null == i[a] && (t[a] = i[a]);
        }
        return t;
    }
    e.extend(e.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var n, r = "datepicker";
    e.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(e) {
            return s(this._defaults, e || {}), this;
        },
        _attachDatepicker: function(t, i) {
            var a, s, n;
            a = t.nodeName.toLowerCase(), s = "div" === a || "span" === a, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), s), 
            n.settings = e.extend({}, i || {}), "input" === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n);
        },
        _newInst: function(t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function(t, i) {
            var a = e(t);
            i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), 
            this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t));
        },
        _attachments: function(t, i) {
            var a, s, n, r = this._get(i, "appendText"), o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), 
            t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), a = this._get(i, "showOn"), ("focus" === a || "both" === a) && t.focus(this._showDatepicker), 
            ("button" === a || "both" === a) && (s = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: n,
                alt: s,
                title: s
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({
                src: n,
                alt: s,
                title: s
            }) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), 
                e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1;
            }));
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, a, s, n = new Date(2009, 11, 20), r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) {
                    for (i = 0, a = 0, s = 0; e.length > s; s++) {
                        e[s].length > i && (i = e[s].length, a = s);
                    }
                    return a;
                }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), 
                e.input.attr("size", this._formatDate(e, n).length);
            }
        },
        _inlineDatepicker: function(t, i) {
            var a = e(t);
            a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), 
            this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(t, i, a, n, o) {
            var h, l, u, d, c, p = this._dialogInst;
            return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
            this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), 
            p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, 
            this._dialogInput.val(i), this._pos = o ? o.length ? o : [ o.pageX, o.pageY ] : null, this._pos || (l = document.documentElement.clientWidth, 
            u = document.documentElement.clientHeight, d = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, 
            this._pos = [ l / 2 - 100 + d, u / 2 - 150 + c ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            p.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), 
            e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this;
        },
        _destroyDatepicker: function(t) {
            var i, a = e(t), s = e.data(t, r);
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), "input" === i ? (s.append.remove(), 
            s.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && a.removeClass(this.markerClassName).empty());
        },
        _enableDatepicker: function(t) {
            var i, a, s = e(t), n = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().removeClass("ui-state-disabled"), 
            a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e;
            }));
        },
        _disableDatepicker: function(t) {
            var i, a, s = e(t), n = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().addClass("ui-state-disabled"), 
            a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e;
            }), this._disabledInputs[this._disabledInputs.length] = t);
        },
        _isDisabledDatepicker: function(e) {
            if (!e) {
                return !1;
            }
            for (var t = 0; this._disabledInputs.length > t; t++) {
                if (this._disabledInputs[t] === e) {
                    return !0;
                }
            }
            return !1;
        },
        _getInst: function(t) {
            try {
                return e.data(t, r);
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(i, a, n) {
            var r, o, h, l, u = this._getInst(i);
            return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : u ? "all" === a ? e.extend({}, u.settings) : this._get(u, a) : null : (r = a || {}, 
            "string" == typeof a && (r = {}, r[a] = n), u && (this._curInst === u && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), 
            h = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), s(u.settings, r), null !== h && r.dateFormat !== t && r.minDate === t && (u.settings.minDate = this._formatDate(u, h)), 
            null !== l && r.dateFormat !== t && r.maxDate === t && (u.settings.maxDate = this._formatDate(u, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), 
            this._attachments(e(i), u), this._autoSize(u), this._setDate(u, o), this._updateAlternate(u), this._updateDatepicker(u)), 
            t);
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i);
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t);
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i));
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null;
        },
        _doKeyDown: function(t) {
            var i, a, s, n = e.datepicker._getInst(t.target), r = !0, o = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, e.datepicker._datepickerShowing) {
                switch (t.keyCode) {
                  case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;

                  case 13:
                    return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), 
                    i = e.datepicker._get(n, "onSelect"), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [ a, n ])) : e.datepicker._hideDatepicker(), 
                    !1;

                  case 27:
                    e.datepicker._hideDatepicker();
                    break;

                  case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;

                  case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;

                  case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;

                  case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;

                  case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;

                  case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;

                  case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;

                  case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;

                  default:
                    r = !1;
                }
            } else {
                36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            }
            r && (t.preventDefault(), t.stopPropagation());
        },
        _doKeyPress: function(i) {
            var a, s, n = e.datepicker._getInst(i.target);
            return e.datepicker._get(n, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), 
            i.ctrlKey || i.metaKey || " " > s || !a || a.indexOf(s) > -1) : t;
        },
        _doKeyUp: function(t) {
            var i, a = e.datepicker._getInst(t.target);
            if (a.input.val() !== a.lastVal) {
                try {
                    i = e.datepicker.parseDate(e.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)), 
                    i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a));
                } catch (s) {}
            }
            return !0;
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, a, n, r, o, h, l;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), 
                i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), 
                n = a ? a.apply(t, [ t, i ]) : {}, n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), 
                e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), 
                r = !1, e(t).parents().each(function() {
                    return r |= "fixed" === e(this).css("position"), !r;
                }), o = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }), i.inline || (h = e.datepicker._get(i, "showAnim"), l = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), 
                e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[h] ? i.dpDiv.show(h, e.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), 
                e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i));
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, a = this._getNumberOfMonths(t), s = a[1], r = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), 
            t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), 
            t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus");
        },
        _checkOffset: function(t, i, a) {
            var s = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), r = t.input ? t.input.outerWidth() : 0, o = t.input ? t.input.outerHeight() : 0, h = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()), l = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, 
            i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > h && h > s ? Math.abs(i.left + s - h) : 0), 
            i.top -= Math.min(i.top, i.top + n > l && l > n ? Math.abs(n + o) : 0), i;
        },
        _findPos: function(t) {
            for (var i, a = this._getInst(t), s = this._get(a, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t)); ) {
                t = t[s ? "previousSibling" : "nextSibling"];
            }
            return i = e(t).offset(), [ i.left, i.top ];
        },
        _hideDatepicker: function(t) {
            var i, a, s, n, o = this._curInst;
            !o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), a = this._get(o, "duration"), 
            s = function() {
                e.datepicker._tidyDialog(o);
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), a, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? a : null, s), 
            i || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [ o.input ? o.input.val() : "", o ]), 
            this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target), a = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(t, i, a) {
            var s = e(t), n = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0), a), 
            this._updateDatepicker(n));
        },
        _gotoToday: function(t) {
            var i, a = e(t), s = this._getInst(a[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, 
            s.drawYear = s.selectedYear = s.currentYear) : (i = new Date(), s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), 
            s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a);
        },
        _selectMonthYear: function(t, i, a) {
            var s = e(t), n = this._getInst(s[0]);
            n["selected" + ("M" === a ? "Month" : "Year")] = n["draw" + ("M" === a ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), 
            this._notifyChange(n), this._adjustDate(s);
        },
        _selectDay: function(t, i, a, s) {
            var n, r = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", s).html(), 
            n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)));
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "");
        },
        _selectDate: function(t, i) {
            var a, s = e(t), n = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), a = this._get(n, "onSelect"), 
            a ? a.apply(n.input ? n.input[0] : null, [ i, n ]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), 
            this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null);
        },
        _updateAlternate: function(t) {
            var i, a, s, n = this._get(t, "altField");
            n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), 
            e(n).each(function() {
                e(this).val(s);
            }));
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [ t > 0 && 6 > t, "" ];
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1;
        },
        parseDate: function(i, a, s) {
            if (null == i || null == a) {
                throw "Invalid arguments";
            }
            if (a = "object" == typeof a ? "" + a : a + "", "" === a) {
                return null;
            }
            var n, r, o, h, l = 0, u = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = "string" != typeof u ? u : new Date().getFullYear() % 100 + parseInt(u, 10), c = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort, p = (s ? s.dayNames : null) || this._defaults.dayNames, m = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort, f = (s ? s.monthNames : null) || this._defaults.monthNames, g = -1, v = -1, y = -1, b = -1, _ = !1, k = function(e) {
                var t = i.length > n + 1 && i.charAt(n + 1) === e;
                return t && n++, t;
            }, x = function(e) {
                var t = k(e), i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2, s = RegExp("^\\d{1," + i + "}"), n = a.substring(l).match(s);
                if (!n) {
                    throw "Missing number at position " + l;
                }
                return l += n[0].length, parseInt(n[0], 10);
            }, D = function(i, s, n) {
                var r = -1, o = e.map(k(i) ? n : s, function(e, t) {
                    return [ [ t, e ] ];
                }).sort(function(e, t) {
                    return -(e[1].length - t[1].length);
                });
                if (e.each(o, function(e, i) {
                    var s = i[1];
                    return a.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], l += s.length, !1) : t;
                }), -1 !== r) {
                    return r + 1;
                }
                throw "Unknown name at position " + l;
            }, w = function() {
                if (a.charAt(l) !== i.charAt(n)) {
                    throw "Unexpected literal at position " + l;
                }
                l++;
            };
            for (n = 0; i.length > n; n++) {
                if (_) {
                    "'" !== i.charAt(n) || k("'") ? w() : _ = !1;
                } else {
                    switch (i.charAt(n)) {
                      case "d":
                        y = x("d");
                        break;

                      case "D":
                        D("D", c, p);
                        break;

                      case "o":
                        b = x("o");
                        break;

                      case "m":
                        v = x("m");
                        break;

                      case "M":
                        v = D("M", m, f);
                        break;

                      case "y":
                        g = x("y");
                        break;

                      case "@":
                        h = new Date(x("@")), g = h.getFullYear(), v = h.getMonth() + 1, y = h.getDate();
                        break;

                      case "!":
                        h = new Date((x("!") - this._ticksTo1970) / 1e4), g = h.getFullYear(), v = h.getMonth() + 1, y = h.getDate();
                        break;

                      case "'":
                        k("'") ? w() : _ = !0;
                        break;

                      default:
                        w();
                    }
                }
            }
            if (a.length > l && (o = a.substr(l), !/^\s+/.test(o))) {
                throw "Extra/unparsed characters found in date: " + o;
            }
            if (-1 === g ? g = new Date().getFullYear() : 100 > g && (g += new Date().getFullYear() - new Date().getFullYear() % 100 + (d >= g ? 0 : -100)), 
            b > -1) {
                for (v = 1, y = b; ;) {
                    if (r = this._getDaysInMonth(g, v - 1), r >= y) {
                        break;
                    }
                    v++, y -= r;
                }
            }
            if (h = this._daylightSavingAdjust(new Date(g, v - 1, y)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== y) {
                throw "Invalid date";
            }
            return h;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) {
                return "";
            }
            var a, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, n = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, h = function(t) {
                var i = e.length > a + 1 && e.charAt(a + 1) === t;
                return i && a++, i;
            }, l = function(e, t, i) {
                var a = "" + t;
                if (h(e)) {
                    for (;i > a.length; ) {
                        a = "0" + a;
                    }
                }
                return a;
            }, u = function(e, t, i, a) {
                return h(e) ? a[t] : i[t];
            }, d = "", c = !1;
            if (t) {
                for (a = 0; e.length > a; a++) {
                    if (c) {
                        "'" !== e.charAt(a) || h("'") ? d += e.charAt(a) : c = !1;
                    } else {
                        switch (e.charAt(a)) {
                          case "d":
                            d += l("d", t.getDate(), 2);
                            break;

                          case "D":
                            d += u("D", t.getDay(), s, n);
                            break;

                          case "o":
                            d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;

                          case "m":
                            d += l("m", t.getMonth() + 1, 2);
                            break;

                          case "M":
                            d += u("M", t.getMonth(), r, o);
                            break;

                          case "y":
                            d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;

                          case "@":
                            d += t.getTime();
                            break;

                          case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;

                          case "'":
                            h("'") ? d += "'" : c = !0;
                            break;

                          default:
                            d += e.charAt(a);
                        }
                    }
                }
            }
            return d;
        },
        _possibleChars: function(e) {
            var t, i = "", a = !1, s = function(i) {
                var a = e.length > t + 1 && e.charAt(t + 1) === i;
                return a && t++, a;
            };
            for (t = 0; e.length > t; t++) {
                if (a) {
                    "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : a = !1;
                } else {
                    switch (e.charAt(t)) {
                      case "d":
                      case "m":
                      case "y":
                      case "@":
                        i += "0123456789";
                        break;

                      case "D":
                      case "M":
                        return null;

                      case "'":
                        s("'") ? i += "'" : a = !0;
                        break;

                      default:
                        i += e.charAt(t);
                    }
                }
            }
            return i;
        },
        _get: function(e, i) {
            return e.settings[i] !== t ? e.settings[i] : this._defaults[i];
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"), a = e.lastVal = e.input ? e.input.val() : null, s = this._getDefaultDate(e), n = s, r = this._getFormatConfig(e);
                try {
                    n = this.parseDate(i, a, r) || s;
                } catch (o) {
                    a = t ? "" : a;
                }
                e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), 
                e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e);
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date()));
        },
        _determineDate: function(t, i, a) {
            var s = function(e) {
                var t = new Date();
                return t.setDate(t.getDate() + e), t;
            }, n = function(i) {
                try {
                    return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t));
                } catch (a) {}
                for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date(), n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l; ) {
                    switch (l[2] || "d") {
                      case "d":
                      case "D":
                        o += parseInt(l[1], 10);
                        break;

                      case "w":
                      case "W":
                        o += 7 * parseInt(l[1], 10);
                        break;

                      case "m":
                      case "M":
                        r += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                        break;

                      case "y":
                      case "Y":
                        n += parseInt(l[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                    }
                    l = h.exec(i);
                }
                return new Date(n, r, o);
            }, r = null == i || "" === i ? a : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? a : s(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? a : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), 
            this._daylightSavingAdjust(r);
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
        },
        _setDate: function(e, t, i) {
            var a = !t, s = e.selectedMonth, n = e.selectedYear, r = this._restrictMinMax(e, this._determineDate(e, t, new Date()));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), 
            s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e));
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t;
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"), a = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(a, -i, "M");
                    },
                    next: function() {
                        e.datepicker._adjustDate(a, +i, "M");
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker();
                    },
                    today: function() {
                        e.datepicker._gotoToday(a);
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(a, this, "M"), !1;
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(a, this, "Y"), !1;
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(e) {
            var t, i, a, s, n, r, o, h, l, u, d, c, p, m, f, g, v, y, b, _, k, x, D, w, T, M, S, N, C, A, P, I, F, j, H, E, z, L, O, R = new Date(), W = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), Y = this._get(e, "isRTL"), J = this._get(e, "showButtonPanel"), $ = this._get(e, "hideIfNoPrevNext"), Q = this._get(e, "navigationAsDateFormat"), B = this._getNumberOfMonths(e), K = this._get(e, "showCurrentAtPos"), V = this._get(e, "stepMonths"), U = 1 !== B[0] || 1 !== B[1], G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), q = this._getMinMaxDate(e, "min"), X = this._getMinMaxDate(e, "max"), Z = e.drawMonth - K, et = e.drawYear;
            if (0 > Z && (Z += 12, et--), X) {
                for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - B[0] * B[1] + 1, X.getDate())), t = q && q > t ? q : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t; ) {
                    Z--, 0 > Z && (Z = 11, et--);
                }
            }
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = Q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - V, 1)), this._getFormatConfig(e)) : i, 
            a = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : $ ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", 
            s = this._get(e, "nextText"), s = Q ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + V, 1)), this._getFormatConfig(e)) : s, 
            n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + s + "</span></a>" : $ ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + s + "</span></a>", 
            r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? G : W, r = Q ? this.formatDate(r, o, this._getFormatConfig(e)) : r, 
            h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", 
            l = J ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", 
            u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), 
            p = this._get(e, "dayNamesMin"), m = this._get(e, "monthNames"), f = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), 
            v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", x = 0; B[0] > x; x++) {
                for (D = "", this.maxRows = 4, w = 0; B[1] > w; w++) {
                    if (T = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), M = " ui-corner-all", S = "", U) {
                        if (S += "<div class='ui-datepicker-group", B[1] > 1) {
                            switch (w) {
                              case 0:
                                S += " ui-datepicker-group-first", M = " ui-corner-" + (Y ? "right" : "left");
                                break;

                              case B[1] - 1:
                                S += " ui-datepicker-group-last", M = " ui-corner-" + (Y ? "left" : "right");
                                break;

                              default:
                                S += " ui-datepicker-group-middle", M = "";
                            }
                        }
                        S += "'>";
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + M + "'>" + (/all|left/.test(M) && 0 === x ? Y ? n : a : "") + (/all|right/.test(M) && 0 === x ? Y ? a : n : "") + this._generateMonthYearHeader(e, Z, et, q, X, x > 0 || w > 0, m, f) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", 
                    N = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", k = 0; 7 > k; k++) {
                        C = (k + u) % 7, N += "<th" + ((k + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
                    }
                    for (S += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), 
                    P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), F = U ? this.maxRows > I ? this.maxRows : I : I, 
                    this.maxRows = F, j = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), H = 0; F > H; H++) {
                        for (S += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(j) + "</td>" : "", k = 0; 7 > k; k++) {
                            z = g ? g.apply(e.input ? e.input[0] : null, [ j ]) : [ !0, "" ], L = j.getMonth() !== Z, O = L && !y || !z[0] || q && q > j || X && j > X, 
                            E += "<td class='" + ((k + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (j.getTime() === T.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === j.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (O ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !v ? "" : " " + z[1] + (j.getTime() === G.getTime() ? " " + this._currentClass : "") + (j.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !v || !z[2] ? "" : " title='" + z[2].replace(/'/g, "&#39;") + "'") + (O ? "" : " data-handler='selectDay' data-event='click' data-month='" + j.getMonth() + "' data-year='" + j.getFullYear() + "'") + ">" + (L && !v ? "&#xa0;" : O ? "<span class='ui-state-default'>" + j.getDate() + "</span>" : "<a class='ui-state-default" + (j.getTime() === W.getTime() ? " ui-state-highlight" : "") + (j.getTime() === G.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + j.getDate() + "</a>") + "</td>", 
                            j.setDate(j.getDate() + 1), j = this._daylightSavingAdjust(j);
                        }
                        S += E + "</tr>";
                    }
                    Z++, Z > 11 && (Z = 0, et++), S += "</tbody></table>" + (U ? "</div>" + (B[0] > 0 && w === B[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), 
                    D += S;
                }
                _ += D;
            }
            return _ += l, e._keyEvent = !1, _;
        },
        _generateMonthYearHeader: function(e, t, i, a, s, n, r, o) {
            var h, l, u, d, c, p, m, f, g = this._get(e, "changeMonth"), v = this._get(e, "changeYear"), y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = "";
            if (n || !g) {
                _ += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            } else {
                for (h = a && a.getFullYear() === i, l = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", 
                u = 0; 12 > u; u++) {
                    (!h || u >= a.getMonth()) && (!l || s.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + o[u] + "</option>");
                }
                _ += "</select>";
            }
            if (y || (b += _ + (!n && g && v ? "" : "&#xa0;")), !e.yearshtml) {
                if (e.yearshtml = "", n || !v) {
                    b += "<span class='ui-datepicker-year'>" + i + "</span>";
                } else {
                    for (d = this._get(e, "yearRange").split(":"), c = new Date().getFullYear(), p = function(e) {
                        var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
                        return isNaN(t) ? c : t;
                    }, m = p(d[0]), f = Math.max(m, p(d[1] || "")), m = a ? Math.max(m, a.getFullYear()) : m, f = s ? Math.min(f, s.getFullYear()) : f, 
                    e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f >= m; m++) {
                        e.yearshtml += "<option value='" + m + "'" + (m === i ? " selected='selected'" : "") + ">" + m + "</option>";
                    }
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null;
                }
            }
            return b += this._get(e, "yearSuffix"), y && (b += (!n && g && v ? "" : "&#xa0;") + _), b += "</div>";
        },
        _adjustInstDate: function(e, t, i) {
            var a = e.drawYear + ("Y" === i ? t : 0), s = e.drawMonth + ("M" === i ? t : 0), n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ("D" === i ? t : 0), r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), 
            ("M" === i || "Y" === i) && this._notifyChange(e);
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), s = i && i > t ? i : t;
            return a && s > a ? a : s;
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [ e.selectedYear, e.selectedMonth + 1, e ]);
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [ 1, 1 ] : "number" == typeof t ? [ 1, t ] : t;
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null);
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay();
        },
        _canAdjustMonth: function(e, t, i, a) {
            var s = this._getNumberOfMonths(e), n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
            return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n);
        },
        _isInRange: function(e, t) {
            var i, a, s = this._getMinMaxDate(e, "min"), n = this._getMinMaxDate(e, "max"), r = null, o = null, h = this._get(e, "yearRange");
            return h && (i = h.split(":"), a = new Date().getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), 
            i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear());
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : new Date().getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            };
        },
        _formatDate: function(e, t, i, a) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e));
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) {
            return this;
        }
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [ this[0] ].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [ this ].concat(i)) : e.datepicker._attachDatepicker(this, t);
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [ this[0] ].concat(i));
    }, e.datepicker = new i(), e.datepicker.initialized = !1, e.datepicker.uuid = new Date().getTime(), e.datepicker.version = "1.10.3";
}(jQuery);

!function(factory) {
    if ("function" === typeof define && define.amd) {
        define([ "jquery" ], factory);
    } else {
        if ("object" === typeof exports) {
            module.exports = factory;
        } else {
            factory(jQuery);
        }
    }
}(function($) {
    function handler(event) {
        var orgEvent = event || window.event, args = slice.call(arguments, 1), delta = 0, deltaX = 0, deltaY = 0, absDelta = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if ("detail" in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ("wheelDelta" in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ("wheelDeltaY" in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ("wheelDeltaX" in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }
        if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }
        delta = 0 === deltaY ? deltaX : deltaY;
        if ("deltaY" in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ("deltaX" in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (0 === deltaY) {
                delta = deltaX * -1;
            }
        }
        if (0 === deltaY && 0 === deltaX) {
            return;
        }
        if (1 === orgEvent.deltaMode) {
            var lineHeight = $.data(this, "mousewheel-line-height");
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else {
            if (2 === orgEvent.deltaMode) {
                var pageHeight = $.data(this, "mousewheel-page-height");
                delta *= pageHeight;
                deltaY *= pageHeight;
                deltaX *= pageHeight;
            }
        }
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }
        delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.deltaMode = 0;
        args.unshift(event, delta, deltaX, deltaY);
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
    function nullLowestDelta() {
        lowestDelta = null;
    }
    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        return special.settings.adjustOldDeltas && "mousewheel" === orgEvent.type && absDelta % 120 === 0;
    }
    var nullLowestDeltaTimeout, lowestDelta, toFix = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], toBind = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ], slice = Array.prototype.slice;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i; ) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }
    var special = $.event.special.mousewheel = {
        version: "3.1.9",
        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i; ) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            $.data(this, "mousewheel-line-height", special.getLineHeight(this));
            $.data(this, "mousewheel-page-height", special.getPageHeight(this));
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i; ) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        },
        getLineHeight: function(elem) {
            return parseInt($(elem)["offsetParent" in $.fn ? "offsetParent" : "parent"]().css("fontSize"), 10);
        },
        getPageHeight: function(elem) {
            return $(elem).height();
        },
        settings: {
            adjustOldDeltas: true
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });
});

!function(factory) {
    if ("function" === typeof define && define.amd) {
        define([ "jquery" ], factory);
    } else {
        if ("object" === typeof exports) {
            factory(require("jquery"));
        } else {
            factory(jQuery);
        }
    }
}(function($) {
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (0 === s.indexOf('"')) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
        }
        try {
            s = decodeURIComponent(s.replace(pluses, " "));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var pluses = /\+/g;
    var config = $.cookie = function(key, value, options) {
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if ("number" === typeof options.expires) {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + 864e5 * days);
            }
            return document.cookie = [ encode(key), "=", stringifyCookieValue(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : "" ].join("");
        }
        var result = key ? void 0 : {};
        var cookies = document.cookie ? document.cookie.split("; ") : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split("=");
            var name = decode(parts.shift());
            var cookie = parts.join("=");
            if (key && key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && void 0 !== (cookie = read(cookie))) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        if (void 0 === $.cookie(key)) {
            return false;
        }
        $.cookie(key, "", $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    };
});

!function(a, b, c) {
    a.fn.jScrollPane = function(d) {
        function e(d, e) {
            function f(b) {
                var e, h, j, l, m, n, q = !1, r = !1;
                if (P = b, Q === c) {
                    m = d.scrollTop(), n = d.scrollLeft(), d.css({
                        overflow: "hidden",
                        padding: 0
                    }), R = d.innerWidth() + tb, S = d.innerHeight(), d.width(R), Q = a('<div class="jspPane" />').css("padding", sb).append(d.children()), 
                    T = a('<div class="jspContainer" />').css({
                        width: R + "px",
                        height: S + "px"
                    }).append(Q).appendTo(d);
                } else {
                    if (d.css("width", ""), q = P.stickToBottom && C(), r = P.stickToRight && D(), l = d.innerWidth() + tb != R || d.outerHeight() != S, 
                    l && (R = d.innerWidth() + tb, S = d.innerHeight(), T.css({
                        width: R + "px",
                        height: S + "px"
                    })), !l && ub == U && Q.outerHeight() == V) {
                        return [object Object]0;
                    }
                    ub = U, Q.css("width", ""), d.width(R), T.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end();
                }
                Q.css("overflow", "auto"), U = b.contentWidth ? b.contentWidth : Q[0].scrollWidth, V = Q[0].scrollHeight, Q.css("overflow", ""), 
                W = U / R, X = V / S, Y = X > 1, Z = W > 1, Z || Y ? (d.addClass("jspScrollable"), e = P.maintainPosition && (ab || db), 
                e && (h = A(), j = B()), g(), i(), k(), e && (y(r ? U - R : h, !1), x(q ? V - S : j, !1)), H(), E(), N(), P.enableKeyboardNavigation && J(), 
                P.clickOnTrack && o(), L(), P.hijackInternalLinks && M()) : (d.removeClass("jspScrollable"), Q.css({
                    top: 0,
                    left: 0,
                    width: T.width() - tb
                }), F(), I(), K(), p()), P.autoReinitialise && !rb ? rb = setInterval(function() {
                    f(P);
                }, P.autoReinitialiseDelay) : !P.autoReinitialise && rb && clearInterval(rb), m && d.scrollTop(0) && x(m, !1), n && d.scrollLeft(0) && y(n, !1), 
                d.trigger("jsp-initialised", [ Z || Y ]);
            }
            function g() {
                Y && (T.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), 
                eb = T.find(">.jspVerticalBar"), fb = eb.find(">.jspTrack"), $ = fb.find(">.jspDrag"), P.showArrows && (jb = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", m(0, -1)).bind("click.jsp", G), 
                kb = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", m(0, 1)).bind("click.jsp", G), P.arrowScrollOnHover && (jb.bind("mouseover.jsp", m(0, -1, jb)), 
                kb.bind("mouseover.jsp", m(0, 1, kb))), l(fb, P.verticalArrowPositions, jb, kb)), hb = S, T.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    hb -= a(this).outerHeight();
                }), $.hover(function() {
                    $.addClass("jspHover");
                }, function() {
                    $.removeClass("jspHover");
                }).bind("mousedown.jsp", function(b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", G), $.addClass("jspActive");
                    var c = b.pageY - $.position().top;
                    return a("html").bind("mousemove.jsp", function(a) {
                        r(a.pageY - c, !1);
                    }).bind("mouseup.jsp mouseleave.jsp", q), !1;
                }), h());
            }
            function h() {
                fb.height(hb + "px"), ab = 0, gb = P.verticalGutter + fb.outerWidth(), Q.width(R - gb - tb);
                try {
                    0 === eb.position().left && Q.css("margin-left", gb + "px");
                } catch (a) {}
            }
            function i() {
                Z && (T.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), 
                lb = T.find(">.jspHorizontalBar"), mb = lb.find(">.jspTrack"), bb = mb.find(">.jspDrag"), P.showArrows && (pb = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", m(-1, 0)).bind("click.jsp", G), 
                qb = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", m(1, 0)).bind("click.jsp", G), P.arrowScrollOnHover && (pb.bind("mouseover.jsp", m(-1, 0, pb)), 
                qb.bind("mouseover.jsp", m(1, 0, qb))), l(mb, P.horizontalArrowPositions, pb, qb)), bb.hover(function() {
                    bb.addClass("jspHover");
                }, function() {
                    bb.removeClass("jspHover");
                }).bind("mousedown.jsp", function(b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", G), bb.addClass("jspActive");
                    var c = b.pageX - bb.position().left;
                    return a("html").bind("mousemove.jsp", function(a) {
                        t(a.pageX - c, !1);
                    }).bind("mouseup.jsp mouseleave.jsp", q), !1;
                }), nb = T.innerWidth(), j());
            }
            function j() {
                T.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    nb -= a(this).outerWidth();
                }), mb.width(nb + "px"), db = 0;
            }
            function k() {
                if (Z && Y) {
                    var b = mb.outerHeight(), c = fb.outerWidth();
                    hb -= b, a(lb).find(">.jspCap:visible,>.jspArrow").each(function() {
                        nb += a(this).outerWidth();
                    }), nb -= c, S -= c, R -= b, mb.parent().append(a('<div class="jspCorner" />').css("width", b + "px")), h(), j();
                }
                Z && Q.width(T.outerWidth() - tb + "px"), V = Q.outerHeight(), X = V / S, Z && (ob = Math.ceil(1 / W * nb), ob > P.horizontalDragMaxWidth ? ob = P.horizontalDragMaxWidth : ob < P.horizontalDragMinWidth && (ob = P.horizontalDragMinWidth), 
                bb.width(ob + "px"), cb = nb - ob, u(db)), Y && (ib = Math.ceil(1 / X * hb), ib > P.verticalDragMaxHeight ? ib = P.verticalDragMaxHeight : ib < P.verticalDragMinHeight && (ib = P.verticalDragMinHeight), 
                $.height(ib + "px"), _ = hb - ib, s(ab));
            }
            function l(a, b, c, d) {
                var e, f = "before", g = "after";
                "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split"), b == f ? g = b : b == g && (f = b, e = c, c = d, 
                d = e), a[f](c)[g](d);
            }
            function m(a, b, c) {
                return function() {
                    return n(a, b, this, c), this.blur(), !1;
                };
            }
            function n(b, c, d, e) {
                d = a(d).addClass("jspActive");
                var f, g, h = !0, i = function() {
                    0 !== b && vb.scrollByX(b * P.arrowButtonSpeed), 0 !== c && vb.scrollByY(c * P.arrowButtonSpeed), g = setTimeout(i, h ? P.initialDelay : P.arrowRepeatFreq), 
                    h = !1;
                };
                i(), f = e ? "mouseout.jsp" : "mouseup.jsp", e = e || a("html"), e.bind(f, function() {
                    d.removeClass("jspActive"), g && clearTimeout(g), g = null, e.unbind(f);
                });
            }
            function o() {
                p(), Y && fb.bind("mousedown.jsp", function(b) {
                    if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                        var d, e = a(this), f = e.offset(), g = b.pageY - f.top - ab, h = !0, i = function() {
                            var a = e.offset(), c = b.pageY - a.top - ib / 2, f = S * P.scrollPagePercent, k = _ * f / (V - S);
                            if (0 > g) {
                                ab - k > c ? vb.scrollByY(-f) : r(c);
                            } else {
                                if (!(g > 0)) {
                                    return [object Object]0;
                                }
                                c > ab + k ? vb.scrollByY(f) : r(c);
                            }
                            d = setTimeout(i, h ? P.initialDelay : P.trackClickRepeatFreq), h = !1;
                        }, j = function() {
                            d && clearTimeout(d), d = null, a(document).unbind("mouseup.jsp", j);
                        };
                        return i(), a(document).bind("mouseup.jsp", j), !1;
                    }
                }), Z && mb.bind("mousedown.jsp", function(b) {
                    if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                        var d, e = a(this), f = e.offset(), g = b.pageX - f.left - db, h = !0, i = function() {
                            var a = e.offset(), c = b.pageX - a.left - ob / 2, f = R * P.scrollPagePercent, k = cb * f / (U - R);
                            if (0 > g) {
                                db - k > c ? vb.scrollByX(-f) : t(c);
                            } else {
                                if (!(g > 0)) {
                                    return [object Object]0;
                                }
                                c > db + k ? vb.scrollByX(f) : t(c);
                            }
                            d = setTimeout(i, h ? P.initialDelay : P.trackClickRepeatFreq), h = !1;
                        }, j = function() {
                            d && clearTimeout(d), d = null, a(document).unbind("mouseup.jsp", j);
                        };
                        return i(), a(document).bind("mouseup.jsp", j), !1;
                    }
                });
            }
            function p() {
                mb && mb.unbind("mousedown.jsp"), fb && fb.unbind("mousedown.jsp");
            }
            function q() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), $ && $.removeClass("jspActive"), 
                bb && bb.removeClass("jspActive");
            }
            function r(a, b) {
                Y && (0 > a ? a = 0 : a > _ && (a = _), b === c && (b = P.animateScroll), b ? vb.animate($, "top", a, s) : ($.css("top", a), 
                s(a)));
            }
            function s(a) {
                a === c && (a = $.position().top), T.scrollTop(0), ab = a;
                var b = 0 === ab, e = ab == _, f = a / _, g = -f * (V - S);
                (wb != b || yb != e) && (wb = b, yb = e, d.trigger("jsp-arrow-change", [ wb, yb, xb, zb ])), v(b, e), Q.css("top", g), d.trigger("jsp-scroll-y", [ -g, b, e ]).trigger("scroll");
            }
            function t(a, b) {
                Z && (0 > a ? a = 0 : a > cb && (a = cb), b === c && (b = P.animateScroll), b ? vb.animate(bb, "left", a, u) : (bb.css("left", a), 
                u(a)));
            }
            function u(a) {
                a === c && (a = bb.position().left), T.scrollTop(0), db = a;
                var b = 0 === db, e = db == cb, f = a / cb, g = -f * (U - R);
                (xb != b || zb != e) && (xb = b, zb = e, d.trigger("jsp-arrow-change", [ wb, yb, xb, zb ])), w(b, e), Q.css("left", g), 
                d.trigger("jsp-scroll-x", [ -g, b, e ]).trigger("scroll");
            }
            function v(a, b) {
                P.showArrows && (jb[a ? "addClass" : "removeClass"]("jspDisabled"), kb[b ? "addClass" : "removeClass"]("jspDisabled"));
            }
            function w(a, b) {
                P.showArrows && (pb[a ? "addClass" : "removeClass"]("jspDisabled"), qb[b ? "addClass" : "removeClass"]("jspDisabled"));
            }
            function x(a, b) {
                var c = a / (V - S);
                r(c * _, b);
            }
            function y(a, b) {
                var c = a / (U - R);
                t(c * cb, b);
            }
            function z(b, c, d) {
                var e, f, g, h, i, j, k, l, m, n = 0, o = 0;
                try {
                    e = a(b);
                } catch (p) {
                    return;
                }
                for (f = e.outerHeight(), g = e.outerWidth(), T.scrollTop(0), T.scrollLeft(0); !e.is(".jspPane"); ) {
                    if (n += e.position().top, o += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName)) {
                        return;
                    }
                }
                h = B(), j = h + S, h > n || c ? l = n - P.horizontalGutter : n + f > j && (l = n - S + f + P.horizontalGutter), isNaN(l) || x(l, d), 
                i = A(), k = i + R, i > o || c ? m = o - P.horizontalGutter : o + g > k && (m = o - R + g + P.horizontalGutter), isNaN(m) || y(m, d);
            }
            function A() {
                return -Q.position().left;
            }
            function B() {
                return -Q.position().top;
            }
            function C() {
                var a = V - S;
                return a > 20 && a - B() < 10;
            }
            function D() {
                var a = U - R;
                return a > 20 && a - A() < 10;
            }
            function E() {
                T.unbind(Bb).bind(Bb, function(a, b, c, d) {
                    var e = db, f = ab, g = a.deltaFactor || P.mouseWheelSpeed;
                    return vb.scrollBy(c * g, -d * g, !1), e == db && f == ab;
                });
            }
            function F() {
                T.unbind(Bb);
            }
            function G() {
                return !1;
            }
            function H() {
                Q.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(a) {
                    z(a.target, !1);
                });
            }
            function I() {
                Q.find(":input,a").unbind("focus.jsp");
            }
            function J() {
                function b() {
                    var a = db, b = ab;
                    switch (c) {
                      case 40:
                        vb.scrollByY(P.keyboardSpeed, !1);
                        break;

                      case 38:
                        vb.scrollByY(-P.keyboardSpeed, !1);
                        break;

                      case 34:
                      case 32:
                        vb.scrollByY(S * P.scrollPagePercent, !1);
                        break;

                      case 33:
                        vb.scrollByY(-S * P.scrollPagePercent, !1);
                        break;

                      case 39:
                        vb.scrollByX(P.keyboardSpeed, !1);
                        break;

                      case 37:
                        vb.scrollByX(-P.keyboardSpeed, !1);
                    }
                    return e = a != db || b != ab;
                }
                var c, e, f = [];
                Z && f.push(lb[0]), Y && f.push(eb[0]), Q.focus(function() {
                    d.focus();
                }), d.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(d) {
                    if (d.target === this || f.length && a(d.target).closest(f).length) {
                        var g = db, h = ab;
                        switch (d.keyCode) {
                          case 40:
                          case 38:
                          case 34:
                          case 32:
                          case 33:
                          case 39:
                          case 37:
                            c = d.keyCode, b();
                            break;

                          case 35:
                            x(V - S), c = null;
                            break;

                          case 36:
                            x(0), c = null;
                        }
                        return e = d.keyCode == c && g != db || h != ab, !e;
                    }
                }).bind("keypress.jsp", function(a) {
                    return a.keyCode == c && b(), !e;
                }), P.hideFocus ? (d.css("outline", "none"), "hideFocus" in T[0] && d.attr("hideFocus", !0)) : (d.css("outline", ""), "hideFocus" in T[0] && d.attr("hideFocus", !1));
            }
            function K() {
                d.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp");
            }
            function L() {
                if (location.hash && location.hash.length > 1) {
                    var b, c, d = escape(location.hash.substr(1));
                    try {
                        b = a("#" + d + ', a[name="' + d + '"]');
                    } catch (e) {
                        return;
                    }
                    b.length && Q.find(d) && (0 === T.scrollTop() ? c = setInterval(function() {
                        T.scrollTop() > 0 && (z(b, !0), a(document).scrollTop(T.position().top), clearInterval(c));
                    }, 50) : (z(b, !0), a(document).scrollTop(T.position().top)));
                }
            }
            function M() {
                a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function(c) {
                    var d, e, f, g, h, i, j = this.href.substr(0, this.href.indexOf("#")), k = location.href;
                    if (-1 !== location.href.indexOf("#") && (k = location.href.substr(0, location.href.indexOf("#"))), j === k) {
                        d = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            e = a("#" + d + ', a[name="' + d + '"]');
                        } catch (l) {
                            return;
                        }
                        e.length && (f = e.closest(".jspScrollable"), g = f.data("jsp"), g.scrollToElement(e, !0), f[0].scrollIntoView && (h = a(b).scrollTop(), 
                        i = e.offset().top, (h > i || i > h + a(b).height()) && f[0].scrollIntoView()), c.preventDefault());
                    }
                }));
            }
            function N() {
                var a, b, c, d, e, f = !1;
                T.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(g) {
                    var h = g.originalEvent.touches[0];
                    a = A(), b = B(), c = h.pageX, d = h.pageY, e = !1, f = !0;
                }).bind("touchmove.jsp", function(g) {
                    if (f) {
                        var h = g.originalEvent.touches[0], i = db, j = ab;
                        return vb.scrollTo(a + c - h.pageX, b + d - h.pageY), e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5, i == db && j == ab;
                    }
                }).bind("touchend.jsp", function() {
                    f = !1;
                }).bind("click.jsp-touchclick", function() {
                    return e ? (e = !1, !1) : void 0;
                });
            }
            function O() {
                var a = B(), b = A();
                d.removeClass("jspScrollable").unbind(".jsp"), d.replaceWith(Ab.append(Q.children())), Ab.scrollTop(a), Ab.scrollLeft(b), 
                rb && clearInterval(rb);
            }
            var P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb = this, wb = !0, xb = !0, yb = !1, zb = !1, Ab = d.clone(!1, !1).empty(), Bb = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === d.css("box-sizing") ? (sb = 0, tb = 0) : (sb = d.css("paddingTop") + " " + d.css("paddingRight") + " " + d.css("paddingBottom") + " " + d.css("paddingLeft"), 
            tb = (parseInt(d.css("paddingLeft"), 10) || 0) + (parseInt(d.css("paddingRight"), 10) || 0)), a.extend(vb, {
                reinitialise: function(b) {
                    b = a.extend({}, P, b), f(b);
                },
                scrollToElement: function(a, b, c) {
                    z(a, b, c);
                },
                scrollTo: function(a, b, c) {
                    y(a, c), x(b, c);
                },
                scrollToX: function(a, b) {
                    y(a, b);
                },
                scrollToY: function(a, b) {
                    x(a, b);
                },
                scrollToPercentX: function(a, b) {
                    y(a * (U - R), b);
                },
                scrollToPercentY: function(a, b) {
                    x(a * (V - S), b);
                },
                scrollBy: function(a, b, c) {
                    vb.scrollByX(a, c), vb.scrollByY(b, c);
                },
                scrollByX: function(a, b) {
                    var c = A() + Math[0 > a ? "floor" : "ceil"](a), d = c / (U - R);
                    t(d * cb, b);
                },
                scrollByY: function(a, b) {
                    var c = B() + Math[0 > a ? "floor" : "ceil"](a), d = c / (V - S);
                    r(d * _, b);
                },
                positionDragX: function(a, b) {
                    t(a, b);
                },
                positionDragY: function(a, b) {
                    r(a, b);
                },
                animate: function(a, b, c, d) {
                    var e = {};
                    e[b] = c, a.animate(e, {
                        duration: P.animateDuration,
                        easing: P.animateEase,
                        queue: !1,
                        step: d
                    });
                },
                getContentPositionX: function() {
                    return A();
                },
                getContentPositionY: function() {
                    return B();
                },
                getContentWidth: function() {
                    return U;
                },
                getContentHeight: function() {
                    return V;
                },
                getPercentScrolledX: function() {
                    return A() / (U - R);
                },
                getPercentScrolledY: function() {
                    return B() / (V - S);
                },
                getIsScrollableH: function() {
                    return Z;
                },
                getIsScrollableV: function() {
                    return Y;
                },
                getContentPane: function() {
                    return Q;
                },
                scrollToBottom: function(a) {
                    r(_, a);
                },
                hijackInternalLinks: a.noop,
                destroy: function() {
                    O();
                }
            }), f(e);
        }
        return d = a.extend({}, a.fn.jScrollPane.defaults, d), a.each([ "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed" ], function() {
            d[this] = d[this] || d.speed;
        }), this.each(function() {
            var b = a(this), c = b.data("jsp");
            c ? c.reinitialise(d) : (a("script", b).filter('[type="text/javascript"],:not([type])').remove(), c = new e(b, d), b.data("jsp", c));
        });
    }, a.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: c,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    };
}(jQuery, this);