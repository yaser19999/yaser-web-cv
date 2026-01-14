import BlogSection from '@/components/Blog'
import NavBar from '@/components/NavBar'

export default async function page({searchParams}:{searchParams:{tag?:string , page?:string }}) {
const {tag , page} = await searchParams
  return (
    <div>
      <NavBar />
      <BlogSection  tag={tag} page={page}/>
    </div>
  )
}
