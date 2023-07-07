import { Feed } from "@components/Feed"


const Home = () => {
    return (
        <section className="w-full flex-center flex-col" >
            <h1 className="head_text text-center" >
                Discover & Share
                <br className="max-md:hiden" />
                <span className="orange_gradient" >AI-Powered Prompts </span>
            </h1>
            <p className="desc text-center" >
                Promptopia is an open-source AI Prompt tool for morden world to discover and
                create and share creative prompts. 
            </p>

            <Feed />

        </section>
    )
}

export default Home