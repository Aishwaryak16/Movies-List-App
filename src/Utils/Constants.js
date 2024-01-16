const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzdmZmE0OWU1YTU2MDU0NmM3YTA1MDMwZGRlMTE5MyIsInN1YiI6IjY0ZjM4ODljM2Q0M2UwMDBhY2ZkNjU5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.apz8XI59mJmPUNskhpO2nva16IdDD5B3h8Y1VsjofHE'
  }
};

const moviesList = 'https://api.themoviedb.org/3/movie/now_playing?api_key=f77ffa49e5a560546c7a05030dde1193'

const API_KEY = 'f77ffa49e5a560546c7a05030dde1193';

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi'},
  {identifier: 'spanish', name: 'Spanish'},
];

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500/';

export const OPENAI_KEY = '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';