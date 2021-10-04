import * as S from 'styles/home'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

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
        <p>Front End (React) Software Engineer, Web3 Curious</p>
        <ul>
          <li>
            <Link href="/about">About Me/Portfolio</Link>
          </li>
          <li>
            <Link href="/my-trips">My Trips</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </S.Body>
    </S.Content>
  </>
)

export default Home
