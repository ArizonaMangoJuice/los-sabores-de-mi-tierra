import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { fetchBlogsToEdit } from '../../actions';

const mapStateToProps = state => ({
    articles : state.editPageBlog.articles
});

function EditBlogs({dispatch}) {
    const [isArticlesEmpty, setArticle] = useState(true);

    useEffect(() => {
        if(isArticlesEmpty){
            dispatch(fetchBlogsToEdit());
            setArticle(false);
        }    
        // return () => {
            
        // }
    }, [isArticlesEmpty, dispatch])

    return (
        <>
            <p>
                hello
            </p>
        </>
    )
}

export default connect(mapStateToProps)(EditBlogs);

//useoffset to paginate the db