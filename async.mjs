function samplePromise(){
    return Promise.resolve("Dimas");
}

const name = await samplePromise();
console.info(name);