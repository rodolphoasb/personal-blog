import * as S from 'styles/home'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import GetInTouch from '../components/GetInTouch'

const Home = () => (
  <>
    <NextSeo
      title="Rodolpho Bravo | Software Engineer"
      description="I'm helping software eat the world."
    />
    <S.Content>
      <S.Heading>
        <h1>Hi, There! I&#39;m Rodolpho. 👋</h1>
      </S.Heading>
      <S.Body>
        <p>
          Front End Software Engineer, Web3 Curious. <br />
          Click below to see some of my work.
        </p>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/my-trips">My Trips</Link>
          </li>
          <li>
            <Link href="/articles">Blog</Link>
          </li>
        </ul>
      </S.Body>
      <GetInTouch />
    </S.Content>
  </>
)

export default Home
