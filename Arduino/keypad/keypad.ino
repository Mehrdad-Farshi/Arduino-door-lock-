#include <Servo.h>
#include <Keypad.h>

Servo ServoMotor;
char* password = "123";  // change the password here, just pick any 3 numbers
int position = 0;
const byte ROWS = 4;
const byte COLS = 4;
char keys[ROWS][COLS] = {
{'1','2','3','A'},
{'4','5','6','B'},
{'7','8','9','C'},
{'*','0','#','D'}
/*int RedpinLock = 12;
int GreenpinUnlock = 13;*/
};

byte rowPins[ROWS] = {A0,A1,A2,A3};
byte colPins[COLS]  = {A4,A5,7,6};


void setup()
{
ServoMotor.attach(3);
LockedPosition(true);
}

void loop()
{
char key = keypad.getKey();
if (key == '*' || key == '#')
{
position = 0;
LockedPosition(true);
}
if (key == password[position])
{
position ++;
}
if (position == 3)
{
LockedPosition(false);
}
delay(100);
}
void LockedPosition(int locked)
{
if (locked)
{
digitalWrite(RedpinLock, HIGH);
digitalWrite(GreenpinUnlock, LOW);
ServoMotor.write(11);
}
else
{
digitalWrite(RedpinLock, LOW);
digitalWrite(GreenpinUnlock, HIGH);
ServoMotor.write(0);
}
}
