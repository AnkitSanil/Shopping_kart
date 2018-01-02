'use strict';

angular.module("shoppingCart",["cart","checkout","ngRoute"])

.config(["$routeProvider",function($routeProvider){
     $routeProvider.otherwise({
         redirectTo : "/cart"
     });
    

}]);