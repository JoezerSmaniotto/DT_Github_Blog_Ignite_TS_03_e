import React, { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import {
  SearchSection,
  PostSectionContainer,
  ContainerForm,
  ContainerPosts,
} from './styles'
import { SearchInput } from '../../../../Components/SearchInput/index'
import { PostCard } from '../PostCard'
import { api } from '../../../../lib/axios'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: string
}

//
const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function PostSection() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [postsSearch, setPostsSearch] = useState<IPost[]>([])
  const [postsCounter, setPostsCounter] = useState(0)

  async function fetchPosts(query = '') {
    const response = await api.get(
      `search/issues?q=${
        query || ''
      }%20repo:${'joezersmaniotto'}/DT_Github_Blog_Ignite_TS_03_e`,
    )

    setPosts(response.data.items)
    setPostsCounter(response.data.total_count)
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  //
  const { control, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  const handleSearchPosts = (data: SearchFormInputs) => {
    if (data.query !== '') {
      const resul = posts.filter((post) =>
        post.title.toUpperCase().includes(data.query.toUpperCase()),
      )
      if (resul.length > 0) {
        setPostsSearch(resul)
      }
    } else {
      setPostsSearch([])
    }
  }
  return (
    <PostSectionContainer>
      <SearchSection>
        <div>
          <h1>Publicações</h1>
          <span>{postsCounter} posts</span>
        </div>
      </SearchSection>
      <ContainerForm onSubmit={handleSubmit(handleSearchPosts)}>
        <Controller
          control={control}
          name="query"
          render={({ field, fieldState }) => {
            return (
              <>
                <SearchInput
                  placeholder="Buscar conteúdo"
                  value={field.value}
                  onChange={(event) => {
                    const inputValue = event.target.value
                    field.onChange(inputValue)
                  }}
                />
                {fieldState.error && <span>{fieldState.error.message}</span>}
              </>
            )
          }}
        />
      </ContainerForm>
      <ContainerPosts>
        {posts.length > 0 && postsSearch.length === 0
          ? posts.map((post) => (
              <PostCard key={`${post.title}-${post.number}`} post={post} />
            ))
          : postsSearch.map((post) => (
              <PostCard key={`${post.title}-${post.number}`} post={post} />
            ))}
      </ContainerPosts>
    </PostSectionContainer>
  )
}
