import React from 'react';

//refactor these function to have less parameters
//fixed bug with band aid really bad 
//need to fix this rerender bug

function updateBlog(array, blogInfo, setBlogInfo, id){
    let newBlog = {...blogInfo};
    newBlog.history = blogInfo
        .history.map(e => 
            e.id === id 
            ? {...e, listArray: array}
            : e
            );
    setBlogInfo(newBlog);
}

function editListItem(indexNum, listArray, e, blogInfo, setBlogInfo, id){
    let newItem = e.currentTarget.value;
    listArray = listArray.map((e, i) => 
        indexNum === i 
        ? newItem
        : e
    );
    return updateBlog(listArray, blogInfo, setBlogInfo, id)
}

const EditorBlogList = ({isOrdered, listArray, blogInfo, setBlogInfo, id}) => {
    // let newBlogInfo = {...blogInfo}
    listArray = [...listArray];
    return (
        <div className='main-color list-history card-hover'>
        {isOrdered 
            ? 
                <ol >
                    {listArray.map((item, i) => (
                    <li key={item + i}>
                        <input autoFocus  key={i} onChange={(e) => editListItem(i, listArray, e, blogInfo, setBlogInfo, id)} value={item} />
                    </li>
                    ))}
                </ol>
            : 
                <ol >
                {listArray.map((item, i) => (
                    <li key={item + i}>
                        <input autoFocus  key={i} onChange={(e) => editListItem(i, listArray, e, blogInfo, setBlogInfo, id)} value={item} />
                    </li>
                ))}
                </ol>
                    
        }
        </div>
    )
}

export default EditorBlogList;