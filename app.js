const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const searchTerm = searchForm.elements.query.value;
    const getTvShow = async () => {
        const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        // console.log();
        makeImage(res.data)   
    }
    getTvShow();
    // const imge = document.body.querySelector("img");
    // const hed = document.body.querySelector("h2");
    // hed.remove();
    // imge.remove();
})

const makeImage = (shows) => {
    for(let s of shows){
        if (s.show.image){
            const img = document.createElement("img");
            const name = document.createElement("h2")
            img.src = s.show.image.medium;
            name.innerText = s.show.name;
            document.body.append(img);
            document.body.append(name);
        }
    }
}
