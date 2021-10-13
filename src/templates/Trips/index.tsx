import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { HomeOutline } from '@styled-icons/evaicons-outline'
import { MapProps } from 'components/Map'
const Map = dynamic(() => import('components/Map'), { ssr: false })

const TripsTemplate = ({ places }: MapProps) => {
  return (
    <>
      <LinkWrapper href="/">
        <HomeOutline size={32} aria-label="Home" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

export default TripsTemplate
