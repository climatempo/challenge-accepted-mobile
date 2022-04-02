const sum = (a: any, b: any) => {
    return a + b;
}

describe('Unit test explain', () => {
    test('sum success', () => {
        expect(sum(1, 2)).toBe(3);
    })
})