// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function() {
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=87fd9a72&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards+= card(m);
//             })
//             const movieContainer = document.querySelector('.movie-container')
//             movieContainer.innerHTML = cards;
//             const movieDetail = document.querySelectorAll('.modal-detail-button')
//             movieDetail.forEach(btn => {
//                 btn.addEventListener('click', function() {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=87fd9a72&i=' + imdbid)
//                     .then(response => response.json())
//                     .then(m => {
//                         const movieDetail = detail(m);
//                         const modalBody = document.querySelector('.modal-body');
//                         modalBody.innerHTML = movieDetail;
//                 })
//             })
           
//         })
//     })
// })

 const searchButton = document.querySelector('.search-button');
 searchButton.addEventListener('click', async function() {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies); 
 })

 //event binding

 document.addEventListener('click', async function(e){
    if(e.target.classList.contains('modal-detail-button')) {
      const imdbid = e.target.dataset.imdbid
      const movieDet = await getMovieDetail(imdbid)
      updateUidetail(movieDet)
      
    }
 })

 function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=87fd9a72&i=' + imdbid)
  .then(response => response.json())
  .then(m => m)
 }

 function updateUidetail(m) {
     const movieDetail = detail(m);
     const modalBody = document.querySelector('.modal-body');
     modalBody.innerHTML = movieDetail;
   
 }

 function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=87fd9a72&s=' + keyword)
          .then(response => response.json())
          .then(response => response.Search);
           
 }


  function updateUI(movies) {
    let cards = '';
    movies.forEach(m => {
      cards+= card(m);
    })
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards;
  }


function card(m) {
    return `<div class="col-md-4 my-5">
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
}

function detail(m) {
    return `
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
    `
}
//Promise
// let ditetapi = false;
// const janji = new Promise((resolve, reject) => {
//     if(ditetapi) {
//         resolve('janji ditetapi')
//     } else {
//         reject('ingkar janji');
//     }
// })

// janji.then(response => console.log('Ok' + response)).catch(response => console.log('Error Bro :' + response));

// let ditetapi = false;
// const janji = new Promise((resolve, reject) => {
//     if(ditetapi) {
//         setTimeout(() => {
//             resolve('ditetapi setelah beberapa detik')
//         }, 2000);
             
//     } else {
//         setTimeout(() => {
//             resolve('tidak ditetapi')
//         }, 2000)
//     }
// })

// console.log('mulai');
// janji
//     .finally(() => console.log('Selesai menunggu'))
//     .then(response => console.log('ok : ' + response))
//     .catch(response => console.log('Ok : ' + response))
    

//Promise ALL

// const film = new Promise( resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul : 'matilah',
//             sutradra : 'gunawan'
//         }])
//     }, 2000);
// });

// const cuaca = new Promise( resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota : 'bandung',
//             temp : '20'
//         }])
//     })
// }, 1000)

// Promise.all([film, cuaca])
//     .then(response => {
//         const [film, cuaca] = response;
//         console.log(film);
//         console.log(cuaca)
//     })


