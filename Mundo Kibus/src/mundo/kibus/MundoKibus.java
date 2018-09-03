/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mundo.kibus;

import java.awt.Dimension;
import java.awt.GridLayout;
import javax.swing.JButton;
import javax.swing.JPanel;

/**
 *
 * @author sofirob23
 */
public class MundoKibus extends JPanel  {
    public MundoKibus() {
        super();
        
        this.setSize(new Dimension(500, 500));
        this.setBounds(0, 0, 500, 500);
        this.setVisible(true);
        this.setLayout(new GridLayout(15, 15));
        JButton jb = new JButton();
        this.add(jb);

    }
}
