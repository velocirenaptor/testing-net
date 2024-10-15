import { compute } from './compute';

describe('compute test suite', () =>{
    it('Should return 0 if input is negative', () =>{
            const result = compute(-1);
        expect(result).toBe(0);
    })

    it('Should increment if input is positive', () =>{
        const result = compute(1);
    expect(result).toBe(2);
})
})

