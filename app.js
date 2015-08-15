var madLibs = angular.module('madLibs', ['ngAnimate']);

madLibs.controller('myController', ['$scope', function($scope, $timeout) {
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

	$scope.parShow = 'hide';
	$scope.inShow = 'show';

	$scope.hideAn = function() {
		$scope.inShow = 'hide';
	};

												// submit

	$scope.submit = function(){
	  if($scope.wordIn.$valid) {
		  $scope.inShow = 'disappeared';
		  $scope.parShow = 'appeared';
	  }
	  else {
		  $('.warning').show();
	  }
	};

												// Reset

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
		$scope.parShow = 'disappeared';
		$scope.inShow = 'appeared';
		$scope.wordIn.$submitted = false;
	};

	$scope.applyRed = function(e) {
	$(e.target).closest('span').css({class: 'red'});
};
}

]);