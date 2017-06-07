Array.prototype.map = function (callback) { 
    const newArray = []
    for(let i = 0; i < arr.length; i++)
    {
        const result = callback(this[i])
        newArray.push(result);
    }

    return newArray;
}

