import React from 'react'
import {BsPencil} from "react-icons/bs"
import Link from "next/link"

export default function EditDoc(props: any) {
  return (
    <>
        <Link href={`/edit/${props.id}`}>
            <BsPencil size="24px"></BsPencil>
        </Link>
    </>
  )
}
