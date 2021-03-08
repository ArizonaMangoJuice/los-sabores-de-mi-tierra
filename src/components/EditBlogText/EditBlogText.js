import React, {useState} from 'react';

export const EditBlogText = ({text, id, blogInfo, updateBlog}) => {
    let oldBlogInfo = blogInfo;
    blogInfo = blogInfo.history;
    const [updatedText, setUpdatedText] = useState(text);
    
    return (
        <textarea
            className='paragraph-input' 
            value={updatedText} 
            onChange={(e) => {
                setUpdatedText(e.currentTarget.value);
                // let history = bloginfo
                let newArray = blogInfo.map(item => 
                    item.id === id
                    ? {id, text: e.currentTarget.value}
                    : item
                );
                updateBlog({
                    ...oldBlogInfo,
                    history: newArray
                });
            }}
        />
    )
}

export default EditBlogText;