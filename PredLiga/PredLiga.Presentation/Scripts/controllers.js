'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'PredLiga | Allan Mejia';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'PredLiga | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'PredLiga | Sign In';
        // TODO: Authorize a user
        $scope.login = function () {
            $location.path('/profile');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
        $scope.register = function() {
            $location.path('/register');
            return false;
        };

    }])

     // Path: /register
    .controller('RegisterCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'PredLiga | Register';
        // TODO: Register a new user
        $scope.login = function () {
            $location.path('/login');
            return false;
        };
    }])

     // Path: /juegos
    .controller('GamesCtrl', ['$scope', '$location', '$window', '$stateParams', function ($scope, $location, $window, $stateParams) {
        $scope.$root.title = 'PredLiga | Juegos';
        // TODO: Manejar Juegos
        console.log($stateParams.id);

        $scope.FilterGames = [];
        $scope.DeletedGames = [];

        $scope.availableGames = [
        { id_liga_juego: 1, contrincante1: "Barcelona",contrincante2:"Madrid", encuentro: new Date(), marcador1: "0",marcador2:"0"},
         { id_liga_juego: 1, contrincante1: "Madrid", contrincante2: "Levante", encuentro: new Date(), marcador1: "0", marcador2: "0" },
         { id_liga_juego: 2, contrincante1: "Chelsea", contrincante2: "Manchester", encuentro: new Date(), marcador1: "0", marcador2: "0" },
         { id_liga_juego: 3, contrincante1: "Genova", contrincante2: "Calgliari", encuentro: new Date(), marcador1: "0", marcador2: "0" },
         { id_liga_juego: 4, contrincante1: "Monaco", contrincante2: "Francia", encuentro: new Date(), marcador1: "0", marcador2: "0" },
          { id_liga_juego: 5, contrincante1: "Changai", contrincante2: "Chou", encuentro: new Date(), marcador1: "0", marcador2: "0" }
        ];

        var inicio = function () {
            $scope.FilterGames = [];
            for (var i = 0; i < $scope.availableGames.length; i++) {
                if ($scope.availableGames[i].id_liga_juego.toString() === $stateParams.id) {
                    $scope.FilterGames.push($scope.availableGames[i]);
                }
            }
        };

        inicio();
        $scope.Contrincante1 = "";
        $scope.Contrincante2 = "";

        $scope.addNewGame = function () {
            var game = {
                id_liga_juego: parseInt($stateParams.id), contrincante1: $scope.Contrincante1,
                contrincante2: $scope.Contrincante2, encuentro: new Date(), marcador1: "0",marcador2:"0"
            };
            $scope.availableGames.push(game);
            inicio();
            $scope.Contrincante1 = "";
            $scope.Contrincante2 = "";
        };

        $scope.deleteGame = function (nombreEquipo1, nombreEquipo2) {
            for (var i = 0; i < $scope.availableGames.length; i++) {
                if ($scope.availableGames[i].contrincante1 === nombreEquipo1 && $scope.availableGames[i].contrincante2 === nombreEquipo2) {
                    $scope.DeletedGames.push($scope.availableGames[i]);
                    $scope.availableGames.splice(i, 1);
                    inicio();
                }
            }
        };

        $scope.isEditing = false;
        $scope.NombreContrincante1Anterior = "";
        $scope.NombreContrincante2Anterior = "";
        $scope.NuevoNombreContrincante1 = "";
        $scope.NuevoNombreContrincante2 = "";

        $scope.editGame = function (nombreEquipo1, nombreEquipo2) {
            $scope.isEditing = true;
            $scope.NombreContrincante1Anterior = nombreEquipo1;
            $scope.NombreContrincante2Anterior = nombreEquipo2;
            $scope.NuevoNombreContrincante1 = nombreEquipo1;
            $scope.NuevoNombreContrincante2 = nombreEquipo2;
        };

        $scope.cancelEdit = function () {
            $scope.isEditing = false;
        };

        $scope.FinishEditing = function () {
            for (var i = 0; i < $scope.availableGames.length; i++) {
                if ($scope.availableGames[i].contrincante1 === $scope.NombreContrincante1Anterior) {
                    $scope.availableGames[i].contrincante1 = $scope.NuevoNombreContrincante1;
                    $scope.availableGames[i].contrincante2 = $scope.NuevoNombreContrincante2;
                }
            }
            $scope.isEditing = false;
            $scope.NombreContrincante1Anterior = "";
            $scope.NombreContrincante2Anterior = "";
            $scope.NuevoNombreContrincante1 = "";
            $scope.NuevoNombreContrincante2 = "";

            inicio();
        };
    }])

     // Path: /forgot-password
    .controller('ForgotPasswordCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Recuperar password';
        // TODO: Forgot password
        $scope.RecoverPassword = function () {
            $scope.ShowMessage = true;
           // $location.path('/RecoverPassword');
            return false;
        };
    }])

      // Path: /profile
    .controller('ProfileCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'PredLiga | Mi perfil';
        // TODO: Forgot password
        $scope.ligas = [
        {
            nombre: 'Española', pais: 'España', inicio: new Date(),
            fin: new Date(), id:1
        },
        {
            nombre: 'Italiana', pais: 'Italia', inicio: new Date(),
            fin: new Date(), id: 2
        },
        {
            nombre: 'Inglesa', pais: 'Ingaltera', inicio: new Date(),
            fin: new Date(), id: 3
        },
        {
           nombre: 'Francesa', pais: 'Francia', inicio: new Date(),
           fin: new Date(),  id: 4
        },
        {
            nombre: 'China', pais: 'China', inicio: new Date(),
            fin: new Date(), id: 5
        }];

        $scope.ordenarPor = function (orden) {
            $scope.OrdenSeleccionado = orden;
        };

        $scope.NombreLiga = "";
        $scope.NombrePais = "";

        $scope.addNewLeague = function () {
            var league = { nombre: $scope.NombreLiga,pais: $scope.NombrePais,inicio: new Date(),fin: new Date(), id: $scope.ligas.length+1 };
            $scope.ligas.push(league);
            $scope.NombreLiga = "";
            $scope.NombrePais = "";
        };

        $scope.deleteLeague = function (nombre) {
            for (var i = 0; i < $scope.ligas.length; i++) {
                if ($scope.ligas[i].nombre === nombre) {
                    $scope.ligas.splice(i, 1);
                }
            }
        };

        $scope.isEditingLeague = false;
        $scope.NombreAnteriorLiga = "";
        $scope.NuevoNombreLiga = "";
        $scope.NombreAnteriorPaisLiga = "";
        $scope.NuevoNombrePaisLiga = "";
       

        $scope.editLeague = function (leaguename,leaguecountryname) {
            $scope.isEditingLeague = true;
            $scope.NombreAnteriorLiga = leaguename;
            $scope.NombreAnteriorPaisLiga = leaguecountryname;
            $scope.NuevoNombreLiga = leaguename;
            $scope.NuevoNombrePaisLiga = leaguecountryname;
        };

        $scope.cancelEditLeague = function () {
            $scope.isEditingLeague = false;
        };

        $scope.FinishEditingLeague = function () {
            for (var i = 0; i < $scope.ligas.length; i++) {
                if ($scope.ligas[i].nombre === $scope.NombreAnteriorLiga) {
                    $scope.ligas[i].nombre = $scope.NuevoNombreLiga;
                    $scope.ligas[i].pais = $scope.NuevoNombrePaisLiga;
                }
            }
            $scope.isEditingLeague = false;
            $scope.NombreAnteriorLiga = "";
            $scope.NuevoNombreLiga = "";
            $scope.NuevoNombrePaisLiga = "";
            $scope.NombreAnteriorPaisLiga = "";
        };

     
    }])

      // Path: /leaguea
    .controller('LeagueCtrl', ['$scope', '$location', '$window','$stateParams', function ($scope, $location, $window, $stateParams) {
        $scope.$root.title = 'PredLiga | Liga';

        console.log($stateParams.id);
   
        $scope.FilterTeams = [];

        $scope.teams = [{nombre: 'Levante', id_liga: 1},{nombre: 'Barcelona', id_liga: 1},{nombre: 'Madrid', id_liga: 1},{nombre: 'Liverpool', id_liga: 2},{nombre: 'Manchester', id_liga:2},
        {nombre: 'Chelsea', id_liga: 2},{nombre: 'Genova', id_liga: 3},{ nombre: 'Cagliari', id_liga: 3 }, { nombre: 'Inter', id_liga: 5 }, { nombre: 'Monaco', id_liga: 4 }, { nombre: 'Paris', id_liga: 4 },
        { nombre: 'France', id_liga: 4 }, { nombre: 'Shangai', id_liga: 5 }, { nombre: 'Sheck', id_liga: 5 }, { nombre: 'Chou', id_liga: 5 }];

     
        var inicio = function () {
            $scope.FilterTeams = [];
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.teams[i].id_liga.toString() === $stateParams.id) {
                    $scope.FilterTeams.push($scope.teams[i]);
                }
            }
        };

        inicio();

        $scope.NombreEquipo = "";

        $scope.addNewTeam = function(){
            var team = {nombre: $scope.NombreEquipo, id_liga:parseInt($stateParams.id)};
            $scope.teams.push(team);
            inicio();
            $scope.NombreEquipo = "";
        };

        $scope.deleteTeam = function (nombre) {
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.teams[i].nombre === nombre ) {
                    $scope.teams.splice(i,1);
                    inicio();
                }
            }
        };

        $scope.isEditing = false;
        $scope.NombreAnterior = "";
        $scope.NuevoNombre = "";

        $scope.editTeam = function (teamname) {
            $scope.isEditing = true;
            $scope.NombreAnterior = teamname;
            $scope.NuevoNombre = teamname;
        };

        $scope.cancelEdit = function () {
            $scope.isEditing = false;
        };

        $scope.FinishEditing = function () {
            for (var i = 0; i < $scope.teams.length; i++) {
                if ($scope.teams[i].nombre === $scope.NombreAnterior) 
                    $scope.teams[i].nombre = $scope.NuevoNombre;
            }
            $scope.isEditing = false;
            $scope.NombreAnterior = "";
            $scope.NuevoNombre = "";

            inicio();
        };

    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);