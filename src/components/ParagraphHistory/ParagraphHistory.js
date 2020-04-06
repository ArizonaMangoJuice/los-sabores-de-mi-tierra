import React from 'react'
import {connect} from 'react-redux'
import {changeParagraph, deleteParagraph} from '../../actions'

function ParagraphHistory(props){
    return (
        <div className='main-color paragraph-history card-hover' >
            <div className='body-tools-nav'>
                <button
                    className='body-tools-button main-color' 
                    onClick={() => props.dispatch(deleteParagraph(props.stackId))}>DELETE</button>
            </div>
            <textarea
                value={props.paragraph}
                onChange={(e) => props.dispatch(changeParagraph(e.target.value, props.stackId))}
                className='main-color history-paragraphs card-hover'
            />
        </div>
    )
}

export default connect()(ParagraphHistory)