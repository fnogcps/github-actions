var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Retrieve the Subreddit (unit tests)\n', () => {
    it('[Test 1] Expected: "relationships"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/relationships/"), 
            "relationships"
        )
    )
    it('[Test 2] Expected: "mildlyinteresting"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/mildlyinteresting/"), 
            "mildlyinteresting"
        )
    )
    it('[Test 3] Expected: "funny"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/funny/"), 
            "funny"
        )
    )
    it('[Test 4] Expected: "CrappyDesign"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/CrappyDesign/"), 
            "CrappyDesign"
        )
    )
    it('[Test 5] Expected: "confession"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/confession/"), 
            "confession"
        )
    )
    it('[Test 6] Expected: "AskMen"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/AskMen/"), 
            "AskMen"
        )
    )
    it('[Test 7] Expected: "comics"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/comics/"), 
            "comics"
        )
    )
    it('[Test 8] Expected: "lifehacks"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/lifehacks/"), 
            "lifehacks"
        )
    )
    it('[Test 9] Expected: "wholesomememes"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/wholesomememes/"), 
            "wholesomememes"
        )
    )
    it('[Test 10] Expected: "iamverysmart"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/iamverysmart/"), 
            "iamverysmart"
        )
    )
    it('[Test 11] Expected: "starterpacks"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/starterpacks/"), 
            "starterpacks"
        )
    )
    it('[Test 12] Expected: "awww"', () => 
        assert.equal(
            e.subReddit("https://www.reddit.com/r/awww/"), 
            "awww"
        )
    )
})
