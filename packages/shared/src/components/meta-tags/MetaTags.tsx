import { Helmet } from "react-helmet";

interface MetaTagsProps {
    title?: string;
    description?: string;
    keywords?: string;
    type?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
    title,
    description,
    keywords,
    type,
}) => {
    const defaultTitle = "Football Transfermarkt";
    const defaultDescription = "Explore more about football.";
    const defaultKeywords = "football, clubs, soccer, sports";
    const defaultType = "website";

    return (
        <Helmet>
            {/* Dynamic Title */}
            <title>{`${defaultTitle} | ${title || "Home"}`}</title>

            {/* Meta Tags */}
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content={type || defaultType} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "WebSite",
                    name: defaultTitle,
                })}
            </script>
        </Helmet>
    );
};
