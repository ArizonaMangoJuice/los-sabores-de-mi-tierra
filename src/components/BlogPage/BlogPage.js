import React from 'react'
import {connect} from 'react-redux'
import './BlogPage.css'

function BlogPage(props){
    return (
        <div className='full-page blog-settings'>
            <div className='blog-width main-color card-hover'> 
                <header className='header-container'>
                        <img className='image-logo' src='https://firebasestorage.googleapis.com/v0/b/isael-blogs.appspot.com/o/images%2Flogo.png?alt=media' />
                </header>
                <div className='blog-main-image'>
                    <img className='' src='https://arizonamangojuice.github.io/portfolio/img/lolImprover.png'></img>
                </div>
                <div className='blog-title'>
                    <h1>Improve your gaming skills</h1>
                </div>
                {/* this will be a component for the paragraphs */}
                <div className='blog-paragraph'>
                    <p>Lol Improver  is an app that lets you take notes on champions. Allowing you to see which champions you struggle against. Lol Improver lets you find player statistics. This app user React, MongoDB, Express, and mocha, chai, enzyme and, jest. You can find the repo here.</p>
                </div>
                {/* this will be a component for the subtittles */}
                <div className='blog-sub-titles'>   
                    <p>CHALLENGES</p>
                </div>
                {/* this will be a component for the paragraphs */}
                <div className='blog-paragraph'>
                    <p>
                        I had to see if the riot api allowed you to grab static data:
                        Champion data
                        Champion picture url
                        Being able to search for players
                        After looking over the api documentation I was able:

                        to grab all champion static data and save it to the database
                        to grab a players info and save it to the database
                        Making the least amount of api calls was the biggest priority
                    </p>
                </div>
                {/* this will be a component for the subtittles */}
                <div className='blog-sub-titles'>   
                    <p>SOLUTIONS</p>
                </div>
                {/* this will be a component for the paragraphs */}
                <div className='blog-paragraph'>
                    <p>
                        The first thing I did was save to the static data I got from the api in a json file. After, I Created models for the player and the user. With those out of the way I was able to add notes to the champions of the user fairly easily. Lastly I added authentication to my endpoints, except for the player search. Player search functionality is open for anybody.
                    </p>
                </div>
                {/* this will be a component for the paragraphs */}
                <div className='blog-paragraph'>
                    <p>
                    More customization will be added to the user profile, where users could set their player name, allowing for more detailed note taking showing matches and winrate against the champions. I will also add a public page for searching players and seeing best current builds in the near future.
                    </p>
                </div>
                {/* this will be a component for images */}
                <div className='blog-image'>
                    <img src='https://arizonamangojuice.github.io/portfolio/img/lolNotePic.png'/> 
                </div>
                {/* this will be a component for images */}
                <div className='blog-image'>
                    <img src='https://arizonamangojuice.github.io/portfolio/img/lolPlayerPic.png'/> 
                </div>
                {/* this will be a component for the subtittles */}
                <div className='blog-sub-titles'>   
                    <p>RESULTS</p>
                </div>
                {/* this will be a component for the paragraphs */}
                <div className='blog-paragraph'>
                    <p>
                        The end result is a good foundation to build on. I will constantly be working on this project, this page will change and evolve with it.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default connect()(BlogPage)