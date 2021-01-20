import React, {useState} from 'react'
import './Pages.css'
import {connect} from 'react-redux'
import { addParagraph, changeTitle, submitPage} from '../../actions';
import ParagraphForm from '../ParagraphForm/ParagraphForm';
import ImageUpload  from '../ImageUpload/ImageUpload';
import BlogPage from '../BlogPage/BlogPage';
import BlogImageEditor from '../BlogImageEditor/BlogImageEditor';


// make a reducer for the history
const mapStateToProps = state => ({
    history: state.page.history,
    title: state.page.title,
    authToken: state.loginReducer.authToken
})

function Pages(props){
    const [preview, setPreview] = useState(false);

        let history = 
            props.history.map(
                (e, i) => e.isImage 
                // this will be moved to seperate component
                ? <BlogImageEditor key={`i${i}`} image={e.imagePreview} id={e.id}/>
                : <ParagraphForm key={`paragraph ${i}`} id={`p${i}`} text={e.text} />
            )    

        return (
            <>
                <div className='creation-nav'>
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
                        onClick={() => props.dispatch(submitPage(props.title, props.authToken, props.history))}
                    >
                            Create Page</button>
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
                                        className='title-input' 
                                        type='text' 
                                        placeholder='Title Here' 
                                        value={props.title}
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

// () => 
//                         setHistory([
//                             ...history, 
//                             <ParagraphForm 
//                                 key={history.length} 
//                                 id={history.length} 
//                                 history={history}
//                                 setHistory={setHistory}
//                                 delete={deleteBlock}
//                             />
//                     ])

// body: state.page.body,
//     title: state.page.title,
//     error: state.page.error,
//     success: state.page.success,
//     authToken: state.loginReducer.authToken,
//     stack: state.page.stack,
//     imagePreview: state.page.imagePreview,
//     linkStack: state.page.linkStack,