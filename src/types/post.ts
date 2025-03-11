import { Locale } from '@/src/types/locales';

export type Post = {
    id: number;
    createdAt: Date; // Список поддерживаемых языков
    translations: translation[];
};

type translation = {
    id: number;
            language: Locale;
            title: string;
            content: string;
            postId: number | null;
}