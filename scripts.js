function updateBarbers() {
    var branch = document.getElementById('branch').value;
    var barberSelect = document.getElementById('barber');
    barberSelect.innerHTML = '';

    var barbers = [];
    if (branch === 'Udi') {
        barbers = [
            { value: 'Ruben_Torrico', text: 'Ruben Torrico' },
            { value: 'Osvaldo_Carapi', text: 'Osvaldo Carapi' }
        ];
    } else if (branch === 'Chonta') {
        barbers = [
            { value: 'Diego_Suarez', text: 'Diego Suarez' },
            { value: 'Martin_Torrico', text: 'Martin Torrico' },
            { value: 'Mario_Carapi', text: 'Mario Carapi' }
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