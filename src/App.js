import UserInfo from "./components/userInfo";

function App() {
  const workSkill = ["shop","fabric","school"];
  const cat={nickName:"Vasya", age:5};
  const homePets =  ["cat","dog","mouse","snake","bull"];
  console.log(cat);

  const user = {
    firstName: "Vanya",
    age: 39,
    gender: "men",
    workSkill: workSkill,
    homePets: homePets
  };
  return (
    <>
      <UserInfo data={user}/>
    </>
  );
}

export {App};
