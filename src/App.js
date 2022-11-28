import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Formlabels from "./components/Formlabels";
import Button from "./components/Button";


function App() {

    const [strawberry,setStrawberry] = React.useState(0)
    const [banana, setBanana] = React.useState(0)
    const [apple, setApple] = React.useState(0)
    const [kiwi, setKiwi] = React.useState(0)



    const [firstName,setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [age, setAge] = React.useState("")
    const [zipcode, setZipcode] = React.useState("")
    const [deliveryFreq, setDeliveryFreq] = React.useState("Iedere week")
    const [timeOfDelivery, setTimeOfDelivery] = React.useState("Overdag")
    const [remark, setRemark] = React.useState("")
    const [terms, setTerms] = React.useState(false)

    const onDeliveryChange = event =>{
        setTimeOfDelivery(event.target.value)
    }

    function sendButton(event){
        event.preventDefault()
        console.log(strawberry)
        console.log(banana)
        console.log(apple)
        console.log(kiwi)
        console.log(firstName);
        console.log(lastName);
        console.log(age);
        console.log(zipcode);
        console.log(deliveryFreq);
        console.log(timeOfDelivery);
        console.log(remark);
        console.log(terms);
    }


  function resetAll(){
    setStrawberry(0);
    setBanana(0);
    setApple(0);
    setKiwi(0);
  }


  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
        <div className="groceries">
        <Counter
            className="plusbutton"
            classNameTwo="minusbutton"
            fruitName="Aardbeien 🍓"
            type="button"
            fruitValue={strawberry}
            addOne={()=> setStrawberry(strawberry =>strawberry+1)}
            deductOne={()=>setStrawberry(strawberry =>strawberry-1)}
            isDisabled={strawberry===0}>
        </Counter>
        <Counter
            className="plusbutton"
            classNameTwo="minusbutton"
            fruitName="Bananen 🍌"
            type="button"
            fruitValue={banana}
            addOne={()=> setBanana(banana =>banana+1)}
            deductOne={()=> setBanana(banana =>banana-1)}
            isDisabled={banana===0}>
        </Counter>
        <Counter
            className="plusbutton"
            classNameTwo="minusbutton"
            fruitName="Appels 🍎"
            type="button"
            fruitValue={apple}
            addOne={()=> setApple(apple =>apple+1)}
            deductOne={()=> setApple(apple =>apple-1)}
            isDisabled={apple===0}>
        </Counter>
        <Counter
            className="plusbutton"
            classNameTwo="minusbutton"
            fruitName="Kiwi's 🥝"
            type="button"
            fruitValue={kiwi}
            addOne={()=> setKiwi(kiwi =>kiwi+1)}
            deductOne={()=> setKiwi(kiwi =>kiwi-1)}
            isDisabled={kiwi===0}>
        </Counter>
        </div>

        <Button className="reset-button" onclick={resetAll}>Reset</Button>

        <form action="">
            <Formlabels
                labelname="Voornaam"
                type="text"
                value={firstName}
                className="label"
                setState={(event)=>setFirstName(event.target.value)}>
            </Formlabels>
            <Formlabels
                labelname="Achternaam"
                type="text"
                value={lastName}
                className="label"
                setState={(event)=>setLastName(event.target.value)}>
            </Formlabels>
            <Formlabels
                labelname="Leeftijd"
                type="number"
                value={age}
                className="label"
                setState={(event)=>setAge(event.target.value)}>
            </Formlabels>
            <Formlabels
                labelname="Postcode"
                type="text"
                value={zipcode}
                className="label"
                setState={(event)=>setZipcode(event.target.value)}>
            </Formlabels>
            <label>BezorgFrequentie</label>
            <select className="dropdown" value={deliveryFreq} onChange={(event)=>setDeliveryFreq(event.target.value)}>
                <option value="Iedere week">Iedere week</option>
                <option value="Om de week">Om de week</option>
                <option value="iedere maand">Iedere maand</option>
            </select>
            <div className="deliverytime">
            <label>Overdag</label>
            <input type="radio"
                   value="Overdag"
                   checked={timeOfDelivery==="Overdag"}
                   onChange={onDeliveryChange}
                   />
            <label>s'Avonds</label>
            <input type="radio"
                   value="s'Avonds"
                   checked={timeOfDelivery==="s'Avonds"}
                   onChange={onDeliveryChange}
                    /></div>
            <label>Opmerking</label>
            <textarea value={remark}
                      name="Opmerking"
                      rows="5" cols="30"
                      onChange={(event)=>setRemark(event.target.value)}>
            </textarea>
            <div className="checkbox">
            <input type="checkbox"
                   name="voorwaarden"
                   checked={terms}
                   onChange={()=>setTerms(!terms)}/>Ik ga akkoord met de voorwaarden
            <br/></div>
            <Button className="send-button" onclick={sendButton}>Verzend</Button>
        </form>

    </>
  );
}

export default App;
