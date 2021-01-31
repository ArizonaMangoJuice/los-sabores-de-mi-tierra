    import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { fetchBlogsToEdit } from '../../actions';
import EditBlogCard from '../EditBlogCard';

const mapStateToProps = state => ({
    articles : state.editPageBlog.articles,

});

function EditBlogs(props) {
    const [isArticlesEmpty, setArticle] = useState(true);

    useEffect(() => {
        if(isArticlesEmpty){
            props.dispatch(fetchBlogsToEdit());
            setArticle(false);
        }    
        // return () => {
            
        // }
    }, [isArticlesEmpty])

    let test = !isArticlesEmpty ? props.articles.map(e => (
        <EditBlogCard title={e.title} history={e.history}/>
    ))
        : null;

    console.log(test)


    return (
        <>
            <div className='edit-blog-container'>
                {test}
            </div>
        </>
    )
}

export default connect(mapStateToProps)(EditBlogs);

//useoffset to paginate the db