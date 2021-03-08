import React from 'react';

const EditBlogsMoveButtons = ({blogInfo, test, id}) => {
    // console.log('this is the blog info inside buttons', blogInfo)
    const oldBlogInfo = {...blogInfo};
    const history = blogInfo && blogInfo.history ? [...blogInfo.history] : [];
    const indexNum = history.findIndex(e => e.id === id);
        
    const move = (updateBlog, direction) => {
        const newHistory = [];
        // console.log('this is the history for editblog buttons', history)
        if(direction === 'up'){
            
            for(let i = 0; i < history.length; i++){
                let curr = history[i];
                let prev = history[i-1];
                if(indexNum === i && indexNum !== 1){
                    newHistory[i] = prev;
                    newHistory[i-1] = curr;
                } else {
                    newHistory[i] = history[i]
                }
            }
            // console.log( blogInfo, history, newHistory)
            test({...oldBlogInfo, history: newHistory});
        }
    }
    // console.log('this is the index num', indexNum)
    return (
        <nav className='image-history-nav'>
            {indexNum !== 0 
            ? (
                <>
                    <button onClick={() => move(test, 'up')} className='image-history-button'>Move Up</button>
                    <button className='image-history-button'>Move Down</button>
                </>
            )
                : null
            }
        </nav>
    )
}

export default EditBlogsMoveButtons;