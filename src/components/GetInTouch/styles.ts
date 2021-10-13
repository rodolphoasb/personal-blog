import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 3rem;

  h2 {
    font-size: 3rem;
    color: #f3f4f6;
  }

  p {
    font-size: var(--small);
    line-height: var(--medium);
    margin: 1rem 0rem;
  }

  a {
    margin-right: 1rem;
    span {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
    svg {
      width: 25px;
    }
  }
`
