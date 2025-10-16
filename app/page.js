import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div>
      <h1>Shubham</h1>
      <Button>Click me</Button>
      <UserButton />
    </div>
  )
}