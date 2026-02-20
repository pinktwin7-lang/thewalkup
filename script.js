// Cocktails Data
const cocktails = [
    // Smoky & Mezcal
    {
        name: "Mezcal Negroni",
        category: "smoky",
        categoryName: "Smoky & Mezcal",
        ingredients: ["1 oz mezcal", "1 oz Campari", "1 oz sweet vermouth"]
    },
    {
        name: "Naked & Famous",
        category: "smoky",
        categoryName: "Smoky & Mezcal",
        ingredients: ["3/4 oz mezcal", "3/4 oz yellow Chartreuse", "3/4 oz Aperol", "3/4 oz lime juice"]
    },
    {
        name: "Division Bell",
        category: "smoky",
        categoryName: "Smoky & Mezcal",
        ingredients: ["1 oz mezcal", "3/4 oz Aperol", "1/2 oz Amaro Nonino", "3/4 oz lime juice"]
    },
    {
        name: "Mezcal Old Fashioned",
        category: "smoky",
        categoryName: "Smoky & Mezcal",
        ingredients: ["2 oz mezcal", "1/4 oz agave syrup or simple syrup", "2 dashes Angostura bitters"]
    },
    {
        name: "Mezcal Mule",
        category: "smoky",
        categoryName: "Smoky & Mezcal",
        ingredients: ["2 oz mezcal", "1/2 oz lime juice", "Top with ginger beer"]
    },
    {
        name: "Falernum Daiquiri (Mezcal)",
        category: "smoky",
        categoryName: "Smoky & Mezcal",
        ingredients: ["2 oz mezcal", "3/4 oz lime juice", "1/2 oz falernum", "1/4 oz simple syrup"]
    },
    {
        name: "Tongue Twister",
        category: "smoky",
        categoryName: "Smoky & Mezcal",
        ingredients: ["1 oz mezcal", "1 oz falernum", "1 oz green chartreuse", "1 oz lime juice"]
    },
    // Chartreuse & Herbal
    {
        name: "Last Word",
        category: "chartreuse",
        categoryName: "Chartreuse & Herbal",
        ingredients: ["3/4 oz gin", "3/4 oz green Chartreuse", "3/4 oz maraschino liqueur", "3/4 oz lime juice"]
    },
    {
        name: "Final Ward",
        category: "chartreuse",
        categoryName: "Chartreuse & Herbal",
        ingredients: ["3/4 oz rye whiskey", "3/4 oz green Chartreuse", "3/4 oz maraschino liqueur", "3/4 oz lemon juice"]
    },
    {
        name: "Monte Cassino",
        category: "chartreuse",
        categoryName: "Chartreuse & Herbal",
        ingredients: ["3/4 oz rye whiskey", "3/4 oz yellow Chartreuse", "3/4 oz Benedictine", "3/4 oz lemon juice"]
    },
    {
        name: "Chartreuse Swizzle",
        category: "chartreuse",
        categoryName: "Chartreuse & Herbal",
        ingredients: ["1 1/2 oz green Chartreuse", "3/4 oz falernum", "3/4 oz lime juice", "1/4 oz simple syrup"]
    },
    {
        name: "Bijou",
        category: "chartreuse",
        categoryName: "Chartreuse & Herbal",
        ingredients: ["1 oz gin", "1 oz sweet vermouth", "1 oz green Chartreuse"]
    },
    {
        name: "Chartreuse Martini",
        category: "chartreuse",
        categoryName: "Chartreuse & Herbal",
        ingredients: ["2 oz gin", "1/2 oz dry vermouth", "1 barspoon green Chartreuse"]
    },
    {
        name: "Champs-Élysées",
        category: "chartreuse",
        categoryName: "Chartreuse & Herbal",
        ingredients: ["2 oz cognac or whiskey", "1/2 oz green Chartreuse", "1/2 oz lemon juice", "1/4 oz simple syrup", "2 dashes Angostura bitters"]
    },
    {
        name: "Genesis",
        category: "chartreuse",
        categoryName: "Chartreuse & Herbal",
        ingredients: ["2 oz gin", "1/2 oz Lillet", "1 barspoon Yellow Chartreuse"]
    },
    // Tiki & Tropical
    {
        name: "Mai Tai (Mezcal Variation)",
        category: "tiki",
        categoryName: "Tiki & Tropical",
        ingredients: ["2 oz mezcal", "3/4 oz lime juice", "1/2 oz curaçao", "1/2 oz orgeat"]
    },
    {
        name: "Saturn",
        category: "tiki",
        categoryName: "Tiki & Tropical",
        ingredients: ["1 1/4 oz gin", "1/2 oz lemon juice", "1/2 oz orgeat", "1/4 oz falernum", "1/4 oz simple syrup"]
    },
    {
        name: "Falernum Mule",
        category: "tiki",
        categoryName: "Tiki & Tropical",
        ingredients: ["2 oz vodka or mezcal", "1/2 oz lime juice", "1/2 oz falernum", "Top with ginger beer"]
    },
    // Light & Spritz
    {
        name: "Lillet Spritz",
        category: "spritz",
        categoryName: "Light & Spritz",
        ingredients: ["3 oz Lillet Blanc", "3 oz Prosecco", "1 oz soda"]
    },
    {
        name: "Campari Spritz",
        category: "spritz",
        categoryName: "Light & Spritz",
        ingredients: ["2 oz Campari", "3 oz Prosecco", "1 oz soda"]
    },
    {
        name: "Amaro Spritz",
        category: "spritz",
        categoryName: "Light & Spritz",
        ingredients: ["2 oz Amaro Nonino", "3 oz Prosecco", "1 oz soda"]
    },
    {
        name: "Ginja Spritz",
        category: "spritz",
        categoryName: "Light & Spritz",
        ingredients: ["2 oz Ginja", "3 oz Prosecco"]
    },
    {
        name: "Cucumber Gin & Tonic",
        category: "spritz",
        categoryName: "Light & Spritz",
        ingredients: ["2 oz gin", "Top with tonic", "2–3 cucumber slices", "1/2 oz lime juice"]
    },
    // Sours & Citrus
    {
        name: "New York Sour",
        category: "sours",
        categoryName: "Sours & Citrus",
        ingredients: ["2 oz whiskey", "3/4 oz lemon juice", "1/2 oz simple syrup", "1/2 oz red wine float"]
    },
    {
        name: "Cinnamon Whiskey Sour",
        category: "sours",
        categoryName: "Sours & Citrus",
        ingredients: ["2 oz whiskey", "3/4 oz lemon juice", "1/2 oz cinnamon syrup", "1 egg white (optional)"]
    },
    {
        name: "Amaretto Sour",
        category: "sours",
        categoryName: "Sours & Citrus",
        ingredients: ["1 1/2 oz amaretto", "3/4 oz lemon juice", "1/4 oz simple syrup", "1 oz whiskey (optional)"]
    },
    {
        name: "Amaro Sour",
        category: "sours",
        categoryName: "Sours & Citrus",
        ingredients: ["1 1/2 oz amaro", "1/2 oz whiskey", "3/4 oz lemon juice", "1/2 oz simple syrup"]
    },
    {
        name: "Paper Plane",
        category: "sours",
        categoryName: "Sours & Citrus",
        ingredients: ["3/4 oz bourbon", "3/4 oz Amaro Nonino", "3/4 oz Aperol", "3/4 oz lemon juice"]
    },
    {
        name: "Corpse Reviver No. 2",
        category: "sours",
        categoryName: "Sours & Citrus",
        ingredients: ["3/4 oz gin", "3/4 oz Lillet Blanc", "3/4 oz curaçao", "3/4 oz lemon juice", "Absinthe rinse (optional)"]
    },
    // Bitter & Boozy
    {
        name: "Negroni",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["1 oz gin", "1 oz Campari", "1 oz sweet vermouth"]
    },
    {
        name: "Boulevardier",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["1 1/2 oz bourbon or rye", "1 oz Campari", "1 oz sweet vermouth"]
    },
    {
        name: "Old Pal",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["1 1/2 oz rye whiskey", "3/4 oz Campari", "3/4 oz dry vermouth"]
    },
    {
        name: "Americano",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["1 oz Campari", "1 oz sweet vermouth", "Top with soda"]
    },
    {
        name: "Manhattan",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["2 oz rye whiskey", "1 oz sweet vermouth", "2 dashes Angostura bitters"]
    },
    {
        name: "Black Manhattan",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["2 oz rye whiskey", "1 oz Amaro Nonino", "2 dashes Angostura bitters"]
    },
    {
        name: "Little Italy",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["2 oz rye whiskey", "3/4 oz sweet vermouth", "1/4 oz Cynar or amaro"]
    },
    {
        name: "Toronto",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["2 oz rye whiskey", "1/4 oz Fernet-Branca", "1/4 oz simple syrup", "2 dashes Angostura bitters"]
    },
    {
        name: "Old Fashioned",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["2 oz whiskey", "1/4 oz simple syrup or 1 sugar cube", "2 dashes Angostura bitters"]
    },
    {
        name: "Improved Whiskey Cocktail",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["2 oz rye whiskey", "1/4 oz maraschino liqueur", "1/4 oz simple syrup", "1 dash Angostura bitters", "1 dash absinthe or barspoon Chartreuse"]
    },
    {
        name: "Sazerac (No Absinthe)",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["2 oz rye whiskey", "1 sugar cube or 1/4 oz simple syrup", "2 dashes Peychaud's bitters", "Barspoon Chartreuse"]
    },
    {
        name: "Godfather",
        category: "bitter",
        categoryName: "Bitter & Boozy",
        ingredients: ["2 oz whiskey", "1/2 oz amaretto"]
    },
    // Tequila
    {
        name: "Tequila Negroni",
        category: "tequila",
        categoryName: "Tequila",
        ingredients: ["1 oz tequila", "1 oz Campari", "1 oz sweet vermouth"]
    },
    {
        name: "Mexican Manhattan",
        category: "tequila",
        categoryName: "Tequila",
        ingredients: ["2 oz tequila", "1 oz sweet vermouth", "2 dashes Angostura bitters"]
    },
    {
        name: "Tequila Old Fashioned",
        category: "tequila",
        categoryName: "Tequila",
        ingredients: ["2 oz tequila", "1/4 oz simple syrup", "2 dashes Angostura bitters"]
    }
];

