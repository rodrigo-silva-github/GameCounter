'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('mainController', ['$scope',
function($scope) {
	var nextId = 0;
	$scope.players = [];
	$scope.addNewPlayer = function() {
		nextId = nextId + 1;
		$scope.players.push({
			'id' : nextId,
			'level' : 0,
			'equip' : 0
		});
	};

	$scope.levelUp = function(player) {
		for (var i in $scope.players) {								
			if($scope.players[i].id == player.id){
				$scope.players[i].level = $scope.players[i].level + 1; 
			}			
		}
	};

	$scope.levelDown = function(player) {
		for (var i in $scope.players) {								
			if($scope.players[i].id == player.id){
				$scope.players[i].level = $scope.players[i].level - 1; 
			}			
		}
	};

	$scope.equipUp = function(player) {
		for (var i in $scope.players) {								
			if($scope.players[i].id == player.id){
				$scope.players[i].equip = $scope.players[i].equip + 1; 
			}			
		}
	};

	$scope.equipDown = function(player) {
		for (var i in $scope.players) {								
			if($scope.players[i].id == player.id){
				$scope.players[i].equip = $scope.players[i].equip - 1; 
			}			
		}
	};
}]);

