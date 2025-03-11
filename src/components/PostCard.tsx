import { Post } from '@/src/types/post';

type PostCardProps = {
    post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
    return (
        <article
            style={{
                border: '1px solid #ddd',
                padding: '1rem',
                marginBottom: '1rem',
                borderRadius: '5px',
            }}
        >
            <h2>{post.translations[0].title}</h2>
            <p>{post.translations[0].content}</p>
            <small>
                Published: {new Date(post.createdAt).toLocaleDateString()}
            </small>
        </article>
    );
};

export default PostCard;
