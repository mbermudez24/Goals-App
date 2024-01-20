import styles from "./Details.module.css"

function Details() {
    const frequencyoptions = ["day", "week", "month", "year"];
    const Iconslist = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];
    return (
        <div className="card">
            <form action="" className="p-4">
                <label htmlFor="" className="label">
                    Describe your goal
                    <input
                        className="input"
                        placeholder="eg. 52 walks"
                    />
                </label>
                <label htmlFor="" className="label">
                    How often do you want to meet your goal? <span>(eg. once a week)</span>
                    <div className="flex mb-6">
                        <input
                            className="input mr-6"
                            type="number"
                        />
                        <select name="" id="" className="input">
                            {frequencyoptions.map(option => <option value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label htmlFor="" className="label">
                    How many times do you want to complete this goal?
                    <input
                        className="input"
                        type="number" />
                </label>
                <label htmlFor="" className="label">
                    Do you have a deadline?
                    <input
                        className="input"
                        type="date" />
                </label>
                <label htmlFor="" className="label">
                    How many times have you already completed this goal?
                    <input
                        className="input"
                        type="number" />
                </label>
                <label htmlFor="" className="label">
                    Choose the icon for the goal
                    <select name="" id="" className="input">
                        {Iconslist.map(icon => <option value={icon}>{icon}</option>)}
                    </select>
                </label>
            </form>
            <div className={styles.botones}>
                <button className="boton boton--negro">Create</button>
                <button className="boton boton--gris">Cancel</button>
            </div>
        </div>
    );
}

export default Details;