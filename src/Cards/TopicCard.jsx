import React from "react"
import { Link } from 'react-router'



export function TopicCard({ topic }) {
    
    const { slug, description, img_url} = topic

    return (
        <div className="Card">
            <br/>
            <img src= {img_url} alt={slug} className="img"></img>
            <h2>{slug}</h2>
            <p>Description: {description}</p>
            <Link to={`/articles?filter=topic&by=${slug}`}>View Articles on this Topic</Link>
            <br/>
        </div>
    )
}