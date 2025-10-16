async function example() {
    try {
        // 1. Fetch data from an API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        // 2. Extract names from the data
        const names = data.map(user => user.name);

        // 3. Create a list element
        const ul = document.getElementById('demo');
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            ul.appendChild(li);
        });
        
        // 4. Also log the data to the console
        console.log(names.length);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Invoke the function
example();