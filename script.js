// Navigation switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');
            
            // Remove all active states
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active state
            button.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });
});

// Father's Day card design idea generator
function generateCardIdea(cardType) {
    const cardIdeas = {
        classic: {
            title: "Classic Father's Day Card Design",
            content: `
                <div class="gift-display">
                    <h4>🎨 Design Elements:</h4>
                    <p><b>Color Scheme:</b> Deep blue, brown, or gold for sophisticated appeal</p>
                    <p><b>Typography:</b> Use classic serif fonts for formal elegance</p>
                    <p><b>Decorative Elements:</b> Simple borders, tie patterns, or mustache designs</p>
                    <p><b>Message Ideas:</b> "World's Greatest Dad" or "Thank You for Everything"</p>
                    <h4>💡 Crafting Tips:</h4>
                    <p>• Use high-quality cardstock for premium feel</p>
                    <p>• Add gold foil elements for luxury touch</p>
                    <p>• Leave ample space inside for personal messages</p>
                </div>
            `
        },
        photo: {
            title: "Photo Memory Father's Day Card",
            content: `
                <div class="gift-display">
                    <h4>📸 Design Elements:</h4>
                    <p><b>Photo Selection:</b> Choose 3-5 precious family moments</p>
                    <p><b>Layout Design:</b> Timeline arrangement or collage style</p>
                    <p><b>Color Scheme:</b> Warm beige and cream backgrounds</p>
                    <p><b>Text Content:</b> Add brief memory descriptions for each photo</p>
                    <h4>💡 Crafting Tips:</h4>
                    <p>• Print photos on matte photo paper for best results</p>
                    <p>• Handwrite dates and locations for personal touch</p>
                    <p>• Use photo corners or double-sided tape for attachment</p>
                </div>
            `
        },
        funny: {
            title: "Humorous Father's Day Card Design",
            content: `
                <div class="gift-display">
                    <h4>😄 Design Elements:</h4>
                    <p><b>Color Choice:</b> Bright and lively colors like orange and yellow</p>
                    <p><b>Graphics Design:</b> Cartoon dad characters, funny memes</p>
                    <p><b>Text Style:</b> Use playful fonts and speech bubbles</p>
                    <p><b>Dad Joke Example:</b> "Dad, your jokes make me... (flip page) ...laugh!"</p>
                    <h4>💡 Crafting Tips:</h4>
                    <p>• Use stickers and colored markers for decoration</p>
                    <p>• Design flip surprises or pull-tab interactions</p>
                    <p>• Include dad's favorite catchphrases or quotes</p>
                </div>
            `
        },
        handmade: {
            title: "DIY Handcrafted Father's Day Card",
            content: `
                <div class="gift-display">
                    <h4>✂️ Design Elements:</h4>
                    <p><b>Materials Needed:</b> Colored cardstock, markers, glue, scissors</p>
                    <p><b>Creative Elements:</b> 3D pop-up designs, hand-drawn illustrations</p>
                    <p><b>Personal Decorations:</b> Buttons, ribbons, dried flowers</p>
                    <p><b>Handwritten Text:</b> Write heartfelt messages in your own handwriting</p>
                    <h4>💡 Crafting Tips:</h4>
                    <p>• Include children's handprints or drawings</p>
                    <p>• Create 3D tie or tool shapes</p>
                    <p>• Put love and care into every detail</p>
                </div>
            `
        }
    };

    const ideaOutput = document.getElementById('cardIdea');
    const idea = cardIdeas[cardType];
    
    // Remove all existing card type classes
    ideaOutput.classList.remove('classic', 'photo', 'funny', 'handmade');
    
    // Add the specific card type class for color change
    ideaOutput.classList.add(cardType);
    
    ideaOutput.innerHTML = `
        <h3>${idea.title}</h3>
        ${idea.content}
    `;
    
    // Add animation effect with color transition
    ideaOutput.style.transform = 'scale(0.95)';
    setTimeout(() => {
        ideaOutput.style.transform = 'scale(1)';
    }, 100);
}

// Random father's day gift generator
function generateRandomGift() {
    const gifts = [
        {
            name: "Custom Photo Mug",
            description: "A personalized mug with family photos that brings warmth to dad's daily coffee routine",
            price: "$15-25",
            icon: "☕"
        },
        {
            name: "Personalized Tool Set",
            description: "A custom tool kit for DIY-loving dads with personalized name tags",
            price: "$50-100",
            icon: "🔧"
        },
        {
            name: "Comfort Massage Cushion",
            description: "Perfect relaxation companion after work with multiple massage modes",
            price: "$80-150",
            icon: "💺"
        },
        {
            name: "Premium Classic Books",
            description: "Hardcover editions of classic works by dad's favorite authors",
            price: "$20-40",
            icon: "📚"
        },
        {
            name: "Outdoor BBQ Grill Set",
            description: "High-quality grilling tools perfect for weekend family gatherings",
            price: "$60-120",
            icon: "🍖"
        },
        {
            name: "Smart Health Watch",
            description: "Track fitness and health data to keep dad healthy and motivated",
            price: "$100-300",
            icon: "⌚"
        },
        {
            name: "Premium Whiskey Selection",
            description: "High-quality whiskey perfect for special occasions and celebrations",
            price: "$40-80",
            icon: "🥃"
        },
        {
            name: "Professional Fishing Gear",
            description: "Quality fishing equipment for dads who love the peaceful art of angling",
            price: "$30-70",
            icon: "🎣"
        },
        {
            name: "Custom Leather Wallet",
            description: "Genuine leather wallet with personalized engraving of name or special date",
            price: "$25-60",
            icon: "👝"
        },
        {
            name: "Home Theater Projector",
            description: "Bring the cinema experience home for unforgettable movie nights",
            price: "$200-500",
            icon: "📽️"
        }
    ];

    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    const giftResult = document.getElementById('giftResult');
    
    giftResult.innerHTML = `
        <div class="gift-display">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${randomGift.icon}</div>
            <h3>${randomGift.name}</h3>
            <p style="font-size: 1.1rem; margin: 1rem 0;">${randomGift.description}</p>
            <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; margin-top: 1rem;">
                <p><b>预估价格:</b> ${randomGift.price}</p>
            </div>
            <button class="btn-secondary" onclick="generateRandomGift()" style="margin-top: 1rem; background: rgba(255,255,255,0.3);">
                🎲 Generate Another
            </button>
        </div>
    `;
    
    // Add animation effect
    giftResult.style.transform = 'rotateY(90deg)';
    setTimeout(() => {
        giftResult.style.transform = 'rotateY(0deg)';
    }, 200);
}

