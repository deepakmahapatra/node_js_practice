const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000)
    })
}

//Promise chain

add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 5)
}).then((sum3) => {
    console.log(sum3)
}).catch((error) => {
    console.log(error)
})

const doWork = async () => {
    const sum = await add(2, 98)
    const sum2 = await add(sum, 50)
    return sum2
}

doWork().then((result) => {
    console.log('res', result)
}).catch((e) => {
    console.log('e', e)
})




