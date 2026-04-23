const SB_URL = "https://exsrkldqdatytexqgeey.supabase.co";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c3JrbGRxZGF0eXRleHFnZWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTc4ODUsImV4cCI6MjA5MjUzMzg4NX0.i3YOfcuojy3YEuc0o1rH7QIxJUM4aaYhaE4g3Dy2eak";

async function incarcaEvenimente() {
    const container = document.getElementById('container-evenimente');
    
    // Verificăm dacă suntem pe pagina care are containerul de evenimente
    if (!container) return;

    try {
        const response = await fetch(`${SB_URL}/rest/v1/evenimente?select=*`, {
            headers: {
                'apikey': SB_KEY,
                'Authorization': `Bearer ${SB_KEY}`
            }
        });

        const date = await response.json();
        
        container.innerHTML = ''; // Ștergem mesajul "Se încarcă..."

        if (date.length === 0) {
            container.innerHTML = '<p>Momentan nu sunt evenimente adăugate.</p>';
            return;
        }

        // Luăm fiecare eveniment și îl transformăm într-un "card" vizual
        date.forEach(ev => {
            container.innerHTML += `
                <div class="card">
                    ${ev.imagine_url ? `<img src="${ev.imagine_url}" alt="${ev.titlu}" style="width:100%; border-radius:10px; margin-bottom:15px; height:200px; object-fit:cover;">` : ''}
                    <div class="card-content">
                        <span style="color: #e74c3c; font-weight: bold; font-size: 0.8rem; text-transform: uppercase;">${ev.oras}</span>
                        <h3 style="margin: 10px 0;">${ev.titlu}</h3>
                        <p style="color: #666; font-size: 0.9rem; margin-bottom: 10px;">📅 ${ev.data_ora}</p>
                        <p style="margin-bottom: 15px;">${ev.descriere}</p>
                        ${ev.video_url ? `<a href="${ev.video_url}" target="_blank" class="btn-main" style="padding: 8px 20px; font-size: 0.8rem; display: inline-block;">Vezi Video</a>` : ''}
                    </div>
                </div>
            `;
        });
    } catch (err) {
        console.error("Eroare la încărcare:", err);
        container.innerHTML = '<p>Eroare la încărcarea evenimentelor. Verificați conexiunea.</p>';
    }
}

// Pornim funcția când se încarcă pagina
window.onload = incarcaEvenimente;
