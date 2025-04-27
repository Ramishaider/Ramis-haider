document.addEventListener('DOMContentLoaded', function() {
    // Add click event to all buy buttons
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const card = this.closest('.cd-card');
            const album = card.querySelector('.album-title').textContent;
            const artist = card.querySelector('.artist').textContent;
            const price = card.querySelector('.price').textContent;
            
            // Visual feedback
            this.textContent = 'Added to Cart!';
            this.style.backgroundColor = '#4BB543';
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.textContent = 'Buy Now';
                this.style.backgroundColor = '';
                
                // Classic cards need special reset
                if (card.classList.contains('classic')) {
                    this.style.backgroundColor = '#8B6B4D';
                }
                if (card.classList.contains('pop')) {
                    this.style.backgroundColor = '#FF6B6B';
                }
                if (card.classList.contains('sufi')) {
                    this.style.backgroundColor = '#6B4226';
                }
                if (card.classList.contains('instrumental')) {
                    this.style.backgroundColor = '#6B8EAF';
                }
            }, 2000);
            
            console.log(`Added to cart: ${album} by ${artist} (${price})`);
            
            // In a real e-commerce site, you would:
            // 1. Add item to shopping cart
            // 2. Update cart counter
            // 3. Possibly show a notification
        });
    });
    
    // Make cards keyboard accessible
    const cards = document.querySelectorAll('.cd-card');
    
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                this.querySelector('.buy-btn').click();
            }
        });
    });
});


document.addEventListener('DOMContentLoaded'), function() {
    // Cart functionality
    const cartCount = document.querySelector('.cart-count');
    const buyButtons = document.querySelectorAll('.buy-btn');
    let cartItems = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItems++;
            cartCount.textContent = cartItems;
            
            // Visual feedback
            const card = this.closest('.album-card');
            const albumTitle = card.querySelector('h3').textContent;
            
            this.textContent = 'Added!';
            this.style.backgroundColor = '#4BB543';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.style.backgroundColor = '';
            }, 2000);
            
            console.log(`Added to cart: ${albumTitle}`);
        });
    });

    // Play button hover effect
    const playButtons = document.querySelectorAll}