import fs from 'fs'
import moment from 'moment'
import IArticle from '@/interfaces/IArticle'
import { getAllBlogArticles, getArticleFromCache } from '@/lib/devto'
import path from 'path'
import PageTitle from '@/components/PageTitle'
import DevToCallToAction from '@/components/DevToCallToAction'
import { PageWrapper } from '@/components/PageWrapper'

const cacheFile = '.dev-to-cache.json'

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const cacheContents = fs.readFileSync(path.join(process.cwd(), cacheFile), 'utf-8')
  const cache = JSON.parse(cacheContents)

  const article: IArticle = getArticleFromCache(cache, slug)
  const publishedDate = moment(article.publishedAt).format('Do MMMM YYYY')
  return (
    <PageWrapper>
      {article.coverImage && (
        <img
          src={article.coverImage}
          alt={`Cover for ${article.title}`}
          className="md:mt-6 lg:mt-10 xl:mt-14 h-40 sm:h-48 md:h-52 lg:h-64 xl:h-68 2xl:h-80 mx-auto"
        />
      )}
      <PageTitle title={article.title} center icons={false} />
      <p className="text-center w-full my-4 italic leading-relaxed text-gray-600">
        {publishedDate}
      </p>
      <section className="mt-6 font-light leading-relaxed w-full flex flex-col items-center">
        <article
          className="prose dark:prose-dark lg:prose-lg w-full md:w-5/6 xl:w-9/12"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
        <DevToCallToAction href={article.devToURL} />
      </section>
    </PageWrapper>
  )
}

export const generateStaticParams = async () => {
  const articles: IArticle[] = await getAllBlogArticles()
  fs.writeFileSync(path.join(process.cwd(), cacheFile), JSON.stringify(articles))

  const paths = articles.map(({ slug }) => {
    return {
      params: { slug }
    }
  })
  return paths
}

export default Page
