"use strict";
/** @jsxImportSource @emotion/react */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.TimelineItem = void 0;
var react_1 = require("react");
var clsx_1 = require("clsx");
var react_2 = require("@emotion/react");
exports.TimelineItem = function (_a) {
    var icon = _a.icon, bordercolor = _a.bordercolor, color = _a.color, children = _a.children, co = _a.co, className = _a.className, props = __rest(_a, ["icon", "bordercolor", "color", "children", "co", "className"]);
    var theme = react_2.useTheme();
    var styles = react_2.css(__assign({ display: 'block', height: '100%', width: '100%', '& .icon': {
            position: 'absolute',
            zIndex: 1
        }, '& .indicator': {
            position: 'relative',
            '&::after': {
                content: '""',
                position: 'absolute',
                zIndex: 0,
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: bordercolor
            }
        }, '& .indicators': {
            height: '5em',
            '&::after': {
                left: '4px',
                top: '16px',
                height: '40%',
                width: '1px',
                opacity: '100%'
            }
        }, '&:last-child': {
            '.indicators::after': {
                display: 'none'
            }
        }, '& .icon-container': {
            position: 'absolute',
            zIndex: 1
        }, '& .body': {
            padding: '0.8em 0 1em 2em',
            marginBottom: '1.2em',
            marginTop: '-6.4em',
            width: '100%'
        }, '& .desc': {
            fontSize: '.8em',
            color: color
        } }, (typeof co == 'function' ? co(theme) : co)));
    var computedClassNames = clsx_1["default"](className);
    return (react_1["default"].createElement("div", __assign({ css: styles, className: computedClassNames }, props),
        react_1["default"].createElement("div", { className: "indicators indicator" },
            react_1["default"].createElement("span", { className: "icon" }, icon)),
        react_1["default"].createElement("li", null,
            react_1["default"].createElement("div", { className: "body" },
                react_1["default"].createElement("div", { className: "desc" }, children)))));
};
