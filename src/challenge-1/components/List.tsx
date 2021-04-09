import React, { useEffect, useState } from 'react';
import StarshipCard from './StarshipCard';
import axios, { AxiosResponse } from 'axios';
import starshipModel from '../types/starship'

const List  = () => {

  // Passe un state d'un tableau de props straship
  const [starshipsList, setStarshipsList] = useState<Array<starshipModel>>([])

  // Va dire si c'est load ou pas
  const [loading, setLoading] = useState<boolean>(false)


  // PART API
  const getStarships=()=>{
    // Creation du tableau qui va contenir le résultat
    let starshipsArray:Array<starshipModel>=[]

    // Fetch l'api
    const url = "https://swapi.dev/api/starships/"

    axios.get(url).then((response:AxiosResponse<any>)=>{
      console.log("response", response)
      // Inject les datas dans notre tableau
      response.data.results.forEach((item:any)=>{
        starshipsArray.push({
          name: item.name,
          model: item.model,
          crew: item.crew,
        })
      })
      // Mise à jour du state
      setStarshipsList(starshipsArray)
    }).catch((error)=>{
      console.log("error", error)
    })
  }

  

  useEffect( ()=>{
    getStarships()
  })

  //

  // Affichage de la liste avec une boucle
  return (
    <div>
      {
        starshipsList.length > 0 && starshipsList.map((item:starshipModel, index:number) =>{
          return (
            <StarshipCard key={`starship-${index}`} starship={item}/>
          )
        })
      }
    </div>
  );
};

export default List;