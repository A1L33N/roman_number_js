describe("romanNumeral", function() {
  it('can convert years that are multiples of 1000', function() {
    expect(romanNumeral(3000)).to.eql(["M", "M", "M"]);
  });

  it('can convert years that are multiples of 500', function() {
    expect(romanNumeral(3500)).to.eql(["M", "M", "M", "D"]);
  });

  it('can convert years that are multiples of 100', function(){
    expect(romanNumeral(3600)).to.eql(['M', 'M', 'M', 'D', 'C'])
  });

  it('can convert years that are multiples of 50', function(){
    expect(romanNumeral(3650)).to.eql(['M', 'M', 'M', 'D', 'C', 'L'])
  });

  it('can convert years that are multiples of 10', function(){
    expect(romanNumeral(3660)).to.eql(['M', 'M', 'M', 'D', 'C', 'L', 'X'])
  });

  it('can convert years that are multiples of 5', function(){
    expect(romanNumeral(3665)).to.eql(['M', 'M', 'M', 'D', 'C', 'L', 'X', 'V'])
  });

  it('can convert years that are multiples of 1', function(){
    expect(romanNumeral(3666)).to.eql(['M', 'M', 'M', 'D', 'C', 'L', 'X', 'V', 'I'])
  });


});
