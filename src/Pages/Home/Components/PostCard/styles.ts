import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerCard = styled(NavLink)`
  width: 100%;
  text-decoration: none;

  /* As 3 linhas abaixo resolveram o problema de ficar apresentando linhas cortandas */
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;

  height: 260px;
  overflow: hidden;

  transition: border 0.2s;
  cursor: pointer;

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    h1 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
      text-align: justify;
    }
    span {
      width: auto;
      min-width: 56px;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  main {
    height: 112px;
    overflow: hidden;
    p {
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
      overflow: hidden;
      text-align: justify;
      overflow: hidden;
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
