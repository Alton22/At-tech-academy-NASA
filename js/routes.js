angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('omnia', {
    url: '/login',
    templateUrl: 'templates/omnia.html',
    controller: 'omniaCtrl'
  })

  .state('signUp', {
    url: '/register',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('pref1', {
    url: '/preferences1',
    templateUrl: 'templates/pref1.html',
    controller: 'pref1Ctrl'
  })

  .state('pref2', {
    url: '/preferences2',
    templateUrl: 'templates/pref2.html',
    controller: 'pref2Ctrl'
  })

  .state('movieGenre', {
    url: '/page8',
    templateUrl: 'templates/movieGenre.html',
    controller: 'movieGenreCtrl'
  })

  .state('home', {
    url: '/page11',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('newRealeses', {
    url: '/page10',
    templateUrl: 'templates/newRealeses.html',
    controller: 'newRealesesCtrl'
  })

  .state('mostPopular', {
    url: '/page13',
    templateUrl: 'templates/mostPopular.html',
    controller: 'mostPopularCtrl'
  })

  .state('action', {
    url: '/page14',
    templateUrl: 'templates/action.html',
    controller: 'actionCtrl'
  })

  .state('comedy', {
    url: '/page15',
    templateUrl: 'templates/comedy.html',
    controller: 'comedyCtrl'
  })

  .state('horror', {
    url: '/page16',
    templateUrl: 'templates/horror.html',
    controller: 'horrorCtrl'
  })

  .state('drama', {
    url: '/page17',
    templateUrl: 'templates/drama.html',
    controller: 'dramaCtrl'
  })

  .state('animation', {
    url: '/page18',
    templateUrl: 'templates/animation.html',
    controller: 'animationCtrl'
  })

  .state('tVGenre', {
    url: '/page19',
    templateUrl: 'templates/tVGenre.html',
    controller: 'tVGenreCtrl'
  })

  .state('newReleases', {
    url: '/page20',
    templateUrl: 'templates/newReleases.html',
    controller: 'newReleasesCtrl'
  })

  .state('mostPopular2', {
    url: '/page21',
    templateUrl: 'templates/mostPopular2.html',
    controller: 'mostPopular2Ctrl'
  })

  .state('drama2', {
    url: '/page22',
    templateUrl: 'templates/drama2.html',
    controller: 'drama2Ctrl'
  })

  .state('reality', {
    url: '/page23',
    templateUrl: 'templates/reality.html',
    controller: 'realityCtrl'
  })

  .state('crime', {
    url: '/page24',
    templateUrl: 'templates/crime.html',
    controller: 'crimeCtrl'
  })

  .state('comedySitcom', {
    url: '/page25',
    templateUrl: 'templates/comedySitcom.html',
    controller: 'comedySitcomCtrl'
  })

  .state('spiderManFarFromHome', {
    url: '/page12',
    templateUrl: 'templates/spiderManFarFromHome.html',
    controller: 'spiderManFarFromHomeCtrl'
  })

  .state('rickAndMorty', {
    url: '/page26',
    templateUrl: 'templates/rickAndMorty.html',
    controller: 'rickAndMortyCtrl'
  })

$urlRouterProvider.otherwise('/login')


});