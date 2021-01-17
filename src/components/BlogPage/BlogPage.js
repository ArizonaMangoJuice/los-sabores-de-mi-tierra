import React from 'react'
import BlogPageBanner from '../BlogPageImage/BlogPageImage'
import BlogPageParagraph from '../BlogPageParagraph/BlogPageParagraph'
import './BlogPage.css'
import BlogPageAuthorContainer from '../BlogPageAuthorContainer/BlogPageAuthorContainer'
import {connect} from 'react-redux';

// mock data 
let staticParagraph = [
    "Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Haec et tu ita posuisti, et verba vestra sunt. Contemnit enim disserendi elegantiam, confuse loquitur. Bona autem corporis huic sunt, quod posterius posui, similiora. Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur.",
    "Quasi vero aut concedatur in omnibus stultis aeque magna esse vitia, et eadem inbecillitate et inconstantia L. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Materiam vero rerum et copiam apud hos exilem, apud illos uberrimam reperiemus. Atque his de rebus et splendida est eorum et illustris oratio.",
    "Utinam quidem dicerent alium alio beatiorem. Iam ruinas videres. Non autem hoc, igitur.",
    "Age, inquies, ista parva sunt. Ad eos igitur converte te, quaeso. Haec para/doca illi, nos admirabilia dicamus. Universa enim illorum ratione cum tota vestra confligendum puto.",
    "Quos nisi redarguimus, omnis virtus, omne decus, omnis vera laus deserenda est. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quisted est autem dignus nomine hominis, qui unum diem totum velit esse in genere isto voluptatis. Ad eos igitur convert te, quaeso. Duo Reges: constructio interrete. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia. Quid ad utilitatem tantae pecuniae? Duo enim genera quae erant, fecit tria. Et quod est munus, quod opus sapientiae? Sed in rebus apertissimis nimium longi sumus."
]

let staticParagraphs = staticParagraph.map( e => 
    <BlogPageParagraph text={e}/> 
)

function BlogPage(props){
    return (
        <>
            <div className='blog-page-container'>
                <BlogPageBanner />
                <div className='blog-page-text-container'>
                    {staticParagraphs}
                </div>
                <BlogPageAuthorContainer />
            </div>
        </>       
    )
}

export default connect()(BlogPage)

