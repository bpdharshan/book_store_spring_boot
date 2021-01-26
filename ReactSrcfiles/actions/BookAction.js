import axios from 'axios';

export const SET_BOOKS = 'SET_BOOKS';
export const ADD_BOOKS = 'ADD_BOOKS';
// export const UPDATE_BOOKS = 'UPDATE_BOOKS';
export const SET_CATEGORIES = 'SET_CATEGORIES';


export const getBooks = (bookid = '') => dispatch => {
  axios
    .get('http://localhost:8080/api/books/' + bookid)
    .then(response => {
      dispatch({
        type: SET_BOOKS,
        payload: {
          data: response.data
        }
      });
    });
}


export const getCategories = () => dispatch => {
  axios
    .get('http://localhost:8080/api/categories')
    .then(response => {
      dispatch({
        type: SET_CATEGORIES,
        payload: {
          data: response.data
        }
      });
    });
}


export const saveBooks = (book) => dispatch => {
  axios
    .post('http://localhost:8080/api/addbooks', book)
    .then(response => {
      if(response.data == true)
        window.location.href = "/";
      else
        alert("some error occured");
    });
}


export const searchBooks = (searchtext) => dispatch => {
  axios
    .get('http://localhost:8080/api/books/search', {searchtext})
    .then(response => {
      dispatch({
        type: SET_BOOKS,
        payload: {
          data: response.data
        }
      });
    });
}
