import { ContainerPostDetailCard, LinkCard } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IPostDetail } from '../../index'

interface IPostDetailCard {
  post: IPostDetail
}

export function PostDetailCard({ post }: IPostDetailCard) {
  return (
    <ContainerPostDetailCard>
      <header>
        <LinkCard to="/">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </LinkCard>
        <LinkCard to={post?.url}>
          GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkCard>
      </header>
      <main>
        <h1>{post.title}</h1>
      </main>
      <footer>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>{post.githubUsername}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{post.createdAt}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{post.comments} Comments</span>
        </div>
      </footer>
    </ContainerPostDetailCard>
  )
}
