import { useState, useEffect, useContext } from "react";
import styles from "./Details.module.css"
import { Context } from "../../services/Memory";
import { useNavigate } from "react-router-dom";

function Details() {

    const [form, setForm] = useState({
        details: '',
        events: 1,
        period: 'week',
        icon: '🏃‍♂️',
        goal: 52,
        deadline: '2030-01-01',
        completed: 0
    })

    const [state, send] = useContext(Context);

    const { details, events, period, icon, goal, deadline, completed } = form;

    const onChange = (event, prop) => {
        setForm((estado) => ({ ...estado, [prop]: event.target.value }));

    };

    useEffect(() => {
        console.log(form);
    }, [form]);

    const navigate = useNavigate()

    const create = async () => {
        // console.log(form);
        send({ type: 'create', goal: form });
        navigate('/list');
    }

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
                        value={details}
                        onChange={e => onChange(e, 'details')}
                    />
                </label>
                <label htmlFor="" className="label">
                    How often do you want to meet your goal? <span>(eg. once a week)</span>
                    <div className="flex mb-6">
                        <input
                            className="input mr-6"
                            type="number"
                            value={events}
                            onChange={e => onChange(e, 'events')}
                        />
                        <select
                            className="input"
                            value={period}
                            onChange={e => onChange(e, 'period')}
                        >
                            {frequencyoptions.map(option =>
                                <option key={option} value={option}>
                                    {option}
                                </option>)}
                        </select>
                    </div>
                </label>
                <label htmlFor="" className="label">
                    How many times do you want to complete this goal?
                    <input
                        className="input"
                        type="number"
                        value={goal}
                        onChange={e => onChange(e, 'goal')}
                    />
                </label>
                <label htmlFor="" className="label">
                    Do you have a deadline?
                    <input
                        className="input"
                        type="date"
                        value={deadline}
                        onChange={e => onChange(e, 'deadline')}
                    />
                </label>
                <label htmlFor="" className="label">
                    How many times have you already completed this goal?
                    <input
                        className="input"
                        type="number"
                        value={completed}
                        onChange={e => onChange(e, 'completed')}
                    />
                </label>
                <label htmlFor="" className="label">
                    Choose the icon for the goal
                    <select
                        className="input"
                        value={icon}
                        onChange={e => onChange(e, 'icon')}
                    >
                        {Iconslist.map(icon =>
                            <option key={icon} value={icon}>
                                {icon}
                            </option>)}
                    </select>
                </label>
            </form>
            <div className={styles.botones}>
                <button
                    className="boton boton--negro"
                    onClick={create}
                >
                    Create</button>
                <button className="boton boton--gris">Cancel</button>
            </div>
        </div>
    );
}

export default Details;