function HomePets({homePets}){
    console.log(homePets);
    return (
        <>
            <div>
                <h3>Домашние животные:</h3>
                {homePets.map((item, index) => (
                    <div key={index}>{item}</div>    
                ))}
            </div>        
        </>
    );
}

export default HomePets;