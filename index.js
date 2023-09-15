const express = require('express')
const app = express()
const port = 3000


function handle_first_request(req, res)
{
   res.send('I am in the form');
}

function handle_second_request(req, res){
     var counterValue=req.query.counter;
     console.log("And counter value is :"+counterValue)
     let sum=0;
       for(let i=0; i<counterValue; i++){
        sum=sum+i;
       }
       res.send("And the sum is :"+sum);
}

function handle_difference(req, res){
    var counterValue=req.query.counter;
    let diff=100-counterValue;
    res.send("And the diff is "+diff);
}

function handle_multiply(req, res){
    console.log("and the num is :"+req.params.num) 
}

app.get('/',handle_first_request);
app.get('/sum',handle_second_request);
app.post('/diff', handle_difference)
app.get('/:num', handle_multiply)

function started(){
  console.log("Example app on listening...."+port);
}
app.listen(port, started);

