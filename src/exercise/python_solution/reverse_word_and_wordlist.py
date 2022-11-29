words = None
new_word = None
new_words = None
word = None
letter = None
words = ['Once', 'upon', 'a', 'time', 'in', 'oppositeland']
new_word = ''
new_words = []
for word in words:
  for letter in word:
    new_word = str(new_word) + str(letter)
  new_words.insert(0, word)
print(','.join(new_words))