import axios from 'axios';
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const username = "arthurfary";
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
 
    return NextResponse.json({ data: response.data }, { status: 200 })

  } catch (error) {
    return NextResponse.status(500)
  }
}
