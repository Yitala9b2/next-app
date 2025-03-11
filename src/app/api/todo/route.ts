import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';
import { locales, defaultLocale } from '@/src/lib/i18n';
import { Post } from '@/src/types/post';
import { Locale } from '@/src/types/locales';
import { Todo } from '@/src/types/todo';
export async function GET(req: NextRequest) {
    try {
        // Определяем язык из URL

        // Запрашиваем посты с нужным языком
        const todos: Todo[] = await prisma.todo.findMany();

        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json(
            { message: 'Ошибка при получении туду', error },
            { status: 500 },
        );
    }
}
