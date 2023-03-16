export const exerciseOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        "X-RapidAPI-Key": "be59829bcfmshc828d6c9bb3b652p123a9bjsn6392a25e6751"
    },
};

export const youtubeOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
        "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
    },
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};
