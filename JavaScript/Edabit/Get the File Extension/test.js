var chai = require('chai')
var assert = chai.assert

const e = require('./solution.js')

describe('Get the File Extension (unit tests)\n', () => {
    it('[Test 1] Expected ➞ ["jpg", "pdf", "mp3"]', () => 
        assert.deepEqual(
            e.getExtension(
                ["project1.jpg", "project1.pdf", "project1.mp3"]
            ), ["jpg", "pdf", "mp3"]
        )
    )
    it('[Test 2] Expected ➞ ["rb", "cpp", "py", "js"]', () => 
        assert.deepEqual(
            e.getExtension(
                ["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]
            ), ["rb", "cpp", "py", "js"]
        )
    )
    it('[Test 3] Expected ➞ ["html", "css"]', () => 
        assert.deepEqual(
            e.getExtension(
                ["code.html", "code.css"]
            ), ["html", "css"]
        )
    )
    it('[Test 4] Expected ➞ ["java", "java", "java"]', () => 
        assert.deepEqual(
            e.getExtension(
                ["minesweeper.java", "game.java", "my_project.java"]
            ), ["java", "java", "java"]
        )
    )
})

