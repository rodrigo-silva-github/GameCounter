'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('mainController', ['$scope',
function($scope) {
			
	$scope.players = [];
	$scope.addNewPlayer = function(){		
		$scope.players.push({});
	};
}]);

