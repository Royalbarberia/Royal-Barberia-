function updateBarbers() {
    var branch = document.getElementById('bra').value;
    var barberSelect = document.getElementById('barber');
    barberSelect.innerHTML = '';

    var barbers = [];
    if (branch === 'Udi') {
        barbers = [
            { value: 'Ruben Torrico', text: 'Ruben Torrico' },
            { value: 'Osvaldo Carapi', text: 'Osvaldo Carapi' }
        ];
    } else if (branch === 'Chonta') {
        barbers = [
            { value: 'Diego Suarez', text: 'Diego Suarez' },
            { value: 'Martin Torrico', text: 'Martin Torrico' },
            { value: 'Mario Carapi', text: 'Mario Carapi' }
        ];
    }

    var placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.text = 'Selecciona un barbero';
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    barberSelect.add(placeholderOption);

    barbers.forEach(function(barber) {
        var option = document.createElement('option');
        option.value = barber.value;
        option.text = barber.text;
        barberSelect.add(option);
    });
}
