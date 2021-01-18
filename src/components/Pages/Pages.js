import React, {useState, useEffect} from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
import PageBody from '../PageBody/PageBody';
import {connect} from 'react-redux'
import { addParagraph, changeTitle, resethistoryId, submitPage} from '../../actions';
import ParagraphHistory from '../ParagraphHistory/ParagraphHistory';
import ParagraphForm from '../ParagraphForm/ParagraphForm';
import ImageUpload  from '../ImageUpload/ImageUpload';
import BlogPageBanner from '../BlogPageImage/BlogPageImage';
import BlogPage from '../BlogPage/BlogPage';


// make a reducer for the history
const mapStateToProps = state => ({
    history: state.page.history,
    title: state.page.title
})

function Pages(props){
    const [preview, setPreview] = useState(false);

        let history = 
            props.history.map(
                (e, i) => e.isImage 
                ? <img className='history-image' src={e.imagePreview} key={`i${i}`} id={e.id} /> 
                : <ParagraphForm key={`paragraph ${i}`} id={`p${i}`} text={e.text} />
            )    

        {/* // let history = props.history.map((e, i) => <ParagraphForm key={`paragraph ${i}`} id={`p${i}`} text={e.text}/>); */}
        console.log(props.history, 'this is the history')
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