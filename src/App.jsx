import {puppyList} from './data.js'
import {useState} from 'react'

import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  console.log(puppies)
  
  return (
    
      <div>
        
        {
          puppyList.map((puppy) => {

          return <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
         

        })
        
        
        }
      


        
      </div>
      
  
  );
}

export default App
