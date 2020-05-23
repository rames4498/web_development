def convert(amt):
     words = [" "]*91
     words[0] = ''
     words[1] = 'One'
     words[2] = 'Two'
     words[3] = 'Three'
     words[4] = 'Four'
     words[5] = 'Five'
     words[6] = 'Six'
     words[7] = 'Seven'
     words[8] = 'Eight'
     words[9] = 'Nine'
     words[10] = 'Ten'
     words[11] = 'Eleven'
     words[12] = 'Twelve'
     words[13] = 'Thirteen'
     words[14] = 'Fourteen'
     words[15] = 'Fifteen'
     words[16] = 'Sixteen'
     words[17] = 'Seventeen'
     words[18] = 'Eighteen'
     words[19] = 'Nineteen'
     words[20] = 'Twenty'
     words[30] = 'Thirty'
     words[40] = 'Forty'
     words[50] = 'Fifty'
     words[60] = 'Sixty'
     words[70] = 'Seventy'
     words[80] = 'Eighty'
     words[90] = 'Ninety'
     amt = str(amt)
     #amount = amount.toString();
     atemp = amt.split(".")
     print(atemp)
     
     #number = atemp[0].split(",").join("")
     number = atemp[0].split(",")
     number = "".join(number)
     print(number)
    
     n_length = len(number)
     words_string = ""
     if (n_length <= 9):
          n_array = [0]*9
          received_n_array = [0]*9
          #for (var i = 0; i < n_length; i++)
          for i in range(n_length):
               print(number[i:1])
               if i<1:
                    print(number[i:1])
                    received_n_array[i] = number[i:1]
                    #received_n_array[i] = number.substr(i, 1)
               elif i==1:
                    received_n_array[i] = number[i]     
               else:
                    received_n_array[i] = number[1:i]
          print(received_n_array)
          #for (var i = 9 - n_length, j = 0; i < 9; i++, j++)
          j = 0
          for i in range(9-n_length,9):
               j+= 1
               n_array[i] = received_n_array[j]
          #for (var i = 0, j = 1; i < 9; i++, j++)
          k = 1
          for i in range(9):
               k += 1
               if (i == 0 | i == 2 | i == 4 | i == 7):
                    if (n_array[i] == 1):
                         n_array[j] = 10 + int(n_array[j])
                         n_array[i] = 0
          value = ""
          #for (var i = 0; i < 9; i++)
          for i in range(9):
               
               if (i == 0 | i == 2 | i == 4 | i == 7):
                    value = n_array[i] * 10
               else:
                    value = n_array[i]
               print(value)
               if (value != 0):
                    if words[value] != " ":
                         w = words[value]
                         w = str(w)+ " "
                         words_string += w
                    #words_string += words[value] + " "
                    
                 
               if ((i == 1 & value != 0) | (i == 0 & value != 0 & n_array[i + 1] == 0)):
                   words_string += "Crores "
            
               if ((i == 3 & value != 0) | (i == 2 & value != 0 & n_array[i + 1] == 0)):
                   words_string += "Lakhs "

               if ((i == 5 & value != 0) | (i == 4 & value != 0 & n_array[i + 1] == 0)):
                   words_string += "Thousand "

               if (i == 6 & value != 0 & (n_array[i + 1] != 0 & n_array[i + 2] != 0)):
                   words_string += "Hundred and "
               elif (i == 6 & value != 0):
                   words_string += "Hundred "
          
          words_string = words_string.split("  ").join(" ")
    
        
     return words_string

print(convert(23543))
