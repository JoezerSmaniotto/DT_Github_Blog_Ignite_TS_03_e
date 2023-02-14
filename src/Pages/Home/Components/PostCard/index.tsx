/* eslint-disable camelcase */
import { formatDistanceToNow } from 'date-fns'
import { ContainerCard } from './styles'
import { IPost } from '../PostSection/index'
import { ptBR } from 'date-fns/locale'

interface IPostCard {
  post: IPost
}

export function PostCard({ post }: IPostCard) {
  const { created_at, body, title, number } = post
  const formattedDate = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
    locale: ptBR,
  })
  return (
    <ContainerCard to={`/${number}`}>
      <header>
        <h1>{title}</h1>
        <span>{formattedDate}</span>
      </header>
      <main>
        <p>{body}</p>
      </main>
    </ContainerCard>
  )
}
