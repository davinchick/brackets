module.exports = function check(str, bracketsConfig) {
    function flatten(arr) {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    }
    let bracketsArr = flatten(bracketsConfig);
    let newArray = ( str + bracketsArr.toString()).replace(/[^\(\)\{\}\[\]\|]/g, '').split('');

    if (newArray.length===0){ return false;}

    function areTheyOrdered(string){
        var i, 
            l = string.length, 
            count = 0, 
            el, 
            latest, 
            bracketsStack = [];

        for(i=0; i<l; i++){
            el = string[i];
            if  (el==="{" || el==="(" || el==="[" || (el==="|" && latest!=='|')){
                    bracketsStack.push(el);
                    latest = el;
                }
            else if(el === '}' || el === ")" || el === "]" || el==="|" ){
                if(latest){
                    if( (el === '}' && latest === "{") || (el === ']' && latest === "[") || (el === ')' && latest === "(") || (el === '|' && latest === "|") ){
                        bracketsStack.pop();
                        latest = bracketsStack.length > 0 ? bracketsStack[bracketsStack.length - 1] : undefined;
                    }
                }else{
                    return false;
                }
            }
        }
        return bracketsStack.length===0 && count%2===0;
    }
    return areTheyOrdered(newArray);
}
