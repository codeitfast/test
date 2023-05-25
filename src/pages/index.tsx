import { asyncLoad } from "../../components/asyncLoad"
import { useState } from "react";
import handler from "./api/hello";

export default function Home() {

  const [data, setData] = useState(null);
  async function handleClick() {
    const newData = await handler()
    setData(newData);
  }
  
  return (
    <button className="bg-slate-600 p-4 rounded-md" onClick={handleClick}>{JSON.stringify(data)}</button>
  )
}
