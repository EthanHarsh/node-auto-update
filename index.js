const cp = require("child_process");

runUpdate();

setInterval(() => {
    console.log('Starting system update.');
    runUpdate();
    console.log('System update completed.')
}, 86400000)




function runUpdate() {
    cp.spawn('./script/update.sh', function(err, stdout, stderr) {

        stdout.on("data", data => {
                console.log(data);
        });
        
        stderr.on("data", data => {
                console.log(data);
        });
    });
}