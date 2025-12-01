#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Masukkan tinggi segitiga: ";
    cin >> n;

    cout << "\n1. Siku-siku kiri bawah\n";
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) cout << "+ ";
        cout << endl;
    }

    cout << "\n2. Siku-siku kanan bawah\n";
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) cout << "  ";
        for (int j = 1; j <= i; j++) cout << "+ ";
        cout << endl;
    }

    cout << "\n3. Siku-siku kiri atas\n";
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) cout << "+ ";
        cout << endl;
    }

    cout << "\n4. Siku-siku kanan atas\n";
    for (int i = n; i >= 1; i--) {
        for (int s = 1; s <= n - i; s++) cout << "  ";
        for (int j = 1; j <= i; j++) cout << "+ ";
        cout << endl;
    }

    return 0;
}
