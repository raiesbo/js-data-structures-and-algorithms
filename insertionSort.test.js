const insertionSort = require('./insertionSort');

describe("Insertion sort function set of tests", () => {
    test("Cheacking if it sorts correctly", () => {
        const array = [1, 5, 3, 2, 4]
        const sortedArray = [1, 2, 3, 4, 5]
        expect(insertionSort(array)).toEqual(sortedArray)
        const array2 = []
        const sortedArray2 = []
        expect(insertionSort(array2)).toEqual(sortedArray2)
        const array3 = [1]
        const sortedArray3 = [1]
        expect(insertionSort(array3)).toEqual(sortedArray3)
    })
})