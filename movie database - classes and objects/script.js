class movie{
    constructor(title,director,year){
        this.title = title;
        this.director=director;
        this.year=year;
    }
}


addMovieToList=(movie)=>{
    const list=document.getElementById('moviedetails');
    const row=document.createElement('tr');

    row.innerHTML = "<td>"+movie.title+"</td><td>"+movie.director+"</td><td>"+movie.year+"</td>"
    list.appendChild(row)
}


document.querySelector("#movie-form").addEventListener("submit",addAMOVIE)

    function addAMOVIE(e){

    e.preventDefault()

        const title=document.querySelector("#title").value;
        const director=document.querySelector("#director").value;
        const year=document.querySelector("#year").value;

        const Movie= new movie(title,director,year)

            addMovieToList(Movie)
            document.querySelector("#title").value = " ";
            document.querySelector("#director").value = " ";
            document.querySelector("#year").value = " ";
    }

    