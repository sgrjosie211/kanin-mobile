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
var clsx_1 = require("clsx");
var react_1 = require("react");
var react_2 = require("@emotion/react");
var item_1 = require("./item");
var Timeline = function (_a) {
    var children = _a.children, co = _a.co, color = _a.color, className = _a.className, props = __rest(_a, ["children", "co", "color", "className"]);
    var theme = react_2.useTheme();
    var styles = react_2.css(__assign({ display: 'flex', alignItems: 'center', height: '100%', width: '100%', '& .circle': {
            width: '0.9em',
            height: '0.9em',
            // borderStyle: 'solid',
            // borderWidth: 1,
            borderRadius: '50%',
            // borderColor: 'gray',
            background: color,
            position: 'absolute',
            outline: '10px solid white',
            left: -2.5,
            top: -6
        }, '& .text-pos': {
            position: 'absolute',
            top: '-7px',
            left: 1.5,
            fontSize: 12,
            color: '#fff'
        } }, (typeof co == 'function' ? co(theme) : co)));
    var nat = react_1["default"].Children.map(children, function (child, index) {
        var _a;
        if (!react_1["default"].isValidElement(child)) {
            return child;
        }
        var props = child.props;
        var icon = (_a = props.icon) !== null && _a !== void 0 ? _a : (react_1["default"].createElement("label", { className: "la" },
            react_1["default"].createElement("span", { className: "circle" }),
            react_1["default"].createElement("span", { className: "text-pos" }, index + 1)));
        return react_1["default"].cloneElement(child, {
            icon: icon,
            bordercolor: color
        });
    });
    var computedClassNames = clsx_1["default"](className);
    return (
    // <Container>
    //   <ul className='timeline'>{children}</ul>
    // </Container>
    react_1["default"].createElement("div", __assign({ css: styles, className: computedClassNames }, props),
        react_1["default"].createElement("ul", { className: 'timeline' }, nat)));
};
Timeline.item = item_1.TimelineItem;
exports["default"] = Timeline;
