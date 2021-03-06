function CheckString(a, b) { return MatchString = a.match(b), null !== MatchString && a === MatchString[0] }

function UppercaseFirst(a) { return a.substring(0, 1).toUpperCase() + a.substring(1) }

function ScrollBackTop() {
    var a = $(".cd-top");
    $(window).scroll(function() { $(this).scrollTop() > 300 ? a.addClass("cd-is-visible") : a.removeClass("cd-is-visible cd-fade-out"), $(this).scrollTop() > 300 && a.addClass("cd-fade-out") }), a.on("click", function(a) { a.preventDefault(), $("body,html").animate({ scrollTop: 0 }, 500) })
}

function Notification(a, b, c) { $.notify({ title: a, message: b }, { animate: { enter: "animated zoomInDown", exit: "animated zoomOutUp" }, timer: 1e3, delay: 1e4, type: c }) }

function CheckInput(a, b, c) { var d = b.val(); return 1 === a ? !!(d.length > 5 && d.length < 81 && !1 === /\s/.test(d) && CheckString(d, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,7}$/i)) : 2 === a ? "Repeat" === c ? $(".InputPassword").val().length > 5 && $(".InputPassword").val().length < 36 && $(".InputPassword").val() === d : d.length > 8 && d.length < 30 : 3 === a ? d.length > 2 && d.length < 30 ? (b.val(UppercaseFirst(d)), !0) : (b.val(UppercaseFirst(d)), !1) : 4 === a ? !(9 != d.length || !d.match(/^\d+$/)) : void 0 }

function SendContactMessage() {
    var a = !1;
    CheckInput(3, $(".InputName"), "") || (a = !0, $(".InputName").parent().fadeOut("fast").fadeIn("fast").fadeOut("fast").fadeIn("fast")), CheckInput(1, $(".InputMail"), "") || (a = !0, $(".InputMail").parent().fadeOut("fast").fadeIn("fast").fadeOut("fast").fadeIn("fast")), $(".InputMessage").val().length < 150 && (a = !0, $(".InputMessage").parent().fadeOut("fast").fadeIn("fast").fadeOut("fast").fadeIn("fast"), Notification("Vorsicht", "Bitte beschreiben Sie Ihr Anliegen etwas genauer: Die Mindestlänge für Kontaktanfragen beträgt 150 Zeichen.", "danger")), 0 == a && $("#CaptchaModal").modal({ backdrop: "static", keyboard: !1 })
}

function CaptchaDone() { HoldOn.open({ theme: "sk-dot" }), setTimeout(function() { $.ajax({ type: "post", url: "./Files/GetPage.php?v=2", data: { Name: $(".InputName").val(), Mail: $(".InputMail").val(), Message: $(".InputMessage").val(), Captcha: grecaptcha.getResponse() }, success: function(a) { console.log(a), "0" == a ? (HoldOn.close(), $("#CaptchaModal").modal("hide"), grecaptcha.reset(), Notification("Erfolgreich", "Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden. Eine Kopie der Nachricht wurde an Ihre E-Mail Adresse versandt.", "success"), $(".InputMail").val(""), $(".InputName").val(""), $(".InputMessage").val("")) : (HoldOn.close(), $("#CaptchaModal").modal("hide"), grecaptcha.reset(), "1" == a ? Notification("Vorsicht", "Leider ist bei Ihrer Anfrage ein Fehler aufgetreten. Bitte versuchen Sie es erneut.", "danger") : "2" == a ? Notification("Vorsicht", "Leider ist bei Ihrer Anfrage ein Fehler aufgetreten. Bitte versuchen Sie es erneut.", "danger") : "3" == a ? Notification("Vorsicht", "Leider ist bei Ihrer Anfrage ein Fehler aufgetreten. Bitte versuchen Sie es erneut.", "danger") : "5" == a ? Notification("Vorsicht", "Bitte beachten Sie, dass Sie pro Tag maximal 5 Anfragen über das Webportal senden dürfen.", "danger") : Notification("Vorsicht", "Leider ist bei Ihrer Anfrage ein Fehler aufgetreten. Bitte versuchen Sie es erneut.", "danger")) }, error: function() { setTimeout(function() { $.ajax(this) }, 1e3) } }) }, 1300) }

function PageLoaded(a) {
    void 0 === a && (a = 0), $(".opening-hours li").eq((new Date).getDay()).addClass("today"), $(".openinghours li").eq((new Date).getDay()).addClass("today"), autosize($(".textArea")),
        function() {
            var a, b, c = document,
                d = c.querySelectorAll(".js-accordionTrigger"),
                e = "ontouchstart" in window,
                f = "pointerdown" in window;
            skipClickDelay = function(a) { a.preventDefault(), a.target.click() }, setAriaAttr = function(a, b, c) { a.setAttribute(b, c) }, a = function(a, b, c) {
                switch (c) {
                    case "true":
                        setAriaAttr(a, "aria-expanded", "true"), setAriaAttr(b, "aria-hidden", "false");
                        break;
                    case "false":
                        setAriaAttr(a, "aria-expanded", "false"), setAriaAttr(b, "aria-hidden", "true")
                }
            }, b = function(b) {
                b.preventDefault();
                var c = b.target.parentNode.nextElementSibling,
                    d = b.target;
                c.classList.contains("is-collapsed") ? a(d, c, "true") : a(d, c, "false"), d.classList.toggle("is-collapsed"), d.classList.toggle("is-expanded"), c.classList.toggle("is-collapsed"), c.classList.toggle("is-expanded"), c.classList.toggle("animateIn")
            };
            for (var g = 0, h = d.length; g < h; g++) e && d[g].addEventListener("touchstart", skipClickDelay, !1), f && d[g].addEventListener("pointerdown", skipClickDelay, !1), d[g].addEventListener("click", b, !1)
        }(), $('[data-toggle="tooltip"]').tooltip({ container: "body" }), 1 == a
}

