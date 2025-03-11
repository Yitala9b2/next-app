import { getTranslations } from '@/src/lib/i18n';
import { Locale } from '@/src/types/locales';
import Link from 'next/link';
export default async function NotFound() {
    //const messages = await getTranslations(params.locale);

    return (
        <html >
            <body>
                <div>
                    <h1>уекцыр</h1>
                    <p>уцпр</p>
                    {/*<Link href={`/${params.locale}`}>Return to homepage</Link>*/}
                </div>
            </body>
        </html>
    );
}
