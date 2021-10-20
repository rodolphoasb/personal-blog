/* eslint-disable @next/next/no-img-element */
import { HomeOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from '../../components/LinkWrapper'
import * as S from '../../styles/portfolio'

export default function Index() {
  return (
    <>
      <LinkWrapper href="/">
        <HomeOutline size={32} aria-label="Home" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <h1>See some of my projects</h1>

          <div className="project">
            <div className="title-and-link">
              <h2>Livance</h2>
              <a
                href="https://www.livance.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/external-link.svg" alt="" />
              </a>
            </div>
            <p>
              The website was made for a Brazilian Startup that enables doctors
              and psychologists to have an office room in a much easier way
              (WeWork for doctors). The project was concluded in February 2021,
              and in July 2021 they raised $5.9M in a Series A round.
            </p>
            <h3>Tech Stack</h3>
            <ul>
              <li>Webflow</li>
              <li>Custom Javascript for animations and form validations</li>
            </ul>
          </div>

          <div className="project">
            <div className="title-and-link">
              <h2>Collegia</h2>

              <a
                href="https://www.collegia.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/external-link.svg" alt="" />
              </a>
            </div>
            <p>
              Collegia is a UK-based startup that aims to provide a digital Auto
              Enrolment pension. Collegia were born at the University of Oxford
              and to this date, they&#39;ve raised £750K.
            </p>
            <h3>Tech Stack</h3>
            <ul>
              <li>Webflow</li>
              <li>Custom Javascript for animations and form validations</li>
            </ul>
          </div>

          <div className="project">
            <div className="title-and-link">
              <h2>Zape</h2>
              <a
                href="https://zape-client-55sksnb0m.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/external-link.svg" alt="" />
              </a>
            </div>
            <p>
              Zape is a complete Saas, with backend and frontend developed 100%
              by me. The web app allows restaurant owners to create digital
              menus to send to their customers. The order placed by customers is
              received by the restaurant directly on Whatsapp.
            </p>
            <h3>Tech Stack</h3>
            <ul>
              <li>Typescript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TailwindCSS</li>
              <li>Styled Components</li>
              <li>Server: Node</li>
              <li>DB: MongoDB</li>
            </ul>
          </div>

          <div className="project">
            <div className="title-and-link">
              <h2>Mercado Rural</h2>
              <a
                href="https://mercado-rural-site.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/external-link.svg" alt="" />
              </a>
            </div>
            <p>
              This is a side project called Mercado Rural that aims to improve
              business transactions within agribusiness, the biggest share of
              Brazil&#39;s PIB.
            </p>
            <h3>Tech Stack</h3>
            <ul>
              <li>Typescript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>TailwindCSS</li>
              <li>Styled Components</li>
              <li>Supabase</li>
            </ul>
          </div>

          <div className="project">
            <h2>This blog 😊</h2>
            <p>
              This blog has 3 main parts. This one that you are seeing show some
              of my projects. You&#39;ll also find a section where I share some
              of my trips in a interactive map that shows photos that I&#39;ve
              take on these places. Finally, we have a blog section where I
              share some things that I&#39;m learning.
            </p>
            <h3>Tech Stack</h3>
            <li>Typescript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Headless CMS: GraphCMS</li>
            <li>Styled Components</li>
          </div>

          <div></div>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
