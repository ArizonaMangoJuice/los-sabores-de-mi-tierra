import React, {useEffect} from 'react'
import BlogPageBanner from '../BlogPageImage/BlogPageImage'
import BlogPageParagraph from '../BlogPageParagraph/BlogPageParagraph'
import './BlogPage.css'
import BlogPageAuthorContainer from '../BlogPageAuthorContainer/BlogPageAuthorContainer'
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchPage } from '../../actions'
import blogPage from '../../reducers/blogPage'

// mock data 
let staticParagraph = [
    "Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Haec et tu ita posuisti, et verba vestra sunt. Contemnit enim disserendi elegantiam, confuse loquitur. Bona autem corporis huic sunt, quod posterius posui, similiora. Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur.",
    "Quasi vero aut concedatur in omnibus stultis aeque magna esse vitia, et eadem inbecillitate et inconstantia L. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Materiam vero rerum et copiam apud hos exilem, apud illos uberrimam reperiemus. Atque his de rebus et splendida est eorum et illustris oratio.",
    "Utinam quidem dicerent alium alio beatiorem. Iam ruinas videres. Non autem hoc, igitur.",
    "Age, inquies, ista parva sunt. Ad eos igitur converte te, quaeso. Haec para/doca illi, nos admirabilia dicamus. Universa enim illorum ratione cum tota vestra confligendum puto.",
    "Quos nisi redarguimus, omnis virtus, omne decus, omnis vera laus deserenda est. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quisted est autem dignus nomine hominis, qui unum diem totum velit esse in genere isto voluptatis. Ad eos igitur convert te, quaeso. Duo Reges: constructio interrete. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia. Quid ad utilitatem tantae pecuniae? Duo enim genera quae erant, fecit tria. Et quod est munus, quod opus sapientiae? Sed in rebus apertissimis nimium longi sumus."
]

const mapStateToProps = state => ({
    history: state.page.history,
    blogPage: state.blogPage
})

let staticParagraphs = staticParagraph.map( e => 
    <BlogPageParagraph text={e}/> 
)

function BlogPage(props){
    // console.log('this is the props', props)
   let params = useParams();
   let {title} = params;
   let history;
   let blog;
   let blogMainImage;

    // console.log('this is the slug for the site', title)

   if(props.isHistory){
       history = props.history;
       history = history.map((e, i) => {
        if(e.isImage && !e.text && e.id !== 'i0' && !e.mainImage){
            return (
                <div>
                    <img className='blog-images' key={e.id} src={e.imagePreview}/>
                </div>
            )
        }   
        if(e.text){
            return (
                <BlogPageParagraph key={e.id}  text={e.text} />
            )
        }
       })
   } 

   useEffect(() => {
      if(!props.isHistory && !props.blogPage.title){
        
          props.dispatch(fetchPage(title))   
       }
   })

   if(!props.isHistory) {
       console.log('its not history')
        blog = props.blogPage.blog;

        blog = blog.map((e, i) => {
            if(e.isImage && !e.text && e.id !== 'i0' && !e.mainImage){
                return (
                    <div>
                        <img className='blog-images' key={e.id} src={e.imagePreview}/>
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
        })
   }

   
//    if(props.blogPage.history && props.blogPage.history.length > 0) console.log('this is the blog page history', blog, props.blogPage.history)


   return props.isHistory 
    ?(    
        <>
            <div className='blog-page-container'>
                <BlogPageBanner isHistory={true}/>
                <div className='blog-page-text-container'>
                    {history}
                </div>
                <BlogPageAuthorContainer />
            </div>
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
                    {blog}
                </div>
                <BlogPageAuthorContainer />
            </div>
        </>       
    )
}

export default connect(mapStateToProps)(BlogPage)

