#include <SoftwareSerial.h> // TX RX software library for bluetooth
#include <Servo.h> // servo library 
#include <SPI.h>
#include <MFRC522.h>
#include <Servo.h>
#define SS_PIN 10
#define RST_PIN 9
#define LED_G 0 //define green LED pin
#define LED_R 1 //define red LED
MFRC522 mfrc522(SS_PIN, RST_PIN);   // Create MFRC522 instance.
Servo myservo; // servo name
int bluetoothTx = 4; // bluetooth tx to 10 pin
int bluetoothRx = 5; // bluetooth rx to 11 pin
SoftwareSerial bluetooth(bluetoothTx, bluetoothRx);
void setup()
{
  myservo.attach(3); // attach servo signal wire to pin 9 //Setup usb serial connection to computer
  myservo.write(0); //servo start position
  Serial.begin(9600);//Setup Bluetooth serial connection to android
  bluetooth.begin(9600);
  SPI.begin();      // Initiate  SPI bus
  mfrc522.PCD_Init();   // Initiate MFRC522
  pinMode(LED_G, OUTPUT);
  pinMode(LED_R, OUTPUT);
  Serial.println("Put your card to the reader...");
  Serial.println();
}
void loop()
{
  //Read from bluetooth and write to usb serial
  if(bluetooth.available()> 0 ) // receive number from bluetooth
  {
    int servopos = bluetooth.read(); // save the received number to servopos
    Serial.println(servopos); // serial print servopos current number received from bluetooth
    myservo.write(servopos); // roate the servo the angle received from the android app
  }
  // Look for new cards
  if ( ! mfrc522.PICC_IsNewCardPresent()) 
  {
    return;
  }
  // Select one of the cards
  if ( ! mfrc522.PICC_ReadCardSerial()) 
  {
    return;
  }
  //Show UID on serial monitor
  Serial.print("UID tag :");
  String content= "";
  byte letter;
  for (byte i = 0; i < mfrc522.uid.size; i++) 
  {
     Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
     Serial.print(mfrc522.uid.uidByte[i], HEX);
     content.concat(String(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " "));
     content.concat(String(mfrc522.uid.uidByte[i], HEX));
  }
  Serial.println();
  Serial.print("Message : ");
  content.toUpperCase();
  if (content.substring(1) == "06 D0 25 F8") //change here the UID of the card/cards that you want to give access
  {
    Serial.println("Authorized access");
    Serial.println();
    delay(500);
    digitalWrite(LED_G, HIGH); 
    delay(300);
    myservo.write(180);
    delay(3000);
    myservo.write(0);
    digitalWrite(LED_G, LOW);
  }
 else   {
    Serial.println(" Access denied");
    digitalWrite(LED_R, HIGH);
    delay(500);
    digitalWrite(LED_R, LOW);
  }
}
