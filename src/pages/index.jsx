import {ImCopy} from 'react-icons/im'
import { useRouter } from 'next/router';



export default function Home() {

  const router = useRouter()
  const { routerQuery } = router.query
  console.log(routerQuery)

  return (
    <div>
      <div className="text-5xl absolute right-0 top-0"><ImCopy className="cursor-pointer" onClick={() => {
        navigator.clipboard.writeText(`<div class="jumbotron" style="width: 50%; position: fixed; bottom: 0; right: 0; outline: 1px solid black; border-radius: 20px; max-width: 350px; margin: 10px;">
    <iframe src="https://cmd-react-as99.vercel.app/iframe" style="border:none; min-height: 400px;" width="100%"></iframe></div>`)
    alert('copied!')
    }} /></div>

    
      <div>HOMEPAGE TEST :)</div>
      </div>
  )
}


/*


<div class="jumbotron" style="width: 50%; position: fixed; bottom: 0; right: 0; outline: 1px solid black; border-radius: 20px; max-width: 350px; margin: 10px;">
    <iframe src="http://localhost:3000" style="border:none; min-height: 400px;" width="100%"></iframe>
</div>


*/