;
if (CloudflareApps.matchPage(CloudflareApps.installs['u5Dr4sVxUL7P'].URLPatterns)) {
    (function(modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.i = function(value) {
            return value;
        };
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module['default'];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 1);
    })
    ([, (function(module, exports, __webpack_require__) {
        "use strict";
        var _slicedToArray = (function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break
                    }
                } catch (err) {
                    _d = true;
                    _e = err
                } finally {
                    try {
                        if (!_n && _i['return']) _i['return']()
                    } finally {
                        if (_d) throw _e
                    }
                }
                return _arr
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i)
                } else {
                    throw new TypeError('Invalid attempt to destructure non-iterable instance')
                }
            }
        }());
        (function() {
            'use strict'
            if (!window.addEventListener) return
            var options = CloudflareApps.installs['u5Dr4sVxUL7P'].options
            var element = void 0
            var style = document.createElement('style')

            function jwtDecode(token) {
                var _token$split = token.split('.'),
                    _token$split2 = _slicedToArray(_token$split, 2),
                    base64Url = _token$split2[1]
                var base64 = base64Url.replace('-', '+').replace('_', '/')
                try {
                    return JSON.parse(window.atob(base64))
                } catch (e) {
                    return null
                }
            }

            function getMaxZIndex() {
                var elements = document.getElementsByTagName('*')
                var max = 0
                Array.prototype.slice.call(elements).forEach(function(element) {
                    var zIndex = parseInt(document.defaultView.getComputedStyle(element).zIndex, 10)
                    max = zIndex ? Math.max(max, zIndex) : max
                })
                return max
            }

            function getCookie(name) {
                var _ref = document.cookie.match(new RegExp(name + '=([^;]+)')) || [],
                    _ref2 = _slicedToArray(_ref, 2),
                    match = _ref2[1]
                return match
            }
            var auth = getCookie('CF_Authorization')
            var data = auth && jwtDecode(auth)
            var username = data && data.email

            function updateStyle() {
                style.innerHTML = '\n      cloudflare-app[app="cf-auth-bar"] {\n        font-size: ' + options.size + 'em;\n        z-index: ' + (getMaxZIndex() + 1) + ';\n      }\n\n      cloudflare-app[app="cf-auth-bar"] cf-content {\n        background-color: ' + options.background + ';\n        color: ' + options.color + ';\n      }\n\n      cloudflare-app[app="cf-auth-bar"] a {\n        color: ' + options.linkColor + ';\n      }\n    '
                if (!style.parentElement) {
                    document.head.appendChild(style)
                }
            }

            function updateElement() {
                updateStyle()
                element = CloudflareApps.createElement({
                    selector: 'body',
                    method: 'append'
                }, element)
                element.setAttribute('app', 'cf-auth-bar')
                element.setAttribute('data-horizontal-align', options.horizontalAlign)
                if (!username && "u5Dr4sVxUL7P" === 'preview') {
                    username = 'email@example.com'
                }
                if (!username && element.parentElement) {
                    element.parentElement.removeChild(element)
                    return
                }
                element.innerHTML = '\n      <cf-content>\n        <cf-entries>\n          <cf-entry data-type="domain">' + options.title + '</cf-entry>\n          <cf-entry data-type="username">' + username + '</cf-entry>\n        </cf-entries>\n\n        <cf-actions>\n          <a href="/cdn-cgi/auth/logout" target="_self">Logout</a>\n        </cf-actions>\n      </cf-content>\n    '
            }
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', updateElement)
            } else {
                updateElement()
            }
            window.CloudflareApps.installs['u5Dr4sVxUL7P'].scope = {
                setOptions: function setOptions(nextOptions) {
                    options = nextOptions
                    updateElement()
                }
            }
        })()
    })]);
};
(function() {
    try {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJjZi1hdXRoLWJhciJdIHsKICBkaXNwbGF5OiBibG9jazsKICBkaXNwbGF5OiAtd2Via2l0LWJveDsKICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICBkaXNwbGF5OiBmbGV4OwogIGZvbnQtd2VpZ2h0OiA3MDA7CiAgbGV0dGVyLXNwYWNpbmc6IC4wOGVtOwogIHBvaW50ZXItZXZlbnRzOiBub25lOwogIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsKICBwb3NpdGlvbjogZml4ZWQ7CiAgdG9wOiAwOwogIGxlZnQ6IDA7CiAgcmlnaHQ6IDA7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iY2YtYXV0aC1iYXIiXVtkYXRhLWhvcml6b250YWwtYWxpZ249ImxlZnQiXSB7CiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7CiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0OwogICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0Owp9CmNsb3VkZmxhcmUtYXBwW2FwcD0iY2YtYXV0aC1iYXIiXVtkYXRhLWhvcml6b250YWwtYWxpZ249ImxlZnQiXSBjZi1jb250ZW50IHsKICBib3JkZXItcmFkaXVzOiAwIDAgLjNlbSAwOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl1bZGF0YS1ob3Jpem9udGFsLWFsaWduPSJjZW50ZXIiXSB7CiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyOwogICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7CiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKfQpjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl1bZGF0YS1ob3Jpem9udGFsLWFsaWduPSJjZW50ZXIiXSBjZi1jb250ZW50IHsKICBib3JkZXItcmFkaXVzOiAwIDAgLjNlbSAuM2VtOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl1bZGF0YS1ob3Jpem9udGFsLWFsaWduPSJyaWdodCJdIHsKICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7CiAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDsKICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7Cn0KY2xvdWRmbGFyZS1hcHBbYXBwPSJjZi1hdXRoLWJhciJdW2RhdGEtaG9yaXpvbnRhbC1hbGlnbj0icmlnaHQiXSBjZi1jb250ZW50IHsKICBib3JkZXItcmFkaXVzOiAwIDAgMCAuM2VtOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl0gY2YtY29udGVudCB7CiAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjsKICAgICAgYWxpZ24tY29udGVudDogY2VudGVyOwogIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjsKICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyOwogICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsOwogIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsOwogICAgICAtbXMtZmxleC1mbG93OiByb3cgd3JhcDsKICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7CiAgcGFkZGluZzogMCAxZW07CiAgbGluZS1oZWlnaHQ6IDIuNTsKICBwb2ludGVyLWV2ZW50czogYWxsOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl0gY2YtZW50cmllcyB7CiAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJjZi1hdXRoLWJhciJdIGNmLWVudHJ5IHsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgLXdlYmtpdC1ib3gtZmxleDogMDsKICAgICAgLW1zLWZsZXg6IDAgMCBhdXRvOwogICAgICAgICAgZmxleDogMCAwIGF1dG87Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0iY2YtYXV0aC1iYXIiXSBjZi1lbnRyeSArIGNmLWVudHJ5IHsKICBtYXJnaW4tbGVmdDogMWVtOwp9CgpjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl0gY2YtYWN0aW9ucyB7CiAgZGlzcGxheTogLXdlYmtpdC1ib3g7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKfQoKY2xvdWRmbGFyZS1hcHBbYXBwPSJjZi1hdXRoLWJhciJdIGEgewogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKfQoKQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7CiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJjZi1hdXRoLWJhciJdIGNmLWVudHJpZXMgKyBjZi1hY3Rpb25zIHsKICAgIG1hcmdpbi1sZWZ0OiAxZW07CiAgfQp9CgpAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsKICBjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl0gewogICAgZm9udC1zaXplOiAuOWVtICFpbXBvcnRhbnQ7CiAgfQoKICBjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl0gY2YtY29udGVudCB7CiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOwogICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7CiAgICAgICAgLW1zLWZsZXgtZmxvdzogY29sdW1uOwogICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjsKICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDsKICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7CiAgfQoKICBjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl0gY2YtZW50cmllcyB7CiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7CiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyOwogICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDsKICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsOwogICAgICAgIC1tcy1mbGV4LWZsb3c6IHJvdyB3cmFwOwogICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwOwogIH0KCiAgY2xvdWRmbGFyZS1hcHBbYXBwPSJjZi1hdXRoLWJhciJdIGNmLWFjdGlvbnMgewogICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyOwogICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjsKICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgfQoKICBjbG91ZGZsYXJlLWFwcFthcHA9ImNmLWF1dGgtYmFyIl0gY2YtYWN0aW9ucyBhIHsKICAgIGRpc3BsYXk6IGJsb2NrOwogICAgLXdlYmtpdC1ib3gtZmxleDogMTsKICAgICAgICAtbXMtZmxleDogMSAwIGF1dG87CiAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvOwogICAgdGV4dC1hbGlnbjogY2VudGVyOwogIH0KfQoK';
        document.getElementsByTagName('head')[0].appendChild(link);
    } catch (e) {}
})();