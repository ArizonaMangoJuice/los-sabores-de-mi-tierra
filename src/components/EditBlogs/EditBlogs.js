import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import { fetchBlogsToEdit } from '../../actions';
import EditBlogCard from '../EditBlogCard';
import EditorBlogList from '../EditBlogList';
import EditBlogsMoveButtons from '../EditBlogsMoveButtons';
import EditBlogsMoveButton from '../EditBlogsMoveButtons';
import EditBlogText from '../EditBlogText';
import './EditBlogs.css';

// refactor this component into smaller pieces goal is 70 lines or less per component

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

    const test = blogInfo && blogInfo.history 
    ? blogInfo.history.map(e => (
        e.isImage 
            ? <div  className='image-history' key={e.title + e.id} >
                <EditBlogsMoveButtons blogInfo={{...blogInfo}} test={setBlogInfo} id={e.id}/>
                <img className='edit-blog-image' alt='shows the recipes mentioned' src={e.imageUrl} />
              </div>
            : e.text 
                ? <div className='new-paragraph' key={e.title + e.id}> 
                    <EditBlogsMoveButton blogInfo={{...blogInfo}} test={setBlogInfo} id={e.id} />
                    <EditBlogText
                        blogInfo={{...blogInfo}}
                        updateBlog={setBlogInfo} 
                        text={e.text} 
                        id={e.id}
                    />
                  </div>
                : <div className='new-paragraph' key={e.title + e.id}>
                    <EditBlogsMoveButton blogInfo={{...blogInfo}} test={setBlogInfo} id={e.id}/>
                    <EditorBlogList isOrdered={e.isOrdered} listArray={e.listArray} blogInfo={blogInfo} setBlogInfo={setBlogInfo}/>
                  </div> 
                
    ))
    : '';
    // console.log('this is the editblogs', blogInfo)
    return (
        <>
            <div className='edit-blog-container'>
                <div className={`${isClicked ? 'edit-blog-editor' : 'hidden'}`}>
                    <nav>
                        <button onClick={() => setClicked(false) && setBlogInfo({})}>Close Blog</button>
                        <button>Updated Blog</button>
                    </nav>
                    <input onChange={e => setBlogInfo({...blogInfo, title: e.currentTarget.value})} className='login-input-text black' value={blogInfo && blogInfo.title ? blogInfo.title : ''} />
                    {
                        test
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