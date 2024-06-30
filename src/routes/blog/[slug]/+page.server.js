import {createClient} from '@vercel/postgres';

async function queryNames() {
  const client = createClient();
  await client.connect();
  try {
      return await client.sql`SELECT * FROM NAMES;`
  } finally {
    await client.end();
  }
}

export async function load({locals }) {
  return {
    names: await queryNames()
  }
}