function FilterFAQ(a) {
    var b = 0;
    $(".accordionTitle").each(function() { $(this).html().toUpperCase().indexOf($(a).val().toUpperCase()) > -1 ? ($(this).parent().show(), $(this).parent().next(".accordion-content").show(), $(".accordion").css("padding", "5px"), b++) : ($(this).parent().hide(), $(this).parent().next(".accordion-content").hide(), $(".accordion").css("padding", "0")) }), "" != $(a).val() ? ($(".ClearFilter").fadeIn(), $(".AccordionInfoSeperator").hide(), 0 == b ? $(".SearchNothingFound").show() : $(".SearchNothingFound").hide()) : ($(".ClearFilter").fadeOut(), $(".AccordionInfoSeperator").fadeIn(), $(".SearchNothingFound").hide())
}
if (function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a, b) {
            b = b || ba;
            var c = b.createElement("script");
            c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
        }

        function d(a) {
            var b = !!a && "length" in a && a.length,
                c = oa.type(a);
            return "function" !== c && !oa.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }

        function e(a, b, c) { return oa.isFunction(b) ? oa.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? oa.grep(a, function(a) { return a === b !== c }) : "string" != typeof b ? oa.grep(a, function(a) { return ga.call(b, a) > -1 !== c }) : ya.test(b) ? oa.filter(b, a, c) : (b = oa.filter(b, a), oa.grep(a, function(a) { return ga.call(b, a) > -1 !== c && 1 === a.nodeType })) }

        function f(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function g(a) { var b = {}; return oa.each(a.match(Da) || [], function(a, c) { b[c] = !0 }), b }

        function h(a) { return a }

        function i(a) { throw a }

        function j(a, b, c) { var d; try { a && oa.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && oa.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a) } catch (a) { c.call(void 0, a) } }

        function k() { ba.removeEventListener("DOMContentLoaded", k), a.removeEventListener("load", k), oa.ready() }

        function l() { this.expando = oa.expando + l.uid++ }

        function m(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Ka.test(a) ? JSON.parse(a) : a) }

        function n(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(La, "-$&").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
                    try { c = m(c) } catch (a) {}
                    Ja.set(a, b, c)
                } else c = void 0;
            return c
        }

        function o(a, b, c, d) {
            var e, f = 1,
                g = 20,
                h = d ? function() { return d.cur() } : function() { return oa.css(a, b, "") },
                i = h(),
                j = c && c[3] || (oa.cssNumber[b] ? "" : "px"),
                k = (oa.cssNumber[b] || "px" !== j && +i) && Na.exec(oa.css(a, b));
            if (k && k[3] !== j) {
                j = j || k[3], c = c || [], k = +i || 1;
                do { f = f || ".5", k /= f, oa.style(a, b, k + j) } while (f !== (f = h() / i) && 1 !== f && --g)
            }
            return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
        }

        function p(a) {
            var b, c = a.ownerDocument,
                d = a.nodeName,
                e = Ra[d];
            return e || (b = c.body.appendChild(c.createElement(d)), e = oa.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Ra[d] = e, e)
        }

        function q(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Ia.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Pa(d) && (e[f] = p(d))) : "none" !== c && (e[f] = "none", Ia.set(d, "display", c))); for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]); return a }

        function r(a, b) { var c; return c = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && oa.nodeName(a, b) ? oa.merge([a], c) : c }

        function s(a, b) { for (var c = 0, d = a.length; c < d; c++) Ia.set(a[c], "globalEval", !b || Ia.get(b[c], "globalEval")) }

        function t(a, b, c, d, e) {
            for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
                if ((f = a[n]) || 0 === f)
                    if ("object" === oa.type(f)) oa.merge(m, f.nodeType ? [f] : f);
                    else if (Wa.test(f)) {
                for (g = g || l.appendChild(b.createElement("div")), h = (Ta.exec(f) || ["", ""])[1].toLowerCase(), i = Va[h] || Va._default, g.innerHTML = i[1] + oa.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
                oa.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
            } else m.push(b.createTextNode(f));
            for (l.textContent = "", n = 0; f = m[n++];)
                if (d && oa.inArray(f, d) > -1) e && e.push(f);
                else if (j = oa.contains(f.ownerDocument, f), g = r(l.appendChild(f), "script"), j && s(g), c)
                for (k = 0; f = g[k++];) Ua.test(f.type || "") && c.push(f);
            return l
        }

        function u() { return !0 }

        function v() { return !1 }

        function w() { try { return ba.activeElement } catch (a) {} }

        function x(a, b, c, d, e, f) {
            var g, h;
            if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) x(a, h, c, d, b[h], f); return a }
            if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = v;
            else if (!e) return a;
            return 1 === f && (g = e, e = function(a) { return oa().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = oa.guid++)), a.each(function() { oa.event.add(this, b, e, d, c) })
        }

        function y(a, b) { return oa.nodeName(a, "table") && oa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a }

        function z(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

        function A(a) { var b = cb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

        function B(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (Ia.hasData(a) && (f = Ia.access(a), g = Ia.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; c < d; c++) oa.event.add(b, e, j[e][c])
                }
                Ja.hasData(a) && (h = Ja.access(a), i = oa.extend({}, h), Ja.set(b, i))
            }
        }

        function C(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && Sa.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

        function D(a, b, d, e) {
            b = ea.apply([], b);
            var f, g, h, i, j, k, l = 0,
                m = a.length,
                n = m - 1,
                o = b[0],
                p = oa.isFunction(o);
            if (p || m > 1 && "string" == typeof o && !ma.checkClone && bb.test(o)) return a.each(function(c) {
                var f = a.eq(c);
                p && (b[0] = o.call(this, c, f.html())), D(f, b, d, e)
            });
            if (m && (f = t(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
                for (h = oa.map(r(f, "script"), z), i = h.length; l < m; l++) j = f, l !== n && (j = oa.clone(j, !0, !0), i && oa.merge(h, r(j, "script"))), d.call(a[l], j, l);
                if (i)
                    for (k = h[h.length - 1].ownerDocument, oa.map(h, A), l = 0; l < i; l++) j = h[l], Ua.test(j.type || "") && !Ia.access(j, "globalEval") && oa.contains(k, j) && (j.src ? oa._evalUrl && oa._evalUrl(j.src) : c(j.textContent.replace(db, ""), k))
            }
            return a
        }

        function E(a, b, c) { for (var d, e = b ? oa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || oa.cleanData(r(d)), d.parentNode && (c && oa.contains(d.ownerDocument, d) && s(r(d, "script")), d.parentNode.removeChild(d)); return a }

        function F(a, b, c) { var d, e, f, g, h = a.style; return c = c || gb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || oa.contains(a.ownerDocument, a) || (g = oa.style(a, b)), !ma.pixelMarginRight() && fb.test(g) && eb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

        function G(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }

        function H(a) {
            if (a in lb) return a;
            for (var b = a[0].toUpperCase() + a.slice(1), c = kb.length; c--;)
                if ((a = kb[c] + b) in lb) return a
        }

        function I(a, b, c) { var d = Na.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

        function J(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += oa.css(a, c + Oa[f], !0, e)), d ? ("content" === c && (g -= oa.css(a, "padding" + Oa[f], !0, e)), "margin" !== c && (g -= oa.css(a, "border" + Oa[f] + "Width", !0, e))) : (g += oa.css(a, "padding" + Oa[f], !0, e), "padding" !== c && (g += oa.css(a, "border" + Oa[f] + "Width", !0, e))); return g }

        function K(a, b, c) {
            var d, e = !0,
                f = gb(a),
                g = "border-box" === oa.css(a, "boxSizing", !1, f);
            if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
                if (d = F(a, b, f), (d < 0 || null == d) && (d = a.style[b]), fb.test(d)) return d;
                e = g && (ma.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
            }
            return d + J(a, b, c || (g ? "border" : "content"), e, f) + "px"
        }

        function L(a, b, c, d, e) { return new L.prototype.init(a, b, c, d, e) }

        function M() { nb && (a.requestAnimationFrame(M), oa.fx.tick()) }

        function N() { return a.setTimeout(function() { mb = void 0 }), mb = oa.now() }

        function O(a, b) {
            var c, d = 0,
                e = { height: a };
            for (b = b ? 1 : 0; d < 4; d += 2 - b) c = Oa[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function P(a, b, c) {
            for (var d, e = (S.tweeners[b] || []).concat(S.tweeners["*"]), f = 0, g = e.length; f < g; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function Q(a, b, c) {
            var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
                m = this,
                n = {},
                o = a.style,
                p = a.nodeType && Pa(a),
                r = Ia.get(a, "fxshow");
            c.queue || (g = oa._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() { g.unqueued || h() }), g.unqueued++, m.always(function() { m.always(function() { g.unqueued--, oa.queue(a, "fx").length || g.empty.fire() }) }));
            for (d in b)
                if (e = b[d], ob.test(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                        if ("show" !== e || !r || void 0 === r[d]) continue;
                        p = !0
                    }
                    n[d] = r && r[d] || oa.style(a, d)
                }
            if ((i = !oa.isEmptyObject(b)) || !oa.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = r && r.display, null == j && (j = Ia.get(a, "display")), k = oa.css(a, "display"), "none" === k && (j ? k = j : (q([a], !0), j = a.style.display || j, k = oa.css(a, "display"), q([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === oa.css(a, "float") && (i || (m.done(function() { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (r ? "hidden" in r && (p = r.hidden) : r = Ia.access(a, "fxshow", { display: j }), f && (r.hidden = !p), p && q([a], !0), m.done(function() { p || q([a]), Ia.remove(a, "fxshow"); for (d in n) oa.style(a, d, n[d]) })), i = P(p ? r[d] : 0, d, m), d in r || (r[d] = i.start, p && (i.end = i.start, i.start = 0)) }
        }

        function R(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = oa.camelCase(c), e = b[d], f = a[c], oa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = oa.cssHooks[d]) && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
        }

        function S(a, b, c) {
            var d, e, f = 0,
                g = S.prefilters.length,
                h = oa.Deferred().always(function() { delete i.elem }),
                i = function() { if (e) return !1; for (var b = mb || N(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1) },
                j = h.promise({
                    elem: a,
                    props: oa.extend({}, b),
                    opts: oa.extend(!0, { specialEasing: {}, easing: oa.easing._default }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: mb || N(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) { var d = oa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; c < d; c++) j.tweens[c].run(1);
                        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (R(k, j.opts.specialEasing); f < g; f++)
                if (d = S.prefilters[f].call(j, a, k, j.opts)) return oa.isFunction(d.stop) && (oa._queueHooks(j.elem, j.opts.queue).stop = oa.proxy(d.stop, d)), d;
            return oa.map(k, P, j), oa.isFunction(j.opts.start) && j.opts.start.call(a, j), oa.fx.timer(oa.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function T(a) { return (a.match(Da) || []).join(" ") }

        function U(a) { return a.getAttribute && a.getAttribute("class") || "" }

        function V(a, b, c, d) {
            var e;
            if (oa.isArray(b)) oa.each(b, function(b, e) { c || zb.test(a) ? d(a, e) : V(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
            else if (c || "object" !== oa.type(b)) d(a, b);
            else
                for (e in b) V(a + "[" + e + "]", b[e], c, d)
        }

        function W(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(Da) || [];
                if (oa.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function X(a, b, c, d) {
            function e(h) { var i; return f[h] = !0, oa.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1) }), i }
            var f = {},
                g = a === Lb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function Y(a, b) { var c, d, e = oa.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && oa.extend(!0, a, d), a }

        function Z(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) { i.unshift(e); break }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                    g || (g = e)
                }
                f = f || g
            }
            if (f) return f !== i[0] && i.unshift(f), c[f]
        }

        function $(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (!(g = j[i + " " + f] || j["* " + f]))
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {!0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1])); break }
                if (!0 !== g)
                    if (g && a.throws) b = g(b);
                    else try { b = g(b) } catch (a) { return { state: "parsererror", error: g ? a : "No conversion from " + i + " to " + f } }
            }
            return { state: "success", data: b }
        }

        function _(a) { return oa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
        var aa = [],
            ba = a.document,
            ca = Object.getPrototypeOf,
            da = aa.slice,
            ea = aa.concat,
            fa = aa.push,
            ga = aa.indexOf,
            ha = {},
            ia = ha.toString,
            ja = ha.hasOwnProperty,
            ka = ja.toString,
            la = ka.call(Object),
            ma = {},
            na = "3.1.1",
            oa = function(a, b) { return new oa.fn.init(a, b) },
            pa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            qa = /^-ms-/,
            ra = /-([a-z])/g,
            sa = function(a, b) { return b.toUpperCase() };
        oa.fn = oa.prototype = {
            jquery: na,
            constructor: oa,
            length: 0,
            toArray: function() { return da.call(this) },
            get: function(a) { return null == a ? da.call(this) : a < 0 ? this[a + this.length] : this[a] },
            pushStack: function(a) { var b = oa.merge(this.constructor(), a); return b.prevObject = this, b },
            each: function(a) { return oa.each(this, a) },
            map: function(a) { return this.pushStack(oa.map(this, function(b, c) { return a.call(b, c, b) })) },
            slice: function() { return this.pushStack(da.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(a) {
                var b = this.length,
                    c = +a + (a < 0 ? b : 0);
                return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
            },
            end: function() { return this.prevObject || this.constructor() },
            push: fa,
            sort: aa.sort,
            splice: aa.splice
        }, oa.extend = oa.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || oa.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (oa.isPlainObject(d) || (e = oa.isArray(d))) ? (e ? (e = !1, f = c && oa.isArray(c) ? c : []) : f = c && oa.isPlainObject(c) ? c : {}, g[b] = oa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, oa.extend({
            expando: "jQuery" + (na + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) { throw new Error(a) },
            noop: function() {},
            isFunction: function(a) { return "function" === oa.type(a) },
            isArray: Array.isArray,
            isWindow: function(a) { return null != a && a === a.window },
            isNumeric: function(a) { var b = oa.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) },
            isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== ia.call(a) || (b = ca(a)) && ("function" != typeof(c = ja.call(b, "constructor") && b.constructor) || ka.call(c) !== la)) },
            isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
            type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ha[ia.call(a)] || "object" : typeof a },
            globalEval: function(a) { c(a) },
            camelCase: function(a) { return a.replace(qa, "ms-").replace(ra, sa) },
            nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
            each: function(a, b) {
                var c, e = 0;
                if (d(a))
                    for (c = a.length; e < c && !1 !== b.call(a[e], e, a[e]); e++);
                else
                    for (e in a)
                        if (!1 === b.call(a[e], e, a[e])) break; return a
            },
            trim: function(a) { return null == a ? "" : (a + "").replace(pa, "") },
            makeArray: function(a, b) { var c = b || []; return null != a && (d(Object(a)) ? oa.merge(c, "string" == typeof a ? [a] : a) : fa.call(c, a)), c },
            inArray: function(a, b, c) { return null == b ? -1 : ga.call(b, a, c) },
            merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]; return a.length = e, a },
            grep: function(a, b, c) { for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) !b(a[e], e) !== g && d.push(a[e]); return d },
            map: function(a, b, c) {
                var e, f, g = 0,
                    h = [];
                if (d(a))
                    for (e = a.length; g < e; g++) null != (f = b(a[g], g, c)) && h.push(f);
                else
                    for (g in a) null != (f = b(a[g], g, c)) && h.push(f);
                return ea.apply([], h)
            },
            guid: 1,
            proxy: function(a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), oa.isFunction(a)) return d = da.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(da.call(arguments))) }, e.guid = a.guid = a.guid || oa.guid++, e },
            now: Date.now,
            support: ma
        }), "function" == typeof Symbol && (oa.fn[Symbol.iterator] = aa[Symbol.iterator]), oa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { ha["[object " + b + "]"] = b.toLowerCase() });
        var ta = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, k, m = b && b.ownerDocument,
                    o = b ? b.nodeType : 9;
                if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
                if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                    if (11 !== o && (i = ra.exec(a)))
                        if (e = i[1]) { if (9 === o) { if (!(g = b.getElementById(e))) return c; if (g.id === e) return c.push(g), c } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c } else { if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c; if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c }
                    if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                        if (1 !== o) m = b, k = a;
                        else if ("object" !== b.nodeName.toLowerCase()) {
                            for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
                            k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
                        }
                        if (k) try { return $.apply(c, m.querySelectorAll(k)), c } catch (a) {} finally { h === O && b.removeAttribute("id") }
                    }
                }
                return C(a.replace(ha, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) { return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d }
                var b = [];
                return a
            }

            function d(a) { return a[O] = !0, a }

            function e(a) { var b = H.createElement("fieldset"); try { return !!a(b) } catch (a) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

            function f(a, b) { for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) { return function(b) { return "input" === b.nodeName.toLowerCase() && b.type === a } }

            function i(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

            function j(a) { return function(b) { return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b && b.disabled === a } }

            function k(a) { return d(function(b) { return b = +b, d(function(c, d) { for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

            function l(a) { return a && void 0 !== a.getElementsByTagName && a }

            function m() {}

            function n(a) { for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value; return d }

            function o(a, b, c) {
                var d = b.dir,
                    e = b.next,
                    f = e || d,
                    g = c && "parentNode" === f,
                    h = R++;
                return b.first ? function(b, c, e) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || g) return a(b, c, e);
                    return !1
                } : function(b, c, i) {
                    var j, k, l, m = [Q, h];
                    if (i) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || g)
                                if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                                else { if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1
                }
            }

            function p(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function q(a, c, d) { for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d); return d }

            function r(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

            function s(a, b, c, e, f, g) {
                return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = d || q(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? p : r(p, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function t(a) {
                for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) { return a === b }, g, !0), j = o(function(a) { return aa(b, a) > -1 }, g, !0), k = [function(a, c, d) { var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d)); return b = null, e }]; h < e; h++)
                    if (c = x.relative[a[h].type]) k = [o(p(k), c)];
                    else {
                        if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) { for (d = ++h; d < e && !x.relative[a[d].type]; d++); return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ha, "$1"), c, h < d && t(a.slice(h, d)), d < e && t(a = a.slice(d)), d < e && n(a)) }
                        k.push(c)
                    }
                return p(k)
            }

            function u(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            q = [],
                            s = D,
                            t = d || f && x.find.TAG("*", j),
                            u = Q += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)
                                    if (m(k, g || H, h)) { i.push(k); break }
                                j && (Q = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, q, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                                q = r(q)
                            }
                            $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (Q = u, D = s), p
                    };
                return e ? d(g) : g
            }
            var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
                P = a.document,
                Q = 0,
                R = 0,
                S = c(),
                T = c(),
                U = c(),
                V = function(a, b) { return a === b && (F = !0), 0 },
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; c < d; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
                fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
                ga = new RegExp(ca + "+", "g"),
                ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ia = new RegExp("^" + ca + "*," + ca + "*"),
                ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                la = new RegExp(fa),
                ma = new RegExp("^" + da + "$"),
                na = { ID: new RegExp("^#(" + da + ")"), CLASS: new RegExp("^\\.(" + da + ")"), TAG: new RegExp("^(" + da + "|[*])"), ATTR: new RegExp("^" + ea), PSEUDO: new RegExp("^" + fa), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"), bool: new RegExp("^(?:" + ba + ")$", "i"), needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i") },
                oa = /^(?:input|select|textarea|button)$/i,
                pa = /^h\d$/i,
                qa = /^[^{]+\{\s*\[native \w/,
                ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                sa = /[+~]/,
                ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                ua = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
                va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                wa = function(a, b) { return b ? "\0" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a },
                xa = function() { G() },
                ya = o(function(a) { return !0 === a.disabled && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" });
            try { $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType } catch (a) {
                $ = {
                    apply: X.length ? function(a, b) { Z.apply(a, _.call(b)) } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            w = b.support = {}, z = b.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, G = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : P;
                return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function(a) { return a.className = "i", !a.getAttribute("className") }), w.getElementsByTagName = e(function(a) { return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function(a) { return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length }), w.getById ? (x.filter.ID = function(a) { var b = a.replace(ta, ua); return function(a) { return a.getAttribute("id") === b } }, x.find.ID = function(a, b) { if (void 0 !== b.getElementById && J) { var c = b.getElementById(a); return c ? [c] : [] } }) : (x.filter.ID = function(a) { var b = a.replace(ta, ua); return function(a) { var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, x.find.ID = function(a, b) {
                    if (void 0 !== b.getElementById && J) {
                        var c, d, e, f = b.getElementById(a);
                        if (f) {
                            if ((c = f.getAttributeNode("id")) && c.value === a) return [f];
                            for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                                if ((c = f.getAttributeNode("id")) && c.value === a) return [f]
                        }
                        return []
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(a, b) { return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) { for (; c = f[e++];) 1 === c.nodeType && d.push(c); return d }
                    return f
                }, x.find.CLASS = w.getElementsByClassName && function(a, b) { if (void 0 !== b.getElementsByClassName && J) return b.getElementsByClassName(a) }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) { I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]") }), e(function(a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = H.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
                })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) { w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa) }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, V = b ? function(a, b) { if (a === b) return F = !0, 0; var c = !a.compareDocumentPosition - !b.compareDocumentPosition; return c || (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1) } : function(a, b) {
                    if (a === b) return F = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        h = [a],
                        i = [b];
                    if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                    if (e === f) return g(a, b);
                    for (c = a; c = c.parentNode;) h.unshift(c);
                    for (c = b; c = c.parentNode;) i.unshift(c);
                    for (; h[d] === i[d];) d++;
                    return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
                }, H) : H
            }, b.matches = function(a, c) { return b(a, null, null, c) }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try { var d = M.call(a, c); if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (a) {}
                return b(c, H, null, [a]).length > 0
            }, b.contains = function(a, b) { return (a.ownerDocument || a) !== H && G(a), N(a, b) }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== H && G(a);
                var c = x.attrHandle[b.toLowerCase()],
                    d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
                return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.escape = function(a) { return (a + "").replace(va, wa) }, b.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) { for (; b = a[e++];) b === a[e] && (d = c.push(e)); for (; d--;) a.splice(c[d], 1) }
                return E = null, a
            }, y = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) { if (1 === e || 9 === e || 11 === e) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += y(a) } else if (3 === e || 4 === e) return a.nodeValue } else
                    for (; b = a[d++];) c += y(b);
                return c
            }, x = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: na,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
                filter: {
                    TAG: function(a) { var b = a.replace(ta, ua).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                    CLASS: function(a) { var b = S[a + " "]; return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) { return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "") }) },
                    ATTR: function(a, c, d) { return function(e) { var f = b.attr(e, a); return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-")) } },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (m = b; m = m[p];)
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                        if (1 === m.nodeType && ++t && m === b) { k[a] = [Q, n, t]; break }
                                } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), !1 === t)
                                    for (;
                                        (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b)););
                                return (t -= e) === d || t % d == 0 && t / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) { var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) { for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g]) }) : function(a) { return f(a, 0, e) }) : f }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = B(a.replace(ha, "$1"));
                        return e[O] ? d(function(a, b, c, d) { for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, d, f) { return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop() }
                    }),
                    has: d(function(a) { return function(c) { return b(a, c).length > 0 } }),
                    contains: d(function(a) {
                        return a = a.replace(ta, ua),
                            function(b) { return (b.textContent || b.innerText || y(b)).indexOf(a) > -1 }
                    }),
                    lang: d(function(a) {
                        return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                            function(b) {
                                var c;
                                do { if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-") } while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                    root: function(a) { return a === I },
                    focus: function(a) { return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                    enabled: j(!1),
                    disabled: j(!0),
                    checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                    selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) { return !x.pseudos.empty(a) },
                    header: function(a) { return pa.test(a.nodeName) },
                    input: function(a) { return oa.test(a.nodeName) },
                    button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                    text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                    first: k(function() { return [0] }),
                    last: k(function(a, b) { return [b - 1] }),
                    eq: k(function(a, b, c) { return [c < 0 ? c + b : c] }),
                    even: k(function(a, b) { for (var c = 0; c < b; c += 2) a.push(c); return a }),
                    odd: k(function(a, b) { for (var c = 1; c < b; c += 2) a.push(c); return a }),
                    lt: k(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d); return a }),
                    gt: k(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d); return a })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (v in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[v] = h(v);
            for (v in { submit: !0, reset: !0 }) x.pseudos[v] = i(v);
            return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function(a, c) { var d, e, f, g, h, i, j, k = T[a + " "]; if (k) return c ? 0 : k.slice(0); for (h = a, i = [], j = x.preFilter; h;) { d && !(e = ia.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({ value: d, type: e[0].replace(ha, " ") }), h = h.slice(d.length)); for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({ value: d, type: g, matches: e }), h = h.slice(d.length)); if (!d) break } return c ? h.length : h ? b.error(a) : T(a, i).slice(0) }, B = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = U[a + " "];
                if (!f) {
                    for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
                    f = U(a, u(e, d)), f.selector = a
                }
                return f
            }, C = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    k = !d && A(a = j.selector || a);
                if (c = c || [], 1 === k.length) {
                    if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
                        if (!(b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0])) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)
                        if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) { if (f.splice(e, 1), !(a = d.length && n(f))) return $.apply(c, d), c; break }
                }
                return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
            }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function(a) { return 1 & a.compareDocumentPosition(H.createElement("fieldset")) }), e(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || f("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), w.attributes && e(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || f("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), e(function(a) { return null == a.getAttribute("disabled") }) || f(ba, function(a, b, c) { var d; if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), b
        }(a);
        oa.find = ta, oa.expr = ta.selectors, oa.expr[":"] = oa.expr.pseudos, oa.uniqueSort = oa.unique = ta.uniqueSort, oa.text = ta.getText, oa.isXMLDoc = ta.isXML, oa.contains = ta.contains, oa.escapeSelector = ta.escape;
        var ua = function(a, b, c) {
                for (var d = [], e = void 0 !== c;
                    (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && oa(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            va = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
            wa = oa.expr.match.needsContext,
            xa = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            ya = /^.[^:#\[\.,]*$/;
        oa.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? oa.find.matchesSelector(d, a) ? [d] : [] : oa.find.matches(a, oa.grep(b, function(a) { return 1 === a.nodeType })) }, oa.fn.extend({
            find: function(a) {
                var b, c, d = this.length,
                    e = this;
                if ("string" != typeof a) return this.pushStack(oa(a).filter(function() {
                    for (b = 0; b < d; b++)
                        if (oa.contains(e[b], this)) return !0
                }));
                for (c = this.pushStack([]), b = 0; b < d; b++) oa.find(a, e[b], c);
                return d > 1 ? oa.uniqueSort(c) : c
            },
            filter: function(a) { return this.pushStack(e(this, a || [], !1)) },
            not: function(a) { return this.pushStack(e(this, a || [], !0)) },
            is: function(a) { return !!e(this, "string" == typeof a && wa.test(a) ? oa(a) : a || [], !1).length }
        });
        var za, Aa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (oa.fn.init = function(a, b, c) {
            var d, e;
            if (!a) return this;
            if (c = c || za, "string" == typeof a) {
                if (!(d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Aa.exec(a)) || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (b = b instanceof oa ? b[0] : b, oa.merge(this, oa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ba, !0)), xa.test(d[1]) && oa.isPlainObject(b))
                        for (d in b) oa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this
                }
                return e = ba.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : oa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(oa) : oa.makeArray(a, this)
        }).prototype = oa.fn, za = oa(ba);
        var Ba = /^(?:parents|prev(?:Until|All))/,
            Ca = { children: !0, contents: !0, next: !0, prev: !0 };
        oa.fn.extend({
            has: function(a) {
                var b = oa(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; a < c; a++)
                        if (oa.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                var c, d = 0,
                    e = this.length,
                    f = [],
                    g = "string" != typeof a && oa(a);
                if (!wa.test(a))
                    for (; d < e; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && oa.find.matchesSelector(c, a))) { f.push(c); break }
                return this.pushStack(f.length > 1 ? oa.uniqueSort(f) : f)
            },
            index: function(a) { return a ? "string" == typeof a ? ga.call(oa(a), this[0]) : ga.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(a, b) { return this.pushStack(oa.uniqueSort(oa.merge(this.get(), oa(a, b)))) },
            addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
        }), oa.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return ua(a, "parentNode") }, parentsUntil: function(a, b, c) { return ua(a, "parentNode", c) }, next: function(a) { return f(a, "nextSibling") }, prev: function(a) { return f(a, "previousSibling") }, nextAll: function(a) { return ua(a, "nextSibling") }, prevAll: function(a) { return ua(a, "previousSibling") }, nextUntil: function(a, b, c) { return ua(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return ua(a, "previousSibling", c) }, siblings: function(a) { return va((a.parentNode || {}).firstChild, a) }, children: function(a) { return va(a.firstChild) }, contents: function(a) { return a.contentDocument || oa.merge([], a.childNodes) } }, function(a, b) { oa.fn[a] = function(c, d) { var e = oa.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = oa.filter(d, e)), this.length > 1 && (Ca[a] || oa.uniqueSort(e), Ba.test(a) && e.reverse()), this.pushStack(e) } });
        var Da = /[^\x20\t\r\n\f]+/g;
        oa.Callbacks = function(a) {
            a = "string" == typeof a ? g(a) : oa.extend({}, a);
            var b, c, d, e, f = [],
                h = [],
                i = -1,
                j = function() {
                    for (e = a.once, d = b = !0; h.length; i = -1)
                        for (c = h.shift(); ++i < f.length;) !1 === f[i].apply(c[0], c[1]) && a.stopOnFalse && (i = f.length, c = !1);
                    a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
                },
                k = {
                    add: function() { return f && (c && !b && (i = f.length - 1, h.push(c)), function b(c) { oa.each(c, function(c, d) { oa.isFunction(d) ? a.unique && k.has(d) || f.push(d) : d && d.length && "string" !== oa.type(d) && b(d) }) }(arguments), c && !b && j()), this },
                    remove: function() {
                        return oa.each(arguments, function(a, b) {
                            for (var c;
                                (c = oa.inArray(b, f, c)) > -1;) f.splice(c, 1), c <= i && i--
                        }), this
                    },
                    has: function(a) { return a ? oa.inArray(a, f) > -1 : f.length > 0 },
                    empty: function() { return f && (f = []), this },
                    disable: function() { return e = h = [], f = c = "", this },
                    disabled: function() { return !f },
                    lock: function() { return e = h = [], c || b || (f = c = ""), this },
                    locked: function() { return !!e },
                    fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this },
                    fire: function() { return k.fireWith(this, arguments), this },
                    fired: function() { return !!d }
                };
            return k
        }, oa.extend({
            Deferred: function(b) {
                var c = [
                        ["notify", "progress", oa.Callbacks("memory"), oa.Callbacks("memory"), 2],
                        ["resolve", "done", oa.Callbacks("once memory"), oa.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", oa.Callbacks("once memory"), oa.Callbacks("once memory"), 1, "rejected"]
                    ],
                    d = "pending",
                    e = {
                        state: function() { return d },
                        always: function() { return f.done(arguments).fail(arguments), this },
                        catch: function(a) { return e.then(null, a) },
                        pipe: function() {
                            var a = arguments;
                            return oa.Deferred(function(b) {
                                oa.each(c, function(c, d) {
                                    var e = oa.isFunction(a[d[4]]) && a[d[4]];
                                    f[d[1]](function() {
                                        var a = e && e.apply(this, arguments);
                                        a && oa.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        then: function(b, d, e) {
                            function f(b, c, d, e) {
                                return function() {
                                    var j = this,
                                        k = arguments,
                                        l = function() {
                                            var a, l;
                                            if (!(b < g)) {
                                                if ((a = d.apply(j, k)) === c.promise()) throw new TypeError("Thenable self-resolution");
                                                l = a && ("object" == typeof a || "function" == typeof a) && a.then, oa.isFunction(l) ? e ? l.call(a, f(g, c, h, e), f(g, c, i, e)) : (g++, l.call(a, f(g, c, h, e), f(g, c, i, e), f(g, c, h, c.notifyWith))) : (d !== h && (j = void 0, k = [a]), (e || c.resolveWith)(j, k))
                                            }
                                        },
                                        m = e ? l : function() { try { l() } catch (a) { oa.Deferred.exceptionHook && oa.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== i && (j = void 0, k = [a]), c.rejectWith(j, k)) } };
                                    b ? m() : (oa.Deferred.getStackHook && (m.stackTrace = oa.Deferred.getStackHook()), a.setTimeout(m))
                                }
                            }
                            var g = 0;
                            return oa.Deferred(function(a) { c[0][3].add(f(0, a, oa.isFunction(e) ? e : h, a.notifyWith)), c[1][3].add(f(0, a, oa.isFunction(b) ? b : h)), c[2][3].add(f(0, a, oa.isFunction(d) ? d : i)) }).promise()
                        },
                        promise: function(a) { return null != a ? oa.extend(a, e) : e }
                    },
                    f = {};
                return oa.each(c, function(a, b) {
                    var g = b[2],
                        h = b[5];
                    e[b[1]] = g.add, h && g.add(function() { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith
                }), e.promise(f), b && b.call(f, f), f
            },
            when: function(a) {
                var b = arguments.length,
                    c = b,
                    d = Array(c),
                    e = da.call(arguments),
                    f = oa.Deferred(),
                    g = function(a) { return function(c) { d[a] = this, e[a] = arguments.length > 1 ? da.call(arguments) : c, --b || f.resolveWith(d, e) } };
                if (b <= 1 && (j(a, f.done(g(c)).resolve, f.reject), "pending" === f.state() || oa.isFunction(e[c] && e[c].then))) return f.then();
                for (; c--;) j(e[c], g(c), f.reject);
                return f.promise()
            }
        });
        var Ea = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        oa.Deferred.exceptionHook = function(b, c) { a.console && a.console.warn && b && Ea.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, oa.readyException = function(b) { a.setTimeout(function() { throw b }) };
        var Fa = oa.Deferred();
        oa.fn.ready = function(a) { return Fa.then(a).catch(function(a) { oa.readyException(a) }), this }, oa.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) { a ? oa.readyWait++ : oa.ready(!0) },
            ready: function(a) {
                (!0 === a ? --oa.readyWait : oa.isReady) || (oa.isReady = !0, !0 !== a && --oa.readyWait > 0 || Fa.resolveWith(ba, [oa]))
            }
        }), oa.ready.then = Fa.then, "complete" === ba.readyState || "loading" !== ba.readyState && !ba.documentElement.doScroll ? a.setTimeout(oa.ready) : (ba.addEventListener("DOMContentLoaded", k), a.addEventListener("load", k));
        var Ga = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === oa.type(c)) { e = !0; for (h in c) Ga(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, oa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(oa(a), c) })), b))
                    for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Ha = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };
        l.uid = 1, l.prototype = {
            cache: function(a) { var b = a[this.expando]; return b || (b = {}, Ha(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b },
            set: function(a, b, c) {
                var d, e = this.cache(a);
                if ("string" == typeof b) e[oa.camelCase(b)] = c;
                else
                    for (d in b) e[oa.camelCase(d)] = b[d];
                return e
            },
            get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][oa.camelCase(b)] },
            access: function(a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) },
            remove: function(a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { oa.isArray(b) ? b = b.map(oa.camelCase) : (b = oa.camelCase(b), b = b in d ? [b] : b.match(Da) || []), c = b.length; for (; c--;) delete d[b[c]] }(void 0 === b || oa.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } },
            hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !oa.isEmptyObject(b) }
        };
        var Ia = new l,
            Ja = new l,
            Ka = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            La = /[A-Z]/g;
        oa.extend({ hasData: function(a) { return Ja.hasData(a) || Ia.hasData(a) }, data: function(a, b, c) { return Ja.access(a, b, c) }, removeData: function(a, b) { Ja.remove(a, b) }, _data: function(a, b, c) { return Ia.access(a, b, c) }, _removeData: function(a, b) { Ia.remove(a, b) } }), oa.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = Ja.get(f), 1 === f.nodeType && !Ia.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = oa.camelCase(d.slice(5)), n(f, d, e[d])));
                        Ia.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() { Ja.set(this, a) }) : Ga(this, function(b) { var c; if (f && void 0 === b) { if (void 0 !== (c = Ja.get(f, a))) return c; if (void 0 !== (c = n(f, a))) return c } else this.each(function() { Ja.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) { return this.each(function() { Ja.remove(this, a) }) }
        }), oa.extend({
            queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = Ia.get(a, b), c && (!d || oa.isArray(c) ? d = Ia.access(a, b, oa.makeArray(c)) : d.push(c)), d || [] },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = oa.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = oa._queueHooks(a, b),
                    g = function() { oa.dequeue(a, b) };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) { var c = b + "queueHooks"; return Ia.get(a, c) || Ia.access(a, c, { empty: oa.Callbacks("once memory").add(function() { Ia.remove(a, [b + "queue", c]) }) }) }
        }), oa.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? oa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = oa.queue(this, a, b);
                    oa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && oa.dequeue(this, a)
                })
            },
            dequeue: function(a) { return this.each(function() { oa.dequeue(this, a) }) },
            clearQueue: function(a) { return this.queue(a || "fx", []) },
            promise: function(a, b) {
                var c, d = 1,
                    e = oa.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {--d || e.resolveWith(f, [f]) };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = Ia.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Ma = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Na = new RegExp("^(?:([+-])=|)(" + Ma + ")([a-z%]*)$", "i"),
            Oa = ["Top", "Right", "Bottom", "Left"],
            Pa = function(a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && oa.contains(a.ownerDocument, a) && "none" === oa.css(a, "display") },
            Qa = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            },
            Ra = {};
        oa.fn.extend({ show: function() { return q(this, !0) }, hide: function() { return q(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { Pa(this) ? oa(this).show() : oa(this).hide() }) } });
        var Sa = /^(?:checkbox|radio)$/i,
            Ta = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ua = /^$|\/(?:java|ecma)script/i,
            Va = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Va.optgroup = Va.option, Va.tbody = Va.tfoot = Va.colgroup = Va.caption = Va.thead, Va.th = Va.td;
        var Wa = /<|&#?\w+;/;
        ! function() {
            var a = ba.createDocumentFragment(),
                b = a.appendChild(ba.createElement("div")),
                c = ba.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ma.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ma.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var Xa = ba.documentElement,
            Ya = /^key/,
            Za = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            $a = /^([^.]*)(?:\.(.+)|)/;
        oa.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Ia.get(a);
                if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), e && oa.find.matchesSelector(Xa, e), c.guid || (c.guid = oa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return void 0 !== oa && oa.event.triggered !== b.type ? oa.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(Da) || [""], j = b.length; j--;) h = $a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = oa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = oa.event.special[n] || {}, k = oa.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && oa.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), oa.event.global[n] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = Ia.hasData(a) && Ia.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(Da) || [""], j = b.length; j--;)
                        if (h = $a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = oa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || oa.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) oa.event.remove(a, n + b[j], c, d, !0);
                    oa.isEmptyObject(i) && Ia.remove(a, "handle events")
                }
            },
            dispatch: function(a) {
                var b, c, d, e, f, g, h = oa.event.fix(a),
                    i = new Array(arguments.length),
                    j = (Ia.get(this, "events") || {})[h.type] || [],
                    k = oa.event.special[h.type] || {};
                for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
                if (h.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, h)) {
                    for (g = oa.event.handlers.call(this, h, j), b = 0;
                        (e = g[b++]) && !h.isPropagationStopped();)
                        for (h.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();) h.rnamespace && !h.rnamespace.test(f.namespace) || (h.handleObj = f, h.data = f.data, void 0 !== (d = ((oa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i)) && !1 === (h.result = d) && (h.preventDefault(), h.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, h), h.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g, h = [],
                    i = b.delegateCount,
                    j = a.target;
                if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                    for (; j !== this; j = j.parentNode || this)
                        if (1 === j.nodeType && ("click" !== a.type || !0 !== j.disabled)) {
                            for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? oa(e, this).index(j) > -1 : oa.find(e, this, null, [j]).length), g[e] && f.push(d);
                            f.length && h.push({ elem: j, handlers: f })
                        }
                return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
            },
            addProp: function(a, b) { Object.defineProperty(oa.Event.prototype, a, { enumerable: !0, configurable: !0, get: oa.isFunction(b) ? function() { if (this.originalEvent) return b(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[a] }, set: function(b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) },
            fix: function(a) { return a[oa.expando] ? a : new oa.Event(a) },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== w() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === w() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && oa.nodeName(this, "input")) return this.click(), !1 }, _default: function(a) { return oa.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }
        }, oa.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, oa.Event = function(a, b) { return this instanceof oa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? u : v, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && oa.extend(this, b), this.timeStamp = a && a.timeStamp || oa.now(), void(this[oa.expando] = !0)) : new oa.Event(a, b) }, oa.Event.prototype = {
            constructor: oa.Event,
            isDefaultPrevented: v,
            isPropagationStopped: v,
            isImmediatePropagationStopped: v,
            isSimulated: !1,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = u, a && !this.isSimulated && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = u, a && !this.isSimulated && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = u, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oa.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && Ya.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && Za.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, oa.event.addProp), oa.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
            oa.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || oa.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), oa.fn.extend({ on: function(a, b, c, d) { return x(this, a, b, c, d) }, one: function(a, b, c, d) { return x(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, oa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = v), this.each(function() { oa.event.remove(this, a, c, b) }) } });
        var _a = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ab = /<script|<style|<link/i,
            bb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            cb = /^true\/(.*)/,
            db = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        oa.extend({
            htmlPrefilter: function(a) { return a.replace(_a, "<$1></$2>") },
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = oa.contains(a.ownerDocument, a);
                if (!(ma.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || oa.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; d < e; d++) C(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; d < e; d++) B(f[d], g[d]);
                    else B(a, h);
                return g = r(h, "script"), g.length > 0 && s(g, !i && r(a, "script")), h
            },
            cleanData: function(a) {
                for (var b, c, d, e = oa.event.special, f = 0; void 0 !== (c = a[f]); f++)
                    if (Ha(c)) {
                        if (b = c[Ia.expando]) {
                            if (b.events)
                                for (d in b.events) e[d] ? oa.event.remove(c, d) : oa.removeEvent(c, d, b.handle);
                            c[Ia.expando] = void 0
                        }
                        c[Ja.expando] && (c[Ja.expando] = void 0)
                    }
            }
        }), oa.fn.extend({
            detach: function(a) { return E(this, a, !0) },
            remove: function(a) { return E(this, a) },
            text: function(a) { return Ga(this, function(a) { return void 0 === a ? oa.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) },
            append: function() { return D(this, arguments, function(a) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || y(this, a).appendChild(a) }) },
            prepend: function() {
                return D(this, arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = y(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() { return D(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
            after: function() { return D(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
            empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (oa.cleanData(r(a, !1)), a.textContent = ""); return this },
            clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return oa.clone(this, a, b) }) },
            html: function(a) {
                return Ga(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !ab.test(a) && !Va[(Ta.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = oa.htmlPrefilter(a);
                        try {
                            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (oa.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (a) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = [];
                return D(this, arguments, function(b) {
                    var c = this.parentNode;
                    oa.inArray(this, a) < 0 && (oa.cleanData(r(this)), c && c.replaceChild(b, this))
                }, a)
            }
        }), oa.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { oa.fn[a] = function(a) { for (var c, d = [], e = oa(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), oa(e[g])[b](c), fa.apply(d, c.get()); return this.pushStack(d) } });
        var eb = /^margin/,
            fb = new RegExp("^(" + Ma + ")(?!px)[a-z%]+$", "i"),
            gb = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) };
        ! function() {
            function b() {
                if (h) {
                    h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Xa.appendChild(g);
                    var b = a.getComputedStyle(h);
                    c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, Xa.removeChild(g), h = null
                }
            }
            var c, d, e, f, g = ba.createElement("div"),
                h = ba.createElement("div");
            h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", ma.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), oa.extend(ma, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return b(), d }, pixelMarginRight: function() { return b(), e }, reliableMarginLeft: function() { return b(), f } }))
        }();
        var hb = /^(none|table(?!-c[ea]).+)/,
            ib = { position: "absolute", visibility: "hidden", display: "block" },
            jb = { letterSpacing: "0", fontWeight: "400" },
            kb = ["Webkit", "Moz", "ms"],
            lb = ba.createElement("div").style;
        oa.extend({
            cssHooks: { opacity: { get: function(a, b) { if (b) { var c = F(a, "opacity"); return "" === c ? "1" : c } } } },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: "cssFloat" },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = oa.camelCase(b),
                        i = a.style;
                    return b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h), g = oa.cssHooks[b] || oa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Na.exec(c)) && e[1] && (c = o(a, b, e), f = "number"), void(null != c && c === c && ("number" === f && (c += e && e[3] || (oa.cssNumber[h] ? "" : "px")), ma.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
                }
            },
            css: function(a, b, c, d) { var e, f, g, h = oa.camelCase(b); return b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h), g = oa.cssHooks[b] || oa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = F(a, b, d)), "normal" === e && b in jb && (e = jb[b]), "" === c || c ? (f = parseFloat(e), !0 === c || isFinite(f) ? f || 0 : e) : e }
        }), oa.each(["height", "width"], function(a, b) {
            oa.cssHooks[b] = {
                get: function(a, c, d) { if (c) return !hb.test(oa.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? K(a, b, d) : Qa(a, ib, function() { return K(a, b, d) }) },
                set: function(a, c, d) {
                    var e, f = d && gb(a),
                        g = d && J(a, b, d, "border-box" === oa.css(a, "boxSizing", !1, f), f);
                    return g && (e = Na.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = oa.css(a, b)), I(a, c, g)
                }
            }
        }), oa.cssHooks.marginLeft = G(ma.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(F(a, "marginLeft")) || a.getBoundingClientRect().left - Qa(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), oa.each({ margin: "", padding: "", border: "Width" }, function(a, b) { oa.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + Oa[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, eb.test(a) || (oa.cssHooks[a + b].set = I) }), oa.fn.extend({
            css: function(a, b) {
                return Ga(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (oa.isArray(b)) { for (d = gb(a), e = b.length; g < e; g++) f[b[g]] = oa.css(a, b[g], !1, d); return f }
                    return void 0 !== c ? oa.style(a, b, c) : oa.css(a, b)
                }, a, b, arguments.length > 1)
            }
        }), oa.Tween = L, L.prototype = { constructor: L, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || oa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (oa.cssNumber[c] ? "" : "px") }, cur: function() { var a = L.propHooks[this.prop]; return a && a.get ? a.get(this) : L.propHooks._default.get(this) }, run: function(a) { var b, c = L.propHooks[this.prop]; return this.options.duration ? this.pos = b = oa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this } }, L.prototype.init.prototype = L.prototype, L.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = oa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { oa.fx.step[a.prop] ? oa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[oa.cssProps[a.prop]] && !oa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : oa.style(a.elem, a.prop, a.now + a.unit) } } }, L.propHooks.scrollTop = L.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, oa.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, oa.fx = L.prototype.init, oa.fx.step = {};
        var mb, nb, ob = /^(?:toggle|show|hide)$/,
            pb = /queueHooks$/;
        oa.Animation = oa.extend(S, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return o(c.elem, a, Na.exec(b), c), c }] }, tweener: function(a, b) { oa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Da); for (var c, d = 0, e = a.length; d < e; d++) c = a[d], S.tweeners[c] = S.tweeners[c] || [], S.tweeners[c].unshift(b) }, prefilters: [Q], prefilter: function(a, b) { b ? S.prefilters.unshift(a) : S.prefilters.push(a) } }), oa.speed = function(a, b, c) { var d = a && "object" == typeof a ? oa.extend({}, a) : { complete: c || !c && b || oa.isFunction(a) && a, duration: a, easing: c && b || b && !oa.isFunction(b) && b }; return oa.fx.off || ba.hidden ? d.duration = 0 : "number" != typeof d.duration && (d.duration in oa.fx.speeds ? d.duration = oa.fx.speeds[d.duration] : d.duration = oa.fx.speeds._default), null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() { oa.isFunction(d.old) && d.old.call(this), d.queue && oa.dequeue(this, d.queue) }, d }, oa.fn.extend({
                fadeTo: function(a, b, c, d) { return this.filter(Pa).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
                animate: function(a, b, c, d) {
                    var e = oa.isEmptyObject(a),
                        f = oa.speed(b, c, d),
                        g = function() {
                            var b = S(this, oa.extend({}, a), f);
                            (e || Ia.get(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = oa.timers,
                            g = Ia.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && pb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        !b && c || oa.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return !1 !== a && (a = a || "fx"), this.each(function() {
                        var b, c = Ia.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = oa.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, oa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), oa.each(["toggle", "show", "hide"], function(a, b) {
                var c = oa.fn[b];
                oa.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(O(b, !0), a, d, e) }
            }), oa.each({ slideDown: O("show"), slideUp: O("hide"), slideToggle: O("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { oa.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), oa.timers = [], oa.fx.tick = function() {
                var a, b = 0,
                    c = oa.timers;
                for (mb = oa.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
                c.length || oa.fx.stop(), mb = void 0
            }, oa.fx.timer = function(a) { oa.timers.push(a), a() ? oa.fx.start() : oa.timers.pop() }, oa.fx.interval = 13, oa.fx.start = function() { nb || (nb = a.requestAnimationFrame ? a.requestAnimationFrame(M) : a.setInterval(oa.fx.tick, oa.fx.interval)) }, oa.fx.stop = function() { a.cancelAnimationFrame ? a.cancelAnimationFrame(nb) : a.clearInterval(nb), nb = null }, oa.fx.speeds = { slow: 600, fast: 200, _default: 400 }, oa.fn.delay = function(b, c) {
                return b = oa.fx ? oa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                    var e = a.setTimeout(c, b);
                    d.stop = function() { a.clearTimeout(e) }
                })
            },
            function() {
                var a = ba.createElement("input"),
                    b = ba.createElement("select"),
                    c = b.appendChild(ba.createElement("option"));
                a.type = "checkbox", ma.checkOn = "" !== a.value, ma.optSelected = c.selected, a = ba.createElement("input"), a.value = "t", a.type = "radio", ma.radioValue = "t" === a.value
            }();
        var qb, rb = oa.expr.attrHandle;
        oa.fn.extend({ attr: function(a, b) { return Ga(this, oa.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { oa.removeAttr(this, a) }) } }), oa.extend({
            attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? oa.prop(a, b, c) : (1 === f && oa.isXMLDoc(a) || (e = oa.attrHooks[b.toLowerCase()] || (oa.expr.match.bool.test(b) ? qb : void 0)), void 0 !== c ? null === c ? void oa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = oa.find.attr(a, b), null == d ? void 0 : d)) },
            attrHooks: { type: { set: function(a, b) { if (!ma.radioValue && "radio" === b && oa.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
            removeAttr: function(a, b) {
                var c, d = 0,
                    e = b && b.match(Da);
                if (e && 1 === a.nodeType)
                    for (; c = e[d++];) a.removeAttribute(c)
            }
        }), qb = { set: function(a, b, c) { return !1 === b ? oa.removeAttr(a, c) : a.setAttribute(c, c), c } }, oa.each(oa.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = rb[b] || oa.find.attr;
            rb[b] = function(a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = rb[g], rb[g] = e, e = null != c(a, b, d) ? g : null, rb[g] = f), e }
        });
        var sb = /^(?:input|select|textarea|button)$/i,
            tb = /^(?:a|area)$/i;
        oa.fn.extend({ prop: function(a, b) { return Ga(this, oa.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[oa.propFix[a] || a] }) } }), oa.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && oa.isXMLDoc(a) || (b = oa.propFix[b] || b, e = oa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = oa.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), ma.optSelected || (oa.propHooks.selected = {
            get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null },
            set: function(a) {
                var b = a.parentNode;
                b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
            }
        }), oa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { oa.propFix[this.toLowerCase()] = this }), oa.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (oa.isFunction(a)) return this.each(function(b) { oa(this).addClass(a.call(this, b, U(this))) });
                if ("string" == typeof a && a)
                    for (b = a.match(Da) || []; c = this[i++];)
                        if (e = U(c), d = 1 === c.nodeType && " " + T(e) + " ") {
                            for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                            h = T(d), e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h, i = 0;
                if (oa.isFunction(a)) return this.each(function(b) { oa(this).removeClass(a.call(this, b, U(this))) });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof a && a)
                    for (b = a.match(Da) || []; c = this[i++];)
                        if (e = U(c), d = 1 === c.nodeType && " " + T(e) + " ") {
                            for (g = 0; f = b[g++];)
                                for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                            h = T(d), e !== h && c.setAttribute("class", h)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : oa.isFunction(a) ? this.each(function(c) { oa(this).toggleClass(a.call(this, c, U(this), b), b) }) : this.each(function() {
                    var b, d, e, f;
                    if ("string" === c)
                        for (d = 0, e = oa(this), f = a.match(Da) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else void 0 !== a && "boolean" !== c || (b = U(this), b && Ia.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : Ia.get(this, "__className__") || ""))
                })
            },
            hasClass: function(a) {
                var b, c, d = 0;
                for (b = " " + a + " "; c = this[d++];)
                    if (1 === c.nodeType && (" " + T(U(c)) + " ").indexOf(b) > -1) return !0;
                return !1
            }
        });
        var ub = /\r/g;
        oa.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = oa.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, oa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : oa.isArray(e) && (e = oa.map(e, function(a) { return null == a ? "" : a + "" })), (b = oa.valHooks[this.type] || oa.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = oa.valHooks[e.type] || oa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
            }
        }), oa.extend({
            valHooks: {
                option: { get: function(a) { var b = oa.find.attr(a, "value"); return null != b ? b : T(oa.text(a)) } },
                select: {
                    get: function(a) {
                        var b, c, d, e = a.options,
                            f = a.selectedIndex,
                            g = "select-one" === a.type,
                            h = g ? null : [],
                            i = g ? f + 1 : e.length;
                        for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !oa.nodeName(c.parentNode, "optgroup"))) {
                                if (b = oa(c).val(), g) return b;
                                h.push(b)
                            }
                        return h
                    },
                    set: function(a, b) { for (var c, d, e = a.options, f = oa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = oa.inArray(oa.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f }
                }
            }
        }), oa.each(["radio", "checkbox"], function() { oa.valHooks[this] = { set: function(a, b) { if (oa.isArray(b)) return a.checked = oa.inArray(oa(a).val(), b) > -1 } }, ma.checkOn || (oa.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
        var vb = /^(?:focusinfocus|focusoutblur)$/;
        oa.extend(oa.event, {
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || ba],
                    n = ja.call(b, "type") ? b.type : b,
                    o = ja.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || ba, 3 !== d.nodeType && 8 !== d.nodeType && !vb.test(n + oa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[oa.expando] ? b : new oa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : oa.makeArray(c, [b]), l = oa.event.special[n] || {}, e || !l.trigger || !1 !== l.trigger.apply(d, c))) {
                    if (!e && !l.noBubble && !oa.isWindow(d)) {
                        for (i = l.delegateType || n, vb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || ba) && m.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0;
                        (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (Ia.get(g, "events") || {})[b.type] && Ia.get(g, "handle"), k && k.apply(g, c), (k = j && g[j]) && k.apply && Ha(g) && (b.result = k.apply(g, c), !1 === b.result && b.preventDefault());
                    return b.type = n, e || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(m.pop(), c) || !Ha(d) || j && oa.isFunction(d[n]) && !oa.isWindow(d) && (h = d[j], h && (d[j] = null), oa.event.triggered = n, d[n](), oa.event.triggered = void 0, h && (d[j] = h)), b.result
                }
            },
            simulate: function(a, b, c) {
                var d = oa.extend(new oa.Event, c, { type: a, isSimulated: !0 });
                oa.event.trigger(d, null, b)
            }
        }), oa.fn.extend({ trigger: function(a, b) { return this.each(function() { oa.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return oa.event.trigger(a, b, c, !0) } }), oa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { oa.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), oa.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), ma.focusin = "onfocusin" in a, ma.focusin || oa.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
            var c = function(a) { oa.event.simulate(b, a.target, oa.event.fix(a)) };
            oa.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = Ia.access(d, b);
                    e || d.addEventListener(a, c, !0), Ia.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = Ia.access(d, b) - 1;
                    e ? Ia.access(d, b, e) : (d.removeEventListener(a, c, !0), Ia.remove(d, b))
                }
            }
        });
        var wb = a.location,
            xb = oa.now(),
            yb = /\?/;
        oa.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (a) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || oa.error("Invalid XML: " + b), c };
        var zb = /\[\]$/,
            Ab = /\r?\n/g,
            Bb = /^(?:submit|button|image|reset|file)$/i,
            Cb = /^(?:input|select|textarea|keygen)/i;
        oa.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    var c = oa.isFunction(b) ? b() : b;
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
                };
            if (oa.isArray(a) || a.jquery && !oa.isPlainObject(a)) oa.each(a, function() { e(this.name, this.value) });
            else
                for (c in a) V(c, a[c], b, e);
            return d.join("&")
        }, oa.fn.extend({ serialize: function() { return oa.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = oa.prop(this, "elements"); return a ? oa.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !oa(this).is(":disabled") && Cb.test(this.nodeName) && !Bb.test(a) && (this.checked || !Sa.test(a)) }).map(function(a, b) { var c = oa(this).val(); return null == c ? null : oa.isArray(c) ? oa.map(c, function(a) { return { name: b.name, value: a.replace(Ab, "\r\n") } }) : { name: b.name, value: c.replace(Ab, "\r\n") } }).get() } });
        var Db = /%20/g,
            Eb = /#.*$/,
            Fb = /([?&])_=[^&]*/,
            Gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ib = /^(?:GET|HEAD)$/,
            Jb = /^\/\//,
            Kb = {},
            Lb = {},
            Mb = "*/".concat("*"),
            Nb = ba.createElement("a");
        Nb.href = wb.href, oa.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: wb.href, type: "GET", isLocal: Hb.test(wb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Mb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": oa.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(a, b) { return b ? Y(Y(a, oa.ajaxSettings), b) : Y(oa.ajaxSettings, a) },
            ajaxPrefilter: W(Kb),
            ajaxTransport: W(Lb),
            ajax: function(b, c) {
                function d(b, c, d, h) {
                    var j, m, n, u, v, w = c;
                    k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (u = Z(o, x, d)), u = $(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (oa.lastModified[f] = v), (v = x.getResponseHeader("etag")) && (oa.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, !b && w || (w = "error", b < 0 && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --oa.active || oa.event.trigger("ajaxStop")))
                }
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var e, f, g, h, i, j, k, l, m, n, o = oa.ajaxSetup({}, c),
                    p = o.context || o,
                    q = o.context && (p.nodeType || p.jquery) ? oa(p) : oa.event,
                    r = oa.Deferred(),
                    s = oa.Callbacks("once memory"),
                    t = o.statusCode || {},
                    u = {},
                    v = {},
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (k) {
                                if (!h)
                                    for (h = {}; b = Gb.exec(g);) h[b[1].toLowerCase()] = b[2];
                                b = h[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() { return k ? g : null },
                        setRequestHeader: function(a, b) { return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this },
                        overrideMimeType: function(a) { return null == k && (o.mimeType = a), this },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (k) x.always(a[x.status]);
                                else
                                    for (b in a) t[b] = [t[b], a[b]];
                            return this
                        },
                        abort: function(a) { var b = a || w; return e && e.abort(b), d(0, b), this }
                    };
                if (r.promise(x), o.url = ((b || o.url || wb.href) + "").replace(Jb, wb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Da) || [""], null == o.crossDomain) { j = ba.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Nb.protocol + "//" + Nb.host != j.protocol + "//" + j.host } catch (a) { o.crossDomain = !0 } }
                if (o.data && o.processData && "string" != typeof o.data && (o.data = oa.param(o.data, o.traditional)), X(Kb, o, c, x), k) return x;
                l = oa.event && o.global, l && 0 == oa.active++ && oa.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Ib.test(o.type), f = o.url.replace(Eb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Db, "+")) : (n = o.url.slice(f.length), o.data && (f += (yb.test(f) ? "&" : "?") + o.data, delete o.data), !1 === o.cache && (f = f.replace(Fb, "$1"), n = (yb.test(f) ? "&" : "?") + "_=" + xb++ + n), o.url = f + n), o.ifModified && (oa.lastModified[f] && x.setRequestHeader("If-Modified-Since", oa.lastModified[f]), oa.etag[f] && x.setRequestHeader("If-None-Match", oa.etag[f])), (o.data && o.hasContent && !1 !== o.contentType || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Mb + "; q=0.01" : "") : o.accepts["*"]);
                for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
                if (o.beforeSend && (!1 === o.beforeSend.call(p, x, o) || k)) return x.abort();
                if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = X(Lb, o, c, x)) {
                    if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
                    o.async && o.timeout > 0 && (i = a.setTimeout(function() { x.abort("timeout") }, o.timeout));
                    try { k = !1, e.send(u, d) } catch (a) {
                        if (k) throw a;
                        d(-1, a)
                    }
                } else d(-1, "No Transport");
                return x
            },
            getJSON: function(a, b, c) { return oa.get(a, b, c, "json") },
            getScript: function(a, b) { return oa.get(a, void 0, b, "script") }
        }), oa.each(["get", "post"], function(a, b) { oa[b] = function(a, c, d, e) { return oa.isFunction(c) && (e = e || d, d = c, c = void 0), oa.ajax(oa.extend({ url: a, type: b, dataType: e, data: c, success: d }, oa.isPlainObject(a) && a)) } }), oa._evalUrl = function(a) { return oa.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 }) }, oa.fn.extend({
            wrapAll: function(a) { var b; return this[0] && (oa.isFunction(a) && (a = a.call(this[0])), b = oa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { for (var a = this; a.firstElementChild;) a = a.firstElementChild; return a }).append(this)), this },
            wrapInner: function(a) {
                return oa.isFunction(a) ? this.each(function(b) { oa(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                    var b = oa(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) { var b = oa.isFunction(a); return this.each(function(c) { oa(this).wrapAll(b ? a.call(this, c) : a) }) },
            unwrap: function(a) { return this.parent(a).not("body").each(function() { oa(this).replaceWith(this.childNodes) }), this }
        }), oa.expr.pseudos.hidden = function(a) { return !oa.expr.pseudos.visible(a) }, oa.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, oa.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (a) {} };
        var Ob = { 0: 200, 1223: 204 },
            Pb = oa.ajaxSettings.xhr();
        ma.cors = !!Pb && "withCredentials" in Pb, ma.ajax = Pb = !!Pb, oa.ajaxTransport(function(b) {
            var c, d;
            if (ma.cors || Pb && !b.crossDomain) return {
                send: function(e, f) {
                    var g, h = b.xhr();
                    if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (g in b.xhrFields) h[g] = b.xhrFields[g];
                    b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    for (g in e) h.setRequestHeader(g, e[g]);
                    c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort");
                    try { h.send(b.hasContent && b.data || null) } catch (a) { if (c) throw a }
                },
                abort: function() { c && c() }
            }
        }), oa.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), oa.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return oa.globalEval(a), a } } }), oa.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), oa.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(d, e) { b = oa("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type) }), ba.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
        var Qb = [],
            Rb = /(=)\?(?=&|$)|\?\?/;
        oa.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Qb.pop() || oa.expando + "_" + xb++; return this[a] = !0, a } }), oa.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = !1 !== b.jsonp && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = oa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : !1 !== b.jsonp && (b.url += (yb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || oa.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? oa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && oa.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), ma.createHTMLDocument = function() { var a = ba.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), oa.parseHTML = function(a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var d, e, f; return b || (ma.createHTMLDocument ? (b = ba.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = ba.location.href, b.head.appendChild(d)) : b = ba), e = xa.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = t([a], b, f), f && f.length && oa(f).remove(), oa.merge([], e.childNodes)) }, oa.fn.load = function(a, b, c) {
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h > -1 && (d = T(a.slice(h)), a = a.slice(0, h)), oa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && oa.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? oa("<div>").append(oa.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this
        }, oa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { oa.fn[b] = function(a) { return this.on(b, a) } }), oa.expr.pseudos.animated = function(a) { return oa.grep(oa.timers, function(b) { return a === b.elem }).length }, oa.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = oa.css(a, "position"),
                    l = oa(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = oa.css(a, "top"), i = oa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), oa.isFunction(b) && (b = b.call(a, c, oa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, oa.fn.extend({
            offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { oa.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; return f ? f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = _(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 } : void 0 },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = { top: 0, left: 0 };
                    return "fixed" === oa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), oa.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + oa.css(a[0], "borderTopWidth", !0), left: d.left + oa.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - oa.css(c, "marginTop", !0), left: b.left - d.left - oa.css(c, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var a = this.offsetParent; a && "static" === oa.css(a, "position");) a = a.offsetParent; return a || Xa }) }
        }), oa.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
            var c = "pageYOffset" === b;
            oa.fn[a] = function(d) { return Ga(this, function(a, d, e) { var f = _(a); return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) }
        }), oa.each(["top", "left"], function(a, b) { oa.cssHooks[b] = G(ma.pixelPosition, function(a, c) { if (c) return c = F(a, b), fb.test(c) ? oa(a).position()[b] + "px" : c }) }), oa.each({ Height: "height", Width: "width" }, function(a, b) {
            oa.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
                oa.fn[d] = function(e, f) {
                    var g = arguments.length && (c || "boolean" != typeof e),
                        h = c || (!0 === e || !0 === f ? "margin" : "border");
                    return Ga(this, function(b, c, e) { var f; return oa.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? oa.css(b, c, h) : oa.style(b, c, e, h) }, b, g ? e : void 0, g)
                }
            })
        }), oa.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), oa.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() { return oa });
        var Sb = a.jQuery,
            Tb = a.$;
        return oa.noConflict = function(b) { return a.$ === oa && (a.$ = Tb), b && a.jQuery === oa && (a.jQuery = Sb), oa }, b || (a.jQuery = a.$ = oa), oa
    }), function(a, b) { "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b(require, exports, module) : a.Tether = b() }(this, function(a, b, c) {
        function d(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") }

        function e(a) {
            var b = a.getBoundingClientRect(),
                c = {};
            for (var d in b) c[d] = b[d];
            if (a.ownerDocument !== document) {
                var f = a.ownerDocument.defaultView.frameElement;
                if (f) {
                    var g = e(f);
                    c.top += g.top, c.bottom += g.top, c.left += g.left, c.right += g.left
                }
            }
            return c
        }

        function f(a) {
            var b = getComputedStyle(a) || {},
                c = b.position,
                d = [];
            if ("fixed" === c) return [a];
            for (var e = a;
                (e = e.parentNode) && e && 1 === e.nodeType;) {
                var f = void 0;
                try { f = getComputedStyle(e) } catch (a) {}
                if (void 0 === f || null === f) return d.push(e), d;
                var g = f,
                    h = g.overflow,
                    i = g.overflowX;
                /(auto|scroll)/.test(h + g.overflowY + i) && ("absolute" !== c || ["relative", "absolute", "fixed"].indexOf(f.position) >= 0) && d.push(e)
            }
            return d.push(a.ownerDocument.body), a.ownerDocument !== document && d.push(a.ownerDocument.defaultView), d
        }

        function g() { z && document.body.removeChild(z), z = null }

        function h(a) {
            var b = void 0;
            a === document ? (b = document, a = document.documentElement) : b = a.ownerDocument;
            var c = b.documentElement,
                d = e(a),
                f = C();
            return d.top -= f.top, d.left -= f.left, void 0 === d.width && (d.width = document.body.scrollWidth - d.left - d.right), void 0 === d.height && (d.height = document.body.scrollHeight - d.top - d.bottom), d.top = d.top - c.clientTop, d.left = d.left - c.clientLeft, d.right = b.body.clientWidth - d.width - d.left, d.bottom = b.body.clientHeight - d.height - d.top, d
        }

        function i(a) { return a.offsetParent || document.documentElement }

        function j() {
            var a = document.createElement("div");
            a.style.width = "100%", a.style.height = "200px";
            var b = document.createElement("div");
            k(b.style, { position: "absolute", top: 0, left: 0, pointerEvents: "none", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), b.appendChild(a), document.body.appendChild(b);
            var c = a.offsetWidth;
            b.style.overflow = "scroll";
            var d = a.offsetWidth;
            c === d && (d = b.clientWidth), document.body.removeChild(b);
            var e = c - d;
            return { width: e, height: e }
        }

        function k() {
            var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                b = [];
            return Array.prototype.push.apply(b, arguments), b.slice(1).forEach(function(b) {
                if (b)
                    for (var c in b)({}).hasOwnProperty.call(b, c) && (a[c] = b[c])
            }), a
        }

        function l(a, b) {
            if (void 0 !== a.classList) b.split(" ").forEach(function(b) { b.trim() && a.classList.remove(b) });
            else {
                var c = new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"),
                    d = o(a).replace(c, " ");
                p(a, d)
            }
        }

        function m(a, b) {
            if (void 0 !== a.classList) b.split(" ").forEach(function(b) { b.trim() && a.classList.add(b) });
            else {
                l(a, b);
                var c = o(a) + " " + b;
                p(a, c)
            }
        }

        function n(a, b) { if (void 0 !== a.classList) return a.classList.contains(b); var c = o(a); return new RegExp("(^| )" + b + "( |$)", "gi").test(c) }

        function o(a) { return a.className instanceof a.ownerDocument.defaultView.SVGAnimatedString ? a.className.baseVal : a.className }

        function p(a, b) { a.setAttribute("class", b) }

        function q(a, b, c) { c.forEach(function(c) {-1 === b.indexOf(c) && n(a, c) && l(a, c) }), b.forEach(function(b) { n(a, b) || m(a, b) }) }

        function d(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") }

        function r(a, b) {
            if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }

        function s(a, b) { var c = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2]; return a + c >= b && b >= a - c }

        function t() { return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date }

        function u() {
            for (var a = { top: 0, left: 0 }, b = arguments.length, c = Array(b), d = 0; b > d; d++) c[d] = arguments[d];
            return c.forEach(function(b) {
                var c = b.top,
                    d = b.left;
                "string" == typeof c && (c = parseFloat(c, 10)), "string" == typeof d && (d = parseFloat(d, 10)), a.top += c, a.left += d
            }), a
        }

        function v(a, b) { return "string" == typeof a.left && -1 !== a.left.indexOf("%") && (a.left = parseFloat(a.left, 10) / 100 * b.width), "string" == typeof a.top && -1 !== a.top.indexOf("%") && (a.top = parseFloat(a.top, 10) / 100 * b.height), a }

        function w(a, b) {
            return "scrollParent" === b ? b = a.scrollParents[0] : "window" === b && (b = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), b === document && (b = b.documentElement), void 0 !== b.nodeType && function() {
                var a = b,
                    c = h(b),
                    d = c,
                    e = getComputedStyle(b);
                if (b = [d.left, d.top, c.width + d.left, c.height + d.top], a.ownerDocument !== document) {
                    var f = a.ownerDocument.defaultView;
                    b[0] += f.pageXOffset, b[1] += f.pageYOffset, b[2] += f.pageXOffset, b[3] += f.pageYOffset
                }
                W.forEach(function(a, c) { a = a[0].toUpperCase() + a.substr(1), "Top" === a || "Left" === a ? b[c] += parseFloat(e["border" + a + "Width"]) : b[c] -= parseFloat(e["border" + a + "Width"]) })
            }(), b
        }
        var x = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) { return c && a(b.prototype, c), d && a(b, d), b }
            }(),
            y = void 0;
        void 0 === y && (y = { modules: [] });
        var z = null,
            A = function() { var a = 0; return function() { return ++a } }(),
            B = {},
            C = function() {
                var a = z;
                a || (a = document.createElement("div"), a.setAttribute("data-tether-id", A()), k(a.style, { top: 0, left: 0, position: "absolute" }), document.body.appendChild(a), z = a);
                var b = a.getAttribute("data-tether-id");
                return void 0 === B[b] && (B[b] = e(a), E(function() { delete B[b] })), B[b]
            },
            D = [],
            E = function(a) { D.push(a) },
            F = function() { for (var a = void 0; a = D.pop();) a() },
            G = function() {
                function a() { d(this, a) }
                return x(a, [{
                    key: "on",
                    value: function(a, b, c) {
                        var d = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[a] && (this.bindings[a] = []), this.bindings[a].push({ handler: b, ctx: c, once: d })
                    }
                }, { key: "once", value: function(a, b, c) { this.on(a, b, c, !0) } }, {
                    key: "off",
                    value: function(a, b) {
                        if (void 0 !== this.bindings && void 0 !== this.bindings[a])
                            if (void 0 === b) delete this.bindings[a];
                            else
                                for (var c = 0; c < this.bindings[a].length;) this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : ++c
                    }
                }, {
                    key: "trigger",
                    value: function(a) {
                        if (void 0 !== this.bindings && this.bindings[a]) {
                            for (var b = 0, c = arguments.length, d = Array(c > 1 ? c - 1 : 0), e = 1; c > e; e++) d[e - 1] = arguments[e];
                            for (; b < this.bindings[a].length;) {
                                var f = this.bindings[a][b],
                                    g = f.handler,
                                    h = f.ctx,
                                    i = f.once,
                                    j = h;
                                void 0 === j && (j = this), g.apply(j, d), i ? this.bindings[a].splice(b, 1) : ++b
                            }
                        }
                    }
                }]), a
            }();
        y.Utils = { getActualBoundingClientRect: e, getScrollParents: f, getBounds: h, getOffsetParent: i, extend: k, addClass: m, removeClass: l, hasClass: n, updateClasses: q, defer: E, flush: F, uniqueId: A, Evented: G, getScrollBarSize: j, removeUtilElements: g };
        var H = function() {
                function a(a, b) {
                    var c = [],
                        d = !0,
                        e = !1,
                        f = void 0;
                    try { for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0); } catch (a) { e = !0, f = a } finally { try {!d && h.return && h.return() } finally { if (e) throw f } }
                    return c
                }
                return function(b, c) { if (Array.isArray(b)) return b; if (Symbol.iterator in Object(b)) return a(b, c); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
            }(),
            x = function() {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c];
                        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                    }
                }
                return function(b, c, d) { return c && a(b.prototype, c), d && a(b, d), b }
            }(),
            I = function(a, b, c) {
                for (var d = !0; d;) {
                    var e = a,
                        f = b,
                        g = c;
                    d = !1, null === e && (e = Function.prototype);
                    var h = Object.getOwnPropertyDescriptor(e, f);
                    if (void 0 !== h) { if ("value" in h) return h.value; var i = h.get; if (void 0 === i) return; return i.call(g) }
                    var j = Object.getPrototypeOf(e);
                    if (null === j) return;
                    a = j, b = f, c = g, d = !0, h = j = void 0
                }
            };
        if (void 0 === y) throw new Error("You must include the utils.js file before tether.js");
        var J = y.Utils,
            f = J.getScrollParents,
            h = J.getBounds,
            i = J.getOffsetParent,
            k = J.extend,
            m = J.addClass,
            l = J.removeClass,
            q = J.updateClasses,
            E = J.defer,
            F = J.flush,
            j = J.getScrollBarSize,
            g = J.removeUtilElements,
            K = function() { if ("undefined" == typeof document) return ""; for (var a = document.createElement("div"), b = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], c = 0; c < b.length; ++c) { var d = b[c]; if (void 0 !== a.style[d]) return d } }(),
            L = [],
            M = function() { L.forEach(function(a) { a.position(!1) }), F() };
        ! function() {
            var a = null,
                b = null,
                c = null,
                d = function d() { return void 0 !== b && b > 16 ? (b = Math.min(b - 16, 250), void(c = setTimeout(d, 250))) : void(void 0 !== a && t() - a < 10 || (null != c && (clearTimeout(c), c = null), a = t(), M(), b = t() - a)) };
            "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(a) { window.addEventListener(a, d) })
        }();
        var N = { center: "center", left: "right", right: "left" },
            O = { middle: "middle", top: "bottom", bottom: "top" },
            P = { top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%" },
            Q = function(a, b) {
                var c = a.left,
                    d = a.top;
                return "auto" === c && (c = N[b.left]), "auto" === d && (d = O[b.top]), { left: c, top: d }
            },
            R = function(a) {
                var b = a.left,
                    c = a.top;
                return void 0 !== P[a.left] && (b = P[a.left]), void 0 !== P[a.top] && (c = P[a.top]), { left: b, top: c }
            },
            S = function(a) {
                var b = a.split(" "),
                    c = H(b, 2);
                return { top: c[0], left: c[1] }
            },
            T = S,
            U = function(a) {
                function b(a) {
                    var c = this;
                    d(this, b), I(Object.getPrototypeOf(b.prototype), "constructor", this).call(this), this.position = this.position.bind(this), L.push(this), this.history = [], this.setOptions(a, !1), y.modules.forEach(function(a) { void 0 !== a.initialize && a.initialize.call(c) }), this.position()
                }
                return r(b, a), x(b, [{
                    key: "getClass",
                    value: function() {
                        var a = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            b = this.options.classes;
                        return void 0 !== b && b[a] ? this.options.classes[a] : this.options.classPrefix ? this.options.classPrefix + "-" + a : a
                    }
                }, {
                    key: "setOptions",
                    value: function(a) {
                        var b = this,
                            c = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                            d = { offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether" };
                        this.options = k(d, a);
                        var e = this.options,
                            g = e.element,
                            h = e.target,
                            i = e.targetModifier;
                        if (this.element = g, this.target = h, this.targetModifier = i, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(a) {
                                if (void 0 === b[a]) throw new Error("Tether Error: Both element and target must be defined");
                                void 0 !== b[a].jquery ? b[a] = b[a][0] : "string" == typeof b[a] && (b[a] = document.querySelector(b[a]))
                            }), m(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && m(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = T(this.options.targetAttachment), this.attachment = T(this.options.attachment), this.offset = S(this.options.offset), this.targetOffset = S(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = f(this.target), !1 !== this.options.enabled && this.enable(c)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if (void 0 === this.targetModifier) return h(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
                            var a = h(this.target),
                                b = { height: a.height, width: a.width, top: a.top, left: a.left };
                            return b.height = Math.min(b.height, a.height - (pageYOffset - a.top)), b.height = Math.min(b.height, a.height - (a.top + a.height - (pageYOffset + innerHeight))), b.height = Math.min(innerHeight, b.height), b.height -= 2, b.width = Math.min(b.width, a.width - (pageXOffset - a.left)), b.width = Math.min(b.width, a.width - (a.left + a.width - (pageXOffset + innerWidth))), b.width = Math.min(innerWidth, b.width), b.width -= 2, b.top < pageYOffset && (b.top = pageYOffset), b.left < pageXOffset && (b.left = pageXOffset), b
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var a = void 0,
                                c = this.target;
                            c === document.body ? (c = document.documentElement, a = { left: pageXOffset, top: pageYOffset, height: innerHeight, width: innerWidth }) : a = h(c);
                            var d = getComputedStyle(c),
                                e = c.scrollWidth > c.clientWidth || [d.overflow, d.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                f = 0;
                            e && (f = 15);
                            var g = a.height - parseFloat(d.borderTopWidth) - parseFloat(d.borderBottomWidth) - f,
                                b = { width: 15, height: .975 * g * (g / c.scrollHeight), left: a.left + a.width - parseFloat(d.borderLeftWidth) - 15 },
                                i = 0;
                            408 > g && this.target === document.body && (i = -11e-5 * Math.pow(g, 2) - .00727 * g + 22.58), this.target !== document.body && (b.height = Math.max(b.height, 24));
                            var j = this.target.scrollTop / (c.scrollHeight - g);
                            return b.top = j * (g - b.height - i) + a.top + parseFloat(d.borderTopWidth), this.target === document.body && (b.height = Math.max(b.height, 24)), b
                        }
                    }
                }, { key: "clearCache", value: function() { this._cache = {} } }, { key: "cache", value: function(a, b) { return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[a] && (this._cache[a] = b.call(this)), this._cache[a] } }, {
                    key: "enable",
                    value: function() {
                        var a = this,
                            b = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        !1 !== this.options.addTargetClasses && m(this.target, this.getClass("enabled")), m(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(b) { b !== a.target.ownerDocument && b.addEventListener("scroll", a.position) }), b && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        var a = this;
                        l(this.target, this.getClass("enabled")), l(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function(b) { b.removeEventListener("scroll", a.position) })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var a = this;
                        this.disable(), L.forEach(function(b, c) { b === a && L.splice(c, 1) }), 0 === L.length && g()
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(a, b) {
                        var c = this;
                        a = a || this.attachment, b = b || this.targetAttachment;
                        var d = ["left", "top", "bottom", "right", "middle", "center"];
                        void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                        var e = this._addAttachClasses;
                        a.top && e.push(this.getClass("element-attached") + "-" + a.top), a.left && e.push(this.getClass("element-attached") + "-" + a.left), b.top && e.push(this.getClass("target-attached") + "-" + b.top), b.left && e.push(this.getClass("target-attached") + "-" + b.left);
                        var f = [];
                        d.forEach(function(a) { f.push(c.getClass("element-attached") + "-" + a), f.push(c.getClass("target-attached") + "-" + a) }), E(function() { void 0 !== c._addAttachClasses && (q(c.element, c._addAttachClasses, f), !1 !== c.options.addTargetClasses && q(c.target, c._addAttachClasses, f), delete c._addAttachClasses) })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var a = this,
                            b = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var c = Q(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, c);
                            var d = this.cache("element-bounds", function() { return h(a.element) }),
                                e = d.width,
                                f = d.height;
                            if (0 === e && 0 === f && void 0 !== this.lastSize) {
                                var g = this.lastSize;
                                e = g.width, f = g.height
                            } else this.lastSize = { width: e, height: f };
                            var k = this.cache("target-bounds", function() { return a.getTargetBounds() }),
                                l = k,
                                m = v(R(this.attachment), { width: e, height: f }),
                                n = v(R(c), l),
                                o = v(this.offset, { width: e, height: f }),
                                p = v(this.targetOffset, l);
                            m = u(m, o), n = u(n, p);
                            for (var q = k.left + n.left - m.left, r = k.top + n.top - m.top, s = 0; s < y.modules.length; ++s) {
                                var t = y.modules[s],
                                    w = t.position.call(this, { left: q, top: r, targetAttachment: c, targetPos: k, elementPos: d, offset: m, targetOffset: n, manualOffset: o, manualTargetOffset: p, scrollbarSize: B, attachment: this.attachment });
                                if (!1 === w) return !1;
                                void 0 !== w && "object" == typeof w && (r = w.top, q = w.left)
                            }
                            var x = { page: { top: r, left: q }, viewport: { top: r - pageYOffset, bottom: pageYOffset - r - f + innerHeight, left: q - pageXOffset, right: pageXOffset - q - e + innerWidth } },
                                z = this.target.ownerDocument,
                                A = z.defaultView,
                                B = void 0;
                            return z.body.scrollWidth > A.innerWidth && (B = this.cache("scrollbar-size", j), x.viewport.bottom -= B.height), z.body.scrollHeight > A.innerHeight && (B = this.cache("scrollbar-size", j), x.viewport.right -= B.width), (-1 === ["", "static"].indexOf(z.body.style.position) || -1 === ["", "static"].indexOf(z.body.parentElement.style.position)) && (x.page.bottom = z.body.scrollHeight - r - f, x.page.right = z.body.scrollWidth - q - e), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function() {
                                var b = a.cache("target-offsetparent", function() { return i(a.target) }),
                                    c = a.cache("target-offsetparent-bounds", function() { return h(b) }),
                                    d = getComputedStyle(b),
                                    e = c,
                                    f = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(a) { f[a.toLowerCase()] = parseFloat(d["border" + a + "Width"]) }), c.right = z.body.scrollWidth - c.left - e.width + f.right, c.bottom = z.body.scrollHeight - c.top - e.height + f.bottom, x.page.top >= c.top + f.top && x.page.bottom >= c.bottom && x.page.left >= c.left + f.left && x.page.right >= c.right) {
                                    var g = b.scrollTop,
                                        j = b.scrollLeft;
                                    x.offset = { top: x.page.top - c.top + g - f.top, left: x.page.left - c.left + j - f.left }
                                }
                            }(), this.move(x), this.history.unshift(x), this.history.length > 3 && this.history.pop(), b && F(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(a) {
                        var b = this;
                        if (void 0 !== this.element.parentNode) {
                            var c = {};
                            for (var d in a) {
                                c[d] = {};
                                for (var e in a[d]) {
                                    for (var f = !1, g = 0; g < this.history.length; ++g) { var h = this.history[g]; if (void 0 !== h[d] && !s(h[d][e], a[d][e])) { f = !0; break } }
                                    f || (c[d][e] = !0)
                                }
                            }
                            var j = { top: "", left: "", right: "", bottom: "" },
                                l = function(a, c) {
                                    if (!1 !== (void 0 !== b.options.optimizations ? b.options.optimizations.gpu : null)) {
                                        var d = void 0,
                                            e = void 0;
                                        a.top ? (j.top = 0, d = c.top) : (j.bottom = 0, d = -c.bottom), a.left ? (j.left = 0, e = c.left) : (j.right = 0, e = -c.right), j[K] = "translateX(" + Math.round(e) + "px) translateY(" + Math.round(d) + "px)", "msTransform" !== K && (j[K] += " translateZ(0)")
                                    } else a.top ? j.top = c.top + "px" : j.bottom = c.bottom + "px", a.left ? j.left = c.left + "px" : j.right = c.right + "px"
                                },
                                m = !1;
                            if ((c.page.top || c.page.bottom) && (c.page.left || c.page.right) ? (j.position = "absolute", l(c.page, a.page)) : (c.viewport.top || c.viewport.bottom) && (c.viewport.left || c.viewport.right) ? (j.position = "fixed", l(c.viewport, a.viewport)) : void 0 !== c.offset && c.offset.top && c.offset.left ? function() {
                                    j.position = "absolute";
                                    var d = b.cache("target-offsetparent", function() { return i(b.target) });
                                    i(b.element) !== d && E(function() { b.element.parentNode.removeChild(b.element), d.appendChild(b.element) }), l(c.offset, a.offset), m = !0
                                }() : (j.position = "absolute", l({ top: !0, left: !0 }, a.page)), !m) {
                                for (var n = !0, o = this.element.parentNode; o && 1 === o.nodeType && "BODY" !== o.tagName;) {
                                    if ("static" !== getComputedStyle(o).position) { n = !1; break }
                                    o = o.parentNode
                                }
                                n || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                            }
                            var p = {},
                                q = !1;
                            for (var e in j) {
                                var r = j[e];
                                this.element.style[e] !== r && (q = !0, p[e] = r)
                            }
                            q && E(function() { k(b.element.style, p) })
                        }
                    }
                }]), b
            }(G);
        U.modules = [], y.position = M;
        var V = k(U, y),
            H = function() {
                function a(a, b) {
                    var c = [],
                        d = !0,
                        e = !1,
                        f = void 0;
                    try { for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0); } catch (a) { e = !0, f = a } finally { try {!d && h.return && h.return() } finally { if (e) throw f } }
                    return c
                }
                return function(b, c) { if (Array.isArray(b)) return b; if (Symbol.iterator in Object(b)) return a(b, c); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
            }(),
            J = y.Utils,
            h = J.getBounds,
            k = J.extend,
            q = J.updateClasses,
            E = J.defer,
            W = ["left", "top", "right", "bottom"];
        y.modules.push({
            position: function(a) {
                var b = this,
                    c = a.top,
                    d = a.left,
                    e = a.targetAttachment;
                if (!this.options.constraints) return !0;
                var f = this.cache("element-bounds", function() { return h(b.element) }),
                    g = f.height,
                    i = f.width;
                if (0 === i && 0 === g && void 0 !== this.lastSize) {
                    var j = this.lastSize;
                    i = j.width, g = j.height
                }
                var l = this.cache("target-bounds", function() { return b.getTargetBounds() }),
                    m = l.height,
                    n = l.width,
                    o = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(a) {
                    var b = a.outOfBoundsClass,
                        c = a.pinnedClass;
                    b && o.push(b), c && o.push(c)
                }), o.forEach(function(a) {
                    ["left", "top", "right", "bottom"].forEach(function(b) { o.push(a + "-" + b) })
                });
                var p = [],
                    r = k({}, e),
                    s = k({}, this.attachment);
                return this.options.constraints.forEach(function(a) {
                    var f = a.to,
                        h = a.attachment,
                        j = a.pin;
                    void 0 === h && (h = "");
                    var k = void 0,
                        l = void 0;
                    if (h.indexOf(" ") >= 0) {
                        var o = h.split(" "),
                            q = H(o, 2);
                        l = q[0], k = q[1]
                    } else k = l = h;
                    var t = w(b, f);
                    ("target" === l || "both" === l) && (c < t[1] && "top" === r.top && (c += m, r.top = "bottom"), c + g > t[3] && "bottom" === r.top && (c -= m, r.top = "top")), "together" === l && ("top" === r.top && ("bottom" === s.top && c < t[1] ? (c += m, r.top = "bottom", c += g, s.top = "top") : "top" === s.top && c + g > t[3] && c - (g - m) >= t[1] && (c -= g - m, r.top = "bottom", s.top = "bottom")), "bottom" === r.top && ("top" === s.top && c + g > t[3] ? (c -= m, r.top = "top", c -= g, s.top = "bottom") : "bottom" === s.top && c < t[1] && c + (2 * g - m) <= t[3] && (c += g - m, r.top = "top", s.top = "top")), "middle" === r.top && (c + g > t[3] && "top" === s.top ? (c -= g, s.top = "bottom") : c < t[1] && "bottom" === s.top && (c += g, s.top = "top"))), ("target" === k || "both" === k) && (d < t[0] && "left" === r.left && (d += n, r.left = "right"), d + i > t[2] && "right" === r.left && (d -= n, r.left = "left")), "together" === k && (d < t[0] && "left" === r.left ? "right" === s.left ? (d += n, r.left = "right", d += i, s.left = "left") : "left" === s.left && (d += n, r.left = "right", d -= i, s.left = "right") : d + i > t[2] && "right" === r.left ? "left" === s.left ? (d -= n, r.left = "left", d -= i, s.left = "right") : "right" === s.left && (d -= n, r.left = "left", d += i, s.left = "left") : "center" === r.left && (d + i > t[2] && "left" === s.left ? (d -= i, s.left = "right") : d < t[0] && "right" === s.left && (d += i, s.left = "left"))), ("element" === l || "both" === l) && (c < t[1] && "bottom" === s.top && (c += g, s.top = "top"), c + g > t[3] && "top" === s.top && (c -= g, s.top = "bottom")), ("element" === k || "both" === k) && (d < t[0] && ("right" === s.left ? (d += i, s.left = "left") : "center" === s.left && (d += i / 2, s.left = "left")), d + i > t[2] && ("left" === s.left ? (d -= i, s.left = "right") : "center" === s.left && (d -= i / 2, s.left = "right"))), "string" == typeof j ? j = j.split(",").map(function(a) { return a.trim() }) : !0 === j && (j = ["top", "left", "right", "bottom"]), j = j || [];
                    var u = [],
                        v = [];
                    c < t[1] && (j.indexOf("top") >= 0 ? (c = t[1], u.push("top")) : v.push("top")), c + g > t[3] && (j.indexOf("bottom") >= 0 ? (c = t[3] - g, u.push("bottom")) : v.push("bottom")), d < t[0] && (j.indexOf("left") >= 0 ? (d = t[0], u.push("left")) : v.push("left")), d + i > t[2] && (j.indexOf("right") >= 0 ? (d = t[2] - i, u.push("right")) : v.push("right")), u.length && function() {
                        var a = void 0;
                        a = void 0 !== b.options.pinnedClass ? b.options.pinnedClass : b.getClass("pinned"), p.push(a), u.forEach(function(b) { p.push(a + "-" + b) })
                    }(), v.length && function() {
                        var a = void 0;
                        a = void 0 !== b.options.outOfBoundsClass ? b.options.outOfBoundsClass : b.getClass("out-of-bounds"), p.push(a), v.forEach(function(b) { p.push(a + "-" + b) })
                    }(), (u.indexOf("left") >= 0 || u.indexOf("right") >= 0) && (s.left = r.left = !1), (u.indexOf("top") >= 0 || u.indexOf("bottom") >= 0) && (s.top = r.top = !1), (r.top !== e.top || r.left !== e.left || s.top !== b.attachment.top || s.left !== b.attachment.left) && (b.updateAttachClasses(s, r), b.trigger("update", { attachment: s, targetAttachment: r }))
                }), E(function() {!1 !== b.options.addTargetClasses && q(b.target, p, o), q(b.element, p, o) }), { top: c, left: d }
            }
        });
        var J = y.Utils,
            h = J.getBounds,
            q = J.updateClasses,
            E = J.defer;
        y.modules.push({
            position: function(a) {
                var b = this,
                    c = a.top,
                    d = a.left,
                    e = this.cache("element-bounds", function() { return h(b.element) }),
                    f = e.height,
                    g = e.width,
                    i = this.getTargetBounds(),
                    j = c + f,
                    k = d + g,
                    l = [];
                c <= i.bottom && j >= i.top && ["left", "right"].forEach(function(a) {
                    var b = i[a];
                    (b === d || b === k) && l.push(a)
                }), d <= i.right && k >= i.left && ["top", "bottom"].forEach(function(a) {
                    var b = i[a];
                    (b === c || b === j) && l.push(a)
                });
                var m = [],
                    n = [],
                    o = ["left", "top", "right", "bottom"];
                return m.push(this.getClass("abutted")), o.forEach(function(a) { m.push(b.getClass("abutted") + "-" + a) }), l.length && n.push(this.getClass("abutted")), l.forEach(function(a) { n.push(b.getClass("abutted") + "-" + a) }), E(function() {!1 !== b.options.addTargetClasses && q(b.target, n, m), q(b.element, n, m) }), !0
            }
        });
        var H = function() {
            function a(a, b) {
                var c = [],
                    d = !0,
                    e = !1,
                    f = void 0;
                try { for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0); } catch (a) { e = !0, f = a } finally { try {!d && h.return && h.return() } finally { if (e) throw f } }
                return c
            }
            return function(b, c) { if (Array.isArray(b)) return b; if (Symbol.iterator in Object(b)) return a(b, c); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
        }();
        return y.modules.push({
            position: function(a) {
                var b = a.top,
                    c = a.left;
                if (this.options.shift) {
                    var d = this.options.shift;
                    "function" == typeof this.options.shift && (d = this.options.shift.call(this, { top: b, left: c }));
                    var e = void 0,
                        f = void 0;
                    if ("string" == typeof d) {
                        d = d.split(" "), d[1] = d[1] || d[0];
                        var g = d,
                            h = H(g, 2);
                        e = h[0], f = h[1], e = parseFloat(e, 10), f = parseFloat(f, 10)
                    } else e = d.top, f = d.left;
                    return b += e, c += f, { top: b, left: c }
                }
            }
        }), V
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function(a) { var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(jQuery),
function() {
    function a(a, b) { if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !b || "object" != typeof b && "function" != typeof b ? a : b }

    function b(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    function c(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") }
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) { return typeof a } : function(a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a },
        e = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) { return c && a(b.prototype, c), d && a(b, d), b }
        }(),
        f = function(a) {
            function b(a) { return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase() }

            function c(a) { return (a[0] || a).nodeType }

            function d() { return { bindType: h.end, delegateType: h.end, handle: function(b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } } }

            function e() {
                if (window.QUnit) return !1;
                var a = document.createElement("bootstrap");
                for (var b in j)
                    if (void 0 !== a.style[b]) return { end: j[b] };
                return !1
            }

            function f(b) {
                var c = this,
                    d = !1;
                return a(this).one(k.TRANSITION_END, function() { d = !0 }), setTimeout(function() { d || k.triggerTransitionEnd(c) }, b), this
            }

            function g() { h = e(), a.fn.emulateTransitionEnd = f, k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d()) }
            var h = !1,
                i = 1e6,
                j = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
                k = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(a) { do { a += ~~(Math.random() * i) } while (document.getElementById(a)); return a },
                    getSelectorFromElement: function(a) { var b = a.getAttribute("data-target"); return b || (b = a.getAttribute("href") || "", b = /^#[a-z]/i.test(b) ? b : null), b },
                    reflow: function(a) { return a.offsetHeight },
                    triggerTransitionEnd: function(b) { a(b).trigger(h.end) },
                    supportsTransitionEnd: function() { return Boolean(h) },
                    typeCheckConfig: function(a, d, e) {
                        for (var f in e)
                            if (e.hasOwnProperty(f)) {
                                var g = e[f],
                                    h = d[f],
                                    i = h && c(h) ? "element" : b(h);
                                if (!new RegExp(g).test(i)) throw new Error(a.toUpperCase() + ': Option "' + f + '" provided type "' + i + '" but expected type "' + g + '".')
                            }
                    }
                };
            return g(), k
        }(jQuery),
        g = (function(a) {
            var b = "alert",
                d = "4.0.0-alpha.6",
                g = "bs.alert",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = { DISMISS: '[data-dismiss="alert"]' },
                m = { CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + i },
                n = { ALERT: "alert", FADE: "fade", SHOW: "show" },
                o = function() {
                    function b(a) { c(this, b), this._element = a }
                    return b.prototype.close = function(a) {
                        a = a || this._element;
                        var b = this._getRootElement(a);
                        this._triggerCloseEvent(b).isDefaultPrevented() || this._removeElement(b)
                    }, b.prototype.dispose = function() { a.removeData(this._element, g), this._element = null }, b.prototype._getRootElement = function(b) {
                        var c = f.getSelectorFromElement(b),
                            d = !1;
                        return c && (d = a(c)[0]), d || (d = a(b).closest("." + n.ALERT)[0]), d
                    }, b.prototype._triggerCloseEvent = function(b) { var c = a.Event(m.CLOSE); return a(b).trigger(c), c }, b.prototype._removeElement = function(b) { var c = this; return a(b).removeClass(n.SHOW), f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, function(a) { return c._destroyElement(b, a) }).emulateTransitionEnd(k) : void this._destroyElement(b) }, b.prototype._destroyElement = function(b) { a(b).detach().trigger(m.CLOSED).remove() }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data(g);
                            e || (e = new b(this), d.data(g, e)), "close" === c && e[c](this)
                        })
                    }, b._handleDismiss = function(a) { return function(b) { b && b.preventDefault(), a.close(this) } }, e(b, null, [{ key: "VERSION", get: function() { return d } }]), b
                }();
            a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o)), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() { return a.fn[b] = j, o._jQueryInterface }
        }(jQuery), function(a) {
            var b = "button",
                d = "4.0.0-alpha.6",
                f = "bs.button",
                g = "." + f,
                h = ".data-api",
                i = a.fn[b],
                j = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
                k = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" },
                l = { CLICK_DATA_API: "click" + g + h, FOCUS_BLUR_DATA_API: "focus" + g + h + " blur" + g + h },
                m = function() {
                    function b(a) { c(this, b), this._element = a }
                    return b.prototype.toggle = function() {
                        var b = !0,
                            c = a(this._element).closest(k.DATA_TOGGLE)[0];
                        if (c) {
                            var d = a(this._element).find(k.INPUT)[0];
                            if (d) {
                                if ("radio" === d.type)
                                    if (d.checked && a(this._element).hasClass(j.ACTIVE)) b = !1;
                                    else {
                                        var e = a(c).find(k.ACTIVE)[0];
                                        e && a(e).removeClass(j.ACTIVE)
                                    }
                                b && (d.checked = !a(this._element).hasClass(j.ACTIVE), a(d).trigger("change")), d.focus()
                            }
                        }
                        this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE)), b && a(this._element).toggleClass(j.ACTIVE)
                    }, b.prototype.dispose = function() { a.removeData(this._element, f), this._element = null }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this).data(f);
                            d || (d = new b(this), a(this).data(f, d)), "toggle" === c && d[c]()
                        })
                    }, e(b, null, [{ key: "VERSION", get: function() { return d } }]), b
                }();
            a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                b.preventDefault();
                var c = b.target;
                a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)), m._jQueryInterface.call(a(c), "toggle")
            }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                var c = a(b.target).closest(k.BUTTON)[0];
                a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type))
            }), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function() { return a.fn[b] = i, m._jQueryInterface }
        }(jQuery), function(a) {
            var b = "carousel",
                g = "4.0.0-alpha.6",
                h = "bs.carousel",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 600,
                m = 37,
                n = 39,
                o = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
                p = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
                q = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
                r = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, LOAD_DATA_API: "load" + i + j, CLICK_DATA_API: "click" + i + j },
                s = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item" },
                t = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
                u = function() {
                    function j(b, d) { c(this, j), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(d), this._element = a(b)[0], this._indicatorsElement = a(this._element).find(t.INDICATORS)[0], this._addEventListeners() }
                    return j.prototype.next = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(q.NEXT)
                    }, j.prototype.nextWhenVisible = function() { document.hidden || this.next() }, j.prototype.prev = function() {
                        if (this._isSliding) throw new Error("Carousel is sliding");
                        this._slide(q.PREVIOUS)
                    }, j.prototype.pause = function(b) { b || (this._isPaused = !0), a(this._element).find(t.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, j.prototype.cycle = function(a) { a || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, j.prototype.to = function(b) {
                        var c = this;
                        this._activeElement = a(this._element).find(t.ACTIVE_ITEM)[0];
                        var d = this._getItemIndex(this._activeElement);
                        if (!(b > this._items.length - 1 || b < 0)) {
                            if (this._isSliding) return void a(this._element).one(r.SLID, function() { return c.to(b) });
                            if (d === b) return this.pause(), void this.cycle();
                            var e = b > d ? q.NEXT : q.PREVIOUS;
                            this._slide(e, this._items[b])
                        }
                    }, j.prototype.dispose = function() { a(this._element).off(i), a.removeData(this._element, h), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, j.prototype._getConfig = function(c) { return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c }, j.prototype._addEventListeners = function() {
                        var b = this;
                        this._config.keyboard && a(this._element).on(r.KEYDOWN, function(a) { return b._keydown(a) }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || a(this._element).on(r.MOUSEENTER, function(a) { return b.pause(a) }).on(r.MOUSELEAVE, function(a) { return b.cycle(a) })
                    }, j.prototype._keydown = function(a) {
                        if (!/input|textarea/i.test(a.target.tagName)) switch (a.which) {
                            case m:
                                a.preventDefault(), this.prev();
                                break;
                            case n:
                                a.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, j.prototype._getItemIndex = function(b) { return this._items = a.makeArray(a(b).parent().find(t.ITEM)), this._items.indexOf(b) }, j.prototype._getItemByDirection = function(a, b) {
                        var c = a === q.NEXT,
                            d = a === q.PREVIOUS,
                            e = this._getItemIndex(b),
                            f = this._items.length - 1;
                        if ((d && 0 === e || c && e === f) && !this._config.wrap) return b;
                        var g = a === q.PREVIOUS ? -1 : 1,
                            h = (e + g) % this._items.length;
                        return -1 === h ? this._items[this._items.length - 1] : this._items[h]
                    }, j.prototype._triggerSlideEvent = function(b, c) { var d = a.Event(r.SLIDE, { relatedTarget: b, direction: c }); return a(this._element).trigger(d), d }, j.prototype._setActiveIndicatorElement = function(b) {
                        if (this._indicatorsElement) {
                            a(this._indicatorsElement).find(t.ACTIVE).removeClass(s.ACTIVE);
                            var c = this._indicatorsElement.children[this._getItemIndex(b)];
                            c && a(c).addClass(s.ACTIVE)
                        }
                    }, j.prototype._slide = function(b, c) {
                        var d = this,
                            e = a(this._element).find(t.ACTIVE_ITEM)[0],
                            g = c || e && this._getItemByDirection(b, e),
                            h = Boolean(this._interval),
                            i = void 0,
                            j = void 0,
                            k = void 0;
                        if (b === q.NEXT ? (i = s.LEFT, j = s.NEXT, k = q.LEFT) : (i = s.RIGHT, j = s.PREV, k = q.RIGHT), g && a(g).hasClass(s.ACTIVE)) return void(this._isSliding = !1);
                        if (!this._triggerSlideEvent(g, k).isDefaultPrevented() && e && g) {
                            this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(g);
                            var m = a.Event(r.SLID, { relatedTarget: g, direction: k });
                            f.supportsTransitionEnd() && a(this._element).hasClass(s.SLIDE) ? (a(g).addClass(j), f.reflow(g), a(e).addClass(i), a(g).addClass(i), a(e).one(f.TRANSITION_END, function() { a(g).removeClass(i + " " + j).addClass(s.ACTIVE), a(e).removeClass(s.ACTIVE + " " + j + " " + i), d._isSliding = !1, setTimeout(function() { return a(d._element).trigger(m) }, 0) }).emulateTransitionEnd(l)) : (a(e).removeClass(s.ACTIVE), a(g).addClass(s.ACTIVE), this._isSliding = !1, a(this._element).trigger(m)), h && this.cycle()
                        }
                    }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = a.extend({}, o, a(this).data());
                            "object" === (void 0 === b ? "undefined" : d(b)) && a.extend(e, b);
                            var f = "string" == typeof b ? b : e.slide;
                            if (c || (c = new j(this, e), a(this).data(h, c)), "number" == typeof b) c.to(b);
                            else if ("string" == typeof f) {
                                if (void 0 === c[f]) throw new Error('No method named "' + f + '"');
                                c[f]()
                            } else e.interval && (c.pause(), c.cycle())
                        })
                    }, j._dataApiClickHandler = function(b) {
                        var c = f.getSelectorFromElement(this);
                        if (c) {
                            var d = a(c)[0];
                            if (d && a(d).hasClass(s.CAROUSEL)) {
                                var e = a.extend({}, a(d).data(), a(this).data()),
                                    g = this.getAttribute("data-slide-to");
                                g && (e.interval = !1), j._jQueryInterface.call(a(d), e), g && a(d).data(h).to(g), b.preventDefault()
                            }
                        }
                    }, e(j, null, [{ key: "VERSION", get: function() { return g } }, { key: "Default", get: function() { return o } }]), j
                }();
            a(document).on(r.CLICK_DATA_API, t.DATA_SLIDE, u._dataApiClickHandler), a(window).on(r.LOAD_DATA_API, function() {
                a(t.DATA_RIDE).each(function() {
                    var b = a(this);
                    u._jQueryInterface.call(b, b.data())
                })
            }), a.fn[b] = u._jQueryInterface, a.fn[b].Constructor = u, a.fn[b].noConflict = function() { return a.fn[b] = k, u._jQueryInterface }
        }(jQuery), function(a) {
            var b = "collapse",
                g = "4.0.0-alpha.6",
                h = "bs.collapse",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 600,
                m = { toggle: !0, parent: "" },
                n = { toggle: "boolean", parent: "string" },
                o = { SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + j },
                p = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
                q = { WIDTH: "width", HEIGHT: "height" },
                r = { ACTIVES: ".card > .show, .card > .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
                s = function() {
                    function i(b, d) { c(this, i), this._isTransitioning = !1, this._element = b, this._config = this._getConfig(d), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle() }
                    return i.prototype.toggle = function() { a(this._element).hasClass(p.SHOW) ? this.hide() : this.show() }, i.prototype.show = function() {
                        var b = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (!a(this._element).hasClass(p.SHOW)) {
                            var c = void 0,
                                d = void 0;
                            if (this._parent && (c = a.makeArray(a(this._parent).find(r.ACTIVES)), c.length || (c = null)), !(c && (d = a(c).data(h)) && d._isTransitioning)) {
                                var e = a.Event(o.SHOW);
                                if (a(this._element).trigger(e), !e.isDefaultPrevented()) {
                                    c && (i._jQueryInterface.call(a(c), "hide"), d || a(c).data(h, null));
                                    var g = this._getDimension();
                                    a(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[g] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && a(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var j = function() { a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.SHOW), b._element.style[g] = "", b.setTransitioning(!1), a(b._element).trigger(o.SHOWN) };
                                    if (!f.supportsTransitionEnd()) return void j();
                                    var k = g[0].toUpperCase() + g.slice(1),
                                        m = "scroll" + k;
                                    a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(l), this._element.style[g] = this._element[m] + "px"
                                }
                            }
                        }
                    }, i.prototype.hide = function() {
                        var b = this;
                        if (this._isTransitioning) throw new Error("Collapse is transitioning");
                        if (a(this._element).hasClass(p.SHOW)) {
                            var c = a.Event(o.HIDE);
                            if (a(this._element).trigger(c), !c.isDefaultPrevented()) {
                                var d = this._getDimension(),
                                    e = d === q.WIDTH ? "offsetWidth" : "offsetHeight";
                                this._element.style[d] = this._element[e] + "px", f.reflow(this._element), a(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && a(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var g = function() { b.setTransitioning(!1), a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(o.HIDDEN) };
                                return this._element.style[d] = "", f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : void g()
                            }
                        }
                    }, i.prototype.setTransitioning = function(a) { this._isTransitioning = a }, i.prototype.dispose = function() { a.removeData(this._element, h), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, i.prototype._getConfig = function(c) { return c = a.extend({}, m, c), c.toggle = Boolean(c.toggle), f.typeCheckConfig(b, c, n), c }, i.prototype._getDimension = function() { return a(this._element).hasClass(q.WIDTH) ? q.WIDTH : q.HEIGHT }, i.prototype._getParent = function() {
                        var b = this,
                            c = a(this._config.parent)[0],
                            d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return a(c).find(d).each(function(a, c) { b._addAriaAndCollapsedClass(i._getTargetFromElement(c), [c]) }), c
                    }, i.prototype._addAriaAndCollapsedClass = function(b, c) {
                        if (b) {
                            var d = a(b).hasClass(p.SHOW);
                            b.setAttribute("aria-expanded", d), c.length && a(c).toggleClass(p.COLLAPSED, !d).attr("aria-expanded", d)
                        }
                    }, i._getTargetFromElement = function(b) { var c = f.getSelectorFromElement(b); return c ? a(c)[0] : null }, i._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this),
                                e = c.data(h),
                                f = a.extend({}, m, c.data(), "object" === (void 0 === b ? "undefined" : d(b)) && b);
                            if (!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || (e = new i(this, f), c.data(h, e)), "string" == typeof b) {
                                if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                e[b]()
                            }
                        })
                    }, e(i, null, [{ key: "VERSION", get: function() { return g } }, { key: "Default", get: function() { return m } }]), i
                }();
            a(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE, function(b) {
                b.preventDefault();
                var c = s._getTargetFromElement(this),
                    d = a(c).data(h),
                    e = d ? "toggle" : a(this).data();
                s._jQueryInterface.call(a(c), e)
            }), a.fn[b] = s._jQueryInterface, a.fn[b].Constructor = s, a.fn[b].noConflict = function() { return a.fn[b] = k, s._jQueryInterface }
        }(jQuery), function(a) {
            var b = "dropdown",
                d = "4.0.0-alpha.6",
                g = "bs.dropdown",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 27,
                l = 38,
                m = 40,
                n = 3,
                o = { HIDE: "hide" + h, HIDDEN: "hidden" + h, SHOW: "show" + h, SHOWN: "shown" + h, CLICK: "click" + h, CLICK_DATA_API: "click" + h + i, FOCUSIN_DATA_API: "focusin" + h + i, KEYDOWN_DATA_API: "keydown" + h + i },
                p = { BACKDROP: "dropdown-backdrop", DISABLED: "disabled", SHOW: "show" },
                q = { BACKDROP: ".dropdown-backdrop", DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", ROLE_MENU: '[role="menu"]', ROLE_LISTBOX: '[role="listbox"]', NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a' },
                r = function() {
                    function b(a) { c(this, b), this._element = a, this._addEventListeners() }
                    return b.prototype.toggle = function() {
                        if (this.disabled || a(this).hasClass(p.DISABLED)) return !1;
                        var c = b._getParentFromElement(this),
                            d = a(c).hasClass(p.SHOW);
                        if (b._clearMenus(), d) return !1;
                        if ("ontouchstart" in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                            var e = document.createElement("div");
                            e.className = p.BACKDROP, a(e).insertBefore(this), a(e).on("click", b._clearMenus)
                        }
                        var f = { relatedTarget: this },
                            g = a.Event(o.SHOW, f);
                        return a(c).trigger(g), !g.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), a(c).toggleClass(p.SHOW), a(c).trigger(a.Event(o.SHOWN, f)), !1)
                    }, b.prototype.dispose = function() { a.removeData(this._element, g), a(this._element).off(h), this._element = null }, b.prototype._addEventListeners = function() { a(this._element).on(o.CLICK, this.toggle) }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this).data(g);
                            if (d || (d = new b(this), a(this).data(g, d)), "string" == typeof c) {
                                if (void 0 === d[c]) throw new Error('No method named "' + c + '"');
                                d[c].call(this)
                            }
                        })
                    }, b._clearMenus = function(c) {
                        if (!c || c.which !== n) {
                            var d = a(q.BACKDROP)[0];
                            d && d.parentNode.removeChild(d);
                            for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                                var g = b._getParentFromElement(e[f]),
                                    h = { relatedTarget: e[f] };
                                if (a(g).hasClass(p.SHOW) && !(c && ("click" === c.type && /input|textarea/i.test(c.target.tagName) || "focusin" === c.type) && a.contains(g, c.target))) {
                                    var i = a.Event(o.HIDE, h);
                                    a(g).trigger(i), i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"), a(g).removeClass(p.SHOW).trigger(a.Event(o.HIDDEN, h)))
                                }
                            }
                        }
                    }, b._getParentFromElement = function(b) {
                        var c = void 0,
                            d = f.getSelectorFromElement(b);
                        return d && (c = a(d)[0]), c || b.parentNode
                    }, b._dataApiKeydownHandler = function(c) {
                        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(), c.stopPropagation(), !this.disabled && !a(this).hasClass(p.DISABLED))) {
                            var d = b._getParentFromElement(this),
                                e = a(d).hasClass(p.SHOW);
                            if (!e && c.which !== k || e && c.which === k) {
                                if (c.which === k) {
                                    var f = a(d).find(q.DATA_TOGGLE)[0];
                                    a(f).trigger("focus")
                                }
                                return void a(this).trigger("click")
                            }
                            var g = a(d).find(q.VISIBLE_ITEMS).get();
                            if (g.length) {
                                var h = g.indexOf(c.target);
                                c.which === l && h > 0 && h--, c.which === m && h < g.length - 1 && h++, h < 0 && (h = 0), g[h].focus()
                            }
                        }
                    }, e(b, null, [{ key: "VERSION", get: function() { return d } }]), b
                }();
            a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API + " " + o.FOCUSIN_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) { a.stopPropagation() }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() { return a.fn[b] = j, r._jQueryInterface }
        }(jQuery), function(a) {
            var b = "modal",
                g = "4.0.0-alpha.6",
                h = "bs.modal",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 300,
                m = 150,
                n = 27,
                o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                p = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                q = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, FOCUSIN: "focusin" + i, RESIZE: "resize" + i, CLICK_DISMISS: "click.dismiss" + i, KEYDOWN_DISMISS: "keydown.dismiss" + i, MOUSEUP_DISMISS: "mouseup.dismiss" + i, MOUSEDOWN_DISMISS: "mousedown.dismiss" + i, CLICK_DATA_API: "click" + i + j },
                r = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show" },
                s = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top" },
                t = function() {
                    function j(b, d) { c(this, j), this._config = this._getConfig(d), this._element = b, this._dialog = a(b).find(s.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0 }
                    return j.prototype.toggle = function(a) { return this._isShown ? this.hide() : this.show(a) }, j.prototype.show = function(b) {
                        var c = this;
                        this._isTransitioning, f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) && (this._isTransitioning = !0);
                        var d = a.Event(q.SHOW, { relatedTarget: b });
                        a(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), a(document.body).addClass(r.OPEN), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on(q.CLICK_DISMISS, s.DATA_DISMISS, function(a) { return c.hide(a) }), a(this._dialog).on(q.MOUSEDOWN_DISMISS, function() { a(c._element).one(q.MOUSEUP_DISMISS, function(b) { a(b.target).is(c._element) && (c._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return c._showElement(b) }))
                    }, j.prototype.hide = function(b) {
                        var c = this;
                        b && b.preventDefault(), this._isTransitioning;
                        var d = f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE);
                        d && (this._isTransitioning = !0);
                        var e = a.Event(q.HIDE);
                        a(this._element).trigger(e), this._isShown && !e.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), a(document).off(q.FOCUSIN), a(this._element).removeClass(r.SHOW), a(this._element).off(q.CLICK_DISMISS), a(this._dialog).off(q.MOUSEDOWN_DISMISS), d ? a(this._element).one(f.TRANSITION_END, function(a) { return c._hideModal(a) }).emulateTransitionEnd(l) : this._hideModal())
                    }, j.prototype.dispose = function() { a.removeData(this._element, h), a(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null }, j.prototype._getConfig = function(c) { return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c }, j.prototype._showElement = function(b) {
                        var c = this,
                            d = f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, d && f.reflow(this._element), a(this._element).addClass(r.SHOW), this._config.focus && this._enforceFocus();
                        var e = a.Event(q.SHOWN, { relatedTarget: b }),
                            g = function() { c._config.focus && c._element.focus(), c._isTransitioning = !1, a(c._element).trigger(e) };
                        d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g()
                    }, j.prototype._enforceFocus = function() {
                        var b = this;
                        a(document).off(q.FOCUSIN).on(q.FOCUSIN, function(c) { document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus() })
                    }, j.prototype._setEscapeEvent = function() {
                        var b = this;
                        this._isShown && this._config.keyboard ? a(this._element).on(q.KEYDOWN_DISMISS, function(a) { a.which === n && b.hide() }) : this._isShown || a(this._element).off(q.KEYDOWN_DISMISS)
                    }, j.prototype._setResizeEvent = function() {
                        var b = this;
                        this._isShown ? a(window).on(q.RESIZE, function(a) { return b._handleUpdate(a) }) : a(window).off(q.RESIZE)
                    }, j.prototype._hideModal = function() {
                        var b = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function() { a(document.body).removeClass(r.OPEN), b._resetAdjustments(), b._resetScrollbar(), a(b._element).trigger(q.HIDDEN) })
                    }, j.prototype._removeBackdrop = function() { this._backdrop && (a(this._backdrop).remove(), this._backdrop = null) }, j.prototype._showBackdrop = function(b) {
                        var c = this,
                            d = a(this._element).hasClass(r.FADE) ? r.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var e = f.supportsTransitionEnd() && d;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = r.BACKDROP, d && a(this._backdrop).addClass(d), a(this._backdrop).appendTo(document.body), a(this._element).on(q.CLICK_DISMISS, function(a) { return c._ignoreBackdropClick ? void(c._ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide())) }), e && f.reflow(this._backdrop), a(this._backdrop).addClass(r.SHOW), !b) return;
                            if (!e) return void b();
                            a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(m)
                        } else if (!this._isShown && this._backdrop) {
                            a(this._backdrop).removeClass(r.SHOW);
                            var g = function() { c._removeBackdrop(), b && b() };
                            f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(m) : g()
                        } else b && b()
                    }, j.prototype._handleUpdate = function() { this._adjustDialog() }, j.prototype._adjustDialog = function() { var a = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, j.prototype._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, j.prototype._checkScrollbar = function() { this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth() }, j.prototype._setScrollbar = function() {
                        var b = parseInt(a(s.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px")
                    }, j.prototype._resetScrollbar = function() { document.body.style.paddingRight = this._originalBodyPadding }, j.prototype._getScrollbarWidth = function() {
                        var a = document.createElement("div");
                        a.className = r.SCROLLBAR_MEASURER, document.body.appendChild(a);
                        var b = a.offsetWidth - a.clientWidth;
                        return document.body.removeChild(a), b
                    }, j._jQueryInterface = function(b, c) {
                        return this.each(function() {
                            var e = a(this).data(h),
                                f = a.extend({}, j.Default, a(this).data(), "object" === (void 0 === b ? "undefined" : d(b)) && b);
                            if (e || (e = new j(this, f), a(this).data(h, e)), "string" == typeof b) {
                                if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                e[b](c)
                            } else f.show && e.show(c)
                        })
                    }, e(j, null, [{ key: "VERSION", get: function() { return g } }, { key: "Default", get: function() { return o } }]), j
                }();
            a(document).on(q.CLICK_DATA_API, s.DATA_TOGGLE, function(b) {
                var c = this,
                    d = void 0,
                    e = f.getSelectorFromElement(this);
                e && (d = a(e)[0]);
                var g = a(d).data(h) ? "toggle" : a.extend({}, a(d).data(), a(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || b.preventDefault();
                var i = a(d).one(q.SHOW, function(b) { b.isDefaultPrevented() || i.one(q.HIDDEN, function() { a(c).is(":visible") && c.focus() }) });
                t._jQueryInterface.call(a(d), g, this)
            }), a.fn[b] = t._jQueryInterface, a.fn[b].Constructor = t, a.fn[b].noConflict = function() { return a.fn[b] = k, t._jQueryInterface }
        }(jQuery), function(a) {
            var b = "scrollspy",
                g = "4.0.0-alpha.6",
                h = "bs.scrollspy",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = { offset: 10, method: "auto", target: "" },
                m = { offset: "number", method: "string", target: "(string|element)" },
                n = { ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + j },
                o = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", NAV_LINK: "nav-link", NAV: "nav", ACTIVE: "active" },
                p = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", LIST_ITEM: ".list-item", LI: "li", LI_DROPDOWN: "li.dropdown", NAV_LINKS: ".nav-link", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
                q = { OFFSET: "offset", POSITION: "position" },
                r = function() {
                    function j(b, d) {
                        var e = this;
                        c(this, j), this._element = b, this._scrollElement = "BODY" === b.tagName ? window : b, this._config = this._getConfig(d), this._selector = this._config.target + " " + p.NAV_LINKS + "," + this._config.target + " " + p.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a(this._scrollElement).on(n.SCROLL, function(a) { return e._process(a) }), this.refresh(), this._process()
                    }
                    return j.prototype.refresh = function() {
                        var b = this,
                            c = this._scrollElement !== this._scrollElement.window ? q.POSITION : q.OFFSET,
                            d = "auto" === this._config.method ? c : this._config.method,
                            e = d === q.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), a.makeArray(a(this._selector)).map(function(b) {
                            var c = void 0,
                                g = f.getSelectorFromElement(b);
                            return g && (c = a(g)[0]), c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null
                        }).filter(function(a) { return a }).sort(function(a, b) { return a[0] - b[0] }).forEach(function(a) { b._offsets.push(a[0]), b._targets.push(a[1]) })
                    }, j.prototype.dispose = function() { a.removeData(this._element, h), a(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, j.prototype._getConfig = function(c) {
                        if (c = a.extend({}, l, c), "string" != typeof c.target) {
                            var d = a(c.target).attr("id");
                            d || (d = f.getUID(b), a(c.target).attr("id", d)), c.target = "#" + d
                        }
                        return f.typeCheckConfig(b, c, m), c
                    }, j.prototype._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, j.prototype._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, j.prototype._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight }, j.prototype._process = function() {
                        var a = this._getScrollTop() + this._config.offset,
                            b = this._getScrollHeight(),
                            c = this._config.offset + b - this._getOffsetHeight();
                        if (this._scrollHeight !== b && this.refresh(), a >= c) { var d = this._targets[this._targets.length - 1]; return void(this._activeTarget !== d && this._activate(d)) }
                        if (this._activeTarget && a < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]) && this._activate(this._targets[e])
                    }, j.prototype._activate = function(b) {
                        this._activeTarget = b, this._clear();
                        var c = this._selector.split(",");
                        c = c.map(function(a) { return a + '[data-target="' + b + '"],' + a + '[href="' + b + '"]' });
                        var d = a(c.join(","));
                        d.hasClass(o.DROPDOWN_ITEM) ? (d.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(o.ACTIVE), d.addClass(o.ACTIVE)) : d.parents(p.LI).find("> " + p.NAV_LINKS).addClass(o.ACTIVE), a(this._scrollElement).trigger(n.ACTIVATE, { relatedTarget: b })
                    }, j.prototype._clear = function() { a(this._selector).filter(p.ACTIVE).removeClass(o.ACTIVE) }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = "object" === (void 0 === b ? "undefined" : d(b)) && b;
                            if (c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b) {
                                if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }, e(j, null, [{ key: "VERSION", get: function() { return g } }, { key: "Default", get: function() { return l } }]), j
                }();
            a(window).on(n.LOAD_DATA_API, function() {
                for (var b = a.makeArray(a(p.DATA_SPY)), c = b.length; c--;) {
                    var d = a(b[c]);
                    r._jQueryInterface.call(d, d.data())
                }
            }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() { return a.fn[b] = k, r._jQueryInterface }
        }(jQuery), function(a) {
            var b = "tab",
                d = "4.0.0-alpha.6",
                g = "bs.tab",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = { HIDE: "hide" + h, HIDDEN: "hidden" + h, SHOW: "show" + h, SHOWN: "shown" + h, CLICK_DATA_API: "click" + h + i },
                m = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" },
                n = { A: "a", LI: "li", DROPDOWN: ".dropdown", LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)", FADE_CHILD: "> .nav-item .fade, > .fade", ACTIVE: ".active", ACTIVE_CHILD: "> .nav-item > .active, > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" },
                o = function() {
                    function b(a) { c(this, b), this._element = a }
                    return b.prototype.show = function() {
                        var b = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && a(this._element).hasClass(m.ACTIVE) || a(this._element).hasClass(m.DISABLED))) {
                            var c = void 0,
                                d = void 0,
                                e = a(this._element).closest(n.LIST)[0],
                                g = f.getSelectorFromElement(this._element);
                            e && (d = a.makeArray(a(e).find(n.ACTIVE)), d = d[d.length - 1]);
                            var h = a.Event(l.HIDE, { relatedTarget: this._element }),
                                i = a.Event(l.SHOW, { relatedTarget: d });
                            if (d && a(d).trigger(h), a(this._element).trigger(i), !i.isDefaultPrevented() && !h.isDefaultPrevented()) {
                                g && (c = a(g)[0]), this._activate(this._element, e);
                                var j = function() {
                                    var c = a.Event(l.HIDDEN, { relatedTarget: b._element }),
                                        e = a.Event(l.SHOWN, { relatedTarget: d });
                                    a(d).trigger(c), a(b._element).trigger(e)
                                };
                                c ? this._activate(c, c.parentNode, j) : j()
                            }
                        }
                    }, b.prototype.dispose = function() { a.removeClass(this._element, g), this._element = null }, b.prototype._activate = function(b, c, d) {
                        var e = this,
                            g = a(c).find(n.ACTIVE_CHILD)[0],
                            h = d && f.supportsTransitionEnd() && (g && a(g).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0])),
                            i = function() { return e._transitionComplete(b, g, h, d) };
                        g && h ? a(g).one(f.TRANSITION_END, i).emulateTransitionEnd(k) : i(), g && a(g).removeClass(m.SHOW)
                    }, b.prototype._transitionComplete = function(b, c, d, e) {
                        if (c) {
                            a(c).removeClass(m.ACTIVE);
                            var g = a(c.parentNode).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                            g && a(g).removeClass(m.ACTIVE), c.setAttribute("aria-expanded", !1)
                        }
                        if (a(b).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0), d ? (f.reflow(b), a(b).addClass(m.SHOW)) : a(b).removeClass(m.FADE), b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU)) {
                            var h = a(b).closest(n.DROPDOWN)[0];
                            h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0)
                        }
                        e && e()
                    }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data(g);
                            if (e || (e = new b(this), d.data(g, e)), "string" == typeof c) {
                                if (void 0 === e[c]) throw new Error('No method named "' + c + '"');
                                e[c]()
                            }
                        })
                    }, e(b, null, [{ key: "VERSION", get: function() { return d } }]), b
                }();
            a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) { b.preventDefault(), o._jQueryInterface.call(a(this), "show") }), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() { return a.fn[b] = j, o._jQueryInterface }
        }(jQuery), function(a) {
            if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var b = "tooltip",
                g = "4.0.0-alpha.6",
                h = "bs.tooltip",
                i = "." + h,
                j = a.fn[b],
                k = 150,
                l = "bs-tether",
                m = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: "0 0", constraints: [], container: !1 },
                n = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array", container: "(string|element|boolean)" },
                o = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
                p = { SHOW: "show", OUT: "out" },
                q = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
                r = { FADE: "fade", SHOW: "show" },
                s = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner" },
                t = { element: !1, enabled: !1 },
                u = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
                v = function() {
                    function j(a, b) { c(this, j), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners() }
                    return j.prototype.enable = function() { this._isEnabled = !0 }, j.prototype.disable = function() { this._isEnabled = !1 }, j.prototype.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, j.prototype.toggle = function(b) {
                        if (b) {
                            var c = this.constructor.DATA_KEY,
                                d = a(b.currentTarget).data(c);
                            d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                        } else {
                            if (a(this.getTipElement()).hasClass(r.SHOW)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, j.prototype.dispose = function() { clearTimeout(this._timeout), this.cleanupTether(), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), a(this.element).closest(".modal").off("hide.bs.modal"), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null }, j.prototype.show = function() {
                        var b = this;
                        if ("none" === a(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var c = a.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            this._isTransitioning, a(this.element).trigger(c);
                            var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                            if (c.isDefaultPrevented() || !d) return;
                            var e = this.getTipElement(),
                                g = f.getUID(this.constructor.NAME);
                            e.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), this.config.animation && a(e).addClass(r.FADE);
                            var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement,
                                i = this._getAttachment(h),
                                k = !1 === this.config.container ? document.body : a(this.config.container);
                            a(e).data(this.constructor.DATA_KEY, this).appendTo(k), a(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: i, element: e, target: this.element, classes: t, classPrefix: l, offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 }), f.reflow(e), this._tether.position(), a(e).addClass(r.SHOW);
                            var m = function() {
                                var c = b._hoverState;
                                b._hoverState = null, b._isTransitioning = !1, a(b.element).trigger(b.constructor.Event.SHOWN), c === p.OUT && b._leave(null, b)
                            };
                            if (f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE)) return this._isTransitioning = !0, void a(this.tip).one(f.TRANSITION_END, m).emulateTransitionEnd(j._TRANSITION_DURATION);
                            m()
                        }
                    }, j.prototype.hide = function(b) {
                        var c = this,
                            d = this.getTipElement(),
                            e = a.Event(this.constructor.Event.HIDE);
                        this._isTransitioning;
                        var g = function() { c._hoverState !== p.SHOW && d.parentNode && d.parentNode.removeChild(d), c.element.removeAttribute("aria-describedby"), a(c.element).trigger(c.constructor.Event.HIDDEN), c._isTransitioning = !1, c.cleanupTether(), b && b() };
                        a(this.element).trigger(e), e.isDefaultPrevented() || (a(d).removeClass(r.SHOW), this._activeTrigger[u.CLICK] = !1, this._activeTrigger[u.FOCUS] = !1, this._activeTrigger[u.HOVER] = !1, f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE) ? (this._isTransitioning = !0, a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(k)) : g(), this._hoverState = "")
                    }, j.prototype.isWithContent = function() { return Boolean(this.getTitle()) }, j.prototype.getTipElement = function() { return this.tip = this.tip || a(this.config.template)[0] }, j.prototype.setContent = function() {
                        var b = a(this.getTipElement());
                        this.setElementContent(b.find(s.TOOLTIP_INNER), this.getTitle()), b.removeClass(r.FADE + " " + r.SHOW), this.cleanupTether()
                    }, j.prototype.setElementContent = function(b, c) { var e = this.config.html; "object" === (void 0 === c ? "undefined" : d(c)) && (c.nodeType || c.jquery) ? e ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()): b[e ? "html" : "text"](c) }, j.prototype.getTitle = function() { var a = this.element.getAttribute("data-original-title"); return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a }, j.prototype.cleanupTether = function() { this._tether && this._tether.destroy() }, j.prototype._getAttachment = function(a) { return o[a.toUpperCase()] }, j.prototype._setListeners = function() {
                        var b = this;
                        this.config.trigger.split(" ").forEach(function(c) {
                            if ("click" === c) a(b.element).on(b.constructor.Event.CLICK, b.config.selector, function(a) { return b.toggle(a) });
                            else if (c !== u.MANUAL) {
                                var d = c === u.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN,
                                    e = c === u.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                                a(b.element).on(d, b.config.selector, function(a) { return b._enter(a) }).on(e, b.config.selector, function(a) { return b._leave(a) })
                            }
                            a(b.element).closest(".modal").on("hide.bs.modal", function() { return b.hide() })
                        }), this.config.selector ? this.config = a.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
                    }, j.prototype._fixTitle = function() {
                        var a = d(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, j.prototype._enter = function(b, c) { var d = this.constructor.DATA_KEY; return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? u.FOCUS : u.HOVER] = !0), a(c.getTipElement()).hasClass(r.SHOW) || c._hoverState === p.SHOW ? void(c._hoverState = p.SHOW) : (clearTimeout(c._timeout), c._hoverState = p.SHOW, c.config.delay && c.config.delay.show ? void(c._timeout = setTimeout(function() { c._hoverState === p.SHOW && c.show() }, c.config.delay.show)) : void c.show()) }, j.prototype._leave = function(b, c) { var d = this.constructor.DATA_KEY; if (c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? u.FOCUS : u.HOVER] = !1), !c._isWithActiveTrigger()) return clearTimeout(c._timeout), c._hoverState = p.OUT, c.config.delay && c.config.delay.hide ? void(c._timeout = setTimeout(function() { c._hoverState === p.OUT && c.hide() }, c.config.delay.hide)) : void c.hide() }, j.prototype._isWithActiveTrigger = function() {
                        for (var a in this._activeTrigger)
                            if (this._activeTrigger[a]) return !0;
                        return !1
                    }, j.prototype._getConfig = function(c) { return c = a.extend({}, this.constructor.Default, a(this.element).data(), c), c.delay && "number" == typeof c.delay && (c.delay = { show: c.delay, hide: c.delay }), f.typeCheckConfig(b, c, this.constructor.DefaultType), c }, j.prototype._getDelegateConfig = function() {
                        var a = {};
                        if (this.config)
                            for (var b in this.config) this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                        return a
                    }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = "object" === (void 0 === b ? "undefined" : d(b)) && b;
                            if ((c || !/dispose|hide/.test(b)) && (c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b)) {
                                if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }, e(j, null, [{ key: "VERSION", get: function() { return g } }, { key: "Default", get: function() { return m } }, { key: "NAME", get: function() { return b } }, { key: "DATA_KEY", get: function() { return h } }, { key: "Event", get: function() { return q } }, { key: "EVENT_KEY", get: function() { return i } }, { key: "DefaultType", get: function() { return n } }]), j
                }();
            return a.fn[b] = v._jQueryInterface, a.fn[b].Constructor = v, a.fn[b].noConflict = function() { return a.fn[b] = j, v._jQueryInterface }, v
        }(jQuery));
    ! function(f) {
        var h = "popover",
            i = "4.0.0-alpha.6",
            j = "bs.popover",
            k = "." + j,
            l = f.fn[h],
            m = f.extend({}, g.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }),
            n = f.extend({}, g.DefaultType, { content: "(string|element|function)" }),
            o = { FADE: "fade", SHOW: "show" },
            p = { TITLE: ".popover-title", CONTENT: ".popover-content" },
            q = { HIDE: "hide" + k, HIDDEN: "hidden" + k, SHOW: "show" + k, SHOWN: "shown" + k, INSERTED: "inserted" + k, CLICK: "click" + k, FOCUSIN: "focusin" + k, FOCUSOUT: "focusout" + k, MOUSEENTER: "mouseenter" + k, MOUSELEAVE: "mouseleave" + k },
            r = function(g) {
                function l() { return c(this, l), a(this, g.apply(this, arguments)) }
                return b(l, g), l.prototype.isWithContent = function() { return this.getTitle() || this._getContent() }, l.prototype.getTipElement = function() { return this.tip = this.tip || f(this.config.template)[0] }, l.prototype.setContent = function() {
                    var a = f(this.getTipElement());
                    this.setElementContent(a.find(p.TITLE), this.getTitle()), this.setElementContent(a.find(p.CONTENT), this._getContent()), a.removeClass(o.FADE + " " + o.SHOW), this.cleanupTether()
                }, l.prototype._getContent = function() { return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content) }, l._jQueryInterface = function(a) {
                    return this.each(function() {
                        var b = f(this).data(j),
                            c = "object" === (void 0 === a ? "undefined" : d(a)) ? a : null;
                        if ((b || !/destroy|hide/.test(a)) && (b || (b = new l(this, c), f(this).data(j, b)), "string" == typeof a)) {
                            if (void 0 === b[a]) throw new Error('No method named "' + a + '"');
                            b[a]()
                        }
                    })
                }, e(l, null, [{ key: "VERSION", get: function() { return i } }, { key: "Default", get: function() { return m } }, { key: "NAME", get: function() { return h } }, { key: "DATA_KEY", get: function() { return j } }, { key: "Event", get: function() { return q } }, { key: "EVENT_KEY", get: function() { return k } }, { key: "DefaultType", get: function() { return n } }]), l
            }(g);
        f.fn[h] = r._jQueryInterface, f.fn[h].Constructor = r, f.fn[h].noConflict = function() { return f.fn[h] = l, r._jQueryInterface }
    }(jQuery)
}(),
function(a, b) {
    if ("function" == typeof define && define.amd) define(["exports", "module"], b);
    else if ("undefined" != typeof exports && "undefined" != typeof module) b(exports, module);
    else {
        var c = { exports: {} };
        b(c.exports, c), a.autosize = c.exports
    }
}(this, function(a, b) {
    "use strict";

    function c(a) {
        function b() { var b = window.getComputedStyle(a, null); "vertical" === b.resize ? a.style.resize = "none" : "both" === b.resize && (a.style.resize = "horizontal"), i = "content-box" === b.boxSizing ? -(parseFloat(b.paddingTop) + parseFloat(b.paddingBottom)) : parseFloat(b.borderTopWidth) + parseFloat(b.borderBottomWidth), isNaN(i) && (i = 0), h() }

        function c(b) {
            var c = a.style.width;
            a.style.width = "0px", a.offsetWidth, a.style.width = c, a.style.overflowY = b
        }

        function d(a) { for (var b = []; a && a.parentNode && a.parentNode instanceof Element;) a.parentNode.scrollTop && b.push({ node: a.parentNode, scrollTop: a.parentNode.scrollTop }), a = a.parentNode; return b }

        function e() {
            var b = a.style.height,
                c = d(a),
                e = document.documentElement && document.documentElement.scrollTop;
            a.style.height = "auto";
            var f = a.scrollHeight + i;
            return 0 === a.scrollHeight ? void(a.style.height = b) : (a.style.height = f + "px", j = a.clientWidth, c.forEach(function(a) { a.node.scrollTop = a.scrollTop }), void(e && (document.documentElement.scrollTop = e)))
        }

        function h() {
            e();
            var b = Math.round(parseFloat(a.style.height)),
                d = window.getComputedStyle(a, null),
                f = Math.round(parseFloat(d.height));
            if (f !== b ? "visible" !== d.overflowY && (c("visible"), e(), f = Math.round(parseFloat(window.getComputedStyle(a, null).height))) : "hidden" !== d.overflowY && (c("hidden"), e(), f = Math.round(parseFloat(window.getComputedStyle(a, null).height))), k !== f) { k = f; var h = g("autosize:resized"); try { a.dispatchEvent(h) } catch (a) {} }
        }
        if (a && a.nodeName && "TEXTAREA" === a.nodeName && !f.has(a)) {
            var i = null,
                j = a.clientWidth,
                k = null,
                l = function() { a.clientWidth !== j && h() },
                m = function(b) { window.removeEventListener("resize", l, !1), a.removeEventListener("input", h, !1), a.removeEventListener("keyup", h, !1), a.removeEventListener("autosize:destroy", m, !1), a.removeEventListener("autosize:update", h, !1), Object.keys(b).forEach(function(c) { a.style[c] = b[c] }), f.delete(a) }.bind(a, { height: a.style.height, resize: a.style.resize, overflowY: a.style.overflowY, overflowX: a.style.overflowX, wordWrap: a.style.wordWrap });
            a.addEventListener("autosize:destroy", m, !1), "onpropertychange" in a && "oninput" in a && a.addEventListener("keyup", h, !1), window.addEventListener("resize", l, !1), a.addEventListener("input", h, !1), a.addEventListener("autosize:update", h, !1), a.style.overflowX = "hidden", a.style.wordWrap = "break-word", f.set(a, { destroy: m, update: h }), b()
        }
    }

    function d(a) {
        var b = f.get(a);
        b && b.destroy()
    }

    function e(a) {
        var b = f.get(a);
        b && b.update()
    }
    var f = "function" == typeof Map ? new Map : function() {
            var a = [],
                b = [];
            return {
                has: function(b) { return a.indexOf(b) > -1 },
                get: function(c) { return b[a.indexOf(c)] },
                set: function(c, d) {-1 === a.indexOf(c) && (a.push(c), b.push(d)) },
                delete: function(c) {
                    var d = a.indexOf(c);
                    d > -1 && (a.splice(d, 1), b.splice(d, 1))
                }
            }
        }(),
        g = function(a) { return new Event(a, { bubbles: !0 }) };
    try { new Event("test") } catch (a) { g = function(a) { var b = document.createEvent("Event"); return b.initEvent(a, !0, !1), b } }
    var h = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (h = function(a) { return a }, h.destroy = function(a) { return a }, h.update = function(a) { return a }) : (h = function(a, b) { return a && Array.prototype.forEach.call(a.length ? a : [a], function(a) { return c(a, b) }), a }, h.destroy = function(a) { return a && Array.prototype.forEach.call(a.length ? a : [a], d), a }, h.update = function(a) { return a && Array.prototype.forEach.call(a.length ? a : [a], e), a }), b.exports = h
}),
function(a) {
    function b() {
        if ("undefined" == typeof jQuery) throw new Error("HoldOn.js requires jQuery");
        var a = {};
        return a.open = function(a) {
            $("#holdon-overlay").remove();
            var b = "sk-rect",
                c = "",
                d = "";
            switch (a && (a.hasOwnProperty("theme") && (b = a.theme), a.hasOwnProperty("message") && (d = a.message)), b) {
                case "custom":
                    c = '<div style="text-align: center;">' + a.content + "</div>";
                    break;
                case "sk-dot":
                    c = '<div class="sk-dot"> <div class="sk-dot1"></div> <div class="sk-dot2"></div> </div>';
                    break;
                case "sk-rect":
                    c = '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>';
                    break;
                case "sk-cube":
                    c = '<div class="sk-cube"> <div class="sk-cube1"></div> <div class="sk-cube2"></div> </div>';
                    break;
                case "sk-bounce":
                    c = '<div class="sk-bounce"> <div class="bounce1"></div> <div class="bounce2"></div> <div class="bounce3"></div> </div>';
                    break;
                case "sk-circle":
                    c = '<div class="sk-circle"> <div class="sk-circle1 sk-child"></div> <div class="sk-circle2 sk-child"></div> <div class="sk-circle3 sk-child"></div> <div class="sk-circle4 sk-child"></div> <div class="sk-circle5 sk-child"></div> <div class="sk-circle6 sk-child"></div> <div class="sk-circle7 sk-child"></div> <div class="sk-circle8 sk-child"></div> <div class="sk-circle9 sk-child"></div> <div class="sk-circle10 sk-child"></div> <div class="sk-circle11 sk-child"></div> <div class="sk-circle12 sk-child"></div> </div>';
                    break;
                case "sk-cube-grid":
                    c = '<div class="sk-cube-grid"> <div class="sk-cube-child sk-cube-grid1"></div> <div class="sk-cube-child sk-cube-grid2"></div> <div class="sk-cube-child sk-cube-grid3"></div> <div class="sk-cube-child sk-cube-grid4"></div> <div class="sk-cube-child sk-cube-grid5"></div> <div class="sk-cube-child sk-cube-grid6"></div> <div class="sk-cube-child sk-cube-grid7"></div> <div class="sk-cube-child sk-cube-grid8"></div> <div class="sk-cube-child sk-cube-grid9"></div> </div>';
                    break;
                case "sk-folding-cube":
                    c = '<div class="sk-folding-cube"> <div class="sk-cubechild1 sk-cube-parent"></div> <div class="sk-cubechild2 sk-cube-parent"></div> <div class="sk-cubechild4 sk-cube-parent"></div> <div class="sk-cubechild3 sk-cube-parent"></div> </div>';
                    break;
                case "sk-fading-circle":
                    c = '<div class="sk-fading-circle"> <div class="sk-fading-circle1 sk-circle-child"></div> <div class="sk-fading-circle2 sk-circle-child"></div> <div class="sk-fading-circle3 sk-circle-child"></div> <div class="sk-fading-circle4 sk-circle-child"></div> <div class="sk-fading-circle5 sk-circle-child"></div> <div class="sk-fading-circle6 sk-circle-child"></div> <div class="sk-fading-circle7 sk-circle-child"></div> <div class="sk-fading-circle8 sk-circle-child"></div> <div class="sk-fading-circle9 sk-circle-child"></div> <div class="sk-fading-circle10 sk-circle-child"></div> <div class="sk-fading-circle11 sk-circle-child"></div> <div class="sk-fading-circle12 sk-circle-child"></div> </div>';
                    break;
                default:
                    c = '<div class="sk-rect"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>', console.warn(b + " doesn't exist for HoldOn.js")
            }
            var e = '<div id="holdon-overlay" style="display: none;">\n                                    <div id="holdon-content-container">\n                                        <div id="holdon-content">' + c + '</div>\n                                        <div id="holdon-message">' + d + "</div>\n                                    </div>\n                                </div>";
            $(e).appendTo("body").fadeIn(300), a && (a.backgroundColor && $("#holdon-overlay").css("backgroundColor", a.backgroundColor), a.backgroundColor && $("#holdon-message").css("color", a.textColor))
        }, a.close = function() { $("#holdon-overlay").fadeOut(300, function() { $(this).remove() }) }, a
    }
    "undefined" == typeof HoldOn && (a.HoldOn = b())
}(window),
function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function(a) {
    function b(b) {
        var c = !1;
        return a('[data-notify="container"]').each(function(d, e) {
            var f = a(e),
                g = f.find('[data-notify="title"]').text().trim(),
                h = f.find('[data-notify="message"]').html().trim(),
                i = g === a("<div>" + b.settings.content.title + "</div>").html().trim(),
                j = h === a("<div>" + b.settings.content.message + "</div>").html().trim(),
                k = f.hasClass("alert-" + b.settings.type);
            return i && j && k && (c = !0), !c
        }), c
    }

    function c(c, e, f) {
        var g = { content: { message: "object" == typeof e ? e.message : e, title: e.title ? e.title : "", icon: e.icon ? e.icon : "", url: e.url ? e.url : "#", target: e.target ? e.target : "-" } };
        f = a.extend(!0, {}, g, f), this.settings = a.extend(!0, {}, d, f), this._defaults = d, "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target), this.animations = { start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart", end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend" }, "number" == typeof this.settings.offset && (this.settings.offset = { x: this.settings.offset, y: this.settings.offset }), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !b(this)) && this.init()
    }
    var d = { element: "body", position: null, type: "info", allow_dismiss: !0, allow_duplicates: !0, newest_on_top: !1, showProgressbar: !1, placement: { from: "top", align: "right" }, offset: 20, spacing: 10, z_index: 1031, delay: 5e3, timer: 1e3, url_target: "_blank", mouse_over: null, animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" }, onShow: null, onShown: null, onClose: null, onClosed: null, icon_type: "class", template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>' };
    String.format = function() { for (var a = arguments[0], b = 1; b < arguments.length; b++) a = a.replace(RegExp("\\{" + (b - 1) + "\\}", "gm"), arguments[b]); return a }, a.extend(c.prototype, {
        init: function() {
            var a = this;
            this.buildNotify(), this.settings.content.icon && this.setIcon(), "#" != this.settings.content.url && this.styleURL(), this.styleDismiss(), this.placement(), this.bind(), this.notify = {
                $ele: this.$ele,
                update: function(b, c) {
                    var d = {};
                    "string" == typeof b ? d[b] = c : d = b;
                    for (var e in d) switch (e) {
                        case "type":
                            this.$ele.removeClass("alert-" + a.settings.type), this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + a.settings.type), a.settings.type = d[e], this.$ele.addClass("alert-" + d[e]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + d[e]);
                            break;
                        case "icon":
                            var f = this.$ele.find('[data-notify="icon"]');
                            "class" === a.settings.icon_type.toLowerCase() ? f.removeClass(a.settings.content.icon).addClass(d[e]) : (f.is("img") || f.find("img"), f.attr("src", d[e]));
                            break;
                        case "progress":
                            var g = a.settings.delay - a.settings.delay * (d[e] / 100);
                            this.$ele.data("notify-delay", g), this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", d[e]).css("width", d[e] + "%");
                            break;
                        case "url":
                            this.$ele.find('[data-notify="url"]').attr("href", d[e]);
                            break;
                        case "target":
                            this.$ele.find('[data-notify="url"]').attr("target", d[e]);
                            break;
                        default:
                            this.$ele.find('[data-notify="' + e + '"]').html(d[e])
                    }
                    var h = this.$ele.outerHeight() + parseInt(a.settings.spacing) + parseInt(a.settings.offset.y);
                    a.reposition(h)
                },
                close: function() { a.close() }
            }
        },
        buildNotify: function() {
            var b = this.settings.content;
            this.$ele = a(String.format(this.settings.template, this.settings.type, b.title, b.message, b.url, b.target)), this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align), this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele.find('[data-notify="progressbar"]').remove()
        },
        setIcon: function() { "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />') },
        styleDismiss: function() { this.$ele.find('[data-notify="dismiss"]').css({ position: "absolute", right: "10px", top: "5px", zIndex: this.settings.z_index + 2 }) },
        styleURL: function() { this.$ele.find('[data-notify="url"]').css({ backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)", height: "100%", left: 0, position: "absolute", top: 0, width: "100%", zIndex: this.settings.z_index + 1 }) },
        placement: function() {
            var b = this,
                c = this.settings.offset.y,
                d = { display: "inline-block", margin: "0px auto", position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute", transition: "all .5s ease-in-out", zIndex: this.settings.z_index },
                e = !1,
                f = this.settings;
            switch (a('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() { c = Math.max(c, parseInt(a(this).css(f.placement.from)) + parseInt(a(this).outerHeight()) + parseInt(f.spacing)) }), !0 === this.settings.newest_on_top && (c = this.settings.offset.y), d[this.settings.placement.from] = c + "px", this.settings.placement.align) {
                case "left":
                case "right":
                    d[this.settings.placement.align] = this.settings.offset.x + "px";
                    break;
                case "center":
                    d.left = 0, d.right = 0
            }
            this.$ele.css(d).addClass(this.settings.animate.enter), a.each(Array("webkit-", "moz-", "o-", "ms-", ""), function(a, c) { b.$ele[0].style[c + "AnimationIterationCount"] = 1 }), a(this.settings.element).append(this.$ele), !0 === this.settings.newest_on_top && (c = parseInt(c) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(c)), a.isFunction(b.settings.onShow) && b.settings.onShow.call(this.$ele), this.$ele.one(this.animations.start, function() { e = !0 }).one(this.animations.end, function() { b.$ele.removeClass(b.settings.animate.enter), a.isFunction(b.settings.onShown) && b.settings.onShown.call(this) }), setTimeout(function() { e || a.isFunction(b.settings.onShown) && b.settings.onShown.call(this) }, 600)
        },
        bind: function() {
            var b = this;
            if (this.$ele.find('[data-notify="dismiss"]').on("click", function() { b.close() }), this.$ele.mouseover(function() { a(this).data("data-hover", "true") }).mouseout(function() { a(this).data("data-hover", "false") }), this.$ele.data("data-hover", "false"), this.settings.delay > 0) {
                b.$ele.data("notify-delay", b.settings.delay);
                var c = setInterval(function() {
                    var a = parseInt(b.$ele.data("notify-delay")) - b.settings.timer;
                    if ("false" === b.$ele.data("data-hover") && "pause" === b.settings.mouse_over || "pause" != b.settings.mouse_over) {
                        var d = (b.settings.delay - a) / b.settings.delay * 100;
                        b.$ele.data("notify-delay", a), b.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", d).css("width", d + "%")
                    }
                    a <= -b.settings.timer && (clearInterval(c), b.close())
                }, b.settings.timer)
            }
        },
        close: function() {
            var b = this,
                c = parseInt(this.$ele.css(this.settings.placement.from)),
                d = !1;
            this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit), b.reposition(c), a.isFunction(b.settings.onClose) && b.settings.onClose.call(this.$ele), this.$ele.one(this.animations.start, function() { d = !0 }).one(this.animations.end, function() { a(this).remove(), a.isFunction(b.settings.onClosed) && b.settings.onClosed.call(this) }), setTimeout(function() { d || (b.$ele.remove(), b.settings.onClosed && b.settings.onClosed(b.$ele)) }, 600)
        },
        reposition: function(b) {
            var c = this,
                d = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])',
                e = this.$ele.nextAll(d);
            !0 === this.settings.newest_on_top && (e = this.$ele.prevAll(d)), e.each(function() { a(this).css(c.settings.placement.from, b), b = parseInt(b) + parseInt(c.settings.spacing) + a(this).outerHeight() })
        }
    }), a.notify = function(a, b) { return new c(this, a, b).notify }, a.notifyDefaults = function(b) { return d = a.extend(!0, {}, d, b) }, a.notifyClose = function(b) { "warning" === b && (b = "danger"), void 0 === b || "all" === b ? a("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === b || "info" === b || "warning" === b || "danger" === b ? a(".alert-" + b + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : b ? a(b + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : a('[data-notify-position="' + b + '"]').find('[data-notify="dismiss"]').trigger("click") }, a.notifyCloseExcept = function(b) { "warning" === b && (b = "danger"), "success" === b || "info" === b || "warning" === b || "danger" === b ? a("[data-notify]").not(".alert-" + b).find('[data-notify="dismiss"]').trigger("click") : a("[data-notify]").not(b).find('[data-notify="dismiss"]').trigger("click") }
});
var Loaded = !1;
$(document).ready(function() { ScrollBackTop(), $(".modal").on("show.bs.modal", function() { $(document).height() > $(window).height() ? $("html").addClass("modal-open-noscroll") : $("html").removeClass("modal-open-noscroll"), $(".cd-top").hide(), $(".InnerBackground").css("-webkit-animation-play-state", "paused") }), $(".modal").on("hide.bs.modal", function() { setTimeout(function() { $("html").removeClass("modal-open-noscroll"), $(".InnerBackground").css("-webkit-animation-play-state", "running"), $(".cd-top").show() }, 200) }) });


!function(){$.fn.NewWaterfall=function(a){var b={width:360,delay:60,repeatShow:!1},c=$.extend({},b,a),d=this,e=function(a){$(window).scrollTop()+$(window).height()>$(a).offset().top?$(a).addClass("show"):$(window).scrollTop()+$(window).height()<$(a).offset().top&&c.repeatShow&&$(a).removeClass("show")},f=function(){if(!(d.length<=0)){d.css({position:"relative"});var a=$(d).children("li");if(!(a.length<=0)){var b=$(d).width(),f=parseInt(b/c.width);a.length<f&&(f=a.length);var g=(b-f*c.width)/2;if(f>0){$(d).removeClass("min"),a.css({position:"absolute",width:c.width});for(var h=0,i=[],j=[],k=0;k<a.length;k++)i.push({index:k,bottom:0,height:$(a[k]).height()});for(var k=0;k<f;k++)j.push([]);for(var k=0;k<a.length;k++)if(k<f)i[k].bottom=i[k].height,j[k].push(i[k]);else{for(var l=0,m=0,n=0;n<f;n++){var o=j[n][j[n].length-1].bottom+i[k].height;(0==l||o<l)&&(l=o,m=n)}i[k].bottom=l,j[m].push(i[k])}for(var k=0;k<j.length;k++)for(var n=0;n<j[k].length;n++)$(a[j[k][n].index]).css({left:k*c.width+g,top:j[k][n].bottom-j[k][n].height});for(var k=0;k<j.length;k++){var p=j[k][j[k].length-1].bottom;h<p&&(h=p)}$(d).css("height",h)}else a.attr("style",""),d.attr("style",""),$(d).addClass("min");for(var k=0;k<a.length;k++)e(a[k])}}};f(),setInterval(f,c.delay)}}();


(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?a(require("jquery")):a(window.jQuery||window.Zepto)})(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w=function(a,b){n.ev.on(i+a+j,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},z=function(b){if(b!==v||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),v=b;return n.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isLowIE=n.isIE8=document.all&&!document.addEventListener,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=B(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],u="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=s,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=x("bg").on("click"+j,function(){n.close()}),n.wrap=x("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=x("container",n.wrap)),n.contentContainer=x("content"),n.st.preloader&&(n.preloader=x("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}y("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(w(f,function(a,b,c,d){c.close_replaceWith=z(d.type)}),u+=" mfp-close-btn-in"):n.wrap.append(z())),n.st.alignTop&&(u+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:s.height(),position:"absolute"}),n.st.enableEscapeKey&&s.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&n.wrap.addClass(u);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),y("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||a(document.body)),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),s.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),y(g),b},close:function(){if(!n.isOpen)return;y(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){y(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}s.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n.st.autoFocusLast&&n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,y(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),y("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;y("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;y("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}t&&t!==b.type&&n.container.removeClass("mfp-"+t+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,y(h,b),t=b.type,n.container.prepend(n.contentContainer),y("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(z()):n.content=a:n.content="",y(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,y("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey||b.altKey||b.shiftKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?s.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(f,[b,c,d]),a.each(c,function(c,d){if(d===undefined||d===!1)return!0;e=c.split("_");if(e.length>1){var f=b.find(j+"-"+e[0]);if(f.length>0){var g=e[1];g==="replaceWith"?f[0]!==d[0]&&f.replaceWith(d):g==="img"?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(j+"-"+c).html(d)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return A(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Schließen (Esc)",tLoading:"Laden...",autoFocusLast:!0}},a.fn.magnificPopup=function(b){A();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var C="inline",D,E,F,G=function(){F&&(E.after(F.addClass(D)).detach(),F=null)};a.magnificPopup.registerModule(C,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(C),w(b+"."+C,function(){G()})},getInline:function(b,c){G();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(E||(D=d.hiddenClass,E=x(D),D="mfp-"+D),F=e.after(E).detach().removeClass(D)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var H="ajax",I,J=function(){I&&a(document.body).removeClass(I)},K=function(){J(),n.req&&n.req.abort()};a.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(H),I=n.st.ajax.cursor,w(b+"."+H,K),w("BeforeChange."+H,K)},getAjax:function(b){I&&a(document.body).addClass(I),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};y("ParseAjax",f),n.appendContent(a(f.data),H),b.finished=!0,J(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var L,M=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=n.st.image,d=".image";n.types.push("image"),w(g+d,function(){n.currItem.type==="image"&&c.cursor&&a(document.body).addClass(c.cursor)}),w(b+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),r.off("resize"+j)}),w("Resize"+d,n.resizeImage),n.isLowIE&&w("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){L&&clearInterval(L),L=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(L),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,y("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.el&&b.el.find("img").length&&(i.alt=b.el.find("img").attr("alt")),b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:M(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(L&&clearInterval(L),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var N,O=function(){return N===undefined&&(N=document.createElement("p").style.MozTransform!==undefined),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;w("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,y("ZoomAnimationEnded")},16)},f)},16)}}),w(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),w(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return O()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var P=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},Q=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% von %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery";n.direction=!0;if(!c||!c.enabled)return!1;u+=" mfp-gallery",w(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),s.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),w("UpdateStatus"+d,function(a,b){b.text&&(b.text=Q(b.text,n.currItem.index,n.items.length))}),w(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?Q(c.tCounter,e.index,f):""}),w("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),e=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m);d.click(function(){n.prev()}),e.click(function(){n.next()}),n.container.append(d.add(e))}}),w(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),w(b+d,function(){s.off(d),n.wrap.off("click"+d),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=P(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=P(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=P(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),y("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,y("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}});var R="retina";a.magnificPopup.registerModule(R,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=n.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(w("ImageHasSize."+R,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),w("ElementParse."+R,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),A()})
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Macy=e()}(this,function(){"use strict";function t(t){var e=document.body.clientWidth,o=void 0;for(var n in t.breakAt)if(e<n){o=t.breakAt[n];break}return o||(o=t.columns),o}function e(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t(e),r=void 0,i=100/n;return o?1===n?"100%":(r=(n-1)*e.margin/n,"calc("+i+"% - "+r+"px)"):i}function o(o,n){var r=t(o.options),i=0,s=void 0;return 1===++n?0:(s=(o.options.margin-(r-1)*o.options.margin/r)*(n-1),i+=e(o.options,!1)*(n-1),"calc("+i+"% + "+s+"px)")}function n(t){for(var e=0,o=t.container,n=t.rows,r=n.length-1;r>=0;r--)e=n[r]>e?n[r]:e;o.style.height=e+"px"}function r(e,o){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];l(e,t(e.options),r),o.forEach(function(t){var o=0,n=parseInt(t.offsetHeight,10);isNaN(n)||(e.rows.forEach(function(t,n){t<e.rows[o]&&(o=n)}),t.style.position="absolute",t.style.top=e.rows[o]+"px",t.style.left=""+e.cols[o],e.rows[o]+=isNaN(n)?0:n+e.options.margin,i&&(t.dataset.macyComplete=1))}),i&&(e.tmpRows=null),n(e)}function i(e,o){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=t(e.options);l(e,s,r),o.forEach(function(t){e.lastcol===s&&(e.lastcol=0);var o=c(t,"height");o=parseInt(o.replace("px",""),10),isNaN(o)||(t.style.position="absolute",t.style.top=e.rows[e.lastcol]+"px",t.style.left=""+e.cols[e.lastcol],e.rows[e.lastcol]+=isNaN(o)?0:o+e.options.margin,e.lastcol+=1,i&&(t.dataset.macyComplete=1))}),i&&(e.tmpRows=null),n(e)}function s(t,e){var o=void 0;return function(){o&&clearTimeout(o),o=setTimeout(t,e)}}Object.getOwnPropertyNames(Array.prototype).forEach(function(t){"length"!==t&&(NodeList.prototype[t]=Array.prototype[t],HTMLCollection.prototype[t]=Array.prototype[t])});var a=function t(e,o){if(!(this instanceof t))return new t(e,o);if(e=e.replace(/^\s*/,"").replace(/\s*$/,""),o)return this.byCss(e,o);for(var n in this.selectors)if(o=n.split("/"),new RegExp(o[1],o[2]).test(e))return this.selectors[n](e);return this.byCss(e)};a.prototype.byCss=function(t,e){return(e||document).querySelectorAll(t)},a.prototype.selectors={},a.prototype.selectors[/^\.[\w\-]+$/]=function(t){return document.getElementsByClassName(t.substring(1))},a.prototype.selectors[/^\w+$/]=function(t){return document.getElementsByTagName(t)},a.prototype.selectors[/^\#[\w\-]+$/]=function(t){return document.getElementById(t.substring(1))};var c=function(t,e){return window.getComputedStyle(t,null).getPropertyValue(e)},l=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.lastcol||(t.lastcol=0),n){t.rows=[],t.cols=[],t.lastcol=0;for(var r=e-1;r>=0;r--)t.rows[r]=0,t.cols[r]=o(t,r)}if(t.tmpRows){t.rows=[];for(var r=e-1;r>=0;r--)t.rows[r]=t.tmpRows[r]}else{t.tmpRows=[];for(var r=e-1;r>=0;r--)t.tmpRows[r]=t.rows[r]}},u=function(t){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=o?t.container.children:a(':scope > *:not([data-macy-complete="1"])',t.container),c=e(t.options);return s.forEach(function(t){o&&(t.dataset.macyComplete=0),t.style.width=c}),t.options.trueOrder?i(t,s,o,n):r(t,s,o,n)},p=function(t,e){setTimeout(function(){var o=t();e&&e(o)},0)},f=function(t,e,o){t&&p(t),o.req===o.complete&&p(e)},h=function(t,e,o){var n=t.length,r=0;t.forEach(function(t){t.complete&&(r++,f(e,o,{req:n,complete:r})),t.addEventListener("load",function(){r++,f(e,o,{req:n,complete:r})})})},d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},m={columns:4,margin:2,trueOrder:!0,waitForImages:!1},v=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;if(!(this instanceof t))return new t(e);if(this.options={},d(this.options,m,e),this.container=a(e.container),this.container instanceof a||!this.container)return!!e.debug&&console.error("Error: Container not found");delete this.options.container,this.container.length&&(this.container=this.container[0]),this.container.style.position="relative",this.rows=[];var o=this.recalculate.bind(this,!1,!1),n=this.recalculate.bind(this,!0,!0),r=a("img",this.container);if(this.resizer=s(function(){n()},100),window.addEventListener("resize",this.resizer),e.waitForImages)return h(r,null,n);this.recalculate(!0,!1),h(r,o,n)};return v.init=function(t){return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "),new v(t)},v.prototype.recalculateOnImageLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=a("img",this.container),n=this.recalculate.bind(this,e,!1),r=this.recalculate.bind(this,e,!0);return t?h(o,null,r):(n(),h(o,n,r))},v.prototype.runOnImageLoad=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=a("img",this.container);return e?h(o,t,t):h(o,null,t)},v.prototype.recalculate=function(){return u(this,arguments.length>0&&void 0!==arguments[0]&&arguments[0],!(arguments.length>1&&void 0!==arguments[1])||arguments[1])},v.prototype.remove=function(){window.removeEventListener("resize",this.resizer),this.container.children.forEach(function(t){t.removeAttribute("data-macy-complete"),t.removeAttribute("style")}),this.container.removeAttribute("style")},v.prototype.reInit=function(){this.recalculate(!0,!0),window.addEventListener("resize",this.resizer)},v});


var macy;

function GenGallery(){
    if($(".grid li").length < 1){
        $(".HideIfNo").prev().remove();
        $(".HideIfNo").prev().remove();
        $(".HideIfNo").hide();
    } else {
macy = Macy({
        container: '.Gallery',
        trueOrder: false,
        waitForImages: false,
        margin: 24,
        columns: 5,
        breakAt: {
            1200: 4,
            940: 3,
            520: 2,
            400: 1
        }
    });

    $('.Gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    mainClass: 'mfp-fade',
    image: {
        markup: '<div class="mfp-figure">'+
                    '<div class="mfp-counter"></div>'+
                    '<div class="mfp-close"></div>'+
                    '<div class="mfp-img"></div>'+
                    '<div class="mfp-bottom-bar">'+
                        '<div class="mfp-title"></div>'+
                    '</div>'+
                '</div>',

        tError: 'Das Bild konnte leider nicht geladen werden.'
    },
    gallery:{
        enabled:true
    }
    });
    }

    
}