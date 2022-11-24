const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name?', (name) => {
    console.log(`Thank you ${name}`);
    rl.question('What is your email?', (email) => {
        console.log(`Your email is ${email}`);
        rl.question('What is your phone number?', (number) => {
            console.log(`Your phone number is ${number}`)
            rl.close();
        });
    });
});