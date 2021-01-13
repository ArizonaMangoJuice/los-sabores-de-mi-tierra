import React, {useState} from 'react'
import './Pages.css'
import Banner from '../Banner/Banner';
import PageTitleInput from '../PageTitleInput/PageTitleInput';
import PageBody from '../PageBody/PageBody';
import {connect} from 'react-redux'
import { submitPage} from '../../actions';
import ParagraphHistory from '../ParagraphHistory/ParagraphHistory';

let deleteBlock = (id, setHistory, history) => {
    console.log('this is the id', id)
    console.log('this is the history', history);
    let newHistory = history.filter(e => e.id !== id);

    setHistory(newHistory);
};
// make a reducer for the history
const mapStateToProps = state => ({
    body: state.page.body,
    title: state.page.title,
    error: state.page.error,
    success: state.page.success,
    authToken: state.loginReducer.authToken,
    stack: state.page.stack,
    imagePreview: state.page.imagePreview,
    linkStack: state.page.linkStack
})

function Pages(props){
        let {title, authToken, stack} = props;
        let [history, setHistory] = useState([]);
        // let [addParagraph, setAddParagraph] = useState(false);
        // this will be a seperate component 
        return (
            <div className=''>
                <button 
                    className='add-paragraph'
                    onClick={() => 
                        setHistory([
                            ...history, 
                            <ParagraphForm 
                                key={history.length} 
                                id={history.length} 
                                history={history}
                                setHistory={setHistory}
                                delete={deleteBlock}
                            />
                    ])}
                >
                    Add Paragraph
                </button>
                {history}
            </div>
        )
}
//this will be the adding paragraphs section 
function ParagraphForm(props){
    console.log(props)
    return (
        <div className='new-paragraph'>
            <nav className='paragraph-nav'>
                <ul className='paragraph-list'>
                    <li>
                        <button>
                            Move
                        </button>
                    </li>
                    <li>
                        <button onClick={() => props.delete(props.id, props.setHistory, props.history)}>
                            X
                        </button>
                    </li>
                </ul>
            </nav>
            <textarea 
                className='paragraph-input'
            />
        </div>
    )
}

export default connect(mapStateToProps)(Pages)