import React from 'react'
import styled from "styled-components"
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {

const [input, setInput] = useState("");
const navigate = useNavigate();

const submitHandler = (e) => {
    e.preventDefault();
    // console.log(input);
    navigate("/searched/" + input);
}



  return (
    <FormStyle onSubmit={submitHandler}>
    <div>
        <FaSearch></FaSearch>
        <input 
        onChange={(e) => setInput(e.target.value)} 
        type="text"
        value={input}
         />
        {/* <h1>{input}</h1> */}
   </div>
    </FormStyle>
  )
}

const FormStyle = styled.div`
    margin: 0rem 10rem;
    position: relative;
    ${'' /* width: 100%; */}
    div{
        align-items:center;
        width: 100%;
    }
    input{
        border:none;
        background:linear-gradient(35deg, #494949, #313131);
        font-size:0.8rem;
        color:white;
        padding:1rem 3rem;
        border:none;
        border-radius:1rem;
        outline:none;
        width:100%;
        margin-top:20px;
        align-items: center;
    }
    svg{
        margin-left:10px;
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100% - 50%);
        color:white;
    }
`

export default Search