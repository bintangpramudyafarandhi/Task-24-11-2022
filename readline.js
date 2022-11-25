const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const validator = require('validator');

rl.question('What is your name?', (name) => {
    rl.question('What is your email?', (email) =>{
        rl.question('What is your phone number?', (number) =>{

            console.log(`\nName : ${name}`)

            //validator email
            if (validator.isEmail(email) == false) {
                console.log("Your email is incorrect")
            }
            else {
                console.log(`Email : ${email}`);
            }

            //validator no. hp
            if (validator.isMobilePhone(number,'id-ID') == false) {
                console.log("Your phone number is incorrect")
            }
            else {
                console.log(`Phone number : ${number}`)
            }

            rl.close();
        })
    })
})