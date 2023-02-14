import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  margin-top: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-border']};

  color: ${(props) => props.theme['base-text']};
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme['base-input']};
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
