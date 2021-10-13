import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #f9fafb;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 4rem;
    color: #1f2937;
    margin-bottom: 6rem;
  }

  h2 {
    font-size: 3rem;
    color: #374151;
  }

  h3 {
    font-size: 2rem;
    color: #3b82f6;
    font-weight: 500;
    margin-top: 2rem;
  }

  p {
    color: #6b7280;
    margin-top: 1rem;
  }
`

export const Container = styled.div`
  height: 100%;
  max-width: 1120px;
  margin: 4rem 0rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    margin-bottom: 8rem;
  }
`
