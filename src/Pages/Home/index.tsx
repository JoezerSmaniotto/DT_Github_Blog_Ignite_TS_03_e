import { InfoUser } from './Components/InfoUser'
import { ContainerHome } from './styles'
import { PostSection } from './Components/PostSection/index'

export function Home() {
  return (
    <ContainerHome>
      <InfoUser />
      <PostSection />
    </ContainerHome>
  )
}
