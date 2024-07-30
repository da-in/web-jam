
export const memo = (fn) => {
    const cache  = new Map<string, any>()
    const hasKey = (key: string) => {
        return cache.has(key)
    }
    const getKey = (...args) => {
        return JSON.stringify(args)
    }
    return (...args) => {
        const key = getKey(args)
        if(!hasKey(key)){
            cache.set(key, fn(...args))
        }
        return cache.get(key)
    }
}
