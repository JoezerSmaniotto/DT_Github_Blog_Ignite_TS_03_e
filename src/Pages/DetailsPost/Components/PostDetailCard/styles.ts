import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ContainerPostDetailCard = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -6rem;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
  }
  main {
    width: 100%;
    padding-top: 1.25rem;
    h1 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;
    }
  }
  footer {
    width: 100%;
    display: flex;
    margin-top: 0.5rem;
    div {
      span {
        display: inline-block;
        margin-left: 8px;
      }
    }

    & > div + div {
      margin-left: 1.5rem;
    }
    @media screen and (max-width: 767px) {
      & {
        flex-direction: column;
        & > div + div {
          margin-left: 0;
          margin-top: 0.25rem;
        }
      }
    }
  }
`

export const LinkCard = styled(NavLink)`
  text-decoration: none;
  background: transparent;
  color: ${(props) => props.theme.blue};
  transition: border 0.2s;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.blue};
  }
`
