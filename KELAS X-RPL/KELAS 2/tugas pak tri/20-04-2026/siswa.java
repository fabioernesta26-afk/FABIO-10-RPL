package siswa;


public class siswa {
    public siswa () {
        System.out.println("Constructor => 1");
    }
    
    public siswa (String nama) {
        System.out.println("Constructor => 2");
        System.out.println("nama saya adalah: " + nama);
    }
    
    public siswa (String nama, int umur) {
        System.out.println("Constructor => 3");
        System.out.println("umur saya adalah: " + umur);
    }
    
    public siswa (String  nama, int umur, String alamat) {
        System.out.println("Constructor +> 4");
        System.out.println("alamat saya di: " + alamat);
    }
}
