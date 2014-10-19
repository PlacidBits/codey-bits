var MyModule = {
    Main: {},
    Angular: {}
};

MyModule.Main = function () {
    var sayHello = function () {
        return "Hello from Main module!";
    }

    return {
        SayHello: sayHello
    };
}();

MyModule.Angular = function () {

    "use strict";

    //App initialization
    var app = angular.module("myApp", []);

    app.controller("MyController", MyController);

    function MyController() {
        var vm = this;
        vm.message = MyModule.Main.SayHello();
    }
}();