import CircularProgress from '@mui/material/CircularProgress';
import React, { useState, useEffect } from "react";
import {PostList} from '../components/PostList';

export const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPosts().then((post) => {
            setPosts(post);
            setLoading(false);
            console.log(post);
        });
    }, []);

    const getPosts = async () => {try {
        const response = await fetch(`http://www.reddit.com/r/all/top/.json?limit=50&raw_json=1`);

            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.data.children;
            }
            throw new Error('Request failed!');
        } catch(error) {
            console.log(error);
        }
    }
 
    return (
        <main>
            {loading ? <CircularProgress color="primary" size="5rem"/> : 
            <PostList posts={posts} />}
        </main>
    );
}


