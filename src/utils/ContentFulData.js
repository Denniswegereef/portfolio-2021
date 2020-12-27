const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries(options = {}) {
  const entries = await client.getEntries(options)
  if (entries.items) return client.parseEntries(entries.items)
  console.error(`Error getting Entries for ${contentType.name}.`)
}