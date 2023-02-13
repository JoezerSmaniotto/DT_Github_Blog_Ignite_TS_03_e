import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const InfoUserContainer = styled.div`
  max-width: 54rem;
  width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: -6rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  border-radius: 10px;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    overflow: none;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`

export const InfoUserContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding-left: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h1 {
      color: ${(props) => props.theme['base-title']};
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;
    }

    a {
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;
      text-decoration: none;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(props) => props.theme.blue};
      transition: border 0.2s;
      border-bottom: 2px solid transparent;
      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }
    }
  }

  main {
    width: 100%;
    p {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-text']};
    }
  }

  footer {
    width: 100%;
    display: flex;
    gap: 1rem;
    div {
      span {
        display: inline-block;
        margin-left: 8px;
      }
    }

    & > div + div {
      margin-left: 1.5rem;
    }
  }

  @media screen and (max-width: 767px) {
    & {
      margin-top: 1rem;
      padding-left: 0;
    }
    main {
      margin-top: 0.8rem;
    }
    footer {
      margin-top: 1rem;
    }
  }
`

const iconPrimitiveStyle = css`
  height: 1.125rem;
  width: 1.125rem;
  color: ${(props) => props.theme['base-label']};
`
export const PrimitiveGithubIcon = styled(FontAwesomeIcon)`
  ${iconPrimitiveStyle}
`

export const PrimitiveBuildingIcon = styled(FontAwesomeIcon)`
  ${iconPrimitiveStyle}
`

export const PrimitiveUserGroupIcon = styled(FontAwesomeIcon)`
  ${iconPrimitiveStyle}
`
