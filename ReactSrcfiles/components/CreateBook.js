import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveBooks, getCategories } from '../actions/BookAction'

function CreateBook(props) {

    useEffect(() => {
        props.dispatch(getCategories());
    }, [])

    const bookNameRef = useRef('');
    const bookPriceRef = useRef('');
    const descriptionRef = useRef('');
    const authorRef = useRef('');
    const categoryRef = useRef('');
    const handleSubmit = (e) => {
        e.preventDefault();
        let bookData = {
            'bookName': bookNameRef.current.value,
            'bookPrice': bookPriceRef.current.value,
            'description': descriptionRef.current.value,
            'author': authorRef.current.value,
            'categoryName': categoryRef.current.value
        }
        props.dispatch(saveBooks(bookData));
    }
    return (
        <div>
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card card-outline-secondary">
                            <div class="card-header">
                                <h3 class="mb-0">Add book</h3>
                            </div>
                            <div class="card-body">
                                <form autocomplete="off" class="form" method="post" onSubmit={handleSubmit}>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">Book name</label>
                                        <div class="col-lg-9">
                                            <input class="form-control" ref={bookNameRef} name="bookName" type="text" required/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">Price</label>
                                        <div class="col-lg-9">
                                            <input class="form-control" type="text" ref={bookPriceRef} name="bookPrice"  required/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">Description</label>
                                        <div class="col-lg-9">
                                            <input class="form-control" type="text" ref={descriptionRef} name="description" required/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">Author</label>
                                        <div class="col-lg-9">
                                            <input class="form-control" type="text" ref={authorRef} name="author" required/>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label">Category</label>
                                        <div class="col-lg-9">
                                            <select class="form-control" ref={categoryRef} name="category" required>
                                                <option>Select one</option>
                                                {props.categories.map(item => (
                                                    <option value={item}>{item}</option>
                                                ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-lg-3 col-form-label form-control-label"></label>
                                        <div class="col-lg-9 text-right">
                                            <Link to={"/"}>
                                                <button class="btn btn-secondary" type="button">Cancel</button>
                                            </Link>
                                            <input class="btn btn-primary" type="submit" value="Save Changes" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        'books': state.book.books,
        'categories': state.book.categories
    }
}
export default connect(mapStateToProps)(CreateBook);
