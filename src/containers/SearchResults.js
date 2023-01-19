import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import {PostList} from '../components/PostList';
import '../Style.css';

export const SearchResults = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { search } = useLocation();

    const queryParams = useMemo(() => { 
        return new URLSearchParams(search);    
    }, [search]);

    useEffect(() => {
        getPosts().then((post) => {
            setPosts(post);
            setLoading(false);
        });
    }, [queryParams]);

    const getPosts = async () => {
        setLoading(true);
         try {
            const title = queryParams.get('name');
            const response = await fetch(`http://www.reddit.com/search.json?q=${title}&raw_json=1&sort=relevance&limit=50`);

            if(response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.data.children;
            }
            throw new Error('Request failed!');
        } catch(error) {
            console.log(error);
        }
    }

    /*
    const onShowMore = () => {
        getPosts().then((post) => {
            setPosts(post);
            setLoading(false);
            console.log("onshowmore " + post);
        });
    }
    */
   
    return (
        <main>
            {loading ? <CircularProgress color="primary" size="5rem"/> : 
            <PostList posts={posts} />
            
            }

            {/*<button onClick={onShowMore}>Show More</button>*/}
        </main>
        
    );
}

