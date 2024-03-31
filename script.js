let count = 1;
let netkar = 0.25;

document.addEventListener('input', hesapla);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addInput();
    }
})

function addInput() {
    count++;
    const inputArea = document.getElementById('inputArea');

    const div = document.createElement('div');
    div.classList.add('buttonArea');
    div.innerHTML = `
        <input type="number" class="amount" placeholder="Miktarı girin...">
    `;
    inputArea.appendChild(div);
    const newInput = div.querySelector('.amount');
    newInput.focus();
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

    const kar = totalAmount * netkar;
    const karliFiyat = totalAmount + kar;
    const vergi = karliFiyat * 0.15;
    const sonFiyat = karliFiyat + vergi;

    document.getElementById('result').innerHTML = `
        <p class="info"><strong>Kar ve Vergisiz Toplam:</strong> <span class="tb">${totalAmount.toFixed(0)} $</span></p>
        <p class="danger1"><strong>Kar (${(netkar * 100).toFixed(0)}% eklenecek kar):</strong> <span class="tb">${kar.toFixed(2)} $ <span style="color: white;">|</span><span style="color: white; font-size: x-small;"> Toplam:</span> ${karliFiyat.toFixed(2)} $</span></p>
        <p class="danger"><strong>Vergi (Karlı fiyata 15% eklenecek):</strong> <span class="tb">${vergi.toFixed(2)} $</span></p>
        <p class="total"><strong>Toplam Fiyat (Karlı Fiyat + Vergi):</strong> <span class="tb">${sonFiyat.toFixed(2)} $</span></p>
    `;
}

function arttir() {
    netkar += 0.05;
    document.getElementById('netkar').value = (netkar * 100).toFixed(0); // Kar oranını güncelle
    hesapla();
}

function azalt() {
    if (netkar <= 0.05) return;
    netkar -= 0.05;
    document.getElementById('netkar').value = (netkar * 100).toFixed(0); // Kar oranını güncelle
    hesapla();
}
