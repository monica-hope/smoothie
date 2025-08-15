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
       
        
        
        
        }

