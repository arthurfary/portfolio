export async function getRepos() {
    const response = await fetch("/api/github");
    const data = await response.json(); 

    console.log(data);
    return data.data;
}