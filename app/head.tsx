import { siteConfig } from "@/config/site"

const ProductHead: React.FunctionComponent = () => {
  return (
    <>
      <title>{`${siteConfig.name}: ${siteConfig.description}`}</title>
      <link rel="icon" href="/rounded-icon.svg" />
      <meta
        name="image"
        content="https://fitpeak.shop/images/fitpeak-logo.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content={`${siteConfig.name}: ${siteConfig.description}`}
      />
      <link rel="canonical" href={siteConfig.url} />
    </>
  )
}

export default ProductHead
