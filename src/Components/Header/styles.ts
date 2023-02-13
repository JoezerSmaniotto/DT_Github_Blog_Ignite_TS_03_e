import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  background-image: url('../../../public/ImageHeader.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${(props) => props.theme['base-profile']};
`
