smart.service('model', function () {
    var model = {
        devices : [{
            name : 'D1',
            type : 'panel',
            capacity : 23,
            area : 23
        },
        {
            name : 'D2',
            type : 'panel',
            capacity : 25,
            area : 25
        },
        {
            name : 'D3',
            type : 'panel',
            capacity : 11,
            area : 11
        }],
        sensors : [
            {
                name : 'S1',
                type : 'sensor',
                capacity : 1212,
                area : 51
            },
            {
                name : 'S2',
                type : 'sensor',
                capacity : 55
            }
        ],
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
    },
    getModel : function(){
      return model;
    }
  }
});
