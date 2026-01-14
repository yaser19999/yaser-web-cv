import ForgetPasswordEmailPage from '@/components/ForgetPasswordEmailPage'
import NavBar from '@/components/NavBar'

export default async function page({searchParams}:{searchParams?:{message?:string , type?:"success" | "error"}}) {
  const data = await searchParams;
  
  return (
    <div>
      <NavBar />
      <ForgetPasswordEmailPage searchParams={data} />
    </div>
  )
}
