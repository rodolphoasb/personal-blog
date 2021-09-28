import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`
export const Heading = styled.h1`
  font-size: var(--medium);
  margin-bottom: var(--small);
  display: flex;
  justify-content: center;
`

export const Body = styled.div`
  // body styles
  // p, a, ul, li, blockquote

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  ul li {
    margin-right: var(--small);
  }

  p {
    font-size: var(--small);
    line-height: var(--medium);
  }
`
