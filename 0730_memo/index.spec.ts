import {describe, expect, it} from 'vitest'
import {memo} from './index'

describe('memo', () =>{
    it('should cache a return of same parameter', () => {
        let count = 0
        const add = (valueA, valueB) => {
            count += 1
            return valueA + valueB
        }

        const memoizedAdd = memo(add)

        expect(memoizedAdd(1, 2)).toBe(3)
        expect(count).toBe(1)

        expect(memoizedAdd(1, 2)).toBe(3)
        expect(count).toBe(1)

        expect(memoizedAdd(2, 2)).toBe(4)
        expect(count).toBe(2)
    })
})
