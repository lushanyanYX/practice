function isFunction(o) {
    return typeof o === 'function';
}

const PENDING = 'PENDING';
const FULFULLED = 'FULFULLED';
const REJECTED = 'REJECTED';

class MyPromise {
    constructor(fn) {
        if (isFunction(fn)) {
            throw new Error();
        }
        this._status = PENDING;
        this._value = undefined;
        this._fulfilledQueues = [];
        this._rejectedQueues = [];

        try {
            fn(this.resolve, this.reject);
        } catch (err) {
            this.reject(err);
        }
    }

    resolve = () => {};

    reject = () => {};

    then = () => {};

    catch = () => {};
}
