var db=require('../dbconnection');

var Karyawan={

  getAllKaryawan:function(callback){
  	return db.query("Select * from karyawan",callback);
  },

  getKaryawanById:function(id_pegawai,callback){
      return db.query("select * from karyawan where id_pegawai=?",[id_pegawai],callback);
  },

  addKaryawan:function(Karyawan,callback){
  	return db.query("Insert into karyawan values(?,?,?,?,?)",['',Karyawan.nama,Karyawan.jabatan,Karyawan.alamat,Karyawan.no_hp],callback);
  },

  deleteKaryawan:function(id_pegawai,callback){
      return db.query("delete from karyawan where id_pegawai=?",[id_pegawai],callback);
  },

  updateKaryawan:function(id_pegawai,Karyawan,callback){
    console.log(Karyawan);
      return  db.query("update karyawan set nama=?,jabatan=?,alamat=?,no_hp=? where id_pegawai=?",[Karyawan.nama,Karyawan.jabatan,Karyawan.alamat,Karyawan.no_hp,id_pegawai],callback);
  },

};
module.exports=Karyawan;