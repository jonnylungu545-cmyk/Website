const SB_URL = "https://exsrkldqdatytexqgeey.supabase.co/rest/v1/";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c3JrbGRxZGF0eXRleHFnZWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTc4ODUsImV4cCI6MjA5MjUzMzg4NX0.i3YOfcuojy3YEuc0o1rH7QIxJUM4aaYhaE4g3Dy2eak"; // Pune aceeași cheie și aici

async function incarcaEvenimente() {
    const response = await fetch(`${SB_URL}evenimente?select=*`, {
        headers: {
            'apikey': SB_KEY,
            'Authorization': `Bearer ${SB_KEY}`
        }
    });

    const date = await response.json();
    const container = document.getElementById('container-evenimente');
    if(container) {
        container.innerHTML = ''; 
        date.forEach(ev => {
            container.innerHTML += `
                <div class="card">
                    ${ev.imagine_url ? `<img src="${ev.imagine_url}" style="width:100%; border-radius:10px; margin-bottom:10px;">` : ''}
                    <h3>${ev.titlu}</h3>
                    <p><strong>📍 ${ev.oras}</strong></p>
                    <p><small>📅 ${ev.data_ora}</small></p>
                    <p>${ev.descriere}</p>
                </div>
            `;
        });
    }
}
incarcaEvenimente();
