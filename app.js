// Bouncer

function bouncer(arr) {
    let newArray = arr.filter(Boolean);
    return newArray;
}

// Test with
bouncer([7, "ate", "", false, 9]);


// Chunky Monkey

function chunk(arr, size){
    let newArray = [];
    for (let i = 0; i < arr.length; i += size){
        newArray.push(arr.slice(i, i + size))
    }
    return newArray;
}

// Test with
chunk(["a", "b", "c", "d"], 2);

function chunkV2(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}
// Test with
chunkV2(["a", "b", "c", "d"], 2);