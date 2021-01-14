import React from 'react';
import {connect} from 'react-redux';
import { deleteItem, editParagraph, resethistoryId } from '../../actions';
//this will be the adding paragraphs section 

const mapStateToProps = state => ({
    history: state.page.history
});


function ParagraphForm(props){
    console.log(props.dispatch, 'this is the dispatch')
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
                            props.dispatch(deleteItem(props.id));
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
                onChange={(e) => props.dispatch(editParagraph(e.target.value, props.id))}
                className='paragraph-input'
            />
        </div>
    )
}

export default connect(mapStateToProps)(ParagraphForm);