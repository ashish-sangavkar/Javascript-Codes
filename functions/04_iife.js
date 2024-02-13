
// Immediately Invoked function expressions (IIFE)

// it is used to decrease the pollution at global space


(function code(){
    console.log("Ashish Sangavkar");
})();

(arr = () => {
    console.log("Hello");
})();

( arr1 = (nm) => {
    console.log(`name is ${nm}`);
})('sumit')