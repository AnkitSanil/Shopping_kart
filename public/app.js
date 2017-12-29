'use strict';

angular.module("shoppingCart",["cart","ngRoute",""])

.config(["$routeProvider",function($routeProvider){
     $routeProvider.otherwise({
         redirectTo : "/cart"
     });
    

}]);