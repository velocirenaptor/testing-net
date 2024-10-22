export function simpson(a: number, b: number, n: number, func: (x: number) => number): number {
    if (n % 2 !== 0) {
        throw new Error("n must be even for Simpson's rule.");
    }

    const h = (b - a) / n;
    let sum = func(a) + func(b);

    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        sum += (i % 2 === 0 ? 2 : 4) * func(x);
    }

    return (h / 3) * sum;
}

export function twoX(x: number): number {
    return 2 * x;
}

export function x2(x: number): number {
    return x * x;
}

export function oneOverX(x: number): number {
    if (x === 0) {
        throw new Error("Division by zero is undefined.");
    }
    return 1 / x;
}
