/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useParams } from 'react-router-dom'
import { PostDetailCard } from './Components/PostDetailCard'
import { ContainerDetailsPost, ContentDetailsPost } from './styles'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface IPostDetail {
  title: string
  comments: number
  createdAt: string
  githubUsername: string
  url: string
  body: string
}

export function DetailsPost() {
  const [post, setPost] = useState<IPostDetail>({} as IPostDetail)
  const { id } = useParams()

  async function fetchPost() {
    const response = await api.get(
      `/repos/joezersmaniotto/DT_Github_Blog_Ignite_TS_03_e/issues/${id}`,
    )
    const { title, comments, created_at, user, html_url, body } = response.data
    const newPostObj = {
      title,
      githubUsername: user.login,
      comments,
      createdAt: formatDistanceToNow(new Date(created_at), {
        locale: ptBR,
        addSuffix: true,
      }),
      url: html_url,
      body,
    }
    setPost(newPostObj)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <ContainerDetailsPost>
      <PostDetailCard post={post} />
      <ContentDetailsPost>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </ContentDetailsPost>
    </ContainerDetailsPost>
  )
}
