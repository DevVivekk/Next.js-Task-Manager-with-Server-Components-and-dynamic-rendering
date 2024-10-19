"use client";
import React, { useState } from 'react';
import './homewrapper.css';
import HomeComp from '../homePage/homecomp';
import { useSearchParams } from 'next/navigation';
import EditHome from '../homepageModes/editMode/EditHome';
import { addTask } from '../homepageModes/editMode/EditFile';

const HomePagewrapper = ({ data }) => {
    const searchParams = useSearchParams();
    const checkedit = searchParams.get('edit') === 'true';
    const sortedit = searchParams.get('sort') === 'true';
    const [search, setSearch] = useState("");
    const [sorts, setSorts] = useState("");
    const [task, setTask] = useState({ title: "", description: "", priority: "", id: new Date().getTime() });

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleAddTask = () => {
        addTask(task);
        setTask({ title: "", description: "", priority: "", id: new Date().getTime() });
    };

    return (
        <div className='home-wrapper'>
            <h1>Task Manger App</h1>
            {sortedit ? (
                <section className='input-section'>
                    <h2>Sorting Mode enabled</h2>
                    <input type='text' placeholder='filter by title' onChange={(e) => setSearch(e.target.value)} />
                    <select onChange={(e) => setSorts(e.target.value)}>
                        <option value={""}>Sort by priority</option>
                        <option value={'low'}>Low</option>
                        <option value={'medium'}>Medium</option>
                        <option value={'high'}>High</option>
                    </select>
                </section>
            ) : checkedit ? (
                <section className='input-section'>
                <h2>Edting Mode enabled</h2>
                    <input type='text' name='title' value={task.title} placeholder='add title' onChange={handleChange} />
                    <input type='text' name='description' value={task.description} placeholder='add description' onChange={handleChange} />
                    <select name='priority' value={task.priority} onChange={handleChange}>
                        <option value="">Choose priority</option>
                        <option value={'low'}>Low</option>
                        <option value={'medium'}>Medium</option>
                        <option value={'high'}>High</option>
                    </select>
                    <button onClick={handleAddTask}>Add a new task</button>
                </section>
            ) : null}

            <section className={'data-map-comp'}>
                {data && data.message
                    ? data.message
                        .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                        .filter(item => item.priority.toLowerCase().includes(sorts.toLowerCase()))
                        .map((item, idx) => (
                            <section key={idx}>
                                {checkedit ? <EditHome item={item} /> : <HomeComp item={item} />}
                            </section>
                        ))
                    : null}
            </section>
        </div>
    );
};

export default HomePagewrapper;
