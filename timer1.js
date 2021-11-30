let alarm = process.argv.slice(2)

for (let i = 0; i < alarm.length; i++) {
    if (isNaN && alarm[i] >= 0) {
        setTimeout(() => {
            process.stdout.write("\x07");
        }, alarm[i] * 1000);
    }
}