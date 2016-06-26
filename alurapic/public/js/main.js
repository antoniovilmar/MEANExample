angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');
		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		})
		.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		})
		.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		})
		.when('/login',{
			templateUrl: 'partials/login.html',
			controller: 'LoginController'
		});

		$routeProvider.otherwise({redirectTo: '/fotos'});

	});
