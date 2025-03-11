import { fetchGraphQL } from '../../../hooks/http';

type rt = {
    title: string;
    content: string;
    uri: string;
    postId: string | number;
};

const query = `
    {
      posts(first: 5) {
        nodes {
          postId
          title
          content
          uri
        }
      }
    }
    `;

export default async function AddProduct() {
    const { posts } = await fetchGraphQL<{ posts: { nodes: rt[] } }>(query);

    return (
        <div>
            {posts.nodes.map((post: rt) => (
                <div key={post.uri} className="card">
                    <h3>{post.title}</h3>
                    <h3>{post.postId}</h3>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.content.slice(0, 200) + '...',
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
