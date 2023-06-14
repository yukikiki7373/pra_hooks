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
            <p>index components</p>
            {console.log(username)}
            <table style={{
                textAlign: "center"
            }}>
                <thead>
                    <tr>
                        <td>key</td>
                        <td>value</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(username).map((key)=>{
                        <tr>
                            <td>{key}</td>
                            <td>{username[key]}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            {username["name"]}
        </>
    )
}

export default Index;