// Labtest 2 - Question 3
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');
const logFiles = [];

// 1. Remove Log files

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);
    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        logFiles.push(filePath);
        console.log(`delete files ${filePath}`);
        fs.unlinkSync(filePath);
    });
    fs.rmdirSync(logsDir);
}

// 2. Create Log files

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}
process.chdir(logsDir);
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    logFiles.push(fileName);
    fs.writeFileSync(fileName, `Log file ${i}`);
    console.log(fileName);
}


