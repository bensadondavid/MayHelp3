import Header from "../Components/Header"

const Home = ()=>{

    return(
        <>
        <div className="home">
            <Header />
            <div className="central-text">
                <p className="big-text">Ne bougez plus, <br/> On s'occupe de tout.</p>
                <p className="small-text">Bienvenue chez MayHelp, votre accompagnateur au quotidien</p>
                <div className="buttons">
                    <button>En savoir plus</button>
                    <button>Nous contacter</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home