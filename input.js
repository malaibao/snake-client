let connection;

const handleUserInput = (userInput, conn) => {
    const instruction = {
        'w': { 'isMovement': true, 'movement': 'up' },
        'a': { 'isMovement': true, 'movement': 'left' },
        's': { 'isMovement': true, 'movement': 'down' },
        'd': { 'isMovement': true, 'movement': 'right' },
        '\u001B\u005B\u0041': { 'isMovement': true, 'movement': 'up' },
        '\u001B\u005B\u0042': { 'isMovement': true, 'movement': 'down' },
        '\u001B\u005B\u0043': { 'isMovement': true, 'movement': 'right' },
        '\u001B\u005B\u0044': { 'isMovement': true, 'movement': 'left' },
        'l': { 'isMessage': true, 'msg': 'go long' },
        'h': { 'isMessage': true, 'msg': 'Hellooooo!' },
        'o': { 'isMessage': true, 'msg': '~OM NOM NOM~' },
        'b': { 'isMessage': true, 'msg': 'Bye!' },
        'x': { 'isMessage': true, 'msg': '=D' },
        'm': { 'isMessage': true, 'msg': '<3' },
    }

    // Check if it is Ctrl-C
    if (userInput === '\u0003') {
        process.exit();
    }
    else if (instruction[userInput]) {
        if (instruction[userInput]['isMovement']) {
            conn.write(`Move: ${instruction[userInput]['movement']}`);
        } else if (instruction[userInput]['isMessage']) {
            conn.write(`Say: ${instruction[userInput]['msg']}`);
        }
    } else {
        console.log('Invalid userInput');
    }

}

const setupInput = (conn) => {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', key => handleUserInput(key, connection));
    return stdin;
}

module.exports = {
    setupInput
}

