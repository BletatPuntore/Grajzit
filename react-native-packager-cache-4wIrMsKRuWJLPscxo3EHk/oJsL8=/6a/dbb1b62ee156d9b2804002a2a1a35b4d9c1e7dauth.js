var firebase = require('@firebase/app').default;(function () {

  (function () {
    var h,
        aa = aa || {},
        k = this,
        ba = function ba(a) {
      return void 0 !== a;
    },
        m = function m(a) {
      return "string" == typeof a;
    },
        ca = function ca(a) {
      return "boolean" == typeof a;
    },
        da = function da() {},
        ea = function ea(a) {
      var b = typeof a;if ("object" == b) {
        if (a) {
          if (a instanceof Array) return "array";if (a instanceof Object) return b;var c = Object.prototype.toString.call(a);if ("[object Window]" == c) return "object";if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
      } else if ("function" == b && "undefined" == typeof a.call) return "object";return b;
    },
        fa = function fa(a) {
      return null === a;
    },
        ha = function ha(a) {
      return "array" == ea(a);
    },
        ia = function ia(a) {
      var b = ea(a);return "array" == b || "object" == b && "number" == typeof a.length;
    },
        p = function p(a) {
      return "function" == ea(a);
    },
        q = function q(a) {
      var b = typeof a;return "object" == b && null != a || "function" == b;
    },
        ja = function ja(a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
        ka = function ka(a, b, c) {
      if (!a) throw Error();if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);return function () {
          var c = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c, d);return a.apply(b, c);
        };
      }return function () {
        return a.apply(b, arguments);
      };
    },
        _r = function r(a, b, c) {
      _r = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;return _r.apply(null, arguments);
    },
        la = function la(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);return function () {
        var b = c.slice();b.push.apply(b, arguments);return a.apply(this, b);
      };
    },
        ma = Date.now || function () {
      return +new Date();
    },
        t = function t(a, b) {
      function c() {}c.prototype = b.prototype;a.Uc = b.prototype;a.prototype = new c();a.prototype.constructor = a;a.Og = function (a, c, f) {
        for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
          d[e - 2] = arguments[e];
        }return b.prototype[c].apply(a, d);
      };
    };var u = function u(a) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, u);else {
        var b = Error().stack;b && (this.stack = b);
      }a && (this.message = String(a));
    };t(u, Error);u.prototype.name = "CustomError";var na = function na(a, b) {
      for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
        d += c.shift() + e.shift();
      }return d + c.join("%s");
    },
        oa = String.prototype.trim ? function (a) {
      return a.trim();
    } : function (a) {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    },
        wa = function wa(a) {
      if (!pa.test(a)) return a;-1 != a.indexOf("&") && (a = a.replace(qa, "&amp;"));-1 != a.indexOf("<") && (a = a.replace(ra, "&lt;"));-1 != a.indexOf(">") && (a = a.replace(sa, "&gt;"));-1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));-1 != a.indexOf("'") && (a = a.replace(ua, "&#39;"));-1 != a.indexOf("\x00") && (a = a.replace(va, "&#0;"));return a;
    },
        qa = /&/g,
        ra = /</g,
        sa = />/g,
        ta = /"/g,
        ua = /'/g,
        va = /\x00/g,
        pa = /[\x00&<>"']/,
        v = function v(a, b) {
      return -1 != a.indexOf(b);
    },
        xa = function xa(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };var ya = function ya(a, b) {
      b.unshift(a);u.call(this, na.apply(null, b));b.shift();
    };t(ya, u);ya.prototype.name = "AssertionError";
    var za = function za(a, b, c, d) {
      var e = "Assertion failed";if (c) {
        e += ": " + c;var f = d;
      } else a && (e += ": " + a, f = b);throw new ya("" + e, f || []);
    },
        w = function w(a, b, c) {
      a || za("", null, b, Array.prototype.slice.call(arguments, 2));return a;
    },
        Aa = function Aa(a, b) {
      throw new ya("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
        Ba = function Ba(a, b, c) {
      "number" == typeof a || za("Expected number but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));return a;
    },
        Ca = function Ca(a, b, c) {
      m(a) || za("Expected string but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    },
        Da = function Da(a, b, c) {
      p(a) || za("Expected function but got %s: %s.", [ea(a), a], b, Array.prototype.slice.call(arguments, 2));
    };var Fa = function Fa() {
      this.Tc = "";this.kf = Ea;
    };Fa.prototype.qb = !0;Fa.prototype.ob = function () {
      return this.Tc;
    };Fa.prototype.toString = function () {
      return "Const{" + this.Tc + "}";
    };var Ga = function Ga(a) {
      if (a instanceof Fa && a.constructor === Fa && a.kf === Ea) return a.Tc;Aa("expected object of type Const, got '" + a + "'");return "type_error:Const";
    },
        Ea = {},
        Ha = function Ha(a) {
      var b = new Fa();b.Tc = a;return b;
    };Ha("");var Ja = function Ja() {
      this.Lc = "";this.lf = Ia;
    };Ja.prototype.qb = !0;Ja.prototype.ob = function () {
      return this.Lc;
    };Ja.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.Lc + "}";
    };
    var Ka = function Ka(a) {
      if (a instanceof Ja && a.constructor === Ja && a.lf === Ia) return a.Lc;Aa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + ea(a));return "type_error:TrustedResourceUrl";
    },
        Oa = function Oa(a, b) {
      var c = Ga(a);if (!La.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);a = c.replace(Ma, function (a, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));a = b[e];
        return a instanceof Fa ? Ga(a) : encodeURIComponent(String(a));
      });return Na(a);
    },
        Ma = /%{(\w+)}/g,
        La = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,
        Ia = {},
        Na = function Na(a) {
      var b = new Ja();b.Lc = a;return b;
    };var Pa = Array.prototype.indexOf ? function (a, b, c) {
      w(null != a.length);return Array.prototype.indexOf.call(a, b, c);
    } : function (a, b, c) {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;for (; c < a.length; c++) {
        if (c in a && a[c] === b) return c;
      }return -1;
    },
        x = Array.prototype.forEach ? function (a, b, c) {
      w(null != a.length);Array.prototype.forEach.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) {
        f in e && b.call(c, e[f], f, a);
      }
    },
        Qa = function Qa(a, b) {
      for (var c = m(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) {
        d in c && b.call(void 0, c[d], d, a);
      }
    },
        Ra = Array.prototype.map ? function (a, b, c) {
      w(null != a.length);return Array.prototype.map.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = Array(d), f = m(a) ? a.split("") : a, g = 0; g < d; g++) {
        g in f && (e[g] = b.call(c, f[g], g, a));
      }return e;
    },
        Sa = Array.prototype.some ? function (a, b, c) {
      w(null != a.length);return Array.prototype.some.call(a, b, c);
    } : function (a, b, c) {
      for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) {
        if (f in e && b.call(c, e[f], f, a)) return !0;
      }return !1;
    },
        Ua = function Ua(a) {
      a: {
        var b = Ta;for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++) {
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;break a;
          }
        }b = -1;
      }return 0 > b ? null : m(a) ? a.charAt(b) : a[b];
    },
        Va = function Va(a, b) {
      return 0 <= Pa(a, b);
    },
        Xa = function Xa(a, b) {
      b = Pa(a, b);var c;(c = 0 <= b) && Wa(a, b);return c;
    },
        Wa = function Wa(a, b) {
      w(null != a.length);return 1 == Array.prototype.splice.call(a, b, 1).length;
    },
        Ya = function Ya(a, b) {
      var c = 0;Qa(a, function (d, e) {
        b.call(void 0, d, e, a) && Wa(a, e) && c++;
      });
    },
        Za = function Za(a) {
      return Array.prototype.concat.apply([], arguments);
    },
        $a = function $a(a) {
      var b = a.length;if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) {
          c[d] = a[d];
        }return c;
      }return [];
    };var ab = function ab(a) {
      return Ra(a, function (a) {
        a = a.toString(16);return 1 < a.length ? a : "0" + a;
      }).join("");
    };var bb;a: {
      var cb = k.navigator;if (cb) {
        var db = cb.userAgent;if (db) {
          bb = db;break a;
        }
      }bb = "";
    }var y = function y(a) {
      return v(bb, a);
    };var eb = function eb(a, b) {
      for (var c in a) {
        b.call(void 0, a[c], c, a);
      }
    },
        fb = function fb(a, b) {
      for (var c in a) {
        if (b.call(void 0, a[c], c, a)) return !0;
      }return !1;
    },
        gb = function gb(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = a[d];
      }return b;
    },
        hb = function hb(a) {
      var b = [],
          c = 0,
          d;for (d in a) {
        b[c++] = d;
      }return b;
    },
        ib = function ib(a) {
      for (var b in a) {
        return !1;
      }return !0;
    },
        jb = function jb(a, b) {
      for (var c in a) {
        if (!(c in b) || a[c] !== b[c]) return !1;
      }for (c in b) {
        if (!(c in a)) return !1;
      }return !0;
    },
        kb = function kb(a) {
      var b = {},
          c;for (c in a) {
        b[c] = a[c];
      }return b;
    },
        lb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        mb = function mb(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];for (c in d) {
          a[c] = d[c];
        }for (var f = 0; f < lb.length; f++) {
          c = lb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
    };var nb = function nb(a) {
      nb[" "](a);return a;
    };nb[" "] = da;var pb = function pb(a, b) {
      var c = ob;return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
    };var qb = y("Opera"),
        z = y("Trident") || y("MSIE"),
        rb = y("Edge"),
        sb = rb || z,
        tb = y("Gecko") && !(v(bb.toLowerCase(), "webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
        ub = v(bb.toLowerCase(), "webkit") && !y("Edge"),
        vb = function vb() {
      var a = k.document;return a ? a.documentMode : void 0;
    },
        wb;
    a: {
      var xb = "",
          yb = function () {
        var a = bb;if (tb) return (/rv:([^\);]+)(\)|;)/.exec(a)
        );if (rb) return (/Edge\/([\d\.]+)/.exec(a)
        );if (z) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        );if (ub) return (/WebKit\/(\S+)/.exec(a)
        );if (qb) return (/(?:Version)[ \/]?(\S+)/.exec(a)
        );
      }();yb && (xb = yb ? yb[1] : "");if (z) {
        var Ab = vb();if (null != Ab && Ab > parseFloat(xb)) {
          wb = String(Ab);break a;
        }
      }wb = xb;
    }
    var Bb = wb,
        ob = {},
        A = function A(a) {
      return pb(a, function () {
        for (var b = 0, c = oa(String(Bb)).split("."), d = oa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || "",
              l = d[f] || "";do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];if (0 == g[0].length && 0 == l[0].length) break;b = xa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || xa(0 == g[2].length, 0 == l[2].length) || xa(g[2], l[2]);g = g[3];l = l[3];
          } while (0 == b);
        }return 0 <= b;
      });
    },
        Cb;var Db = k.document;
    Cb = Db && z ? vb() || ("CSS1Compat" == Db.compatMode ? parseInt(Bb, 10) : 5) : void 0;var Eb = null,
        Fb = null,
        Hb = function Hb(a) {
      var b = "";Gb(a, function (a) {
        b += String.fromCharCode(a);
      });return b;
    },
        Gb = function Gb(a, b) {
      function c(b) {
        for (; d < a.length;) {
          var c = a.charAt(d++),
              e = Fb[c];if (null != e) return e;if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
        }return b;
      }Ib();for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            l = c(64);if (64 === l && -1 === e) break;b(e << 2 | f >> 4);64 != g && (b(f << 4 & 240 | g >> 2), 64 != l && b(g << 6 & 192 | l));
      }
    },
        Ib = function Ib() {
      if (!Eb) {
        Eb = {};Fb = {};for (var a = 0; 65 > a; a++) {
          Eb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Fb[Eb[a]] = a, 62 <= a && (Fb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
        }
      }
    };var Jb = function Jb() {
      this.Da = -1;
    };var Mb = function Mb(a, b) {
      this.Da = -1;this.Da = 64;this.qc = k.Uint8Array ? new Uint8Array(this.Da) : Array(this.Da);this.Xc = this.rb = 0;this.l = [];this.bg = a;this.Fe = b;this.Cg = k.Int32Array ? new Int32Array(64) : Array(64);ba(Kb) || (Kb = k.Int32Array ? new Int32Array(Lb) : Lb);this.reset();
    },
        Kb;t(Mb, Jb);for (var Nb = [], Ob = 0; 63 > Ob; Ob++) {
      Nb[Ob] = 0;
    }var Pb = Za(128, Nb);Mb.prototype.reset = function () {
      this.Xc = this.rb = 0;this.l = k.Int32Array ? new Int32Array(this.Fe) : $a(this.Fe);
    };
    var Qb = function Qb(a) {
      var b = a.qc;w(b.length == a.Da);for (var c = a.Cg, d = 0, e = 0; e < b.length;) {
        c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
      }for (b = 16; 64 > b; b++) {
        e = c[b - 15] | 0;d = c[b - 2] | 0;var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
            g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;c[b] = f + g | 0;
      }d = a.l[0] | 0;e = a.l[1] | 0;var l = a.l[2] | 0,
          n = a.l[3] | 0,
          F = a.l[4] | 0,
          zb = a.l[5] | 0,
          ic = a.l[6] | 0;f = a.l[7] | 0;for (b = 0; 64 > b; b++) {
        var yi = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & l ^ e & l) | 0;g = F & zb ^ ~F & ic;f = f + ((F >>> 6 | F << 26) ^ (F >>> 11 | F << 21) ^ (F >>> 25 | F << 7)) | 0;g = g + (Kb[b] | 0) | 0;g = f + (g + (c[b] | 0) | 0) | 0;f = ic;ic = zb;zb = F;F = n + g | 0;n = l;l = e;e = d;d = g + yi | 0;
      }a.l[0] = a.l[0] + d | 0;a.l[1] = a.l[1] + e | 0;a.l[2] = a.l[2] + l | 0;a.l[3] = a.l[3] + n | 0;a.l[4] = a.l[4] + F | 0;a.l[5] = a.l[5] + zb | 0;a.l[6] = a.l[6] + ic | 0;a.l[7] = a.l[7] + f | 0;
    };
    Mb.prototype.update = function (a, b) {
      ba(b) || (b = a.length);var c = 0,
          d = this.rb;if (m(a)) for (; c < b;) {
        this.qc[d++] = a.charCodeAt(c++), d == this.Da && (Qb(this), d = 0);
      } else if (ia(a)) for (; c < b;) {
        var e = a[c++];if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");this.qc[d++] = e;d == this.Da && (Qb(this), d = 0);
      } else throw Error("message must be string or array");this.rb = d;this.Xc += b;
    };
    Mb.prototype.digest = function () {
      var a = [],
          b = 8 * this.Xc;56 > this.rb ? this.update(Pb, 56 - this.rb) : this.update(Pb, this.Da - (this.rb - 56));for (var c = 63; 56 <= c; c--) {
        this.qc[c] = b & 255, b /= 256;
      }Qb(this);for (c = b = 0; c < this.bg; c++) {
        for (var d = 24; 0 <= d; d -= 8) {
          a[b++] = this.l[c] >> d & 255;
        }
      }return a;
    };
    var Lb = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];var Sb = function Sb() {
      Mb.call(this, 8, Rb);
    };t(Sb, Mb);var Rb = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];var Tb = Object.freeze || function (a) {
      return a;
    };var Ub = function Ub() {
      this.Ma = this.Ma;this.Ic = this.Ic;
    };Ub.prototype.Ma = !1;Ub.prototype.isDisposed = function () {
      return this.Ma;
    };Ub.prototype.lb = function () {
      if (this.Ic) for (; this.Ic.length;) {
        this.Ic.shift()();
      }
    };var Vb = !z || 9 <= Number(Cb),
        Wb = z && !A("9");!ub || A("528");tb && A("1.9b") || z && A("8") || qb && A("9.5") || ub && A("528");tb && !A("8") || z && A("9");var Xb = function () {
      if (!k.addEventListener || !Object.defineProperty) return !1;var a = !1,
          b = Object.defineProperty({}, "passive", { get: function get() {
          a = !0;
        } });k.addEventListener("test", da, b);k.removeEventListener("test", da, b);return a;
    }();var B = function B(a, b) {
      this.type = a;this.currentTarget = this.target = b;this.defaultPrevented = this.Wa = !1;this.Ue = !0;
    };B.prototype.stopPropagation = function () {
      this.Wa = !0;
    };B.prototype.preventDefault = function () {
      this.defaultPrevented = !0;this.Ue = !1;
    };var Yb = function Yb(a, b) {
      B.call(this, a ? a.type : "");this.relatedTarget = this.currentTarget = this.target = null;this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;this.key = "";this.charCode = this.keyCode = 0;this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;this.state = null;this.pointerId = 0;this.pointerType = "";this.R = null;a && this.init(a, b);
    };t(Yb, B);var Zb = Tb({ 2: "touch", 3: "pen", 4: "mouse" });
    Yb.prototype.init = function (a, b) {
      var c = this.type = a.type,
          d = a.changedTouches ? a.changedTouches[0] : null;this.target = a.target || a.srcElement;this.currentTarget = b;if (b = a.relatedTarget) {
        if (tb) {
          a: {
            try {
              nb(b.nodeName);var e = !0;break a;
            } catch (f) {}e = !1;
          }e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);this.relatedTarget = b;null === d ? (this.offsetX = ub || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = ub || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);this.button = a.button;this.keyCode = a.keyCode || 0;this.key = a.key || "";this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);this.ctrlKey = a.ctrlKey;this.altKey = a.altKey;this.shiftKey = a.shiftKey;this.metaKey = a.metaKey;this.pointerId = a.pointerId || 0;this.pointerType = m(a.pointerType) ? a.pointerType : Zb[a.pointerType] || "";this.state = a.state;this.R = a;a.defaultPrevented && this.preventDefault();
    };Yb.prototype.stopPropagation = function () {
      Yb.Uc.stopPropagation.call(this);this.R.stopPropagation ? this.R.stopPropagation() : this.R.cancelBubble = !0;
    };Yb.prototype.preventDefault = function () {
      Yb.Uc.preventDefault.call(this);var a = this.R;if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Wb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
      } catch (b) {}
    };
    Yb.prototype.Hf = function () {
      return this.R;
    };var $b = "closure_listenable_" + (1E6 * Math.random() | 0),
        ac = 0;var bc = function bc(a, b, c, d, e) {
      this.listener = a;this.Mc = null;this.src = b;this.type = c;this.capture = !!d;this.vc = e;this.key = ++ac;this.Bb = this.pc = !1;
    },
        cc = function cc(a) {
      a.Bb = !0;a.listener = null;a.Mc = null;a.src = null;a.vc = null;
    };var dc = function dc(a) {
      this.src = a;this.I = {};this.jc = 0;
    };dc.prototype.add = function (a, b, c, d, e) {
      var f = a.toString();a = this.I[f];a || (a = this.I[f] = [], this.jc++);var g = ec(a, b, d, e);-1 < g ? (b = a[g], c || (b.pc = !1)) : (b = new bc(b, this.src, f, !!d, e), b.pc = c, a.push(b));return b;
    };dc.prototype.remove = function (a, b, c, d) {
      a = a.toString();if (!(a in this.I)) return !1;var e = this.I[a];b = ec(e, b, c, d);return -1 < b ? (cc(e[b]), Wa(e, b), 0 == e.length && (delete this.I[a], this.jc--), !0) : !1;
    };
    var fc = function fc(a, b) {
      var c = b.type;c in a.I && Xa(a.I[c], b) && (cc(b), 0 == a.I[c].length && (delete a.I[c], a.jc--));
    };dc.prototype.td = function (a, b, c, d) {
      a = this.I[a.toString()];var e = -1;a && (e = ec(a, b, c, d));return -1 < e ? a[e] : null;
    };dc.prototype.hasListener = function (a, b) {
      var c = ba(a),
          d = c ? a.toString() : "",
          e = ba(b);return fb(this.I, function (a) {
        for (var f = 0; f < a.length; ++f) {
          if (!(c && a[f].type != d || e && a[f].capture != b)) return !0;
        }return !1;
      });
    };
    var ec = function ec(a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];if (!f.Bb && f.listener == b && f.capture == !!c && f.vc == d) return e;
      }return -1;
    };var gc = "closure_lm_" + (1E6 * Math.random() | 0),
        hc = {},
        jc = 0,
        lc = function lc(a, b, c, d, e) {
      if (d && d.once) kc(a, b, c, d, e);else if (ha(b)) for (var f = 0; f < b.length; f++) {
        lc(a, b[f], c, d, e);
      } else c = mc(c), a && a[$b] ? a.listen(b, c, q(d) ? !!d.capture : !!d, e) : nc(a, b, c, !1, d, e);
    },
        nc = function nc(a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");var g = q(e) ? !!e.capture : !!e,
          l = oc(a);l || (a[gc] = l = new dc(a));c = l.add(b, c, d, g, f);if (!c.Mc) {
        d = pc();c.Mc = d;d.src = a;d.listener = c;if (a.addEventListener) Xb || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(qc(b.toString()), d);else throw Error("addEventListener and attachEvent are unavailable.");jc++;
      }
    },
        pc = function pc() {
      var a = rc,
          b = Vb ? function (c) {
        return a.call(b.src, b.listener, c);
      } : function (c) {
        c = a.call(b.src, b.listener, c);if (!c) return c;
      };return b;
    },
        kc = function kc(a, b, c, d, e) {
      if (ha(b)) for (var f = 0; f < b.length; f++) {
        kc(a, b[f], c, d, e);
      } else c = mc(c), a && a[$b] ? sc(a, b, c, q(d) ? !!d.capture : !!d, e) : nc(a, b, c, !0, d, e);
    },
        tc = function tc(a, b, c, d, e) {
      if (ha(b)) for (var f = 0; f < b.length; f++) {
        tc(a, b[f], c, d, e);
      } else d = q(d) ? !!d.capture : !!d, c = mc(c), a && a[$b] ? a.ga.remove(String(b), c, d, e) : a && (a = oc(a)) && (b = a.td(b, c, d, e)) && uc(b);
    },
        uc = function uc(a) {
      if ("number" != typeof a && a && !a.Bb) {
        var b = a.src;if (b && b[$b]) fc(b.ga, a);else {
          var c = a.type,
              d = a.Mc;b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(qc(c), d);jc--;(c = oc(b)) ? (fc(c, a), 0 == c.jc && (c.src = null, b[gc] = null)) : cc(a);
        }
      }
    },
        qc = function qc(a) {
      return a in hc ? hc[a] : hc[a] = "on" + a;
    },
        wc = function wc(a, b, c, d) {
      var e = !0;if (a = oc(a)) if (b = a.I[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];f && f.capture == c && !f.Bb && (f = vc(f, d), e = e && !1 !== f);
      }return e;
    },
        vc = function vc(a, b) {
      var c = a.listener,
          d = a.vc || a.src;a.pc && uc(a);return c.call(d, b);
    },
        rc = function rc(a, b) {
      if (a.Bb) return !0;if (!Vb) {
        if (!b) a: {
          b = ["window", "event"];for (var c = k, d = 0; d < b.length; d++) {
            if (c = c[b[d]], null == c) {
              b = null;break a;
            }
          }b = c;
        }d = b;b = new Yb(d, this);c = !0;if (!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;if (0 == d.keyCode) try {
              d.keyCode = -1;break a;
            } catch (g) {
              e = !0;
            }if (e || void 0 == d.returnValue) d.returnValue = !0;
          }d = [];for (e = b.currentTarget; e; e = e.parentNode) {
            d.push(e);
          }a = a.type;for (e = d.length - 1; !b.Wa && 0 <= e; e--) {
            b.currentTarget = d[e];var f = wc(d[e], a, !0, b);c = c && f;
          }for (e = 0; !b.Wa && e < d.length; e++) {
            b.currentTarget = d[e], f = wc(d[e], a, !1, b), c = c && f;
          }
        }return c;
      }return vc(a, new Yb(b, this));
    },
        oc = function oc(a) {
      a = a[gc];return a instanceof dc ? a : null;
    },
        xc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        mc = function mc(a) {
      w(a, "Listener can not be null.");if (p(a)) return a;w(a.handleEvent, "An object listener must have handleEvent method.");
      a[xc] || (a[xc] = function (b) {
        return a.handleEvent(b);
      });return a[xc];
    };var yc = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var Ac = function Ac() {
      this.xa = "";this.jf = zc;
    };Ac.prototype.qb = !0;Ac.prototype.ob = function () {
      return this.xa;
    };Ac.prototype.toString = function () {
      return "SafeUrl{" + this.xa + "}";
    };
    var Bc = function Bc(a) {
      if (a instanceof Ac && a.constructor === Ac && a.jf === zc) return a.xa;Aa("expected object of type SafeUrl, got '" + a + "' of type " + ea(a));return "type_error:SafeUrl";
    },
        Cc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Ec = function Ec(a) {
      if (a instanceof Ac) return a;a = a.qb ? a.ob() : String(a);Cc.test(a) || (a = "about:invalid#zClosurez");return Dc(a);
    },
        zc = {},
        Dc = function Dc(a) {
      var b = new Ac();b.xa = a;return b;
    };Dc("about:blank");var Hc = function Hc(a) {
      var b = [];Fc(new Gc(), a, b);return b.join("");
    },
        Gc = function Gc() {
      this.Nc = void 0;
    },
        Fc = function Fc(a, b, c) {
      if (null == b) c.push("null");else {
        if ("object" == typeof b) {
          if (ha(b)) {
            var d = b;b = d.length;c.push("[");for (var e = "", f = 0; f < b; f++) {
              c.push(e), e = d[f], Fc(a, a.Nc ? a.Nc.call(d, String(f), e) : e, c), e = ",";
            }c.push("]");return;
          }if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
            c.push("{");f = "";for (d in b) {
              Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Ic(d, c), c.push(":"), Fc(a, a.Nc ? a.Nc.call(b, d, e) : e, c), f = ","));
            }c.push("}");return;
          }
        }switch (typeof b) {case "string":
            Ic(b, c);break;case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");break;case "boolean":
            c.push(String(b));break;case "function":
            c.push("null");break;default:
            throw Error("Unknown type: " + typeof b);}
      }
    },
        Jc = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b" },
        Kc = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        Ic = function Ic(a, b) {
      b.push('"', a.replace(Kc, function (a) {
        var b = Jc[a];b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Jc[a] = b);return b;
      }), '"');
    };var Lc = function Lc() {};Lc.prototype.je = null;var Mc = function Mc(a) {
      return a.je || (a.je = a.Cd());
    };var Nc,
        Oc = function Oc() {};t(Oc, Lc);Oc.prototype.rc = function () {
      var a = Pc(this);return a ? new ActiveXObject(a) : new XMLHttpRequest();
    };Oc.prototype.Cd = function () {
      var a = {};Pc(this) && (a[0] = !0, a[1] = !0);return a;
    };
    var Pc = function Pc(a) {
      if (!a.Ee && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];try {
            return new ActiveXObject(d), a.Ee = d;
          } catch (e) {}
        }throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }return a.Ee;
    };Nc = new Oc();var Qc = function Qc() {};t(Qc, Lc);Qc.prototype.rc = function () {
      var a = new XMLHttpRequest();if ("withCredentials" in a) return a;if ("undefined" != typeof XDomainRequest) return new Rc();throw Error("Unsupported browser");
    };Qc.prototype.Cd = function () {
      return {};
    };
    var Rc = function Rc() {
      this.oa = new XDomainRequest();this.readyState = 0;this.onreadystatechange = null;this.responseText = "";this.status = -1;this.statusText = this.responseXML = null;this.oa.onload = _r(this.Lf, this);this.oa.onerror = _r(this.ze, this);this.oa.onprogress = _r(this.Mf, this);this.oa.ontimeout = _r(this.Nf, this);
    };h = Rc.prototype;h.open = function (a, b, c) {
      if (null != c && !c) throw Error("Only async requests are supported.");this.oa.open(a, b);
    };
    h.send = function (a) {
      if (a) {
        if ("string" == typeof a) this.oa.send(a);else throw Error("Only string data is supported");
      } else this.oa.send();
    };h.abort = function () {
      this.oa.abort();
    };h.setRequestHeader = function () {};h.getResponseHeader = function (a) {
      return "content-type" == a.toLowerCase() ? this.oa.contentType : "";
    };h.Lf = function () {
      this.status = 200;this.responseText = this.oa.responseText;Sc(this, 4);
    };h.ze = function () {
      this.status = 500;this.responseText = "";Sc(this, 4);
    };h.Nf = function () {
      this.ze();
    };
    h.Mf = function () {
      this.status = 200;Sc(this, 1);
    };var Sc = function Sc(a, b) {
      a.readyState = b;if (a.onreadystatechange) a.onreadystatechange();
    };Rc.prototype.getAllResponseHeaders = function () {
      return "content-type: " + this.oa.contentType;
    };var Tc = function Tc(a, b, c) {
      this.Yf = c;this.wf = a;this.lg = b;this.Hc = 0;this.wc = null;
    };Tc.prototype.get = function () {
      if (0 < this.Hc) {
        this.Hc--;var a = this.wc;this.wc = a.next;a.next = null;
      } else a = this.wf();return a;
    };Tc.prototype.put = function (a) {
      this.lg(a);this.Hc < this.Yf && (this.Hc++, a.next = this.wc, this.wc = a);
    };var Uc = function Uc(a) {
      k.setTimeout(function () {
        throw a;
      }, 0);
    },
        Vc,
        Wc = function Wc() {
      var a = k.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !y("Presto") && (a = function a() {
        var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var b = a.contentWindow;a = b.document;a.open();a.write("");a.close();var c = "callImmediate" + Math.random(),
            d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
        a = _r(function (a) {
          if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage();
        }, this);b.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage: function postMessage() {
            b.postMessage(c, d);
          } };
      });if ("undefined" !== typeof a && !y("Trident") && !y("MSIE")) {
        var b = new a(),
            c = {},
            d = c;b.port1.onmessage = function () {
          if (ba(c.next)) {
            c = c.next;var a = c.me;c.me = null;a();
          }
        };return function (a) {
          d.next = { me: a };d = d.next;b.port2.postMessage(0);
        };
      }return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
        var b = document.createElement("SCRIPT");b.onreadystatechange = function () {
          b.onreadystatechange = null;b.parentNode.removeChild(b);b = null;a();a = null;
        };document.documentElement.appendChild(b);
      } : function (a) {
        k.setTimeout(a, 0);
      };
    };var Xc = function Xc() {
      this.bd = this.hb = null;
    },
        Zc = new Tc(function () {
      return new Yc();
    }, function (a) {
      a.reset();
    }, 100);Xc.prototype.add = function (a, b) {
      var c = Zc.get();c.set(a, b);this.bd ? this.bd.next = c : (w(!this.hb), this.hb = c);this.bd = c;
    };Xc.prototype.remove = function () {
      var a = null;this.hb && (a = this.hb, this.hb = this.hb.next, this.hb || (this.bd = null), a.next = null);return a;
    };var Yc = function Yc() {
      this.next = this.scope = this.rd = null;
    };Yc.prototype.set = function (a, b) {
      this.rd = a;this.scope = b;this.next = null;
    };
    Yc.prototype.reset = function () {
      this.next = this.scope = this.rd = null;
    };var dd = function dd(a, b) {
      $c || ad();bd || ($c(), bd = !0);cd.add(a, b);
    },
        $c,
        ad = function ad() {
      if (-1 != String(k.Promise).indexOf("[native code]")) {
        var a = k.Promise.resolve(void 0);$c = function $c() {
          a.then(ed);
        };
      } else $c = function $c() {
        var a = ed;!p(k.setImmediate) || k.Window && k.Window.prototype && !y("Edge") && k.Window.prototype.setImmediate == k.setImmediate ? (Vc || (Vc = Wc()), Vc(a)) : k.setImmediate(a);
      };
    },
        bd = !1,
        cd = new Xc(),
        ed = function ed() {
      for (var a; a = cd.remove();) {
        try {
          a.rd.call(a.scope);
        } catch (b) {
          Uc(b);
        }Zc.put(a);
      }bd = !1;
    };var fd = function fd(a, b) {
      var c = (c = a && a.ownerDocument) && (c.defaultView || c.parentWindow) || k;"undefined" != typeof c[b] && "undefined" != typeof c.Location && "undefined" != typeof c.Element && (c = a && (a instanceof c[b] || !(a instanceof c.Location || a instanceof c.Element)), a = q(a) ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : void 0 === a ? "undefined" : null === a ? "null" : typeof a, w(c, "Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, a));
    };var gd = !z || 9 <= Number(Cb);!tb && !z || z && 9 <= Number(Cb) || tb && A("1.9.1");z && A("9");var id = function id() {
      this.xa = "";this.hf = hd;
    };id.prototype.qb = !0;id.prototype.ob = function () {
      return this.xa;
    };id.prototype.toString = function () {
      return "SafeHtml{" + this.xa + "}";
    };var jd = function jd(a) {
      if (a instanceof id && a.constructor === id && a.hf === hd) return a.xa;Aa("expected object of type SafeHtml, got '" + a + "' of type " + ea(a));return "type_error:SafeHtml";
    },
        hd = {};id.prototype.Tf = function (a) {
      this.xa = a;return this;
    };var kd = function kd(a, b) {
      fd(a, "HTMLScriptElement");a.src = Ka(b);
    };var ld = function ld(a) {
      var b = document;return m(a) ? b.getElementById(a) : a;
    },
        nd = function nd(a, b) {
      eb(b, function (b, d) {
        b && b.qb && (b = b.ob());"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : md.hasOwnProperty(d) ? a.setAttribute(md[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
      });
    },
        md = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan",
      type: "type", usemap: "useMap", valign: "vAlign", width: "width" },
        pd = function pd(a, b, c) {
      var d = arguments,
          e = document,
          f = String(d[0]),
          g = d[1];if (!gd && g && (g.name || g.type)) {
        f = ["<", f];g.name && f.push(' name="', wa(g.name), '"');if (g.type) {
          f.push(' type="', wa(g.type), '"');var l = {};mb(l, g);delete l.type;g = l;
        }f.push(">");f = f.join("");
      }f = e.createElement(f);g && (m(g) ? f.className = g : ha(g) ? f.className = g.join(" ") : nd(f, g));2 < d.length && od(e, f, d);return f;
    },
        od = function od(a, b, c) {
      function d(c) {
        c && b.appendChild(m(c) ? a.createTextNode(c) : c);
      }for (var e = 2; e < c.length; e++) {
        var f = c[e];!ia(f) || q(f) && 0 < f.nodeType ? d(f) : x(qd(f) ? $a(f) : f, d);
      }
    },
        qd = function qd(a) {
      if (a && "number" == typeof a.length) {
        if (q(a)) return "function" == typeof a.item || "string" == typeof a.item;if (p(a)) return "function" == typeof a.item;
      }return !1;
    };var rd = function rd(a) {
      a.prototype.then = a.prototype.then;a.prototype.$goog_Thenable = !0;
    },
        sd = function sd(a) {
      if (!a) return !1;try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };var C = function C(a, b) {
      this.aa = 0;this.za = void 0;this.kb = this.ua = this.w = null;this.uc = this.pd = !1;if (a != da) try {
        var c = this;a.call(b, function (a) {
          td(c, 2, a);
        }, function (a) {
          if (!(a instanceof ud)) try {
            if (a instanceof Error) throw a;throw Error("Promise rejected.");
          } catch (e) {}td(c, 3, a);
        });
      } catch (d) {
        td(this, 3, d);
      }
    },
        vd = function vd() {
      this.next = this.context = this.tb = this.Ua = this.child = null;this.Hb = !1;
    };vd.prototype.reset = function () {
      this.context = this.tb = this.Ua = this.child = null;this.Hb = !1;
    };
    var wd = new Tc(function () {
      return new vd();
    }, function (a) {
      a.reset();
    }, 100),
        xd = function xd(a, b, c) {
      var d = wd.get();d.Ua = a;d.tb = b;d.context = c;return d;
    },
        D = function D(a) {
      if (a instanceof C) return a;var b = new C(da);td(b, 2, a);return b;
    },
        E = function E(a) {
      return new C(function (b, c) {
        c(a);
      });
    },
        zd = function zd(a, b, c) {
      yd(a, b, c, null) || dd(la(b, a));
    },
        Ad = function Ad(a) {
      return new C(function (b, c) {
        var d = a.length,
            e = [];if (d) for (var f = function f(a, c) {
          d--;e[a] = c;0 == d && b(e);
        }, g = function g(a) {
          c(a);
        }, l = 0, n; l < a.length; l++) {
          n = a[l], zd(n, la(f, l), g);
        } else b(e);
      });
    },
        Bd = function Bd(a) {
      return new C(function (b) {
        var c = a.length,
            d = [];if (c) for (var e = function e(a, _e, f) {
          c--;d[a] = _e ? { Gf: !0, value: f } : { Gf: !1, reason: f };0 == c && b(d);
        }, f = 0, g; f < a.length; f++) {
          g = a[f], zd(g, la(e, f, !0), la(e, f, !1));
        } else b(d);
      });
    };C.prototype.then = function (a, b, c) {
      null != a && Da(a, "opt_onFulfilled should be a function.");null != b && Da(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Cd(this, p(a) ? a : null, p(b) ? b : null, c);
    };rd(C);
    var Ed = function Ed(a, b) {
      b = xd(b, b, void 0);b.Hb = !0;Dd(a, b);return a;
    };C.prototype.g = function (a, b) {
      return Cd(this, null, a, b);
    };C.prototype.cancel = function (a) {
      0 == this.aa && dd(function () {
        var b = new ud(a);Fd(this, b);
      }, this);
    };
    var Fd = function Fd(a, b) {
      if (0 == a.aa) if (a.w) {
        var c = a.w;if (c.ua) {
          for (var d = 0, e = null, f = null, g = c.ua; g && (g.Hb || (d++, g.child == a && (e = g), !(e && 1 < d))); g = g.next) {
            e || (f = g);
          }e && (0 == c.aa && 1 == d ? Fd(c, b) : (f ? (d = f, w(c.ua), w(null != d), d.next == c.kb && (c.kb = d), d.next = d.next.next) : Gd(c), Hd(c, e, 3, b)));
        }a.w = null;
      } else td(a, 3, b);
    },
        Dd = function Dd(a, b) {
      a.ua || 2 != a.aa && 3 != a.aa || Id(a);w(null != b.Ua);a.kb ? a.kb.next = b : a.ua = b;a.kb = b;
    },
        Cd = function Cd(a, b, c, d) {
      var e = xd(null, null, null);e.child = new C(function (a, g) {
        e.Ua = b ? function (c) {
          try {
            var e = b.call(d, c);a(e);
          } catch (F) {
            g(F);
          }
        } : a;e.tb = c ? function (b) {
          try {
            var e = c.call(d, b);!ba(e) && b instanceof ud ? g(b) : a(e);
          } catch (F) {
            g(F);
          }
        } : g;
      });e.child.w = a;Dd(a, e);return e.child;
    };C.prototype.zg = function (a) {
      w(1 == this.aa);this.aa = 0;td(this, 2, a);
    };C.prototype.Ag = function (a) {
      w(1 == this.aa);this.aa = 0;td(this, 3, a);
    };
    var td = function td(a, b, c) {
      0 == a.aa && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.aa = 1, yd(c, a.zg, a.Ag, a) || (a.za = c, a.aa = b, a.w = null, Id(a), 3 != b || c instanceof ud || Jd(a, c)));
    },
        yd = function yd(a, b, c, d) {
      if (a instanceof C) return null != b && Da(b, "opt_onFulfilled should be a function."), null != c && Da(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), Dd(a, xd(b || da, c || null, d)), !0;if (sd(a)) return a.then(b, c, d), !0;if (q(a)) try {
        var e = a.then;if (p(e)) return Kd(a, e, b, c, d), !0;
      } catch (f) {
        return c.call(d, f), !0;
      }return !1;
    },
        Kd = function Kd(a, b, c, d, e) {
      var f = !1,
          g = function g(a) {
        f || (f = !0, c.call(e, a));
      },
          l = function l(a) {
        f || (f = !0, d.call(e, a));
      };try {
        b.call(a, g, l);
      } catch (n) {
        l(n);
      }
    },
        Id = function Id(a) {
      a.pd || (a.pd = !0, dd(a.Bf, a));
    },
        Gd = function Gd(a) {
      var b = null;a.ua && (b = a.ua, a.ua = b.next, b.next = null);a.ua || (a.kb = null);null != b && w(null != b.Ua);return b;
    };C.prototype.Bf = function () {
      for (var a; a = Gd(this);) {
        Hd(this, a, this.aa, this.za);
      }this.pd = !1;
    };
    var Hd = function Hd(a, b, c, d) {
      if (3 == c && b.tb && !b.Hb) for (; a && a.uc; a = a.w) {
        a.uc = !1;
      }if (b.child) b.child.w = null, Ld(b, c, d);else try {
        b.Hb ? b.Ua.call(b.context) : Ld(b, c, d);
      } catch (e) {
        Md.call(null, e);
      }wd.put(b);
    },
        Ld = function Ld(a, b, c) {
      2 == b ? a.Ua.call(a.context, c) : a.tb && a.tb.call(a.context, c);
    },
        Jd = function Jd(a, b) {
      a.uc = !0;dd(function () {
        a.uc && Md.call(null, b);
      });
    },
        Md = Uc,
        ud = function ud(a) {
      u.call(this, a);
    };t(ud, u);ud.prototype.name = "cancel";
    var Nd = function Nd(a, b) {
      this.Qc = [];this.Ne = a;this.re = b || null;this.Pb = this.nb = !1;this.za = void 0;this.be = this.he = this.fd = !1;this.Yc = 0;this.w = null;this.gd = 0;
    };Nd.prototype.cancel = function (a) {
      if (this.nb) this.za instanceof Nd && this.za.cancel();else {
        if (this.w) {
          var b = this.w;delete this.w;a ? b.cancel(a) : (b.gd--, 0 >= b.gd && b.cancel());
        }this.Ne ? this.Ne.call(this.re, this) : this.be = !0;this.nb || Od(this, new Pd());
      }
    };Nd.prototype.oe = function (a, b) {
      this.fd = !1;Qd(this, a, b);
    };
    var Qd = function Qd(a, b, c) {
      a.nb = !0;a.za = c;a.Pb = !b;Rd(a);
    },
        Td = function Td(a) {
      if (a.nb) {
        if (!a.be) throw new Sd();a.be = !1;
      }
    };Nd.prototype.callback = function (a) {
      Td(this);Ud(a);Qd(this, !0, a);
    };var Od = function Od(a, b) {
      Td(a);Ud(b);Qd(a, !1, b);
    },
        Ud = function Ud(a) {
      w(!(a instanceof Nd), "An execution sequence may not be initiated with a blocking Deferred.");
    },
        Wd = function Wd(a, b) {
      Vd(a, null, b, void 0);
    },
        Vd = function Vd(a, b, c, d) {
      w(!a.he, "Blocking Deferreds can not be re-used");a.Qc.push([b, c, d]);a.nb && Rd(a);
    };
    Nd.prototype.then = function (a, b, c) {
      var d,
          e,
          f = new C(function (a, b) {
        d = a;e = b;
      });Vd(this, d, function (a) {
        a instanceof Pd ? f.cancel() : e(a);
      });return f.then(a, b, c);
    };rd(Nd);
    var Xd = function Xd(a) {
      return Sa(a.Qc, function (a) {
        return p(a[1]);
      });
    },
        Rd = function Rd(a) {
      if (a.Yc && a.nb && Xd(a)) {
        var b = a.Yc,
            c = Yd[b];c && (k.clearTimeout(c.Qb), delete Yd[b]);a.Yc = 0;
      }a.w && (a.w.gd--, delete a.w);b = a.za;for (var d = c = !1; a.Qc.length && !a.fd;) {
        var e = a.Qc.shift(),
            f = e[0],
            g = e[1];e = e[2];if (f = a.Pb ? g : f) try {
          var l = f.call(e || a.re, b);ba(l) && (a.Pb = a.Pb && (l == b || l instanceof Error), a.za = b = l);if (sd(b) || "function" === typeof k.Promise && b instanceof k.Promise) d = !0, a.fd = !0;
        } catch (n) {
          b = n, a.Pb = !0, Xd(a) || (c = !0);
        }
      }a.za = b;d && (l = _r(a.oe, a, !0), d = _r(a.oe, a, !1), b instanceof Nd ? (Vd(b, l, d), b.he = !0) : b.then(l, d));c && (b = new Zd(b), Yd[b.Qb] = b, a.Yc = b.Qb);
    },
        Sd = function Sd() {
      u.call(this);
    };t(Sd, u);Sd.prototype.message = "Deferred has already fired";Sd.prototype.name = "AlreadyCalledError";var Pd = function Pd() {
      u.call(this);
    };t(Pd, u);Pd.prototype.message = "Deferred was canceled";Pd.prototype.name = "CanceledError";var Zd = function Zd(a) {
      this.Qb = k.setTimeout(_r(this.yg, this), 0);this.ba = a;
    };
    Zd.prototype.yg = function () {
      w(Yd[this.Qb], "Cannot throw an error that is not scheduled.");delete Yd[this.Qb];throw this.ba;
    };var Yd = {};var de = function de(a) {
      var b = {},
          c = b.document || document,
          d = Ka(a),
          e = document.createElement("SCRIPT"),
          f = { We: e, ic: void 0 },
          g = new Nd($d, f),
          l = null,
          n = null != b.timeout ? b.timeout : 5E3;0 < n && (l = window.setTimeout(function () {
        ae(e, !0);Od(g, new be(1, "Timeout reached for loading script " + d));
      }, n), f.ic = l);e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (ae(e, b.Pg || !1, l), g.callback(null));
      };e.onerror = function () {
        ae(e, !0, l);Od(g, new be(0, "Error while loading script " + d));
      };
      f = b.attributes || {};mb(f, { type: "text/javascript", charset: "UTF-8" });nd(e, f);kd(e, a);ce(c).appendChild(e);return g;
    },
        ce = function ce(a) {
      var b;return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
    },
        $d = function $d() {
      if (this && this.We) {
        var a = this.We;a && "SCRIPT" == a.tagName && ae(a, !0, this.ic);
      }
    },
        ae = function ae(a, b, c) {
      null != c && k.clearTimeout(c);a.onload = da;a.onerror = da;a.onreadystatechange = da;b && window.setTimeout(function () {
        a && a.parentNode && a.parentNode.removeChild(a);
      }, 0);
    },
        be = function be(a, b) {
      var c = "Jsloader error (code #" + a + ")";b && (c += ": " + b);u.call(this, c);this.code = a;
    };t(be, u);var ee = function ee(a, b, c, d, e) {
      this.reset(a, b, c, d, e);
    };ee.prototype.te = null;var fe = 0;ee.prototype.reset = function (a, b, c, d, e) {
      "number" == typeof e || fe++;d || ma();this.Vb = a;delete this.te;
    };ee.prototype.Xe = function (a) {
      this.Vb = a;
    };var ge = function ge(a) {
      this.Le = a;this.Ae = this.kd = this.Vb = this.w = null;
    },
        he = function he(a, b) {
      this.name = a;this.value = b;
    };he.prototype.toString = function () {
      return this.name;
    };var ie = new he("SEVERE", 1E3),
        je = new he("INFO", 800),
        ke = new he("CONFIG", 700),
        le = new he("FINE", 500);ge.prototype.getName = function () {
      return this.Le;
    };ge.prototype.getParent = function () {
      return this.w;
    };ge.prototype.Xe = function (a) {
      this.Vb = a;
    };var me = function me(a) {
      if (a.Vb) return a.Vb;if (a.w) return me(a.w);Aa("Root logger has no level set.");return null;
    };
    ge.prototype.log = function (a, b, c) {
      if (a.value >= me(this).value) for (p(b) && (b = b()), a = new ee(a, String(b), this.Le), c && (a.te = c), c = this; c;) {
        var d = c,
            e = a;if (d.Ae) for (var f = 0; b = d.Ae[f]; f++) {
          b(e);
        }c = c.getParent();
      }
    };ge.prototype.info = function (a, b) {
      this.log(je, a, b);
    };ge.prototype.config = function (a, b) {
      this.log(ke, a, b);
    };
    var ne = {},
        oe = null,
        pe = function pe(a) {
      oe || (oe = new ge(""), ne[""] = oe, oe.Xe(ke));var b;if (!(b = ne[a])) {
        b = new ge(a);var c = a.lastIndexOf("."),
            d = a.substr(c + 1);c = pe(a.substr(0, c));c.kd || (c.kd = {});c.kd[d] = b;b.w = c;ne[a] = b;
      }return b;
    };var G = function G() {
      Ub.call(this);this.ga = new dc(this);this.nf = this;this.Kd = null;
    };t(G, Ub);G.prototype[$b] = !0;h = G.prototype;h.addEventListener = function (a, b, c, d) {
      lc(this, a, b, c, d);
    };h.removeEventListener = function (a, b, c, d) {
      tc(this, a, b, c, d);
    };
    h.dispatchEvent = function (a) {
      qe(this);var b = this.Kd;if (b) {
        var c = [];for (var d = 1; b; b = b.Kd) {
          c.push(b), w(1E3 > ++d, "infinite loop");
        }
      }b = this.nf;d = a.type || a;if (m(a)) a = new B(a, b);else if (a instanceof B) a.target = a.target || b;else {
        var e = a;a = new B(d, b);mb(a, e);
      }e = !0;if (c) for (var f = c.length - 1; !a.Wa && 0 <= f; f--) {
        var g = a.currentTarget = c[f];e = re(g, d, !0, a) && e;
      }a.Wa || (g = a.currentTarget = b, e = re(g, d, !0, a) && e, a.Wa || (e = re(g, d, !1, a) && e));if (c) for (f = 0; !a.Wa && f < c.length; f++) {
        g = a.currentTarget = c[f], e = re(g, d, !1, a) && e;
      }return e;
    };
    h.lb = function () {
      G.Uc.lb.call(this);if (this.ga) {
        var a = this.ga,
            b = 0,
            c;for (c in a.I) {
          for (var d = a.I[c], e = 0; e < d.length; e++) {
            ++b, cc(d[e]);
          }delete a.I[c];a.jc--;
        }
      }this.Kd = null;
    };h.listen = function (a, b, c, d) {
      qe(this);return this.ga.add(String(a), b, !1, c, d);
    };
    var sc = function sc(a, b, c, d, e) {
      a.ga.add(String(b), c, !0, d, e);
    },
        re = function re(a, b, c, d) {
      b = a.ga.I[String(b)];if (!b) return !0;b = b.concat();for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];if (g && !g.Bb && g.capture == c) {
          var l = g.listener,
              n = g.vc || g.src;g.pc && fc(a.ga, g);e = !1 !== l.call(n, d) && e;
        }
      }return e && 0 != d.Ue;
    };G.prototype.td = function (a, b, c, d) {
      return this.ga.td(String(a), b, c, d);
    };G.prototype.hasListener = function (a, b) {
      return this.ga.hasListener(ba(a) ? String(a) : void 0, b);
    };var qe = function qe(a) {
      w(a.ga, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
    };var se = "StopIteration" in k ? k.StopIteration : { message: "StopIteration", stack: "" },
        te = function te() {};te.prototype.next = function () {
      throw se;
    };te.prototype.mf = function () {
      return this;
    };var H = function H(a, b) {
      a && a.log(le, b, void 0);
    };var ue = function ue(a, b) {
      this.ja = {};this.C = [];this.gb = this.u = 0;var c = arguments.length;if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");for (var d = 0; d < c; d += 2) {
          this.set(arguments[d], arguments[d + 1]);
        }
      } else a && this.addAll(a);
    };h = ue.prototype;h.ha = function () {
      ve(this);for (var a = [], b = 0; b < this.C.length; b++) {
        a.push(this.ja[this.C[b]]);
      }return a;
    };h.va = function () {
      ve(this);return this.C.concat();
    };h.Jb = function (a) {
      return we(this.ja, a);
    };h.clear = function () {
      this.ja = {};this.gb = this.u = this.C.length = 0;
    };
    h.remove = function (a) {
      return we(this.ja, a) ? (delete this.ja[a], this.u--, this.gb++, this.C.length > 2 * this.u && ve(this), !0) : !1;
    };var ve = function ve(a) {
      if (a.u != a.C.length) {
        for (var b = 0, c = 0; b < a.C.length;) {
          var d = a.C[b];we(a.ja, d) && (a.C[c++] = d);b++;
        }a.C.length = c;
      }if (a.u != a.C.length) {
        var e = {};for (c = b = 0; b < a.C.length;) {
          d = a.C[b], we(e, d) || (a.C[c++] = d, e[d] = 1), b++;
        }a.C.length = c;
      }
    };h = ue.prototype;h.get = function (a, b) {
      return we(this.ja, a) ? this.ja[a] : b;
    };
    h.set = function (a, b) {
      we(this.ja, a) || (this.u++, this.C.push(a), this.gb++);this.ja[a] = b;
    };h.addAll = function (a) {
      if (a instanceof ue) {
        var b = a.va();a = a.ha();
      } else b = hb(a), a = gb(a);for (var c = 0; c < b.length; c++) {
        this.set(b[c], a[c]);
      }
    };h.forEach = function (a, b) {
      for (var c = this.va(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);a.call(b, f, e, this);
      }
    };h.clone = function () {
      return new ue(this);
    };
    h.mf = function (a) {
      ve(this);var b = 0,
          c = this.gb,
          d = this,
          e = new te();e.next = function () {
        if (c != d.gb) throw Error("The map has changed since the iterator was created");if (b >= d.C.length) throw se;var e = d.C[b++];return a ? e : d.ja[e];
      };return e;
    };var we = function we(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    };var xe = function xe(a) {
      if (a.ha && "function" == typeof a.ha) return a.ha();if (m(a)) return a.split("");if (ia(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) {
          b.push(a[d]);
        }return b;
      }return gb(a);
    },
        ye = function ye(a) {
      if (a.va && "function" == typeof a.va) return a.va();if (!a.ha || "function" != typeof a.ha) {
        if (ia(a) || m(a)) {
          var b = [];a = a.length;for (var c = 0; c < a; c++) {
            b.push(c);
          }return b;
        }return hb(a);
      }
    },
        ze = function ze(a, b, c) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);else if (ia(a) || m(a)) x(a, b, c);else for (var d = ye(a), e = xe(a), f = e.length, g = 0; g < f; g++) {
        b.call(c, e[g], d && d[g], a);
      }
    };var Ae = function Ae(a, b, c) {
      if (p(a)) c && (a = _r(a, c));else if (a && "function" == typeof a.handleEvent) a = _r(a.handleEvent, a);else throw Error("Invalid listener argument");return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
    },
        Be = function Be(a) {
      var b = null;return new C(function (c, d) {
        b = Ae(function () {
          c(void 0);
        }, a);-1 == b && d(Error("Failed to schedule timer."));
      }).g(function (a) {
        k.clearTimeout(b);throw a;
      });
    };var Ce = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        De = function De(a, b) {
      if (a) {
        a = a.split("&");for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
              e = null;if (0 <= d) {
            var f = a[c].substring(0, d);e = a[c].substring(d + 1);
          } else f = a[c];b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    };var I = function I(a) {
      G.call(this);this.headers = new ue();this.dd = a || null;this.Ca = !1;this.cd = this.b = null;this.Ub = this.Ke = this.Ec = "";this.Qa = this.zd = this.zc = this.od = !1;this.Db = 0;this.Vc = null;this.Oc = "";this.Zc = this.hg = this.gf = !1;
    };t(I, G);var Ee = I.prototype,
        Fe = pe("goog.net.XhrIo");Ee.T = Fe;var Ge = /^https?$/i,
        He = ["POST", "PUT"];
    I.prototype.send = function (a, b, c, d) {
      if (this.b) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Ec + "; newUri=" + a);b = b ? b.toUpperCase() : "GET";this.Ec = a;this.Ub = "";this.Ke = b;this.od = !1;this.Ca = !0;this.b = this.dd ? this.dd.rc() : Nc.rc();this.cd = this.dd ? Mc(this.dd) : Mc(Nc);this.b.onreadystatechange = _r(this.Re, this);this.hg && "onprogress" in this.b && (this.b.onprogress = _r(function (a) {
        this.Qe(a, !0);
      }, this), this.b.upload && (this.b.upload.onprogress = _r(this.Qe, this)));try {
        H(this.T, Ie(this, "Opening Xhr")), this.zd = !0, this.b.open(b, String(a), !0), this.zd = !1;
      } catch (f) {
        H(this.T, Ie(this, "Error opening Xhr: " + f.message));this.ba(5, f);return;
      }a = c || "";var e = this.headers.clone();d && ze(d, function (a, b) {
        e.set(b, a);
      });d = Ua(e.va());c = k.FormData && a instanceof k.FormData;!Va(He, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");e.forEach(function (a, b) {
        this.b.setRequestHeader(b, a);
      }, this);this.Oc && (this.b.responseType = this.Oc);"withCredentials" in this.b && this.b.withCredentials !== this.gf && (this.b.withCredentials = this.gf);try {
        Je(this), 0 < this.Db && (this.Zc = Ke(this.b), H(this.T, Ie(this, "Will abort after " + this.Db + "ms if incomplete, xhr2 " + this.Zc)), this.Zc ? (this.b.timeout = this.Db, this.b.ontimeout = _r(this.ic, this)) : this.Vc = Ae(this.ic, this.Db, this)), H(this.T, Ie(this, "Sending request")), this.zc = !0, this.b.send(a), this.zc = !1;
      } catch (f) {
        H(this.T, Ie(this, "Send error: " + f.message)), this.ba(5, f);
      }
    };
    var Ke = function Ke(a) {
      return z && A(9) && "number" == typeof a.timeout && ba(a.ontimeout);
    },
        Ta = function Ta(a) {
      return "content-type" == a.toLowerCase();
    };I.prototype.ic = function () {
      "undefined" != typeof aa && this.b && (this.Ub = "Timed out after " + this.Db + "ms, aborting", H(this.T, Ie(this, this.Ub)), this.dispatchEvent("timeout"), this.abort(8));
    };I.prototype.ba = function (a, b) {
      this.Ca = !1;this.b && (this.Qa = !0, this.b.abort(), this.Qa = !1);this.Ub = b;Le(this);Me(this);
    };var Le = function Le(a) {
      a.od || (a.od = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
    I.prototype.abort = function () {
      this.b && this.Ca && (H(this.T, Ie(this, "Aborting")), this.Ca = !1, this.Qa = !0, this.b.abort(), this.Qa = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Me(this));
    };I.prototype.lb = function () {
      this.b && (this.Ca && (this.Ca = !1, this.Qa = !0, this.b.abort(), this.Qa = !1), Me(this, !0));I.Uc.lb.call(this);
    };I.prototype.Re = function () {
      this.isDisposed() || (this.zd || this.zc || this.Qa ? Ne(this) : this.dg());
    };I.prototype.dg = function () {
      Ne(this);
    };
    var Ne = function Ne(a) {
      if (a.Ca && "undefined" != typeof aa) if (a.cd[1] && 4 == Oe(a) && 2 == Pe(a)) H(a.T, Ie(a, "Local request error detected and ignored"));else if (a.zc && 4 == Oe(a)) Ae(a.Re, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == Oe(a)) {
        H(a.T, Ie(a, "Request complete"));a.Ca = !1;try {
          var b = Pe(a);a: switch (b) {case 200:case 201:case 202:case 204:case 206:case 304:case 1223:
              var c = !0;break a;default:
              c = !1;}var d;if (!(d = c)) {
            var e;if (e = 0 === b) {
              var f = String(a.Ec).match(Ce)[1] || null;if (!f && k.self && k.self.location) {
                var g = k.self.location.protocol;f = g.substr(0, g.length - 1);
              }e = !Ge.test(f ? f.toLowerCase() : "");
            }d = e;
          }if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
            try {
              var l = 2 < Oe(a) ? a.b.statusText : "";
            } catch (n) {
              H(a.T, "Can not get status: " + n.message), l = "";
            }a.Ub = l + " [" + Pe(a) + "]";Le(a);
          }
        } finally {
          Me(a);
        }
      }
    };I.prototype.Qe = function (a, b) {
      w("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Qe(a, "progress"));this.dispatchEvent(Qe(a, b ? "downloadprogress" : "uploadprogress"));
    };
    var Qe = function Qe(a, b) {
      return { type: b, lengthComputable: a.lengthComputable, loaded: a.loaded, total: a.total };
    },
        Me = function Me(a, b) {
      if (a.b) {
        Je(a);var c = a.b,
            d = a.cd[0] ? da : null;a.b = null;a.cd = null;b || a.dispatchEvent("ready");try {
          c.onreadystatechange = d;
        } catch (e) {
          (a = a.T) && a.log(ie, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
        }
      }
    },
        Je = function Je(a) {
      a.b && a.Zc && (a.b.ontimeout = null);a.Vc && (k.clearTimeout(a.Vc), a.Vc = null);
    },
        Oe = function Oe(a) {
      return a.b ? a.b.readyState : 0;
    },
        Pe = function Pe(a) {
      try {
        return 2 < Oe(a) ? a.b.status : -1;
      } catch (b) {
        return -1;
      }
    },
        Re = function Re(a) {
      try {
        return a.b ? a.b.responseText : "";
      } catch (b) {
        return H(a.T, "Can not get responseText: " + b.message), "";
      }
    };
    I.prototype.getResponse = function () {
      try {
        if (!this.b) return null;if ("response" in this.b) return this.b.response;switch (this.Oc) {case "":case "text":
            return this.b.responseText;case "arraybuffer":
            if ("mozResponseArrayBuffer" in this.b) return this.b.mozResponseArrayBuffer;}var a = this.T;a && a.log(ie, "Response type " + this.Oc + " is not supported on this browser", void 0);return null;
      } catch (b) {
        return H(this.T, "Can not get response: " + b.message), null;
      }
    };
    I.prototype.getResponseHeader = function (a) {
      if (this.b && 4 == Oe(this)) return a = this.b.getResponseHeader(a), null === a ? void 0 : a;
    };I.prototype.getAllResponseHeaders = function () {
      return this.b && 4 == Oe(this) ? this.b.getAllResponseHeaders() : "";
    };var Ie = function Ie(a, b) {
      return b + " [" + a.Ke + " " + a.Ec + " " + Pe(a) + "]";
    };var Se = function Se(a, b) {
      this.pa = this.eb = this.qa = "";this.vb = null;this.Pa = this.Ga = "";this.da = this.Xf = !1;if (a instanceof Se) {
        this.da = ba(b) ? b : a.da;Te(this, a.qa);var c = a.eb;J(this);this.eb = c;Ue(this, a.pa);Ve(this, a.vb);We(this, a.Ga);Xe(this, a.ea.clone());a = a.Pa;J(this);this.Pa = a;
      } else a && (c = String(a).match(Ce)) ? (this.da = !!b, Te(this, c[1] || "", !0), a = c[2] || "", J(this), this.eb = Ye(a), Ue(this, c[3] || "", !0), Ve(this, c[4]), We(this, c[5] || "", !0), Xe(this, c[6] || "", !0), a = c[7] || "", J(this), this.Pa = Ye(a)) : (this.da = !!b, this.ea = new Ze(null, 0, this.da));
    };Se.prototype.toString = function () {
      var a = [],
          b = this.qa;b && a.push($e(b, af, !0), ":");var c = this.pa;if (c || "file" == b) a.push("//"), (b = this.eb) && a.push($e(b, af, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.vb, null != c && a.push(":", String(c));if (c = this.Ga) this.pa && "/" != c.charAt(0) && a.push("/"), a.push($e(c, "/" == c.charAt(0) ? bf : cf, !0));(c = this.ea.toString()) && a.push("?", c);(c = this.Pa) && a.push("#", $e(c, df));return a.join("");
    };
    Se.prototype.resolve = function (a) {
      var b = this.clone(),
          c = !!a.qa;c ? Te(b, a.qa) : c = !!a.eb;if (c) {
        var d = a.eb;J(b);b.eb = d;
      } else c = !!a.pa;c ? Ue(b, a.pa) : c = null != a.vb;d = a.Ga;if (c) Ve(b, a.vb);else if (c = !!a.Ga) {
        if ("/" != d.charAt(0)) if (this.pa && !this.Ga) d = "/" + d;else {
          var e = b.Ga.lastIndexOf("/");-1 != e && (d = b.Ga.substr(0, e + 1) + d);
        }e = d;if (".." == e || "." == e) d = "";else if (v(e, "./") || v(e, "/.")) {
          d = 0 == e.lastIndexOf("/", 0);e = e.split("/");for (var f = [], g = 0; g < e.length;) {
            var l = e[g++];"." == l ? d && g == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(l), d = !0);
          }d = f.join("/");
        } else d = e;
      }c ? We(b, d) : c = "" !== a.ea.toString();c ? Xe(b, a.ea.clone()) : c = !!a.Pa;c && (a = a.Pa, J(b), b.Pa = a);return b;
    };Se.prototype.clone = function () {
      return new Se(this);
    };
    var Te = function Te(a, b, c) {
      J(a);a.qa = c ? Ye(b, !0) : b;a.qa && (a.qa = a.qa.replace(/:$/, ""));
    },
        Ue = function Ue(a, b, c) {
      J(a);a.pa = c ? Ye(b, !0) : b;
    },
        Ve = function Ve(a, b) {
      J(a);if (b) {
        b = Number(b);if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);a.vb = b;
      } else a.vb = null;
    },
        We = function We(a, b, c) {
      J(a);a.Ga = c ? Ye(b, !0) : b;
    },
        Xe = function Xe(a, b, c) {
      J(a);b instanceof Ze ? (a.ea = b, a.ea.$d(a.da)) : (c || (b = $e(b, ef)), a.ea = new Ze(b, 0, a.da));
    },
        K = function K(a, b, c) {
      J(a);a.ea.set(b, c);
    },
        ff = function ff(a, b) {
      return a.ea.get(b);
    };
    Se.prototype.removeParameter = function (a) {
      J(this);this.ea.remove(a);return this;
    };var J = function J(a) {
      if (a.Xf) throw Error("Tried to modify a read-only Uri");
    };Se.prototype.$d = function (a) {
      this.da = a;this.ea && this.ea.$d(a);return this;
    };
    var gf = function gf(a) {
      return a instanceof Se ? a.clone() : new Se(a, void 0);
    },
        hf = function hf(a, b) {
      var c = new Se(null, void 0);Te(c, "https");a && Ue(c, a);b && We(c, b);return c;
    },
        Ye = function Ye(a, b) {
      return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
    },
        $e = function $e(a, b, c) {
      return m(a) ? (a = encodeURI(a).replace(b, jf), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
    },
        jf = function jf(a) {
      a = a.charCodeAt(0);return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
    },
        af = /[#\/\?@]/g,
        cf = /[#\?:]/g,
        bf = /[#\?]/g,
        ef = /[#\?@]/g,
        df = /#/g,
        Ze = function Ze(a, b, c) {
      this.u = this.s = null;this.X = a || null;this.da = !!c;
    },
        kf = function kf(a) {
      a.s || (a.s = new ue(), a.u = 0, a.X && De(a.X, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
      }));
    },
        mf = function mf(a) {
      var b = ye(a);if ("undefined" == typeof b) throw Error("Keys are undefined");var c = new Ze(null, 0, void 0);a = xe(a);for (var d = 0; d < b.length; d++) {
        var e = b[d],
            f = a[d];ha(f) ? lf(c, e, f) : c.add(e, f);
      }return c;
    };h = Ze.prototype;
    h.add = function (a, b) {
      kf(this);this.X = null;a = this.ca(a);var c = this.s.get(a);c || this.s.set(a, c = []);c.push(b);this.u = Ba(this.u) + 1;return this;
    };h.remove = function (a) {
      kf(this);a = this.ca(a);return this.s.Jb(a) ? (this.X = null, this.u = Ba(this.u) - this.s.get(a).length, this.s.remove(a)) : !1;
    };h.clear = function () {
      this.s = this.X = null;this.u = 0;
    };h.Jb = function (a) {
      kf(this);a = this.ca(a);return this.s.Jb(a);
    };h.forEach = function (a, b) {
      kf(this);this.s.forEach(function (c, d) {
        x(c, function (c) {
          a.call(b, c, d, this);
        }, this);
      }, this);
    };
    h.va = function () {
      kf(this);for (var a = this.s.ha(), b = this.s.va(), c = [], d = 0; d < b.length; d++) {
        for (var e = a[d], f = 0; f < e.length; f++) {
          c.push(b[d]);
        }
      }return c;
    };h.ha = function (a) {
      kf(this);var b = [];if (m(a)) this.Jb(a) && (b = Za(b, this.s.get(this.ca(a))));else {
        a = this.s.ha();for (var c = 0; c < a.length; c++) {
          b = Za(b, a[c]);
        }
      }return b;
    };h.set = function (a, b) {
      kf(this);this.X = null;a = this.ca(a);this.Jb(a) && (this.u = Ba(this.u) - this.s.get(a).length);this.s.set(a, [b]);this.u = Ba(this.u) + 1;return this;
    };
    h.get = function (a, b) {
      a = a ? this.ha(a) : [];return 0 < a.length ? String(a[0]) : b;
    };var lf = function lf(a, b, c) {
      a.remove(b);0 < c.length && (a.X = null, a.s.set(a.ca(b), $a(c)), a.u = Ba(a.u) + c.length);
    };h = Ze.prototype;h.toString = function () {
      if (this.X) return this.X;if (!this.s) return "";for (var a = [], b = this.s.va(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = encodeURIComponent(String(d));d = this.ha(d);for (var f = 0; f < d.length; f++) {
          var g = e;"" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));a.push(g);
        }
      }return this.X = a.join("&");
    };
    h.clone = function () {
      var a = new Ze();a.X = this.X;this.s && (a.s = this.s.clone(), a.u = this.u);return a;
    };h.ca = function (a) {
      a = String(a);this.da && (a = a.toLowerCase());return a;
    };h.$d = function (a) {
      a && !this.da && (kf(this), this.X = null, this.s.forEach(function (a, c) {
        var b = c.toLowerCase();c != b && (this.remove(c), lf(this, b, a));
      }, this));this.da = a;
    };h.extend = function (a) {
      for (var b = 0; b < arguments.length; b++) {
        ze(arguments[b], function (a, b) {
          this.add(b, a);
        }, this);
      }
    };var nf = { Kg: { qd: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", Wd: "https://securetoken.googleapis.com/v1/token", id: "p" }, Lg: { qd: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", Wd: "https://staging-securetoken.sandbox.googleapis.com/v1/token", id: "s" }, Mg: { qd: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", Wd: "https://test-securetoken.sandbox.googleapis.com/v1/token", id: "t" } },
        of = function of(a) {
      for (var b in nf) {
        if (nf[b].id === a) return a = nf[b], { firebaseEndpoint: a.qd, secureTokenEndpoint: a.Wd };
      }return null;
    },
        pf;pf = of("__EID__") ? "__EID__" : void 0;var qf = function qf() {
      var a = L();return z && !!Cb && 11 == Cb || /Edge\/\d+/.test(a);
    },
        rf = function rf() {
      return k.window && k.window.location.href || "";
    },
        sf = function sf(a, b) {
      b = b || k.window;var c = "about:blank";a && (c = Bc(Ec(a)));b.location.href = c;
    },
        tf = function tf(a, b) {
      var c = [],
          d;for (d in a) {
        d in b ? typeof a[d] != typeof b[d] ? c.push(d) : ha(a[d]) ? jb(a[d], b[d]) || c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < tf(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);
      }for (d in b) {
        d in a || c.push(d);
      }return c;
    },
        vf = function vf() {
      var a = L();a = "Chrome" != uf(a) ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;return a && 30 > a ? !1 : !z || !Cb || 9 < Cb;
    },
        wf = function wf(a) {
      a = (a || L()).toLowerCase();return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
    },
        xf = function xf(a) {
      a = a || k.window;try {
        a.close();
      } catch (b) {}
    },
        yf = function yf(a, b, c) {
      var d = Math.floor(1E9 * Math.random()).toString();b = b || 500;c = c || 600;var e = (window.screen.availHeight - c) / 2,
          f = (window.screen.availWidth - b) / 2;b = { width: b, height: c, top: 0 < e ? e : 0, left: 0 < f ? f : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 };c = L().toLowerCase();d && (b.target = d, v(c, "crios/") && (b.target = "_blank"));"Firefox" == uf(L()) && (a = a || "http://localhost", b.scrollbars = !0);c = a || "";(a = b) || (a = {});d = window;b = c instanceof Ac ? c : Ec("undefined" != typeof c.href ? c.href : String(c));c = a.target || c.target;e = [];for (g in a) {
        switch (g) {case "width":case "height":case "top":case "left":
            e.push(g + "=" + a[g]);break;case "target":case "noopener":case "noreferrer":
            break;
          default:
            e.push(g + "=" + (a[g] ? 1 : 0));}
      }var g = e.join(",");(y("iPhone") && !y("iPod") && !y("iPad") || y("iPad") || y("iPod")) && d.navigator && d.navigator.standalone && c && "_self" != c ? (g = d.document.createElement("A"), fd(g, "HTMLAnchorElement"), b instanceof Ac || b instanceof Ac || (b = b.qb ? b.ob() : String(b), w(Cc.test(b)) || (b = "about:invalid#zClosurez"), b = Dc(b)), g.href = Bc(b), g.setAttribute("target", c), a.noreferrer && g.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", !0, !0, d, 1), g.dispatchEvent(a), g = {}) : a.noreferrer ? (g = d.open("", c, g), d = Bc(b), g && (sb && v(d, ";") && (d = "'" + d.replace(/'/g, "%27") + "'"), g.opener = null, a = Ha("b/12014412, meta tag with sanitized URL"), d = '<META HTTP-EQUIV="refresh" content="0; url=' + wa(d) + '">', Ca(Ga(a), "must provide justification"), w(!/^[\s\xa0]*$/.test(Ga(a)), "must provide non-empty justification"), g.document.write(jd(new id().Tf(d))), g.document.close())) : (g = d.open(Bc(b), c, g)) && a.noopener && (g.opener = null);if (g) try {
        g.focus();
      } catch (l) {}return g;
    },
        zf = function zf(a) {
      return new C(function (b) {
        var c = function c() {
          Be(2E3).then(function () {
            if (!a || a.closed) b();else return c();
          });
        };return c();
      });
    },
        Af = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
        Bf = function Bf() {
      var a = null;return new C(function (b) {
        "complete" == k.document.readyState ? b() : (a = function a() {
          b();
        }, kc(window, "load", a));
      }).g(function (b) {
        tc(window, "load", a);throw b;
      });
    },
        Df = function Df() {
      return Cf(void 0) ? Bf().then(function () {
        return new C(function (a, b) {
          var c = k.document,
              d = setTimeout(function () {
            b(Error("Cordova framework is not ready."));
          }, 1E3);c.addEventListener("deviceready", function () {
            clearTimeout(d);a();
          }, !1);
        });
      }) : E(Error("Cordova must run in an Android or iOS file scheme."));
    },
        Cf = function Cf(a) {
      a = a || L();return !("file:" !== Ef() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
    },
        Ff = function Ff() {
      var a = k.window;try {
        return !(!a || a == a.top);
      } catch (b) {
        return !1;
      }
    },
        Gf = function Gf() {
      return firebase.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : firebase.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser";
    },
        Hf = function Hf() {
      var a = Gf();return "ReactNative" === a || "Node" === a;
    },
        uf = function uf(a) {
      var b = a.toLowerCase();if (v(b, "opera/") || v(b, "opr/") || v(b, "opios/")) return "Opera";if (v(b, "iemobile")) return "IEMobile";if (v(b, "msie") || v(b, "trident/")) return "IE";if (v(b, "edge/")) return "Edge";if (v(b, "firefox/")) return "Firefox";if (v(b, "silk/")) return "Silk";if (v(b, "blackberry")) return "Blackberry";if (v(b, "webos")) return "Webos";if (!v(b, "safari/") || v(b, "chrome/") || v(b, "crios/") || v(b, "android")) {
        if (!v(b, "chrome/") && !v(b, "crios/") || v(b, "edge/")) {
          if (v(b, "android")) return "Android";if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
        } else return "Chrome";
      } else return "Safari";return "Other";
    },
        If = { Fg: "FirebaseCore-web", Hg: "FirebaseUI-web" },
        Jf = function Jf(a, b) {
      b = b || [];var c = [],
          d = {},
          e;for (e in If) {
        d[If[e]] = !0;
      }for (e = 0; e < b.length; e++) {
        "undefined" !== typeof d[b[e]] && (delete d[b[e]], c.push(b[e]));
      }c.sort();b = c;b.length || (b = ["FirebaseCore-web"]);c = Gf();return ("Browser" === c ? uf(L()) : c) + "/JsCore/" + a + "/" + b.join(",");
    },
        L = function L() {
      return k.navigator && k.navigator.userAgent || "";
    },
        M = function M(a, b) {
      a = a.split(".");b = b || k;for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) {
        b = b[a[c]];
      }c != a.length && (b = void 0);return b;
    },
        Lf = function Lf() {
      try {
        var a = k.localStorage,
            b = Kf();if (a) return a.setItem(b, "1"), a.removeItem(b), qf() ? !!k.indexedDB : !0;
      } catch (c) {}return !1;
    },
        Nf = function Nf() {
      return (Mf() || "chrome-extension:" === Ef() || Cf()) && !Hf() && Lf();
    },
        Mf = function Mf() {
      return "http:" === Ef() || "https:" === Ef();
    },
        Ef = function Ef() {
      return k.location && k.location.protocol || null;
    },
        Of = function Of(a) {
      a = a || L();return wf(a) || "Firefox" == uf(a) ? !1 : !0;
    },
        Pf = function Pf(a) {
      return "undefined" === typeof a ? null : Hc(a);
    },
        Qf = function Qf(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);
      }return b;
    },
        Rf = function Rf(a) {
      if (null !== a) return JSON.parse(a);
    },
        Kf = function Kf(a) {
      return a ? a : "" + Math.floor(1E9 * Math.random()).toString();
    },
        Sf = function Sf(a) {
      a = a || L();return "Safari" == uf(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
    },
        Tf = function Tf() {
      var a = k.___jsl;if (a && a.H) for (var b in a.H) {
        if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) {
          a.CP[c] = null;
        }
      }
    },
        Uf = function Uf() {
      var a = k.navigator;return a && "boolean" === typeof a.onLine && (Mf() || "chrome-extension:" === Ef() || "undefined" !== typeof a.connection) ? a.onLine : !0;
    },
        Vf = function Vf(a, b, c, d) {
      if (a > b) throw Error("Short delay should be less than long delay!");this.ug = a;this.ag = b;a = c || L();d = d || Gf();this.Wf = wf(a) || "ReactNative" === d;
    };Vf.prototype.get = function () {
      return this.Wf ? this.ag : this.ug;
    };
    var Wf = function Wf() {
      var a = k.document;return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0;
    },
        Xf = function Xf() {
      var a = k.document,
          _b = null;return Wf() || !a ? D() : new C(function (c) {
        _b = function b() {
          Wf() && (a.removeEventListener("visibilitychange", _b, !1), c());
        };a.addEventListener("visibilitychange", _b, !1);
      }).g(function (c) {
        a.removeEventListener("visibilitychange", _b, !1);throw c;
      });
    },
        Yf = function Yf(a) {
      try {
        var b = new Date(parseInt(a, 10));if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) return b.toUTCString();
      } catch (c) {}return null;
    };var Zf = {};var $f;try {
      var ag = {};Object.defineProperty(ag, "abcd", { configurable: !0, enumerable: !0, value: 1 });Object.defineProperty(ag, "abcd", { configurable: !0, enumerable: !0, value: 2 });$f = 2 == ag.abcd;
    } catch (a) {
      $f = !1;
    }
    var N = function N(a, b, c) {
      $f ? Object.defineProperty(a, b, { configurable: !0, enumerable: !0, value: c }) : a[b] = c;
    },
        bg = function bg(a, b) {
      if (b) for (var c in b) {
        b.hasOwnProperty(c) && N(a, c, b[c]);
      }
    },
        cg = function cg(a) {
      var b = {};bg(b, a);return b;
    },
        dg = function dg(a) {
      var b = {},
          c;for (c in a) {
        a.hasOwnProperty(c) && (b[c] = a[c]);
      }return b;
    },
        eg = function eg(a, b) {
      if (!b || !b.length) return !0;if (!a) return !1;for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];if (void 0 === d || null === d || "" === d) return !1;
      }return !0;
    },
        fg = function fg(a) {
      var b = a;if ("object" == typeof a && null != a) {
        b = "length" in a ? [] : {};for (var c in a) {
          N(b, c, fg(a[c]));
        }
      }return b;
    };var gg = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
        hg = ["client_id", "response_type", "scope", "redirect_uri", "state"],
        ig = { Gg: { Dc: "locale", Zb: 500, Yb: 600, providerId: "facebook.com", Ud: hg }, Ig: { Dc: null, Zb: 500, Yb: 620, providerId: "github.com", Ud: hg }, Jg: { Dc: "hl", Zb: 515, Yb: 680, providerId: "google.com", Ud: hg }, Ng: { Dc: "lang", Zb: 485, Yb: 705, providerId: "twitter.com", Ud: gg } },
        jg = function jg(a) {
      for (var b in ig) {
        if (ig[b].providerId == a) return ig[b];
      }return null;
    };var O = function O(a, b) {
      this.code = "auth/" + a;this.message = b || kg[a] || "";
    };t(O, Error);O.prototype.A = function () {
      return { code: this.code, message: this.message };
    };O.prototype.toJSON = function () {
      return this.A();
    };
    var lg = function lg(a) {
      var b = a && a.code;return b ? new O(b.substring(5), a.message) : null;
    },
        kg = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
      "code-expired": "The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
      "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
      "invalid-app-id": "The mobile app identifier is not registed for the current project.", "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.", "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", "invalid-continue-uri": "The continue URL provided in the request is invalid.",
      "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-credential": "The supplied auth credential is malformed or has expired.",
      "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
      "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.", "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
      "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.", "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
      "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.", "missing-continue-uri": "A continue URL must be provided in the request.", "missing-iframe-start": "An internal error has occurred.",
      "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.", "missing-phone-number": "To send verification codes, provide a phone number for the recipient.", "missing-verification-id": "The phone auth credential was created with an empty verification ID.", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
      "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
      "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "The project's quota for this operation has been exceeded.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.",
      timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", "unsupported-persistence-type": "The current environment does not support the specified persistence type.", "user-cancelled": "User did not grant your application the permissions it requested.",
      "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." };var mg = function mg(a, b, c, d, e) {
      this.ma = a;this.Y = b || null;this.Eb = c || null;this.Yd = d || null;this.ba = e || null;if (this.Eb || this.ba) {
        if (this.Eb && this.ba) throw new O("invalid-auth-event");if (this.Eb && !this.Yd) throw new O("invalid-auth-event");
      } else throw new O("invalid-auth-event");
    };mg.prototype.tc = function () {
      return this.Yd;
    };mg.prototype.getError = function () {
      return this.ba;
    };mg.prototype.A = function () {
      return { type: this.ma, eventId: this.Y, urlResponse: this.Eb, sessionId: this.Yd, error: this.ba && this.ba.A() };
    };
    var ng = function ng(a) {
      a = a || {};return a.type ? new mg(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && lg(a.error)) : null;
    };var og = function og(a) {
      var b = "unauthorized-domain",
          c = void 0,
          d = gf(a);a = d.pa;d = d.qa;"chrome-extension" == d ? c = na("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = na("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";O.call(this, b, c);
    };t(og, O);var pg = function pg(a) {
      this.Zf = a.sub;ma();this.Mb = a.email || null;this.Rd = a.provider_id || a.firebase && a.firebase.sign_in_provider || null;this.qf = !!a.is_anonymous || "anonymous" == this.Rd;
    };pg.prototype.getEmail = function () {
      return this.Mb;
    };pg.prototype.isAnonymous = function () {
      return this.qf;
    };var qg = function qg(a) {
      a = a.split(".");if (3 != a.length) return null;a = a[1];for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++) {
        a += ".";
      }try {
        var d = JSON.parse(Hb(a));if (d.sub && d.iss && d.aud && d.exp) return new pg(d);
      } catch (e) {}return null;
    };var rg = function rg(a, b) {
      return a.then(function (a) {
        if (a.idToken) {
          var c = qg(a.idToken);if (!c || b != c.Zf) throw new O("user-mismatch");return a;
        }throw new O("user-mismatch");
      }).g(function (a) {
        throw a && a.code && "auth/user-not-found" == a.code ? new O("user-mismatch") : a;
      });
    },
        sg = function sg(a, b) {
      if (b.idToken || b.accessToken) b.idToken && N(this, "idToken", b.idToken), b.accessToken && N(this, "accessToken", b.accessToken);else if (b.oauthToken && b.oauthTokenSecret) N(this, "accessToken", b.oauthToken), N(this, "secret", b.oauthTokenSecret);else throw new O("internal-error", "failed to construct a credential");N(this, "providerId", a);
    };sg.prototype.Ob = function (a) {
      return tg(a, ug(this));
    };sg.prototype.Fc = function (a, b) {
      var c = ug(this);c.idToken = b;return vg(a, c);
    };sg.prototype.Gd = function (a, b) {
      var c = ug(this);return rg(wg(a, c), b);
    };var ug = function ug(a) {
      var b = {};a.idToken && (b.id_token = a.idToken);a.accessToken && (b.access_token = a.accessToken);a.secret && (b.oauth_token_secret = a.secret);b.providerId = a.providerId;return { postBody: mf(b).toString(), requestUri: "http://localhost" };
    };
    sg.prototype.A = function () {
      var a = { providerId: this.providerId };this.idToken && (a.oauthIdToken = this.idToken);this.accessToken && (a.oauthAccessToken = this.accessToken);this.secret && (a.oauthTokenSecret = this.secret);return a;
    };var xg = function xg(a, b) {
      this.kg = b || [];bg(this, { providerId: a, isOAuthProvider: !0 });this.qe = {};this.Ed = (jg(a) || {}).Dc || null;this.nd = null;
    };xg.prototype.setCustomParameters = function (a) {
      this.qe = kb(a);return this;
    };var P = function P(a) {
      xg.call(this, a, hg);this.Vd = [];
    };t(P, xg);
    P.prototype.addScope = function (a) {
      Va(this.Vd, a) || this.Vd.push(a);return this;
    };P.prototype.ye = function () {
      return $a(this.Vd);
    };P.prototype.credential = function (a, b) {
      if (!a && !b) throw new O("argument-error", "credential failed: must provide the ID token and/or the access token.");return new sg(this.providerId, { idToken: a || null, accessToken: b || null });
    };var yg = function yg() {
      P.call(this, "facebook.com");
    };t(yg, P);N(yg, "PROVIDER_ID", "facebook.com");
    var zg = function zg(a) {
      if (!a) throw new O("argument-error", "credential failed: expected 1 argument (the OAuth access token).");var b = a;q(a) && (b = a.accessToken);return new yg().credential(null, b);
    },
        Ag = function Ag() {
      P.call(this, "github.com");
    };t(Ag, P);N(Ag, "PROVIDER_ID", "github.com");var Bg = function Bg(a) {
      if (!a) throw new O("argument-error", "credential failed: expected 1 argument (the OAuth access token).");var b = a;q(a) && (b = a.accessToken);return new Ag().credential(null, b);
    },
        Cg = function Cg() {
      P.call(this, "google.com");this.addScope("profile");
    };
    t(Cg, P);N(Cg, "PROVIDER_ID", "google.com");var Dg = function Dg(a, b) {
      var c = a;q(a) && (c = a.idToken, b = a.accessToken);return new Cg().credential(c, b);
    },
        Eg = function Eg() {
      xg.call(this, "twitter.com", gg);
    };t(Eg, xg);N(Eg, "PROVIDER_ID", "twitter.com");
    var Fg = function Fg(a, b) {
      var c = a;q(c) || (c = { oauthToken: a, oauthTokenSecret: b });if (!c.oauthToken || !c.oauthTokenSecret) throw new O("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");return new sg("twitter.com", c);
    },
        Gg = function Gg(a, b) {
      this.Mb = a;this.Ld = b;N(this, "providerId", "password");
    };Gg.prototype.Ob = function (a) {
      return Q(a, Hg, { email: this.Mb, password: this.Ld });
    };Gg.prototype.Fc = function (a, b) {
      return Q(a, Ig, { idToken: b, email: this.Mb, password: this.Ld });
    };
    Gg.prototype.Gd = function (a, b) {
      return rg(this.Ob(a), b);
    };Gg.prototype.A = function () {
      return { email: this.Mb, password: this.Ld };
    };var Jg = function Jg() {
      bg(this, { providerId: "password", isOAuthProvider: !1 });
    };bg(Jg, { PROVIDER_ID: "password" });var Kg = function Kg(a) {
      if (!(a.verificationId && a.$c || a.hc && a.phoneNumber)) throw new O("internal-error");this.U = a;N(this, "providerId", "phone");
    };Kg.prototype.Ob = function (a) {
      return a.verifyPhoneNumber(Lg(this));
    };Kg.prototype.Fc = function (a, b) {
      var c = Lg(this);c.idToken = b;return Q(a, Mg, c);
    };
    Kg.prototype.Gd = function (a, b) {
      var c = Lg(this);c.operation = "REAUTH";a = Q(a, Ng, c);return rg(a, b);
    };Kg.prototype.A = function () {
      var a = { providerId: "phone" };this.U.verificationId && (a.verificationId = this.U.verificationId);this.U.$c && (a.verificationCode = this.U.$c);this.U.hc && (a.temporaryProof = this.U.hc);this.U.phoneNumber && (a.phoneNumber = this.U.phoneNumber);return a;
    };
    var Lg = function Lg(a) {
      return a.U.hc && a.U.phoneNumber ? { temporaryProof: a.U.hc, phoneNumber: a.U.phoneNumber } : { sessionInfo: a.U.verificationId, code: a.U.$c };
    },
        Og = function Og(a) {
      try {
        this.tf = a || firebase.auth();
      } catch (b) {
        throw new O("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
      }bg(this, { providerId: "phone", isOAuthProvider: !1 });
    };
    Og.prototype.verifyPhoneNumber = function (a, b) {
      var c = this.tf.f;return D(b.verify()).then(function (d) {
        if (!m(d)) throw new O("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch (b.type) {case "recaptcha":
            return Q(c, Pg, { phoneNumber: a, recaptchaToken: d });default:
            throw new O("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}
      });
    };
    var Qg = function Qg(a, b) {
      if (!a) throw new O("missing-verification-id");if (!b) throw new O("missing-verification-code");return new Kg({ verificationId: a, $c: b });
    };bg(Og, { PROVIDER_ID: "phone" });
    var Rg = function Rg(a) {
      if (a.temporaryProof && a.phoneNumber) return new Kg({ hc: a.temporaryProof, phoneNumber: a.phoneNumber });var b = a && a.providerId;if (!b || "password" === b) return null;var c = a && a.oauthAccessToken,
          d = a && a.oauthTokenSecret;a = a && a.oauthIdToken;try {
        switch (b) {case "google.com":
            return Dg(a, c);case "facebook.com":
            return zg(c);case "github.com":
            return Bg(c);case "twitter.com":
            return Fg(c, d);default:
            return new P(b).credential(a, c);}
      } catch (e) {
        return null;
      }
    },
        Sg = function Sg(a) {
      if (!a.isOAuthProvider) throw new O("invalid-oauth-provider");
    };var Tg = function Tg(a, b, c) {
      O.call(this, a, c);a = b || {};a.email && N(this, "email", a.email);a.phoneNumber && N(this, "phoneNumber", a.phoneNumber);a.credential && N(this, "credential", a.credential);
    };t(Tg, O);Tg.prototype.A = function () {
      var a = { code: this.code, message: this.message };this.email && (a.email = this.email);this.phoneNumber && (a.phoneNumber = this.phoneNumber);var b = this.credential && this.credential.A();b && mb(a, b);return a;
    };Tg.prototype.toJSON = function () {
      return this.A();
    };
    var Ug = function Ug(a) {
      if (a.code) {
        var b = a.code || "";0 == b.indexOf("auth/") && (b = b.substring(5));var c = { credential: Rg(a) };if (a.email) c.email = a.email;else if (a.phoneNumber) c.phoneNumber = a.phoneNumber;else return new O(b, a.message || void 0);return new Tg(b, c, a.message);
      }return null;
    };var Vg = function Vg(a) {
      this.Eg = a;
    };t(Vg, Lc);Vg.prototype.rc = function () {
      return new this.Eg();
    };Vg.prototype.Cd = function () {
      return {};
    };
    var R = function R(a, b, c) {
      var d = "Node" == Gf();d = k.XMLHttpRequest || d && firebase.INTERNAL.node && firebase.INTERNAL.node.XMLHttpRequest;if (!d) throw new O("internal-error", "The XMLHttpRequest compatibility library was not found.");this.m = a;a = b || {};this.qg = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";this.rg = a.secureTokenTimeout || Wg;this.Pc = kb(a.secureTokenHeaders || Xg);this.Df = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Ef = a.firebaseTimeout || Yg;this.mb = kb(a.firebaseHeaders || Zg);c && (this.mb["X-Client-Version"] = c, this.Pc["X-Client-Version"] = c);this.vf = new Qc();this.Dg = new Vg(d);
    },
        $g,
        Wg = new Vf(3E4, 6E4),
        Xg = { "Content-Type": "application/x-www-form-urlencoded" },
        Yg = new Vf(3E4, 6E4),
        Zg = { "Content-Type": "application/json" },
        ah = function ah(a, b) {
      b ? a.mb["X-Firebase-Locale"] = b : delete a.mb["X-Firebase-Locale"];
    },
        bh = function bh(a, b) {
      b ? (a.mb["X-Client-Version"] = b, a.Pc["X-Client-Version"] = b) : (delete a.mb["X-Client-Version"], delete a.Pc["X-Client-Version"]);
    },
        dh = function dh(a, b, c, d, e, f, g) {
      Uf() ? (vf() ? a = _r(a.tg, a) : ($g || ($g = new C(function (a, b) {
        ch(a, b);
      })), a = _r(a.sg, a)), a(b, c, d, e, f, g)) : c && c(null);
    };
    R.prototype.tg = function (a, b, c, d, e, f) {
      var g = "Node" == Gf(),
          l = Hf() ? g ? new I(this.Dg) : new I() : new I(this.vf);if (f) {
        l.Db = Math.max(0, f);var n = setTimeout(function () {
          l.dispatchEvent("timeout");
        }, f);
      }l.listen("complete", function () {
        n && clearTimeout(n);var a = null;try {
          a = JSON.parse(Re(this)) || null;
        } catch (zb) {
          a = null;
        }b && b(a);
      });sc(l, "ready", function () {
        n && clearTimeout(n);this.Ma || (this.Ma = !0, this.lb());
      });sc(l, "timeout", function () {
        n && clearTimeout(n);this.Ma || (this.Ma = !0, this.lb());b && b(null);
      });l.send(a, c, d, e);
    };
    var eh = Ha("https://apis.google.com/js/client.js?onload=%{onload}"),
        fh = "__fcb" + Math.floor(1E6 * Math.random()).toString(),
        ch = function ch(a, b) {
      if (((window.gapi || {}).client || {}).request) a();else {
        k[fh] = function () {
          ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
        };var c = Oa(eh, { onload: fh });Wd(de(c), function () {
          b(Error("CORS_UNSUPPORTED"));
        });
      }
    };
    R.prototype.sg = function (a, b, c, d, e) {
      var f = this;$g.then(function () {
        window.gapi.client.setApiKey(f.m);var g = window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({ path: a, method: c, body: d, headers: e, authType: "none", callback: function callback(a) {
            window.gapi.auth.setToken(g);b && b(a);
          } });
      }).g(function (a) {
        b && b({ error: { message: a && a.message || "CORS_UNSUPPORTED" } });
      });
    };
    var hh = function hh(a, b) {
      return new C(function (c, d) {
        "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? dh(a, a.qg + "?key=" + encodeURIComponent(a.m), function (a) {
          a ? a.error ? d(gh(a)) : a.access_token && a.refresh_token ? c(a) : d(new O("internal-error")) : d(new O("network-request-failed"));
        }, "POST", mf(b).toString(), a.Pc, a.rg.get()) : d(new O("internal-error"));
      });
    },
        ih = function ih(a, b, c, d, e, f) {
      var g = gf(a.Df + b);K(g, "key", a.m);f && K(g, "cb", ma().toString());var l = "GET" == c;if (l) for (var n in d) {
        d.hasOwnProperty(n) && K(g, n, d[n]);
      }return new C(function (b, f) {
        dh(a, g.toString(), function (a) {
          a ? a.error ? f(gh(a, e || {})) : b(a) : f(new O("network-request-failed"));
        }, c, l ? void 0 : Hc(Qf(d)), a.mb, a.Ef.get());
      });
    },
        jh = function jh(a) {
      if (!yc.test(a.email)) throw new O("invalid-email");
    },
        kh = function kh(a) {
      "email" in a && jh(a);
    },
        mh = function mh(a, b) {
      return Q(a, lh, { identifier: b, continueUri: Mf() ? rf() : "http://localhost" }).then(function (a) {
        return a.allProviders || [];
      });
    },
        oh = function oh(a) {
      return Q(a, nh, {}).then(function (a) {
        return a.authorizedDomains || [];
      });
    },
        ph = function ph(a) {
      if (!a.idToken) throw new O("internal-error");
    },
        qh = function qh(a) {
      if (a.phoneNumber || a.temporaryProof) {
        if (!a.phoneNumber || !a.temporaryProof) throw new O("internal-error");
      } else {
        if (!a.sessionInfo) throw new O("missing-verification-id");if (!a.code) throw new O("missing-verification-code");
      }
    };R.prototype.signInAnonymously = function () {
      return Q(this, rh, {});
    };R.prototype.updateEmail = function (a, b) {
      return Q(this, sh, { idToken: a, email: b });
    };R.prototype.updatePassword = function (a, b) {
      return Q(this, Ig, { idToken: a, password: b });
    };var th = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
    R.prototype.updateProfile = function (a, b) {
      var c = { idToken: a },
          d = [];eb(th, function (a, f) {
        var e = b[f];null === e ? d.push(a) : f in b && (c[f] = e);
      });d.length && (c.deleteAttribute = d);return Q(this, sh, c);
    };R.prototype.sendPasswordResetEmail = function (a, b) {
      a = { requestType: "PASSWORD_RESET", email: a };mb(a, b);return Q(this, uh, a);
    };R.prototype.sendEmailVerification = function (a, b) {
      a = { requestType: "VERIFY_EMAIL", idToken: a };mb(a, b);return Q(this, vh, a);
    };R.prototype.verifyPhoneNumber = function (a) {
      return Q(this, wh, a);
    };
    var yh = function yh(a, b, c) {
      return Q(a, xh, { idToken: b, deleteProvider: c });
    },
        zh = function zh(a) {
      if (!a.requestUri || !a.sessionId && !a.postBody) throw new O("internal-error");
    },
        Ah = function Ah(a) {
      var b = null;a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = Ug(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = Ug(a)) : "EMAIL_EXISTS" == a.errorMessage && (a.code = "email-already-in-use", b = Ug(a));if (b) throw b;if (!a.idToken) throw new O("internal-error");
    },
        tg = function tg(a, b) {
      b.returnIdpCredential = !0;return Q(a, Bh, b);
    },
        vg = function vg(a, b) {
      b.returnIdpCredential = !0;return Q(a, Ch, b);
    },
        wg = function wg(a, b) {
      b.returnIdpCredential = !0;b.autoCreate = !1;return Q(a, Dh, b);
    },
        Eh = function Eh(a) {
      if (!a.oobCode) throw new O("invalid-action-code");
    };R.prototype.confirmPasswordReset = function (a, b) {
      return Q(this, Fh, { oobCode: a, newPassword: b });
    };R.prototype.checkActionCode = function (a) {
      return Q(this, Gh, { oobCode: a });
    };R.prototype.applyActionCode = function (a) {
      return Q(this, Hh, { oobCode: a });
    };
    var Hh = { endpoint: "setAccountInfo", F: Eh, cb: "email" },
        Gh = { endpoint: "resetPassword", F: Eh, $: function $(a) {
        if (!a.email || !a.requestType) throw new O("internal-error");
      } },
        Ih = { endpoint: "signupNewUser", F: function F(a) {
        jh(a);if (!a.password) throw new O("weak-password");
      }, $: ph, Aa: !0 },
        lh = { endpoint: "createAuthUri" },
        Jh = { endpoint: "deleteAccount", ab: ["idToken"] },
        xh = { endpoint: "setAccountInfo", ab: ["idToken", "deleteProvider"], F: function F(a) {
        if (!ha(a.deleteProvider)) throw new O("internal-error");
      } },
        Kh = { endpoint: "getAccountInfo" },
        vh = { endpoint: "getOobConfirmationCode", ab: ["idToken", "requestType"], F: function F(a) {
        if ("VERIFY_EMAIL" != a.requestType) throw new O("internal-error");
      }, cb: "email" },
        uh = { endpoint: "getOobConfirmationCode", ab: ["requestType"], F: function F(a) {
        if ("PASSWORD_RESET" != a.requestType) throw new O("internal-error");jh(a);
      }, cb: "email" },
        nh = { ie: !0, endpoint: "getProjectConfig", De: "GET" },
        Lh = { ie: !0, endpoint: "getRecaptchaParam", De: "GET", $: function $(a) {
        if (!a.recaptchaSiteKey) throw new O("internal-error");
      } },
        Fh = { endpoint: "resetPassword",
      F: Eh, cb: "email" },
        Pg = { endpoint: "sendVerificationCode", ab: ["phoneNumber", "recaptchaToken"], cb: "sessionInfo" },
        sh = { endpoint: "setAccountInfo", ab: ["idToken"], F: kh, Aa: !0 },
        Ig = { endpoint: "setAccountInfo", ab: ["idToken"], F: function F(a) {
        kh(a);if (!a.password) throw new O("weak-password");
      }, $: ph, Aa: !0 },
        rh = { endpoint: "signupNewUser", $: ph, Aa: !0 },
        Bh = { endpoint: "verifyAssertion", F: zh, $: Ah, Aa: !0 },
        Dh = { endpoint: "verifyAssertion", F: zh, $: function $(a) {
        if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new O("user-not-found");
        if (!a.idToken) throw new O("internal-error");
      }, Aa: !0 },
        Ch = { endpoint: "verifyAssertion", F: function F(a) {
        zh(a);if (!a.idToken) throw new O("internal-error");
      }, $: Ah, Aa: !0 },
        Mh = { endpoint: "verifyCustomToken", F: function F(a) {
        if (!a.token) throw new O("invalid-custom-token");
      }, $: ph, Aa: !0 },
        Hg = { endpoint: "verifyPassword", F: function F(a) {
        jh(a);if (!a.password) throw new O("wrong-password");
      }, $: ph, Aa: !0 },
        wh = { endpoint: "verifyPhoneNumber", F: qh, $: ph },
        Mg = { endpoint: "verifyPhoneNumber", F: function F(a) {
        if (!a.idToken) throw new O("internal-error");
        qh(a);
      }, $: function $(a) {
        if (a.temporaryProof) throw a.code = "credential-already-in-use", Ug(a);ph(a);
      } },
        Ng = { yf: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", F: qh, $: ph },
        Q = function Q(a, b, c) {
      if (!eg(c, b.ab)) return E(new O("internal-error"));var d = b.De || "POST",
          e;return D(c).then(b.F).then(function () {
        b.Aa && (c.returnSecureToken = !0);return ih(a, b.endpoint, d, c, b.yf, b.ie || !1);
      }).then(function (a) {
        return e = a;
      }).then(b.$).then(function () {
        if (!b.cb) return e;if (!(b.cb in e)) throw new O("internal-error");return e[b.cb];
      });
    },
        gh = function gh(a, b) {
      var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";var d = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };if (c = d[c] ? new O(d[c]) : null) return c;c = a.error && a.error.message || "";d = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled",
        MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", INVALID_APP_ID: "invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code",
        INVALID_PHONE_NUMBER: "invalid-phone-number", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_PHONE_NUMBER: "missing-phone-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired", INVALID_CONTINUE_URI: "invalid-continue-uri", MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name", MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri", INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id" };mb(d, b || {});b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;for (var e in d) {
        if (0 === c.indexOf(e)) return new O(d[e], b);
      }!b && a && (b = Pf(a));return new O("internal-error", b);
    };var Oh = function Oh(a) {
      this.Bg = a;this.yc = null;this.Id = Nh(this);
    },
        Nh = function Nh(a) {
      return Ph().then(function () {
        return new C(function (b, c) {
          M("gapi.iframes.getContext")().open({ where: document.body, url: a.Bg, messageHandlersFilter: M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: !0 }, function (d) {
            a.yc = d;a.yc.restyle({ setHideOnLeave: !1 });var e = setTimeout(function () {
              c(Error("Network Error"));
            }, Qh.get()),
                f = function f() {
              clearTimeout(e);
              b();
            };d.ping(f).then(f, function () {
              c(Error("Network Error"));
            });
          });
        });
      });
    };Oh.prototype.sendMessage = function (a) {
      var b = this;return this.Id.then(function () {
        return new C(function (c) {
          b.yc.send(a.type, a, c, M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
        });
      });
    };
    var Rh = function Rh(a, b) {
      a.Id.then(function () {
        a.yc.register("authEvent", b, M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    },
        Sh = Ha("https://apis.google.com/js/api.js?onload=%{onload}"),
        Th = new Vf(3E4, 6E4),
        Qh = new Vf(5E3, 15E3),
        Uh = null,
        Ph = function Ph() {
      return Uh ? Uh : Uh = new C(function (a, b) {
        if (Uf()) {
          var c = function c() {
            Tf();M("gapi.load")("gapi.iframes", { callback: a, ontimeout: function ontimeout() {
                Tf();b(Error("Network Error"));
              }, timeout: Th.get() });
          };if (M("gapi.iframes.Iframe")) a();else if (M("gapi.load")) c();else {
            var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();k[d] = function () {
              M("gapi.load") ? c() : b(Error("Network Error"));
            };d = Oa(Sh, { onload: d });D(de(d)).g(function () {
              b(Error("Network Error"));
            });
          }
        } else b(Error("Network Error"));
      }).g(function (a) {
        Uh = null;throw a;
      });
    };var Vh = function Vh(a, b, c) {
      this.B = a;this.m = b;this.o = c;this.fb = null;this.Ba = hf(this.B, "/__/auth/iframe");K(this.Ba, "apiKey", this.m);K(this.Ba, "appName", this.o);this.P = null;this.M = [];
    };Vh.prototype.ae = function (a) {
      this.fb = a;return this;
    };Vh.prototype.Zd = function (a) {
      this.P = a;return this;
    };
    Vh.prototype.toString = function () {
      this.fb ? K(this.Ba, "v", this.fb) : this.Ba.removeParameter("v");this.P ? K(this.Ba, "eid", this.P) : this.Ba.removeParameter("eid");this.M.length ? K(this.Ba, "fw", this.M.join(",")) : this.Ba.removeParameter("fw");return this.Ba.toString();
    };var Wh = function Wh(a, b, c, d, e) {
      this.B = a;this.m = b;this.o = c;this.sf = d;this.fb = this.Y = this.Td = null;this.xb = e;this.P = null;
    };Wh.prototype.ae = function (a) {
      this.fb = a;return this;
    };Wh.prototype.Zd = function (a) {
      this.P = a;return this;
    };
    Wh.prototype.toString = function () {
      var a = hf(this.B, "/__/auth/handler");K(a, "apiKey", this.m);K(a, "appName", this.o);K(a, "authType", this.sf);if (this.xb.isOAuthProvider) {
        var b = this.xb;try {
          var c = firebase.app(this.o).auth().ia;
        } catch (l) {
          c = null;
        }b.nd = c;K(a, "providerId", this.xb.providerId);b = this.xb;c = Qf(b.qe);for (var d in c) {
          c[d] = c[d].toString();
        }d = b.kg;c = kb(c);for (var e = 0; e < d.length; e++) {
          var f = d[e];f in c && delete c[f];
        }b.Ed && b.nd && !c[b.Ed] && (c[b.Ed] = b.nd);ib(c) || K(a, "customParameters", Pf(c));
      }"function" === typeof this.xb.ye && (b = this.xb.ye(), b.length && K(a, "scopes", b.join(",")));this.Td ? K(a, "redirectUrl", this.Td) : a.removeParameter("redirectUrl");this.Y ? K(a, "eventId", this.Y) : a.removeParameter("eventId");this.fb ? K(a, "v", this.fb) : a.removeParameter("v");if (this.mc) for (var g in this.mc) {
        this.mc.hasOwnProperty(g) && !ff(a, g) && K(a, g, this.mc[g]);
      }this.P ? K(a, "eid", this.P) : a.removeParameter("eid");g = Xh(this.o);g.length && K(a, "fw", g.join(","));return a.toString();
    };
    var Xh = function Xh(a) {
      try {
        return $a(firebase.app(a).auth().M);
      } catch (b) {
        return [];
      }
    },
        Yh = function Yh(a, b, c, d, e) {
      this.B = a;this.m = b;this.o = c;this.La = d || null;this.P = e || null;this.f = this.yd = this.we = null;this.ta = [];this.Ac = this.wa = null;
    },
        Zh = function Zh(a) {
      var b = rf();return oh(a).then(function (a) {
        a: {
          var c = gf(b),
              e = c.qa;c = c.pa;for (var f = 0; f < a.length; f++) {
            var g = a[f];var l = c;var n = e;0 == g.indexOf("chrome-extension://") ? l = gf(g).pa == l && "chrome-extension" == n : "http" != n && "https" != n ? l = !1 : Af.test(g) ? l = l == g : (g = g.split(".").join("\\."), l = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(l));if (l) {
              a = !0;break a;
            }
          }a = !1;
        }if (!a) throw new og(rf());
      });
    };h = Yh.prototype;h.Sb = function () {
      if (this.Ac) return this.Ac;var a = this;return this.Ac = Bf().then(function () {
        if (!a.yd) {
          var b = a.La,
              c = a.P,
              d = Xh(a.o);b = new Vh(a.B, a.m, a.o).ae(b).Zd(c);b.M = $a(d || []);a.yd = b.toString();
        }a.xc = new Oh(a.yd);$h(a);
      });
    };
    h.ec = function (a, b, c) {
      var d = new O("popup-closed-by-user"),
          e = new O("web-storage-unsupported"),
          f = this,
          g = !1;return this.Ra().then(function () {
        ai(f).then(function (c) {
          c || (a && xf(a), b(e), g = !0);
        });
      }).g(function () {}).then(function () {
        if (!g) return zf(a);
      }).then(function () {
        if (!g) return Be(c).then(function () {
          b(d);
        });
      });
    };h.Ye = function () {
      var a = L();return !Of(a) && !Sf(a);
    };h.Be = function () {
      return !1;
    };
    h.$b = function (a, b, c, d, e, f, g) {
      if (!a) return E(new O("popup-blocked"));if (g && !Of()) return this.Ra().g(function (b) {
        xf(a);e(b);
      }), d(), D();this.wa || (this.wa = Zh(bi(this)));var l = this;return this.wa.then(function () {
        var b = l.Ra().g(function (b) {
          xf(a);e(b);throw b;
        });d();return b;
      }).then(function () {
        Sg(c);if (!g) {
          var d = ci(l.B, l.m, l.o, b, c, null, f, l.La, void 0, l.P);sf(d, a);
        }
      }).g(function (a) {
        "auth/network-request-failed" == a.code && (l.wa = null);throw a;
      });
    };
    var bi = function bi(a) {
      a.f || (a.we = a.La ? Jf(a.La, Xh(a.o)) : null, a.f = new R(a.m, of(a.P), a.we));return a.f;
    };Yh.prototype.ac = function (a, b, c) {
      this.wa || (this.wa = Zh(bi(this)));var d = this;return this.wa.then(function () {
        Sg(b);var e = ci(d.B, d.m, d.o, a, b, rf(), c, d.La, void 0, d.P);sf(e);
      }).g(function (a) {
        "auth/network-request-failed" == a.code && (d.wa = null);throw a;
      });
    };Yh.prototype.Ra = function () {
      var a = this;return this.Sb().then(function () {
        return a.xc.Id;
      }).g(function () {
        a.wa = null;throw new O("network-request-failed");
      });
    };
    Yh.prototype.bf = function () {
      return !0;
    };
    var ci = function ci(a, b, c, d, e, f, g, l, n, F) {
      a = new Wh(a, b, c, d, e);a.Td = f;a.Y = g;f = a.ae(l);f.mc = kb(n || null);return f.Zd(F).toString();
    },
        $h = function $h(a) {
      if (!a.xc) throw Error("IfcHandler must be initialized!");Rh(a.xc, function (b) {
        var c = {};if (b && b.authEvent) {
          var d = !1;b = ng(b.authEvent);for (c = 0; c < a.ta.length; c++) {
            d = a.ta[c](b) || d;
          }c = {};c.status = d ? "ACK" : "ERROR";return D(c);
        }c.status = "ERROR";return D(c);
      });
    },
        ai = function ai(a) {
      var b = { type: "webStorageSupport" };return a.Sb().then(function () {
        return a.xc.sendMessage(b);
      }).then(function (a) {
        if (a && a.length && "undefined" !== typeof a[0].webStorageSupport) return a[0].webStorageSupport;throw Error();
      });
    };Yh.prototype.ib = function (a) {
      this.ta.push(a);
    };Yh.prototype.dc = function (a) {
      Ya(this.ta, function (b) {
        return b == a;
      });
    };var di = function di(a, b, c, d, e, f) {
      N(this, "type", "recaptcha");this.ad = this.Ib = null;this.Kb = !1;this.ne = b;this.Fa = c || { theme: "light", type: "image" };this.J = [];if (this.Fa.sitekey) throw new O("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.Bc = "invisible" === this.Fa.size;if (!ld(b) || !this.Bc && ld(b).hasChildNodes()) throw new O("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");this.f = new R(a, f || null, e || null);this.Jf = d || function () {
        return null;
      };var g = this;this.Wc = [];var l = this.Fa.callback;this.Fa.callback = function (a) {
        g.Lb(a);if ("function" === typeof l) l(a);else if ("string" === typeof l) {
          var b = M(l, k);"function" === typeof b && b(a);
        }
      };var n = this.Fa["expired-callback"];this.Fa["expired-callback"] = function () {
        g.Lb(null);if ("function" === typeof n) n();else if ("string" === typeof n) {
          var a = M(n, k);"function" === typeof a && a();
        }
      };
    };di.prototype.Lb = function (a) {
      for (var b = 0; b < this.Wc.length; b++) {
        try {
          this.Wc[b](a);
        } catch (c) {}
      }
    };
    var ei = function ei(a, b) {
      Ya(a.Wc, function (a) {
        return a == b;
      });
    };di.prototype.c = function (a) {
      var b = this;this.J.push(a);Ed(a, function () {
        Xa(b.J, a);
      });return a;
    };
    di.prototype.Tb = function () {
      var a = this;return this.Ib ? this.Ib : this.Ib = this.c(D().then(function () {
        if (Mf()) return Bf();throw new O("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
      }).then(function () {
        return fi(gi(), a.Jf());
      }).then(function () {
        return Q(a.f, Lh, {});
      }).then(function (b) {
        a.Fa.sitekey = b.recaptchaSiteKey;
      }).g(function (b) {
        a.Ib = null;throw b;
      }));
    };
    di.prototype.render = function () {
      hi(this);var a = this;return this.c(this.Tb().then(function () {
        if (null === a.ad) {
          var b = a.ne;if (!a.Bc) {
            var c = ld(b);b = pd("DIV");c.appendChild(b);
          }a.ad = grecaptcha.render(b, a.Fa);
        }return a.ad;
      }));
    };di.prototype.verify = function () {
      hi(this);var a = this;return this.c(this.render().then(function (b) {
        return new C(function (c) {
          var d = grecaptcha.getResponse(b);if (d) c(d);else {
            var e = function e(b) {
              b && (ei(a, e), c(b));
            };a.Wc.push(e);a.Bc && grecaptcha.execute(a.ad);
          }
        });
      }));
    };
    var hi = function hi(a) {
      if (a.Kb) throw new O("internal-error", "RecaptchaVerifier instance has been destroyed.");
    };di.prototype.clear = function () {
      hi(this);this.Kb = !0;gi().ld--;for (var a = 0; a < this.J.length; a++) {
        this.J[a].cancel("RecaptchaVerifier instance has been destroyed.");
      }if (!this.Bc) {
        a = ld(this.ne);for (var b; b = a.firstChild;) {
          a.removeChild(b);
        }
      }
    };
    var ii = Ha("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
        ji = function ji() {
      this.ld = k.grecaptcha ? Infinity : 0;this.Ce = null;this.jd = "__rcb" + Math.floor(1E6 * Math.random()).toString();
    },
        fi = function fi(a, b) {
      return new C(function (c, d) {
        if (Uf()) {
          if (!k.grecaptcha || b !== a.Ce && !a.ld) {
            k[a.jd] = function () {
              if (k.grecaptcha) {
                a.Ce = b;var e = k.grecaptcha.render;k.grecaptcha.render = function (b, c) {
                  b = e(b, c);a.ld++;return b;
                };c();
              } else d(new O("internal-error"));delete k[a.jd];
            };var e = Oa(ii, { onload: a.jd,
              hl: b || "" });D(de(e)).g(function () {
              d(new O("internal-error", "Unable to load external reCAPTCHA dependencies!"));
            });
          } else c();
        } else d(new O("network-request-failed"));
      });
    },
        ki = null,
        gi = function gi() {
      ki || (ki = new ji());return ki;
    },
        li = function li(a, b, c) {
      try {
        this.i = c || firebase.app();
      } catch (f) {
        throw new O("argument-error", "No firebase.app.App instance is currently initialized.");
      }if (this.i.options && this.i.options.apiKey) c = this.i.options.apiKey;else throw new O("invalid-api-key");var d = this,
          e = null;try {
        e = $a(this.i.auth().M);
      } catch (f) {}e = firebase.SDK_VERSION ? Jf(firebase.SDK_VERSION, e) : null;di.call(this, c, a, b, function () {
        try {
          var a = d.i.auth().ia;
        } catch (g) {
          a = null;
        }return a;
      }, e, of(pf));
    };t(li, di);var mi = function mi(a) {
      this.G = a || firebase.INTERNAL.reactNative && firebase.INTERNAL.reactNative.AsyncStorage;if (!this.G) throw new O("internal-error", "The React Native compatibility library was not found.");
    };h = mi.prototype;h.get = function (a) {
      return D(this.G.getItem(a)).then(function (a) {
        return a && Rf(a);
      });
    };h.set = function (a, b) {
      return D(this.G.setItem(a, Pf(b)));
    };h.remove = function (a) {
      return D(this.G.removeItem(a));
    };h.jb = function () {};h.$a = function () {};var ni = function ni() {
      this.G = {};
    };h = ni.prototype;h.get = function (a) {
      return D(this.G[a]);
    };h.set = function (a, b) {
      this.G[a] = b;return D();
    };h.remove = function (a) {
      delete this.G[a];return D();
    };h.jb = function () {};h.$a = function () {};var pi = function pi() {
      if (!oi()) {
        if ("Node" == Gf()) throw new O("internal-error", "The LocalStorage compatibility library was not found.");throw new O("web-storage-unsupported");
      }this.G = k.localStorage || firebase.INTERNAL.node.localStorage;
    },
        oi = function oi() {
      var a = "Node" == Gf();a = k.localStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.localStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = pi.prototype;
    h.get = function (a) {
      var b = this;return D().then(function () {
        var c = b.G.getItem(a);return Rf(c);
      });
    };h.set = function (a, b) {
      var c = this;return D().then(function () {
        var d = Pf(b);null === d ? c.remove(a) : c.G.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return D().then(function () {
        b.G.removeItem(a);
      });
    };h.jb = function (a) {
      k.window && lc(k.window, "storage", a);
    };h.$a = function (a) {
      k.window && tc(k.window, "storage", a);
    };var qi = function qi() {
      this.G = {};
    };h = qi.prototype;h.get = function () {
      return D(null);
    };h.set = function () {
      return D();
    };h.remove = function () {
      return D();
    };h.jb = function () {};h.$a = function () {};var si = function si() {
      if (!ri()) {
        if ("Node" == Gf()) throw new O("internal-error", "The SessionStorage compatibility library was not found.");throw new O("web-storage-unsupported");
      }this.G = k.sessionStorage || firebase.INTERNAL.node.sessionStorage;
    },
        ri = function ri() {
      var a = "Node" == Gf();a = k.sessionStorage || a && firebase.INTERNAL.node && firebase.INTERNAL.node.sessionStorage;if (!a) return !1;try {
        return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
      } catch (b) {
        return !1;
      }
    };h = si.prototype;
    h.get = function (a) {
      var b = this;return D().then(function () {
        var c = b.G.getItem(a);return Rf(c);
      });
    };h.set = function (a, b) {
      var c = this;return D().then(function () {
        var d = Pf(b);null === d ? c.remove(a) : c.G.setItem(a, d);
      });
    };h.remove = function (a) {
      var b = this;return D().then(function () {
        b.G.removeItem(a);
      });
    };h.jb = function () {};h.$a = function () {};var ti = function ti(a, b, c, d, e, f) {
      if (!window.indexedDB) throw new O("web-storage-unsupported");this.zf = a;this.Hd = b;this.md = c;this.ff = d;this.gb = e;this.N = {};this.fc = [];this.Wb = 0;this.Rf = f || k.indexedDB;
    },
        ui,
        vi = function vi(a) {
      return new C(function (b, c) {
        var d = a.Rf.open(a.zf, a.gb);d.onerror = function (a) {
          c(Error(a.target.errorCode));
        };d.onupgradeneeded = function (b) {
          b = b.target.result;try {
            b.createObjectStore(a.Hd, { keyPath: a.md });
          } catch (f) {
            c(f);
          }
        };d.onsuccess = function (a) {
          b(a.target.result);
        };
      });
    },
        wi = function wi(a) {
      a.Ge || (a.Ge = vi(a));return a.Ge;
    },
        xi = function xi(a, b) {
      return b.objectStore(a.Hd);
    },
        zi = function zi(a, b, c) {
      return b.transaction([a.Hd], c ? "readwrite" : "readonly");
    },
        Ai = function Ai(a) {
      return new C(function (b, c) {
        a.onsuccess = function (a) {
          a && a.target ? b(a.target.result) : b();
        };a.onerror = function (a) {
          c(Error(a.target.errorCode));
        };
      });
    };h = ti.prototype;
    h.set = function (a, b) {
      var c = !1,
          d,
          e = this;return Ed(wi(this).then(function (b) {
        d = b;b = xi(e, zi(e, d, !0));return Ai(b.get(a));
      }).then(function (f) {
        var g = xi(e, zi(e, d, !0));if (f) return f.value = b, Ai(g.put(f));e.Wb++;c = !0;f = {};f[e.md] = a;f[e.ff] = b;return Ai(g.add(f));
      }).then(function () {
        e.N[a] = b;
      }), function () {
        c && e.Wb--;
      });
    };h.get = function (a) {
      var b = this;return wi(this).then(function (c) {
        return Ai(xi(b, zi(b, c, !1)).get(a));
      }).then(function (a) {
        return a && a.value;
      });
    };
    h.remove = function (a) {
      var b = !1,
          c = this;return Ed(wi(this).then(function (d) {
        b = !0;c.Wb++;return Ai(xi(c, zi(c, d, !0))["delete"](a));
      }).then(function () {
        delete c.N[a];
      }), function () {
        b && c.Wb--;
      });
    };
    h.xg = function () {
      var a = this;return wi(this).then(function (b) {
        var c = xi(a, zi(a, b, !1));return c.getAll ? Ai(c.getAll()) : new C(function (a, b) {
          var d = [],
              e = c.openCursor();e.onsuccess = function (b) {
            (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d);
          };e.onerror = function (a) {
            b(Error(a.target.errorCode));
          };
        });
      }).then(function (b) {
        var c = {},
            d = [];if (0 == a.Wb) {
          for (d = 0; d < b.length; d++) {
            c[b[d][a.md]] = b[d][a.ff];
          }d = tf(a.N, c);a.N = c;
        }return d;
      });
    };h.jb = function (a) {
      0 == this.fc.length && this.ce();this.fc.push(a);
    };
    h.$a = function (a) {
      Ya(this.fc, function (b) {
        return b == a;
      });0 == this.fc.length && this.Sc();
    };h.ce = function () {
      var a = this;this.Sc();var b = function b() {
        a.Nd = Be(800).then(_r(a.xg, a)).then(function (b) {
          0 < b.length && x(a.fc, function (a) {
            a(b);
          });
        }).then(b).g(function (a) {
          "STOP_EVENT" != a.message && b();
        });return a.Nd;
      };b();
    };h.Sc = function () {
      this.Nd && this.Nd.cancel("STOP_EVENT");
    };var Ei = function Ei() {
      this.se = { Browser: Bi, Node: Ci, ReactNative: Di }[Gf()];
    },
        Fi,
        Bi = { D: pi, ee: si },
        Ci = { D: pi, ee: si },
        Di = { D: mi, ee: qi };var Gi = function Gi(a) {
      this.Bd(a);
    };
    Gi.prototype.Bd = function (a) {
      var b = a.url;if ("undefined" === typeof b) throw new O("missing-continue-uri");if ("string" !== typeof b || "string" === typeof b && !b.length) throw new O("invalid-continue-uri");this.uf = b;this.ge = this.nc = null;this.He = !1;var c = a.android;if (c && "object" === typeof c) {
        b = c.packageName;var d = c.installApp;c = c.minimumVersion;if ("string" === typeof b && b.length) {
          this.nc = b;if ("undefined" !== typeof d && "boolean" !== typeof d) throw new O("argument-error", "installApp property must be a boolean when specified.");this.He = !!d;if ("undefined" !== typeof c && ("string" !== typeof c || "string" === typeof c && !c.length)) throw new O("argument-error", "minimumVersion property must be a non empty string when specified.");this.ge = c || null;
        } else {
          if ("undefined" !== typeof b) throw new O("argument-error", "packageName property must be a non empty string when specified.");if ("undefined" !== typeof d || "undefined" !== typeof c) throw new O("missing-android-pkg-name");
        }
      } else if ("undefined" !== typeof c) throw new O("argument-error", "android property must be a non null object when specified.");
      this.xd = null;if ((b = a.iOS) && "object" === typeof b) {
        if (b = b.bundleId, "string" === typeof b && b.length) this.xd = b;else {
          if ("undefined" !== typeof b) throw new O("argument-error", "bundleId property must be a non empty string when specified.");
        }
      } else if ("undefined" !== typeof b) throw new O("argument-error", "iOS property must be a non null object when specified.");a = a.handleCodeInApp;if ("undefined" !== typeof a && "boolean" !== typeof a) throw new O("argument-error", "handleCodeInApp property must be a boolean when specified.");
      if ((this.le = !!a) && !this.xd && !this.nc) throw new O("argument-error", "handleCodeInApp property can't be true when no mobile application is provided.");
    };var Hi = function Hi(a) {
      var b = {};b.continueUrl = a.uf;b.canHandleCodeInApp = a.le;if (b.androidPackageName = a.nc) b.androidMinimumVersion = a.ge, b.androidInstallApp = a.He;b.iOSBundleId = a.xd;for (var c in b) {
        null === b[c] && delete b[c];
      }return b;
    };var Ii = function Ii(a, b) {
      this.xf = b;N(this, "verificationId", a);
    };Ii.prototype.confirm = function (a) {
      a = Qg(this.verificationId, a);return this.xf(a);
    };var Ji = function Ji(a, b, c, d) {
      return new Og(a).verifyPhoneNumber(b, c).then(function (a) {
        return new Ii(a, d);
      });
    };var Ki = function Ki(a) {
      var b = {},
          c = a.email,
          d = a.newEmail;a = a.requestType;if (!c || !a) throw Error("Invalid provider user info!");b.fromEmail = d || null;b.email = c;N(this, "operation", a);N(this, "data", fg(b));
    };var Li = function Li(a, b, c, d, e, f) {
      this.fg = a;this.mg = b;this.Kf = c;this.Gc = d;this.fe = e;this.ng = !!f;this.ub = null;this.Sa = this.Gc;if (this.fe < this.Gc) throw Error("Proactive refresh lower bound greater than upper bound!");
    };Li.prototype.start = function () {
      this.Sa = this.Gc;Mi(this, !0);
    };
    var Ni = function Ni(a, b) {
      if (b) return a.Sa = a.Gc, a.Kf();b = a.Sa;a.Sa *= 2;a.Sa > a.fe && (a.Sa = a.fe);return b;
    },
        Mi = function Mi(a, b) {
      a.stop();a.ub = Be(Ni(a, b)).then(function () {
        return a.ng ? D() : Xf();
      }).then(function () {
        return a.fg();
      }).then(function () {
        Mi(a, !0);
      }).g(function (b) {
        a.mg(b) && Mi(a, !1);
      });
    };Li.prototype.stop = function () {
      this.ub && (this.ub.cancel(), this.ub = null);
    };var Ui = function Ui(a) {
      var b = {};b["facebook.com"] = Oi;b["google.com"] = Pi;b["github.com"] = Qi;b["twitter.com"] = Ri;var c = a && a.providerId;try {
        if (c) return b[c] ? new b[c](a) : new Si(a);if ("undefined" !== typeof a.idToken) return new Ti(a);
      } catch (d) {}return null;
    },
        Ti = function Ti(a) {
      var b = a.providerId;if (!b && a.idToken) {
        var c = qg(a.idToken);c && c.Rd && (b = c.Rd);
      }if (!b) throw Error("Invalid additional user info!");a = !!a.isNewUser;N(this, "providerId", b);N(this, "isNewUser", a);
    },
        Si = function Si(a) {
      Ti.call(this, a);a = Rf(a.rawUserInfo || "{}");
      N(this, "profile", fg(a || {}));
    };t(Si, Ti);var Oi = function Oi(a) {
      Si.call(this, a);if ("facebook.com" != this.providerId) throw Error("Invalid provider id!");
    };t(Oi, Si);var Qi = function Qi(a) {
      Si.call(this, a);if ("github.com" != this.providerId) throw Error("Invalid provider id!");N(this, "username", this.profile && this.profile.login || null);
    };t(Qi, Si);var Pi = function Pi(a) {
      Si.call(this, a);if ("google.com" != this.providerId) throw Error("Invalid provider id!");
    };t(Pi, Si);
    var Ri = function Ri(a) {
      Si.call(this, a);if ("twitter.com" != this.providerId) throw Error("Invalid provider id!");N(this, "username", a.screenName || null);
    };t(Ri, Si);var Vi = { LOCAL: "local", NONE: "none", SESSION: "session" },
        Wi = function Wi(a) {
      var b = new O("invalid-persistence-type"),
          c = new O("unsupported-persistence-type");a: {
        for (d in Vi) {
          if (Vi[d] == a) {
            var d = !0;break a;
          }
        }d = !1;
      }if (!d || "string" !== typeof a) throw b;switch (Gf()) {case "ReactNative":
          if ("session" === a) throw c;break;case "Node":
          if ("none" !== a) throw c;break;default:
          if (!Lf() && "none" !== a) throw c;}
    },
        Xi = function Xi(a, b, c, d) {
      this.Me = a;this.Xd = b;this.og = c;this.Ve = d;this.S = {};Fi || (Fi = new Ei());a = Fi;try {
        if (qf()) {
          ui || (ui = new ti("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1));var e = ui;
        } else e = new a.se.D();this.Se = e;
      } catch (f) {
        this.Se = new ni(), this.Ve = !0;
      }try {
        this.af = new a.se.ee();
      } catch (f) {
        this.af = new ni();
      }this.Qf = new ni();this.de = _r(this.Ze, this);this.N = {};
    },
        Yi,
        Zi = function Zi() {
      Yi || (Yi = new Xi("firebase", ":", !Sf(L()) && Ff() ? !0 : !1, Of()));return Yi;
    },
        $i = function $i(a, b) {
      switch (b) {case "session":
          return a.af;case "none":
          return a.Qf;default:
          return a.Se;}
    };h = Xi.prototype;h.ca = function (a, b) {
      return this.Me + this.Xd + a.name + (b ? this.Xd + b : "");
    };
    h.get = function (a, b) {
      return $i(this, a.D).get(this.ca(a, b));
    };h.remove = function (a, b) {
      b = this.ca(a, b);"local" == a.D && (this.N[b] = null);return $i(this, a.D).remove(b);
    };h.set = function (a, b, c) {
      var d = this.ca(a, c),
          e = this,
          f = $i(this, a.D);return f.set(d, b).then(function () {
        return f.get(d);
      }).then(function (b) {
        "local" == a.D && (e.N[d] = b);
      });
    };
    h.addListener = function (a, b, c) {
      a = this.ca(a, b);"undefined" !== typeof k.localStorage && "function" === typeof k.localStorage.getItem && (this.N[a] = k.localStorage.getItem(a));ib(this.S) && this.ce();this.S[a] || (this.S[a] = []);this.S[a].push(c);
    };h.removeListener = function (a, b, c) {
      a = this.ca(a, b);this.S[a] && (Ya(this.S[a], function (a) {
        return a == c;
      }), 0 == this.S[a].length && delete this.S[a]);ib(this.S) && this.Sc();
    };h.ce = function () {
      $i(this, "local").jb(this.de);this.Ve || qf() || aj(this);
    };
    var aj = function aj(a) {
      bj(a);a.Fd = setInterval(function () {
        for (var b in a.S) {
          var c = k.localStorage.getItem(b),
              d = a.N[b];c != d && (a.N[b] = c, c = new Yb({ type: "storage", key: b, target: window, oldValue: d, newValue: c, Md: !0 }), a.Ze(c));
        }
      }, 1E3);
    },
        bj = function bj(a) {
      a.Fd && (clearInterval(a.Fd), a.Fd = null);
    };Xi.prototype.Sc = function () {
      $i(this, "local").$a(this.de);bj(this);
    };
    Xi.prototype.Ze = function (a) {
      if (a && a.Hf) {
        var b = a.R.key;if (null == b) for (var c in this.S) {
          var d = this.N[c];"undefined" === typeof d && (d = null);var e = k.localStorage.getItem(c);e !== d && (this.N[c] = e, this.hd(c));
        } else if (0 == b.indexOf(this.Me + this.Xd) && this.S[b]) {
          "undefined" !== typeof a.R.Md ? $i(this, "local").$a(this.de) : bj(this);if (this.og) if (c = k.localStorage.getItem(b), d = a.R.newValue, d !== c) null !== d ? k.localStorage.setItem(b, d) : k.localStorage.removeItem(b);else if (this.N[b] === d && "undefined" === typeof a.R.Md) return;
          var f = this;c = function c() {
            if ("undefined" !== typeof a.R.Md || f.N[b] !== k.localStorage.getItem(b)) f.N[b] = k.localStorage.getItem(b), f.hd(b);
          };z && Cb && 10 == Cb && k.localStorage.getItem(b) !== a.R.newValue && a.R.newValue !== a.R.oldValue ? setTimeout(c, 10) : c();
        }
      } else x(a, _r(this.hd, this));
    };Xi.prototype.hd = function (a) {
      this.S[a] && x(this.S[a], function (a) {
        a();
      });
    };var cj = function cj(a, b) {
      this.j = a;this.h = b || Zi();
    },
        dj = { name: "authEvent", D: "local" },
        ej = function ej(a) {
      return a.h.get(dj, a.j).then(function (a) {
        return ng(a);
      });
    };cj.prototype.ib = function (a) {
      this.h.addListener(dj, this.j, a);
    };cj.prototype.dc = function (a) {
      this.h.removeListener(dj, this.j, a);
    };var fj = function fj(a) {
      this.h = a || Zi();
    },
        gj = { name: "sessionId", D: "session" };fj.prototype.tc = function (a) {
      return this.h.get(gj, a);
    };var hj = function hj(a, b, c, d, e, f, g) {
      this.B = a;this.m = b;this.o = c;this.La = d || null;this.P = g || null;this.$e = b + ":" + c;this.pg = new fj();this.xe = new cj(this.$e);this.Ad = null;this.ta = [];this.Vf = e || 500;this.ig = f || 2E3;this.Rb = this.Jc = null;
    },
        ij = function ij(a) {
      return new O("invalid-cordova-configuration", a);
    };
    hj.prototype.Ra = function () {
      return this.Tb ? this.Tb : this.Tb = Df().then(function () {
        if ("function" !== typeof M("universalLinks.subscribe", k)) throw ij("cordova-universal-links-plugin is not installed");if ("undefined" === typeof M("BuildInfo.packageName", k)) throw ij("cordova-plugin-buildinfo is not installed");if ("function" !== typeof M("cordova.plugins.browsertab.openUrl", k)) throw ij("cordova-plugin-browsertab is not installed");if ("function" !== typeof M("cordova.InAppBrowser.open", k)) throw ij("cordova-plugin-inappbrowser is not installed");
      }, function () {
        throw new O("cordova-not-ready");
      });
    };var jj = function jj() {
      for (var a = 20, b = []; 0 < a;) {
        b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
      }return b.join("");
    },
        kj = function kj(a) {
      var b = new Sb();b.update(a);return ab(b.digest());
    };h = hj.prototype;h.ec = function (a, b) {
      b(new O("operation-not-supported-in-this-environment"));return D();
    };h.$b = function () {
      return E(new O("operation-not-supported-in-this-environment"));
    };h.bf = function () {
      return !1;
    };h.Ye = function () {
      return !0;
    };
    h.Be = function () {
      return !0;
    };
    h.ac = function (a, b, c) {
      if (this.Jc) return E(new O("redirect-operation-pending"));var d = this,
          e = k.document,
          f = null,
          g = null,
          l = null,
          n = null;return this.Jc = Ed(D().then(function () {
        Sg(b);return lj(d);
      }).then(function () {
        return mj(d, a, b, c);
      }).then(function () {
        return new C(function (a, b) {
          g = function g() {
            var b = M("cordova.plugins.browsertab.close", k);a();"function" === typeof b && b();d.Rb && "function" === typeof d.Rb.close && (d.Rb.close(), d.Rb = null);return !1;
          };d.ib(g);l = function l() {
            f || (f = Be(d.ig).then(function () {
              b(new O("redirect-cancelled-by-user"));
            }));
          };n = function n() {
            Wf() && l();
          };e.addEventListener("resume", l, !1);L().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", n, !1);
        }).g(function (a) {
          return nj(d).then(function () {
            throw a;
          });
        });
      }), function () {
        l && e.removeEventListener("resume", l, !1);n && e.removeEventListener("visibilitychange", n, !1);f && f.cancel();g && d.dc(g);d.Jc = null;
      });
    };
    var mj = function mj(a, b, c, d) {
      var e = jj(),
          f = new mg(b, d, null, e, new O("no-auth-event")),
          g = M("BuildInfo.packageName", k);if ("string" !== typeof g) throw new O("invalid-cordova-configuration");var l = M("BuildInfo.displayName", k),
          n = {};if (L().toLowerCase().match(/iphone|ipad|ipod/)) n.ibi = g;else if (L().toLowerCase().match(/android/)) n.apn = g;else return E(new O("operation-not-supported-in-this-environment"));l && (n.appDisplayName = l);e = kj(e);n.sessionId = e;var F = ci(a.B, a.m, a.o, b, c, null, d, a.La, n, a.P);return a.Ra().then(function () {
        var b = a.$e;return a.pg.h.set(dj, f.A(), b);
      }).then(function () {
        var b = M("cordova.plugins.browsertab.isAvailable", k);if ("function" !== typeof b) throw new O("invalid-cordova-configuration");var c = null;b(function (b) {
          if (b) {
            c = M("cordova.plugins.browsertab.openUrl", k);if ("function" !== typeof c) throw new O("invalid-cordova-configuration");c(F);
          } else {
            c = M("cordova.InAppBrowser.open", k);if ("function" !== typeof c) throw new O("invalid-cordova-configuration");b = c;var d = L();d = !(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
            a.Rb = b(F, d ? "_blank" : "_system", "location=yes");
          }
        });
      });
    };hj.prototype.Lb = function (a) {
      for (var b = 0; b < this.ta.length; b++) {
        try {
          this.ta[b](a);
        } catch (c) {}
      }
    };
    var lj = function lj(a) {
      a.Ad || (a.Ad = a.Ra().then(function () {
        return new C(function (b) {
          var c = function c(d) {
            b(d);a.dc(c);return !1;
          };a.ib(c);oj(a);
        });
      }));return a.Ad;
    },
        nj = function nj(a) {
      var b = null;return ej(a.xe).then(function (c) {
        b = c;c = a.xe;return c.h.remove(dj, c.j);
      }).then(function () {
        return b;
      });
    },
        oj = function oj(a) {
      var b = M("universalLinks.subscribe", k);if ("function" !== typeof b) throw new O("invalid-cordova-configuration");var c = new mg("unknown", null, null, null, new O("no-auth-event")),
          d = !1,
          e = Be(a.Vf).then(function () {
        return nj(a).then(function () {
          d || a.Lb(c);
        });
      }),
          f = function f(b) {
        d = !0;e && e.cancel();nj(a).then(function (d) {
          var e = c;if (d && b && b.url) {
            e = null;var f = b.url;var g = gf(f),
                l = ff(g, "link"),
                n = ff(gf(l), "link");g = ff(g, "deep_link_id");f = ff(gf(g), "link") || g || n || l || f;-1 != f.indexOf("/__/auth/callback") && (e = gf(f), e = Rf(ff(e, "firebaseError") || null), e = (e = "object" === typeof e ? lg(e) : null) ? new mg(d.ma, d.Y, null, null, e) : new mg(d.ma, d.Y, f, d.tc()));e = e || c;
          }a.Lb(e);
        });
      },
          g = k.handleOpenURL;k.handleOpenURL = function (a) {
        0 == a.toLowerCase().indexOf(M("BuildInfo.packageName", k).toLowerCase() + "://") && f({ url: a });if ("function" === typeof g) try {
          g(a);
        } catch (n) {
          console.error(n);
        }
      };b(null, f);
    };hj.prototype.ib = function (a) {
      this.ta.push(a);lj(this).g(function (b) {
        "auth/invalid-cordova-configuration" === b.code && (b = new mg("unknown", null, null, null, new O("no-auth-event")), a(b));
      });
    };hj.prototype.dc = function (a) {
      Ya(this.ta, function (b) {
        return b == a;
      });
    };var pj = function pj(a) {
      this.j = a;this.h = Zi();
    },
        qj = { name: "pendingRedirect", D: "session" },
        rj = function rj(a) {
      return a.h.set(qj, "pending", a.j);
    },
        sj = function sj(a) {
      return a.h.remove(qj, a.j);
    },
        tj = function tj(a) {
      return a.h.get(qj, a.j).then(function (a) {
        return "pending" == a;
      });
    };var xj = function xj(a, b, c) {
      this.B = a;this.m = b;this.o = c;this.gc = [];this.sb = !1;this.ed = _r(this.vd, this);this.Xa = new uj(this);this.Od = new vj(this);this.Xb = new pj(this.m + ":" + this.o);this.Ia = {};this.Ia.unknown = this.Xa;this.Ia.signInViaRedirect = this.Xa;this.Ia.linkViaRedirect = this.Xa;this.Ia.reauthViaRedirect = this.Xa;this.Ia.signInViaPopup = this.Od;this.Ia.linkViaPopup = this.Od;this.Ia.reauthViaPopup = this.Od;this.Z = wj(this.B, this.m, this.o, pf);
    },
        wj = function wj(a, b, c, d) {
      var e = firebase.SDK_VERSION || null;return Cf() ? new hj(a, b, c, e, void 0, void 0, d) : new Yh(a, b, c, e, d);
    };xj.prototype.reset = function () {
      this.sb = !1;this.Z.dc(this.ed);this.Z = wj(this.B, this.m, this.o);
    };xj.prototype.Sb = function () {
      var a = this;this.sb || (this.sb = !0, this.Z.ib(this.ed));var b = this.Z;return this.Z.Ra().g(function (c) {
        a.Z == b && a.reset();throw c;
      });
    };var Aj = function Aj(a) {
      a.Z.Ye() && a.Sb().g(function (b) {
        var c = new mg("unknown", null, null, null, new O("operation-not-supported-in-this-environment"));yj(b) && a.vd(c);
      });a.Z.Be() || zj(a.Xa);
    };
    xj.prototype.subscribe = function (a) {
      Va(this.gc, a) || this.gc.push(a);if (!this.sb) {
        var b = this;tj(this.Xb).then(function (a) {
          a ? sj(b.Xb).then(function () {
            b.Sb().g(function (a) {
              var c = new mg("unknown", null, null, null, new O("operation-not-supported-in-this-environment"));yj(a) && b.vd(c);
            });
          }) : Aj(b);
        }).g(function () {
          Aj(b);
        });
      }
    };xj.prototype.unsubscribe = function (a) {
      Ya(this.gc, function (b) {
        return b == a;
      });
    };
    xj.prototype.vd = function (a) {
      if (!a) throw new O("invalid-auth-event");for (var b = !1, c = 0; c < this.gc.length; c++) {
        var d = this.gc[c];if (d.ke(a.ma, a.Y)) {
          (b = this.Ia[a.ma]) && b.Te(a, d);b = !0;break;
        }
      }zj(this.Xa);return b;
    };var Bj = new Vf(2E3, 1E4),
        Cj = new Vf(3E4, 6E4);xj.prototype.getRedirectResult = function () {
      return this.Xa.getRedirectResult();
    };xj.prototype.$b = function (a, b, c, d, e) {
      var f = this;return this.Z.$b(a, b, c, function () {
        f.sb || (f.sb = !0, f.Z.ib(f.ed));
      }, function () {
        f.reset();
      }, d, e);
    };
    var yj = function yj(a) {
      return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
    };xj.prototype.ac = function (a, b, c) {
      var d = this,
          e;return rj(this.Xb).then(function () {
        return d.Z.ac(a, b, c).g(function (a) {
          if (yj(a)) throw new O("operation-not-supported-in-this-environment");e = a;return sj(d.Xb).then(function () {
            throw e;
          });
        }).then(function () {
          return d.Z.bf() ? new C(function () {}) : sj(d.Xb).then(function () {
            return d.getRedirectResult();
          }).then(function () {}).g(function () {});
        });
      });
    };
    xj.prototype.ec = function (a, b, c, d) {
      return this.Z.ec(c, function (c) {
        a.bb(b, null, c, d);
      }, Bj.get());
    };var Dj = {},
        Ej = function Ej(a, b, c) {
      var d = b + ":" + c;Dj[d] || (Dj[d] = new xj(a, b, c));return Dj[d];
    },
        uj = function uj(a) {
      this.h = a;this.Ab = null;this.cc = [];this.bc = [];this.yb = null;this.Sd = !1;
    };uj.prototype.reset = function () {
      this.Ab = null;this.yb && (this.yb.cancel(), this.yb = null);
    };
    uj.prototype.Te = function (a, b) {
      if (!a) return E(new O("invalid-auth-event"));this.reset();this.Sd = !0;var c = a.ma,
          d = a.Y,
          e = a.getError() && "auth/web-storage-unsupported" == a.getError().code,
          f = a.getError() && "auth/operation-not-supported-in-this-environment" == a.getError().code;"unknown" != c || e || f ? a = a.ba ? this.Pd(a, b) : b.Nb(c, d) ? this.Qd(a, b) : E(new O("invalid-auth-event")) : (Fj(this, !1, null, null), a = D());return a;
    };var zj = function zj(a) {
      a.Sd || (a.Sd = !0, Fj(a, !1, null, null));
    };
    uj.prototype.Pd = function (a) {
      Fj(this, !0, null, a.getError());return D();
    };uj.prototype.Qd = function (a, b) {
      var c = this;b = b.Nb(a.ma, a.Y);var d = a.Eb,
          e = a.tc(),
          f = !!a.ma.match(/Redirect$/);return b(d, e).then(function (a) {
        Fj(c, f, a, null);
      }).g(function (a) {
        Fj(c, f, null, a);
      });
    };
    var Gj = function Gj(a, b) {
      a.Ab = function () {
        return E(b);
      };if (a.bc.length) for (var c = 0; c < a.bc.length; c++) {
        a.bc[c](b);
      }
    },
        Hj = function Hj(a, b) {
      a.Ab = function () {
        return D(b);
      };if (a.cc.length) for (var c = 0; c < a.cc.length; c++) {
        a.cc[c](b);
      }
    },
        Fj = function Fj(a, b, c, d) {
      b ? d ? Gj(a, d) : Hj(a, c) : Hj(a, { user: null });a.cc = [];a.bc = [];
    };uj.prototype.getRedirectResult = function () {
      var a = this;return new C(function (b, c) {
        a.Ab ? a.Ab().then(b, c) : (a.cc.push(b), a.bc.push(c), Ij(a));
      });
    };
    var Ij = function Ij(a) {
      var b = new O("timeout");a.yb && a.yb.cancel();a.yb = Be(Cj.get()).then(function () {
        a.Ab || Fj(a, !0, null, b);
      });
    },
        vj = function vj(a) {
      this.h = a;
    };vj.prototype.Te = function (a, b) {
      if (!a) return E(new O("invalid-auth-event"));var c = a.ma,
          d = a.Y;return a.ba ? this.Pd(a, b) : b.Nb(c, d) ? this.Qd(a, b) : E(new O("invalid-auth-event"));
    };vj.prototype.Pd = function (a, b) {
      b.bb(a.ma, null, a.getError(), a.Y);return D();
    };
    vj.prototype.Qd = function (a, b) {
      var c = a.Y,
          d = a.ma,
          e = b.Nb(d, c),
          f = a.Eb;a = a.tc();return e(f, a).then(function (a) {
        b.bb(d, a, null, c);
      }).g(function (a) {
        b.bb(d, null, a, c);
      });
    };var Jj = function Jj(a) {
      this.f = a;this.Ja = this.fa = null;this.Na = 0;
    };Jj.prototype.A = function () {
      return { apiKey: this.f.m, refreshToken: this.fa, accessToken: this.Ja, expirationTime: this.Na };
    };
    var Lj = function Lj(a, b) {
      var c = b.idToken,
          d = b.refreshToken;b = Kj(b.expiresIn);a.Ja = c;a.Na = b;a.fa = d;
    },
        Kj = function Kj(a) {
      return ma() + 1E3 * parseInt(a, 10);
    },
        Mj = function Mj(a, b) {
      return hh(a.f, b).then(function (b) {
        a.Ja = b.access_token;a.Na = Kj(b.expires_in);a.fa = b.refresh_token;return { accessToken: a.Ja, expirationTime: a.Na, refreshToken: a.fa };
      }).g(function (b) {
        "auth/user-token-expired" == b.code && (a.fa = null);throw b;
      });
    };
    Jj.prototype.getToken = function (a) {
      a = !!a;return this.Ja && !this.fa ? E(new O("user-token-expired")) : a || !this.Ja || ma() > this.Na - 3E4 ? this.fa ? Mj(this, { grant_type: "refresh_token", refresh_token: this.fa }) : D(null) : D({ accessToken: this.Ja, expirationTime: this.Na, refreshToken: this.fa });
    };var Nj = function Nj(a, b) {
      this.pe = a || null;this.Je = b || null;bg(this, { lastSignInTime: Yf(b || null), creationTime: Yf(a || null) });
    };Nj.prototype.clone = function () {
      return new Nj(this.pe, this.Je);
    };Nj.prototype.A = function () {
      return { lastLoginAt: this.Je, createdAt: this.pe };
    };var Oj = function Oj(a, b, c, d, e, f) {
      bg(this, { uid: a, displayName: d || null, photoURL: e || null, email: c || null, phoneNumber: f || null, providerId: b });
    },
        Pj = function Pj(a, b) {
      B.call(this, a);for (var c in b) {
        this[c] = b[c];
      }
    };t(Pj, B);
    var S = function S(a, b, c) {
      this.J = [];this.m = a.apiKey;this.o = a.appName;this.B = a.authDomain || null;a = firebase.SDK_VERSION ? Jf(firebase.SDK_VERSION) : null;this.f = new R(this.m, of(pf), a);this.ra = new Jj(this.f);Qj(this, b.idToken);Lj(this.ra, b);N(this, "refreshToken", this.ra.fa);Rj(this, c || {});G.call(this);this.Kc = !1;this.B && Nf() && (this.v = Ej(this.B, this.m, this.o));this.Rc = [];this.sa = null;this.wb = Sj(this);this.Gb = _r(this.wd, this);var d = this;this.ia = null;this.Pe = function (a) {
        d.Cb(a.languageCode);
      };this.Dd = null;this.M = [];this.Oe = function (a) {
        Tj(d, a.Ff);
      };this.sd = null;
    };t(S, G);S.prototype.Cb = function (a) {
      this.ia = a;ah(this.f, a);
    };var Uj = function Uj(a, b) {
      a.Dd && tc(a.Dd, "languageCodeChanged", a.Pe);(a.Dd = b) && lc(b, "languageCodeChanged", a.Pe);
    },
        Tj = function Tj(a, b) {
      a.M = b;bh(a.f, firebase.SDK_VERSION ? Jf(firebase.SDK_VERSION, a.M) : null);
    },
        Vj = function Vj(a, b) {
      a.sd && tc(a.sd, "frameworkChanged", a.Oe);(a.sd = b) && lc(b, "frameworkChanged", a.Oe);
    };S.prototype.wd = function () {
      this.wb.ub && (this.wb.stop(), this.wb.start());
    };
    var Wj = function Wj(a) {
      try {
        return firebase.app(a.o).auth();
      } catch (b) {
        throw new O("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.o + "'!");
      }
    },
        Sj = function Sj(a) {
      return new Li(function () {
        return a.getIdToken(!0);
      }, function (a) {
        return a && "auth/network-request-failed" == a.code ? !0 : !1;
      }, function () {
        var b = a.ra.Na - ma() - 3E5;return 0 < b ? b : 0;
      }, 3E4, 96E4, !1);
    },
        Xj = function Xj(a) {
      a.Kb || a.wb.ub || (a.wb.start(), tc(a, "tokenChanged", a.Gb), lc(a, "tokenChanged", a.Gb));
    },
        Yj = function Yj(a) {
      tc(a, "tokenChanged", a.Gb);a.wb.stop();
    },
        Qj = function Qj(a, b) {
      a.Ie = b;N(a, "_lat", b);
    },
        Zj = function Zj(a, b) {
      Ya(a.Rc, function (a) {
        return a == b;
      });
    },
        ak = function ak(a) {
      for (var b = [], c = 0; c < a.Rc.length; c++) {
        b.push(a.Rc[c](a));
      }return Bd(b).then(function () {
        return a;
      });
    },
        bk = function bk(a) {
      a.v && !a.Kc && (a.Kc = !0, a.v.subscribe(a));
    },
        Rj = function Rj(a, b) {
      bg(a, { uid: b.uid, displayName: b.displayName || null, photoURL: b.photoURL || null, email: b.email || null, emailVerified: b.emailVerified || !1, phoneNumber: b.phoneNumber || null, isAnonymous: b.isAnonymous || !1, metadata: new Nj(b.createdAt, b.lastLoginAt), providerData: [] });
    };N(S.prototype, "providerId", "firebase");var ck = function ck() {},
        dk = function dk(a) {
      return D().then(function () {
        if (a.Kb) throw new O("app-deleted");
      });
    },
        ek = function ek(a) {
      return Ra(a.providerData, function (a) {
        return a.providerId;
      });
    },
        gk = function gk(a, b) {
      b && (fk(a, b.providerId), a.providerData.push(b));
    },
        fk = function fk(a, b) {
      Ya(a.providerData, function (a) {
        return a.providerId == b;
      });
    },
        hk = function hk(a, b, c) {
      ("uid" != b || c) && a.hasOwnProperty(b) && N(a, b, c);
    };
    S.prototype.copy = function (a) {
      var b = this;b != a && (bg(this, { uid: a.uid, displayName: a.displayName, photoURL: a.photoURL, email: a.email, emailVerified: a.emailVerified, phoneNumber: a.phoneNumber, isAnonymous: a.isAnonymous, providerData: [] }), a.metadata ? N(this, "metadata", a.metadata.clone()) : N(this, "metadata", new Nj()), x(a.providerData, function (a) {
        gk(b, a);
      }), this.ra = a.ra, N(this, "refreshToken", this.ra.fa));
    };S.prototype.reload = function () {
      var a = this;return this.c(dk(this).then(function () {
        return ik(a).then(function () {
          return ak(a);
        }).then(ck);
      }));
    };
    var ik = function ik(a) {
      return a.getIdToken().then(function (b) {
        var c = a.isAnonymous;return jk(a, b).then(function () {
          c || hk(a, "isAnonymous", !1);return b;
        });
      });
    };S.prototype.getIdToken = function (a) {
      var b = this;return this.c(dk(this).then(function () {
        return b.ra.getToken(a);
      }).then(function (a) {
        if (!a) throw new O("internal-error");a.accessToken != b.Ie && (Qj(b, a.accessToken), b.Ta());hk(b, "refreshToken", a.refreshToken);return a.accessToken;
      }));
    };
    S.prototype.getToken = function (a) {
      Zf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] || (Zf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] = !0, "undefined" !== typeof console && "function" === typeof console.warn && console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.getIdToken(a);
    };
    var kk = function kk(a, b) {
      b.idToken && a.Ie != b.idToken && (Lj(a.ra, b), a.Ta(), Qj(a, b.idToken), hk(a, "refreshToken", a.ra.fa));
    };S.prototype.Ta = function () {
      this.dispatchEvent(new Pj("tokenChanged"));
    };var jk = function jk(a, b) {
      return Q(a.f, Kh, { idToken: b }).then(_r(a.gg, a));
    };
    S.prototype.gg = function (a) {
      a = a.users;if (!a || !a.length) throw new O("internal-error");a = a[0];Rj(this, { uid: a.localId, displayName: a.displayName, photoURL: a.photoUrl, email: a.email, emailVerified: !!a.emailVerified, phoneNumber: a.phoneNumber, lastLoginAt: a.lastLoginAt, createdAt: a.createdAt });for (var b = lk(a), c = 0; c < b.length; c++) {
        gk(this, b[c]);
      }hk(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
    };
    var lk = function lk(a) {
      return (a = a.providerUserInfo) && a.length ? Ra(a, function (a) {
        return new Oj(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl, a.phoneNumber);
      }) : [];
    };S.prototype.reauthenticateAndRetrieveDataWithCredential = function (a) {
      var b = this,
          c = null;return this.c(a.Gd(this.f, this.uid).then(function (a) {
        kk(b, a);c = mk(b, a, "reauthenticate");b.sa = null;return b.reload();
      }).then(function () {
        return c;
      }), !0);
    };S.prototype.reauthenticateWithCredential = function (a) {
      return this.reauthenticateAndRetrieveDataWithCredential(a).then(function () {});
    };
    var nk = function nk(a, b) {
      return ik(a).then(function () {
        if (Va(ek(a), b)) return ak(a).then(function () {
          throw new O("provider-already-linked");
        });
      });
    };S.prototype.linkAndRetrieveDataWithCredential = function (a) {
      var b = this,
          c = null;return this.c(nk(this, a.providerId).then(function () {
        return b.getIdToken();
      }).then(function (c) {
        return a.Fc(b.f, c);
      }).then(function (a) {
        c = mk(b, a, "link");return ok(b, a);
      }).then(function () {
        return c;
      }));
    };S.prototype.linkWithCredential = function (a) {
      return this.linkAndRetrieveDataWithCredential(a).then(function (a) {
        return a.user;
      });
    };
    S.prototype.linkWithPhoneNumber = function (a, b) {
      var c = this;return this.c(nk(this, "phone").then(function () {
        return Ji(Wj(c), a, b, _r(c.linkAndRetrieveDataWithCredential, c));
      }));
    };S.prototype.reauthenticateWithPhoneNumber = function (a, b) {
      var c = this;return this.c(D().then(function () {
        return Ji(Wj(c), a, b, _r(c.reauthenticateAndRetrieveDataWithCredential, c));
      }), !0);
    };var mk = function mk(a, b, c) {
      var d = Rg(b);b = Ui(b);return cg({ user: a, credential: d, additionalUserInfo: b, operationType: c });
    },
        ok = function ok(a, b) {
      kk(a, b);return a.reload().then(function () {
        return a;
      });
    };
    h = S.prototype;h.updateEmail = function (a) {
      var b = this;return this.c(this.getIdToken().then(function (c) {
        return b.f.updateEmail(c, a);
      }).then(function (a) {
        kk(b, a);return b.reload();
      }));
    };h.updatePhoneNumber = function (a) {
      var b = this;return this.c(this.getIdToken().then(function (c) {
        return a.Fc(b.f, c);
      }).then(function (a) {
        kk(b, a);return b.reload();
      }));
    };h.updatePassword = function (a) {
      var b = this;return this.c(this.getIdToken().then(function (c) {
        return b.f.updatePassword(c, a);
      }).then(function (a) {
        kk(b, a);return b.reload();
      }));
    };
    h.updateProfile = function (a) {
      if (void 0 === a.displayName && void 0 === a.photoURL) return dk(this);var b = this;return this.c(this.getIdToken().then(function (c) {
        return b.f.updateProfile(c, { displayName: a.displayName, photoUrl: a.photoURL });
      }).then(function (a) {
        kk(b, a);hk(b, "displayName", a.displayName || null);hk(b, "photoURL", a.photoUrl || null);x(b.providerData, function (a) {
          "password" === a.providerId && (N(a, "displayName", b.displayName), N(a, "photoURL", b.photoURL));
        });return ak(b);
      }).then(ck));
    };
    h.unlink = function (a) {
      var b = this;return this.c(ik(this).then(function (c) {
        return Va(ek(b), a) ? yh(b.f, c, [a]).then(function (a) {
          var c = {};x(a.providerUserInfo || [], function (a) {
            c[a.providerId] = !0;
          });x(ek(b), function (a) {
            c[a] || fk(b, a);
          });c[Og.PROVIDER_ID] || N(b, "phoneNumber", null);return ak(b);
        }) : ak(b).then(function () {
          throw new O("no-such-provider");
        });
      }));
    };
    h["delete"] = function () {
      var a = this;return this.c(this.getIdToken().then(function (b) {
        return Q(a.f, Jh, { idToken: b });
      }).then(function () {
        a.dispatchEvent(new Pj("userDeleted"));
      })).then(function () {
        for (var b = 0; b < a.J.length; b++) {
          a.J[b].cancel("app-deleted");
        }Uj(a, null);Vj(a, null);a.J = [];a.Kb = !0;Yj(a);N(a, "refreshToken", null);a.v && a.v.unsubscribe(a);
      });
    };
    h.ke = function (a, b) {
      return "linkViaPopup" == a && (this.la || null) == b && this.ka || "reauthViaPopup" == a && (this.la || null) == b && this.ka || "linkViaRedirect" == a && (this.Ha || null) == b || "reauthViaRedirect" == a && (this.Ha || null) == b ? !0 : !1;
    };h.bb = function (a, b, c, d) {
      "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.la || null) || (c && this.Va ? this.Va(c) : b && !c && this.ka && this.ka(b), this.K && (this.K.cancel(), this.K = null), delete this.ka, delete this.Va);
    };
    h.Nb = function (a, b) {
      return "linkViaPopup" == a && b == (this.la || null) ? _r(this.ue, this) : "reauthViaPopup" == a && b == (this.la || null) ? _r(this.ve, this) : "linkViaRedirect" == a && (this.Ha || null) == b ? _r(this.ue, this) : "reauthViaRedirect" == a && (this.Ha || null) == b ? _r(this.ve, this) : null;
    };h.sc = function () {
      return Kf(this.uid + ":::");
    };h.linkWithPopup = function (a) {
      var b = this;return pk(this, "linkViaPopup", a, function () {
        return nk(b, a.providerId).then(function () {
          return ak(b);
        });
      }, !1);
    };
    h.reauthenticateWithPopup = function (a) {
      return pk(this, "reauthViaPopup", a, function () {
        return D();
      }, !0);
    };
    var pk = function pk(a, b, c, d, e) {
      if (!Nf()) return E(new O("operation-not-supported-in-this-environment"));if (a.sa && !e) return E(a.sa);var f = jg(c.providerId),
          g = a.sc(),
          l = null;(!Of() || Ff()) && a.B && c.isOAuthProvider && (l = ci(a.B, a.m, a.o, b, c, null, g, firebase.SDK_VERSION || null));var n = yf(l, f && f.Zb, f && f.Yb);d = d().then(function () {
        qk(a);if (!e) return a.getIdToken().then(function () {});
      }).then(function () {
        return a.v.$b(n, b, c, g, !!l);
      }).then(function () {
        return new C(function (c, d) {
          a.bb(b, null, new O("cancelled-popup-request"), a.la || null);a.ka = c;a.Va = d;a.la = g;a.K = a.v.ec(a, b, n, g);
        });
      }).then(function (a) {
        n && xf(n);return a ? cg(a) : null;
      }).g(function (a) {
        n && xf(n);throw a;
      });return a.c(d, e);
    };S.prototype.linkWithRedirect = function (a) {
      var b = this;return rk(this, "linkViaRedirect", a, function () {
        return nk(b, a.providerId);
      }, !1);
    };S.prototype.reauthenticateWithRedirect = function (a) {
      return rk(this, "reauthViaRedirect", a, function () {
        return D();
      }, !0);
    };
    var rk = function rk(a, b, c, d, e) {
      if (!Nf()) return E(new O("operation-not-supported-in-this-environment"));if (a.sa && !e) return E(a.sa);var f = null,
          g = a.sc();d = d().then(function () {
        qk(a);if (!e) return a.getIdToken().then(function () {});
      }).then(function () {
        a.Ha = g;return ak(a);
      }).then(function (b) {
        a.Ya && (b = a.Ya, b = b.h.set(sk, a.A(), b.j));return b;
      }).then(function () {
        return a.v.ac(b, c, g);
      }).g(function (b) {
        f = b;if (a.Ya) return tk(a.Ya);throw f;
      }).then(function () {
        if (f) throw f;
      });return a.c(d, e);
    },
        qk = function qk(a) {
      if (!a.v || !a.Kc) {
        if (a.v && !a.Kc) throw new O("internal-error");throw new O("auth-domain-config-required");
      }
    };S.prototype.ue = function (a, b) {
      var c = this;this.K && (this.K.cancel(), this.K = null);var d = null,
          e = this.getIdToken().then(function (d) {
        return vg(c.f, { requestUri: a, sessionId: b, idToken: d });
      }).then(function (a) {
        d = mk(c, a, "link");return ok(c, a);
      }).then(function () {
        return d;
      });return this.c(e);
    };
    S.prototype.ve = function (a, b) {
      var c = this;this.K && (this.K.cancel(), this.K = null);var d = null,
          e = D().then(function () {
        return rg(wg(c.f, { requestUri: a, sessionId: b }), c.uid);
      }).then(function (a) {
        d = mk(c, a, "reauthenticate");kk(c, a);c.sa = null;return c.reload();
      }).then(function () {
        return d;
      });return this.c(e, !0);
    };
    S.prototype.sendEmailVerification = function (a) {
      var b = this,
          c = null;return this.c(this.getIdToken().then(function (b) {
        c = b;return "undefined" === typeof a || ib(a) ? {} : Hi(new Gi(a));
      }).then(function (a) {
        return b.f.sendEmailVerification(c, a);
      }).then(function (a) {
        if (b.email != a) return b.reload();
      }).then(function () {}));
    };S.prototype.c = function (a, b) {
      var c = this,
          d = uk(this, a, b);this.J.push(d);Ed(d, function () {
        Xa(c.J, d);
      });return d;
    };
    var uk = function uk(a, b, c) {
      return a.sa && !c ? (b.cancel(), E(a.sa)) : b.g(function (b) {
        !b || "auth/user-disabled" != b.code && "auth/user-token-expired" != b.code || (a.sa || a.dispatchEvent(new Pj("userInvalidated")), a.sa = b);throw b;
      });
    };S.prototype.toJSON = function () {
      return this.A();
    };
    S.prototype.A = function () {
      var a = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.m, appName: this.o, authDomain: this.B, stsTokenManager: this.ra.A(), redirectEventId: this.Ha || null };this.metadata && mb(a, this.metadata.A());x(this.providerData, function (b) {
        a.providerData.push(dg(b));
      });return a;
    };
    var vk = function vk(a) {
      if (!a.apiKey) return null;var b = { apiKey: a.apiKey, authDomain: a.authDomain, appName: a.appName },
          c = {};if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c.idToken = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - ma()) / 1E3;else return null;var d = new S(b, c, a);a.providerData && x(a.providerData, function (a) {
        a && gk(d, cg(a));
      });a.redirectEventId && (d.Ha = a.redirectEventId);return d;
    },
        wk = function wk(a, b, c, d) {
      var e = new S(a, b);c && (e.Ya = c);d && Tj(e, d);return e.reload().then(function () {
        return e;
      });
    };var xk = function xk(a) {
      this.j = a;this.h = Zi();
    },
        sk = { name: "redirectUser", D: "session" },
        tk = function tk(a) {
      return a.h.remove(sk, a.j);
    },
        yk = function yk(a, b) {
      return a.h.get(sk, a.j).then(function (a) {
        a && b && (a.authDomain = b);return vk(a || {});
      });
    };var Ak = function Ak(a, b) {
      this.j = a;this.h = b || Zi();this.O = null;this.Jd = this.Bd();this.h.addListener(zk("local"), this.j, _r(this.vg, this));
    };Ak.prototype.vg = function () {
      var a = this,
          b = zk("local");Bk(this, function () {
        return D().then(function () {
          return a.O && "local" != a.O.D ? a.h.get(b, a.j) : null;
        }).then(function (c) {
          if (c) return Ck(a, "local").then(function () {
            a.O = b;
          });
        });
      });
    };var Ck = function Ck(a, b) {
      var c = [],
          d;for (d in Vi) {
        Vi[d] !== b && c.push(a.h.remove(zk(Vi[d]), a.j));
      }c.push(a.h.remove(Dk, a.j));return Ad(c);
    };
    Ak.prototype.Bd = function () {
      var a = this,
          b = zk("local"),
          c = zk("session"),
          d = zk("none");return this.h.get(c, this.j).then(function (e) {
        return e ? c : a.h.get(d, a.j).then(function (c) {
          return c ? d : a.h.get(b, a.j).then(function (c) {
            return c ? b : a.h.get(Dk, a.j).then(function (a) {
              return a ? zk(a) : b;
            });
          });
        });
      }).then(function (b) {
        a.O = b;return Ck(a, b.D);
      }).g(function () {
        a.O || (a.O = b);
      });
    };var Dk = { name: "persistence", D: "session" },
        zk = function zk(a) {
      return { name: "authUser", D: a };
    };
    Ak.prototype.setPersistence = function (a) {
      var b = null,
          c = this;Wi(a);return Bk(this, function () {
        return a != c.O.D ? c.h.get(c.O, c.j).then(function (d) {
          b = d;return Ck(c, a);
        }).then(function () {
          c.O = zk(a);if (b) return c.h.set(c.O, b, c.j);
        }) : D();
      });
    };
    var Ek = function Ek(a) {
      return Bk(a, function () {
        return a.h.set(Dk, a.O.D, a.j);
      });
    },
        Fk = function Fk(a, b) {
      return Bk(a, function () {
        return a.h.set(a.O, b.A(), a.j);
      });
    },
        Gk = function Gk(a) {
      return Bk(a, function () {
        return a.h.remove(a.O, a.j);
      });
    },
        Hk = function Hk(a, b) {
      return Bk(a, function () {
        return a.h.get(a.O, a.j).then(function (a) {
          a && b && (a.authDomain = b);return vk(a || {});
        });
      });
    },
        Bk = function Bk(a, b) {
      a.Jd = a.Jd.then(b, b);return a.Jd;
    };var T = function T(a) {
      this.Ea = !1;N(this, "app", a);if (this.i().options && this.i().options.apiKey) a = firebase.SDK_VERSION ? Jf(firebase.SDK_VERSION) : null, this.f = new R(this.i().options && this.i().options.apiKey, of(pf), a);else throw new O("invalid-api-key");this.J = [];this.Ka = [];this.Fb = [];this.cg = firebase.INTERNAL.createSubscribe(_r(this.Sf, this));this.kc = void 0;this.eg = firebase.INTERNAL.createSubscribe(_r(this.Uf, this));Ik(this, null);a = this.i().options.apiKey;var b = this.i().name;this.na = new Ak(a + ":" + b);a = this.i().options.apiKey;
      b = this.i().name;this.zb = new xk(a + ":" + b);this.oc = this.c(Jk(this));this.ya = this.c(Kk(this));this.Cc = !1;this.ud = _r(this.wg, this);this.ef = _r(this.pb, this);this.Gb = _r(this.wd, this);this.cf = _r(this.Of, this);this.df = _r(this.Pf, this);Lk(this);this.INTERNAL = {};this.INTERNAL["delete"] = _r(this["delete"], this);this.INTERNAL.logFramework = _r(this.$f, this);this.Oa = 0;G.call(this);Mk(this);this.M = [];
    };t(T, G);var Nk = function Nk(a) {
      B.call(this, "languageCodeChanged");this.languageCode = a;
    };t(Nk, B);
    var Ok = function Ok(a) {
      B.call(this, "frameworkChanged");this.Ff = a;
    };t(Ok, B);T.prototype.setPersistence = function (a) {
      a = this.na.setPersistence(a);return this.c(a);
    };T.prototype.Cb = function (a) {
      this.ia === a || this.Ea || (this.ia = a, ah(this.f, this.ia), this.dispatchEvent(new Nk(this.ia)));
    };T.prototype.useDeviceLanguage = function () {
      var a = k.navigator;this.Cb(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
    };
    T.prototype.$f = function (a) {
      this.M.push(a);bh(this.f, firebase.SDK_VERSION ? Jf(firebase.SDK_VERSION, this.M) : null);this.dispatchEvent(new Ok(this.M));
    };var Mk = function Mk(a) {
      Object.defineProperty(a, "lc", { get: function get() {
          return this.ia;
        }, set: function set(a) {
          this.Cb(a);
        }, enumerable: !1 });a.ia = null;
    };T.prototype.toJSON = function () {
      return { apiKey: this.i().options.apiKey, authDomain: this.i().options.authDomain, appName: this.i().name, currentUser: U(this) && U(this).A() };
    };
    var Pk = function Pk(a) {
      return a.Af || E(new O("auth-domain-config-required"));
    },
        Lk = function Lk(a) {
      var b = a.i().options.authDomain,
          c = a.i().options.apiKey;b && Nf() && (a.Af = a.oc.then(function () {
        if (!a.Ea) {
          a.v = Ej(b, c, a.i().name);a.v.subscribe(a);U(a) && bk(U(a));if (a.Za) {
            bk(a.Za);var d = a.Za;d.Cb(a.ia);Uj(d, a);d = a.Za;Tj(d, a.M);Vj(d, a);a.Za = null;
          }return a.v;
        }
      }));
    };h = T.prototype;h.ke = function (a, b) {
      switch (a) {case "unknown":case "signInViaRedirect":
          return !0;case "signInViaPopup":
          return this.la == b && !!this.ka;default:
          return !1;}
    };
    h.bb = function (a, b, c, d) {
      "signInViaPopup" == a && this.la == d && (c && this.Va ? this.Va(c) : b && !c && this.ka && this.ka(b), this.K && (this.K.cancel(), this.K = null), delete this.ka, delete this.Va);
    };h.Nb = function (a, b) {
      return "signInViaRedirect" == a || "signInViaPopup" == a && this.la == b && this.ka ? _r(this.Cf, this) : null;
    };
    h.Cf = function (a, b) {
      var c = this;a = { requestUri: a, sessionId: b };this.K && (this.K.cancel(), this.K = null);var d = null,
          e = null,
          f = tg(c.f, a).then(function (a) {
        d = Rg(a);e = Ui(a);return a;
      });a = c.oc.then(function () {
        return f;
      }).then(function (a) {
        return Qk(c, a);
      }).then(function () {
        return cg({ user: U(c), credential: d, additionalUserInfo: e, operationType: "signIn" });
      });return this.c(a);
    };h.sc = function () {
      return Kf();
    };
    h.signInWithPopup = function (a) {
      if (!Nf()) return E(new O("operation-not-supported-in-this-environment"));var b = this,
          c = jg(a.providerId),
          d = this.sc(),
          e = null;(!Of() || Ff()) && this.i().options.authDomain && a.isOAuthProvider && (e = ci(this.i().options.authDomain, this.i().options.apiKey, this.i().name, "signInViaPopup", a, null, d, firebase.SDK_VERSION || null));var f = yf(e, c && c.Zb, c && c.Yb);c = Pk(this).then(function (b) {
        return b.$b(f, "signInViaPopup", a, d, !!e);
      }).then(function () {
        return new C(function (a, c) {
          b.bb("signInViaPopup", null, new O("cancelled-popup-request"), b.la);b.ka = a;b.Va = c;b.la = d;b.K = b.v.ec(b, "signInViaPopup", f, d);
        });
      }).then(function (a) {
        f && xf(f);return a ? cg(a) : null;
      }).g(function (a) {
        f && xf(f);throw a;
      });return this.c(c);
    };h.signInWithRedirect = function (a) {
      if (!Nf()) return E(new O("operation-not-supported-in-this-environment"));var b = this,
          c = Pk(this).then(function () {
        return Ek(b.na);
      }).then(function () {
        return b.v.ac("signInViaRedirect", a);
      });return this.c(c);
    };
    h.getRedirectResult = function () {
      if (!Nf()) return E(new O("operation-not-supported-in-this-environment"));var a = this,
          b = Pk(this).then(function () {
        return a.v.getRedirectResult();
      }).then(function (a) {
        return a ? cg(a) : null;
      });return this.c(b);
    };
    var Qk = function Qk(a, b) {
      var c = {};c.apiKey = a.i().options.apiKey;c.authDomain = a.i().options.authDomain;c.appName = a.i().name;return a.oc.then(function () {
        return wk(c, b, a.zb, $a(a.M));
      }).then(function (b) {
        if (U(a) && b.uid == U(a).uid) return U(a).copy(b), a.pb(b);Ik(a, b);bk(b);return a.pb(b);
      }).then(function () {
        a.Ta();
      });
    },
        Ik = function Ik(a, b) {
      U(a) && (Zj(U(a), a.ef), tc(U(a), "tokenChanged", a.Gb), tc(U(a), "userDeleted", a.cf), tc(U(a), "userInvalidated", a.df), Yj(U(a)));b && (b.Rc.push(a.ef), lc(b, "tokenChanged", a.Gb), lc(b, "userDeleted", a.cf), lc(b, "userInvalidated", a.df), 0 < a.Oa && Xj(b));N(a, "currentUser", b);b && (b.Cb(a.ia), Uj(b, a), Tj(b, a.M), Vj(b, a));
    };T.prototype.signOut = function () {
      var a = this,
          b = this.ya.then(function () {
        if (!U(a)) return D();Ik(a, null);return Gk(a.na).then(function () {
          a.Ta();
        });
      });return this.c(b);
    };
    var Rk = function Rk(a) {
      var b = a.i().options.authDomain;b = yk(a.zb, b).then(function (b) {
        if (a.Za = b) b.Ya = a.zb;return tk(a.zb);
      });return a.c(b);
    },
        Jk = function Jk(a) {
      var b = a.i().options.authDomain,
          c = Rk(a).then(function () {
        return Hk(a.na, b);
      }).then(function (b) {
        return b ? (b.Ya = a.zb, a.Za && (a.Za.Ha || null) == (b.Ha || null) ? b : b.reload().then(function () {
          return Fk(a.na, b).then(function () {
            return b;
          });
        }).g(function (c) {
          return "auth/network-request-failed" == c.code ? b : Gk(a.na);
        })) : null;
      }).then(function (b) {
        Ik(a, b || null);
      });return a.c(c);
    },
        Kk = function Kk(a) {
      return a.oc.then(function () {
        return a.getRedirectResult();
      }).g(function () {}).then(function () {
        if (!a.Ea) return a.ud();
      }).g(function () {}).then(function () {
        if (!a.Ea) {
          a.Cc = !0;var b = a.na;b.h.addListener(zk("local"), b.j, a.ud);
        }
      });
    };h = T.prototype;
    h.wg = function () {
      var a = this,
          b = this.i().options.authDomain;return Hk(this.na, b).then(function (b) {
        if (!a.Ea) {
          var c;if (c = U(a) && b) {
            c = U(a).uid;var e = b.uid;c = void 0 === c || null === c || "" === c || void 0 === e || null === e || "" === e ? !1 : c == e;
          }if (c) return U(a).copy(b), U(a).getIdToken();if (U(a) || b) Ik(a, b), b && (bk(b), b.Ya = a.zb), a.v && a.v.subscribe(a), a.Ta();
        }
      });
    };h.pb = function (a) {
      return Fk(this.na, a);
    };h.wd = function () {
      this.Ta();this.pb(U(this));
    };h.Of = function () {
      this.signOut();
    };h.Pf = function () {
      this.signOut();
    };
    var Sk = function Sk(a, b) {
      var c = null,
          d = null;return a.c(b.then(function (b) {
        c = Rg(b);d = Ui(b);return Qk(a, b);
      }).then(function () {
        return cg({ user: U(a), credential: c, additionalUserInfo: d, operationType: "signIn" });
      }));
    };h = T.prototype;h.Sf = function (a) {
      var b = this;this.addAuthTokenListener(function () {
        a.next(U(b));
      });
    };h.Uf = function (a) {
      var b = this;Tk(this, function () {
        a.next(U(b));
      });
    };
    h.onIdTokenChanged = function (a, b, c) {
      var d = this;this.Cc && firebase.Promise.resolve().then(function () {
        p(a) ? a(U(d)) : p(a.next) && a.next(U(d));
      });return this.cg(a, b, c);
    };h.onAuthStateChanged = function (a, b, c) {
      var d = this;this.Cc && firebase.Promise.resolve().then(function () {
        d.kc = d.getUid();p(a) ? a(U(d)) : p(a.next) && a.next(U(d));
      });return this.eg(a, b, c);
    };h.If = function (a) {
      var b = this,
          c = this.ya.then(function () {
        return U(b) ? U(b).getIdToken(a).then(function (a) {
          return { accessToken: a };
        }) : null;
      });return this.c(c);
    };
    h.signInWithCustomToken = function (a) {
      var b = this;return this.ya.then(function () {
        return Sk(b, Q(b.f, Mh, { token: a }));
      }).then(function (a) {
        a = a.user;hk(a, "isAnonymous", !1);return b.pb(a);
      }).then(function () {
        return U(b);
      });
    };h.signInWithEmailAndPassword = function (a, b) {
      var c = this;return this.ya.then(function () {
        return Sk(c, Q(c.f, Hg, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };h.createUserWithEmailAndPassword = function (a, b) {
      var c = this;return this.ya.then(function () {
        return Sk(c, Q(c.f, Ih, { email: a, password: b }));
      }).then(function (a) {
        return a.user;
      });
    };
    h.signInWithCredential = function (a) {
      return this.signInAndRetrieveDataWithCredential(a).then(function (a) {
        return a.user;
      });
    };h.signInAndRetrieveDataWithCredential = function (a) {
      var b = this;return this.ya.then(function () {
        return Sk(b, a.Ob(b.f));
      });
    };h.signInAnonymously = function () {
      var a = this;return this.ya.then(function () {
        var b = U(a);return b && b.isAnonymous ? b : Sk(a, a.f.signInAnonymously()).then(function (b) {
          b = b.user;hk(b, "isAnonymous", !0);return a.pb(b);
        }).then(function () {
          return U(a);
        });
      });
    };h.i = function () {
      return this.app;
    };
    var U = function U(a) {
      return a.currentUser;
    };T.prototype.getUid = function () {
      return U(this) && U(this).uid || null;
    };var Uk = function Uk(a) {
      return U(a) && U(a)._lat || null;
    };h = T.prototype;h.Ta = function () {
      if (this.Cc) {
        for (var a = 0; a < this.Ka.length; a++) {
          if (this.Ka[a]) this.Ka[a](Uk(this));
        }if (this.kc !== this.getUid() && this.Fb.length) for (this.kc = this.getUid(), a = 0; a < this.Fb.length; a++) {
          if (this.Fb[a]) this.Fb[a](Uk(this));
        }
      }
    };h.pf = function (a) {
      this.addAuthTokenListener(a);this.Oa++;0 < this.Oa && U(this) && Xj(U(this));
    };
    h.jg = function (a) {
      var b = this;x(this.Ka, function (c) {
        c == a && b.Oa--;
      });0 > this.Oa && (this.Oa = 0);0 == this.Oa && U(this) && Yj(U(this));this.removeAuthTokenListener(a);
    };h.addAuthTokenListener = function (a) {
      var b = this;this.Ka.push(a);this.c(this.ya.then(function () {
        b.Ea || Va(b.Ka, a) && a(Uk(b));
      }));
    };h.removeAuthTokenListener = function (a) {
      Ya(this.Ka, function (b) {
        return b == a;
      });
    };var Tk = function Tk(a, b) {
      a.Fb.push(b);a.c(a.ya.then(function () {
        !a.Ea && Va(a.Fb, b) && a.kc !== a.getUid() && (a.kc = a.getUid(), b(Uk(a)));
      }));
    };h = T.prototype;
    h["delete"] = function () {
      this.Ea = !0;for (var a = 0; a < this.J.length; a++) {
        this.J[a].cancel("app-deleted");
      }this.J = [];this.na && (a = this.na, a.h.removeListener(zk("local"), a.j, this.ud));this.v && this.v.unsubscribe(this);return firebase.Promise.resolve();
    };h.c = function (a) {
      var b = this;this.J.push(a);Ed(a, function () {
        Xa(b.J, a);
      });return a;
    };h.fetchProvidersForEmail = function (a) {
      return this.c(mh(this.f, a));
    };h.verifyPasswordResetCode = function (a) {
      return this.checkActionCode(a).then(function (a) {
        return a.data.email;
      });
    };
    h.confirmPasswordReset = function (a, b) {
      return this.c(this.f.confirmPasswordReset(a, b).then(function () {}));
    };h.checkActionCode = function (a) {
      return this.c(this.f.checkActionCode(a).then(function (a) {
        return new Ki(a);
      }));
    };h.applyActionCode = function (a) {
      return this.c(this.f.applyActionCode(a).then(function () {}));
    };h.sendPasswordResetEmail = function (a, b) {
      var c = this;return this.c(D().then(function () {
        return "undefined" === typeof b || ib(b) ? {} : Hi(new Gi(b));
      }).then(function (b) {
        return c.f.sendPasswordResetEmail(a, b);
      }).then(function () {}));
    };
    h.signInWithPhoneNumber = function (a, b) {
      return this.c(Ji(this, a, b, _r(this.signInAndRetrieveDataWithCredential, this)));
    };var Wk = function Wk(a, b, c, d) {
      a: {
        c = Array.prototype.slice.call(c);var e = 0;for (var f = !1, g = 0; g < b.length; g++) {
          if (b[g].optional) f = !0;else {
            if (f) throw new O("internal-error", "Argument validator encountered a required argument after an optional argument.");e++;
          }
        }f = b.length;if (c.length < e || f < c.length) d = "Expected " + (e == f ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";else {
          for (e = 0; e < c.length; e++) {
            if (f = b[e].optional && void 0 === c[e], !b[e].W(c[e]) && !f) {
              b = b[e];if (0 > e || e >= Vk.length) throw new O("internal-error", "Argument validator received an unsupported number of arguments.");c = Vk[e];d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.V + ".";break a;
            }
          }d = null;
        }
      }if (d) throw new O("argument-error", a + " failed: " + d);
    },
        Vk = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
        V = function V(a, b) {
      return { name: a || "", V: "a valid string", optional: !!b, W: m };
    },
        Xk = function Xk() {
      return { name: "opt_forceRefresh", V: "a boolean", optional: !0, W: ca };
    },
        W = function W(a, b) {
      return { name: a || "", V: "a valid object", optional: !!b,
        W: q };
    },
        Yk = function Yk(a, b) {
      return { name: a || "", V: "a function", optional: !!b, W: p };
    },
        Zk = function Zk(a, b) {
      return { name: a || "", V: "null", optional: !!b, W: fa };
    },
        $k = function $k() {
      return { name: "", V: "an HTML element", optional: !1, W: function W(a) {
          return !!(a && a instanceof Element);
        } };
    },
        al = function al() {
      return { name: "auth", V: "an instance of Firebase Auth", optional: !0, W: function W(a) {
          return !!(a && a instanceof T);
        } };
    },
        bl = function bl() {
      return { name: "app", V: "an instance of Firebase App", optional: !0, W: function W(a) {
          return !!(a && a instanceof firebase.app.App);
        } };
    },
        cl = function cl(a) {
      return { name: a ? a + "Credential" : "credential", V: a ? "a valid " + a + " credential" : "a valid credential", optional: !1, W: function W(b) {
          if (!b) return !1;var c = !a || b.providerId === a;return !(!b.Ob || !c);
        } };
    },
        dl = function dl() {
      return { name: "authProvider", V: "a valid Auth provider", optional: !1, W: function W(a) {
          return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
        } };
    },
        el = function el() {
      return { name: "applicationVerifier", V: "an implementation of firebase.auth.ApplicationVerifier", optional: !1, W: function W(a) {
          return !!(a && m(a.type) && p(a.verify));
        } };
    },
        X = function X(a, b, c, d) {
      return { name: c || "", V: a.V + " or " + b.V, optional: !!d, W: function W(c) {
          return a.W(c) || b.W(c);
        } };
    };var Y = function Y(a, b) {
      for (var c in b) {
        var d = b[c].name;a[d] = fl(d, a[c], b[c].a);
      }
    },
        Z = function Z(a, b, c, d) {
      a[b] = fl(b, c, d);
    },
        fl = function fl(a, b, c) {
      if (!c) return b;var d = gl(a);a = function a() {
        var a = Array.prototype.slice.call(arguments);Wk(d, c, a);return b.apply(this, a);
      };for (var e in b) {
        a[e] = b[e];
      }for (e in b.prototype) {
        a.prototype[e] = b.prototype[e];
      }return a;
    },
        gl = function gl(a) {
      a = a.split(".");return a[a.length - 1];
    };Y(T.prototype, { applyActionCode: { name: "applyActionCode", a: [V("code")] }, checkActionCode: { name: "checkActionCode", a: [V("code")] }, confirmPasswordReset: { name: "confirmPasswordReset", a: [V("code"), V("newPassword")] }, createUserWithEmailAndPassword: { name: "createUserWithEmailAndPassword", a: [V("email"), V("password")] }, fetchProvidersForEmail: { name: "fetchProvidersForEmail", a: [V("email")] }, getRedirectResult: { name: "getRedirectResult", a: [] }, onAuthStateChanged: { name: "onAuthStateChanged", a: [X(W(), Yk(), "nextOrObserver"), Yk("opt_error", !0), Yk("opt_completed", !0)] }, onIdTokenChanged: { name: "onIdTokenChanged", a: [X(W(), Yk(), "nextOrObserver"), Yk("opt_error", !0), Yk("opt_completed", !0)] }, sendPasswordResetEmail: { name: "sendPasswordResetEmail", a: [V("email"), X(W("opt_actionCodeSettings", !0), Zk(null, !0), "opt_actionCodeSettings", !0)] }, setPersistence: { name: "setPersistence", a: [V("persistence")] }, signInAndRetrieveDataWithCredential: { name: "signInAndRetrieveDataWithCredential", a: [cl()] }, signInAnonymously: { name: "signInAnonymously", a: [] },
      signInWithCredential: { name: "signInWithCredential", a: [cl()] }, signInWithCustomToken: { name: "signInWithCustomToken", a: [V("token")] }, signInWithEmailAndPassword: { name: "signInWithEmailAndPassword", a: [V("email"), V("password")] }, signInWithPhoneNumber: { name: "signInWithPhoneNumber", a: [V("phoneNumber"), el()] }, signInWithPopup: { name: "signInWithPopup", a: [dl()] }, signInWithRedirect: { name: "signInWithRedirect", a: [dl()] }, signOut: { name: "signOut", a: [] }, toJSON: { name: "toJSON", a: [V(null, !0)] }, useDeviceLanguage: { name: "useDeviceLanguage",
        a: [] }, verifyPasswordResetCode: { name: "verifyPasswordResetCode", a: [V("code")] } });(function (a, b) {
      for (var c in b) {
        var d = b[c].name;if (d !== c) {
          var e = b[c].rf;Object.defineProperty(a, d, { get: function get() {
              return this[c];
            }, set: function set(a) {
              Wk(d, [e], [a], !0);this[c] = a;
            }, enumerable: !0 });
        }
      }
    })(T.prototype, { lc: { name: "languageCode", rf: X(V(), Zk(), "languageCode") } });T.Persistence = Vi;T.Persistence.LOCAL = "local";T.Persistence.SESSION = "session";T.Persistence.NONE = "none";
    Y(S.prototype, { "delete": { name: "delete", a: [] }, getIdToken: { name: "getIdToken", a: [Xk()] }, getToken: { name: "getToken", a: [Xk()] }, linkAndRetrieveDataWithCredential: { name: "linkAndRetrieveDataWithCredential", a: [cl()] }, linkWithCredential: { name: "linkWithCredential", a: [cl()] }, linkWithPhoneNumber: { name: "linkWithPhoneNumber", a: [V("phoneNumber"), el()] }, linkWithPopup: { name: "linkWithPopup", a: [dl()] }, linkWithRedirect: { name: "linkWithRedirect", a: [dl()] }, reauthenticateAndRetrieveDataWithCredential: { name: "reauthenticateAndRetrieveDataWithCredential",
        a: [cl()] }, reauthenticateWithCredential: { name: "reauthenticateWithCredential", a: [cl()] }, reauthenticateWithPhoneNumber: { name: "reauthenticateWithPhoneNumber", a: [V("phoneNumber"), el()] }, reauthenticateWithPopup: { name: "reauthenticateWithPopup", a: [dl()] }, reauthenticateWithRedirect: { name: "reauthenticateWithRedirect", a: [dl()] }, reload: { name: "reload", a: [] }, sendEmailVerification: { name: "sendEmailVerification", a: [X(W("opt_actionCodeSettings", !0), Zk(null, !0), "opt_actionCodeSettings", !0)] }, toJSON: { name: "toJSON", a: [V(null, !0)] }, unlink: { name: "unlink", a: [V("provider")] }, updateEmail: { name: "updateEmail", a: [V("email")] }, updatePassword: { name: "updatePassword", a: [V("password")] }, updatePhoneNumber: { name: "updatePhoneNumber", a: [cl("phone")] }, updateProfile: { name: "updateProfile", a: [W("profile")] } });Y(C.prototype, { g: { name: "catch" }, then: { name: "then" } });Y(Ii.prototype, { confirm: { name: "confirm", a: [V("verificationCode")] } });Z(Jg, "credential", function (a, b) {
      return new Gg(a, b);
    }, [V("email"), V("password")]);
    Y(yg.prototype, { addScope: { name: "addScope", a: [V("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });Z(yg, "credential", zg, [X(V(), W(), "token")]);Y(Ag.prototype, { addScope: { name: "addScope", a: [V("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });Z(Ag, "credential", Bg, [X(V(), W(), "token")]);Y(Cg.prototype, { addScope: { name: "addScope", a: [V("scope")] }, setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });
    Z(Cg, "credential", Dg, [X(V(), X(W(), Zk()), "idToken"), X(V(), Zk(), "accessToken", !0)]);Y(Eg.prototype, { setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });Z(Eg, "credential", Fg, [X(V(), W(), "token"), V("secret", !0)]);Y(P.prototype, { addScope: { name: "addScope", a: [V("scope")] }, credential: { name: "credential", a: [X(V(), Zk(), "idToken", !0), X(V(), Zk(), "accessToken", !0)] }, setCustomParameters: { name: "setCustomParameters", a: [W("customOAuthParameters")] } });
    Z(Og, "credential", Qg, [V("verificationId"), V("verificationCode")]);Y(Og.prototype, { verifyPhoneNumber: { name: "verifyPhoneNumber", a: [V("phoneNumber"), el()] } });Y(O.prototype, { toJSON: { name: "toJSON", a: [V(null, !0)] } });Y(Tg.prototype, { toJSON: { name: "toJSON", a: [V(null, !0)] } });Y(og.prototype, { toJSON: { name: "toJSON", a: [V(null, !0)] } });Y(li.prototype, { clear: { name: "clear", a: [] }, render: { name: "render", a: [] }, verify: { name: "verify", a: [] } });
    (function () {
      if ("undefined" !== typeof firebase && firebase.INTERNAL && firebase.INTERNAL.registerService) {
        var a = { Auth: T, Error: O };Z(a, "EmailAuthProvider", Jg, []);Z(a, "FacebookAuthProvider", yg, []);Z(a, "GithubAuthProvider", Ag, []);Z(a, "GoogleAuthProvider", Cg, []);Z(a, "TwitterAuthProvider", Eg, []);Z(a, "OAuthProvider", P, [V("providerId")]);Z(a, "PhoneAuthProvider", Og, [al()]);Z(a, "RecaptchaVerifier", li, [X(V(), $k(), "recaptchaContainer"), W("recaptchaParameters", !0), bl()]);firebase.INTERNAL.registerService("auth", function (a, c) {
          a = new T(a);c({ INTERNAL: { getUid: _r(a.getUid, a), getToken: _r(a.If, a), addAuthTokenListener: _r(a.pf, a), removeAuthTokenListener: _r(a.jg, a) } });return a;
        }, a, function (a, c) {
          if ("create" === a) try {
            c.auth();
          } catch (d) {}
        });firebase.INTERNAL.extendNamespace({ User: S });
      } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
    })();
  }).call(this);
}).call(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});