smart.service('model', function () {
    var model = {
        devices : [],
        sensors : [],
        user : {
            username : 'acika00mk',
            name : 'Aleksandar',
            surname : 'Kostadinovski',
            email : 'aleksandar@kostadinovski.info'
        }
    }
  return {
    sayHello: function () {
        console.log('hello');
        return {}
      
    }
  }
});