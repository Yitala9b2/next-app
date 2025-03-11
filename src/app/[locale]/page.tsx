import Image from 'next/image';
import { Link } from '@/src/i18n/routing';
import styles from './page.module.css';
import Header from '@/src/components/Header';
import PostCard from '@/src/components/PostCard';
import { Post } from '@/src/types/post';
import { Todo } from '@/src/types/todo';
import { locales, getTranslations } from '@/src/lib/i18n';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import {getMessages} from 'next-intl/server';

type Props = {
    params: {
        locale: 'en' | 'ru';
    };
};


//export const getServerSideProps = async () => {
//    const res = await fetch('/api/posts');
//    const posts: Post[] = await res.json();
//    return { props: { posts } };
//};

//export async function getServerSideProps() {
//    const [ todoList] = await Promise.all([
//        //fetch('/api/anotherPosts').then((res) => res.json()),
//        fetch('/api/todo').then((res) => res.json()),
//    ]);
//    return {
//        props: {
//            //posts,
//            todoList,
//        },
//    };
//}
//const locale = (await params).locale

//const [todoList, posts] = await Promise.all([
//    fetch('http://localhost:3000/api/todo').then((res) => res.json()),
//    fetch(`http://localhost:3000/api/posts?${locale}`).then((res) => res.json())
//])

export default async  function Home({ params }: Props) {
    const locale = (await params).locale
    
    const data = await fetch('http://localhost:3000/api/todo')
    const data2 = await fetch(`http://localhost:3000/api/posts?locale=${locale}`)
    const todoList = await data.json()
    const posts = await data2.json()

    return (
        <>
            {/*<Header />*/}
            <div className={styles.page}>
                <main className={styles.main}>
                    <h1>Latest Posts</h1>
                    {posts.length > 0 ? (
                        posts.map((post:Post) => (
                            <PostCard key={post.id} post={post} />
                        ))
                    ) : (
                        <p>No posts available.</p>
                    )}
                    <Image
                        className={styles.logo}
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                    <ul>
                        {todoList.map((todo: Todo) => (
                            <li key={todo.id as any}>
                                <span style={{ marginRight: '10px' }}>
                                    {todo.content}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <Link href="/form">
                        <Image
                            aria-hidden
                            src="/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        ФОРМА
                    </Link>
                    <ol>
                        <li>
                            Get started by editing <code>src/app/page.tsx</code>
                            .
                        </li>
                        <li>Save and see your changes instantly.</li>
                    </ol>

                    <div className={styles.ctas}>
                        <a
                            className={styles.primary}
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className={styles.logo}
                                src="/vercel.svg"
                                alt="Vercel logomark"
                                width={20}
                                height={20}
                            />
                            Deploy now
                        </a>
                        <a
                            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondary}
                        >
                            Read our docs
                        </a>
                    </div>
                </main>
            </div>
            <footer className={styles.footer}>
                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <Link href="/products">
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </Link>
                <Link href="/anyproducts">
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </Link>
            </footer>
        </>
    );
}
