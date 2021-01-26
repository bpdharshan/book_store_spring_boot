import React, {useRef} from 'react';
import './NavBar.css';

import { connect } from 'react-redux';

import { searchBooks } from '../actions/BookAction'


function NavBar(props) {


    const searchRef = useRef('');

    const handleSearch = (e) => {
        e.preventDefault();
        props.dispatch(searchBooks(searchRef.current.value));
    }

    return (
        <ul class="nav">
            <li><a href="/">Book Store</a></li>
            <li><a href="/addbooks">Add Books</a></li>
            <li className="searchNav">
                <form class="form">
                    <input type="text" ref={searchRef} placeholder="Search books" name="searchtext"/>
                    <button className="searchBtn" onClick={handleSearch}>GO</button>
                </form>
            </li>
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        'books': state.book.books
    }
}

export default connect(mapStateToProps)(NavBar);

