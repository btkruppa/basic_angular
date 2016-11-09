angular.module('app').
  config(['$routeProvider',
    function config($routeProvider) {

      $routeProvider.
      	when('/home', {

          template: `
            <div class='pageWidth pageHeight outerContainer red'>
              <div class='centerBox'>
                <a ng-href='#score'><input type='button' ng-click='homeCtrl.userService.clear()' value='New' class='row'></input></a><br/>
                <a ng-href='#score' ng-show='homeCtrl.userService.continuable'><input type='button' value='Continue' class='row'></input></a>
              </div>
            </div>
          `,
          controller: 'HomeController',
          controllerAs: 'homeCtrl'

        }).
      	when('/score', {

          template: `
            <label> Score: {{scoreCtrl.userService.score}}</label>
            <div class='pageWidth pageHeight outerContainer'>
              <div class='centerBox'>
                <input type='button' ng-click='scoreCtrl.userService.increment()' value='+1' class='row'></input>
              </div>
            </div>
          `,
          controller: 'ScoreController',
          controllerAs: 'scoreCtrl',
        }).
        otherwise('/home');
    }
  ]);
