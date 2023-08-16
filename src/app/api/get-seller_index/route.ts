import { createPool } from "@vercel/postgres";
import { NextResponse } from "next/server";

const client = createPool({
    connectionString: "postgres://default:hdl5rvQJ3Woe@ep-shrill-feather-56119370-pooler.us-east-1.postgres.vercel-storage.com/verceldb"
})

export async function getIndex() {
  const sellerIndex = await client.sql`SELECT * FROM seller_index;`;
  const response = sellerIndex.rows
  const index = response[0].index
  console.log(index);
  
  return index
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const newIndex = searchParams.get('newIndex');
  
    try {
      if (!newIndex) throw new Error('New index required');
      await client.sql`UPDATE seller_index SET index = ${newIndex};`;
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  
    return NextResponse.json({ success: true }, { status: 200 });
  }