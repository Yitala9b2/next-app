import { prisma } from './prisma-client';

async function main() {
    const posts = await prisma.post.createMany({
        data: [
          { createdAt: new Date() },
          { createdAt: new Date() },
          { createdAt: new Date() },
        ],
      });
      
      const translationsData = [
        { postId: 1, language: 'en', title: 'First Post', content: 'This is the first post.' },
        { postId: 1, language: 'ru', title: 'Первый пост', content: 'Это первый пост.' },
        { postId: 2, language: 'en', title: 'Second Post', content: 'This is the second post.' },
        { postId: 2, language: 'ru', title: 'Второй пост', content: 'Это второй пост.' },
        { postId: 3, language: 'en', title: 'Third Post', content: 'This is the third post.' },
        { postId: 3, language: 'ru', title: 'Третий пост', content: 'Это третий пост.' },
      ];
    await prisma.postTranslation.createMany({
        data: translationsData,
      });
    
      console.log('Created posts with translations:');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
