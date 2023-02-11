'use strict'

//1
function creerMultiplicateur(m) {
    if (typeof m != "number")
        throw new Error(m + " n'est pas un nombre");

    return function (x) {
        return x * m;
    }
}

//2
function creerSequence(init, step) {
    return function () {
        init += step;
        return init;
    }
}

//3
function creerFib(un1, un2) {
    return function () {
        let un = un1 + un2;
        un2 = un1;
        un1 = un;
        return un;
    }
}

//4 Paramètre facultatif
function creerMultiplicateur2(m, n = undefined) {
    if (typeof m != "number")
        throw new Error(m + " n'est pas un nombre");

    if (typeof n == "undefined")
        return function (x) {
            return x * m;
        }

    return n * m;
}

//5
function creerPower(m, n = undefined) {
    if (typeof m != "number")
        throw new Error(m + " n'est pas un nombre");

    if (typeof n == "undefined")
        return function power(x) {
            if (x > 0)
                return m * power(x-1);
            else
                return 1;
        }

    if (n > 0)
        return m * creerPower(m, n-1);
    else
        return 1;
}

//6
function formatter(n = 1) {
    return function (msg) {
        return n ++ + " : " + msg;
    }
}

//7
function write() {
    return function (msg) {
        console.log(msg);
    }
}

function writeAlert() {
    return function (msg) {
        alert(msg);
    }
}

//8
function logger(formatFunction, writeFunction) {
    return function log(msg)
    {
        writeFunction(formatFunction(msg));
    }
}