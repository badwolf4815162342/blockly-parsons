num_to_guess = None
counter = None
guess_list = None
guess = None
num_to_guess = 7
counter = 1
guess_list = [4, 9, -1]
guess = guess_list[int(counter - 1)]
while guess != -1 and guess != num_to_guess:
  if guess > num_to_guess:
    print('Too high ...')
  else:
    print('Too low ...')
  counter = counter + 1
  guess = guess_list[int(counter - 1)]
if guess == num_to_guess:
  print('Right! Number of Tries: ' + str(counter))