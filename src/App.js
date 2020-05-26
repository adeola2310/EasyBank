import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Button from "./UI/button/button";
import ArticleCard from "./UI/ArticleCard/ArticleCard";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <section className="home">
            <div className="home_content">
                <div className="home_header">
                    <h3 className="header-three">Next Generation <br/>
                     Digital Banking </h3>
                    <p className="paragraph">
                        Take your financial life online. Your Easybank account
                        <br/>
                        will be a one-stop-shop for spending, saving, budgeting,<br/> investing, and much more.
                    </p>
                    <div className="btn">
                    <Button label="Request Invite"/>

                    </div>

                </div>
                <div className="home_image">
                    {/* <div className="">
                        <img src={require('./images/bg-intro-desktop.svg')} alt="background" className="background"/>
                    </div> */}
                    {/* <div className="second-image"> */}
                        <img src={require("./images/image-mockups.png")} alt="mockup"/>
                    {/* </div> */}
                </div>
            </div>
            </section>

            <section className="why">
                <div className="why_header">
                    <h3>Why Choose Easybank?</h3>
                    <p style={{lineHeight: '1.6'}}> We leverage Open Banking to turn your bank account into your financial hub.
                        <br/>Control your finances like never before</p>
                </div>
                <div className="all_whys">
                    <div className="card">
                        <img src={require('./images/icon-budgeting.svg')} alt="budget"/>
                        <h4> Online Banking</h4>
                        <p style={{textAlign:"left", lineHeight:'1.4', fontSize: '14px'}}>
                            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world
                        </p>
                    </div>
                    <div className="card">
                        <img src={require('./images/icon-budgeting.svg')} alt="budget"/>
                        <h4> Online Banking</h4>
                        <p style={{textAlign:"left", lineHeight:'1.4', fontSize: '14px'}} className="cards">
                            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world
                        </p>
                    </div>
                    <div className="card">
                        <img src={require('./images/icon-budgeting.svg')} alt="budget"/>
                        <h4> Online Banking</h4>
                        <p style={{textAlign:"left", lineHeight:'1.4', fontSize: '14px'}}>
                            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world
                        </p>
                    </div>
                    <div className="card">
                        <img src={require('./images/icon-budgeting.svg')} alt="budget"/>
                        <h4> Online Banking</h4>
                        <p style={{textAlign:"left", lineHeight:'1.4', fontSize: '14px'}}>
                            Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world
                        </p>
                    </div>
                </div>
            </section>

            <section className="articles">
                <h2 style={{marginTop:'50px'}}>Latest Articles</h2>
                <div className="all_articles">
               <ArticleCard 
               images = "{require('../../images/image-confetti')}"
               author = "By Claire Robinson"
               title = "Receive money in any currency with no fees"
               text= "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
               />
               <ArticleCard
               author="By Wilson Hutton"
               title= "Treat yourself without worrying about money"
               text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you..."
               />
               <ArticleCard
               author="By Wilson Hutton"
               title="Take your Easybank card wherever you go"
               text="We want you to enjoy your travels.This is why we don't charge any fees on purchases while you're abroad.We'll even show you..."
               />
               <ArticleCard
               author="By Claire Robinson"
               title="Our invite-only Beta accounts are now live."
               text="After a lot of hardwork by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
               />
                </div>
            </section>
  <Footer/>
        </div>
    );
}

export default App;
