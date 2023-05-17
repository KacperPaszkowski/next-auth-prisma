import { signIn } from "next-auth/react"

export default function IndexPage() {
  return (
    <p>
      <button onClick={() => signIn()}>Login</button>
    </p>
  )
}
