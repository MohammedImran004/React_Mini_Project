import React from "react";
function Result(props){
    const {sec} = props;
    const {term} = props;
    let result="";
    if(term){
        if(term > sec){
            result = 'Higher';
        }
        else if(term < sec){
            result = 'Lower';
        }
        else{
            result = 'Correct';
        }
    }
    return(
        <h1> you guessed {result}</h1>
    )
}
export default Result;