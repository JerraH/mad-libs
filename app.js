var madLibs = angular.module('madLibs', []);

madLibs.controller('myController', ['$scope', function($scope) {
	$scope.lighting_object = 'Object';
	$scope.landscape = 'Place';
	$scope.descriptive_noun = 'Character Trait';
	$scope.superlative = 'Adjective';
	$scope.landscape_item = 'Object';
	$scope.other_adjective = 'Adjective';
	$scope.time_of_day = 'Time';
	$scope.otherLightingObject = 'Object';
	$scope.adjective3 = 'Adjective';
	$scope.adverb = 'Adverb';
	$scope.adjective4 = 'Adjective';
	$scope.Moon = 'She';
	$scope.Sun = 'He';
}
]);