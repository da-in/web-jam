import {describe, expect, it} from "vitest";
import {draw, drawLine} from './index'

describe('draw star', () =>{
    it('should draw line', () => {
        const line = drawLine(3)
        expect(line.match(/\*/g)?.length).toBe(3)
    })
    it('should draw star', () => {
        expect(draw(15)).toBe(`       *
      ***
     *****
    *******
   *********
  ***********
 *************
***************
 *************
  ***********
   *********
    *******
     *****
      ***
       *`)
    })
})
