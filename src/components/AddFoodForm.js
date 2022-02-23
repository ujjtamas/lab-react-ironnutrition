import {useState} from 'react';

function AddFoodForm(prop){
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(1);
    const [hideForm, setHideForm] = useState(false);

    const handleName = e => setName(e.target.value);
    const handleImage = e => setImage(e.target.value);
    const handleCalories = e => setCalories(e.target.value);
    const handleServings = e => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {name, image, calories, servings};
        
        prop.addFood(newFood);
        setName('');
        setImage('');
        setCalories(0);
        setServings(1);
    }

    const handleHideForm = (e) =>{
        let show = !hideForm;
        setHideForm(show)
    }

return(
    <div>
        <h4>Add Food Entry</h4>
        
        <form onSubmit={handleSubmit} className={!hideForm && 'noDisplay'}>
            <label htmlFor="name">Name: <input type="text" name="name" value={name} onChange={handleName} /></label>
            <br />
            <label htmlFor="image">Image: <input type="text" name="image" value={image} onChange={handleImage} /></label>
            <br />
            <label htmlFor="Calories">Calories: <input type="number" name="calories" value={calories} onChange={handleCalories} /></label>
            <br />
            <label htmlFor="Servings">Servings: <input type="number" name="servings" value={servings} onChange={handleServings} /></label>
            <br />
            <button type="submit">Create</button>
        </form>
        <button onClick={handleHideForm} id="hideForm">Add New Food</button>
    </div>

)
}

export default AddFoodForm;