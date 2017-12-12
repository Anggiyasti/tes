app.controller('karyawanController', function($scope, $mdDialog, $mdToast, karyawanFactory){
    // read karyawan
    $scope.readKaryawan = function(){
 
        // use karyawan factory
        karyawanFactory.readKaryawan().then(function successCallback(response){
            $scope.karyawan = response.data;
        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });
 
    }
     
    // show 'create karyawan form' in dialog box
    $scope.showCreateProducKaryawanForm = function(event){
     
        $mdDialog.show({
            controller: DialogController,
            templateUrl: './app/karyawan/create_karyawan.template.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullscreen: true 
        });
    }
          
    // methods for dialog box
    function DialogController($scope, $mdDialog) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
    }

    // create new karyawan
    $scope.createKaryawan = function(){
     
        karyawanFactory.createKaryawan($scope).then(function successCallback(response){
            $scope.showToast("Success");     
            $scope.readKaryawan();
            $scope.cancel();
            $scope.clearKaryawanForm();
     
        }, function errorCallback(response){
            $scope.showToast("Unable to create record.");
        });
    }
    
    // clear variable / form values
    $scope.clearKaryawanForm = function(){
        $scope.id_pegawai = "";
        $scope.nama = "";
        $scope.jabatan = "";
        $scope.alamat = "";
        $scope.no_hp = "";
    }

    // show toast message
    $scope.showToast = function(message){
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .hideDelay(3000)
                .position("top right")
        );
    }

    $scope.showUpdateKaryawanForm = function(id){
        // get karyawan to be edited
        karyawanFactory.readOneKaryawan(id).then(function successCallback(response){
            // put the values in form
            $scope.id_pegawai = response.data[0].id_pegawai;
            $scope.nama = response.data[0].nama;
            $scope.jabatan = response.data[0].jabatan;
            $scope.alamat = response.data[0].alamat;
            $scope.tg_lahir = response.data[0].tgl_lahir;
     
            $mdDialog.show({
                controller: DialogController,
                templateUrl: './app/karyawan/update_karyawan.template.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                fullscreen: true
            }).then(
                function(){},

                function() {
                    $scope.clearKaryawanForm();
                }
            );
     
        }, function errorCallback(response){
            $scope.showToast("Unable to retrieve record.");
        });
     
    }

    // update karyawan record / save changes
    $scope.updateKaryawan = function(){
        productsFactory.updateKaryawan($scope).then(function successCallback(response){
            $scope.showToast("Success");
            $scope.readKaryawan();
            $scope.cancel();
            $scope.clearKaryawanForm();
     
        },
        function errorCallback(response) {
            $scope.showToast("Unable to update record.");
        });
     
    }

    //  detail karyawan
    $scope.detailKaryawan = function(id){     
        karyawanFactory.readOneKaryawan(id).then(function successCallback(response){
            // put the values in form
            $scope.id_pegawai = response.data[0].id_pegawai;
            $scope.nama = response.data[0].nama;
            $scope.jabatan = response.data[0].jabatan;
            $scope.alamat = response.data[0].alamat;
            $scope.no_hp = response.data[0].no_hp;
     
            $mdDialog.show({
                controller: DialogController,
                templateUrl: './app/karyawan/detail_karyawan.template.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                fullscreen: true
            }).then(
                function(){},
     
                function() {
                    $scope.clearKaryawanForm();
                }
            );
     
        }, function errorCallback(response){
            $scope.showToast("Unable to retrieve record.");
        });
     
    }

    $scope.update = function(){
        karyawanFactory.update($scope).then(function successCallback(response){
            $scope.showToast("Success");
            $scope.readKaryawan();
            $scope.cancel();
            $scope.clearKaryawanForm();
     
        }, function errorCallback(response){
            $scope.showToast("Unable to create record.");
        });
    }
    
    // cofirm karyawan deletion
    $scope.confirmDeleteKaryawan = function(event, id){     
        // set id of record to delete
        $scope.id = id;
     
        // dialog settings
        var confirm = $mdDialog.confirm()
            .title('Are you sure?')
            .textContent('Karyawan will be deleted.')
            .targetEvent(event)
            .ok('Yes')
            .cancel('No');
     
        // show dialog
        $mdDialog.show(confirm).then(
            // 'Yes' button
            function() {
                // if user clicked 'Yes', delete karyawan record
                $scope.deleteKaryawan();
            },
     
            // 'No' button
            function() {
                // hide dialog
            }
        );
    }
    
    // delete product
    $scope.deleteKaryawan = function(){
        karyawanFactory.deleteKaryawan($scope.id).then(function successCallback(response){
            $scope.showToast("Deleted");
            $scope.readKaryawan();
     
        }, function errorCallback(response){
            $scope.showToast("Unable to delete record.");
        });
     
    }
 
});