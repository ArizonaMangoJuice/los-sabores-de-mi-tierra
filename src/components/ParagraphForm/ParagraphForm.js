import React from 'react';
import {connect} from 'react-redux';
import {  deleteParagraph, editParagraph, resethistoryId } from '../../actions';
//this will be the adding paragraphs section 

const mapStateToProps = state => ({
    history: state.page.history
});


function ParagraphForm(props){
    console.log(props, 'this is the id')
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
                        <button onClick={() => {
                            props.dispatch(deleteParagraph(props.id));
                            // props.dispatch(resethistoryId());
                        }}>
                            X
                        </button>
                    </li>
                    <li>
                        {props.id}
                    </li>
                </ul>
            </nav>
            <textarea 
                value={props.text}
                onChange={(e) => props.dispatch(editParagraph(e.target.value, props.id))}
                className='paragraph-input'
            />
        </div>
    )
}

export default connect(mapStateToProps)(ParagraphForm);