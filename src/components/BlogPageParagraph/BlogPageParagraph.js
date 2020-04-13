import React from 'react'

function BlogPageParagraph(props){
    let test = []
    let final = []

    if(props && props.paragraph){    
        let {linkStack} = props
        let paragraphArray = props.paragraph.split(/[[\]]+/)

        for(let i = 0; i < paragraphArray.length; i++){
            for(let k = 0; k < linkStack.length; k++){
                let linkStackName = linkStack[k].name + ', ' + linkStack[k].count
                if(linkStackName ===  paragraphArray[i]) {
                    final.push(
                    <a key={linkStack[k].name + ', ' + linkStack[k].count} href={'https://google.com'}>{linkStack[k].name}</a>
                    )
                }
        } 
        
        }
        

        for(let i = 0; i < paragraphArray.length; i++){

            for(let k = 0; k < final.length; k++){
                if(paragraphArray[i] ===  final[k].key){
                        paragraphArray[i] = <a className='paragraph-link' key={linkStack[k].name + ', ' + linkStack[k].count} href={linkStack[k].link}>{linkStack[k].name}</a>
                        
                    } 
            }
            test.push(paragraphArray[i])

        }
    }    
    
    


    
    return (
        <div className='blog-paragraph'>
            <p>{test.length !== 0 ? test : props.paragraph}</p>
        </div>
    )
}

export default BlogPageParagraph