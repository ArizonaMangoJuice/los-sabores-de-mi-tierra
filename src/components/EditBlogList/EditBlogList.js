import React from 'react';

const EditorBlogList = ({isOrdered, listArray}) => {
    return (
        <div className='main-color list-history card-hover'>
        {isOrdered 
            ? 
                <ol>
                    {listArray.map(e => (
                    <li>{e}</li>
                    ))}
                </ol>
            : 
                <ol>
                {listArray.map(e => (
                <li>{e}</li>
                    ))}
                </ol>
                    
        }
        </div>
    )
}

export default EditorBlogList;