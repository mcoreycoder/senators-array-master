import * as Exercise from '../src/'

describe(`Reducing`, () => {
  
  it(`should out a single senator from a filter of your birthplace`, () => {
    const results = Exercise.birthplaceSeniorSenator()
    expect(results).to.not.be.false()
    expect(results).to.be.an.object()
    expect(results.senator_rank).to.be.equal('senior')
  })
})
