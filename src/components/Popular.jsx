import React from 'react'
import { useEffect, useState } from 'react'
import styled from "styled-components"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import foodie from '../images/foodie.png'
import {Link} from "react-router-dom";

function Popular() {
  
  const [popular, setPopular] = useState([]);

  useEffect(() =>{
  getPopular()
  },[])

  const getPopular = async () => {

    const check = localStorage.getItem("popula");
  
   if (check) { //checking if we have something already in local storage then if there is 
     setPopular(JSON.parse(check)); // we just set it here by doing setPopular parsing to (check)
   } else {    //if there is nothing in local storage then we fetch using the api link
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popula", JSON.stringify(data.recipes));
      setPopular(data.recipes);
   }

    // const api = await fetch(
    //   `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    //   )
    // const data = await api.json();
    // setPopular(data.recipes)
  
  }
  return (
    <div>
      <div className="container-fluid">
          <Wrapper>
           <h3><img src={foodie} className="img2" alt=""/>Popular Picks</h3>

           <Splide options={{
             perPage: 4,
             arrows: false,
             pagination: false,
             drag:'free',
             gap:'5rem'
           }}>

          {popular.map((recipe) => {
         return(
           <SplideSlide key={recipe.id}>
           <Card>
           <Link to={'/recipe/' + recipe.id}>
           <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradient />
           </Link>
             </Card>
           </SplideSlide>
            
         );
        })}

        </Splide>
          </Wrapper>
           
          </div>
    </div>
  )
}

const Wrapper = styled.div`
 margin: 4rem 0rem;
`

const Card = styled.div`
min-height: 18rem;
border-radius:2rem;
overflow:hidden;
position: relative;

img{
  border-radius: 2rem;
  width: 450px;
  position: absolute;
  left: 0;
  width: 100%;
  height:100%;
  object-fit: cover;
}
p{
  position: absolute;
  z-index:10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  text-align: center;
  color: #fff;
  font-size:1rem;
  height:40%
  display:flex;
  justify-content: center;
  align-items: center;
}
`
const Gradient = styled.div`
z-index:3;
position: absolute;
width: 100%;
height: 100%;
background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular