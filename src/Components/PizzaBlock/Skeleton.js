import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className={"pizza-block"}
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="134" cy="136" r="125" />
        <rect x="0" y="287" rx="7" ry="7" width="269" height="28" />
        <rect x="0" y="328" rx="7" ry="7" width="273" height="88" />
        <rect x="0" y="431" rx="7" ry="7" width="131" height="39" />
        <rect x="147" y="431" rx="7" ry="7" width="123" height="40" />
    </ContentLoader>
)

export default Skeleton