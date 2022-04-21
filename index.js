const { exec } = require('child_process');

runUpdate();

setInterval(() => {
    console.log('Starting system update.');
    runUpdate();
    console.log('System update completed.')
}, 86400000)




function runUpdate() {
    const ls = exec('bash script/update.sh', function (error, stdout, stderr) {
    if (error) {
        console.log(error.stack);
        console.log('Error code: ' + error.code);
        console.log('Signal received: ' + error.signal);
    }
    console.log('Child Process STDOUT: ' + stdout);
    console.log('Child Process STDERR: ' + stderr);
    });

    ls.on('exit', function (code) {
    console.log('Child process exited with exit code ' + code);
    });
}

