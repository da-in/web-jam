const cache  = new Map<string, any>()

const hasKey = (key: string) => {
    return cache.has(key)
}

const getKey = (...args) => {
    return JSON.stringify(args)
}

export const memo = (fn) => {
    const _fn = (...args) => {
        const key = getKey(args)
        if(!hasKey(key)){
            cache.set(key, fn(...args))
        }
        return cache.get(key)
    }
    return _fn
}
