export function validate(str, min, max) {
    return (str.length > min && str.length < max);
}

// returns string like 1.2m 
export function shortNumString(num) {
   
    let absNum = Math.abs(num);
    let resultNum = num;
    let suffix = '';

    // if num is bigger than 1 million, show ex 1.2m
    if (absNum > 999999999) {
        resultNum = num / 1000000000;
        resultNum = resultNum.toFixed();
        suffix = ' B';
    } else if (absNum > 999999) {
        resultNum = num / 1000000;
        resultNum = resultNum.toFixed();
        suffix = ' M';
    } else if (absNum > 999) {
        resultNum = num / 1000;
        resultNum = resultNum.toFixed();
        suffix = ' K';
    }

    console.log(resultNum);
    console.log(resultNum % 1 !== 0);
    // check if there are decimals
    if (resultNum % 1 !== 0) {
        resultNum = resultNum.toFixed(2);
    }

    return `${resultNum}${suffix}`;
}