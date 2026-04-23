const SB_URL = "https://exsrkldqdatytexqgeey.supabase.co";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c3JrbGRxZGF0eXRleHFnZWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTc4ODUsImV4cCI6MjA5MjUzMzg4NX0.i3YOfcuojy3YEuc0o1rH7QIxJUM4aaYhaE4g3Dy2eak";

document.getElementById('btn-save').addEventListener('click', async () => {
    const dateEveniment = {
        titlu: document.getElementById('titlu').value,
        oras: document.getElementById('oras').value,
        data_ora: document.getElementById('data_ora').value,
        descriere: document.getElementById('descriere').value,
        imagine_url: document.getElementById('imagine').value,
        video_url: document.getElementById('video').value
    };

    try {
        const response = await fetch(`${SB_URL}/rest/v1/evenimente`, {
            method: 'POST',
            headers: {
                'apikey': SB_KEY,
                'Authorization': `Bearer ${SB_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify(dateEveniment)
        });

        if (response.ok) {
            alert("✅ Succes! Evenimentul a fost publicat.");
            window.location.href = "index.html"; 
        } else {
            const error = await response.json();
            alert("❌ Eroare server: " + error.message);
        }
    } catch (err) {
        alert("❌ Eroare de rețea! Verifică setările CORS în Supabase.");
    }
});
