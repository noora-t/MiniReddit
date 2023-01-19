import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export const Post = () => {
    const {id} = useParams('id');

    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts().then((fetched) => {
            setPost(fetched);
            setLoading(false);
            console.log(fetched);
        });
    }, []);

    const getPosts = async () => {
        setLoading(true);
         try {
            const response = await fetch(`http://www.reddit.com/api/info.json?id=t3_${id}&raw_json=1`);

            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse;
            }
            throw new Error('Request failed!');
        } catch(error) {
            console.log(error);
        }
    }

    const convertTime = (posted) => {
        const now = Math.floor(new Date().getTime()/1000);
        let timeSince = now - posted;
        let scale = "seconds";
        if (timeSince < 2) scale = "second";

        if (timeSince >= 60) {
            timeSince /= 60;
            timeSince < 2 ? scale = "minute" : scale = "minutes";
            if (timeSince >= 60) {
                timeSince /= 60;
                timeSince < 2 ? scale = "hour" : scale = "hours";
                if (timeSince >= 24) {
                    timeSince /= 24;
                    timeSince < 2 ? scale = "day" : scale = "days";
                }
            }
        }
        return `${Math.floor(timeSince)} ${scale} ago`;
    }

    return (
        loading ? <CircularProgress color="primary" size="5rem"/> : 
        <div key={id} className="single">
            <div className="flex-container info">
                <p>Posted by <span className="author">{post.data.children[0].data.author}</span></p>
                <p>{convertTime(post.data.children[0].data.created)}</p>
            </div>
            <p><span className="material-symbols-outlined icon">chat_bubble</span>{post.data.children[0].data.num_comments}</p>
            <h2>{post.data.children[0].data.title}</h2>
            <img src={(typeof(post.data.children[0].data.preview) !== 'undefined') ? post.data.children[0].data.preview.images[0].source.url : null} alt=""/>
            
        </div>
    );
}