#! /usr/bin/python

import math

def sols(notamea, dorinta, count):
	limin=dorinta-0.5
	average=limin*(count+1)-notamea
	minnot=math.floor(average/count)
	mult=math.ceil(average-minnot*count)
	print(f"ai {notamea} doresti {dorinta} ia {count} note din care {mult} de {minnot + 1} si {count-mult} de {minnot}")

if __name__=="__main__":
	for notamea in [4, 5, 6, 7, 8, 9]:
		for dorinta in [9, 10]:
			for count in [1, 2, 3, 4]:
				sols(notamea, dorinta, count)

