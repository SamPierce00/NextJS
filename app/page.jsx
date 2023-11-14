"use client"
import CountButton1 from "./CountButton1"
import CountButton5 from "./CountButton5"
import Link from "next/link"
export default function Page() {
    return <div>
      <CountButton1 />
      <CountButton5 />
      <hr />
      <a Link href="https://github.com/SamPierce00/NextJS.git" passHref={true}>My repo</a>
      <hr />
      <p>Search Bar</p>
    </div>
  }