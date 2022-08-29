import { Entity, PointGraphics, Viewer } from 'resium'
import { Cartesian3, Color } from 'cesium'
import { useEffect, useRef, useState } from 'react'

export default function MainView ({ POIS }) {

  const viewerRef = useRef(null)

  useEffect(() => {
    flyToFirstEntity()
  }, [POIS])

  function flyToFirstEntity () {
    if (viewerRef.current !== null) {
      const cesiumViewer = viewerRef.current.cesiumElement
      if (cesiumViewer.entities.values.length > 0)
        cesiumViewer.flyTo(cesiumViewer.entities.values[0])
    }
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
      {POIS.map((poi) => {
        // oddly, if whe change the value for the key prop by the index param of the map callback, the flyTo call is
        // working well (the DataSource does not seem to be out of sync in the Viewer)
        return <Entity key={poi.id} position={Cartesian3.fromDegrees(poi.lon, poi.lat)}>
          <PointGraphics color={Color.AQUA} pixelSize={20}/>
        </Entity>
      })}
    </Viewer>
  </div>
}
