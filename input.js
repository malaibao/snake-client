let connection;

const handleUserInput = (userInput, conn) => {
    const instruction = {
        'w': 'up',
        'a': 'left',
        's': 'down',
        'd': 'right'
    }
    // Check if it is Ctrl-C
    console.log('userInput:', userInput);
    if (userInput === '\u0003') {
        process.exit();
    }
    else if (instruction[userInput]) {
        conn.write(`Move: ${instruction[userInput]}`);

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

