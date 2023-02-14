import styled from 'styled-components'

export const PostSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: 700;
      font-size: 1.12rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const ContainerForm = styled.form`
  width: 100%;
`

export const ContainerPosts = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;
  gap: 1rem;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
