import { useEffect, useState } from "react";

const Index = () =>{

    const [username, setUsername] = useState("before inset usename")
    const URL = `https://api.github.com/users/yukikiki7373`

    useEffect(()=>{
        getUserName()
    }, [])

    const getUserName = () =>{
        return fetch(URL)
        .then(response => response.json())
        .then(response => {
            // setUsername(response.name);
            setUsername(response)
        })
    }

    return(
        <>
            {username["name"]}
            <hr />
            {username["received_events_url"]}
            {Object.keys(username).map((key)=>{
                <div>
                    <p>{key}</p>
                    <p>{username[key]}</p>
                </div>
                console.log("key", key, "value:", username[key])
            })}
        </>
    )
}

export default Index;