// Category-based gift generator
function generateCategoryGift(category) {
    const categoryGifts = {
        tech: [
            {
                name: "Wireless Charger",
                description: "Fast-charging wireless charging pad, clean and elegant design",
                price: "$25-45",
                icon: "🔌"
            },
            {
                name: "Bluetooth Headphones",
                description: "High-quality wireless headphones perfect for work and exercise",
                price: "$50-150",
                icon: "🎧"
            },
            {
                name: "Smart Speaker",
                description: "Voice-controlled smart speaker for convenient music streaming",
                price: "$30-100",
                icon: "🔊"
            }
        ],
        hobby: [
            {
                name: "Model Airplane Kit",
                description: "DIY assembly model for enjoying the fun of building",
                price: "$20-60",
                icon: "✈️"
            },
            {
                name: "Gardening Tool Set",
                description: "Professional gardening tools for creating beautiful gardens",
                price: "$40-80",
                icon: "🌱"
            },
            {
                name: "Oil Painting Supplies",
                description: "Professional oil paint and brush set for artistic expression",
                price: "$30-70",
                icon: "🎨"
            }
        ],
        clothing: [
            {
                name: "Silk Tie",
                description: "High-quality silk tie, perfect for business occasions",
                price: "$30-80",
                icon: "👔"
            },
            {
                name: "Comfortable T-Shirt",
                description: "100% cotton t-shirt, comfortable and breathable for daily wear",
                price: "$15-35",
                icon: "👕"
            },
            {
                name: "Quality Dress Shirt",
                description: "Wrinkle-free business shirt for professional appearance",
                price: "$40-90",
                icon: "👔"
            }
        ],
        experience: [
            {
                name: "Spa Massage Package",
                description: "Professional relaxation massage service to relieve work stress",
                price: "$80-150",
                icon: "💆"
            },
            {
                name: "Culinary Experience Class",
                description: "Learn new cooking skills and enjoy the pleasure of food creation",
                price: "$60-120",
                icon: "👨‍🍳"
            },
            {
                name: "Outdoor Adventure Activity",
                description: "Hiking or camping experience to connect with nature",
                price: "$50-100",
                icon: "🏕️"
            }
        ],
        books: [
            {
                name: "Business Management Books",
                description: "Latest business thinking and management concepts",
                price: "$20-40",
                icon: "📊"
            },
            {
                name: "Historical Biographies",
                description: "Famous people's biographies to understand successful journeys",
                price: "$15-30",
                icon: "📖"
            },
            {
                name: "Technology Frontier Books",
                description: "Latest technology trends and future outlook",
                price: "$25-45",
                icon: "🔬"
            }
        ],
        sports: [
            {
                name: "Workout Gloves",
                description: "Professional fitness gloves to protect hands during exercise",
                price: "$15-30",
                icon: "🧤"
            },
            {
                name: "Running Gear",
                description: "Professional running shoes and athletic wear set",
                price: "$60-150",
                icon: "👟"
            },
            {
                name: "Home Fitness Equipment",
                description: "Home workout equipment for maintaining exercise habits",
                price: "$30-200",
                icon: "🏋️"
            }
        ]
    };

    const gifts = categoryGifts[category];
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    const giftResult = document.getElementById('giftResult');
    
    giftResult.innerHTML = `
        <div class="gift-display">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${randomGift.icon}</div>
            <h3>${randomGift.name}</h3>
            <p style="font-size: 1.1rem; margin: 1rem 0;">${randomGift.description}</p>
            <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 10px; margin-top: 1rem;">
                <p><b>Estimated Price:</b> ${randomGift.price}</p>
                <p><b>Category:</b> ${getCategoryName(category)}</p>
            </div>
            <div style="margin-top: 1rem;">
                <button class="btn-secondary" onclick="generateCategoryGift('${category}')" style="margin-right: 1rem; background: rgba(255,255,255,0.3);">
                    🔄 Try Another from This Category
                </button>
                <button class="btn-secondary" onclick="generateRandomGift()" style="background: rgba(255,255,255,0.3);">
                    🎲 Random Suggestion
                </button>
            </div>
        </div>
    `;
    
    // Add animation effect
    giftResult.style.transform = 'scale(0.8)';
    setTimeout(() => {
        giftResult.style.transform = 'scale(1)';
    }, 200);
}

// Get category name in English
function getCategoryName(category) {
    const names = {
        tech: "Tech & Gadgets",
        hobby: "Hobbies & Crafts", 
        clothing: "Clothing & Style",
        experience: "Experiences",
        books: "Books & Media",
        sports: "Sports & Fitness"
    };
    return names[category] || category;
}

// Add smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize after page load
window.addEventListener('load', function() {
    // Add some interactive tips
    console.log('🎉 Father\'s Day Gift Website loaded successfully!');
    console.log('💝 Thank you for using our service, hope it helps you find the perfect father\'s day gift!');
}); 