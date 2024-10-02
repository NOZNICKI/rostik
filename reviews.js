document.addEventListener('DOMContentLoaded', function() {
    const reviewsList = document.getElementById('reviews-list');
    const reviewForm = document.getElementById('review-form');
    const imageInput = document.getElementById('image');
   
    // Завантаження відгуків з localStorage
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.forEach(addReviewToList);


    // Обробка відправки форми
    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
       
        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;
        let imageBase64 = '';


        if (imageInput.files.length > 0) {
            const file = imageInput.files[0];
            const reader = new FileReader();
           
            reader.onloadend = function() {
                imageBase64 = reader.result; // Отримуємо Base64 дані зображення
                saveReview(name, review, imageBase64);
            };
           
            reader.readAsDataURL(file); // Читаємо файл і конвертуємо його в Base64
        } else {
            saveReview(name, review, imageBase64);
        }
    });


    function saveReview(name, review, imageBase64) {
        if (name && review) {
            const newReview = {
                name,
                review,
                date: new Date().toLocaleDateString(),
                image: imageBase64
            };


            // Додавання нового відгуку в список
            addReviewToList(newReview);


            // Збереження у localStorage
            savedReviews.push(newReview);
            localStorage.setItem('reviews', JSON.stringify(savedReviews));


            // Очищення форми
            reviewForm.reset();
        }
    }


    function addReviewToList(review) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${review.name}</strong> (${review.date}):<br>${review.review}`;


        if (review.image) {
            const img = document.createElement('img');
            img.src = review.image;
            img.alt = "Зображення відгуку";
            img.style.maxWidth = '200px';
            img.style.marginTop = '10px';
            li.appendChild(img);
        }


        reviewsList.appendChild(li);
    }
});


