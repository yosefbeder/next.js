import Link from 'next/link'
import { Red } from '../components/red'

export default function Home() {
  return (
    <>
      <Link href="/foo">/foo</Link>
      {/* Red should be imported to be reproduced */}
      <Red />
    </>
  )
}
