import React,{useState,useEffect,useCallback} from 'react';


const Person = ({ fetchData }) => {
    const [loading, setLoading] = useState(true);
    const [person, setPerson] = useState({});
  
    useEffect(() => {
      setLoading(true);
       fetchData().then(response => response.json())
        .then(data => {
          setPerson(data);
          setLoading(false);
        });
    }, [fetchData]);
  
    if (loading === true) {
      return <p>Loading ...</p>;
    }
  
    return (
      <div>
        <p>You're viewing: {person.name}</p>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
      </div>
    );
  };

function UseEffectHook(){
    const [personId, setPersonId] = useState("1");

    const fetchData = useCallback(()=>{
       return fetch(`https://v1/api/people/${personId}/`);
    },[personId]);

    return (
        <>
            <Person fetchData={fetchData} />
            <div>
                Show:
                <button onClick={() => setPersonId("1")}>button 1</button>
                <button onClick={() => setPersonId("2")}>button 2</button>
            </div>
        </>
    )
}

export default UseEffectHook;