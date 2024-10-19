'use server';
import fs from 'fs';
import path from 'path';
const tasksFilePath = path.join(process.cwd(),'src', 'utils', 'tasks.json');
export async function savbtn(id, data) {
    try{
    const fileContents = fs.readFileSync(tasksFilePath, 'utf-8');
    const tasks = JSON.parse(fileContents);
    const taskIndex = tasks.findIndex((task, index) => task.id === id);
    console.log(taskIndex);
    if (taskIndex === -1) {
     throw new Error('Task not found');
    }
    tasks[taskIndex] = {
        ...tasks[taskIndex], // Keep existing properties
        ...data // Update with new data
    };
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf-8');
    return { message: 'Task updated successfully' };
}catch(e){
    return {message:e.message}
}
}

//function to toggle status
export async function updateCheck(id) {
    try{
    const fileContents = fs.readFileSync(tasksFilePath, 'utf-8');
    const tasks = JSON.parse(fileContents);
    const taskIndex = tasks.findIndex((task, index) => task.id === id);
    if (taskIndex === -1) {
     throw new Error('Task not found');
    }
   // Toggle the status or set it to true if it doesn't exist
   const currentStatus = tasks[taskIndex].status;
   tasks[taskIndex].status = (currentStatus === undefined) ? true : !currentStatus;
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf-8');
    return { message: 'Task updated successfully' };
}catch(e){
    return {message:e.message}
}
}

//function to delete tasks
export async function deleteTask(id) {
    try{
    const fileContents = fs.readFileSync(tasksFilePath, 'utf-8');
    const tasks = JSON.parse(fileContents);
    const taskIndex = tasks.findIndex((task, index) => task.id === id);
    if (taskIndex === -1) {
     throw new Error('Task not found');
    }
    tasks.splice(taskIndex, 1);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf-8');
    return { message: 'Task updated successfully' };
}catch(e){
    return {message:e.message}
}
}

export async function addTask(data) {
    try{
    const fileContents = fs.readFileSync(tasksFilePath, 'utf-8');
    const tasks = JSON.parse(fileContents);
   //adding a new task
   tasks.push(data);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf-8');
    return { message: 'Task updated successfully' };
}catch(e){
    return {message:e.message}
}
}
