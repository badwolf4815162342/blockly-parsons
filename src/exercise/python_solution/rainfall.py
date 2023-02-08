day = None
sum_rain = None
rain = None
count = None
avg = None
def text_prompt(msg):
  try:
    return raw_input(msg)
  except NameError:
    return input(msg)
sum_rain = 0
rain = text_prompt('Type in a list of numbers.')
count = 0
for day in rain:
  if day > 0:
    count = count + 1
    sum_rain = sum_rain + day
if count > 0:
  avg = sum_rain / count
  print('Avg =' + str(avg))
else:
  print('no rain')