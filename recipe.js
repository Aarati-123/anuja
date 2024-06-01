document.addEventListener('DOMContentLoaded', () => {
    const provinces = {
        province1: ['Sukuti|sukuti.html', 'Tongba|tongba.html', 'Gundruk|gundruk.html'],
        province2: ['Yomari|yomari.html', 'Peda|peda.html', 'Mithila thali|mithila thali.html'],
        province3: ['Newari khaja set|newari khaja set.html', 'Jujudhau|jujudhau.html', 'Chatamari|chatamari.html'],
        province4: ['Thakali khana set|thakali khana set.html', 'Chilla|chilla.html', 'Kachila|kachila.html'],
        province5: ['Teel ko laddu|teel ko laddu.html', 'Bhakka|bhakka.html', 'Thekua|thekua.html'],
        province6: ['Chhurpi|chhurpi.html', 'Sargemba|sargemba.html','Marsi rice|marsi rice.html'],
        province7: ['Gwarcha|gwarcha.html', 'Sisnu|sisnu.html', 'Khir|khir.html']
    };

    const map = document.getElementById('nepalMap');
    const dishesList = document.getElementById('dishesList');

    map.addEventListener('click', (event) => {
        const provinceId = event.target.id;
        const dishes = provinces[provinceId] || [];
        displayDishes(dishes);
    });

    function displayDishes(dishes) {
        dishesList.innerHTML = '';
        dishes.forEach(dish => {
            const dishInfo = dish.split('|');
            const dishName = dishInfo[0];
            const dishURL = dishInfo[1];
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = dishName;
            link.href = dishURL;
            link.target = '_blank';
            li.appendChild(link);
            dishesList.appendChild(li);
        });
    }
});
