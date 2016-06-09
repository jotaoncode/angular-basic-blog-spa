function authService($localForage) {
  var localDB = 'blog-posts';

  return {
    saveSession: function (userName){
      return $localForage.setItem(localDB, userName);
    },
    logOut: function () {
      return $localForage.removeItem(localDB);
    },
    isValidUserCredential: function (userName) {
      return !!userName;
    },
    getSession: function () {
      return $localForage.getItem(localDB);
    }
  };
}
angular.module('blog-core').factory('authService', ['$localForage', authService]);
