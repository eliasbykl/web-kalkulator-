export function fakultet(tall) {
    if (tall < 0) return NaN; // Fakultet er ikke definert for negative tall
    let resultat = 1;
    for (let i = 1; i <= tall; i++) {
        resultat *= i;
    }
    return resultat;
}