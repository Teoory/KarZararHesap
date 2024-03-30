let count = 1;

function addInput() {
    count++;
    const inputArea = document.getElementById('inputArea');

    const div = document.createElement('div');
    div.classList.add('buttonArea');
    div.innerHTML = `
        <input type="number" class="amount" placeholder="Miktarı girin...">
    `;
    inputArea.appendChild(div);
}

function deleteInput() {
    if (count > 1) {
        count--;
        const inputArea = document.getElementById('inputArea');
        inputArea.removeChild(inputArea.lastElementChild);
        hesapla();
    }
}

function hesapla() {
    let totalAmount = 0;

    const amountInputs = document.querySelectorAll('.amount');
    amountInputs.forEach(input => {
        const amount = parseFloat(input.value);
        if (!isNaN(amount)) {
            totalAmount += amount;
        }
    });

    const kar = totalAmount * 0.25;
    const karliFiyat = totalAmount + kar;
    const vergi = karliFiyat * 0.15;
    const sonFiyat = karliFiyat + vergi;

    document.getElementById('result').innerHTML = `
        <p class="info"><strong>Kar (25% eklenecek kar):</strong> <span class="tb">${kar.toFixed(2)}</span></p>
        <p class="danger"><strong>Vergi (Karlı fiyata 15% eklenecek):</strong> <span class="tb">${vergi.toFixed(2)}</span></p>
        <p class="total"><strong>Toplam Fiyat (Karlı Fiyat + Vergi):</strong> <span class="tb">${sonFiyat.toFixed(2)}</span></p>
    `;
}
