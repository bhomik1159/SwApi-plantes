import React from 'react';
import {Card} from 'react-bootstrap';
import Residents from './Residents';

const PlanetInfo = ({planet}) => {
  return (
    <div>
      <Card className='bg-secondary m-2 p-3 rounded text-muted'>
      <Card.Body>
          <Card.Title as='div' className='product-title text-dark'>
          Planet Name:<strong> {planet.name}</strong>
          </Card.Title>
        <Card.Text as='div'>
        Climate: <strong> {planet.climate}</strong>
        </Card.Text>
        <Card.Text>
          Population: <strong> {planet.population}</strong>
        </Card.Text>
        <Card.Text>
          Terrain: <strong> {planet.terrain}</strong>
        </Card.Text>
        <Residents residents={planet.residents}/>
      </Card.Body>



      </Card>
    </div>
  )
}

export default PlanetInfo
