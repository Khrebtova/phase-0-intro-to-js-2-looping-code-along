const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = "surprise"

function writeCards(names, event) {
    let messages =[];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}
writeCards(names, event);

function countDown() {
    for (let n = 10; n >= 0; n--){
        console.log(n);
    }
}
countDown(10);