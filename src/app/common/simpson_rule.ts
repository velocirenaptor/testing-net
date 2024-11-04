export function simpsonRuleIntegracion(f: (x: number) => number, x0: number, x1: number, numSeg: number, error: number): number {
  let num_seg = numSeg; 
  let resultado = integralSimpson(f, x0, x1, num_seg); 
  let newResultado;

  do {
      num_seg *= 2;
      newResultado = integralSimpson(f, x0, x1, num_seg);
      if (Math.abs(newResultado - resultado) < error) break; 
      resultado = newResultado; 
  } while (true);

  return newResultado;
}

function integralSimpson(f: (x: number) => number, x0: number, x1: number, numSeg: number): number {
  const w = (x1 - x0) / numSeg; 
  let suma = f(x0) + f(x1); 

  //regla Simpson
  for (let i = 1; i < numSeg; i++) {
      const xi = x0 + i * w;
      suma += (i % 2 === 0 ? 2 : 4) * f(xi); 
  }

  return (w / 3) * suma;
}

//gaam
function gammaFunction(n: number): number {
  const g = 7;
  const coeficiente = [
      0.99999999999980993, 676.5203681218851, 
      -1259.1392167224028, 771.32342877765313, 
      -176.61502916214059, 12.507343278686905, 
      -0.13857109526572012, 9.9843695780195716e-6, 
      1.5056327351493116e-7
  ];

  if (n < 0.5) {
      return Math.PI / (Math.sin(Math.PI * n) * gammaFunction(1 - n));
  }

  n -= 1;
  let x = coeficiente[0];
  for (let i = 1; i < g + 2; i++) {
      x += coeficiente[i] / (n + i);
  }

  const t = n + g + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}


export function tDistribucion(x: number, dof: number): number {
  if (dof <= 0) return 0; // Asegurarse que los grados de libertad sean válidos

  const gammaNumerator = gammaFunction((dof + 1) / 2);
  const gammaDenominator = Math.sqrt(dof * Math.PI) * gammaFunction(dof / 2);
  const multiplier = Math.pow(1 + (x * x) / dof, -(dof + 1) / 2);

  return (gammaNumerator / gammaDenominator) * multiplier;
}


export function linearFunction(x: number): number {
  return 2 * x;
}

export function quadraticFunction(x: number): number {
  return x * x;
}

export function inverseFunction(x: number): number {
  return 1 / x;
}

// Distribución t para grados de libertad específicos
export function tDist9(x: number): number {
  return tDistribucion(x, 9);
}

export function tDist10(x: number): number {
  return tDistribucion(x, 10);
}

export function tDist30(x: number): number {
  return tDistribucion(x, 30);
}