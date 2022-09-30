export var spinnerWidth = function (size) {
    switch (true) {
        case size < 15:
            return size / 3.5;
        case size < 50:
            return size / 5;
        case size < 100:
            return size / 7.5;
        case size >= 100:
            return size / 10;
        default:
            return size / 10;
    }
};
//# sourceMappingURL=sizes.js.map