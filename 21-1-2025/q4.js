// : Write a function fetchDataWithCallback that simulates fetching
// data from an API with a delay. Implement error handling in the callback,
// where the callback can receive either a successful response or an error
// message. Test the function by simulating both success and failure scenarios.

function Apisimulate(){
    console.log("Fetching data ....");
    setTimeout(()=>{
        if (success){
            let data="Data Fetched successfully";
            callback();
        }
    })
}