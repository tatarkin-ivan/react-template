import UserInfo from "./components/userInfo";

function App() {
  const workSkill = ["shop","fabric","school"];
  const dog={nickname: 'Bobik', age: 11};
  const homePets =  ["cat","dog","mouse","snake","bull","cowgit "];
  console.log(dog);
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
