import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import { locales, defaultLocale } from '@/src/lib/i18n';
import { Post } from '@/src/types/post';
import { Locale } from '@/src/types/locales';
export async function GET(req: NextRequest) {
    try {
        // Определяем язык из URL
        const pathname = req.nextUrl.pathname; // Пример: "/ru/api/posts"
        const lang = pathname.split('/')[1]; // Получаем "ru" или "en"

        // Проверяем, поддерживается ли язык
        const locale = locales.includes(lang as Locale) ? lang : defaultLocale;

        // Запрашиваем посты с нужным языком
        const posts: Post[] = await prisma.post.findMany({
            where: { language: locale },
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json({ locale, posts });
    } catch (error) {
        return NextResponse.json(
            { message: 'Ошибка при получении постов', error },
            { status: 500 },
        );
    }
}
