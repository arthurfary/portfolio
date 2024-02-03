import { NextResponse } from "next/server";

export async function GET(req, res) {
  const username = "arthurfary";
  try {
    const response = await fetch(`https://pinned.thrzl.xyz/${username}`); // api refreshes cache every hour
    const data = await response.json();
    
    // console.log(data)
    return NextResponse.json({ data: data }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
