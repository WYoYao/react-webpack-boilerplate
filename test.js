

console.error('An uncaught error occurred!');

process.on('uncaughtException',function(e){
    console.log('出现了意外');
})