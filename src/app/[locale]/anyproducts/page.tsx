//import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import AddProduct from "./AddProduct";
type Repo = {
    title: string;
    id: string | number;
};

interface Post {
    id: string
    title: string
  }



//  export const getStaticProps: GetStaticProps = async () => {
//    const post = await fetch(`https://wpnext.test-handyhost.ru/wp-json/wp/v2/posts`).then(
//      (res) => res.json()
//    )
   
//    return {
//      props: { post },
//      // Next.js will invalidate the cache when a
//      // request comes in, at most once every 60 seconds.
//      revalidate: 60,
//    }
//  }
export const revalidate = 10
//export const dynamicParams = true // or false, to 404 on unknown paths
 
//export async function generateStaticParams() {
//  const posts = await fetch('https://wpnext.test-handyhost.ru/wp-json/wp/v2/posts').then((res) =>
//    res.json()
//  )
//  return posts.map((post: any) => ({
//    title: post.title.rendered,
//    id: post.id,
//  }))
//}



//export const getServerSideProps = (async () => {
//  // Fetch data from external API
//  const res = await fetch('https://wpnext.test-handyhost.ru/wp-json/wp/v2/posts')
//  const repo = await res.json()
//  const init = repo.data.map((value: any) => {
//    return {
//        title: value.title.rendered,
//        id: value.id,
//    }
//})
////  // Pass data to the page via props
//  return { props: { init } }
//}) satisfies GetServerSideProps<{ init: Repo }>

//export default function Page({
//    init,
//}: InferGetServerSidePropsType<typeof getServerSideProps>) {
//    console.log(init)
//  return (
//    <main>
//      <p>{init.title}</p>
//    </main>
//  )
//}
export default async function Page
(
    //{params,}: {params: Promise<Post[]>}

) {
    //const res2 = await params
    //console.log(res2)
    //const data = await fetch('https://wpnext.test-handyhost.ru/wp-json/wp/v2/posts')
    //const res = await data.json()
    
    //const posts = res.map((value: any) => {
    //    return {
    //        title: value.title.rendered,
    //        id: value.id,
    //    }
    //})
    return (
        <AddProduct/>

            
        

        
    );
}
