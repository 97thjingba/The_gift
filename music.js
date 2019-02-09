!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("cplayer-umd", [], t)
    : "object" == typeof exports
    ? (exports["cplayer-umd"] = t())
    : (e["cplayer-umd"] = t());
})(this, function() {
  return (function(e) {
    function t(i) {
      if (n[i]) return n[i].exports;
      var o = (n[i] = { i: i, l: !1, exports: {} });
      return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function(e, n, i) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
          });
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 1))
    );
  })([
    function(e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t, n, i) {
        var o = void 0,
          r = !1;
        return (
          t.forEach(function(t, n) {
            a.default(t, e) && (o = n);
          }),
          void 0 !== o &&
            (t.splice(o, 1),
            n > o ? (n--, (r = !1)) : n === o && ((n = i(n)), (r = !0))),
          { playlist: t, nowpoint: n, needupdate: r }
        );
      }
      var r = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(8);
      t.baseRemoveMusic = o;
      var s = (function() {
        function e() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
          i(this, e),
            (this.__playlist = []),
            (this.point = 0),
            (this.__playlist = t),
            this.to(n);
        }
        return (
          r(e, [
            {
              key: "next",
              value: function() {
                return (
                  (this.point = this.nextPoint()), this.playlist[this.point]
                );
              }
            },
            {
              key: "prev",
              value: function() {
                return (
                  (this.point = this.prevPoint()), this.playlist[this.point]
                );
              }
            },
            {
              key: "now",
              value: function() {
                return this.playlist[this.point];
              }
            },
            {
              key: "nowpoint",
              value: function() {
                return this.point;
              }
            },
            {
              key: "to",
              value: function(e) {
                this.point = Math.max(
                  0,
                  Math.min(e, this.__playlist.length - 1)
                );
              }
            },
            {
              key: "addMusic",
              value: function(e) {
                this.__playlist.push(e);
              }
            },
            {
              key: "nextPoint",
              value: function() {
                var e = this.point + 1;
                return e >= this.__playlist.length && (e = 0), e;
              }
            },
            {
              key: "prevPoint",
              value: function() {
                var e = this.point - 1;
                return e < 0 && (e = this.__playlist.length - 1), e;
              }
            },
            {
              key: "removeMusic",
              value: function(e) {
                var t = this,
                  n = o(e, this.__playlist, this.point, function(e) {
                    return Math.max(0, Math.min(e, t.__playlist.length - 1));
                  }),
                  i = n.playlist,
                  r = n.nowpoint,
                  a = n.needupdate;
                return (this.__playlist = i), (this.point = r), a;
              }
            },
            {
              key: "playlist",
              get: function() {
                return this.__playlist;
              }
            }
          ]),
          e
        );
      })();
      t.listloopPlaymode = s;
    },
    function(e, t, n) {
      e.exports = n(2);
    },
    function(e, t, n) {
      "use strict";
      (function(e) {
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function r(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        function a(e) {
          return e.map(function(e, t) {
            var n = Object.assign({}, e);
            return (
              "string" == typeof e.lyric &&
                e.lyric.replace(/\n+/gi, "\n").trim() &&
                (n.lyric = c.decodeLyricStr(e.lyric)),
              "string" == typeof e.sublyric &&
                e.sublyric.replace(/\n+/gi, "\n").trim() &&
                (n.sublyric = c.decodeLyricStr(e.sublyric)),
              n
            );
          });
        }
        var s = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })();
        Object.defineProperty(t, "__esModule", { value: !0 }), n(7);
        var l = n(0),
          u = n(9),
          c = n(10),
          h = n(11),
          p = n(12),
          d = n(13),
          f = {
            playlist: [],
            point: 0,
            volume: 1,
            playmode: "listloop",
            autoplay: !1
          },
          y = {
            listloop: l.listloopPlaymode,
            singlecycle: h.singlecyclePlaymode,
            listrandom: p.listrandomPlaymode
          },
          m = (function(t) {
            function n(t) {
              i(this, n);
              var r = o(
                this,
                (n.__proto__ || Object.getPrototypeOf(n)).call(this)
              );
              return (
                (r.__paused = !0),
                (r.playmodeName = "listloop"),
                (r._volume = 0),
                (r.eventHandlers = {
                  handlePlay: function() {
                    r.__paused && r.pause();
                  },
                  handlePlaying: function() {
                    0 === r.audioElement.currentTime && r.emit("started");
                  },
                  handleTimeUpdate: function() {
                    var e = r.audioElement.duration,
                      t = r.audioElement.currentTime;
                    r.emit("timeupdate", t, e);
                  },
                  handleCanPlayThrough: function() {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    r.emit.apply(r, ["canplaythrough"].concat(t));
                  },
                  handlePause: function() {
                    r.__paused ||
                      r.audioElement.ended ||
                      r.play(!0).catch(function(e) {
                        console.log(e), r.pause();
                      });
                  },
                  handleEnded: function() {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    r.emit.apply(r, ["ended"].concat(t)),
                      r.__paused || r.next();
                  },
                  handlePlayListChange: function() {
                    for (
                      var e = arguments.length, t = Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    r.emit.apply(r, ["playlistchange"].concat(t));
                  },
                  handlePlaymodeChange: function() {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : r.mode;
                    r.emit("playmodechange", e);
                  },
                  handleLoadeddata: function() {
                    var e = r.audioElement.duration,
                      t = r.audioElement.currentTime;
                    r.emit("timeupdate", t, e);
                  }
                }),
                (t = Object.assign({}, f, t)),
                (r.playmode = new y[t.playmode](a(t.playlist), t.point)),
                d.cplayerMediaSessionPlugin(r),
                e(function() {
                  r.openAudio(),
                    r.setVolume(t.volume),
                    t.autoplay &&
                      r.playlist.length > 0 &&
                      r.play(!0).catch(function(e) {
                        console.log(e), r.pause();
                      });
                }),
                r
              );
            }
            return (
              r(n, t),
              s(n, [
                {
                  key: "initializeEventEmitter",
                  value: function(e) {
                    var t = e.addEventListener.bind(e),
                      n = this.eventHandlers;
                    t("timeupdate", n.handleTimeUpdate),
                      t("canplaythrough", n.handleCanPlayThrough),
                      t("pause", n.handlePause),
                      t("play", n.handlePlay),
                      t("playing", n.handlePlaying),
                      t("ended", n.handleEnded),
                      t("loadeddata", n.handleLoadeddata);
                  }
                },
                {
                  key: "removeEventEmitter",
                  value: function(e) {
                    var t = e.removeEventListener.bind(e),
                      n = this.eventHandlers;
                    t("timeupdate", n.handleTimeUpdate),
                      t("canplaythrough", n.handleCanPlayThrough),
                      t("pause", n.handlePause),
                      t("play", n.handlePlay),
                      t("playing", n.handlePlaying),
                      t("ended", n.handleEnded),
                      t("loadeddata", n.handleLoadeddata);
                  }
                },
                {
                  key: "setCurrentTime",
                  value: function(e) {
                    if (
                      "string" == typeof e &&
                      (e.trim(), "%" === e[e.length - 1])
                    ) {
                      var t = parseFloat(e);
                      e = this.duration * (t / 100);
                    }
                    this.audioElement &&
                      (this.audioElement.currentTime = parseFloat(
                        e.toString()
                      ));
                  }
                },
                {
                  key: "isPlaying",
                  value: function() {
                    return (
                      this.audioElement.currentTime > 0 &&
                      !this.audioElement.paused &&
                      !this.audioElement.ended &&
                      this.audioElement.readyState > 2
                    );
                  }
                },
                {
                  key: "openAudio",
                  value: function() {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.nowplay;
                    e &&
                      ("video" === e.type
                        ? "HTMLVideoElement" !== this.audioElementType &&
                          (void 0 !== this.audioElement &&
                            (this.removeEventEmitter(this.audioElement),
                            (this.audioElement.src = "")),
                          (this.audioElement = document.createElement("video")),
                          this.audioElement instanceof HTMLVideoElement &&
                            ((this.audioElementType = "HTMLVideoElement"),
                            (this.audioElement.loop = !1),
                            (this.audioElement.autoplay = !1),
                            (this.audioElement.poster = e.poster),
                            this.audioElement.setAttribute(
                              "playsinline",
                              "true"
                            ),
                            this.audioElement.setAttribute(
                              "webkit-playsinline",
                              "true"
                            )),
                          this.initializeEventEmitter(this.audioElement),
                          this.emit("audioelementchange", this.audioElement))
                        : "HTMLAudioElement" !== this.audioElementType &&
                          (void 0 !== this.audioElement &&
                            (this.removeEventEmitter(this.audioElement),
                            (this.audioElement.src = "")),
                          (this.audioElement = new Audio()),
                          (this.audioElementType = "HTMLAudioElement"),
                          (this.audioElement.loop = !1),
                          (this.audioElement.autoplay = !1),
                          this.initializeEventEmitter(this.audioElement),
                          this.emit("audioelementchange", this.audioElement)),
                      this.setVolume(this.volume),
                      (this.audioElement.src = this.nowplay.src),
                      this.emit("openaudio", e),
                      this.__paused || this.play());
                  }
                },
                {
                  key: "toggleMode",
                  value: function() {
                    switch (this.playmodeName) {
                      case "listloop":
                        this.setMode("singlecycle");
                        break;
                      case "singlecycle":
                        this.setMode("listrandom");
                        break;
                      case "listrandom":
                        this.setMode("listloop");
                    }
                  }
                },
                {
                  key: "setMode",
                  value: function(e) {
                    "string" == typeof e &&
                      this.playmodeName !== e &&
                      y[e] &&
                      ((this.playmode = new y[e](
                        this.playlist,
                        this.nowplaypoint
                      )),
                      (this.playmodeName = e),
                      this.eventHandlers.handlePlaymodeChange());
                  }
                },
                {
                  key: "getMode",
                  value: function() {
                    return this.mode;
                  }
                },
                {
                  key: "play",
                  value: function() {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      t = this.isPlaying(),
                      n = void 0;
                    return (
                      ((!t && this.playlist.length > 0) || e) &&
                        (n = this.audioElement.play()),
                      this.__paused &&
                        ((this.__paused = !1),
                        this.emit("playstatechange", this.__paused),
                        this.emit("play")),
                      n
                    );
                  }
                },
                {
                  key: "pause",
                  value: function() {
                    var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    ((this.isPlaying() && this.playlist.length > 0) || e) &&
                      this.audioElement.pause(),
                      this.__paused ||
                        ((this.__paused = !0),
                        this.emit("playstatechange", this.__paused),
                        this.emit("pause"));
                  }
                },
                {
                  key: "to",
                  value: function(e) {
                    this.playmode.to(e), this.openAudio();
                  }
                },
                {
                  key: "next",
                  value: function() {
                    this.playmode.next(), this.openAudio();
                  }
                },
                {
                  key: "prev",
                  value: function() {
                    this.playmode.prev(), this.openAudio();
                  }
                },
                {
                  key: "togglePlayState",
                  value: function() {
                    this.__paused ? this.play() : this.pause();
                  }
                },
                {
                  key: "add",
                  value: function(e) {
                    (e = a([e])[0]),
                      this.playmode.addMusic(e),
                      this.eventHandlers.handlePlayListChange(),
                      1 === this.playlist.length && this.to(0);
                  }
                },
                {
                  key: "remove",
                  value: function(e) {
                    var t = this.playmode.removeMusic(e);
                    this.eventHandlers.handlePlayListChange(),
                      t && this.openAudio();
                  }
                },
                {
                  key: "setVolume",
                  value: function(e) {
                    (this._volume = parseFloat(e)),
                      this.audioElement &&
                        (this.audioElement.volume = Math.max(
                          0,
                          Math.min(1, this._volume)
                        )),
                      this.emit("volumechange", this.audioElement.volume);
                  }
                },
                {
                  key: "destroy",
                  value: function() {
                    var e = this;
                    this.audioElement &&
                      ((this.audioElement.src = null),
                      this.audioElement.removeEventListener(
                        "timeupdate",
                        this.eventHandlers.handleTimeUpdate
                      ),
                      this.removeAllListeners()),
                      this.view && this.view.destroy(),
                      Object.getOwnPropertyNames(this).forEach(function(t) {
                        return delete e[t];
                      }),
                      (this.__proto__ = Object);
                  }
                },
                {
                  key: "mode",
                  set: function(e) {
                    this.setMode(e);
                  },
                  get: function() {
                    return this.playmodeName;
                  }
                },
                {
                  key: "volume",
                  set: function(e) {
                    this.setVolume(e);
                  },
                  get: function() {
                    return this._volume;
                  }
                },
                {
                  key: "playlist",
                  get: function() {
                    return this.playmode.playlist;
                  }
                },
                {
                  key: "nowplay",
                  get: function() {
                    return this.playmode && this.playmode.now();
                  }
                },
                {
                  key: "nowplaypoint",
                  get: function() {
                    return this.playmode && this.playmode.nowpoint();
                  }
                },
                {
                  key: "played",
                  get: function() {
                    return !this.__paused;
                  }
                },
                {
                  key: "paused",
                  get: function() {
                    return this.__paused;
                  }
                },
                {
                  key: "duration",
                  get: function() {
                    return this.audioElement ? this.audioElement.duration : 0;
                  }
                },
                {
                  key: "currentTime",
                  get: function() {
                    return this.audioElement
                      ? this.audioElement.currentTime
                      : 0;
                  }
                }
              ]),
              n
            );
          })(u.EventEmitter);
        t.default = m;
        window.cplayer = m;
      }.call(t, n(3).setImmediate));
    },
    function(e, t, n) {
      function i(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      var o = Function.prototype.apply;
      (t.setTimeout = function() {
        return new i(o.call(setTimeout, window, arguments), clearTimeout);
      }),
        (t.setInterval = function() {
          return new i(o.call(setInterval, window, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval = function(e) {
          e && e.close();
        }),
        (i.prototype.unref = i.prototype.ref = function() {}),
        (i.prototype.close = function() {
          this._clearFn.call(window, this._id);
        }),
        (t.enroll = function(e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function(e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active = function(e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 &&
            (e._idleTimeoutId = setTimeout(function() {
              e._onTimeout && e._onTimeout();
            }, t));
        }),
        n(4),
        (t.setImmediate = setImmediate),
        (t.clearImmediate = clearImmediate);
    },
    function(e, t, n) {
      (function(e, t) {
        !(function(e, n) {
          "use strict";
          function i(e) {
            "function" != typeof e && (e = new Function("" + e));
            for (
              var t = new Array(arguments.length - 1), n = 0;
              n < t.length;
              n++
            )
              t[n] = arguments[n + 1];
            var i = { callback: e, args: t };
            return (u[l] = i), s(l), l++;
          }
          function o(e) {
            delete u[e];
          }
          function r(e) {
            var t = e.callback,
              i = e.args;
            switch (i.length) {
              case 0:
                t();
                break;
              case 1:
                t(i[0]);
                break;
              case 2:
                t(i[0], i[1]);
                break;
              case 3:
                t(i[0], i[1], i[2]);
                break;
              default:
                t.apply(n, i);
            }
          }
          function a(e) {
            if (c) setTimeout(a, 0, e);
            else {
              var t = u[e];
              if (t) {
                c = !0;
                try {
                  r(t);
                } finally {
                  o(e), (c = !1);
                }
              }
            }
          }
          if (!e.setImmediate) {
            var s,
              l = 1,
              u = {},
              c = !1,
              h = e.document,
              p = Object.getPrototypeOf && Object.getPrototypeOf(e);
            (p = p && p.setTimeout ? p : e),
              "[object process]" === {}.toString.call(e.process)
                ? (function() {
                    s = function(e) {
                      t.nextTick(function() {
                        a(e);
                      });
                    };
                  })()
                : (function() {
                    if (e.postMessage && !e.importScripts) {
                      var t = !0,
                        n = e.onmessage;
                      return (
                        (e.onmessage = function() {
                          t = !1;
                        }),
                        e.postMessage("", "*"),
                        (e.onmessage = n),
                        t
                      );
                    }
                  })()
                ? (function() {
                    var t = "setImmediate$" + Math.random() + "$",
                      n = function(n) {
                        n.source === e &&
                          "string" == typeof n.data &&
                          0 === n.data.indexOf(t) &&
                          a(+n.data.slice(t.length));
                      };
                    e.addEventListener
                      ? e.addEventListener("message", n, !1)
                      : e.attachEvent("onmessage", n),
                      (s = function(n) {
                        e.postMessage(t + n, "*");
                      });
                  })()
                : e.MessageChannel
                ? (function() {
                    var e = new MessageChannel();
                    (e.port1.onmessage = function(e) {
                      a(e.data);
                    }),
                      (s = function(t) {
                        e.port2.postMessage(t);
                      });
                  })()
                : h && "onreadystatechange" in h.createElement("script")
                ? (function() {
                    var e = h.documentElement;
                    s = function(t) {
                      var n = h.createElement("script");
                      (n.onreadystatechange = function() {
                        a(t),
                          (n.onreadystatechange = null),
                          e.removeChild(n),
                          (n = null);
                      }),
                        e.appendChild(n);
                    };
                  })()
                : (function() {
                    s = function(e) {
                      setTimeout(a, 0, e);
                    };
                  })(),
              (p.setImmediate = i),
              (p.clearImmediate = o);
          }
        })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
      }.call(t, n(5), n(6)));
    },
    function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || Function("return this")() || (0, eval)("this");
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function(e, t) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout)
          return (c = setTimeout), setTimeout(e, 0);
        try {
          return c(e, 0);
        } catch (t) {
          try {
            return c.call(null, e, 0);
          } catch (t) {
            return c.call(this, e, 0);
          }
        }
      }
      function r(e) {
        if (h === clearTimeout) return clearTimeout(e);
        if ((h === i || !h) && clearTimeout)
          return (h = clearTimeout), clearTimeout(e);
        try {
          return h(e);
        } catch (t) {
          try {
            return h.call(null, e);
          } catch (t) {
            return h.call(this, e);
          }
        }
      }
      function a() {
        y &&
          d &&
          ((y = !1), d.length ? (f = d.concat(f)) : (m = -1), f.length && s());
      }
      function s() {
        if (!y) {
          var e = o(a);
          y = !0;
          for (var t = f.length; t; ) {
            for (d = f, f = []; ++m < t; ) d && d[m].run();
            (m = -1), (t = f.length);
          }
          (d = null), (y = !1), r(e);
        }
      }
      function l(e, t) {
        (this.fun = e), (this.array = t);
      }
      function u() {}
      var c,
        h,
        p = (e.exports = {});
      !(function() {
        try {
          c = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
          c = n;
        }
        try {
          h = "function" == typeof clearTimeout ? clearTimeout : i;
        } catch (e) {
          h = i;
        }
      })();
      var d,
        f = [],
        y = !1,
        m = -1;
      (p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        f.push(new l(e, t)), 1 !== f.length || y || o(s);
      }),
        (l.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (p.title = "browser"),
        (p.browser = !0),
        (p.env = {}),
        (p.argv = []),
        (p.version = ""),
        (p.versions = {}),
        (p.on = u),
        (p.addListener = u),
        (p.once = u),
        (p.off = u),
        (p.removeListener = u),
        (p.removeAllListeners = u),
        (p.emit = u),
        (p.prependListener = u),
        (p.prependOnceListener = u),
        (p.listeners = function(e) {
          return [];
        }),
        (p.binding = function(e) {
          throw new Error("process.binding is not supported");
        }),
        (p.cwd = function() {
          return "/";
        }),
        (p.chdir = function(e) {
          throw new Error("process.chdir is not supported");
        }),
        (p.umask = function() {
          return 0;
        });
    },
    function(e, t, n) {
      "use strict";
      "function" != typeof Object.assign &&
        Object.defineProperty(Object, "assign", {
          value: function(e, t) {
            if (null == e)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(e), i = 1; i < arguments.length; i++) {
              var o = arguments[i];
              if (null != o)
                for (var r in o)
                  Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r]);
            }
            return n;
          },
          writable: !0,
          configurable: !0
        });
    },
    function(e, t, n) {
      "use strict";
      function i(e, t) {
        return e == t ? 0 != e || 0 != t || 1 / e == 1 / t : e != e && t != t;
      }
      function o(e, t) {
        if (i(e, t)) return !0;
        if (
          "object" !== (void 0 === e ? "undefined" : r(e)) ||
          null === e ||
          "object" !== (void 0 === t ? "undefined" : r(t)) ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var s = 0; s < n.length; s++)
          if (!a.call(t, n[s]) || !i(e[n[s]], t[n[s]])) return !1;
        return !0;
      }
      var r =
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
            };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = Object.prototype.hasOwnProperty;
      t.default = o;
    },
    function(e, t) {
      function n() {
        (this._events = this._events || {}),
          (this._maxListeners = this._maxListeners || void 0);
      }
      function i(e) {
        return "function" == typeof e;
      }
      function o(e) {
        return "number" == typeof e;
      }
      function r(e) {
        return "object" == typeof e && null !== e;
      }
      function a(e) {
        return void 0 === e;
      }
      (e.exports = n),
        (n.EventEmitter = n),
        (n.prototype._events = void 0),
        (n.prototype._maxListeners = void 0),
        (n.defaultMaxListeners = 10),
        (n.prototype.setMaxListeners = function(e) {
          if (!o(e) || e < 0 || isNaN(e))
            throw TypeError("n must be a positive number");
          return (this._maxListeners = e), this;
        }),
        (n.prototype.emit = function(e) {
          var t, n, o, s, l, u;
          if (
            (this._events || (this._events = {}),
            "error" === e &&
              (!this._events.error ||
                (r(this._events.error) && !this._events.error.length)))
          ) {
            if ((t = arguments[1]) instanceof Error) throw t;
            var c = new Error(
              'Uncaught, unspecified "error" event. (' + t + ")"
            );
            throw ((c.context = t), c);
          }
          if (((n = this._events[e]), a(n))) return !1;
          if (i(n))
            switch (arguments.length) {
              case 1:
                n.call(this);
                break;
              case 2:
                n.call(this, arguments[1]);
                break;
              case 3:
                n.call(this, arguments[1], arguments[2]);
                break;
              default:
                (s = Array.prototype.slice.call(arguments, 1)),
                  n.apply(this, s);
            }
          else if (r(n))
            for (
              s = Array.prototype.slice.call(arguments, 1),
                u = n.slice(),
                o = u.length,
                l = 0;
              l < o;
              l++
            )
              u[l].apply(this, s);
          return !0;
        }),
        (n.prototype.addListener = function(e, t) {
          var o;
          if (!i(t)) throw TypeError("listener must be a function");
          return (
            this._events || (this._events = {}),
            this._events.newListener &&
              this.emit("newListener", e, i(t.listener) ? t.listener : t),
            this._events[e]
              ? r(this._events[e])
                ? this._events[e].push(t)
                : (this._events[e] = [this._events[e], t])
              : (this._events[e] = t),
            r(this._events[e]) &&
              !this._events[e].warned &&
              (o = a(this._maxListeners)
                ? n.defaultMaxListeners
                : this._maxListeners) &&
              o > 0 &&
              this._events[e].length > o &&
              ((this._events[e].warned = !0),
              console.error(
                "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                this._events[e].length
              ),
              "function" == typeof console.trace && console.trace()),
            this
          );
        }),
        (n.prototype.on = n.prototype.addListener),
        (n.prototype.once = function(e, t) {
          function n() {
            this.removeListener(e, n),
              o || ((o = !0), t.apply(this, arguments));
          }
          if (!i(t)) throw TypeError("listener must be a function");
          var o = !1;
          return (n.listener = t), this.on(e, n), this;
        }),
        (n.prototype.removeListener = function(e, t) {
          var n, o, a, s;
          if (!i(t)) throw TypeError("listener must be a function");
          if (!this._events || !this._events[e]) return this;
          if (
            ((n = this._events[e]),
            (a = n.length),
            (o = -1),
            n === t || (i(n.listener) && n.listener === t))
          )
            delete this._events[e],
              this._events.removeListener && this.emit("removeListener", e, t);
          else if (r(n)) {
            for (s = a; s-- > 0; )
              if (n[s] === t || (n[s].listener && n[s].listener === t)) {
                o = s;
                break;
              }
            if (o < 0) return this;
            1 === n.length
              ? ((n.length = 0), delete this._events[e])
              : n.splice(o, 1),
              this._events.removeListener && this.emit("removeListener", e, t);
          }
          return this;
        }),
        (n.prototype.removeAllListeners = function(e) {
          var t, n;
          if (!this._events) return this;
          if (!this._events.removeListener)
            return (
              0 === arguments.length
                ? (this._events = {})
                : this._events[e] && delete this._events[e],
              this
            );
          if (0 === arguments.length) {
            for (t in this._events)
              "removeListener" !== t && this.removeAllListeners(t);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = {}),
              this
            );
          }
          if (((n = this._events[e]), i(n))) this.removeListener(e, n);
          else if (n)
            for (; n.length; ) this.removeListener(e, n[n.length - 1]);
          return delete this._events[e], this;
        }),
        (n.prototype.listeners = function(e) {
          return this._events && this._events[e]
            ? i(this._events[e])
              ? [this._events[e]]
              : this._events[e].slice()
            : [];
        }),
        (n.prototype.listenerCount = function(e) {
          if (this._events) {
            var t = this._events[e];
            if (i(t)) return 1;
            if (t) return t.length;
          }
          return 0;
        }),
        (n.listenerCount = function(e, t) {
          return e.listenerCount(t);
        });
    },
    function(e, t, n) {
      "use strict";
      function i(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if ("string" != typeof e) return e;
        var n = [];
        return (
          e
            .replace(/\n+/gi, "\n")
            .trim()
            .split("\n")
            .forEach(function(e) {
              n.push.apply(n, i(a(e)));
            }),
          0 != n.length ? new l(n, e) : void 0
        );
      }
      function a(e) {
        var t = [],
          n = e.match(/\[\d+\:[\.\d]+\]/gi),
          i = /(?:\[\d+\:[\.\d]+\])*(.*)/gi.exec(e)[1].trim();
        return (
          n &&
            i &&
            n.forEach(function(e) {
              var n = /\[(\d+)\:([\.\d]+)\]/gi.exec(e.trim()),
                o = 60 * parseInt(n[1]) * 1e3 + 1e3 * parseFloat(n[2]);
              t.push({ time: o, word: i });
            }),
          t
        );
      }
      var s = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = (function() {
        function e(t, n) {
          o(this, e), (this.items = []), (this.items = t), (this.raw = n);
        }
        return (
          s(e, [
            {
              key: "getLyric",
              value: function(e) {
                return this.items.reduce(function(t, n) {
                  return n.time < e && (!t || t.time < n.time) ? n : t;
                }, void 0);
              }
            },
            {
              key: "getNextLyric",
              value: function(e) {
                return this.items.reduce(function(t, n) {
                  return n.time > e && (!t || t.time > n.time) ? n : t;
                }, void 0);
              }
            },
            {
              key: "toString",
              value: function() {
                return this.raw;
              }
            }
          ]),
          e
        );
      })();
      (t.Lyric = l), (t.decodeLyricStr = r), (t.decodeLyricStrItem = a);
    },
    function(e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var o = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(0),
        a = (function() {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
            i(this, e),
              (this.__playlist = []),
              (this.__playlist = t),
              this.to(n);
          }
          return (
            o(e, [
              {
                key: "next",
                value: function() {
                  return this.__playlist[this.point];
                }
              },
              {
                key: "prev",
                value: function() {
                  return this.__playlist[this.point];
                }
              },
              {
                key: "now",
                value: function() {
                  return this.__playlist[this.point];
                }
              },
              {
                key: "nowpoint",
                value: function() {
                  return this.point;
                }
              },
              {
                key: "to",
                value: function(e) {
                  this.point = Math.max(
                    0,
                    Math.min(e, this.__playlist.length - 1)
                  );
                }
              },
              {
                key: "addMusic",
                value: function(e) {
                  this.__playlist.push(e);
                }
              },
              {
                key: "removeMusic",
                value: function(e) {
                  var t = this,
                    n = r.baseRemoveMusic(
                      e,
                      this.__playlist,
                      this.point,
                      function(e) {
                        return Math.max(
                          0,
                          Math.min(e, t.__playlist.length - 1)
                        );
                      }
                    ),
                    i = n.playlist,
                    o = n.nowpoint,
                    a = n.needupdate;
                  return (this.__playlist = i), (this.point = o), a;
                }
              },
              {
                key: "playlist",
                get: function() {
                  return this.__playlist;
                }
              }
            ]),
            e
          );
        })();
      t.singlecyclePlaymode = a;
    },
    function(e, t, n) {
      "use strict";
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var o = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(0),
        a = (function() {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
            i(this, e),
              (this.__playlist = []),
              (this.point = 0),
              (this.__playlist = t),
              this.to(n);
          }
          return (
            o(e, [
              {
                key: "next",
                value: function() {
                  return (
                    (this.point = this.randomPoint()),
                    this.__playlist[this.point]
                  );
                }
              },
              {
                key: "prev",
                value: function() {
                  return (
                    (this.point = this.randomPoint()),
                    this.__playlist[this.point]
                  );
                }
              },
              {
                key: "now",
                value: function() {
                  return this.__playlist[this.point];
                }
              },
              {
                key: "nowpoint",
                value: function() {
                  return this.point;
                }
              },
              {
                key: "to",
                value: function(e) {
                  this.point = Math.max(
                    0,
                    Math.min(e, this.__playlist.length - 1)
                  );
                }
              },
              {
                key: "addMusic",
                value: function(e) {
                  this.__playlist.push(e);
                }
              },
              {
                key: "randomPoint",
                value: function() {
                  if (this.__playlist.length > 1) {
                    var e = Math.floor(this.__playlist.length * Math.random());
                    return e === this.point ? this.randomPoint() : e;
                  }
                  return 0;
                }
              },
              {
                key: "removeMusic",
                value: function(e) {
                  var t = this,
                    n = r.baseRemoveMusic(
                      e,
                      this.__playlist,
                      this.point,
                      function(e) {
                        return t.randomPoint();
                      }
                    ),
                    i = n.playlist,
                    o = n.nowpoint,
                    a = n.needupdate;
                  return (this.__playlist = i), (this.point = o), a;
                }
              },
              {
                key: "playlist",
                get: function() {
                  return this.__playlist;
                }
              }
            ]),
            e
          );
        })();
      t.listrandomPlaymode = a;
    },
    function(e, t, n) {
      "use strict";
      function i(e) {
        "mediaSession" in navigator &&
          ((navigator.mediaSession.metadata = o(e.nowplay)),
          navigator.mediaSession.setActionHandler("play", function() {
            return e.play();
          }),
          navigator.mediaSession.setActionHandler("pause", function() {
            return e.pause();
          }),
          navigator.mediaSession.setActionHandler("previoustrack", function() {
            return e.prev();
          }),
          navigator.mediaSession.setActionHandler("nexttrack", function() {
            return e.next();
          }),
          e.on("openaudio", function() {
            navigator.mediaSession.metadata = o(e.nowplay);
          }));
      }
      function o(e) {
        return new MediaMetadata({
          title: e.name,
          artist: e.artist,
          album: e.album,
          artwork: [{ src: e.poster || r }]
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(14);
      (t.cplayerMediaSessionPlugin = i), (t.mediaMetadata = o);
    },
    function(e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAiACIDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcDBAUG/8QALhAAAgEDAwIFAwMFAAAAAAAAAQIDAAQRBRIhE0EGIjFRkRQzYTI1cXOBocHR/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAiEQACAQMCBwAAAAAAAAAAAAAAAQIDETESFAQhIkFRYWL/2gAMAwEAAhEDEQA/AGBo7mOKMEBjgc4rqLaRWXG1fgUttA1qNbnpPdGV5mIRRhkiKgeTjkE5J5/1W9pniH6jVbuPdiO2gJwHG13B5wcc44+a5tPpNM4N3OwlC45RfgVlXMA2t5E/nFVZ/EEaWVlcmJmjuDHnDAdIP6MR3GSBx71Fe37LbSSKylVIyNwyM002IotGc2N7cr6+1FYTXu5iepKcnP66KzF9AoBfQ2LmzgWWJp3L72A8rNt2kY5x/wBrtfD+oSXkQ6k8iQSRuJVjwr78DcATx6YyfYehNcbsttTkayGoiGcPuh3REo2FG0bt2R6e3fvVW2vulYSSMPND9vk46jcA/Ab/ABXTlBSXsCnpvfAydb8TR3eg7bMrGrStB1c8r0wTsP4PDKe/OeRUXiPxFLBojump6fFcTtGFeCTDHaoJyMe5A70uYte+n097Z7eK6EjA4mJCptXAK7SOcE1S1a9jvbqNoYzFCkSIiFtxGBzk9znvQXD81cV1kkMSAWDQRt9bMuVB272OOPTOKKVu4+5+aKO2+gbleC5bfusf9U1ctlB1RYiAYy/Kn0P9qKKtLIkMGfeKBdkAADjgVFcffYdgcD8UUU6JPuR0UUURT//Z";
    }
  ]);
});
