package parameter;

public class Parameter {

    
    static void sapa(String nama) {
        System.out.println("Halo " + nama);
    }

    
    static int tambah(int a, int b) {
        return a + b;
    }

    
    static int kali(int x, int y) {
        return x * y;
    }

    public static void main(String[] args) {

        
        sapa("Iman");

        
        int hasilTambah = tambah(5, 3);
        System.out.println("Hasil penjumlahan: " + hasilTambah);

        
        int hasilKali = kali(4, 6);
        System.out.println("Hasil perkalian: " + hasilKali);
    }
}
   
