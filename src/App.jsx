import { useState } from 'react'
import MainView from './MainView'

const POIS = [
  [{ id: '1', lon: 7.750000, lat: 48.580002 }],
  [{ id: '2', lon: 139.839478, lat: 35.652832 }]
]

function App () {

  const [POIS_index, setPOIS_index] = useState(0)

  return (
    <div className="AppContainer">
      <div className="ViewContainer">
        <button style={{marginBottom: '12px'}} onClick={() => setPOIS_index((POIS_index + 1) % 2)}>Update POI</button>
        <MainView POIS={POIS[POIS_index]}/></div>
      <div className="explanations"><p>This small highlights what seems to be a bug happening when
        resium's Viewer children Entities get  updated</p>
        <p>Clicking <em>Update POI</em> button updates the list of Entity components passed to Resium Viewer component.
        </p>
        <p>
          <strong>Expected:&nbsp;</strong>
          viewer flying to the first Entity position every the list gets updated
        </p>
        <p>
          <strong>Observed:&nbsp;</strong>
          sometime the the viewer does not fly to the first entity after the list get's updated
        </p>
      </div>
    </div>
  )
}

export default App
