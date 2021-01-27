import React, {useEffect} from 'react'
import BlogPageBanner from '../BlogPageImage/BlogPageImage'
import BlogPageParagraph from '../BlogPageParagraph/BlogPageParagraph'
import './BlogPage.css'
import BlogPageAuthorContainer from '../BlogPageAuthorContainer/BlogPageAuthorContainer'
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchPage } from '../../actions'
import YoutubeVideo from '../YoutubeVideo'
import Footer from '../Footer'


const mapStateToProps = state => ({
    history: state.page.history,
    youtubeUrl: state.page.youtubeUrl,
    blogPage: state.blogPage,
    blogUrl: state.blogPage.blogUrl
})



function BlogPage(props){
    // console.log('this is the props', props)
   let params = useParams();
   let {title} = params;
   let history;
   let blog;
   let blogMainImage;

    // console.log('this is the slug for the site', title)

   if(props.isHistory){
       console.log('this is the history');
       
       history = props.history;
       history = history.map((e, i) => {
        if(e.isImage && !e.text && e.id !== 'i0' && !e.mainImage){
            return (
                <div>
                    <img alt={`various perspectives of the recipes`} className='blog-images' key={e.id} src={e.imagePreview}/>
                </div>
            )
        }   
        console.log(e)
        if(e.id[0] === 'l'){
            console.log('this is a list and should return tthis')
            return (
                <div className='main-color list-history card-hover'>
                    {e.isOrdered 
                        ? 
                            <ol>
                                {e.listArray.map(e => (
                                    <li>{e}</li>
                                ))}
                            </ol>
                        : 
                            <ol>
                                {e.listArray.map(e => (
                                    <li>{e}</li>
                                ))}
                            </ol>
                    
                    }
                </div>
            )
        }
        if(e.text){
            return (
                <BlogPageParagraph key={e.id}  text={e.text} />
            )
        }
        // this needs t0 change to a really confusiong ternary so it can look cleaner and smaller
        return null;
       })
   } 

   useEffect(() => {
    if((!props.title || title !== props.title) && !props.isHistory){
        
          props.dispatch(fetchPage(title))   
       }
       // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

   if(!props.isHistory) {
       console.log('its not history')
        blog = props.blogPage.blog;

        blog = blog.map((e, i) => {
            // convert this to a switch
            if(e.isImage && !e.text && e.id !== 'i0' && !e.mainImage){
                return (
                    <div key={`div${e.id}`}>
                        <img alt={`various perspectives of cooking recipe`} className='blog-images' key={e.id} src={e.imageUrl}/>
                    </div>
                )
            } 

            if(e.isList){
                return (
                    <div className='main-color list-history card-hover'>
                        {e.isOrdered 
                            ? 
                                <ol>
                                    {e.listArray.map(e => (
                                        <li>{e}</li>
                                    ))}
                                </ol>
                            : 
                                <ol>
                                    {e.listArray.map(e => (
                                        <li>{e}</li>
                                    ))}
                                </ol>
                        
                        }
                    </div>
                )
            }

            if(e.text){
                // console.log('this is the text', e.text)
                return (
                    <BlogPageParagraph key={e.id}  text={e.text} />
                )
            }

            blogMainImage = props.blogPage.blog[0].imageUrl
            return null;
        })
   }

   
//    if(props.blogPage.history && props.blogPage.history.length > 0) console.log('this is the blog page history', blog, props.blogPage.history)


   return props.isHistory 
    ?(    
        <>
            <div className='blog-page-container'>
                <BlogPageBanner isHistory={true}/>
                <div className='blog-page-text-container'>
                    {props.youtubeUrl !==  '' ? <YoutubeVideo youtubeUrl={props.youtubeUrl}/> : null}
                    {history}
                </div>
                <BlogPageAuthorContainer />
            </div>
            <Footer />
        </>       
    )
    : (
        <>
            <div className='blog-page-container'>
                <BlogPageBanner 
                    blogTitle={props.blogPage.title} 
                    blogMainImage={blogMainImage}
                />
                <div className='blog-page-text-container'>
                    {props.blogUrl && props.blogUrl !==  '' ? <YoutubeVideo youtubeUrl={props.blogUrl}/> : null}
                    {blog}
                </div>
                <BlogPageAuthorContainer />
            </div>
            <Footer />
        </>       
    )
}

export default connect(mapStateToProps)(BlogPage)

