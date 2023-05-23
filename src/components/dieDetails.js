const numOfDie = 10;
let dieArray = []
for (let i=0; i<numOfDie; i++) {
    dieArray.push(
      {
        key: i,
        id: i,
        hold: false,
        value: ""
      }
      )
    }
export default dieArray