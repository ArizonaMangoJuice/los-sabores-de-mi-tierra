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
    const [title, setTitle] = useState();

    useEffect(() => {
        if(isArticlesEmpty){
            props.dispatch(fetchBlogsToEdit());
            setArticle(false);
        }    
        // return () => {
            
        // }
    }, [isArticlesEmpty, props])

        useEffect(() => {
            if(blogInfo){
                console.log('this is the articles', blogInfo)
                setTitle(blogInfo.title);
            }
        }, [blogInfo])

    let editBlogCards = !isArticlesEmpty ? props.articles.map(e => (
        <EditBlogCard key={e.title} title={e.title} history={e.history} setBlogInfo={setBlogInfo} setClicked={setClicked}/>
    ))
        : null;

    // console.log(title, blogInfo.title)

    return (
        <>
            <div className='edit-blog-container'>
                <div className={`${isClicked ? 'edit-blog-editor' : 'hidden'}`}>
                    <nav>
                        <button onClick={() => setClicked(false) && setBlogInfo({})}>Close Blog</button>
                    </nav>
                    <input onChange={e => setTitle(e.currentTarget.value)} className='login-input-text black' value={blogInfo && title ? title : ''}></input>
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
                                        ? <div className='new-paragraph'> 
                                            <nav className='image-history-nav'>
                                                <button className='image-history-button'>Move Up</button>
                                                <button className='image-history-button'>Move Down</button>
                                            </nav>
                                            <textarea className='paragraph-input' value={e.text} />
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