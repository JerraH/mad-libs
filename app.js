var madLibs = angular.module('madLibs', ['ngMessages']);

madLibs.controller('myController', ['$scope', function($scope) {
	$scope.lighting_object = '';
	$scope.landscape = '';
	$scope.descriptive_noun = '';
	$scope.superlative = '';
	$scope.landscape_item = '';
	$scope.other_adjective = '';
	$scope.time_of_day = '';
	$scope.otherLightingObject = '';
	$scope.adjective3 = '';
	$scope.adverb = '';
	$scope.adjective4 = '';
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

	$scope.reset = function(){
		$scope.lighting_object = '';
		$scope.landscape = '';
		$scope.descriptive_noun = '';
		$scope.superlative = '';
		$scope.landscape_item = '';
		$scope.other_adjective = '';
		$scope.time_of_day = '';
		$scope.otherLightingObject = '';
		$scope.adjective3 = '';
		$scope.adverb = '';
		$scope.adjective4 = '';
		$scope.Moon = 'She';
		$scope.Sun = 'He';
		$('.wordIn').show();
		$('.paragraph').hide();
	};
}
]);