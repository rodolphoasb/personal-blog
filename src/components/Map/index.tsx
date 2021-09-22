import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* the places array have a name and slug, but at the moment they're not being used, comment bellow is a reminder to use them in the future */}
    {/* {places?.map(({ id, name, slug, location }) */}
    {places?.map(({ id, location }) => {
      const { latitude, longitude } = location

      return <Marker key={`place-${id}`} position={[latitude, longitude]} />
    })}
  </MapContainer>
)

export default Map
