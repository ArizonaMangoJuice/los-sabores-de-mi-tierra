import React, {useState} from 'react'
import './Pages.css'
import {connect} from 'react-redux'
import { addParagraph, changeTitle, changeYoutubeUrl, deleteList, submitPage} from '../../actions';
import ParagraphForm from '../ParagraphForm/ParagraphForm';
import ImageUpload  from '../ImageUpload/ImageUpload';
import BlogPage from '../BlogPage/BlogPage';
import BlogImageEditor from '../BlogImageEditor/BlogImageEditor';
import PageList from '../PageList/PageList';


// make a reducer for the history
const mapStateToProps = state => ({
    history: state.page.history,
    title: state.page.title,
    url: state.page.youtubeUrl,
    authToken: state.loginReducer.authToken,
    success: state.page.success
})

function Pages(props){
    const [preview, setPreview] = useState(false);
    
        let history = 
            props.history.map(
                (e, i) => e.isImage 
                // this will be moved to seperate component
                ? <BlogImageEditor key={`i${i}`} image={e.imagePreview} id={e.id}/>
                : e.isList 
                    ? 
                        e.isOrdered 
                        ? 
                            <div className='main-color list-history card-hover'>
                                <button onClick={() => props.dispatch(deleteList(e.id))}>X</button>
                                <ol>
                                    {e.listArray.map(e => (
                                        <li>{e}</li>
                                    ))}
                                </ol>
                            </div>
                        : 
                            <div className='main-color list-history card-hover'>
                                <button onClick={() => props.dispatch(deleteList(e.id))}>X</button>
                                <ol>
                                    {e.listArray.map(e => (
                                        <li>{e}</li>
                                    ))}
                                </ol>
                            </div>
                    : <ParagraphForm key={`paragraph ${i}`} id={`p${i}`} text={e.text} />
                    

                // <ParagraphForm key={`paragraph ${i}`} id={`p${i}`} text={e.text} />
            )    

        return (
            <>  
                {/* this will be its own component */}
                <div>
                    {props.success ? 'SUCCESS' : ''}
                </div>
                <div className='creation-nav'>
                    {/* <button 
                        className='add-paragraph body-tools-button custom-file-upload'
                        onClick={() => console.log('this will add the video url')}
                    >
                        Add Video Link
                    </button> */}
                    <div className='pages-button-inline-block'>
                        <PageList />
                    </div>
                    <button 
                        className='add-paragraph body-tools-button custom-file-upload'
                        onClick={() => {
                            props.dispatch(addParagraph(props.history.length));
                        }}
                    >
                        Add Paragraph
                    </button>
                    <ImageUpload mainImage={true}/>
                    <ImageUpload mainImage={false} name={'Add Image'}/>
                    <button 
                        onClick={() => setPreview(e => !e)}
                        className='add-paragraph body-tools-button custom-file-upload'
                    >{preview ? 'Show Editor' : 'Show Preview'}</button>
                    <button 
                        className='add-paragraph body-tools-button custom-file-upload'
                        onClick={() => {
                            if(props.title === '') return;
                            props.dispatch(submitPage(props.title, props.authToken, props.history, props.url));
                        }}
                    >Create Page</button>
                </div>
                {/* this will show the main site preview
                    it will get changed
                */}
                <div className='preview'>
                    
                    {
                        preview 
                            ? <BlogPage isHistory={true} />
                            : <div className='history-page'>
                                <div className='title-history-container'>
                                    <input 
                                        onChange={(e) => props.dispatch(changeTitle(e.target.value))} 
                                        className='login-input-text black' 
                                        type='text' 
                                        placeholder='Title Here' 
                                        value={props.title}
                                    />
                                    <input 
                                        onChange={(e) => props.dispatch(changeYoutubeUrl(e.target.value))} 
                                        className='login-input-text black' 
                                        type='text' 
                                        placeholder='youtube url ' 
                                        value={props.url}
                                    />
                                </div>
                                {history}
                            </div>
                    }
                    
                    
                </div>
            </>
        )
}


export default connect(mapStateToProps)(Pages)