// Group cocktails by category
function groupCocktailsByCategory() {
    const categories = {};

    cocktails.forEach(cocktail => {
        if (!categories[cocktail.category]) {
            categories[cocktail.category] = {
                name: cocktail.categoryName,
                cocktails: []
            };
        }
        categories[cocktail.category].cocktails.push(cocktail);
    });

    return categories;
}

// Render Cocktails
function renderCocktails(searchTerm = '') {
    const cocktailsList = document.getElementById('cocktailsList');
    const groupedCocktails = groupCocktailsByCategory();

    let html = '';

    Object.keys(groupedCocktails).forEach(category => {
        const categoryData = groupedCocktails[category];

        // Filter cocktails based on search term
        const filteredCocktails = categoryData.cocktails.filter(cocktail => {
            if (!searchTerm) return true;

            const searchLower = searchTerm.toLowerCase();
            const nameMatch = cocktail.name.toLowerCase().includes(searchLower);
            const ingredientsMatch = cocktail.ingredients.some(ing =>
                ing.toLowerCase().includes(searchLower)
            );

            return nameMatch || ingredientsMatch;
        });

        // Only show category if it has matching cocktails
        if (filteredCocktails.length > 0) {
            html += `
                <div class="category-section">
                    <h3 class="category-header">${categoryData.name}</h3>
                    <div class="category-items">
            `;

            filteredCocktails.forEach(cocktail => {
                const ingredientsText = cocktail.ingredients.join(' / ');

                html += `
                    <div class="cocktail-item">
                        <h4 class="cocktail-name">${cocktail.name}</h4>
                        <p class="cocktail-ingredients">${ingredientsText}</p>
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        }
    });

    // Show message if no results
    if (html === '' && searchTerm) {
        html = '<p style="text-align: center; color: rgba(242, 234, 216, 0.5); margin-top: 3rem;">No cocktails found</p>';
    }

    cocktailsList.innerHTML = html;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderCocktails();

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderCocktails(e.target.value);
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
