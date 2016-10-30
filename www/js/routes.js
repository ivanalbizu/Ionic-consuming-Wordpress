angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.equipo', {
    url: '/team',
    views: {
      'side-menu21': {
        templateUrl: 'templates/equipo.html',
        controller: 'equipoCtrl',
        controllerAs: 'vm'
      }
    }
  })

  //Investigar y aprender el ruteo
  .state('menu.equipo-detalle', {
    url: '/team/:teamId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/equipo-detalle.html',
        controller: 'equipoDetalleCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('menu.servicios', {
    url: '/services',
    views: {
      'side-menu21': {
        templateUrl: 'templates/servicios.html',
        controller: 'serviciosCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('menu.trabajos', {
    url: '/works',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajos.html',
        controller: 'trabajosCtrl',
        controllerAs: 'vm'
      }
    }
  })

  //Investigar y aprender el ruteo
  .state('menu.trabajo-detalle', {
    url: '/work/:workId',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajo-detalle.html',
        controller: 'trabajoDetalleCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('menu.contacto', {
    url: '/contact',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contacto.html',
        controller: 'contactoCtrl'
      }
    }
  })

  .state('menu.clientes', {
    url: '/clients',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clientes.html',
        controller: 'clientesCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('menu', {
    url: '/side-menu-main',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu-main/home')



});
