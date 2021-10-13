import { HomeOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from '../../components/LinkWrapper'
import * as S from './styles'

export default function Index() {
  return (
    <>
      <LinkWrapper href="/">
        <HomeOutline size={32} aria-label="Home" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <h1>See some of my projects</h1>

          <div>
            <h2>Livance</h2>
            <p>
              This website was made for a Brazilian Startup that enable doctors
              and psychologist to have a office room in a much easier way. The
              project was concluded in february 2021, and in July 2021 they
              raised $5.9M in a series A round.
            </p>
            <h3>Tech Stack</h3>
          </div>

          <div>
            <h2>Collegia</h2>
            <p>
              Collegia is an UK based startup that aims to provide a digital
              Auto Enrolment pension. Till this date they&#39;ve raised £750K.
            </p>
            <h3>Tech Stack</h3>
          </div>

          <div>
            <h2>Zape</h2>
            <p>
              Collegia is an UK based startup that aims to provide a digital
              Auto Enrolment pension. Till this date they&#39;ve raised £750K.
            </p>
            <h3>Tech Stack</h3>
          </div>

          <div>
            <h2>Mercado Rural</h2>
            <p>
              Collegia is an UK based startup that aims to provide a digital
              Auto Enrolment pension. Till this date they&#39;ve raised £750K.
            </p>
            <h3>Tech Stack</h3>
          </div>

          <div>
            <h2>This blog 😊</h2>
            <p>
              Collegia is an UK based startup that aims to provide a digital
              Auto Enrolment pension. Till this date they&#39;ve raised £750K.
            </p>
            <h3>Tech Stack</h3>
          </div>

          <div></div>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
