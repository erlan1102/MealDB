import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom'
import {Row, Col} from "react-bootstrap";

const Meal = () => {

    const [food, setFood] = useState({});
    const params = useParams();
    useEffect(()=>{
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`).then(({data})=> setFood(data.meals[0]))
    },[]);
    return (
        <>
            {JSON.stringify(food) === '{}' ? '' :
                <>
                <Row>
                    <Col md={6}>
                        <img style={{width: 100 + '%'}} src={food.strMealThumb} alt="food image"/>
                    </Col>
                    <Col md={6}>
                        <ul>
                            <li><span className='food__list-title'>Название :</span> {food.strMeal}</li>
                            <li><span className='food__list-title'>Категория :</span> {food.strCategory}</li>
                            <li><span className='food__list-title'>Страна :</span> {food.strArea}</li>
                        </ul>
                        <iframe className='food__video'
                                src={`https://www.youtube.com/embed/${food.strYoutube.slice(-11)}`}
                                title={food.strMeal}/>
                        <p>Теги : {food.strTags}</p>
                    </Col>
                    <div>
                        <h2>Instruction</h2>
                        {food.strInstructions}
                    </div>
                </Row>
                    <table className='centered'>
                        <thead>
                              <tr>
                                  <th>Ingredients</th>
                                  <th>Measure</th>
                              </tr>
                        </thead>
                        <tbody>
                        {Object.keys(food).filter((item)=>{
                            return item.includes('strIngredient') && food[item]
                        }).map((item,idx)=>(
                            <tr key={idx}>
                                <td>{food[item]}</td>
                                <td>{food['strMeasure'+ item.substr(13)]}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </>
            }
        </>
    );
};

export default Meal;