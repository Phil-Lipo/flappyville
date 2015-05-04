app.controller('login', ['$scope', 'GAuth', '$state',
    function myController($scope, GAuth, $state) {
	
    $scope.signIn = function() {
            GAuth.login().then(function(){
            $state.go('home'); // action after the user have validated that
                          // your application can access their Google account.
            }, function() {
                console.log('login fail');
            });
      };
    }
]);

app.controller('Home', function($rootScope, $scope, $state, GApi, GAuth) {

	
  /**
   * Log out the user
   */
  $scope.signOut = function() {
	  console.log('login fail');
    GAuth.logout().then(function() {
      $state.go('login');
    })
  }
  
  $scope.sinscrire = function(x, iduser) {
	  GApi.executeAuth('evenementsendpoint', 'updateEvenements', {id: x.id, titre:x.titre, adresse: x.adresse, ville: x.ville,heure: x.heure,date: x.date, inscriptions: x.inscriptions || [iduser] });
	  $scope.reload();
  }
  
  $scope.verifinscrit = function(x, iduser) {
	  var found =  _.find(x.inscriptions, function(id){ return id == iduser; });
	  
	  if (found) {
         return true;
     } else {
    	 return false;
     }
  }
  
	GApi.executeAuth('evenementsendpoint', 'listEvenements').then(function(resp) {
		$scope.contacts = resp.items;
		
	});
  
});
