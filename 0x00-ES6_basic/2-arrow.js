let getNeighborhoodsList6 = () => {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  let self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
