/* eslint-disable camelcase */

import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import {
  InfoUserContainer,
  InfoUserContent,
  PrimitiveGithubIcon,
  PrimitiveUserGroupIcon,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCircleUser,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

interface IUserInfo {
  name: string
  followers: number
  githubUsername: string
  url: string
  imgUrl: string
  description: string
}

export function InfoUser() {
  const [dataInfoUser, setDataInfoUser] = useState<IUserInfo>()
  async function getUser() {
    const response = await api.get('users/joezersmaniotto')
    const { name, followers, login, html_url, avatar_url, bio } = response.data
    const dataUser = {
      name,
      followers,
      githubUsername: login,
      url: html_url,
      imgUrl: avatar_url,
      description: bio,
    }
    setDataInfoUser(dataUser)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <InfoUserContainer>
      <img src={dataInfoUser?.imgUrl} alt="Avatar User Github" />
      <InfoUserContent>
        <header>
          <h1>{dataInfoUser?.name}</h1>
          {dataInfoUser?.url !== undefined && (
            <NavLink to={dataInfoUser?.url} target="_blank" rel="noreferrer">
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </NavLink>
          )}
        </header>
        <main>
          <p>{dataInfoUser?.description}</p>
        </main>
        <footer>
          <div>
            <PrimitiveGithubIcon icon={faCircleUser} />
            <span style={{ fontWeight: 400 }}>
              {dataInfoUser?.githubUsername}
            </span>
          </div>
          <div>
            <PrimitiveUserGroupIcon icon={faUserGroup} />
            <span style={{ fontWeight: 400 }}>{dataInfoUser?.followers}</span>
          </div>
        </footer>
      </InfoUserContent>
    </InfoUserContainer>
  )
}
