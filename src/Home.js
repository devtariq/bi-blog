import {useState} from 'react';

const Home = () => {

    const [name,setName] = useState('Tariqul');
    const [age, setAge] = useState('30');

    const handleClick = () => {
        setName ('Joshim');
        setAge('60');
    }
    const clickAgain = (name, e) => {
        console.log( 'again click me you ...' + name , e );
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>click me</button>
            <button onClick={ (e)=>  clickAgain('Sorai',e)  }>click me</button>
        </div>
    )
}

export default Home;