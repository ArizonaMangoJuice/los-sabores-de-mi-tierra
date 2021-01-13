import React from 'react'

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

export default ParagraphForm;