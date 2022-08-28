import { Entity, PointGraphics, Viewer } from 'resium'
import { Cartesian3, Color } from 'cesium'
import { useEffect, useRef, useState } from 'react'

export default function MainView ({ POIS }) {

  const [entities, setEntities] = useState([])
  const viewerRef = useRef(null)

  useEffect(() => {
    initEntity()
  }, [POIS])

  useEffect(() => {
    flyToFirstEntity()
  }, [entities])

  function flyToFirstEntity () {
    if (viewerRef.current !== null) {
      const cesiumViewer = viewerRef.current.cesiumElement
      if (cesiumViewer.entities.values.length > 0)
        cesiumViewer.flyTo(cesiumViewer.entities.values[0])
    }
  }

  function initEntity () {
    const newEntities = POIS.map((poi) => {
      return <Entity key={poi.id} position={Cartesian3.fromDegrees(poi.lon, poi.lat)}>
        <PointGraphics color={Color.AQUA} pixelSize={20}/>
      </Entity>
    })
    setEntities(newEntities)
  }

  return <div style={{ width: '600px', height: '600px' }}>
      <Viewer
      ref={viewerRef}
      baseLayerPicker={false}
      infoBox={false}
      homeButton={false}
      timeline={false}
      navigationHelpButton={false}
      projectionPicker={false}
      geocoder={false}
      sceneModePicker={false}
      animation={false}
      fullscreenButton={false}
      style={{ height: '100%' }}
    >
      {entities}
    </Viewer>
  </div>
}
