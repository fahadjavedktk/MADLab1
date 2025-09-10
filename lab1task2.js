function SolveThis(obj) {
    let res = {};

    for (let key in obj) {
        let val = obj[key];

        switch (key) {
            case "sum":
                res[key] = val.reduce((a, b) => a + b, 0);
                break;
            case "max":
                res[key] = Math.max(...val);
                break;
            case "min":
                res[key] = Math.min(...val);
                break;
            case "round":
                res[key] = Math.round(val);
                break;
            case "abs":
                res[key] = Math.abs(val);
                break;
            case "ceil":
                res[key] = Math.ceil(val);
                break;
            case "floor":
                res[key] = Math.floor(val);
                break;
            case "random":
                res[key] = Math.random(); 
                break;
            default:
                res[key] = "Operation not supported";
        }
    }

    return res;
}

console.log(SolveThis({ sum: [3, 2, 4], max: [2, 4, 3, 5], min: [5, 3, 4, 3] }));
console.log(SolveThis({ round: 4.7, floor: 4.9, ceil: 4.1, abs: -8 }));
console.log(SolveThis({ random: true }));
