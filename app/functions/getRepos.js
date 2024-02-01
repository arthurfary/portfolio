export async function getRepos() {
    const response = await fetch("https://gh-pinned-repos-api.ysnirix.xyz/api/get/?username=arthurfary");
    const data = await response.json();
    return data.response
}