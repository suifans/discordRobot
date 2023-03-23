import type { NextPage } from 'next';
import {useRouter} from "next/router";
import Login from "./login";

const IndexPage: NextPage = () => {
    const router = useRouter()
  return (
      <main>
      <Login/>
      </main>
  )
}

export default IndexPage


