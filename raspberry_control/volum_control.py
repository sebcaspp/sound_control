from gpiozero import DigitalOutputDevice as Output 
from time import sleep

inc     = Output(14)
up_down = Output(15)
sound_on = Output(18)

sound_on.on()

up_down.on()

def blink_out(out:Output):
    print(out)
    print("value -> ", out.value)
    if out.value == 1:
        out.off()
    else: 
        out.on()

cont = 1

while True:
    if(cont == 200):
        blink_out(up_down)
        cont=0
    
    blink_out(inc)
    cont+=1
    print(cont)
    sleep(0.5)

    

