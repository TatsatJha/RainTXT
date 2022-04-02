import React from 'react'
import { useRouter } from 'next/router'

export default function folders() {
    const router = useRouter()
    const id = router.query
  return (
    <div> {id.id}
    </div>
  )
}
