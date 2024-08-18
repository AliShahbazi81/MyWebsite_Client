/** @type {import('next').NextConfig} */


const nextConfig = ({
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de', 'fr'],
    },
    images: {
        unoptimized: true,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {key: 'X-Content-Type-Options', value: 'nosniff'},
                    {key: 'X-Frame-Options', value: 'DENY'},
                    {key: 'X-XSS-Protection', value: '1; mode=block'},
                    {key: 'Referrer-Policy', value: 'same-origin'},
                ],
            },
        ];
    },
});

export default nextConfig;
