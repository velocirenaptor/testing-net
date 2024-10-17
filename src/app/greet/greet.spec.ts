import { greet } from './greet';

describe('greet test suite', () =>{
    it('Should return 0 if input is negative', () =>{
            const result = greet(-1);
        expect(result).toBe(0);
    })

    it('Should increment if input is positive', () =>{
        const result = greet(1);
    expect(result).toBe(2);
})
})

