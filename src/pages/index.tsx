import * as S from 'styles/home'
import Link from 'next/link'

const Home = () => (
  <S.Content>
    <S.Heading>
      <h1>Hi, There! I&#39;m Rodolpho. 👋</h1>
    </S.Heading>
    <S.Body>
      <p>Front End (React) Software Engineer, Web3 Curious</p>
      <ul>
        <li>
          <Link href="/about">About Me</Link>
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
)

export default Home
