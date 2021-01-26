import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions/BookAction';

function BookDetails(props) {

    useEffect(() => {
        props.dispatch(getBooks(props.match.params.id));
    }, [])
    return (
        <div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        'books': state.book.books
    }
}

export default connect(mapStateToProps)(BookDetails);
