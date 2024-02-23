import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { TbMoodSad } from "react-icons/tb";

const Residents = ({residents}) => {
    const [residentNames,setResidentNames]=useState([]);
    useEffect(() => {
        const fetchResidentNames = async () => {
          try {
            const names = await Promise.all(
              residents.map(async (residentUrl) => {
                const response = await axios.get(residentUrl);
                return response.data.name;
              })
            );
            setResidentNames(names);
          } catch (error) {
            console.error('Error fetching resident names:', error);
          }
        };
    
        fetchResidentNames();
      }, [residents]);

      if (residentNames.length === 0) {
        return (<bold><TbMoodSad/> No Residents Living in this planet</bold>); // Return null if there are no residents
      }
    
      return (
        <div>
          <h3>Residents:</h3>
          <ul>
            {residentNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      );
}

export default Residents
