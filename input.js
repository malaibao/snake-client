const handleUserInput = userInput => {
    // Check if it is Ctrl-C
    if (userInput === '\u0003') {
        process.exit();
    }
}

const setupInput = () => {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', key => handleUserInput(key));
    return stdin;
}

module.exports = {
    setupInput
}

