// level {2}

let isNumber=(num)=>{
    return isNaN(num) || typeof num !="number"?false:true;
}

let fiboSerieSum=(num)=>{
    if(isNumber(num))
    {
        if(num === 0)
        {
            return 0;
        }
        else if(num === 1)
        {
            return 1;
        }
        else{
            return fiboSerieSum(num-1)+fiboSerieSum(num-2)
        }
    }
    else{
        return "provide valide number"
    }
}

console.log(fiboSerieSum(8))