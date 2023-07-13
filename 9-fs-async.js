const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt', 'ascii', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    // console.log(first);
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        // console.log(result);
        writeFile(
            './content/subfolder/writeasync.txt',
            `Result: ${first}\n${result}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('Finish');
            })
    })
})
console.log('This compiled first')