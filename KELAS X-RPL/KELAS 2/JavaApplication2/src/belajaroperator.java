/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author MyPC PRO
 */
public class belajaroperator {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        /*eperator aritmatika*/
       int a =17;
       int b = 3;
       
       int penjumlahan = a + b;
        System.out.println("hasil pemjulahan dalam angka adalah: " + penjumlahan);
        
       int c = 13;
       int d = 3;
       
       int pengurangan = c - d;
        System.out.println("hasil pengurangan dalam angka adalah: " + pengurangan);
        
       int e = 10;
       int f = 3;
       
       int perkalian = e * f;
        System.out.println("hasil perkalian dalam angka adalah: " + perkalian);
        
       int g = 15;
       int h = 3;
       
       int pembagian = g / h;
        System.out.println("hasil pembagian dalam angka adalah: " + pembagian);
        
       int i = 10;
       int j = 3;
       
       int modulus = i % j;
        System.out.println("hasil modulus dalam angka adalah: " + modulus);
        
        
        //eperator penugasan
        // =memberi nilai
        // +=penjumlahan nilai
        int z = 20;
        z +=5;
        System.out.println(z);
        // -=pengurangan nilai
        a -=2;
        System.out.println(a);
        // *=perkalian nilai
         b *=100;
         System.out.println(b);
        // \=pembagian nilai
        g /=3;
        System.out.println(g);
        // %=modulus nilai
        i %=3;
        System.out.println(i);
        
        //operator pembanding
        
        int p = 50;
        int y = 10;
        
        boolean hasil1 = p == y;
        boolean hasil2 = p >= y;
        boolean hasil3 = p != y;
        boolean hasil4 = p <= y;
        
        System.out.println(hasil1);
        System.out.println(hasil2);
        System.out.println(hasil3);
        System.out.println(hasil4);
        
        //operator logika
        
        boolean result = true && true;
        boolean result2 = p>y && p==y;
        boolean result3 = true || true;
        boolean result4 = p!=y || p<y;
        
        System.out.println("operator logika 1 "+ result);
        System.out.println("operator logika 2 "+ result2);
        System.out.println("operator logika 3 "+ result3);
        System.out.println("operator logika 4 "+ result4);
    } 
    
  
    
}
