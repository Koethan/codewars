console.log('CHEESE Synchronous 1')

setTimeout(_ => console.log(`TOMATO Timeout 2`, 0))

Promise.resolve().then(_ => console.log('PINEAPPLE Promise'))

console.log('CHEESE Synchronous 4')