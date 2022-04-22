"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
/** @jsxImportSource @emotion/react */
var clsx_1 = require("clsx");
var react_1 = require("@emotion/react");
var react_2 = require("react");
var VerifyInput = function (_a) {
    var className = _a.className, co = _a.co, _b = _a.length, length = _b === void 0 ? 6 : _b, content = _a.content, onCompelte = _a.onCompelte, color = _a.color;
    var theme = react_1.useTheme();
    var _c = react_2.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_2.useState(__spreadArrays(Array(length)).map(function () { return ""; })), code = _d[0], setCode = _d[1];
    var inputs = react_2.useRef([]);
    var processInput = function (e, slot) {
        var num = e.target.value;
        if (/[^0-9]/.test(num))
            return;
        var newCode = __spreadArrays(code);
        newCode[slot] = num;
        setCode(newCode);
        if (slot !== length - 1) {
            inputs.current[slot].style.borderBottom = "4px solid " + color;
            inputs.current[slot + 1].focus();
        }
        if (newCode.every(function (num) { return num !== ""; })) {
            setLoading(true);
            setTimeout(function () { return setLoading(false); }, 10000);
            var value = newCode.join("");
            onCompelte === null || onCompelte === void 0 ? void 0 : onCompelte(value);
        }
    };
    var onKeyUp = function (e, slot) {
        if (e.keyCode === 8 && !code[slot] && slot !== 0) {
            var newCode = __spreadArrays(code);
            newCode[slot - 1] = "";
            setCode(newCode);
            inputs.current[slot - 1].style.borderBottom = '4px solid #DEDEDE';
            inputs.current[slot - 1].focus();
        }
    };
    var styles = react_1.css(__assign({ display: "flex", flexDirection: "column", alignItems: "start" }, (typeof co == "function" ? co(theme) : co)));
    var codeInputs = react_1.css({
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        '& > input': {
            backgroundImage: "none",
            backgroundColor: "transparent",
            "-webkit-box-shadow": "none",
            "-moz-box-shadow": "none",
            boxShadow: "none",
            textAlign: "center",
            height: "60px",
            width: "40px",
            margin: "0 4px",
            borderRadius: 0,
            borderBottom: "4px solid #DEDEDE",
            fontSize: "36px",
            caretColor: color,
            caretSize: '10px'
            // '&:focus': {
            //   borderBottom: `2px solid ${color}`,
            // }
        }
    });
    var computedClassNames = clsx_1["default"](className);
    return (React.createElement("div", { css: styles, className: computedClassNames },
        React.createElement("div", { css: codeInputs }, code.map(function (num, idx) {
            var _a;
            return (React.createElement("input", { key: idx, type: "text", inputMode: "numeric", maxLength: 1, value: num, autoFocus: !((_a = code[0]) === null || _a === void 0 ? void 0 : _a.length) && idx === 0, readOnly: loading, onChange: function (e) { return processInput(e, idx); }, onKeyUp: function (e) { return onKeyUp(e, idx); }, ref: function (ref) { return inputs.current.push(ref); } }));
        }))));
};
exports["default"] = VerifyInput;
