//A simple spaced repetition algorithm based on the the Leitner System.
class LeitnerSystem {
    constructor() {
      this.boxes = Array.from({ length: 3 }, () => []);
      this.currentBox = 0;
    }
  
    // Add an item to the first box (box 0).
    addItem(item) {
      this.boxes[0].push(item);
    }
  
moveToNextBox(item) {
  if (this.currentBox < this.boxes.length - 1) {
    const itemIndex = this.findItemIndexById(this.boxes[this.currentBox], item.id);
    console.log("index of item: ", itemIndex);
    if (itemIndex !== -1) {
      this.boxes[this.currentBox].splice(itemIndex, 1);
      this.boxes[this.currentBox + 1].push(item);
    }
  }
}

// Move an item back to the first box (box 0).
moveToFirstBox(item) {
  const itemIndex = this.findItemIndexById(this.boxes[this.currentBox], item.id);
  console.log("index of item: ", itemIndex);
  if (itemIndex !== -1) {
    this.boxes[this.currentBox].splice(itemIndex, 1);
    this.currentBox = 0;
    this.boxes[0].push(item);
  }
}

// Helper method to find an item by its unique identifier (e.g., 'id' property).
findItemIndexById(box, itemId) {
  for (let i = 0; i < box.length; i++) {
    if (box[i].id === itemId) {
      return i;
    }
  }
  return -1; // Item not found
}

  
    // Get the next item to review from the current box.
    getNextItemToReview() {
      if (this.currentBox === 0 && this.boxes[0].length > 0) {
        return this.boxes[0][0];
      } else if (this.boxes[this.currentBox].length > 0) {
        return this.boxes[this.currentBox][0];
      } else {
        // If the current box is empty, move to the next box.
        if (this.currentBox < this.boxes.length - 1) {
          this.currentBox++;
          return this.getNextItemToReview();
        } else {
          // If all boxes are empty, return null to indicate there are no more items to review.
          return null;
        }
      }
    }
  }

  export default LeitnerSystem;