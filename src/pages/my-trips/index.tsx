import TripsTemplate from 'templates/Trips'
import { MapProps } from 'components/Map'
import client from '../../graphql/client'
import { GET_PLACES } from '../../graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'

export default function Trips({ places }: MapProps) {
  return <TripsTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: { places }
  }
}
