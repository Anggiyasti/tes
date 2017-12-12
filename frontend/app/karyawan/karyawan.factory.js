app.factory("karyawanFactory", function($http){
 
    var factory = {};
 
    // read all karyawan
    factory.readKaryawan = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Karyawans'
        });
    };
     
    // create karyawan
    factory.createKaryawan = function($scope){
        return $http({
            method: 'POST',
            data: {
                'nama' : $scope.nama,
                'jabatan' : $scope.jabatan,
                'alamat' : $scope.alamat,
                'no_hp' : $scope.no_hp,
            },
            url: 'http://localhost:3000/Karyawans'
        });
    };

    factory.updateKaryawan = function($scope){     
        return $http({
            method: 'POST',
            data: {
                'nama' : $scope.nama,
                'jabatan' : $scope.jabatan,
                'alamat' : $scope.alamat,
                'no_hp' : $scope.no_hp,
            },
            url: 'http://localhost:3000/Karyawans/'+$scope.id_pegawai
        });
    };

    // read one karyawn
    factory.readOneKaryawan = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/Karyawans/' + id
        });
    };

    factory.update = function($scope){
        return $http({
            method: 'POST',
            data: {
                'nama' : $scope.nama,
                'jabatan' : $scope.jabatan,
                'alamat' : $scope.alamat,
                'no_hp' : $scope.no_hp,
            },
            url: 'http://localhost:3000/Karyawans/edit/'+$scope.id_pegawai
        });
    };

    // delete karyawan
    factory.deleteKaryawan = function(id){
        return $http({
            method: 'POST',
            data: { 'id' : id },
            url: 'http://localhost:3000/Karyawans/delete/'+id
        });
    };
 
         
    return factory;
});