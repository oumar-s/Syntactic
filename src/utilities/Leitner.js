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
  
    // Move an item to the next box.
    moveToNextBox(item) {
      if (this.currentBox < this.boxes.length - 1) {
        this.boxes[this.currentBox].splice(this.boxes[this.currentBox].indexOf(item), 1);
        //this.currentBox++;
        this.boxes[this.currentBox + 1].push(item);
      }
    }
  
    // Move an item back to the first box (box 0).
    moveToFirstBox(item) {
      this.boxes[this.currentBox].splice(this.boxes[this.currentBox].indexOf(item), 1);
      this.currentBox = 0;
      this.boxes[0].push(item);
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
  
  // Example usage:
//   const leitner = new LeitnerSystem(3); // Create a Leitner System with 3 boxes
  
//   leitner.addItem("Item 1");
//   leitner.addItem("Item 2");
//   leitner.addItem("Item 3");
  
//   console.log("Review items in order:");
//   while (true) {
//     const item = leitner.getNextItemToReview();
//     if (item === null) {
//       break;
//     }
  
//     console.log("Reviewing", item);
//     // Simulate the user's response (e.g., answer correctly or incorrectly).
//     if (Math.random() < 0.5) {
//       leitner.moveToNextBox(item); // Move to the next box.
//     } else {
//       leitner.moveToFirstBox(item); // Move back to the first box.
//     }
//   }