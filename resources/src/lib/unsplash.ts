import {createMemo, createSignal} from "solid-js";


const apiKey = import.meta.env.VITE_UNSPLASH_API;

export function useUnsplash() {
    const [searchResults, setSearchResults] = createSignal<any>();
    const [resultStats, setResultStats] = createSignal();
    const [totalResults, setTotalResults] = createSignal();
    const [getPhotos, setPhotos] = createSignal();

    let currentPage = 1;

    function nextBtn() {
        currentPage += 1;
    }

    function prevBtn() {
        currentPage -= 1;
    }

    async function fetchResults(ev: string) {
        const [getSearchString, setSearchString] = createSignal<string>(ev);
        try {
            const results = await searchUnsplash(getSearchString());

            setPhotos(results);
        } catch (err) {
            console.log(err);
            alert("Failed to search Unsplash");
        }
    }

    async function searchUnsplash(ev: string) {
        const endpoint = `https://api.unsplash.com/search/photos?query=${ev}&per_page=30&page=1&client_id=${apiKey}`;
        const response = await fetch(endpoint);
        if (!response?.ok) {
            await fetchResults('')
        }
        const json = await response?.json();
        setSearchResults(json);
        setTotalResults(json?.total);
        setResultStats(`About ${totalResults} results found`);

        if (currentPage >= searchResults.length) {
            return [];
        }
        if (currentPage !== 1) {
            return [];
        }
    }

    const filteredData = createMemo(() => {
        return searchResults()
    });

    return {
//        fetchResults,
//        nextBtn,
//        prevBtn,
        filteredData,
        getPhotos,
        searchResults,
        resultStats,
        searchUnsplash
    };

}
