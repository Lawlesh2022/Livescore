//const API_KEY = "bc8ddbae-b6bb-4ec7-9be9-e647c5886f40"
const API_KEY = "5eebc5f4-8c58-4753-abce-d637425d9a33"

export const getMatches = ()=>{
    const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`;
    return fetch(url)
    .then((response)=> response.json())
    .catch((error)=>console.log("ERROR: ", error));
}
export const getMatchDetails = (id)=>{
    const url = `https://api.cricapi.com/v1/cricScore?apikey=${API_KEY}&unique_id=${id}`;
    return fetch(url)
    .then((response)=> response.json())
    .catch((error)=>console.log("ERROR: ", error));
}