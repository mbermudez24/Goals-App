function Details() {
    const frequencyoptions = ["day", "week", "month", "year"];
    const Iconslist = ["💻", "🏃‍♂️", "📚", "✈️", "💵"];
    return (
        <div>
            <form action="">
                <label htmlFor="">
                    Describe your goal
                    <input placeholder="eg. 52 walks" />
                </label>
                <label htmlFor="">
                    How often do you want to meet your goal? <span>(eg. once a week)</span>
                    <div>
                        <input type="number" />
                        <select name="" id="">
                            {frequencyoptions.map(option => <option value={option}>{option}</option>)}
                        </select>
                    </div>
                </label>
                <label htmlFor="">
                    How many times do you want to complete this goal?
                    <input type="number" />
                </label>
                <label htmlFor="">
                    Do you have a deadline?
                    <input type="date" />
                </label>
                <label htmlFor="">
                    How many times have you already completed this goal?
                    <input type="number" />
                </label>
                <label htmlFor="">
                    Choose the icon for the goal
                    <select name="" id="">
                        {Iconslist.map(icon => <option value={icon}>{icon}</option>)}
                    </select>
                </label>
            </form>
            <div>
                <button>Create</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}

export default Details;