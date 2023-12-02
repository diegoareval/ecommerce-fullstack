import Link from 'next/link'
export default function Home() {
  return (
    <>
    <div>
      <h1>hola mundo</h1>
      <Link href="/join/sign-in">Ir a login
      </Link>
    </div>
    </>
  )
}
