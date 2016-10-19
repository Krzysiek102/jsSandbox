/// <reference path="typings/globals/jasmine/index.d.ts" />
'use strict';

describe('javaScript', function () {
    it('Revealing prototype pattern', function () {
        var Calculator = function (seed) {
            this.seed = seed;
        };
        Calculator.prototype = function () {
            function add(item) {
                return addInternally.call(this, item);
            };
            function addInternally(item) {
                return this.seed + item;
            };
            return {
                add: add
            };
        } ();

        var calculator = new Calculator(2);
        var result = calculator.add(3);
        expect(result).toBe(5);
    });

    it('classes', function () {
        class User {
            constructor(userName, email, password) {
                this.userName = userName;
                this.email = email;
                this.password = password;
            }

            static countUsers() {
                console.log('There are 50 users');
            }

            register() {
                console.log(this.userName + ' is now registered');
            }
        }

        let bob = new User('Bob', 'bob@gmail.com', '123');
        bob.register();
        User.countUsers();

        class Member extends User {
            constructor(params) {

            }
        }
    });

    it('default params', function () {
        function greet(greeting = 'Hello World') {
            console.log(greeting);
        };
        greet();
    });

    it('spread operator', function () {
        let args = [1, 2, 3];
        function test() {
            console.log(args);
        }
        test.apply(null, args);
        test(...args);
    });


    it('set', function () {
        let myArray = [11, 22, 34, 65, 34];
        let mySet = new Set(myArray);

        mySet.add('100');
        mySet.add({ a: 1, b: 2 });

        console.log(mySet.size);
        mySet.forEach(function (val) {
            console.log(val);
        });
    });

    it('map', function () {
        let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
        console.log(myMap);
    });

    it('arrow function', function () {
        function Prefixer(prefix) {
            this.prefix = prefix;
        }
        Prefixer.prototype.prefixArray = function (arr) {
            return arr.map((x) => {
                console.log(this.prefix + x);
            });
        }
        let pre = new Prefixer('Hello ');
        pre.prefixArray(['Brad', 'Jeff']);

        let add = (a, b) => a + b;
        console.log(add(2, 2));
    });

    it('promises', function (done) {
        let myPromise = Promise.resolve('Foo');
        myPromise.then((res) => console.log('res'));

        let myPromise2 = new Promise(function (resolve, reject) {
            setTimeout(() => resolve(4), 2000);
        });
        myPromise2.then((res) => {
            res += 3;
            console.log(res);
        });

        function getData(method, url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.onload = function () {
                    if (this.status >= 200 && this.status < 300) {
                        resolve(xhr.response);
                    } else {
                        reject(
                            {
                                status: this.status,
                                statusText: xhr.statusText
                            }
                        );
                    }
                };
                xhr.onerror = function () {
                    reject(
                        {
                            status: this.status,
                            statusText: xhr.statusText
                        }
                    );
                };
                xhr.send();
            });
        };
        getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function (data) {
            let todos = JSON.parse(data);
            console.log(todos.length);
            done();
        }).catch(function (err) {
            clg(`Error: ${err}`);
            done();
        });
    });

    it('generator', function  (){
        function *g1 (){
            console.log('Hello');
            yield 'Yield 1 Ran..';
            console.log('World');
            yield 'Yiled 2 Ran';
        }
        var g = g1();
        for(let val of g)
        {
            console.log(val);
        }
    })
});
