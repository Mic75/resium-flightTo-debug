import { useState } from 'react'
import MainView from './MainView'

const POIS = [
  [{id: "1", lon: 7.750000, lat: 48.580002 }, { id: "2", lon: -73.519997, lat: 45.630001 }],
  [{id: "3", lon: 139.839478, lat: 35.652832 }]
]

function App () {

  const [POIS_index, setPOIS_index] = useState(0);

  return (
    <div className="AppContainer">
      <button onClick={() => setPOIS_index((POIS_index + 1) % 2)}>Update POI</button>
      <MainView POIS={POIS[POIS_index]}/>
    </div>
  )
}

export default App
