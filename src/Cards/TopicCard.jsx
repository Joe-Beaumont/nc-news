import React from "react"
import { Link } from 'react-router'



export function TopicCard({ topic }) {
    
    const { slug, description, img_url} = topic

    return (
        <div className="flex-1 min-w-[250px] max-w-[1080px] bg-white text-black dark:bg-gray-800 dark:text-white text-l md:text-xl lg:text-2xl  p-5 border border-black rounded">
            <img src= {img_url}
                alt={slug}
                className="mx-auto mb-4 max-2-[600px] rounded"
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-1">{slug}</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-1">Description: {description}</p>
            <Link
                to={`/articles?filter=topic&by=${slug}`}
                className="inline-block mt-4 text-gray-600 hover:underline"
            >View Articles on this Topic</Link>
        </div>
    )
}