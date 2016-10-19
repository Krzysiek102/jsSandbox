/// <reference path="typings/globals/jasmine/index.d.ts" />
'use strict';

describe('javaScript', function () {
    it('Revealing prototype pattern', function () {
        var Calculator = function(seed){
            this.seed = seed;
        };
        Calculator.prototype = function  (){
            function add (item){
                return addInternally.call(this, item);
            };
            function addInternally(item){
                return this.seed + item;
            };
            return {
                add: add
            };
        }();

        var calculator = new Calculator(2);
        var result = calculator.add(3);
        expect(result).toBe(5);
    });
    
    it('classes', function() {
        class User{
            constructor(userName, email, password){
                this.userName = userName;
                this.email = email;
                this.password = password;
            }

            static countUsers(){
                console.log('There are 50 users');
            }

            register(){
                console.log(this.userName + ' is now registered');
            }
        }

        let bob = new User('Bob', 'bob@gmail.com', '123');
        bob.register();
        User.countUsers();

        class Member extends User{
            constructor(params) {
                
            }
        }
    });

    it('default params', function() {
        function greet(greeting = 'Hello World'){
            console.log(greeting);
        };
        greet();
    });

    it('spread operator', function() {
        let args = [1,2,3];
        function test (){
            console.log(args);
        }
        test.apply(null, args);
        test(...args);
    });

    
    it('set', function() {
        let myArray = [11,22,34,65,34];
        let mySet = new Set(myArray);
        
        mySet.add('100');
        mySet.add({a: 1, b: 2});
        
        console.log(mySet.size);
        mySet.forEach(function(val){
            console.log(val);
        });
    });

    it('map', function  (){
        let myMap = new Map([['a1','Hello'], ['b2','Goodbye']]);
        console.log(myMap);
    });

    it('prefixer', function  (){
        function Prefixer (prefix){
            this.prefix = prefix;
        }
        Prefixer.prototype.prefixArray = function  (arr){
            return arr.map((x) =>{
                console.log(this.prefix + x);
            });
        }
        let pre = new Prefixer('Hello ');
        pre.prefixArray(['Brad', 'Jeff']);
        
        let add = (a,b) => a+b;
        console.log(add(2,2));
    });
        
});
