"use client"
import CountButton from "./CountButton"
import SearchBar from "./SearchBar"
export default function Page() {

  return <div>
      <CountButton incrementBy={1} limit={10}/>
      <CountButton incrementBy={5} limit={20}/>
      <hr />
      <a href="https://github.com/SamPierce00/NextJS.git">My repo</a>
      <hr />
      <p>Search Bar</p>
      <SearchBar />
    </div>
  }