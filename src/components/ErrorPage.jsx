import { Link } from "react-router-dom";

function ErrorPage() {

    return(
        <div className="flex flex-col h-full w-screen justify-start items-center gap-20 mt-20 text-5xl">
            <span>Page Not Found.</span>
            <Link to={"/"} className="underline hover:bg-neutral-400">
                Take me Back
            </Link>
        </div>
    );
}

export default ErrorPage