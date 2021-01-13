import React from 'react';
import {connect} from 'react-redux';
import { deleteItem } from '../../actions';
//this will be the adding paragraphs section 
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
                        <button onClick={() => props.dispatch(deleteItem(props.id))}>
                            X
                        </button>
                    </li>
                    <li>
                        {props.id}
                    </li>
                </ul>
            </nav>
            <textarea 
                className='paragraph-input'
            />
        </div>
    )
}

export default connect()(ParagraphForm);