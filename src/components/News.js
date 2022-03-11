import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Lloyd Burnard",
            "title": "Proteas march on at World Cup after thrilling final over Pakistan victory",
            "description": "The Proteas have beaten Pakistan to win their second match at the Women's Cricket World Cup in New Zealand.",
            "url": "https://www.news24.com/sport/Cricket/WomensCricketWorldCup/proteas-march-on-at-world-cup-after-thrilling-final-over-pakistan-win-20220311",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/1025/bf9db162f8794d928bbc6f31be969c93.jpg",
            "publishedAt": "2022-03-11T10:08:57+00:00",
            "content": "It was far from clinical, and the game was in the balance for large periods, but the Proteas secured a thrilling 6-run victory over Pakistan in their second World Cup clash in Mount Maunganui on Frid… [+2600 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "South Africa survive to beat Pakistan",
            "description": "South Africa survive to beat Pakistan by six runs in another thrilling finish at the Women's Cricket World Cup.",
            "url": "http://www.bbc.co.uk/sport/cricket/60673994",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/FA50/production/_123608046_southafricacelebrate.jpg",
            "publishedAt": "2022-03-11T08:37:29.3534937Z",
            "content": "Nida Dar was crucially run out in the 49th over\r\n<table><tr><th>Women's World Cup, Tauranga</th></tr>\r\n<tr><td>South Africa 223-9 (50 overs): Wolvaardt 75, Luus 62</td></tr><tr><td>Pakistan 217 all o… [+2306 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ];
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>News Gorilla - Top Headlines</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <NewsItem title={'MY TITLE'} description={'MY description'} imageUrl={"https://cdn.24.co.za/files/Cms/General/d/1025/bf9db162f8794d928bbc6f31be969c93.jpg"} newsUrl="TODO" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title={'MY TITLE'} description={'MY description'} />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title={'MY TITLE'} description={'MY description'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default News