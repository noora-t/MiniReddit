import '../Style.css';
import Masonry from 'react-masonry-css';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const PostList = (props) => {
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
    
    const breakpointColumns = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <Masonry
            breakpointCols={breakpointColumns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {props.posts.map(post => {
                return (
                    <div key={post.data.id} className="listing-post">
                        <Link to={`/post/${post.data.id}`} key={post.data.id}><h2>{post.data.title}</h2></Link>
                        <img className="post-img" src={(typeof(post.data.preview) !== 'undefined') ? post.data.preview.images[0].source.url : null} alt=""/>
                        <div className="info">
                            <p>Posted by <span className="author">{post.data.author} </span>{convertTime(post.data.created)}</p>
                            <p><span className="material-symbols-outlined chat-icon">chat_bubble</span>{post.data.num_comments}</p>
                        </div>
                    </div>
                );
            })}
        </Masonry>
    );
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired
}

/*
<Link
    key={animal.id}
    to={`/${animal.type.toLowerCase()}/${animal.id}`}
    className="pet"
>
*/
