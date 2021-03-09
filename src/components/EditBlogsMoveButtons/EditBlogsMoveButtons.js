import React from 'react';

function moveUp (history, indexNum){
    const newHistory = [];

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
    return newHistory;
}

function moveDown(history, indexNum){
    const newHistory = [];
    for(let i = 0; i < history.length; i++){
        if(indexNum === i && history[i + 1]){
            newHistory[i] = history[i + 1];
            newHistory[i + 1] = history[i];
            i++;
        }else {
            newHistory[i] = history[i];
        }
    }
    return newHistory;
}

const EditBlogsMoveButtons = ({blogInfo, test, id}) => {
    const oldBlogInfo = {...blogInfo};
    const history = blogInfo && blogInfo.history ? [...blogInfo.history] : [];
    const indexNum = history.findIndex(e => e.id === id);
        
    const move = (updateBlog, direction) => {
        if(direction === 'up'){
            const newHistory = moveUp(history,indexNum);
            test({...oldBlogInfo, history: newHistory});
        }
        if(direction === 'down'){
            const newHistory = moveDown(history,indexNum);
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
                    <button onClick={() => move(test, 'down')} className='image-history-button'>Move Down</button>
                </>
            )
                : null
            }
        </nav>
    )
}

export default EditBlogsMoveButtons;