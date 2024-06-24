/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package generatorpassword;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import javax.swing.JOptionPane;

/**
 *
 * @author acer
 */
public class GeneratorPassword {
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
         generatePassword();
    }
    
    public static void generatePassword() {
        Scanner scanner = new Scanner(System.in);

        int tam = Integer.parseInt(JOptionPane.showInputDialog("Introduzca el tamaño de la contraseña: "));
        String may = JOptionPane.showInputDialog("Escriba SI o NO ¿Desea agregar mayúsculas a la contraseña: ");
        String num = JOptionPane.showInputDialog("Escriba SI o NO ¿Desea agregar números a la contraseña: ");
        String car = JOptionPane.showInputDialog("Escriba SI o NO ¿Desea agregar caracteres especiales a la contraseña: ");


        String password = "";
        String caracteres = "abcdefghijklmnopqrstuvwxyz";

        if (may.equalsIgnoreCase("SI")) {
            caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (num.equalsIgnoreCase("SI")) {
            caracteres += "0123456789";
        }

        if (car.equalsIgnoreCase("SI")) {
            caracteres += "!#$%&/()@-_.";
        }

        for (int i = 0; i < tam; i++) {
            password = password + caracteres.charAt((int) (Math.random() * caracteres.length()));
        }
        
        JOptionPane.showMessageDialog(null, "Contraseña generada con exito. Consulte el archivo password.txt");
        
        // Ahora, vamos a escribir la contraseña en un archivo txt
        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter("password.txt"));
            writer.write(password);
            writer.close();
            System.out.println("Contraseña guardada en password.txt");
        } catch (IOException e) {
            System.err.println("Error al escribir la contraseña en el archivo.");
        }
    }
    
}
