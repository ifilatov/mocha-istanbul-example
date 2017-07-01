/*global describe,it*/

var booleans = require('./index.js');
var assert = require('assert');

describe('conjuction', function () {
    it('x=0 and y=0 should return 0', function () {
        assert(booleans.conjuction(0, 0)==0);
    });

    it('x=0 and y=1 should return 0', function () {
        assert(booleans.conjuction(0, 1)==0);
    });

    it('x=1 and y=0 should return 0', function () {
        assert(booleans.conjuction(1, 0)==0);
    });

    it('x=1 and y=1 should return 1', function () {
        assert(booleans.conjuction(1, 1)==1);
    });

});

describe('disjuction', function () {
    it('x=0 and y=0 should return 0', function () {
        assert(booleans.disjuction(0, 0)==0);
    });

    it('x=0 and y=1 should return 1', function () {
        assert(booleans.disjuction(0, 1)==1);
    });

    it('x=1 and y=0 should return 1', function () {
        assert(booleans.disjuction(1, 0)==1);
    });

    it('x=1 and y=1 should return 1', function () {
        assert(booleans.disjuction(1, 1)==1);
    });

});

describe('alternativeDenial', function () {
    it('x=0 and y=0 should return 1', function () {
        assert(booleans.alternativeDenial(0, 0)==1);
    });

    it('x=0 and y=1 should return 1', function () {
        assert(booleans.alternativeDenial(0, 1)==1);
    });

    it('x=1 and y=0 should return 1', function () {
        assert(booleans.alternativeDenial(1, 0)==1);
    });

    it('x=1 and y=1 should return 0', function () {
        assert(booleans.alternativeDenial(1, 1)==0);
    });

});

describe('jointDenial', function () {
    it('x=0 and y=0 should return 1', function () {
        assert(booleans.jointDenial(0, 0)==1);
    });

    it('x=0 and y=1 should return 0', function () {
        assert(booleans.jointDenial(0, 1)==0);
    });

    it('x=1 and y=0 should return 0', function () {
        assert(booleans.jointDenial(1, 0)==0);
    });

    it('x=1 and y=1 should return 0', function () {
        assert(booleans.jointDenial(1, 1)==0);
    });

});

describe('nonImplicationX', function () {
    it('x=0 and y=0 should return 0', function () {
        assert(booleans.nonImplicationX(0, 0)==0);
    });

    it('x=0 and y=1 should return 0', function () {
        assert(booleans.nonImplicationX(0, 1)==0);
    });

    it('x=1 and y=0 should return 1', function () {
        assert(booleans.nonImplicationX(1, 0)==1);
    });

    it('x=1 and y=1 should return 0', function () {
        assert(booleans.nonImplicationX(1, 1)==0);
    });

});

describe('implicationX', function () {
    it('x=0 and y=0 should return 1', function () {
        assert(booleans.implicationX(0, 0)==1);
    });

    it('x=0 and y=1 should return 1', function () {
        assert(booleans.implicationX(0, 1)==1);
    });

    it('x=1 and y=0 should return 0', function () {
        assert(booleans.implicationX(1, 0)==0);
    });

    it('x=1 and y=1 should return 1', function () {
        assert(booleans.implicationX(1, 1)==1);
    });

});