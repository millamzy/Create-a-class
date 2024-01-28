class DescriptiveState {
    constructor(data) {
      this.data = data;
    }
  
  
  Mean() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
    }
  
    
   Median() {
      const submitedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(submitedData.length / 2);
      if (submitedData.length % 2 === 0) {
        return (submitedData[middle - 1] + submitedData[middle]) / 2;
      } else {
        return submitedData[middle];
      }
    }
  
    
    Mode() {
      const frMap = new Map();
      for (let num of this.data) {
        frMap.set(num, (frMap.get(num) || 0) + 1);
      }
      let mode;
      let maxFrequency = 0;
      for (let [num, frequency] of frMap) {
        if (frequency > maxFrequency) {
          mode = num;
          maxFrequency = frequency;
        }
      }
      return mode;
    }
  }
  
  // Example usage
  const data = [5, 2, 7, 3, 84, 24, 54, 3, 6, 8];
  const stats = new DescriptiveState(data);
  console.log("Mean:", stats.Mean());
  console.log("Median:", stats.Median());
  console.log("Mode:", stats.Mode());
  