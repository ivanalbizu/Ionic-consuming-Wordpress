(function() {
  'use strict';

  angular.module('app.controllers', [])
    .controller('homeCtrl', homeCtrl)
    .controller('equipoCtrl', equipoCtrl)
    .controller('serviciosCtrl', serviciosCtrl)
    .controller('trabajosCtrl', trabajosCtrl)
    .controller('contactoCtrl', contactoCtrl)
    .controller('clientesCtrl', clientesCtrl)
    .controller('equipoDetalleCtrl', equipoDetalleCtrl)
    .controller('trabajoDetalleCtrl', trabajoDetalleCtrl);

  homeCtrl.$inject = [];
  function homeCtrl($) {

  }

  equipoCtrl.$inject = ['TeamService'];
  function equipoCtrl(TeamService) {
    console.log('Entra en Controller: equipoCtrl');

    var vm = this;

    vm.getAll     = getAll;

    getAll();

    function getAll() {
      TeamService.getAllData().then(function(dataResponse) {
        vm.teams = dataResponse;
      });
    }
  }

  equipoDetalleCtrl.$inject = ['TeamService', '$stateParams'];
  function equipoDetalleCtrl(TeamService, $stateParams) {
    console.log($stateParams, 'Entra en Controller: equipoDetalleCtrl');

    var vm = this;
    var id = $stateParams.teamId;
    //vm.getOneTeam = getOneTeam;

    function getOneTeam(id) {
      TeamService.getOneData(id).then(function(dataResponse) {
        console.log(dataResponse);
        vm.team = dataResponse;
      });
    }
    getOneTeam(id);
  }

  serviciosCtrl.$inject = ['ServicePostService'];
  function serviciosCtrl(ServicePostService) {
    console.log('Entra en Controller: serviciosCtrl');

    var vm = this;

    vm.getAll     = getAll;

    getAll();

    function getAll() {
      ServicePostService.getAllData().then(function(dataResponse) {
        vm.services = dataResponse;
      });
    }
  }

  trabajosCtrl.$inject = ['WorkService', '$scope'];
  function trabajosCtrl(WorkService, $scope) {
    var vm = this;

    vm.getAll     = getAll;

    getAll();

    function getAll() {
      WorkService.getAllData().then(function(dataResponse) {
        console.log(dataResponse);
        vm.works = dataResponse;
      });
    }

  }

  trabajoDetalleCtrl.$inject = ['WorkService', '$stateParams', '$scope', '$ionicModal', '$ionicSlideBoxDelegate'];
  function trabajoDetalleCtrl(WorkService, $stateParams, $scope, $ionicModal, $ionicSlideBoxDelegate) {
    console.log($stateParams, 'Entra en Controller: trabajoDetalleCtrl');

    var vm = this;
    var id = $stateParams.workId;

    function getOneWork(id) {
      WorkService.getOneData(id).then(function(dataResponse) {
        console.log(dataResponse);
        vm.work = dataResponse;
      });
    }
    getOneWork(id);

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $ionicSlideBoxDelegate.slide(0);
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    // Call this functions if you need to manually control the slides
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

  	$scope.goToSlide = function(index) {
      $scope.modal.show();
      $ionicSlideBoxDelegate.slide(index);
    }

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };

  }

  contactoCtrl.$inject = [];
  function contactoCtrl($scope) {

  }

  clientesCtrl.$inject = ['ClientService'];
  function clientesCtrl(ClientService) {
    console.log('Entra en Controller: clientesCtrl');

    var vm = this;

    vm.getAll     = getAll;

    getAll();

    function getAll() {
      ClientService.getAllData().then(function(dataResponse) {
        vm.clients = dataResponse;
      });
    }
  }

})();
