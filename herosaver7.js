!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 639));
})({
  1: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return f;
    });
    var r,
      o,
      a,
      i,
      s,
      c = n(13),
      l = n(14),
      u = n(21),
      p = n(8);
    function f(e, t, n) {
      (this.x = e || 0), (this.y = t || 0), (this.z = n || 0);
    }
    (f.slerp = function(e, t, n) {
      var r = e.length(),
        o = t.length();
      (e = e.clone().normalize()), (t = t.clone().normalize());
      var a = e.dot(t);
      c.a.clamp(a, -1, 1);
      var i = Math.acos(a) * n,
        s = t.clone().sub(e.clone().multiplyScalar(a));
      s.normalize();
      var l = e
        .clone()
        .multiplyScalar(Math.cos(i))
        .add(s.multiplyScalar(Math.sin(i)));
      return l.multiplyScalar(c.a.lerp(r, o, n)), l;
    }),
      Object.defineProperties(f.prototype, {
        xy: {
          get: function() {
            return new p.a(this.x, this.y);
          },
          set: function(e) {
            (this.x = e.x), (this.y = e.y);
          }
        },
        xz: {
          get: function() {
            return new p.a(this.x, this.z);
          },
          set: function(e) {
            (this.x = e.x), (this.z = e.y);
          }
        },
        yx: {
          get: function() {
            return new p.a(this.y, this.x);
          },
          set: function(e) {
            (this.y = e.x), (this.x = e.y);
          }
        },
        yz: {
          get: function() {
            return new p.a(this.y, this.z);
          },
          set: function(e) {
            (this.y = e.x), (this.z = e.y);
          }
        },
        zx: {
          get: function() {
            return new p.a(this.z, this.x);
          },
          set: function(e) {
            (this.z = e.x), (this.x = e.y);
          }
        },
        zy: {
          get: function() {
            return new p.a(this.z, this.y);
          },
          set: function(e) {
            (this.z = e.x), (this.y = e.y);
          }
        }
      }),
      Object.assign(f.prototype, {
        isVec3: !0,
        set: function(e, t, n) {
          return (this.x = e), (this.y = t), (this.z = n), this;
        },
        setScalar: function(e) {
          return (this.x = e), (this.y = e), (this.z = e), this;
        },
        setX: function(e) {
          return (this.x = e), this;
        },
        setY: function(e) {
          return (this.y = e), this;
        },
        setZ: function(e) {
          return (this.z = e), this;
        },
        setComponent: function(e, t) {
          switch (e) {
            case 0:
              this.x = t;
              break;
            case 1:
              this.y = t;
              break;
            case 2:
              this.z = t;
              break;
            default:
              throw new Error("index is out of range: " + e);
          }
          return this;
        },
        getComponent: function(e) {
          switch (e) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error("index is out of range: " + e);
          }
        },
        clone: function() {
          return new this.constructor(this.x, this.y, this.z);
        },
        copy: function(e) {
          return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
        },
        add: function(e, t) {
          return void 0 !== t
            ? (console.warn(
                "RK.Vec3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(e, t))
            : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
        },
        addScalar: function(e) {
          return (this.x += e), (this.y += e), (this.z += e), this;
        },
        addVectors: function(e, t) {
          return (
            (this.x = e.x + t.x),
            (this.y = e.y + t.y),
            (this.z = e.z + t.z),
            this
          );
        },
        addScaledVector: function(e, t) {
          return (
            (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this
          );
        },
        sub: function(e, t) {
          return void 0 !== t
            ? (console.warn(
                "RK.Vec3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(e, t))
            : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
        },
        toSimple: function() {
          return { x: this.x, y: this.y, z: this.z };
        },
        subScalar: function(e) {
          return (this.x -= e), (this.y -= e), (this.z -= e), this;
        },
        subVectors: function(e, t) {
          return (
            (this.x = e.x - t.x),
            (this.y = e.y - t.y),
            (this.z = e.z - t.z),
            this
          );
        },
        multiply: function(e, t) {
          return void 0 !== t
            ? (console.warn(
                "RK.Vec3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
              ),
              this.multiplyVectors(e, t))
            : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
        },
        multiplyScalar: function(e) {
          return (this.x *= e), (this.y *= e), (this.z *= e), this;
        },
        multiplyVectors: function(e, t) {
          return (
            (this.x = e.x * t.x),
            (this.y = e.y * t.y),
            (this.z = e.z * t.z),
            this
          );
        },
        applyEuler:
          ((s = new u.a()),
          function(e) {
            return (
              (e && e.isEuler) ||
                console.error(
                  "RK.Vec3: .applyEuler() now expects an Euler rotation rather than a Vec3 and order."
                ),
              this.applyQuaternion(s.setFromEuler(e))
            );
          }),
        applyAxisAngle: (function() {
          var e = new u.a();
          return function(t, n) {
            return this.applyQuaternion(e.setFromAxisAngle(t, n));
          };
        })(),
        applyMatrix3: function(e) {
          var t = this.x,
            n = this.y,
            r = this.z,
            o = e.elements;
          return (
            (this.x = o[0] * t + o[3] * n + o[6] * r),
            (this.y = o[1] * t + o[4] * n + o[7] * r),
            (this.z = o[2] * t + o[5] * n + o[8] * r),
            this
          );
        },
        applyMatrix4: function(e) {
          var t = this.x,
            n = this.y,
            r = this.z,
            o = e.elements,
            a = 1 / (o[3] * t + o[7] * n + o[11] * r + o[15]);
          return (
            (this.x = (o[0] * t + o[4] * n + o[8] * r + o[12]) * a),
            (this.y = (o[1] * t + o[5] * n + o[9] * r + o[13]) * a),
            (this.z = (o[2] * t + o[6] * n + o[10] * r + o[14]) * a),
            this
          );
        },
        applyQuaternion: function(e) {
          var t = this.x,
            n = this.y,
            r = this.z,
            o = e.x,
            a = e.y,
            i = e.z,
            s = e.w,
            c = s * t + a * r - i * n,
            l = s * n + i * t - o * r,
            u = s * r + o * n - a * t,
            p = -o * t - a * n - i * r;
          return (
            (this.x = c * s + p * -o + l * -i - u * -a),
            (this.y = l * s + p * -a + u * -o - c * -i),
            (this.z = u * s + p * -i + c * -a - l * -o),
            this
          );
        },
        project:
          ((i = new l.a()),
          function(e) {
            return (
              i.multiplyMatrices(
                e.projectionMatrix,
                i.getInverse(e.matrixWorld)
              ),
              this.applyMatrix4(i)
            );
          }),
        unproject: (function() {
          var e = new l.a();
          return function(t) {
            return (
              e.multiplyMatrices(
                t.matrixWorld,
                e.getInverse(t.projectionMatrix)
              ),
              this.applyMatrix4(e)
            );
          };
        })(),
        transformDirection: function(e) {
          var t = this.x,
            n = this.y,
            r = this.z,
            o = e.elements;
          return (
            (this.x = o[0] * t + o[4] * n + o[8] * r),
            (this.y = o[1] * t + o[5] * n + o[9] * r),
            (this.z = o[2] * t + o[6] * n + o[10] * r),
            this.normalize()
          );
        },
        divide: function(e) {
          return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
        },
        divideScalar: function(e) {
          return this.multiplyScalar(1 / e);
        },
        min: function(e) {
          return (
            (this.x = Math.min(this.x, e.x)),
            (this.y = Math.min(this.y, e.y)),
            (this.z = Math.min(this.z, e.z)),
            this
          );
        },
        max: function(e) {
          return (
            (this.x = Math.max(this.x, e.x)),
            (this.y = Math.max(this.y, e.y)),
            (this.z = Math.max(this.z, e.z)),
            this
          );
        },
        clamp: function(e, t) {
          return (
            (this.x = Math.max(e.x, Math.min(t.x, this.x))),
            (this.y = Math.max(e.y, Math.min(t.y, this.y))),
            (this.z = Math.max(e.z, Math.min(t.z, this.z))),
            this
          );
        },
        clampScalar:
          ((o = new f()),
          (a = new f()),
          function(e, t) {
            return o.set(e, e, e), a.set(t, t, t), this.clamp(o, a);
          }),
        clampLength: function(e, t) {
          var n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(e, Math.min(t, n))
          );
        },
        floor: function() {
          return (
            (this.x = Math.floor(this.x)),
            (this.y = Math.floor(this.y)),
            (this.z = Math.floor(this.z)),
            this
          );
        },
        ceil: function() {
          return (
            (this.x = Math.ceil(this.x)),
            (this.y = Math.ceil(this.y)),
            (this.z = Math.ceil(this.z)),
            this
          );
        },
        round: function() {
          return (
            (this.x = Math.round(this.x)),
            (this.y = Math.round(this.y)),
            (this.z = Math.round(this.z)),
            this
          );
        },
        roundToZero: function() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
            this
          );
        },
        negate: function() {
          return (
            (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
          );
        },
        dot: function(e) {
          return this.x * e.x + this.y * e.y + this.z * e.z;
        },
        lengthSq: function() {
          return this.x * this.x + this.y * this.y + this.z * this.z;
        },
        length: function() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        },
        lengthManhattan: function() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
        },
        normalize: function() {
          return this.divideScalar(this.length() || 1);
        },
        setLength: function(e) {
          return this.normalize().multiplyScalar(e);
        },
        lerp: function(e, t) {
          return (
            (this.x += (e.x - this.x) * t),
            (this.y += (e.y - this.y) * t),
            (this.z += (e.z - this.z) * t),
            this
          );
        },
        lerpVectors: function(e, t, n) {
          return this.subVectors(t, e)
            .multiplyScalar(n)
            .add(e);
        },
        cross: function(e, t) {
          if (void 0 !== t)
            return (
              console.warn(
                "RK.Vec3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
              ),
              this.crossVectors(e, t)
            );
          var n = this.x,
            r = this.y,
            o = this.z;
          return (
            (this.x = r * e.z - o * e.y),
            (this.y = o * e.x - n * e.z),
            (this.z = n * e.y - r * e.x),
            this
          );
        },
        crossVectors: function(e, t) {
          var n = e.x,
            r = e.y,
            o = e.z,
            a = t.x,
            i = t.y,
            s = t.z;
          return (
            (this.x = r * s - o * i),
            (this.y = o * a - n * s),
            (this.z = n * i - r * a),
            this
          );
        },
        projectOnVector: function(e) {
          var t = e.dot(this) / e.lengthSq();
          return this.copy(e).multiplyScalar(t);
        },
        projectOnPlane:
          ((r = new f()),
          function(e) {
            return r.copy(this).projectOnVector(e), this.sub(r);
          }),
        reflect: (function() {
          var e = new f();
          return function(t) {
            return this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)));
          };
        })(),
        angleTo: function(e) {
          var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
          return Math.acos(c.a.clamp(t, -1, 1));
        },
        distanceTo: function(e) {
          return Math.sqrt(this.distanceToSquared(e));
        },
        distanceToSquared: function(e) {
          var t = this.x - e.x,
            n = this.y - e.y,
            r = this.z - e.z;
          return t * t + n * n + r * r;
        },
        distanceToManhattan: function(e) {
          return (
            Math.abs(this.x - e.x) +
            Math.abs(this.y - e.y) +
            Math.abs(this.z - e.z)
          );
        },
        setFromSpherical: function(e) {
          var t = Math.sin(e.phi) * e.radius;
          return (
            (this.x = t * Math.sin(e.theta)),
            (this.y = Math.cos(e.phi) * e.radius),
            (this.z = t * Math.cos(e.theta)),
            this
          );
        },
        setFromCylindrical: function(e) {
          return (
            (this.x = e.radius * Math.sin(e.theta)),
            (this.y = e.y),
            (this.z = e.radius * Math.cos(e.theta)),
            this
          );
        },
        setFromMatrixPosition: function(e) {
          var t = e.elements;
          return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
        },
        setFromMatrixScale: function(e) {
          var t = this.setFromMatrixColumn(e, 0).length(),
            n = this.setFromMatrixColumn(e, 1).length(),
            r = this.setFromMatrixColumn(e, 2).length();
          return (this.x = t), (this.y = n), (this.z = r), this;
        },
        setFromMatrixColumn: function(e, t) {
          return this.fromArray(e.elements, 4 * t);
        },
        equals: function(e) {
          return e.x === this.x && e.y === this.y && e.z === this.z;
        },
        fromArray: function(e, t) {
          return (
            void 0 === t && (t = 0),
            (this.x = e[t]),
            (this.y = e[t + 1]),
            (this.z = e[t + 2]),
            this
          );
        },
        toArray: function(e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = 0),
            (e[t] = this.x),
            (e[t + 1] = this.y),
            (e[t + 2] = this.z),
            e
          );
        },
        fromBufferAttribute: function(e, t, n) {
          return (
            void 0 !== n &&
              console.warn(
                "RK.Vec3: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = e.getX(t)),
            (this.y = e.getY(t)),
            (this.z = e.getZ(t)),
            this
          );
        }
      });
  },
  13: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return s;
    });
    var r,
      o,
      a,
      i,
      s = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID:
          ((o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
            ""
          )),
          (a = new Array(36)),
          (i = 0),
          function() {
            for (var e = 0; e < 36; e++)
              8 === e || 13 === e || 18 === e || 23 === e
                ? (a[e] = "-")
                : 14 === e
                ? (a[e] = "4")
                : (i <= 2 && (i = (33554432 + 16777216 * Math.random()) | 0),
                  (r = 15 & i),
                  (i >>= 4),
                  (a[e] = o[19 === e ? (3 & r) | 8 : r]));
            return a.join("");
          }),
        clamp: function(e, t, n) {
          return Math.max(t, Math.min(n, e));
        },
        euclideanModulo: function(e, t) {
          return ((e % t) + t) % t;
        },
        mapLinear: function(e, t, n, r, o) {
          return r + ((e - t) * (o - r)) / (n - t);
        },
        lerp: function(e, t, n) {
          return (1 - n) * e + n * t;
        },
        smoothstep: function(e, t, n) {
          return e <= t
            ? 0
            : e >= n
            ? 1
            : (e = (e - t) / (n - t)) * e * (3 - 2 * e);
        },
        smootherstep: function(e, t, n) {
          return e <= t
            ? 0
            : e >= n
            ? 1
            : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10);
        },
        randInt: function(e, t) {
          return e + Math.floor(Math.random() * (t - e + 1));
        },
        randFloat: function(e, t) {
          return e + Math.random() * (t - e);
        },
        randFloatSpread: function(e) {
          return e * (0.5 - Math.random());
        },
        degToRad: function(e) {
          return e * s.DEG2RAD;
        },
        radToDeg: function(e) {
          return e * s.RAD2DEG;
        },
        isPowerOfTwo: function(e) {
          return 0 == (e & (e - 1)) && 0 !== e;
        },
        nearestPowerOfTwo: function(e) {
          return Math.pow(2, Math.round(Math.log(e) / Math.LN2));
        },
        nextPowerOfTwo: function(e) {
          return (
            e--,
            (e |= e >> 1),
            (e |= e >> 2),
            (e |= e >> 4),
            (e |= e >> 8),
            (e |= e >> 16),
            ++e
          );
        }
      };
  },
  14: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return u;
    });
    var r,
      o,
      a,
      i,
      s,
      c,
      l = n(1);
    function u() {
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 &&
          console.error(
            "RK.Matrix4: the constructor no longer reads arguments. use .set() instead."
          );
    }
    Object.assign(u.prototype, {
      isMatrix4: !0,
      set: function(e, t, n, r, o, a, i, s, c, l, u, p, f, h, m, d) {
        var y = this.elements;
        return (
          (y[0] = e),
          (y[4] = t),
          (y[8] = n),
          (y[12] = r),
          (y[1] = o),
          (y[5] = a),
          (y[9] = i),
          (y[13] = s),
          (y[2] = c),
          (y[6] = l),
          (y[10] = u),
          (y[14] = p),
          (y[3] = f),
          (y[7] = h),
          (y[11] = m),
          (y[15] = d),
          this
        );
      },
      identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      },
      clone: function() {
        return new u().fromArray(this.elements);
      },
      copy: function(e) {
        var t = this.elements,
          n = e.elements;
        return (
          (t[0] = n[0]),
          (t[1] = n[1]),
          (t[2] = n[2]),
          (t[3] = n[3]),
          (t[4] = n[4]),
          (t[5] = n[5]),
          (t[6] = n[6]),
          (t[7] = n[7]),
          (t[8] = n[8]),
          (t[9] = n[9]),
          (t[10] = n[10]),
          (t[11] = n[11]),
          (t[12] = n[12]),
          (t[13] = n[13]),
          (t[14] = n[14]),
          (t[15] = n[15]),
          this
        );
      },
      copyPosition: function(e) {
        var t = this.elements,
          n = e.elements;
        return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
      },
      extractBasis: function(e, t, n) {
        return (
          e.setFromMatrixColumn(this, 0),
          t.setFromMatrixColumn(this, 1),
          n.setFromMatrixColumn(this, 2),
          this
        );
      },
      makeBasis: function(e, t, n) {
        return (
          this.set(
            e.x,
            t.x,
            n.x,
            0,
            e.y,
            t.y,
            n.y,
            0,
            e.z,
            t.z,
            n.z,
            0,
            0,
            0,
            0,
            1
          ),
          this
        );
      },
      extractRotation:
        ((c = new l.a()),
        function(e) {
          var t = this.elements,
            n = e.elements,
            r = 1 / c.setFromMatrixColumn(e, 0).length(),
            o = 1 / c.setFromMatrixColumn(e, 1).length(),
            a = 1 / c.setFromMatrixColumn(e, 2).length();
          return (
            (t[0] = n[0] * r),
            (t[1] = n[1] * r),
            (t[2] = n[2] * r),
            (t[4] = n[4] * o),
            (t[5] = n[5] * o),
            (t[6] = n[6] * o),
            (t[8] = n[8] * a),
            (t[9] = n[9] * a),
            (t[10] = n[10] * a),
            this
          );
        }),
      makeRotationFromEuler: function(e) {
        (e && e.isEuler) ||
          console.error(
            "RK.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vec3 and order."
          );
        var t = this.elements,
          n = e.x,
          r = e.y,
          o = e.z,
          a = Math.cos(n),
          i = Math.sin(n),
          s = Math.cos(r),
          c = Math.sin(r),
          l = Math.cos(o),
          u = Math.sin(o);
        if ("XYZ" === e.order) {
          var p = a * l,
            f = a * u,
            h = i * l,
            m = i * u;
          (t[0] = s * l),
            (t[4] = -s * u),
            (t[8] = c),
            (t[1] = f + h * c),
            (t[5] = p - m * c),
            (t[9] = -i * s),
            (t[2] = m - p * c),
            (t[6] = h + f * c),
            (t[10] = a * s);
        } else if ("YXZ" === e.order) {
          var d = s * l,
            y = s * u,
            b = c * l,
            v = c * u;
          (t[0] = d + v * i),
            (t[4] = b * i - y),
            (t[8] = a * c),
            (t[1] = a * u),
            (t[5] = a * l),
            (t[9] = -i),
            (t[2] = y * i - b),
            (t[6] = v + d * i),
            (t[10] = a * s);
        } else if ("ZXY" === e.order) {
          (d = s * l), (y = s * u), (b = c * l), (v = c * u);
          (t[0] = d - v * i),
            (t[4] = -a * u),
            (t[8] = b + y * i),
            (t[1] = y + b * i),
            (t[5] = a * l),
            (t[9] = v - d * i),
            (t[2] = -a * c),
            (t[6] = i),
            (t[10] = a * s);
        } else if ("ZYX" === e.order) {
          (p = a * l), (f = a * u), (h = i * l), (m = i * u);
          (t[0] = s * l),
            (t[4] = h * c - f),
            (t[8] = p * c + m),
            (t[1] = s * u),
            (t[5] = m * c + p),
            (t[9] = f * c - h),
            (t[2] = -c),
            (t[6] = i * s),
            (t[10] = a * s);
        } else if ("YZX" === e.order) {
          var g = a * s,
            w = a * c,
            _ = i * s,
            C = i * c;
          (t[0] = s * l),
            (t[4] = C - g * u),
            (t[8] = _ * u + w),
            (t[1] = u),
            (t[5] = a * l),
            (t[9] = -i * l),
            (t[2] = -c * l),
            (t[6] = w * u + _),
            (t[10] = g - C * u);
        } else if ("XZY" === e.order) {
          (g = a * s), (w = a * c), (_ = i * s), (C = i * c);
          (t[0] = s * l),
            (t[4] = -u),
            (t[8] = c * l),
            (t[1] = g * u + C),
            (t[5] = a * l),
            (t[9] = w * u - _),
            (t[2] = _ * u - w),
            (t[6] = i * l),
            (t[10] = C * u + g);
        }
        return (
          (t[3] = 0),
          (t[7] = 0),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          this
        );
      },
      makeRotationFromQuaternion: function(e) {
        var t = this.elements,
          n = e._x,
          r = e._y,
          o = e._z,
          a = e._w,
          i = n + n,
          s = r + r,
          c = o + o,
          l = n * i,
          u = n * s,
          p = n * c,
          f = r * s,
          h = r * c,
          m = o * c,
          d = a * i,
          y = a * s,
          b = a * c;
        return (
          (t[0] = 1 - (f + m)),
          (t[4] = u - b),
          (t[8] = p + y),
          (t[1] = u + b),
          (t[5] = 1 - (l + m)),
          (t[9] = h - d),
          (t[2] = p - y),
          (t[6] = h + d),
          (t[10] = 1 - (l + f)),
          (t[3] = 0),
          (t[7] = 0),
          (t[11] = 0),
          (t[12] = 0),
          (t[13] = 0),
          (t[14] = 0),
          (t[15] = 1),
          this
        );
      },
      lookAt:
        ((a = new l.a()),
        (i = new l.a()),
        (s = new l.a()),
        function(e, t, n) {
          var r = this.elements;
          return (
            s.subVectors(e, t),
            0 === s.lengthSq() && (s.z = 1),
            s.normalize(),
            a.crossVectors(n, s),
            0 === a.lengthSq() &&
              (1 === Math.abs(n.z) ? (s.x += 1e-4) : (s.z += 1e-4),
              s.normalize(),
              a.crossVectors(n, s)),
            a.normalize(),
            i.crossVectors(s, a),
            (r[0] = a.x),
            (r[4] = i.x),
            (r[8] = s.x),
            (r[1] = a.y),
            (r[5] = i.y),
            (r[9] = s.y),
            (r[2] = a.z),
            (r[6] = i.z),
            (r[10] = s.z),
            this
          );
        }),
      multiply: function(e, t) {
        return void 0 !== t
          ? (console.warn(
              "RK.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
            ),
            this.multiplyMatrices(e, t))
          : this.multiplyMatrices(this, e);
      },
      premultiply: function(e) {
        return this.multiplyMatrices(e, this);
      },
      multiplyMatrices: function(e, t) {
        var n = e.elements,
          r = t.elements,
          o = this.elements,
          a = n[0],
          i = n[4],
          s = n[8],
          c = n[12],
          l = n[1],
          u = n[5],
          p = n[9],
          f = n[13],
          h = n[2],
          m = n[6],
          d = n[10],
          y = n[14],
          b = n[3],
          v = n[7],
          g = n[11],
          w = n[15],
          _ = r[0],
          C = r[4],
          k = r[8],
          R = r[12],
          S = r[1],
          O = r[5],
          E = r[9],
          x = r[13],
          j = r[2],
          P = r[6],
          M = r[10],
          T = r[14],
          K = r[3],
          I = r[7],
          N = r[11],
          L = r[15];
        return (
          (o[0] = a * _ + i * S + s * j + c * K),
          (o[4] = a * C + i * O + s * P + c * I),
          (o[8] = a * k + i * E + s * M + c * N),
          (o[12] = a * R + i * x + s * T + c * L),
          (o[1] = l * _ + u * S + p * j + f * K),
          (o[5] = l * C + u * O + p * P + f * I),
          (o[9] = l * k + u * E + p * M + f * N),
          (o[13] = l * R + u * x + p * T + f * L),
          (o[2] = h * _ + m * S + d * j + y * K),
          (o[6] = h * C + m * O + d * P + y * I),
          (o[10] = h * k + m * E + d * M + y * N),
          (o[14] = h * R + m * x + d * T + y * L),
          (o[3] = b * _ + v * S + g * j + w * K),
          (o[7] = b * C + v * O + g * P + w * I),
          (o[11] = b * k + v * E + g * M + w * N),
          (o[15] = b * R + v * x + g * T + w * L),
          this
        );
      },
      multiplyScalar: function(e) {
        var t = this.elements;
        return (
          (t[0] *= e),
          (t[4] *= e),
          (t[8] *= e),
          (t[12] *= e),
          (t[1] *= e),
          (t[5] *= e),
          (t[9] *= e),
          (t[13] *= e),
          (t[2] *= e),
          (t[6] *= e),
          (t[10] *= e),
          (t[14] *= e),
          (t[3] *= e),
          (t[7] *= e),
          (t[11] *= e),
          (t[15] *= e),
          this
        );
      },
      applyToBufferAttribute: (function() {
        var e = new l.a();
        return function(t) {
          for (var n = 0, r = t.count; n < r; n++)
            (e.x = t.getX(n)),
              (e.y = t.getY(n)),
              (e.z = t.getZ(n)),
              e.applyMatrix4(this),
              t.setXYZ(n, e.x, e.y, e.z);
          return t;
        };
      })(),
      determinant: function() {
        var e = this.elements,
          t = e[0],
          n = e[4],
          r = e[8],
          o = e[12],
          a = e[1],
          i = e[5],
          s = e[9],
          c = e[13],
          l = e[2],
          u = e[6],
          p = e[10],
          f = e[14];
        return (
          e[3] *
            (+o * s * u -
              r * c * u -
              o * i * p +
              n * c * p +
              r * i * f -
              n * s * f) +
          e[7] *
            (+t * s * f -
              t * c * p +
              o * a * p -
              r * a * f +
              r * c * l -
              o * s * l) +
          e[11] *
            (+t * c * u -
              t * i * f -
              o * a * u +
              n * a * f +
              o * i * l -
              n * c * l) +
          e[15] *
            (-r * i * l -
              t * s * u +
              t * i * p +
              r * a * u -
              n * a * p +
              n * s * l)
        );
      },
      transpose: function() {
        var e,
          t = this.elements;
        return (
          (e = t[1]),
          (t[1] = t[4]),
          (t[4] = e),
          (e = t[2]),
          (t[2] = t[8]),
          (t[8] = e),
          (e = t[6]),
          (t[6] = t[9]),
          (t[9] = e),
          (e = t[3]),
          (t[3] = t[12]),
          (t[12] = e),
          (e = t[7]),
          (t[7] = t[13]),
          (t[13] = e),
          (e = t[11]),
          (t[11] = t[14]),
          (t[14] = e),
          this
        );
      },
      setPosition: function(e) {
        var t = this.elements;
        return (t[12] = e.x), (t[13] = e.y), (t[14] = e.z), this;
      },
      getInverse: function(e, t) {
        var n = this.elements,
          r = e.elements,
          o = r[0],
          a = r[1],
          i = r[2],
          s = r[3],
          c = r[4],
          l = r[5],
          u = r[6],
          p = r[7],
          f = r[8],
          h = r[9],
          m = r[10],
          d = r[11],
          y = r[12],
          b = r[13],
          v = r[14],
          g = r[15],
          w =
            h * v * p -
            b * m * p +
            b * u * d -
            l * v * d -
            h * u * g +
            l * m * g,
          _ =
            y * m * p -
            f * v * p -
            y * u * d +
            c * v * d +
            f * u * g -
            c * m * g,
          C =
            f * b * p -
            y * h * p +
            y * l * d -
            c * b * d -
            f * l * g +
            c * h * g,
          k =
            y * h * u -
            f * b * u -
            y * l * m +
            c * b * m +
            f * l * v -
            c * h * v,
          R = o * w + a * _ + i * C + s * k;
        if (0 === R) {
          var S =
            "RK.Matrix4: .getInverse() can't invert matrix, determinant is 0";
          if (!0 === t) throw new Error(S);
          return console.warn(S), this.identity();
        }
        var O = 1 / R;
        return (
          (n[0] = w * O),
          (n[1] =
            (b * m * s -
              h * v * s -
              b * i * d +
              a * v * d +
              h * i * g -
              a * m * g) *
            O),
          (n[2] =
            (l * v * s -
              b * u * s +
              b * i * p -
              a * v * p -
              l * i * g +
              a * u * g) *
            O),
          (n[3] =
            (h * u * s -
              l * m * s -
              h * i * p +
              a * m * p +
              l * i * d -
              a * u * d) *
            O),
          (n[4] = _ * O),
          (n[5] =
            (f * v * s -
              y * m * s +
              y * i * d -
              o * v * d -
              f * i * g +
              o * m * g) *
            O),
          (n[6] =
            (y * u * s -
              c * v * s -
              y * i * p +
              o * v * p +
              c * i * g -
              o * u * g) *
            O),
          (n[7] =
            (c * m * s -
              f * u * s +
              f * i * p -
              o * m * p -
              c * i * d +
              o * u * d) *
            O),
          (n[8] = C * O),
          (n[9] =
            (y * h * s -
              f * b * s -
              y * a * d +
              o * b * d +
              f * a * g -
              o * h * g) *
            O),
          (n[10] =
            (c * b * s -
              y * l * s +
              y * a * p -
              o * b * p -
              c * a * g +
              o * l * g) *
            O),
          (n[11] =
            (f * l * s -
              c * h * s -
              f * a * p +
              o * h * p +
              c * a * d -
              o * l * d) *
            O),
          (n[12] = k * O),
          (n[13] =
            (f * b * i -
              y * h * i +
              y * a * m -
              o * b * m -
              f * a * v +
              o * h * v) *
            O),
          (n[14] =
            (y * l * i -
              c * b * i -
              y * a * u +
              o * b * u +
              c * a * v -
              o * l * v) *
            O),
          (n[15] =
            (c * h * i -
              f * l * i +
              f * a * u -
              o * h * u -
              c * a * m +
              o * l * m) *
            O),
          this
        );
      },
      scale: function(e) {
        var t = this.elements,
          n = e.x,
          r = e.y,
          o = e.z;
        return (
          (t[0] *= n),
          (t[4] *= r),
          (t[8] *= o),
          (t[1] *= n),
          (t[5] *= r),
          (t[9] *= o),
          (t[2] *= n),
          (t[6] *= r),
          (t[10] *= o),
          (t[3] *= n),
          (t[7] *= r),
          (t[11] *= o),
          this
        );
      },
      getMaxScaleOnAxis: function() {
        var e = this.elements,
          t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
          n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
          r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, r));
      },
      makeTranslation: function(e, t, n) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
      },
      makeRotationX: function(e) {
        var t = Math.cos(e),
          n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
      },
      makeRotationY: function(e) {
        var t = Math.cos(e),
          n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
      },
      makeRotationZ: function(e) {
        var t = Math.cos(e),
          n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
      },
      makeRotationAxis: function(e, t) {
        var n = Math.cos(t),
          r = Math.sin(t),
          o = 1 - n,
          a = e.x,
          i = e.y,
          s = e.z,
          c = o * a,
          l = o * i;
        return (
          this.set(
            c * a + n,
            c * i - r * s,
            c * s + r * i,
            0,
            c * i + r * s,
            l * i + n,
            l * s - r * a,
            0,
            c * s - r * i,
            l * s + r * a,
            o * s * s + n,
            0,
            0,
            0,
            0,
            1
          ),
          this
        );
      },
      makeScale: function(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
      },
      makeShear: function(e, t, n) {
        return this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1), this;
      },
      compose: function(e, t, n) {
        return (
          this.makeRotationFromQuaternion(t),
          this.scale(n),
          this.setPosition(e),
          this
        );
      },
      toUInt8Array: function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0);
        for (var n, r = this.elements, o = 0; o < 16; o++)
          (n = this.encodeFloatRGBA(r[o])),
            (e[t] = n[0]),
            (e[t + 1] = n[1]),
            (e[t + 2] = n[2]),
            (e[t + 3] = n[3]),
            (t += 4);
        return e;
      },
      encodeFloatRGBA: function(e) {
        (e > 128 || e < -128) &&
          console.error(
            "Encoding matrix floats does not work for values above 128 because Teagan is not great at math. What weird things are the joints doing?"
          );
        var t = Math.floor(e + 128),
          n = e + 128 - t;
        n = Math.floor(16777215 * n);
        var r = Math.floor(n % 256),
          o = Math.floor((n - r) / 256) % 256;
        return [t, r, o, Math.floor((n - r - 256 * o) / 65536)];
      },
      decodeFloatRGBA: function(e) {
        return e[0] - 128 + (e[1] + 256 * e[2] + 256 * e[3] * 256) / 16777215;
      },
      decompose:
        ((r = new l.a()),
        (o = new u()),
        function(e, t, n) {
          var a = this.elements,
            i = r.set(a[0], a[1], a[2]).length(),
            s = r.set(a[4], a[5], a[6]).length(),
            c = r.set(a[8], a[9], a[10]).length();
          this.determinant() < 0 && (i = -i),
            (e.x = a[12]),
            (e.y = a[13]),
            (e.z = a[14]),
            o.copy(this);
          var l = 1 / i,
            u = 1 / s,
            p = 1 / c;
          return (
            (o.elements[0] *= l),
            (o.elements[1] *= l),
            (o.elements[2] *= l),
            (o.elements[4] *= u),
            (o.elements[5] *= u),
            (o.elements[6] *= u),
            (o.elements[8] *= p),
            (o.elements[9] *= p),
            (o.elements[10] *= p),
            t.setFromRotationMatrix(o),
            (n.x = i),
            (n.y = s),
            (n.z = c),
            this
          );
        }),
      makePerspective: function(e, t, n, r, o, a) {
        void 0 === a &&
          console.warn(
            "RK.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
          );
        var i = this.elements,
          s = (2 * o) / (t - e),
          c = (2 * o) / (n - r),
          l = (t + e) / (t - e),
          u = (n + r) / (n - r),
          p = -(a + o) / (a - o),
          f = (-2 * a * o) / (a - o);
        return (
          (i[0] = s),
          (i[4] = 0),
          (i[8] = l),
          (i[12] = 0),
          (i[1] = 0),
          (i[5] = c),
          (i[9] = u),
          (i[13] = 0),
          (i[2] = 0),
          (i[6] = 0),
          (i[10] = p),
          (i[14] = f),
          (i[3] = 0),
          (i[7] = 0),
          (i[11] = -1),
          (i[15] = 0),
          this
        );
      },
      makeOrthographic: function(e, t, n, r, o, a) {
        var i = this.elements,
          s = 1 / (t - e),
          c = 1 / (n - r),
          l = 1 / (a - o),
          u = (t + e) * s,
          p = (n + r) * c,
          f = (a + o) * l;
        return (
          (i[0] = 2 * s),
          (i[4] = 0),
          (i[8] = 0),
          (i[12] = -u),
          (i[1] = 0),
          (i[5] = 2 * c),
          (i[9] = 0),
          (i[13] = -p),
          (i[2] = 0),
          (i[6] = 0),
          (i[10] = -2 * l),
          (i[14] = -f),
          (i[3] = 0),
          (i[7] = 0),
          (i[11] = 0),
          (i[15] = 1),
          this
        );
      },
      equals: function(e) {
        for (var t = this.elements, n = e.elements, r = 0; r < 16; r++)
          if (t[r] !== n[r]) return !1;
        return !0;
      },
      fromArray: function(e, t) {
        void 0 === t && (t = 0);
        for (var n = 0; n < 16; n++) this.elements[n] = e[n + t];
        return this;
      },
      toArray: function(e, t) {
        void 0 === e && (e = []), void 0 === t && (t = 0);
        var n = this.elements;
        return (
          (e[t] = n[0]),
          (e[t + 1] = n[1]),
          (e[t + 2] = n[2]),
          (e[t + 3] = n[3]),
          (e[t + 4] = n[4]),
          (e[t + 5] = n[5]),
          (e[t + 6] = n[6]),
          (e[t + 7] = n[7]),
          (e[t + 8] = n[8]),
          (e[t + 9] = n[9]),
          (e[t + 10] = n[10]),
          (e[t + 11] = n[11]),
          (e[t + 12] = n[12]),
          (e[t + 13] = n[13]),
          (e[t + 14] = n[14]),
          (e[t + 15] = n[15]),
          e
        );
      }
    });
  },
  15: function(e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = VN.axios,
      a = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, a;
        return (
          (t = e),
          (a = [
            {
              key: "getGiftVoucherOptions",
              value: function() {
                var e = {};
                return (
                  (e.giftCards = CK.Options.getGiftCards()),
                  sessionStorage.voucherType && sessionStorage.voucherShipping
                    ? ((e.cached = !0),
                      (e.cachedVoucherType = sessionStorage.voucherType),
                      (e.cachedShipping = sessionStorage.voucherShipping),
                      delete sessionStorage.voucherType,
                      delete sessionStorage.voucherShipping)
                    : (e.cached = !1),
                  e
                );
              }
            },
            {
              key: "addVoucherToBasket",
              value: function(e, t, n, r, a) {
                var i = this;
                if (CK.User.loggedIn) {
                  var s = "quantity=1&card_id=1&pk="
                    .concat(t, "&shipping_pk=")
                    .concat(n, "&character=")
                    .concat(encodeURIComponent(JSON.stringify(e)));
                  o({
                    method: "post",
                    url: "/basket/add/".concat(t, "/"),
                    data: s
                  })
                    .then(function(e) {
                      return r(e.request, e.statusText);
                    })
                    .catch(function(e) {
                      a(e.request, e.response.statusText),
                        window.alert(
                          "Failed to add to cart. Try logging in or refreshing the page."
                        );
                    });
                } else
                  a({}, "not logged in"),
                    (sessionStorage.voucherType = t),
                    (sessionStorage.voucherShipping = n),
                    Overlay.showLogin(function() {
                      return i.addVoucherToBasket(e, t, n, r, a);
                    });
              }
            }
          ]),
          (n = null) && r(t.prototype, n),
          a && r(t, a),
          e
        );
      })();
    function i(e) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function s() {
      return (s =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function l(e) {
      return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function u(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function p(e, t) {
      return (p =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var f = (function(e) {
        function t(e) {
          var n, r, o;
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (r = this),
            ((n =
              !(o = l(t).call(this, e)) ||
              ("object" !== i(o) && "function" != typeof o)
                ? u(r)
                : o).options = e.options),
            (n.giftcards = n.options.giftCards),
            (n.giftcardsByID = {});
          for (
            var a = 0;
            a < n.options.giftCards.activegiftcardgroups.length;
            a++
          )
            for (
              var s = n.options.giftCards.activegiftcardgroups[a], c = 0;
              c < s.giftcards.length;
              c++
            )
              n.giftcardsByID[s.giftcards[c].id] = s.giftcards[c];
          for (var p = 0; p < n.options.giftCards.shipping.length; p++) {
            var f = n.options.giftCards.shipping[p];
            n.giftcardsByID[f.id] = f;
          }
          return (
            (n.state = {
              voucherType:
                n.options.cachedVoucherType ||
                n.options.giftCards.activegiftcardgroups[0].giftcards[0].id,
              shipping:
                n.options.cachedShipping || n.options.giftCards.shipping[0].id,
              submitting: !1
            }),
            (n.voucherCharacter = {
              sliders: {},
              meta: { character_name: "", config_desc: "" },
              parts: {},
              pose: 17
            }),
            (n.voucherObject = null),
            (n.shippingObject = null),
            (n.updateVoucher = n.updateVoucher.bind(u(n))),
            (n.updateShipping = n.updateShipping.bind(u(n))),
            (n.handleSubmit = n.handleSubmit.bind(u(n))),
            (n.AddSuccess = n.AddSuccess.bind(u(n))),
            (n.AddFail = n.AddFail.bind(u(n))),
            n.DetermineVoucher(),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && p(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "updateVoucher",
              value: function(e) {
                this.setState({ voucherType: e.target.value });
              }
            },
            {
              key: "updateShipping",
              value: function(e) {
                this.setState({ shipping: e.target.value });
              }
            },
            {
              key: "DetermineVoucher",
              value: function() {
                (this.voucherObject = this.giftcardsByID[
                  this.state.voucherType
                ]),
                  (this.shippingObject = this.giftcardsByID[
                    this.state.shipping
                  ]);
              }
            },
            {
              key: "GetObjectByProperty",
              value: function(e, t, n) {
                for (var r = 0; r < e.length; r++)
                  if (void 0 !== e[r][t] && e[r][t] == n) return e[r];
                return null;
              }
            },
            {
              key: "isDigital",
              value: function() {
                return (
                  this.DetermineVoucher(),
                  this.voucherObject &&
                    this.voucherObject.slug.includes("digital")
                );
              }
            },
            {
              key: "handleSubmit",
              value: function(e) {
                e.preventDefault(), this.setState({ submitting: !0 });
                var t =
                    this.shippingObject && !this.isDigital()
                      ? this.shippingObject.id
                      : 0,
                  n = this.voucherObject ? this.voucherObject.id : 0;
                a.addVoucherToBasket(
                  this.voucherCharacter,
                  n,
                  t,
                  this.AddSuccess,
                  this.AddFail
                );
              }
            },
            {
              key: "AddSuccess",
              value: function(e, t) {
                this.setState({ submitting: !1 });
              }
            },
            {
              key: "AddFail",
              value: function(e, t) {
                this.setState({ submitting: !1 });
              }
            },
            {
              key: "render",
              value: function() {
                this.DetermineVoucher();
                var e = {};
                (null == this.voucherObject || this.state.submitting) &&
                  (e.disabled = "disabled");
                for (
                  var t = this.state.submitting ? "Adding..." : "Add to Cart",
                    n = this.isDigital()
                      ? ""
                      : this.shippingObject
                      ? this.shippingObject.description
                      : "<p>shipping not included</p>",
                    r =
                      null == this.voucherObject
                        ? "<p>There's been an error selecting your voucher<br/>Please emails us at <a href='mailto:support@heroforge.com' target='_blank'>support@heroforge.com</a></p>"
                        : this.voucherObject.description + n,
                    o = [],
                    a = 0;
                  a < this.options.giftCards.activegiftcardgroups.length;
                  a++
                ) {
                  var i = [],
                    c = this.options.giftCards.activegiftcardgroups[a];
                  if (c.giftcards.length > 0) {
                    for (var l = 0; l < c.giftcards.length; l++) {
                      var u = c.giftcards[l];
                      i.push(
                        React.createElement(
                          "option",
                          { key: u.slug, value: u.id },
                          u.title
                        )
                      );
                    }
                    o.push(
                      React.createElement(
                        "optgroup",
                        { key: c.key, label: c.label },
                        i
                      )
                    );
                  }
                }
                for (
                  var p = [], f = 0;
                  f < this.options.giftCards.shipping.length;
                  f++
                ) {
                  var h = this.options.giftCards.shipping[f],
                    m = h.id || "";
                  p.push(
                    React.createElement(
                      "option",
                      { key: h.slug, value: m },
                      h.label
                    )
                  );
                }
                return React.createElement(
                  "div",
                  { id: "voucher-wrapper" },
                  React.createElement(
                    "div",
                    { id: "voucher-content" },
                    React.createElement(
                      "div",
                      { id: "card-image-wrapper" },
                      React.createElement("img", {
                        src: "/static/img/photos/gc_overlay.png"
                      }),
                      React.createElement("div", {
                        id: "gift-card-text",
                        dangerouslySetInnerHTML: { __html: r }
                      })
                    ),
                    React.createElement(
                      "form",
                      {
                        id: "voucher-add",
                        action: "",
                        onSubmit: this.handleSubmit
                      },
                      React.createElement(
                        "select",
                        {
                          id: "voucher_type",
                          value: this.state.voucherType,
                          onChange: this.updateVoucher
                        },
                        o
                      ),
                      this.isDigital()
                        ? React.createElement(
                            "select",
                            { id: "shipping" },
                            React.createElement(
                              "option",
                              { key: 0, value: 0 },
                              "Delivered Digitally"
                            )
                          )
                        : React.createElement(
                            "select",
                            {
                              id: "shipping",
                              value: this.state.shipping,
                              onChange: this.updateShipping
                            },
                            p
                          ),
                      React.createElement("input", {
                        id: "id_quantity",
                        min: "1",
                        name: "quantity",
                        type: "hidden",
                        value: "1"
                      }),
                      React.createElement("input", {
                        id: "id_pk",
                        min: "1",
                        name: "pk",
                        type: "hidden",
                        value: "25"
                      }),
                      React.createElement(
                        "div",
                        { className: "buttons-wrapper" },
                        React.createElement(
                          "input",
                          s({}, e, {
                            type: "submit",
                            className: "voucher-button",
                            value: t
                          })
                        )
                      ),
                      React.createElement(
                        "a",
                        { href: "/Materials/", target: "_blank" },
                        "About our materials"
                      )
                    )
                  )
                );
              }
            }
          ]) && c(n.prototype, r),
          o && c(n, o),
          t
        );
      })(),
      h = n(36),
      m = n(58),
      d = n(29);
    function y(e) {
      return (y =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function b(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function v(e, t) {
      return !t || ("object" !== y(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function g(e) {
      return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function w(e, t) {
      return (w =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var _ = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = v(this, g(t).call(this, e))).state = { value: e.value }),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && w(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              this.textInput && this.textInput.focus();
            }
          },
          {
            key: "updateValue",
            value: function(e) {
              e.preventDefault();
              var t = this.props.validator
                ? this.props.validator(e.target.value)
                : e.target.value;
              t !== this.state.value && this.setState({ value: t });
            }
          },
          {
            key: "accept",
            value: function(e) {
              e && e.preventDefault(), this.props.onAccept(this.state.value);
            }
          },
          {
            key: "render",
            value: function() {
              var e = this;
              return React.createElement(
                "form",
                {
                  onSubmit: function(t) {
                    return e.accept(t);
                  }
                },
                React.createElement(
                  d.a,
                  {
                    prompt: !0,
                    title: this.props.title,
                    buttons: [
                      {
                        label: "Accept",
                        onClick: function() {
                          return e.accept();
                        }
                      },
                      {
                        label: "Cancel",
                        onClick: this.props.onCancel,
                        cancel: !0
                      }
                    ],
                    onClose: this.props.onCancel
                  },
                  React.createElement("input", {
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    className: "overlay-text-prompt",
                    ref: function(t) {
                      e.textInput = t;
                    },
                    type: "text",
                    value: this.state.value || "",
                    placeholder: this.props.placeholder,
                    onChange: function(t) {
                      return e.updateValue(t);
                    }
                  })
                )
              );
            }
          }
        ]) && b(n.prototype, r),
        o && b(n, o),
        t
      );
    })();
    function C(e) {
      return (C =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function R(e, t) {
      return !t || ("object" !== C(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function S(e) {
      return (S = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function O(e, t) {
      return (O =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    n.d(t, "a", function() {
      return x;
    });
    var E = VN.ReactRouter,
      x = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            R(this, S(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && O(e, t);
          })(t, React.Component),
          (n = t),
          (o = [
            {
              key: "getModal",
              value: function(e, n, r, o, a, i) {
                return React.createElement(
                  h.a,
                  {
                    title: n,
                    header: r,
                    footer: o,
                    closeCallback: function() {
                      return t.hideOverlay();
                    },
                    extraClass: a,
                    customCloseButton: i
                  },
                  e
                );
              }
            },
            {
              key: "showGiftcards",
              value: function() {
                (CK.User.actionOnLogin = void 0),
                  UIState.set({ showOverlay: "cards" });
              }
            },
            {
              key: "showCart",
              value: function() {
                (CK.User.actionOnLogin = void 0),
                  CK.User.loggedIn
                    ? UIState.set({ showOverlay: "cart" })
                    : this.showLogin();
              }
            },
            {
              key: "showAccounts",
              value: function() {
                (CK.User.actionOnLogin = void 0),
                  CK.User.loggedIn
                    ? UIState.set({ showOverlay: "account" })
                    : this.showLogin();
              }
            },
            {
              key: "showImage",
              value: function(e, t) {
                this.showSlideshow([e], t);
              }
            },
            {
              key: "showSlideshow",
              value: function(e, t) {
                var n = this;
                (CK.User.actionOnLogin = void 0),
                  UIState.set({
                    showOverlay: React.createElement(
                      d.a,
                      {
                        title: t,
                        onClose: function() {
                          return n.hideOverlay();
                        }
                      },
                      React.createElement(m.a, { images: e })
                    )
                  });
              }
            },
            {
              key: "showLoader",
              value: function() {
                UIState.set({ showOverlay: "loading" });
              }
            },
            {
              key: "showLogin",
              value: function(e) {
                var t = this;
                if (CK.User.loggedIn)
                  console.error(
                    "showLogin called while user is already logged in. Oops."
                  );
                else {
                  var n = function() {
                    UIState.set({ showOverlay: "login" }),
                      (CK.User.actionOnLogin = e);
                  };
                  CK.Settings.hackyPromptForToS && !window.confirmTosPrivacy
                    ? this.prompt(
                        React.createElement(
                          "p",
                          null,
                          "By creating an account or logging in, you indicate that you are at least 16 years old and have read and accepted our ",
                          React.createElement(
                            "a",
                            { href: "/Privacy/", target: "_blank" },
                            "Privacy Policy"
                          ),
                          ", and ",
                          React.createElement(
                            "a",
                            { href: "/ToS/", target: "_blank" },
                            "Copyright and Terms"
                          ),
                          " "
                        ),
                        [
                          {
                            label: "Accept",
                            onClick: function() {
                              (window.confirmTosPrivacy = !0),
                                t.hidePrompt(),
                                n();
                            }
                          },
                          {
                            cancel: !0,
                            label: "Cancel",
                            onClick: function() {
                              return t.hidePrompt();
                            }
                          }
                        ]
                      )
                    : n();
                }
              }
            },
            {
              key: "alert",
              value: function(e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "Critical Miss!",
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : function() {},
                  o = function() {
                    t.hidePrompt(), r();
                  };
                UIState.set({
                  showPrompt: React.createElement(
                    d.a,
                    {
                      prompt: !0,
                      title: n,
                      buttons: [{ label: "Ok", onClick: o }],
                      onClose: o
                    },
                    React.createElement("img", {
                      style: { width: 60, paddingRight: 10 },
                      src: "/static/svg/alert.svg"
                    }),
                    React.createElement("br", null),
                    e
                  )
                });
              }
            },
            {
              key: "prompt",
              value: function(e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [
                          {
                            label: "Ok",
                            onClick: function() {
                              return t.hidePrompt();
                            }
                          }
                        ],
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "";
                UIState.set({
                  showPrompt: React.createElement(
                    d.a,
                    {
                      prompt: !0,
                      title: r,
                      buttons: n,
                      onClose: function() {
                        return t.hidePrompt();
                      }
                    },
                    e
                  )
                });
              }
            },
            {
              key: "promptTextInput",
              value: function(e, t, n, r) {
                var o = this;
                return new Promise(function(a, i) {
                  UIState.set({
                    showPrompt: React.createElement(_, {
                      title: e,
                      value: t,
                      placeholder: n,
                      validator: r,
                      onAccept: function(e) {
                        o.hidePrompt(), a(e);
                      },
                      onCancel: function() {
                        o.hidePrompt(), a();
                      }
                    })
                  });
                });
              }
            },
            {
              key: "hideOverlay",
              value: function() {
                (CK.User.actionOnLogin = void 0),
                  UIState.updateBasketQuantity(),
                  (UIState.showOverlay = !1),
                  (UIState.showPrompt = !1);
              }
            },
            {
              key: "hidePrompt",
              value: function() {
                UIState.set({ showPrompt: !1 });
              }
            },
            {
              key: "getCards",
              value: function() {
                return this.getModal(
                  React.createElement(f, {
                    options: a.getGiftVoucherOptions()
                  }),
                  "Gift Certificate",
                  null,
                  null,
                  "no-padding"
                );
              }
            },
            {
              key: "getCart",
              value: function() {
                if (!window.Cart || !window.Cart.CartContainer)
                  return this.getModal(
                    React.createElement(
                      "div",
                      { id: "basket-wrapper" },
                      React.createElement("iframe", { src: "/basket/" })
                    ),
                    "Basket",
                    null,
                    null,
                    "no-padding"
                  );
              }
            },
            {
              key: "getAccounts",
              value: function() {
                return window.Accounts && window.Accounts.AccountsContainer
                  ? React.createElement(E.Redirect, {
                      push: !0,
                      to: "/account"
                    })
                  : this.getModal(
                      React.createElement(
                        "div",
                        { id: "basket-wrapper" },
                        React.createElement("iframe", { src: "/basket/" })
                      ),
                      "Basket",
                      null,
                      null,
                      "no-padding"
                    );
              }
            },
            {
              key: "getImage",
              value: function() {
                var e = this;
                return this.getModal(
                  React.createElement(
                    "div",
                    null,
                    React.createElement("img", {
                      style: { maxWidth: "90vw", maxHeight: "90vh" },
                      src: UIState.showOverlayImage,
                      onClick: function() {
                        return e.hideOverlay();
                      }
                    })
                  )
                );
              }
            },
            {
              key: "getSlideshow",
              value: function() {
                return this.getModal(
                  React.createElement(m.a, { images: UIState.slideshowImages })
                );
              }
            },
            {
              key: "getLogin",
              value: function() {
                return window.Cart && window.Cart.CartContainer
                  ? React.createElement(E.Redirect, {
                      push: !0,
                      to: "/cart/login"
                    })
                  : this.getModal(
                      React.createElement(
                        "div",
                        { id: "basket-wrapper" },
                        React.createElement("iframe", {
                          src: "/accounts/login/"
                        })
                      ),
                      "Login",
                      null,
                      null,
                      "no-padding"
                    );
              }
            },
            {
              key: "getLoading",
              value: function() {
                return this.getModal("Loading...");
              }
            },
            {
              key: "getGiftCard",
              value: function() {
                var e = CK.Settings.theme,
                  n = React.createElement(window.Cart.GiftCardMenuContainer, {
                    theme: e
                  });
                return React.createElement(
                  h.a,
                  {
                    contentOnly: !0,
                    closeCallback: function() {
                      return t.hideOverlay();
                    },
                    customCloseButton: " "
                  },
                  n
                );
              }
            },
            {
              key: "getCartPreview",
              value: function() {
                var e = CK.Settings.theme,
                  n = React.createElement(window.Cart.CartPreviewContainer, {
                    theme: e
                  });
                return React.createElement(
                  h.a,
                  {
                    contentOnly: !0,
                    closeCallback: function() {
                      return t.hideOverlay();
                    },
                    customCloseButton: " "
                  },
                  n
                );
              }
            }
          ]),
          (r = [
            {
              key: "render",
              value: function() {
                var e;
                return (
                  UIState.showOverlay &&
                  "" !== UIState.showOverlay &&
                  "none" !== UIState.showOverlay
                    ? "string" != typeof UIState.showOverlay
                      ? (e = UIState.showOverlay)
                      : (e = {
                          cart: function() {
                            return t.getCart();
                          },
                          account: function() {
                            return t.getAccounts();
                          },
                          login: function() {
                            return t.getLogin();
                          },
                          cards: function() {
                            return t.getCards();
                          },
                          loading: function() {
                            return t.getLoading();
                          },
                          giftCard: function() {
                            return t.getGiftCard();
                          },
                          cartPreview: function() {
                            return t.getCartPreview();
                          }
                        }[UIState.showOverlay]) && (e = e())
                    : (e = null),
                  React.createElement(
                    React.Fragment,
                    null,
                    e || null,
                    UIState.showPrompt ? UIState.showPrompt : null
                  )
                );
              }
            }
          ]) && k(n.prototype, r),
          o && k(n, o),
          t
        );
      })();
    window.Overlay = E.withRouter(x);
  },
  21: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r,
      o,
      a = n(1);
    function i(e, t, n, r) {
      (this._x = e || 0),
        (this._y = t || 0),
        (this._z = n || 0),
        (this._w = void 0 !== r ? r : 1);
    }
    Object.assign(i, {
      slerp: function(e, t, n, r) {
        return n.copy(e).slerp(t, r);
      },
      slerpFlat: function(e, t, n, r, o, a, i) {
        var s = n[r + 0],
          c = n[r + 1],
          l = n[r + 2],
          u = n[r + 3],
          p = o[a + 0],
          f = o[a + 1],
          h = o[a + 2],
          m = o[a + 3];
        if (u !== m || s !== p || c !== f || l !== h) {
          var d = 1 - i,
            y = s * p + c * f + l * h + u * m,
            b = y >= 0 ? 1 : -1,
            v = 1 - y * y;
          if (v > Number.EPSILON) {
            var g = Math.sqrt(v),
              w = Math.atan2(g, y * b);
            (d = Math.sin(d * w) / g), (i = Math.sin(i * w) / g);
          }
          var _ = i * b;
          if (
            ((s = s * d + p * _),
            (c = c * d + f * _),
            (l = l * d + h * _),
            (u = u * d + m * _),
            d === 1 - i)
          ) {
            var C = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
            (s *= C), (c *= C), (l *= C), (u *= C);
          }
        }
        (e[t] = s), (e[t + 1] = c), (e[t + 2] = l), (e[t + 3] = u);
      }
    }),
      Object.defineProperties(i.prototype, {
        x: {
          get: function() {
            return this._x;
          },
          set: function(e) {
            (this._x = e), this.onChangeCallback();
          }
        },
        y: {
          get: function() {
            return this._y;
          },
          set: function(e) {
            (this._y = e), this.onChangeCallback();
          }
        },
        z: {
          get: function() {
            return this._z;
          },
          set: function(e) {
            (this._z = e), this.onChangeCallback();
          }
        },
        w: {
          get: function() {
            return this._w;
          },
          set: function(e) {
            (this._w = e), this.onChangeCallback();
          }
        }
      }),
      Object.assign(i.prototype, {
        set: function(e, t, n, r) {
          return (
            (this._x = e),
            (this._y = t),
            (this._z = n),
            (this._w = r),
            this.onChangeCallback(),
            this
          );
        },
        clone: function() {
          return new this.constructor(this._x, this._y, this._z, this._w);
        },
        copy: function(e) {
          return (
            (this._x = e.x),
            (this._y = e.y),
            (this._z = e.z),
            (this._w = e.w),
            this.onChangeCallback(),
            this
          );
        },
        toSimple: function() {
          return { x: this.x, y: this.y, z: this.z, w: this.w };
        },
        setFromEuler: function(e, t) {
          if (!e || !e.isEuler)
            throw new Error(
              "RK.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vec3 and order."
            );
          var n = e._x,
            r = e._y,
            o = e._z,
            a = e.order,
            i = Math.cos,
            s = Math.sin,
            c = i(n / 2),
            l = i(r / 2),
            u = i(o / 2),
            p = s(n / 2),
            f = s(r / 2),
            h = s(o / 2);
          return (
            "XYZ" === a
              ? ((this._x = p * l * u + c * f * h),
                (this._y = c * f * u - p * l * h),
                (this._z = c * l * h + p * f * u),
                (this._w = c * l * u - p * f * h))
              : "YXZ" === a
              ? ((this._x = p * l * u + c * f * h),
                (this._y = c * f * u - p * l * h),
                (this._z = c * l * h - p * f * u),
                (this._w = c * l * u + p * f * h))
              : "ZXY" === a
              ? ((this._x = p * l * u - c * f * h),
                (this._y = c * f * u + p * l * h),
                (this._z = c * l * h + p * f * u),
                (this._w = c * l * u - p * f * h))
              : "ZYX" === a
              ? ((this._x = p * l * u - c * f * h),
                (this._y = c * f * u + p * l * h),
                (this._z = c * l * h - p * f * u),
                (this._w = c * l * u + p * f * h))
              : "YZX" === a
              ? ((this._x = p * l * u + c * f * h),
                (this._y = c * f * u + p * l * h),
                (this._z = c * l * h - p * f * u),
                (this._w = c * l * u - p * f * h))
              : "XZY" === a &&
                ((this._x = p * l * u - c * f * h),
                (this._y = c * f * u - p * l * h),
                (this._z = c * l * h + p * f * u),
                (this._w = c * l * u + p * f * h)),
            !1 !== t && this.onChangeCallback(),
            this
          );
        },
        setFromAxisAngle: function(e, t) {
          var n = t / 2,
            r = Math.sin(n);
          return (
            (this._x = e.x * r),
            (this._y = e.y * r),
            (this._z = e.z * r),
            (this._w = Math.cos(n)),
            this.onChangeCallback(),
            this
          );
        },
        setFromRotationMatrix: function(e) {
          var t,
            n = e.elements,
            r = n[0],
            o = n[4],
            a = n[8],
            i = n[1],
            s = n[5],
            c = n[9],
            l = n[2],
            u = n[6],
            p = n[10],
            f = r + s + p;
          return (
            f > 0
              ? ((t = 0.5 / Math.sqrt(f + 1)),
                (this._w = 0.25 / t),
                (this._x = (u - c) * t),
                (this._y = (a - l) * t),
                (this._z = (i - o) * t))
              : r > s && r > p
              ? ((t = 2 * Math.sqrt(1 + r - s - p)),
                (this._w = (u - c) / t),
                (this._x = 0.25 * t),
                (this._y = (o + i) / t),
                (this._z = (a + l) / t))
              : s > p
              ? ((t = 2 * Math.sqrt(1 + s - r - p)),
                (this._w = (a - l) / t),
                (this._x = (o + i) / t),
                (this._y = 0.25 * t),
                (this._z = (c + u) / t))
              : ((t = 2 * Math.sqrt(1 + p - r - s)),
                (this._w = (i - o) / t),
                (this._x = (a + l) / t),
                (this._y = (c + u) / t),
                (this._z = 0.25 * t)),
            this.onChangeCallback(),
            this
          );
        },
        setFromUnitVectors:
          ((o = new a.a()),
          function(e, t) {
            return (
              void 0 === o && (o = new a.a()),
              (r = e.dot(t) + 1) < 1e-6
                ? ((r = 0),
                  Math.abs(e.x) > Math.abs(e.z)
                    ? o.set(-e.y, e.x, 0)
                    : o.set(0, -e.z, e.y))
                : o.crossVectors(e, t),
              (this._x = o.x),
              (this._y = o.y),
              (this._z = o.z),
              (this._w = r),
              this.normalize()
            );
          }),
        inverse: function() {
          return this.conjugate().normalize();
        },
        conjugate: function() {
          return (
            (this._x *= -1),
            (this._y *= -1),
            (this._z *= -1),
            this.onChangeCallback(),
            this
          );
        },
        dot: function(e) {
          return (
            this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
          );
        },
        lengthSq: function() {
          return (
            this._x * this._x +
            this._y * this._y +
            this._z * this._z +
            this._w * this._w
          );
        },
        length: function() {
          return Math.sqrt(
            this._x * this._x +
              this._y * this._y +
              this._z * this._z +
              this._w * this._w
          );
        },
        normalize: function() {
          var e = this.length();
          return (
            0 === e
              ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
              : ((e = 1 / e),
                (this._x = this._x * e),
                (this._y = this._y * e),
                (this._z = this._z * e),
                (this._w = this._w * e)),
            this.onChangeCallback(),
            this
          );
        },
        multiply: function(e, t) {
          return void 0 !== t
            ? (console.warn(
                "RK.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
              ),
              this.multiplyQuaternions(e, t))
            : this.multiplyQuaternions(this, e);
        },
        premultiply: function(e) {
          return this.multiplyQuaternions(e, this);
        },
        multiplyQuaternions: function(e, t) {
          var n = e._x,
            r = e._y,
            o = e._z,
            a = e._w,
            i = t._x,
            s = t._y,
            c = t._z,
            l = t._w;
          return (
            (this._x = n * l + a * i + r * c - o * s),
            (this._y = r * l + a * s + o * i - n * c),
            (this._z = o * l + a * c + n * s - r * i),
            (this._w = a * l - n * i - r * s - o * c),
            this.onChangeCallback(),
            this
          );
        },
        slerp: function(e, t) {
          if (0 === t) return this;
          if (1 === t) return this.copy(e);
          var n = this._x,
            r = this._y,
            o = this._z,
            a = this._w,
            i = a * e._w + n * e._x + r * e._y + o * e._z;
          if (
            (i < 0
              ? ((this._w = -e._w),
                (this._x = -e._x),
                (this._y = -e._y),
                (this._z = -e._z),
                (i = -i))
              : this.copy(e),
            i >= 1)
          )
            return (
              (this._w = a), (this._x = n), (this._y = r), (this._z = o), this
            );
          var s = Math.sqrt(1 - i * i);
          if (Math.abs(s) < 0.001)
            return (
              (this._w = 0.5 * (a + this._w)),
              (this._x = 0.5 * (n + this._x)),
              (this._y = 0.5 * (r + this._y)),
              (this._z = 0.5 * (o + this._z)),
              this
            );
          var c = Math.atan2(s, i),
            l = Math.sin((1 - t) * c) / s,
            u = Math.sin(t * c) / s;
          return (
            (this._w = a * l + this._w * u),
            (this._x = n * l + this._x * u),
            (this._y = r * l + this._y * u),
            (this._z = o * l + this._z * u),
            this.onChangeCallback(),
            this
          );
        },
        equals: function(e) {
          return (
            e._x === this._x &&
            e._y === this._y &&
            e._z === this._z &&
            e._w === this._w
          );
        },
        fromArray: function(e, t) {
          return (
            void 0 === t && (t = 0),
            (this._x = e[t]),
            (this._y = e[t + 1]),
            (this._z = e[t + 2]),
            (this._w = e[t + 3]),
            this.onChangeCallback(),
            this
          );
        },
        toArray: function(e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = 0),
            (e[t] = this._x),
            (e[t + 1] = this._y),
            (e[t + 2] = this._z),
            (e[t + 3] = this._w),
            e
          );
        },
        onChange: function(e) {
          return (this.onChangeCallback = e), this;
        },
        onChangeCallback: function() {}
      });
  },
  29: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return u;
    });
    var r = n(36),
      o = n(42);
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function s(e, t) {
      return !t || ("object" !== a(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function c(e) {
      return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function l(e, t) {
      return (l =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var u = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          s(this, c(t).apply(this, arguments))
        );
      }
      var n, a, u;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && l(e, t);
        })(t, r["a"]),
        (n = t),
        (a = [
          {
            key: "render",
            value: function() {
              var e = this.props.title,
                t = this.props.buttons || [],
                n =
                  this.props.onClose ||
                  console.error("No onClose for Overlay Dialog"),
                r = t.map(function(e, t) {
                  return React.createElement(o.a, {
                    icon: e.icon,
                    className: e.cancel ? "button-grey" : "",
                    key: t,
                    label: e.label,
                    onClick: e.onClick,
                    href: e.href,
                    download: e.download
                  });
                });
              return React.createElement(
                "div",
                {
                  style: { zIndex: this.props.prompt ? 20 : 10 },
                  className: "overlayModal",
                  key: "modal"
                },
                React.createElement("div", {
                  className: "overlayModal-bg",
                  onClick: n
                }),
                React.createElement(
                  "div",
                  { className: "overlayModal-window-wrapper" },
                  React.createElement(
                    "div",
                    {
                      className:
                        "overlayModal-window overlayModal-window--prompt"
                    },
                    React.createElement(
                      "div",
                      { className: "overlayDialog-header" },
                      React.createElement(
                        "div",
                        { className: "overlayDialog-title" },
                        e
                      ),
                      React.createElement(
                        "a",
                        { className: "overlay-x", onClick: n },
                        "Ã—"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "overlayDialog-content" },
                      this.props.children
                    ),
                    React.createElement(
                      "div",
                      { className: "overlayDialog-footer" },
                      r,
                      this.props.footer
                    )
                  )
                )
              );
            }
          }
        ]) && i(n.prototype, a),
        u && i(n, u),
        t
      );
    })();
  },
  36: function(e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function a(e, t) {
      return !t || ("object" !== r(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function s(e, t) {
      return (s =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    n.d(t, "a", function() {
      return l;
    });
    var c = VN.classNames,
      l = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            a(this, i(t).apply(this, arguments))
          );
        }
        var n, r, l;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && s(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "componentWillUnmount",
              value: function() {
                var e = document.createElement("input");
                e.setAttribute("type", "text"),
                  e.setAttribute("id", "tempInputToFixKeyboardFocusBug"),
                  document.body.appendChild(e),
                  e.focus(),
                  e.blur(),
                  document.body.removeChild(e);
              }
            },
            {
              key: "render",
              value: function() {
                return this.props.contentOnly
                  ? React.createElement(
                      "div",
                      { className: "overlayModal", key: "modal" },
                      React.createElement("div", {
                        className: "overlayModal-bg",
                        onClick: this.props.closeCallback
                      }),
                      React.createElement(
                        "div",
                        { className: "overlayModal-window-wrapper" },
                        React.createElement(
                          "div",
                          { className: c("overlayModal-window") },
                          this.props.children
                        )
                      )
                    )
                  : React.createElement(
                      "div",
                      { className: "overlayModal", key: "modal" },
                      React.createElement("div", {
                        className: "overlayModal-bg",
                        onClick: this.props.closeCallback
                      }),
                      React.createElement(
                        "div",
                        { className: "overlayModal-window-wrapper" },
                        React.createElement(
                          "div",
                          {
                            className: c(
                              "overlayModal-window",
                              this.props.extraClass
                            )
                          },
                          React.createElement(
                            "div",
                            { className: "overlayDialog-header" },
                            React.createElement(
                              "div",
                              { className: "overlayDialog-header-title" },
                              this.props.title
                            ),
                            React.createElement(
                              "div",
                              { className: "overlayDialog-header-right" },
                              this.props.header,
                              this.props.customCloseButton ||
                                React.createElement(
                                  "a",
                                  {
                                    className: "overlay-x",
                                    onClick: this.props.closeCallback
                                  },
                                  "Ã—"
                                )
                            )
                          ),
                          React.createElement(
                            "div",
                            { className: "overlayDialog-content" },
                            this.props.children
                          ),
                          this.props.footer &&
                            React.createElement(
                              "div",
                              { className: "overlayDialog-footer" },
                              this.props.footer
                            )
                        )
                      )
                    );
              }
            }
          ]) && o(n.prototype, r),
          l && o(n, l),
          t
        );
      })();
  },
  42: function(e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function a(e, t) {
      return !t || ("object" !== r(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function s(e, t) {
      return (s =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    n.d(t, "a", function() {
      return l;
    });
    var c = VN.classNames,
      l = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            a(this, i(t).apply(this, arguments))
          );
        }
        var n, r, l;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && s(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                var e = c(
                  "button",
                  { selected: this.props.selected },
                  { disabled: this.props.disabled },
                  this.props.className
                );
                return React.createElement(
                  "a",
                  {
                    className: e,
                    onClick: this.props.onClick,
                    href: this.props.href,
                    download: this.props.download
                  },
                  this.props.icon
                    ? React.createElement("img", {
                        className: "buttonicon",
                        src: this.props.icon
                      })
                    : null,
                  this.props.label
                );
              }
            }
          ]) && o(n.prototype, r),
          l && o(n, l),
          t
        );
      })();
  },
  58: function(e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function a(e, t) {
      return !t || ("object" !== r(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function i(e) {
      return (i = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function s(e, t) {
      return (s =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    n.d(t, "a", function() {
      return c;
    });
    var c = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = a(this, i(t).call(this, e))).state = { i: 0 }),
          n
        );
      }
      var n, r, c;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && s(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "next",
            value: function() {
              this.setState({
                i: (this.state.i + 1) % this.props.images.length
              });
            }
          },
          {
            key: "previous",
            value: function() {
              this.setState({
                i:
                  (this.state.i + this.props.images.length - 1) %
                  this.props.images.length
              });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                t = this.props.images[this.state.i];
              return React.createElement(
                "div",
                {
                  style: {
                    position: "relative",
                    top: 0,
                    left: 0,
                    textAlign: "center"
                  }
                },
                React.createElement("img", {
                  style: {
                    top: 0,
                    left: 0,
                    position: "relative",
                    maxWidth: "75vw",
                    maxHeight: "75vh"
                  },
                  onClick: function() {
                    e.next();
                  },
                  src: t
                }),
                this.props.images.length > 1 &&
                  React.createElement(
                    "a",
                    {
                      onClick: function() {
                        e.previous();
                      },
                      style: {
                        cursor: "pointer",
                        background: "#696969",
                        padding: "6px 16px",
                        borderRadius: "50%",
                        left: 5,
                        top: "47%",
                        position: "absolute"
                      }
                    },
                    "â€¹"
                  ),
                this.props.images.length > 1 &&
                  React.createElement(
                    "a",
                    {
                      onClick: function() {
                        e.next();
                      },
                      style: {
                        cursor: "pointer",
                        background: "#696969",
                        padding: "6px 16px",
                        borderRadius: "50%",
                        right: 5,
                        top: "47%",
                        position: "absolute"
                      }
                    },
                    "â€º"
                  )
              );
            }
          }
        ]) && o(n.prototype, r),
        c && o(n, c),
        t
      );
    })();
  },
  639: function(e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    n.r(t);
    var o = {
        bronze_28mm: !0,
        nylon_plastic_3inch: !0,
        rosegold_28mm: !0,
        steel_3inch: !0,
        steel_28mm: !0,
        strong_plastic_3inch: !0
      },
      a = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, a;
        return (
          (t = e),
          (a = [
            {
              key: "getAvailable",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : CK.data,
                  t = this.getSize(e),
                  n = "XL" === t || "XXL" === t,
                  r =
                    e.parts.base &&
                    CK.Options.getPart(e.parts.base).keywords.initiative,
                  a = CK.Options.products;
                if (
                  ((a = a.filter(function(e) {
                    return "hidden" !== e.visibility;
                  })),
                  n && r)
                )
                  throw Error(
                    "Larger & Initiative are incompatible. How did this happen?"
                  );
                return (
                  (a = n
                    ? a.filter(function(e) {
                        return e.tag === t;
                      })
                    : a.filter(function(e) {
                        return (
                          e.product_name.endsWith("_28mm") ||
                          e.product_name.endsWith("_3inch")
                        );
                      })),
                  r &&
                    (a = a.filter(function(e) {
                      return !(e.product_name in o);
                    })),
                  a
                );
              }
            },
            {
              key: "getScale",
              value: function() {
                var e = this.getSelectedProduct();
                return e ? e.scale : 1;
              }
            },
            {
              key: "getSelectedProduct",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : CK.data,
                  t = this.getAvailable(e),
                  n = e.physical;
                if (n) {
                  var r = t.find(function(e) {
                    return e.product_name === n;
                  });
                  if (r) return r;
                  var o = CK.Options.productsBySlug[n];
                  if (o)
                    return t.find(function(e) {
                      return e.material === o.material;
                    });
                }
              }
            },
            {
              key: "isExtraTall",
              value: function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : CK.data;
                return (
                  e.sliders &&
                  void 0 !== e.sliders.height &&
                  e.sliders.height > f.xlSliderThreshold
                );
              }
            },
            {
              key: "isExtraTallAvailable",
              value: function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : CK.data;
                if (e.parts.base) {
                  var t = CK.Options.getPart(e.parts.base);
                  if (t && t.keywords.initiative) return !1;
                }
                return !(
                  e.parts.mount ||
                  (e.physical && e.physical.endsWith("_3inch"))
                );
              }
            },
            {
              key: "countXLParts",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "XL",
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : CK.data,
                  n = 0;
                for (var r in t.parts) {
                  CK.Options.getPart(t.parts[r]).keywords[e] && n++;
                }
                return n;
              }
            },
            {
              key: "getSize",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : CK.data,
                  t = this.countXLParts("XL", e),
                  n = this.countXLParts("XXL", e);
                return (
                  this.isExtraTall(e) && t++,
                  n || t >= 3 || (t >= 2 && this.isExtraTall(e))
                    ? "XXL"
                    : t
                    ? "XL"
                    : void 0
                );
              }
            }
          ]),
          (n = null) && r(t.prototype, n),
          a && r(t, a),
          e
        );
      })();
    function i(e) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function s(e, t) {
      return !t || ("object" !== i(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function c(e) {
      return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function l(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function u(e, t, n) {
      return t && l(e.prototype, t), n && l(e, n), e;
    }
    function p(e, t) {
      return (p =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var f = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = s(this, c(t).call(this, e))).refresh = function() {
            return n.forceUpdate();
          }),
          n
        );
      }
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && p(e, t);
        })(t, React.Component),
        u(t, null, [
          {
            key: "updateCamera",
            value: function() {
              var e =
                  5.588 * (CK.renderManager.width / CK.renderManager.height),
                t = CK.orbitCamera.override;
              (t.left = e / -2),
                (t.right = e / 2),
                (t.top = 2.794),
                (t.bottom = -2.794),
                t.updateProjectionMatrix(!0),
                t.updateMatrixWorld(!0);
            }
          },
          {
            key: "enable",
            value: function() {
              UIState.set({ showSizing: !0 }),
                (this.backgroundVisible = CK.environment.background.visible),
                (CK.environment.background.visible = !1),
                (this.groundVisible = CK.environment.ground.visible),
                (CK.environment.ground.visible = !1);
              var e = new RK.OrthographicCamera(-2, 2, 2, -2, 2, 300);
              e.position.set(10, 2.286, 0),
                e.rotation.set(0, Math.PI / 2, 0),
                CK.orbitCamera.setOverride(e),
                (CK.orbitCamera.controls.enabled = !1),
                this.updateCamera(),
                CK.GameLoop.requestRenderRefresh();
            }
          },
          {
            key: "disable",
            value: function() {
              UIState.showSizing &&
                (UIState.set({ showSizing: !1 }),
                CK.orbitCamera.removeOverride(),
                (CK.orbitCamera.controls.enabled = !0),
                (CK.environment.ground.visible = this.backgroundVisible),
                (CK.environment.background.visible = this.groundVisible),
                CKUI.hfBGImage && (CKUI.hfBGImage.style.visibility = "hidden"),
                CK.renderManager.requestShadowUpdate(),
                CK.GameLoop.requestRenderRefresh());
            }
          }
        ]),
        u(
          t,
          [
            {
              key: "componentDidMount",
              value: function() {
                CK.Events.on("sliderChanged", this.refresh),
                  CK.Events.on("resized", this.refresh),
                  CK.Events.on("CharacterFinishedChanging", this.refresh);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                CK.Events.off("sliderChanged", this.refresh),
                  CK.Events.off("resized", this.refresh),
                  CK.Events.off("CharacterFinishedChanging", this.refresh);
              }
            },
            {
              key: "render",
              value: function() {
                if (!UIState.showSizing) return null;
                t.updateCamera(), t.getMarkerScreenPos();
                var e = CK.renderManager.height,
                  n = Math.floor(
                    CK.renderManager.width / 2 -
                      e / 2 -
                      CK.orbitCamera.getOffsetX(CK.renderManager.width)
                  ),
                  r = t.getMarkerScreenPos(),
                  o = "/static/svg/measure"
                    .concat(UIState.compact ? "-compact" : "")
                    .concat(2 === a.getScale() ? "-2X" : "", ".svg");
                return React.createElement(
                  "div",
                  { className: "sizing", style: { height: e } },
                  React.createElement("img", {
                    src: o,
                    id: "background-image",
                    className: "sizing-img",
                    style: { left: n }
                  }),
                  React.createElement(
                    "div",
                    { className: "sizing-marker", style: { bottom: r } },
                    React.createElement(
                      "div",
                      { className: "sizing-marker-text" },
                      "Standing Straight"
                    )
                  )
                );
              }
            }
          ],
          [
            {
              key: "getMarkerScreenPos",
              value: function() {
                return (
                  (1 / 11) * CK.renderManager.height +
                  (this.getHeightToTopOfHead() / 55.88) *
                    CK.renderManager.height
                );
              }
            },
            {
              key: "getHeightToTopOfHead",
              value: function() {
                var e = CK.data.sliders.height,
                  t = 0;
                e < this.midpoint && (t = 0.7 * (1 - e / this.midpoint));
                var n = CK.display.getObjectByName(
                    "main_head_01_height_247_bind_jnt"
                  ),
                  r = CK.display.getObjectByName(
                    "main_spine_02_height_182_bind_jnt"
                  );
                if (n && r) {
                  var o = new RK.Vec3();
                  o.setFromMatrixScale(n.matrixWorld);
                  var a = new RK.Vec3();
                  return (
                    a.setFromMatrixScale(r.matrixWorld),
                    1.01 * (29.586 * a.y + 4.42 * o.y - t)
                  );
                }
              }
            }
          ]
        ),
        t
      );
    })();
    (f.minFeet = 3),
      (f.maxFeet = 11),
      (f.xlFeet = 7),
      (f.xlSliderThreshold = (f.xlFeet - f.minFeet) / (f.maxFeet - f.minFeet)),
      (f.midpoint = 0.75 * f.xlSliderThreshold);
    var h = {},
      m = f.xlSliderThreshold;
    (h.height = {
      val: 0.5,
      targets: [
        {
          name: "heightDef",
          type: "joint",
          start: 0,
          end: f.midpoint,
          min: 0,
          max: 0.5
        },
        {
          name: "heightDef",
          type: "joint",
          start: f.midpoint,
          end: 1 * m,
          min: 0.5,
          max: 1
        },
        {
          name: "heightDef",
          type: "joint",
          start: 1 * m,
          end: 1,
          min: 1,
          max: 1
        }
      ]
    }),
      (h.weightUpper = {
        val: 0,
        targets: [
          {
            name: "bulkUpperDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ]
      }),
      (h.weightLower = {
        val: 0,
        targets: [
          {
            name: "bulkLowerDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "bulkSkirtDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ]
      }),
      (h.weighTorso = {
        val: 0,
        targets: [
          {
            name: "bulkTorsoDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "bulkSkirtDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ]
      }),
      (h.posture = {
        val: 0.5,
        targets: [
          {
            name: "postureDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ]
      }),
      (h.headSize = {
        val: 0,
        targets: [
          {
            name: "headScaleDef",
            type: "slider",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ]
      }),
      (h.build = {
        val: 0,
        targets: [
          {
            name: "shoulderWidthDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ],
        shortName: "b"
      }),
      (h.muscularity = {
        val: 0,
        targets: [
          {
            name: "muscularityDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "muscularity",
            type: "morph",
            slot: "bodyUpper",
            start: 0.5,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "muscularity",
            type: "morph",
            slot: "bodyLower",
            start: 0.5,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "muscularity",
            type: "morph",
            slot: "torsoBridge",
            start: 0.5,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "normal2Blend",
            type: "shader",
            slot: "bodyUpper",
            start: 0.5,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "normal2Blend",
            type: "shader",
            slot: "bodyLower",
            start: 0.5,
            end: 1,
            min: 0,
            max: 1
          }
        ],
        shortName: "m"
      }),
      (h.bust = {
        val: 0.5,
        targets: [
          {
            name: "chestDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 0.9
          }
        ],
        shortName: "bu"
      }),
      (h.waist = {
        val: 0.75,
        targets: [
          { name: "waistDef", type: "joint", start: 0, end: 1, min: 0, max: 1 }
        ],
        shortName: "wa"
      }),
      (h.curves = {
        val: 0.3,
        targets: [
          { name: "curvesDef", type: "joint", start: 0, end: 1, min: 0, max: 1 }
        ],
        shortName: "c"
      }),
      (h.booty = {
        val: 0,
        targets: [
          {
            name: "bootyDef",
            type: "joint",
            start: 0,
            end: 1,
            min: 0,
            max: 0.9
          }
        ],
        shortName: "bo"
      }),
      (h.faceSoftness = {
        val: 0.5,
        targets: [
          {
            name: "male",
            type: "morph",
            slot: "eyebrows",
            start: 0,
            end: 0.5,
            min: 1,
            max: 0
          },
          {
            name: "male",
            type: "morph",
            slot: "face",
            start: 0,
            end: 0.5,
            min: 1,
            max: 0
          },
          {
            name: "female",
            type: "morph",
            slot: "eyebrows",
            start: 0.5,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "female",
            type: "morph",
            slot: "face",
            start: 0.5,
            end: 1,
            min: 0,
            max: 1
          }
        ],
        shortName: "f"
      }),
      (h.jaw = {
        val: 0,
        targets: [
          { name: "jawDef", type: "joint", start: 0, end: 1, min: 0, max: 0.8 }
        ],
        shortName: "j"
      }),
      (h.xprsn_smile = {
        val: 0,
        targets: [
          {
            name: "xprsn_smile",
            type: "morph",
            slot: "face",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "xprsn_smile",
            type: "morph",
            slot: "eyebrows",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "xprsn_smile",
            type: "morph",
            slot: "beard",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ],
        shortName: "xs"
      }),
      (h.xprsn_cocky = {
        val: 0,
        targets: [
          {
            name: "xprsn_cocky",
            type: "morph",
            slot: "face",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "xprsn_cocky",
            type: "morph",
            slot: "eyebrows",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "xprsn_cocky",
            type: "morph",
            slot: "beard",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ],
        shortName: "xc"
      }),
      (h.xprsn_snarl = {
        val: 0,
        targets: [
          {
            name: "xprsn_snarl",
            type: "morph",
            slot: "face",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "xprsn_snarl",
            type: "morph",
            slot: "eyebrows",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "xprsn_snarl",
            type: "morph",
            slot: "beard",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ],
        shortName: "xn"
      }),
      (h.xprsn_confused = {
        val: 0,
        targets: [
          {
            name: "xprsn_confused",
            type: "morph",
            slot: "face",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "xprsn_confused",
            type: "morph",
            slot: "eyebrows",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "xprsn_confused",
            type: "morph",
            slot: "beard",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ],
        shortName: "xo"
      }),
      (h.initiative_base_width = {
        val: 0.042735042735042736,
        targets: [
          {
            name: "widthDef",
            type: "joint",
            slot: "base",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          },
          {
            name: "widthDef",
            type: "joint",
            slot: "baseCollision",
            start: 0,
            end: 1,
            min: 0,
            max: 1
          }
        ]
      }),
      (h.belly = {
        val: 0,
        targets: [
          { name: "bellyDef", type: "joint", start: 0, end: 1, min: 0, max: 1 },
          { name: "bellyDef", type: "joint", start: 0, end: 1, min: 0, max: 1 }
        ]
      }),
      (h.lookH = {
        val: 0.5,
        targets: [
          { name: "lookHDef", type: "joint", start: 0, end: 1, min: 0, max: 1 }
        ]
      }),
      (h.lookV = {
        val: 0.5,
        targets: [
          { name: "lookVDef", type: "joint", start: 0, end: 1, min: 0, max: 1 }
        ]
      });
    var d = { sliders: h },
      y = n(87);
    function b(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function v(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? b(n, !0).forEach(function(t) {
              g(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : b(n).forEach(function(t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function g(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    var w = Math.PI,
      _ = (Math.PI, Math.PI / 2),
      C = Math.PI / 4;
    function k(e, t) {
      for (var n = {}, r = { cone: t }, o = e.length, a = 0; a < 2; ++a)
        (r.cone.x[a] /= o), (r.cone.y[a] /= o), (r.cone.z[a] /= o);
      for (var i = 0; i < o; ++i) {
        n[e[i]] = r;
      }
      return n;
    }
    for (
      var R = {
          bodyUpper: v(
            {
              149: {
                cone: {
                  x: [-_, _],
                  y: [-_, C],
                  z: [-_, _],
                  order: "twistswing",
                  orient: { x: 0, y: 0, z: 1, w: 0 }
                },
                left: 63
              },
              123: {
                cone: {
                  x: [0, 0],
                  y: [-C, C],
                  z: [0.1 * -w, C],
                  order: "swingtwist",
                  orient: { x: 0, y: 0, z: 1, w: 0 }
                },
                left: 36
              },
              99: {
                cone: {
                  x: [-_, _],
                  y: [-C, 0.6 * w],
                  z: [-_, _],
                  order: "swingtwist",
                  orient: { x: 0, y: 0, z: 1, w: 0 }
                },
                left: 12
              },
              104: {
                cone: {
                  x: [-1.3, 0.05],
                  y: [1, -1],
                  z: [1, -1],
                  order: "swingtwist",
                  orient: new RK.Quaternion()
                    .setFromUnitVectors(
                      new RK.Vec3(1, 0, 0),
                      new RK.Vec3(0, 1, 0)
                    )
                    .toSimple()
                },
                left: 17
              },
              1: { rot: { y: [-1, 1], z: [-1.5, 1] } },
              288: { pos: { x: [-1, 1], y: [-1, 1], z: [-1, 1] } }
            },
            k([91, 93, 95], {
              x: [-_, _],
              y: [-_, _],
              z: [-_, _],
              order: "swingtwist"
            }),
            {},
            k([177, 180, 184], {
              x: [-_, _],
              y: [1.3 * -_, 1.3 * _],
              z: [1.3 * -_, 1.3 * _],
              order: "swingtwist"
            })
          ),
          shouldersR: {
            201: {
              cone: {
                x: [-_, _],
                y: [-_, _],
                z: [-_, _],
                order: "swingtwist",
                orient: { x: 0, y: 0, z: 1, w: 0 },
                mirrorsliders: "xz"
              },
              pos: { x: [-0.08, 0.1], y: [-0.05, 0.2], z: [-0.1, 0.1] },
              left: 197
            }
          },
          itemR: {
            198: {
              rot: { y: [-Math.PI, Math.PI] },
              pos: { y: [-1, 1] },
              left: 194
            }
          },
          itemD: { 501: { rot: { x: [-Math.PI, Math.PI] } } },
          tail: v(
            {},
            k(
              [
                500,
                504,
                505,
                506,
                507,
                508,
                509,
                510,
                511,
                512,
                513,
                514,
                515,
                516,
                517,
                518
              ],
              {
                x: [-4 * w, 4 * w],
                y: [-4 * w, 4 * w],
                z: [-4 * w, 4 * w],
                order: "swingtwist"
              }
            )
          ),
          wingsR: {
            500: {
              cone: {
                x: [-_, _],
                y: [-_, _],
                z: [-_, _],
                order: "swingtwist",
                orient: { x: 0, y: 0, z: 1, w: 0 }
              },
              left: 500
            }
          },
          beard: v(
            {},
            k([501, 502, 503, 504, 505, 506, 507], {
              x: [-2.5 * w, 2.5 * w],
              y: [-2.5 * w, 2.5 * w],
              z: [-2.5 * w, 2.5 * w],
              order: "swingtwist"
            })
          ),
          hair: v(
            {},
            k([533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544], {
              x: [-2.5 * w, 2.5 * w],
              y: [-2.5 * w, 2.5 * w],
              z: [-2.5 * w, 2.5 * w],
              order: "swingtwist"
            }),
            {},
            k([546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557], {
              x: [-2.5 * w, 2.5 * w],
              y: [-2.5 * w, 2.5 * w],
              z: [-2.5 * w, 2.5 * w],
              order: "swingtwist"
            })
          ),
          back: v(
            {},
            k([500, 501, 502, 503, 504, 505, 506, 507], {
              x: [-0.5 * w, 0.5 * w],
              y: [-0.5 * w, 0.5 * w],
              z: [-2 * w, 2 * w],
              order: "swingtwist"
            })
          ),
          face: v(
            {},
            k(
              [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512],
              {
                x: [-4.4 * w, 4.4 * w],
                y: [-5.35 * w, 5.35 * w],
                z: [-5.35 * w, 5.35 * w],
                order: "swingtwist"
              }
            )
          ),
          sideR: {
            500: {
              cone: { x: [-2, 2], y: [0, 0], z: [0, 0], order: "swingtwist" },
              left: 500
            }
          }
        },
        S = Object.keys(R),
        O = 0;
      O < S.length;
      ++O
    ) {
      var E = S[O],
        x = E.endsWith("R"),
        j = E;
      x && void 0 === R[(j = E.slice(0, -1) + "L")] && (R[j] = {});
      for (var P = R[E], M = Object.keys(P), T = 0; T < M.length; ++T) {
        var K = M[T],
          I = P[K],
          N = I.left;
        if (void 0 !== N) {
          var L = JSON.parse(JSON.stringify(I)),
            U = L.cone;
          U && y.a.MirrorCone(U), delete L.left, (L.right = K), (R[j][N] = L);
        }
      }
    }
    (R.bodyUpper0 = R.bodyUpper),
      (R.bodyUpper1 = R.bodyUpper),
      (R.itemR0 = R.itemR),
      (R.itemR1 = R.itemR);
    var D = { limits: R };
    function z(e) {
      return (z =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function A(e, t, n) {
      return (A = (function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Reflect.construct
        : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new (Function.bind.apply(e, r))();
            return n && H(o, n.prototype), o;
          }).apply(null, arguments);
    }
    function B(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        })()
      );
    }
    function F(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function V(e, t) {
      return !t || ("object" !== z(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function q(e, t, n) {
      return (q =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = W(e));

                );
                return e;
              })(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n) : o.value;
              }
            })(e, t, n || e);
    }
    function W(e) {
      return (W = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function H(e, t) {
      return (H =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Q = [
        ["main_armR_02_101_bind_jnt", "main_armR_03_104_bind_jnt"],
        ["main_armL_02_014_bind_jnt", "main_armL_03_017_bind_jnt"]
      ],
      X = [
        "main_armR_02_elbowHold_102_bind_jnt",
        "main_armL_02_elbowHold_015_bind_jnt"
      ],
      G = {
        name: "neck",
        bones: [
          "main_neck_01_091_bind_jnt",
          "main_neck_02_093_bind_jnt",
          "main_neck_03_095_bind_jnt"
        ],
        maxOffsets: [0.4, 0.4, 0.4],
        minOffsets: [-0.4, -0.4, -0.2]
      },
      Y = {
        name: "spine",
        bones: [
          "main_spine_01_177_bind_jnt",
          "main_spine_02_180_bind_jnt",
          "main_spine_03_184_bind_jnt"
        ],
        maxOffsets: [0.4, 0.4, 0.4],
        minOffsets: [-0.4, -0.4, -0.4]
      },
      Z = {
        main_handR_01_offset_149_bind_jnt: [
          "main_armR_twist_04_113_bind_jnt",
          "main_armR_twist_03_111_bind_jnt",
          "main_armR_twist_02_109_bind_jnt",
          "main_armR_twist_01_107_bind_jnt"
        ],
        main_handL_01_offset_063_bind_jnt: [
          "main_armL_twist_04_026_bind_jnt",
          "main_armL_twist_03_024_bind_jnt",
          "main_armL_twist_02_022_bind_jnt",
          "main_armL_twist_01_020_bind_jnt"
        ]
      },
      J = [
        [
          "main_handR_01_offset_149_bind_jnt",
          [
            "gloveR_01_fat_500_bind_jnt",
            "gloveR_02_fat_501_bind_jnt",
            "gloveR_03_fat_502_bind_jnt"
          ]
        ],
        [
          "main_handL_01_offset_063_bind_jnt",
          [
            "gloveL_01_fat_500_bind_jnt",
            "gloveL_02_fat_501_bind_jnt",
            "gloveL_03_fat_502_bind_jnt"
          ]
        ]
      ],
      $ = {
        main_armR_02_101_bind_jnt: [
          "main_armR_upperTwist_01_114_bind_jnt",
          "main_armR_upperTwist_02_115_bind_jnt"
        ],
        main_armL_02_014_bind_jnt: [
          "main_armL_upperTwist_01_027_bind_jnt",
          "main_armL_upperTwist_02_028_bind_jnt"
        ]
      },
      ee = ["bodyUpper", "bodyUpper0", "bodyUpper1"],
      te = ["main_armR_01_099_bind_jnt", "main_armL_01_012_bind_jnt"],
      ne = ["back", "chest", "legs", "bodyLower", "bodyUpper"],
      re = {};
    for (var oe in ne) re[ne[oe]] = oe + 1;
    var ae = [
        [
          "centaur_spine_05_curves_544_bind_jnt",
          "centaur_upperbody_bend_curves_552_bind_jnt",
          "centaur_spine01_curves_554_bind_jnt",
          "centaur_pelvis_curves_556_bind_jnt",
          "centaur_ft_legL_clav_curves_545_bind_jnt",
          "centaur_ft_legL_shoulder_curves_546_bind_jnt",
          "centaur_ft_legR_clav_curves_548_bind_jnt",
          "centaur_ft_legR_shoulder_curves_549_bind_jnt",
          "centaur_bk_legL_hip_curves_558_bind_jnt",
          "centaur_bk_legR_hip_curves_560_bind_jnt"
        ]
      ],
      ie = [
        [
          "centaur_spine_01_fat_539_bind_jnt",
          "centaur_spine_02_fat_540_bind_jnt",
          "centaur_spine_03_fat_541_bind_jnt",
          "centaur_spine_04_fat_542_bind_jnt"
        ],
        ["centaur_spine_05_fat_543_bind_jnt"],
        [
          "centaur_upperbody_bend_fat_551_bind_jnt",
          "centaur_spine01_fat_553_bind_jnt"
        ],
        [
          "centaur_pelvis_fat_555_bind_jnt",
          "centaur_ft_legL_top_fat_547_bind_jnt",
          "centaur_ft_legR_top_fat_550_bind_jnt",
          "centaur_bk_legL_hip_fat_557_bind_jnt",
          "centaur_bk_legR_hip_fat_559_bind_jnt"
        ]
      ],
      se = [
        ["centaur_upperbody_bend_fatTOP_562_bind_jnt"],
        ["centaur_spine01_fatTOP_561_bind_jnt"]
      ],
      ce = [
        ["centaur_spine01_belly_563_bind_jnt"],
        ["centaur_upperbody_bend_belly_564_bind_jnt"]
      ],
      le = [
        ["centaur_spine01_waist_565_bind_jnt"],
        ["centaur_upperbody_bend_waist_566_bind_jnt"]
      ],
      ue = {
        bulkUpperDef: !0,
        heightDef: !0,
        muscularityDef: !0,
        postureDef: !0,
        shoulderWidthDef: !0
      };
    var pe = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = V(this, W(t).call(this, e))).rivets = {}),
          (n.rivetsObj = new RK.Object3D()),
          (n.rivetsObj.name = "rivets"),
          n.add(n.rivetsObj),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && H(e, t);
        })(t, CK.Display),
        (n = t),
        (r = [
          {
            key: "_customUpdateEnd",
            value: function() {
              this._addRivets(),
                this._backHierarchy(),
                this._parentAttachParts(),
                this._horns();
            }
          },
          {
            key: "_centaur",
            value: function() {
              var e = this,
                t = this.getBone(
                  "centaur_pelvis_end_510_bind_jnt",
                  "bodyLower"
                ),
                n = this.getBone("tail_attach_500_bind_jnt", "tail"),
                r = this.getBone("main_tail_snap_389_bind_jnt", "bodyUpper");
              this.getBone("main_hips_holding_006_bind_jnt", "bodyUpper");
              if (t) {
                n &&
                  (t
                    ? this.reParent(n, t)
                    : r
                    ? r.add(n)
                    : console.error("No tail parents found.."));
                var o = this.getBone(
                    "centaur_height_502_bind_jnt",
                    "bodyLower"
                  ),
                  a = this.data.data.sliders.height;
                if (a < 0.375) {
                  var i = this.rangeThis_rangeThat(a, 0, 0.375, 0.8, 1);
                  o.scale.set(i, i, i);
                } else {
                  var s = this.rangeThis_rangeThat(a, 0.375, 1, 1, 1.45);
                  o.scale.set(s, s, s);
                }
                var c = this.data.data.sliders.curves;
                if (c >= 0.5) {
                  var l = this.rangeThis_rangeThat(c, 0.5, 1, 1, 1.2);
                  ae[0].map(function(t) {
                    e.getBone(t, "bodyLower").scale.set(1, 1, l);
                  });
                }
                var u = this.data.data.sliders.weightLower;
                u >= 0.5
                  ? (ie[0].map(function(t) {
                      var n = e.rangeThis_rangeThat(u, 0.5, 1, 1, 1.1);
                      e.getBone(t, "bodyLower").scale.set(1, n, n);
                    }),
                    ie[1].map(function(t) {
                      var n = e.rangeThis_rangeThat(u, 0.5, 1, 1, 1.2),
                        r = e.rangeThis_rangeThat(u, 0.5, 1, 1, 1.1);
                      e.getBone(t, "bodyLower").scale.set(1, r, n);
                    }),
                    ie[2].map(function(t) {
                      var n = e.rangeThis_rangeThat(u, 0.5, 1, 1, 1.1);
                      e.getBone(t, "bodyLower").scale.set(1, 1, n);
                    }),
                    ie[3].map(function(t) {
                      var n = e.rangeThis_rangeThat(u, 0.5, 1, 1, 1.2);
                      e.getBone(t, "bodyLower").scale.set(1, 1, n);
                    }))
                  : [0, 1, 3].map(function(t) {
                      ie[t].map(function(t) {
                        var n = e.rangeThis_rangeThat(u, 0, 0.5, 0.9, 1);
                        e.getBone(t, "bodyLower").scale.set(1, 1, n);
                      });
                    });
                var p = this.data.data.sliders.weighTorso;
                p >= 0.5 &&
                  (se[0].map(function(t) {
                    var n = e.rangeThis_rangeThat(p, 0.5, 1, 1, 1.3),
                      r =
                        (e.rangeThis_rangeThat(p, 0.5, 1, 1, 1.3),
                        e.rangeThis_rangeThat(p, 0.5, 1, 1, 1.2));
                    e.getBone(t, "bodyLower").scale.set(1, n, r);
                  }),
                  se[1].map(function(t) {
                    var n = e.rangeThis_rangeThat(p, 0.5, 1, 1, 1.3);
                    e.getBone(t, "bodyLower").scale.set(1, n, n);
                  }));
                var f = this.data.data.sliders.belly || 0;
                ce[0].map(function(t) {
                  var n = e.rangeThis_rangeThat(f, 0, 1, 1, 1.2);
                  e.getBone(t, "bodyLower").scale.set(1, n, n);
                }),
                  ce[1].map(function(t) {
                    var n = e.rangeThis_rangeThat(f, 0, 1, 1, 1.3);
                    e.getBone(t, "bodyLower").scale.set(1, n, 1);
                  });
                var h = this.data.data.sliders.waist;
                h >= 0.5
                  ? [0, 1].map(function(t) {
                      le[t].map(function(t) {
                        var n = e.rangeThis_rangeThat(h, 0.5, 1, 1, 1.1);
                        e.getBone(t, "bodyLower").scale.set(1, n, n);
                      });
                    })
                  : le[0].map(function(t) {
                      var n = e.rangeThis_rangeThat(h, 0, 0.5, 0.8, 1);
                      e.getBone(t, "bodyLower").scale.set(1, n, 1);
                    });
              }
            }
          },
          {
            key: "rangeThis_rangeThat",
            value: function(e, t, n, r, o) {
              return ((o - r) / (n - t)) * (e - t) + r;
            }
          },
          {
            key: "_familiar",
            value: function() {
              var e = this.meshes.baseItem;
              if (this.data.poses.baseItem && e) {
                var t = this.meshes.mount
                  ? this.meshes.mount.skeleton.getBoneByName(
                      "baseItem_snap_500_bind_jnt"
                    ) ||
                    console.error(
                      "baseItem_snap_500_bind_jnt not found for familiar snap"
                    )
                  : this.skeletons.main.getBoneByName(
                      "main_baseItem_snap_388_bind_jnt"
                    ) ||
                    console.error(
                      "main_baseItem_snap_388_bind_jnt not found for familiar snap"
                    );
                t && t.add(e);
                var n = e.skeleton.obj.children[0].name;
                this.getBone(n, "baseItem").position.set(0, 0, 0);
              }
            }
          },
          {
            key: "_backHierarchy",
            value: function() {
              var e = this,
                t = this.rivets.backAttach;
              if (!t)
                return (
                  this.meshes.backItemR &&
                  console.error(
                    "Must have centerBack rivet in scene for back item"
                  )
                );
              this._backAttachRivet = t;
              var n = this.extraXLScale();
              t.scale.set(n, n, n);
              var r = this.getMeshLocator("backItemR", "attachLayer");
              if (this.meshes.backItemR) {
                if (!r) {
                  r = new RK.Object3D();
                  var o = this.getMeshLocator("backItemR", "attach_radius");
                  (r.position.x = o ? o.position.xz.length() : 0.08),
                    this.meshes.backItemR.locators ||
                      (this.meshes.backItemR.locators = {}),
                    this.meshes.backItemR.add(r),
                    (this.meshes.backItemR.locators.attachLayer = r);
                }
                r.origRot || (r.origRot = r.rotation.clone()),
                  (r.rotation.z = r.origRot.z + Math.PI),
                  (r.rotation.x = r.origRot.x);
              }
              for (; t.children.length; ) t.remove(t.children[0]);
              if (r) for (; r.children.length; ) r.remove(r.children[0]);
              ["R", "L"].map(function(n, o) {
                var a = "backItem" + n,
                  i = e.meshes[a];
                if (i) {
                  var s = !!o,
                    c = e.getLocator(a, "koozie"),
                    l = new RK.Object3D();
                  l.add(i),
                    c &&
                      (i.position.copy(c.position.clone().negate()),
                      l.quaternion.copy(c.quaternion.clone().inverse()));
                  var u = new RK.Bone(),
                    p = e.getMeshLocator(a, "attach");
                  if (
                    (p && c && console.error("attach and koozie found for", a),
                    !p)
                  ) {
                    p = new RK.Bone();
                    var f = e.getMeshLocator(a, "attach_radius");
                    p.position.x = s
                      ? f
                        ? f.position.xz.length()
                        : 0.08
                      : f
                      ? -f.position.xz.length()
                      : -0.08;
                  }
                  var h = new RK.Bone();
                  h.name = "backItem".concat(n, "_transform_jnt");
                  var m = p.clone();
                  s &&
                    !e.meshes.backItemR &&
                    m.rotateOnAxis(new RK.Vec3(0, 0, 1), Math.PI);
                  var d = -Math.PI / 6;
                  s && (d *= r ? 2 : -1);
                  var y = new RK.Quaternion().setFromAxisAngle(
                    new RK.Vec3(1, 0, 0),
                    d
                  );
                  m.quaternion.multiply(y), m.quaternion.inverse();
                  var b = new RK.Object3D();
                  b.position.copy(p.position.clone().negate());
                  var v = e.meshes["itemBind" + n];
                  if (v) {
                    "connect" !== v.part.name
                      ? (v.position.y = p.position.y)
                      : (v.position.copy(p.position),
                        v.rotation.copy(p.rotation),
                        v.scale.copy(p.scale)),
                      b.add(v);
                    var g = e.getLocator(a, "attach_depth"),
                      w = e.getLocator(a, "attach_width");
                    g &&
                      CK.Display.setMorph(
                        v,
                        "depth",
                        g.position.xz.length() / 0.1 - 1
                      ),
                      w &&
                        CK.Display.setMorph(
                          v,
                          "width",
                          w.position.xz.length() / 0.1 - 1
                        );
                  }
                  var _ = e.meshes["backItemAttach" + n];
                  _ && i.add(_), !s && r && b.add(r);
                  var C = s && r ? r : t;
                  b.add(u), h.add(b), u.add(l), C.add(h);
                  var k = m.quaternion.clone();
                  (u.poses = {
                    rot: u.quaternion.toArray(),
                    pos: u.position.toArray()
                  }),
                    (u.name = "backItem".concat(n, "_twist_transform_jnt")),
                    (h.poses = { rot: k.toArray() }),
                    h.quaternion.copy(k);
                }
              });
            }
          },
          {
            key: "_parentAttachParts",
            value: function() {
              for (var e in this.meshes)
                if (e.startsWith("a_")) {
                  var t = e.split(",")[1],
                    n = this.rivets[t];
                  n
                    ? n.add(this.meshes[e])
                    : console.error(
                        "Rivet",
                        t,
                        "not found. Should not have gotten this far."
                      );
                }
            }
          },
          {
            key: "_horns",
            value: function() {
              for (var e in this.meshes)
                if (e.startsWith("horn")) {
                  var t = this.meshes[e],
                    n = t.geometry;
                  if (n && n.locators && n.locators.pivot) {
                    var r = n.locators.pivot;
                    (
                      this.rivets[e] || console.error("Could not find rivet", e)
                    ).add(r),
                      r.add(t),
                      r.poses ||
                        ((r.rotation.x = 0),
                        (r.poses = {
                          rot: r.quaternion.toArray(),
                          pos: r.position.toArray(),
                          scl: [1, 1, 1]
                        }),
                        (r.name = "".concat(e, "_pivot_jnt")));
                  }
                }
            }
          },
          {
            key: "armHasIK",
            value: function() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  ? "main_armL_01_012_bind_jnt"
                  : "main_armR_01_099_bind_jnt";
              return !(
                !this.data.ikChains.length ||
                !this.data.ikChains.find(function(t) {
                  return t.chain.find(function(t) {
                    return t === e;
                  });
                })
              );
            }
          },
          {
            key: "_customUpdateStart",
            value: function() {
              for (
                var e = Math.max(
                    this.data.custom.arms || 0,
                    this.data.custom.tails || 0
                  ),
                  t = 0;
                t < 8;
                t++
              ) {
                var n = "main_" + t;
                if (e > t) {
                  if (!this.skeletons[n]) {
                    (this.skeletons[n] = new CK.MixerSkeleton()),
                      (this.skeletons[n].skeletonSlot = n),
                      this.add(this.skeletons[n].obj);
                    var r = CK.Resources.getNow(this.skeletonPath);
                    this.skeletons[n].addMainSkel(
                      r.copyWithSharing(),
                      "skeleton"
                    ),
                      this.add(this.skeletons[n].obj);
                  }
                } else
                  this.skeletons[n] &&
                    (this.remove(this.skeletons[n].obj),
                    delete this.skeletons[n]);
              }
            }
          },
          {
            key: "_applyJointWeights",
            value: function() {
              q(W(t.prototype), "_applyJointWeights", this).call(this),
                this._applyArmSliders(this.data.jointWeights.default);
            }
          },
          {
            key: "_applyJointWeight",
            value: function(e, n) {
              q(W(t.prototype), "_applyJointWeight", this).call(this, e, n),
                this._applyArmSliders(n);
            }
          },
          {
            key: "_applyArmSliders",
            value: function(e) {
              if (this.data.custom.arms)
                for (var t = 0; t < this.data.custom.arms; t++) {
                  var n = "main_" + t,
                    r = this.skeletons[n];
                  for (var o in e)
                    o in r.sliders && r.setSlider(o, o in ue ? e[o] : 0);
                }
            }
          },
          {
            key: "getWorldPos",
            value: function(e) {
              var t = new RK.Vec3();
              return t.setFromMatrixPosition(e.matrixWorld), t;
            }
          },
          {
            key: "_customSliders",
            value: function() {
              this.skeletons.main.setSlider(
                "bulkSkirtDef",
                0.15 * this.data.data.sliders.weighTorso +
                  0.85 * this.data.data.sliders.weightLower
              );
            }
          },
          {
            key: "_applyAnimationConstraints",
            value: function() {
              this.allPoses(),
                this["pose".concat(this.data.poses.main.pose_id)] &&
                  this["pose".concat(this.data.poses.main.pose_id)]();
            }
          },
          {
            key: "allPoses",
            value: function() {
              this._centaur(),
                this.updateMatrixWorld(!0),
                this._arms(),
                this._tails(),
                this._ground(),
                this._characterGrounding(),
                this._elbow(),
                this._tag(),
                this._label(),
                this._neck(),
                this._items(),
                this._height(),
                this._shoulders(),
                this._hair(),
                this._familiar(),
                this._motorbike(),
                this.updateMatrixWorld(!0),
                this._head();
            }
          },
          {
            key: "_elbow",
            value: function() {
              var e = this;
              ee.map(function(t) {
                var n = e.meshes[t];
                n &&
                  Q.map(function(t) {
                    var r = e.getBoneFromID(n, t[0]),
                      o = e.getBoneFromID(n, t[1]),
                      a = (r.rotation.y + o.rotation.y) / 2;
                    (r.rotation.y = a), (o.rotation.y = a);
                  });
              });
            }
          },
          {
            key: "_arms",
            value: function() {
              for (
                var e = this,
                  t = this.data.custom.arms || 0,
                  n = function(t) {
                    var n = "main_" + t,
                      r = e.skeletons[n];
                    te.map(function(e) {
                      var n = r.obj.getObjectByName(e),
                        o = r.getRot(n);
                      (n.rotation.z = o.z + (t ? -0.4 : 0.6)),
                        (n.rotation.y = o.y + (t ? 0.18 : 0.2));
                    }),
                      e.meshes.bodyUpper &&
                        r.obj.position.copy(
                          e.meshes.bodyUpper.skeleton.obj.position
                        );
                  },
                  r = 0;
                r < t;
                r++
              )
                n(r);
            }
          },
          {
            key: "_tails",
            value: function() {
              for (
                var e = this.data.custom.tails || 0,
                  t = new RK.Vec2(0.55, 0),
                  n = (2 * Math.PI) / e,
                  r = this.getBone(500, "tail"),
                  o = 0;
                o < e;
                o++
              ) {
                var a = "tail" + o,
                  i = "main_" + o,
                  s = this.skeletons[i];
                t.rotateAround(new RK.Vec2(0, 0), n);
                var c = this.getBone(500, a);
                c
                  ? ((c.rotation.x = r.rotation.x + t.x),
                    (c.rotation.z = r.rotation.z + t.y))
                  : console.error("Where is tail root in", a),
                  this.meshes.bodyUpper &&
                    s.obj.position.copy(
                      this.meshes.bodyUpper.skeleton.obj.position
                    );
              }
            }
          },
          {
            key: "_characterGrounding",
            value: function() {
              (this.skeletons.main.obj.position.y = 0),
                this.isPose("corpse") ||
                  (this.meshes.feetR &&
                    (this.skeletons.main.obj.position.y += 0.01),
                  this.meshes.feetL &&
                    (this.skeletons.main.obj.position.y += 0.01));
            }
          },
          {
            key: "_ground",
            value: function() {
              var e = this.meshes,
                t = e.base,
                n = e.baseRim,
                r = e.baseCollision,
                o = this.getBaseTopperOffset();
              t && (t.position.y = -o),
                n && (n.position.y = -o),
                r && (r.position.y = -o),
                this.primary &&
                  (CK.environment.groundGroup.position.y = this.getGroundPositionY());
            }
          },
          {
            key: "getGroundPositionY",
            value: function() {
              var e = this.meshes,
                t = e.base,
                n = e.baseRim;
              return t || n ? -this.getBaseTopperOffset() - 0.21 : 0;
            }
          },
          {
            key: "getBaseTopperOffset",
            value: function() {
              var e = this.meshes.base;
              return e && e.geometry.locators && e.geometry.locators.ground
                ? e.geometry.locators.ground.position.y
                : 0;
            }
          },
          {
            key: "getClip",
            value: function() {
              return this.hasKey("base", [
                "slotBase",
                "initiative",
                "feetRotateBase"
              ]) ||
                (!this.meshes.base && !this.meshes.baseRim)
                ? -99
                : this.getGroundPositionY();
            }
          },
          {
            key: "_tag",
            value: function() {
              var e = this.meshes.tagNumber;
              if (e && (this.meshes.baseRim || this.meshes.base))
                if (
                  (e.rotation.set(Math.PI / 2, 0, 0),
                  this.hasKey("base", ["slotBase", "initiative"]))
                ) {
                  var t = this.hasKey("base", "slotBase") ? -0.25 : -0.12;
                  e.position.set(0, t, 0);
                  var n =
                    this.getBone("initBase_anim_501_bind_jnt", "base") ||
                    console.error("initBase_anim_501_bind_jnt not found!");
                  n && n.add(e);
                } else
                  e.position.set(0, -this.getBaseTopperOffset() - 0.12, -0.85);
              var r = this.meshes.tag;
              if (r)
                if (
                  (r.add(e),
                  e.rotation.set(Math.PI / 2, 0, Math.PI / 2),
                  e.position.set(0, -0.22, 0),
                  this.meshes.bodyLower &&
                    this.meshes.bodyLower.part.keywords.digi)
                ) {
                  var o = this.getBone("main_dgLeg_R_toe_base_341_bind_jnt"),
                    a = this.getBone("main_dgLeg_L_toe_base_328_bind_jnt");
                  o && a
                    ? this.getWorldPos(o).y < this.getWorldPos(a).y
                      ? (r.position.set(0, 0.05, 0),
                        r.rotation.set(0, Math.PI / 2, Math.PI),
                        o.add(r))
                      : (r.position.set(0, -0.05, 0),
                        r.rotation.set(0, Math.PI / 2, 0),
                        a.add(r))
                    : console.warn("Missing tag attach");
                } else if (
                  this.meshes.bodyLower &&
                  this.meshes.bodyLower.part.keywords.centaur
                ) {
                  var i =
                    this.getBone(
                      "centaur_ft_legR_toe_end_526_bind_jnt",
                      "bodyLower"
                    ) ||
                    console.error(
                      "Could not find centaur_ft_legR_toe_end_526_bind_jnt"
                    );
                  r.position.set(0, 0, 0),
                    r.rotation.set(Math.PI / 2, 0, -Math.PI / 2),
                    i.add(r);
                } else {
                  var s = this.getBone("main_ankleR_01_height_098_bind_jnt"),
                    c = this.getBone("main_ankleL_01_height_011_bind_jnt");
                  s && c
                    ? this.getWorldPos(s).y < this.getWorldPos(c).y
                      ? (r.position.set(-0.179, 0, -0.0296),
                        (r.rotation.z = -Math.PI / 2),
                        s.add(r))
                      : (r.position.set(0.179, 0, 0.0296),
                        (r.rotation.z = Math.PI / 2),
                        c.add(r))
                    : console.warn("Missing tag attach");
                }
            }
          },
          {
            key: "_label",
            value: function() {
              var e = this.meshes.label;
              if (e)
                if ("solid" === e.part.baseName)
                  this.meshes.baseRim &&
                    (e.position.copy(this.meshes.baseRim.position),
                    e.rotation.set(0, 0, 0));
                else if (this.hasKey("base", "initiative")) {
                  this.getBone("initBase_clipFt_502_bind_jnt", "base").add(e),
                    e.position.set(0, -1.2, 0.25),
                    (e.rotation.x = 0);
                } else
                  e.position.set(
                    0,
                    -this.getBaseTopperOffset() - 0.12,
                    this.hasKey("baseRim", "shiftLabel") ? 1.23 : 0
                  ),
                    (e.rotation.x =
                      "solid" === e.part.baseName ? 0 : Math.PI / 2);
              var t = this.meshes.initiativeBack;
              t &&
                (t.position.set(0, -0.8, -0.25),
                (t.rotation.y = Math.PI),
                this.getBone("initBase_clipBk_503_bind_jnt", "base").add(t));
            }
          },
          {
            key: "_neck",
            value: function() {
              var e = this;
              [Y, G].map(function(t) {
                t.bones.map(function(n) {
                  var r = e.getBone(n),
                    o = t.maxOffsets,
                    a = t.minOffsets,
                    i = t.name;
                  ["X", "Y", "Z"].map(function(t, n) {
                    var s = e.data.poseSliders[i + t];
                    if (void 0 !== s) {
                      var c = t.toLowerCase(),
                        l = o[n],
                        u = a[n];
                      r.rotation[c] > l ||
                        r.rotation[c] < u ||
                        (r.rotation[c] =
                          s > 0.5
                            ? RK.Math.lerp(r.rotation[c], l, 2 * (s - 0.5))
                            : RK.Math.lerp(u, r.rotation[c], 2 * s));
                    }
                  });
                });
              });
            }
          },
          {
            key: "_items",
            value: function() {
              var e = this;
              ee.map(function(t, n) {
                if (e.meshes[t]) {
                  var r = e.getBone("main_handR_attach_198_bind_jnt", t),
                    o = [r, e.getBone("main_handL_attach_194_bind_jnt", t), r],
                    a = n ? n - 1 : "";
                  [
                    "item".concat(a, "R"),
                    "item".concat(a, "L"),
                    "item".concat(a, "D")
                  ].map(function(t, n) {
                    if (e.meshes[t]) {
                      var r = e.hasForm(t, "thick") && e.data.settings.hiRez;
                      if (
                        !e.data.parts[t] ||
                        !e.data.parts[t].keywords.disableThickOffset
                      ) {
                        var a = e.getLocator(t, r ? "radius_thick" : "radius"),
                          i = a ? a.position.xz.length() : r ? 0.09 : 0.07;
                        if (i > 0.07) {
                          var s = i - 0.07,
                            c = new RK.Vec3(1 !== n ? -1 : 1, 0, -1).setLength(
                              s
                            );
                          o[n].position.add(c);
                        }
                      }
                    }
                  });
                }
              });
            }
          },
          {
            key: "_height",
            value: function() {
              var e = this,
                t = this.data.data.sliders,
                n = f.xlSliderThreshold,
                r = t.height;
              if (this.data.jointWeights.default && r > n) {
                var o = this.extraXLScale();
                ee.map(function(t) {
                  var n = e.getBone("main_transform_ref_190_bind_jnt", t);
                  n && n.scale.set(o, o, o);
                });
              }
            }
          },
          {
            key: "_shoulders",
            value: function() {
              var e = this,
                t = CK.Settings.forge && this.data.data.userSaveVersion <= 1.3,
                n = this.data.transforms,
                r = n.shouldersR,
                o = n.shouldersL;
              if (
                r &&
                ([
                  "main_shoulderAttachR_03_fat_213_bind_jnt",
                  "main_shoulderAttachR_03_muscularity_214_bind_jnt"
                ].map(function(t) {
                  var n = e.getBone(t);
                  n.rotation.set(0, 0, 0), n.position.set(0, 0, 0);
                }),
                t &&
                  console.warn(
                    "Old shoulder hierarchy! Shoulder position will be wrong"
                  ),
                CK.Settings.forge && t)
              ) {
                var a = this.getBone(201),
                  i = this.getBone(175),
                  s = this.getBone(199);
                i.add(a),
                  a.position.copy(s.position),
                  r.pos && (a.position.y = r.pos.y);
              }
              if (
                this.data.transforms.shouldersL &&
                ([
                  "main_shoulderAttachL_03_fat_207_bind_jnt",
                  "main_shoulderAttachL_03_muscularity_208_bind_jnt"
                ].map(function(t) {
                  var n = e.getBone(t);
                  n.rotation.set(0, 0, 0), n.position.set(0, 0, 0);
                }),
                t &&
                  console.warn(
                    "Old shoulder hierarchy! Shoulder position will be wrong"
                  ),
                CK.Settings.forge && t)
              ) {
                var c = this.getBone(197),
                  l = this.getBone(89),
                  u = this.getBone(195);
                l.add(c),
                  c.position.copy(u.position),
                  o.pos && (c.position.y = o.pos.y);
              }
            }
          },
          {
            key: "_hair",
            value: function() {
              if (this.hasKey("hair", "braidJoints")) {
                var e = this.getBone("hair_faceOffset_BK_M_522_bind_jnt");
                e &&
                  (e.position.z -=
                    (this.meshes.chest ? 0.35 : 0.15) *
                    (this.extraXLScale() - 1) *
                    (1 - this.data.data.sliders.headSize) *
                    (this.data.data.sliders.weighTorso + 1));
              }
            }
          },
          {
            key: "extraXLScale",
            value: function() {
              var e = f.xlSliderThreshold,
                t = this.data.data.sliders.height;
              return t < e ? 1 : 1 + ((t - e) / (1 - e)) * 0.3;
            }
          },
          {
            key: "_head",
            value: function() {
              var e = this,
                t = this.data.data.sliders,
                n = t.height,
                r = f.xlSliderThreshold,
                o =
                  1 +
                  (1.15 + (n > r ? ((n - r) / (1 - r)) * 0.2 : 0) - 1) *
                    (t.headSize || 0),
                a = this.getBone("main_head_01_height_247_bind_jnt");
              if (a) {
                var i = new RK.Vec3();
                i.setFromMatrixScale(a.parent.matrixWorld);
                var s = o / i.x;
                ee.map(function(t) {
                  var n = e.getBone("main_head_01_height_247_bind_jnt", t);
                  n && n.scale.set(s, s, s);
                });
              }
            }
          },
          {
            key: "pose20",
            value: function() {
              var e = this.data.data.sliders.height || 0;
              e > 0.6 &&
                (this.skeletons.main.obj.position.z = ((e - 0.6) / 0.4) * 0.2);
            }
          },
          {
            key: "pose18",
            value: function() {
              var e = this.data.data.sliders.height || 0;
              e > 0.6 &&
                ((this.skeletons.main.obj.position.z = ((e - 0.6) / 0.4) * 0.2),
                (this.skeletons.main.obj.position.x = ((e - 0.6) / 0.4) * 0.2));
            }
          },
          {
            key: "pose41",
            value: function() {
              if (this.hasKey("base", "slotBase")) {
                var e = this.data.data.sliders.height || 0;
                e > 0.3 &&
                  ((this.skeletons.main.obj.position.z =
                    ((e - 0.3) / 0.4) * 0.4),
                  (this.skeletons.main.obj.position.x =
                    ((e - 0.3) / 0.4) * 0.1));
              }
            }
          },
          {
            key: "pose56",
            value: function() {
              var e = (this.data.data.sliders.height || 0) / 0.5;
              this.meshes.mount.skeleton.getBoneByName(
                "mount_500_bind_jnt"
              ).position.z = -1 * (0.22 * e - 0.07);
            }
          },
          {
            key: "pose58",
            value: function() {
              var e = (this.data.data.sliders.height || 0) / 0.5;
              this.meshes.mount.skeleton.getBoneByName(
                "mount_500_bind_jnt"
              ).position.z = -1 * (0.23 * e + 0.1);
            }
          },
          {
            key: "_motorbike",
            value: function() {
              if (
                this.meshes.mount &&
                this.data.poses.main.pose_id in
                  { 56: !0, 57: !0, 58: !0, 25: !0, 26: !0, 27: !0 }
              ) {
                var e = this.skeletons.main.getBoneByName(
                    "main_rider_243_bind_jnt"
                  ),
                  t = this.meshes.mount.skeleton.getBoneByName(
                    "mount_500_bind_jnt"
                  );
                e.quaternion.copy(t.quaternion);
              }
            }
          },
          {
            key: "_applyAnimationConstraintsPostTransforms",
            value: function() {
              var e = this;
              ee.map(function(t, n) {
                var r = e.meshes[t];
                if (r) {
                  Q.map(function(t, n) {
                    var o = e.getBoneFromID(r, t[0]),
                      a = e.getBoneFromID(r, t[1]);
                    o.rotation.y = a.rotation.y;
                    var i = e.getBoneFromID(r, X[n]),
                      s = a.rotation.y,
                      c = s / -0.9;
                    c > 1 && (c = 1),
                      c < 0 && (c = 0),
                      s < -1 && (c += 0.2 * Math.abs(s + 1)),
                      i.position.copy(
                        new RK.Vec3(0.1340173, 0, -0.280197 / 10)
                          .multiplyScalar(n ? 1 : -1)
                          .lerp(
                            new RK.Vec3(
                              0.3096673,
                              0,
                              -0.612764 / 10
                            ).multiplyScalar(n ? 1 : -1),
                            c
                          )
                      );
                  });
                  var o = function(t) {
                    var n = e.getBoneFromID(r, t);
                    "XZY" !== n.rotation.order && n.rotation.reorder("XZY");
                    var o = new RK.SwingTwist().setFromQuaternion(
                        n.quaternion,
                        "twistswing"
                      ).twist,
                      a = 2 * Math.asin(o.x);
                    (a /= 2 * Math.PI),
                      (a -= Math.floor(a)) > 0.5 && (a -= 1),
                      (a *= 2 * Math.PI);
                    var i = 1;
                    Z[t].map(function(t) {
                      (e.getBoneFromID(r, t).rotation.x = a * i), (i -= 0.25);
                    });
                  };
                  for (var a in Z) o(a);
                  var i = function(t) {
                    var n = e.getBoneFromID(r, t).rotation.x;
                    $[t].map(function(t) {
                      e.getBoneFromID(r, t).rotation.x = n;
                    });
                  };
                  for (var a in $) i(a);
                  ["R", "L"].map(function(t, o) {
                    var a = e.meshes["gloves".concat(n || "").concat(t)];
                    if (a) {
                      var i = e.getBoneFromID(r, J[o][0]).rotation.x;
                      J[o][1].map(function(t) {
                        var n = e.getBoneFromID(a, t);
                        n && (n.rotation.x = i);
                      });
                    }
                  });
                }
              });
            }
          },
          {
            key: "updateCamera",
            value: function() {
              if (this.primary) {
                var e = { mount: 1, initiative: 1 },
                  t = this.getCamera(),
                  n = !(
                    this.firstRun ||
                    t in e ||
                    CK.orbitCamera.prevCameraName in e
                  );
                CK.orbitCamera.change(t, n);
              }
            }
          },
          {
            key: "getCamera",
            value: function(e) {
              return this.data.settings.camera
                ? this.data.settings.camera
                : this.meshes.mount
                ? "mount"
                : this.hasKey("bodyLower", "centaur")
                ? "centaur"
                : this.hasKey("base", "initiative")
                ? "initiative"
                : this.data.data.sliders.height >= f.xlSliderThreshold
                ? "xl"
                : "default";
            }
          },
          {
            key: "_applyMaterialSims",
            value: function() {
              q(W(t.prototype), "_applyMaterialSims", this).call(this),
                CK.Settings.shaderballs && this._applyEyes();
            }
          },
          {
            key: "_updateEyeMaterial",
            value: function(e) {
              var t = e.EyeMaterial;
              if (t) {
                var n = "eyes";
                e.name.startsWith("baseItemEye") && (n = "baseItemEyes"),
                  this._irisMaps &&
                    this._irisMaps[n] &&
                    t.setUniform("irisTexture", this._irisMaps[n]),
                  this._scleraMap &&
                    t.setUniform("scleraTexture", this._scleraMap);
                var r = this.data.data[n];
                if ((e.name.endsWith("R") && r.Right && (r = r.Right), r)) {
                  var o = r.irisGradient;
                  o &&
                    (t.setUniform(
                      "iris0",
                      A(RK.Vec3, B(o[0])).divideScalar(255)
                    ),
                    t.setUniform(
                      "iris1",
                      A(RK.Vec3, B(o[1])).divideScalar(255)
                    ),
                    t.setUniform(
                      "iris2",
                      A(RK.Vec3, B(o[2])).divideScalar(255)
                    ));
                  var a = r.scleraGradient;
                  a &&
                    (t.setUniform(
                      "sclera0",
                      A(RK.Vec3, B(a[0])).divideScalar(255)
                    ),
                    t.setUniform(
                      "sclera1",
                      A(RK.Vec3, B(a[1])).divideScalar(255)
                    ),
                    t.setUniform(
                      "sclera2",
                      A(RK.Vec3, B(a[2])).divideScalar(255)
                    )),
                    t.setUniform("irisSize", r.irisSize),
                    t.setUniform("irisDepth", r.irisDepth),
                    t.setUniform("corneaBulge", r.corneaBulge),
                    t.setUniform("eyeConvergence", r.eyeConvergence),
                    t.setUniform("eyeLookH", r.eyeLookH),
                    t.setUniform("eyeLookV", r.eyeLookV);
                }
              }
            }
          },
          {
            key: "_updateEyeMaterials",
            value: function() {
              for (var e in this.meshes) {
                var t = this.meshes[e];
                this._updateEyeMaterial(t);
              }
            }
          },
          {
            key: "_applyEyes",
            value: function() {
              var e = !1;
              for (var t in this.meshes) {
                var n = this.meshes[t].EyeMaterial;
                e = e || void 0 !== n;
              }
              if (e) {
                var r = this,
                  o = r.data.data;
                if (
                  (["eyes", "baseItemEyes"].map(function(e) {
                    var t = (o[e] || {}).eyeType || "human";
                    if (
                      !r._irisMaps ||
                      !r._irisMaps[e] ||
                      r._irisMaps[e].eyeType !== t
                    ) {
                      var n = "/static/textures/character/eye/iris_".concat(
                          t,
                          ".png"
                        ),
                        a = function(n) {
                          var a = (o[e] || {}).eyeType || "human";
                          (n.eyeType = t),
                            t === a &&
                              (r._irisMaps || (r._irisMaps = {}),
                              (r._irisMaps[e] = n),
                              r._updateEyeMaterials(),
                              CK.GameLoop.requestRenderRefresh());
                        };
                      CK.Resources.loaded(n)
                        ? a(CK.Resources.getNow(n))
                        : CK.Resources.getResource(n).then(function(e) {
                            return a(e);
                          });
                    }
                  }),
                  !r._scleraMap)
                ) {
                  var a = "/static/textures/character/eye/sclera.png",
                    i = function(e) {
                      (r._scleraMap = e),
                        r._updateEyeMaterials(),
                        CK.GameLoop.requestRenderRefresh();
                    };
                  CK.Resources.loaded(a)
                    ? i(CK.Resources.getNow(a))
                    : CK.Resources.getResource(a).then(function(e) {
                        return i(e);
                      });
                }
                this._updateEyeMaterials();
              }
            }
          },
          {
            key: "getLocator",
            value: function(e, t) {
              return (
                this.meshes[e] &&
                this.meshes[e].geometry.locators &&
                this.meshes[e].geometry.locators[t]
              );
            }
          },
          {
            key: "getMeshLocator",
            value: function(e, t) {
              return (
                this.meshes[e] &&
                this.meshes[e].locators &&
                this.meshes[e].locators[t]
              );
            }
          },
          {
            key: "hasForm",
            value: function(e, t) {
              return (
                this.meshes[e] &&
                this.meshes[e].morphTargetDictionary &&
                void 0 !== this.meshes[e].morphTargetDictionary[t]
              );
            }
          },
          {
            key: "_addRivets",
            value: function() {
              for (var e in this.rivets) {
                this.rivets[e].priority = 1e3;
              }
              for (var t in this.meshes) {
                var n = this.meshes[t].geometry;
                if (n.ckRivets)
                  for (var r in n.ckRivets) {
                    var o = re[t] || ne.length + 1;
                    if (this.rivets[r])
                      if (o > this.rivets[r].priority) continue;
                    if (!this.rivets[r]) {
                      var a = new RK.Object3D();
                      (a.meshPosition = new RK.Vec3()),
                        (this.rivets[r] = a),
                        this.rivetsObj.add(a);
                    }
                    var i = this.rivets[r];
                    (i.name = r),
                      (i.source = n.ckRivets[r]),
                      (i.slot = t),
                      (i.priority = o);
                  }
              }
              for (var s in this.rivets) {
                1e3 === this.rivets[s].priority &&
                  (this.rivetsObj.remove(this.rivets[s]),
                  delete this.rivets[s]);
              }
            }
          },
          {
            key: "updateRivets",
            value: function() {
              var e = new RK.Matrix4();
              e.getInverse(this.matrixWorld);
              var t = new RK.Matrix4(),
                n = new RK.Matrix4(),
                r = new RK.Matrix4(),
                o = new RK.Matrix4(),
                a = new RK.Vec3(),
                i = new RK.Vec3();
              for (var s in this.rivets) {
                var c = this.rivets[s],
                  l = c.source,
                  u = c.slot,
                  p = this.meshes[u],
                  f = p.geometry,
                  h = p.skeleton,
                  m = l.triangle,
                  d = f.attributes.position.array,
                  y = f.attributes.skinIndex0.array,
                  b = f.attributes.skinWeight0.array,
                  v = f.index.array;
                t.multiplyScalar(0);
                var g = 0;
                a.set(0, 0, 0), i.set(0, 0, 0);
                for (var w = 0; w < 3; ++w) {
                  for (
                    var _ = v[3 * m + w], C = l.barycentric[w], k = 0;
                    k < 3;
                    ++k
                  )
                    a.setComponent(k, a.getComponent(k) + d[3 * _ + k] * C);
                  if (f.morphTargetInfluences)
                    for (var R = 0; R < f.morphTargetInfluences.length; ++R)
                      for (
                        var S = f.morphTargetInfluences[R],
                          O = f.morphAttributes.position[R].array,
                          E = 0;
                        E < 3;
                        ++E
                      )
                        i.setComponent(
                          E,
                          i.getComponent(E) +
                            (O[3 * _ + E] - d[3 * _ + E]) * S * C
                        );
                  for (var x = 0; x < 4; ++x) {
                    var j = 4 * _ + x,
                      P = y[j],
                      M = b[j],
                      T = h.bones[P];
                    T.matrixWorldNeedsUpdate &&
                      this._updateMatrixWorldRecursive(T),
                      n.copy(T.matrixWorld),
                      n.multiply(h.boneInverses[P]);
                    var K = M * C;
                    n.multiplyScalar(K), (g += K);
                    for (var I = 0; I < 16; ++I) t.elements[I] += n.elements[I];
                  }
                }
                t.multiplyScalar(1 / g),
                  t.multiplyMatrices(e, t),
                  a.applyMatrix4(t),
                  o.identity(),
                  o.setPosition(i),
                  r.compose(
                    l.position,
                    l.quaternion,
                    l.scale
                  ),
                  r.multiplyMatrices(o, r),
                  r.multiplyMatrices(t, r),
                  r.decompose(c.position, c.quaternion, c.scale),
                  c.meshPosition.copy(a);
              }
            }
          },
          {
            key: "_updateMatrixWorldRecursive",
            value: function(e) {
              e &&
                e.matrixWorldNeedsUpdate &&
                (this._updateMatrixWorldRecursive(e.parent),
                e.updateMatrixWorld());
            }
          },
          {
            key: "_applyPostAnimationConstraints",
            value: function() {
              q(W(t.prototype), "_applyPostAnimationConstraints", this).call(
                this
              ),
                this.updateRivets(),
                this._earrings(),
                this._trunkItems(),
                this._tailItems();
            }
          },
          {
            key: "_earrings",
            value: function() {
              var e = this;
              ["R", "L"].map(function(t) {
                var n = e.meshes["earrings" + t];
                if (n) {
                  var r =
                    e.rivets["piercing" + t] ||
                    console.error(
                      "Must have piercing rivet in scene for earring."
                    );
                  r && r.add(n);
                }
              });
            }
          },
          {
            key: "_trunkItems",
            value: function() {
              var e = "trunk_itemSnap_513_bind_jnt",
                t = this.getBone(e, "face"),
                n = this.meshes.itemTrunk;
              n &&
                (t
                  ? t.add(n)
                  : console.warn("Elephant trunk bone not found", e));
            }
          },
          {
            key: "_tailItems",
            value: function() {
              var e = this.meshes.itemTail;
              e &&
                (
                  this.getBone(523, "tail") ||
                  console.error(
                    "Tail bone ".concat(523, " for itemTail not found")
                  )
                ).add(e);
            }
          },
          {
            key: "getBakedTransforms",
            value: function() {
              var e = D.limits,
                t = {};
              for (var n in e)
                for (var r in e[n]) {
                  var o = this.getBone(r, n);
                  if (o) {
                    n in t || (t[n] = {}), r in t[n] || (t[n][r] = {});
                    var a = o.quaternion.toSimple();
                    for (var i in a) a[i] = Math.round(1e4 * a[i]) / 1e4;
                    t[n][r].qtn = a;
                  }
                }
              return t;
            }
          }
        ]) && F(n.prototype, r),
        o && F(n, o),
        t
      );
    })();
    function fe(e) {
      return (fe =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function he(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function me(e, t) {
      return !t || ("object" !== fe(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function de(e) {
      return (de = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ye(e, t) {
      return (ye =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var be = { horns: "horn", ears: "ear" },
      ve = {
        934: 10464,
        936: 127,
        937: 887,
        953: 572,
        954: 852,
        966: 757,
        1109: 10462,
        1300: 328,
        1307: 1296,
        1484: 1065,
        1562: 1309,
        1811: 10339,
        1812: 10336,
        2310: 10341,
        2493: 1141,
        2694: 10460,
        2695: 910,
        2697: 2597,
        2698: 2232,
        2699: 1453
      },
      ge = { 2333: 10340, 933: 10335, 1395: 10338 },
      we = {
        2863: [10348, 10347],
        2865: [10375, 10374],
        2870: [10373, 10372],
        2871: [10367, 10366],
        2878: [10379, 10378],
        2898: [10365, 10364],
        2900: [10371, 10370],
        2903: [10377, 10376],
        2905: [10381, 10380],
        2907: [10369, 10368]
      },
      _e = (function(e) {
        function t(e, n) {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            me(this, de(t).call(this, e, n))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ye(e, t);
          })(t, CK.Data),
          (n = t),
          (r = [
            {
              key: "_customUpdateStart",
              value: function(e, t) {
                t ||
                  (e.parts &&
                    e.parts.base &&
                    this.parts.base !== e.parts.base &&
                    delete this.transforms.baseItem);
              }
            },
            {
              key: "_convertOldFormats",
              value: function(e) {
                var t = this;
                for (var n in be)
                  if (n in this.parts) {
                    var r = be[n],
                      o = this.parts[n];
                    delete this.parts[n];
                    var a = CK.Options.getPart(o).name,
                      i = CK.Options.getPartBySlotAndName(r + "R", a),
                      s = CK.Options.getPartBySlotAndName(r + "L", a);
                    i
                      ? ((this.parts[r + "R"] = i.id),
                        s && (this.parts[r + "L"] = s.id))
                      : console.error("Failed to find new part!");
                  }
                if (
                  (void 0 !== this.parts.body &&
                    (16 == this.parts.body
                      ? ((this.parts.bodyUpper = 1963),
                        (this.parts.bodyLower = 1960))
                      : 621 == this.parts.body
                      ? ((this.parts.bodyUpper = 1962),
                        (this.parts.bodyLower = 1961))
                      : console.error(
                          "Unrecognized body part!",
                          this.parts.body
                        ),
                    delete this.parts.body),
                  void 0 !== e.version)
                ) {
                  if (
                    (e.version <= 1.2 &&
                      (console.warn("Adding default side and back item arrows"),
                      this.parts.sideAttachL || (this.parts.sideAttachL = 2862),
                      this.parts.sideAttachR || (this.parts.sideAttachR = 2861),
                      this.parts.backAttach || (this.parts.backAttach = 2863)),
                    e.version < 1.2)
                  ) {
                    var c = e.sliders ? e.sliders.height : void 0;
                    void 0 !== c &&
                      ((this.sliders.height = c * f.xlSliderThreshold),
                      (this.sliders.weightUpper = this.sliders.weight || 0.5),
                      (this.sliders.weightLower = this.sliders.height || 0.5),
                      (this.sliders.weighTorso = this.sliders.height || 0.5),
                      (this.sliders.headSize = 0),
                      console.warn(
                        "Converting height & head from old version"
                      ));
                  }
                  if (
                    (e.version <= 1.3 &&
                      !CK.Settings.forge &&
                      e.transforms &&
                      (console.warn(
                        "Removing old shoulder posing because hierarchy changed"
                      ),
                      delete e.transforms.shouldersR,
                      delete e.transforms.shouldersL),
                    e.version <= 1 &&
                      (delete this.parts.eyes,
                      (this.parts.eyeR && this.parts.eyeL) ||
                        !this.parts.face ||
                        ("robot" === CK.Options.getPart(this.parts.face).name
                          ? (console.warn(
                              "Adding robot eyes because they are missing for some reason (probably old cart item)"
                            ),
                            (this.parts.eyeR = 1517),
                            (this.parts.eyeL = 1518))
                          : (console.warn(
                              "Adding human eyes because they are missing for some reason (probably old cart item)"
                            ),
                            (this.parts.eyeR = 1512),
                            (this.parts.eyeL = 177)))),
                    CK.serverTime > 1570496430)
                  ) {
                    if (!CK.Settings.forge) {
                      var l = this.parts,
                        u = l.back,
                        p = l.backAttach;
                      u in ve &&
                        ((this.parts.backItemL = ve[u]),
                        delete this.parts.back),
                        u in ge &&
                          ((this.parts.backItemR = ge[u]),
                          delete this.parts.back),
                        p in we &&
                          ((this.parts.backItemAttachL = we[p][0]),
                          (this.parts.backItemAttachR = we[p][1]),
                          delete this.parts.backAttach),
                        1563 === u &&
                          ((this.parts.backItemL = 1192),
                          (this.parts.backItemR = 153),
                          delete this.parts.back);
                    }
                  } else
                    delete this.parts.backItemL,
                      delete this.parts.backItemR,
                      delete this.parts.backItemAttachL,
                      delete this.parts.backItemAttachR;
                }
                this.sliders.height > f.xlSliderThreshold &&
                  this.parts.base &&
                  CK.Options.getPart(this.parts.base).keywords.initiative &&
                  (this.parts.base = 215),
                  void 0 === this.eyes
                    ? (this.eyes = JSON.parse(JSON.stringify(Ce)))
                    : Object.keys(Ce).map(function(e) {
                        void 0 === t.eyes[e] &&
                          (t.eyes[e] = JSON.parse(JSON.stringify(Ce[e])));
                      }),
                  void 0 === this.baseItemEyes
                    ? (this.baseItemEyes = JSON.parse(JSON.stringify(ke)))
                    : Object.keys(ke).map(function(e) {
                        void 0 === t.baseItemEyes[e] &&
                          (t.baseItemEyes[e] = JSON.parse(
                            JSON.stringify(ke[e])
                          ));
                      });
              }
            },
            {
              key: "_customUpdateEnd",
              value: function(e) {
                var t = a.getSelectedProduct(this);
                (this.physical = t ? t.product_name : void 0),
                  e &&
                    e.eyes &&
                    (this.eyes = JSON.parse(JSON.stringify(e.eyes)));
                var n = this.parts,
                  r = n.face,
                  o = n.eyeR,
                  i = n.eyeL;
                2950 !== r &&
                  617 !== r &&
                  ((o && 3061 !== o) || (this.parts.eyeR = 1512),
                  (i && 3060 !== i) || (this.parts.eyeL = 177)),
                  e &&
                    e.baseItemEyes &&
                    (this.baseItemEyes = JSON.parse(
                      JSON.stringify(e.baseItemEyes)
                    )),
                  this.parts.mount &&
                    this.sliders.height >= f.xlSliderThreshold &&
                    (this.sliders.height = f.xlSliderThreshold - 0.001);
              }
            },
            {
              key: "_customGetJson",
              value: function(e, t) {
                (e.eyes = this.eyes),
                  (e.baseItemEyes = this.baseItemEyes),
                  t &&
                    Object.keys(e.transforms).length &&
                    (e.bakedTransforms = CK.display.getBakedTransforms());
              }
            }
          ]) && he(n.prototype, r),
          o && he(n, o),
          t
        );
      })(),
      Ce = {
        irisGradient: [[0, 0, 0], [64, 159, 255], [191, 255, 255]],
        scleraGradient: [[255, 223, 191], [255, 191, 191], [128, 0, 0]],
        eyeType: "human",
        irisSize: 0.25,
        irisDepth: 0.97,
        corneaBulge: 1,
        eyeConvergence: 0.47,
        eyeLookH: 0.5,
        eyeLookV: 0.55
      },
      ke = {
        irisGradient: [[64, 0, 0], [191, 96, 0], [191, 191, 0]],
        scleraGradient: [[46, 46, 46], [70, 70, 70], [70, 70, 70]],
        eyeType: "cat",
        irisSize: 0.5,
        irisDepth: 1,
        corneaBulge: 1
      };
    _e.allOldBackItems = Object.keys(ve).concat(Object.keys(ge), [1563]);
    var Re = function e(t) {
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this.thumb = t.thumb),
        (this.mirrorThumb = t.mirrorThumb || !1),
        (this.hoverThumb = t.hoverThumb || !1),
        (this.name = t.name || ""),
        (this.label = t.label || ""),
        (this.description = t.description || ""),
        (this.onClick = t.onClick),
        (this.onHover = t.onHover),
        (this.onDelete = t.onDelete),
        (this.selected = t.selected || !1),
        (this.keywords = t.keywords || {}),
        (this.thumbSize = t.thumbSize || [80, 80]),
        (this.grayedOut = t.grayedOut || !1),
        (this.grayedOutReason = t.grayedOutReason || void 0),
        (this.labelOptions = t.labelOptions || { label: !1 }),
        (this.swatchLayers = t.swatchLayers || []),
        (this.originalData = t.originalData),
        (this.packedPos = t.packedPos),
        (this.packedSize = t.packedSize),
        (this.paintType = t.paintType),
        (this.missingThumb = t.missingThumb),
        (this.tagLabel = t.tagLabel),
        (this.tagColor = t.tagColor),
        (this.showTooltip =
          void 0 !== t.showTooltip
            ? t.showTooltip
            : !(
                CK.ClientSpecs.touchEnabled() ||
                (window.UIState && UIState.compact)
              )),
        (this.displayOrder = t.displayOrder || 1),
        (this.onMouseEnter = t.onMouseEnter),
        (this.widthOverride = t.widthOverride),
        (this.heightOverride = t.heightOverride),
        (this.bit = t.bit),
        (this.extraClass = t.extraClass);
    };
    function Se(e) {
      return (Se =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Oe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ee(e, t) {
      return !t || ("object" !== Se(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function xe(e) {
      return (xe = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function je(e, t) {
      return (je =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Pe = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Ee(this, xe(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && je(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "render",
            value: function() {
              return React.createElement(
                "div",
                { className: "thumbnail-button-info" },
                React.createElement(
                  "div",
                  { className: "left" },
                  React.createElement("h3", null, this.props.label),
                  React.createElement("p", null, this.props.description)
                ),
                React.createElement(
                  "div",
                  { className: "right" },
                  React.createElement("img", {
                    className: this.props.mirrored ? "mirrored" : void 0,
                    src: this.props.image
                  })
                )
              );
            }
          }
        ]) && Oe(n.prototype, r),
        o && Oe(n, o),
        t
      );
    })();
    function Me(e) {
      return (Me =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Te(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ke(e) {
      return (Ke = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Ie(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Ne(e, t) {
      return (Ne =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Le = VN.classNames,
      Ue = (function(e) {
        function t() {
          var e, n, r;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (n = this),
            ((e =
              !(r = Ke(t).call(this)) ||
              ("object" !== Me(r) && "function" != typeof r)
                ? Ie(n)
                : r).clicked = e.clicked.bind(Ie(e))),
            e
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Ne(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "clicked",
              value: function(e) {
                var t =
                  void 0 !== this.props.option.linked &&
                  this.props.option.linked;
                e.fastclick && (e.preventDefault(), e.stopPropagation()),
                  this.props.option.onClick &&
                    (this.props.option.onClick(t),
                    Reporting.clickedThumbnailButton(this.props));
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.option;
                if (void 0 === t) return null;
                var n = t.labelOptions || {},
                  r = "" !== t.label && "labelOnly" === n.labelType,
                  o = t.tagLabel,
                  a =
                    o && "" !== o
                      ? React.createElement(
                          "span",
                          { className: "new-tag" + (r ? " label-only" : "") },
                          React.createElement(
                            "span",
                            {
                              className: "tag-text",
                              style: { background: t.tagColor }
                            },
                            o
                          ),
                          React.createElement("span", {
                            className: "arrow-down",
                            style: t.tagColor
                              ? { borderTop: "2px solid " + t.tagColor }
                              : {}
                          })
                        )
                      : "",
                  i = this.props.overlay || null,
                  s = "";
                "parts" == this.props.type || "linkedParts" == this.props.type
                  ? (s = "part")
                  : "presets" == this.props.type && (s = "preset");
                var c = Le(
                    s,
                    this.props.className,
                    "thumbnail-button",
                    t.extraClass,
                    "w".concat(t.thumbSize[0], "h").concat(t.thumbSize[1]),
                    (function(e, t, n) {
                      return (
                        t in e
                          ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                            })
                          : (e[t] = n),
                        e
                      );
                    })(
                      {
                        selected: t.selected,
                        grayedOut: t.grayedOut,
                        "no-image": !t.thumb,
                        "no-onclick": !t.onClick
                      },
                      "labelType-".concat(n.labelType),
                      n.label && "labelType" in n
                    )
                  ),
                  l = Le({ mirrored: t.mirrorThumb });
                if (t.thumb instanceof HTMLCanvasElement)
                  return React.createElement(
                    "span",
                    {
                      className: this.props.imageClasses,
                      onClick: this.props.clicked
                    },
                    this.props.image
                  );
                var u,
                  p = t.thumb;
                "" != t.label && "" != t.description && "" != t.thumb
                  ? React.createElement(Pe, {
                      label: t.label,
                      description: t.description,
                      mirrored: t.mirrorThumb,
                      image: p
                    })
                  : "" != t.label &&
                    "" != t.description &&
                    React.createElement("span", null, t.description),
                  r && React.createElement("span", null, t.description),
                  (u = function(e) {
                    var n = t.missingThumb || "/static/img/broken-link.png";
                    e.target.src !== n && (e.target.src = n);
                  });
                var f = "";
                if (
                  !t.paintType ||
                  ("palette" != t.paintType && "swatch" != t.paintType)
                )
                  f = n.label
                    ? "labelOnly" === n.labelType
                      ? React.createElement(
                          "a",
                          { className: c, onClick: this.clicked },
                          t.bit,
                          t.label,
                          a,
                          i
                        )
                      : React.createElement(
                          "span",
                          {
                            className: c,
                            onClick: this.clicked,
                            style: {
                              width: t.widthOverride,
                              height: t.heightOverride
                            }
                          },
                          React.createElement("img", {
                            src: p,
                            onError: u,
                            className: l
                          }),
                          a,
                          i,
                          React.createElement(
                            "span",
                            { className: "label" },
                            t.label
                          )
                        )
                    : React.createElement(
                        "span",
                        {
                          onMouseEnter: function(e) {
                            t.onMouseEnter && t.onMouseEnter(),
                              window.CK &&
                                !CK.userHasTouched &&
                                CK.Events.emit("tip", [t, e]);
                          },
                          onMouseLeave: function() {
                            window.CK &&
                              !CK.userHasTouched &&
                              CK.Events.emit("tip", void 0);
                          },
                          className: c,
                          onClick: function(n) {
                            window.CK &&
                              CK.userHasTouched &&
                              CK.Events.emit("tip", [t, n]),
                              e.clicked(n);
                          },
                          style: {
                            width: t.widthOverride,
                            height: t.heightOverride
                          }
                        },
                        React.createElement("img", {
                          src: p,
                          onError: u,
                          className: l
                        }),
                        a,
                        i
                      );
                else {
                  var h = [],
                    m = !1;
                  if (t.swatchLayers.length > 0)
                    for (var d = 0; d < t.swatchLayers.length; d++) {
                      var y = Math.floor((t.swatchLayers[d].length - 1) / 2),
                        b = {
                          backgroundColor: "rgba(" + t.swatchLayers[d][y] + ")",
                          color: "rgba(0,0,0,0)"
                        },
                        v = t.label + "_palette_swatch_" + d;
                      t.swatchLayers[d][y].length >= 4 &&
                      !t.swatchLayers[d][y][3]
                        ? h.push(
                            React.createElement("img", {
                              key: v,
                              src: t.thumb || "/static/svg/none.svg",
                              style: { minWidth: 0, minHeight: 0 }
                            })
                          )
                        : h.push(
                            React.createElement(
                              "span",
                              { style: b, key: v },
                              "O"
                            )
                          );
                    }
                  else {
                    m = !0;
                    var g = t.label + "_palette_swatch_error";
                    h.push(
                      React.createElement(
                        "span",
                        { key: g, title: t.label },
                        "theres no swatches for this one???"
                      )
                    );
                  }
                  (c = Le(c, "paint-preconf", "paint-" + t.paintType, {
                    "missing-swatches": m
                  })),
                    (f = React.createElement(
                      "a",
                      {
                        className: c,
                        key: t.label + "_palette",
                        onClick: this.clicked,
                        title: t.label
                      },
                      h
                    ));
                }
                return f;
              }
            }
          ]) && Te(n.prototype, r),
          o && Te(n, o),
          t
        );
      })();
    function De(e) {
      return (De =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ze(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Ae(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ze(n, !0).forEach(function(t) {
              Be(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ze(n).forEach(function(t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Be(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function Fe(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ve(e) {
      return (Ve = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function qe(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function We(e, t) {
      return (We =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var He = VN.classNames,
      Qe = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            (o = Ve(t).call(this, e)),
            ((n =
              !o || ("object" !== De(o) && "function" != typeof o)
                ? qe(r)
                : o).state = { showmores: 1 }),
            (n.searchChanged = function() {
              return n.forceUpdate();
            }),
            (n.reachedBottom = n.reachedBottom.bind(qe(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && We(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "componentDidMount",
              value: function() {
                CK.Events.on("searchChanged", this.searchChanged),
                  CK.Events.on("reachedBottom", this.reachedBottom);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                CK.Events.off("searchChanged", this.searchChanged),
                  CK.Events.off("reachedBottom", this.reachedBottom),
                  window.UIState && UIState.set({ searchFilter: "" });
              }
            },
            {
              key: "reachedBottom",
              value: function() {
                var e = React.Children.toArray(this.props.children);
                this.props.limitResults &&
                  this.props.limitResults * this.state.showmores < e.length &&
                  this.showMore();
              }
            },
            {
              key: "showMore",
              value: function() {
                this.setState({ showmores: this.state.showmores + 1 });
              }
            },
            {
              key: "render",
              value: function() {
                if (
                  this.props.hideUnfound &&
                  (!UIState.searchFilter || !UIState.searchFilter.length)
                )
                  return null;
                var e = React.Children.toArray(this.props.children),
                  t = void 0;
                e &&
                  e[0] &&
                  e[0].props &&
                  e[0].props.option &&
                  e[0].props.option.thumbSize &&
                  (t = e[0].props.option.thumbSize[0]);
                var n = this.getCompleteFilter();
                n &&
                  n.length > 0 &&
                  e.length &&
                  e[0].props &&
                  e[0].props.option &&
                  e[0].props.option.originalData &&
                  (e = this.reorder(e)),
                  this.props.limitResults &&
                    (e = e.slice(
                      0,
                      this.props.limitResults * this.state.showmores
                    ));
                var r = this.props.linked
                  ? ""
                  : He(
                      "grid-layout",
                      { "specified-columns": this.props.columns },
                      Be(
                        {},
                        "specified-columns-".concat(this.props.columns),
                        this.props.columns
                      ),
                      Be({}, "thumb-width-".concat(t), t)
                    );
                return React.createElement("div", { className: r }, e);
              }
            },
            {
              key: "getCompleteFilter",
              value: function() {
                if (!UIState.searchFilter && !UIState.genreSearchFilter)
                  return [];
                var e =
                  UIState.searchFilter
                    .toLowerCase()
                    .replace(/\W+/g, " ")
                    .split(" ")
                    .map(function(e) {
                      return e.trim();
                    }) || [];
                return (
                  UIState.genreSearchFilter &&
                    e.push(UIState.genreSearchFilter),
                  e
                );
              }
            },
            {
              key: "reorder",
              value: function(e) {
                var t = this,
                  n = this.getCompleteFilter(),
                  r = !1,
                  o = [],
                  a = "unknown";
                return (
                  e.map(function(e) {
                    var i =
                      e.props.option.originalData ||
                      console.error("No original data for", e.props.option);
                    if (i) {
                      a = i.slotR;
                      var s = i.match(n),
                        c = i.filter(n);
                      (!s && t.props.hideUnfound) ||
                        (s && (r = !0),
                        o.push(
                          Ae({}, e, {
                            match: s,
                            filter: c,
                            props: Ae({}, e.props, {
                              className: s
                                ? "".concat(
                                    e.props.className || "",
                                    " filterable--isFiltered"
                                  )
                                : e.props.className
                            })
                          })
                        ));
                    }
                  }),
                  Reporting.sendSearch(
                    UIState.searchFilter,
                    r,
                    a,
                    UIState.genreSearchFilter
                  ),
                  (o = o.sort(function(e, t) {
                    return e.match === t.match
                      ? e.filter < t.filter
                        ? -1
                        : e.filter > t.filter
                        ? 1
                        : 0
                      : e.match
                      ? -1
                      : 1;
                  }))
                );
              }
            }
          ]) && Fe(n.prototype, r),
          o && Fe(n, o),
          t
        );
      })();
    function Xe(e) {
      return (Xe =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ge(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ye(e, t) {
      return !t || ("object" !== Xe(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Ze(e) {
      return (Ze = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Je(e, t) {
      return (Je =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var $e = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Ye(this, Ze(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Je(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "hasContent",
            value: function(e) {
              return this.available(e).length > 0;
            }
          },
          {
            key: "getThumbnails",
            value: function(e) {
              return this.available(e).map(function(e) {
                return UIState.alwaysCompact
                  ? CK.Paths.getPartThumbSmall(e)
                  : CK.Paths.getPartThumb(e);
              });
            }
          },
          {
            key: "hasNew",
            value: function(e) {
              return !!this.available(e).find(function(e) {
                return e.new;
              });
            }
          },
          {
            key: "clearPartCache",
            value: function(e) {
              e ? delete t.cache[e] : (t.cache = {});
            }
          },
          {
            key: "available",
            value: function(e) {
              var n = e.label || e.slot,
                r = e.slot || n.toLowerCase();
              r in t.cache || (t.cache[r] = CK.Options.getSelectableParts(r));
              var o = e.filter;
              return o
                ? "new" === o
                  ? t.cache[r].filter(function(e) {
                      return e.new;
                    })
                  : "all" === o
                  ? t.cache[r]
                  : t.cache[r].filter(function(e) {
                      return o in e.keywords;
                    })
                : t.cache[r];
            }
          },
          {
            key: "getOptions",
            value: function(e) {
              var t = this,
                n = e.slot || (e.label || e.slot).toLowerCase(),
                r =
                  CK.character.data.mirroredPose &&
                  CK.Settings.getSlotSetting(n, "allowMirror");
              e.flip && (r = !r);
              var o =
                  CK.Options.getSlot(n) ||
                  console.error("Could not find slot", n),
                a = n;
              o.source && (n = o.source);
              var i = this.available(e),
                s = [],
                c = CK.data.limitedParts[a],
                l = CK.displayData.disabledKeywords,
                u = CK.displayData.vanishIfNotKeyword[n],
                p = function(n) {
                  var o = i[n];
                  if ((u && !o.keywords[u]) || (e.test && !e.test(o)))
                    return "continue";
                  var p = !1,
                    f = "";
                  for (var h in l)
                    h in o.keywords && ((p = !0), (f = l[h] || ""));
                  var m = UIState.alwaysCompact
                      ? CK.Paths.getPartThumbSmall(o)
                      : CK.Paths.getPartThumb(o),
                    d = CK.Options.getAttr(o, "displayname") || o.name,
                    y = CK.Options.getAttr(o, "description");
                  var b = new Re({
                    thumb: m,
                    label: d,
                    description: y,
                    onClick: p
                      ? void 0
                      : function(n) {
                          t.partClicked(n, o, a, e.clearTransforms);
                        },
                    selected: o.id === c,
                    mirrorThumb: r,
                    thumbSize: o.thumbSize,
                    tagLabel: o.tagLabel,
                    tagColor: o.tagColor,
                    originalData: o,
                    displayOrder: o.display_order,
                    grayedOut: p,
                    grayedOutReason: f
                  });
                  s.push(b);
                };
              for (var f in i) p(f);
              return s.length ? s : void 0;
            }
          },
          {
            key: "partClicked",
            value: function(e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : t.slot,
                r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                o = "L" === t.side ? CK.Options.getPart(t.link) : t,
                a = t.link ? CK.Options.getPart(t.link) : void 0,
                i = t.id === CK.data.limitedParts[n],
                s = !!CK.Settings.getSlotSetting(n, "required");
              if (!i || !s) {
                var c = {};
                if (
                  (e && a && (c[n.slice(0, -1) + a.side] = i ? void 0 : a.id),
                  t.occupiesRandL && (c[t.unsidedSlot + "L"] = void 0),
                  "L" === t.side && !e && !i)
                ) {
                  var l = CK.data.limitedParts[t.unsidedSlot + "R"];
                  l &&
                    CK.Options.getPart(l).occupiesRandL &&
                    (c[t.unsidedSlot + "R"] = void 0);
                }
                c[n] = i ? void 0 : t.id;
                var u,
                  p,
                  f,
                  h = {};
                if (!i) {
                  var m = o && o.defaultPaints;
                  m && ((h[t.slot] = m), e && a && (h[a.slot] = m));
                }
                this.makeTweak({
                  parts: c,
                  paints: h,
                  transforms: r
                    ? ((u = {}),
                      (p = n),
                      (f = void 0),
                      p in u
                        ? Object.defineProperty(u, p, {
                            value: f,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                          })
                        : (u[p] = f),
                      u)
                    : {}
                });
              }
            }
          },
          {
            key: "makeTweak",
            value: function(e) {
              CK.tweak(e);
            }
          }
        ]),
        (r = [
          {
            key: "render",
            value: function() {
              if (this.props.label.toLowerCase() in CK.data.disableMenus)
                return React.createElement(
                  "a",
                  null,
                  CK.data.disableMenus[this.props.label.toLowerCase()]
                );
              var e = this.constructor.getOptions(this.props);
              if ((!e || !e.length) && this.props.hideIfEmpty) return null;
              var t =
                this.props.slot ||
                (this.props.label || this.props.slot).toLowerCase();
              return (
                e &&
                  CK.Settings.clearParts &&
                  UIState.compact &&
                  !CK.Settings.getSlotSetting(t, "required") &&
                  e.push(
                    new Re({
                      label: "Empty",
                      description: "Remove anything currently selected",
                      selected: !CK.data.parts[t],
                      thumb: "/static/svg/empty.svg",
                      extraClass: "clearButton",
                      onClick: function() {
                        CK.clearSlot(t);
                      }
                    })
                  ),
                React.createElement(
                  React.Fragment,
                  null,
                  this.props.header ? this.props.header : null,
                  React.createElement(
                    "div",
                    null,
                    e
                      ? React.createElement(
                          Qe,
                          { columns: this.props.columns },
                          e.map(function(e, t) {
                            var n = e.originalData
                                ? e.originalData.keywords.XXL
                                  ? "XXL"
                                  : e.originalData.keywords.XL
                                  ? "XL"
                                  : void 0
                                : void 0,
                              r = e.originalData ? e.originalData.id : t;
                            return React.createElement(Ue, {
                              option: e,
                              overlay:
                                n &&
                                React.createElement(
                                  "div",
                                  { className: "XL" },
                                  n
                                ),
                              key: r
                            });
                          })
                        )
                      : null
                  )
                )
              );
            }
          }
        ]) && Ge(n.prototype, r),
        o && Ge(n, o),
        t
      );
    })();
    function et(e) {
      return (et =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function tt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function nt(e, t) {
      return !t || ("object" !== et(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function rt(e) {
      return (rt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ot(e, t) {
      return (ot =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function at(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    $e.cache = {};
    var it,
      st = ["swordD", "staffD", "guitarD", "bowD", "rifleD"],
      ct = React.createElement(Ue, {
        option: new Re({
          thumb: "/static/img/twoHandedBlank_icon.png",
          thumbSize: [30, 30]
        })
      });
    function lt() {
      return (
        lt._dPosesByType ||
          ((lt._dPosesByType = {}),
          st.map(function(e) {
            var t = CK.Options.posesByKeyword[e];
            t &&
              (lt._dPosesByType[e] = t.map(function(e) {
                return e.pose_id;
              }));
          })),
        lt._dPosesByType
      );
    }
    function ut() {
      return void 0 === it || it > 24 ? 17 : it;
    }
    var pt = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = nt(this, rt(t).call(this, e))).searchChanged = function() {
            return n.forceUpdate();
          }),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ot(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "getItem",
            value: function(e, t, n) {
              return React.createElement(
                "div",
                {
                  className: "linked-part",
                  option: { originalData: e.originalData || n.originalData },
                  key: e.originalData.id
                },
                React.createElement(Ue, { option: e }),
                t,
                React.createElement(Ue, { option: n })
              );
            }
          },
          {
            key: "partClick",
            value: function(e, t, n, r) {
              var o,
                a = e.originalData,
                i = CK.displayData.parts[t];
              if (e.selected) o = { parts: at({}, t, void 0) };
              else if (r) {
                var s;
                o = {
                  parts: ((s = {}), at(s, t, a.id), at(s, n, void 0), s),
                  poses: { main: ut() }
                };
              } else o = { parts: at({}, t, a.id) };
              (o.transforms = at({}, t, void 0)),
                (o.custom = at(
                  {},
                  "flip" + t.charAt(0).toUpperCase() + t.slice(1),
                  void 0
                )),
                r ||
                (i &&
                  (i.poseModifier !== a.poseModifier ||
                    i.poseGroup !== a.poseGroup))
                  ? CKUI.promptClearTransforms(o)
                  : CK.tweak(o);
            }
          },
          {
            key: "clearClick",
            value: function(e, t) {
              var n;
              CKUI.promptClearTransforms({
                parts: ((n = {}), at(n, e, void 0), at(n, t, void 0), n)
              });
            }
          }
        ]),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              CK.Events.on("slotFilterChanged", this.searchChanged);
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              CK.Events.off("slotFilterChanged", this.searchChanged);
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.props.slot + "R",
                t = UIState.filters[e];
              return React.createElement(
                Qe,
                { linked: !0, limitResults: t && "all" !== t ? void 0 : 50 },
                this.getOptions()
              );
            }
          },
          {
            key: "getMiddleOption",
            value: function(e, t, n) {
              var r = !!CK.data.parts.mount,
                o = e.originalData,
                a = r
                  ? void 0
                  : t
                  ? function() {
                      return (function(e) {
                        var t;
                        CKUI.promptClearTransforms({
                          poses: { main: ut() },
                          parts:
                            ((t = {}),
                            at(t, e + "R", void 0),
                            at(t, e + "L", void 0),
                            t)
                        });
                      })(n);
                    }
                  : function() {
                      return (function(e, t) {
                        var n,
                          r = CK.data.limitedPoses.main;
                        it = r;
                        var o = lt();
                        for (var a in e.keywords)
                          if (a in o) {
                            var i = o[a],
                              s = !1;
                            for (var c in i) i[c] == r && (s = !0);
                            s || (r = i[0]);
                            break;
                          }
                        CKUI.promptClearTransforms({
                          parts:
                            ((n = {}),
                            at(n, t + "R", e.id),
                            at(n, t + "L", void 0),
                            n),
                          poses: { main: r }
                        });
                      })(o, n);
                    };
              return React.createElement(Ue, {
                option: new Re({
                  thumb:
                    o && o.keywords.bowD
                      ? "/static/svg/items/bow.svg"
                      : "/static/svg/twohanded.svg",
                  label: r
                    ? "Not available while mounted. "
                    : e.label + " with Two Handed Pose",
                  description: r
                    ? "Two handed not available while on mounted. " +
                      e.description
                    : e.description,
                  onClick: a,
                  selected: t,
                  thumbSize: [30, 30],
                  grayedOut: r
                })
              });
            }
          },
          {
            key: "getOptions",
            value: function() {
              var e = this,
                n = this.props,
                r = n.label,
                o = n.flipThumb,
                a = n.slot,
                i = a || r.toLowerCase(),
                s = i + "R",
                c = i + "L",
                l = this.props.itemD,
                u = UIState.filters[s],
                p = $e.getOptions(
                  Object.assign({}, this.props, {
                    slot: s,
                    flipThumb: o,
                    filter: u,
                    test: function(e) {
                      return !e.keywords.handExclude;
                    }
                  })
                );
              if (!p || !p.length) return null;
              var f = (function() {
                  var e = CK.data.limitedPoses.main,
                    t = lt();
                  for (var n in t)
                    for (var r in t[n]) if (t[n][r] === e) return !0;
                  return !1;
                })(),
                h = CK.data.mirroredPose,
                m = !!CK.data.parts.mount;
              return p
                .map(function(n, r) {
                  var o = n.originalData;
                  if (o.link) {
                    var i = CK.Options.getPart(o.link),
                      u = (function(e) {
                        var t,
                          n = CK.data.limitedPoses.main,
                          r = lt();
                        for (var o in e.keywords)
                          if (o in r) {
                            var a = r[o];
                            for (var i in a) if (a[i] === n) return !0;
                            t = !1;
                          }
                        return t;
                      })(o),
                      p = void 0 !== u && !m && l,
                      d = new Re(Object.assign({}, n, { originalData: i })),
                      y = o.id === CK.data.parts[s],
                      b = i.id === CK.data.parts[c],
                      v =
                        f &&
                        p &&
                        u &&
                        (y || b) &&
                        !(!CK.data.parts[s] && !CK.data.parts[c]);
                    (n.selected = !v && y),
                      (d.selected = !v && b),
                      (n.onClick = function() {
                        return t.partClick(n, s, c, f);
                      }),
                      (d.onClick = function() {
                        return t.partClick(d, c, s, f);
                      }),
                      (n.mirrorThumb = h),
                      (d.mirrorThumb = !h);
                    var g = p ? e.getMiddleOption(n, v, a) : ct;
                    return h ? t.getItem(d, g, n) : t.getItem(n, g, d);
                  }
                  console.error("No link for part", o);
                })
                .filter(function(e) {
                  return e;
                });
            }
          }
        ]) && tt(n.prototype, r),
        o && tt(n, o),
        t
      );
    })();
    function ft(e) {
      return (ft =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ht(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function mt(e, t) {
      return !t || ("object" !== ft(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function dt(e) {
      return (dt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function yt(e, t) {
      return (yt =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var bt = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            mt(this, dt(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && yt(e, t);
          })(t, CK.DisplayData),
          (n = t),
          (r = [
            {
              key: "_customUpdateStart",
              value: function() {
                this._extraArms(),
                  this._extraTails(),
                  this._twoHanded(),
                  this._back(),
                  this._trunk(),
                  this._tailItem(),
                  this._base(),
                  this._heels();
              }
            },
            {
              key: "_twoHanded",
              value: function() {
                if (
                  !(this.parts.mount || (this.parts.itemR && this.parts.itemL))
                ) {
                  var e = this.parts.itemR || this.parts.itemL;
                  if (e) {
                    var t = this.poses.main;
                    if (
                      st.find(function(n) {
                        return n in e.keywords && n in t.keywords;
                      })
                    ) {
                      var n = CK.Options.getPartBySlotAndName("itemD", e.name);
                      n &&
                        (delete this.parts.itemR,
                        delete this.parts.itemL,
                        (this.parts.itemD = n),
                        e.keywords.bowD &&
                          !this.parts.itemAttachT &&
                          (this.parts.itemAttachT =
                            CK.Options.getPartBySlotAndName(
                              "itemAttachT",
                              "arrow" + e.name.slice(3)
                            ) ||
                            CK.Options.getPartBySlotAndName(
                              "itemAttachT",
                              "arrowStandard"
                            )));
                    }
                  }
                }
              }
            },
            {
              key: "_extraArms",
              value: function() {
                for (var e = this.data.custom.arms || 0, t = 0; t < e; t++)
                  this.parts.chest &&
                    !this.parts.chest.keywords.sleeveless &&
                    (this.parts["chest".concat(t)] = this.parts.chest),
                    this.parts.bodyUpper &&
                      (this.parts[
                        "bodyUpper".concat(t)
                      ] = this.parts.bodyUpper);
              }
            },
            {
              key: "_extraTails",
              value: function() {
                for (var e = this.data.custom.tails || 0, t = 0; t < e; t++)
                  this.parts.tail &&
                    (this.parts["tail".concat(t)] = this.parts.tail);
              }
            },
            {
              key: "_back",
              value: function() {
                var e = this;
                ["R", "L"].map(function(t) {
                  var n = e.parts["backItem" + t];
                  if (n) {
                    var r = CK.Options.partsBySlot.itemBindR
                      .map(function(e) {
                        return e.name;
                      })
                      .find(function(e) {
                        return n.keywords["attach_" + e];
                      });
                    if (r) {
                      var o =
                        CK.Options.getPartBySlotAndName("itemBind" + t, r) ||
                        console.error("Failed to find itemBind", r);
                      o && (e.parts["itemBind" + t] = o);
                    } else
                      console.error(
                        "Back item ".concat(
                          n.name,
                          " does not have an attach_**** keyword. How will it attach to the back?"
                        )
                      );
                  }
                }),
                  (this.parts.backItemR || this.parts.backItemL) &&
                    this.parts.back &&
                    this.parts.back.keywords.cape &&
                    (this.poseModifiers.main || (this.poseModifiers.main = []),
                    this.poseModifiers.main.push({
                      priority: 1,
                      modifierName: "backCapeHeavy"
                    }));
              }
            },
            {
              key: "_trunk",
              value: function() {
                var e = this.parts.itemTrunk;
                if (this.parts.face && 10246 === this.parts.face.id && e) {
                  this.poseModifiers.main || (this.poseModifiers.main = []);
                  var t =
                    { book: "face_trunk_cube", shield: "face_trunk_shield" }[
                      e.poseModifier
                    ] || "face_trunk";
                  this.poseModifiers.main.push({
                    priority: 1,
                    modifierName: t
                  });
                } else delete this.parts.itemTrunk;
              }
            },
            {
              key: "_tailItem",
              value: function() {
                var e = this.parts,
                  t = e.itemTail,
                  n = e.tail;
                if (n && t && n.keywords.prehensile) {
                  this.poseModifiers.main || (this.poseModifiers.main = []);
                  var r =
                    { book: "tail_item_cube", shield: "tail_item_shield" }[
                      t.poseModifier
                    ] || "tail_item";
                  this.poseModifiers.main.push({
                    priority: 1,
                    modifierName: r
                  });
                } else delete this.parts.itemTail;
              }
            },
            {
              key: "_base",
              value: function() {
                var e = this.parts,
                  t = e.base,
                  n = e.label;
                if (t && !t.keywords.feetRotateBase) {
                  var r = (
                      this.parts.baseRim ||
                      CK.Options.getPartBySlotAndName("baseRim", "straight")
                    ).baseName,
                    o = "";
                  t.keywords.square
                    ? (o += "square")
                    : t.keywords.hex && (o += "hex"),
                    (this.parts.mount ||
                      (this.parts.bodyLower &&
                        "centaur" === this.parts.bodyLower.name)) &&
                      (o += "long"),
                    o.length && (r += "_" + o),
                    (this.parts.baseRim = CK.Options.getPartBySlotAndName(
                      "baseRim",
                      r
                    ));
                }
                if (n && "solid" === n.baseName)
                  if (t.keywords.feetRotateBase) delete this.parts.label;
                  else {
                    var a = t.keywords.square
                      ? "square"
                      : t.keywords.hex
                      ? "hex"
                      : "round";
                    (this.parts.mount ||
                      (this.parts.bodyLower &&
                        "centaur" === this.parts.bodyLower.name)) &&
                      (a += "long"),
                      (this.parts.label =
                        CK.Options.getPartBySlotAndName(
                          "label",
                          "solid_" + a
                        ) || console.error("missing label", "solid_" + a));
                  }
              }
            },
            {
              key: "_heels",
              value: function() {
                var e = this,
                  t = this.parts,
                  n = t.feetL,
                  r = t.feetR;
                ["heelMed", "heelHi"].map(function(t) {
                  !r ||
                    !r.keywords[t] ||
                    (n && n.keywords[t]) ||
                    (e.parts.feetL = CK.Options.getPart(r.link)),
                    !n ||
                      !n.keywords[t] ||
                      (r && r.keywords[t]) ||
                      (e.parts.feetR = CK.Options.getPart(n.link));
                });
              }
            }
          ]) && ht(n.prototype, r),
          o && ht(n, o),
          t
        );
      })(),
      vt = {
        useNextVariants: !0,
        breakpoints: { values: { md: CK.Settings.compactWidth } },
        palette: {
          primary: {
            lightest: "#B1B2B3",
            light: "#989898",
            main: "#555963",
            dark: "#333333"
          },
          secondary: {
            main: "#ab0007",
            dark: "#6f0b0d",
            contrastText: "white"
          },
          background: {
            lightest: "#FFFFFF",
            lighter: "#FCFCFC",
            light: "#F6F7F8",
            main: "#E9EAEB",
            dark: "#D6DDE5",
            card: "linear-gradient(to right bottom, #f1f1f1, #333)"
          },
          border: { light: "#CCC", main: "#EAEAEA", dark: "#B1B2B3" }
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 16,
          fontFamily: [
            "Roboto",
            "-apple-system",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
          ].join(","),
          bold: { fontFamily: "RobotoBold" }
        },
        overrides: {
          MuiExpansionPanel: {
            expanded: {
              margin: "0 0 8px 0",
              boxShadow: "none",
              border: "1px solid #E6E6E6"
            }
          },
          MuiAppBar: { root: { boxShadow: "none" } },
          MuiFormLabel: {
            asterisk: { color: "#F0286B" },
            root: {
              letterSpacing: "0.5px",
              textTransform: "capitalize",
              lineHeight: ".2"
            }
          },
          MuiSelect: {
            icon: { right: "8px" },
            select: { padding: void 0, height: void 0 },
            selectMenu: { lineHeight: void 0 }
          },
          MuiOutlinedInput: { input: { padding: "12px 14px" } },
          MuiPrivateNotchedOutline: { root: { margin: "-1px" } },
          MuiTypography: { root: { letterSpacing: "0.2px" } },
          MuiCardMedia: { root: { marginTop: "12px", marginBottom: "12px" } }
        }
      },
      gt = {
        skeleton: {
          human: [
            "hand_familiar",
            "hand_fist",
            "hand_open",
            "hand_book",
            "hand_pistol",
            "hand_fireball",
            "hand_lantern",
            "hand_main",
            "hand_shield",
            "hand_rifle",
            "hand_orb",
            "jaw_underbite",
            "hair_cape",
            "hand_ratStand",
            "hand_pseudodragon",
            "hand_casting",
            "hand_summon",
            "sideItem_skirt",
            "hand_harp",
            "hand_bow"
          ]
        },
        slotGroups: {
          characterGroup: [
            "face",
            "body",
            "ears",
            "hair",
            "beard",
            "horns",
            "wingsL",
            "tail",
            "helm",
            "mask",
            "chest",
            "shouldersL",
            "wrist",
            "glovesL",
            "back",
            "legs",
            "feetR",
            "itemR",
            "itemL",
            "sideL",
            "familiarR",
            "eyeL",
            "teeth",
            "shouldersR",
            "glovesR",
            "sideR",
            "feetL",
            "eyebrows",
            "torso",
            "wingsR",
            "familiarL",
            "itemD",
            "eyeR",
            "supportL",
            "supportR",
            "twoHanded",
            "bodyUpper",
            "bodyLower",
            "faceUpper",
            "faceLower",
            "earR",
            "earL",
            "hornR",
            "hornL",
            "bodyMiscHead",
            "bodyMiscLegsR",
            "bodyMiscLegsL",
            "faceBridge",
            "itemAttachT",
            "sideAttachR",
            "sideAttachL",
            "backAttach",
            "handSlugR",
            "handSlugL",
            "torsoBridge"
          ]
        },
        slots: {
          eyebrows: { guaranteedFormOverride: !0 },
          beard: {},
          bodyUpper: { groundOffset: 0.01, required: !0, normalMap2: !0 },
          bodyLower: { groundOffset: 0.01, required: !0, normalMap2: !0 },
          face: { required: !0 },
          eyeR: { required: !0 },
          eyeL: { required: !0 },
          mount: { bounds: [2, 0, 2, 2, 4.7, 2] },
          base: { groundOffset: -0.22 },
          material: { required: !0 },
          scale: { required: !0 },
          label: { allowMirror: !1, defaultLabel: "Your Text" },
          tagNumber: { allowMirror: !1 },
          initiativeBack: { allowMirror: !1 },
          itemAttachT: { required: !0 }
        },
        mobileThumbs: !0,
        characterRotation: { x: 0, y: 2.05, z: 0 },
        defaultCharacterName: "Hero"
      };
    (gt.sliders = d.sliders),
      (gt.projectName = "HeroForge"),
      (gt.projectLabel = "Hero Forge"),
      (gt.theme = vt),
      (gt.rc = "hero"),
      (gt.content = 1577838932),
      (gt.groundColor = !0),
      (gt.clearParts = !0),
      (gt.hideBackgroundForScreenshots = !0),
      (gt.materialSims = {
        default: {
          diffuse: new RK.Color(0.67, 0.67, 0.67),
          roughness: 0.55,
          metalness: 0,
          occlusionStrength: 0.8,
          matcapMap: "default",
          lighting: {
            envLight: {
              saturationScale: 0,
              intensity: 1,
              rotateY: 0,
              mapName: "glass_passage_1k"
            },
            ambient: { intensity: 0.1 },
            sunlight: {
              color: new RK.Color(1, 1, 1),
              intensity: 0.7,
              position: new RK.Vec3(9, 10, 2)
            },
            envCube: {
              groundColor: new RK.Vec4(214 / 255, 213 / 255, 219 / 255, 1),
              groundShadowStrength: 0.45,
              envCubeSaturation: 1,
              fog: new RK.Vec4(0.93, 0.957, 1, 0),
              rotation: 0,
              contrast: 1,
              contrastMidpoint: 0.5
            }
          }
        },
        forge: {},
        color: {
          matcapMap: "default",
          bakedColor: !0,
          bakedPhysical: !0,
          bakedSSS: !0,
          eyeShader: !0,
          bakedSurfaceHiRez: !0,
          lighting: {
            envCube: {
              groundColor: new RK.Vec4(159 / 255, 201 / 255, 73 / 255, 1)
            }
          }
        },
        strong: {
          diffuse: new RK.Color(0.76, 0.74, 0.72),
          roughness: 1,
          occlusionStrength: 0,
          color: !1,
          matcapMap: "strong"
        },
        ultra: {
          diffuse: new RK.Color(0.8, 0.8, 0.8),
          roughness: 0.3,
          metalness: 0
        },
        bronze: {
          diffuse: new RK.Color(1, 0.62, 0.28),
          roughness: 0.23,
          metalness: 1,
          matcapMap: "bronze",
          lighting: { envLight: { intensity: 2 } }
        },
        rose_gold: {
          diffuse: new RK.Color(0.95, 0.75, 0.7),
          roughness: 0.23,
          metalness: 1,
          matcapMap: "rose",
          lighting: { envLight: { intensity: 2 } }
        },
        steel: {
          diffuse: new RK.Color(0.57, 0.46, 0.38),
          roughness: 0.7,
          metalness: 1,
          matcapMap: "steel",
          lighting: { envLight: { intensity: 2.2 } }
        },
        gray: {
          diffuse: new RK.Color(0.2, 0.2, 0.2),
          roughness: 0.4,
          occlusionStrength: 1,
          matcapMap: "gray",
          lighting: { envLight: { intensity: 3 } }
        },
        digital: {
          diffuse: new RK.Color(0, 0.83, 0),
          roughness: 0.5,
          matcapMap: "digital",
          lighting: {
            envLight: {
              saturationScale: 0,
              intensity: 0.8,
              rotateY: 0,
              mapName: "glass_passage_1k"
            },
            ambient: { intensity: 0.03 }
          }
        },
        white: {
          diffuse: new RK.Color(0.65, 0.65, 0.65),
          roughness: 0.6,
          matcapMap: "primed"
        }
      }),
      (gt.hiRez = !1),
      (gt.matcapPerformance = !0),
      (gt.searchable = !0),
      (gt.forceNormalMaps = !0),
      (gt.color = !1),
      (gt.colorTextureSizeHigh = 2048),
      (gt.hiRezNormalMaps = gt.color),
      (gt.subsurface = gt.color
        ? CK.Settings.SubsurfaceMode.AmbientTint
        : CK.Settings.SubsurfaceMode.None),
      (gt.shaderballs = gt.color),
      (gt.seamFin = gt.color),
      (gt.extras = !0),
      (gt.CustomDisplay = pe),
      (gt.CustomData = _e),
      (gt.CustomDisplayData = bt),
      (gt.newBreadcrumbs = !0),
      (gt.userMontageThumbs = !0),
      (gt.cameras = {
        default: {
          position: [5.730145525734176, 1.78373404465485, -2.545764637785941],
          rotation: [
            -3.0454367613489515,
            1.1509922608613183,
            3.053741177111526,
            "XYZ"
          ],
          target: [0, 1.5381865337936858, 0]
        },
        config: {
          position: [
            5.171456336975098,
            1.7597931623458862,
            -2.2975525856018066
          ],
          rotation: [
            -3.0454367613489515,
            1.1509922608613183,
            3.053741177111526,
            "XYZ"
          ],
          target: [0, 1.5381865337936858, 0]
        },
        xl: {
          position: [6.656201047875249, 2.3380135078339666, -2.980862474460352],
          rotation: [
            -3.0454367613489515,
            1.1509922608613175,
            3.0537411771115264,
            "XYZ"
          ],
          target: [
            -0.027158655561600773,
            2.0516189770147055,
            -0.0116079034897251
          ]
        },
        mount: {
          position: [7.815384864807129, 1.389518141746521, 2.480351448059082],
          rotation: [
            0.3095619788523651,
            1.208695456640952,
            -0.2906347419610845,
            "XYZ"
          ],
          target: [-0.1685520473121323, 2.310857791814972, -0.400233889598574]
        },
        centaur: {
          position: [6.815384864807129, 1.389518141746521, 2.180351448059082],
          rotation: [
            0.3095619788523651,
            1.208695456640952,
            -0.2906347419610845,
            "XYZ"
          ],
          target: [-0.1685520473121323, 1.910857791814972, -0.400233889598574]
        },
        initiative: {
          position: [7.5639895404591435, 4.795841648212197, 0.6450987853158294],
          rotation: [
            -1.3418104464049418,
            1.0336478979467834,
            1.3058941122274084,
            "XYZ"
          ],
          target: [-0.1685520473121323, 0.310857791814972, -0.400233889598574]
        },
        label: {
          position: [
            2.153991481231397,
            -4.241152141453415,
            -1.3805187059667179
          ],
          rotation: [
            1.8487440780525282,
            0.452112464426454,
            -2.1493734464450625,
            "XYZ"
          ],
          target: [-0.5877357796106629, 1.1875106396111297, 0.1684616719908375],
          controls: { enabled: !1 }
        },
        labelMount: {
          position: [5.293248230777339, -4, -2.5740943415315054],
          rotation: [
            3.0016118083270142,
            1.1039936416198415,
            -3.016423009571841,
            "XYZ"
          ],
          target: [-0.606165449755801, 0.5, 0.36983571662546744],
          controls: { enabled: !1 }
        },
        face: {
          position: [5.137748893490751, 2.860026800927182, -2.266741724576156],
          rotation: [
            -3.041924015172476,
            1.1666796063846314,
            3.0499054509561443,
            "XYZ"
          ],
          target: function() {
            return new RK.Vec3()
              .setFromMatrixPosition(
                CK.display.skeletons.main.obj.getObjectByName(
                  "main_neck_03_095_bind_jnt"
                ).matrixWorld
              )
              .toArray();
          },
          controls: { maxPolarAngle: 0.62 * Math.PI },
          FOV: 25
        }
      }),
      (gt.montageCameras = {
        default: [
          gt.cameras.default,
          {
            position: [
              3.3764192973203637,
              -2.0389472887904603,
              -1.282661023297193
            ],
            rotation: [
              1.950690421398093,
              0.8074476520143782,
              -2.0756574939824395,
              "XYZ"
            ],
            target: [
              -0.31694859823213145,
              1.2430762545204426,
              0.0278179147927242
            ]
          },
          {
            position: [
              6.930705919911269,
              5.022418555401691,
              -4.619764695162525
            ],
            rotation: [
              -2.612103139931966,
              0.9289263261626659,
              2.7032501022556135,
              "XYZ"
            ],
            target: [
              -0.26760195453006574,
              2.304813260127002,
              0.023876973531785917
            ]
          },
          {
            position: [
              -5.565347454624194,
              1.6208315732263123,
              1.1447225914739456
            ],
            rotation: [
              -0.06729706491863621,
              -1.352073389883858,
              -0.0656984012802916,
              "XYZ"
            ],
            target: [
              -0.03629984586379363,
              1.5381865337936858,
              -0.08148598507517447
            ]
          }
        ],
        mount: [
          gt.cameras.mount,
          {
            position: [
              1.5958554601716017,
              4.301264563066741,
              -5.356707734647334
            ],
            rotation: [
              -2.9235214661290962,
              0.25445809782295115,
              3.0858702771855944,
              "XYZ"
            ],
            target: [
              0.17011026238802057,
              3.1153355418836526,
              -0.004922402287120043
            ]
          },
          {
            position: [
              -3.9257077993960405,
              6.567550092217099,
              0.22511508950839995
            ],
            rotation: [
              -1.5064476908776727,
              -0.8302754401553978,
              -1.4837171431944445,
              "XYZ"
            ],
            target: [
              0.04594641822168567,
              2.944792222996215,
              -0.00832673445460774
            ]
          },
          {
            position: [
              1.6870397747203891,
              -4.52500659330245,
              -3.224338377104235
            ],
            rotation: [
              2.1445484900645266,
              0.23774117676083087,
              -2.7921401025657815,
              "XYZ"
            ],
            target: [
              -0.22308967397663226,
              2.095309267724868,
              1.0542065434385806
            ]
          }
        ],
        xl: [
          gt.cameras.xl,
          {
            position: [
              3.3764192973203637,
              -2.0389472887904603,
              -1.282661023297193
            ],
            rotation: [
              1.950690421398093,
              0.8074476520143782,
              -2.0756574939824395,
              "XYZ"
            ],
            target: [
              -0.31694859823213145,
              1.2430762545204426,
              0.0278179147927242
            ]
          },
          {
            position: [
              6.930705919911269,
              5.022418555401691,
              -4.619764695162525
            ],
            rotation: [
              -2.612103139931966,
              0.9289263261626659,
              2.7032501022556135,
              "XYZ"
            ],
            target: [
              -0.26760195453006574,
              2.304813260127002,
              0.023876973531785917
            ]
          },
          {
            position: [
              -7.846944566961999,
              2.221452498678966,
              2.130084069452909
            ],
            rotation: [
              -0.07913316819176604,
              -1.3026709918672674,
              -0.07631684729845688,
              "XYZ"
            ],
            target: [
              -0.027158655561600773,
              2.0516189770147055,
              -0.0116079034897251
            ]
          }
        ],
        initiative: [
          gt.cameras.initiative,
          {
            position: [
              11.335983261028913,
              1.9014990894612744,
              -5.986803257379833
            ],
            rotation: [
              -2.8642069727854294,
              1.103238791926028,
              2.8926961323360265,
              "XYZ"
            ],
            target: [-0.1685520473121323, 0.310857791814972, -0.400233889598574]
          },
          {
            position: [
              -10.550557705536367,
              -0.3482641510499561,
              -1.8037374624537168
            ],
            rotation: [
              2.702538040251366,
              -1.4225405925323116,
              2.706767195647038,
              "XYZ"
            ],
            target: [-0.1685520473121323, 0.310857791814972, -0.400233889598574]
          },
          {
            position: [
              5.019098830506665,
              7.123813292680744,
              2.3695884355854675
            ],
            rotation: [
              -1.1846542592970901,
              0.6143232675171204,
              0.9565067174080135,
              "XYZ"
            ],
            target: [-0.1685520473121323, 0.310857791814972, -0.400233889598574]
          }
        ]
      }),
      (gt.addonKeywords = {
        fantasy: ["all"],
        western: ["all"],
        scifi: ["all"],
        modern: ["all"],
        asian: ["all"]
      }),
      (gt.skinInfluenceMax = 8),
      (gt.sunOcclusion = !0);
    var wt = gt,
      _t = n(15);
    function Ct(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var kt = VN.axios,
      Rt = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, r;
        return (
          (t = e),
          (r = [
            {
              key: "set",
              value: function(e) {
                Object.assign(this, e), CK.Events.emit("menuChanged", this);
              }
            },
            {
              key: "changeSubSelection",
              value: function(e) {
                (this._subSelection[this.mainSelection] = e),
                  CK.Events.emit("menuChanged", this);
              }
            },
            {
              key: "updateBasketQuantity",
              value: function() {
                CK.User.isLoggedIn()
                  ? Promise.resolve(e.basketQuantityPromise()).then(function(
                      t
                    ) {
                      e.cartQuantity = t.data;
                    })
                  : (e.cartQuantity = 0);
              }
            },
            {
              key: "basketQuantityPromise",
              value: function() {
                var t = e.getRequest("cartCount");
                if (t && t.isPending()) return t;
                var n = e.QueryablePromise(
                  kt({ method: "get", url: "/cart_items/" })
                );
                return (
                  e.addRequest("cartCount", n),
                  e.updateBasketQuantity(),
                  e.getRequest("cartCount")
                );
              }
            },
            {
              key: "updateBasketQuantity",
              value: function() {
                CK.User.isLoggedIn() &&
                  Promise.resolve(e.basketQuantityPromise())
                    .then(function(t) {
                      (e.cartQuantity = t.data),
                        e.updateBasketIcon(),
                        (e.contentSummary &&
                          e.contentSummary.items &&
                          e.contentSummary.items.length === e.cartQuantity) ||
                          e.updateBasket();
                    })
                    .catch(function(e) {
                      return console.error(e);
                    });
              }
            },
            { key: "updateBasketIcon", value: function(e) {} },
            {
              key: "updateBasketPromise",
              value: function() {
                var t = this,
                  n = e.getRequest("requestCartContents");
                if (n && n.isPending()) return n;
                var r = e.QueryablePromise(
                  kt({ method: "get", url: "/basket/json/" })
                );
                return (
                  e.addRequest("requestCartContents", r),
                  Promise.resolve(r).then(function() {
                    return CK.Events.emit("menuChanged", t);
                  }),
                  e.updateBasket(),
                  e.getRequest("requestCartContents")
                );
              }
            },
            {
              key: "updateBasket",
              value: function() {
                CK.User.isLoggedIn() &&
                  Promise.resolve(e.updateBasketPromise()).then(function(t) {
                    var n =
                      t.data.items &&
                      Object.keys(t.data.items).map(function(e) {
                        var n = t.data.items[e];
                        return (n.hidden = !1), (n.removalID = Number(e)), n;
                      });
                    e.contentSummary = {
                      items: n,
                      shipping: t.data.shipping_charge,
                      creditBalance: t.data.credit_balance,
                      vouchers: t.data.voucher_discounts
                    };
                  });
              }
            },
            {
              key: "set",
              value: function(e) {
                Object.assign(this, e), CK.Events.emit("menuChanged", this);
              }
            },
            {
              key: "addRequest",
              value: function(e, t) {
                this._requests[e] = t;
              }
            },
            {
              key: "getRequest",
              value: function(e) {
                return this._requests[e];
              }
            },
            {
              key: "clearOverlays",
              value: function() {
                this.showOverlay = !1;
              }
            },
            {
              key: "debounced",
              value: function(e, t) {
                var n;
                return function() {
                  for (
                    var r = arguments.length, o = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    o[a] = arguments[a];
                  n && clearTimeout(n),
                    (n = setTimeout(function() {
                      t.apply(void 0, o), (n = null);
                    }, e));
                };
              }
            },
            {
              key: "QueryablePromise",
              value: function(e) {
                if (e.isResolved) return e;
                var t = !0,
                  n = !1,
                  r = !1,
                  o = e.then(
                    function(e) {
                      return (r = !0), (t = !1), e;
                    },
                    function(e) {
                      throw ((n = !0), (t = !1), e);
                    }
                  );
                return (
                  (o.isFulfilled = function() {
                    return r;
                  }),
                  (o.isPending = function() {
                    return t;
                  }),
                  (o.isRejected = function() {
                    return n;
                  }),
                  o
                );
              }
            },
            {
              key: "subSelection",
              get: function() {
                return this._subSelection[this.mainSelection];
              }
            },
            {
              key: "cartQuantity",
              get: function() {
                return this._cartQuantity;
              },
              set: function(e) {
                this._cartQuantity !== e &&
                  ((this._cartQuantity = e > 0 ? e : 0),
                  CK.Events.emit("menuChanged", this));
              }
            },
            {
              key: "serverRequestPending",
              get: function() {
                var e = this;
                return (
                  this._requests &&
                  Object.keys(this._requests).reduce(function(t, n) {
                    return e._requests[n].isPending() ? ++t : t;
                  }, 0)
                );
              }
            },
            {
              key: "initialRoute",
              get: function() {
                return this._initialRoute;
              },
              set: function(e) {
                this._initialRoute || (this._initialRoute = e);
              }
            },
            {
              key: "compact",
              get: function() {
                return this._compact;
              },
              set: function(e) {
                e &&
                  -1 === document.body.className.indexOf("compact") &&
                  (document.body.className += " compact"),
                  e || document.body.classList.remove("compact"),
                  (this._compact = e);
              }
            },
            {
              key: "showOverlay",
              get: function() {
                return this._showOverlay;
              },
              set: function(e) {
                (this._showOverlay = e), CK.Events.emit("menuChanged", this);
              }
            },
            {
              key: "characterSaved",
              get: function() {
                return this._characterSaved;
              },
              set: function(e) {
                e !== this._characterSaved &&
                  ((this._characterSaved = e),
                  CK.Events.emit("menuChanged", this));
              }
            },
            {
              key: "scrollPosition",
              set: function(t) {
                (t = this._scrollPosition) ||
                  ((this._scrollPosition = t),
                  e.debounced(100, CK.Events.emit("menuChanged", this)));
              },
              get: function() {
                return this._scrollPosition;
              }
            },
            {
              key: "closeHeaderBanner",
              get: function() {
                return this._closeHeaderBanner;
              },
              set: function(e) {
                this._closeHeaderBanner = e;
              }
            }
          ]),
          (n = null) && Ct(t.prototype, n),
          r && Ct(t, r),
          e
        );
      })();
    (Rt.compact = !1),
      (Rt.landscape = !0),
      (Rt.collapsed = !0),
      (Rt.mainSelection = ""),
      (Rt._subSelection = {}),
      (Rt._showOverlay = !1),
      (Rt.searchFilter = ""),
      (Rt.filters = {}),
      (Rt._requests = {}),
      (Rt._scrollPosition = 0),
      (Rt._closeHeaderBanner = !1),
      (Rt._cartQuantity = 0),
      (Rt._characterSaved = !1);
    var St = n(29);
    function Ot(e) {
      return (Ot =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Et(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function xt(e, t) {
      return !t || ("object" !== Ot(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function jt(e) {
      return (jt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Pt(e, t) {
      return (Pt =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Mt = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = xt(this, jt(t).call(this, e))).state = {
            image: void 0,
            transparent: !1,
            canvas: void 0,
            blobUrl: void 0
          }),
          n.capture(!1),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Pt(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "freeBlobUrl",
            value: function() {
              void 0 !== this.state.blobUrl &&
                (console.log("free ".concat(this.state.blobUrl)),
                window.URL.revokeObjectURL(this.state.blobUrl));
            }
          },
          {
            key: "capture",
            value: function(e) {
              var t = this;
              CK.Capture.downloadScreenshot(e).then(function(n) {
                var r = n.toDataURL("image/png"),
                  o = t;
                try {
                  n.toBlob(function(e) {
                    var t = window.URL.createObjectURL(e);
                    o.freeBlobUrl(), o.setState({ blobUrl: t });
                  });
                } catch (e) {
                  console.error("Downloading screenshots not supported");
                }
                (CK.User.actionOnLogin = void 0),
                  t.setState({ image: r, transparent: e, canvas: n });
              });
            }
          },
          {
            key: "renderCutout",
            value: function() {
              var e = this,
                t = this.state.transparent;
              return React.createElement(
                "div",
                { className: "screenshot-cutout" },
                "Cutout ",
                React.createElement("input", {
                  type: "checkbox",
                  checked: t,
                  onChange: function() {
                    return e.capture(!t);
                  }
                })
              );
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.state.image;
              return e
                ? React.createElement(
                    St.a,
                    {
                      title: "Here's your Character's image. Save it anywhere!",
                      onClose: function() {
                        return Overlay.hideOverlay();
                      },
                      buttons: CK.ClientSpecs.ios
                        ? []
                        : [
                            {
                              label: "Download",
                              icon:
                                "static/img/account/icon-digital_downloads.svg",
                              href: this.state.blobUrl,
                              download: "Screenshot.png"
                            }
                          ],
                      footer: this.renderCutout()
                    },
                    React.createElement(
                      "div",
                      { className: "screenshotContainer" },
                      React.createElement("img", { src: e })
                    )
                  )
                : null;
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              this.freeBlobUrl();
            }
          }
        ]) && Et(n.prototype, r),
        o && Et(n, o),
        t
      );
    })();
    function Tt(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        })()
      );
    }
    function Kt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    window.UIState = Rt;
    var It = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      var t, n, r;
      return (
        (t = e),
        (r = [
          {
            key: "init",
            value: function() {
              var e = this;
              "CK" in window ||
                console.error("CreationKit missing! Can not start UI"),
                this.createRoot(),
                (document.attachEvent
                ? "complete" === document.readyState
                : "loading" !== document.readyState)
                  ? this.setupWindowMessaging()
                  : document.addEventListener(
                      "DOMContentLoaded",
                      this.setupWindowMessaging
                    ),
                CK.Events.on("alert", function(e) {
                  _t.a.alert.apply(_t.a, Tt(e));
                }),
                CK.Events.on("characterChanged", function() {
                  $e.clearPartCache(),
                    Reporting.characterChanged(),
                    e.requestEditorRefresh();
                }),
                CK.Events.on("menuChanged", function() {
                  e.requestEditorRefresh();
                }),
                CK.Events.on("finishedLoggingIn", function() {
                  _t.a.hideOverlay(),
                    $e.clearPartCache(),
                    e.requestEditorRefresh();
                }),
                CK.GameLoop.register(
                  function() {
                    e.creationRendered();
                  },
                  "end",
                  "UI"
                ),
                (window.onresize = function() {
                  return e.checkSizing();
                }),
                this.checkSizing(),
                this.requestEditorRefresh(),
                window.location.href.indexOf("load_purchased_config") > 0 &&
                  window.alert(
                    "Changes made to this copy will not impact your order."
                  );
            }
          },
          {
            key: "setupWindowMessaging",
            value: function() {
              var e = this;
              (window.addEventListener(
                "message",
                function(e) {
                  if (event.origin === location.origin)
                    switch (e.data) {
                      case "makeanothermini":
                        CK.saves.new(), _t.a.hideOverlay();
                        break;
                      case "closemodal":
                        _t.a.hideOverlay();
                        break;
                      case "updateBasketQuantity":
                        Rt.updateBasketQuantity();
                    }
                },
                !1
              ),
              Rt.updateBasketQuantity(),
              "standalone" in window.navigator &&
                window.navigator.standalone) &&
                document.querySelectorAll("a").forEach(function(t) {
                  return t.addEventListener(
                    "click",
                    e.preventFromOpeningInNewWindow
                  );
                });
            }
          },
          {
            key: "preventFromOpeningInNewWindow",
            value: function(e) {
              var t = e.target || e.srcElement,
                n = t.getAttribute("href");
              n &&
                "#" !== n.substr(0, 1) &&
                !t.getAttribute("data-method") &&
                (e.preventDefault(), (window.location = n));
            }
          },
          {
            key: "requestEditorRefresh",
            value: function() {
              this.refreshRequested = !0;
            }
          },
          {
            key: "creationRendered",
            value: function() {
              this.refreshRequested &&
                ((this.refreshRequested = !1),
                this.refresh(),
                (Rt.compacting = !1));
            }
          },
          {
            key: "createRoot",
            value: function() {
              var e = document.getElementById("CKUI");
              e ||
                ((e = document.createElement("div")).setAttribute("id", "CKUI"),
                document.body.appendChild(e)),
                (this.root = e.appendChild(document.createElement("div")));
            }
          },
          {
            key: "refresh",
            value: function() {
              console.warn("Please override CKUI refresh");
            }
          },
          {
            key: "checkSizing",
            value: function() {
              var e = CK.sizing.landscape(),
                t = CK.sizing.compact();
              (e === Rt.landscape && t === Rt.compact) ||
                ((Rt.compacting = !Rt.compact && t),
                (Rt.landscape = e),
                (Rt.compact = t),
                (Rt.alwaysCompact =
                  (void 0 === Rt.alwaysCompact || Rt.alwaysCompact) &&
                  Rt.compact),
                CK.Events.emit("resize"),
                this.requestEditorRefresh());
            }
          },
          {
            key: "promptSave",
            value: function() {
              return new Promise(function(e, t) {
                CK.character.savedChanges
                  ? (_t.a.hideOverlay(), e(!0))
                  : CK.User.loggedIn
                  ? _t.a.prompt(
                      "Save changes to the current character?",
                      [
                        {
                          label: "Save",
                          onClick: function() {
                            _t.a.hideOverlay(),
                              CK.saves.save().then(function() {
                                return e(!0);
                              });
                          }
                        },
                        {
                          label: "Don't Save",
                          onClick: function() {
                            _t.a.hideOverlay(), e(!0);
                          }
                        },
                        {
                          label: "Cancel",
                          cancel: !0,
                          onClick: function() {
                            _t.a.hidePrompt(), e(!1);
                          }
                        }
                      ],
                      "Character Not Saved"
                    )
                  : _t.a.prompt(
                      "Unsaved changes will be lost",
                      [
                        {
                          label: "Continue",
                          onClick: function() {
                            _t.a.hideOverlay(), e(!0);
                          }
                        },
                        {
                          label: "Cancel",
                          cancel: !0,
                          onClick: function() {
                            _t.a.hidePrompt(), e(!1);
                          }
                        }
                      ],
                      "Character Not Saved"
                    );
              });
            }
          },
          {
            key: "promptLogout",
            value: function() {
              this.promptSave().then(function(e) {
                e && CK.User.logOut(!0);
              });
            }
          },
          {
            key: "setDebugView",
            value: function(e) {
              Rt.set({ debugView: e });
            }
          },
          {
            key: "promptClearTransforms",
            value: function(e) {
              CK.hasTransforms()
                ? _t.a.prompt(
                    "Your custom posing will be cleared. Are you sure?",
                    [
                      {
                        label: "Accept",
                        onClick: function() {
                          CK.tweak(Object.assign(e, CK.getClearTransformObj())),
                            _t.a.hidePrompt();
                        }
                      },
                      {
                        label: "Cancel",
                        cancel: !0,
                        onClick: function() {
                          return _t.a.hidePrompt();
                        }
                      }
                    ]
                  )
                : CK.tweak(e);
            }
          },
          {
            key: "screenshotClick",
            value: function() {
              Reporting.characterScreenshot(),
                Rt.set({ showOverlay: React.createElement(Mt, null) });
            }
          }
        ]),
        (n = null) && Kt(t.prototype, n),
        r && Kt(t, r),
        e
      );
    })();
    function Nt(e) {
      return (Nt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Lt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ut(e) {
      return (Ut = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Dt(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function zt(e, t) {
      return (zt =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var At = VN.classNames,
      Bt = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = Ut(t).call(this, e)) ||
              ("object" !== Nt(o) && "function" != typeof o)
                ? Dt(r)
                : o).state = { isOpen: !1, persist: !1 }),
            (n.show = n.show.bind(Dt(n))),
            (n.hide = n.hide.bind(Dt(n))),
            (n.toggle = n.toggle.bind(Dt(n))),
            (n.persist = n.persist.bind(Dt(n))),
            (n.toggleOpen = n.toggleOpen.bind(Dt(n))),
            (n.ignoreHover = n.ignoreHover.bind(Dt(n))),
            (n.togglePersist = n.togglePersist.bind(Dt(n))),
            (n.handleMouseEnter = n.handleMouseEnter.bind(Dt(n))),
            (n.handleMouseLeave = n.handleMouseLeave.bind(Dt(n))),
            (n.renderNav = n.renderNav.bind(Dt(n))),
            (n.renderIcon = n.renderIcon.bind(Dt(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && zt(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "ignoreHover",
              value: function() {
                return UIState.compact || this.state.persist;
              }
            },
            {
              key: "handleMouseEnter",
              value: function(e) {
                this.ignoreHover() || this.show();
              }
            },
            {
              key: "handleMouseLeave",
              value: function() {
                this.ignoreHover() || this.hide();
              }
            },
            {
              key: "show",
              value: function() {
                this.setState({ isOpen: !0 });
              }
            },
            {
              key: "hide",
              value: function() {
                this.setState({ isOpen: !1 });
              }
            },
            {
              key: "persist",
              value: function() {
                this.setState({ persist: !0 });
              }
            },
            {
              key: "toggle",
              value: function() {
                UIState.compact ? this.togglePersist() : this.toggleOpen();
              }
            },
            {
              key: "toggleOpen",
              value: function() {
                (UIState.showOverlay = "cart") && (UIState.showOverlay = ""),
                  this.setState({ isOpen: !this.state.isOpen });
              }
            },
            {
              key: "togglePersist",
              value: function() {
                "cart" == UIState.showOverlay
                  ? ((UIState.showOverlay = ""),
                    this.setState({ persist: !1, isOpen: !1 }))
                  : this.setState({
                      persist: !this.state.persist,
                      isOpen: !this.state.persist
                    });
              }
            },
            {
              key: "renderIcon",
              value: function() {
                var e = this,
                  t =
                    this.props.suppressCartQuantity ||
                    !UIState.cartQuantity ||
                    UIState.cartQuantity <= 0;
                return React.createElement(
                  "a",
                  {
                    className: "cart-link",
                    id: "open-cart",
                    onClick: function() {
                      return e.toggle();
                    }
                  },
                  React.createElement("img", {
                    src: "/static/svg/cart-full.svg",
                    className: At("cart-icon", { hidden: t }),
                    id: "cart-full"
                  }),
                  React.createElement("img", {
                    src: "/static/svg/cart-empty.svg",
                    className: At("cart-icon", { hidden: !t }),
                    id: "cart-empty"
                  }),
                  !UIState.compact &&
                    React.createElement(
                      "div",
                      { className: "cart-text" },
                      "Cart"
                    ),
                  React.createElement(
                    "div",
                    {
                      className: At("cart-quantity", { hidden: t }),
                      id: "cart-quantity"
                    },
                    UIState.cartQuantity
                  )
                );
              }
            },
            {
              key: "renderNav",
              value: function() {
                if (!this.props.suppressCartQuantity) {
                  var e =
                    "cart" == UIState.showOverlay ||
                    this.state.isOpen ||
                    this.state.persist;
                  if (e) {
                    this.props.align;
                    var t = CK.Settings.theme,
                      n = React.createElement(
                        window.Cart.CartPreviewContainer,
                        { theme: t }
                      );
                    return React.createElement(
                      "nav",
                      {
                        className: At(
                          "headerMenu-nav",
                          "headerMenu-nav--align${align}",
                          { isVisible: e }
                        )
                      },
                      React.createElement(
                        "div",
                        { className: "headerMenu-nav-scroll" },
                        n
                      ),
                      UIState.compact &&
                        React.createElement("div", {
                          className: "headerMenu-nav-gradient"
                        })
                    );
                  }
                }
              }
            },
            {
              key: "render",
              value: function() {
                var e =
                  "cart" == UIState.showOverlay ||
                  this.state.isOpen ||
                  this.state.persist;
                return React.createElement(
                  React.Fragment,
                  null,
                  UIState.compact &&
                    React.createElement("div", {
                      className: At("headerMenu-overlay", { isVisible: e }),
                      onClick: this.toggle
                    }),
                  React.createElement(
                    "div",
                    { className: "headerMenu-container" },
                    React.createElement(
                      "div",
                      {
                        className: "headerMenu",
                        onClick: this.toggle,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave
                      },
                      React.createElement(
                        "div",
                        {
                          className: At("headerMenu-trigger", { isActive: e })
                        },
                        this.renderIcon()
                      ),
                      this.renderNav()
                    ),
                    this.props.extra
                  )
                );
              }
            }
          ]) && Lt(n.prototype, r),
          o && Lt(n, o),
          t
        );
      })();
    function Ft(e) {
      return (Ft =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Vt(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function qt(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Wt(e) {
      return (Wt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Ht(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Qt(e, t) {
      return (Qt =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Xt = MU.withStyles,
      Gt = VN.ReactRouter.withRouter,
      Yt = VN.classNames,
      Zt = {
        account: {
          position: "relative",
          display: "flex",
          alignItems: "center"
        },
        accountNav: {
          backgroundColor: "white",
          boxShadow: "0 10px 16px 0 rgba(194, 198, 202, 0.4)",
          width: "200px",
          top: "100%",
          right: 0,
          opacity: 0,
          pointerEvents: "none",
          transition: "all 0.3s ease",
          zIndex: 101,
          position: "absolute",
          transform: "translate3d(0, -10px, 0)",
          maxHeight: "60vh",
          overflow: "auto"
        },
        accountNavDesktop: {
          position: "absolute",
          transform: "none",
          width: 215,
          left: "inherit"
        },
        accountNavVisible: {
          pointerEvents: "initial",
          transform: "translate3d(0, 0, 0)",
          opacity: 1
        },
        accountIcon: { height: 22 },
        accountText: { marginLeft: 8 },
        buttonCTA: {
          fontFamily: "RobotoBold",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
          color: "white",
          transition: "all 0.3s ease",
          "&:hover": { backgroundColor: "#6f0b0d" }
        },
        dropdownDesktop: {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          fontSize: 16,
          fontFamily: "Roboto",
          letterSpacing: "1px",
          color: "#F1F1F1",
          margin: 0,
          width: "auto",
          height: 40,
          "& svg": { display: "none" },
          "&:hover svg": { fill: "#ab007" }
        },
        buttonLogin: {
          textTransform: "capitalize",
          display: "flex",
          height: 30,
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1em",
          width: 50
        },
        buttonLoginDesktop: { width: 70 },
        accountOverlayMobile: {
          position: "fixed",
          zIndex: 100,
          right: 0,
          left: 0,
          bottom: 0,
          top: 0,
          opacity: 0,
          transition: "all 0.3s ease",
          pointerEvents: "none"
        },
        accountOverlayMobileVisible: { pointerEvents: "all", opacity: 1 },
        user: {
          display: "flex",
          alignItems: "center",
          padding: "0 10px",
          position: "relative"
        },
        userOpen: { background: "rgba(0,0,0,0.2)" }
      },
      Jt = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = Wt(t).call(this, e)) ||
              ("object" !== Ft(o) && "function" != typeof o)
                ? Ht(r)
                : o).state = { isVisible: !1 }),
            (n.handleOverlayClick = n.handleOverlayClick.bind(Ht(n))),
            (n.handleClick = n.handleClick.bind(Ht(n))),
            (n.handleMouseEnter = n.handleMouseEnter.bind(Ht(n))),
            (n.handleMouseLeave = n.handleMouseLeave.bind(Ht(n))),
            (n.showMenu = n.showMenu.bind(Ht(n))),
            (n.closeMenu = n.closeMenu.bind(Ht(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Qt(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "showMenu",
              value: function() {
                this.setState({ isVisible: !0 });
              }
            },
            {
              key: "closeMenu",
              value: function() {
                this.setState({ isVisible: !1 });
              }
            },
            {
              key: "handleOverlayClick",
              value: function() {
                this.closeMenu();
              }
            },
            {
              key: "handleClick",
              value: function(e) {
                UIState.compact ||
                "touchstart" == e.type ||
                "touchend" == e.type
                  ? (e.preventDefault(),
                    e.stopPropagation(),
                    this.setState({ isVisible: !this.state.isVisible }))
                  : (UIState.updateBasketQuantity(),
                    this.props.history.push("/account/profile"));
              }
            },
            {
              key: "handleMouseEnter",
              value: function() {
                UIState.compact || this.showMenu();
              }
            },
            {
              key: "handleMouseLeave",
              value: function() {
                UIState.compact || this.closeMenu();
              }
            },
            {
              key: "renderLoggedOutNav",
              value: function() {
                var e = this.props.classes;
                return React.createElement(
                  "a",
                  {
                    onClick: function() {
                      return _t.a.showLogin();
                    },
                    className: Yt(
                      e.buttonCTA,
                      e.buttonLogin,
                      Vt({}, e.buttonLoginDesktop, !UIState.compact)
                    )
                  },
                  "Log In"
                );
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props.classes;
                return CK.User.loggedIn
                  ? React.createElement(
                      "div",
                      {
                        id: "user",
                        className: Yt(
                          e.user,
                          Vt({}, e.userOpen, this.state.isVisible)
                        ),
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave
                      },
                      UIState.compact &&
                        React.createElement("div", {
                          className: Yt(
                            e.accountOverlayMobile,
                            Vt(
                              {},
                              e.accountOverlayMobileVisible,
                              this.state.isVisible
                            )
                          ),
                          onTouchStart: this.handleOverlayClick
                        }),
                      React.createElement(
                        "div",
                        { className: e.account },
                        React.createElement(
                          "div",
                          {
                            onTouchStart: this.handleClick,
                            className: Yt(
                              e.dropdown,
                              Vt({}, e.dropdownDesktop, !UIState.compact)
                            )
                          },
                          this.props.userIcon &&
                            React.createElement("img", {
                              className: e.accountIcon,
                              src: this.props.userIcon
                            }),
                          !UIState.compact &&
                            React.createElement(
                              "div",
                              { className: e.accountText },
                              "Account"
                            )
                        )
                      ),
                      React.createElement(
                        "nav",
                        {
                          onClick: this.closeMenu,
                          className: Yt(
                            e.accountNav,
                            Vt({}, e.accountNavVisible, this.state.isVisible),
                            Vt({}, e.accountNavDesktop, !UIState.compact)
                          )
                        },
                        this.props.children
                      )
                    )
                  : this.renderLoggedOutNav();
              }
            }
          ]) && qt(n.prototype, r),
          o && qt(n, o),
          t
        );
      })(),
      $t = Xt(Zt)(Gt(Jt));
    function en(e) {
      return (en =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function tn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function nn(e) {
      return (nn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function rn(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function on(e, t) {
      return (on =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var an = VN.classNames,
      sn = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = nn(t).call(this, e)) ||
              ("object" !== en(o) && "function" != typeof o)
                ? rn(r)
                : o).state = { isOpen: !1 }),
            (n.show = n.show.bind(rn(n))),
            (n.hide = n.hide.bind(rn(n))),
            (n.toggle = n.toggle.bind(rn(n))),
            (n.handleMouseEnter = n.handleMouseEnter.bind(rn(n))),
            (n.handleMouseLeave = n.handleMouseLeave.bind(rn(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && on(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "handleMouseEnter",
              value: function(e) {
                UIState.compact || this.show();
              }
            },
            {
              key: "handleMouseLeave",
              value: function() {
                UIState.compact || this.hide();
              }
            },
            {
              key: "show",
              value: function() {
                this.setState({ isOpen: !0 });
              }
            },
            {
              key: "hide",
              value: function() {
                this.setState({ isOpen: !1 });
              }
            },
            {
              key: "toggle",
              value: function() {
                this.setState({ isOpen: !this.state.isOpen });
              }
            },
            {
              key: "renderArrayRow",
              value: function(e, t) {
                var n = this;
                return React.createElement(
                  "div",
                  { className: "headerMenu-nav-itemsRow", key: t },
                  e.map(function(e, r) {
                    return n.renderRow(e, "".concat(t, "-").concat(r));
                  })
                );
              }
            },
            {
              key: "renderRow",
              value: function(e, t) {
                if (e)
                  return Array.isArray(e)
                    ? this.renderArrayRow(e, t)
                    : React.createElement(
                        "a",
                        {
                          className: "headerMenu-nav-item",
                          href: e.href,
                          target: "#" === e.href ? "_self" : "_blank",
                          key: e.label || "navItem".concat(t),
                          onClick: e.onClick
                        },
                        e.iconSrc &&
                          React.createElement(
                            "div",
                            { className: "headerMenu-nav-item-img" },
                            React.createElement("img", {
                              src: e.iconSrc,
                              width: e.iconWidth || 30
                            })
                          ),
                        e.label &&
                          React.createElement(
                            "div",
                            { className: "headerMenu-nav-item-text" },
                            e.label
                          )
                      );
              }
            },
            {
              key: "renderNav",
              value: function() {
                var e = this,
                  t = this.props.align || "center";
                return React.createElement(
                  "nav",
                  {
                    className: an(
                      "headerMenu-nav",
                      "headerMenu-nav--align".concat(t),
                      { isVisible: this.state.isOpen }
                    )
                  },
                  React.createElement(
                    "div",
                    { className: "headerMenu-nav-scroll" },
                    this.props.items.map(function(t, n) {
                      return e.renderRow(t, n);
                    }),
                    this.props.children
                  ),
                  UIState.compact &&
                    React.createElement("div", {
                      className: "headerMenu-nav-gradient"
                    })
                );
              }
            },
            {
              key: "renderLoadingNav",
              value: function() {
                var e = this.props.align || "center";
                return React.createElement(
                  "nav",
                  {
                    className: an(
                      "headerMenu-nav",
                      "headerMenu-nav--loading",
                      "headerMenu-nav--align".concat(e),
                      { isVisible: this.state.isOpen }
                    )
                  },
                  React.createElement("img", {
                    src: "/static/svg/spinner.svg",
                    className: "svg-spinner"
                  })
                );
              }
            },
            {
              key: "render",
              value: function() {
                return React.createElement(
                  React.Fragment,
                  null,
                  UIState.compact &&
                    React.createElement("div", {
                      className: an("headerMenu-overlay", {
                        isVisible: this.state.isOpen
                      }),
                      onClick: this.hide
                    }),
                  React.createElement(
                    "div",
                    { className: "headerMenu-container" },
                    React.createElement(
                      "div",
                      {
                        className: "headerMenu",
                        onClick: this.toggle,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave
                      },
                      React.createElement(
                        "div",
                        {
                          className: an(
                            "headerMenu-trigger",
                            this.props.triggerClass,
                            { isActive: this.state.isOpen }
                          )
                        },
                        this.props.iconSrc &&
                          React.createElement("img", {
                            className: "headerMenu-icon",
                            src: this.props.iconSrc,
                            width: this.props.iconWidth || 28
                          }),
                        (!UIState.compact || this.props.forceText) &&
                          React.createElement(
                            "div",
                            { className: "headerMenu-trigger-label" },
                            this.props.label
                          ),
                        this.props.isLoading &&
                          React.createElement("img", {
                            src: "/static/svg/spinner-white.svg",
                            className: "svg-spinner"
                          })
                      ),
                      !this.props.isLoading && this.renderNav(),
                      this.props.isLoading && this.renderLoadingNav()
                    ),
                    this.props.extra
                  ),
                  UIState.compact &&
                    React.createElement("div", {
                      className: an("headerMenu-overlay", {
                        isVisible: this.state.isOpen
                      }),
                      onClick: this.hide
                    })
                );
              }
            }
          ]) && tn(n.prototype, r),
          o && tn(n, o),
          t
        );
      })();
    function cn(e) {
      return (cn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ln(e) {
      return (
        (function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n;
          }
        })(e) ||
        (function(e) {
          if (
            Symbol.iterator in Object(e) ||
            "[object Arguments]" === Object.prototype.toString.call(e)
          )
            return Array.from(e);
        })(e) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        })()
      );
    }
    function un(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function pn(e, t) {
      return !t || ("object" !== cn(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function fn(e) {
      return (fn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function hn(e, t) {
      return (hn =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var mn = (function(e) {
      function t(e) {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          pn(this, fn(t).call(this, e))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && hn(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "screenshot",
            value: function(e) {
              e.preventDefault(), CKUI.screenshotClick();
            }
          },
          {
            key: "render",
            value: function() {
              var e = [];
              return (
                (e = UIState.compact
                  ? [
                      [
                        {
                          href: "#",
                          onClick: function(e) {
                            e.preventDefault(), CKUI.showSupportEmail();
                          },
                          iconSrc: "/static/svg/social/mail.svg",
                          iconWidth: 22
                        },
                        {
                          href: "https://www.facebook.com/HeroForgeMinis/",
                          iconSrc: "/static/svg/social/facebook.svg",
                          iconWidth: 22
                        },
                        {
                          href: "https://twitter.com/heroforgeminis",
                          iconSrc: "/static/svg/social/twitter.svg",
                          iconWidth: 22
                        },
                        {
                          href: "https://www.instagram.com/heroforgeminis/",
                          iconSrc: "/static/svg/social/instagram.svg",
                          iconWidth: 22
                        }
                      ]
                    ]
                  : [
                      {
                        href: "#",
                        label: "Contact",
                        onClick: function(e) {
                          e.preventDefault(), CKUI.showSupportEmail();
                        },
                        iconSrc: "/static/svg/info/contact.svg",
                        iconWidth: 22
                      }
                    ]),
                (e = [].concat(ln(e), [
                  {
                    href: "/about/",
                    label: "About",
                    iconSrc: "/static/svg/info/about.svg",
                    iconWidth: 22
                  },
                  {
                    href: "/FAQ/",
                    label: "FAQ",
                    iconSrc: "/static/svg/info/faq.svg",
                    iconWidth: 22
                  },
                  {
                    href: "/ShippingandReturn/",
                    label: "Shipping and Return",
                    iconSrc: "/static/svg/info/shipping.svg",
                    iconWidth: 22
                  },
                  {
                    href: "/Materials/",
                    label: "Materials & Pricing",
                    iconSrc: "/static/svg/info/materials.svg",
                    iconWidth: 22
                  },
                  {
                    href: "/ToS/",
                    label: "Terms & Conditions",
                    iconSrc: "/static/svg/info/tos.svg",
                    iconWidth: 22
                  },
                  {
                    href: "/Privacy/",
                    label: "Privacy Policy",
                    iconSrc: "/static/svg/info/privacy.svg",
                    iconWidth: 22
                  },
                  {
                    href: "/CookiePolicy/",
                    label: "Cookie Policy",
                    iconSrc: "/static/svg/info/cookie.svg",
                    iconWidth: 22
                  },
                  {
                    href: "#",
                    label: "Gift Cards",
                    onClick: function(e) {
                      e.preventDefault(), (UIState.showOverlay = "giftCard");
                    },
                    iconSrc: "/static/svg/gift.svg",
                    iconWidth: 22
                  }
                ])),
                React.createElement(sn, {
                  label: "Info",
                  iconSrc: "/static/svg/burger.svg",
                  items: e,
                  align: this.props.align
                })
              );
            }
          }
        ]) && un(n.prototype, r),
        o && un(n, o),
        t
      );
    })();
    function dn(e) {
      return (dn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function yn(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function bn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function vn(e) {
      return (vn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function gn(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function wn(e, t) {
      return (wn =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    VN.axios;
    var _n = VN.classNames,
      Cn = MU.withStyles,
      kn = VN.ReactRouter.withRouter,
      Rn = {
        item: {
          display: "flex",
          alignItems: "center",
          minHeight: 44,
          maxHeight: 56,
          height: "11vh",
          color: "#333",
          cursor: "pointer",
          position: "relative",
          "&:hover": { color: "#ab0007" },
          "&:not(:last-child)::after": {
            content: "''",
            height: 1,
            display: "block",
            backgroundColor: "#EFEFEF",
            position: "absolute",
            bottom: 1,
            right: 0,
            left: 58
          }
        },
        itemActive: { color: "#ab0007" },
        itemImg: {
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 58,
          "& img": { width: 30, height: 30 }
        },
        itemText: { fontSize: 15, paddingLeft: 0, flex: 1 }
      },
      Sn = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = vn(t).call(this, e)) ||
              ("object" !== dn(o) && "function" != typeof o)
                ? gn(r)
                : o).logout = n.logout.bind(gn(n))),
            (n.goTo = n.goTo.bind(gn(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && wn(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "logout",
              value: function(e) {
                e.preventDefault(), CKUI.promptLogout();
              }
            },
            {
              key: "goTo",
              value: function(e) {
                this.props.onClick && this.props.onClick(),
                  this.props.history.push(e);
              }
            },
            {
              key: "renderLoggedOutNav",
              value: function() {
                var e = this.props.classes;
                return React.createElement(
                  "a",
                  {
                    onClick: function() {
                      return Overlay.showLogin();
                    },
                    className: e.item
                  },
                  React.createElement(
                    "div",
                    { className: e.itemImg },
                    React.createElement("img", {
                      src: "/static/img/account/icon-my_profile.svg"
                    })
                  ),
                  React.createElement("div", { className: e.itemText }, "Login")
                );
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.location.pathname,
                  n = this.props.classes;
                return CK.User.loggedIn
                  ? React.createElement(
                      React.Fragment,
                      null,
                      React.createElement(
                        "a",
                        {
                          onClick: function() {
                            return e.goTo("/account/profile");
                          },
                          className: _n(
                            n.item,
                            yn({}, n.itemActive, -1 != t.indexOf("profile"))
                          )
                        },
                        React.createElement(
                          "div",
                          { className: n.itemImg },
                          React.createElement("img", {
                            src: "/static/img/account/icon-my_profile.svg"
                          })
                        ),
                        React.createElement(
                          "div",
                          { className: n.itemText },
                          "Profile"
                        )
                      ),
                      React.createElement(
                        "a",
                        {
                          onClick: function() {
                            return e.goTo("/account/orders");
                          },
                          className: _n(
                            n.item,
                            yn({}, n.itemActive, -1 != t.indexOf("order"))
                          )
                        },
                        React.createElement(
                          "div",
                          { className: n.itemImg },
                          React.createElement("img", {
                            src: "/static/img/account/icon-order_history.svg"
                          })
                        ),
                        React.createElement(
                          "div",
                          { className: n.itemText },
                          "Order History"
                        )
                      ),
                      React.createElement(
                        "a",
                        {
                          onClick: function() {
                            return e.goTo("/account/addresses");
                          },
                          className: _n(
                            n.item,
                            yn({}, n.itemActive, -1 != t.indexOf("address"))
                          )
                        },
                        React.createElement(
                          "div",
                          { className: n.itemImg },
                          React.createElement("img", {
                            src: "/static/img/account/icon-address_book.svg"
                          })
                        ),
                        React.createElement(
                          "div",
                          { className: n.itemText },
                          "Address Book"
                        )
                      ),
                      React.createElement(
                        "a",
                        {
                          onClick: function() {
                            return e.goTo("/account/gift-cards");
                          },
                          className: _n(
                            n.item,
                            yn({}, n.itemActive, -1 != t.indexOf("gift-card"))
                          )
                        },
                        React.createElement(
                          "div",
                          { className: n.itemImg },
                          React.createElement("img", {
                            src: "/static/img/account/icon-gift_cards.svg"
                          })
                        ),
                        React.createElement(
                          "div",
                          { className: n.itemText },
                          "Account Credit"
                        )
                      ),
                      React.createElement(
                        "a",
                        {
                          onClick: function() {
                            return e.goTo("/account/downloads");
                          },
                          className: _n(
                            n.item,
                            yn({}, n.itemActive, -1 != t.indexOf("downloads"))
                          )
                        },
                        React.createElement(
                          "div",
                          { className: n.itemImg },
                          React.createElement("img", {
                            src:
                              "/static/img/account/icon-digital_downloads.svg"
                          })
                        ),
                        React.createElement(
                          "div",
                          { className: n.itemText },
                          "Digital Downloads"
                        )
                      ),
                      React.createElement(
                        "a",
                        {
                          onClick: function(t) {
                            e.logout(t);
                          },
                          className: n.item
                        },
                        React.createElement(
                          "div",
                          { className: n.itemImg },
                          React.createElement("img", {
                            src: "/static/img/account/icon-logout.svg"
                          })
                        ),
                        React.createElement(
                          "div",
                          { className: n.itemText },
                          "Logout"
                        )
                      )
                    )
                  : this.renderLoggedOutNav();
              }
            }
          ]) && bn(n.prototype, r),
          o && bn(n, o),
          t
        );
      })(),
      On = Cn(Rn)(kn(Sn));
    function En(e) {
      return (En =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function xn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function jn(e, t) {
      return !t || ("object" !== En(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Pn(e) {
      return (Pn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Mn(e, t) {
      return (Mn =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Tn = VN.classNames,
      Kn = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            jn(this, Pn(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Mn(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                var e = CK.timeTraveler,
                  t = {};
                e &&
                  (t = {
                    backgroundRepeat: "repeat",
                    backgroundImage: 'url("/static/img/mode-'.concat(
                      e ? "timetravel" : "internal",
                      '.png")'
                    )
                  });
                return (
                  this.props.position && (t.position = this.props.position),
                  React.createElement(
                    "div",
                    {
                      className: Tn("header", {
                        "header--halfScreen":
                          UIState.landscape && !UIState.collapsed
                      }),
                      style: t
                    },
                    React.createElement(
                      "div",
                      { className: "content-side" },
                      React.createElement(
                        "h1",
                        {
                          className: "logo",
                          onClick: this.props.onClick,
                          style: this.props.onClick && { cursor: "pointer" }
                        },
                        React.createElement("img", {
                          className: "logo-banner",
                          src: "/static/svg/logo.svg",
                          alt: CK.Settings.projectLabel
                        }),
                        !UIState.compact &&
                          React.createElement("img", {
                            className: "logo-text",
                            src: "/static/svg/logo-text.svg"
                          })
                      ),
                      UIState.compact &&
                        this.props.showExtraMenu &&
                        React.createElement(mn, { align: "left" })
                    ),
                    this.props.children,
                    React.createElement(
                      "div",
                      { className: "content-side" },
                      CK.criticalErrorMessage &&
                        React.createElement(
                          "div",
                          { style: { color: "red", fontSize: "larger" } },
                          CK.criticalErrorMessage
                        ),
                      React.createElement(
                        $t,
                        { userIcon: "/static/svg/account.svg" },
                        React.createElement(On, { onClick: this.props.onClick })
                      ),
                      CK.User.loggedIn &&
                        React.createElement(Bt, {
                          suppressCartQuantity: this.props.suppressCartQuantity
                        }),
                      !1,
                      !UIState.compact &&
                        this.props.showExtraMenu &&
                        React.createElement(mn, { align: "right" })
                    )
                  )
                );
              }
            }
          ]) && xn(n.prototype, r),
          o && xn(n, o),
          t
        );
      })();
    function In(e) {
      return (In =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Nn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ln(e, t) {
      return !t || ("object" !== In(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Un(e) {
      return (Un = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Dn(e, t) {
      return (Dn =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var zn = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Ln(this, Un(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Dn(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "render",
            value: function() {
              return React.createElement(
                "footer",
                { className: "footer" },
                React.createElement(
                  "nav",
                  { className: "social" },
                  React.createElement(
                    "ul",
                    null,
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "a",
                        {
                          href: "https://www.facebook.com/HeroForgeMinis/",
                          target: "_blank"
                        },
                        React.createElement("img", {
                          src: "/static/svg/social/facebook.svg"
                        })
                      )
                    ),
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "a",
                        {
                          href: "https://twitter.com/heroforgeminis",
                          target: "_blank"
                        },
                        React.createElement("img", {
                          src: "/static/svg/social/twitter.svg"
                        })
                      )
                    ),
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "a",
                        {
                          href: "https://www.instagram.com/heroforgeminis/",
                          target: "_blank"
                        },
                        React.createElement("img", {
                          src: "/static/svg/social/instagram.svg"
                        })
                      )
                    ),
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "a",
                        {
                          href: "#",
                          onClick: function(e) {
                            e.preventDefault(), CKUI.showSupportEmail();
                          }
                        },
                        React.createElement("img", {
                          src: "/static/svg/mail.svg"
                        })
                      )
                    )
                  )
                ),
                React.createElement(
                  "nav",
                  { className: "gift-tos" },
                  React.createElement(
                    "ul",
                    null,
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "a",
                        { href: "/ToS/", className: "link", target: "_blank" },
                        "Terms & Conditions"
                      )
                    ),
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "a",
                        {
                          href: "/Privacy/",
                          className: "link",
                          target: "_blank"
                        },
                        "Privacy Policy"
                      )
                    ),
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "span",
                        {
                          className: "link screenshot",
                          onClick: function() {
                            return CKUI.screenshotClick();
                          }
                        },
                        React.createElement("img", {
                          src: "/static/svg/photo.svg"
                        }),
                        "Screenshot"
                      )
                    ),
                    React.createElement(
                      "li",
                      null,
                      React.createElement(
                        "a",
                        {
                          href: "#",
                          className: "link voucher",
                          onClick: function(e) {
                            e.preventDefault(),
                              (UIState.showOverlay = "giftCard");
                          }
                        },
                        React.createElement("img", {
                          className: "gifticon",
                          src: "/static/svg/gift.svg"
                        }),
                        "Gifts"
                      )
                    )
                  )
                )
              );
            }
          }
        ]) && Nn(n.prototype, r),
        o && Nn(n, o),
        t
      );
    })();
    function An(e) {
      return (An =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Bn(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function Fn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Vn(e, t) {
      return !t || ("object" !== An(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function qn(e) {
      return (qn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Wn(e, t) {
      return (Wn =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Hn = VN.classNames,
      Qn = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Vn(this, qn(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Wn(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                if (
                  !this.props.options ||
                  !this.props.options.length ||
                  (this.props.options.length &&
                    void 0 === this.props.options[0])
                )
                  return React.createElement("div", null, "NO OPTIONS GIVEN");
                var e = this.props.options,
                  t = [];
                for (var n in e) {
                  var r = e[n];
                  t.push(
                    React.createElement(Ue, {
                      option: r,
                      key: (e.thumb || r.label) + n
                    })
                  );
                }
                var o = Hn(
                  "grid-layout",
                  { "specified-columns": this.props.columns },
                  Bn(
                    {},
                    "specified-columns-".concat(this.props.columns),
                    this.props.columns
                  ),
                  Bn(
                    {},
                    "thumb-width-".concat(e[0].thumbSize[0]),
                    e.length && e[0].thumbSize
                  )
                );
                return React.createElement("div", { className: o }, t);
              }
            }
          ]) && Fn(n.prototype, r),
          o && Fn(n, o),
          t
        );
      })();
    function Xn(e) {
      return (Xn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Gn(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Yn(e, t) {
      return !t || ("object" !== Xn(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Zn(e) {
      return (Zn = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Jn(e, t) {
      return (Jn =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function $n(e) {
      return e && e.type && (!e.type.hasContent || e.type.hasContent(e.props));
    }
    var er = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Yn(this, Zn(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Jn(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "getContent",
            value: function(e) {
              return React.Children.toArray(e.children).filter(function(e) {
                return $n(e);
              });
            }
          },
          {
            key: "hasContent",
            value: function(e) {
              return !!React.Children.toArray(e.children).find(function(e) {
                return $n(e);
              });
            }
          },
          {
            key: "hasNew",
            value: function(e) {
              return !!React.Children.toArray(e.children).find(function(e) {
                return (function(e) {
                  return e && e.type && e.type.hasNew && e.type.hasNew(e.props);
                })(e);
              });
            }
          }
        ]),
        (r = null) && Gn(n.prototype, r),
        o && Gn(n, o),
        t
      );
    })();
    function tr(e) {
      return (tr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function nr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function rr(e) {
      return (rr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function or(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function ar(e, t) {
      return (ar =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ir = VN.classNames,
      sr = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = rr(t).call(this, e)) ||
              ("object" !== tr(o) && "function" != typeof o)
                ? or(r)
                : o).state = { activeMenu: e.activeMenu || e.nav[0].slug }),
            (n.onItemClick = n.onItemClick.bind(or(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ar(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "onItemClick",
              value: function(e) {
                this.props.onItemClick(e), this.setState({ activeMenu: e });
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.nav;
                return React.createElement(
                  "div",
                  { className: "ViewNav-navContainer" },
                  React.createElement(
                    "div",
                    { className: "ViewNav-nav" },
                    t.map(function(t) {
                      return React.createElement(
                        "div",
                        {
                          className: ir("ViewNav-navItem", {
                            "ViewNav-navItemSelected":
                              e.state.activeMenu === t.slug
                          }),
                          onClick: function() {
                            return e.onItemClick(t.slug);
                          },
                          key: t.slug
                        },
                        t.label
                      );
                    })
                  )
                );
              }
            }
          ]) && nr(n.prototype, r),
          o && nr(n, o),
          t
        );
      })();
    function cr(e) {
      return (cr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function lr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function ur(e) {
      return (ur = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function pr(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function fr(e, t) {
      return (fr =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var hr = VN.classNames,
      mr = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = ur(t).call(this, e)) ||
              ("object" !== cr(o) && "function" != typeof o)
                ? pr(r)
                : o).state = {
              activeMenu:
                e.navAuto && e.children[0] ? e.children[0].props.label : null
            }),
            (n.handleScroll = n.handleScroll.bind(pr(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && fr(e, t);
          })(t, er),
          (n = t),
          (r = [
            {
              key: "componentDidMount",
              value: function() {
                this.props.onOpen && this.props.onOpen();
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                this.props.onClose && this.props.onClose();
              }
            },
            {
              key: "handleScroll",
              value: function() {
                var e = ReactDOM.findDOMNode(this.scrollRef).scrollHeight,
                  t = ReactDOM.findDOMNode(this.scrollRef).scrollTop,
                  n = ReactDOM.findDOMNode(this.scrollRef).offsetHeight;
                e - n - t < 2 * n && CK.Events.emit("reachedBottom", this);
              }
            },
            {
              key: "renderNavAuto",
              value: function() {
                var e = this,
                  t = this.props.children
                    .filter(function(e) {
                      return !e.type.hasContent || e.type.hasContent(e.props);
                    })
                    .map(function(e) {
                      return { slug: e.props.label, label: e.props.label };
                    });
                return !t || t.length <= 1
                  ? null
                  : React.createElement(sr, {
                      nav: t,
                      onItemClick: function(t) {
                        return e.setState({ activeMenu: t });
                      },
                      activeMenu: this.state.activeMenu
                    });
              }
            },
            {
              key: "renderPinned",
              value: function() {
                return this.props.pinned || this.props.navAuto
                  ? React.createElement(
                      "div",
                      {
                        className: hr("View-pinned", {
                          "View-padding": !this.props.pinnedNoPadding
                        })
                      },
                      this.props.navAuto && this.renderNavAuto(),
                      this.props.pinned
                    )
                  : null;
              }
            },
            {
              key: "renderMenu",
              value: function() {
                var e = this;
                return this.state.activeMenu
                  ? this.props.children.find(function(t) {
                      return t.props.label === e.state.activeMenu;
                    })
                  : null;
              }
            },
            {
              key: "renderScrollableArea",
              value: function() {
                var e = this,
                  t = React.Children.toArray(this.props.children);
                return React.createElement(
                  "div",
                  {
                    className: hr("View-scrollable", {
                      "View-padding": !this.props.noPadding
                    }),
                    onScroll: this.handleScroll,
                    ref: function(t) {
                      return (e.scrollRef = t);
                    }
                  },
                  this.state.activeMenu ? this.renderMenu() : t
                );
              }
            },
            {
              key: "render",
              value: function() {
                return React.createElement(
                  "div",
                  {
                    className: hr(
                      "View-container",
                      ((e = {}),
                      (t = "View-".concat(this.props.extraClass)),
                      (n = !!this.props.extraClass),
                      t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                          })
                        : (e[t] = n),
                      e)
                    )
                  },
                  this.renderPinned(),
                  this.renderScrollableArea()
                );
                var e, t, n;
              }
            }
          ]) && lr(n.prototype, r),
          o && lr(n, o),
          t
        );
      })();
    function dr(e) {
      return (dr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function yr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function br(e) {
      return (br = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function vr(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function gr(e, t) {
      return (gr =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var wr = VN.axios,
      _r = VN.ReactRouter,
      Cr = (_r.withRouter, _r.Redirect),
      kr = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = br(t).call(this, e)) ||
              ("object" !== dr(o) && "function" != typeof o)
                ? vr(r)
                : o).state = {
              adding: !1,
              productError: !1,
              redirect: !1,
              url: ""
            }),
            (n.noProductSelectedMessage =
              e.noProductSelectedMessage || "Please Select a Material"),
            (n.productMainSelection =
              n.props.productMainSelection || "Material"),
            (n.addToCart = n.addToCart.bind(vr(n))),
            (n.addFailed = n.addFailed.bind(vr(n))),
            (n.addSucceeded = n.addSucceeded.bind(vr(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && gr(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "addSucceeded",
              value: function(e, t) {
                this.setState({ adding: !1 }),
                  Promise.resolve(UIState.basketQuantityPromise()).then(
                    (UIState.showOverlay = "cart")
                  );
              }
            },
            {
              key: "addFailed",
              value: function(e, t) {
                e && e.response && 302 == e.response.status
                  ? this.setState({
                      redirect: !0,
                      url: e.response.data.url,
                      adding: !1
                    })
                  : (_t.a.prompt(
                      "Failed to add to cart. Try logging in or refreshing the page.",
                      [
                        {
                          label: "OK",
                          onClick: function() {
                            _t.a.hideOverlay();
                          }
                        }
                      ]
                    ),
                    this.setState({ adding: !1 }));
              }
            },
            {
              key: "addToCart",
              value: function() {
                var e = this;
                this.state.adding ||
                  (this.constructor.getSelectedProduct()
                    ? CK.User.loggedIn
                      ? (this.setState({ adding: !0 }),
                        this.constructor.addCharacterToBasket(
                          this.addSucceeded,
                          this.addFailed
                        ))
                      : (Reporting.addedToCartNotLoggedIn(),
                        _t.a.showLogin(function() {
                          return e.addToCart();
                        }))
                    : (UIState.set({
                        mainSelection: this.productMainSelection
                      }),
                      UIState.set({ showOverlay: !1 }),
                      this.setState({ productError: !0 }),
                      _t.a.prompt("Please select a material", [
                        {
                          label: "OK",
                          onClick: function() {
                            _t.a.hideOverlay();
                          }
                        }
                      ]),
                      UIState.compact && (UIState.collapsed = !1)));
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.constructor.getSelectedProduct(),
                  n = "",
                  r = "",
                  o = !1,
                  a = 1;
                CK.data.parameters &&
                  CK.data.parameters.quantity &&
                  CK.data.parameters.quantity > 1 &&
                  (a = CK.data.parameters.quantity),
                  t &&
                    !this.state.adding &&
                    ((o = !0),
                    (n = "$" + (t.price * a).toFixed(2)),
                    (r = t.old_price
                      ? "$" + (t.old_price * a).toFixed(2) + " "
                      : ""));
                var i = this.state.adding ? "Adding..." : "Add to Cart ",
                  s =
                    !this.constructor.getSelectedProduct() &&
                    this.state.productError
                      ? React.createElement(
                          "p",
                          { className: "error" },
                          "* ",
                          this.noProductSelectedMessage
                        )
                      : "";
                return this.state.redirect
                  ? React.createElement(Cr, {
                      to: { pathname: this.state.url }
                    })
                  : React.createElement(
                      "a",
                      {
                        href: "#",
                        className: "shop-button clickable",
                        id: "add",
                        onClick: function(t) {
                          t.preventDefault(), e.addToCart();
                        }
                      },
                      i,
                      React.createElement(
                        "span",
                        { id: "display-price" },
                        o ? "(" : "",
                        React.createElement("del", null, r),
                        n,
                        o ? ")" : ""
                      ),
                      s
                    );
              }
            }
          ]),
          (o = [
            {
              key: "getSelectedProduct",
              value: function() {
                if (void 0 !== CK.displayData.physical)
                  return CK.Options.productsBySlug[CK.displayData.physical];
              }
            },
            {
              key: "addCharacterToBasket",
              value: (function(e) {
                function t(t, n) {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function() {
                    return e.toString();
                  }),
                  t
                );
              })(function(e, t) {
                var n = this;
                CK.User.loggedIn
                  ? CK.saves
                      .packageForCart()
                      .then(function(r) {
                        if (
                          !UIState.getRequest("addCharacterToBasket") ||
                          !UIState.getRequest(
                            "addCharacterToBasket"
                          ).isPending()
                        ) {
                          var o = n.getSelectedProduct().p_id,
                            a = 1;
                          CK.data.parameters &&
                            CK.data.parameters.quantity &&
                            CK.data.parameters.quantity > 1 &&
                            (a = CK.data.parameters.quantity);
                          var i = new FormData();
                          i.append("quantity", a),
                            i.append("mini_id", 1),
                            i.append("pk", o),
                            i.append("character", JSON.stringify(r));
                          var s = UIState.QueryablePromise(
                            wr({
                              method: "post",
                              url: "/basket/add/" + o + "/json/",
                              data: i
                            })
                          );
                          UIState.addRequest("addCharacterToBasket", s);
                        }
                        Promise.resolve(
                          UIState.getRequest("addCharacterToBasket")
                        )
                          .then(function() {
                            e();
                          })
                          .catch(function(e) {
                            t(e);
                          });
                      })
                      .catch(function(e) {
                        console.log("basket add error"),
                          console.log(e),
                          t(e, "basket add error"),
                          window.alert(
                            "Failed to add to cart. Try logging in or refreshing the page."
                          );
                      })
                  : (t({}, "not logged in"),
                    _t.a.showLogin(function() {
                      return addCharacterToBasket(e, t);
                    }));
              })
            }
          ]),
          r && yr(n.prototype, r),
          o && yr(n, o),
          t
        );
      })();
    function Rr(e) {
      return (Rr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Sr(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Or(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Er(e, t, n) {
      return t && Or(e.prototype, t), n && Or(e, n), e;
    }
    function xr(e, t) {
      return !t || ("object" !== Rr(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function jr(e) {
      return (jr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Pr(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      })),
        t && Mr(e, t);
    }
    function Mr(e, t) {
      return (Mr =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Tr = !1,
      Kr = { label: !0, labelType: "labelOnly" },
      Ir = (function(e) {
        function t() {
          return Sr(this, t), xr(this, jr(t).apply(this, arguments));
        }
        return (
          Pr(t, React.Component),
          Er(t, [
            {
              key: "render",
              value: function() {
                var e = a.getAvailable(),
                  t = [],
                  n = [],
                  r = a.getSelectedProduct(),
                  o = Tr;
                e.sort(function(e, t) {
                  return e.display_order < t.display_order ? -1 : 1;
                }).map(function(e) {
                  var a = r && r.product_name === e.product_name,
                    i = new Re({
                      labelOptions: Kr,
                      onClick: function() {
                        CK.tweak({ physical: e.product_name });
                      },
                      selected: a,
                      label: e.display_name_bitless,
                      description: e.description,
                      tagLabel: e.new ? "NEW" : "",
                      showTooltip: !1,
                      bit:
                        e.tag &&
                        React.createElement(
                          "span",
                          { className: "xl-tag" },
                          e.tag
                        )
                    });
                  "extra" === e.visibility || "urlextra" === e.visibility
                    ? (a && (o = !0), n.push(i))
                    : t.push(i);
                });
                var i = [
                  React.createElement(Qn, { options: t, key: "materialParts" })
                ];
                return (
                  n.length > 0 &&
                    i.push(
                      React.createElement(
                        "p",
                        {
                          key: "extraButton",
                          style: { cursor: "pointer" },
                          className: "description",
                          onClick: function() {
                            (Tr = !o), CKUI.requestEditorRefresh();
                          }
                        },
                        o ? "-" : "+ more"
                      )
                    ),
                  o &&
                    n.length > 0 &&
                    i.push(
                      React.createElement(Qn, {
                        key: "extraMaterials",
                        options: n
                      })
                    ),
                  i
                );
              }
            }
          ]),
          t
        );
      })(),
      Nr = (function(e) {
        function t() {
          return Sr(this, t), xr(this, jr(t).apply(this, arguments));
        }
        return (
          Pr(t, React.Component),
          Er(t, [
            {
              key: "render",
              value: function() {
                var e = kr.getSelectedProduct();
                if (void 0 !== e) {
                  for (var t = e.image_count || 1, n = [], r = 0; r < t; r++)
                    n.push(
                      "/static/img/photos/" +
                        (e.thumb_name || e.product_name) +
                        "_large_" +
                        (r + 1) +
                        ".png"
                    );
                  return React.createElement(
                    "div",
                    {
                      id: "materialScale-wrapper",
                      className: "non-accordion",
                      key: "material-scale-panel"
                    },
                    React.createElement(
                      "div",
                      { id: "material-wrapper", className: "subsection" },
                      React.createElement(
                        "div",
                        { className: "subsection-content" },
                        React.createElement("hr", null),
                        React.createElement(
                          "p",
                          { className: "description" },
                          React.createElement("span", {
                            className: "material-desc",
                            dangerouslySetInnerHTML: { __html: e.description }
                          })
                        ),
                        React.createElement(
                          "p",
                          null,
                          React.createElement(
                            "a",
                            { href: "/Materials/", target: "_blank" },
                            "Learn more about our materials"
                          )
                        ),
                        React.createElement(
                          "p",
                          {
                            className: "display-none",
                            id: "product-preview",
                            style: { position: "relative", top: 0, left: 0 },
                            onClick: function() {
                              return _t.a.showSlideshow(
                                n,
                                "".concat(
                                  e.display_name.replace(" Mounted", ""),
                                  " Gallery"
                                )
                              );
                            }
                          },
                          React.createElement("img", {
                            src: "/static/svg/zoom.svg",
                            style: {
                              width: 28,
                              height: 28,
                              zIndex: 2,
                              bottom: 0,
                              right: 0,
                              position: "absolute"
                            }
                          }),
                          React.createElement("img", {
                            style: {
                              top: 0,
                              left: 0,
                              position: "relative",
                              maxWidth: "100%"
                            },
                            src:
                              "/static/img/photos/" +
                              (e.thumb_name || e.product_name) +
                              ".png"
                          })
                        )
                      )
                    )
                  );
                }
                return React.createElement(
                  "p",
                  { className: "description" },
                  React.createElement(
                    "span",
                    { id: "scale-desc" },
                    "Please select a material"
                  )
                );
              }
            }
          ]),
          t
        );
      })(),
      Lr = (function(e) {
        function t() {
          return Sr(this, t), xr(this, jr(t).apply(this, arguments));
        }
        return (
          Pr(t, React.Component),
          Er(t, [
            {
              key: "render",
              value: function() {
                return React.createElement(
                  "div",
                  { className: "giftCardInsentive" },
                  React.createElement("img", {
                    src: "/static/img/giftcard/giftcard.png",
                    className: "giftCardInsentive-img"
                  }),
                  React.createElement(
                    "div",
                    { className: "giftCardInsentive-content" },
                    React.createElement(
                      "div",
                      { className: "giftCardInsentive-title" },
                      "Share The Loot"
                    ),
                    React.createElement(
                      "div",
                      { className: "giftCardInsentive-action" },
                      React.createElement(
                        "span",
                        { className: "giftCardInsentive-text" },
                        "Check out our"
                      ),
                      React.createElement(
                        "a",
                        {
                          href: "#",
                          className: "giftCardInsentive-button",
                          onClick: function(e) {
                            e.preventDefault(),
                              (UIState.showOverlay = "giftCard");
                          }
                        },
                        "Gift Cards"
                      )
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(),
      Ur = (function(e) {
        function t() {
          return Sr(this, t), xr(this, jr(t).apply(this, arguments));
        }
        return (
          Pr(t, React.Component),
          Er(t, [
            {
              key: "render",
              value: function() {
                return React.createElement(
                  mr,
                  {
                    label: "Material",
                    onOpen: function() {
                      CK.enableMaterialSim();
                    },
                    onClose: function() {
                      CK.disableMaterialSim();
                    }
                  },
                  React.createElement(Ir, null),
                  React.createElement(Nr, null),
                  React.createElement(Lr, null)
                );
              }
            }
          ]),
          t
        );
      })();
    function Dr(e) {
      return (Dr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function zr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ar(e, t) {
      return !t || ("object" !== Dr(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Br(e) {
      return (Br = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Fr(e, t) {
      return (Fr =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Vr = VN.classNames,
      qr = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Ar(this, Br(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Fr(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "renderToggleEars",
              value: function() {
                var e =
                    CK.displayData.parts.helm &&
                    (CK.displayData.parts.helm.keywords.coversEars ||
                      CK.displayData.parts.helm.keywords.coversFace),
                  t =
                    !(CK.data.parts.earR || CK.data.parts.earL) ||
                    !CK.displayData.parts.helm ||
                    !e,
                  n = !!CK.data.flags.earHoles;
                return React.createElement(
                  "label",
                  { className: Vr("layout-toggle", { disabled: t }) },
                  React.createElement("input", {
                    name: "isGoing",
                    disabled: t,
                    type: "checkbox",
                    checked: !n,
                    onChange: function() {
                      return CK.tweak({ flags: { earHoles: !n } });
                    }
                  }),
                  "Hide Ears"
                );
              }
            },
            {
              key: "renderToggleHorns",
              value: function() {
                var e =
                    CK.displayData.parts.helm &&
                    (CK.displayData.parts.helm.keywords.coversEars ||
                      CK.displayData.parts.helm.keywords.coversFace),
                  t =
                    !(CK.data.parts.hornR || CK.data.parts.hornL) ||
                    !CK.displayData.parts.helm ||
                    !e,
                  n = !!CK.data.flags.hornHoles;
                return React.createElement(
                  "label",
                  { className: Vr("layout-toggle", { disabled: t }) },
                  React.createElement("input", {
                    name: "hideHorns",
                    disabled: t,
                    type: "checkbox",
                    checked: !n,
                    onChange: function() {
                      return CK.tweak({ flags: { hornHoles: !n } });
                    }
                  }),
                  "Hide Horns"
                );
              }
            },
            {
              key: "renderPinned",
              value: function() {
                var e = CK.data.parts.earR || CK.data.parts.earL,
                  t = CK.data.parts.hornR || CK.data.parts.hornL;
                return e || t
                  ? React.createElement(
                      React.Fragment,
                      null,
                      e && this.renderToggleEars(),
                      t && !1
                    )
                  : null;
              }
            },
            {
              key: "render",
              value: function() {
                return React.createElement(
                  mr,
                  { pinned: this.renderPinned() },
                  React.createElement($e, { label: "Headwear", slot: "helm" })
                );
              }
            }
          ]) && zr(n.prototype, r),
          o && zr(n, o),
          t
        );
      })();
    function Wr(e) {
      return (Wr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Hr(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Qr(e, t) {
      return !t || ("object" !== Wr(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Xr(e) {
      return (Xr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Gr(e, t) {
      return (Gr =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Yr = VN.classNames,
      Zr = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = Qr(this, Xr(t).call(this, e))).state = {
              maxOffset: 0,
              currentOffset: 0,
              carouselWidth: 0
            }),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Gr(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.options,
                  r = t.selected;
                return React.createElement(
                  "div",
                  {
                    className: Yr("slotFilter", {
                      "slotFilter--big": this.props.big
                    })
                  },
                  React.createElement(
                    "div",
                    { className: "slotFilter-items" },
                    React.createElement(
                      "nav",
                      { className: "slotFilter-items-list" },
                      n.map(function(t) {
                        return React.createElement(
                          "div",
                          {
                            className: Yr(
                              "slotFilter-item",
                              { isActive: r === t },
                              { mirrored: t.mirrorThumb }
                            ),
                            key: t.thumb,
                            onClick: t.onClick
                          },
                          !UIState.compact &&
                            React.createElement(
                              "div",
                              { className: "slotFilter-title" },
                              t.label
                            ),
                          React.createElement("img", {
                            src: t.thumb,
                            alt: t.label,
                            className: Yr("slotFilter-item-img", {
                              "slotFilter-item-img--big": e.props.big
                            })
                          })
                        );
                      })
                    )
                  )
                );
              }
            }
          ]) && Hr(n.prototype, r),
          o && Hr(n, o),
          t
        );
      })();
    function Jr(e) {
      return (Jr =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function $r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function eo(e, t) {
      return !t || ("object" !== Jr(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function to(e) {
      return (to = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function no(e, t) {
      return (no =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ro = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          eo(this, to(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && no(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "getSelectedFilter",
            value: function(e) {
              var t = UIState.filters[e.targetSlot || e.slot] || e.initial;
              return "none" === t
                ? "none"
                : t &&
                  e.filters.find(function(e) {
                    return e.slug === t;
                  })
                ? t
                : e.filters[0].slug;
            }
          }
        ]),
        (r = [
          {
            key: "render",
            value: function() {
              var e,
                n = this,
                r = this.props.slot,
                o = this.props.targetSlot || r,
                a = t.getSelectedFilter(this.props),
                i = this.props.filters.map(function(t) {
                  var r = new Re({
                    label: t.label,
                    onClick: function() {
                      return n.updateFilter(o, t.slug);
                    },
                    thumb: "/static/svg/items/".concat(t.slug, ".svg")
                  });
                  return t.slug === a && (e = r), r;
                });
              return React.createElement(Zr, { options: i, selected: e });
            }
          },
          {
            key: "updateFilter",
            value: function(e, t) {
              UIState.filters[e] === t
                ? (UIState.filters[e] = void 0)
                : (UIState.filters[e] = t),
                this.forceUpdate(),
                CKUI.requestEditorRefresh(),
                CK.Events.emit("slotFilterChanged");
            }
          }
        ]) && $r(n.prototype, r),
        o && $r(n, o),
        t
      );
    })();
    function oo(e) {
      return (oo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ao(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function io(e, t) {
      return !t || ("object" !== oo(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function so(e) {
      return (so = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function co(e, t) {
      return (co =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var lo = (function(e) {
      function t(e, n) {
        var r;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((r = io(this, so(t).call(this, e))).defaultMenu = n),
          (r.state = { activeMenu: n }),
          r
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && co(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              CK.Events.on("clearSlot", this.resetActiveMenu.bind(this));
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              CK.Events.off("clearSlot", this.resetActiveMenu.bind(this));
            }
          },
          {
            key: "resetActiveMenu",
            value: function() {
              this.setState({ activeMenu: this.defaultMenu });
            }
          }
        ]) && ao(n.prototype, r),
        o && ao(n, o),
        t
      );
    })();
    function uo(e) {
      return (uo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function po(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function fo(e, t) {
      return !t || ("object" !== uo(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function ho(e) {
      return (ho = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function mo(e, t) {
      return (mo =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var yo = [
        { slug: "all", label: "All" },
        { slug: "new", label: "New" },
        { slug: "familiar", label: "Animals" },
        { slug: "foodDrink", label: "Food & Drink" },
        { slug: "handpose", label: "Hand Poses" },
        { slug: "instrument", label: "Instruments" },
        { slug: "light", label: "Light Sources" },
        { slug: "shortblade", label: "Short Blades" },
        { slug: "sword", label: "Long Blades" },
        { slug: "axe", label: "Axes" },
        { slug: "blunt", label: "Blunt Weapons" },
        { slug: "chain", label: "Chain Weapons" },
        { slug: "polearm", label: "Polearms" },
        { slug: "staff", label: "Staffs" },
        { slug: "shield", label: "Shields" },
        { slug: "bow", label: "Bows" },
        { slug: "crossbow", label: "Crossbows" },
        { slug: "pistol", label: "Pistols" },
        { slug: "rifle", label: "Long Guns" },
        { slug: "spell", label: "Spell Effects" },
        { slug: "miscellaneous", label: "Other" }
      ],
      bo = (function(e) {
        function t(e) {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            fo(this, ho(t).call(this, e, "handheld"))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && mo(e, t);
          })(t, lo),
          (n = t),
          (r = [
            {
              key: "getSelectedFilter",
              value: function() {
                var e = this.getSlotFilter();
                return ro.getSelectedFilter(e.props);
              }
            },
            {
              key: "getSlotFilter",
              value: function() {
                var e = this.props.slot + "R";
                return React.createElement(ro, {
                  key: "slotFilter",
                  slot: "itemR",
                  targetSlot: e,
                  filters: yo,
                  initial: "all"
                });
              }
            },
            {
              key: "renderNav",
              value: function() {
                var e = this,
                  t = this.getSelectedFilter(),
                  n = [
                    {
                      slug: "handheld",
                      label:
                        "none" === t
                          ? ""
                          : yo.find(function(e) {
                              return e.slug === t;
                            }).label
                    }
                  ];
                return (
                  this.hasVisibleArrow()
                    ? n.push({ slug: "extra", label: "Arrows" })
                    : this.hasItemRAttach() &&
                      n.push({ slug: "extra", label: "Extra" }),
                  React.createElement(sr, {
                    nav: n,
                    onItemClick: function(t) {
                      return e.setState({ activeMenu: t });
                    }
                  })
                );
              }
            },
            {
              key: "hasVisibleArrow",
              value: function() {
                return (
                  $e.hasContent({ slot: "itemAttachT" }) &&
                  [49, 50, 51].indexOf(CK.data.limitedPoses.main) > -1
                );
              }
            },
            {
              key: "hasItemRAttach",
              value: function() {
                return $e.hasContent({ slot: "itemAttachR" });
              }
            },
            {
              key: "renderItemAttach",
              value: function() {
                return this.hasVisibleArrow()
                  ? React.createElement($e, {
                      hideIfEmpty: !0,
                      label: "Extra",
                      key: "itemAttachT",
                      slot: "itemAttachT"
                    })
                  : this.hasItemRAttach()
                  ? React.createElement($e, {
                      hideIfEmpty: !0,
                      label: "Extra",
                      key: "itemAttachR",
                      slot: "itemAttachR"
                    })
                  : null;
              }
            },
            {
              key: "renderPinned",
              value: function() {
                return React.createElement(
                  React.Fragment,
                  null,
                  this.renderNav(),
                  "handheld" === this.state.activeMenu && this.getSlotFilter()
                );
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t = e.slot,
                  n = e.label,
                  r = e.itemD,
                  o = this.getSelectedFilter();
                return React.createElement(
                  mr,
                  {
                    pinned: this.renderPinned(),
                    pinnedNoPadding: !!UIState.compact
                  },
                  "extra" === this.state.activeMenu && this.renderItemAttach(),
                  "handheld" === this.state.activeMenu &&
                    React.createElement(pt, {
                      label: n,
                      slot: t,
                      filter: o,
                      key: t + "filter",
                      itemD: r
                    })
                );
              }
            }
          ]) && po(n.prototype, r),
          o && po(n, o),
          t
        );
      })();
    function vo(e) {
      return (vo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function go(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function wo(e, t) {
      return !t || ("object" !== vo(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function _o(e) {
      return (_o = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Co(e, t) {
      return (Co =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ko = VN.classNames,
      Ro = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            wo(this, _o(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Co(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "switchLink",
              value: function() {
                !this.props.linked &&
                  (this.props.partL.selected && !this.props.partR.selected
                    ? this.props.partR.onClick(!1)
                    : this.props.partR.selected &&
                      !this.props.partL.selected &&
                      this.props.partL.onClick(!1)),
                  this.props.switchLink();
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props.type,
                  t = this.props.partL,
                  n = this.props.partR,
                  r = ko(
                    "sprite-creationkit-ui-sprites",
                    "link-button",
                    {
                      "creationkit-ui-sprites-icon-linkedpart-linked": this
                        .props.linked
                    },
                    {
                      "creationkit-ui-sprites-icon-linkedpart-unlinked": !this
                        .props.linked
                    }
                  );
                if (n && t)
                  return (
                    (n.linked = this.props.linked),
                    (t.linked = this.props.linked),
                    React.createElement(
                      "div",
                      {
                        className: ko("linked-part", this.props.className, {
                          linked: this.props.linked
                        })
                      },
                      React.createElement(Ue, {
                        type: e,
                        option: t,
                        key: t.thumb + "L"
                      }),
                      React.createElement("a", {
                        className: r,
                        onClick: this.switchLink.bind(this)
                      }),
                      React.createElement(Ue, {
                        type: e,
                        option: n,
                        key: n.thumb + "R"
                      })
                    )
                  );
                var o =
                  t || n || console.error("L AND R parts are *both* null.");
                return o
                  ? React.createElement(
                      "div",
                      { className: "linked-part" },
                      React.createElement(Ue, {
                        type: e,
                        option: o,
                        key: o.thumb
                      })
                    )
                  : null;
              }
            }
          ]) && go(n.prototype, r),
          o && go(n, o),
          t
        );
      })();
    function So(e) {
      return (So =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Oo(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Eo(e, t) {
      return !t || ("object" !== So(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function xo(e) {
      return (xo = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function jo(e, t) {
      return (jo =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Po = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Eo(this, xo(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && jo(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "switchLink",
            value: function() {
              (t.linkedState[this.props.label] = !this.linked),
                this.forceUpdate();
            }
          },
          {
            key: "render",
            value: function() {
              var e,
                t = this,
                n = [];
              for (var r in this.props.leftOptions) {
                var o =
                  this.props.leftOptions[r] || this.props.rightOptions[r] || {};
                n.push(
                  React.createElement(Ro, {
                    partL: this.props.leftOptions[r],
                    partR: this.props.rightOptions[r],
                    option: { originalData: o.originalData },
                    linked: this.linked,
                    switchLink: function() {
                      t.switchLink();
                    },
                    key: (o.thumb || o.label) + r,
                    className:
                      ((e = o.label),
                      e
                        .toString()
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w\-]+/g, "")
                        .replace(/\-\-+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, ""))
                  })
                );
              }
              return React.createElement(Qe, { linked: !0 }, n);
            }
          },
          {
            key: "linked",
            get: function() {
              return void 0 !== t.linkedState[this.props.label]
                ? t.linkedState[this.props.label]
                : this.props.linkedDefault;
            }
          }
        ]) && Oo(n.prototype, r),
        o && Oo(n, o),
        t
      );
    })();
    function Mo(e) {
      return (Mo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function To(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ko(e, t) {
      return !t || ("object" !== Mo(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Io(e) {
      return (Io = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function No(e, t) {
      return (No =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    Po.linkedState = {};
    var Lo = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Ko(this, Io(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && No(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "render",
            value: function() {
              if (this.props.label.toLowerCase() in CK.data.disableMenus)
                return React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "a",
                    null,
                    CK.data.disableMenus[this.props.label.toLowerCase()]
                  )
                );
              var e = this.getOptions(this.props);
              return !e && this.props.hideIfEmpty
                ? null
                : React.createElement(
                    React.Fragment,
                    null,
                    this.props.header ? this.props.header : null,
                    React.createElement(
                      "div",
                      null,
                      e
                        ? React.createElement(Po, {
                            label: this.props.label,
                            leftOptions: e[0],
                            rightOptions: e[1],
                            linkedDefault: this.props.linkedDefault
                          })
                        : null
                    )
                  );
            }
          },
          {
            key: "getOptions",
            value: function() {
              console.log("get options needs overwriting");
            }
          }
        ]) && To(n.prototype, r),
        o && To(n, o),
        t
      );
    })();
    function Uo(e) {
      return (Uo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Do(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function zo(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function Ao(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Bo(e, t) {
      return !t || ("object" !== Uo(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Fo(e) {
      return (Fo = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Vo(e, t) {
      return (Vo =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var qo = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Bo(this, Fo(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Vo(e, t);
        })(t, Lo),
        (n = t),
        (o = [
          {
            key: "getOptions",
            value: function(e) {
              var t = e.slot || e.label.toLowerCase(),
                n = t + "R",
                r = t + "L",
                o = $e.getOptions(
                  Object.assign({}, e, { slot: n, flipThumb: e.flipThumb })
                );
              if (o) {
                var a = [];
                for (var i in o) {
                  var s = o[i],
                    c = s.originalData;
                  c.link
                    ? (function() {
                        var t = CK.Options.getPart(c.link);
                        a.push(
                          new Re(
                            Object.assign({}, s, {
                              onClick: s.onClick
                                ? function(n) {
                                    $e.partClicked(n, t, r, e.clearTransforms);
                                  }
                                : void 0,
                              selected: t.id === CK.data.parts[r],
                              mirrorThumb: !s.mirrorThumb,
                              originalData: t
                            })
                          )
                        );
                      })()
                    : a.push(null);
                }
                if (
                  CK.Settings.clearParts &&
                  !CK.Settings.getSlotSetting(n, "required") &&
                  UIState.compact
                ) {
                  var l = [t + "R", t + "L"];
                  l.map(function(e, t) {
                    (t ? a : o).push(
                      new Re({
                        label: "Empty",
                        description: "Remove anything currently selected",
                        selected: !CK.data.parts[e],
                        thumb: "/static/svg/empty.svg",
                        extraClass: "clearButton",
                        onClick: function(t) {
                          t ? CK.clearSlots(l) : CK.clearSlot(e);
                        }
                      })
                    );
                  });
                }
                return CK.data.mirroredPose ? [a, o] : [o, a];
              }
            }
          },
          {
            key: "getThumbnails",
            value: function(e) {
              var t = (e.slot || e.label.toLowerCase()) + "R";
              return $e.getThumbnails(
                (function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Do(n, !0).forEach(function(t) {
                          zo(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : Do(n).forEach(function(t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, e, { slot: t })
              );
            }
          },
          {
            key: "hasNew",
            value: function(e) {
              var n = (e.slot || e.label.toLowerCase()) + "R",
                r = n + "_" + UIState.genreFilter;
              if (!(r in t.newCache)) {
                t.newCache[r] = !1;
                var o = $e.available({ slot: n });
                for (var a in o)
                  if (o[a].new) {
                    t.newCache[r] = !0;
                    break;
                  }
              }
              return t.newCache[r];
            }
          }
        ]),
        (r = [
          {
            key: "getOptions",
            value: function(e) {
              return t.getOptions(e);
            }
          }
        ]) && Ao(n.prototype, r),
        o && Ao(n, o),
        t
      );
    })();
    function Wo(e) {
      return (Wo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ho(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Qo(e, t) {
      return !t || ("object" !== Wo(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Xo(e) {
      return (Xo = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Go(e, t) {
      return (Go =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    qo.newCache = {};
    var Yo = (function(e) {
      function t(e) {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Qo(this, Xo(t).call(this, e, "items"))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Go(e, t);
        })(t, lo),
        (n = t),
        (r = [
          {
            key: "renderNav",
            value: function() {
              var e = this;
              if (
                !$e.hasContent({ slot: "sideAttachL" }) &&
                !$e.hasContent({ slot: "sideAttachR" })
              )
                return null;
              var t = [{ slug: "items", label: "Items" }];
              return (
                $e.hasContent({ slot: "sideAttachL" }) &&
                  t.unshift({ slug: "left", label: "Left side" }),
                $e.hasContent({ slot: "sideAttachR" }) &&
                  t.push({ slug: "right", label: "Right side" }),
                React.createElement(sr, {
                  nav: t,
                  onItemClick: function(t) {
                    return e.setState({ activeMenu: t });
                  },
                  activeMenu: this.state.activeMenu
                })
              );
            }
          },
          {
            key: "renderItemAttachL",
            value: function() {
              return React.createElement($e, {
                hideIfEmpty: !0,
                label: "L",
                slot: "sideAttachL"
              });
            }
          },
          {
            key: "renderItemAttachR",
            value: function() {
              return React.createElement($e, {
                hideIfEmpty: !0,
                label: "R",
                slot: "sideAttachR"
              });
            }
          },
          {
            key: "renderPinned",
            value: function() {
              return this.renderNav();
            }
          },
          {
            key: "render",
            value: function() {
              return React.createElement(
                mr,
                { pinned: this.renderPinned() },
                "items" === this.state.activeMenu &&
                  React.createElement(qo, { label: "Side" }),
                "left" === this.state.activeMenu && this.renderItemAttachL(),
                "right" === this.state.activeMenu && this.renderItemAttachR()
              );
            }
          }
        ]) && Ho(n.prototype, r),
        o && Ho(n, o),
        t
      );
    })();
    function Zo(e) {
      return (Zo =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Jo(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function $o(e, t) {
      return !t || ("object" !== Zo(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function ea(e) {
      return (ea = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ta(e, t) {
      return (ta =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var na = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          $o(this, ea(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ta(e, t);
        })(t, $e),
        (n = t),
        (o = [
          {
            key: "makeTweak",
            value: function(e) {
              CKUI.promptClearTransforms(e);
            }
          }
        ]),
        (r = null) && Jo(n.prototype, r),
        o && Jo(n, o),
        t
      );
    })();
    function ra(e) {
      return (ra =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function oa(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function aa(e, t) {
      return !t || ("object" !== ra(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function ia(e) {
      return (ia = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function sa(e, t) {
      return (sa =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ca = VN.classNames,
      la = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            aa(this, ia(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && sa(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "renderExtraTall",
              value: function() {
                return React.createElement(
                  mr,
                  { label: "Mount" },
                  "Mounts unavailable because ",
                  CK.character.getName() || "your character",
                  " is ",
                  React.createElement("span", { className: "xl-tag" }, "XL"),
                  ".",
                  React.createElement("br", null),
                  "The mount would be squished underneath your mighty stature!"
                );
              }
            },
            {
              key: "renderPinned",
              value: function() {
                if (!!CK.data.disableMenus.mount) return null;
                var e = void 0 === CK.data.parts.mount,
                  t =
                    !e &&
                    void 0 !== CK.data.parts.toggleGroup &&
                    2017 === CK.data.parts.toggleGroup;
                return React.createElement(
                  "label",
                  { className: ca("layout-toggle", { disabled: e }) },
                  React.createElement("input", {
                    type: "checkbox",
                    name: "isGoing",
                    disabled: e,
                    checked: t,
                    onChange: function() {
                      e ||
                        (t
                          ? CK.clearSlot("toggleGroup")
                          : CK.tweak({ parts: { toggleGroup: 2017 } }));
                    }
                  }),
                  "Hide Rider"
                );
              }
            },
            {
              key: "render",
              value: function() {
                if (a.isExtraTall()) return this.renderExtraTall();
                var e = !!CK.data.disableMenus.mount;
                return React.createElement(
                  mr,
                  {
                    label: "Mount",
                    hasFilter: !e,
                    pinned: this.renderPinned()
                  },
                  React.createElement(na, { label: "Mount" })
                );
              }
            }
          ]) && oa(n.prototype, r),
          o && oa(n, o),
          t
        );
      })();
    function ua(e) {
      return (ua =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function pa(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function fa(e, t) {
      return !t || ("object" !== ua(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function ha(e, t, n) {
      return (ha =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = ma(e));

                );
                return e;
              })(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n) : o.value;
              }
            })(e, t, n || e);
    }
    function ma(e) {
      return (ma = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function da(e, t) {
      return (da =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ya = [
        "finger1R",
        "finger2R",
        "finger3R",
        "finger4R",
        "finger5R",
        "finger1L",
        "finger2L",
        "finger3L",
        "finger4L",
        "finger5L"
      ],
      ba = [
        [13, 56],
        [29, 63],
        [46, 66],
        [64, 62],
        [78, 42],
        [120, 42],
        [136, 63],
        [154, 66],
        [171, 62],
        [187, 56]
      ],
      va = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            fa(this, ma(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && da(e, t);
          })(t, $e),
          (n = t),
          (o = [
            {
              key: "getOptions",
              value: function(e) {
                return ha(ma(t), "getOptions", this).call(
                  this,
                  Object.assign({}, e, { slot: t.selectedRingSlot }),
                  t.selectedRingSlot
                );
              }
            },
            {
              key: "getClear",
              value: function() {
                return function() {
                  CK.clearSlots(ya);
                };
              }
            }
          ]),
          (r = [
            {
              key: "render",
              value: function() {
                var e = ha(ma(t.prototype), "render", this).call(this),
                  n = [],
                  r = function(e) {
                    var r = ya[e];
                    n.push(
                      React.createElement("div", {
                        key: e,
                        onClick: function() {
                          (t.selectedRingSlot = r), CKUI.requestEditorRefresh();
                        },
                        style: {
                          backgroundColor:
                            t.selectedRingSlot === r ? "#ab0007" : "white",
                          border: "none",
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          position: "absolute",
                          top: ba[e][1] - 8,
                          left: ba[e][0] - 8
                        }
                      })
                    );
                  };
                for (var o in ya) r(o);
                return React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "inline-block",
                        position: "relative",
                        width: 200,
                        height: 125,
                        backgroundImage: 'url("/static/img/hands.png")'
                      }
                    },
                    n
                  ),
                  e
                );
              }
            }
          ]) && pa(n.prototype, r),
          o && pa(n, o),
          t
        );
      })();
    function ga(e) {
      return (ga =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function wa(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function _a(e, t) {
      return !t || ("object" !== ga(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Ca(e) {
      return (Ca = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ka(e, t) {
      return (ka =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    va.selectedRingSlot = "finger3R";
    var Ra = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          _a(this, Ca(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ka(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "getAvailable",
            value: function(e) {
              var t = e.label,
                n = e.category || t.toLowerCase();
              return (
                e.configs ||
                CK.Options.configs[n] ||
                console.error("No configs available in", n) ||
                []
              ).filter(function(e) {
                return !e.hide;
              });
            }
          },
          {
            key: "getOptions",
            value: function(e) {
              var t = e.showSelected,
                n = CK.data.mirrorPose,
                r = e.paintType,
                o = e.swatchesFromSlot,
                a = this.getAvailable(e),
                i = [],
                s = function(s) {
                  var c = a[s],
                    l = e.pallet
                      ? CK.Paths.getPalletThumb(c)
                      : CK.Paths.getConfigThumb(c.name),
                    u = [];
                  if (o && "paints" in c && !e.pallet) {
                    var p = c.paints[o];
                    for (var f in p) u.push(CK.Options.getPaint(p[f]).gradient);
                    l = void 0;
                  }
                  var h = c.desc,
                    m = CK.Options.getAttr(c, "config_desc");
                  var d = t && CK.data.matchesConfig(c),
                    y = c.thumb_x || 120,
                    b = c.thumb_y || 120,
                    v = new Re({
                      thumb: l,
                      label: h,
                      description: m,
                      onClick: function() {
                        CK.tweak(c), Reporting.preconfigSelected(c);
                      },
                      selected: d,
                      mirrorThumb: n,
                      thumbSize: [y, b],
                      tagLabel: c.tagLabel,
                      tagColor: c.tagColor,
                      swatchLayers: u,
                      paintType: r,
                      displayOrder: c.display_order,
                      originalData: c
                    });
                  i.push(v);
                };
              for (var c in a) s(c);
              return (
                i.sort(function(e, t) {
                  return e.displayOrder < t.displayOrder ? -1 : 1;
                }),
                i.length ? i : void 0
              );
            }
          },
          {
            key: "hasNew",
            value: function(e) {
              var n = e.category || e.label.toLowerCase(),
                r = n + "_" + UIState.genreFilter;
              if (!(r in t.newCache)) {
                t.newCache[r] = !1;
                var o = e.configs || CK.Options.configs[n];
                for (var a in o)
                  if (o[a].new) {
                    t.newCache[r] = !0;
                    break;
                  }
              }
              return t.newCache[r];
            }
          }
        ]),
        (r = [
          {
            key: "render",
            value: function() {
              var e = t.getOptions(this.props);
              return React.createElement(
                "div",
                null,
                e
                  ? React.createElement(Qn, {
                      options: e,
                      columns: this.props.columns,
                      key: this.props.label
                    })
                  : React.createElement(
                      "a",
                      null,
                      "Nothing Found In Current Genre"
                    )
              );
            }
          }
        ]) && wa(n.prototype, r),
        o && wa(n, o),
        t
      );
    })();
    function Sa(e) {
      return (Sa =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Oa(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ea(e, t) {
      return !t || ("object" !== Sa(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function xa(e) {
      return (xa = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ja(e, t) {
      return (ja =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    Ra.newCache = {};
    var Pa = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Ea(this, xa(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ja(e, t);
        })(t, Ra),
        (n = t),
        (r = [
          {
            key: "random",
            value: function(e) {
              if (!e) {
                var t = Ra.getAvailable(this.props);
                e = t[Math.floor(Math.random() * t.length)].name
                  .replace("Female", "")
                  .replace("Male", "");
              }
              console.log(e);
              var n = CK.Options.configsByName,
                r = [
                  n.racegenders[e + "Male"] ||
                    console.error("Could not find ", e + "Male"),
                  n.racegenders[e + "Female"] ||
                    console.error("Could not find ", e + "Female")
                ];
              for (var o in n.racerandom)
                o.startsWith(e) && r.push(n.racerandom[o]);
              var a = Object.assign(
                {},
                r[Math.floor(Math.random() * r.length)]
              );
              (a.parts = Object.assign({}, a.parts)),
                (a.sliders = Object.assign({}, a.sliders));
              var i = e.toLowerCase();
              for (var s in a.parts) {
                var c = CK.Options.getPart(a.parts[s]);
                if ("CLEAR" !== c.name && "R" !== c.side) {
                  var l = CK.Options.getSelectableParts(s).filter(function(e) {
                    return e.keywords[i] || e.terms[i];
                  });
                  if (l.length) {
                    var u = l[Math.floor(Math.random() * l.length)];
                    (a.parts[s] = u.id),
                      "L" === u.side && (a.parts[u.slotR] = u.link);
                  }
                }
              }
              var p = a.sliders.height > f.xlSliderThreshold,
                h = {
                  belly: 0.15,
                  booty: 0.1,
                  build: 0.1,
                  curves: 0.1,
                  faceSoftness: 0.4,
                  headSize: 0.2,
                  height: 0.075,
                  muscularity: 0.3,
                  posture: 0.04,
                  waist: 0.1,
                  weightTorso: 0.1,
                  weightLower: 0.1,
                  weightUpper: 0.1
                };
              for (var m in h) {
                var d = h[m];
                (a.sliders[m] += (Math.random() - 0.5) * d),
                  a.sliders[m] < 0 && (a.sliders[m] = 0),
                  a.sliders[m] > 1 && (a.sliders[m] = 1);
              }
              var y = 1.5 * Math.random(),
                b = 0;
              (function(e) {
                for (var t = e.length - 1; t > 0; t--) {
                  var n = Math.floor(Math.random() * (t + 1)),
                    r = [e[n], e[t]];
                  (e[t] = r[0]), (e[n] = r[1]);
                }
                return e;
              })([
                "xprsn_cocky",
                "xprsn_confused",
                "xprsn_smile",
                "xprsn_snarl"
              ]).map(function(e) {
                var t = Math.random();
                t + b > y && (t = y - b), (b += t), (a.sliders[e] = t);
              }),
                p &&
                  a.sliders.height < f.xlSliderThreshold &&
                  (a.sliders.height = f.xlSliderThreshold + 0.01),
                !p &&
                  a.sliders.height >= f.xlSliderThreshold &&
                  (a.sliders.height = f.xlSliderThreshold - 0.01),
                Reporting.preconfigRandomized(a),
                CK.tweak(a);
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                t = Ra.getOptions(this.props),
                n = [];
              n.push(
                React.createElement(
                  "div",
                  { key: "Random", className: "random" },
                  React.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDireciton: "row",
                        justifyContent: "center"
                      }
                    },
                    React.createElement(Ue, {
                      option: new Re({
                        thumb: "/static/herobundles/config/dice-square.png",
                        onClick: function() {
                          return e.random();
                        },
                        label: "Random",
                        description: "A randomized race."
                      })
                    })
                  ),
                  React.createElement(
                    "div",
                    {
                      className: "race-label",
                      onClick: function() {
                        return e.random();
                      }
                    },
                    React.createElement("a", null, "Random")
                  )
                )
              );
              for (
                var r = function(r) {
                    var o = t[2 * r],
                      a = t[2 * r + 1],
                      i = o.label.substr((o.label.indexOf(" ") || 0) + 1),
                      s =
                        (o.originalData.sliders.height > 0.6 ||
                          !!o.originalData.keywords.XL) &&
                        React.createElement("div", { className: "XL" }, "XL");
                    n.push(
                      React.createElement(
                        "div",
                        { key: i + r + "text", className: "race" },
                        React.createElement(
                          "div",
                          {
                            style: {
                              display: "flex",
                              flexDireciton: "row",
                              justifyContent: "center"
                            },
                            className: "race-genders"
                          },
                          React.createElement(Ue, { option: o, overlay: s }),
                          React.createElement(Ue, { option: a, overlay: s })
                        ),
                        React.createElement(
                          "div",
                          {
                            className: "race-label",
                            onClick: function() {
                              return e.random(
                                o.originalData.name.replace("Male", "")
                              );
                            }
                          },
                          React.createElement("img", {
                            src: "/static/svg/dice.svg",
                            className: "random-icon left"
                          }),
                          React.createElement("a", null, i),
                          React.createElement("img", {
                            src: "/static/svg/dice.svg",
                            className: "random-icon"
                          })
                        )
                      )
                    );
                  },
                  o = 0;
                o < t.length / 2;
                o++
              )
                r(o);
              return React.createElement(mr, null, n);
            }
          }
        ]) && Oa(n.prototype, r),
        o && Oa(n, o),
        t
      );
    })();
    function Ma() {
      return (
        CK.displayData.parts.base &&
        CK.displayData.parts.base.keywords.initiative
      );
    }
    var Ta = {
      clipSettingsActive: Ma,
      clipSize: function() {
        if (!Ma()) return null;
        for (var e = [], t = 2; t < 26; t++)
          e.push(
            React.createElement(
              "option",
              { key: t, value: t },
              3 === t ? t + " mm (Standard GM Screen)" : t + " mm"
            )
          );
        return React.createElement(
          "div",
          null,
          React.createElement(
            "select",
            {
              value:
                void 0 !== CK.data.sliders.initiative_base_width
                  ? Math.round(23.4 * CK.data.sliders.initiative_base_width + 2)
                  : 3,
              onChange: function(e) {
                CK.tweak({
                  sliders: {
                    initiative_base_width: (e.target.value - 2) / 23.4
                  }
                });
              }
            },
            e
          )
        );
      }
    };
    function Ka(e) {
      return (Ka =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ia(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Na(e, t) {
      return !t || ("object" !== Ka(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function La(e) {
      return (La = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Ua(e, t) {
      return (Ua =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Da = VN.classNames,
      za = (function(e) {
        function t(e) {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Na(this, La(t).call(this, e))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Ua(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "handleSubmit",
              value: function(e) {
                e.preventDefault();
              }
            },
            {
              key: "componentDidMount",
              value: function() {
                var e = this.placeholder,
                  t = document.getElementById(
                    this.props.canvasElement || "character-canvas"
                  );
                e.appendChild(t),
                  (t.oncontextmenu = function(e) {
                    return e.preventDefault(), e.stopPropagation(), !1;
                  });
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                var e = document.getElementById(
                  this.props.canvasElement || "character-canvas"
                );
                ((e.oncontextmenu = void 0),
                e.parentNode === this.placeholder) &&
                  document.body.appendChild(e);
              }
            },
            {
              key: "render",
              value: function() {
                var e,
                  t,
                  n,
                  r = this,
                  o =
                    window.UIState &&
                    UIState.mainSelection &&
                    Da(
                      "main-menu-" + UIState.mainSelection,
                      ((e = {}),
                      (t = "sub-menu-" + UIState.subSelection),
                      (n = !!UIState.subSelection),
                      t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                          })
                        : (e[t] = n),
                      e),
                      { "no-sub-menu": !UIState.subSelection }
                    ),
                  a = Da("placeholder-canvas", o);
                return React.createElement(
                  "div",
                  {
                    id: "placeholder-canvas",
                    className: a,
                    ref: function(e) {
                      return (r.placeholder = e);
                    },
                    style: Object.assign(
                      { display: this.props.hidden ? "none" : "" },
                      window.CK && CK.Settings.forge
                        ? { width: "100%", height: "100%" }
                        : {}
                    )
                  },
                  this.props.children
                );
              }
            }
          ]) && Ia(n.prototype, r),
          o && Ia(n, o),
          t
        );
      })();
    function Aa(e) {
      return (Aa =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ba(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Fa(e, t) {
      return !t || ("object" !== Aa(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Va(e) {
      return (Va = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function qa(e, t) {
      return (qa =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Wa = VN.classNames,
      Ha = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Fa(this, Va(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && qa(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                return React.createElement(
                  "div",
                  {
                    className: Wa(
                      "newTag",
                      this.props.down ? "newTag--down" : "newTag--right"
                    )
                  },
                  this.props.label
                );
              }
            }
          ]) && Ba(n.prototype, r),
          o && Ba(n, o),
          t
        );
      })();
    function Qa(e) {
      return (Qa =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Xa(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ga(e, t) {
      return !t || ("object" !== Qa(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Ya(e) {
      return (Ya = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Za(e, t) {
      return (Za =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Ja = VN.classNames,
      $a = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Ga(this, Ya(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Za(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "componentDidMount",
              value: function() {
                ReactDOM.findDOMNode(this.scrollRef).scrollLeft =
                  UIState.scrollLeft;
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                UIState.scrollLeft = ReactDOM.findDOMNode(
                  this.scrollRef
                ).scrollLeft;
              }
            },
            {
              key: "onButtonClick",
              value: function(e, t) {
                e.selected || e.onClick(),
                  t.forEach(function(e) {
                    return e();
                  });
              }
            },
            {
              key: "renderButton",
              value: function(e, t, n) {
                var r = this,
                  o = !!e.tagLabel,
                  a = Ja("tab", "tab-".concat(t), "tab-".concat(e.label), {
                    active: e.selected,
                    isNew: o
                  });
                return React.createElement(
                  "li",
                  {
                    key: "".concat(t, "-menu"),
                    className: a,
                    onClick: function() {
                      return r.onButtonClick(e, n);
                    },
                    title: e.label
                  },
                  o && React.createElement(Ha, { label: e.tagLabel }),
                  e.thumb &&
                    React.createElement("img", {
                      className: "menuThumb",
                      src: e.thumb,
                      alt: e.label
                    }),
                  React.createElement("span", null, e.label)
                );
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.buttons,
                  n = t
                    .filter(function(e) {
                      return e.selected && e.onClose;
                    })
                    .map(function(e) {
                      return e.onClose;
                    });
                return React.createElement(
                  "div",
                  {
                    className: "tabs",
                    ref: function(t) {
                      return (e.scrollRef = t);
                    }
                  },
                  React.createElement(
                    "ul",
                    null,
                    t.map(function(t, r) {
                      return e.renderButton(t, r, n);
                    })
                  )
                );
              }
            }
          ]) && Xa(n.prototype, r),
          o && Xa(n, o),
          t
        );
      })();
    function ei(e) {
      return (ei =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ti(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function ni(e, t) {
      return !t || ("object" !== ei(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function ri(e) {
      return (ri = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function oi(e, t) {
      return (oi =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ai = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ni(this, ri(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && oi(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "render",
            value: function() {
              return React.createElement(
                "div",
                {
                  id: "editor",
                  className:
                    "main-menu-" +
                    UIState.mainSelection +
                    " sub-menu-" +
                    UIState.subSelection
                },
                React.createElement(
                  "div",
                  { id: "editor-backing" },
                  React.createElement("div", null)
                ),
                React.createElement(
                  "div",
                  { className: "editor-main" },
                  React.createElement($a, { buttons: this.props.menu }),
                  React.createElement(
                    "div",
                    { id: "sections-wrapper" },
                    React.createElement(
                      "div",
                      { id: "sections-content" },
                      this.props.content
                    ),
                    this.props.footer
                  )
                )
              );
            }
          }
        ]) && ti(n.prototype, r),
        o && ti(n, o),
        t
      );
    })();
    function ii(e) {
      return (ii =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function si(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function ci(e) {
      return (ci = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function li(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function ui(e, t) {
      return (ui =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var pi = (function(e) {
      function t() {
        var e, n, r;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          (n = this),
          ((e =
            !(r = ci(t).call(this)) ||
            ("object" !== ii(r) && "function" != typeof r)
              ? li(n)
              : r).state = { genre: UIState.genreSearchFilter || "" }),
          (e.updateGenre = e.updateGenre.bind(li(e))),
          (e.updateFilter = e.updateFilter.bind(li(e))),
          (e.onBlur = e.onBlur.bind(li(e))),
          (e.onFocus = e.onFocus.bind(li(e))),
          e
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ui(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "componentDidUpdate",
            value: function() {
              this.props.focus && this.input.focus();
            }
          },
          {
            key: "componentDidMount",
            value: function() {
              this.props.focus && this.input.focus();
            }
          },
          {
            key: "onFocus",
            value: function() {
              this.focus = !0;
            }
          },
          {
            key: "onBlur",
            value: function() {
              var e = this;
              (this.focus = !1),
                setTimeout(function() {
                  e.focus || (e.props.onBlur && e.props.onBlur());
                }, 0);
            }
          },
          {
            key: "updateFilter",
            value: function(e) {
              (UIState.searchFilter = e.target.value),
                this.forceUpdate(),
                CK.Events.emit("searchChanged");
            }
          },
          {
            key: "updateGenre",
            value: function(e) {
              (UIState.genreSearchFilter = e.target.value),
                this.setState({ genre: e.target.value }),
                Reporting.genreSelected(e.target.value),
                CK.Events.emit("searchChanged");
            }
          },
          {
            key: "render",
            value: function() {
              var e = this;
              return CK.Settings.searchable
                ? React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                      "select",
                      {
                        value: this.state.genre,
                        name: "genre",
                        onChange: this.updateGenre,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                        onClick: function(e) {
                          return e.stopPropagation();
                        }
                      },
                      React.createElement("option", { value: "" }, "All"),
                      React.createElement(
                        "option",
                        { value: "scifi" },
                        "Scifi"
                      ),
                      React.createElement(
                        "option",
                        { value: "western" },
                        "Western"
                      ),
                      React.createElement(
                        "option",
                        { value: "fantasy" },
                        "Fantasy"
                      ),
                      React.createElement(
                        "option",
                        { value: "modern" },
                        "Modern"
                      ),
                      React.createElement(
                        "option",
                        { value: "east asian" },
                        "East Asian"
                      )
                    ),
                    React.createElement("input", {
                      key: "search",
                      type: "text",
                      value: UIState.searchFilter,
                      placeholder: "Filter",
                      onChange: this.updateFilter,
                      onClick: function(e) {
                        return e.stopPropagation();
                      },
                      onFocus: this.onFocus,
                      onBlur: this.onBlur,
                      ref: function(t) {
                        return (e.input = t);
                      }
                    })
                  )
                : null;
            }
          }
        ]) && si(n.prototype, r),
        o && si(n, o),
        t
      );
    })();
    function fi(e) {
      return (fi =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function hi(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function mi(e) {
      return (mi = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function di(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function yi(e, t) {
      return (yi =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var bi = VN.classNames,
      vi = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = mi(t).call(this, e)) ||
              ("object" !== fi(o) && "function" != typeof o)
                ? di(r)
                : o).state = { isSearching: !1 }),
            (n.renderSearchBar = n.renderSearchBar.bind(di(n))),
            (n.renderSearchTrigger = n.renderSearchTrigger.bind(di(n))),
            (n.renderBackButton = n.renderBackButton.bind(di(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && yi(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "renderSearchBar",
              value: function() {
                var e = this;
                return React.createElement(
                  "div",
                  {
                    className: "editor-searchBar",
                    onClick: function() {
                      return e.setState({ isSearching: !1 });
                    }
                  },
                  React.createElement("img", {
                    src: "/static/svg/arrow-down.svg"
                  }),
                  React.createElement(pi, {
                    focus: !0,
                    onBlur: function() {
                      return e.setState({ isSearching: !1 });
                    }
                  })
                );
              }
            },
            {
              key: "renderSearchTrigger",
              value: function() {
                var e = this;
                return React.createElement(
                  "div",
                  {
                    className: "editor-searchTrigger",
                    onClick: function() {
                      return e.setState({ isSearching: !0 });
                    }
                  },
                  React.createElement("img", { src: "/static/svg/search.svg" })
                );
              }
            },
            {
              key: "renderBackButton",
              value: function() {
                var e = this.props.content;
                return React.createElement(
                  "a",
                  {
                    href: "#",
                    className: "compact-editor-tab",
                    onClick: function(t) {
                      t.preventDefault(),
                        UIState.set({ collapsed: !0 }),
                        e && e.props.onClose && e.props.onClose();
                    }
                  },
                  "Back"
                );
              }
            },
            {
              key: "render",
              value: function() {
                if (UIState.collapsed)
                  return React.createElement(
                    "div",
                    {
                      id: "editor",
                      className: "main-menu-Tabs sub-menu-undefined"
                    },
                    this.props.footer,
                    React.createElement(
                      "div",
                      { className: "editor-main editor-main-compact" },
                      React.createElement(
                        "div",
                        { id: "sections-wrapper" },
                        React.createElement(
                          "div",
                          { id: "sections-content" },
                          React.createElement($a, { buttons: this.props.menu })
                        )
                      )
                    )
                  );
                var e =
                  !this.mainSelection ||
                  this.mainSelection !== UIState.mainSelection;
                this.mainSelection = UIState.mainSelection;
                var t = this.state.isSearching && !e,
                  n = this.props.content,
                  r = "main-menu-" + UIState.mainSelection.replace(" ", "-");
                return React.createElement(
                  "div",
                  { id: "editor", className: bi(r, { isSearching: t }) },
                  this.props.footer,
                  React.createElement(
                    "div",
                    { className: "editor-main editor-main-compact" },
                    React.createElement(
                      "div",
                      { id: "sections-wrapper" },
                      React.createElement(
                        "div",
                        { id: "sections-content" },
                        this.renderBackButton(),
                        n,
                        !t && this.renderSearchTrigger(),
                        t && this.renderSearchBar()
                      )
                    )
                  )
                );
              }
            }
          ]) && hi(n.prototype, r),
          o && hi(n, o),
          t
        );
      })();
    function gi(e) {
      return (gi =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function wi(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function _i(e, t) {
      return !t || ("object" !== gi(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Ci(e) {
      return (Ci = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ki(e, t) {
      return (ki =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Ri = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          _i(this, Ci(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ki(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "render",
            value: function() {
              var e = React.Children.toArray(this.props.children),
                t = {},
                n = [];
              for (var r in e) {
                var o = e[r];
                if (void 0 !== o)
                  (t[
                    o.props.label ||
                      console.error(
                        "Must provide a label for Editor children!"
                      ) ||
                      "unlabeled"
                  ] = o),
                    n.push(o);
              }
              var a = UIState.collapsed;
              UIState.compactingMainSelection &&
                (console.log(UIState.compactingMainSelection),
                UIState.compacting &&
                  (console.log(UIState.compactingMainSelection),
                  (UIState.mainSelection = UIState.compactingMainSelection),
                  (a = !1)),
                (UIState.compactingMainSelection = void 0)),
                UIState.mainSelection in t ||
                  (UIState.mainSelection =
                    this.props.defaultSelection || n[0].props.label);
              var i = t[UIState.mainSelection];
              i.props.children ||
                i.props.noView ||
                (i = React.createElement(mr, { pinned: i.props.pinned }, i));
              for (
                var s = [],
                  c = function(e) {
                    var t = n[e],
                      r = t.props.label || "unlabeled",
                      o = !(
                        r !== UIState.mainSelection ||
                        (a && UIState.compact)
                      );
                    UIState.mainSelection !== UIState.prevMainSelection &&
                      (o &&
                        UIState.subSelection &&
                        t.props.children &&
                        React.Children.toArray(t.props.children).map(function(
                          e
                        ) {
                          e.props &&
                            e.props.label === UIState.subSelection &&
                            e.props.onOpen &&
                            e.props.onOpen();
                        }),
                      o && t.props.onOpen
                        ? t.props.onOpen()
                        : r === UIState.prevMainSelection &&
                          t.props.onClose &&
                          t.props.onClose()),
                      s.push({
                        label: r,
                        onClick: function() {
                          UIState.set({ mainSelection: r, collapsed: !1 });
                        },
                        thumb:
                          t.props.thumb ||
                          "/static/svg/".concat(r.toLowerCase(), ".svg"),
                        selected: o,
                        tagLabel:
                          CK.Settings.newBreadcrumbs &&
                          !UIState.compact &&
                          t.type.hasNew &&
                          t.type.hasNew(t.props)
                            ? "NEW"
                            : void 0
                      });
                  },
                  l = 0;
                l < n.length;
                l++
              )
                c(l);
              return (
                (UIState.prevMainSelection = UIState.mainSelection),
                UIState.compact
                  ? React.createElement(vi, {
                      content: i,
                      menu: s,
                      footer: this.props.footer
                    })
                  : React.createElement(ai, {
                      content: i,
                      menu: s,
                      footer: this.props.footer
                    })
              );
            }
          }
        ]) && wi(n.prototype, r),
        o && wi(n, o),
        t
      );
    })();
    function Si(e) {
      return (Si =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Oi(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ei(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function xi(e, t, n) {
      return t && Ei(e.prototype, t), n && Ei(e, n), e;
    }
    function ji(e, t) {
      return !t || ("object" !== Si(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Pi(e) {
      return (Pi = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Mi(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      })),
        t && Ti(e, t);
    }
    function Ti(e, t) {
      return (Ti =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Ki = VN.classNames,
      Ii = (function(e) {
        function t() {
          return Oi(this, t), ji(this, Pi(t).apply(this, arguments));
        }
        return (
          Mi(t, React.Component),
          xi(t, [
            {
              key: "render",
              value: function() {
                var e = this,
                  t = React.Children.toArray(this.props.children),
                  n = [],
                  r = function(r) {
                    var o = t[r],
                      a = o.props.label,
                      i = a === e.props.selection || 1 === t.length,
                      s =
                        CK.Settings.newBreadcrumbs &&
                        o.type.hasNew &&
                        o.type.hasNew(o.props)
                          ? "NEW"
                          : void 0;
                    n.push(
                      React.createElement(Ni, {
                        hasFilter: i && o.props.hasFilter,
                        newTag: s,
                        hideArrow: 1 === t.length,
                        label: a,
                        key: a + "-header",
                        onOpen: function() {
                          return e.props.onClicks[r]();
                        },
                        onClose: function() {
                          return e.props.onClose();
                        },
                        selected: i,
                        hasClear: o.props.hasClear,
                        clear: o.props.clear,
                        slot: o.props.slot
                      })
                    ),
                      i &&
                        n.push(
                          React.createElement(Li, { key: a, selected: i }, o)
                        );
                  };
                for (var o in t) r(o);
                return React.createElement(
                  "div",
                  { className: "accordion" },
                  n
                );
              }
            }
          ]),
          t
        );
      })(),
      Ni = (function(e) {
        function t(e) {
          var n;
          return (
            Oi(this, t),
            ((n = ji(this, Pi(t).call(this, e))).state = { searchVisible: !1 }),
            n
          );
        }
        return (
          Mi(t, React.Component),
          xi(t, [
            {
              key: "toggle",
              value: function() {
                this.props.selected
                  ? (this.props.onClose(), this.setState({ searchVisible: !1 }))
                  : this.props.onOpen();
              }
            },
            {
              key: "renderClear",
              value: function() {
                var e = this.getClearSlot();
                return e
                  ? React.createElement(
                      "div",
                      { key: "headerButton", className: "clear-button" },
                      React.createElement(
                        "a",
                        {
                          onClick: function(t) {
                            t.stopPropagation(), e();
                          }
                        },
                        "clear"
                      )
                    )
                  : null;
              }
            },
            {
              key: "getClearSlot",
              value: function() {
                var e = this;
                if (this.props.clear) return this.props.clear;
                var t = this.props.slot || this.props.label.toLowerCase(),
                  n = [],
                  r =
                    (n =
                      !(t in CK.Options.slots) && t + "R" in CK.Options.slots
                        ? [t + "R", t + "L"]
                        : [t])[0] in CK.Settings.slots &&
                    CK.Settings.slots[[n[0]]].required,
                  o = !1;
                for (var a in n) o = o || CK.data.parts[n[a]];
                return !r && o
                  ? function() {
                      CK.clearSlots(n), CK.Events.emit("clearSlot", e);
                    }
                  : null;
              }
            },
            {
              key: "renderFilter",
              value: function() {
                var e = this;
                return React.createElement(
                  "div",
                  {
                    className: "accordion-header-searchTrigger",
                    onClick: function(t) {
                      t.stopPropagation(), e.toggleSearch();
                    }
                  },
                  React.createElement("img", { src: "/static/svg/search.svg" })
                );
              }
            },
            {
              key: "toggleSearch",
              value: function() {
                window.UIState && UIState.set({ searchFilter: "" }),
                  this.setState({ searchVisible: !this.state.searchVisible });
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.newTag
                    ? React.createElement(Ha, {
                        down: this.props.selected,
                        label: this.props.newTag
                      })
                    : React.createElement("div", { className: "arrow" }),
                  n = Ki("accordion-header", "clickable", {
                    open: this.props.selected
                  });
                return React.createElement(
                  "div",
                  { className: n },
                  React.createElement(
                    "div",
                    {
                      className: "accordion-header-labels",
                      onClick: function() {
                        e.toggle();
                      }
                    },
                    React.createElement(
                      "div",
                      { className: "accordion-header-label" },
                      this.props.label
                    ),
                    React.createElement(
                      "div",
                      { className: "accordion-header-right" },
                      this.props.hasFilter && this.renderFilter(),
                      this.props.hasClear && this.renderClear()
                    )
                  ),
                  React.createElement(
                    "div",
                    {
                      className: Ki("accordion-header-search", {
                        isVisible: this.state.searchVisible
                      })
                    },
                    React.createElement(pi, {
                      focus: !!this.state.searchVisible
                    })
                  ),
                  this.props.hideArrow ? null : t
                );
              }
            }
          ]),
          t
        );
      })(),
      Li = (function(e) {
        function t(e) {
          var n;
          return (
            Oi(this, t),
            ((n = ji(this, Pi(t).call(this, e))).state = {
              height: 0,
              hideOverflow: !1
            }),
            n
          );
        }
        return (
          Mi(t, React.Component),
          xi(t, [
            {
              key: "render",
              value: function() {
                var e = Ki("accordion-content", "clickable", {
                  open: this.props.selected
                });
                return React.createElement(
                  "div",
                  { className: e },
                  this.props.children
                );
              }
            }
          ]),
          t
        );
      })();
    function Ui(e) {
      return (Ui =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Di() {
      return (Di =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function zi(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ai(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Bi(e, t, n) {
      return t && Ai(e.prototype, t), n && Ai(e, n), e;
    }
    function Fi(e, t) {
      return !t || ("object" !== Ui(t) && "function" != typeof t) ? Vi(e) : t;
    }
    function Vi(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function qi(e) {
      return (qi = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Wi(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      })),
        t && Hi(e, t);
    }
    function Hi(e, t) {
      return (Hi =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Qi = VN.classNames,
      Xi = (function(e) {
        function t(e) {
          var n;
          return (
            zi(this, t),
            ((n = Fi(this, qi(t).call(this, e))).state = {
              maxOffset: 0,
              currentOffset: 0,
              carouselWidth: 0,
              paginateOverflow: !1
            }),
            (n._updateOverflow = function() {
              return n.updateOverflow();
            }),
            n
          );
        }
        return (
          Wi(t, React.Component),
          Bi(t, [
            {
              key: "componentDidUpdate",
              value: function() {
                this.updateOverflow();
              }
            },
            {
              key: "componentDidMount",
              value: function() {
                var e = this;
                this.updateOverflow(),
                  window.addEventListener("resize", this._updateOverflow),
                  (this.swipe = ReactDOM.findDOMNode(this.container));
                var t = 0,
                  n = Math.round(Math.max(80, (screen.height / 100) * 20));
                this.swipe.addEventListener(
                  "touchstart",
                  function(e) {
                    t = e.changedTouches[0].screenY;
                  },
                  !1
                ),
                  this.swipe.addEventListener(
                    "touchend",
                    function(r) {
                      r.changedTouches[0].screenY - t > n &&
                        (UIState.set({ collapsed: !0 }),
                        e.props.onClose && e.props.onClose()),
                        (t = 0),
                        0;
                    },
                    !1
                  );
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                window.removeEventListener("resize", this._updateOverflow);
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = React.Children.toArray(this.props.children),
                  n = [],
                  r = React.createElement("div", null),
                  o = function(o) {
                    var a = t[o],
                      i = a.props.name || a.props.label,
                      s = e.props.selection === i;
                    n.push(
                      React.createElement(
                        Gi,
                        Di({}, a.props, {
                          label: i,
                          key: i + "-header",
                          onOpen: function() {
                            return e.props.onClicks[o]();
                          },
                          onClose: a.onClose,
                          selected: s,
                          overflowTabWidths:
                            e.state.paginateOverflow &&
                            e.props.overflowTabWidths
                        })
                      )
                    ),
                      s &&
                        (r = React.createElement(
                          Yi,
                          { key: r.key, selected: s },
                          a
                        ));
                  };
                for (var a in t) o(a);
                var i = Qi("tab-carousel-btn", "btn-left", {
                    disabled: 0 == this.state.currentOffset
                  }),
                  s =
                    this.state.paginateOverflow && !UIState.compact
                      ? React.createElement(
                          "a",
                          {
                            className: i,
                            onClick: function() {
                              e.paginateLeft();
                            }
                          },
                          React.createElement(
                            "div",
                            { className: "arrow arrow-left" },
                            "<"
                          )
                        )
                      : "",
                  c = Qi("tab-carousel-btn", "btn-right", {
                    disabled: this.state.currentOffset == this.state.maxOffset
                  }),
                  l =
                    this.state.paginateOverflow && !UIState.compact
                      ? React.createElement(
                          "a",
                          {
                            className: c,
                            onClick: function() {
                              return e.paginateRight();
                            }
                          },
                          React.createElement(
                            "div",
                            { className: "arrow arrow-right" },
                            ">"
                          )
                        )
                      : "",
                  u = { left: this.state.currentOffset },
                  p = Qi("tab-carousel-group", {
                    overflowing: this.state.paginateOverflow,
                    "no-overflow": !this.state.paginateOverflow
                  });
                return React.createElement(
                  "div",
                  { className: p },
                  React.createElement(
                    "div",
                    {
                      className: "tab-carousel-wrapper",
                      ref: function(t) {
                        e.container = t;
                      }
                    },
                    s,
                    React.createElement(
                      "div",
                      { className: "tab-carousel" },
                      React.createElement(
                        "div",
                        { className: "tabs-list", style: u },
                        n
                      )
                    ),
                    l
                  ),
                  r
                );
              }
            },
            {
              key: "updateOverflow",
              value: function() {
                var e = this.state && this.state.paginateOverflow,
                  t = document.querySelector(".tab-carousel-wrapper")
                    .offsetWidth,
                  n = document.querySelector(".tabs-list").scrollWidth - 4;
                t < n && !e
                  ? this.setState({ paginateOverflow: !0 })
                  : t >= n && e && this.setState({ paginateOverflow: !1 });
                var r = document.querySelector(".tab-carousel").offsetWidth,
                  o = r - document.querySelector(".tabs-list").scrollWidth;
                this.state.maxOffset != o && this.setState({ maxOffset: o }),
                  this.state.currentOffset < this.state.maxOffset &&
                    this.setState({ currentOffset: o }),
                  this.state.carouselWidth !== r &&
                    this.setState({ carouselWidth: r });
              }
            },
            {
              key: "paginateLeft",
              value: function() {
                var e =
                  this.state.currentOffset + 0.75 * this.state.carouselWidth;
                e > 0 && (e = 0), this.setState({ currentOffset: e });
              }
            },
            {
              key: "paginateRight",
              value: function() {
                var e =
                  this.state.currentOffset - 0.75 * this.state.carouselWidth;
                e < this.state.maxOffset && (e = this.state.maxOffset),
                  this.setState({ currentOffset: e });
              }
            }
          ]),
          t
        );
      })(),
      Gi = (function(e) {
        function t() {
          return zi(this, t), Fi(this, qi(t).apply(this, arguments));
        }
        return (
          Wi(t, React.Component),
          Bi(t, [
            {
              key: "toggleOpen",
              value: function() {
                !this.props.selected &&
                  this.props.onOpen &&
                  this.props.onOpen();
              }
            },
            {
              key: "enforceHalfVisibleTabs",
              value: function(e) {
                var t = window.innerWidth,
                  n = document.getElementsByClassName("tab-carousel")[0]
                    .offsetWidth;
                n < t && (t = n);
                var r = Math.floor(t / e),
                  o = (t % e) - (10 + e / 2);
                o <= 0 &&
                  r ==
                    document.getElementsByClassName("tab-carousel-header")
                      .length &&
                  (o += e);
                var a = o / (r + 0.5);
                return Math.round(e + a);
              }
            },
            {
              key: "render",
              value: function() {
                var e,
                  t = this;
                this.props.injectedClass &&
                  (e = this.props.injectedClass
                    .replace(" ", "-")
                    .replace(/ *\([^)]*\) */g, "")
                    .toLowerCase());
                var n,
                  r = Qi(
                    "tab-carousel-header",
                    { open: this.props.selected },
                    "sprite-" + this.props.label.replace(" ", "-"),
                    e
                  ),
                  o = Qi(
                    { open: this.props.selected },
                    "sprite-" + this.props.label.replace(" ", "-"),
                    e
                  ),
                  a = this.props.overflowTabWidths
                    ? this.enforceHalfVisibleTabs(this.props.overflowTabWidths)
                    : "";
                if (this.props.useSVG) {
                  var i = e
                    ? e.replace("-", "_")
                    : "icon_" +
                      this.props.label
                        .replace(/ *\([^)]*\) */g, "")
                        .replace(" ", "_")
                        .toLowerCase();
                  n = React.createElement(
                    "svg",
                    {
                      className: o,
                      "aria-labelledby": "title desc",
                      role: "Tab"
                    },
                    React.createElement("use", { xlinkHref: "#" + i })
                  );
                } else
                  n = this.props.thumb
                    ? React.createElement("img", {
                        className: o,
                        width: this.props.thumbSize
                          ? this.props.thumbSize[0]
                          : "",
                        src: this.props.thumb
                      })
                    : React.createElement(
                        "span",
                        { className: o },
                        this.props.label
                      );
                return React.createElement(
                  "div",
                  {
                    className: r,
                    style: { width: a },
                    onClick: function() {
                      return t.toggleOpen();
                    },
                    title: this.props.label
                  },
                  n
                );
              }
            }
          ]),
          t
        );
      })(),
      Yi = (function(e) {
        function t(e) {
          var n;
          return (
            zi(this, t),
            ((n = Fi(this, qi(t).call(this, e))).state = {
              height: 0,
              hideOverflow: !1
            }),
            (n.updateMaxHeight = n.updateMaxHeight.bind(Vi(n))),
            n
          );
        }
        return (
          Wi(t, React.Component),
          Bi(t, [
            {
              key: "render",
              value: function() {
                var e = this,
                  t = Qi("tabbed-content", { open: this.props.selected });
                return React.createElement(
                  "div",
                  {
                    className: t,
                    ref: function(t) {
                      return (e._el = t);
                    }
                  },
                  this.props.children
                );
              }
            },
            {
              key: "componentDidUpdate",
              value: function() {
                this.updateMaxHeight();
              }
            },
            {
              key: "updateMaxHeight",
              value: function() {
                var e = this.state.height,
                  t = this._el.firstElementChild.offsetHeight;
                t !== e && this.setState({ height: t });
              }
            }
          ]),
          t
        );
      })();
    function Zi(e) {
      return (Zi =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ji(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function $i(e, t) {
      return !t || ("object" !== Zi(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function es(e) {
      return (es = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ts(e, t) {
      return (ts =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ns = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          $i(this, es(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ts(e, t);
        })(t, er),
        (n = t),
        (o = [
          {
            key: "hasNew",
            value: function(e) {
              var n = e.label + "_" + UIState.genreFilter;
              if (!(n in t.newCache)) {
                t.newCache[n] = !1;
                var r = e.children;
                for (var o in r) {
                  var a = r[o];
                  if (a && a.type && a.type.hasNew && a.type.hasNew(a.props)) {
                    t.newCache[n] = !0;
                    break;
                  }
                }
              }
              return t.newCache[n];
            }
          }
        ]),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              this.props.onOpen && this.props.onOpen();
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              this.props.onClose && this.props.onClose();
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.props.tabbed || UIState.compact,
                t = this.constructor.getContent(this.props);
              CK.LazyImageLoader.loadThumbnails(this.getChildThumbnails(t));
              var n = e
                  ? UIState.subSelection || t[0].props.label
                  : UIState.subSelection || this.props.defaultSelection,
                r = t.map(function(e) {
                  return function() {
                    return UIState.changeSubSelection(e.props.label);
                  };
                });
              return e
                ? React.createElement(
                    Xi,
                    { selection: n, onClicks: r, onClose: this.props.onClose },
                    t
                  )
                : React.createElement(
                    Ii,
                    {
                      selection: n,
                      onClicks: r,
                      onClose: function() {
                        return UIState.changeSubSelection();
                      }
                    },
                    t
                  );
            }
          },
          {
            key: "getChildThumbnails",
            value: function(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              for (var n in e) {
                var r = e[n];
                r.type.getThumbnails &&
                  (t[r.props.label] = r.type.getThumbnails(r.props)),
                  r.children && this.getChildThumbnails(r.children, t);
              }
              return t;
            }
          }
        ]) && Ji(n.prototype, r),
        o && Ji(n, o),
        t
      );
    })();
    function rs(e) {
      return (rs =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function os(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function as(e) {
      return (as = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function is(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function ss(e, t) {
      return (ss =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    (ns.hasLoadedCache = {}), (ns.newCache = {});
    var cs = VN.classNames,
      ls = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = as(t).call(this, e)) ||
              ("object" !== rs(o) && "function" != typeof o)
                ? is(r)
                : o).onChange = n.onChange.bind(is(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ss(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "shouldComponentUpdate",
              value: function(e) {
                return (
                  e.value !== this.props.value &&
                    (this.inputRef.value = e.value),
                  !0
                );
              }
            },
            {
              key: "onChange",
              value: function(e) {
                var t = this;
                e.preventDefault();
                var n = parseFloat(e.target.value);
                this.props.onChange(n),
                  this.slidingTimeout && clearTimeout(this.slidingTimeout),
                  (this.slidingTimeout = setTimeout(function() {
                    t.props.onAfterChange && t.props.onAfterChange(n);
                  }, 500));
              }
            },
            {
              key: "renderMark",
              value: function(e) {
                return React.createElement("div", {
                  className: "nativeSlider-mark",
                  style: { left: "".concat(e, "%") }
                });
              }
            },
            {
              key: "render",
              value: function() {
                var e,
                  t = this,
                  n = void 0 !== this.props.min ? this.props.min : 0,
                  r = void 0 !== this.props.max ? this.props.max : 1;
                return (
                  void 0 !== this.props.mark &&
                    (e = 50 + (100 * this.props.mark) / 2.2),
                  React.createElement(
                    "div",
                    {
                      className: "nativeSlider",
                      "data-warning": this.props.warningXL
                    },
                    React.createElement("input", {
                      className: cs("nativeSlider-input", {
                        "nativeSlider-input--small": this.props.small
                      }),
                      type: "range",
                      min: n,
                      max: r,
                      step: this.props.step || 0.01,
                      defaultValue: this.props.value,
                      onChange: function(e) {
                        return t.onChange(e);
                      },
                      ref: function(e) {
                        return (t.inputRef = e);
                      }
                    }),
                    e && this.renderMark(e)
                  )
                );
              }
            }
          ]) && os(n.prototype, r),
          o && os(n, o),
          t
        );
      })();
    function us(e) {
      return (us =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ps(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function fs(e, t) {
      return !t || ("object" !== us(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function hs(e) {
      return (hs = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ms(e, t) {
      return (ms =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ds = VN.classNames,
      ys = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = fs(this, hs(t).call(this, e))).sliderName =
              e.name || e.label.toLowerCase()),
            (n.label = e.label || n.sliderName),
            (n.subLabel =
              e.subLabel ||
              (e.valueLabels
                ? e.valueLabels.find(function(t, n) {
                    return n % 2 == 0 && e.valueLabels[n + 1] > value;
                  })
                : void 0)),
            (n.name = n.sliderName || n.label.toLowerCase()),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ms(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "onChange",
              value: function(e) {
                CK.previewSlider(this.name, e),
                  this.props.onSliderUpdate &&
                    this.props.onSliderUpdate(this.name, e);
              }
            },
            {
              key: "onAfterChange",
              value: function(e) {
                CK.display.requestOcclusionRefresh(),
                  this.props.onMouseUp && this.props.onMouseUp();
              }
            },
            {
              key: "renderMarks",
              value: function() {
                var e = this;
                return React.createElement(
                  "div",
                  { className: "slider-marks" },
                  this.props.marks.map(function(t) {
                    return React.createElement(
                      "div",
                      {
                        className: ds("slider-marks-mark", {
                          "slider-marks-mark--red": t.isRed
                        }),
                        key: t.label,
                        onClick: function() {
                          return e.onChange(t.value);
                        }
                      },
                      t.label
                    );
                  })
                );
              }
            },
            {
              key: "render",
              value: function() {
                var e = this;
                if (CK.data.hideSliders[this.name]) return null;
                var t = CK.getSlider(this.name) || 0;
                return React.createElement(
                  "div",
                  {
                    className: ds("slider-wrapper", "slider-container", {
                      "slider-container--small": this.props.small
                    })
                  },
                  React.createElement("a", { className: "label" }, this.label),
                  this.subLabel &&
                    React.createElement(
                      "a",
                      { className: "sub-label" },
                      this.subLabel
                    ),
                  React.createElement(
                    "div",
                    { className: "slider-row" },
                    React.createElement(ls, {
                      value: t,
                      max: this.props.max,
                      onChange: function(t) {
                        return e.onChange(t);
                      },
                      onAfterChange: function(t) {
                        return e.onAfterChange(t);
                      },
                      small: this.props.small,
                      warningXL: !this.props.limit && this.props.limitText
                    }),
                    this.props.limit &&
                      React.createElement(
                        "div",
                        {
                          className: "slider-limitArea",
                          style: { width: 100 * (1 - this.props.limit) + "%" }
                        },
                        this.props.limitText
                      )
                  ),
                  this.props.marks && this.renderMarks()
                );
              }
            }
          ]) && ps(n.prototype, r),
          o && ps(n, o),
          t
        );
      })();
    function bs(e) {
      return (bs =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function vs(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function gs(e) {
      return (gs = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ws(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function _s(e, t) {
      return (_s =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Cs = (function(e) {
      function t(e) {
        var n, r, o;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          (r = this),
          ((n =
            !(o = gs(t).call(this, e)) ||
            ("object" !== bs(o) && "function" != typeof o)
              ? ws(r)
              : o).state = { latestUpdatedSlider: null }),
          (n.update = n.update.bind(ws(n))),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && _s(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "update",
            value: function(e, t) {
              this.setState({ latestUpdatedSlider: { name: e, value: t } });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this;
              if (this.state.latestUpdatedSlider) {
                var t =
                  this.props.sliders.reduce(function(e, t) {
                    return e + (CK.getSlider(t[1]) || 0);
                  }, 0) - this.props.maxCombinedValue;
                if (t > 0) {
                  var n = this.props.sliders
                      .filter(function(t) {
                        return t[1] !== e.state.latestUpdatedSlider.name;
                      })
                      .filter(function(e) {
                        return CK.getSlider(e[1]) > 0;
                      }),
                    r = t / n.length,
                    o = Math.round(100 * r) / 100;
                  n.forEach(function(e) {
                    var n,
                      r = e[1],
                      a = CK.getSlider(r);
                    a >= o ? ((n = a - o), (t -= o)) : ((n = 0), (t -= a)),
                      CK.previewSlider(r, n);
                  }),
                    t > 0 &&
                      n.forEach(function(e) {
                        var n = e[1],
                          r = CK.getSlider(n);
                        r >= t && (CK.previewSlider(n, r - t), (t = 0));
                      });
                }
              }
              return this.props.sliders.map(function(t) {
                return React.createElement(ys, {
                  key: t[1],
                  label: t[0],
                  name: t[1],
                  onSliderUpdate: function(t, n) {
                    return e.update(t, n);
                  }
                });
              });
            }
          }
        ]) && vs(n.prototype, r),
        o && vs(n, o),
        t
      );
    })();
    function ks(e) {
      return (ks =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Rs(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ss(e, t) {
      return !t || ("object" !== ks(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Os(e) {
      return (Os = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Es(e, t) {
      return (Es =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var xs = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Ss(this, Os(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Es(e, t);
        })(t, Ra),
        (n = t),
        (r = [
          {
            key: "render",
            value: function() {
              var e = CK.data.getAvailablePoses(),
                t = [];
              for (var n in e) t.push(e[n]);
              t.sort(function(e, t) {
                return e.display_order < t.display_order ? -1 : 1;
              });
              var r = Ra.getOptions({
                configs: t,
                label: "Pose",
                ignoreGenre: !0,
                showSelected: !0
              });
              return (
                CK.hasTransforms()
                  ? r.map(function(e) {
                      e.onClick = function() {
                        CKUI.promptClearTransforms({
                          poses: e.originalData.poses
                        });
                      };
                    })
                  : r.map(function(e) {
                      e.onClick = function() {
                        CK.tweak({ poses: e.originalData.poses });
                      };
                    }),
                React.createElement(Qn, { options: r, key: "Poses" })
              );
            }
          }
        ]) && Rs(n.prototype, r),
        o && Rs(n, o),
        t
      );
    })();
    function js(e) {
      return (js =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ps(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ms(e, t) {
      return !t || ("object" !== js(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Ts(e) {
      return (Ts = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Ks(e, t) {
      return (Ks =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Is = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Ms(this, Ts(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Ks(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                return 2 != CK.Settings.characterCount
                  ? null
                  : React.createElement(
                      "div",
                      { style: { position: "absolute", left: "35%", top: 5 } },
                      React.createElement("img", {
                        src: "/static/img/couple.png",
                        style: {
                          background: 0 === CK.characterID ? "#33c8c8" : "none"
                        },
                        onClick: function() {
                          return CK.setCharacter(0);
                        }
                      }),
                      React.createElement("img", {
                        src: "/static/img/couple.png",
                        style: {
                          background: 1 === CK.characterID ? "#33c8c8" : "none"
                        },
                        onClick: function() {
                          return CK.setCharacter(1);
                        }
                      })
                    );
              }
            }
          ]) && Ps(n.prototype, r),
          o && Ps(n, o),
          t
        );
      })(),
      Ns = n(42);
    function Ls(e) {
      return (Ls =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Us(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ds(e) {
      return (Ds = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function zs(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function As(e, t) {
      return (As =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Bs = (function(e) {
      function t(e) {
        var n, r, o;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          (r = this),
          ((n =
            !(o = Ds(t).call(this, e)) ||
            ("object" !== Ls(o) && "function" != typeof o)
              ? zs(r)
              : o).getContent = n.getContent.bind(zs(n))),
          (n.copyLink = n.copyLink.bind(zs(n))),
          (n.openLink = n.openLink.bind(zs(n))),
          (n.state = { copied: !1 }),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && As(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "openLink",
            value: function() {
              var e = CK.saves.getShareURL();
              window.open(e, "_blank").focus();
            }
          },
          {
            key: "copyLink",
            value: function() {
              var e = this,
                t = CK.saves.getShareURL();
              VN.clipboard.writeText(t),
                this.setState({ copied: !0 }),
                setTimeout(function() {
                  e.setState({ copied: !1 });
                }, 800);
            }
          },
          {
            key: "getContent",
            value: function() {
              var e = this,
                t = CK.saves.sharing,
                n = CK.saves.getShareURL();
              return t
                ? React.createElement(
                    "div",
                    { className: "shareUrl-form" },
                    React.createElement(
                      "div",
                      { className: "shareUrl-form-value" },
                      "Saving",
                      React.createElement("img", {
                        src: "/static/svg/spinner-white.svg",
                        className: "svg-spinner shareUrl-spinner"
                      })
                    )
                  )
                : n
                ? React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "div",
                      { className: "shareUrl-header" },
                      React.createElement(
                        "div",
                        {
                          className: "overlay-x",
                          onClick: function() {
                            return e.props.onClose();
                          }
                        },
                        "Ã—"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "shareUrl-form" },
                      React.createElement(
                        "div",
                        { className: "shareUrl-form-value" },
                        n
                      ),
                      React.createElement(
                        "div",
                        { className: "shareUrl-form-buttons" },
                        React.createElement(Ns.a, {
                          className: "shareUrl-button",
                          label: this.state.copied ? "Copied!" : "Copy Link",
                          icon: "/static/svg/copy.svg",
                          onClick: this.copyLink
                        })
                      )
                    )
                  )
                : CK.User.loggedIn
                ? "Error while sharing. Try again or refresh the page."
                : "Could not share. Try logging in";
            }
          },
          {
            key: "render",
            value: function() {
              return React.createElement(
                "div",
                { className: "share-url-wrapper" },
                React.createElement(
                  "div",
                  { className: "share-url-content" },
                  this.getContent()
                )
              );
            }
          }
        ]) && Us(n.prototype, r),
        o && Us(n, o),
        t
      );
    })();
    function Fs(e) {
      return (Fs =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Vs(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function qs(e, t) {
      return !t || ("object" !== Fs(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Ws(e) {
      return (Ws = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Hs(e, t) {
      return (Hs =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Qs = VN.classNames,
      Xs = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            qs(this, Ws(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Hs(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.config,
                  n = this.props.selected,
                  r = t.meta.character_name || CK.Settings.defaultCharacterName;
                return React.createElement(
                  "div",
                  {
                    className: Qs("characterThumb", { selected: n }),
                    onClick: this.props.onClick,
                    onDoubleClick: this.props.onDoubleClick
                  },
                  this.props.onRemove
                    ? React.createElement(
                        "div",
                        {
                          className: "characterThumb-remove",
                          onClick: this.props.onRemove
                        },
                        React.createElement("img", {
                          src: "/static/svg/trash.svg",
                          alt: ""
                        })
                      )
                    : null,
                  React.createElement("img", {
                    className: "characterThumb-img",
                    src: t.meta.snapshot,
                    onError: function(e) {
                      e.target.src = "/static/img/load_character_notfound.png";
                    }
                  }),
                  React.createElement(
                    "div",
                    {
                      className: "characterThumb-name",
                      onClick: this.props.onRename
                        ? function() {
                            n && e.props.onRename();
                          }
                        : void 0
                    },
                    r,
                    this.props.onRename
                      ? React.createElement(
                          "div",
                          { className: "characterThumb-rename" },
                          React.createElement("img", {
                            src: "/static/svg/pencil-white.svg",
                            alt: ""
                          })
                        )
                      : null
                  )
                );
              }
            }
          ]) && Vs(n.prototype, r),
          o && Vs(n, o),
          t
        );
      })();
    function Gs(e) {
      return (Gs =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ys(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Zs(e, t) {
      return !t || ("object" !== Gs(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Js(e) {
      return (Js = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function $s(e, t) {
      return ($s =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ec = VN.classNames,
      tc = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = Zs(this, Js(t).call(this, e))).state = {
              sortBy: CK.UserSaves.SORTING.alphabetical,
              selected: void 0,
              searchString: "",
              sortVisible: !1,
              searchVisible: !1,
              group: "saves"
            }),
            (n.refresh = function() {
              n.forceUpdate();
            }),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && $s(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "componentDidMount",
              value: function() {
                CK.Events.on("myCharactersChanged", this.refresh);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                CK.Events.off("myCharactersChanged", this.refresh);
              }
            },
            {
              key: "open",
              value: function() {
                var e = this.state.selected;
                e &&
                  ("purchases" === this.state.group || e.old
                    ? CKUI.promptSave().then(function(t) {
                        t && CK.saves.openCopy(e);
                      })
                    : CKUI.promptSave().then(function(t) {
                        t && CK.saves.open(e);
                      }));
              }
            },
            {
              key: "copy",
              value: function() {
                var e = this,
                  t = this.state.selected,
                  n = window.prompt(
                    "Name character copy",
                    t.meta.character_name + " Copy"
                  );
                n &&
                  "" !== n &&
                  CK.saves.copy(this.state.selected, n).then(function(t) {
                    e.setState({ selected: t });
                  });
              }
            },
            {
              key: "openCopy",
              value: function() {
                var e = this.state.selected;
                e &&
                  CKUI.promptSave().then(function(t) {
                    t && CK.saves.openCopy(e);
                  });
              }
            },
            {
              key: "rename",
              value: function() {
                var e = this;
                if (this.state.selected) {
                  var t = this.state.selected,
                    n = CK.sanitizeName(t.meta.character_name),
                    r = void 0;
                  n === CK.Settings.defaultCharacterName &&
                    ((n = void 0), (r = CK.Settings.defaultCharacterName)),
                    Overlay.promptTextInput(
                      "Character Name",
                      n,
                      r,
                      CK.sanitizeName
                    ).then(function(n) {
                      n &&
                        n !== t.meta.character_name &&
                        (CK.saves.rename(t, n).catch(function(e) {
                          "not_logged_in" === e
                            ? Overlay.alert(
                                "You're not logged in anymore!",
                                "Could not rename",
                                function() {
                                  return CK.User.logOutSilent();
                                }
                              )
                            : Overlay.alert(
                                "Something went wrong renaming character"
                              );
                        }),
                        e.setState({ selected: null }));
                    });
                }
              }
            },
            {
              key: "remove",
              value: function() {
                var e = this;
                this.state.selected &&
                  Overlay.prompt(
                    "Are you sure you want to delete " +
                      this.state.selected.meta.character_name +
                      "?",
                    [
                      {
                        label: "Delete",
                        onClick: function() {
                          Overlay.hidePrompt(),
                            CK.saves
                              .remove(e.state.selected)
                              .catch(function(e) {
                                "not_logged_in" === e
                                  ? Overlay.alert(
                                      "You're not logged in anymore!",
                                      "Could not delete",
                                      function() {
                                        return CK.User.logOutSilent();
                                      }
                                    )
                                  : Overlay.alert(
                                      "Something went wrong deleting character"
                                    );
                              }),
                            e.setState({ selected: null });
                        }
                      },
                      {
                        label: "Cancel",
                        cancel: !0,
                        onClick: function() {
                          return Overlay.hidePrompt();
                        }
                      }
                    ],
                    "Delete?"
                  );
              }
            },
            {
              key: "toggleSort",
              value: function() {
                this.setState({ sortVisible: !this.state.sortVisible });
              }
            },
            {
              key: "toggleSearch",
              value: function() {
                this.setState({ searchVisible: !this.state.searchVisible }),
                  !this.state.searchVisible &&
                    this.inputRef &&
                    this.inputRef.focus();
              }
            },
            {
              key: "sortBy",
              value: function(e) {
                this.setState({ sortVisible: !1, sortBy: e });
              }
            },
            {
              key: "renderSort",
              value: function() {
                var e = this;
                return React.createElement(
                  "div",
                  {
                    className: ec("characterBrowser-header-sort-popup", {
                      isVisible: this.state.sortVisible
                    })
                  },
                  React.createElement(
                    "div",
                    {
                      className: ec("characterBrowser-header-sort-item", {
                        isActive:
                          this.state.sortBy === CK.UserSaves.SORTING.saveDate
                      }),
                      onClick: function() {
                        return e.sortBy(CK.UserSaves.SORTING.saveDate);
                      }
                    },
                    "Modified",
                    React.createElement("img", { src: "/static/svg/check.svg" })
                  ),
                  React.createElement(
                    "div",
                    {
                      className: ec("characterBrowser-header-sort-item", {
                        isActive:
                          this.state.sortBy === CK.UserSaves.SORTING.createdDate
                      }),
                      onClick: function() {
                        return e.sortBy(CK.UserSaves.SORTING.createdDate);
                      }
                    },
                    "Created",
                    React.createElement("img", { src: "/static/svg/check.svg" })
                  ),
                  React.createElement(
                    "div",
                    {
                      className: ec("characterBrowser-header-sort-item", {
                        isActive:
                          this.state.sortBy ===
                          CK.UserSaves.SORTING.alphabetical
                      }),
                      onClick: function() {
                        return e.sortBy(CK.UserSaves.SORTING.alphabetical);
                      }
                    },
                    "Name",
                    React.createElement("img", { src: "/static/svg/check.svg" })
                  )
                );
              }
            },
            {
              key: "renderHeader",
              value: function() {
                var e = this;
                return React.createElement(
                  React.Fragment,
                  null,
                  React.createElement("input", {
                    type: "text",
                    value: this.state.searchString,
                    placeholder: "Filter",
                    ref: function(t) {
                      return (e.inputRef = t);
                    },
                    onChange: function(t) {
                      return e.setState({ searchString: t.target.value });
                    },
                    className: ec("characterBrowser-header-searchInput", {
                      isVisible: this.state.searchVisible
                    })
                  }),
                  React.createElement(
                    "div",
                    {
                      className:
                        "characterBrowser-header-icon characterBrowser-header-search",
                      onClick: function() {
                        return e.toggleSearch();
                      }
                    },
                    React.createElement("img", {
                      src: "/static/svg/search.svg"
                    })
                  ),
                  React.createElement(
                    "div",
                    {
                      className:
                        "characterBrowser-header-icon characterBrowser-header-sort",
                      onClick: function() {
                        return e.toggleSort();
                      }
                    },
                    React.createElement("img", {
                      src: "/static/svg/sort-az.svg"
                    })
                  ),
                  this.renderSort()
                );
              }
            },
            {
              key: "renderFooter",
              value: function() {
                var e = this,
                  t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return React.createElement(
                  React.Fragment,
                  null,
                  React.createElement(Ns.a, {
                    label: "Open",
                    onClick: function() {
                      return e.open();
                    },
                    disabled: !t
                  }),
                  React.createElement(Ns.a, {
                    label: "Open Copy",
                    onClick: function() {
                      return e.openCopy();
                    },
                    disabled: !n
                  }),
                  React.createElement(Ns.a, {
                    className: "button-grey",
                    label: "Cancel",
                    onClick: function() {
                      return Overlay.hideOverlay();
                    }
                  })
                );
              }
            },
            {
              key: "selectGroup",
              value: function(e) {
                this.setState({ group: e, selected: void 0 });
              }
            },
            {
              key: "renderTitle",
              value: function() {
                var e = this;
                return React.createElement(
                  "div",
                  { className: "characterBrowser-tabs" },
                  React.createElement(
                    "div",
                    {
                      className: ec("characterBrowser-tabs-tab", {
                        isActive: "saves" === this.state.group
                      }),
                      onClick: function() {
                        return e.selectGroup("saves");
                      }
                    },
                    "Saves"
                  ),
                  React.createElement(
                    "div",
                    {
                      className: ec("characterBrowser-tabs-tab", {
                        isActive: "purchases" === this.state.group
                      }),
                      onClick: function() {
                        return e.selectGroup("purchases");
                      }
                    },
                    "Purchases"
                  )
                );
              }
            },
            {
              key: "render",
              value: function() {
                var e,
                  t = this,
                  n = CK.saves.getOrderedConfigs(
                    this.state.sortBy,
                    this.state.searchString,
                    this.state.group
                  ),
                  r = "saves" === this.state.group,
                  o = !0,
                  a = !1;
                return (
                  CK.saves.isLoading(this.state.group)
                    ? (e = React.createElement("img", {
                        src: "/static/svg/spinner.svg",
                        className: "svg-spinner"
                      }))
                    : n
                    ? 0 === n.length && this.state.searchString.length > 0
                      ? (e = React.createElement(
                          "div",
                          null,
                          "No search results"
                        ))
                      : ((o = !this.state.selected),
                        (a =
                          this.state.selected &&
                          (this.state.selected.old ||
                            !this.state.selected.config_id)),
                        (e = n.map(function(e, n) {
                          return React.createElement(Xs, {
                            key: t.state.group + "_" + n + "_" + e.config_id,
                            selected: e === t.state.selected,
                            config: e,
                            onClick: function() {
                              return t.setState({ selected: e });
                            },
                            onDoubleClick: function() {
                              t.setState({ selected: e }), t.open();
                            },
                            onRemove: r
                              ? function() {
                                  return t.remove();
                                }
                              : void 0,
                            onRename:
                              !a && r
                                ? function() {
                                    return t.rename();
                                  }
                                : void 0
                          });
                        })))
                    : (e = React.createElement(
                        "div",
                        null,
                        r
                          ? "No saved characters found."
                          : "No Purchased Characters found."
                      )),
                  Overlay.getModal(
                    React.createElement(
                      "div",
                      { className: "characterBrowser-thumbnails" },
                      e
                    ),
                    this.renderTitle(),
                    this.renderHeader(),
                    this.renderFooter(!a && r && !o, !o),
                    "characterBrowser"
                  )
                );
              }
            }
          ]) && Ys(n.prototype, r),
          o && Ys(n, o),
          t
        );
      })();
    function nc(e) {
      return (nc =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function rc(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function oc(e, t) {
      return !t || ("object" !== nc(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function ac(e) {
      return (ac = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ic(e, t) {
      return (ic =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var sc = VN.classNames,
      cc = "/static/svg/spinner.svg",
      lc = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = oc(this, ac(t).call(this, e))).state = {
              sharePopup: !1,
              isMenuVisible: !1
            }),
            (n.closeMenu = function() {
              n.setState({ isMenuVisible: !1 });
            }),
            (n.refresh = function() {
              n.forceUpdate();
            }),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ic(e, t);
          })(t, React.Component),
          (n = t),
          (o = [
            {
              key: "showBrowser",
              value: function() {
                UIState.set({ showOverlay: React.createElement(tc, null) });
              }
            }
          ]),
          (r = [
            {
              key: "componentDidMount",
              value: function() {
                CK.Events.on("myCharactersChanged", this.refresh),
                  CK.Events.on("finishedLoggingIn", this.closeMenu);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                CK.Events.off("myCharactersChanged", this.refresh),
                  CK.Events.off("finishedLoggingIn", this.closeMenu);
              }
            },
            {
              key: "promptName",
              value: function() {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = CK.character.getName(),
                  n = void 0;
                return (
                  t === CK.Settings.defaultCharacterName
                    ? ((t = void 0), (n = CK.Settings.defaultCharacterName))
                    : e && (t += " Copy"),
                  _t.a
                    .promptTextInput("Character Name", t, n, CK.sanitizeName)
                    .then(function(e) {
                      return e && CK.tweak({ meta: { character_name: e } }), e;
                    })
                );
              }
            },
            {
              key: "saveAsClicked",
              value: function() {
                var e = this;
                !CK.saves.activeSaving() &&
                  CK.saves.activeConfig &&
                  this.promptName(!0).then(function(t) {
                    t &&
                      (CK.saves.saveAs().catch(function(t) {
                        return e.handleSaveError(t);
                      }),
                      e.forceUpdate());
                  });
              }
            },
            {
              key: "saveClicked",
              value: function() {
                var e = this;
                if (!CK.saves.activeSaving()) {
                  var t = function() {
                    return CK.saves.save().catch(function(t) {
                      return e.handleSaveError(t);
                    });
                  };
                  CK.User.loggedIn ? t() : _t.a.showLogin(t),
                    this.forceUpdate();
                }
              }
            },
            {
              key: "handleSaveError",
              value: function(e) {
                "not_logged_in" === e
                  ? this.notLoggedIn()
                  : _t.a.alert(
                      "Something went wrong trying to save ".concat(
                        CK.character.getName() ||
                          CK.Settings.defaultCharacterName,
                        ". Try refreshing the page."
                      )
                    );
              }
            },
            {
              key: "notLoggedIn",
              value: function() {
                _t.a.alert(
                  "You're not logged in anymore!",
                  "Error",
                  function() {
                    return CK.User.logOutSilent();
                  }
                );
              }
            },
            {
              key: "shareClicked",
              value: function() {
                var e = this;
                if (!CK.saves.activeSaving())
                  if (this.state.sharePopup) this.setState({ sharePopup: !1 });
                  else if (CK.User.loggedIn)
                    this.setState({ sharePopup: !0 }),
                      CK.saves.share().catch(function(t) {
                        e.setState({ sharePopup: !1 }),
                          "not_logged_in" === t
                            ? e.notLoggedIn()
                            : _t.a.alert("Sharing failed.");
                      });
                  else if (CK.Settings.requireLoginToShare) _t.a.showLogin();
                  else {
                    var t = function() {
                      e.setState({ sharePopup: !0 }),
                        CK.saves.shareAnonymous().catch(function() {
                          e.setState({ sharePopup: !1 }),
                            _t.a.alert("Sharing failed. Try logging in.");
                        });
                    };
                    window.confirmTosPrivacy
                      ? t()
                      : _t.a.prompt(
                          React.createElement(
                            "div",
                            null,
                            "By creating a sharing link to your design, you indicate that you are at least 16 years old ",
                            React.createElement("br", null),
                            " and have read and accepted our ",
                            React.createElement(
                              "a",
                              {
                                href: "/Privacy/",
                                target: "_blank",
                                className: "share-link"
                              },
                              "Privacy Policy"
                            ),
                            ", and ",
                            React.createElement(
                              "a",
                              {
                                href: "/ToS/",
                                target: "_blank",
                                className: "share-link"
                              },
                              "Terms & Conditions"
                            )
                          ),
                          [
                            {
                              label: "Accept",
                              onClick: function() {
                                (window.confirmTosPrivacy = !0),
                                  _t.a.hideOverlay(),
                                  t();
                              }
                            },
                            {
                              label: "Cancel",
                              cancel: !0,
                              onClick: function() {
                                _t.a.hideOverlay();
                              }
                            }
                          ],
                          "Confirm"
                        );
                  }
              }
            },
            {
              key: "newClicked",
              value: function() {
                CKUI.promptSave().then(function(e) {
                  e && CK.saves.new();
                });
              }
            },
            {
              key: "browseClicked",
              value: function() {
                CK.User.loggedIn
                  ? t.showBrowser()
                  : _t.a.showLogin(function() {
                      return t.showBrowser();
                    });
              }
            },
            {
              key: "configsLoading",
              value: function() {
                return CK.User.loggedIn && !CK.saves.hasLoaded();
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = sc("expandable-menu", "generated", {
                    open: this.state.sharePopup
                  }),
                  n = !!CK.saves.activeSaving() && !CK.saves.sharing,
                  r = this.configsLoading(),
                  o = CK.character.savedChanges && !n,
                  a =
                    CK.character.getName() || CK.Settings.defaultCharacterName,
                  i = "nav-btn" + (r ? " disabled" : "");
                return React.createElement(
                  "div",
                  { id: "character-area" },
                  React.createElement(
                    "div",
                    {
                      className: "namecard-name",
                      onClick: function() {
                        e.promptName();
                      }
                    },
                    a
                  ),
                  React.createElement(
                    "div",
                    { className: "nav" },
                    React.createElement(
                      "div",
                      {
                        className: i,
                        onClick: function() {
                          return e.saveClicked();
                        }
                      },
                      n
                        ? React.createElement("img", {
                            src: cc,
                            className: "svg-spinner"
                          })
                        : React.createElement("img", {
                            src: "/static/svg/save.svg"
                          }),
                      "Save".concat(o ? "" : " *")
                    ),
                    React.createElement(
                      "div",
                      {
                        className: i,
                        onClick: function() {
                          e.promptName();
                        }
                      },
                      React.createElement("img", {
                        src: "/static/svg/pencil.svg"
                      }),
                      "Rename"
                    ),
                    React.createElement(
                      "div",
                      { id: "share", className: t },
                      this.state.sharePopup &&
                        React.createElement(Bs, {
                          onClose: function() {
                            return e.setState({ sharePopup: !1 });
                          }
                        }),
                      React.createElement(
                        "div",
                        {
                          className: i + " share-btn",
                          onClick: function() {
                            return e.shareClicked();
                          }
                        },
                        React.createElement("img", {
                          src: "/static/svg/share.svg"
                        }),
                        "Share"
                      )
                    ),
                    React.createElement(
                      "div",
                      {
                        className: i,
                        onClick: function() {
                          return e.newClicked();
                        }
                      },
                      React.createElement("img", {
                        src: "/static/svg/plus-round.svg"
                      }),
                      "New"
                    ),
                    React.createElement(
                      "div",
                      { id: "my-characters" },
                      React.createElement(
                        "div",
                        {
                          className: "nav-btn",
                          onClick: function() {
                            return e.browseClicked();
                          }
                        },
                        r
                          ? React.createElement("img", {
                              src: cc,
                              className: "svg-spinner"
                            })
                          : React.createElement("img", {
                              src: "/static/svg/characters.svg"
                            }),
                        "Heroes"
                      )
                    )
                  )
                );
              }
            }
          ]) && rc(n.prototype, r),
          o && rc(n, o),
          t
        );
      })();
    function uc(e) {
      return (uc =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function pc(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function fc(e, t) {
      return !t || ("object" !== uc(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function hc(e) {
      return (hc = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function mc(e, t) {
      return (mc =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var dc = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          fc(this, hc(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && mc(e, t);
        })(t, lc),
        (n = t),
        (r = [
          {
            key: "screenshot",
            value: function(e) {
              e.preventDefault(), CKUI.screenshotClick();
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                t = this.configsLoading(),
                n = CK.saves.activeSaving(),
                r = n && !CK.saves.sharing && !CK.saves.savingAs,
                o = n && !CK.saves.sharing && CK.saves.savingAs,
                a = CK.character.savedChanges && !r,
                i = CK.character.getName() || CK.Settings.defaultCharacterName,
                s = !!CK.saves.activeConfig,
                c = [
                  {
                    href: "#",
                    label: "Rename",
                    onClick: function(t) {
                      return t.preventDefault(), e.promptName(), !1;
                    },
                    iconSrc: "/static/svg/character-menu/pencil.svg",
                    iconWidth: 20
                  },
                  {
                    href: "#",
                    label: "Save".concat(a ? "" : " *"),
                    onClick: function(t) {
                      return t.preventDefault(), e.saveClicked(), !1;
                    },
                    iconSrc: r
                      ? "/static/svg/spinner.svg"
                      : "/static/svg/character-menu/save.svg",
                    iconWidth: 20
                  },
                  s
                    ? {
                        href: "#",
                        label: "Save As",
                        onClick: function(t) {
                          return t.preventDefault(), e.saveAsClicked(), !1;
                        },
                        iconSrc: o
                          ? "/static/svg/spinner.svg"
                          : "/static/svg/character-menu/saveas.svg",
                        iconWidth: 20
                      }
                    : null,
                  {
                    href: "#",
                    label: "New",
                    onClick: function(t) {
                      return t.preventDefault(), e.newClicked(), !1;
                    },
                    iconSrc: "/static/svg/character-menu/plus.svg",
                    iconWidth: 20
                  },
                  {
                    href: "#",
                    label: "Share",
                    onClick: function(t) {
                      return t.preventDefault(), e.shareClicked(), !1;
                    },
                    iconSrc: "/static/svg/character-menu/share.svg",
                    iconWidth: 20
                  },
                  {
                    href: "#",
                    label: "Screenshot",
                    onClick: function(t) {
                      return t.preventDefault(), e.screenshot(t), !1;
                    },
                    iconSrc: "/static/svg/photo.svg",
                    iconWidth: 20
                  },
                  {
                    href: "#",
                    label: CK.Settings.characterPlural,
                    onClick: function(t) {
                      return t.preventDefault(), e.browseClicked(), !1;
                    },
                    iconSrc: "/static/svg/character-menu/folder.svg",
                    iconWidth: 20
                  }
                ];
              return React.createElement(sn, {
                label: "\n                    "
                  .concat(a || r ? "" : " *", "\n                    ")
                  .concat(i, "\n                "),
                iconSrc: "/static/svg/character-menu/hero.svg",
                isLoading: t || r,
                forceText: !0,
                triggerClass: "characterMenu",
                items: c,
                extra:
                  this.state.sharePopup &&
                  React.createElement(Bs, {
                    key: "share-popup",
                    onClose: function() {
                      return e.setState({ sharePopup: !1 });
                    }
                  })
              });
            }
          }
        ]) && pc(n.prototype, r),
        o && pc(n, o),
        t
      );
    })();
    function yc(e) {
      return (yc =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function bc(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function vc(e, t) {
      return !t || ("object" !== yc(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function gc(e) {
      return (gc = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function wc(e, t) {
      return (wc =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var _c = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = vc(this, gc(t).call(this, e))).state = {
            menuOption: !1,
            x: 0,
            y: 0
          }),
          (n.tip = function(e) {
            if (e && e[0] && e[1]) {
              for (
                var t = e[1].target.getBoundingClientRect(),
                  r = Math.floor((t.top + t.bottom) / 2);
                r + 150 > window.innerHeight;

              )
                r -= 50;
              t &&
                n.setState({
                  menuOption: e[0],
                  x: Math.floor(t.left - 400),
                  y: r
                });
            } else
              CK.ClientSpecs.touchEnabled() ||
                n.setState({ menuOption: void 0 });
          }),
          (n.close = function() {
            n.setState({ menuOption: void 0 });
          }),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && wc(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              CK.Events.on("cameraMoveStart", this.close),
                CK.Events.on("tip", this.tip);
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              CK.Events.off("cameraMoveStart", this.close),
                CK.Events.off("tip", this.tip);
            }
          },
          {
            key: "render",
            value: function() {
              var e = {
                  tipperTouch: { width: 300, bottom: 60, left: 20, zIndex: 9 },
                  tipper: {
                    width: 300,
                    transform: "translate(0%,-50%)",
                    zIndex: 9999
                  },
                  title: { margin: "0 0 8px" },
                  p: { margin: 0, display: "flex", alignItems: "flex-start" },
                  img: { maxWidth: 120, marginRight: 10, flexShrink: 0 },
                  warning: { margin: 2 }
                },
                t = this.state.menuOption,
                n = CK.ClientSpecs.touchEnabled();
              return t && t.thumb && t.description && t.label
                ? (-1 !== t.thumb.indexOf("twohanded") && (e.img.maxWidth = 50),
                  (e.tipper.left = this.state.x),
                  (e.tipper.top = this.state.y),
                  React.createElement(
                    "div",
                    {
                      className: "fixed-tipper",
                      style: n ? e.tipperTouch : e.tipper
                    },
                    !!t.grayedOutReason &&
                      React.createElement(
                        "h3",
                        { className: "warning", style: e.warning },
                        React.createElement("img", {
                          src: "/static/svg/warning.svg",
                          className: "warning-image"
                        }),
                        t.grayedOutReason
                      ),
                    React.createElement("h3", { style: e.title }, t.label),
                    React.createElement(
                      "p",
                      { style: e.p },
                      t.thumb.length > 3 &&
                        React.createElement("img", {
                          style: e.img,
                          src: t.thumb
                        }),
                      t.description
                    )
                  ))
                : null;
            }
          }
        ]) && bc(n.prototype, r),
        o && bc(n, o),
        t
      );
    })();
    function Cc(e) {
      return (Cc =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function kc(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Rc(e, t) {
      return !t || ("object" !== Cc(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Sc(e) {
      return (Sc = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Oc(e, t) {
      return (Oc =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Ec = (function(e) {
      function t(e) {
        var n;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          ((n = Rc(this, Sc(t).call(this, e))).state = { visible: !0 });
        return (
          (n.checkUpdate = function() {
            n.state.visible && CK.display.loadingDuration < 2e3
              ? n.setState({ visible: !1 })
              : !n.state.visible &&
                CK.display.loadingDuration >= 2e3 &&
                n.setState({ visible: !0 });
          }),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Oc(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              CK.Events.on("end", this.checkUpdate);
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              CK.Events.off("end", this.checkUpdate);
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.state.visible ? 0.5 : 0,
                t = UIState.compact
                  ? {
                      position: "absolute",
                      top: "30vh",
                      left: "50vw",
                      transition: "all 1s ease",
                      opacity: e
                    }
                  : {
                      position: "absolute",
                      top: "45vh",
                      left: Math.floor(
                        CK.renderManager.width / 2 - CK.orbitCamera.getOffsetX()
                      ),
                      transition: "all 1s ease",
                      width: 64,
                      height: 64,
                      opacity: e
                    };
              return React.createElement("img", {
                style: t,
                src: "/static/svg/spinner.svg",
                className: "svg-spinner"
              });
            }
          }
        ]) && kc(n.prototype, r),
        o && kc(n, o),
        t
      );
    })();
    function xc(e) {
      return (xc =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function jc() {
      return (jc =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function Pc(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Mc(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Tc(e, t, n) {
      return t && Mc(e.prototype, t), n && Mc(e, n), e;
    }
    function Kc(e, t) {
      return !t || ("object" !== xc(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Ic(e) {
      return (Ic = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Nc(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      })),
        t && Lc(e, t);
    }
    function Lc(e, t) {
      return (Lc =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Uc = (function(e) {
        function t(e) {
          var n, r;
          Pc(this, t);
          for (
            var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
            i < o;
            i++
          )
            a[i - 1] = arguments[i];
          return (
            ((r = Kc(
              this,
              (n = Ic(t)).call.apply(n, [this, e].concat(a))
            )).state = { value: e.value }),
            r
          );
        }
        return (
          Nc(t, React.Component),
          Tc(t, [
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                this.state.value !== e.value &&
                  this.setState({ value: e.value });
              }
            },
            {
              key: "onChange",
              value: function(e) {
                var t = this;
                this.setState({ value: e.target.value }, function() {
                  return t.props.onChange(e.target.value);
                });
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = Object.assign({}, this.props);
                return (
                  delete t.onChange,
                  React.createElement(
                    "textarea",
                    jc({}, t, this.state, {
                      onChange: function(t) {
                        t.persist(), e.onChange(t);
                      }
                    })
                  )
                );
              }
            }
          ]),
          t
        );
      })(),
      Dc = (function(e) {
        function t() {
          return Pc(this, t), Kc(this, Ic(t).apply(this, arguments));
        }
        return (
          Nc(t, React.Component),
          Tc(t, [
            {
              key: "limitText",
              value: function(e) {
                var t = this;
                return (e = CK.encoder.escape(e, !0))
                  .split("\n")
                  .slice(0, this.props.rows || 1)
                  .map(function(e) {
                    return e.slice(0, t.props.cols || 12);
                  })
                  .join("\n");
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.slot,
                  n = CK.data.parts[t];
                return (n && "text" === CK.Options.parts[n].type) ||
                  this.props.alwaysOn
                  ? React.createElement(
                      "div",
                      null,
                      this.props.label &&
                        React.createElement("div", null, this.props.label),
                      React.createElement(Uc, {
                        autoFocus: UIState.compacting,
                        key: "textEntry" + t,
                        style: { textAlign: "center", maxWidth: "100%" },
                        value: CK.getLabel(t),
                        placeholder: this.props.placeholder || "Your Text",
                        cols: 2 * (this.props.cols || 12),
                        rows: this.props.rows || 1,
                        onChange: function(n) {
                          return CK.setLabel(t, e.limitText(n));
                        }
                      })
                    )
                  : null;
              }
            }
          ]),
          t
        );
      })();
    function zc(e) {
      return (zc =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ac(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Bc(e, t) {
      return !t || ("object" !== zc(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Fc(e) {
      return (Fc = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Vc(e, t) {
      return (Vc =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var qc = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Bc(this, Fc(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Vc(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "onClose",
            value: function() {
              CK.character.changeSettings({ camera: void 0, showOnly: void 0 });
            }
          },
          {
            key: "onOpen",
            value: function() {
              if (
                Ta.clipSettingsActive() ||
                !CK.data.parts.base ||
                3001 === CK.data.parts.base
              )
                return null;
              var e = CK.data.parts.mount ? "labelMount" : "label";
              CK.character.changeSettings({
                camera: e,
                showOnly: { base: !0, baseRim: !0, label: !0 }
              });
            }
          },
          {
            key: "renderPinned",
            value: function() {
              var e = 3001 === CK.data.parts.base;
              return React.createElement(
                React.Fragment,
                null,
                !e &&
                  Ta.clipSettingsActive() &&
                  React.createElement(Dc, {
                    label: "Back",
                    slot: "initiativeBack",
                    placeholder: "Back Text",
                    alwaysOn: !0,
                    rows: 2
                  }),
                !e &&
                  React.createElement(Dc, {
                    label: Ta.clipSettingsActive() ? "Front" : void 0,
                    slot: "label",
                    rows: 3
                  })
              );
            }
          },
          {
            key: "render",
            value: function() {
              return React.createElement(
                mr,
                {
                  label: "Label",
                  pinned: this.renderPinned(),
                  onOpen: this.onOpen,
                  onClose: this.onClose
                },
                React.createElement($e, { label: "Label" })
              );
            }
          }
        ]) && Ac(n.prototype, r),
        o && Ac(n, o),
        t
      );
    })();
    function Wc(e) {
      return (Wc =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Hc(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Qc(e, t) {
      return !t || ("object" !== Wc(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Xc(e, t, n) {
      return (Xc =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function(e, t, n) {
              var r = (function(e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = Gc(e));

                );
                return e;
              })(e, t);
              if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n) : o.value;
              }
            })(e, t, n || e);
    }
    function Gc(e) {
      return (Gc = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Yc(e, t) {
      return (Yc =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Zc = VN.ReactRouter,
      Jc = (Zc.withRouter, Zc.Redirect),
      $c = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Qc(this, Gc(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Yc(e, t);
          })(t, kr),
          (n = t),
          (r = [
            {
              key: "addToCart",
              value: function() {
                var e = this;
                !CK.data.parts.base &&
                this.constructor.getSelectedProduct() &&
                CK.User.loggedIn
                  ? Overlay.prompt(
                      "Your miniature doesn't have a base and won't stand up on its own. Are you sure you want to add it to your cart?",
                      [
                        {
                          label: "Yes",
                          onClick: function() {
                            Overlay.hidePrompt(),
                              Xc(Gc(t.prototype), "addToCart", e).call(e);
                          }
                        },
                        {
                          label: "Cancel",
                          cancel: !0,
                          onClick: function() {
                            return Overlay.hidePrompt();
                          }
                        }
                      ],
                      "Warning!"
                    )
                  : Xc(Gc(t.prototype), "addToCart", this).call(this);
              }
            },
            {
              key: "render",
              value: function() {
                var e = this;
                return this.state.redirect
                  ? React.createElement(Jc, {
                      to: { pathname: this.state.url }
                    })
                  : React.createElement(
                      "a",
                      {
                        href: "#",
                        className: "shop-button clickable",
                        id: "add",
                        onClick: function(t) {
                          t.preventDefault(), e.addToCart();
                        }
                      },
                      this.state.adding ? "Adding..." : "Add to Cart"
                    );
              }
            },
            {
              key: "getSelectedProduct",
              value: function() {
                return a.getSelectedProduct();
              }
            }
          ]) && Hc(n.prototype, r),
          o && Hc(n, o),
          t
        );
      })();
    function el(e) {
      return (el =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function tl(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function nl(e, t) {
      return !t || ("object" !== el(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function rl(e) {
      return (rl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ol(e, t) {
      return (ol =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var al = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = nl(this, rl(t).call(this, e))).refresh = function() {
            return n.forceUpdate();
          }),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ol(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              CK.Events.on("sliderChanged", this.refresh);
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              CK.Events.off("sliderChanged", this.refresh);
            }
          },
          {
            key: "render",
            value: function() {
              var e,
                t,
                n,
                r,
                o = a.getSelectedProduct(),
                i = 1;
              CK.data.parameters &&
                CK.data.parameters.quantity &&
                (i = CK.data.parameters.quantity);
              var s = function() {
                return UIState.set({ mainSelection: "Material" });
              };
              return o
                ? ((e = "$" + (o.price * i).toFixed(2)),
                  (t = o.old_price
                    ? "$" + (o.old_price * i).toFixed(2) + " "
                    : ""),
                  (n = o.display_name_bitless),
                  (r = o.tag),
                  React.createElement(
                    "div",
                    { className: "editorFooter", onClick: s },
                    React.createElement(
                      "div",
                      { className: "editorFooter-info" },
                      React.createElement(
                        "div",
                        { className: "editorFooter-labelContainer" },
                        r &&
                          React.createElement(
                            "div",
                            { className: "editorFooter-xl" },
                            r
                          ),
                        React.createElement(
                          "div",
                          { className: "editorFooter-label" },
                          n
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "editorFooter-price" },
                        React.createElement("del", null, t),
                        e
                      )
                    ),
                    React.createElement($c, null)
                  ))
                : React.createElement(
                    "div",
                    { className: "editorFooter", onClick: s },
                    !UIState.compact &&
                      React.createElement(
                        "div",
                        { className: "editorFooter-info" },
                        React.createElement(
                          "div",
                          { className: "editorFooter-label" },
                          "Select Material"
                        )
                      ),
                    React.createElement($c, null)
                  );
            }
          }
        ]) && tl(n.prototype, r),
        o && tl(n, o),
        t
      );
    })();
    function il(e) {
      return (il =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function sl(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function cl(e, t) {
      return !t || ("object" !== il(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function ll(e) {
      return (ll = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ul(e, t) {
      return (ul =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var pl = VN.classNames,
      fl =
        "Height units are in 'fantasy feet'. A non-linear scale tuned to provide relative options for all fictional races, while maintaining miniature readability, durability, and compatibility at tabletop scales.",
      hl = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = cl(this, ll(t).call(this, e))).state = { hud: !1 }),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ul(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "componentWillUnmount",
              value: function() {
                f.disable();
              }
            },
            {
              key: "toggleHUD",
              value: function() {
                this.state.hud
                  ? (f.disable(), this.setState({ hud: !1 }))
                  : (f.enable(), this.setState({ hud: !0 }));
              }
            },
            {
              key: "tip",
              value: function(e) {
                CK.Events.emit("tip", [
                  { thumb: " ", description: fl, label: "Height" },
                  e
                ]);
              }
            },
            {
              key: "tipPopup",
              value: function() {
                UIState.compact && Overlay.prompt(fl);
              }
            },
            {
              key: "render",
              value: function() {
                for (
                  var e = this, t = [], n = f.minFeet, r = f.maxFeet, o = n;
                  o <= r;
                  o++
                )
                  t.push({
                    label: o,
                    value: (o - n) / (r - n),
                    isRed: o >= f.xlFeet
                  });
                var i = a.isExtraTallAvailable(),
                  s = i ? void 0 : f.xlSliderThreshold,
                  c = a.countXLParts(),
                  l = a.getSize(),
                  u = i ? (c ? "XXL" : "XL") : "XL Unavailable";
                return React.createElement(
                  "div",
                  {
                    className: pl("slider-container", "measureHeight", {
                      "measureHeight--showXL": !s,
                      "measureHeight--hasLimit": !!s
                    })
                  },
                  l
                    ? React.createElement("div", { className: "xl-tag" }, l)
                    : null,
                  React.createElement("img", {
                    src: "/static/svg/measure-toggle.svg",
                    className: "measureHeight-toggle".concat(
                      this.state.hud ? " selected" : ""
                    ),
                    onClick: function() {
                      return e.toggleHUD();
                    }
                  }),
                  React.createElement(
                    "div",
                    {
                      className: "measureHeight-help",
                      onMouseOut: function() {
                        return CK.Events.emit("tip");
                      },
                      onMouseOver: function(t) {
                        return e.tip(t);
                      },
                      onClick: function() {
                        return e.tipPopup();
                      }
                    },
                    "?"
                  ),
                  React.createElement(ys, {
                    label: "Height",
                    marks: t,
                    max: s,
                    limit: s,
                    limitText: u,
                    onSliderUpdate: function() {
                      return e.forceUpdate();
                    }
                  })
                );
              }
            }
          ]) && sl(n.prototype, r),
          o && sl(n, o),
          t
        );
      })();
    function ml(e) {
      return (ml =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function dl(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function yl(e) {
      return (yl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function bl(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function vl(e, t) {
      return (vl =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var gl = VN.classNames,
      wl = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = yl(t).call(this, e)) ||
              ("object" !== ml(o) && "function" != typeof o)
                ? bl(r)
                : o).state = { details: !1 }),
            (n.onChange = n.onChange.bind(bl(n))),
            (n.onAfterChange = n.onAfterChange.bind(bl(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && vl(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "toggleDetails",
              value: function() {
                this.setState({ details: !this.state.details });
              }
            },
            {
              key: "getValue",
              value: function() {
                return (
                  (CK.getSlider("weighTorso") +
                    CK.getSlider("weightUpper") +
                    CK.getSlider("weightLower")) /
                  3
                );
              }
            },
            {
              key: "onChange",
              value: function(e) {
                CK.character.previewSliders({
                  weightUpper: e,
                  weighTorso: e,
                  weightLower: e
                });
              }
            },
            {
              key: "onAfterChange",
              value: function(e) {
                CK.tweak({
                  sliders: { weightUpper: e, weighTorso: e, weightLower: e }
                });
              }
            },
            {
              key: "render",
              value: function() {
                var e = this;
                return React.createElement(
                  "div",
                  {
                    className: gl("slider-container", "slider--withDetails", {
                      isOpen: this.state.details
                    })
                  },
                  React.createElement("img", {
                    src: "/static/svg/controls.svg",
                    className: "slider-toggle",
                    onClick: function() {
                      return e.toggleDetails();
                    }
                  }),
                  React.createElement(
                    "div",
                    { className: "slider-wrapper" },
                    React.createElement("a", { className: "label" }, "Weight"),
                    React.createElement(ls, {
                      value: this.getValue(),
                      onChange: function(t) {
                        return e.onChange(t);
                      },
                      onAfterChange: function(t) {
                        return e.onAfterChange(t);
                      }
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "slider-details" },
                    React.createElement(ys, {
                      name: "weightUpper",
                      label: "Arms",
                      onSliderUpdate: function() {
                        return e.forceUpdate();
                      },
                      small: !0
                    }),
                    React.createElement(ys, {
                      name: "weighTorso",
                      label: "Upper",
                      onSliderUpdate: function() {
                        return e.forceUpdate();
                      },
                      small: !0
                    }),
                    React.createElement(ys, {
                      name: "weightLower",
                      label: "Lower",
                      onSliderUpdate: function() {
                        return e.forceUpdate();
                      },
                      small: !0
                    })
                  )
                );
              }
            }
          ]) && dl(n.prototype, r),
          o && dl(n, o),
          t
        );
      })();
    function _l(e) {
      return (_l =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Cl(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function kl(e, t) {
      return !t || ("object" !== _l(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Rl(e) {
      return (Rl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Sl(e, t) {
      return (Sl =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Ol = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          kl(this, Rl(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Sl(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              CK.character.changeSettings({ camera: "xl" }),
                CK.environment.scaleVisualizer.show();
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              CK.character.changeSettings({ camera: void 0 }),
                CK.environment.scaleVisualizer.hide();
            }
          },
          {
            key: "render",
            value: function() {
              return React.createElement(
                React.Fragment,
                null,
                React.createElement(hl, null),
                React.createElement(ys, { name: "headSize", label: "Head" }),
                React.createElement(wl, null),
                React.createElement(ys, { label: "Posture" }),
                React.createElement(ys, { label: "Build" }),
                React.createElement(ys, { label: "Muscularity" }),
                React.createElement(ys, { label: "Bust" }),
                React.createElement(ys, { label: "Waist" }),
                React.createElement(ys, { label: "Belly" }),
                React.createElement(ys, { label: "Curves" }),
                React.createElement(ys, { label: "Booty" })
              );
            }
          }
        ]) && Cl(n.prototype, r),
        o && Cl(n, o),
        t
      );
    })();
    function El(e) {
      return (El =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function xl(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function jl(e, t) {
      return !t || ("object" !== El(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Pl(e) {
      return (Pl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Ml(e, t) {
      return (Ml =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Tl = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          jl(this, Pl(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Ml(e, t);
        })(t, Ra),
        (n = t),
        (o = [
          {
            key: "getRandomPartSet",
            value: function(e) {
              var t = e[Math.floor(Math.random() * e.length)];
              return Object.assign({}, t.parts);
            }
          }
        ]),
        (r = [
          {
            key: "random",
            value: function() {
              var e,
                n = Ra.getAvailable(this.props),
                r = Math.floor(5 * Math.random());
              if (r >= 1) {
                e = t.getRandomPartSet(n);
                var o = t.getRandomPartSet(n),
                  a = Object.assign({}, e, o);
                for (var i in a) {
                  var s =
                    1 === r
                      ? Math.random() > 0.5
                        ? o
                        : e
                      : t.getRandomPartSet(n);
                  if (((e[i] = s[i]), e[i])) {
                    var c = CK.Options.getPart(e[i]);
                    "L" === c.side && (e[c.slotR] = c.link);
                  }
                }
              } else e = t.getRandomPartSet(n);
              CK.tweak({ parts: e });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                t = Ra.getOptions(this.props);
              return (
                t.unshift(
                  new Re({
                    thumb: "/static/herobundles/config/dice.png",
                    onClick: function() {
                      return e.random();
                    },
                    label: "Random",
                    description:
                      "A randomized outfit or combination of outfits."
                  })
                ),
                React.createElement(Qn, {
                  options: t,
                  columns: this.props.columns,
                  key: this.props.label
                })
              );
            }
          }
        ]) && xl(n.prototype, r),
        o && xl(n, o),
        t
      );
    })();
    function Kl(e) {
      return (Kl =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Il(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Nl(e, t) {
      return !t || ("object" !== Kl(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Ll(e) {
      return (Ll = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Ul(e, t) {
      return (Ul =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Dl = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = Nl(this, Ll(t).call(this, e)))._refresh = function() {
            n.forceUpdate();
          }),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Ul(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "clearManipulate",
            value: function() {
              (t.on = !1), EX.Kit.deselect();
            }
          }
        ]),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              CK.Events.on("kit-selection-changed", this._refresh),
                EX.Kit.enable(),
                (EX.Kit.hotkeys = !1),
                this._setConeLimitIfSelected();
            }
          },
          {
            key: "componentDidUpdate",
            value: function() {
              this._setConeLimitIfSelected();
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              CK.Events.off("kit-selection-changed", this._refresh),
                EX.Kit.disable();
            }
          },
          {
            key: "manipulate",
            value: function() {
              t.on = !0;
              var e = this.props,
                n = e.boneID,
                r = e.slot,
                o = e.coneLimit,
                a = e.gizmoScale;
              (EX.Kit.enableSelection = !1),
                EX.Kit.setMode("swingTwist"),
                EX.Kit.select(r, n),
                EX.Kit.setConeLimit(o),
                EX.Kit.setGizmoScale(a);
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                n = this.props.boneID === EX.Kit.boneID;
              return React.createElement("img", {
                src: "/static/svg/tools/posing-rotate.svg",
                className:
                  "expert-posing-transformer-toggle" +
                  (n ? " selected" : "") +
                  (this.props.floating ? " floating" : ""),
                onClick: function() {
                  return n ? t.clearManipulate() : e.manipulate();
                }
              });
            }
          },
          {
            key: "_setConeLimitIfSelected",
            value: function() {
              var e = this.props,
                t = e.boneID,
                n = e.coneLimit,
                r = e.gizmoScale;
              t === EX.Kit.boneID &&
                (EX.Kit.setConeLimit(n), EX.Kit.setGizmoScale(r));
            }
          }
        ]) && Il(n.prototype, r),
        o && Il(n, o),
        t
      );
    })();
    function zl(e) {
      return (zl =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Al(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Bl(e, t) {
      return !t || ("object" !== zl(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Fl(e) {
      return (Fl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Vl(e, t) {
      return (Vl =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ql = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Bl(this, Fl(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Vl(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "enabled",
            value: function(e) {
              var t = CK.displayData.parts[e];
              if (t)
                return (
                  t.slot.endsWith("D") &&
                    (t = CK.Options.getPartBySlotAndName(
                      t.unsidedSlot + "R",
                      t.name
                    )),
                  t && !t.keywords.disablePosing
                );
            }
          }
        ]),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              var e = this._getEnabledChilden(),
                t = UIState.expertPosing;
              e.find(function(e) {
                return e.props.label === t;
              }) || (t = "Head"),
                t !== UIState.expertPosing &&
                  (EX.Kit.deselect(), UIState.set({ expertPosing: t }));
            }
          },
          {
            key: "render",
            value: function() {
              var e = this._getEnabledChilden(),
                t = UIState.expertPosing;
              e.find(function(e) {
                return e.props.label === t;
              }) || (t = "Head");
              var n = e.find(function(e) {
                return e.props.label === t;
              });
              return React.createElement(React.Fragment, null, n);
            }
          },
          {
            key: "_getEnabledChilden",
            value: function() {
              return React.Children.toArray(this.props.children).filter(
                function(e) {
                  return !e.props.disabled && t.enabled(e.props.slot);
                }
              );
            }
          }
        ]) && Al(n.prototype, r),
        o && Al(n, o),
        t
      );
    })();
    function Wl(e) {
      return (Wl =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Hl(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ql(e, t) {
      return !t || ("object" !== Wl(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Xl(e) {
      return (Xl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Gl(e, t) {
      return (Gl =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Yl = VN.classNames,
      Zl = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Ql(this, Xl(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Gl(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "click",
              value: function(e) {
                UIState.set({ expertPosing: e.label }),
                  Dl.on && e.slot && e.boneID
                    ? EX.Kit.select(e.slot, e.boneID)
                    : EX.Kit.deselect();
              }
            },
            {
              key: "addMenu",
              value: function(e) {
                for (
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [1, 1],
                    r = this.getHeight(e.slot);
                  !this.gridFree(n, r);

                )
                  n[0]++, n[0] > 5 && (n[1]++, (n[0] = 1));
                var o = e.thumb
                    ? e.thumb + ".png"
                    : CK.Paths.getPartThumb(CK.displayData.parts[e.slot]),
                  a = !!CK.data.mirroredPose,
                  i = UIState.expertPosing || "Head";
                this.grid[n.join(",")] = React.createElement(
                  "div",
                  {
                    style: {
                      gridColumn: a ? 6 - n[0] : n[0],
                      gridRow: n[1] + " / span " + r
                    },
                    key: e.label
                  },
                  React.createElement("img", {
                    className: Yl(
                      "expert-posing-thumb",
                      { mirrored: (a && !e.mirrored) || (e.mirrored && !a) },
                      { selected: e.label === i }
                    ),
                    src: o,
                    onClick: function() {
                      return t.click(e);
                    }
                  })
                );
                for (var s = 1; s < r; s++)
                  this.grid[[n[0], n[1] + s].join(",")] = null;
              }
            },
            {
              key: "gridFree",
              value: function(e, t) {
                for (var n = 0; n < t; n++) {
                  var r = e[1] + n;
                  if (void 0 !== this.grid[e[0] + "," + r]) return !1;
                }
                return !0;
              }
            },
            {
              key: "mirrorCoord",
              value: function(e) {
                return [1 === e[0] ? 5 : 4, e[1]];
              }
            },
            {
              key: "addMirrorMenu",
              value: function(e, t) {
                for (
                  var n = this.getHeight(e.slot),
                    r = this.getHeight(e.slot),
                    o = n > r ? n : r,
                    a = [1, 1];
                  !this.gridFree(a, o) ||
                  !this.gridFree(this.mirrorCoord(a), o);

                )
                  a[0] > 1 ? (a[1]++, (a[0] = 1)) : a[0]++;
                this.addMenu(e, this.mirrorCoord(a)), this.addMenu(t, a);
              }
            },
            {
              key: "getHeight",
              value: function(e) {
                var t = CK.displayData.parts[e];
                if (
                  (e.endsWith("D") &&
                    (t = CK.Options.getPartBySlotAndName(
                      t.unsidedSlot + "R",
                      t.name
                    )),
                  !t || !t.thumbSize)
                )
                  return 1;
                var n = t.thumbSize;
                return n[1] / n[0] || 1;
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = React.Children.toArray(this.props.children).filter(
                    function(e) {
                      return !e.props.disabled && ql.enabled(e.props.slot);
                    }
                  ),
                  n = [],
                  r = [],
                  o = [],
                  a = {},
                  i = {};
                t.map(function(e) {
                  var o = e.props.slot;
                  if (o.startsWith("bodyUpper")) n.push(e);
                  else if (o.endsWith("R")) {
                    var s = o.slice(0, -1) + "L",
                      c = t.find(function(e) {
                        return e.props.slot === s;
                      });
                    c && ((a[s] = e), (i[o] = c), r.push(c));
                  }
                }),
                  t.map(function(e) {
                    var t = e.props.slot;
                    t.startsWith("bodyUpper") || t in a || t in i || o.push(e);
                  }),
                  (this.grid = {}),
                  n.map(function(t) {
                    e.addMenu(t.props, [t.props.column, t.props.row]);
                  }),
                  r.map(function(t) {
                    var n = a[t.props.slot];
                    e.addMirrorMenu(t.props, n.props);
                  }),
                  o.map(function(t) {
                    e.addMenu(t.props);
                  });
                var s = Object.values(this.grid),
                  c = 1;
                Object.keys(this.grid).map(function(e) {
                  if (e) {
                    var t = parseInt(e.split(",")[1]);
                    t > c && (c = t);
                  }
                });
                for (var l = [], u = 0; u < c; u++) l.push("1fr");
                return React.createElement(
                  "div",
                  {
                    className: "expert-posing-grid",
                    style: { gridTemplateRows: l.join(" ") }
                  },
                  s
                );
              }
            }
          ]) && Hl(n.prototype, r),
          o && Hl(n, o),
          t
        );
      })();
    function Jl(e) {
      return (Jl =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function $l(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function eu(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var i, s = e[Symbol.iterator]();
              !(r = (i = s.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (o) throw a;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    function tu(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function nu(e, t) {
      return !t || ("object" !== Jl(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function ru(e) {
      return (ru = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ou(e, t) {
      return (ou =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var au = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = nu(this, ru(t).call(this, e))).refresh = function() {
            return n.forceUpdate();
          }),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ou(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "hasChanged",
            value: function(e) {
              var t = e.slot,
                n = e.boneID,
                r = e.axis,
                o = CK.data.transforms[t],
                a = (e.transform || "rotation").substring(0, 3);
              return o && n in o && a in o[n] && r in o[n][a];
            }
          },
          {
            key: "getClearData",
            value: function(e) {
              var t = e.slot,
                n = e.boneID,
                r = e.axis;
              return {
                transforms: $l(
                  {},
                  t,
                  $l(
                    {},
                    n,
                    $l(
                      {},
                      (e.transform || "rotation").substring(0, 3),
                      $l({}, r, void 0)
                    )
                  )
                )
              };
            }
          },
          {
            key: "getBone",
            value: function(e, t) {
              var n = CK.display.meshes[e];
              return n && CK.display.getBoneFromID(n, t);
            }
          }
        ]),
        (r = [
          {
            key: "componentDidMount",
            value: function() {
              CK.Events.on("characterFinishedChanging", this.refresh);
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              CK.Events.off("characterFinishedChanging", this.refresh);
            }
          },
          {
            key: "render",
            value: function() {
              var e,
                n,
                r = this,
                o = this.props,
                a = o.slot,
                i = o.label,
                s = o.boneID,
                c = o.axis,
                l = o.limit,
                u = this.props.transform || "rotation",
                p = u.substring(0, 3),
                f = HF.JointLimits.limits;
              if (l) {
                var h = eu(l(), 2);
                (e = h[0]), (n = h[1]);
              } else
                a in f && s in f[a] && p in f[a][s] && f[a][s][p][c]
                  ? ((e = f[a][s][p][c][0]), (n = f[a][s][p][c][1]))
                  : ((e = -Math.PI),
                    (n = Math.PI),
                    "rot" !== p &&
                      console.warn(
                        "No defined limits for",
                        { slot: a, boneID: s, transformShort: p, axis: c },
                        "in",
                        f
                      ));
              var m = CK.data.transforms[a],
                d = t.hasChanged(this.props),
                y = CK.display.meshes[a];
              if (!y) return null;
              var b = CK.display.getBoneFromID(y, s);
              if (!b)
                return React.createElement(
                  "div",
                  null,
                  a,
                  " does not have bone ",
                  s
                );
              var v = d ? m[s][p][c] : b[u][c],
                g = function(e) {
                  return $l({}, a, $l({}, s, $l({}, p, $l({}, c, e))));
                },
                w = y.skeleton
                  ? y.skeleton.getJointTransform(b, p)
                  : new RK.Vec3().fromArray(b.poses.pos);
              "rot" === p &&
                b.rotation.order !== w.order &&
                w.reorder(b.rotation.order);
              var _ = this.props.originalValue
                  ? this.props.originalValue(y)
                  : w[c],
                C = this.props.disableMark ? void 0 : _;
              return (
                (void 0 !== e &&
                  void 0 !== n &&
                  void 0 !== v &&
                  void 0 !== _) ||
                  console.error(
                    "Undefined value for slider",
                    e,
                    n,
                    v,
                    marks,
                    i
                  ),
                React.createElement(
                  "div",
                  { className: "slider-wrapper" },
                  !this.props.hideLabel &&
                    React.createElement("a", { className: "label" }, i),
                  React.createElement(ls, {
                    min: e,
                    max: n,
                    value: v,
                    onChange: function(t) {
                      t >= e && t <= n
                        ? CK.character.previewTransforms(g(t))
                        : console.warn(
                            "Setting slider ",
                            i,
                            "to out of bounds value",
                            t
                          ),
                        r.refresh();
                    },
                    onAfterChange: function(e, n) {
                      n
                        ? CK.tweak(t.getClearData(r.props))
                        : CK.tweak({ transforms: g(e) });
                    },
                    mark: C
                  })
                )
              );
            }
          }
        ]) && tu(n.prototype, r),
        o && tu(n, o),
        t
      );
    })();
    function iu(e) {
      return (iu =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function su(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function cu(e, t) {
      return !t || ("object" !== iu(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function lu(e) {
      return (lu = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function uu(e, t) {
      return (uu =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var pu = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          cu(this, lu(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && uu(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "render",
            value: function() {
              return React.createElement(
                "div",
                {
                  className: VN.classNames({
                    "expertPosing-group": !0,
                    borderless: this.props.borderless
                  })
                },
                React.createElement(
                  "div",
                  { className: "transform-group-label" },
                  this.props.label || React.createElement("div", null),
                  this.props.disableTransformer
                    ? React.createElement("div", null)
                    : React.createElement(Dl, {
                        slot: this.props.slot,
                        boneID: this.props.boneID,
                        coneLimit: this.props.coneLimit,
                        gizmoScale: this.props.gizmoScale
                      })
                ),
                this.props.children
              );
            }
          }
        ]) && su(n.prototype, r),
        o && su(n, o),
        t
      );
    })();
    function fu(e) {
      return (fu =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function hu(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function mu(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function du(e, t) {
      return !t || ("object" !== fu(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function yu(e) {
      return (yu = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function bu(e, t) {
      return (bu =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    Math.PI;
    var vu = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = du(this, yu(t).call(this, e))).refresh = function() {
            n.editing || ((n.initialised = !1), n._initialize());
          }),
          (n.state = { x: 0, y: 0, z: 0 }),
          (n.initialised = !1),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && bu(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "hasChanged",
            value: function(e) {
              var t = e.slot,
                n = e.boneID,
                r = CK.data.transforms[t],
                o = !1;
              if (r) {
                var a = r[n];
                if (a) {
                  var i = a.qtn;
                  i && (o = "x" in i || "y" in i || "z" in i);
                }
              }
              return o;
            }
          },
          {
            key: "getClearData",
            value: function(e) {
              return {
                transforms: hu(
                  {},
                  e.slot,
                  hu({}, e.boneID, {
                    qtn: { x: void 0, y: void 0, z: void 0, w: void 0 }
                  })
                )
              };
            }
          }
        ]),
        (r = [
          {
            key: "componentWillMount",
            value: function() {
              this._initialize();
            }
          },
          {
            key: "componentDidMount",
            value: function() {
              CK.Events.on("CharacterFinishedChanging", this.refresh);
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              CK.Events.off("CharacterFinishedChanging", this.refresh);
            }
          },
          {
            key: "_getTransformObj",
            value: function() {
              var e = (this.state.x * this.sliderScale.x + 1) / 2,
                n =
                  this.swingTwistLimits.x[0] * (1 - e) +
                  this.swingTwistLimits.x[1] * e,
                r = new RK.Quaternion();
              r.setFromAxisAngle(new RK.Vec3(1, 0, 0), n);
              var o = this.swingTwistLimits.y[0],
                a = this.swingTwistLimits.y[1],
                i = this.swingTwistLimits.z[0],
                s = this.swingTwistLimits.z[1],
                c = Math.sin(o / 2),
                l = Math.sin(a / 2),
                u = Math.sin(i / 2),
                p = Math.sin(s / 2),
                f = this.state.y * this.sliderScale.y,
                h = this.state.z * this.sliderScale.z,
                m = f * Math.sqrt(1 - (h * h) / 2),
                d = h * Math.sqrt(1 - (f * f) / 2);
              (f = m), (h = d);
              var y = Math.sqrt(f * f + h * h);
              y > 1 && ((f /= y), (h /= y));
              var b = 0,
                v = 0;
              (f *= b = f >= 0 ? Math.abs(l) : Math.abs(c)),
                (h *= v = h >= 0 ? Math.abs(p) : Math.abs(u));
              var g = Math.atan2(h, f),
                w = b * Math.cos(g),
                _ = v * Math.sin(g),
                C = Math.sqrt(w * w + _ * _),
                k = Math.sqrt(f * f + h * h);
              if (k > C) {
                var R = C / k;
                (f *= R), (h *= R), (k = C);
              }
              var S = new RK.Quaternion(
                  0,
                  f,
                  h,
                  Math.sqrt(Math.max(1 - f * f - h * h, 0))
                ),
                O = new RK.SwingTwist(S, r, this.swingTwistLimits.order),
                E = new RK.Quaternion();
              E.multiply(this.bindQuaternion),
                E.multiply(this.orient),
                E.multiply(O.toQuaternion()),
                E.multiply(this.orient.clone().inverse()),
                E.multiply(this.preRotate);
              var x = this._getTwistLocked(),
                j = this._getSwingLocked(),
                P = x ? 0 : this._origP.x - this.state.x,
                M = j ? 0 : this._origP.y - this.state.y,
                T = j ? 0 : this._origP.z - this.state.z,
                K = Math.sqrt(P * P + M * M + T * T),
                I = this.props.getCanClear,
                N = !I || I();
              return K < 0.01 && N
                ? t.getClearData(this.props).transforms
                : hu(
                    {},
                    this.slot,
                    hu({}, this.boneID, {
                      qtn: { x: E.x, y: E.y, z: E.z, w: E.w }
                    })
                  );
            }
          },
          {
            key: "render",
            value: function() {
              var e = this;
              if ((this._initialize(), !this.mesh)) return null;
              var t = function() {
                  var t = e.editing;
                  e.editing = !0;
                  try {
                    CK.character.previewTransforms(e._getTransformObj());
                  } finally {
                    e.editing = t;
                  }
                },
                n = function(t, n) {
                  var r = e.editing;
                  e.editing = !0;
                  try {
                    CK.display.sunOcclusion &&
                      (CK.display.sunOcclusion.ignoreNeedsRefreshCount = 3),
                      CK.tweak({ transforms: e._getTransformObj() });
                  } finally {
                    e.editing = r;
                  }
                },
                r =
                  void 0 !== this.props.getOrig
                    ? this.props.getOrig(this.mesh, this.bone)
                    : this.mesh.skeleton
                    ? this.mesh.skeleton.getQtn(this.bone)
                    : new RK.Quaternion().fromArray(this.bone.poses.rot);
              if (void 0 === r) return null;
              var o = this._fromQuaternion(r),
                a = o.x,
                i = o.y,
                s = o.z;
              o.constrained;
              this._origP = { x: a, y: i, z: s };
              var c = this.props.disableMark ? void 0 : a,
                l = this.props.disableMark ? void 0 : i,
                u = this.props.disableMark ? void 0 : s,
                p = this._getTwistLocked(),
                f = this._getSwingLocked();
              return React.createElement(
                pu,
                {
                  slot: this.props.slot,
                  boneID: this.props.boneID,
                  label: this.props.label,
                  coneLimit: this.props.coneLimit,
                  gizmoScale: this.props.gizmoScale,
                  disableTransformer: this.props.disableTransformer,
                  borderless: this.props.borderless
                },
                !p &&
                  React.createElement(
                    "div",
                    { className: "slider-wrapper" },
                    !this.props.hideLabel &&
                      React.createElement("a", { className: "label" }, "Twist"),
                    React.createElement(ls, {
                      min: -1,
                      max: 1,
                      step: 0.01,
                      value: this.state.x,
                      onChange: function(n, r) {
                        e.setState({ x: n }, function() {
                          return t();
                        });
                      },
                      onAfterChange: function(t, r) {
                        e.setState({ x: t }, function() {
                          return n();
                        });
                      },
                      mark: c
                    })
                  ),
                !f &&
                  React.createElement(
                    "div",
                    { className: "slider-wrapper" },
                    !this.props.hideLabel &&
                      React.createElement("a", { className: "label" }, "Bend"),
                    React.createElement(ls, {
                      min: -1,
                      max: 1,
                      step: 0.01,
                      value: this.state.y,
                      onChange: function(n, r) {
                        e.setState({ y: n }, function() {
                          return t();
                        });
                      },
                      onAfterChange: function(t, r) {
                        e.setState({ y: t }, function() {
                          return n();
                        });
                      },
                      mark: l
                    })
                  ),
                !f &&
                  React.createElement(
                    "div",
                    { className: "slider-wrapper" },
                    !this.props.hideLabel &&
                      React.createElement("a", { className: "label" }, "Tilt"),
                    React.createElement(ls, {
                      min: -1,
                      max: 1,
                      step: 0.01,
                      value: this.state.z,
                      onChange: function(n, r) {
                        e.setState({ z: n }, function() {
                          return t();
                        });
                      },
                      onAfterChange: function(t, r) {
                        e.setState({ z: t }, function() {
                          return n();
                        });
                      },
                      mark: u
                    })
                  )
              );
            }
          },
          {
            key: "_getTwistLocked",
            value: function() {
              return this.swingTwistLimits.x[1] <= this.swingTwistLimits.x[0];
            }
          },
          {
            key: "_getSwingLocked",
            value: function() {
              return (
                this.swingTwistLimits.y[1] <= this.swingTwistLimits.y[0] &&
                this.swingTwistLimits.z[1] <= this.swingTwistLimits.z[0]
              );
            }
          },
          {
            key: "_fromQuaternion",
            value: function(e) {
              var t = new RK.Quaternion();
              t.multiply(this.orient.clone().inverse()),
                t.multiply(this.bindQuaternionInverse),
                t.multiply(e),
                t.multiply(this.preRotate.clone().inverse()),
                t.multiply(this.orient);
              var n = this.swingTwistLimits.x[0],
                r = this.swingTwistLimits.x[1],
                o = this.swingTwistLimits.y[0],
                a = this.swingTwistLimits.y[1],
                i = this.swingTwistLimits.z[0],
                s = this.swingTwistLimits.z[1],
                c = Math.sin(o / 2),
                l = Math.sin(a / 2),
                u = Math.sin(i / 2),
                p = Math.sin(s / 2),
                f = new RK.SwingTwist().setFromQuaternion(
                  t,
                  this.swingTwistLimits.order
                ),
                h = f.swing,
                m = h.y,
                d = h.z,
                y = !1,
                b = 0,
                v = 0;
              (b = m >= 0 ? Math.abs(l) : Math.abs(c)),
                (v = d >= 0 ? Math.abs(p) : Math.abs(u));
              var g = Math.atan2(d, m),
                w = b * Math.cos(g),
                _ = v * Math.sin(g),
                C = Math.sqrt(w * w + _ * _),
                k = Math.sqrt(m * m + d * d);
              if (k > C) {
                var R = C / k;
                (m *= R), (d *= R), (k = C), (y = !0);
              }
              (m /= b), (d /= v);
              var S = Math.sqrt(m * m + d * d);
              S > 1 && ((m /= S), (d /= S), (y = !0));
              var O = m,
                E = d;
              (m =
                0.5 * Math.sqrt(2 + O * O - E * E + 2 * Math.sqrt(2) * O) -
                0.5 * Math.sqrt(2 + O * O - E * E - 2 * Math.sqrt(2) * O)),
                (d =
                  0.5 * Math.sqrt(2 - O * O + E * E + 2 * Math.sqrt(2) * E) -
                  0.5 * Math.sqrt(2 - O * O + E * E - 2 * Math.sqrt(2) * E));
              var x,
                j,
                P,
                M = 0,
                T = f.twist,
                K =
                  ((x = 2 * Math.asin(T.x)),
                  (j = (n + r) / 2 - Math.PI),
                  (P = Math.floor((x - j) / (2 * Math.PI))),
                  x - 2 * P * Math.PI);
              return (
                r > n && (M = ((K - n) / (r - n)) * 2 - 1),
                isNaN(M) && (M = 0),
                isNaN(m) && (m = 0),
                isNaN(d) && (d = 0),
                {
                  x: (M *= this.sliderScale.x),
                  y: (m *= this.sliderScale.y),
                  z: (d *= this.sliderScale.z),
                  constrained: y
                }
              );
            }
          },
          {
            key: "_initialize",
            value: function() {
              if (!this.initialised) {
                (this.boneID = this.props.boneID),
                  (this.slot = this.props.slot);
                var e = CK.data.transforms[this.slot];
                if (((this.mesh = CK.display.meshes[this.slot]), !this.mesh))
                  return;
                if (
                  ((this.bone = CK.display.getBoneFromID(
                    this.mesh,
                    this.boneID
                  )),
                  !this.bone)
                )
                  return console.error(
                    "Could not find bone",
                    this.boneID,
                    "with mesh",
                    this.mesh
                  );
                (this.bindQuaternion = new RK.Quaternion().fromArray(
                  this.bone.poses.rot
                )),
                  (this.bindQuaternionInverse = this.bindQuaternion
                    .clone()
                    .inverse());
                var t = HF.JointLimits.limits,
                  n = "";
                if (
                  ((this.orient = new RK.Quaternion()),
                  (this.preRotate = new RK.Quaternion()),
                  t)
                ) {
                  var r = t[this.slot];
                  if (r) {
                    var o = r[this.boneID];
                    o &&
                      ((this.swingTwistLimits = o.cone),
                      this.swingTwistLimits &&
                        this.swingTwistLimits.orient &&
                        this.orient.copy(this.swingTwistLimits.orient),
                      void 0 !== o.right &&
                        (n = (o.cone && o.cone.mirrorsliders) || "xy"));
                  }
                }
                (this.swingTwistLimits =
                  this.props.coneLimit || this.swingTwistLimits),
                  (this.swingTwistLimits = this.swingTwistLimits || {
                    x: [-Math.PI, Math.PI],
                    y: [-Math.PI, Math.PI],
                    z: [-Math.PI, Math.PI],
                    order: "swingtwist"
                  }),
                  this.swingTwistLimits.orient &&
                    this.orient.copy(this.swingTwistLimits.orient),
                  this.swingTwistLimits.preRotate
                    ? this.preRotate.copy(this.swingTwistLimits.preRotate)
                    : EX.Kit.orient && this.orient.copy(EX.Kit.orient),
                  (this.sliderScale = { x: 1, y: 1, z: 1 });
                for (var a = 0; a < n.length; ++a)
                  this.sliderScale[n.charAt(a)] = -1;
                var i = null;
                if (e) {
                  var s = e[this.boneID];
                  s && (i = s.qtn);
                }
                var c = this.bone.quaternion.x,
                  l = this.bone.quaternion.y,
                  u = this.bone.quaternion.z,
                  p = this.bone.quaternion.w;
                i &&
                  (void 0 !== i.x && (c = i.x),
                  void 0 !== i.y && (l = i.y),
                  void 0 !== i.z && (u = i.z),
                  void 0 !== i.w && (p = i.w));
                var f = new RK.Quaternion(c, l, u, p).normalize(),
                  h = this._fromQuaternion(f);
                this.setState(h), (this.initialised = !0);
              }
            }
          }
        ]) && mu(n.prototype, r),
        o && mu(n, o),
        t
      );
    })();
    function gu(e) {
      return (gu =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function wu(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function _u(e, t) {
      return !t || ("object" !== gu(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Cu(e) {
      return (Cu = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ku(e, t) {
      return (ku =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Ru = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            _u(this, Cu(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ku(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "clear",
              value: function() {
                var e = {};
                React.Children.toArray(this.props.children).map(function(t) {
                  t.type.getClearData &&
                    CK.Helpers.deepMerge(e, t.type.getClearData(t.props)),
                    t.props.children &&
                      React.Children.toArray(t.props.children).map(function(t) {
                        t.type.getClearData &&
                          CK.Helpers.deepMerge(e, t.type.getClearData(t.props));
                      });
                }),
                  CK.tweak(e),
                  Dl.clearManipulate();
              }
            },
            {
              key: "clearActive",
              value: function() {
                return !!React.Children.toArray(this.props.children).find(
                  function(e) {
                    return (
                      (e.type.hasChanged && e.type.hasChanged(e.props)) ||
                      (e.props.children &&
                        React.Children.toArray(e.props.children).find(function(
                          e
                        ) {
                          return (
                            e.type &&
                            e.type.hasChanged &&
                            e.type.hasChanged(e.props)
                          );
                        }))
                    );
                  }
                );
              }
            },
            {
              key: "render",
              value: function() {
                var e = this;
                return React.createElement(
                  "div",
                  null,
                  React.createElement(
                    "div",
                    { className: "expert-posing-title-line" },
                    React.createElement(
                      "div",
                      { className: "expert-posing-grid-label" },
                      this.props.label || ""
                    ),
                    this.clearActive()
                      ? React.createElement(
                          "div",
                          {
                            className: "expert-posing-reset",
                            onClick: function() {
                              return e.clear();
                            }
                          },
                          "clear"
                        )
                      : React.createElement("div", null)
                  ),
                  this.props.children
                );
              }
            }
          ]) && wu(n.prototype, r),
          o && wu(n, o),
          t
        );
      })(),
      Su = 0.97,
      Ou = [-Su, Su];
    function Eu(e) {
      return (Eu =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function xu(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function ju(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Pu(e, t) {
      return !t || ("object" !== Eu(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Mu(e) {
      return (Mu = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Tu(e, t) {
      return (Tu =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Ku = 0.11,
      Iu = [-0.2, 0.2];
    function Nu(e) {
      var t = "flipI" + e.slice(1),
        n = CK.display.meshes[e];
      if (!n) return Iu;
      var r = n.geometry.locators;
      if (r) {
        var o = r.offset_min || r.locator_offset_min,
          a = r.offset_max || r.locator_offset_max;
        if (void 0 !== o && void 0 !== a)
          return CK.data.custom[t]
            ? [o.position.y + Ku, a.position.y - Ku]
            : [-a.position.y + Ku, -o.position.y - Ku];
      }
    }
    function Lu(e, t, n) {
      var r =
          !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        o = CK.displayData.parts[e];
      if (!o) return null;
      if (
        ((o = o.source),
        [
          "pistol",
          "crossbow",
          "rifle",
          "familiar",
          "shield",
          "disablePosing"
        ].find(function(e) {
          return o.source.keywords[e];
        }))
      )
        return null;
      var a = e.endsWith("D") || o.keywords.bookPose || o.keywords.xAxisPosing,
        i = e.endsWith("L"),
        s = !!Nu(e),
        c = "flipI" + e.slice(1),
        l = CK.data.custom[c],
        u = !o.keywords.disableRotate,
        p = !!o.keywords.spell,
        f = u,
        h = new RK.Quaternion(),
        m = new RK.Quaternion().setFromUnitVectors(
          new RK.Vec3(1, 0, 0),
          new RK.Vec3(0, 1, 0)
        ),
        d = 0.999 * Math.PI,
        y = 0.98 * Math.PI,
        b = {
          x: [-d, d],
          y: [-y, y],
          z: [-y, y],
          order: "swingtwist",
          orient: m.toSimple()
        },
        v = {
          x: [-d, d],
          y: [Math.PI, -Math.PI],
          z: [Math.PI, -Math.PI],
          order: "swingtwist",
          orient: h.toSimple()
        },
        g = {
          x: [-d, d],
          y: [Math.PI, -Math.PI],
          z: [Math.PI, -Math.PI],
          order: "swingtwist",
          orient: m.toSimple()
        },
        w = null,
        _ = new RK.Quaternion(0, 0, 0, 1);
      l && _.set(0, 0, 1, 0),
        u && ((w = p ? b : a ? v : g).preRotate = _.toSimple());
      var C = CK.Paths.getPartThumb(
          CK.Options.getPartBySlotAndName(i ? "itemL" : "itemR", o.name)
        ),
        k = React.createElement(
          React.Fragment,
          null,
          u &&
            React.createElement(vu, {
              slot: e,
              boneID: n,
              coneLimit: w,
              getOrig: function() {
                var t = CK.display.meshes[e],
                  r = CK.display.getBoneFromID(t, n);
                if (r) {
                  var o = t.skeleton || r.skin;
                  return o
                    ? o.getQtn(r).multiply(_)
                    : new RK.Quaternion().fromArray(r.poses.rot).multiply(_);
                }
                console.error("Could not find bone", n, "in", t);
              },
              getCanClear: function() {
                return !l;
              }
            }),
          s &&
            "itemD" !== e &&
            React.createElement(au, {
              slot: e,
              label: "Grip Position",
              boneID: n,
              axis: "y",
              transform: "position",
              limit: function() {
                return Nu(e) || Iu;
              }
            }),
          React.createElement(Uu, { boneID: n, slot: e })
        );
      return r
        ? React.createElement(
            Ru,
            {
              label: t,
              slot: e,
              boneID: n,
              mirrored: i,
              thumb: C,
              transformer: f,
              key: t,
              coneLimit: w
            },
            k
          )
        : k;
    }
    var Uu = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Pu(this, Mu(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Tu(e, t);
        })(t, React.Component),
        (n = t),
        (o = [
          {
            key: "hasChanged",
            value: function(e) {
              var t = this.getFlipName(e);
              return !!CK.data.custom[t];
            }
          },
          {
            key: "getClearData",
            value: function(e) {
              var t = e.slot,
                n = e.boneID,
                r = this.getFlipName(e);
              CK.tweak({
                transforms: xu(
                  {},
                  t,
                  xu({}, n, { pos: { x: void 0, y: void 0, z: void 0 } })
                ),
                custom: xu({}, r, void 0)
              });
            }
          },
          {
            key: "getFlipName",
            value: function(e) {
              return "flipI" + e.slot.slice(1);
            }
          }
        ]),
        (r = [
          {
            key: "flip",
            value: function() {
              var e = this.props,
                n = e.slot,
                r = e.boneID,
                o = t.getFlipName(this.props),
                a = CK.display.meshes[n],
                i = void 0;
              if (n.endsWith("D")) {
                var s = CK.display.getBoneFromID(a, 502),
                  c = CK.display.getBoneFromID(a, 504),
                  l = new RK.Vec3(),
                  u = new RK.Vec3();
                (l.x = s.matrixWorld.elements[12]),
                  (l.y = s.matrixWorld.elements[13]),
                  (l.z = s.matrixWorld.elements[14]),
                  (u.x = c.matrixWorld.elements[12]),
                  (u.y = c.matrixWorld.elements[13]),
                  (u.z = c.matrixWorld.elements[14]),
                  (i = l.add(u).multiplyScalar(0.5));
              }
              var p = CK.display.getBoneFromID(a, r),
                f =
                  CK.data.transforms &&
                  CK.data.transforms[n] &&
                  CK.data.transforms[n][r] &&
                  CK.data.transforms[n][r].qtn;
              if (!f || void 0 === f.w) {
                if (!p)
                  return console.error(
                    "Could not flip because bone",
                    r,
                    "not found in",
                    a
                  );
                f = a.skeleton
                  ? a.skeleton.getQtn(p).toSimple()
                  : new RK.Quaternion().fromArray(p.poses.rot).toSimple();
              }
              var h = new RK.Quaternion().copy(f),
                m = new RK.Quaternion(0, 0, 1, 0);
              h.multiply(m);
              var d =
                  CK.data.transforms &&
                  CK.data.transforms[n] &&
                  CK.data.transforms[n][r] &&
                  CK.data.transforms[n][r].pos,
                y = a.skeleton ? a.skeleton.getPos(p) : new RK.Vec3(0, 0, 0);
              if ((Object.assign(y, d), i)) {
                var b = CK.display.getBoneFromID(a, r),
                  v = new RK.Matrix4().getInverse(b.matrixWorld);
                i.applyMatrix4(v),
                  (i = i
                    .clone()
                    .multiplyScalar(-1)
                    .applyQuaternion(m)
                    .add(i)
                    .applyQuaternion(new RK.Quaternion().copy(f))
                    .add(y)
                    .toSimple());
              } else i = { x: void 0, y: void 0, z: void 0 };
              CK.tweak({
                transforms: xu({}, n, xu({}, r, { pos: i, qtn: h.toSimple() })),
                custom: xu({}, o, !CK.data.custom[o] || void 0)
              });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                n = this.props.slot;
              if (!!CK.displayData.parts[n].keywords.disableFlip) return null;
              var r = t.getFlipName(this.props);
              return React.createElement(
                Ru,
                {
                  className: "label",
                  hasChanged: function() {
                    return CK.data.custom[r];
                  },
                  key: n + r
                },
                React.createElement(
                  "p",
                  null,
                  React.createElement("input", {
                    type: "checkbox",
                    checked: CK.data.custom[r] || !1,
                    onChange: function() {
                      return e.flip();
                    }
                  }),
                  "Reversed"
                )
              );
            }
          }
        ]) && ju(n.prototype, r),
        o && ju(n, o),
        t
      );
    })();
    function Du(e) {
      return (Du =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function zu(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Au(e, t) {
      return !t || ("object" !== Du(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Bu(e) {
      return (Bu = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Fu(e, t) {
      return (Fu =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Vu = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Au(this, Bu(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Fu(e, t);
        })(t, Zl),
        (n = t),
        (r = [
          {
            key: "render",
            value: function() {
              var e,
                t = this,
                n = React.Children.toArray(this.props.children)
                  .filter(function(e) {
                    return !e.props.disabled && ql.enabled(e.props.slot);
                  })
                  .sort(function(e, t) {
                    return e.props.sort === t.props.sort
                      ? 0
                      : void 0 === e.props.sort
                      ? 1
                      : e.props.sort > t.props.sort
                      ? 1
                      : -1;
                  }),
                r = !!CK.data.mirroredPose;
              r && n.reverse();
              var o = n.map(function(n) {
                var o = n.props,
                  a = o.label,
                  i = o.slot,
                  s = n.props.thumb
                    ? n.props.thumb + "-sml.png"
                    : CK.Paths.getPartThumb(CK.displayData.parts[i]),
                  c = new Re({
                    thumb: s,
                    label: a,
                    onClick: function() {
                      return t.click(n.props);
                    },
                    mirrorThumb: r
                  });
                return (UIState.expertPosing || "Head") === a && (e = c), c;
              });
              return React.createElement(Zr, { options: o, selected: e });
            }
          }
        ]) && zu(n.prototype, r),
        o && zu(n, o),
        t
      );
    })();
    function qu(e) {
      var t = e.slot,
        n = e.column,
        r = e.row,
        o = e.thumb,
        a = e.shoulderBoneID,
        i = e.armBoneID,
        s = e.elbowBones,
        c = e.elbowBoneID,
        l = e.sort,
        u = e.label;
      return 60 === CK.data.limitedPoses.main
        ? null
        : React.createElement(
            Ru,
            {
              label: u,
              slot: t,
              column: n,
              row: r,
              thumb: o,
              boneID: i,
              sort: l,
              key: u
            },
            React.createElement(vu, { label: "Shoulder", slot: t, boneID: i }),
            React.createElement(vu, {
              label: "Elbow",
              slot: t,
              boneID: c,
              disableTransformer: !0,
              getOrig: function(e) {
                var t = e.skeleton.getQtn(e.skeleton.getBoneByName(s[0])),
                  n = e.skeleton.getQtn(e.skeleton.getBoneByName(s[1]));
                return t.clone().slerp(n, 0.5);
              }
            }),
            React.createElement(vu, { label: "Clavicle", slot: t, boneID: a })
          );
    }
    var Wu = {
      r: function(e) {
        return qu(
          Object.assign(
            {
              slot: "bodyUpper",
              label: "Right Arm",
              column: 2,
              row: 2,
              thumb: "/static/img/pose/arm-r",
              shoulderBoneID: 123,
              armBoneID: 99,
              elbowBones: [
                "main_armR_03_104_bind_jnt",
                "main_armR_02_101_bind_jnt"
              ],
              elbowBoneID: 104,
              sort: 2
            },
            e
          )
        );
      },
      l: function(e) {
        return qu(
          Object.assign(
            {
              slot: "bodyUpper",
              label: "Left Arm",
              column: 4,
              row: 2,
              thumb: "/static/img/pose/arm-l",
              shoulderBoneID: 36,
              armBoneID: 12,
              elbowBones: [
                "main_armL_02_014_bind_jnt",
                "main_armL_03_017_bind_jnt"
              ],
              elbowBoneID: 17,
              sort: 4
            },
            e
          )
        );
      }
    };
    function Hu(e) {
      var t = e.label,
        n = e.slot,
        r = e.column,
        o = e.row,
        a = e.thumb,
        i = e.boneID,
        s = e.sort;
      return 60 === CK.data.limitedPoses.main
        ? null
        : React.createElement(
            Ru,
            {
              label: t,
              slot: n,
              column: r,
              row: o,
              thumb: a,
              boneID: i,
              transformer: !0,
              sort: s,
              key: t
            },
            React.createElement(vu, { slot: n, boneID: i })
          );
    }
    var Qu = {
      r: function(e) {
        return Hu(
          Object.assign(
            {
              boneID: 149,
              slot: "bodyUpper",
              label: "Right Wrist",
              thumb: "/static/img/pose/hand-r",
              sort: 1,
              column: 2,
              row: 3
            },
            e
          )
        );
      },
      l: function(e) {
        return Hu(
          Object.assign(
            {
              boneID: 63,
              slot: "bodyUpper",
              label: "Left Wrist",
              thumb: "/static/img/pose/hand-l",
              sort: 5,
              column: 4,
              row: 3
            },
            e
          )
        );
      }
    };
    function Xu(e, t, n, r, o, a, i) {
      var s = [];
      return (
        e.map(function(e, r) {
          au.getBone(n, e) &&
            s.push(
              React.createElement(vu, {
                key: r + t,
                slot: n,
                boneID: e,
                label: r + 1
              })
            );
        }),
        s.length
          ? React.createElement(
              Ru,
              {
                label: t,
                slot: n,
                boneID: e[0],
                column: r,
                row: o,
                thumb: a,
                sort: i
              },
              s
            )
          : null
      );
    }
    function Gu(e) {
      return (Gu =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Yu(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function Zu(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ju(e, t) {
      return !t || ("object" !== Gu(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function $u(e) {
      return ($u = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function ep(e, t) {
      return (ep =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var tp = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = Ju(this, $u(t).call(this, e))).refresh = function() {
              return n.forceUpdate();
            }),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && ep(e, t);
          })(t, au),
          (n = t),
          (o = [
            {
              key: "hasChanged",
              value: function(e) {
                var t = e.slot,
                  n = e.boneID,
                  r = CK.data.transforms[t];
                return r && n in r && r[n].scl;
              }
            },
            {
              key: "getClearData",
              value: function(e) {
                return {
                  transforms: Yu({}, e.slot, Yu({}, e.boneID, { scl: void 0 }))
                };
              }
            }
          ]),
          (r = [
            {
              key: "componentDidMount",
              value: function() {
                CK.Events.on("characterFinishedChanging", this.refresh);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                CK.Events.off("characterFinishedChanging", this.refresh);
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  n = this.props,
                  r = n.slot,
                  o = n.label,
                  a = n.boneID,
                  i = n.min,
                  s = n.max;
                i || (i = 1), s || (s = 2);
                var c = CK.data.transforms[r],
                  l = t.hasChanged(this.props),
                  u = CK.display.meshes[r];
                if (!u) return null;
                var p = CK.display.getBoneFromID(u, a);
                if (!p)
                  return React.createElement(
                    "div",
                    null,
                    r,
                    " does not have bone ",
                    a
                  );
                var f = l ? c[a].scl.x : p.scale.x,
                  h = function(e) {
                    return Yu({}, r, Yu({}, a, { scl: { x: e, y: e, z: e } }));
                  };
                return React.createElement(
                  "div",
                  { className: "slider-wrapper" },
                  !this.props.hideLabel &&
                    React.createElement("a", { className: "label" }, o),
                  React.createElement(ls, {
                    min: i,
                    max: s,
                    value: f,
                    onChange: function(t) {
                      t >= i && t <= s
                        ? CK.character.previewTransforms(h(t))
                        : console.warn(
                            "Setting slider ",
                            o,
                            "to out of bounds value",
                            t
                          ),
                        e.refresh();
                    },
                    onAfterChange: function(t, n) {
                      n
                        ? CK.tweak(au.getClearData(e.props))
                        : CK.tweak({ transforms: h(t) });
                    }
                  })
                );
              }
            }
          ]) && Zu(n.prototype, r),
          o && Zu(n, o),
          t
        );
      })(),
      np = [
        "hornSideR",
        "hornSideL",
        "hornFrontR",
        "hornFrontL",
        "hornBackR",
        "hornBackL",
        "hornFront",
        "hornForehead",
        "hornTop"
      ],
      rp = [
        "Horn Right",
        "Horn Left",
        "Horn Front Right",
        "Horn Front Left",
        "Horn Back Right",
        "Horn Back Left",
        "Horn Front",
        "Horn Forehead",
        "Horn Top"
      ];
    function op(e) {
      return (op =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function ap(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function ip(e, t) {
      return !t || ("object" !== op(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function sp(e) {
      return (sp = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function cp(e, t) {
      return (cp =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var lp = [546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557],
      up = [533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544],
      pp = [
        500,
        504,
        505,
        506,
        507,
        508,
        509,
        510,
        511,
        512,
        513,
        514,
        515,
        516,
        517,
        518
      ],
      fp = (function(e) {
        function t(e) {
          var n;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            ((n = ip(this, sp(t).call(this, e))).refresh = function() {
              return n.forceUpdate();
            }),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && cp(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "componentDidMount",
              value: function() {
                CK.Events.on("CharacterFinishedChanging", this.refresh),
                  CK.Events.next("extras-loaded", this.refresh);
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                CK.Events.off("CharacterFinishedChanging", this.refresh),
                  CK.Events.off("extras-loaded", this.refresh);
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props.content
                  ? ql
                  : UIState.compact || !CK.ClientSpecs.specs.cssGrid
                  ? Vu
                  : Zl;
                if (!window.EX)
                  return this.props.content
                    ? React.createElement(
                        "div",
                        { className: "expert-spinner" },
                        React.createElement("img", {
                          src: "/static/svg/spinner.svg",
                          className: "svg-spinner"
                        })
                      )
                    : null;
                var t = !!CK.display.meshes.itemD,
                  n = CK.display.armHasIK() && !!CK.display.meshes.mount,
                  r = CK.display.armHasIK(!0) && !!CK.display.meshes.mount,
                  o = CK.displayData.parts.hair,
                  a = !(
                    !o ||
                    ![
                      "poseable",
                      "ponytailJoints",
                      "braidJoints",
                      "looseHairJoints"
                    ].find(function(e) {
                      return !!o.keywords[e];
                    })
                  ),
                  i = lp[0],
                  s = a && (o.keywords.ponytailJoints || au.getBone("hair", i)),
                  c = !(
                    !CK.displayData.parts.back ||
                    !CK.displayData.parts.back.keywords.cape
                  ),
                  l = !(10246 !== CK.data.parts.face),
                  u = !!CK.data.parts.itemTail,
                  p = 0.999 * Math.PI,
                  f = Math.PI / 2,
                  h = new RK.Vec3(0, 1, 0),
                  m = new RK.Vec3(0, -1, 0),
                  d = new RK.Vec3(0, 0, 1),
                  y = {
                    x: [-p, p],
                    y: [f, -f],
                    z: [f, -f],
                    order: "swingtwist",
                    orient: new RK.Quaternion()
                      .setFromUnitVectors(h, m)
                      .toSimple()
                  },
                  b = {
                    x: [-p, p],
                    y: [f, -f],
                    z: [f, -f],
                    order: "swingtwist",
                    orient: new RK.Quaternion()
                      .setFromUnitVectors(h, d)
                      .toSimple()
                  };
                new RK.Quaternion()
                  .setFromUnitVectors(
                    new RK.Vec3(0, 1, 0),
                    new RK.Vec3(1, 0, 0)
                  )
                  .toSimple();
                return React.createElement(
                  e,
                  { menuOnly: this.props.menu },
                  Lu("item0R", "Right Handheld A", 198),
                  Lu("item1R", "Right Handheld C", 198),
                  Lu("item0L", "Left Handheld A", 194),
                  Lu("item1L", "Left Handheld C", 194),
                  t
                    ? [Lu("itemD", "Handheld", 501)]
                    : [
                        Lu("itemR", "Right Handheld", 198),
                        Lu("itemL", "Left Handheld", 194),
                        !n && Wu.r(),
                        !r && Wu.l(),
                        Wu.r({
                          slot: "bodyUpper0",
                          column: 1,
                          row: 1,
                          sort: 9,
                          label: "Right Arm A"
                        }),
                        Wu.l({
                          slot: "bodyUpper0",
                          column: 5,
                          row: 1,
                          sort: 10,
                          label: "Left Arm A"
                        }),
                        Wu.r({
                          slot: "bodyUpper1",
                          column: 1,
                          row: 3,
                          sort: 11,
                          label: "Right Arm C"
                        }),
                        Wu.l({
                          slot: "bodyUpper1",
                          column: 5,
                          row: 3,
                          sort: 12,
                          label: "Left Arm C"
                        }),
                        !n && Qu.r(),
                        !r && Qu.l(),
                        Qu.r({
                          label: "Right Wrist A",
                          slot: "bodyUpper0",
                          column: 1,
                          row: 2,
                          sort: 15
                        }),
                        Qu.l({
                          label: "Left Wrist A",
                          slot: "bodyUpper0",
                          column: 5,
                          row: 2,
                          sort: 16
                        }),
                        Qu.r({
                          label: "Right Wrist C",
                          slot: "bodyUpper1",
                          column: 1,
                          row: 4,
                          sort: 17
                        }),
                        Qu.l({
                          label: "Left Wrist C",
                          slot: "bodyUpper1",
                          column: 5,
                          row: 4,
                          sort: 18
                        })
                      ],
                  t && !1,
                  React.createElement(
                    Ru,
                    {
                      label: "Right Pauldron",
                      slot: "shouldersR",
                      transformer: !0,
                      boneID: 201,
                      sort: 20
                    },
                    React.createElement(vu, {
                      slot: "shouldersR",
                      boneID: 201
                    }),
                    React.createElement(au, {
                      slot: "shouldersR",
                      label: "Up",
                      boneID: 201,
                      axis: "y",
                      transform: "position"
                    }),
                    React.createElement(au, {
                      slot: "shouldersR",
                      label: "Side",
                      boneID: 201,
                      axis: "x",
                      transform: "position"
                    }),
                    React.createElement(au, {
                      slot: "shouldersR",
                      label: "Forward",
                      boneID: 201,
                      axis: "z",
                      transform: "position"
                    })
                  ),
                  React.createElement(
                    Ru,
                    {
                      label: "Left Pauldron",
                      slot: "shouldersL",
                      mirrored: !0,
                      transformer: !0,
                      boneID: 197,
                      sort: 21
                    },
                    React.createElement(vu, {
                      slot: "shouldersL",
                      boneID: 197
                    }),
                    React.createElement(au, {
                      slot: "shouldersL",
                      label: "Up",
                      boneID: 197,
                      axis: "y",
                      transform: "position"
                    }),
                    React.createElement(au, {
                      slot: "shouldersL",
                      label: "Side",
                      boneID: 197,
                      axis: "x",
                      transform: "position"
                    }),
                    React.createElement(au, {
                      slot: "shouldersL",
                      label: "Forward",
                      boneID: 197,
                      axis: "z",
                      transform: "position"
                    })
                  ),
                  React.createElement(
                    Ru,
                    {
                      label: "Right Wing",
                      slot: "wingsR",
                      mirrored: !0,
                      sort: 23,
                      boneID: 500,
                      transformer: !0
                    },
                    React.createElement(vu, { slot: "wingsR", boneID: 500 })
                  ),
                  React.createElement(
                    Ru,
                    {
                      label: "Left Wing",
                      slot: "wingsL",
                      sort: 24,
                      boneID: 500,
                      transformer: !0
                    },
                    React.createElement(vu, { slot: "wingsL", boneID: 500 })
                  ),
                  Xu(pp, "Tail", "tail"),
                  Xu(pp, "Tail 2", "tail0"),
                  Xu(pp, "Tail 3", "tail1"),
                  Xu(pp, "Tail 4", "tail2"),
                  Xu(pp, "Tail 5", "tail3"),
                  Xu(pp, "Tail 6", "tail4"),
                  Xu(pp, "Tail 7", "tail5"),
                  Xu(pp, "Tail 8", "tail6"),
                  Xu(pp, "Tail 9", "tail7"),
                  Xu(
                    [91, 93, 95],
                    "Head",
                    "bodyUpper",
                    3,
                    1,
                    "/static/img/pose/head",
                    6
                  ),
                  !n &&
                    !r &&
                    Xu(
                      [177, 180, 184],
                      "Torso",
                      "bodyUpper",
                      3,
                      2,
                      "/static/img/pose/torso",
                      7
                    ),
                  Xu([501, 502, 503, 504, 505, 506, 507], "Beard", "beard"),
                  a && Xu(s ? lp : up, "Hair", "hair"),
                  c &&
                    Xu(
                      [500, 501, 502, 503, 504, 505, 506, 507],
                      "Back",
                      "back"
                    ),
                  l &&
                    Xu(
                      [
                        500,
                        501,
                        502,
                        503,
                        504,
                        505,
                        506,
                        507,
                        508,
                        509,
                        510,
                        511,
                        512
                      ],
                      "Trunk",
                      "face"
                    ),
                  l &&
                    Lu(
                      "itemTrunk",
                      "Trunk Item",
                      "trunk_itemSnap_513_bind_jnt"
                    ),
                  u && Lu("itemTail", "Tail Item", "tail_01_513_bind_jnt"),
                  React.createElement(
                    Ru,
                    {
                      label: "Right Back Item",
                      slot: "backItemR",
                      mirrored: !0,
                      sort: 27,
                      boneID: "backItemR_transform_jnt",
                      transformer: !0
                    },
                    React.createElement(vu, {
                      slot: "backItemR",
                      boneID: "backItemR_transform_jnt",
                      coneLimit: b
                    })
                  ),
                  React.createElement(
                    Ru,
                    {
                      label: "Left Back Item",
                      slot: "backItemL",
                      sort: 28,
                      boneID: "backItemL_transform_jnt",
                      transformer: !0
                    },
                    React.createElement(vu, {
                      slot: "backItemL",
                      boneID: "backItemL_transform_jnt",
                      coneLimit: y
                    })
                  ),
                  np.map(function(e, t) {
                    return React.createElement(
                      Ru,
                      {
                        key: e,
                        label: rp[t],
                        slot: e,
                        sort: 37,
                        boneID: "".concat(e, "_pivot_jnt"),
                        mirrored: e.endsWith("L"),
                        transformer: !0
                      },
                      React.createElement(vu, {
                        slot: e,
                        boneID: "".concat(e, "_pivot_jnt")
                      }),
                      React.createElement(tp, {
                        slot: e,
                        boneID: "".concat(e, "_pivot_jnt"),
                        max: 1.8,
                        min: 1,
                        label: "Scale"
                      })
                    );
                  }),
                  !1,
                  !1,
                  (function() {
                    var e = CK.display.meshes.baseItem,
                      t = CK.displayData.parts.baseRim;
                    if (!e || !t) return null;
                    var n =
                        t.name.endsWith("_square") ||
                        t.name.endsWith("_squarelong"),
                      r = t.name.endsWith("long"),
                      o = e.skeleton.obj.children
                        .filter(function(e) {
                          return e.isBone;
                        })
                        .map(function(e, t) {
                          var o = function(t) {
                              if (r)
                                return "x" === t ? [-0.8, 0.8] : [-1.7, 1.7];
                              if (n) return Ou;
                              var o = CK.display.getTransform(
                                "baseItem",
                                e.name,
                                "pos"
                              );
                              if (!o) return console.error("No transform"), Ou;
                              var a = o.x,
                                i = o.z;
                              if ("x" === t) {
                                var s = Math.sqrt(Su * Su - i * i);
                                return s < 0.02 && (s = 0.02), [-s, s];
                              }
                              var c = Math.sqrt(Su * Su - a * a);
                              return c < 0.02 && (c = 0.02), [-c, c];
                            },
                            a = e.name,
                            i = CK.display.meshes.baseItem.skeleton.getQtn(e),
                            s = new RK.Vec3(0, 1, 0).applyQuaternion(
                              i.clone().inverse()
                            ),
                            c = new RK.Quaternion().setFromUnitVectors(
                              new RK.Vec3(1, 0, 0),
                              s
                            ),
                            l = 0.999 * Math.PI,
                            u = {
                              x: [-l, l],
                              y: [Math.PI, -Math.PI],
                              z: [Math.PI, -Math.PI],
                              order: "swingtwist",
                              orient: c.toSimple()
                            };
                          return React.createElement(
                            "div",
                            { className: "expertPosing-group", key: t },
                            React.createElement(
                              "div",
                              { className: "expertPosing-group-label" },
                              "Item " + (t + 1)
                            ),
                            React.createElement(au, {
                              slot: "baseItem",
                              label: "Forwards",
                              transform: "position",
                              boneID: a,
                              axis: "z",
                              limit: function() {
                                return o("z");
                              },
                              disableMark: !0
                            }),
                            React.createElement(au, {
                              slot: "baseItem",
                              label: "Sideways",
                              transform: "position",
                              boneID: a,
                              axis: "x",
                              limit: function() {
                                return o("x");
                              },
                              disableMark: !0
                            }),
                            React.createElement(vu, {
                              slot: "baseItem",
                              boneID: a,
                              coneLimit: u,
                              gizmoScale: 2,
                              label: "Twist",
                              hideLabel: !0,
                              borderless: !0
                            })
                          );
                        });
                    return React.createElement(
                      Ru,
                      { label: "Base Items", slot: "baseItem" },
                      o
                    );
                  })()
                );
              }
            }
          ]) && ap(n.prototype, r),
          o && ap(n, o),
          t
        );
      })();
    function hp(e) {
      return (hp =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function mp(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function dp(e, t) {
      return !t || ("object" !== hp(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function yp(e) {
      return (yp = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function bp(e, t) {
      return (bp =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var vp = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          dp(this, yp(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && bp(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "renderBtn",
            value: function(e) {
              return React.createElement(Ue, {
                key: e,
                option: new Re({
                  thumb: "static/svg/arms/arms-".concat(e || 0, ".svg"),
                  onClick: function() {
                    return CK.tweak({ custom: { arms: e } });
                  },
                  selected: CK.data.custom.arms === e
                })
              });
            }
          },
          {
            key: "render",
            value: function() {
              return null;
            }
          }
        ]) && mp(n.prototype, r),
        o && mp(n, o),
        t
      );
    })();
    function gp(e) {
      return (gp =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function wp(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function _p(e, t) {
      return !t || ("object" !== gp(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Cp(e) {
      return (Cp = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function kp(e, t) {
      return (kp =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Rp = [
        { slug: "instrument", label: "Instruments" },
        { slug: "shortblade", label: "Short Blades" },
        { slug: "sword", label: "Long Blades" },
        { slug: "axe", label: "Axes" },
        { slug: "blunt", label: "Blunt Weapons" },
        { slug: "polearm", label: "Polearms" },
        { slug: "staff", label: "Staffs" },
        { slug: "shield", label: "Shields" },
        { slug: "bow", label: "Bows & Arrows" },
        { slug: "quiver", label: "Quivers" },
        { slug: "crossbow", label: "Crossbows" },
        { slug: "pistol", label: "Pistols" },
        { slug: "rifle", label: "Long Guns" },
        { slug: "miscellaneous", label: "Other" }
      ],
      Sp = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            _p(this, Cp(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && kp(e, t);
          })(t, React.Component),
          (n = t),
          (o = [
            {
              key: "getSelected",
              value: function() {
                return UIState.backItemFilter || "instrument";
              }
            }
          ]),
          (r = [
            {
              key: "render",
              value: function() {
                var e,
                  n = t.getSelected(),
                  r = Rp.map(function(t) {
                    var r = new Re({
                      label: t.label,
                      onClick: function() {
                        return UIState.set({ backItemFilter: t.slug });
                      },
                      thumb: "/static/svg/items/".concat(t.slug, ".svg")
                    });
                    return t.slug === n && (e = r), r;
                  });
                return React.createElement(Zr, { options: r, selected: e });
              }
            }
          ]) && wp(n.prototype, r),
          o && wp(n, o),
          t
        );
      })();
    function Op(e) {
      return (Op =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Ep(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function xp(e, t) {
      return !t || ("object" !== Op(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function jp(e) {
      return (jp = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Pp(e, t) {
      return (Pp =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    Sp.filters = Rp;
    var Mp = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((n = xp(this, jp(t).call(this, e))).state = { activeMenu: "back" }),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Pp(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "hasAttachR",
            value: function() {
              return (
                CK.displayData.parts.backItemR &&
                CK.displayData.parts.backItemR.keywords.quiver
              );
            }
          },
          {
            key: "hasAttachL",
            value: function() {
              return (
                CK.displayData.parts.backItemL &&
                CK.displayData.parts.backItemL.keywords.quiver
              );
            }
          },
          {
            key: "renderNav",
            value: function() {
              var e = this,
                t = [{ slug: "back", label: "Back Items" }];
              return (
                this.hasAttachR() &&
                  t.push({ slug: "extraR", label: "Arrows R" }),
                this.hasAttachL() &&
                  t.push({ slug: "extraL", label: "Arrows L" }),
                React.createElement(sr, {
                  nav: t,
                  onItemClick: function(t) {
                    return e.setState({ activeMenu: t });
                  }
                })
              );
            }
          },
          {
            key: "render",
            value: function() {
              var e = Sp.filters,
                t = Sp.getSelected(),
                n = e.find(function(e) {
                  return e.slug === t;
                });
              return React.createElement(
                mr,
                {
                  pinned: React.createElement(
                    React.Fragment,
                    null,
                    " ",
                    this.renderNav(),
                    " ",
                    "back" === this.state.activeMenu &&
                      React.createElement(Sp, null),
                    "  "
                  ),
                  pinnedNoPadding: !!UIState.compact
                },
                "extraR" === this.state.activeMenu &&
                  React.createElement($e, {
                    label: "extras",
                    slot: "backItemAttachR"
                  }),
                "extraL" === this.state.activeMenu &&
                  React.createElement($e, {
                    label: "extras",
                    slot: "backItemAttachL"
                  }),
                "back" === this.state.activeMenu &&
                  React.createElement(qo, {
                    label: n.label,
                    slot: "backItem",
                    hasClear: !0,
                    test: function(e) {
                      return e.keywords[n.slug] && !e.keywords.backExclude;
                    },
                    clearTransforms: !0
                  })
              );
            }
          }
        ]) && Ep(n.prototype, r),
        o && Ep(n, o),
        t
      );
    })();
    function Tp(e) {
      return (Tp =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Kp(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ip(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Np(e, t, n) {
      return t && Ip(e.prototype, t), n && Ip(e, n), e;
    }
    function Lp(e, t) {
      return !t || ("object" !== Tp(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Up(e) {
      return (Up = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Dp(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      })),
        t && zp(e, t);
    }
    function zp(e, t) {
      return (zp =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Ap = (function(e) {
        function t() {
          return Kp(this, t), Lp(this, Up(t).apply(this, arguments));
        }
        return (
          Dp(t, React.Component),
          Np(t, [
            {
              key: "render",
              value: function() {
                var e = Fp.filters,
                  t = Fp.getSelected(),
                  n = e.find(function(e) {
                    return e.slug === t;
                  });
                return React.createElement(
                  mr,
                  {
                    pinned: React.createElement(Fp, null),
                    pinnedNoPadding: !!UIState.compact
                  },
                  React.createElement($e, {
                    label: n.label,
                    slot: this.props.slot,
                    test: function(e) {
                      return e.keywords[n.slug] && !e.keywords.trunkExclude;
                    },
                    clearTransforms: !0
                  })
                );
              }
            }
          ]),
          t
        );
      })(),
      Bp = [
        { slug: "instrument", label: "Instruments" },
        { slug: "shortblade", label: "Short Blades" },
        { slug: "sword", label: "Long Blades" },
        { slug: "axe", label: "Axes" },
        { slug: "blunt", label: "Blunt Weapons" },
        { slug: "polearm", label: "Polearms" },
        { slug: "staff", label: "Staffs" },
        { slug: "shield", label: "Shields" },
        { slug: "bow", label: "Bows & Arrows" },
        { slug: "crossbow", label: "Crossbows" },
        { slug: "pistol", label: "Pistols" },
        { slug: "rifle", label: "Long Guns" },
        { slug: "miscellaneous", label: "Other" }
      ],
      Fp = (function(e) {
        function t() {
          return Kp(this, t), Lp(this, Up(t).apply(this, arguments));
        }
        return (
          Dp(t, React.Component),
          Np(
            t,
            [
              {
                key: "render",
                value: function() {
                  var e,
                    n = t.getSelected(),
                    r = Bp.map(function(t) {
                      var r = new Re({
                        label: t.label,
                        onClick: function() {
                          return UIState.set({ backItemFilter: t.slug });
                        },
                        thumb: "/static/svg/items/".concat(t.slug, ".svg")
                      });
                      return t.slug === n && (e = r), r;
                    });
                  return React.createElement(Zr, { options: r, selected: e });
                }
              }
            ],
            [
              {
                key: "getSelected",
                value: function() {
                  return UIState.backItemFilter || "instrument";
                }
              }
            ]
          ),
          t
        );
      })();
    function Vp(e) {
      return (Vp =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function qp(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Wp(e, t) {
      return !t || ("object" !== Vp(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Hp(e) {
      return (Hp = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Qp(e, t) {
      return (Qp =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    Fp.filters = Bp;
    var Xp = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Wp(this, Hp(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Qp(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "renderBtn",
            value: function(e) {
              return React.createElement(Ue, {
                key: e,
                option: new Re({
                  thumb: "static/svg/tails/tail-".concat(e || 0, ".svg"),
                  onClick: function() {
                    return CK.tweak({ custom: { tails: e } });
                  },
                  selected: CK.data.custom.tails === e
                })
              });
            }
          },
          {
            key: "render",
            value: function() {
              return null;
            }
          }
        ]) && qp(n.prototype, r),
        o && qp(n, o),
        t
      );
    })();
    function Gp(e) {
      return (Gp =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Yp(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Zp(e, t) {
      return !t || ("object" !== Gp(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Jp(e) {
      return (Jp = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function $p(e, t) {
      return ($p =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ef = [
      "bodyMiscBack",
      "bodyMiscLegsL",
      "bodyMiscLegsR",
      "bodyMiscArmsL",
      "bodyMiscArmsR",
      "bodyMiscChest",
      "bodyMiscFeetL",
      "bodyMiscFeetR"
    ];
    function tf() {
      60 !== CK.getPose() && CK.character.changeSettings({ camera: "face" });
    }
    function nf() {
      CK.character.changeSettings({ camera: void 0 });
    }
    var rf = (function(e) {
      function t(e) {
        var n;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          (n = Zp(this, Jp(t).call(this, e))),
          CKUI.checkSizing(),
          n
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && $p(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "clearBodyExtra",
            value: function() {
              var e = {};
              ef.map(function(t) {
                return (e[t] = void 0);
              }),
                CK.tweak({ parts: e });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this,
                n = CK.data.custom.arms,
                r = a.isExtraTall(),
                o = 10119 === CK.data.parts.bodyLower,
                i = 10418 === CK.data.parts.bodyLower,
                s = CK.serverTime > 1570496430 || !1;
              return (
                !t.clearedOldBackItems &&
                  CK.Options.parts &&
                  s &&
                  (_e.allOldBackItems.map(function(e) {
                    return (CK.Options.parts[e].keywords.unselectable = !0);
                  }),
                  (t.clearedOldBackItems = !0)),
                React.createElement(
                  "div",
                  {
                    className:
                      (UIState.compact
                        ? "compact-layout" +
                          (UIState.collapsed ? " main-menu-Tabs" : "")
                        : "desktop-layout") +
                      " " +
                      (UIState.landscape
                        ? "landscape-layout"
                        : "portrait-layout")
                  },
                  React.createElement(_t.a, null),
                  React.createElement(
                    Kn,
                    { showExtraMenu: !0 },
                    React.createElement(dc, { label: "My Characters" })
                  ),
                  React.createElement(
                    "div",
                    { className: "app-wrapper" },
                    !1,
                    React.createElement(f, null),
                    React.createElement(za, null),
                    React.createElement(Ec, null),
                    React.createElement(Is, null),
                    React.createElement(
                      Ri,
                      {
                        defaultSelection: "Races",
                        footer: React.createElement(al, null)
                      },
                      !1,
                      React.createElement(
                        ns,
                        { label: "Races" },
                        React.createElement(Pa, {
                          category: "racegenders",
                          columns: 2,
                          label: "Races"
                        })
                      ),
                      React.createElement(
                        ns,
                        { onOpen: tf, onClose: nf, label: "Head" },
                        React.createElement(
                          mr,
                          {
                            label: "Face",
                            hasFilter: !0,
                            pinned: React.createElement(ys, {
                              name: "faceSoftness",
                              label: "Softness"
                            })
                          },
                          React.createElement($e, { label: "Face" })
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Expression",
                            extraClass: "expression",
                            pinned: React.createElement(Ra, {
                              category: "expression",
                              ignoreGenre: !0,
                              showSelected: !1
                            })
                          },
                          React.createElement(Cs, {
                            label: "Expression",
                            maxCombinedValue: 1.5,
                            sliders: [
                              ["Smile", "xprsn_smile"],
                              ["Cocky", "xprsn_cocky"],
                              ["Snarl", "xprsn_snarl"],
                              ["Confused", "xprsn_confused"]
                            ]
                          }),
                          React.createElement(ys, {
                            name: "jaw",
                            label: "AAAARRRGGGGHH!!!"
                          }),
                          !1,
                          !1
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Ears",
                            hasFilter: !0,
                            slot: "ear",
                            hasClear: !0
                          },
                          React.createElement(qo, {
                            label: "Ears",
                            slot: "ear",
                            linkedDefault: !0
                          })
                        ),
                        React.createElement(
                          mr,
                          { label: "Hair", hasFilter: !0, hasClear: !0 },
                          React.createElement($e, {
                            label: "Hair",
                            clearTransforms: !0
                          })
                        ),
                        React.createElement(
                          mr,
                          { label: "Beard", hasFilter: !0, hasClear: !0 },
                          React.createElement($e, { label: "Beard" })
                        ),
                        React.createElement(
                          mr,
                          { label: "Eyebrows", hasFilter: !0, hasClear: !0 },
                          React.createElement($e, { label: "Eyebrows" })
                        ),
                        React.createElement(
                          mr,
                          { label: "Eyes", hasFilter: !0, slot: "eye" },
                          React.createElement(qo, {
                            slot: "eye",
                            label: "Eyes",
                            linkedDefault: !0
                          })
                        ),
                        React.createElement(
                          mr,
                          { label: "Teeth", hasFilter: !0, hasClear: !0 },
                          React.createElement($e, { label: "Teeth" })
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Horns",
                            hasFilter: !0,
                            slot: "horn",
                            hasClear: !0
                          },
                          React.createElement(qo, {
                            slot: "horn",
                            label: "Horns",
                            linkedDefault: !0
                          })
                        ),
                        !1,
                        React.createElement(
                          mr,
                          {
                            label: "Additional",
                            hasFilter: !0,
                            slot: "bodyMiscHead",
                            hasClear: !0
                          },
                          React.createElement($e, {
                            label: "bodyMiscHead",
                            slot: "bodyMiscHead"
                          })
                        )
                      ),
                      React.createElement(
                        ns,
                        { label: "Body" },
                        React.createElement(
                          mr,
                          {
                            label: "Torso",
                            slot: "bodyUpper",
                            hasFilter: !0,
                            hasClear: !0,
                            pinned: React.createElement(vp, null)
                          },
                          React.createElement($e, {
                            label: "Torso",
                            slot: "bodyUpper"
                          })
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Legs",
                            hasFilter: !0,
                            hasClear: !0,
                            slot: "bodyLower"
                          },
                          React.createElement($e, {
                            label: "Legs",
                            slot: "bodyLower"
                          })
                        ),
                        React.createElement(
                          mr,
                          { label: "Measurements" },
                          React.createElement(Ol, { label: "Measurements" })
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Wings",
                            hasFilter: !0,
                            hasClear: !0,
                            slot: "wings"
                          },
                          React.createElement(qo, {
                            label: "Wings",
                            slot: "wings",
                            flip: !0,
                            linkedDefault: !0
                          })
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Tail",
                            hasFilter: !0,
                            hasClear: !0,
                            pinned: React.createElement(Xp, null)
                          },
                          React.createElement($e, { label: "Tail" })
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Additional",
                            hasFilter: !0,
                            hasClear: !!ef.find(function(e) {
                              return e in CK.data.parts;
                            }),
                            clear: function() {
                              return e.clearBodyExtra();
                            }
                          },
                          React.createElement($e, {
                            slot: "bodyMiscBack",
                            label: "",
                            header: React.createElement(
                              "div",
                              { style: { marginTop: 10 } },
                              "Back"
                            ),
                            hideIfEmpty: !0
                          }),
                          React.createElement(qo, {
                            slot: "bodyMiscLegs",
                            label: "",
                            linkedDefault: !0,
                            header: React.createElement(
                              "div",
                              { style: { marginTop: 30 } },
                              "Legs"
                            ),
                            hideIfEmpty: !0
                          }),
                          React.createElement(qo, {
                            slot: "bodyMiscArms",
                            label: "",
                            linkedDefault: !0,
                            header: React.createElement(
                              "div",
                              { style: { marginTop: 30 } },
                              "Arms"
                            ),
                            hideIfEmpty: !0
                          }),
                          React.createElement($e, {
                            slot: "bodyMiscChest",
                            label: "",
                            header: React.createElement(
                              "div",
                              { style: { marginTop: 30 } },
                              "Chest"
                            ),
                            hideIfEmpty: !0
                          }),
                          React.createElement(qo, {
                            slot: "bodyMiscFeet",
                            label: "",
                            linkedDefault: !0,
                            header: React.createElement(
                              "div",
                              { style: { marginTop: 30 } },
                              "Feet"
                            ),
                            hideIfEmpty: !0
                          })
                        )
                      ),
                      React.createElement(
                        ns,
                        { label: "Outfits" },
                        React.createElement(
                          mr,
                          { label: "Outfits" },
                          React.createElement(Tl, {
                            label: "Outfits",
                            category: "armorSets",
                            columns: 4
                          })
                        )
                      ),
                      React.createElement(
                        ns,
                        { label: "Clothing" },
                        React.createElement(qr, {
                          label: "Headwear",
                          hasFilter: !0,
                          slot: "helm",
                          hasClear: !0
                        }),
                        !1,
                        React.createElement(
                          mr,
                          { label: "Shoulders", hasFilter: !0, hasClear: !0 },
                          React.createElement(qo, {
                            label: "Shoulders",
                            linkedDefault: !0
                          })
                        ),
                        React.createElement(
                          mr,
                          { label: "Chest", hasFilter: !0, hasClear: !0 },
                          React.createElement($e, { label: "Chest" })
                        ),
                        CK.serverTime > 1572310861 &&
                          React.createElement(
                            mr,
                            { label: "Rings", slot: "ring", hasFilter: !0 },
                            React.createElement(va, {
                              label: "Rings",
                              slot: "ring"
                            })
                          ),
                        n &&
                          React.createElement(
                            mr,
                            {
                              label: "Gloves A",
                              slot: "gloves0",
                              hasFilter: !0
                            },
                            React.createElement(qo, {
                              label: "Gloves A",
                              slot: "gloves0",
                              linkedDefault: !0
                            })
                          ),
                        React.createElement(
                          mr,
                          {
                            label: n ? "Gloves B" : "Gloves",
                            slot: "gloves",
                            hasFilter: !0,
                            hasClear: !0
                          },
                          React.createElement(qo, {
                            label: n ? "Gloves B" : "Gloves",
                            slot: "gloves",
                            linkedDefault: !0
                          })
                        ),
                        n >= 2 &&
                          React.createElement(
                            mr,
                            {
                              label: "Gloves C",
                              slot: "gloves1",
                              hasFilter: !0
                            },
                            React.createElement(qo, {
                              label: "Gloves C",
                              slot: "gloves1",
                              linkedDefault: !0
                            })
                          ),
                        React.createElement(
                          mr,
                          { label: "Legs", hasFilter: !0, hasClear: !0 },
                          React.createElement($e, {
                            label: "Legs",
                            test:
                              !o &&
                              !i &&
                              function(e) {
                                return !e.keywords.bipedUnselectable;
                              }
                          })
                        ),
                        React.createElement(
                          mr,
                          { label: "Feet", hasFilter: !0, hasClear: !0 },
                          React.createElement(qo, {
                            label: "Feet",
                            linkedDefault: !0
                          })
                        )
                      ),
                      React.createElement(
                        ns,
                        { label: "Gear" },
                        n &&
                          React.createElement(bo, {
                            slot: "item0",
                            label: "Hands A",
                            itemD: !1,
                            hasFilter: !0,
                            hasClear: !0,
                            clear: function() {
                              return pt.clearClick("item0R", "item0L");
                            }
                          }),
                        React.createElement(bo, {
                          slot: "item",
                          label: n ? "Hands B" : "Hands",
                          itemD: !n,
                          hasFilter: !0,
                          hasClear: !0,
                          clear: function() {
                            return pt.clearClick("itemR", "itemL");
                          }
                        }),
                        n >= 2 &&
                          React.createElement(bo, {
                            slot: "item1",
                            label: "Hands C",
                            itemD: !1,
                            hasFilter: !0,
                            hasClear: !0,
                            clear: function() {
                              return pt.clearClick("item1R", "item1L");
                            }
                          }),
                        10246 === CK.data.parts.face &&
                          React.createElement(Ap, {
                            slot: "itemTrunk",
                            label: "Trunk",
                            hasFilter: !0,
                            hasClear: !0
                          }),
                        !!CK.data.parts.tail && !1,
                        React.createElement(Yo, {
                          label: "Side",
                          hasFilter: !0,
                          hasClear: !0
                        }),
                        React.createElement(
                          mr,
                          {
                            label: "Back",
                            hasFilter: !0,
                            slot: "back",
                            hasClear: !0,
                            navAuto: !0
                          },
                          React.createElement($e, {
                            label: "Main",
                            slot: "back",
                            clearTransforms: !0
                          }),
                          React.createElement($e, {
                            hideIfEmpty: !0,
                            label: "Extra",
                            slot: "backAttach"
                          })
                        ),
                        s &&
                          React.createElement(Mp, {
                            label: "Back Items",
                            hasFilter: !0,
                            slot: "backItem",
                            hasClear: !0
                          }),
                        React.createElement(
                          mr,
                          {
                            label: "Mask",
                            hasFilter: !0,
                            slot: "mask",
                            hasClear: !0
                          },
                          React.createElement($e, {
                            label: "Mask",
                            slot: "mask"
                          })
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Eye",
                            hasFilter: !0,
                            slot: "faceUpper",
                            hasClear: !0
                          },
                          React.createElement($e, {
                            label: "Eye",
                            slot: "faceUpper"
                          })
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Mouth",
                            hasFilter: !0,
                            slot: "faceLower",
                            hasClear: !0
                          },
                          React.createElement($e, {
                            label: "Mouth",
                            slot: "faceLower"
                          })
                        )
                      ),
                      React.createElement(
                        ns,
                        { label: "Base", onClose: qc.onClose },
                        React.createElement(
                          mr,
                          {
                            label: "Items",
                            slot: "baseItem",
                            hasFilter: !0,
                            hasClear: !0
                          },
                          React.createElement($e, {
                            label: "Items",
                            slot: "baseItem",
                            clearTransforms: !0
                          })
                        ),
                        React.createElement(
                          mr,
                          {
                            label: "Base",
                            pinned: Ta.clipSize(),
                            slot: "base",
                            hasClear: !0
                          },
                          React.createElement($e, {
                            label: "Base",
                            columns: 3,
                            test: function(e) {
                              return !e.keywords.initiative || !r;
                            }
                          })
                        ),
                        !1,
                        React.createElement(qc, {
                          label: "Label",
                          slot: "label",
                          hasClear: !0
                        }),
                        !1
                      ),
                      React.createElement(
                        ns,
                        { label: "Mount" },
                        React.createElement(la, { label: "Mount" })
                      ),
                      React.createElement(
                        ns,
                        { label: "Pose" },
                        React.createElement(
                          mr,
                          {
                            label: "Character",
                            pinned: React.createElement(
                              "div",
                              {
                                style: {
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center"
                                }
                              },
                              React.createElement(
                                "div",
                                {
                                  onClick: function() {
                                    CK.mirror();
                                  },
                                  className:
                                    "button " +
                                    (CK.data.mirroredPose ? "selected" : "")
                                },
                                React.createElement("img", {
                                  src: "/static/svg/mirror.svg",
                                  width: 46,
                                  height: 46
                                }),
                                React.createElement(
                                  "div",
                                  { style: { fontSize: "small" } },
                                  "Mirror"
                                )
                              )
                            )
                          },
                          React.createElement(xs, { label: "Pose" })
                        ),
                        (CK.serverTime, !1),
                        (CK.serverTime, !1),
                        React.createElement(
                          mr,
                          {
                            label: "Advanced",
                            pinned: React.createElement(fp, null),
                            hasClear: !0,
                            clear: function() {
                              return CK.clearTransforms();
                            }
                          },
                          React.createElement(fp, {
                            content: !0,
                            label: "Advanced"
                          })
                        )
                      ),
                      !1,
                      !1,
                      UIState.compact &&
                        !CK.Settings.color &&
                        "1" === CK.Options.elements.colorbanner &&
                        React.createElement(
                          ns,
                          { label: "Color" },
                          React.createElement(
                            mr,
                            { label: "Kickstarter" },
                            React.createElement("img", {
                              src: "/static/img/corner-kickstarter.png",
                              className: "kickstarter"
                            })
                          )
                        ),
                      React.createElement(
                        ns,
                        { label: "Material" },
                        React.createElement(Ur, { label: "Material" })
                      )
                    ),
                    !1,
                    !1,
                    !1,
                    null,
                    !UIState.compact &&
                      "1" === CK.Options.elements.colorbanner &&
                      React.createElement("img", {
                        src: "/static/img/corner-kickstarter.png",
                        className: "corner-kickstarter"
                      }),
                    !UIState.compact && React.createElement(zn, null)
                  ),
                  !UIState.compact && React.createElement(_c, null)
                )
              );
            }
          }
        ]) && Yp(n.prototype, r),
        o && Yp(n, o),
        t
      );
    })();
    function of(e) {
      return (of =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function af(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function sf(e) {
      return (sf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function cf(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function lf(e, t) {
      return (lf =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var uf = MU.withStyles,
      pf = VN.ReactRouter.withRouter,
      ff = VN.classNames,
      hf = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            (n =
              !(o = sf(t).call(this, e)) ||
              ("object" !== of(o) && "function" != typeof o)
                ? cf(r)
                : o),
            (UIState.compact = !0),
            (n.exitCart = n.exitCart.bind(cf(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && lf(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "exitCart",
              value: function() {
                (UIState.showOverlay = !1),
                  UIState.updateBasketQuantity(),
                  this.props.history.push("/");
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.portrait
                    ? "compact-layout portrait"
                    : "compact-layout landscape",
                  n = this.props.classes,
                  r = CK.Settings.theme,
                  o = React.createElement(window.Cart.CartContainer, {
                    theme: r
                  });
                return React.createElement(
                  "div",
                  { id: "mobileApp", className: ff(t, n.mobileApp) },
                  React.createElement(za, { hidden: !0 }),
                  React.createElement(
                    "div",
                    { id: "mobileHeader", className: n.mobileHeader },
                    React.createElement("div", {
                      id: "mobileLogo",
                      className: n.mobileLogo,
                      onClick: function() {
                        return e.exitCart();
                      }
                    })
                  ),
                  o
                );
              }
            }
          ]) && af(n.prototype, r),
          o && af(n, o),
          t
        );
      })(),
      mf = uf({
        mobileHeader: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          alignSelf: "flex-start",
          position: "absolute",
          top: 0,
          height: "56px",
          left: 0,
          right: 0,
          zIndex: 4,
          flex: "0 1 48px",
          backgroundColor: "white",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.2)"
        },
        mobileApp: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          height: "100%",
          overflow: "hidden"
        },
        mobileLogo: {
          marginLeft: 16,
          marginRight: 20,
          flex: "0 0 32px",
          height: "45px",
          backgroundImage: "url('../../../static/svg/logo.svg')",
          backgroundSize: "32px 45px",
          backgroundRepeat: "no-repeat"
        }
      })(pf(hf));
    function df(e) {
      return (df =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function yf(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function bf(e, t) {
      return !t || ("object" !== df(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function vf(e) {
      return (vf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function gf(e, t) {
      return (gf =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var wf = (function(e) {
      function t(e) {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          bf(this, vf(t).call(this, e))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && gf(e, t);
        })(t, React.Component),
        (n = t),
        (r = [
          {
            key: "render",
            value: function() {
              return React.createElement(
                "div",
                {
                  onClick: this.props.onClick,
                  style: this.props.onClick && { cursor: "pointer" }
                },
                React.createElement(
                  "h1",
                  { id: "logo", className: this.props.className },
                  " ",
                  CK.Settings.projectLabel,
                  " "
                )
              );
            }
          }
        ]) && yf(n.prototype, r),
        o && yf(n, o),
        t
      );
    })();
    function _f(e) {
      return (_f =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Cf(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function kf(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Rf(e) {
      return (Rf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Sf(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Of(e, t) {
      return (Of =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Ef = VN.classNames,
      xf = VN.ReactRouter.withRouter,
      jf = MU.withStyles,
      Pf = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            ((n =
              !(o = Rf(t).call(this, e)) ||
              ("object" !== _f(o) && "function" != typeof o)
                ? Sf(r)
                : o).state = { scrollPosition: 0 }),
            (n.handleScroll = n.handleScroll.bind(Sf(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Of(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "componentDidMount",
              value: function() {
                this.listenForScroll();
              }
            },
            {
              key: "onRouteChanged",
              value: function() {
                this.setState({ scrollPosition: 0 }), this.listenForScroll();
              }
            },
            {
              key: "listenForScroll",
              value: function() {
                document
                  .querySelector("#main > *")
                  .addEventListener("scroll", this.handleScroll);
              }
            },
            {
              key: "handleScroll",
              value: function(e) {
                this.setState({ scrollPosition: e.target.scrollTop });
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {
                var e = document.querySelector("#main > *");
                e && e.removeEventListener("scroll", this);
              }
            },
            {
              key: "componentDidUpdate",
              value: function(e) {
                this.props.location !== e.location && this.onRouteChanged();
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props.classes;
                return this.props.logoOnly
                  ? React.createElement(
                      "div",
                      {
                        id: "cartHeader",
                        className: Ef(
                          this.props.className,
                          Cf(
                            {},
                            e.headerUnderline,
                            this.state.scrollPosition > 0
                          )
                        )
                      },
                      React.createElement("div", null),
                      React.createElement(wf, {
                        onClick: this.props.onClick,
                        className: this.props.logoClass
                      }),
                      React.createElement("div", null)
                    )
                  : React.createElement(
                      "div",
                      {
                        id: "cartHeader",
                        className: Ef(
                          this.props.className,
                          Cf(
                            {},
                            e.headerUnderline,
                            this.state.scrollPosition > 0
                          )
                        )
                      },
                      React.createElement(wf, {
                        onClick: this.props.onClick,
                        className: this.props.logoClass
                      }),
                      React.createElement("div", null, this.props.children),
                      React.createElement("div", null)
                    );
              }
            }
          ]) && kf(n.prototype, r),
          o && kf(n, o),
          t
        );
      })(),
      Mf = jf({ headerUnderline: { borderBottom: "1px solid #EAEAEA" } })(
        xf(Pf)
      );
    function Tf(e) {
      return (Tf =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Kf(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function If(e) {
      return (If = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Nf(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Lf(e, t) {
      return (Lf =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Uf = MU.withStyles,
      Df = VN.ReactRouter.withRouter,
      zf = VN.classNames,
      Af = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            (n =
              !(o = If(t).call(this, e)) ||
              ("object" !== Tf(o) && "function" != typeof o)
                ? Nf(r)
                : o),
            (UIState.compact = !1),
            (n.exitCart = n.exitCart.bind(Nf(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Lf(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "viewNotInCheckoutFlow",
              value: function() {
                var e = this.props.history.location.pathname;
                return (
                  "/cart" == e ||
                  "/cart/" == e ||
                  ("/cart/login" == e || "/cart/login/" == e)
                );
              }
            },
            {
              key: "isThankYouView",
              value: function() {
                var e = this.props.history.location.pathname;
                return (
                  "/cart/checkout/thank-you" == e ||
                  "/cart/checkout/thank-you/" == e
                );
              }
            },
            {
              key: "exitCart",
              value: function() {
                (UIState.showOverlay = !1),
                  UIState.updateBasketQuantity(),
                  this.props.history.push("/");
              }
            },
            {
              key: "render",
              value: function() {
                var e,
                  t,
                  n,
                  r = this,
                  o = this.props.classes,
                  a = this.props.portrait
                    ? "desktop-layout portrait"
                    : "desktop-layout landscape",
                  i = this.isThankYouView(),
                  s = CK.Settings.theme,
                  c = React.createElement(window.Cart.CartContainer, {
                    theme: s
                  });
                return React.createElement(
                  "div",
                  { className: zf(o.wrapper, a) },
                  React.createElement(za, { hidden: !0 }),
                  this.props.match.isExact
                    ? React.createElement(Kn, {
                        onClick: function() {
                          return r.exitCart();
                        },
                        logoClass: o.clickable,
                        suppressCartQuantity: !0,
                        className: o.header,
                        position: "relative"
                      })
                    : React.createElement(
                        Mf,
                        {
                          onClick: function() {
                            return r.exitCart();
                          },
                          logoOnly: i,
                          logoClass: zf(o.logoClass, o.clickable),
                          cartClass: o.suppressCartQuantity,
                          suppressCartQuantity: !0,
                          className: zf(
                            o.cartHeader,
                            ((e = {}),
                            (t = o.centerLogoFlex),
                            (n = i),
                            t in e
                              ? Object.defineProperty(e, t, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                                })
                              : (e[t] = n),
                            e)
                          )
                        },
                        this.viewNotInCheckoutFlow() ? "" : "CHECKOUT"
                      ),
                  c
                );
              }
            }
          ]) && Kf(n.prototype, r),
          o && Kf(n, o),
          t
        );
      })(),
      Bf = Uf({
        header: { position: "relative !important" },
        cartHeader: {
          height: "112px",
          padding: "0 24px",
          margin: 0,
          background: "none",
          display: "flex",
          "& div": {
            flex: "1",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "RobotoBold",
            marginBottom: "40px !important",
            marginTop: "auto !important",
            letterSpacing: "1px"
          },
          "@media (min-width: 960px)": { margin: "0 calc(50% - 480px - 24px)" },
          "@media (min-width: 1280px)": {
            margin: "0 calc(13% + 7 * ((100vw - 1280px) / 44.8) - 24px)"
          },
          "@media (min-width: 1920px)": { margin: "0 calc(20% - 24px)" }
        },
        logoClass: {
          left: "0 !important",
          position: "relative !important",
          paddingTop: "54px !important",
          margin: "auto",
          top: "16px",
          display: "block",
          width: "175px",
          height: 0,
          backgroundImage: "url('../../../static/img/logo/logo@2x.png')",
          backgroundSize: "175px 54px",
          overflow: "hidden",
          pointerEvents: "none",
          backgroundRepeat: "no-repeat"
        },
        centerLogoFlex: { "& div.logoContainer": { flex: "0 !important" } },
        clickable: { cursor: "pointer" },
        suppressCartQuantity: { "& span.cart-quantity": { display: "none" } },
        wrapper: { background: "#FCFCFC", height: "100%", overflow: "hidden" }
      })(Df(Af));
    function Ff(e) {
      return (Ff =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Vf(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    function qf(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Wf(e, t) {
      return !t || ("object" !== Ff(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Hf(e) {
      return (Hf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Qf(e, t) {
      return (Qf =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Xf = MU.withStyles,
      Gf = VN.ReactRouter.withRouter,
      Yf = VN.classNames,
      Zf = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            Wf(this, Hf(t).apply(this, arguments))
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && Qf(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.classes;
                return React.createElement(
                  "div",
                  { className: t.footer },
                  React.createElement(
                    "div",
                    {
                      className: Yf(
                        t.content,
                        Vf({}, t.contentDesktop, !UIState.compact)
                      )
                    },
                    React.createElement(
                      "div",
                      { className: t.columns },
                      React.createElement(
                        "div",
                        { className: t.column },
                        React.createElement(
                          "div",
                          {
                            className: Yf(
                              t.columnTitle,
                              Vf({}, t.mobileHidden, UIState.compact)
                            )
                          },
                          "Company Info"
                        ),
                        React.createElement(
                          "ul",
                          { className: t.list },
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              { href: "/about/", target: "blank" },
                              "About Us"
                            )
                          ),
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              { href: "/Materials/", target: "blank" },
                              "Material & Pricing"
                            )
                          ),
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              { href: "/ShippingandReturn/", target: "blank" },
                              "Shipping & Returns"
                            )
                          ),
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              { href: "/FAQ/", target: "blank" },
                              "FAQ"
                            )
                          ),
                          React.createElement(
                            "li",
                            {
                              className: Yf(
                                Vf({}, t.desktopHidden, !UIState.compact)
                              )
                            },
                            React.createElement(
                              "a",
                              { href: "mailto:support@heroforge.com" },
                              "Contact Us"
                            )
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: t.column },
                        React.createElement(
                          "div",
                          {
                            className: Yf(
                              t.columnTitle,
                              Vf({}, t.mobileHidden, UIState.compact)
                            )
                          },
                          "Gift Cards"
                        ),
                        React.createElement(
                          "ul",
                          { className: t.list },
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              {
                                href: "",
                                onClick: function(t) {
                                  t.preventDefault(),
                                    e.props.history.push(
                                      "/account/gift-card-redeem"
                                    );
                                }
                              },
                              "Redeem a Gift Card"
                            )
                          ),
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              {
                                href: "",
                                onClick: function(e) {
                                  e.preventDefault(),
                                    (UIState.showOverlay = "giftCard");
                                }
                              },
                              "Buy a Gift Card"
                            )
                          ),
                          React.createElement(
                            "li",
                            {
                              className: Yf(
                                Vf({}, t.desktopHidden, !UIState.compact)
                              )
                            },
                            React.createElement(
                              "a",
                              { href: "/Privacy/", target: "blank" },
                              "Privacy Policy"
                            )
                          ),
                          React.createElement(
                            "li",
                            {
                              className: Yf(
                                Vf({}, t.desktopHidden, !UIState.compact)
                              )
                            },
                            React.createElement(
                              "a",
                              { href: "/ToS/", target: "blank" },
                              "Terms & Conditions"
                            )
                          ),
                          React.createElement(
                            "li",
                            {
                              className: Yf(
                                Vf({}, t.desktopHidden, !UIState.compact)
                              )
                            },
                            React.createElement(
                              "a",
                              { href: "/CookiePolicy/", target: "blank" },
                              "Cookie Policy"
                            )
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        {
                          className: Yf(
                            t.column,
                            Vf({}, t.mobileHidden, UIState.compact)
                          )
                        },
                        React.createElement(
                          "div",
                          { className: t.columnTitle },
                          "Need Support?"
                        ),
                        React.createElement(
                          "ul",
                          { className: t.list },
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              { href: "mailto:support@heroforge.com" },
                              "Contact Us"
                            )
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        {
                          className: Yf(Vf({}, t.mobileHidden, UIState.compact))
                        },
                        React.createElement(
                          "div",
                          { className: Yf(t.social, t.socialDesktop) },
                          React.createElement(
                            "a",
                            {
                              href: "https://www.facebook.com/HeroForgeMinis/",
                              target: "_blank"
                            },
                            React.createElement("img", {
                              src: "/static/svg/social/facebook.svg",
                              className: t.fbImg
                            })
                          ),
                          React.createElement(
                            "a",
                            {
                              href: "https://twitter.com/heroforgeminis",
                              target: "_blank"
                            },
                            React.createElement("img", {
                              src: "/static/svg/social/twitter.svg"
                            })
                          ),
                          React.createElement(
                            "a",
                            {
                              href: "https://www.instagram.com/heroforgeminis/",
                              target: "_blank"
                            },
                            React.createElement("img", {
                              src: "/static/svg/social/instagram.svg"
                            })
                          )
                        ),
                        React.createElement(
                          "ul",
                          { className: t.list },
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              { href: "/Privacy/", target: "blank" },
                              "Privacy Policy"
                            )
                          ),
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              { href: "/ToS/", target: "blank" },
                              "Terms & Conditions"
                            )
                          ),
                          React.createElement(
                            "li",
                            null,
                            React.createElement(
                              "a",
                              { href: "/CookiePolicy/", target: "blank" },
                              "Cookie Policy"
                            )
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: t.copyright },
                      "Â© ",
                      new Date().getFullYear(),
                      " Heroforge.com - All Rights reserved"
                    ),
                    React.createElement(
                      "div",
                      {
                        className: Yf(
                          t.social,
                          Vf({}, t.desktopHidden, !UIState.compact)
                        )
                      },
                      React.createElement(
                        "a",
                        {
                          href: "https://www.facebook.com/HeroForgeMinis/",
                          target: "_blank"
                        },
                        React.createElement("img", {
                          src: "/static/svg/social/facebook.svg",
                          className: t.fbImg
                        })
                      ),
                      React.createElement(
                        "a",
                        {
                          href: "https://twitter.com/heroforgeminis",
                          target: "_blank"
                        },
                        React.createElement("img", {
                          src: "/static/svg/social/twitter.svg"
                        })
                      ),
                      React.createElement(
                        "a",
                        {
                          href: "https://www.instagram.com/heroforgeminis/",
                          target: "_blank"
                        },
                        React.createElement("img", {
                          src: "/static/svg/social/instagram.svg"
                        })
                      )
                    )
                  )
                );
              }
            }
          ]) && qf(n.prototype, r),
          o && qf(n, o),
          t
        );
      })(),
      Jf = Xf(
        {
          footer: { backgroundColor: "#F7F7F7", width: "100%" },
          content: {
            width: "100%",
            padding: "25px 20px",
            boxSizing: "border-box"
          },
          contentDesktop: {
            margin: "0 auto",
            padding: "45px 0 30px",
            maxWidth: 910
          },
          columns: { display: "flex" },
          column: { flex: 1 },
          columnTitle: {
            fontWeight: "bold",
            fontFamily: "Roboto",
            fontSize: 16,
            marginBottom: 15
          },
          list: {
            listStyle: "none",
            fontFamily: "Roboto",
            padding: 0,
            margin: 0,
            fontSize: 14,
            "& li + li": { marginTop: 4 },
            "& a": {
              display: "block",
              color: "#8A8A8A",
              textDecoration: "none"
            }
          },
          social: {
            display: "flex",
            alignItems: "center",
            marginTop: 24,
            marginBottom: 64,
            justifyContent: "center",
            "& a": { width: 20 },
            "& a + a": { marginLeft: 15 }
          },
          socialDesktop: {
            marginBottom: 15,
            marginTop: 4,
            justifyContent: "left",
            "& a + a": { marginLeft: 10 }
          },
          copyright: {
            marginTop: 24,
            color: "#8A8A8A",
            textAlign: "center",
            fontSize: 11,
            fontFamily: "Roboto",
            textTransform: "uppercase"
          },
          fbImg: { marginTop: -5 },
          mobileHidden: { display: "none" },
          desktopHidden: { display: "none" }
        },
        { withTheme: !0 }
      )(Gf(Zf)),
      $f = {
        useNextVariants: !0,
        breakpoints: { values: { md: CK.Settings.compactWidth } },
        palette: {
          primary: { light: "#989898", main: "#555963", dark: "#333333" },
          secondary: {
            main: "#ab0007",
            dark: "#6f0b0d",
            contrastText: "white"
          },
          background: {
            lightest: "#FFFFFF",
            lighter: "#FCFCFC",
            light: "#F6F7F8",
            main: "#E9EAEB"
          },
          border: { light: "#CCC", main: "#EAEAEA" }
        },
        typography: {
          fontSize: 12,
          htmlFontSize: 16,
          fontFamily: [
            "Roboto",
            "-apple-system",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
          ].join(","),
          bold: { fontFamily: "RobotoBold" }
        },
        overrides: {
          MuiExpansionPanel: {
            expanded: {
              margin: "0 0 8px 0",
              boxShadow: "none",
              border: "1px solid #E6E6E6"
            }
          },
          MuiAppBar: { root: { boxShadow: "none" } },
          MuiFormLabel: {
            asterisk: { color: "#F0286B" },
            root: {
              letterSpacing: "0.5px",
              textTransform: "capitalize",
              lineHeight: ".2"
            }
          },
          MuiSelect: {
            icon: { right: "8px" },
            select: { padding: void 0, height: void 0 },
            selectMenu: { lineHeight: void 0 }
          },
          MuiOutlinedInput: { input: { padding: "12px 14px" } },
          MuiPrivateNotchedOutline: { root: { margin: "-1px" } },
          MuiTypography: { root: { letterSpacing: "0.2px" } }
        }
      };
    function eh(e) {
      return (eh =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function th(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function nh(e) {
      return (nh = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function rh(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function oh(e, t) {
      return (oh =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var ah = MU.withStyles,
      ih = VN.ReactRouter.withRouter,
      sh = VN.classNames,
      ch = {
        container: {
          height: "calc(100% - ".concat(50, "px)"),
          overflow: "auto",
          paddingTop: 50
        },
        mobileApp: {
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white"
        }
      },
      lh = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (r = this),
            (n =
              !(o = nh(t).call(this, e)) ||
              ("object" !== eh(o) && "function" != typeof o)
                ? rh(r)
                : o),
            (UIState.compact = !0),
            (n.exitAccounts = n.exitAccounts.bind(rh(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && oh(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "exitAccounts",
              value: function() {
                (UIState.showOverlay = !1),
                  UIState.updateBasketQuantity(),
                  this.props.history.push("/");
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.classes,
                  n = this.props.portrait
                    ? "compact-layout portrait"
                    : "compact-layout landscape",
                  r = React.createElement(window.Accounts.AccountsContainer, {
                    theme: $f
                  });
                return React.createElement(
                  "div",
                  {
                    id: "mobileApp",
                    className: sh(t.container, t.mobileApp, n)
                  },
                  React.createElement(_t.a, null),
                  React.createElement(za, { hidden: !0 }),
                  React.createElement(Kn, {
                    onClick: function() {
                      return e.exitAccounts();
                    }
                  }),
                  r,
                  React.createElement(Jf, null)
                );
              }
            }
          ]) && th(n.prototype, r),
          o && th(n, o),
          t
        );
      })(),
      uh = ah(ch)(ih(lh));
    function ph(e) {
      return (ph =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function fh(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function hh(e) {
      return (hh = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function mh(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function dh(e, t) {
      return (dh =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var yh = MU,
      bh = yh.withStyles,
      vh = yh.MuiThemeProvider,
      gh = VN.ReactRouter.withRouter,
      wh = VN.classNames,
      _h = (function(e) {
        function t(e) {
          var n, r, o;
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (UIState.compact = !1),
            (r = this),
            ((n =
              !(o = hh(t).call(this, e)) ||
              ("object" !== ph(o) && "function" != typeof o)
                ? mh(r)
                : o).exitAccounts = n.exitAccounts.bind(mh(n))),
            n
          );
        }
        var n, r, o;
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && dh(e, t);
          })(t, React.Component),
          (n = t),
          (r = [
            {
              key: "exitAccounts",
              value: function() {
                (UIState.showOverlay = !1),
                  UIState.updateBasketQuantity(),
                  this.props.history.push("/");
              }
            },
            {
              key: "render",
              value: function() {
                var e = this,
                  t = this.props.classes,
                  n = this.props.portrait
                    ? "desktop-layout portrait"
                    : "desktop-layout landscape",
                  r = React.createElement(window.Accounts.AccountsContainer, {
                    theme: $f,
                    nav: React.createElement(On, null)
                  });
                return React.createElement(
                  vh,
                  { theme: $f },
                  React.createElement(
                    "div",
                    { className: wh(t.wrapper, n) },
                    React.createElement(_t.a, null),
                    React.createElement(Kn, {
                      showExtraMenu: !0,
                      onClick: function() {
                        return e.exitAccounts();
                      },
                      position: "relative"
                    }),
                    React.createElement(
                      "div",
                      { className: t.container },
                      React.createElement(za, { hidden: !0 }),
                      r,
                      React.createElement(Jf, null)
                    )
                  )
                );
              }
            }
          ]) && fh(n.prototype, r),
          o && fh(n, o),
          t
        );
      })(),
      Ch = bh(
        {
          container: {
            position: "absolute",
            top: 40,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "auto",
            display: "flex",
            flexDirection: "column"
          },
          logoClass: {
            position: "relative !important",
            top: "40 !important",
            left: "0 !important"
          },
          wrapper: { background: "#FCFCFC", height: "100%" }
        },
        { withTheme: !0 }
      )(gh(_h)),
      kh = VN.MediaQuery,
      Rh = {
        position: "absolute",
        top: "12%",
        left: "50%",
        marginLeft: "-175px",
        width: "350px",
        textAlign: "center",
        zIndex: "2",
        backgroundColor: "rgba(255,255,255,0.7)"
      },
      Sh = function() {
        return React.createElement(
          "div",
          { className: "debugMediaQuery", style: Rh },
          React.createElement(
            kh,
            { minWidth: CK.Settings.compactWidth },
            "Screen is wide enough to show our desktop view"
          ),
          React.createElement(
            kh,
            { maxWidth: CK.Settings.compactWidth - 1 },
            "You are sized too small for our desktop view",
            React.createElement(
              kh,
              { orientation: "landscape" },
              "We should switch to a mini-desktop layout in this landscape view"
            )
          ),
          React.createElement(
            kh,
            { maxDeviceWidth: 1223 },
            "You are a tablet or mobile phone"
          ),
          React.createElement(
            kh,
            { minDeviceWidth: 1224 },
            "You are a desktop",
            React.createElement(
              kh,
              { maxWidth: CK.Settings.compactWidth - 1 },
              "You are sized like a tablet or mobile phone though"
            )
          ),
          React.createElement(
            kh,
            { minDeviceWidth: 1824 },
            "Also you have a huge screen"
          ),
          React.createElement(
            kh,
            { orientation: "portrait" },
            "You are portrait"
          ),
          React.createElement(
            kh,
            { orientation: "landscape" },
            "You are landscape"
          ),
          React.createElement(kh, { minResolution: "2dppx" }, "You are retina")
        );
      };
    var Oh = VN.ReactRouter,
      Eh = Oh.BrowserRouter,
      xh = Oh.Route,
      jh = Oh.Switch,
      Ph = Oh.Redirect;
    function Mh() {
      return React.createElement(
        Eh,
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            jh,
            null,
            React.createElement(xh, {
              path: "/cart",
              render: function() {
                return React.createElement(
                  "div",
                  null,
                  React.createElement(
                    kh,
                    { minWidth: CK.Settings.compactWidth },
                    React.createElement(Bf, null)
                  ),
                  React.createElement(
                    kh,
                    { maxWidth: CK.Settings.compactWidth - 1 },
                    React.createElement(
                      kh,
                      { minWidth: 721 },
                      React.createElement(
                        kh,
                        { minHeight: 451 },
                        React.createElement(
                          kh,
                          { query: "(max-aspect-ratio: 7500/10000)" },
                          React.createElement(mf, { portrait: !0 })
                        ),
                        React.createElement(
                          kh,
                          { query: "(min-aspect-ratio: 7501/10000)" },
                          React.createElement(mf, null)
                        )
                      ),
                      React.createElement(
                        kh,
                        { maxHeight: 450 },
                        React.createElement(mf, null)
                      )
                    ),
                    React.createElement(
                      kh,
                      { maxWidth: 720 },
                      React.createElement(
                        kh,
                        { minWidth: 451 },
                        React.createElement(
                          kh,
                          { minHeight: 721 },
                          React.createElement(mf, { portrait: !0 })
                        ),
                        React.createElement(
                          kh,
                          { maxHeight: 720 },
                          React.createElement(
                            kh,
                            { query: "(max-aspect-ratio: 14400/10000)" },
                            React.createElement(mf, { portrait: !0 })
                          ),
                          React.createElement(
                            kh,
                            { query: "(min-aspect-ratio: 14401/10000)" },
                            React.createElement(mf, null)
                          )
                        )
                      ),
                      React.createElement(
                        kh,
                        { maxWidth: 450 },
                        React.createElement(mf, { portrait: !0 })
                      )
                    )
                  ),
                  CK.Settings.debug && Sh()
                );
              }
            }),
            React.createElement(Ph, { from: "/accounts", to: "/account" }),
            React.createElement(xh, {
              path: "/account",
              render: function() {
                return React.createElement(
                  "div",
                  null,
                  React.createElement(
                    kh,
                    { minWidth: CK.Settings.compactWidth },
                    React.createElement(Ch, null)
                  ),
                  React.createElement(
                    kh,
                    { maxWidth: CK.Settings.compactWidth - 1 },
                    React.createElement(uh, null)
                  ),
                  CK.Settings.debug && Sh()
                );
              }
            }),
            React.createElement(xh, {
              render: function() {
                return React.createElement(rf, null);
              }
            })
          )
        )
      );
    }
    function Th(e) {
      return (Th =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Kh(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ih(e, t) {
      return !t || ("object" !== Th(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Nh(e) {
      return (Nh = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Lh(e, t) {
      return (Lh =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Uh = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Ih(this, Nh(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Lh(e, t);
        })(t, It),
        (n = t),
        (o = [
          {
            key: "refresh",
            value: function() {
              ReactDOM.render(Mh(), this.root);
            }
          }
        ]),
        (r = null) && Kh(n.prototype, r),
        o && Kh(n, o),
        t
      );
    })();
    function Dh(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          var n = [],
            r = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var i, s = e[Symbol.iterator]();
              !(r = (i = s.next()).done) &&
              (n.push(i.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (o) throw a;
            }
          }
          return n;
        })(e, t) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    function zh(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    Uh.showSupportEmail = function() {
      _t.a.prompt(
        React.createElement(
          "div",
          { style: { userSelect: "text", padding: "0 12px" } },
          "Sky Castle Studios",
          React.createElement("br", null),
          "3435 Ocean Park Blvd #104",
          React.createElement("br", null),
          "Santa Monica, CA 90405",
          React.createElement(
            "div",
            null,
            React.createElement("br", null),
            "support@heroforge.com"
          )
        ),
        [
          {
            label: "Open My Email Client",
            icon: "/static/svg/mail-white.svg",
            onClick: function() {
              _t.a.hideOverlay(),
                window.open("mailto:support@heroforge.com", "_blank");
            }
          },
          {
            label: "Cancel",
            cancel: !0,
            onClick: function() {
              _t.a.hideOverlay();
            }
          }
        ],
        "Contact",
        { selectable: !0 }
      );
    };
    var Ah = VN.axios,
      Bh = (function() {
        function e() {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, r;
        return (
          (t = e),
          (r = [
            {
              key: "init",
              value: function() {
                window.gtag || (window.gtag = function() {}),
                  window.fbq || (window.fbq = function() {}),
                  CK.Settings.forge ||
                    (void 0 === this.minutes && this.initTimeOnPage(),
                    (e.initialized = !0));
              }
            },
            {
              key: "initTimeOnPage",
              value: function() {
                var e = this;
                (this.minutes = 0),
                  (this.activeMinutes = 0),
                  (this.previousActiveMinute = 0),
                  CK.Events.on("characterChanged", function() {
                    e.userStillActive();
                  }),
                  setInterval(function() {
                    return e.minutes++;
                  }, 6e4);
              }
            },
            {
              key: "userStillActive",
              value: function() {
                this.previousActiveMinute !== this.minutes &&
                  ((this.previousActiveMinute = this.minutes),
                  this.activeMinutes++,
                  this.event("TimeOnPage", "spentTime", this.activeMinutes));
              }
            },
            {
              key: "spec",
              value: function(e, t, n) {
                this.event(e, "specs", t, n);
              }
            },
            {
              key: "event",
              value: function(e, t, n, r) {
                this.initialized &&
                  gtag("event", e, {
                    event_label: n,
                    value: r,
                    event_action: t
                  });
              }
            },
            {
              key: "exception",
              value: function(e, t) {
                this.initialized &&
                  (void 0 !== t && (e += ":" + t),
                  gtag("event", "exception", { description: e, fatal: !1 }),
                  console.error(e, t),
                  CK.Events.initialized && CK.Events.emit("exception", e));
              }
            },
            {
              key: "sendGraphicsReport",
              value: function() {
                var e = CK.ClientSpecs.specs,
                  t = CK.Capture.renderThumbnail(),
                  n = encodeURIComponent(
                    JSON.stringify({
                      specs: e,
                      screenshot: t,
                      user: USER_EMAIL || "not logged in"
                    })
                  );
                Ah({ method: "post", url: "/graphics_report/", data: n })
                  .then(function() {
                    return console.log("Sent graphics report");
                  })
                  .catch(function(e) {
                    return console.error("Failed to send graphic report", e);
                  });
              }
            },
            {
              key: "addedToCartNotLoggedIn",
              value: function() {
                this.initialized &&
                  (gtag("event", "addedToCartNotLoggedIn"),
                  (this._addedToCartNotLoggedIn = !0));
              }
            },
            {
              key: "successfullyLoggedIn",
              value: function() {
                this.init(),
                  this.initialized &&
                    (this._addedToCartNotLoggedIn
                      ? gtag("event", "successfullyLoggedInAfterAddToCart")
                      : gtag("event", "successfullyLoggedIn"));
              }
            },
            {
              key: "sendSearch",
              value: function(e, t, n) {
                var r = this,
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "all";
                !e ||
                  e.length < 3 ||
                  (this._searchPrevious &&
                    this._searchPrevious.term.includes(e)) ||
                  (this._search
                    ? this._search.term.length < e.length &&
                      (this._search = { term: e, menu: n, genre: o, found: t })
                    : ((this._search = {
                        term: e,
                        menu: n,
                        genre: o,
                        found: t
                      }),
                      setTimeout(function() {
                        (r._searchPrevious = r._search),
                          r.searchFilter(
                            t,
                            r._search.menu,
                            r._search.genre,
                            r._search.term
                          ),
                          (r._search = void 0);
                      }, 3e3)));
              }
            },
            {
              key: "searchFilter",
              value: function(e, t, n, r) {
                0;
              }
            },
            {
              key: "genreSelected",
              value: function(e) {
                0;
              }
            },
            {
              key: "characterScreenshot",
              value: function(e) {
                0;
              }
            },
            {
              key: "characterSaved",
              value: function(e) {
                0;
              }
            },
            {
              key: "characterSharedAnonymous",
              value: function(e) {
                0;
              }
            },
            {
              key: "characterShared",
              value: function(e) {
                0;
              }
            },
            {
              key: "addedToCart",
              value: function(e) {
                var t = window.Reporting._getProductCategoryID(e);
                fbq("track", "AddToCart", {
                  content_ids: [t],
                  content_type: "product"
                }),
                  gtag("event", "add_to_cart", {
                    items: { id: t, name: t, quantity: 1 }
                  });
              }
            },
            {
              key: "removedFromCart",
              value: function(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1;
                var n = window.Reporting._getProductCategoryID(e);
                gtag("event", "remove_from_cart", {
                  items: { id: n, name: n, quantity: t }
                });
              }
            },
            {
              key: "preconfigSelected",
              value: function(e) {
                0;
              }
            },
            {
              key: "userConfigsLoaded",
              value: function(e, t) {
                0;
              }
            },
            {
              key: "clickedPart",
              value: function(e) {
                0;
              }
            },
            {
              key: "clickedThumbnailButton",
              value: function(e) {
                0;
              }
            },
            { key: "characterChanged", value: function() {} },
            {
              key: "completeRegistration",
              value: function() {
                fbq("track", "CompleteRegistration", {
                  content_name: "Signup",
                  status: !0
                }),
                  gtag("event", "sign_up", { method: "default" });
              }
            },
            {
              key: "initiateCheckout",
              value: function(e) {
                var t = Dh(window.Reporting.getContentIds(e.items), 2),
                  n = t[0],
                  r = {
                    content_ids: n,
                    contents: t[1],
                    content_type: "product",
                    num_items: e.items ? e.items.length : 0
                  };
                fbq("track", "InitiateCheckout", r),
                  gtag("event", "begin_checkout", { items: n });
              }
            },
            {
              key: "checkoutProgress",
              value: function(e, t) {
                var n = Dh(window.Reporting.getContentIds(e), 2),
                  r = n[0];
                n[1];
                gtag("event", "checkout_progress", {
                  items: r,
                  checkout_step: t
                });
              }
            },
            {
              key: "purchase",
              value: function(e) {
                var t = Dh(window.Reporting.getContentIds(e.items), 2),
                  n = t[0],
                  r = t[1],
                  o = window.Reporting.getItemCosts(e.items),
                  a = window.Reporting.getPackagingCosts(e.items),
                  i = Number(0.029 * Number(e.cartValue) + 0.3).toFixed(2),
                  s = Number(e.cartValue - o - a - i).toFixed(2),
                  c = {
                    content_ids: n,
                    contents: r,
                    content_type: "product",
                    num_items: e.items ? e.items.length : 0,
                    currency: "USD",
                    value: s
                  };
                window.Reporting.facebookPurchaseTrackingEvent(c),
                  window.Reporting.simpleConversionTrackingEvent(e.order_id),
                  window.Reporting.valueConversionTrackingEvent(
                    e.order_id,
                    r,
                    s
                  ),
                  window.Reporting.enhancedEcomPurchaseTrackingEvent(
                    e.order_id,
                    r,
                    s
                  );
              }
            },
            {
              key: "getItemCosts",
              value: function(e) {
                return 0;
              }
            },
            {
              key: "getPackagingCosts",
              value: function(e) {
                return 0;
              }
            },
            {
              key: "valueConversionID",
              value: function() {
                0;
              }
            },
            {
              key: "simpleConversionID",
              value: function() {
                0;
              }
            },
            {
              key: "facebookPurchaseTrackingEvent",
              value: function(e) {
                fbq("track", "Purchase", e);
              }
            },
            {
              key: "simpleConversionTrackingEvent",
              value: function(e) {
                gtag("event", "conversion", {
                  transaction_id: e,
                  send_to: window.Reporting.simpleConversionID()
                });
              }
            },
            {
              key: "valueConversionTrackingEvent",
              value: function(e, t, n) {
                var r = {
                  transaction_id: e,
                  send_to: window.Reporting.valueConversionID(),
                  value: n,
                  currency: "USD",
                  items: t
                };
                gtag("event", "conversion", r);
              }
            },
            {
              key: "enhancedEcomPurchaseTrackingEvent",
              value: function(e, t, n) {
                gtag("event", "purchase", {
                  transaction_id: e,
                  value: n,
                  currency: "USD",
                  items: t
                });
              }
            },
            {
              key: "addedGiftCardToCart",
              value: function(e, t) {
                var n = "giftcard-" + e;
                fbq("track", "AddToCart", {
                  content_ids: [n],
                  contents: [{ id: n, quantity: t }],
                  content_type: "product"
                });
              }
            },
            {
              key: "getContentIds",
              value: function(e) {
                for (
                  var t = e.map(function(e) {
                      return window.Reporting._getProductCategoryID(
                        e.config || e
                      );
                    }),
                    n = e.length,
                    r = [];
                  n--;

                )
                  r.push({ id: t[n], quantity: e[n].quantity });
                return [t, r];
              }
            }
          ]),
          (n = null) && zh(t.prototype, n),
          r && zh(t, r),
          e
        );
      })();
    function Fh(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var Vh = Symbol("counter"),
      qh = Symbol("action"),
      Wh = (function() {
        function e(t, n) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this[Vh] = t),
            (this[qh] = n);
        }
        var t, n, r;
        return (
          (t = e),
          (n = [
            {
              key: "decrement",
              value: function() {
                this[Vh] < 1 || (this[Vh]--, 0 === this[Vh] && this[qh]());
              }
            }
          ]) && Fh(t.prototype, n),
          r && Fh(t, r),
          e
        );
      })();
    function Hh(e) {
      return (Hh =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function Qh(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Xh(e, t) {
      return !t || ("object" !== Hh(t) && "function" != typeof t)
        ? (function(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Gh(e) {
      return (Gh = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function Yh(e, t) {
      return (Yh =
        Object.setPrototypeOf ||
        function(e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    var Zh = (function(e) {
      function t() {
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          Xh(this, Gh(t).apply(this, arguments))
        );
      }
      var n, r, o;
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && Yh(e, t);
        })(t, Bh),
        (n = t),
        (o = [
          {
            key: "searchFilter",
            value: function(e, t, n, r) {
              this.event(
                "search",
                e ? "searchHit" : "searchMiss",
                ""
                  .concat(t, " - ")
                  .concat(n, " - ")
                  .concat(r)
              ),
                fbq("track", "Search", {
                  search_string:
                    (e ? "searchHit" : "searchMiss") +
                    ""
                      .concat(t, " - ")
                      .concat(n, " - ")
                      .concat(r)
                });
            }
          },
          {
            key: "genreSelected",
            value: function(e) {
              0;
            }
          },
          {
            key: "characterScreenshot",
            value: function(e) {
              var t = this._getProductCategoryID(CK.character.data);
              fbq("track", "ViewContent", {
                content_ids: [t],
                contents: [{ id: t, quantity: 1 }],
                content_type: "product"
              });
            }
          },
          {
            key: "characterSaved",
            value: function(e) {
              fbq("track", "AddToWishlist", {
                content_ids: [this._getProductCategoryID(e)],
                content_type: "product",
                content_category: "saved"
              });
            }
          },
          {
            key: "characterSharedAnonymous",
            value: function(e) {
              fbq("track", "AddToWishlist", {
                content_ids: [this._getProductCategoryID(e)],
                content_category: "shareAnonymous"
              });
            }
          },
          {
            key: "characterShared",
            value: function(e) {
              fbq("track", "AddToWishlist", {
                content_ids: [this._getProductCategoryID(e)],
                content_category: "shared"
              });
            }
          },
          {
            key: "getItemCosts",
            value: function(e) {
              var t = {
                steel_28mm: 18.81,
                steel_xl: 30.42,
                steel_28mm_mount: 47,
                bronze_28mm: 74.39,
                bronze_xl: 135.19,
                bronze_28mm_mount: 155.62,
                gray_plastic_28mm: 14.95,
                gray_plastic_xl: 22.43,
                gray_plastic_28mm_mount: 34.78,
                white_plastic_28mm: 13.41,
                white_plastic_xl: 17.9,
                white_plastic_28mm_mount: 25.7,
                digital_28mm: 0,
                digital_xl: 0,
                digital_28mm_mount: 0,
                strong_plastic_3inch: 21.41
              };
              return e.reduce(function(e, n) {
                return (
                  (n.config && t[n.config.physical]
                    ? t[n.config.physical]
                    : 0) *
                    n.quantity +
                  e
                );
              }, 0);
            }
          },
          {
            key: "getPackagingCosts",
            value: function(e) {
              return e.reduce(function(e, t) {
                return (
                  (t.config &&
                  t.config.physical &&
                  !t.config.physical.startsWith("digital")
                    ? 1
                    : 0) *
                    t.quantity +
                  e
                );
              }, 0) > 0
                ? 1
                : 0;
            }
          },
          {
            key: "simpleConversionID",
            value: function() {
              return "AW-943798896/59nuCJSO26UBEPD0hMID";
            }
          },
          {
            key: "valueConversionID",
            value: function() {
              return "AW-943798896/-b7nCP78wGMQ8PSEwgM";
            }
          },
          {
            key: "preconfigSelected",
            value: function(e) {
              0;
            }
          },
          {
            key: "preconfigRandomized",
            value: function(e) {
              0;
            }
          },
          {
            key: "userConfigsLoaded",
            value: function(e, t) {
              0;
            }
          },
          {
            key: "clickedPart",
            value: function(e) {
              0;
            }
          },
          {
            key: "characterChanged",
            value: function() {
              var e = this._getProductCategoryID(CK.character.data);
              if (UIState.currentProduct && UIState.currentProduct == e)
                this.productHash[e].decrement();
              else {
                if (!window.fbq || window.fbq == {}) return;
                this.productHash[e] ||
                  (this.productHash[e] = new Wh(
                    this.changesBeforeReport,
                    function() {
                      fbq("track", "ViewContent", {
                        content_ids: [e],
                        contents: [{ id: e, quantity: 1 }],
                        content_type: "product"
                      }),
                        gtag("event", "view_item", {
                          items: [{ id: e, name: e, quantity: 1 }]
                        });
                    }
                  )),
                  (UIState.currentProduct = e);
              }
            }
          },
          {
            key: "_getProductCategoryID",
            value: function(e) {
              return e.new_thumb &&
                e.new_thumb.startsWith("/static/img/giftcard/")
                ? "giftcard-" + (e.price || e.price_excl_tax)
                : this._getDominantTerm([e]) +
                    "-" +
                    this._getGender(e) +
                    "-" +
                    this._getRace(e) +
                    "-" +
                    e.physical;
            }
          },
          {
            key: "_getGender",
            value: function(e) {
              if (e.sliders && void 0 !== e.sliders.faceSoftness) {
                var t = e.sliders.faceSoftness - (e.parts.beard ? 0.5 : 0);
                return t < 0.4 ? "male" : t > 0.6 ? "female" : "andro";
              }
              return "unknown";
            }
          },
          {
            key: "_getRace",
            value: function(e) {
              var t,
                n = e.parts,
                r = {};
              for (var o in (n &&
                CK.Options.configs.racegenders &&
                [
                  "hair",
                  "face",
                  "bodyUpper",
                  "bodyLower",
                  "tail",
                  "earR",
                  "beard"
                ].map(function(e) {
                  var t = n[e];
                  t &&
                    CK.Options.configs.racegenders.map(function(n) {
                      n.name in r || (r[n.name] = 0),
                        t === n.parts[e] && (r[n.name] += "face" === e ? 3 : 1);
                    });
                }),
              r))
                (!t || r[o] > r[t]) && (t = o);
              return (
                t && t.endsWith("Male")
                  ? (t = t.slice(0, -4))
                  : t && t.endsWith("Female") && (t = t.slice(0, -6)),
                t
              );
            }
          },
          {
            key: "_getDominantTerm",
            value: function(e) {
              var t,
                n = this._getTermBreakdown(e);
              for (var r in n) (!t || n[r] > n[t]) && (t = r);
              return t;
            }
          },
          {
            key: "_getTermBreakdown",
            value: function(e) {
              var t = {};
              return (
                e.map(function(e) {
                  if (e)
                    for (var n in e.parts) {
                      var r = CK.Options.parts[e.parts[n]];
                      if (r && r.terms)
                        for (var o in r.terms) o in t || (t[o] = 0), t[o]++;
                    }
                }),
                t
              );
            }
          },
          {
            key: "productHash",
            get: function() {
              return t._productHash;
            },
            set: function(e) {
              t._productHash = e;
            }
          },
          {
            key: "changesBeforeReport",
            get: function() {
              return t._changesBeforeReport;
            }
          }
        ]),
        (r = null) && Qh(n.prototype, r),
        o && Qh(n, o),
        t
      );
    })();
    function Jh(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    (Zh._productHash = {}),
      (Zh._changesBeforeReport = 25),
      console.log(
        "HF ".concat(
          "Production 9/25/19 15:29:49 B:release/hf_september_13_2019 V-1"
        )
      ),
      (window.Reporting = Zh);
    var $h = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      var t, n, r;
      return (
        (t = e),
        (r = [
          {
            key: "init",
            value: function() {
              var e = this;
              (wt.dataPath = "/static/js/options.min.json"),
                CK.initSettings(wt),
                Loading.creationKitReady(function() {
                  e.startLoad();
                });
            }
          },
          {
            key: "initForge",
            value: function() {
              0;
            }
          },
          {
            key: "startLoad",
            value: function() {
              var e = this;
              CK.main(
                function() {},
                function() {
                  Uh.init();
                },
                function() {
                  e.finishedLoading();
                },
                function() {
                  Loading.fail();
                }
              );
            }
          },
          {
            key: "finishedLoading",
            value: function() {
              Loading.close();
            }
          }
        ]),
        (n = null) && Jh(t.prototype, n),
        r && Jh(t, r),
        e
      );
    })();
    ($h.JointLimits = D),
      (window.CKUI = Uh),
      (window.HeroForge = $h),
      (window.HF = $h),
      (window.SETTINGS = wt);
  },
  8: function(e, t, n) {
    "use strict";
    function r(e, t) {
      (this.x = e || 0), (this.y = t || 0);
    }
    var o, a;
    n.d(t, "a", function() {
      return r;
    }),
      Object.defineProperties(r.prototype, {
        width: {
          get: function() {
            return this.x;
          },
          set: function(e) {
            this.x = e;
          }
        },
        height: {
          get: function() {
            return this.y;
          },
          set: function(e) {
            this.y = e;
          }
        },
        xy: {
          get: function() {
            return this;
          },
          set: function(e) {
            this.copy(e);
          }
        },
        yx: {
          get: function() {
            return new r(this.y, this.x);
          },
          set: function(e) {
            this.set(e.y, e.x);
          }
        }
      }),
      Object.assign(r.prototype, {
        isVec2: !0,
        set: function(e, t) {
          return (this.x = e), (this.y = t), this;
        },
        setScalar: function(e) {
          return (this.x = e), (this.y = e), this;
        },
        setX: function(e) {
          return (this.x = e), this;
        },
        setY: function(e) {
          return (this.y = e), this;
        },
        setComponent: function(e, t) {
          switch (e) {
            case 0:
              this.x = t;
              break;
            case 1:
              this.y = t;
              break;
            default:
              throw new Error("index is out of range: " + e);
          }
          return this;
        },
        getComponent: function(e) {
          switch (e) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error("index is out of range: " + e);
          }
        },
        clone: function() {
          return new this.constructor(this.x, this.y);
        },
        copy: function(e) {
          return (this.x = e.x), (this.y = e.y), this;
        },
        add: function(e, t) {
          return void 0 !== t
            ? (console.warn(
                "RK.Vec2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
              ),
              this.addVectors(e, t))
            : ((this.x += e.x), (this.y += e.y), this);
        },
        addScalar: function(e) {
          return (this.x += e), (this.y += e), this;
        },
        toSimple: function() {
          return { x: this.x, y: this.y };
        },
        addVectors: function(e, t) {
          return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
        },
        addScaledVector: function(e, t) {
          return (this.x += e.x * t), (this.y += e.y * t), this;
        },
        sub: function(e, t) {
          return void 0 !== t
            ? (console.warn(
                "RK.Vec2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
              ),
              this.subVectors(e, t))
            : ((this.x -= e.x), (this.y -= e.y), this);
        },
        subScalar: function(e) {
          return (this.x -= e), (this.y -= e), this;
        },
        subVectors: function(e, t) {
          return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
        },
        multiply: function(e) {
          return (this.x *= e.x), (this.y *= e.y), this;
        },
        multiplyScalar: function(e) {
          return (this.x *= e), (this.y *= e), this;
        },
        divide: function(e) {
          return (this.x /= e.x), (this.y /= e.y), this;
        },
        divideScalar: function(e) {
          return this.multiplyScalar(1 / e);
        },
        min: function(e) {
          return (
            (this.x = Math.min(this.x, e.x)),
            (this.y = Math.min(this.y, e.y)),
            this
          );
        },
        max: function(e) {
          return (
            (this.x = Math.max(this.x, e.x)),
            (this.y = Math.max(this.y, e.y)),
            this
          );
        },
        clamp: function(e, t) {
          return (
            (this.x = Math.max(e.x, Math.min(t.x, this.x))),
            (this.y = Math.max(e.y, Math.min(t.y, this.y))),
            this
          );
        },
        clampScalar:
          ((o = new r()),
          (a = new r()),
          function(e, t) {
            return o.set(e, e), a.set(t, t), this.clamp(o, a);
          }),
        clampLength: function(e, t) {
          var n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(
            Math.max(e, Math.min(t, n))
          );
        },
        floor: function() {
          return (
            (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
          );
        },
        ceil: function() {
          return (
            (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
          );
        },
        round: function() {
          return (
            (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
          );
        },
        roundToZero: function() {
          return (
            (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
            (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
            this
          );
        },
        negate: function() {
          return (this.x = -this.x), (this.y = -this.y), this;
        },
        dot: function(e) {
          return this.x * e.x + this.y * e.y;
        },
        lengthSq: function() {
          return this.x * this.x + this.y * this.y;
        },
        length: function() {
          return Math.sqrt(this.x * this.x + this.y * this.y);
        },
        lengthManhattan: function() {
          return Math.abs(this.x) + Math.abs(this.y);
        },
        normalize: function() {
          return this.divideScalar(this.length() || 1);
        },
        angle: function() {
          var e = Math.atan2(this.y, this.x);
          return e < 0 && (e += 2 * Math.PI), e;
        },
        distanceTo: function(e) {
          return Math.sqrt(this.distanceToSquared(e));
        },
        distanceToSquared: function(e) {
          var t = this.x - e.x,
            n = this.y - e.y;
          return t * t + n * n;
        },
        distanceToManhattan: function(e) {
          return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
        },
        setLength: function(e) {
          return this.normalize().multiplyScalar(e);
        },
        lerp: function(e, t) {
          return (
            (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this
          );
        },
        lerpVectors: function(e, t, n) {
          return this.subVectors(t, e)
            .multiplyScalar(n)
            .add(e);
        },
        equals: function(e) {
          return e.x === this.x && e.y === this.y;
        },
        fromArray: function(e, t) {
          return (
            void 0 === t && (t = 0), (this.x = e[t]), (this.y = e[t + 1]), this
          );
        },
        toArray: function(e, t) {
          return (
            void 0 === e && (e = []),
            void 0 === t && (t = 0),
            (e[t] = this.x),
            (e[t + 1] = this.y),
            e
          );
        },
        fromBufferAttribute: function(e, t, n) {
          return (
            void 0 !== n &&
              console.warn(
                "RK.Vec2: offset has been removed from .fromBufferAttribute()."
              ),
            (this.x = e.getX(t)),
            (this.y = e.getY(t)),
            this
          );
        },
        rotateAround: function(e, t) {
          var n = Math.cos(t),
            r = Math.sin(t),
            o = this.x - e.x,
            a = this.y - e.y;
          return (
            (this.x = o * n - a * r + e.x), (this.y = o * r + a * n + e.y), this
          );
        }
      });
  },
  87: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    var r = n(21);
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a = (function() {
      function e(t, n, o, a, i, s, c) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          void 0 === t && (t = -Math.PI / 2),
          void 0 === n && (n = Math.PI / 2),
          void 0 === o && (o = -Math.PI / 2),
          void 0 === a && (a = Math.PI / 2),
          void 0 === i && (i = -Math.PI / 2),
          void 0 === s && (s = Math.PI / 2),
          void 0 === c && (c = "swingtwist"),
          (this.swingTwist = new RK.SwingTwist()),
          (this.minX = t),
          (this.maxX = n),
          (this.minY = o),
          (this.maxY = a),
          (this.minZ = i),
          (this.maxZ = s),
          (this.order = c),
          (this.orient = new r.a()),
          (this.bind = new r.a()),
          (this.preRotate = new r.a()),
          (this._q = new r.a());
      }
      var t, n, a;
      return (
        (t = e),
        (a = [
          {
            key: "MirrorCone",
            value: function(e) {
              var t = e.orient;
              if (t) {
                var n = new r.a();
                for (var o in (n.copy(t), n.multiply(new r.a(0, 0, 1, 0)), t))
                  t[o] = n[o];
              }
              var a = e.x[0];
              (e.x[0] = -e.x[1]),
                (e.x[1] = -a),
                (a = e.y[0]),
                (e.y[0] = -e.y[1]),
                (e.y[1] = -a);
            }
          }
        ]),
        (n = [
          {
            key: "constrain",
            value: function(e) {
              this._q.multiplyQuaternions(this.bind, this.orient),
                this._q.inverse(),
                this._q.multiply(e.quaternion),
                this._q.multiply(this.preRotate.clone().inverse()),
                this._q.multiply(this.orient);
              var t = this.swingTwist.setFromQuaternion(this._q, this.order),
                n = 0,
                r = 0,
                o = -1,
                a = -1;
              t.swing.y >= 0
                ? ((n = Math.abs(this.maxY)),
                  t.swing.z >= 0
                    ? ((o = 0), (a = 0.5 * Math.PI))
                    : ((o = 0.5 * Math.PI), (a = Math.PI)))
                : ((n = Math.abs(this.minY)),
                  t.swing.z >= 0
                    ? ((o = 1.5 * Math.PI), (a = 2 * Math.PI))
                    : ((o = Math.PI), (a = 1.5 * Math.PI))),
                (r =
                  t.swing.z >= 0 ? Math.abs(this.maxZ) : Math.abs(this.minZ)),
                (n = Math.sin(n / 2)),
                (r = Math.sin(r / 2));
              var i = t.swing.y,
                s = t.swing.z;
              function c(e, t, n, r, o) {
                var a = Math.sin(n),
                  i = Math.cos(n);
                return (
                  -2 * r * e * i +
                  2 * e * e * a * i +
                  2 * o * t * a -
                  2 * t * t * a * i
                );
              }
              var l = c(n, r, o, i, s);
              if (c(n, r, a, i, s) < l) {
                var u = o;
                (o = a), (a = u);
              }
              for (var p = 0; p < 8; ++p) {
                var f = (o + a) / 2;
                c(n, r, f, i, s) < 0 ? (o = f) : (a = f);
              }
              var h = !1,
                m = (o + a) / 2,
                d = n * Math.sin(m),
                y = r * Math.cos(m);
              d * d + y * y < i * i + s * s &&
                ((t.swing.y = d),
                (t.swing.z = y),
                (t.swing.w = Math.sqrt(1 - d * d - y * y)),
                (h = !0));
              var b = Math.sign(t.twist.x),
                v = 2 * Math.acos(t.twist.w) * b;
              (v /= 2 * Math.PI),
                (v += 0.5),
                (v -= Math.floor(v)),
                (v -= 0.5),
                (v *= 2 * Math.PI);
              var g = Math.min(Math.max(v, this.minX), this.maxX);
              return (
                v !== g &&
                  ((t.twist.x = Math.sin(g / 2)),
                  (t.twist.w = Math.cos(g / 2)),
                  (h = !0)),
                h &&
                  (t.toQuaternion(this._q),
                  e.quaternion.copy(this.orient),
                  e.quaternion.inverse(),
                  e.quaternion.multiplyQuaternions(this._q, e.quaternion),
                  e.quaternion.multiplyQuaternions(this.orient, e.quaternion),
                  e.quaternion.multiplyQuaternions(this.bind, e.quaternion),
                  e.quaternion.multiplyQuaternions(
                    e.quaternion,
                    this.preRotate
                  )),
                h
              );
            }
          }
        ]) && o(t.prototype, n),
        a && o(t, a),
        e
      );
    })();
  }
});
//# sourceMappingURL=dev/heroforge.js.map
function init() {
    (function(){

    RK.STLExporter = function () {};

    RK.STLExporter.prototype = {

        constructor: RK.STLExporter,

        parse: ( function () {

            var vector = new THREE.Vector3();
            var normalMatrixWorld = new THREE.Matrix3();

            return function ( scenes ) {
				
                console.log(scenes);
				
                var output = '';
				
                output += 'solid exported\n';
				
                for(var scene_nr in scenes) {
					
                    scenes[scene_nr].traverse( function ( object ) {
						
                        if(object instanceof RK.Mesh){		    
                            // if object is hidden - exit
                            if(object.visible == false) return; 

                            var geometry = object.geometry;
                            var matrixWorld = object.matrixWorld;
                            var skeleton = object.skeleton;
                            var mesh = object;

                            if(geometry instanceof RK.BufferGeometry){
								//Get pose from skeleton
                                var bufferGeometry = geometry.clone();
                                geometry = new RK.Geometry().fromBufferGeometry(geometry);
                                var skinIndex = bufferGeometry.getAttribute('skinIndex0');
                                var skinWeight = bufferGeometry.getAttribute('skinWeight0');
                                var morphTarget = bufferGeometry.getAttribute('morphTarget0');
                                var mtcount = 0;
                                while(typeof morphTarget !== 'undefined') {
                                    mtcount++;
                                    morphTarget = bufferGeometry.getAttribute('morphTarget' + mtcount);
                                }
                                if(typeof skinIndex !== 'undefined') {
                                    geometry.skinIndices = [];
                                    geometry.skinWeights = [];
                                    geometry.morphTargets = [];
                                    for(var j = 0; j < mtcount; j++) {
                                        geometry.morphTargets[j] = {};
                                        geometry.morphTargets[j].vertices = [];
                                    }
                                    for(var i = 0; i < geometry.vertices.length; i++) {
                                        geometry.skinIndices.push((new THREE.Vector4 ()).fromBufferAttribute(skinIndex,i));
                                        geometry.skinWeights.push((new THREE.Vector4 ()).fromBufferAttribute(skinWeight,i));
                                        for(var j = 0; j < mtcount; j++) {
                                            geometry.morphTargets[j].vertices.push((
                                                new THREE.Vector3(
                                                    bufferGeometry.getAttribute('morphTarget' + j).getX(i),
                                                    bufferGeometry.getAttribute('morphTarget' + j).getY(i),
                                                    bufferGeometry.getAttribute('morphTarget' + j).getZ(i)
                                                )
                                            ));
                                        }
                                    }
                                }
                            }

                            if ( geometry instanceof RK.Geometry) {

                                var vertices = geometry.vertices;
                                var faces = geometry.faces;

                                normalMatrixWorld.getNormalMatrix( matrixWorld );

                                if(typeof faces != 'undefined'){
                                    for ( var i = 0, l = faces.length; i < l; i ++ ) {
                                        var face = faces[ i ];

                                        vector.copy( face.normal ).applyMatrix3( normalMatrixWorld ).normalize();

                                        output += '\tfacet normal ' + vector.x + ' ' + vector.y + ' ' + vector.z + '\n';
                                        output += '\t\touter loop\n';

                                        var indices = [ face.a, face.b, face.c ];

                                        for ( var j = 0; j < 3; j ++ ) {
                                            var vertexIndex = indices[ j ];
                                            if (typeof geometry.skinIndices !== 'undefined' && geometry.skinIndices.length == 0) {
                                                vector.copy( vertices[ vertexIndex ] ).applyMatrix4( matrixWorld );
                                                output += '\t\t\tvertex ' + vector.x + ' ' + vector.y + ' ' + vector.z + '\n';
                                            } else {
                                                vector.copy( vertices[ vertexIndex ] ); //.applyMatrix4( matrixWorld );

                                                // see https://github.com/mrdoob/three.js/issues/3187
                                                var boneIndices = [
                                                    geometry.skinIndices[vertexIndex].x,
                                                    geometry.skinIndices[vertexIndex].y,
                                                    geometry.skinIndices[vertexIndex].z,
                                                    geometry.skinIndices[vertexIndex].w
                                                ];

                                                var weights = [
                                                    geometry.skinWeights[vertexIndex].x,
                                                    geometry.skinWeights[vertexIndex].y,
                                                    geometry.skinWeights[vertexIndex].z,
                                                    geometry.skinWeights[vertexIndex].w
                                                ];

                                                var inverses = [
                                                    skeleton.boneInverses[ boneIndices[0] ],
                                                    skeleton.boneInverses[ boneIndices[1] ],
                                                    skeleton.boneInverses[ boneIndices[2] ],
                                                    skeleton.boneInverses[ boneIndices[3] ]
                                                ];

                                                var skinMatrices = [
                                                    skeleton.bones[ boneIndices[0] ].matrixWorld,
                                                    skeleton.bones[ boneIndices[1] ].matrixWorld,
                                                    skeleton.bones[ boneIndices[2] ].matrixWorld,
                                                    skeleton.bones[ boneIndices[3] ].matrixWorld
                                                ];

                                                //this checks to see if the mesh has any morphTargets - jc
                                                if (geometry.morphTargets !== 'undefined') {										
                                                    var morphMatricesX = [];
                                                    var morphMatricesY = [];
                                                    var morphMatricesZ = [];
                                                    var morphMatricesInfluence = [];

                                                    for (var mt = 0; mt < geometry.morphTargets.length; mt++) {
                                                        //collect the needed vertex info - jc
                                                        morphMatricesX[mt] = geometry.morphTargets[mt].vertices[vertexIndex].x;
                                                        morphMatricesY[mt] = geometry.morphTargets[mt].vertices[vertexIndex].y;
                                                        morphMatricesZ[mt] = geometry.morphTargets[mt].vertices[vertexIndex].z;
                                                        morphMatricesInfluence[mt] = mesh.morphTargetInfluences[mt];
                                                    }
                                                }

                                                var finalVector = new THREE.Vector4();

                                                if (geometry.morphTargets !== 'undefined') {

                                                    var morphVector = new THREE.Vector4(vector.x, vector.y, vector.z);

                                                    for (var mt = 0; mt < geometry.morphTargets.length; mt++) {
                                                        //not pretty, but it gets the job done - jc
                                                        morphVector.lerp(new THREE.Vector4(morphMatricesX[mt], morphMatricesY[mt], morphMatricesZ[mt], 1), morphMatricesInfluence[mt]);
                                                    }

                                                }

                                                for (var k = 0; k < 4; k++) {
                                                    if (geometry.morphTargets !== 'undefined') {
                                                        var tempVector = new THREE.Vector4(morphVector.x, morphVector.y, morphVector.z);
                                                    } else {
                                                        var tempVector = new THREE.Vector4(vector.x, vector.y, vector.z);
                                                    }                                                    
                                                    
                                                    tempVector.multiplyScalar(weights[k]);
                                                    //the inverse takes the vector into local bone space
													//which is then transformed to the appropriate world space
                                                    tempVector.applyMatrix4(inverses[k]).applyMatrix4(skinMatrices[k]);
                                                    finalVector.add(tempVector);

                                                }

                                                output += '\t\t\tvertex ' + finalVector.x + ' ' + finalVector.y + ' ' + finalVector.z + '\n';
                                            }
                                        }
                                        output += '\t\tendloop\n';
                                        output += '\tendfacet\n';
                                    }
                                }
                            }
                        }
                    } );
                }
                output += 'endsolid exported\n';

                return output;
            };
        }() )
    };

    if (typeof module !== "undefined" && module.exports) {
        module.exports = RK.STLExporter
    } 
    else if ((typeof define !== "undefined" && define !== null) && (define.amd !== null)) {
        define([], function() {
            return saveAs;
        });
    }

    var model = CK.character;
	var characterArea_hook = ".content-side:first";
	var menu_style = {"margin-left": "20px", "font-size": "1.2em", "cursor" : "pointer" };
	    
	var character_area, stl, stl_base, sjson, ljson, labeljson;
	
	stl = 				jQuery("<a />").css(menu_style).text("Export Figure");
	stl_base = 			jQuery("<a />").css(menu_style).css({"margin-left": "125px"}).text("Export Model (STL)");
	sjson = 			jQuery("<a />").css(menu_style).text("Export (JSON)");
	ljson  = 			jQuery("<input/>").attr({"type": "file", "id": "ljson"}).css({"display":"none"}).text("Import (JSON)");
	labeljson  = 		jQuery("<label/>").attr({"for": "ljson"}).css(menu_style).text("Import (JSON)");
    enlarge = 			jQuery("<a />").css(menu_style).text("Enlarge");
	reset_scale = 			jQuery("<a />").css(menu_style).text("Reset Scale");
	
	character_area = 	jQuery(characterArea_hook);
	
    //character_area.append(stl);
    character_area.append(stl_base);
    character_area.append(sjson);
    character_area.append(ljson);
    character_area.append(labeljson);
    character_area.append(enlarge);
    character_area.append(reset_scale);
    character_area.css("right", 0);

    /*stl.click(function(e) {
        e.preventDefault(); 
        var exporter = new RK.STLExporter();    
        var objs = CK.character.children;    
        var character = objs[0];
        var figure = [];
        var max_objs = 0;
        var i;
        for(i in objs) { // find character
            if (objs[i].children.length > objs[max_objs].children.length) {
                console.log("Id " + max_objs + " is not the character");
                character = objs[i];
                max_objs = i;
            }        
        }
        if(character.children.length > 9) { // There is an option to hide the character. Since I do not know where this option is saved
            // we use the following heuristic: If there is no object with 10 or more children, the character
            // must be hidden...
            console.log("Found Character, id=" + max_objs);
            console.log(character);
            figure.push(character);
        }
        if(CK.data.parts.mount !== undefined) {
            console.log("Exporting Mount");
            var mount = undefined;
            for(i in objs) { // find mount
                var j;
                for(j in objs[i].children) {
                    if(objs[i].children[j].name == "mount" && objs[i].children.length < 10) {
                        console.log("Found mount, id=" + i + "," + j)
                        mount = objs[i];
                    }
                }
            }
            console.log(mount);
            figure.push(mount);
            console.log(figure);
        }
        console.log(figure);
        var stlString = exporter.parse(figure)
        var name = get_name();
        download(stlString, name + '.stl', 'application/sla');
    });*/
    
    stl_base.click(function(e) {
        e.preventDefault(); 
        download_stl(model);
    });

    enlarge.click(function(e) {
        e.preventDefault(); 
        set_object_props(model,[10, 10, 10], [Math.PI / 2, 0, 0]);
    });

    reset_scale.click(function(e) {
        e.preventDefault(); 
        set_object_props(model,[1, 1, 1], [0, 0, 0]);
    });

    sjson.click(function(e) {
        e.preventDefault();
        var char_json = JSON.stringify(CK.data);
        var name = get_name();
        download(char_json, name + ".json", "text/plain");
    });

    ljson.on('change', function(e) {
        e.preventDefault();
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {
                e.preventDefault();
                CK.change(JSON.parse(e.target.result));
            };
        })(file);
        reader.readAsText(file);
    });
})()};

function inject_script(url, callback) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = url; 
  script.onload = function(e) { 
      callback() };
  head.appendChild(script);
}

inject_script("//code.jquery.com/jquery-3.3.1.js", function () {
    inject_script("//cdnjs.cloudflare.com/ajax/libs/three.js/108/three.js", function () { init() })
});

function download_stl(object){
    var exporter = new RK.STLExporter();   
    var stlString = exporter.parse([object])
    var name = get_name();
    download(stlString, name + '.stl', 'application/sla');
}

function set_object_props(object,scale,rot){
    object.scale.set( ...scale );
    object.rotation.set( ...rot );
    object.refresh();
}

function get_name() {
  var timestamp = new Date().getUTCMilliseconds();
  var uqID = timestamp.toString(36);
  var name = "Character " + uqID; 
  try {
    var getName = CK.character.data.meta.character_name
    name = getName === "" ? name : getName;
  } catch (e) {
    if (e instanceof ReferenceError) {
        console.log("Name of character data location has changed");
        console.log(e);
    } else {
        console.log("Other Error");
        console.log(e);
    }
  }
  return name;
}
