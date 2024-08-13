import {describe, expect, it, vi} from 'vitest'
import {createEmitter} from './index'

describe('emitter', () =>{
    const spy = vi.spyOn(console, 'log').mockImplementation(() => undefined)

    it('should emit and receive', () => {
        const emitter = createEmitter()
        // 수신 등록 'hello'
        emitter.on('hello', (value) => console.log(`hello 1 ${value}`))
        emitter.on('hello', (value) => console.log(`hello 2 ${value}`))
        emitter.on('hell', (value) => console.log(`hell 1 ${value}`))

        // 이벤트 트리거 'hello'
        emitter.emit('hello', 'foo')
        expect(spy).toHaveBeenCalledWith('hello 1 foo')
        expect(spy).toHaveBeenCalledWith('hello 2 foo')

        // 이벤트 트리거 'hell'
        emitter.emit('hell', 'bar')
        expect(spy).toHaveBeenCalledWith('hell 1 bar')


    })
})
