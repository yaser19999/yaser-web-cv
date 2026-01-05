import BlogSection from '@/components/Blog'
import NavBar from '@/components/NavBar'

export default async function page() {
  
  return (
    <div>
      <NavBar />
      <BlogSection />
    </div>
  )
}
