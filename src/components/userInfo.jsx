import WorkSkill from "./workSkill";
import HomePets from "./homePets";

function UserInfo({data}){
    console.log(data);

    return (
        <>
            <div>
                <h2>Name: {data.firstName}</h2>
                <h2>Age: {data.age}</h2>
                <h2>Gender: {data.gender}</h2>
            </div>
            <div>
                <WorkSkill workSkill={data.workSkill}/>
                <br/>
                <HomePets  homePets={data.homePets}/>
            </div>        
        </>
    );
}

export default UserInfo;