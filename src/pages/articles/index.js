import { HomeOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from '../../components/LinkWrapper'

export default function index() {
  return (
    <>
      <LinkWrapper href="/">
        <HomeOutline size={32} aria-label="Home" />
      </LinkWrapper>
    </>
  )
}
