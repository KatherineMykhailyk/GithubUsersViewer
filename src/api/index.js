import axios from "axios";

export default function getPopularUsersByLanguage(language) {
    return axios.get(`https://api.github.com/search/users`, {
        params: {
            q: `language:${language}`,
            per_page: 10,
            sort: "followers",
            order: "desc",
        }
    })
        .then(response => response.data);
}

