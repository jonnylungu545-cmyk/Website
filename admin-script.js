const SB_URL = "https://exsrkldqdatytexqgeey.supabase.co/rest/v1/";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4c3JrbGRxZGF0eXRleHFnZWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NTc4ODUsImV4cCI6MjA5MjUzMzg4NX0.i3YOfcuojy3YEuc0o1rH7QIxJUM4aaYhaE4g3Dy2eak"; // Lipsește cheia ta aici între ghilimele

document.getElementById('btn-save').addEventListener('click', async () => {
    const titlu = document.getElementById('titlu').value;
    const oras = document.getElementById('oras').value;
    const data_ora = document.getElementById('data_ora').value;
    const descriere = document.getElementById('descriere').value;
    const imagine_url = document.getElementById('imagine').value;
    const video_url = document.getElementById('video').value;

    if(!titlu || !oras) {
        alert("Te rog completează titlul și orașul!");
        return;
    }

    const dateEveniment = {
        titlu: titlu,
        oras: oras,
        data_ora: data_ora,
        descriere: descriere,
        imagine_url: imagine_url,
        video_url: video_url
    };

    const response = await fetch(`${SB_URL}evenimente`, {
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
        alert("Eveniment publicat!");
        window.location.reload();
    } else {
        alert("Eroare la salvare!");
    }
});
