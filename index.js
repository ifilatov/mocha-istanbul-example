exports.conjuction = function (x, y) {
    return x&&y;
};

exports.disjuction = function (x, y) {
    return x||y;
};

exports.alternativeDenial = function (x, y) {
    return !(x&&y);
};

exports.jointDenial = function (x, y) {
    return (!x)&&(!y);
};

exports.nonImplicationX = function (x, y) {
    return x&&(!y);
};

exports.implicationX = function (x, y) {
    return !(x&&(!y));
};