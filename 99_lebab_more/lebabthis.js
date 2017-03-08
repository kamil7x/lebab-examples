let lebab = require('lebab');
let babel = require('babel-core');
let fs = require('fs');

let filename = 'e99.es5.js';

fs.readFile(filename, function(err, data) {
    let source = data.toString();
    for (let i = 0; i < 100; i++) {
        let { code, warnings } = lebabThis(source, i);
        let result = babelThis(code, i);
        source = result.code;
    }

    fs.writeFile('e99.babel.js', source, () => {
        console.log('Written');
    });
});

function lebabThis(source, index) {
    console.log(`Lebab #${index}`);
    return lebab.transform(source, [
        'let',
        'class',
        'default-param',
    ]);
}
function babelThis(source, index) {
    console.log(`Babel #${index}`);
    return babel.transform(source, {
        presets: ['es2015']
    });
}