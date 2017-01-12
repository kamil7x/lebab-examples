let lebab = require('lebab');
let fs = require('fs');

let filename = 'e2.es5.js';

fs.readFile(filename, function(err, data) {
    let source = data.toString();
    const { code, warnings } = lebabThis(source);

    if (warnings.length) {
        console.log(warnings);
    }
    fs.writeFile('e2.es6.js', code, () => {
        console.log('Written');
    });
});

function lebabThis(source) {
    return lebab.transform(source, [
        'let',
        'class',
        'default-param',
    ]);
}