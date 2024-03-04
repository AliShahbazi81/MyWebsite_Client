/** @type {import('next').NextConfig} */
const nextConfig = ({
    // Add german language support using i18n
    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                    { key: 'Referrer-Policy', value: 'same-origin' },
                ],
            },
        ];
    },
});

export default nextConfig;
