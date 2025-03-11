import { prisma } from '@/prisma/prisma-client'
import { NextResponse } from "next/server"
import { Locale } from '@/src/types/locales'
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get("locale");
    const posts = await prisma.post.findMany({
        include: {
            translations: {
              where: {
                language: lang as Locale, // Фильтруем переводы по языку
              },
            },
          },
    })

    return NextResponse.json(posts)
}