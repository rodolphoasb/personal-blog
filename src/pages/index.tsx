import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'
const Map = dynamic(() => import('components/Map'), { ssr: false })

const Home = () => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map />
    </>
  )
}

export default Home
