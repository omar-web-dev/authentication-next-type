import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
  <Head><title>blogs</title></Head>
    <h1>This is a Home page</h1>
    <Link href='/dashboard'>Dashboard</Link>
    <Link href='/blog'>blog</Link>
    </>
  )
}
