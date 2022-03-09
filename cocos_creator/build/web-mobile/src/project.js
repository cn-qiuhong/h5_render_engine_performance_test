window.__require = function e(r, n, t) {
    function o(c, a) {
        if (!n[c]) {
            if (!r[c]) { var u = c.split("/"); if (u = u[u.length - 1], !r[u]) { var f = "function" == typeof __require && __require; if (!a && f) return f(u, !0); if (i) return i(u, !0); throw new Error("Cannot find module '" + c + "'") } }
            var d = n[c] = { exports: {} };
            r[c][0].call(d.exports, function (e) { return o(r[c][1][e] || e) }, d, d.exports, e, r, n, t)
        }
        return n[c].exports
    }
    for (var i = "function" == typeof __require && __require, c = 0; c < t.length; c++) o(t[c]);
    return o
}({
    Main: [function (e, r, n) {
        "use strict";
        cc._RF.push(r, "59a4b6O341DHYTeMHDuSyjD", "Main"), Object.defineProperty(n, "__esModule", { value: !0 });
        var href = location.href;
        var hfar = href.split('/');
        for (var i in hfar) {
            var tx = hfar[i];
            if (tx == 'cocos_creator') {
                hfar.splice(i);
                break
            }
        }
        hfar.push('ims/');
        var _url_ = hfar.join('/');
        var t = cc._decorator,
            o = t.ccclass,
            i = (t.property, function (e) {
                function r() { return null !== e && e.apply(this, arguments) || this }
                return __extends(r, e), r.prototype.onLoad = function () {
                    for (var e = this.node, r = [], n = 0; n < 2e3; ++n) {
                        var t = new cc.Node;
                        t.anchorX = .5, t.anchorY = .5, t.x = n % 40 * 16 - 320, t.y = 22.72 * (n / 40 | 0) - 568, e.addChild(t), r.push(t)
                    }
                    var o = function (e) {
                        cc.loader.load(_url_ + e + ".png", function (n, t) {
                            for (var o = new cc.SpriteFrame(t), i = e; i < 2e3; i += 100) {
                                var c = r[i];
                                c.addComponent(cc.Sprite).spriteFrame = o, c.width = c.height = 64
                            }
                        })
                    };
                    for (n = 0; n < 100; n++) o(n);
                    this.schedule(function () { for (var e = 0, n = r; e < n.length; e++) { n[e].rotation += 3 } }, 0)
                }, r = __decorate([o], r)
            }(cc.Component));
        n.default = i;
    }, {}]
}, {}, ["Main"]);