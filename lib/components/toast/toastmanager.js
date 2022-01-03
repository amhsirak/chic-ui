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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import Toast from './toast';
var ToastManager = /** @class */ (function () {
    function ToastManager() {
        this.toasts = [];
        var body = document.getElementsByTagName('body')[0];
        var toastContainer = document.createElement('div');
        toastContainer.id = 'main-toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.top = '10px';
        toastContainer.style.right = '10px';
        toastContainer.style.zIndex = '1000';
        body.insertAdjacentElement('beforeend', toastContainer);
        this.containerRef = toastContainer;
    }
    ToastManager.prototype.open = function (options) {
        var _this = this;
        var toastId = Math.random().toString(36).substring(2, 9);
        var toast = __assign(__assign({ id: toastId }, options), { close: function () { var _a; return _this.close((_a = options.id) !== null && _a !== void 0 ? _a : toastId); } });
        this.toasts = __spreadArray([toast], this.toasts, true);
        this.render();
    };
    ToastManager.prototype.close = function (id) {
        this.toasts = this.toasts.filter(function (toast) { return toast.id !== id; });
        this.render();
    };
    ToastManager.prototype.render = function () {
        var toastsList = this.toasts.map(function (toastProps) { return (_jsx(Toast, __assign({}, toastProps), toastProps.id)); });
        ReactDOM.render(toastsList, this.containerRef);
    };
    return ToastManager;
}());
export { ToastManager };
export var toast = new ToastManager();
//# sourceMappingURL=toastmanager.js.map