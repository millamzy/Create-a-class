class DescriptiveState {
    constructor(data) {
      this.data = data;
    }
  
    range() {
      return Math.max(...this.data) - Math.min(...this.data);
    }
  
    interquartile() {
      const A = this.quantile(0.25);
      const B = this.quantile(0.75);
      return B - A;
    }
  
    variance() {
      const mean = this.mean();
      const sumDifferences = this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
      return sumDifferences / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    meanAbsoluteDeviation() {
      const mean = this.mean();
      const sumOfAbsoluteDifferences = this.data.reduce((acc, val) => acc + Math.abs(val - mean), 0);
      return sumOfAbsoluteDifferences / this.data.length;
    }
  
    mean() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
    }
  
    quantile(p) {
      const index = (this.data.length - 1) * p;
      const lowerIndex = Math.floor(index);
      const upperIndex = Math.ceil(index);
      return this.data[lowerIndex] + (this.data[upperIndex] - this.data[lowerIndex]) * (index - lowerIndex);
    }
  }
  
  // Example usage
  const data = [43, 83, 63, 53, 33, 23, 83, 93];
  const stats = new DescriptiveState(data);
  console.log("Range:", stats.range());
  console.log("Interquartile Range:", stats.interquartile());
  console.log("Variance:", stats.variance());
  console.log("Standard Deviation:", stats.standardDeviation());
  console.log("Mean Absolute Deviation:", stats.meanAbsoluteDeviation());
  