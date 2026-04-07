public class MethodOverload {
    
    static int Perkalian(int a, int b) {
        return a*b;
    }
    
    static int Perkalian(int a, int b, int c) {
        return a*b*c;
    }
    
    static double Perkalian(double a, double b) {
        return a*b;
    }
    
    public static void Main(String[] args) {
        System.out.println("Hasil 1 : "+Perkalian(2,3));
        System.out.println("Hasil 2 : "+Perkalian(2,3,4));
        System.out.println("Hasil 3 : "+Perkalian(2.5,4.0));
    }
    
}