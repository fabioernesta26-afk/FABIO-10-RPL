
import java.util.Scanner;


public class belajarinputoutput {

    
    public static void main(String[] args) {
       Scanner inputUser = new Scanner(System.in);
        System.out.print("Inputkan nama anda: ");
        String nama = inputUser.nextLine();
        
         System.out.print("Inputkan nomer absen anda: ");
            int absen = inputUser.nextInt();
            
        System.out.print("berapa uang saku anda: ");
            double uang = inputUser.nextDouble();
            
        
            
        Scanner masukkan = new Scanner(System.in);
            System.out.print("Character apa yang kamu suka: ");
            String simbol = masukkan.nextLine();
            
        System.out.print("Character yang  kamu suka" + simbol);
        System.out.println("Nama yang di input: " + nama);
        System.out.println("Nomor absen yang di input: " + absen);
        System.out.println("uang saku anda adalah: " + uang);
        
    }
    
}
