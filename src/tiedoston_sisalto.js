const fs = require('fs')
const chalk = require('chalk')

const tiedosto = process.argv[2]

try {
    const databuffer = fs.readFileSync(tiedosto)
    const data = databuffer.toString()
    console.log(data)
} catch (e){
    console.log(e)
}