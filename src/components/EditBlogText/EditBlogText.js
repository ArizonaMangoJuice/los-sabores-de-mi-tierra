import React, {useState} from 'react';

export const EditBlogText = ({text, id, blogInfo, updateBlog}) => {
    let oldBlogInfo = blogInfo;
    blogInfo = blogInfo.history;
    const [updatedText, setUpdatedText] = useState(text);
    // console.log(id)
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
                console.log('this is the blog info', blogInfo, newArray)
            }}
        />
    )
}

export default EditBlogText;