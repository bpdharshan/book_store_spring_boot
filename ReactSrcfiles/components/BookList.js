import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/BookAction';
import NavBar from './NavBar';

function BookList(props) {
    useEffect(() => {
        props.dispatch(getBooks());
    }, []);

    const showDetails = (e) => {
        props.history.push('/details/'+e);
    }
    return (
        <div>
            <NavBar />
            <div className="row">
                {
                    props.books.map(item => (
                        <div class="col-md-3 col-sm-6 col-xs-12 item" onClick={() => showDetails(item.bookid)}>
                            <div class="card item-card card-block">
                                <img src="" alt="" />
                                <h5 class="item-card-title mt-3 mb-3 pl-2 pr-2">{item.bookName}</h5>
                                <p class="card-text pl-2 pr-2">{item.description}</p> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        'books': state.book.books
    }
}

export default connect(mapStateToProps)(BookList);

