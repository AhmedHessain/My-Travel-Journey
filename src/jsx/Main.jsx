import Card from "./Card.jsx";
import data from "./data.jsx";
import '../css/Main.css'
export default function Main(){
   const cards = data.map((item)=>
    {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <main>
            {cards}
        </main>
    )
}