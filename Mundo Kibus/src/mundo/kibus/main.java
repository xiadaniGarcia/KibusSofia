/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mundo.kibus;

import javax.swing.JFrame;

/**
 *
 * @author sofirob23
 */
public class main {
    
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        MundoKibus mk = new MundoKibus();
        JFrame frame = new JFrame();
        frame.setSize(700,500);
         
        frame.setLayout(null);
        frame.add(mk);
        frame.setVisible(true);
    }
    
}
