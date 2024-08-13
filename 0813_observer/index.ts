export const createEmitter = () => {
    const stack = {}

    const on = (key: string, callback: (args: any) => void ) => {
        if(key in stack){
            stack[key].push(callback)
            return
        }
        stack[key] = [callback]
    }

    const emit = (key: string, args: any) => {
        stack[key]?.map((fn)=> fn(args))
    }

    return {emit, on}
}
