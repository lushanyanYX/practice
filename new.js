function create(Fn, ...args) {
    // 创建一个空的对象,并链接原型
    const obj = Object.create(Fn.prototype);
    // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
    const ret = Fn.apply(obj, args);
    // 优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj;
}

// function Foo(a, b) {
//     this.a = a;
//     this.b = b;
//     return {};
// }

// const foo = new Foo(1, 2);
// const foo = create(Foo, 1, 2);

// console.log(foo);
// console.log(foo.__proto__);

// console.log(foo.__proto__ === Foo.prototype);
