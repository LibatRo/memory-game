const cards = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
    { name: "E" },
];

function randRange(a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

}
function shuffleArray(arr) {
    for (let index = 0; index < 100; index++) {
        let a1 = randRange(0, arr.length)
        let a2 = randRange(0, arr.length)
        if (a1 == a2) {
            index--
            continue
        }
        swap(arr, a1, a2)
    }

}


function main() {
    console.log([...cards])
    shuffleArray(cards)
    console.log(cards)
}

main()


function checkCards(arr, a, b) {
    let a1 = randRange(0, arr.length)
    let a2 = randRange(0, arr.length)

    if (a1 == a2) {
        console.log (true)
    }

    else
        console.log (true)

}

function checkCards(arr, a, b) {
     if (arr[a].name == arr[b].name) {
         console.log (true)
     }

     else {console.log (false)}
    
}




