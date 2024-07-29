const LINE = 15 // work with odd, even number

export const drawLine = (count) => {
    const space = ' '.repeat((LINE - count) / 2)
    const star = '*'.repeat(count)
    return space + star
}

export const draw = (line = LINE) => {
    let result = ''
    for (let i= 1; i <= LINE; i++){
        if(i>1){
            result+='\n'
        }
        if(i <= LINE/2){
            result += drawLine(i * 2 - 1)
            continue
        }
        result += drawLine((LINE - i) * 2 + 1)
    }
    return result
}
