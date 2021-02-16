sentence = "To be or not to be."

def sentenceCounter(sentence): 
    output = {}

    for letter in sentence: 
        newLetter = letter.lower()
        if (newLetter > "z" and newLetter < "A"): 
            pass
        else: 
            if newLetter in output.keys(): 
                output[newLetter] += 1 
            else: 
                output[newLetter] = 1 

    return output 


