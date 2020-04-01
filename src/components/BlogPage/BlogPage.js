import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import './BlogPage.css'
import BlogPageParagraph from '../BlogPageParagraph/BlogPageParagraph'
import BlogPageSubTitles from '../BlogPageSubTitles/BlogPageSubTitles'
import BlogPageTitle from '../BlogPageTitle/BlogPageTitle'
import BlogPageImage from '../BlogPageImage/BlogPageImage'
import BlogPageMainImage from '../BlogPageMainImage/BlogPageMainImage'
import { useParams } from 'react-router-dom'
import { fetchPage } from '../../actions'

const mapStateToProps = state => ({
    title: state.blogPage.title,
    loading: state.blogPage.loading,
    completed: state.blogPage.completed,
    blog: state.blogPage.blog
})

function BlogPage(props){
    let {title} = useParams()
    let {blog} = props
    let blogPage

    useEffect(() => {
        if(!props.title) props.dispatch(fetchPage(title))
        if(title !== props.title) props.dispatch(fetchPage(title))

    })
    
    if(blog.body !== undefined){
        blogPage = blog.body.map(e => (
           <BlogPageParagraph key={e.stackId} paragraph={e.paragraph} />
        ))
    }


    return (
        <div className='full-page blog-settings'>
            <div className='blog-width main-color card-hover'> 
                <header className='header-container'>
                        <img className='image-logo' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' />
                </header>
                
                <BlogPageMainImage src='https://arizonamangojuice.github.io/portfolio/img/lolImprover.png' />

                {props.title ? <BlogPageTitle title={props.title} /> : <h1>loading</h1>}

                {blogPage}

                {/* <BlogPageParagraph paragraph='Lol Improver  is an app that lets you take notes on champions. Allowing you to see which champions you struggle against. Lol Improver lets you find player statistics. This app user React, MongoDB, Express, and mocha, chai, enzyme and, jest. You can find the repo here.' />

                <BlogPageSubTitles title='CHALLENGES' />

                <BlogPageParagraph paragraph='I had to see if the riot api allowed you to grab static data:
                        Champion data
                        Champion picture url
                        Being able to search for players
                        After looking over the api documentation I was able:

                        to grab all champion static data and save it to the database
                        to grab a players info and save it to the database
                        Making the least amount of api calls was the biggest priority'/>

                <BlogPageSubTitles title='SOLUTIONS' />

                <BlogPageParagraph paragraph='The first thing I did was save to the static data I got from the api in a json file. After, I Created models for the player and the user. With those out of the way I was able to add notes to the champions of the user fairly easily. Lastly I added authentication to my endpoints, except for the player search. Player search functionality is open for anybody.' />

                <BlogPageParagraph paragraph=' More customization will be added to the user profile, where users could set their player name, allowing for more detailed note taking showing matches and winrate against the champions. I will also add a public page for searching players and seeing best current builds in the near future.' />

                <BlogPageImage src='https://arizonamangojuice.github.io/portfolio/img/lolNotePic.png' />

                <BlogPageImage src='https://arizonamangojuice.github.io/portfolio/img/lolPlayerPic.png' />

                <BlogPageSubTitles title='RESULTS' />

                <BlogPageParagraph paragraph='The end result is a good foundation to build on. I will constantly be working on this project, this page will change and evolve with it.' /> */}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(BlogPage)