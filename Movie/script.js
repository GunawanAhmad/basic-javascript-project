$('.search-button').on('click', function (){   
    $.ajax({
        url : 'http://www.omdbapi.com/?apikey=87fd9a72&s=' + $('.input-keyword').val(),
        success : results => {
            const movie = results.Search;
            let card = '';
            movie.forEach(m =>{
                card += `<div class="col-md-4 my-5">
                <div class="card" >
                  <img class="card-img-top" src="${m.Poster}">
                  <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                  </div>
                </div>
              </div>`
            });
            $('.movie-container').html(card);
            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url :  'http://www.omdbapi.com/?apikey=87fd9a72&i=' + $(this).data('imdbid'),
                    success : m => {
                        const movieDetail = `
                        <div class="container-fluid">
                          <div class="col-md-3">
                            <img src="${m.Poster}" class="img-fluid">
                             </div>
                            <div class="col-md">
                                <ul class="list-group">
                                <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                                <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                                <li class="list-group-item"><strong>Writter : </strong>${m.Writer}</li>
                                <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                                </ul>
                            </div>
                        </div>
                        `;
                        $('.modal-body').html(movieDetail)
                        
                    }, 
                    error : error => {
                        console.log("Salah euy")
                    }
    
                });
            })
        },
        error : error => {
            console.log("Salah euy")
        }
    });
});

