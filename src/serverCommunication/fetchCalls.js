export const fetchResources = (url) => {
    //Fetch all
   return fetch(url)
    .then(res => res.json())
}

