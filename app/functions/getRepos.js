export async function getRepos() {
    const response = await fetch("/api/github", {method: 'get'});
    const data = await response.json();
    return data.data
}