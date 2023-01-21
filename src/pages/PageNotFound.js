import { useEffect } from "react";

function PageNotFound() {
    useEffect(() => {
        document.title = `filmsPerSecond - Page Not Found`;
    }, []);
    return <h1>Page Not Found</h1>;
}

export default PageNotFound;
