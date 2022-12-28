/*const amount = 12;
if (amount > 10){
    console.log('large number')

} else {
    console.log('small number')
}*/

/*const names = require('./2-node')

const sayHi = require('./1-node')
require('./3-node')
sayHi('hala')
sayHi(names.sara)
sayHi(names.fati)*/
const http = require('http')

const server = http.createServer((req, res)=> {
    console.log(req)
    res.write('welcome to our home page')
    res.end()
})
server.listen(5000)