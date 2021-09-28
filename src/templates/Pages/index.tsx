import * as S from './styles'
import LinkWrapper from 'components/LinkWrapper'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseCircleOutline size={32} aria-label="Home" />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PageTemplate
