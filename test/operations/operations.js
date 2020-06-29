"use strict"
const assert = require('assert');
const { Matrix, zeros } = require('../../index');
const testUtils = require('../test.utils');

describe('transpose', function () {

    it('n x 1 and 1 x n transposes', function () {

        try {
            const expected = [[1, 2, 3, 4, 5, 6]];
            const A = new Matrix([[1], [2], [3], [4], [5], [6]]);
            const B = A.transpose();
            assert.ok(testUtils.compare(B, expected, 1e-8));
        } catch (e) {
            assert.fail(e.message);
        }
        try {
            const expected = [[1], [2], [3], [4], [5], [6]];
            const A = new Matrix([[1, 2, 3, 4, 5, 6]]);
            const B = A.transpose();
            assert.ok(testUtils.compare(B, expected, 1e-8));
        } catch (e) {
            assert.fail(e.message);
        }

    });

    it('true 2D transposes', function () {

        try {
            const expected = [[1, 2, 3], [4, 5, 6]];
            const A = new Matrix([[1, 4], [2, 5], [3, 6]]);
            const B = A.transpose();
            assert.ok(testUtils.compare(B, expected, 1e-8));
        } catch (e) {
            assert.fail(e.message);
        }
        try {
            const expected = [[1, 4], [2, 5], [3, 6]];
            const A = new Matrix([[1, 2, 3], [4, 5, 6]]);
            const B = A.transpose();
            assert.ok(testUtils.compare(B, expected, 1e-8));
        } catch (e) {
            assert.fail(e.message);
        }

    });

    it('transposes inplace', function () {

        try {
            const expected = [[1, 2, 3], [4, 5, 6]];
            const A = new Matrix([[1, 4], [2, 5], [3, 6]]);
            const C = zeros(2, 3);
            A.transpose(C);
            assert.ok(testUtils.compare(C, expected, 1e-8));
        } catch (e) {
            assert.fail(e.message);
        }
        try {
            const expected = [[1, 2, 3, 4, 5, 6]];
            const A = new Matrix([[1], [2], [3], [4], [5], [6]]);
            const C = zeros(1, 6);
            A.transpose(C);
            assert.ok(testUtils.compare(C, expected, 1e-8));
        } catch (e) {
            assert.fail(e.message);
        }

    });

});

describe('map', function () {

    it('map inplace', function () {

        try {
            const expected = [[2, 8], [4, 10], [6, 12]];
            const A = new Matrix([[1, 4], [2, 5], [3, 6]]);
            const C = zeros(3, 2);
            A.map(function(val) {return val * 2;}, C);
            assert.ok(testUtils.compare(C, expected, 1e-8));
        } catch (e) {
            assert.fail(e.message);
        }

    });
});

describe('get set', function () {

    it('basic', function () {

        try {
            const A = new Matrix([[1, 4], [2, 5], [3, 6]]);
            const val = A.get(0, 1);
            assert.equal(4, A.get(0, 1));
            const newVal = val * 2;
            A.set(newVal, 0, 1);
            assert.equal(8, A.get(0, 1));
        } catch (e) {
            assert.fail(e.message);
        }

    });

    it('not set undefined', function () {

        try {
            const A = new Matrix([[1, 4], [2, 5], [3, 6]]);
            A.set(undefined, 0, 1);
            assert.equal(4, A.get(0, 1));
        } catch (e) {
            assert.fail(e.message);
        }

    });

    it('copy initial parameters', function () {

        try {
            const original = [[2, 8], [4, 10], [6, 12]];
            const A = new Matrix(original);
            A.set(Math.PI, 0, 1);
            assert.equal(8, original[0][1]);
        } catch (e) {
            assert.fail(e.message);
        }

    });

});