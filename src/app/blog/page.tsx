import ArticleCard from '@/components/ArticleCard'
import PageTitle from '@/components/PageTitle'
import { PageWrapper } from '@/components/PageWrapper'
import Section from '@/components/Section'
import { getAllBlogArticles } from '@/lib/devto'
import React from 'react'

const title = 'Blog ✍️'
const subtitle =
  "I share anything that may help others, technologies I'm using and cool things I've made."

const BlogPage = async () => {
  const articles = await getAllBlogArticles()
  return (
    <PageWrapper>
      <PageTitle title={title} subtitle={subtitle} />
      <Section linebreak>
        {articles.map(({ title, description, publishedAt, tags, canonical }) => (
          <ArticleCard
            key={title}
            title={title}
            description={description}
            date={publishedAt}
            tags={tags}
            canonical={canonical} />
        ))}
      </Section>
    </PageWrapper>
  )
}

export default BlogPage
