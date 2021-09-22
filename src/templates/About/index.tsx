import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseCircleOutline size={32} aria-label="Home" />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
        ducimus dolore nam repellat exercitationem illum? Dolore itaque expedita
        qui consequuntur minus quasi molestiae esse ab accusantium neque
        doloremque, eos numquam!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
