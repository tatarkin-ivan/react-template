function WorkSkill({workSkill}){
    console.log(workSkill);
    return (
        <>
            <div>
                <h3>Стаж:</h3>
                {workSkill.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>        
        </>
    );
}

export default WorkSkill;