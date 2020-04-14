import React from 'react'

function BlogPageParagraph(props){
    let result = []
    let final = []

    if(props && props.paragraph){    
        let {linkStack} = props
        let paragraphArray = props.paragraph.split(/[[\]]+/)

        for(let i = 0; i < paragraphArray.length; i++){
            for(let k = 0; k < linkStack.length; k++){
                let linkStackName = linkStack[k].name + ', ' + linkStack[k].count
                if(linkStackName ===  paragraphArray[i]) {
                    final.push(
                         <a className='paragraph-link' key={linkStack[k].name + ', ' + linkStack[k].count} href={linkStack[k].link}>{linkStack[k].name}</a>
                    )
                }
        } 
        }
        
        for(let i = 0; i < paragraphArray.length; i++){

            for(let k = 0; k < final.length; k++){
                if(paragraphArray[i] ===  final[k].key){
                        paragraphArray[i] = final[k]
                    } 
            }
            result.push(paragraphArray[i])
        }
    }    
    
    


    
    return (
        <div className='blog-paragraph'>
            <p>{result.length !== 0 ? result : props.paragraph}</p>
        </div>
    )
}

export default BlogPageParagraph