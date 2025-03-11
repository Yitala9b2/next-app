//'use client';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

//import { useEffect, useState } from 'react';
//import AxiosClient from '@/hooks/http';

//type Tresponse = {
//    title: string;
//    id: string | number;
//};

//const Products = () => {
//    const { client, loading } = AxiosClient();
//    const [products, setProducts] = useState([]);
//    const fetchFroducts = async () => {
//        const res = await client(
//            'https://wpnext.test-handyhost.ru/wp-json/wp/v2/posts',
//        );
//        return res;
//    };

//    console.log(products);

//    useEffect(() => {
//        fetchFroducts().then((res) => {
//            console.log(res.data);
//            setProducts(
//                res.data.map((value: any) => {
//                    return {
//                        title: value.title.rendered,
//                        id: value.id,
//                    };
//                }),
//            );
//        });
//    }, []);
//    return (
//        <>
//            {loading ? (
//                <p>загрузка...</p>
//            ) : (
//                <div>{products.map((value: Tresponse) => value.title)}</div>
//            )}
//        </>
//    );
//};

//export default Products;

import Link from 'next/link';
import { Suspense } from 'react';
export const revalidate = 3600
type rt = {
    title: string
        content: string
        uri: string
        postId: string | number
}

//async function getPosts() {
//    const query = `
//  {
//    posts(first: 5) {
//      nodes {
//        postId
//        title
//        content
//        uri
//      }
//    }
//  }
//  `;

//    const res = await fetch(
//        `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
//            query,
//        )}`,
//        {
//            method: 'GET',
//            headers: {
//                'Content-Type': 'application/json',
//                // ... any other headers you need to include (like authentication tokens)
//            },
//        },
//    );

//    const { data } = await res.json();

//    return data.posts.nodes;
//}

export const getServerSideProps = (async () => {

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
    
  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
        query,
    )}`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // ... any other headers you need to include (like authentication tokens)
        },
    },
);
  const params = await res.json()
  const init = params.data.posts.nodes
//  // Pass data to the page via props
  return { props: { init } }
}) satisfies GetServerSideProps<{init : rt[]}>

export default async function Products({init}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <div>
            {init.map((post: rt) => (
                <div key={post.uri} className="card">
                    <Link href={`post${post.uri}`}>
                        <h3>{post.title}</h3>
                        <h3>{post.postId}</h3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: post.content.slice(0, 200) + '...',
                            }}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}
