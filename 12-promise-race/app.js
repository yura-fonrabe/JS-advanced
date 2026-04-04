'use srtict'

async function getPoke(id) {
    const response = await fetch('https://dummyjson.com/carts/' + id);
    return response.json();
}

async function main(){
    const res = await Promise.race([
        getPoke(1),
        getPoke(2),
        getPoke(3)
    ])
    console.log(res);
}

main();