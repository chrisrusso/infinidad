	
	//definimos la aplicación y el operador
	var app = angular.module('pixel', []);
	
	app.controller('scanner', function($scope, $location, $window, $interval, $filter, $http) {
		
		
		$scope.pixeles = [];
		
		/* funcion para desarmar url, solo analisis *******************************************************/
		/**************************************************************************************************/
		
		$scope.crear_pixeles = function(volumen) {
			
			for (i=1; i<=volumen;i++){
				$scope.pixeles.push(i);
			}
		}
		
		

	});