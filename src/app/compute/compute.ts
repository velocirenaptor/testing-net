export function compute(x: number) {
    if (x < 0) {
        return 0;
    }
    if (x > 0) {
        return x + 1; // Modify as needed based on your logic
    }
    return 1; // Default return for when x is 0 (or adjust as needed)
}
