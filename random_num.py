def randomNum(x):
     st = ""
     Sum = 1
     
     if x != 1 and x > 1:
          
          for k in range(1,x+1):
               Sum *= k
               
          Sum = str(Sum)[0]
          
          if str(Sum) not in st:
               st += str(Sum)
               return randomNum(x-1)
          
     if str(Sum) in st:
          return st + "0"
     if x == 1 :
          return st + "1"
     if x < 1:
          #return st + "0"
          pass
    
          
print(randomNum(int(input())))
