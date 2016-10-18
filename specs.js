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

});
