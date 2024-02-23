import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Row,Col} from 'react-bootstrap';
import PlanetInfo from '../components/PlanetInfo';

const HomeScreen = () => {
  const [Planets,setPlanets]=useState([]);
  useEffect(()=>{
    const fetchPlanets = async()=>{
      const {data} = await axios.get('https://swapi.dev/api/planets');
      // console.log(data.results);
      setPlanets(data.results);
    };
    fetchPlanets();
  },[]);
  return (
    <div>
    <h1>Planet List</h1>
    <Row>
        {Planets.map((planet,index)=>{
            return (<Col key={index} sm={1} md={8} lg={6} xl={4}>
                <PlanetInfo planet={planet} />
            </Col>)

        })}
    </Row>
      
    </div>
  );
}

export default HomeScreen
