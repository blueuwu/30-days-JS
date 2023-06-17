//Given a function fn, return a curried version of that function.
// A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same the original function would have returned.
//In practical terms, if you called the original function like sum(1, 2, 3), you would call the curried version like csum(1)(2)(3), csum(1)(2,3), cssum(1,2)(3), or csum(1,2,3).


//  * @param {Function} fn
//  */

function curry(fn) {
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }else{
            return function(...args2){
                return curried(...args, ...args2);
            }
        }
    }
}