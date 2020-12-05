const stuffs = Array.from({length: 5}, (_:any, i:number) => i + 1);

stuffs.forEach(_ => {
    console.log(`${_} is fun!`);
});