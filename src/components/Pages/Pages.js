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
        // let [addParagraph, setAddParagraph] = useState(false);
        // this will be a seperate component 
        const [history, setHistory] = useState([]);
        let count = 0;
        useEffect(() => {
            let updatedHistory = props.history.map((e, i) => <ParagraphForm key={`paragraph ${i}`} id={`p${i}`} text={e.text}/>)
            setHistory(updatedHistory)
        }, [props.history])


        // let history = props.history.map((e, i) => <ParagraphForm key={`paragraph ${i}`} id={`p${i}`} text={e.text}/>)

        return (
            <div className=''>
                <button 
                    className='add-paragraph'
                    onClick={() => {
                        props.dispatch(addParagraph(props.history.length));
                    }}
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

// body: state.page.body,
//     title: state.page.title,
//     error: state.page.error,
//     success: state.page.success,
//     authToken: state.loginReducer.authToken,
//     stack: state.page.stack,
//     imagePreview: state.page.imagePreview,
//     linkStack: state.page.linkStack,