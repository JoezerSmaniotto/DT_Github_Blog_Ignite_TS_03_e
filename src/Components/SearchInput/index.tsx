import { InputHTMLAttributes } from 'react'
import { Container, Input } from './styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ ...rest }: SearchInputProps) {
  return (
    <Container>
      <Input {...rest} />
    </Container>
  )
}
