describe('first test', function(){
  it('first test', function() {
    expect(add(4,5)).to.equal(9);
  })
})

describe('willBeAsync', () => {
  it('returns hello', (done) => {
    willBeAsync(function(data){
      expect(data).to.equal("hello");
      done();
    })
  })
})
