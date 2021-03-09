import React from 'react';

const EditorBlogList = ({isOrdered, listArray}) => {
    // let newBlogInfo = {...blogInfo}
    return (
        <div className='main-color list-history card-hover'>
        {isOrdered 
            ? 
                <ol >
                    {listArray.map((e, i) => (
                    <li key={e + i}>
                        <input onChange={() => console.log('hello')} value={e} />
                    </li>
                    ))}
                </ol>
            : 
                <ol >
                {listArray.map((e, i) => (
                    <li key={e + i}>
                        <input onChange={() => console.log('hello')} value={e} />
                    </li>
                ))}
                </ol>
                    
        }
        </div>
    )
}

export default EditorBlogList;