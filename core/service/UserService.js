angular.module('app')
.service('UserService', [ function() {

this.continuable = false

this.clear = () => {
  this.score = 0
  this.continuable = true;
}

this.increment = () => {
  this.score = this.score + 1
}


}])
