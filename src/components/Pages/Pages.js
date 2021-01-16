import React, {useState, useEffect} from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
import PageBody from '../PageBody/PageBody';
import {connect} from 'react-redux'
import { addParagraph, resethistoryId, submitPage} from '../../actions';
import ParagraphHistory from '../ParagraphHistory/ParagraphHistory';
import ParagraphForm from '../ParagraphForm/ParagraphForm';


// make a reducer for the history
const mapStateToProps = state => ({
    history: state.page.history
})

function Pages(props){
        let history = props.history.map((e, i) => <ParagraphForm key={`paragraph ${i}`} id={`p${i}`} text={e.text}/>)

        return (
            <>
                <div className='creation-nav'>
                    <button 
                        className='add-paragraph'
                        onClick={() => {
                            props.dispatch(addParagraph(props.history.length));
                        }}
                    >
                        Add Paragraph
                    </button>
                </div>
                {/* this will show the main site preview
                    it will get changed
                */}
                <div className='preview'>

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