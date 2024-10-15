import { factorial } from './factorial';

describe('factorial test suite', () =>{
    it('Should return 0 if input is negative', () =>{
            const result = factorial(-1);
        expect(result).toBe(0);
    })

    it('Should increment if input is positive', () =>{
        const result = factorial(1);
    expect(result).toBe(2);
})
})

