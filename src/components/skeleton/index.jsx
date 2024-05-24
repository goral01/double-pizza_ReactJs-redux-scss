import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={1000}
        height={800}
        viewBox="0 0 1000 800"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="20" rx="0" ry="0" width="1000" height="100" />
        <circle cx="500" cy="450" r="280" />
    </ContentLoader>
);

export default Skeleton;
