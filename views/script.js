const deleteFunc = (id) =>{
    fetch(`http://localhost:3000/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    });
}
