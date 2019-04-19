import axios from 'axios';
const BASE_URL="https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESIONS_URL = `${BASE_URL}movie_suggestions.json`;
// {
//     data:{
//         movies:[
//           {}  ....
//         ]
//     }
// }

export const getMovies = async(limit,rating)=> {
    
    const data= await axios(LIST_MOVIES_URL,{
        params:{
            limit,
            minimum_rating:rating
        }
    });
    console.log(data);
    return data.data.data.movies;
};
export const getMovie = async id =>{
    const {
        data:{
            data:{movie}
        }
    }= await axios(MOVIE_DETAILS_URL,{
        params:{
            movie_id:id
        }
    });
    return movie;
};

export const getSuggestions = async id=> {
    const{
        data:{
            data:{movies}
        }
    }= await axios(MOVIE_SUGGESIONS_URL,{
        params:{
            movie_id:id
        }
    });
    return movies
};