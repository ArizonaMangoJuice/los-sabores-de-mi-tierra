    import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { fetchBlogsToEdit } from '../../actions';
import EditBlogCard from '../EditBlogCard';

const mapStateToProps = state => ({
    articles : state.editPageBlog.articles,

});

function EditBlogs(props) {
    const [isArticlesEmpty, setArticle] = useState(true);
    const [isClicked, setClicked] = useState(false);
    const [blogInfo, setBlogInfo] = useState({});

    useEffect(() => {
        if(isArticlesEmpty){
            props.dispatch(fetchBlogsToEdit());
            setArticle(false);
        }    
        // return () => {
            
        // }
    }, [isArticlesEmpty])

    let editBlogCards = !isArticlesEmpty ? props.articles.map(e => (
        <EditBlogCard key={e.title} title={e.title} history={e.history} setBlogInfo={setBlogInfo} setClicked={setClicked}/>
    ))
        : null;

    console.log(isClicked)


    return (
        <>
            <div className='edit-blog-container'>
                <div className={`${isClicked ? 'edit-blog-editor' : 'hidden'}`}>
                    <nav>
                        <button onClick={() => setClicked(false) && setBlogInfo({})}>Close Blog</button>
                    </nav>
                    <p>{blogInfo && blogInfo.title ? blogInfo.title : ''}</p>
                    {
                        blogInfo && blogInfo.history 
                            ? blogInfo.history.map(e => (<p>hello</p>))
                            : ''
                    }
                </div>
                <div className={`${isClicked ? 'hidden' : ''}`}>
                    {editBlogCards}
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps)(EditBlogs);

//useoffset to paginate the db