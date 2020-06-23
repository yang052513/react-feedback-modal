"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
var react_1 = __importDefault(require("react"));
require("./index.css");
var handleReload = function () {
    window.location.reload();
};
var defaultProps = {
    show: true,
    imgUrl: '/assets/emoji_happy.png',
    status: 'Success',
    msg: 'Project created successfully~ ー( ´ ▽ ` )ﾉ',
    okText: 'OK',
    cancelText: 'Cancel',
    confirm: false,
    save: handleReload,
    cancel: handleReload,
    width: '400px',
    height: '200px',
    backgroundColor: 'white',
    borderRadius: '25px',
};
exports.Feedback = function (_a) {
    var show = _a.show, imgUrl = _a.imgUrl, status = _a.status, msg = _a.msg, confirm = _a.confirm, okText = _a.okText, cancelText = _a.cancelText, save = _a.save, cancel = _a.cancel, width = _a.width, height = _a.height, backgroundColor = _a.backgroundColor, borderRadius = _a.borderRadius;
    return (react_1.default.createElement("div", null, show ? (react_1.default.createElement("div", { style: {
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
        }, className: "feedback-container" },
        react_1.default.createElement("img", { src: imgUrl, alt: "feedback msg" }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null, status),
            react_1.default.createElement("p", null, msg),
            react_1.default.createElement("button", { onClick: save }, okText),
            confirm === true ? (react_1.default.createElement("button", { style: {
                    marginLeft: '20px',
                }, onClick: cancel }, cancelText)) : null))) : null));
};
exports.Feedback.defaultProps = defaultProps;
//# sourceMappingURL=index.js.map