var Buffer1 = Buffer.alloc(100);
var Buffer2 = new Buffer('hello');
var Buffer3 = Buffer.from([1,2,3,4]);

Buffer1.write("i am here");
var a = Buffer1.toString('utf-8');
console.log(a);

console.log(Buffer.isBuffer(Buffer1))
console.log(Buffer1.length)



var BufferSrc = new Buffer('ABC');
var BufferDest = Buffer.alloc(3);
BufferSrc.copy(BufferDest);
var Data = BufferDest.toString('utf-8');
console.log(Data);

var BufferOld = new Buffer("INDIA IS GREAT")
var BufferNew = BufferOld.slice(0,4);
console.log(bufferNew.toString())

var BufferOne = new Buffer('INDIA')
var BufferTwo = new Buffer('IS GREAT')
var BufferThree = Buffer.concat({BufferOne, BufferTwo})
console.log(BufferThree.toString())