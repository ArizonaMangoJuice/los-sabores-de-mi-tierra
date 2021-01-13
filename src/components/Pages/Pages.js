import React, {useState} from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
import PageBody from '../PageBody/PageBody';
import {connect} from 'react-redux'
import { newItem, submitPage} from '../../actions';
import ParagraphHistory from '../ParagraphHistory/ParagraphHistory';
import ParagraphForm from '../ParagraphForm/ParagraphForm';


// make a reducer for the history
const mapStateToProps = state => ({
    body: state.page.body,
    title: state.page.title,
    error: state.page.error,
    success: state.page.success,
    authToken: state.loginReducer.authToken,
    stack: state.page.stack,
    imagePreview: state.page.imagePreview,
    linkStack: state.page.linkStack,
    history: state.page.history
})

function Pages(props){
        const {title, authToken, stack} = props;
        
        // let [addParagraph, setAddParagraph] = useState(false);
        // this will be a seperate component 
        console.log('this is running everytime it resets', props.history.length)
        const newPar = {id: props.history.length, text: ''};

        let history = props.history.map(e => <ParagraphForm key={e.id} id={e.id} text={e.text}/>)

        return (
            <div className=''>
                <button 
                    className='add-paragraph'
                    onClick={() => props.dispatch(newItem(newPar))}
                >
                    Add Paragraph
                </button>
                {history}
            </div>
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