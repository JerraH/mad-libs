var madLibs = angular.module('madLibs', ['ngMessages']);

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

	$scope.submit = function(){

	if($scope.wordIn.$valid) {
		$('.wordIn').hide();
		$('.paragraph').show();
	}
	else {
		alert('You must fill out all the form pieces!')
	}
	};
}

]);