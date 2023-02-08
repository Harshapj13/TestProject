import React, { useEffect, useState } from 'react';

let PostData = null;

(function(){
    try {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            PostData = json;
        })
        
    } catch (error) {
        alert(error.message)
    }
})()


const Table = props => {
    console.warn("Table",props.data);

    return <>
        <button onClick={()=>{props.addDataHandler(PostData)}}>GetData</button>
        <br></br><br></br>
        <table className='table table-bordered' style={{border:"1px solid #000", width:"70%", margin:"auto"}}>
            <tbody>
                {props.data != null && props.data.map(x => {
                    return <tr style={{textAlign:"left",border:"1px solid #000"}} key={x.id}><td style={{textAlign:"left",border:"1px solid #000"}} >{x.userId}</td><td style={{textAlign:"left",border:"1px solid #000"}}>{x.title}</td><td style={{textAlign:"left",border:"1px solid #000"}}>{x.body}</td></tr>
                })}
            </tbody>
        </table>
    </>
}

export default Table