import React from "react"
import { Link } from 'react-router'



export function TopicCard({ topic }) {
    
    const { slug, description, img_url} = topic

    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white text-black p-5 border border-black rounded">
            <img src= {img_url}
                alt={slug}
                className="mx-auto mb-4 max-2-[600px] rounded"
            />
            <h2 className="text-2xl font-semibold mb-1">{slug}</h2>
            <p className="text-sm text-gray-600 mb-1">Description: {description}</p>
            <Link
                to={`/articles?filter=topic&by=${slug}`}
                className="inline-block mt-4 text-blue-600 hover:underline"
            >View Articles on this Topic</Link>
        </div>
    )
}