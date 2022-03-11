import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=05a3facf7e3f478f84429f59361b8a81&page=1";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
        })
    }

    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=05a3facf7e3f478f84429f59361b8a81&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1
        })
        console.log('Previous');
    }
    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=05a3facf7e3f478f84429f59361b8a81&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            page: this.state.page + 1
        })
        console.log('Next');
    }
    render() {
        return (
            <div className='container my-3'>
                <h3>News Gorilla - Top Headlines</h3>

                <div className='row' >
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title.length > 35 ? element.title.slice(0, 35) : element.title} description={element.description.length > 80 ? element.description.slice(0, 80) : element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>

                    <button disabled={this.state.page <= 1} onClick={this.handlePreviousClick} type="button" className="btn btn-dark">&larr; Previous</button>

                    <button onClick={this.handleNextClick} type="button" className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News