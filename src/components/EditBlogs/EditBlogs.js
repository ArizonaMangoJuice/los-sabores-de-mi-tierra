import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { fetchBlogsToEdit } from '../../actions';
import EditBlogCard from '../EditBlogCard';
import './EditBlogs.css';

const mapStateToProps = state => ({
    articles : state.editPageBlog.articles,
});

// this will need a move up and down action and button

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
    }, [isArticlesEmpty, props])

    let editBlogCards = !isArticlesEmpty ? props.articles.map(e => (
        <EditBlogCard key={e.title} title={e.title} history={e.history} setBlogInfo={setBlogInfo} setClicked={setClicked}/>
    ))
        : null;

    // console.log(isClicked)

    return (
        <>
            <div className='edit-blog-container'>
                <div className={`${isClicked ? 'edit-blog-editor' : 'hidden'}`}>
                    <nav>
                        <button onClick={() => setClicked(false) && setBlogInfo({})}>Close Blog</button>
                    </nav>
                    <input className='login-input-text black' value={blogInfo && blogInfo.title ? blogInfo.title : ''}></input>
                    {
                        blogInfo && blogInfo.history 
                            ? blogInfo.history.map(e => (
                                e.isImage 
                                    ? <div className='image-history' >
                                        <nav className='image-history-nav'>
                                            <button className='image-history-button'>Move Up</button>
                                            <button className='image-history-button'>Move Down</button>
                                        </nav>
                                        <img className='edit-blog-image' alt='shows the recipes mentioned' src={e.imageUrl} />
                                      </div>
                                    : e.text 
                                        ? <div> 
                                            <textarea value={e.text} />
                                          </div>
                                        : ''//this will need to show the lists as well
                            ))
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