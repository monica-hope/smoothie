 class Smoothie {
            constructor(base, fruits, addins, size, notes) {
                this.base = base;
                this.fruits = fruits;
                this.addins = addins;
                this.size = size;
                this.notes = notes;
            }
        
   getDescription() {
                let description = `Your ${this.size} smoothie has a base of ${this.base}.`;

                if (this.fruits.length > 0) {
                    description += ` It includes: ${this.fruits.join(', ')}.`;
                }

                if (this.addins.length > 0) {
                    description += ` We've added: ${this.addins.join(', ')}.`;
                }

                if (this.notes) {
                    description += ` Special notes: "${this.notes}".`;
                }
                
                return description;
            }
       
     calculatePrice() {
                let totalPrice = 0;

                // Base price
                const basePriceElement = document.querySelector(`#base option[value="${this.base}"]`);
                totalPrice += parseFloat(basePriceElement.dataset.price);

                // Fruits price
                document.querySelectorAll('input[name="fruits"]:checked').forEach(fruit => {
                    totalPrice += parseFloat(fruit.dataset.price);
                });

                // Add-ins price
                document.querySelectorAll('input[name="addins"]:checked').forEach(addin => {
                    totalPrice += parseFloat(addin.dataset.price);
                });

                // Size price
                const sizePriceElement = document.querySelector(`input[name="size"][value="${this.size}"]`);
                totalPrice += parseFloat(sizePriceElement.dataset.price);

                return totalPrice.toFixed(2);
            }
        }
    
        
        
        