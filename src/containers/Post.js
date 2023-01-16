import React, { useState, useEffect } from "react";
import '../Style.css';

export const Post = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts().then((post) => {
            setPosts(post);
            setLoading(false);
        });
    }, []);

    const REDDIT_USERNAME = 'Noora_e';
    const REDDIT_PASSWORD = '9xN0*ORzBne#r^t^er5mh7ly2';
    const APP_ID = 'UJ6Rgmj2ebfuAVcO0wNMdQ';
    const APP_SECRET = 'uMC_6mA4iTJib2GIe64Yf-eFj02SIg';
    const token = '';

    const getPosts = async () => {
        const base_url = 'https://www.reddit.com/'

        try {
            const response = await fetch(`http://www.reddit.com/search.json?q="cat"&sort=relevance&limit=25`);

            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.data.children;
                //return console.log(jsonResponse.data.children[0].data.title);
            }

            throw new Error('Request failed!');
        } catch(error) {
            console.log(error);
        }
    }

    const convertTime = (milliseconds) => {
        let newTime = milliseconds / 1000;
        let scale = "seconds";
        if (newTime >= 60) {
            newTime /= 60;
            scale = "minutes";
            if (newTime => 60) {
                newTime /= 60;
                scale = "hours";
                if (newTime >= 24) {
                    newTime /= 24;
                    scale = "days";
                }
            }
        }
        return `Posted ${Math.floor(newTime)} ${scale} ago`;
    }
 
    const title = "This is the title of the post";

    return (
        loading ? <p>Loading...</p> : 
            posts.map(post => {
                return (
                <div className="flex-item">
                    <h2>{post.data.title}</h2>
                    <img src="../images/test_image_1.png" height="200px" width="200px" alt=""/>
                    <p>Posted by {post.data.author}</p>
                    <p>{convertTime(post.data.created)}</p>
                    <p>{post.data.num_comments} Comments</p>
                </div>
                );
            })
    );
}

//<img src={posts[0].data.preview.images[0].source.url} alt=""/>