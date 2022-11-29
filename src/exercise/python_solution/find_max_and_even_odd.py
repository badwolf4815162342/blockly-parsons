max2 = None
list2 = None
x = None
num = None
max2 = 0
list2 = [5, 2, 8]
for num in list2:
  if num % 2 == 0:
    print('Number is even')
  else:
    print('Number is odd.')
  if num >= max2:
    max2 = num
    print('This is the current max.')
